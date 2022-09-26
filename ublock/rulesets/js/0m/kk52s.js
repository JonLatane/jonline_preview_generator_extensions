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

const argsMap = new Map([[1089732462,{"a":".special-message-wrapper"}],[1055803399,{"a":"[class^=\"banner_banner-\"]"}],[1522800259,{"a":"#popup-1"}],[111879864,{"a":".adblockInfo"}],[1401454102,{"a":"#result"}],[1001685599,{"a":".forums.topiclist > .icon"}],[156991813,{"a":"div[id^=\"div-gpt-ad\"]"}],[541287729,{"a":"body > div[id][style=\"display: block;\"]:first-child"}],[1265221904,{"a":"#abp_info"}],[575052084,{"a":"#bannerContent > div > div >div"}],[739430467,{"a":".spacead-r-2,.adsbygoogle,.td-adspot-title,.td-is-sticky.td-pb-span4.tdc-inner-column.vc_column_container.wpb_column.td_uid_26_5defeae8f3d3e_rand.vc_column_inner,.td_block_template_11.td-pb-border-top.td_uid_42_5defeae907025_rand.td_block_title.td_block_wrap,.td-is-sticky.td-pb-span4.tdc-inner-column.vc_column_container"}],[1142490278,{"a":"#JEcnUkoYtyfs,.hmAdHKEaBMFO-bg"}]]);

const hostnamesMap = new Map([["mazury.pl",1089732462],["medme.pl",1055803399],["megawrzuta.pl",1522800259],["memorizer.pl",111879864],["mfiles.pl",1401454102],["forum.moto-4t.pl",1001685599],["mybank.pl",156991813],["mylomza.pl",541287729],["nadajemy.pl",1265221904],["napiprojekt.pl",575052084],["naszamlawa.pl",739430467],["newsweb.pl",1142490278]]);

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
