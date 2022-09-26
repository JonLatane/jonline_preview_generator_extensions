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

const argsMap = new Map([[408114094,{"a":".site-partnevisment,.h-background--sponsored-light,.row .text-center img,a[href^=\"https://hubs.la\"],.c-partners"}],[827812866,{"a":".brand,.desktop-ad-web"}],[1587192322,{"a":".footer-links"}],[1797454180,{"a":".subArticlesponsored,div[style=\"width:300px;float:right;\"],div[style=\"float:right;width:300px;\"],#partner-box,.adbox-label"}],[2078864043,{"a":".cookieBar,\n.tn,.zooKeeper,#scraper,.subHeadSponsors"}],[630981596,{"a":"#siteflash,#customer-link-container"}],[1098233620,{"a":"img[src*=\"/sponsor/\"] + br + .boxlogo"}],[2073101136,{"a":".sponsor"}],[2004872797,{"a":"#alert_cookieconsent,\n[class^=\"anp\"],[class^=\"ans\"]"}],[1820014567,{"a":"#sponsor,.frii-ad"}],[1807017725,{"a":"#whitewrap > .wrapper-first:first-child,\n.column-2 > figure"}],[975487606,{"a":"[id^=\"ad-\"]"}],[1527483993,{"a":".slot-container"}],[1507392843,{"a":".alert-success"}],[1768757991,{"a":"div.modal-cacsp-backdrop,div.modal-cacsp-position"}],[933554960,{"a":".article-facebook"}],[1247318530,{"a":"a[href*=\"/annonser/\"]"}],[1125903888,{"a":"#cookielawwarning,\n#eventad,[id^=\"sky\"],[id^=\"ad_lead\"],a[rel=\"sponsored\"],.external_div_bigVideoAd,#mpu,#leftToLogo,.itsanad,div[class^=\"ad_Bumper\"],div[style=\"min-height: 600px; margin-bottom: 20px;\"]"}],[322781688,{"a":".banner-component,.partners,.cookie-meddelande"}],[1931919951,{"a":"[class^=\"adverts-\"]"}],[752139777,{"a":"a[href*=\"/annonssamarbete/\"]"}],[386838143,{"a":"mobile-promo"}],[1172148773,{"a":".profile-native"}],[1192344411,{"a":".sgpb-popup-overlay,#sgpb-popup-dialog-main-div-wrapper,.et_pb_gallery"}],[1288871574,{"a":"a[href*=\"/click.\"]"}],[1604001175,{"a":".cookie-banner-modal"}],[356560363,{"a":"[class*=\"annons\"]:not(body),.tag-sponsrad,.pp-modal-wrap"}],[1107959104,{"a":".hb-adlabel,[id^=\"hb-\"]"}],[343527211,{"a":"#__next > div > div.bar:first-child"}],[517618525,{"a":".col-sm-4 > .boxtext"}],[780241674,{"a":".c-placement-top.owl-carousel,.takeover-container"}],[1155049307,{"a":".add-wrap,.listings-search-ads,.right_panel"}],[1971064326,{"a":".elementor-widget-container > a > img"}],[558947909,{"a":"[class*=\"partnerinfostyle\"],div[id^=\"hejao-\"],.kb-advanced-image-link[target],.category-partnerinformation"}],[407598345,{"a":"#custom_html-15,.code-block img"}],[1775901455,{"a":"[id*=\"banner\"],a[href^=\"https://ad.\"],a[href^=\"https://ad2.\"]"}],[54584303,{"a":".pageCookies"}],[605863406,{"a":"#loader-wrapper"}],[467784421,{"a":"#sa_slider_shortcode"}],[31133273,{"a":"#cookie-law-info-bar"}],[214111832,{"a":"#ad_unit_placeholder"}],[308803360,{"a":".row--native"}],[308545640,{"a":".sponsorpuff,.presentedby,.presentedby ~ *"}],[1657369394,{"a":"#__next > div[class^=\"style_notification\"],\n[class*=\"dummyAd\"],[class*=\"StyledAdSlot\"],[data-bind*=\"Ad\"],div[class^=\"GraphicAd_\"],[class*=\"adContainer\"],[id*=\"_panorama\"],[id*=\"_skyscraper\"],div[style=\"min-height: 250px;\"],div[data-track=\"displayplacering-customer\"],a[data-test=\"boostAdLink\"],\n[class^=\"styleManual_mainContentBox\"] > div[style^=\"min-height\"]:first-of-type,\na[data-trackimp][target],.hitta-map .integration-txt,.section-details--alb"}],[1056040843,{"a":".club-ad-item,.banner-row"}],[949818953,{"a":"[class*=\"ad-style\"],[id^=\"outsider-\"],[id^=\"banner_\"],.ad-mob-container,#mobile-one,#mobile-two,.desktop-horizontal-ad,#article-content img[src*=\"banner\"],#article-content img[src*=\"prio-hockey\"]"}],[192419549,{"a":".textwidget a[target*=\"blank\"] img"}],[574347281,{"a":"#bannnerContainer,#pop_overlay,.banner-s,div.featured"}],[138686842,{"a":".banner-box"}],[575615336,{"a":"div[id^=\"husbi-\"]"}]]);

const hostnamesMap = new Map([["fotbolldirekt.se",408114094],["hockeysverige.se",408114094],["innebandymagazinet.se",408114094],["padeldirekt.se",408114094],["fotbollskanalen.se",827812866],["fotbollskane.se",1587192322],["fotbollsthlm.se",1587192322],["fotosidan.se",1797454180],["fragbite.se",2078864043],["framtid.se",630981596],["freeride.se",[1098233620,2073101136,2004872797]],["gamereactor.se",[2073101136,1125903888]],["happyride.se",[2073101136,2004872797,517618525]],["friidrott.se",1820014567],["frilagt.se",1807017725],["friluftsframjandet.se",975487606],["funnygames.se",1527483993],["nyckelspel.se",1527483993],["fuska.se",1507392843],["futsalmagasinet.se",1768757991],["fz.se",933554960],["gaffa.se",1247318530],["gavletravet.se",322781688],["travsport.se",322781688],["glassakademin.se",1931919951],["golflivet.se",752139777],["google.se",386838143],["goteborgdirekt.se",1172148773],["mitti.se",1172148773],["vasterastidning.se",1172148773],["goteborgsgolfaren.se",1192344411],["grillbaronen.se",1288871574],["shop.halebop.se",1604001175],["hamnen.se",356560363],["handbollskanalen.se",1107959104],["happypancake.se",343527211],["hastlycka.se",780241674],["hastnet.se",1155049307],["hbwebben.se",1971064326],["hejaolika.se",558947909],["helahisingen.se",407598345],["helgon.se",1775901455],["hemhyra.se",54584303],["hemmafixbloggen.se",605863406],["surfa.se",605863406],["teknikfreak.se",605863406],["hemmanytt.se",[467784421,31133273]],["karriarlakare.se",31133273],["livinguppsala.se",31133273],["nongrata.se",31133273],["teknikhype.se",31133273],["hemnet.se",214111832],["hemtrevligt.se",308803360],["mestmotor.se",308803360],["hippson.se",308545640],["hitta.se",1657369394],["hockeyettan.se",1056040843],["hockeynews.se",949818953],["horisontmagasin.se",192419549],["spanaren.se",192419549],["hotellorestaurang.se",574347281],["hrnytt.se",138686842],["worldinproperty.se",138686842],["husbilsplats.se",575615336]]);

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
