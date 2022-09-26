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

const argsMap = new Map([[1485930800,{"a":"#main_content_section > table:nth-of-type(1),\n#main_content_section > table:nth-of-type(2),\nbody > center:nth-of-type(2)"}],[1826367445,{"a":".SC_TBlock"}],[1890254157,{"a":".hidden-mobile"}],[1447454513,{"a":"#divAdLeft,\n#divAdRight"}],[2112776545,{"a":".container.bn-a2,\n.container.hidden-xs div[class^=\"col-\"][align=\"right\"],\n.visible-lg.visible-xl iframe,\na[href^=\"http://www.thaimobilecenter.com/ad_click\"],\niframe[src^=\"../banner/google_adsense\"],\niframe[src^=\"../includes/inc_banner\"]"}],[899122864,{"a":"#header-friends,\n#home-friends-1"}],[1676488811,{"a":".adv2col,\n.adv3col,\n.banner_728_90"}],[1693859664,{"a":".jinda-content-block,\n.jinda-facebook-like-box,\n.jinda-overlay-background,\n.jinda-wrapper"}],[809278360,{"a":".container .item > a[href*=\"/index.php?/stats/clickAdd\"],\na[href*=\"index.php?/stats/clickAdd/\"],\ndiv[id^=\"adsbanner\"]"}],[1739992675,{"a":".mod_banner,\n.mod_banner_top"}],[1272369268,{"a":".bn_mb,\n.bn_pc,\n.post-contentarea .rpv .block-preload #block_preload p a[href*=\"gclub-casino.net\"]"}],[257434091,{"a":"a[href*=\"http://45.gs\"],\ncenter center a"}],[1238305642,{"a":".bottomad,\n.jquery-modal.blocker,\n.td-front-end-display-block,\n.topad"}],[893387504,{"a":".card-cookie"}]]);

const hostnamesMap = new Map([["www.thaiboyslove.com",1485930800],["thaihitz.com",1826367445],["thaijobsgov.com",[1826367445,1890254157]],["thailandbestbeauty.com",1447454513],["thaimobilecenter.com",2112776545],["thaivisa.com",899122864],["thaiza.com",1676488811],["thetechr.com",1693859664],["thisisgamethailand.com",[809278360,1739992675]],["tigthai.com",1739992675],["thmovieshd.com",1272369268],["toonzaa.com",257434091],["toritalk.com",1238305642],["vroom.truevirtualworld.com",893387504]]);

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
