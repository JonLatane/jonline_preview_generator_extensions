/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

    The scriptlets below are meant to be injected only into a
    web page context.
*/

/* jshint esversion:11 */

'use strict';

/******************************************************************************/

/// name json-prune

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// default

const argsMap = new Map([[119134763,{"a":["[].playerResponse.adPlacements [].playerResponse.playerAds playerResponse.adPlacements playerResponse.playerAds adPlacements playerAds"]}],[1985832587,{"a":["enabled","force_disabled"]}],[2014171899,{"a":["adBlockWallEnabled"]}],[1253350309,{"a":["enabled","config"]}],[641089686,{"a":["data.reg"]}],[595311536,{"a":["0"]}],[829144542,{"a":["adtagparameter","enabled"]}],[126455789,{"a":["Playlist.ContentBreaks"]}],[151904602,{"a":["adRenderers"]}],[1608140231,{"a":["value.media.ad_breaks"]}],[1268313802,{"a":["data.[].vast_url"]}],[1616198816,{"a":["data.meta.require_addon data.meta.require_captcha data.meta.require_notifications data.meta.require_og_ads data.meta.require_video data.meta.require_web data.meta.require_related_topics"]}],[1777469897,{"a":["ad_fallback"]}],[692778144,{"a":["enabled","testhide"]}],[991735341,{"a":["adParam"]}],[382488073,{"a":["movie.advertising.ad_server"]}],[1524215987,{"a":["adProvider"]}],[254442093,{"a":["ad"]}],[555699890,{"a":["playlist.movie.advertising.ad_server"]}],[259281037,{"a":["ad_pods.0.ads.0.segments.0.media ad_pods.1.ads.1.segments.1.media ad_pods.2.ads.2.segments.2.media ad_pods.3.ads.3.segments.3.media ad_pods.4.ads.4.segments.4.media ad_pods.5.ads.5.segments.5.media ad_pods.6.ads.6.segments.6.media ad_pods.7.ads.7.segments.7.media ad_pods.8.ads.8.segments.8.media"]}],[1726702450,{"a":["ads.servers.[].apiAddress"]}],[1774563428,{"a":["meta.advertise"]}],[1748037598,{"a":["movie.advertising.ad_server playlist.movie.advertising.ad_server"]}],[1580181926,{"a":["testadtags ad"]}],[836574908,{"a":["videos"]}],[981972717,{"a":["config.globalInteractions.[].bsData"]}]]);

const hostnamesMap = new Map([["youtube.com",119134763],["youtubekids.com",119134763],["youtube-nocookie.com",119134763],["chip.de",1985832587],["focus.de",1985832587],["bild.de",2014171899],["spiegel.de",1253350309],["play.history.com",641089686],["video.gjirafa.com",595311536],["winfuture.de",829144542],["itv.com",126455789],["funimation.com",151904602],["crunchyroll.com",1608140231],["vvvvid.it",1268313802],["linkvertise.com",1616198816],["giga.de",1777469897],["tv2.no",692778144],["doomovie-hd.com",991735341],["player.pl",382488073],["sonyliv.com",1524215987],["qq.com",254442093],["tvn24.pl",555699890],["art19.com",259281037],["domoplus.pl",1726702450],["kuchniaplus.pl",1726702450],["miniminiplus.pl",1726702450],["teletoonplus.pl",1726702450],["vlive.tv",1774563428],["tvn.pl",1748037598],["player.stv.tv",1580181926],["utreon.com",836574908],["stories.los40.com",981972717]]);

/******************************************************************************/

//  https://github.com/uBlockOrigin/uBlock-issues/issues/1545
//  - Add support for "remove everything if needle matches" case

const scriptlet = (
    rawPrunePaths = '',
    rawNeedlePaths = ''
) => {
    const prunePaths = rawPrunePaths !== ''
        ? rawPrunePaths.split(/ +/)
        : [];
    let needlePaths;
    if ( prunePaths.length === 0 ) { return; }
    needlePaths = prunePaths.length !== 0 && rawNeedlePaths !== ''
        ? rawNeedlePaths.split(/ +/)
        : [];
    const findOwner = function(root, path, prune = false) {
        let owner = root;
        let chain = path;
        for (;;) {
            if ( typeof owner !== 'object' || owner === null  ) {
                return false;
            }
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                if ( prune === false ) {
                    return owner.hasOwnProperty(chain);
                }
                if ( chain === '*' ) {
                    for ( const key in owner ) {
                        if ( owner.hasOwnProperty(key) === false ) { continue; }
                        delete owner[key];
                    }
                } else if ( owner.hasOwnProperty(chain) ) {
                    delete owner[chain];
                }
                return true;
            }
            const prop = chain.slice(0, pos);
            if (
                prop === '[]' && Array.isArray(owner) ||
                prop === '*' && owner instanceof Object
            ) {
                const next = chain.slice(pos + 1);
                let found = false;
                for ( const key of Object.keys(owner) ) {
                    found = findOwner(owner[key], next, prune) || found;
                }
                return found;
            }
            if ( owner.hasOwnProperty(prop) === false ) { return false; }
            owner = owner[prop];
            chain = chain.slice(pos + 1);
        }
    };
    const mustProcess = function(root) {
        for ( const needlePath of needlePaths ) {
            if ( findOwner(root, needlePath) === false ) {
                return false;
            }
        }
        return true;
    };
    const pruner = function(o) {
        if ( mustProcess(o) === false ) { return o; }
        for ( const path of prunePaths ) {
            findOwner(o, path, true);
        }
        return o;
    };
    JSON.parse = new Proxy(JSON.parse, {
        apply: function() {
            return pruner(Reflect.apply(...arguments));
        },
    });
    Response.prototype.json = new Proxy(Response.prototype.json, {
        apply: function() {
            return Reflect.apply(...arguments).then(o => pruner(o));
        },
    });
};

/******************************************************************************/

let hn;
try { hn = document.location.hostname; } catch(ex) { }
while ( hn ) {
    if ( hostnamesMap.has(hn) ) {
        let argsHashes = hostnamesMap.get(hn);
        if ( typeof argsHashes === 'number' ) { argsHashes = [ argsHashes ]; }
        for ( const argsHash of argsHashes ) {
            const details = argsMap.get(argsHash);
            if ( details.n && details.n.includes(hn) ) { continue; }
            try { scriptlet(...details.a); } catch(ex) {}
        }
    }
    if ( hn === '*' ) { break; }
    const pos = hn.indexOf('.');
    if ( pos !== -1 ) {
        hn = hn.slice(pos + 1);
    } else {
        hn = '*';
    }
}

/******************************************************************************/

argsMap.clear();
hostnamesMap.clear();

/******************************************************************************/

})();

/******************************************************************************/
