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

// isl-0

const argsMap = new Map([[1292115897,{"a":"#flexslider3,\n.auglysing_h1,\n.new-ads-slider,\n.new-ads-slider-small,\n.new-auglysing_h2,\n.stod_grein"}],[144518355,{"a":"#slot-668,\n#yfirhaus-ad,\n#yfirhaus-augl,\n.augl,\n.augl-parallax-frontpage,\n.augl-wide,\n.dlk-13,\n.dlk-23,\n.mt-5.mb-5"}],[931905449,{"a":"#floating-box-right,\n#footer_section_1,\n#text_mnky-2,\n#text_mnky-3,\n.g.g-2,\n.g.g-7,\n.su-column.su-column-1-3.su-column-style-1,\n.textwidget,\n.topz"}],[894918128,{"a":"#image-3,\n#text-113"}]]);

const hostnamesMap = new Map([["krom.is",1292115897],["mbl.is",144518355],["menn.is",931905449],["pjatt.is",894918128]]);

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
