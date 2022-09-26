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

const argsMap = new Map([[1898544993,{"a":".cash-fish"}],[2014222950,{"a":".top-mobile-banner"}],[978156026,{"a":"#itro_opaco"}],[1772759721,{"a":"#mp-preload-popup-overlay,\n[data-id=\"catfish\"],\n[data-id=\"popup\"],\n[id^=\"popup_\"],\ndiv[id^=\"catfish_\"]"}],[1799349925,{"a":".access-trade,\n.phiden"}],[557214021,{"a":"._fix_ads_2.edit_ads,\n.popup_center"}],[725899290,{"a":".fix_bottom"}],[832937152,{"a":"#closePC,\n#fixed_bottom"}],[1916764225,{"a":".banner-preload"}],[1885344506,{"a":"#catfish-banner,\n.topless"}],[662742134,{"a":"#overlay-pop"}],[1058182621,{"a":".a--d-wrapper"}],[666338723,{"a":"#float_content_right"}],[976097136,{"a":".ads-container"}],[1532185924,{"a":".ads-bottom-margin,\n.ads_blocks_advice,\n.bs-callout[style=\"min-height: 400px; margin-top:0px;\"]"}],[457805416,{"a":".top-banner"}],[1541639175,{"a":"#a-player,\n#backgroundPopupp,\n#popupContact,\n#popup_fi,\n#wap_bottombanner,\n.black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]"}],[141127437,{"a":"#adsposttop"}],[1204930345,{"a":"#adrighttop"}],[460009067,{"a":".adbox"}],[428074512,{"a":".adHTML2,\n.banner-bottom-append-custom,\n.button-in-player-box,\n.datCuocBTN,\n.footer-banner"}],[1617970332,{"a":".sticky"}],[533537455,{"a":".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content>.wrap-btn-action,\n.menu-right-slide,\n.modelAds,\ndiv.adHTML3"}],[1489208475,{"a":"#divFLRALeft,\n#divFLRARight,\np[style^=\"display: block; position: fixed;\"]"}],[1204834210,{"a":".js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samCarousel.samAlignCenter.samCodeUnit"}],[528208289,{"a":".ads-shv"}],[1047451442,{"a":".b-ds-footer"}],[212572729,{"a":".stream-item"}],[1236252309,{"a":"#footer-widget-area,\n.e3lan.e3lan-top"}],[390030,{"a":"#adstop2,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right"}],[217491757,{"a":".homePageAds"}],[2083057327,{"a":"#table978"}],[701932816,{"a":".adsMobile,\n.adsShowPc,\n.dcmm-button-player.row"}],[641308253,{"a":"#overlay"}],[1118243431,{"a":".offer__btn"}]]);

const hostnamesMap = new Map([["phim18hd.com",[1898544993,2014222950]],["yeuphimmoik.com",1898544993],["phim202.com",978156026],["phimdacap.com",1772759721],["phimhanquoc18.com",1799349925],["phimhay3s.com",[557214021,725899290]],["phimmoikf.com",725899290],["phimmoi18.com",832937152],["phimmoiiii123.com",1916764225],["phimnhua.com",1885344506],["phimsml.com",[662742134,1058182621]],["fullphimzz.net",662742134],["phimraphot.net",1058182621],["phimtn.com",666338723],["phuongtrinhhoahoc.com",[976097136,1532185924,457805416]],["ketqua247.net",976097136],["bimbimz.tv",976097136],["tructiepbongda9.com",457805416],["phimbo.vip",457805416],["phym18.com",1541639175],["quantrimang.com",[141127437,1204930345,460009067]],["hoatieu.vn",[141127437,1617970332]],["vndoc.com",460009067],["khoahoc.tv",460009067],["download.com.vn",460009067],["download.vn",460009067],["gamevui.vn",460009067],["rakhoi1.com",[428074512,1617970332,533537455]],["cakhia18.live",428074512],["cakhia17.tv",428074512],["cakhiatv.xyz",428074512],["razorphimzz.com",1489208475],["rphangx.com",1204834210],["saohaivuong.com",528208289],["sexhayvc.com",1047451442],["thuthuatjb.com",212572729],["thuthuattienich.com",1236252309],["tivi4k.com",390030],["traderviet.com",217491757],["trochoivui.com",2083057327],["tructiepdabong1.com",[701932816,641308253,1118243431]],["360thethao.net",641308253],["subnhanhz.net",641308253],["vkoolzz.net",641308253],["xoilac7.tv",1118243431]]);

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
