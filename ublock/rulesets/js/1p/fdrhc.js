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
*/

/* jshint esversion:11 */

'use strict';

/******************************************************************************/

/// name css-specific

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// idn-0

const argsMap = new Map([[1395282746,{"a":"table"}],[1729017411,{"a":"#text-30 > .textwidget,\n#text-6 > .textwidget"}],[738267167,{"a":"#ffbp-bg,\n#ffbp-body,\n#ffbp-close"}],[2108466364,{"a":"[href^=\"http://linkalternatif.\"],\n[href^=\"https://tinyurl.com/\"]"}],[775023360,{"a":"a[rel^=\"nofollow noopener\"] > img[src$=\".gif\"]"}],[1543908740,{"a":"#ffbp,\n#popup"}],[1545469407,{"a":".add,\n.mobi.content-left,\n.mobi.content-right"}],[1731216913,{"a":"#wpb_overlay,\n.wpb-image-popup.wpb-main-wrapper"}],[2111752160,{"a":"#epmblock,\ndiv:nth-of-type(2) > div > .btn-block.btn-lg.btn-success.btn"}],[66417201,{"a":".hidden-xs"}],[55764968,{"a":".page > div:nth-of-type(4) > div:nth-of-type(1),\ndiv:nth-of-type(4) > div:nth-of-type(2)"}],[1662845375,{"a":".av-content-full,\n.glx-link,\n.glx-teaser"}],[1329606131,{"a":"[href=\"http://sbovn88.net/\"],\n[href=\"https://bolakantor.org/\"]"}],[1439018588,{"a":".adsincenter"}],[531508565,{"a":"#ftadsth"}],[949666268,{"a":"[href=\"http://dewanmas.com/\"],\n[href=\"http://menangvip.org/\"]"}],[986910378,{"a":"#player-side-left,\n[href=\"https://indoxplay.com/promosi/slots\"]"}],[1334338460,{"a":"#home-bnner-content"}],[571562537,{"a":"#home-bnner2-content,\n.reklam-goster-sag,\n.reklam-goster-sol"}],[2019992431,{"a":"#directorio > .random > center"}],[1151340581,{"a":"#sidebar_right > .side:nth-of-type(5) > .textwidget,\n#sidebar_right > .side:nth-of-type(6) > .textwidget,\n#sidebar_right > .side:nth-of-type(7) > .textwidget,\n#sidebar_right > .side:nth-of-type(8) > .textwidget,\n#sidebar_right > .side:nth-of-type(9) > .textwidget"}],[592272975,{"a":".bannerwrap"}],[1266200489,{"a":"#previewBox1"}],[1701193679,{"a":"#top-bnner-content"}],[189838188,{"a":".ads-big,\n.ads-foot,\n.ads-right2,\n.container_skinad,\n.mgidclsbanner"}],[460214419,{"a":".fancybox-skin"}],[700542812,{"a":".navbar-brand.bot,\ndiv[id^=\"previewBox\"]"}],[834044641,{"a":".banner-premium"}],[400333252,{"a":"[class=\"sc__wrp\"]"}],[613004546,{"a":"[href^=\"http://enakbet.link/\"]"}],[1958451648,{"a":"[href^=\"https://ligaciputra3.com\"]"}],[1195692488,{"a":".tutup.banner"}],[1698653964,{"a":"#content > div:nth-of-type(1)"}],[2023526123,{"a":"#sgpb-popup-dialog-main-div-wrapper,\n.sg-popup-builder-content"}]]);

const hostnamesMap = new Map([["satujiwa.org",1395282746],["videocrot.org",1729017411],["indoxxi.pictures",738267167],["bioskop168.pro",2108466364],["otakudesu.pro",775023360],["indoxx1.pw",1543908740],["file.rocks",1545469407],["lonteku.sbs",1731216913],["cmovieshd.se",[2111752160,66417201]],["ganool.se",2111752160],["hdfree.se",55764968],["myasiantv.se",1662845375],["filmbokep21.shop",1329606131],["ganol.si",1439018588],["mangaku.site",531508565],["idfl.top",949666268],["idxx1.top",986910378],["indoxxi.top",[1334338460,571562537]],["indoxxi.tv",[1334338460,1701193679]],["bioskopmovie.tv",2019992431],["cinemaindo.tv",1151340581],["elde.tv",592272975],["fb21.tv",1266200489],["xx1.tv",1701193679],["kompas.tv",189838188],["layarkaca21.tv",460214419],["lk21.tv",460214419],["ns21.tv",700542812],["ns21.us",700542812],["dewanonton.vip",834044641],["kurina.vip",400333252],["otakudesu.watch",613004546],["animexin.xyz",1958451648],["goblintv.xyz",1195692488],["indostreamings.xyz",1698653964],["kazemanga.xyz",2023526123]]);

/******************************************************************************/

let hn;
try { hn = document.location.hostname; } catch(ex) { }
const styles = [];
while ( hn ) {
    if ( hostnamesMap.has(hn) ) {
        let argsHashes = hostnamesMap.get(hn);
        if ( typeof argsHashes === 'number' ) { argsHashes = [ argsHashes ]; }
        for ( const argsHash of argsHashes ) {
            const details = argsMap.get(argsHash);
            if ( details.n && details.n.includes(hn) ) { continue; }
            styles.push(details.a);
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

if ( styles.length === 0 ) { return; }

try {
    const sheet = new CSSStyleSheet();
    sheet.replace(`@layer{${styles.join(',')}{display:none!important;}}`);
    document.adoptedStyleSheets = [
        ...document.adoptedStyleSheets,
        sheet
    ];
} catch(ex) {
}

/******************************************************************************/

argsMap.clear();
hostnamesMap.clear();

/******************************************************************************/

})();

/******************************************************************************/
