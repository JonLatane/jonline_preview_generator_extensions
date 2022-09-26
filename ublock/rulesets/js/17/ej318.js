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

const argsMap = new Map([[962035817,{"a":".btn-user.r-btn"}],[1603950748,{"a":".mct_-bet"}],[1583354662,{"a":"#m-bet,\n.ibs-bet"}],[1331997710,{"a":".live-nav-links"}],[371679578,{"a":".banner-link"}],[1390091793,{"a":".castfish,\n.floating"}],[1865504323,{"a":".btn-betting,\n.container-banner,\n.modal-ads,\n.nhacaiuytin,\n.text-running,\ndiv[class^=\"slide-bar\"]"}],[1844823686,{"a":"#sec_top_bet,\n.banner-bellow-append-custom,\n.banner_ctn,\n.banner_fixed,\n.banner_left,\n.banner_right,\n.bet-btn,\n.bet_now,\n.block_banner,\n.btn-in-player.btn-bottom-right-append-player,\n.click_blank,\n.logo-top,\n[href=\"/top-bet.html\"]"}],[743013784,{"a":".banner"}],[581096584,{"a":"#bar_float_r,\n.adsCenterHome,\n.adsTopHome,\n.adspopuprightMB,\n.banner-detail,\n.banner-topR,\n.quangcaomb"}],[1408093791,{"a":".bannerFF,\n.xbd_topBanner"}],[1056961586,{"a":".xbd_topButton"}],[250344508,{"a":"#accordion"}],[1278225876,{"a":"#npads"}],[341751234,{"a":".popmake-overlay"}],[417861596,{"a":".ad599div,\n.bets-now-button,\n.bets-now-ct,\n.pc_header,\na[data-wpel-link=\"external\"]"}],[183127207,{"a":"a[href^=\"/redirect/out?token=\"]"}],[627167528,{"a":"[id^=\"Balloon_\"]"}],[711664024,{"a":".sgpb-popup-dialog-main-div-wrapper,\n.sgpb-popup-overlay"}],[1977183043,{"a":"#qxx,\n[class^=\"qx_main\"]"}],[2074084056,{"a":"#dtm > .md\\:block.hidden"}],[700456678,{"a":".popUpBannerBox"}],[301889535,{"a":".container>.right-box"}],[653604807,{"a":".ads-detail,\n.dealer-block,\na[href^=\"https://www.mc876.com/?\"]"}],[635234952,{"a":".gnartyx-offads"}],[282635741,{"a":"[href*=\"cellphones.com.vn\"]"}],[1657323982,{"a":".textwidget"}],[772018478,{"a":".link-gold,\n[id^=\"banner\"]"}],[740161187,{"a":".mobile-catfish,\n.pc-catfish"}],[1793865720,{"a":".cp-modal-popup-container,\n.simple-banner"}],[352566859,{"a":".promotion-popup"}],[1035928933,{"a":".adsbygoogle"}],[1024796072,{"a":"#ad_global_below_navbar"}],[1449141894,{"a":".preload-banner"}],[8779422,{"a":"#boxmsgthongbaopopup"}]]);

const hostnamesMap = new Map([["banhkhuc.link",[962035817,1603950748,1583354662]],["vebotv.pro",[1603950748,1583354662]],["xoilac2.xyz",1583354662],["90phut6.live",[1331997710,371679578]],["xoilac7.net",371679578],["cakhia-tv.live",1390091793],["cakhia18.live",1865504323],["cakhia17.tv",1865504323],["cakhiatv.xyz",1865504323],["mannhantv.live",[1844823686,743013784]],["thichxemphim.net",743013784],["bimbimz.tv",743013784],["baoxaydung.com.vn",743013784],["kinhtenongthon.vn",743013784],["lsvn.vn",743013784],["taichinhdoanhnghiep.net.vn",743013784],["antt.nguoiduatin.vn",743013784],["tienphong.vn",743013784],["toquoc.vn",743013784],["zingnews.vn",743013784],["tuoi69.live",581096584],["sieukhungzz.net",581096584],["xembd.live",[1408093791,1056961586]],["cakhia.org",1056961586],["ngaytho.me",250344508],["nhacpro.me",1278225876],["tapchisex.me",341751234],["anivn.top",341751234],["thethao12h.me",417861596],["xoso.me",183127207],["xsmn.me",183127207],["keonhacai.men",627167528],["xemtivingon.tv",627167528],["gameviet.mobi",711664024],["hentaivn.moe",1977183043],["123docz.net",2074084056],["247phim.net",700456678],["2phimmoi.net",[700456678,301889535]],["mephimgi.net",700456678],["phimdinhcao.net",700456678],["xemphimchill.net",700456678],["cphimmoi.net",301889535],["360thethao.net",653604807],["animet.net",635234952],["bantincongnghe.net",282635741],["blogkienthuc.net",1657323982],["chodansinh.net",772018478],["fullphimzz.net",740161187],["gamenoob.net",1793865720],["ghienphimhd.net",352566859],["giavang.net",1035928933],["lehait.net",1035928933],["romgoc.net",1035928933],["truongblogger.top",1035928933],["gockhuat.net",1024796072],["hhkungfutv.net",1449141894],["hoc247.net",8779422]]);

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
