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

const argsMap = new Map([[1105742442,{"a":".ui-dialog,.ui-widget,.ui-widget-content,.ui-corner-all,.ui-front,.ui-resizable,.ui-widget-overlay"}],[1967537570,{"a":".div_komentarz_zdjecie > [onclick*=\"adblock\"]"}],[1714850277,{"a":"#block_info_wrap"}],[1140404456,{"a":".diablo-placeholder"}],[1504823605,{"a":".diablo-placeholder-ADB,.diablo-placeholder"}],[295673050,{"a":"[class*=\"advert\"]"}],[1823340893,{"a":"#tvpoverlay_abdinfo,\n.adv__rectangle"}],[54260646,{"a":".hidden-phone.rectangleWrapper,\n.tp2thm.tp2thm-progress-midroll[style^=\"left\"]:empty"}],[165569111,{"a":"#modal,\n.modal-box"}],[949405788,{"a":".col > div"}],[1490608477,{"a":"#topbborlayer"}],[359215183,{"a":"#ct_i"}]]);

const hostnamesMap = new Map([["take-kino.pl",1105742442],["tapeciarnia.pl",1967537570],["trojmiasto.pl",1714850277],["trojmiasto.tv",1714850277],["tvdzierzgon.pl",1140404456],["tvregionalna24.pl",1140404456],["tvsztum.pl",1140404456],["zulawyimierzeja24.pl",1140404456],["tvmalbork.pl",1504823605],["tvnmeteo.tvn24.pl",295673050],["tvp.pl",1823340893],["vod.tvp.pl",54260646],["twojezaglebie.pl",165569111],["upflix.pl",949405788],["vitalia.pl",1490608477],["forum.vw-passat.pl",359215183]]);

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
