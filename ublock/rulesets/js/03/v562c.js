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

const argsMap = new Map([[311012724,{"a":".qc","n":["livescore.com","msn.com","dm.de"]}],[1303552952,{"a":".banners"}],[1492184434,{"a":"#popup_banner_beta"}],[179930281,{"a":"#widget-15,\n.WidgetFramework_WidgetRenderer_Html"}],[1955861738,{"a":"#invideo_wrapper,\n#pc-catfixx,\n.Ads,\n.mobile-catfixx,\ndiv.Dvr-300,\ndiv[style^=\"position: fixed; top: 60px\"]"}],[1557406160,{"a":".jw-logo"}],[1171569000,{"a":".ads"}],[2027581260,{"a":".banner-sticky-footer-wrapper"}],[1220602270,{"a":".right-box.top-block"}],[2068637807,{"a":".no-ads,\n.preloader-wrapper"}],[1816163057,{"a":".ad-floater,\n.video-ad-layer"}],[877807497,{"a":"#catfish"}],[1022719736,{"a":".float-ck"}],[1720774964,{"a":"div[id^=\"adsphim-\"]"}],[836809792,{"a":".adsphim"}],[1395573317,{"a":".ab1"}],[425022830,{"a":"#custom_html-45,\n#menu-menu li:nth-child(1n+7)"}],[2064454737,{"a":".ad-container"}],[333869965,{"a":"#sideAdsLeft,\n#sideAdsRight"}],[401694405,{"a":"#popup-giua-man-hinh"}],[244878623,{"a":".float-ck-center-lt"}],[205357453,{"a":".sticky-footer"}],[237664679,{"a":".banner-top"}],[545413840,{"a":"#overlay-box,\n.carousel-inner > .carousel-item:first-child,\n.catfish-desktop"}],[457275769,{"a":"#Top_b2,\n#bottomFixedDiv,\ntr[id^=\"word_\"]"}],[106577568,{"a":".single-video"}],[22067358,{"a":".catfish-ck"}],[743176662,{"a":".t_logo"}],[1584752578,{"a":"#qc_clgt,\n#qc_clgt_vuong,\n.advertisement"}],[1657074788,{"a":"#ads_location"}],[968019543,{"a":".gnarty-offads"}],[779282012,{"a":"#menubentrai,\n#mobile-ads"}],[1971487617,{"a":".demo-wrapper + div[id][class]"}],[1980921000,{"a":".banner-pc.banner-preload"}],[82446935,{"a":"#BaoMoi_HalfPage"}]]);

const hostnamesMap = new Map([["soikeo.ai",[1303552952,1492184434]],["ketqua247.net",1303552952],["bongda365.top",1303552952],["keoso.tv",1303552952],["tvhai.co",[1492184434,205357453]],["bylutv.com",[1492184434,1557406160,1395573317]],["tvchill.org",[1492184434,743176662]],["azviet.biz",179930281],["animevietsub.cc",[1955861738,1557406160,1171569000]],["api.anime3s.com",[1557406160,743176662]],["mephimtv.com",1557406160],["mphimmoix.com",[1557406160,1171569000]],["p.thoctv.com",1557406160],["banthang.in",1557406160],["rakhoi1.live",1557406160],["2phimmoi.net",[1557406160,877807497,401694405]],["skyphimz.net",[1557406160,2064454737,401694405]],["ssplay.net",1557406160],["streamsb.net",1557406160],["play.vnupload.net",1557406160],["motchill.org",[1557406160,401694405]],["vebotv.pro",1557406160],["play.plhqtvhay.xyz",1557406160],["coiphim.cc",[1171569000,2068637807,1816163057]],["appvn.com",1171569000],["huphimtv.com",[1171569000,333869965]],["laptrinhx.com",1171569000],["linkerpt.com",1171569000],["tinnhac.com",1171569000],["xemphimvuitv.com",1171569000],["xoso.me",1171569000],["xsmn.me",1171569000],["ghientv.net",[1171569000,2068637807,1816163057]],["ophimhd.net",1171569000],["vieclam123.net",1171569000],["cungthi.online",1171569000],["film365.org",1171569000],["phimgif.tv",1171569000],["antt.vn",1171569000],["bongda24h.vn",1171569000],["kienthuc.net.vn",1171569000],["saostar.vn",1171569000],["vietnamplus.vn",1171569000],["biphim.cc",[2027581260,1220602270]],["phimmois.cc",2027581260],["biphims.com",[2027581260,1220602270]],["biphims.net",2027581260],["hdvips.net",2027581260],["dongphymtv.net",1220602270],["hhpanda.tv",1220602270],["ghienphimhd.net",1816163057],["phimmoiaz.cc",877807497],["fimfast.co",[877807497,2064454737,333869965,401694405]],["247phim.com",[877807497,545413840]],["truyentranh86.com",877807497],["phechill.net",[877807497,237664679]],["xemphimchill.net",877807497],["vuianime.tv",877807497],["hhninja.xyz",877807497],["sexvietnam.cc",1022719736],["4rkinggame.com",1022719736],["animechanel.com",1022719736],["animevnn.com",1022719736],["biphim18.com",1022719736],["dailyphimz.com",1022719736],["infothethao.com",1022719736],["kenhgamez.com",1022719736],["listnhacai.com",1022719736],["phimplay.com",1022719736],["360thethao.net",1022719736],["gunnylau360.net",1022719736],["gunnymienphi.net",1022719736],["khophimhd.net",1022719736],["mythethao.net",1022719736],["rphangs.net",1022719736],["vkoolzz.net",[1022719736,22067358]],["vuonhoalan.net",1022719736],["alophim.org",1022719736],["danhcotuong.org",1022719736],["thiendia88.org",1022719736],["7chill.tv",1022719736],["phimno1.xyz",[1022719736,1657074788]],["webphim.cc",[1720774964,836809792]],["luotphim2.com",1720774964],["luotphimtv.live",1720774964],["luotphim.to",1720774964],["hayghe.club",1395573317],["bongdaso.co",425022830],["ephoto360.com",2064454737],["thiepmung.com",2064454737],["cphimmoi.net",[2064454737,401694405]],["phimbotv.com",401694405],["phimtn.com",[401694405,244878623]],["phimdinhcao.net",401694405],["ssphim.org",[401694405,743176662]],["kingphim.co",244878623],["hh3dhay.com",244878623],["khophim18.com",244878623],["tvhay.top",244878623],["vietphim.tv",244878623],["kenhphim.us",244878623],["123nhadatviet.com",237664679],["123nhadatviet.net",237664679],["tuoitre.vn",237664679],["tuoitrenews.vn",237664679],["vn.7msport.com",457275769],["a3mnga.com",106577568],["ahaphimz.com",22067358],["phimmoichills.net",22067358],["vphimzz.net",22067358],["phimvang.net",743176662],["xemphimtop.net",743176662],["anime47.com",[1584752578,1657074788]],["animetvn.com",[968019543,779282012]],["animet.net",968019543],["phimmoi18.net",968019543],["anonyviet.com",1971487617],["aphimhot2.com",1980921000],["motphim123.com",1980921000],["baomoi.com",82446935]]);

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
