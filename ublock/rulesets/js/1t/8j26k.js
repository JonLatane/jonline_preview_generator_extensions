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

// tha-0

const argsMap = new Map([[385696109,{"a":"#AdAsia,\n#uniads,\n.in.fade.modal-backdrop,\n.modal"}],[1212869992,{"a":".google-ads,\ndiv[id^=\"_bz_boxlike\"]"}],[493540901,{"a":".wppaszone,\ndiv[data-title=\"Home popup\"]"}],[2137054452,{"a":"#ads_top_content,\n#todaytable > div:nth-of-type(3),\n#todaytable > div:nth-of-type(5),\n#todaytable > div:nth-of-type(7),\n.ajax-banner,\n.banner-clear.banner-logo.ajax-banner.topbanner,\n.topbanner"}],[948694275,{"a":".YouTubeModal"}],[715916010,{"a":"div a[href*=\"compgamer.com/mario-ads/\"]"}],[865042704,{"a":"#banner"}],[1729012298,{"a":"#download-vdo,\na[rel*=\"nofollow\"] > img"}],[1126987329,{"a":"#floating_banner_top,\n.img-thumbnail:not([src^=\"https://animedd.xyz/\"]),\n[href*=\"casino\"],\n[src=\"https://i.imgur.com/5Q894WW.jpg\"]"}]]);

const hostnamesMap = new Map([["tnews.co.th",385696109],["autocar.in.th",1212869992],["gamegeek.in.th",493540901],["goal.in.th",2137054452],["mustplay.in.th",948694275],["tgpl.in.th",715916010],["goshujin.tk",865042704],["donung.tv",1729012298],["animedd.xyz",1126987329]]);

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
