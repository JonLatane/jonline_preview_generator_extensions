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

// swe-1

const argsMap = new Map([[2086020360,{"a":".ad-placement-container,.ad-mark-small,.ad-mark-rotated,[class*=\"panorama\"]"}],[1932003888,{"a":"div[class*=\"desktop-billboard\"],div[class*=\"desktop-rectangle\"],div[class*=\"desktop-hpa\"],div[class*=\"outstream-video\"],div[class*=\"mobile-billboard\"],div[class*=\"mobile-rectangle\"]"}],[445927823,{"a":"#toast-container"}],[377429797,{"a":".alman-teaser,.alman-teaser-flash,[id^=\"almad-\"]"}],[720233643,{"a":".Teaser--native,.o-native"}],[641982780,{"a":".Cookie"}],[283813723,{"a":"div[id^=\"consent-\"]"}],[1039609607,{"a":".Ad"}],[1140743450,{"a":"[class*=\"panorama\"]"}],[278189736,{"a":".sticky-sidebar .widget_media_image,#text-4"}],[512835253,{"a":"[id*=\"lokus_gallery\"],[id*=\"marknadsguiden\"]"}],[878672703,{"a":"#annons"}],[1100093296,{"a":".location-header_before,\n.more-stories"}],[1124519137,{"a":"#Banners"}],[1881221754,{"a":"#main > .col-links"}],[1675824797,{"a":".cookieMessage,.noMarginAd"}],[1272197569,{"a":".newsletter-popup"}],[1888710936,{"a":".popup--cookie"}],[971395673,{"a":".consent"}],[447523162,{"a":".elementor-widget[data-settings*=\"sticky_\"]"}],[803587310,{"a":"#RightDiv"}],[151227051,{"a":".StartPageBoxRow > .boxcontainer:last-child > .StartPageBoxNarrow,\n.StartPageBoxRow > .boxcontainer:nth-child(2) > .StartPageBoxNarrow"}],[735809316,{"a":".puffLine,.d-flex > div[style*=\"min-height\"]"}],[1814802713,{"a":"#top-banner-mobile,.apd-text,.apds_main,.entry-priomaker,[class^=\"dls-\"]"}],[2052298222,{"a":"#top-banner"}],[1179621055,{"a":".cookie-consent-wrapper"}],[1855837010,{"a":".ann-puff,.headerLinks"}],[1473318181,{"a":"a[href*=\"sponsrat-innehall\"]"}],[1362381062,{"a":"aside.section-sm"}],[1659235438,{"a":"a[target$=\"blank\"] img"}],[1146735433,{"a":".bettips-am"}],[457805416,{"a":".top-banner"}],[891156602,{"a":".post-card-sponsored,.modal-plus,.modal-backdrop,.footer-newsletter"}],[977068533,{"a":".annonser"}],[1444847239,{"a":"fl-panorama-top,fl-newsletter-popup"}],[1615003834,{"a":"#cookie_alert"}],[1726161808,{"a":".pum-overlay"}],[922051537,{"a":".datax"}],[2140936243,{"a":"#placement_panorama,.blocket-placement,div[style=\"height: 240px;\"],[class*=\"offering-info-box\"]"}],[933925274,{"a":".home-banner,img[alt*=\"banner\"]"}],[2011161466,{"a":".cookie-law"}],[879200497,{"a":"[id^=\"boktu-\"]"}],[184327900,{"a":".ads-sticky-wrapper,.bottom-advertisement,.agencyBanner,#tabjamfor,.midbosatad-ad"}],[155831268,{"a":"#outer"}],[861561292,{"a":"[id^=\"borskollen_small\"],[id^=\"borskollen_large\"],.featured-link"}],[206174508,{"a":".banner-image"}],[1578848253,{"a":"#header-banner"}],[1185067171,{"a":"div[id^=\"brans-\"],.widget-sponsored-post"}],[382394065,{"a":"[class*=\"sponsored\"]"}],[1161244072,{"a":".site-information-container,.newsletter-popup-container"}]]);

const hostnamesMap = new Map([["alltomstockholm.se",2086020360],["alltsvarade.se",1932003888],["alpresor.se",445927823],["arbetarskydd.se",377429797],["lag-avtal.se",377429797],["nyteknik.se",377429797],["arbetet.se",720233643],["fastighetsfolket.se",720233643],["handelsnytt.se",720233643],["ka.se",720233643],["malarnasfacktidning.se",720233643],["sekotidningen.se",720233643],["tidningenelektrikern.se",720233643],["arkitekt.se",641982780],["arkitekten.se",[283813723,1039609607]],["chef.se",1039609607],["elinstallatoren.se",1039609607],["svd.se",1039609607],["vvsforum.se",1039609607],["arkitektur.se",1140743450],["arvikamagasinet.se",278189736],["arvikanyheter.se",512835253],["dalslanningen.se",512835253],["filipstadstidning.se",512835253],["fryksdalsbygden.se",512835253],["hjotidning.se",512835253],["kt.se",512835253],["kt-kuriren.se",512835253],["mariestadstidningen.se",512835253],["nkp.se",512835253],["nlt.se",512835253],["nwt.se",512835253],["provinstidningen.se",512835253],["saffletidningen.se",512835253],["sla.se",512835253],["varmlandsaffarer.se",512835253],["vf.se",512835253],["assistanskoll.se",878672703],["atvmag.se",1100093296],["snowmobile.se",1100093296],["autolife.se",1124519137],["autonytt.se",1881221754],["avanza.se",1675824797],["aventyrsresor.se",1272197569],["axess.se",1888710936],["axier.se",971395673],["babyhjalp.se",447523162],["bandybyn.se",[803587310,151227051]],["svenskorientering.se",803587310],["barnsemester.se",735809316],["battrestadsdel.se",[1814802713,2052298222]],["casinoexpo.se",2052298222],["flashback.se",2052298222],["leta.se",2052298222],["beernews.se",1179621055],["bergsmannen.se",1855837010],["besoksliv.se",1473318181],["bestchampagne.se",1362381062],["betong.se",1659235438],["espressomedia.se",1659235438],["foodetc.se",1659235438],["livetsgoda.se",1659235438],["realtid.se",1659235438],["bettips.se",[1146735433,457805416]],["borskollen.se",[457805416,861561292]],["bicycling.se",891156602],["runnersworld.se",891156602],["bildobubbla.se",977068533],["bilsport.se",1444847239],["bilweb.se",1615003834],["biostock.se",1726161808],["cannabis.se",1726161808],["finanstid.se",1726161808],["forskning.se",1726161808],["birthday.se",922051537],["blocket.se",2140936243],["bokadirekt.se",933925274],["bokmassan.se",2011161466],["svenskamassan.se",2011161466],["boktugg.se",879200497],["boneo.se",184327900],["booli.se",155831268],["bovision.se",206174508],["brafiler.se",1578848253],["branschkoll.se",1185067171],["branschstegen.se",382394065],["bravenewbusiness.se",1161244072]]);

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
