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

const argsMap = new Map([[646394048,{"a":".banner.b160x600"}],[168762343,{"a":"#PlazmaDiv,\n#TopBanner,\n#UcInsideRight_1_1_tblWidth,\n#divBanner,\n#divBannerRight,\ntable[bgcolor=\"#eeeeee\"][height=\"150\"],\ntable[width=\"100%\"][border=\"0\"][bgcolor=\"#EEEEEE\"][height=\"160\"],\ntd[width=\"237\"][style=\"background-color: #EEEEEE;\"]"}],[1158766305,{"a":"a[class*=\"one-article-strip\"]"}],[1715163526,{"a":"#bnrTop"}],[294397082,{"a":".ad-flat.ad"}],[1625913357,{"a":".adv-placeholder,\n.is-only-desktop.ad-container,\n.station-middle-ad"}],[922749087,{"a":"#topbannercontainer,\ndiv[style=\"width:100%;text-align:center;\"]"}],[129623589,{"a":".desktop-display > .maavaron"}],[1986596851,{"a":"[class^=\"banner\"]"}],[750814349,{"a":".viv"}]]);

const hostnamesMap = new Map([["netex.co.il",646394048],["news1.co.il",168762343],["one.co.il",1158766305],["psakdin.co.il",1715163526],["radio-head.co.il",294397082],["rlive.co.il",1625913357],["seret.co.il",922749087],["sheva7.co.il",129623589],["shoofoo.co.il",1986596851],["solitaire.co.il",750814349]]);

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
