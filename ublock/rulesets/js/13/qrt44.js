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

// svn-0

const argsMap = new Map([[1518207593,{"a":".td-is-sticky.tdc-column"}],[128604748,{"a":"onl-microsite"}],[1086247813,{"a":".floatingProductContainer,\na[href^=\"https://www.ceneje.si/Redirect/Deeplink\"] > .productBoxGrid"}],[161221996,{"a":".sfsi_outr_div"}],[1967208015,{"a":"div[class^=\"banner-square-\"]"}],[985475714,{"a":"#banner-seminarji"}],[134751583,{"a":".ekosistem,\n.read-also-block"}],[125403940,{"a":".article__social--top,\n.dfp_banner"}],[1793295174,{"a":"#gkSidebar > .nomargin.box"}],[1182153626,{"a":"#app-messages,\n.article-related:nth-of-type(2)"}],[121717311,{"a":".opened"}],[617448945,{"a":"#topBanner"}],[306038789,{"a":".lokalnoBox"}],[665338964,{"a":".lg\\:mb-0"}]]);

const hostnamesMap = new Map([["bodieko.si",1518207593],["cekin.si",128604748],["ceneje.si",1086247813],["ciklon.si",161221996],["citymagazine.si",1967208015],["data.si",985475714],["delo.si",134751583],["svetkapitala.delo.si",125403940],["demokracija.si",1793295174],["dnevnik.si",1182153626],["dobrakarma.si",[121717311,617448945]],["podarimo.si",617448945],["dolenjskilist.si",306038789],["dominvrt.si",665338964]]);

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
