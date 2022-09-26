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

const argsMap = new Map([[44757745,{"a":"[id^=\"_fw_frame_\"]"}],[815244858,{"a":"#sys_bnr_tbl"}],[1662101091,{"a":"#fancybox-overlay"}],[2056849851,{"a":"#REKLAI"}],[336634678,{"a":"table + #div_main_right_block"}],[802528923,{"a":"#ad_center_top_500x150,\n#ag_b_wrapper,\n#ag_wrapper,\n#c24-container,\n#flag-banner,\n#footer_banner,\n#middle_156_xml,\n#shops_offer,\n#whatcar,\n.ad__kvadrats,\n.article-content-width__ads,\n.article-lead-image-ad,\n.autoplius-ad,\n.banner-block-new,\n.banner_container,\n.c24-box,\n.city24bl-cont,\n.comment-baner-outer,\n.customers,\n.divTable_la,\n.fp_horiz_ads_150x150,\n.lead-banner,\n.list.customer,\n.pattern-side--ads,\n.right-sidebar-top__ad,\n.right_custom_ad_2_pics,\n.right_custom_ad_four_pics_city24,\n[id^=\"ad120x600\"],\na[style=\"text-decoration: underline; cursor: pointer; padding-right: 17px; background: url('/assets/images/title_link.gif') right center no-repeat;\"],\ndiv[style=\"height:53px; width:100%; position:fixed; bottom:0px; left:0px; background-color:white; z-index:999999; background-position:center center; background-image: url('http://b.itvnet.lv/_sa_alkohols.jpg'); background-repeat:no-repeat;\"]"}]]);

const hostnamesMap = new Map([["skaties.lv",44757745],["ss.lv",815244858],["tele2.lv",1662101091],["tera.lv",2056849851],["travelnews.lv",336634678],["tvnet.lv",802528923]]);

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
