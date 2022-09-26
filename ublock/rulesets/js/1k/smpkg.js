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

// isr-0

const argsMap = new Map([[1318545576,{"a":"#divBranzaRightBanner,\n#divMainBanner,\n#divMekomiRightBanner,\n#divMivzakimAd,\n#divRightButtonsAds,\n#divRightVideoAd,\n#divTopBanner"}],[2089028225,{"a":"#flow"}],[2034582203,{"a":".bookingaff"}],[863622616,{"a":"#wrapper > literal > div,\ndiv[style=\"clear: both;border-bottom:3px solid #ededed;padding:4px;height: 120px;\"]"}],[1186456094,{"a":"#RoterHePromo,\n#taboola-forum_atf,\n.forum-side-responsive1,\n[style=\"border: 0px solid red; width: 160px; table-layout: fixed;\"],\ntd[style=\"border:0px solid red; width:160px; table-layout:fixed;\"],\ntd[style=\"width:120px;border:0px solid red;\"]"}],[135981611,{"a":".panel-row-upper,\n.remove-ad"}],[1654321084,{"a":".inrpggoogle"}],[1699413953,{"a":".advertisment-wrapper"}]]);

const hostnamesMap = new Map([["ladaat.info",1318545576],["cellebrate.mobi",2089028225],["rotter.name",2034582203],["rotter.net",[2034582203,1186456094]],["isramedia.net",863622616],["hidabroot.org",135981611],["safa-ivrit.org",1654321084],["sratim.tv",1699413953],["sratim.video",1699413953]]);

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
