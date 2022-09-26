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

const argsMap = new Map([[1256463290,{"a":"#informacja2"}],[1347025854,{"a":".baner_top"}],[1158982771,{"a":".adBlockOverlay"}],[1134556679,{"a":".ban-71.ban"}],[1869301454,{"a":"#adBlock"}],[441242259,{"a":"#adnp,\n.header-adblock","n":["przegladsportowy.pl","medonet.pl","fakt.pl","forbes.pl","auto-swiat.pl","noizz.pl","plejada.pl","businessinsider.com.pl","komputerswiat.pl","onet.pl","vod.pl"]}],[46400820,{"a":".ads-checker-msg"}],[272721964,{"a":"[class*=\"ad_container\"] + div[class]"}],[984089137,{"a":"body > div:nth-of-type(1) > .alert-dismissable.alert-warning.alert"}],[311192297,{"a":"DIV[style=\"background-color:red;color:white;padding:10px;text-align:center;\"]"}],[1322566752,{"a":"[id*=\"ScriptRoot\"]"}],[1745099525,{"a":".adblInfo"}]]);

const hostnamesMap = new Map([["lubliniec.info",1256463290],["www.lubliniec.info",1347025854],["funkcje.net",1158982771],["wortale.net",1134556679],["histmag.org",1869301454],["pl",441242259],["12zawodnik.pl",46400820],["www.forum-wedkarskie.pl",46400820],["portal.abczdrowie.pl",272721964],["autokult.pl",272721964],["fotoblogia.pl",272721964],["komorkomania.pl",272721964],["pudelek.pl",272721964],["tv.pudelek.pl",272721964],["agcbytom.pl",984089137],["endurotrails.pl",984089137],["srebrnestawy.pl",984089137],["allekoszyk.pl",311192297],["animezone.pl",1322566752],["anyfiles.pl",1745099525]]);

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
