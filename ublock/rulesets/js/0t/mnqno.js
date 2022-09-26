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

const argsMap = new Map([[1750990365,{"a":"center"}],[1810358940,{"a":"#unblock-please"}],[761981682,{"a":"#osiemnascielat > div > h2:nth-of-type(2)"}],[380503651,{"a":".slot-right-container"}],[1435291760,{"a":".slot-top-container"}],[1995444921,{"a":".slot-top-container,.jqIJGM.styles__SlotRightContent-sc-13xebem-2,.dpOzCT.styles__SlotTopContainer-y3y7xh-0"}],[447902275,{"a":"div[style*=\"background-image: url(/images/info-peer.jpg);\"]"}],[1855524639,{"a":".adblock-info"}],[1282725450,{"a":".td-banner-wrap-full"}],[1404453019,{"a":".adBlockDetectModal,.swal2-fade"}],[581183306,{"a":".adb_plotek"}],[245629207,{"a":".my-5"}]]);

const hostnamesMap = new Map([["www.forum.nieidealny.pl",1750990365],["nokiahacking.pl",1810358940],["ocen-piwo.pl",761981682],["kontakty.onet.pl",[380503651,1435291760]],["poczta.onet.pl",[380503651,1995444921]],["mmorpg.org.pl",447902275],["paintballmarket.pl",1855524639],["upflix.pl",1855524639],["zetchilli.pl",1855524639],["parezja.pl",1282725450],["pikio.pl",1404453019],["www.plotek.pl",581183306],["polskieszlaki.pl",245629207]]);

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
