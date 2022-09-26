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

// alb-0

const argsMap = new Map([[1176045523,{"a":".boost-list-container a[href^=\"https://aa.boostapi.net\"],\ndiv[class^=\"adunit-\"],\ndiv[data-adunit]"}],[592754912,{"a":".latestVideo,\n.xo360"}],[796499933,{"a":".td-desktop,\ndiv > iframe"}],[311404839,{"a":".awac-wrapper"}],[535218359,{"a":".ad-container,\n.reklama_top"}],[215538347,{"a":".td-visible-desktop"}],[589868866,{"a":"#custom_html-6,\n#text-15,\n.sidebar-single-w,\n.single-post-comments-sidebar"}],[1156504872,{"a":".olark-attention-grabber"}],[491342282,{"a":"#sidebar_container,\n.left-banner"}]]);

const hostnamesMap = new Map([["joq-albania.com",1176045523],["joqalbania.com",1176045523],["kallxo.com",592754912],["kohajone.com",796499933],["kosovalive360.com",311404839],["kosovapress.com",535218359],["lajmpress.com",215538347],["myalbanianfood.com",589868866],["nimitv.com",1156504872],["njoftime.com",491342282]]);

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
