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

const argsMap = new Map([[1466928830,{"a":".square"}],[492411266,{"a":"#box-over-content-a"}],[1008377290,{"a":".design-advert-placeholder,\n.design-box--jobs"}],[1787366506,{"a":"#box-3,\n#rbackground-link,\ndiv[id*=\"reklama\"]"}],[757715756,{"a":".banns-group"}],[1771002746,{"a":"#block-nodesinblock-0"}],[221096366,{"a":".header_banner"}],[83934803,{"a":"div[id^=\"mp_banner_\"]"}],[133690076,{"a":".scroll_banner"}],[636822209,{"a":".banner,.left-side-banner,.right-side-banner,\na[trgurl],a[href*=\"relocate.php\"]"}],[949568089,{"a":".komerce"}],[1734264314,{"a":".npab"}]]);

const hostnamesMap = new Map([["lamer.cz",1466928830],["moda.cz",1466928830],["livesport.cz",492411266],["lupa.cz",1008377290],["root.cz",1008377290],["matematika.cz",1787366506],["mediar.cz",757715756],["medop.cz",1771002746],["menicka.cz",221096366],["meteoprog.cz",83934803],["mladypodnikatel.cz",133690076],["motorkari.cz",636822209],["mrk.cz",949568089],["nasepraha.cz",1734264314]]);

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
