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

const argsMap = new Map([[2135692502,{"a":".mobile-visible-fixed,\n.news-col-2 .related-news"}],[570175128,{"a":"#left > div.box:nth-of-type(1),\n.ads-banner,\n.adstext"}],[1011574497,{"a":".Dr.D2.Cu.o"}],[1561640476,{"a":".stream-item-above-post"}],[964459866,{"a":"#text-5"}],[1683761197,{"a":".ads-a"}],[1641923266,{"a":".banner_sidebar,\n.box-ads-single,\n.box-custom.box_other,\ndiv.box-tag-single:nth-of-type(2)"}],[1322311463,{"a":".box:has(a[href*=\"/ads/redirect\"]),\n.fixed_box_adv,\n.instant_news_2,\n.padding_news_right_adv,.padd-news-advertise,\n[href*=\"l.24d.ir\"]"}],[1024632627,{"a":"#forum-native-ad,\n.ad-wrapper"}],[829294001,{"a":".advertorial"}],[491554565,{"a":".ADS_header_all"}],[1743213288,{"a":"#header-ad1,\n#p30konkor-ads-p a[rel=\"follow\"],\n#p30konkor-ads-p div:has(p > a[rel]):not(:has(a[href*=\"p30konkor.com\"])),\n#parandeh-b2"}],[1502295283,{"a":".post-ads,\n.sidebar-ads"}],[9169158,{"a":".ad_global_header"}],[1024796072,{"a":"#ad_global_below_navbar"}],[153741117,{"a":".Res005,\n.WCBC,\n.topadver"}],[1386657106,{"a":".adv_img,\n.agahi-view"}],[649524725,{"a":".widget_whmcs_ads_widget.widget,\n.wpb_content_element.sidebar.wpb_widgetised_column"}],[614204551,{"a":".topbanners"}],[1460266405,{"a":".bigtab-cont,\n.cntmobad,\n.tabd"}],[932830713,{"a":"div.tab.sidebar-box:nth-of-type(2) > .sidebar-box-content,\ndiv.tab.sidebar-box:nth-of-type(2) > h3"}],[1953081970,{"a":".ads_box"}],[1463334049,{"a":"#stream-item-widget-3,\n.dialog-lightbox-message"}],[1018763898,{"a":".aa-container"}],[41435757,{"a":".ads.big_post,\n.cat"}],[882943041,{"a":"#block-block-22.ads"}],[1540513335,{"a":".adv-box"}],[1464090963,{"a":".adloc-is-banner,\n.widget_better-ads"}]]);

const hostnamesMap = new Map([["mosalasonline.com",2135692502],["mybia4music.com",570175128],["namnak.com",1011574497],["netpaak.com",[1561640476,964459866]],["vgdl.ir",1561640476],["20tayi.ir",964459866],["netshahr.com",1683761197],["niksalehi.com",1641923266],["niniban.com",1322311463],["ninisite.com",1024632627],["nodud.com",829294001],["p30afzar.com",491554565],["p30konkor.com",1743213288],["p30world.com",1502295283],["forum.p30world.com",[9169158,1024796072]],["parsipet.ir",9169158],["parsnaz.com",153741117],["parsnews.com",1386657106],["parstools.com",[649524725,614204551]],["taktemp.com",614204551],["patoghu.com",1460266405],["persiangfx.com",932830713],["persianv.com",1953081970],["radiojavan-iran.com",[1953081970,41435757]],["pezeshket.com",1463334049],["picofile.com",1018763898],["rajanews.com",882943041],["roozno.com",1540513335],["rouzegar.com",1464090963]]);

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
