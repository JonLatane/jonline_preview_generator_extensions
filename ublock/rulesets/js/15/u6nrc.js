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

const argsMap = new Map([[1874900564,{"a":"#slider-wrap"}],[626465976,{"a":".right_column,\ndiv[style=\"margin-bottom:15px;\"]"}],[434567910,{"a":"#_ctl16_HtmlBanner,\n[id^=\"_ctl20_Elements__\"]"}],[1748565770,{"a":"#ctl00_divAd1"}],[1834087321,{"a":"div[style=\"float:none;margin:10px 0 10px 0;text-align:center;\"]"}],[1292715030,{"a":"#AM_bottom,\n#AM_giga,\n#AM_mobile_1,\n#AM_scroll_row,\n#AM_tower_div,\n.item_link[href^=\"/rekred.php\"],\n[id^=\"media_place\"]"}]]);

const hostnamesMap = new Map([["receptes.lv",1874900564],["reklama.lv",626465976],["riga.lv",434567910],["rigaslaiks.lv",1748565770],["runabildes.lv",1834087321],["salidzini.lv",1292715030]]);

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
