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

// cze-0

const argsMap = new Map([[275705368,{"a":"[class*=\"advertisement\"]"}],[845479580,{"a":"pp"}],[1175676218,{"a":".right"}],[1259872960,{"a":"div[style^=\"float:left;width:468px;\"] + img[src^=\"data:image/gif;base64,\"]"}],[132136283,{"a":".advtick"}],[945395766,{"a":"a[class^=\"levakolejroku\"],\na[class^=\"pravakolejroku\"]"}],[694669910,{"a":"#leaderBox,\n.sticky-wrapper"}],[2077298291,{"a":"#fixedMenu,\n#rek3,\n#rodkaz"}],[1666152698,{"a":".body_message--ad"}],[294985250,{"a":".roumingLista"}],[1819599138,{"a":"#pvMid"}],[581229332,{"a":"a[href^=\"https://prehrajto.cz/?cc=prlbmso2\"]"}]]);

const hostnamesMap = new Map([["netconcert.cz",275705368],["onlymen.cz",845479580],["osel.cz",1175676218],["parabola.cz",1259872960],["pravidla.cz",132136283],["primat.cz",945395766],["reflex.cz",694669910],["ronnie.cz",2077298291],["forum.root.cz",1666152698],["rouming.cz",294985250],["sauto.cz",1819599138],["serialycz.cz",581229332]]);

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
