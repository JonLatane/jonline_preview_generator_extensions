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

// isr-0

const argsMap = new Map([[1788632605,{"a":"#paywall-promotion-banner,\n.footer-ruler,\n.footer-ruler--containter,\n.js-modal,\n.js-subscription-popups,\n[data-back=\"promotional-content\"],\n[height=\"250\"][width=\"970\"],\n[id*=\"div-gpt-ad\"],\n[width=\"300\"][height=\"250\"],\na[href*=\"://paid.outbrain.com/network/redir?\"][target=\"_blank\"],\na[href*=\"gampad/clk\"],\na[onmousedown*=\"://paid.outbrain.com/network/redir?\"][target=\"_blank\"],\ndiv[class*=\"Banner\"],\ndiv[class*=\"banner\"],\niframe[data-origin],\niframe[width=\"300\"]"}],[1164880993,{"a":"#top_banners"}],[775270767,{"a":"#header_banner_wrapper"}],[894688155,{"a":"#sideban"}],[2101871127,{"a":"td[background^=\"/images/commercials\"]"}],[554590700,{"a":".sidebannerads"}],[37620680,{"a":".show.youMightAlsoLike,\n.taboola-wrapper,\n[class^=\"TimeLinestyles__StyledAdWrap\"]"}],[1409765309,{"a":".TopBanner"}],[1571842949,{"a":".first.advertizement"}],[1815558606,{"a":".arti-banners"}]]);

const hostnamesMap = new Map([["themarker.com",[1788632605,1164880993]],["haaretz.co.il",[1788632605,1164880993]],["homeprices.yad2.co.il",1164880993],["pricelist.yad2.co.il",1164880993],["pro.yad2.co.il",1164880993],["tiuli.com",775270767],["yeshanews.com",894688155],["lib.cet.ac.il",2101871127],["0404.co.il",554590700],["13news.co.il",37620680],["13tv.co.il",37620680],["2net.co.il",1409765309],["auto.co.il",1409765309],["calendar.2net.co.il",1571842949],["93fm.co.il",1815558606],["ch10.co.il",1815558606]]);

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
