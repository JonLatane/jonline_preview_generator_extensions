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

// nld-0

const argsMap = new Map([[1970820092,{"a":".sponsored"}],[129035391,{"a":"article.format-standard:has([id^=\"div-gpt-ad\"]),\ndiv[class^=\"intercom-app\"] > iframe[title*=\"banner\"]"}],[1491412724,{"a":"div[data-elementor-type=\"popup\"]"}],[1516918099,{"a":"[id^=\"custom_html-\"]:has(.bitvavo-widget)"}],[1402306777,{"a":".widget_sp_image:has([onclick^=\"javascript:window.open(\"] > img[width][height])"}],[1593239657,{"a":".wpb_wrapper > center:has([src^=\"//pt.potwm.com/video-banner/\"]),\n[id^=\"custom_html\"]:has(img[src*=\"wlresources.com/\"])"}],[2005636372,{"a":"#TOP_ARTICLE,\nnav + div[style^=\"height:52px\"]"}],[1160060839,{"a":".soliloquy-wrapper:not(:has(a[href*=\"dartfreakz.nl\"])),\n.textwidget:has(a[href*=\"casino\"]),\n.wpb_wrapper a[href*=\"dartswarehouse.nl\"]"}],[1859009266,{"a":".elementor-widget-container:has(a[href$=\"dartshopmn.nl\"] > img)"}],[1908706666,{"a":".main-banner"}],[2110105270,{"a":".edgtf-carousel-holder,\nimg[width=\"640\"][height=\"180\"]"}],[1153905607,{"a":".vc_box_outline.vc_single_image-wrapper"}],[946847886,{"a":".vc_carousel-inner > .vc_carousel-slideline > .vc_carousel-slideline-inner,\n.vc_inner:has([src$=\"324x484.jpg\"]),\n.wpb_wrapper > .a-single"}],[2143508257,{"a":".et_pb_ads_agsdcm_0"}],[564439438,{"a":".plek-boven-artikel"}],[1506190103,{"a":"[id^=\"deoud-\"]"}],[1429641857,{"a":".static-map"}],[350390173,{"a":".c-partners,\ndiv[class^=\"article-page__sidebar\"] a[href]:not(a[href*=\"ditjesendatjes.nl\"]):not(a[href=\"#\"]):has(img[src])"}],[529612884,{"a":".shadow:has(#bannerCarousel)"}],[1252050661,{"a":".bc_random_banner"}],[1705059375,{"a":".prom"}],[110043590,{"a":".article-excerpt--ad"}],[429811265,{"a":".grid_ad_container"}],[1979209680,{"a":".bannner"}],[539313768,{"a":".banner:has([href*=\"/bannerclick.html&banner\"])"}],[1570136206,{"a":".entry-header > .button"}],[42222558,{"a":"[class*=\"bd-block\"]:has(a[href]):has(img[src*=\"wp-content/uploads/\"]),\nheader + section:has([class*=\"logo-showcase-slider\"])"}],[2092012141,{"a":".duurz-content:has([data-advadstrackid])"}],[578151523,{"a":".main__ad"}],[294675432,{"a":".top__ad"}],[482932365,{"a":".figure-image[data-links=\"\"]:not(a[href*=\"edelmetaal-info.nl\"]),\ndiv[class^=\" element-short\"] a[onclick*=\"outgoing\"]:has(img[width=\"180\"]):not(:has([href*=\"edelmetaal-info.nl\"]))"}],[1520660642,{"a":"div[class^=\"vc_row\"]:has(.wpb_wrapper .adsbygoogle):not(:has([href]))"}],[464662964,{"a":".banner-container"}],[1625174453,{"a":".m-banner-wrapper,\n.widget_text:has(a[href^=\"https://partner.bol.com/\"]),\n.widget_text:has(img[src*=\"/hosted-by-true-\"])"}],[402810448,{"a":"#partner-bar,\n.header__top__partners"}],[540639802,{"a":".widget_media_image > a[href]:has(.size-full.attachment-full)"}],[172794396,{"a":".headerlinks:has(iframe[src=\"linkframe.php\"])"}],[566665805,{"a":".menubanner:has([src^=\"ads\"])"}],[1650738860,{"a":".js-mock-banner"}],[2125720543,{"a":".desktop_mpu"}],[1197936247,{"a":".pt-3.height-90:has([id^=\"div-gpt-ad\"])"}],[290138625,{"a":".banner-leaderboard,\n.widgets > .la-items:has(a[href$=\"/partners\"])"}],[258307440,{"a":".section-partners"}],[926108234,{"a":"li:has(.banner)"}],[153866495,{"a":".tm-top-a,\n.tm-top-c"}],[1520687137,{"a":".sidebar__item--banner"}],[2014959989,{"a":".bet365"}],[429546374,{"a":".footer-logos,\n.has-toto-banners"}],[1057354967,{"a":".noAdBlockDetected .fd-message"}],[1869660891,{"a":"#ad-top-desktop"}],[168130760,{"a":".banner-carousel,\n.totoOdds"}],[1005126392,{"a":".bn__wrapper"}],[1655055404,{"a":".footer__partners"}],[489361571,{"a":".betcity-intro-wrapper"}]]);

