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

// rou-1

const argsMap = new Map([[1388454396,{"a":".p-b-30"}],[352871354,{"a":"#banner1,\n#banner5,\n#banner6,\n#banner8_singlebottom,\n#logorow > a[style=\"margin-left:30px\"],\n#meteo,\n.floating,\ndiv.ric.richmedia"}],[735943892,{"a":"#hightopbanner"}],[298046060,{"a":".adv"}],[1960998263,{"a":"div.d2011-block-lateral-middle:has(a[href*=\"voceabasarabiei.net\"])"}],[743013784,{"a":".banner"}],[739807959,{"a":"#idvop_fbl"}],[954410534,{"a":".adds"}],[781659872,{"a":".banner-img"}],[986379269,{"a":"#Wbanner300x250 > .maxima_zilei"}],[52462664,{"a":".numbers-promo-placeholder"}],[480175284,{"a":"[href*=\"?utm_source=\"]"}],[445189238,{"a":"[href*=\"/?utm_source=cetateanul\"]"}],[1284203173,{"a":".background-image-clickable"}],[1274130184,{"a":".height-300"}],[1053822454,{"a":"#sam_branding"}],[766755137,{"a":"[id*=\"ads\"],\n[id^=\"banner\"]"}],[952822012,{"a":"#gabfire_simplead_widget-10,\n#gabfire_simplead_widget-4,\n#gabfire_simplead_widget-8"}]]);

const hostnamesMap = new Map([["7media.md",1388454396],["curentul.md",[352871354,735943892]],["tribuna.md",735943892],["hotnews.md",298046060],["istoria.md",1960998263],["poliexpert.md",743013784],["inturda.ro",743013784],["mobilissimo.ro",743013784],["stiripesurse.ro",743013784],["protv.md",739807959],["radiochisinau.md",954410534],["shok.md",781659872],["stirinonstop.md",[986379269,52462664]],["timpul.md",52462664],["buzau.net",480175284],["cetateanul.net",445189238],["newsromania.net",1284203173],["romaniatv.net",[1274130184,1053822454]],["playtech.ro",1053822454],["saptamana.net",766755137],["satmareanul.net",952822012]]);

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
