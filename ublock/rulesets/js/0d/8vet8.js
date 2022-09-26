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

const argsMap = new Map([[566909034,{"a":"[id*=\"miw_widget\"] a[target$=\"blank\"][href]:not(a[href*=\"mailto\"])"}],[192124959,{"a":"#sidebar_aanbevelen"}],[494616562,{"a":"#submenubanner"}],[344854673,{"a":"div[class$=\"sidebar-widget\"] > .textwidget:has(p > a[href*=\"eredivisiewedden.nl\"][target=\"_blank\"])"}],[320952996,{"a":".card-banner,\n.card-banner-large"}],[1253315644,{"a":".kolom_haad > div[style=\"height: 300px;\"],\ndiv[style$=\"0px;\"]:has(.adsbygoogle)"}],[210954626,{"a":".sticky-banner-container"}],[1139579961,{"a":"#right-sidebar > .mb-3:has(img[src*=\"banner\"]),\n.float-right"}],[1759622943,{"a":".rectangle"}],[362854564,{"a":".leaderBoardHolder"}],[185422633,{"a":"div[class^=\"r89-desktop-rectangle\"]"}],[153393536,{"a":"div[class^=\"styled__AdWrapper-\"],\ndiv[class^=\"styled__FooterAdWrapper-\"]"}],[1153130290,{"a":".hf-widget"}],[96527688,{"a":".cookieconsent-optin-marketing"}],[966263913,{"a":".banner-right,\n.infeed-outer,\n.infeed-wrap"}],[1085890978,{"a":".content-start > :has([advobject])"}],[424072106,{"a":".post:has(a[href*=\"/partnerposting/\"])"}],[420788031,{"a":"#ad-takeover"}],[159240324,{"a":".adr-wrapper"}],[274122663,{"a":"#reclame,\n.advertentieBanner"}],[1210345967,{"a":"li.ipsBox.ipsWidget:has(.ipsType_richText.ipsPad)"}],[119746186,{"a":"[class*=\"avia-image-container\"]:has(a[href]),\n[id*=\"after_section\"] > .container:has([class*=\"av-content\"]),\nimg[width=\"699\"][height=\"90\"]"}],[1921760998,{"a":"#block-views-block-view-business-partners,\n#block-views-block-view-main-sponsor,\n#block-views-block-view-shirt-sponsor,\n.top-bar-logos"}],[40760994,{"a":"[href=\"https://www.loketkansspel.nl/\"]"}],[1680253185,{"a":".header-right"}],[930864693,{"a":".bs"}],[326015802,{"a":".container-linkpartners,\n.rightbar > :has([src^=\"https://ads.\"])"}],[1383486791,{"a":"#reclame-eroads"}],[939337000,{"a":"[id^=\"block-block\"]:has([id^=\"div-gpt-ad\"]),\ndiv[class*=\"block-block\"]:has(.adsbygoogle),\ndiv[style*=\"padding:10px\"]:has(div[id^=\"div-gpt-ad\"])"}],[1546760,{"a":".article-bnr-first,\n.as__bottom-banner,\n.g_banner,\n.row--bnr-between,\naside:has([id^=\"div-gpt-ad\"])"}],[301540411,{"a":"div[class^=\"display-ad_container\"]"}],[534065354,{"a":"#banner_rectangle,\n#banner_right,\n#banner_top"}],[1916529839,{"a":"#leaderboard"}],[1739818980,{"a":"div[style]:has(.adsbygoogle)"}],[1535506575,{"a":"aside[class^=\"td_block\"]:has(.gofollow)"}],[1301004608,{"a":".ult-content-box > a[href]:not([href*=\"nieuwsfiets.nu\"]):not([href*=\"questionpro.com\"]),\n.wpb_raw_html[class*=\"us_custom_\"]:has(.wpb_wrapper)"}],[1790677697,{"a":".clearfix:has(img[src*=\"/header/\"])"}],[815090425,{"a":"[class^=\"my-\"]:has(img[src*=\"/images/banner/\"])"}],[1528617149,{"a":".adsbygoogle,\n.td-adspot-title"}],[138803215,{"a":".ads-mobiel"}],[999386724,{"a":".widget_block:has(img[src*=\"/ad\"]),\n.wpa"}],[303932514,{"a":".product__wrapper:has(.adsbygoogle)"}],[2144661039,{"a":".widget:has(.capegroep-banner)"}],[1306225416,{"a":"a[href^=\"https://www.onlinebingokaart.nl/\"]"}],[1426331142,{"a":"div[style*=\"width:300px; height:200px;\"],\ndiv[style*=\"width:300px; height:250px;\"],\ndiv[style^=\"width:300px; height:180px;\"]"}],[905780793,{"a":"#image-vertical-reel-scroll-slideshow,\n.slider-container"}],[429540733,{"a":".col-left,\n.col-right"}],[848006966,{"a":".holder--divider-top"}]]);

const hostnamesMap = new Map([["vlootschouw.nl",566909034],["voetbal-vandaag.nl",192124959],["voetbalnederland.nl",494616562],["voetbalsnafu.nl",344854673],["volleybal.nl",320952996],["waldnet.nl",1253315644],["want.nl",210954626],["wanttoknow.nl",1139579961],["wasmachines.nl",1759622943],["webwereld.nl",362854564],["webwoordenboek.nl",185422633],["weeronline.nl",153393536],["weerplaza.nl",1153130290],["weerstationleeuwarden.nl",96527688],["weertdegekste.nl",966263913],["weespernieuws.nl",1085890978],["welingelichtekringen.nl",424072106],["welklidwoord.nl",420788031],["westerwoldeactueel.nl",159240324],["wettelijke-feestdagen.nl",274122663],["wietforum.nl",1210345967],["wildfm.nl",119746186],["willem-ii.nl",1921760998],["wkdarts.nl",40760994],["wos.nl",1680253185],["xgn.nl",930864693],["xmissy.nl",326015802],["xxxdump.nl",1383486791],["zakenreisnieuws.nl",939337000],["zeelandnet.nl",1546760],["zoom.nl",301540411],["afkortingen.nu",534065354],["eindexamens.nu",1916529839],["landbouwgrond.nu",1739818980],["newspower.nu",1535506575],["nieuwsfiets.nu",1301004608],["nieuwsonline.nu",1790677697],["schie.nu",815090425],["dissident.one",1528617149],["dorpsklanken.online",138803215],["eindtijdklok.org",999386724],["letsgodigital.org",303932514],["nljug.org",2144661039],["omrekenen.org",1306225416],["apintie.sr",1426331142],["unitednews.sr",905780793],["tvgids.tv",429540733],["basketbal.vlaanderen",848006966]]);

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