const hostnamesMap = new Map([["computable.nl",1970820092],["crypto-insiders.nl",129035391],["cryptoclan.nl",1491412724],["cryptonieuws.nl",1491412724],["cryptosjop.nl",1516918099],["culturescope.nl",1402306777],["cumcams.nl",1593239657],["dagelijksestandaard.nl",2005636372],["dartfreakz.nl",1160060839],["dartsactueel.nl",1859009266],["deblueskrant.nl",1908706666],["decibel.nl",2110105270],["dekrantnieuws.nl",[1153905607,946847886]],["destreekkrant.nu",946847886],["dekrantvantynaarlo.nl",2143508257],["denachtvlinders.nl",564439438],["deoudrotterdammer.nl",1506190103],["detelefoongids.nl",1429641857],["ditjesendatjes.nl",350390173],["drentsnieuws.nl",529612884],["dsdating.nl",1252050661],["dtvnieuws.nl",1705059375],["omroephorstaandemaas.nl",1705059375],["omroepvenlo.nl",1705059375],["roulettefm.nl",1705059375],["rtvstichtsevecht.nl",1705059375],["wos.nl",1705059375],["duic.nl",110043590],["dumpert.nl",429811265],["dutchitchannel.nl",[1979209680,539313768]],["executive-people.nl",[1979209680,926108234]],["dutchporntube.nl",1570136206],["duurzaam-actueel.nl",42222558],["duurzaamnieuws.nl",2092012141],["dvhn.nl",[578151523,294675432]],["lc.nl",[578151523,294675432]],["meppelercourant.nl",294675432],["edelmetaal-info.nl",482932365],["elegance.nl",1520660642],["elkspel.nl",464662964],["fiets.nl",464662964],["fietsactief.nl",464662964],["knipmode.nl",464662964],["rootsmagazine.nl",464662964],["seasons.nl",464662964],["truckstar.nl",464662964],["vorsten.nl",464662964],["zin.nl",464662964],["emerce.nl",1625174453],["eredivisie.nl",402810448],["ero-meiden.nl",540639802],["geilverlangen.nl",540639802],["eromarkt.nl",[172794396,566665805]],["erotischemassagemarkt.nl",566665805],["erotischemodellen.nl",566665805],["swingersmarkt.nl",566665805],["eurocampings.nl",1650738860],["eurogamer.nl",2125720543],["europa-bouwmachines.nl",1197936247],["europa-heftruck.nl",1197936247],["europa-landbouwmachines.nl",1197936247],["europa-vrachtwagens.nl",1197936247],["ewmagazine.nl",[290138625,258307440]],["fotografie.nl",258307440],["fantv.nl",153866495],["fcgroningen.nl",1520687137],["fcupdate.nl",2014959989],["fcutrecht.nl",429546374],["fd.nl",1057354967],["feestdagen-nederland.nl",1869660891],["feyenoord.nl",168130760],["feyenoordpings.nl",[1005126392,1655055404,489361571]],["twentefans.nl",[1005126392,1655055404]],["voetbalverslaafd.nl",1005126392]]);

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
