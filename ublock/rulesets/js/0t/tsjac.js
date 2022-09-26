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

const argsMap = new Map([[1766974314,{"a":"#cookies"}],[1427473730,{"a":"#af-preloader"}],[556293962,{"a":"a[href*=\"casino\"],a[href*=\"/sponsrat/\"],a[href*=\"/sponsrat/\"] + p.tot-content-preview--meta,\ndiv.tot-content-preview-container-small[style*=\"border-top:4px solid #ffb200;\"],.content-overlay--black"}],[596265457,{"a":"[id^=\"bunyad\"]"}],[314281836,{"a":".bottom-bar--animate-in,#job_ads_scroller,.header_banner,.newsletter-popup"}],[239055243,{"a":"a[href*=\"/sponsrat/\"],\nmain > div > div > div > div > div:has(.adunitContainer)"}],[1859548211,{"a":"[class$=\"banner_ad\"]"}],[1356901436,{"a":".site-wrap > .row > .col-sm-3"}],[1985411856,{"a":"#col_right"}],[1516294107,{"a":".privacy-information--visible"}],[1606642044,{"a":".backdrop,.fcb"}],[2029441116,{"a":"div[id^=\"ungdo-\"]"}],[927365881,{"a":"#banner-top-block"}],[181094707,{"a":".results li[style^=\"margin\"]:not(.result)"}],[271049931,{"a":".latest-article-native"}],[1705627962,{"a":"app-native-puff,.header-top-banners"}],[875220342,{"a":".profile-annons"}],[1221496680,{"a":"[id*=\"annons\"],#getFixed"}],[1199814068,{"a":".campaign-teaser-show"}],[84833496,{"a":".newsletter-popup--background-fade,.newsletter-popup"}],[630082801,{"a":".wpb_single_image a[target],.gp-footer-2"}],[731217969,{"a":"[class*=\"ai-viewport\"],.full_screen_ad"}],[917644627,{"a":".nyhet-ad"}],[1068711369,{"a":".cookieNotification"}],[578135061,{"a":"a[href^=\"/partnermaterial/\"]"}],[180731405,{"a":".mtsnb,.villalivet-target,a[href*=\"/sponsrat-innehall/\"]"}],[44991595,{"a":".annonsinlagg,.annonsen"}],[2005602051,{"a":".push-to-newsletter,.fancybox-overlay,\n.top-add,.sidebar-adds,.spons-content"}],[1324147926,{"a":".popup_missa-inget"}],[520598894,{"a":".topheaderinfo"}],[1891724073,{"a":"a[onclick*=\"Banner\"],.boss-loader-overlay"}],[1498446643,{"a":"a[href*=\"/go/\"][target],.category-kampanjer"}],[1607835309,{"a":".cookie-consent-modal"}],[960630594,{"a":"a[href*=\"campaign\"][data-test-tag=\"external-link\"]"}],[1324543449,{"a":"#ez-cookie-dialog-wrapper"}],[1774427713,{"a":"div[class^=\"CookieBar\"]"}],[231716116,{"a":".LFRBox"}],[674753546,{"a":".js-cookie-iframe"}],[936652201,{"a":".header-banner-top"}],[1982096459,{"a":".yweb-news-paper-banner"}],[1521399955,{"a":".featured"}],[2071035596,{"a":"div[style^=\"position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 999;\"]"}]]);

const hostnamesMap = new Map([["tjanstebilen.se",1766974314],["yrkesbilen.se",[1766974314,936652201]],["topdogs.se",1427473730],["totallyorebro.se",556293962],["totallystockholm.se",556293962],["traning40plus.se",596265457],["travelnews.se",314281836],["travronden.se",239055243],["tripadvisor.se",1859548211],["turismnytt.se",1356901436],["turistmal.se",1985411856],["tvkanalengodare.se",1516294107],["tvprogram.se",1606642044],["ungdomsfotboll.se",2029441116],["uppsalanyheter.se",927365881],["uppsatser.se",181094707],["vagabond.se",271049931],["varden.se",1705627962],["varldenidag.se",875220342],["varldenshaftigaste.se",1221496680],["varldenshistoria.se",1199814068],["vartgoteborg.se",84833496],["varvat.se",630082801],["vegomagasinet.se",731217969],["veterinarmagazinet.se",917644627],["vi.se",1068711369],["vibilagare.se",578135061],["villalivet.se",180731405],["vimedbarn.se",44991595],["vinbanken.se",2005602051],["vinochmatguiden.se",1324147926],["viseniorer.se",520598894],["visitskargarden.se",1891724073],["vm-fotboll.se",1498446643],["wappare.se",1607835309],["wellness.se",960630594],["wernamaten.se",1324543449],["xlbygg.se",1774427713],["xn--lnforum-exa.se",231716116],["yelp.se",674753546],["ysektionen.se",1982096459],["omtanke.today",1521399955],["kolla.tv",2071035596]]);

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
