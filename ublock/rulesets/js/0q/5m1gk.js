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

// tha-0

const argsMap = new Map([[151062565,{"a":"[id=\"AutoNumber1\"]:not(:nth-of-type(2))"}],[1289577488,{"a":"div[class^=\"CookieSession\"]"}],[703888296,{"a":".container:nth-of-type(2),\n.panel-body > center"}],[1737039627,{"a":"#overlay,\n#yengo-inline-ads,\n.yengo-x"}],[1521351357,{"a":"div[class^=\"undefined\"],\ndiv[id^=\"lightbox\"],\niframe[src=\"/ads/foot-yengo.php\"]"}],[145107050,{"a":"#adv_header,\n#banner300_600,\n.mid_ads"}],[219430175,{"a":"#summary .social,\n.popup"}],[542746677,{"a":".adsBottoms,\n.content_main div[style=\"width:728px;height:90px;\"],\n.content_right,\n.headline_head,\n.post_desc div[style=\"width:700px;height:66px;\"],\n.sherer,\n.text-center.txt-color-white.font-md,\n[class^=\"adv\"],\n[rel^=\"nofollow\"]"}],[993053935,{"a":".banana_box iframe[src^=\"https://notebookspec.com/specialprice\"],\n.cover_banner,\ndiv[id^=\"undefined\"]"}],[987305294,{"a":"#getFixed,\n#getFixedx,\n.gosad"}],[1974833563,{"a":"#cboxWrapper,\ndiv[id^=\"ads_div_\"]"}],[618081679,{"a":"#cboxOverlay"}],[1766119508,{"a":"#check-also-box,\n.e3lan-below_header,\n.theiaStickySidebar > div[id^=\"text\"]:nth-of-type(1),.theiaStickySidebar > div[id^=\"text\"]:nth-of-type(2),\n.wrapper-outer .background-cover"}],[913962588,{"a":"#adsMiniUnder,\n#col_right .ads,\n#skin-left,\n#skin-right,\n.ads-feature"}]]);

const hostnamesMap = new Map([["bbs.pramool.com",151062565],["www.punpro.com",1289577488],["www.rock-anime.com",703888296],["share-si.com",1737039627],["siamok.com",1521351357],["siamphone.com",145107050],["sistacafe.com",219430175],["soccersuck.com",542746677],["specphone.com",993053935],["www.taradxxx.com",987305294],["techmoblog.com",[1974833563,618081679]],["thailandbestbeauty.com",618081679],["techtalkthai.com",1766119508],["techxcite.com",913962588]]);

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
