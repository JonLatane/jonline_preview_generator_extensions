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

const argsMap = new Map([[1466765569,{"a":"div[class*=\"ad_container\"],div[class*=\"_ads_\"]"}],[1336287726,{"a":"#ss-floating-bar,.top-ads-widget,.header-inner center,#sidebar-right .widget_custom_html"}],[635244456,{"a":"#pageContainer > div:first-child:not([id])"}],[1517132715,{"a":"#text-3"}],[1742121236,{"a":".penci-rlt-popup"}],[849722875,{"a":"#CookieConsent"}],[1725310425,{"a":".adremark,.coofad,.popup-overlay,.hidead,.phoneads,.pricecomp,.offerz,.type-articleadvertorial,.adblock,.lbplussinfo,.popup-overlayx"}],[1625069328,{"a":"section.widget_media_image,a[target=\"_blank\"]:not([href*=\"ljungbysporten.se\"])"}],[1825802156,{"a":"#topbar,.inside-right-sidebar > .really_simple_image_widget"}],[718483781,{"a":".applicant-match-container,.banner-item,.banner-container"}],[11800324,{"a":".panoramaImageBox"}],[421631187,{"a":".entry__teaser--promotion,.wpcnt,.sunt-widget,.lifeofsvea-widget"}],[746042988,{"a":".elementor-image a[href]:not([href*=\"lovelylife.se\"]) img"}],[372218905,{"a":"#bdCheckAlso.bdCheckAlsoShow,.topBanner,#sidebar .widget_media_image"}],[125426479,{"a":"#archiveAdContainer"}],[88006769,{"a":"#large_banner"}],[1313310765,{"a":".cWidgetContainer > ul > li:first-child,div[style*=\"border: 1px solid\"] a[target=\"_blank\"]"}],[876118331,{"a":".hustle-popup"}],[1588492979,{"a":".header-ainfo.float-right"}],[1743488597,{"a":".mh-sidebar"}],[402981247,{"a":"#elGuestTerms,\n.banner_hoger,.google_ads_mg_frontpage,.footerComercialDiv"}],[1553759274,{"a":"[id^=\"matin-\"]"}],[1654024857,{"a":"#sidebar .widget_text"}],[460568365,{"a":"div[style=\"z-index: 2000;\"],div[style=\"z-index: 2000;\"] + div"}],[501558588,{"a":".adsheader"}],[650657846,{"a":".annonsmellandiv,.annonssidadiv"}],[196316984,{"a":".cookie-information,\n[data-article-sponsored=\"true\"],.content-main-adwrapper,.campaign-sidebar"}],[2024388705,{"a":"article[data-customer]"}],[766783659,{"a":".panel-native,a[href*=\"/artiklar/partner/\"]"}],[2143612328,{"a":".b-topshop"}],[1262844012,{"a":"[alt=\"ad\"],[class^=\"mom-\"] a img"}],[1326044773,{"a":"[id^=\"Annons\"],\ntd[style=\"width: 340px;\"] > video"}],[660090102,{"a":"aside#text-5"}],[763247937,{"a":".nosnaj"}],[2122083614,{"a":".desktop-homepage-ad,.desktop-main-ad,.latest-betting-campaigns,.best-casino-section,.top-casino"}],[1011079996,{"a":".front-banner,.front-banner-cover,#text-2,[class*=\"sponsrat-inlagg\"],a[href*=\"://kampanjer.\"],.ohmbet_link,a[href*=\"adsrv.eacdn.com\"]"}],[406831792,{"a":".pspy_info"}],[1719210555,{"a":".modal-wrap,.slide-in-box"}],[1708397597,{"a":".sponsored-item,[class*=\"banner\"],.outsider"}],[1973314745,{"a":"#home_ans,[name=\"article-advertisment\"]"}],[1078584028,{"a":"[id^=\"Modal_plugin\"],\ndiv[id*=\"panorama_\"],[class^=\"affiliate-container\"],.site-header__panorama"}],[676842033,{"a":"div[onimpression]"}],[1298681414,{"a":"#container > a:not(:first-child),#sidebar .widget_text a[target],#text-5"}],[466537220,{"a":".article-list__item__link--sponsored,.ispanorama,#Popup"}],[318970926,{"a":"div.lboard,div.instream-dynamic"}],[374636411,{"a":".td-fix-index a[target=\"_blank\"] img,aside a[target=\"_blank\"] img"}],[1907680612,{"a":".secondary-sidebar > .panel-pane:last-child,\n.view-partner-articles,[class*=\"sponsored-article\"],.tertiary-bottom"}],[358217037,{"a":".mfp-bg,.mfp-wrap"}],[1353264083,{"a":"#campaign_area"}],[1317348686,{"a":"[class^=\"prisjakt-\"]"}]]);

const hostnamesMap = new Map([["linguee.se",1466765569],["listor.se",1336287726],["litteraturmagazinet.se",635244456],["livetochdiabetes.se",1517132715],["livetsgoda.se",1742121236],["livsmedelsverket.se",849722875],["ljudochbild.se",1725310425],["ljungbysporten.se",1625069328],["lokalfotboll.se",1825802156],["lokalguiden.se",718483781],["lokalnytt.se",11800324],["loppi.se",421631187],["lovelylife.se",746042988],["lundagard.se",372218905],["lysekilsposten.se",125426479],["magasinetparagraf.se",88006769],["maipenrai.se",1313310765],["maklarvarlden.se",876118331],["malaroarnasnyheter.se",1588492979],["maltermagasin.se",1743488597],["maringuiden.se",402981247],["matinspo.se",1553759274],["matkanalen.se",1654024857],["matspar.se",460568365],["mcparken.se",501558588],["medibok.se",650657846],["megafonen.se",196316984],["merinfo.se",2024388705],["mestmotor.se",766783659],["metromode.se",2143612328],["milansverige.se",1262844012],["miljomat.se",1326044773],["minsolresa.se",660090102],["resatillsolen.se",660090102],["missatsamtal.se",763247937],["mmabetz.se",2122083614],["mmanytt.se",1011079996],["mobil.se",406831792],["nordichardware.se",[406831792,1317348686]],["modernalivet.se",1719210555],["motivation.se",1708397597],["moviezine.se",1973314745],["mytaste.se",1078584028],["narkive.se",676842033],["natursidan.se",1298681414],["netdoktor.se",466537220],["netflixguiden.se",318970926],["newsvoice.se",374636411],["ng.se",1907680612],["nongrata.se",358217037],["nordfront.se",1353264083]]);

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
