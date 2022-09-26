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

const argsMap = new Map([[1397639125,{"a":".gamereel_featured-ad"}],[1571417954,{"a":".ad-top-desktop,\n.feed-ad-wrapper"}],[1539625845,{"a":".ContentPartner,\n.billboardwrap,\n.billboardwrapdown,\n.js-banner,\n.publisher-sh-spot,\n.rectanglemid,\n.rectanglewrap,\n.strossle-widget"}],[248549978,{"a":".LeaderboardContainer,\n.Rectangle"}],[564532536,{"a":".banner__side,\n.banner__wrap"}],[368164231,{"a":"div[class^=\"column col\"]:has(img[src*=\"/uploads/ads\"]),\nfooter > .container > div:nth-of-type(1)"}],[305701184,{"a":".widget-tabs--partner"}],[1017746374,{"a":"#carousel-indiexl_partners_carousel_widget"}],[796298775,{"a":"[id^=\"custom_html\"]:has([src^=\"https://pagead2.googlesyndication.com/\"])"}],[194096392,{"a":".slickcarousel"}],[1619232784,{"a":"#cc:has(a.product[href*=\"partnerprogramma.bol.com\"]),\n[class^=\"a\"][id^=\"a\"]:has(.adsbygoogle)"}],[129597563,{"a":".vc_cta3-container"}],[705649764,{"a":".io-tape-card[href^=\"/partner\"],\n.region-banner"}],[187395050,{"a":"div[id^=\"property_ad_\"]"}],[2095023505,{"a":".owl-carousel:has(.sa_hover_container):has([style*=\"/banner\"]),\n.vc_row:has([class^=\"qt-slickslider\"] .qt-sponsor)"}],[1458455193,{"a":".homepage-marquee"}],[1521235883,{"a":"[id^=\"custom_html-\"]:has([src^=\"https://pagead2.googlesyndication.com/\"])"}],[198988733,{"a":"#dish-top-desktop"}],[152886329,{"a":".fpbnr"}],[577029397,{"a":"[id^=\"media_image-\"]:has(a[href][target=\"_blank\"][rel=\"noopener\"])"}],[274280893,{"a":".row > div:has([src*=\"uploads/banner\"])"}],[1779629391,{"a":"a[href=\"../../omroep/adverteren/\"]"}],[1292994814,{"a":"[id^=\"section-ad-banner\"]"}],[963895614,{"a":"div[id*=\"gpt-ad\"]"}],[397123891,{"a":"#adBoven,\n#adRechts2"}],[839891429,{"a":"#advertentie,\n.adguru-ad-banner,\n.adguru-zone,\n.adguru-zone-wrap,\n.carousel-frame:has([id*=\"adguru_slider\"]),\n.footer-widget-container .widget:has(img),\n.widget:has(a[href*=\"ad\"][href*=\"bnmngr\"]),\n[id^=\"adguru-zone-widget\"],\naside > div[id^=\"media_image\"]:has(a[href]):not(:has(a[href*=\"kinkymedia.nl\"]))"}],[1162017185,{"a":".aside__add,\n[class^=\"space\"]:has(.adsbygoogle)"}],[1234012793,{"a":".banners-right"}],[1324673,{"a":".c-site-footer__partners"}],[259448525,{"a":".SponsorBar-list"}],[1552686208,{"a":".ad-item-container,\n.promobloc-desktop,\n.promoblocs__banner"}],[84930421,{"a":".header-banner"}],[387078382,{"a":"#bannerdiv"}],[1012935262,{"a":"[id^=\"text\"]:has([src*=\"banner\"]),\n[id^=\"text-\"]:has([src^=\"http://promotools.islive.nl/ads/\"])"}],[1326984535,{"a":".adUnderArticle"}],[861677003,{"a":".c-sponsoredBy,\n.p-footer__randomPartner"}],[1776883691,{"a":".widget-grid--partnerbox"}],[110861710,{"a":"#text-17"}],[381762784,{"a":"div[id*=\"adf-billboard\"]"}],[41768465,{"a":".block-block > .content:has(.adsbygoogle),\n.block-block > .content:has([id^=\"div-gpt-ad\"])"}],[426260985,{"a":".banner-secondary-sidebar:not(:has(img[src*=\"weerbanner\"])),\n.banner-widget,\n.banners-weekad,\n.in-slider-ad"}],[2062296192,{"a":"#header-text-nav-container > .inner-wrap > .clearfix,\n.slides"}],[1452401893,{"a":".widget:has(img[src*=\"banner\"])"}],[147452880,{"a":".widget_execphp"}],[644095078,{"a":"#banner-billboard"}],[1558624333,{"a":".tab4,\nli.linkUnit"}],[278809215,{"a":"#ad-rec-btf,\n.ad_between,\n.ad_inner"}],[1790796938,{"a":".mc-adv"}],[1744058932,{"a":"div[class^=\"AdWrapper\"] + div[class^=\"SkeletonWrapper\"]"}],[233950621,{"a":"div[id=\"pristineslider.12\"]"}],[416343993,{"a":"[id^=\"custom_html-\"]:has(a[href][target=\"_blank\"][rel=\"noopener\"])"}],[714370426,{"a":"a[href^=\"https://partnerprogramma.bol.com/\"]"}],[160591824,{"a":".fancy-wrap"}],[180975141,{"a":".header-widget-region > .col-full"}]]);

const hostnamesMap = new Map([["hyvesgames.nl",1397639125],["iculture.nl",1571417954],["iex.nl",1539625845],["iexgeld.nl",248549978],["iexprofs.nl",564532536],["ijshockeynederland.nl",368164231],["indebuurt.nl",305701184],["indiexl.nl",1017746374],["indignatie.nl",796298775],["infinance.nl",194096392],["infonu.nl",1619232784],["intikkertje.nl",129597563],["investmentofficer.nl",705649764],["jaap.nl",187395050],["jammfm.nl",2095023505],["jan-magazine.nl",1458455193],["janvissersweer.nl",1521235883],["kalender-365.nl",198988733],["kanaalxxx.nl",152886329],["kanaancourant.nl",577029397],["kavelplatform.nl",274280893],["kbradio.nl",1779629391],["kekmama.nl",1292994814],["kieskeurig.nl",963895614],["kinderspelletjes.nl",397123891],["kinkymedia.nl",839891429],["klimaatinfo.nl",1162017185],["knhs.nl",1234012793],["knltb.nl",1324673],["tennis.nl",1324673],["knvb.nl",259448525],["koopplein.nl",[1552686208,84930421]],["televizier.nl",84930421],["tvblik.nl",84930421],["kranenwebsite.nl",387078382],["kutscheetje.nl",1012935262],["leiderdorpsweekblad.nl",1326984535],["lekkercryptisch.nl",861677003],["limburger.nl",1776883691],["loemedia.nl",110861710],["lonelyplanet.nl",381762784],["luchtvaartnieuws.nl",41768465],["maarkelsnieuws.nl",426260985],["maaslandradio.nl",2062296192],["mannennieuws.nl",1452401893],["mannenstyle.nl",147452880],["marketingtribune.nl",644095078],["marktnet.nl",1558624333],["marokko.nl",278809215],["mediacourant.nl",1790796938],["mediamarkt.nl",1744058932],["meerradio.nl",233950621],["messianieuws.nl",416343993],["mijnserie.nl",714370426],["nailtalk.nl",714370426],["minecrafttoplist.nl",160591824],["minimumloon.nl",180975141]]);

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
