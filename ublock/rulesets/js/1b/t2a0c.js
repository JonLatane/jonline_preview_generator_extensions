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

const argsMap = new Map([[1914274479,{"a":".paused-account-modal"}],[503645396,{"a":".ads-home-feed"}],[717004658,{"a":".left-slider"}],[1667879811,{"a":".td-header-rec-wrap,\n.td_block_template_1.tdi_3_833.td-a-rec-id-content_top.td-a-rec,\n.td_block_template_1.tdi_51_5e1.td-a-rec-img.td-a-rec-id-custom-spot.td-a-rec.td_block_wrap,\naside.widget_custom_html.widget.td_block_template_1.widget_text:nth-of-type(2),\naside.widget_custom_html.widget.td_block_template_1.widget_text:nth-of-type(5),\naside.widget_text.widget.td_block_template_1:nth-of-type(1)"}],[528231100,{"a":".text-center.adsense"}],[916867478,{"a":".banner-bot-mobile,\n.banner-top-mobile"}],[860132431,{"a":".catfishLoader"}],[862437521,{"a":"div[id^=\"chp_ads_block_modal\"]"}],[910613754,{"a":"#PC_mr1,\n.widget_media_image,\na[href^=\"https://tzaxmpmr.988905.com\"]"}],[2108608221,{"a":"[href^=\"https://rutgon.me/\"]"}],[688564583,{"a":".bn-lg-sidebar"}],[1145025880,{"a":".anhbn-qc"}],[1614220111,{"a":".ezo_ad,\n.ezoic-ad"}],[1018007971,{"a":"div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]"}],[925609025,{"a":"#AADIV35,\n#baolink1s,\n.banner-inner"}],[804345010,{"a":".dwpb-action,\n.fixtop"}],[1437979209,{"a":".homePage_adsHomeLeft__3_ruz.adsHOC_wrapper__Se0cN,\n.style_wrapperAll__oHfiq,\n.style_wrapper__2LeQp,\n.style_wrapper__YEwSi,\n.textlinkBox_notwrap__scC4g.textlinkBox_wrapper__1C2P9"}],[1104834643,{"a":"#countdown"}],[1892283942,{"a":"div[id^=\"sponsor-\"]"}],[11663363,{"a":".player-vast-blocker"}],[294918309,{"a":"#sponsor-balloon"}],[585614396,{"a":".ws-banner"}],[405903168,{"a":".nh-read__alert,\n.px-3.nh-read__body>.text-center.pb-3,\n.text-center.pb-3.nh-read__pagination,\ndiv.text-center.pt-3:nth-of-type(1)"}],[439406268,{"a":"div[class*=\"ads\"]"}],[1609266555,{"a":"#mp-adbk,\n#mp-adx-b32"}],[1011130746,{"a":".mp-adz"}],[2066149415,{"a":".banner-footer-desktop,\n.item-banner"}],[2117247579,{"a":".fixed_bottom"}],[1752785201,{"a":".most-view:first-child"}],[496311146,{"a":".pcCatfish"}],[2043204149,{"a":"[class^=\"box_adv_ele\"]"}],[45608191,{"a":".container div:not(.top) > div.mrb5.mrt5.text-center > a,\n.mrb5.text-center.container"}],[881744620,{"a":"#IMAPointernctPlayer,\n#PL_R01,\n#PL_R02,\n.adv_home_300_250,\n.nqc-zone"}],[1760047895,{"a":".cat-fish"}],[183769527,{"a":".data-vjs-player,\n.x-popup"}]]);

const hostnamesMap = new Map([["hoangdinhtrong.com",1914274479],["hoidap247.com",503645396],["homedy.com",717004658],["hotroontap.com",1667879811],["hotruyen.com",528231100],["huphimtv.com",[916867478,860132431]],["mphimmoix.com",[860132431,1752785201,496311146]],["xemphimvuitv.com",860132431],["icongnghe.com",862437521],["infothethao.com",910613754],["ireviewsach.com",2108608221],["khosinhvien.com",688564583],["lacaigi.com",1145025880],["laptrinhcanban.com",1614220111],["lichvannien365.com",1018007971],["link1s.com",925609025],["listnhacai.com",804345010],["lmssplus.com",1437979209],["loigiaihay.com",1104834643],["mephimmy.com",1892283942],["mephimnhat.com",1892283942],["mephimtrung.net",1892283942],["mephimnhat1.com",[11663363,294918309]],["phimmoi1.com",[11663363,294918309]],["phimnhanh1.com",[11663363,294918309]],["xemphim1080.com",[11663363,294918309]],["phimtrung24.com",294918309],["mephimtv.com",585614396],["metruyenchu.com",405903168],["mmo4me.com",439406268],["baodauthau.vn",439406268],["kenh14.vn",439406268],["motchill.com",[1609266555,1011130746]],["motphimtv.tv",[1609266555,1011130746]],["2phimmoi.net",1011130746],["phechill.net",1011130746],["motphim123.com",2066149415],["mphim14.com",2117247579],["phimdacap.com",2117247579],["phimanimehd.net",2117247579],["phim18zz.com",496311146],["muabanraovat.com",2043204149],["nettruyenme.com",45608191],["nhaccuatui.com",881744620],["omphimz.com",[1760047895,183769527]],["phimhanquoc18.com",183769527]]);

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
