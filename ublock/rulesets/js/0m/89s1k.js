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

const argsMap = new Map([[827811363,{"a":".sponsrad_ruta"}],[1866155727,{"a":"div[ng-controller=\"CookieConsentCtrl\"],\ndiv[ng-show*=\"isUiDisabled\"]"}],[698593894,{"a":".idgcp__layer"}],[888471111,{"a":".sparticle,.nextArticleSp,.pryltorget,.prisjakt,.prisjaktCompare,.teasers-block.bfteasers,div[data-cmsad],.pricespy-container"}],[387967195,{"a":"div[id^=\"cx_\"]"}],[917404987,{"a":".banner-center,.banner-center ~ br,div[class^=\"ad-container\"]"}],[1966823594,{"a":"div[class^=\"ads\"]"}],[916641371,{"a":"[class*=\"ai-viewport\"],.ai_widget,#cb-sidebar-h,.livewrapped,.livewrapped_mobil"}],[2137660787,{"a":"[class*=\"banner-container\"]"}],[858276010,{"a":"#newsletter-sliding"}],[1066356236,{"a":".tag-sponsrad"}],[446728588,{"a":"a[onclick^=\"gtag\"],.header-banner,.penci-featured-cat-custom-ads"}],[700476682,{"a":"#astroid-preloader"}],[793137100,{"a":".activate-notifications-container.shown"}],[354651555,{"a":"div.cookie-warning-container,.mb-adarea"}],[848751749,{"a":".jaktplay-ad"}],[1400600764,{"a":".jet-popup"}],[438915032,{"a":".l-advertisement,.m-adform,.m-splash"}],[720427331,{"a":".day-nav ~ a:not([href*=\"kalender.se\"])"}],[409542956,{"a":".storan,.Partner,aside .pane-custom"}],[18399207,{"a":"#custom_html-2"}],[1599864096,{"a":"a[target][onclick]"}],[2065778771,{"a":".adv-area,#right-areas,a[href*=\".casino\"],body > div.code-block"}],[1646470047,{"a":".forumlist-main-inner > div[style]"}],[1675658656,{"a":".bg,a[href*=\"unibet.com\"],a[href*=\"/kampanjer.\"],a[href*=\"utm_campaign\"]"}],[1758723347,{"a":"div#video-overlay,div.sidebar_frame"}],[2112937255,{"a":"#header-top"}],[504190526,{"a":"#overlay,.gdpr-onboarding-container,a[rel*=\"sponsored\"],.-panorama-ad-wrapper"}],[143036731,{"a":"#cookie-popup"}],[931216317,{"a":".ads-wrapper-main,.InterstitialModal"}],[1166451707,{"a":"[class*=\"list_item_sponsored\"],[class*=\"promotion_bottom_holder_wrapper\"],[class*=\"beverage-recommendation_wrapper\"],[class*=\"list_item_wide_sponsored\"]"}],[352391788,{"a":".ch2"}],[409682201,{"a":".gdpr-wide,\naside .prebuilt-systems,#main-content > a[target=\"_blank\"]"}],[681251798,{"a":"div[id^=\"adv\"]"}],[346434634,{"a":"div.recad,div.adhor"}],[2099726954,{"a":".CookiePopup"}],[8069884,{"a":".kurera-register-newsletter-popup,[class*=\"show-for-\"]"}],[1098858466,{"a":"#subscribe_splash,\n.partnermedia,\n[class*=\"nativeadwidget\"]"}],[1212513321,{"a":".email-popup-wrapper"}],[1452575510,{"a":"#panoramaTop"}],[2120396682,{"a":"[class*=\"--native\"],[id^=\"adwrapper\"],.has-sticky-add"}],[1037760150,{"a":".inpostbanner,.banner-leaderboard"}],[2046654791,{"a":"a[href*=\"=annons\"]"}],[1018416176,{"a":"img[alt=\"Annons\"] + .img-flipper"}],[426636605,{"a":"[class^=\"CookiesModal\"]"}],[687077273,{"a":"#timedModal,.modal-backdrop"}],[1337551478,{"a":".elementor-image > a:not([href*=\"https://lesscarbs.se\"]),a[href*=\"/affiliates/\"]"}],[1381238266,{"a":"#bookingcom-resor-wrapper,#aktuellaerbjudanden,#sky-left-wide,.topNavItem[href*=\"casino\"],.topNavItem[href*=\"betting\"]"}],[1969052437,{"a":"#cookie_wrapper"}],[142498633,{"a":"a[href*=\"/bit.ly/\"]"}]]);

const hostnamesMap = new Map([["hypeline.se",827811363],["icagruppen.se",1866155727],["idg.se",[698593894,888471111]],["forum.macworld.se",698593894],["illvet.se",387967195],["improveme.se",917404987],["inblick.se",1966823594],["influens.se",916641371],["innebandy.se",2137660787],["internetstiftelsen.se",858276010],["svenskarnaochinternet.se",858276010],["ipo.se",1066356236],["it-finans.se",446728588],["it-halsa.se",446728588],["it-kanalen.se",446728588],["it-pedagogen.se",446728588],["it-retail.se",446728588],["itseniorerna.se",700476682],["jaktjournalen.se",793137100],["jaktojagare.se",354651555],["jaktplay.se",848751749],["javligtgott.se",1400600764],["jusek.se",438915032],["kalender.se",720427331],["kamerabild.se",409542956],["mobil.se",409542956],["kardemummagumman.se",18399207],["riktighockey.se",18399207],["karriarlakare.se",1599864096],["katerinamagasin.se",2065778771],["kiacarclub.se",1646470047],["kimura.se",1675658656],["kingsizemag.se",1758723347],["kittad.se",2112937255],["klart.se",504190526],["knulla.se",143036731],["kokaihop.se",931216317],["koket.se",1166451707],["kollega.se",352391788],["komponentkoll.se",409682201],["kristendate.se",681251798],["kritiker.se",346434634],["kulturama.se",2099726954],["kurera.se",8069884],["kvalitetsmagasinet.se",1098858466],["miljo-utveckling.se",1098858466],["telekomidag.se",1098858466],["vdtidningen.se",1098858466],["kvartal.se",1212513321],["lajvo.se",1452575510],["land.se",2120396682],["landlantbruk.se",2120396682],["landskogsbruk.se",2120396682],["landleyskok.se",1037760150],["lararen.se",2046654791],["laromedia.se",1018416176],["lawline.se",426636605],["lchfarkivet.se",687077273],["lesscarbs.se",1337551478],["leta.se",1381238266],["letarecept.se",1969052437],["lindasbakskola.se",142498633],["privataaffarer.se",142498633],["realtid.se",142498633],["skk.se",142498633]]);

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
