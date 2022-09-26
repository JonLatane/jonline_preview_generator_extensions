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

const argsMap = new Map([[380471329,{"a":".rmp-ad-container"}],[754095343,{"a":".fade,\n.popup_block"}],[131123957,{"a":".slider-banners.partial,\n.sponsor-link"}],[1401708380,{"a":".ads-box-green,\n.ads-box-red"}],[883576192,{"a":".light-text.footer-widgets"}],[717713595,{"a":".seller-element.shop-card:has(.click_vijhe),\n.sellers_section > div > div > div > div > div > div > div:has(.click_vijhe),\n.sellers_section:not(:has(.modal-header)) > div > div:has(.click_vijhe)"}],[1831148224,{"a":".litebox,\na[href=\"http://www.asiatech.ir/\"]"}],[2026924403,{"a":".upbu"}],[558866326,{"a":".adbox:not(.adbar),\n.left-side-ad-col"}],[494941021,{"a":"div.side22:nth-of-type(1)"}],[523727720,{"a":"#text-12,\n#text-24"}],[1330827073,{"a":".ads-block,\n.row.fixed-post.post,\n.sidebar-textads"}],[1267641344,{"a":"#BannerHome,\n#RelatedContentPopupArea,\n.AdAreaDetail,\n.Banner,\n.BannerA,\n.MobileBannerArea,\n.NewsLetterPopUp,\n[id^=\"BehinAva\"]"}],[442355856,{"a":"#sidebar-alt"}],[1986496520,{"a":"#HeaderImg,\n#mobileBottomAd,\n.tabliqat-text,\n.vvv,\n[id^=\"tabligh\"]"}],[1609482304,{"a":".no-mobile.out-container:nth-of-type(3)"}],[612889772,{"a":".adsside,\n.elementor-element-d41b3d1,\n.size-large.attachment-large"}],[1599974491,{"a":"#site-footer .col-sm-4:has(a[rel=\"noopener\"][target=\"_blank\"]),\n.eif:not(:has(a[href*=\"farnet.io\"]))"}],[1505840794,{"a":".js-userLogin-popup"}],[304598337,{"a":".col-md-offset-6.col-md-3,\n.kanban-col"}],[1289831785,{"a":".khp-site-info p,\n.left.col-md-4,\n.skip-container p:not(:has(a[href*=\"1da.ir\"])):has(img)"}],[357085118,{"a":".phoenixad,\na[rel=\"dofollow\"]"}],[1283189910,{"a":"#text-2,\n#text-3,\n#text-4,\n#text-6,\n#text-7,\n.e3lan"}],[1444685721,{"a":".herald-ad:not(:has(a[href*=\"kurdsoft\"])):not(:has(a[href*=\"7ganj.ir\"])),\n.meta-ad"}],[1489503818,{"a":".links_footer"}],[2136473805,{"a":".main22,\n.up_submit > span"}],[1298524716,{"a":"x"}],[134216376,{"a":".adv_l_inner5,\n.adv_r_news2"}]]);

const hostnamesMap = new Map([["telewebion.com",380471329],["tigatravel.com",754095343],["tiwall.com",131123957],["top2download.com",1401708380],["topnaz.com",883576192],["torob.com",717713595],["uploadboy.com",1831148224],["upmusics.com",2026924403],["varzesh3.com",558866326],["vazeh.com",494941021],["wikisemnan.com",523727720],["yasdl.com",1330827073],["zibamoon.com",1267641344],["icoff.ee",442355856],["konkur.in",1986496520],["shirazsong.in",1609482304],["konkur.info",612889772],["farnet.io",1599974491],["virgool.io",1505840794],["1000site.ir",304598337],["1da.ir",1289831785],["1ea.ir",357085118],["20tayi.ir",1283189910],["7ganj.ir",1444685721],["8pic.ir",[1489503818,2136473805]],["imgurl.ir",1489503818],["uupload.ir",1489503818],["abadis.ir",1298524716],["aftabnews.ir",134216376]]);

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
