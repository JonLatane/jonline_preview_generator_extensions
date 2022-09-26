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

// pol-2

const argsMap = new Map([[641931192,{"a":".player-block-info"}],[106941743,{"a":".furgo,\nDIV[style*=\" background-color: rgb(0, 0, 0); \"],\na[href*=\"/kampania.php\"]"}],[967612614,{"a":".col-md-8 > div:nth-of-type(2),\n.contop"}],[1994206369,{"a":"#abl"}],[1568858303,{"a":".googleheader"}],[1639401098,{"a":".aside-ad-block"}],[2069404689,{"a":".box-block,.box-adv"}],[337032722,{"a":"#notifier"}],[1028070672,{"a":"div[class^=\"zpr_inside_\"][class*=\"placement__lazy\"]"}],[1043931052,{"a":"iframe[src^=\"https://reklama.shinden.eu/adpeeps.php?\"]"}],[1862738762,{"a":".visible.show-sweet-alert.sweet-alert"}],[1054621292,{"a":".blocked-info"}]]);

const hostnamesMap = new Map([["www.poradnikzdrowie.pl",641931192],["portel.pl",106941743],["przewodnikduchowy.pl",967612614],["ps3forum.pl",1994206369],["www.ps4forum.pl",1568858303],["pzkosz.pl",1639401098],["queer.pl",2069404689],["sadistic.pl",337032722],["se.pl",1028070672],["shinden.pl",1043931052],["skarzysko24.pl",1862738762],["stylunio.pl",1054621292]]);

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
