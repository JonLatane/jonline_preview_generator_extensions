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

const argsMap = new Map([[1719768138,{"a":".backlink,\n.shopping_list,\n.talfighat-BS,\n.tiny_linky_boxes,\n[href*=\"/advertisements/triggered/\"]"}],[298046060,{"a":".adv"}],[581308002,{"a":".adv-ttl"}],[1952620913,{"a":"#ad640a,\n#head728,\n#sidebar300 > .mywidget > .titles,\ndiv.mywidget:nth-of-type(6)"}],[340492144,{"a":".widget-ad-image"}],[1319902750,{"a":".stream-item-widget"}],[258636860,{"a":"#ynpos-10831,\n.ezp30-ads,\n.fix-ez"}],[1137618578,{"a":".advertisement"}],[565079516,{"a":".clearfix.boxed-content-wrapper img[alt=\"Advertising\"],\n.kpl_linktable,\n.top-banner-ads"}],[944038010,{"a":".header-adv,\n.others_media,\n.sticky_notify2,\n.zxc-stik"}],[1645821616,{"a":".txt-adv-box"}],[109819418,{"a":".zxc-visible-fixed"}],[970126541,{"a":".download-link-ads-below"}],[442226834,{"a":".ads-dashed-banner,\n.cas-pubg.cas,\n.gtm-farsroid-ads,\n.site-middle-banners,\n.swiper-wrapper > .swiper-slide:not(:has(a[href*=\"farsroid.com/\"]))"}],[1034211064,{"a":".inline-news-box,\n.talfighat-row,\n.ul-talfigh-con"}],[822922025,{"a":".results__a"}],[433264792,{"a":"#fix-advertise,\n#image-advertise,\n.baners,\n.fix-ads,\n.single-advertise:nth-of-type(3)"}],[2124505051,{"a":"div.right_side:nth-of-type(9)"}],[1889767219,{"a":"#ads-main-home,\n.ads-img"}],[723990694,{"a":"#centercol > center > center,\n#leftcol > center,\n.banner-center,\ndiv#leftcol-body:nth-of-type(2),\ndiv#leftcol-down:nth-of-type(3),\ndiv#leftcol-up:nth-of-type(1),\ndiv#rightcol-body:nth-of-type(2),\ndiv#rightcol-down:nth-of-type(3),\ndiv#rightcol-up:nth-of-type(1)"}],[967684139,{"a":".sticky-ad"}],[1959637208,{"a":".sidebar-right"}],[806949856,{"a":".primary-sidebar-widget:has(a[rel*=\"undefined\"])"}],[883873443,{"a":".secondary-sidebar-widget:has(a[rel*=\"undefined\"])"}],[2146926716,{"a":"div[class^=\"cr-banner-\"]"}],[1007907020,{"a":"#topAdver,\n.Top2Adssss,\ndiv.CBS.CenterBlock:nth-of-type(2),\ndiv.CBS.CenterBlock:nth-of-type(3),\ndiv.CBS.CenterBlock:nth-of-type(5),\ndiv.CBS.CenterBlock:nth-of-type(6)"}],[1491310240,{"a":".sin-part"}],[17537700,{"a":"#banners-position-14,\n.VueCarousel"}]]);

const hostnamesMap = new Map([["eghtesadonline.com",1719768138],["ejiga.com",[298046060,581308002]],["shomavaeghtesad.com",298046060],["fa-tools.ir",298046060],["elmefarda.com",1952620913],["ensafnews.com",[340492144,1319902750]],["mag.khanoumi.com",340492144],["wikihoax.org",[340492144,1319902750]],["netpaak.com",1319902750],["ezp30.com",258636860],["faaltarin.com",1137618578],["faceit.ir",1137618578],["farachart.com",565079516],["fardanews.com",[944038010,1645821616,109819418]],["mojnews.com",1645821616],["moroornews.com",1645821616],["mosalasonline.com",109819418],["farsroid.com",[970126541,442226834]],["p30afzar.com",970126541],["androidzoom.ir",970126541],["fartaknews.com",1034211064],["fastdic.com",822922025],["gamefa.com",433264792],["ghatreh.com",2124505051],["gooyait.com",1889767219],["graphiran.com",723990694],["hamgardy.com",967684139],["gadgetnews.net",967684139],["harfetaze.com",1959637208],["idehalmag.com",806949856],["idehaltech.com",883873443],["imvbox.com",2146926716],["irannaz.com",1007907020],["itarfand.com",1491310240],["itbazar.com",17537700]]);

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
