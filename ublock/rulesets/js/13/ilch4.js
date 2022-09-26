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

const argsMap = new Map([[2037067852,{"a":".warnadblk"}],[649223868,{"a":".md-ub"}],[79171109,{"a":".adocean-billboard"}],[2087937486,{"a":".blocked"}],[1189430628,{"a":".products-set-items"}],[452103391,{"a":".pane-type-vad.pane-gilad-vertical-rad"}],[547350071,{"a":".login"}],[889699259,{"a":".external-entity-container.yieldriser"}],[1486738371,{"a":".phpbb-ads-center"}],[142244046,{"a":"[href=\"https://how2play.pl/wylacz-adblocka/\"],#custom_html-3"}],[720858644,{"a":"#adb"}],[1197084037,{"a":".m-puppies-detector"}]]);

const hostnamesMap = new Map([["fly4free.pl",2037067852],["gazetakrakowska.pl",649223868],["geekweek.pl",79171109],["gilotynka.pl",2087937486],["www.glamour.pl",1189430628],["goryiludzie.pl",452103391],["gragieldowa.pl",547350071],["gram.pl",889699259],["gry-planszowe.pl",1486738371],["how2play.pl",142244046],["ikorektor.pl",720858644],["sucharry.pl",720858644],["imged.pl",1197084037]]);

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
