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

const argsMap = new Map([[2080780415,{"a":".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc"}],[1989216478,{"a":".btn-single-cuoc"}],[2015505666,{"a":".offer-rating.widget-offers__list"}],[1360562377,{"a":"#right_float,\n.art_header_text,\n[id$=\"float_banner\"]"}],[844119175,{"a":"[class*=\"_banner\"]"}],[84595347,{"a":".abp-header"}],[570369764,{"a":"[href^=\"https://billing.stablehost.com/aff.php\"]"}],[409358347,{"a":".widget.widget_text"}],[66080285,{"a":"div[id^=\"float\"],\ndiv[id^=\"hide_float\"]"}],[1111987762,{"a":"#text-13,\n#text-14,\n.hocwp-ads"}],[49909967,{"a":".bannerBox,\n.footerBanner,\ncenter>[href*=\"tlink.vn\"]"}],[107430396,{"a":".player-midpoint-progress"}],[170108589,{"a":".adsv"}],[284327752,{"a":"a[rel=\"noopener noreferrer\"]"}],[155456602,{"a":".widget-wrap.widget_text"}],[249059556,{"a":"#ads-preload"}],[1421427236,{"a":".col-xl-3.col-lg-6.d-md-block.d-none,\n.lazyloaded.mx-auto.d-block.text-center.mb-20,\n.quangcao-down>p,\n.text-down"}],[651653128,{"a":"#custom_html-7"}],[1955123777,{"a":".div_box_adv"}],[960066617,{"a":"div.box-aside"}],[509690881,{"a":"#content>div[align=\"right\"],\n#login-ads,\n.video-player"}],[1258872449,{"a":".ad-pin-right-bottom"}],[298046060,{"a":".adv"}],[1148699283,{"a":".top-right"}],[819940136,{"a":".line-ads"}],[1372774290,{"a":".ff-banner"}],[1280764742,{"a":"#banner_macau,\n.banner1,\ndiv[id^=\"banner_\"]"}],[2104053826,{"a":"#home_header"}],[5155642,{"a":".col-xs-8.sidebar-col,\n.custom-html-widget.textwidget>.external"}],[1462513215,{"a":"#fixedban,\ndiv[class^=\"banner-mobile\"]"}],[1968977177,{"a":".samCustomSize.samAlignCenter.samCodeUnit"}],[1389592484,{"a":".samItem"}],[2016680454,{"a":".sticky_bottom"}],[1245461808,{"a":".footmenu,\na[href^=\"//\"][rel=\"nofollow norefferer noopener\"]"}],[1377213875,{"a":".btn_small_fix_container"}]]);

const hostnamesMap = new Map([["baonga.com",2080780415],["bongda12h.com",[1989216478,2015505666]],["tructiepdabong1.com",2015505666],["bongdaso.com",[1360562377,844119175]],["bongdaso12.com",[1360562377,844119175]],["bongdaso12.net",[1360562377,844119175]],["bongdaso.vn",[1360562377,844119175]],["xemtivisohd.com",844119175],["blog.abit.vn",844119175],["bylutv.com",84595347],["cai-win.com",570369764],["canhrau.com",409358347],["topthuthuat.com",409358347],["chotlo.com",66080285],["chouc.com",1111987762],["clbgamesvn.com",49909967],["clipanime.com",107430396],["fim1080.com",[107430396,1372774290]],["mephimmy.com",[107430396,1372774290]],["mephimnhat.com",[107430396,1372774290]],["mephimnhat1.com",107430396],["phim1080z.com",[107430396,1372774290]],["phimmoi1.com",107430396],["phimnhanh1.com",107430396],["xemphim1080.com",107430396],["mephimtrung.net",[107430396,1372774290]],["vuighe.net",107430396],["coccoc.com",170108589],["contuhoc.com",284327752],["cryptoviet.com",155456602],["dailyphimz.com",249059556],["phimbathu.info",249059556],["film365.org",249059556],["phimno1.xyz",249059556],["daominhha.com",1421427236],["dexuat.com",651653128],["diadiem.com",1955123777],["doisongphapluat.com",960066617],["dtruyen.com",509690881],["dubaotiente.com",[1258872449,298046060]],["tuvannet.de",298046060],["bongda.com.vn",298046060],["giadinhonline.vn",298046060],["nongnghiep.vn",298046060],["vietnamnet.vn",298046060],["ebookbkmt.com",1148699283],["ephoto360.com",819940136],["mehoathinh.com",1372774290],["mephimthai.com",1372774290],["phimhan24.com",1372774290],["phimmy24.com",1372774290],["phimnhat24.com",1372774290],["phimtrung24.com",1372774290],["animevip.tv",1372774290],["vlxx.xyz",1372774290],["fphim.com",1280764742],["fsharetv.com",2104053826],["fullcrackpc.com",5155642],["game4v.com",1462513215],["forum.gocmod.com",[1968977177,1389592484]],["voz.vn",1389592484],["gvnvh18.com",[2016680454,1245461808]],["phimvang.net",2016680454],["xemphimtop.net",2016680454],["hoahoc247.com",1377213875]]);

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
