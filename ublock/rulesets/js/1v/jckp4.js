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

const argsMap = new Map([[1433746619,{"a":".nomobile:has(img[src^=\"/images/\"])"}],[221096366,{"a":".header_banner"}],[444927745,{"a":".story_suffix:has([href^=\"//tools.vpscash.nl/\"])"}],[1384653209,{"a":".af-main-header-container"}],[670932722,{"a":".gsrhera"}],[1461617510,{"a":".card-view:has(h5.bold > a[href][target=\"_blank\"]),\n.centered.card-view:has([id^=\"taboola\"])"}],[2106229631,{"a":".above-content,\n.below-content,\n.sidebar-top-content"}],[253086930,{"a":"#nav_menu-2"}],[2066083889,{"a":"#article-body > aside.hawk-nest:has([class^=\"hawk-affiliate\"]),\n#taboola-below-article-thumbnails,\n.dfp-leaderboard-container,\n[class$=\"ad-unit\"]"}],[1333057755,{"a":".herald-sticky > [id^=\"media_image-\"]"}],[460009067,{"a":".adbox"}],[960840594,{"a":".widget-container:has([id^=\"text-\"] > h4)"}],[246953574,{"a":"#imu:has(div[class*=\"ad--rectangle\"])"}],[1868082827,{"a":".cta"}],[2145685615,{"a":".d-none.mb-3:has(a[target=\"_blank\"][rel=\"noopener\"])"}],[1562167127,{"a":"[class=\"rand nomobile\"]:has(a[href*=\"net69.nl/genre\"])"}],[1763304603,{"a":".gmollik,\n[id^=\"custom_html\"]:has(.adsbygoogle)"}],[137211481,{"a":"#branding > .clearfix"}],[495397382,{"a":".c-commerical_banner"}],[1353640946,{"a":"#xbtm > .shadow,\n#xttm > .shadow"}],[1272430686,{"a":"#adsense"}],[1800853237,{"a":".desktop_mobile:not(a[href*=\"radionl.fm\"])"}],[214993782,{"a":".banner-rectangle:not(:nth-of-type(3)),\n.marqueeItem:has(a[href^=\"https://partner.bol.com/\"])"}],[299017382,{"a":"div[class=\"widget HTML\"]"}],[24833354,{"a":"[data-testid^=\"banner\"]"}],[226150728,{"a":".overview-item--success,\n.sidebar_right_bottom,\n.sidebar_right_top"}],[1420093325,{"a":".simple-image > [href^=\"https://www.nsinternational.com/traintracker/\"],\n[id*=\"banner\"]"}],[2112387445,{"a":".ablok"}],[531763022,{"a":"table:has(a[href=\"http://www.waffen-jansen.de\"])"}],[2074349805,{"a":".NoBM.Tab:has(img[src^=\"https://www.mysecretdate.nl/phpThumb/thumbnails/350x350\"]),\n.popup,\ndiv.Tab:has(img[src^=\"Promotie_Content/\"])"}],[1991588024,{"a":"[id^=\"sponsored-content_\"]"}],[29452068,{"a":".promoted,\n.promoted-entry-in-content"}],[549709135,{"a":".promoblok"}],[1525020967,{"a":"#true,\n.leaderBoard:has([src*=\"ab.tweakers\"]),\n.noTrackingMessage,\n.relatedItProContent > *:has(a[href*=\"doubleclick.net/\"]),\n.reserveSpace"}],[1150515755,{"a":".widebanner"}],[1334819927,{"a":".serie_info_adbox"}],[1891818071,{"a":"#ads_right_scroll_single_sidebar,\n#div_the_mgid"}],[1173757956,{"a":".td-fix-index > center,\n[href^=\"https://www.eventbrite.nl/e/tickets\"]"}],[412257399,{"a":"aside[id^=\"block\"]:has([src*=\"tools-affil2.com/rtb/index.php\"])"}],[178409070,{"a":"#sidebar"}],[541247433,{"a":".widget_sponsor,\n.widget_sponsorlinks"}],[1766749623,{"a":".page-load-switch,\n.stunt-wide"}],[503377451,{"a":"#eCommerce"}],[1062547847,{"a":".reclame"}],[298046060,{"a":".adv"}],[554505148,{"a":".main-promo-bn-responsive"}],[1591920180,{"a":".block-adfo-blocks:has(img[src*=\"/partner\"])"}],[263226475,{"a":".header__partner-link,\n.page-footer__partners-block"}],[1395016700,{"a":".footer__footer-fat,\na[href^=\"https://www.awin1.com/cread.php?\"]"}],[1359899943,{"a":"div[class$=\"sidebar-widget\"] > .textwidget:has(p > a[href*=\"voetbalwedden.net\"][target=\"_blank\"])"}],[860686673,{"a":".albla-widget,\n.albla-zijkant:has(.adv-link)"}],[2032828602,{"a":".advrow"}],[1708226383,{"a":"#footer"}],[1519714431,{"a":"#banner-text2,\n#containerx,\n#jeg_sidecontent > .jeg_container:has(.jeg_ad),\n.jeg_container > .jeg_container:has(.jeg_ad)"}]]);

