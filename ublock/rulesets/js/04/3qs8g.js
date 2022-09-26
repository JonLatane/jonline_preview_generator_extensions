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

const argsMap = new Map([[1578848253,{"a":"#header-banner"}],[1481829297,{"a":"#leva-reklama"}],[1990726905,{"a":"#content-lead,\ndiv.sky-wrapper"}],[1692706481,{"a":"#header-reklama,\n.side-bann-l,\n.side-bann-r"}],[1527167774,{"a":".rklh"}],[893837287,{"a":".banner2,\n.wrap + div:not(#footer)"}],[1171569000,{"a":".ads"}],[1636593372,{"a":".square_banner"}],[2101011117,{"a":"#skyscraper"}],[1438227238,{"a":"#sideScrapperLayout,\ndiv[id*=\"Banner\"]"}],[274849886,{"a":"#js-branding,\ndiv[id^=\"czech-\"]"}],[1641346085,{"a":"#pr-prace-blok-view,\ndiv.block-jobs-link,\ndiv[class*=\"openx-async\"]"}]]);

const hostnamesMap = new Map([["autoforum.cz",1578848253],["wmmania.cz",1578848253],["autohit.cz",1481829297],["autorevue.cz",1990726905],["e15.cz",1990726905],["maminka.cz",1990726905],["mobilmania.cz",1990726905],["zive.cz",1990726905],["autosport.cz",1692706481],["autoweb.cz",1527167774],["autozine.cz",893837287],["isport.blesk.cz",1171569000],["evropa2.cz",1171569000],["filmporno.cz",1171569000],["businessworld.cz",[1636593372,2101011117]],["computerworld.cz",[1636593372,2101011117]],["pcworld.cz",2101011117],["busportal.cz",1438227238],["cc.cz",274849886],["cdr.cz",1641346085],["diit.cz",1641346085]]);

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
