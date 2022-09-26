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

const argsMap = new Map([[689658740,{"a":".adwse-blockerr,.adwse-headerr"}],[997902323,{"a":".bladbl"}],[987883905,{"a":".info_add_block"}],[399218132,{"a":"#adblock_info"}],[920767359,{"a":"#ad-sts-top"}],[521368959,{"a":"#blockwarning"}],[1840599821,{"a":".box-22"}],[220254222,{"a":"#TXhkUvZljBCga"}],[1870191153,{"a":"[id$=\"-block-info\"]"}],[1332051539,{"a":"#adBlockDetectedMessage"}],[2019869103,{"a":"#fanimani-adb-notice"}],[1490382801,{"a":".d_utru"}]]);

const hostnamesMap = new Map([["dailyweb.pl",689658740],["darkw.pl",997902323],["darmowyskin.pl",987883905],["demotywatory.pl",399218132],["parezja.pl",399218132],["dieroten.pl",920767359],["dziennikelblaski.pl",521368959],["e-kursy-walut.pl",1840599821],["egarwolin.pl",220254222],["www.elektroda.pl",1870191153],["emstories.pl",1332051539],["fanimani.pl",2019869103],["filmweb.pl",1490382801]]);

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
