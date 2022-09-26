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

// lva-0

const argsMap = new Map([[1740358882,{"a":".reklama2"}],[864983470,{"a":"div[style=\"position: absolute; inset: 0px; background: rgba(0, 0, 0, 0.7) none repeat scroll 0% 0%; z-index: 1004;\"]"}],[1583351086,{"a":".banner_clicker,\n.main_column_banner,\n.top_banner"}],[347388977,{"a":"#shop-item,\n.bootlv_recommends,\n.top_header_wrapper,\ndiv[style=\"padding: 10px;text-align:center;\"],\ntd[style=\"padding: 0 0 0 10px; width: 250px; vertical-align: top;\"]"}],[1566591460,{"a":".with_banner"}],[683089356,{"a":"#outer-left,\n#outer-right,\n#slid_close"}]]);

const hostnamesMap = new Map([["1s.lv",1740358882],["apollo.lv",864983470],["tvnet.lv",864983470],["bilesuserviss.lv",1583351086],["boot.lv",347388977],["cvmarket.lv",1566591460],["db.lv",683089356]]);

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
