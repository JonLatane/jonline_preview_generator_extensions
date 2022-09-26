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

const argsMap = new Map([[196019529,{"a":".asan125,\n.asan250,\n.asan468,\n.game.post,\n.text-asan"}],[1608106738,{"a":".right-sidebar img[title=\"رپورتاژ\"],\n.right-sidebar img[title=\"محل تبلیغات شما\"]"}],[1426417561,{"a":".adv_sticky,\n.click1000_allcontent,\n.webgardi_main"}],[1767708881,{"a":".alert-dismissible,\ndiv.text-center.col-md-3 > .paddingAll10.panel-success.panel"}],[494049519,{"a":".medicaldirectory-sidebar:nth-of-type(5) > .claims.sidebar-content > .cbp-l-project-details-title > span"}],[1130994358,{"a":".mp_left > .mpbb_ads.mpb_body,\n.mp_right > .mpbb_ads.mpb_body"}],[519152125,{"a":"#bil_fix_top_pc,\n#headerbar,\n.c-ads-banner,\n.content-slider,\n.countclick,\n.hamsan-container,\n.m-banner-r,\ndiv[class^=\"pcfadv\"]"}],[1446175383,{"a":".ads-left,\n.table-striped.table,\n.tarh-forosh.panel-heading:nth-of-type(23),\n.topAds,\ncenter"}],[1784574934,{"a":".parent_txt_adv_container2"}],[886113103,{"a":"figcaption"}],[969293762,{"a":"#custom_html-51"}],[461075237,{"a":".widget_custom_html.widget.primary-sidebar-widget.w-t.h-ni.widget_text"}],[895942183,{"a":".widget_text.widget.primary-sidebar-widget.w-t.h-i"}],[1234874842,{"a":".weblink,\n[href*=\"/banners/click/\"]"}],[2096716336,{"a":".digiBannerMobile,\n.homeMainBanner,\n.todaysNewsList__sidebar"}],[1311044796,{"a":".flex-wrap > .border-b:has(.mr-auto.text-caption.ai-center),\n.mb-4:has(.mr-auto.text-caption.ai-center),\n.radius-large-lg:has([class*=\"SponsoredBrandCarousel\"]),\n[class*=\"BaseLayoutStaticFooterAppInstall\"],\n[class*=\"ProductContent\"]:has(.mr-auto.text-caption.ai-center)"}],[877897432,{"a":"#block-6,\n.ADS_wrapper,\n.WK_ads,\n.ads_area_small_banner,\n.banner_small_dlbox_b,\n.blog_list,\n.bottom_single_message,\n.custom-html-widget.textwidget,\n.litespeed-loaded.entered.aligncenter,\n.single_post_banner"}],[1233304936,{"a":"#home-2-col > .bs-vc-wrapper > .vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column,\n.widget_nav_menu.widget.primary-sidebar-widget.w-t.h-ni"}],[1000557439,{"a":".zxc"}],[629252444,{"a":"[href^=\"/advertisements/triggered/\"]"}],[56148174,{"a":".custom-ad-one,\n.zxc-m"}],[1670688757,{"a":".adsfix_box"}],[1585024174,{"a":".ads_txtcv,\naside.lefts_sides:nth-of-type(6)"}],[1171569000,{"a":".ads"}],[280280594,{"a":".popup-ads"}],[1546257315,{"a":"div.medicaldirectory-sidebar:nth-of-type(6) > .claims.sidebar-content > .cbp-l-project-details-title > span"}],[822883200,{"a":".sidebar-home:has(.ads_0)"}],[291626589,{"a":".advs-wrapper"}]]);

const hostnamesMap = new Map([["asandl.com",196019529],["asemooni.com",1608106738],["asriran.com",1426417561],["barsadic.com",1767708881],["brain.be-teb.com",494049519],["behmusic.com",1130994358],["beytoote.com",519152125],["boyernews.com",1446175383],["bultannews.com",1784574934],["charbzaban.com",886113103],["chetor.com",969293762],["delbaraneh.com",[461075237,895942183]],["rouzegar.com",895942183],["delgarm.com",1234874842],["digiato.com",2096716336],["digikala.com",1311044796],["dlfox.com",877897432],["doctorwp.com",1233304936],["donya-e-eqtesad.com",[1000557439,629252444,56148174]],["ecoiran.com",[1000557439,629252444]],["eghtesadnews.com",[1000557439,291626589]],["eghtesadonline.com",1000557439],["etemadonline.com",1000557439],["fardanews.com",1000557439],["khabarfoori.com",1000557439],["mojnews.com",1000557439],["moroornews.com",1000557439],["mosalasonline.com",1000557439],["sharghdaily.com",1000557439],["shayanews.com",1000557439],["shomavaeghtesad.com",1000557439],["bartarinha.ir",1000557439],["ilna.ir",1000557439],["doostihaa.com",[1670688757,1585024174]],["mer30download.com",[1670688757,1171569000]],["downloadha.com",[1171569000,280280594]],["e-teb.com",1171569000],["elmefarda.com",1171569000],["mehrnews.com",1171569000],["salameno.com",1171569000],["tasnimnews.com",1171569000],["vipofilm.com",1171569000],["4tools.ir",1171569000],["imna.ir",1171569000],["khabaronline.ir",1171569000],["p30day.ir",1171569000],["shahraranews.ir",1171569000],["shmi.ir",1171569000],["par30games.net",1171569000],["tebyan.net",1171569000],["ravan.e-teb.com",1546257315],["eghtesademeli.com",822883200]]);

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
