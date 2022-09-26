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

const argsMap = new Map([[370738991,{"a":"[id^=\"hyperbox\"]"}],[870053456,{"a":".box-offer"}],[1480217623,{"a":".cornerbox,\n.heurekaIframeHeader"}],[964209414,{"a":"div#td-outer-wrap > div.td-container"}],[1136272271,{"a":".ad-obal"}],[1284473539,{"a":".box-banner"}],[799659360,{"a":".r-main"}],[1522150941,{"a":"div[class^=\"reklama\"]"}],[1927281004,{"a":"div#highlitesAds"}],[319079740,{"a":".layoutTop"}],[765988134,{"a":"#g-top-bannery"}],[1402021066,{"a":"#topSite,\n.gallery-advertisement"}]]);

const hostnamesMap = new Map([["ceskenoviny.cz",[370738991,870053456]],["nasepenize.cz",870053456],["cesky-jazyk.cz",1480217623],["cnews.cz",964209414],["computerworld.cz",1136272271],["csfd.cz",1284473539],["csfd.sk",1284473539],["databazeknih.cz",799659360],["denik.cz",1522150941],["dotekomanie.cz",1927281004],["drbna.cz",319079740],["e-mostecko.cz",765988134],["e15.cz",1402021066],["info.cz",1402021066]]);

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
