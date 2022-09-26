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

const argsMap = new Map([[1075300274,{"a":"#top:has(.banner)"}],[249030060,{"a":"[id^=\"text\"]:has([src^=\"https://www.shespot.nl/wp-content/uploads/\"])"}],[1865306272,{"a":"section:has(div[class$=\"sponsors\"])"}],[1685202705,{"a":".holder-ads"}],[1998058013,{"a":"#r89-mobile-rectangle-mid,\n#r89-takeover"}],[1610870877,{"a":".sam-slot"}],[217287224,{"a":".sols,\n[id]:has(.company-add)"}],[925238970,{"a":".adchannel"}],[629817688,{"a":".logo_main_sponsor_image,\n.logo_slider_logos"}],[2094140536,{"a":".banner-btf-side-rectangle,\n.banner-sky,\n.leader-below-game"}],[1241165223,{"a":".game-page-sidebar"}],[739387519,{"a":".widget_text.gridlove-box"}],[507546036,{"a":".spel_b1,\n.spel_b2"}],[966532437,{"a":".widget_media_image:not(:has(img[src*=\"vierkant-spreekbuis\"])),\n.widget_spreekbuis_partners"}],[1038256617,{"a":"aside.widget:has(a[href*=\"trff9links.com/\"])"}],[1404937738,{"a":".advertentieblock"}],[457805416,{"a":".top-banner"}],[1092837073,{"a":".wp-block-buttons"}],[1350888884,{"a":"[class$=\"-banners-wrapper\"]"}],[271031951,{"a":".creatividad"}],[1587676160,{"a":"#lead"}],[245665838,{"a":".ArticleBodyBlocks__bannerWrapper,\n.ArticlePageWrapper__banner,\n.MainCuratedTeasersLayout__banner,\n.SectionPage__bannerWrapper,\n.SportScoreboardPage__banner,\n.TextArticlePage__bannerWrapper,\n.VideoArticlePage__banner,\n.VideoPage__banner,\n.WebpushOptin__main,\n.withBanners,\n.withBanners + .ComponentRotation"}],[1961485754,{"a":"#lb_header"}],[2088384746,{"a":"[href=\"https://www.domasmsuite.nl\"]"}],[687919262,{"a":"aside[id^=\"block\"]:has(img[src*=\"/wp-content/uploads/\"][src$=\".gif\"])"}],[797818659,{"a":".theme-advertorial"}],[1766455283,{"a":"[href^=\"https://www.totaaltv.nl/plugins/banner/\"]"}],[138702451,{"a":".SponsorBlock"}],[1784805995,{"a":".desktopad"}],[446406437,{"a":"[id$=\"halfpage\"],\n[id$=\"top-ad\"],\n[id*=\"r89\"][id$=\"home\"],\ndiv.ads-contain"}],[812484855,{"a":".werbung"}],[1186294766,{"a":"[class^=\"ads-adsense-\"]"}],[119931275,{"a":".trucks_ros_alpha_rectangle-halfpage,\n.trucks_ros_leaderboard-billboard"}],[108346534,{"a":".img_position_left:has(.adsbygoogle)"}],[1635164043,{"a":".easingslider"}],[2063976580,{"a":"div[class^=\"r89-desktop\"]"}],[1355023064,{"a":".banner-fluid"}],[295424894,{"a":".square-item:has( > .banner)"}],[2021636506,{"a":".adBoxbig"}],[1873175073,{"a":"[id^=\"text-\"]:has([href^=\"https://www.eo-acties.nl/TradeTracker/index.aspx\"])"}],[1715145738,{"a":"[class^=\"bannerzone_\"]:has([href])"}],[1812957198,{"a":"[src^=\"/derden/betcity-\"]"}],[1659396475,{"a":".uitgelichtbox"}],[1435641371,{"a":"#partner-links,\n.list-item:has(script[src*=\"undefined\"]),\n[href^=\"https://xltube.nl/click/\"],\n[id$=\"fish-hooks\"],\ndiv[id^=\"undefined\"]"}],[2033289962,{"a":"div[class^=\"Component-bannerTopWrapper-\"]"}],[597997105,{"a":"div[id][class^=\"css\"]"}],[2004179110,{"a":".betting-provider-row"}],[2048686712,{"a":".modal"}],[992185728,{"a":"[href^=\"https://www.anp.nl/start\"]"}],[2009596638,{"a":"[class^=\"row advertentie-\"]:not([class*=\"advertentie-1\"])"}],[1465443735,{"a":".row [id^=\"form\"] + .box > .box-body:has(img)"}],[398260945,{"a":"[class*=\"right\"] .wpb_wrapper:has(img[height=\"520\"][src])"}],[737768403,{"a":"a[href^=\"https://partner.bol.com/\"],\ndiv[class^=\"col\"]:has([class^=\"add\"])"}],[1584837213,{"a":".banner_wrapper"}]]);

const hostnamesMap = new Map([["sexpunt.nl",1075300274],["shespot.nl",249030060],["simone.nl",1865306272],["slam.nl",1685202705],["soccernews.nl",1998058013],["softonic.nl",1610870877],["solarmagazine.nl",217287224],["sozio.nl",925238970],["sparta-rotterdam.nl",629817688],["speeleiland.nl",2094140536],["spel.nl",1241165223],["spelletjes.nl",1241165223],["spelersvrouw.nl",739387519],["spidersolitairespelen.nl",507546036],["spreekbuis.nl",966532437],["sproeiendekutjes.nl",1038256617],["startlijstjes.nl",1404937738],["startpagina.nl",457805416],["streamwijzer.nl",1092837073],["streekstadcentraal.nl",1350888884],["tameteo.nl",271031951],["techzine.nl",1587676160],["telegraaf.nl",245665838],["tellows.nl",1961485754],["thekinkyweb.nl",2088384746],["tiener-sexverhalen.nl",687919262],["topgear.nl",797818659],["totaaltv.nl",1766455283],["totoknvbbeker.nl",138702451],["touretappe.nl",1784805995],["tpo.nl",446406437],["transfermarkt.nl",812484855],["treinreiziger.nl",1186294766],["trucks.nl",119931275],["turkinfo.nl",108346534],["turksemedia.nl",1635164043],["tvblik.nl",[2063976580,1355023064]],["voetbalrotterdam",2063976580],["tvgids.nl",295424894],["tvgids24.nl",2021636506],["tweedehandschristelijkeboeken.nl",1873175073],["twentefm.nl",1715145738],["ucl-voetbal.nl",1812957198],["uecl-voetbal.nl",1659396475],["uel-voetbal.nl",1659396475],["vagina.nl",1435641371],["vandaaginside.nl",2033289962],["veronicasuperguide.nl",597997105],["vi.nl",2004179110],["video18.nl",2048686712],["villamedia.nl",992185728],["visserijnieuws.nl",2009596638],["vitesse.nl",1465443735],["vives.nl",398260945],["vlaamskijken.nl",737768403],["vlietnieuws.nl",1584837213]]);

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
