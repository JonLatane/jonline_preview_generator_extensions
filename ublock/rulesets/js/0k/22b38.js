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

// vie-1

const argsMap = new Map([[1225644858,{"a":"#ads_large_detail,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250"}],[1081671625,{"a":"div[class*=\"qca\"]"}],[183682935,{"a":"#balloon"}],[2054305821,{"a":".content_middle_rightbar"}],[1302779691,{"a":"#match-child-1,\n.container.mt-1,\n.container>ul,\n.row.d-none,\n.widget-offers__list"}],[947637685,{"a":"#wap_bottombanner_content,\ndiv[id^=\"dnn_\"]"}],[388335906,{"a":"div.container:nth-of-type(5)"}],[1166084229,{"a":"[href*=\"reviewality.vn\"]"}],[2065033718,{"a":".btn-green,\n.pr-box"}],[270458027,{"a":".PanelScroller.Notices"}],[834312451,{"a":"#xbd_overlay,\n.active.xbd_modal"}],[2124052505,{"a":"#ballon-right,\n.most-view:nth-child(2)"}],[1451267663,{"a":"#preload-2"}],[2019425436,{"a":".clickadu"}],[308281002,{"a":"#pc-catfish,\n.ad_catpc"}],[885565563,{"a":".firstmessfloadright.samItem,\n.my_nonresponsive_ads,\n.my_responsive_ads,\n.samBannerUnit,\n.samTextUnit"}],[196598988,{"a":"#preload-zing,\n#uniad-head,\n.sda-catfish,\n.uniad-head"}],[456473776,{"a":"#adsTopInPageBanner,\n#popup,\n.adsContainer"}],[683985099,{"a":".box-host,\n.captain-sb,\n.ft-box,\n.mmo,\n.mmo-inner,\n.vb-pr-box"}],[746083602,{"a":".modal-backdrop.show"}],[542781955,{"a":".banner-macau"}],[780244752,{"a":"iframe:nth-of-type(2)"}],[1430989119,{"a":"#wrapper>div[style=\"text-align: center;\"]"}],[475515956,{"a":".banner-sticky-footer-ad,\n.container>center"}],[248427758,{"a":".widget_custom_html.widget.widget_text"}],[906212671,{"a":"div.text-center:nth-of-type(7),\ndiv[style=\"min-height: 250px\"]"}],[23715085,{"a":"#top-banner-pc,\n.lixitt"}],[1664676063,{"a":".button-ads-header,\n.tvc-link-ads-full"}],[576397730,{"a":"#headwrap>.computer,\n#headwrap>.mobile,\n.pc-catfix"}],[1521273552,{"a":".align-items-center.justify-content-between.d-flex.col-12>.d-lg-none.d-block,\n.btn-odds,\n.btno-group.d-none.d-lg-flex,\n.company,\n.container>.mt-1,\n.container>.mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item>a[rel=\"nofollow\"],\n.topButton,\n.widget_offer,\nheader>.container"}],[2037290641,{"a":"#bnc1"}],[1552663456,{"a":"#bnc0"}],[859397884,{"a":".widget_media_image.widget_block.widget,\nimg.wp-image-1283,\nimg.wp-image-1285"}],[2056626062,{"a":"body>center"}],[240475258,{"a":".container > ul > li.menu-item.nav-item:nth-of-type(2),\n.menu-top-nha-cai,\n.offer,\n.sk_balloon_right.sk_balloon_down.sk_balloon"}]]);

const hostnamesMap = new Map([["vnexpress.net",1225644858],["vtipster.net",1081671625],["vuighe.net",183682935],["vuonhoalan.net",2054305821],["xoilac7.net",[1302779691,947637685]],["vebo2.tv",[947637685,1521273552]],["alophim.org",388335906],["anivsub.org",1166084229],["bongdahomnay.org",2065033718],["btcvn.org",270458027],["cakhia.org",834312451],["film365.org",2124052505],["itvhay.org",1451267663],["pornpic.org",2019425436],["ssphim.org",308281002],["thiendia88.org",885565563],["tvzingvn.org",196598988],["ophim.pro",456473776],["vebotv.pro",683985099],["vebotv.team",746083602],["bongda365.top",542781955],["dongphimzz.top",780244752],["tvhay.top",1430989119],["7chill.tv",475515956],["bimbimz.tv",248427758],["hhhkungfu.tv",906212671],["hhtq.tv",23715085],["khomuc2.tv",1664676063],["phimgif.tv",576397730],["vieclam.tv",[2037290641,1552663456]],["xskt.com.vn",1552663456],["vietphim.tv",859397884],["vuianime.tv",2056626062],["xoilac7.tv",240475258]]);

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
