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

const argsMap = new Map([[269934180,{"a":".bnr"}],[327995980,{"a":"#onetime-popup"}],[1424124842,{"a":"[href*=\"pornokartel.nl/adverteren\"]"}],[1284085268,{"a":"[class^=\"Scl\"]:has([src^=\"//ads\"])"}],[136087112,{"a":".code-block-1,\n[id^=\"block\"]:has([src$=\"/jads.js\"]),\n[id^=\"custom_html\"]:has([src^=\"https://chainadvertising.eu/\"]),\n[id^=\"custom_html\"]:has([src^=\"https://www.2k19.nl/\"])"}],[1921509740,{"a":".banner-holder,\nimg[width=\"160\"][height=\"92\"]"}],[930828906,{"a":".site-background-banner,\n.site-home-banner,\n.site-top-banner"}],[1020660940,{"a":".block-sponsors--psv,\n.block-sponsors-desktop,\n.toto"}],[1586755205,{"a":"aside div:has(.bannergroup_noborder)"}],[1298586670,{"a":".banneritem:not(:has([href^=\"/component/banners/click\"]))"}],[1097050487,{"a":".inline-partners"}],[33525628,{"a":".overlay:has([src^=\"blob:https://quickclaims.nl/\"])"}],[39081498,{"a":".hthb-notification"}],[1418000602,{"a":"article-side-block:has(a[href][target=\"_blank\"] > img[width=\"310\"][height=\"200\"])"}],[937587009,{"a":".branded-countdown__content__partner-wrapper,\n.homepage-casino-wrapper"}],[427727140,{"a":".eskimo-carousel-container"}],[457720608,{"a":".module_round_box"}],[14715599,{"a":".hoofdAd2"}],[917922643,{"a":".codalt-container,\n.infotainment:has(a[href^=\"/advert\"]),\n.rdnl__adds"}],[1264117320,{"a":"section:has(.item-banner)"}],[856840384,{"a":".bannercontainer"}],[393536908,{"a":"img[width=\"300\"][height=\"100\"]"}],[238610825,{"a":".regio-widget"}],[1295599662,{"a":".td-a-rec"}],[1778621337,{"a":"#advertisement"}],[654841098,{"a":".widget_itarget_banners"}],[1684002128,{"a":".carousel"}],[1643668976,{"a":"aside > .textwidget [src*=\"wp.com/romagazine.nl/\"][src*=\"/wp-content/uploads/\"][src$=\"?w=665\"]"}],[1654058965,{"a":"img[title^=\"roba_sponosor_\"]"}],[79494620,{"a":".list-sponsors"}],[1711587724,{"a":"div[style*=\"width:730px; height:90px;\"]"}],[2090245356,{"a":".dfp-rectangle-wrapper"}],[2108848758,{"a":"#dfp-billboard-wrapper,\n.rtldart"}],[1609797973,{"a":".dfp-billboard-wrapper,\ndiv[class$=\"undefined\"]"}],[829241610,{"a":"#recommendations-above-ad,\ndiv[class^=\"col\"]:has([class*=\"adcontainer\"])"}],[99308958,{"a":"#advertenties,\n#advertentiesOnder"}],[1321178132,{"a":".footeradd"}],[1015753496,{"a":".art-positioncontrol"}],[192844682,{"a":".avia-content-slider1"}],[470584570,{"a":".partnerlink"}],[850847931,{"a":".row > [class]:has(.sfr-pdp-section[id$=\"crossseller\"])"}],[1724675762,{"a":"#block-leaderboard,\n#block-topbannersidebar"}],[181003692,{"a":"#media_image-3,\n#media_image-4"}],[1496693394,{"a":".widget_minisites"}],[1498506134,{"a":".et_pb_text:has(* > .g):not(:has(.heading-more)),\n[href^=\"https://dt51.net/\"],\ngofollow:has(img[src])"}],[469275715,{"a":"[id^=\"sgpb-popup-dialog\"]:has(iframe[src^=\"https://www.affilaxy.com/promos/\"]),\n[id^=\"sgpb-popup-dialog\"]:has(iframe[src^=\"https://www.affilaxy.com/promos/\"]) + [class]"}],[26846371,{"a":".videoOverAdBig"}],[243218566,{"a":"[id^=\"custom_html-\"]:has(iframe[data-src*=\"jygotubvpyguak.com\"])"}],[1526775470,{"a":".entry-content > div"}],[864546346,{"a":"#recommendBlock,\n[href^=\"https://ads.v1d305.com/redirect/\"]"}],[2102332297,{"a":".blogBanners,\n.topBanners"}],[1228437812,{"a":".banner-wrapper,\ndiv[id^=\"banner-\"]"}],[924514495,{"a":".widget_custom_html:has([src*=\"affilaxy.com\"]),\n.widget_media_image:has(img[src*=\"sexmeid.nl/wp-content/uploads/\"][src$=\".gif\"])"}],[1010111070,{"a":"#pre-footer-banners,\n#top-banner"}]]);

const hostnamesMap = new Map([["podcastluisteren.nl",269934180],["pokeren.nl",327995980],["pornokartel.nl",1424124842],["pornolekker.nl",1284085268],["pornopower.nl",136087112],["prewarcar.nl",1921509740],["proshop.nl",930828906],["psv.nl",1020660940],["puurnaturisme.nl",1586755205],["puuropreis.nl",1298586670],["qmusic.nl",1097050487],["quickclaims.nl",33525628],["racesport.nl",39081498],["racexpress.nl",1418000602],["racingnews365.nl",937587009],["radiocontinu.nl",427727140],["radioeenhoorn.nl",457720608],["radiofm.nl",14715599],["rd.nl",917922643],["reformatorischeomroep.nl",1264117320],["refoweb.nl",856840384],["regio-voetbal.nl",393536908],["regionoordkop.nl",238610825],["regioonline.nl",1295599662],["rickfm.nl",1778621337],["riskcompliance.nl",654841098],["rkcwaalwijk.nl",1684002128],["romagazine.nl",1643668976],["rotterdambasketbal.nl",1654058965],["roulettefm.nl",79494620],["rtvstichtsevecht.nl",79494620],["routenet.nl",1711587724],["rtlboulevard.nl",[2090245356,2108848758]],["rtlnieuws.nl",[2090245356,1609797973]],["rtvdrenthe.nl",829241610],["rtveen.nl",99308958],["rtvgo.nl",1321178132],["rtvkrimpenerwaard.nl",1015753496],["salvora.nl",192844682],["sc-heerenveen.nl",470584570],["schaefer-shop.nl",850847931],["scheepvaartkrant.nl",1724675762],["schiedamsnieuws.nl",181003692],["schuttevaer.nl",1496693394],["seksmet.nl",1498506134],["seksverhalen.nl",469275715],["sex-kamer.nl",26846371],["sexcam-mokkels.nl",[243218566,1526775470]],["tellows.nl",1526775470],["sexfun.nl",864546346],["sexguide.nl",2102332297],["sexjobs.nl",1228437812],["sexmeid.nl",924514495],["sexpower.nl",1010111070]]);

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
