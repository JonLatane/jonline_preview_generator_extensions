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

const argsMap = new Map([[1050943981,{"a":"#middle-ads,\n.advertising"}],[1716490430,{"a":"#header-banner-4,\n#rt-backlinks-pos,\n.mb-3.top-1.sticky-top,\n.w-100.justify-content-center.d-flex"}],[766287928,{"a":".bannersHome"}],[496482196,{"a":".bannergroup"}],[1221828558,{"a":"#header-ads"}],[2080837678,{"a":".GSADSTop,\n.GSLeftSide.col-lg-3.col-md-3.col-sm-12.col-xs-12 > div.widget_style_funcs.GSBlock > div > .widget_baslik.-baslik.sutunbaslik.title,\ndiv.OpenTable:nth-of-type(2),\ndiv.OpenTable:nth-of-type(3),\ndiv.widget_style_funcs.GSBlock:nth-of-type(2) > div > .GSblock"}],[490945012,{"a":".adv_top"}],[1764792469,{"a":".bannergroupsam-full-width"}],[1223481966,{"a":".cyt-ad-content,\n.homebar a[href=\"https://setare.com/%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/\"] > img,\n.pb0.stickyscroll_widget"}],[821234126,{"a":"#g-top,\n#logoads,\n.ads2col,\n.ads2colmobile,\n.flexbanneritem,\n.mobile-fix-bottom"}],[1573976050,{"a":".zxc_home"}],[188654953,{"a":".header_adv"}],[1712313594,{"a":".side_adv"}],[939042498,{"a":".top_adv"}],[1190621521,{"a":".b_box"}],[1504558138,{"a":".mauto_div,\n.mnb,\n.noagahi:not(:has(a[itemprop=\"url\"]))"}],[1491076748,{"a":".banner9,\n.bannerLarge"}],[1752347233,{"a":"#PopAlert,\n#RightPan,\n#advBan,\n.AdvertiseD2Ban,\n.DTOPBan,\n.adv_text"}],[2128322480,{"a":".ads-link,\n.middle-ads"}],[1208394759,{"a":".mask"}],[1919441306,{"a":"div.style-1.colored.box:nth-of-type(6)"}],[307879365,{"a":".link-ads"}],[1465626086,{"a":".ad-item,\n.ads-footer"}],[113951055,{"a":".right-ads"}],[1582302656,{"a":".left-ads"}],[653967067,{"a":".elementor-hidden-phone:has([href*=\"ad.technews-iran.com\"]),\n.jl_ads_section > .widget_media_image,\n[href*=\"ad.technews-iran.com/go\"]"}],[726437262,{"a":"*[id^=\"widget_sp_image-\"],\n.header-ads"}],[293273952,{"a":".full-width-tabligh,\n.home-web-surfing,\n.tj-ad-box,\n.tj-ad-wrapper,\ndiv.widget.aside-widget:nth-of-type(5) > .section-title--dotted.section-title > .section-title__h"}]]);

const hostnamesMap = new Map([["rozblog.com",1050943981],["saednews.com",1716490430],["sakhtafzar.com",766287928],["sakhtafzarmag.com",[496482196,1221828558]],["seemorgh.com",[496482196,1764792469]],["sarzamindownload.com",2080837678],["sedayiran.com",490945012],["setare.com",1223481966],["shahrsakhtafzar.com",821234126],["sharghdaily.com",[1573976050,188654953]],["gostaresh.news",1573976050],["shayanews.com",[1712313594,939042498]],["borna.news",1712313594],["shereno.com",1190621521],["shomanews.com",1504558138],["simcart.com",1491076748],["softgozar.com",1752347233],["sourceiran.com",2128322480],["takhfifan.com",1208394759],["takskin.com",1919441306],["taktemp.com",307879365],["tasnimnews.com",1465626086],["techfars.com",[113951055,1582302656]],["varzesh3.com",113951055],["technews-iran.com",653967067],["techrato.com",726437262],["tejaratnews.com",293273952]]);

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