const hostnamesMap = new Map([["sexpret.com",1433746619],["zinineensexdate.com",1433746619],["sexverhalen.com",[221096366,444927745]],["arenalokaal.nl",221096366],["sportinnederland.com",1384653209],["srherald.com",670932722],["srnieuws.com",1461617510],["studylibnl.com",2106229631],["surinameview.com",253086930],["techradar.com",2066083889],["vivocyclo.com",1333057755],["voetbal.com",460009067],["voetbal4u.com",960840594],["voetbalkrant.com",246953574],["voetbaluitslagen.com",1868082827],["autobahn.eu",2145685615],["negerinnensexdating.eu",1562167127],["radiovisie.eu",1763304603],["takecare4.eu",137211481],["flair",495397382],["nederland.fm",1353640946],["radio.nl",1353640946],["m.radioluisteren.fm",1272430686],["radionl.fm",1800853237],["radiozenders.fm",214993782],["banknieuws.info",299017382],["hardware.info",[24833354,226150728]],["hartvannederland.nl",24833354],["shownieuws.nl",24833354],["vivandaag.nl",24833354],["yourlittleblackbook.me",1420093325],["historiek.net",2112387445],["kilroynews.net",531763022],["opwindend.net",2074349805],["sciencelink.net",1991588024],["skoften.net",29452068],["synoniemen.net",549709135],["tweakers.net",[1525020967,1150515755]],["baarsclassicrock.nl",1150515755],["uitzendinggemist.net",1334819927],["vnexplorer.net",1891818071],["waterkant.net",1173757956],["1001erotiekverhalen.nl",412257399],["112achterhoek-nieuws.nl",178409070],["123geldzaken.nl",541247433],["123video.nl",1766749623],["538.nl",503377451],["a1mediagroep.nl",1062547847],["adodenhaag.nl",298046060],["spelletje.nl",298046060],["adultwebmaster.nl",554505148],["agconnect.nl",1591920180],["ajax.nl",263226475],["ajax1.nl",1395016700],["ajaxreport.nl",1359899943],["feyenoordreport.nl",1359899943],["psvreport.nl",1359899943],["voetbalsnafu.nl",1359899943],["alblasserdamsnieuws.nl",860686673],["albrandswaardsdagblad.nl",2032828602],["barendrechtsdagblad.nl",2032828602],["capelsdagblad.nl",2032828602],["dagblad010.nl",2032828602],["dagblad070.nl",2032828602],["goudsdagblad.nl",2032828602],["nissewaardsdagblad.nl",2032828602],["ridderkerksdagblad.nl",2032828602],["rijswijksdagblad.nl",2032828602],["voorburgsdagblad.nl",2032828602],["zoetermeersdagblad.nl",2032828602],["alkmaarguardians.nl",1708226383],["almere-nieuws.nl",1519714431]]);

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
