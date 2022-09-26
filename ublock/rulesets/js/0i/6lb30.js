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

// fin-0

const argsMap = new Map([[1052649657,{"a":".bg-advertorial,\n.dre-item--feature-advertorial"}],[1372435597,{"a":"#sp-alabanneri,\n.autoboksi.moduletable"}],[1779506227,{"a":".jattiboksi.moduletable"}],[980001241,{"a":".banneritem"}],[323849945,{"a":"[data-test-id=\"ad\"]"}],[345349313,{"a":"#banner-top"}],[2140991580,{"a":".any-commercial"}],[1047273994,{"a":"#googlejs"}],[610290489,{"a":"a[href^=\"/ohjaus.php\"]"}],[263605866,{"a":".outsider-ads"}],[1218022894,{"a":".header-container__ad-container,\n.page-index__adholder,\ntr.rahalaitos__desktop.rahalaitos"}],[1792920681,{"a":".aldente-wrapper,\n.for-no-subscription.html-is-seuraa-myynti-bf.html-is-seuraa-myynti,\n.hs-advertorial,\n.hs-ticker-sales,\na.block[href*=\"/mainos\"]"}],[889923974,{"a":"article[class*=\"undefined\"]"}],[834434503,{"a":".grid--dfp-slots"}],[1311501006,{"a":".pane-sbase-cts-native-native-front"}],[710068957,{"a":"#paraati-ad-grid,\n.-ad1.-ad.sidebar__column-item"}],[685217457,{"a":".ad-separator"}],[15337703,{"a":".right-now-widget__item--commercial"}],[957194706,{"a":"div[data-lazy-ad-unit-id]"}],[1129415287,{"a":"#il-alekoodit-right-column-box,\n.article-list a[href] > .article-sponsored,\n.card.eo-embed-container,\n.center.category-list-embed,\n.commercial-list-item,\n.etua-widget-container,\n.etuovi-embed-placeholder,\n.leiki-container-markkinapaikka2.leiki-container,\n.parade-ad-container,\n.recommendation-carousel-svod.recommendation-carousel,\n.slider-content,\n.telkku-ads,\n[class|=\"almad-mobile-parade\"],\ndiv.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) > div > div > main div[class=\"card \"]:has(.full-article:has-text(Kaupallinen yhteistyö)),\ndiv.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) > div > div > main div[class=\"card \"]:has(.half-article:has-text(Kaupallinen yhteistyö)):not(:has(.half-article:not(:has-text(Kaupallinen yhteistyö)))),\ndiv.footer-wrapper__item.is-visible.LazyLoad"}],[73760566,{"a":".pikkusentteri1,\n[href^=\"/ilmoitus/mainostajan-artikkeli\"]"}],[289487052,{"a":".button-mainos,\n.footer-1.footer.footer-widgets"}],[435473156,{"a":"[class~=\"undefined\"][data-author=\"undefined\"]"}],[408783137,{"a":"#text-7"}],[348395643,{"a":"#kumppaneiden-tarjoukset,\n.advertorial-teaser,\n.border-b.lg\\:w-main-lane.bg-is-ad-blue.mb-16,\n.is-advertorial.external.full-width.teaser,\n.ticker-promo-10,\na[href=\"https://www.startel.fi/?infront\"],\ndiv.sadblob-loading"}],[1442741222,{"a":"section.sbs-articleitems[data-module_position_id=\"814\"]"}],[312619429,{"a":".c-box-space:not(.c-box)"}],[1571391268,{"a":".noAdsCell"}],[182453698,{"a":"[href=\"https://www.nettikasinovertailu.info/\"]"}],[1724340945,{"a":".collab,\n.collaboration,\n.emp-ad"}]]);

const hostnamesMap = new Map([["hbl.fi",1052649657],["heili.fi",[1372435597,1779506227]],["outokummunseutu.fi",1779506227],["pielisjokiseutu.fi",1779506227],["pogostansanomat.fi",1779506227],["prsanomat.fi",1779506227],["ylakarjala.fi",1779506227],["helsinkitimes.fi",980001241],["hevosurheilu.fi",323849945],["hidastaelamaa.fi",345349313],["hifimaailma.fi",2140991580],["high.fi",1047273994],["hinta.fi",610290489],["hintaopas.fi",263605866],["hintaseuranta.fi",1218022894],["hs.fi",[1792920681,889923974]],["is.fi",[889923974,348395643]],["hymy.fi",834434503],["hyvaterveys.fi",1311501006],["iijokiseutu.fi",[710068957,685217457,15337703]],["kaleva.fi",[710068957,685217457,15337703]],["koillissanomat.fi",[710068957,685217457,15337703]],["lapinkansa.fi",[710068957,685217457,15337703]],["pyhajokiseutu.fi",[710068957,685217457,15337703]],["raahenseutu.fi",[710068957,685217457,15337703]],["rantalakeus.fi",[710068957,685217457,15337703]],["siikajokilaakso.fi",[710068957,685217457,15337703]],["pohjoisenpolut.fi",685217457],["ilkkapohjalainen.fi",957194706],["iltalehti.fi",1129415287],["inarilainen.fi",73760566],["sompio.fi",73760566],["inssinosingot.fi",289487052],["bbs.io-tech.fi",435473156],["www.io-tech.fi",408783137],["iskelma.fi",1442741222],["m.jaatama.fi",312619429],["juoksufoorumi.fi",1571391268],["jvg.fi",182453698],["kaaoszine.fi",1724340945]]);

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
