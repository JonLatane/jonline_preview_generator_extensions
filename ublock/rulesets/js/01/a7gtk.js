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

const argsMap = new Map([[87508998,{"a":"[id^=\"adv\"]"}],[1721006479,{"a":".quang_cao_pc_right_hoc_tap"}],[49516297,{"a":".advHolder"}],[1202916006,{"a":".ads_shortcode"}],[1696234321,{"a":".entry>a[target=\"_blank\"],\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"vender.vn\"]"}],[366794341,{"a":".admicro_top"}],[60415295,{"a":"#tdi_129"}],[261134477,{"a":".sponsor-zone"}],[1233327372,{"a":"div[id^=\"ads_\"]"}],[1085920675,{"a":"#box-affiliate"}],[970144978,{"a":"#top-adv"}],[1580231993,{"a":".bannerchuyenmuc,\n.show-qc-home,\n.show_qc"}],[1878261125,{"a":".baseHtml.noticeContent"}],[1198806642,{"a":"#popup_center"}],[440341723,{"a":"div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]"}],[885594665,{"a":".banner-ads-home,\n.banner-in"}],[300683379,{"a":"div[class^=\"adv-\"]"}],[1605499725,{"a":".ads-970x280"}],[1966072446,{"a":"#mobi-top,\n#pc-top,\n.d-flex.justify-content-between>div>div.d-flex.justify-content-around.mt-4"}],[9193252,{"a":"#myCarousel,\n.banner-boder-zoom"}],[1031425889,{"a":".modal-di__button-wrapper,\n.sam-slot"}],[640361869,{"a":"[id^=\"admzone\"]"}],[1739340911,{"a":".ads-general-banner"}],[346049799,{"a":"div[class$=\"_ads\"],\ndiv[data-id=\"2\"]"}],[2147097719,{"a":".ads_660x90,\n[class^=\"ads_\"]"}],[1133840586,{"a":".bannerTOP1,\n.pc.bannerAuto"}],[463371088,{"a":"div[id^=\"adsMobile\"]"}],[622540128,{"a":".fyi"}],[544537454,{"a":".ads-common-box"}],[572731236,{"a":".p-body-pageContent>table[style=\"width:100%;display:inline-block;background: #fff;\"]"}],[2039966424,{"a":".in-article-promo,\n.jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\n.promo-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]"}],[1884868724,{"a":".container .desktopjszone,\n.mobilejszone"}],[54146494,{"a":".ads-responsive,\n[id^=\"ads-\"]"}],[1549868533,{"a":"#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot"}],[1148686724,{"a":".clearfix.adregion,\n.visible-md.header-banners"}]]);

const hostnamesMap = new Map([["kinhtedothi.vn",87508998],["minhngoc.net.vn",87508998],["vn-z.vn",87508998],["zingnews.vn",87508998],["lazi.vn",1721006479],["luatvietnam.vn",49516297],["lucloi.vn",1202916006],["maclife.vn",1696234321],["muare.vn",366794341],["muaxegiatot.vn",60415295],["kienthuc.net.vn",261134477],["phunumoi.net.vn",1233327372],["nhipcaudautu.vn",1233327372],["nghesiviet.vn",1085920675],["nhacdj.vn",970144978],["nhatrangclub.vn",[1580231993,1878261125]],["raovatbienhoa.vn",1878261125],["olug.vn",1198806642],["phapluatplus.vn",440341723],["realty.vn",885594665],["reatimes.vn",300683379],["rung.vn",1605499725],["saostar.vn",1966072446],["sharecode.vn",9193252],["softonic.vn",1031425889],["soha.vn",640361869],["startalk.vn",1739340911],["thethao247.vn",346049799],["thethaovanhoa.vn",2147097719],["thitruongtaichinhtiente.vn",1133840586],["tienphong.vn",[463371088,622540128]],["tinnhanhchungkhoan.vn",622540128],["tiin.vn",544537454],["timdaily.vn",572731236],["tinhte.vn",2039966424],["tintucvietnam.vn",1884868724],["truyenfull.vn",54146494],["tuoitre.vn",1549868533],["tuyengiao.vn",1148686724]]);

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
