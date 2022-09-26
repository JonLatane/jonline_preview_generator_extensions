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

const argsMap = new Map([[403996925,{"a":".bookingaff,\n.widget_sp_image,\n.widget_sp_image-image-link"}],[546991652,{"a":"[href=\"https://www.priboisiasociatii.ro/\"]"}],[344994840,{"a":".banda-sticky-mini,\n.banda-sticky-vp"}],[1530369927,{"a":"div.ad"}],[127300555,{"a":"#foot-ad-wrap,\n#leader-wrap,\n.lazyloaded.alignnone"}],[668698289,{"a":"[class*=\"e3lan\"]"}],[1288867278,{"a":"[href*=\"adclick\"]"}],[2039231148,{"a":"[href*=\"/adclick.php\"],\n[href^=\"https://www.bursa.ro\"]"}],[1999630191,{"a":"#mvp-leader-wrap"}],[148279247,{"a":"#optional_banner,\n[class^=\"custom_module add\"]"}],[1471498230,{"a":"#pub-top-container"}],[737229981,{"a":"[href^=\"//www.techinstyle.ro/\"]"}],[1510499752,{"a":".widget_text.text-124.widget,\n[href=\"http://stefanovidiu.ro/\"],\n[href=\"https://www.ecrgroup.eu/\"],\n[href=\"https://www.expresorul.ro/\"]"}]]);

const hostnamesMap = new Map([["zch.ro",403996925],["zero-accidente.ro",546991652],["zf.ro",344994840],["ziardecluj.ro",1530369927],["ziarul21.ro",127300555],["ziarulargesul.ro",668698289],["ziaruldeiasi.ro",1288867278],["ziarulevenimentul.ro",2039231148],["ziarulunirea.ro",1999630191],["ziuaconstanta.ro",148279247],["ziuanews.ro",1471498230],["zonait.ro",737229981],["nasul.tv",1510499752]]);

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
