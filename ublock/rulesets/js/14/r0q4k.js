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

const argsMap = new Map([[852818947,{"a":"#layout-banner-right"}],[850414251,{"a":".ad_class,\n.om-adcoin-ad"}],[154947972,{"a":"div[class=\"site-header__top-container header-top-banner\"]"}],[1255644546,{"a":".ast,\n.editorial-slots"}],[1323443926,{"a":".bannerTop.S24_banner"}],[1102359828,{"a":".asp"}],[214986174,{"a":".artikkelimainos,\n.headermainos"}],[1619464095,{"a":".ad-banner-lift"}],[223421467,{"a":".mainos_banner1,\n.widget > a[href^=\"https://www.nettikirjakauppa.com/\"]"}],[1112834279,{"a":"[id=\"undefined\"] > div > main > div[class=\"LazyLoad is-visible\"] > section > div:first-of-type + div[class^=\"undefined\"],\nbody:not(.is-style-kumppanisisallot) a[href^=\"https://www.talouselama.fi/kumppanisisallot/\"]:not(section > a)"}],[1374493656,{"a":".bannerarea"}],[630335091,{"a":".sidebar-banners"}],[1368657408,{"a":"a[href=\"https://sinitaivas.com/kauppa/\"]"}],[1640169352,{"a":".commercial-bottom.commercial,\n.commercial_wrapper,\n.node-promoted.node-teaser,\n.paragraph--type-ad"}],[402709593,{"a":"[class|=\"undefined\"]"}],[2111574483,{"a":".Article_native-ads,\n.CategoryPriceGuide_price-guide,\n.FrontPage_native-ads,\n.NativeAdHolder_native-ad-holder,\n.PriceGuide_price-guide,\n.in-text-ad-slot-wrapper,\ndiv.Article_nettix-embed-container"}],[605733833,{"a":"a[href^=\"/tyopaikat/kumppanisisalto-tyopaikat/\"],\naside > div[class] > a[href^=\"https://www.tekniikkatalous.fi/kumppanisisallot\"],\ndiv#skyscraper-height-div > div > aside > div > div > a[href^=\"https://studio.tekniikkatalous.fi/\"],\ndiv[class][width=\"980\"],\nsection > div > a[href^=\"https://www.tekniikkatalous.fi/kumppanisisallot/\"]"}],[62216563,{"a":"#prg img:not(.ch img),\n.pop img:not(.cd img),\na[href^=\"/\"][target=\"undefined\"] > img[src^=\"/\"],\nimg:not(#foot1 img,#foot2 img,#prg img,.data img,.pop img,.stat img,img[src^=\"/img/\"])"}],[1341889435,{"a":".ad-blocks"}],[1586599009,{"a":".advertisement-banner-row"}],[1317103361,{"a":"[class*=\"block-boxes-ad-300x250\"]"}],[398907968,{"a":"#front_big_event,\n#front_big_event > span"}],[518268114,{"a":"[class^=\"undefined\"]:not(:only-child)"}],[369539556,{"a":".lazyloading"}],[2092102303,{"a":"aside > div[class] > a[href^=\"https://www.tivi.fi/kumppanisisallot/\"],\nsection > div[class] > a[href^=\"https://www.tivi.fi/kumppanisisallot/\"]"}],[435429520,{"a":"#banner_panorama_bottom,\n#footer_partner_links"}],[473564993,{"a":"div[class*=\"adViewPage_maxWidthWrap\"]:not(div[class^=\"adViewPage_adWrap\"])"}],[554305839,{"a":".appnexus-container"}],[312766476,{"a":".billboard"}],[232492864,{"a":"[class=\"tsv3-c-common-article__contentad notloaded\"],\n[data-readpeakurl^=\"https://app.readpeak.com/ads/\"],\ndiv[class*=\"tsv3-c-common-smart noad-hideaction\"]"}]]);

const hostnamesMap = new Map([["suomen118.fi",852818947],["suomenkuvalehti.fi",850414251],["suomenmaa.fi",154947972],["suomi24.fi",1255644546],["chat.suomi24.fi",1323443926],["www.suomi24.fi",1102359828],["suomimobiili.fi",214986174],["superlehti.fi",1619464095],["svl.fi",223421467],["talouselama.fi",1112834279],["taloustaito.fi",1374493656],["talviopas.fi",630335091],["turisti-info.fi",630335091],["tanssiin.fi",1368657408],["tehylehti.fi",1640169352],["teknavi.fi",402709593],["tekniikanmaailma.fi",2111574483],["tekniikkatalous.fi",605733833],["telsu.fi",62216563],["tennis.fi",1341889435],["tervareitti.fi",1586599009],["tiedonantaja.fi",1317103361],["tiketti.fi",398907968],["tilannehuone.fi",518268114],["tilt.fi",369539556],["tivi.fi",2092102303],["tori.fi",435429520],["autot.tori.fi",473564993],["m.tori.fi",554305839],["traktorpool.fi",312766476],["www.ts.fi",232492864]]);

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
