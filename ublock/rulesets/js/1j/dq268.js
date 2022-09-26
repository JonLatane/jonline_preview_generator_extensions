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

// grc-0

const argsMap = new Map([[1219055108,{"a":"#stoiximan-cont > a[href^=\"http://www.stoiximan.gr\"] > img,\n#top_story_wrap > .grid_12 > div:nth-of-type(8) > a[href^=\"https://www.stoiximan.gr\"]"}],[351569378,{"a":"[href*=\"adman.gr\"]"}],[1858696224,{"a":"#first-big-banner,\n.module-shadow"}],[1667752978,{"a":"A.sponsLink"}],[1722251319,{"a":"#sma-banner-wide,\n#sponsors-mainmodule"}],[568616854,{"a":"A[href*=\"http://www.bet-at-home.com/\"]"}],[179146520,{"a":".side,\n.static"}],[1972600497,{"a":".cart-reminder"}],[805924174,{"a":"#advsliding352,\ndiv[class=\"agores\"]"}],[201478190,{"a":".deal"}],[28694802,{"a":"DIV#advsliding258"}],[1540352709,{"a":"#custom_html-11,\n#custom_html-14,\n#custom_html-17,\n#custom_html-24,\n#custom_html-25,\n#custom_html-30,\n#custom_html-4,\n#custom_html-6,\n.afterheader,\n.background-cover,\n.custom-html-widget,\n.e3lan-top"}],[1729432633,{"a":"#header-sidebar,\n#sidebar,\n.wpb_single_image:not(#printCover)"}],[339760053,{"a":".attachment-full.aligncenter"}]]);

const hostnamesMap = new Map([["www.contra.gr",[1219055108,351569378]],["www.news247.gr",351569378],["www.sport24.gr",351569378],["corfuland.gr",1858696224],["cosmo.gr",1667752978],["cretalive.gr",1722251319],["derby.gr",568616854],["gazzetta.gr",568616854],["dokari.gr",179146520],["www.e-food.gr",1972600497],["e-go.gr",[805924174,201478190]],["ethnos.gr",201478190],["imerisia.gr",201478190],["new.e-go.gr",28694802],["e-ptolemeos.gr",1540352709],["e-thessalia.gr",1729432633],["efsyn.gr",339760053]]);

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
