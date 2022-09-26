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

const argsMap = new Map([[856188489,{"a":".modal__body-adblock"}],[1402348608,{"a":"#greeting"}],[35669471,{"a":".adblock"}],[1674914508,{"a":"#deadblocker_success_dialog"}],[48062257,{"a":"#HTML1"}],[2088594168,{"a":"#rba2"}],[92300722,{"a":"#abinfo"}],[1425846872,{"a":"#cleader"}],[337795751,{"a":".header-ad,.ABD_display_adblock.ABD_display"}],[483050733,{"a":".czarobox"}],[1405096007,{"a":".baner-bottom-section"}],[391665729,{"a":".contop + [style*=\"border:2px solid;\"],.consid + [style*=\"border:2px solid;\"]"}]]);

const hostnamesMap = new Map([["autokult.pl",856188489],["fotoblogia.pl",856188489],["gadzetomania.pl",856188489],["komorkomania.pl",856188489],["medycyna24.pl",856188489],["smaczneblogi.pl",856188489],["wp.pl",856188489],["benchmark.pl",1402348608],["bieszczady.pl",35669471],["cda-online.pl",1674914508],["www.charakterek.pl",48062257],["chelsea24news.pl",2088594168],["altair.com.pl",92300722],["krs-online.com.pl",1425846872],["terrarium.com.pl",337795751],["comperia.pl",483050733],["cosplayjav.pl",1405096007],["czasdiet.pl",391665729]]);

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
