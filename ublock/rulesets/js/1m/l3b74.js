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

// bgr-0

const argsMap = new Map([[1688450548,{"a":"#banner_right_bottom,\n#banner_right_middle,\n#banner_right_top,\n#fb_likeBox,\n.ads-caption,\n.left_brand,\n.right_brand,\n.top-banner.text-center"}],[1599933927,{"a":"#banner_top"}],[1569990787,{"a":"#brand"}],[1413038879,{"a":"#mainscollertd"}],[1349906073,{"a":"#flygrabo,\n#flyoffer_text,\n#leftbrand,\n#rightbrand"}],[360483096,{"a":".left-sidebar-banner.box,\ndiv[style=\"width: 728px; height: 90px; overflow: hidden;\"]"}],[1719828155,{"a":"#bannersdesktop"}],[10457331,{"a":"#banner_right"}],[943581877,{"a":"#flash_big,\nDIV[style=\"width:670px; height:120px; left:0px; right:0px; margin-bottom:20px\"]"}],[735136506,{"a":"#banner_show"}],[1854670052,{"a":"#adwbann_0,\n#adwbann_1,\n#booking-widget-slider,\n.astralBlock,\n.ecoHomeWeber"}],[1220803585,{"a":"#baners_top"}],[1835207801,{"a":"#block-panels-mini-leaderboard-banners"}],[898469798,{"a":".main-widget.google_adds.google_adds300x250"}],[1542522499,{"a":"#bottom-s300,\n#top-s300"}],[346856914,{"a":".g300x600single"}]]);

const hostnamesMap = new Map([["petel.bg",[1688450548,1599933927]],["programata.bg",[1599933927,10457331]],["photo-forum.net",1599933927],["pik.bg",1569990787],["zajenata.bg",1569990787],["plevenzapleven.bg",1413038879],["plovdiv24.bg",1349906073],["pozvanete.bg",360483096],["pravatami.bg",1719828155],["recepty.bg",943581877],["remix.bg",735136506],["sinoptik.bg",1854670052],["ticketpro.bg",1220803585],["topnovini.bg",1835207801],["sofia.topnovini.bg",1835207801],["tribune.bg",898469798],["troll.bg",1542522499],["try.bg",346856914]]);

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
