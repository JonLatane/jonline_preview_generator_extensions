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

const argsMap = new Map([[1091250616,{"a":".co-ads"}],[248427758,{"a":".widget_custom_html.widget.widget_text"}],[498526043,{"a":"[href^=\"https://gameup.ir/\"]"}],[339840406,{"a":".kaprila,\n.theiaStickySidebar,\n.widget-container"}],[104723095,{"a":".asiatech,\n.widget_links"}],[1279453802,{"a":".img-fluid.banner-img,\ndiv[class=\"my-3\"]"}],[967732743,{"a":".abox"}],[1697211474,{"a":"#featured > .owl-stage-outer"}],[2050739997,{"a":".all_adv,\n.fixed_adv_mob"}],[1020137019,{"a":"#ad-hoc-2,\n.bdaia-e3-container,\n.mks_ads_widget,\n.widget_text.bdaia-widget.widget"}],[20333751,{"a":"#iddivtoplevelscript,\ndiv:nth-of-type(3)"}],[1589546159,{"a":".linkbox"}],[466161635,{"a":".block-simpleads"}],[17008181,{"a":".clads-inner"}],[1032138039,{"a":"#ADbox-1,\n.ads-sidebar,\n.ads-sticky,\n.no-list-marker.block-content,\n.soh-tab-d,\n.ymaco"}],[483394369,{"a":".after-post-ads"}],[187646761,{"a":".Js_Div5"}],[470268854,{"a":"#header-bar,\n.sidebar-digiads"}],[324455308,{"a":".main-term-3705,\n.texttab,\n.uizv,\n.vc_col-sm-9 .type-post:has(a[href*=\"/author/ads/\"])"}],[7262799,{"a":"#main-sidepost > article:nth-of-type(3),\n.index-adstop,\naside.linkbox:nth-of-type(3)"}],[1152894199,{"a":"#kaprila_linktable"}],[1428642924,{"a":".content-top-ads-box,\n.parsi-ads"}],[1248295611,{"a":".d1yekta,\n[id^=\"pos-article-display-\"],\nsection li:not(:has([href^=\"https://download1music.ir/\"]))"}],[2036941652,{"a":".postfixedafterpost,\n.stacking_default.valign_top.wpb_row:nth-of-type(8)"}],[2006608292,{"a":".ads-fix-post,\n.ads-matni"}],[58863207,{"a":".advertise-place,\n.province-advertise,\nmain > div:has([href*=\"/advertising/\"])"}],[782457984,{"a":".all_ads"}],[639354092,{"a":"#ContentPlaceHolder1_divBanner"}]]);

const hostnamesMap = new Map([["aftabyazdonline.ir",1091250616],["amazing.ir",248427758],["dlbook.net",248427758],["anaj.ir",498526043],["androidzoom.ir",339840406],["apktops.ir",104723095],["asiadl.ir",1279453802],["b2n.ir",967732743],["barato.ir",1697211474],["bartarinha.ir",2050739997],["beautyhome.ir",1020137019],["bils.ir",20333751],["buzdid.ir",1589546159],["citna.ir",466161635],["click.ir",17008181],["coffeeapps.ir",1032138039],["computeruser.ir",483394369],["dabi.ir",187646761],["digiboy.ir",470268854],["digiro.ir",324455308],["dlroozaneh.ir",7262799],["download.ir",[1152894199,1428642924]],["downloadly.ir",[1152894199,2036941652]],["p30day.ir",1152894199],["download1music.ir",1248295611],["downloadsoftware.ir",2006608292],["econews.ir",58863207],["eghtesadepooya.ir",782457984],["rastannews.ir",782457984],["emalls.ir",639354092]]);

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
