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

// irn-0

const argsMap = new Map([[1529829076,{"a":".type-resource-image"}],[498262273,{"a":".advertisment"}],[1585246042,{"a":"#fpc-banner-top,\n#top-right-ad,\n.content-container:has(.ad-reportage),\n.square-ad:not(:has(#featured-posts))"}],[1802957607,{"a":".full2.box.right,\ndiv.sideheader2:nth-of-type(3)"}],[1615278723,{"a":".footer-back-link,\n.free_ad_con,\n.logo_full_view"}],[860159267,{"a":"[href*=\"b2n.ir\"]"}],[1876054268,{"a":"#tabligh"}],[574048520,{"a":".ads120,\n.ads468,\n.fixpost,\n.gsh,\n.headads"}],[459617261,{"a":".bottom_ads,\n.fix_ads,\n.stream-item-widget:has(a[href*=\"faradars.org\"])"}],[1632757092,{"a":".textad,\n[href^=\"/ad/\"]"}],[185304983,{"a":"#kaprila_linktable_left,\n.left-block-top"}],[124001163,{"a":"#slider-box,\n.mortabet-links,\ndiv.row:nth-of-type(2) > .col-xs-12 > .category-side-ads"}],[1074268703,{"a":".advertisements"}],[1558367443,{"a":".sideads"}],[918767464,{"a":"#mobileBannerAfterTags,\n.wide-adv-box"}],[1395343016,{"a":".afterintro,\n.main-inside-ads,\n.main-top-ads"}],[188354020,{"a":".InsideArticleIntro,\n.item-list-row:has(a[href*=\"/pr/\"]),\n.price-sticky,\n.wide-adv-row,\n.wide-adv-row-home"}],[1480186722,{"a":".col-sm-9.main-right > .col-sm-3 > aside.block:nth-of-type(2),\n.text-center.justify-content-around.row"}],[1068661199,{"a":"#ads-text"}],[1485908525,{"a":"#agahiBottom,\n.banner_wrapp"}],[1308497949,{"a":".box-title,\n.moreads.widget_text,\n.pm"}],[8958808,{"a":".mom_custom_text.widget"}],[2063046361,{"a":".ads-container,\n.ads-row,\n.ads-row-left,\n.mediaad-row,\n.mediaad-row-top,\n.mediaad-top-row,\n.top-ad-row"}],[766131640,{"a":"#ad14,\n.ad-cell,\n.widget_text"}],[989371323,{"a":".content_item:has(a[href*=\"/category/ads/\"]),\n.sidebar-area .image"}],[1949145563,{"a":".adpar30,\n.adsidimg"}],[517988078,{"a":".fixedbanner,\n.mobilebanner,\n.sidebar-box-shop,\n.top-large-ads,\n[href^=\"https://playpod.ir/\"]"}],[1616719524,{"a":".dailylink,\nbody > div > font,\ncenter > center > center > center,\ncenter:nth-of-type(2) > center,\ndiv > font > font > .menuheader,\ndiv > font > font > font > p"}]]);

const hostnamesMap = new Map([["tinn.ir",1529829076],["iranart.news",1529829076],["topseda.ir",498262273],["toranji.ir",1585246042],["up44.ir",1802957607],["uplod.ir",1615278723],["uptrack.ir",860159267],["uupload.ir",1876054268],["varoone.ir",574048520],["vgdl.ir",459617261],["vista.ir",1632757092],["webgoo.ir",185304983],["webii.ir",124001163],["yun.ir",1074268703],["zohur12.ir",1558367443],["zoomg.ir",[918767464,1395343016]],["zoomit.ir",[918767464,188354020]],["hamtamovie.lol",1480186722],["androidina.net",[1068661199,1485908525]],["salamdl.rip",1068661199],["cooldl.net",1308497949],["dlbook.net",8958808],["footballi.net",2063046361],["gadgetnews.net",766131640],["jeyran.net",989371323],["par30dl.net",1949145563],["par30games.net",517988078],["pichak.net",1616719524]]);

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
