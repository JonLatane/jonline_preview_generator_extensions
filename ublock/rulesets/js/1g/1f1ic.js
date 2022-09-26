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

const argsMap = new Map([[970915706,{"a":"#financial_widget > .financial_widget_top_line.financial_widget_line > .financial_widget_top_line_medium.financial_widget_line_medium > .peiraios_link[href=\"http://www.piraeusbankgroup.com/\"],\nEMBED#mymovie"}],[528460241,{"a":".connxtvscroll"}],[251327871,{"a":"#AdPremiumSticky"}],[943865564,{"a":"A[href*=\"ad-emea.doubleclick.net/click\"],\nIMG[src*=\"ad-emea.doubleclick.net/\"]"}],[1520547923,{"a":"IMG[src=\"images/728_generic_betnow.gif\"]"}],[48770527,{"a":"a[href=\"http://www.kratisinow.gr\"],\niframe[src=\"http://kratisinow.digitup.eu/widget/widget-artists\"]"}],[237636585,{"a":"#page-body-header,\n#sidebar-one"}],[1289108010,{"a":"#text-19"}],[986294031,{"a":"#block-kentroxenonglossonlogos,\n#headline"}],[1863463616,{"a":"#skin-container"}]]);

const hostnamesMap = new Map([["voria.gr",970915706],["womenonly.gr",528460241],["www.xo.gr",251327871],["zoomnews.gr",943865564],["gamato.info",1520547923],["||www.dwrean.net",48770527],["fileleutheros.net",237636585],["pitsirikos.net",1289108010],["anagnostis.org",986294031],["luben.tv",1863463616]]);

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
