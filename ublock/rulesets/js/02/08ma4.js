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

const argsMap = new Map([[1371481913,{"a":".banner-top-main,\n.baohaiquan_bottom_970x250"}],[1723661809,{"a":".top-advertisment"}],[1839093882,{"a":"._ning_outer"}],[1356722499,{"a":"#Adsv,\n.right-banner>a[title]"}],[1280854105,{"a":".__ads_click"}],[912966842,{"a":"#BannerAdv"}],[746283150,{"a":"#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left"}],[409862693,{"a":".columns-widget .col-right"}],[458227281,{"a":".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i"}],[1709912354,{"a":".box_ads_d"}],[624616421,{"a":".exp_qc_share"}],[1877845698,{"a":".c-banner"}],[279690643,{"a":".warp-banner-vip"}],[1482181002,{"a":".sidebar>div[style]"}],[1752568193,{"a":"#div-ub-docbao"}],[889733194,{"a":"#ouibounce-modal,\ndiv[id^=\"adsbg\"]"}],[1549154475,{"a":"#widget-12"}],[587218685,{"a":"#widget-11,\n#widget-16,\n.mainContent>a[rel]"}],[1785807906,{"a":".banr-Rt,\n.banrpstn"}],[1926110208,{"a":"#myElementz,\n.bannerinfooter"}],[430098401,{"a":".LRBanner"}],[1497360063,{"a":".bn1,\n.bn2,\n.box_baiviet_dexuat,\n.box_quangcao_mobile_320x50,\n.box_text_qc"}],[1456319818,{"a":"#tubia"}],[1461452641,{"a":"#admzone57"}],[1809390976,{"a":".ads-right1,\n.adv-row"}],[234761175,{"a":".adx-zone,\n.underlay"}],[1574218819,{"a":".khw-ads-wrapper.clearfix"}],[301608617,{"a":"#qcRight,\n.banner-advertisements"}],[1673648875,{"a":".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]"}],[1893394452,{"a":".qc-benphai,\n.qc-bentrai"}],[1624273881,{"a":"[class^=\"size\"]"}],[729210981,{"a":"#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion"}],[2141737966,{"a":".advertTop,\n.module_plugins"}],[778920748,{"a":".notice-content"}],[1793984238,{"a":".khw-adk14-wrapper"}]]);

const hostnamesMap = new Map([["haiquanonline.com.vn",1371481913],["nld.com.vn",1723661809],["tapchikientruc.com.vn",1839093882],["thanhtra.com.vn",1356722499],["thoidai.com.vn",1280854105],["petrotimes.vn",1280854105],["thuongtruong.com.vn",912966842],["thuysanvietnam.com.vn",746283150],["trithuc24h.com.vn",409862693],["voh.com.vn",458227281],["congluan.vn",[1709912354,624616421]],["giadinhonline.vn",624616421],["nongnghiep.vn",624616421],["congly.vn",1877845698],["dangtinbatdongsan.vn",279690643],["realty.vn",279690643],["danviet.vn",1482181002],["docbao.vn",1752568193],["download.vn",889733194],["gamevui.vn",[889733194,234761175]],["kienthucykhoa.edu.vn",1549154475],["plus.edu.vn",587218685],["eva.vn",1785807906],["fshare.vn",1926110208],["game24h.vn",430098401],["game8.vn",1497360063],["gameio.vn",1456319818],["gamek.vn",1461452641],["gametv.vn",1809390976],["genk.vn",1574218819],["giaoducthoidai.vn",301608617],["vnews.gov.vn",1673648875],["plus.gtv.vn",1893394452],["helpex.vn",1624273881],["hoatieu.vn",729210981],["hosocongty.vn",2141737966],["hrspring.vn",778920748],["kenh14.vn",1793984238]]);

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
