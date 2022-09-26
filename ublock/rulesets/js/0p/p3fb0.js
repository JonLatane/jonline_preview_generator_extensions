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

// rou-1

const argsMap = new Map([[1826559109,{"a":"#topBranding,\n.topBranding"}],[1152090971,{"a":".banner-request.news-widget-color-1.news-widget.widget,\n.bgcolor-revista-blogurilor,\n.border-revista-blogurilor,\n.giant-modal--fb-like.giant-modal,\n.giant-modal__left__text,\n.js-alternating-banners,\n.small.banner,\n.vertical-banner,\n[href*=\"Adv\"],\n[href*=\"Promo\"]"}],[213963983,{"a":"[id^=\"subst-\"][style]"}],[1396882263,{"a":"#ad-bilboard"}],[138423441,{"a":".magazin1,\n.magazin[href=\"http://camerevideoauto.ro\"],\n.smecher,\ndiv[style$=\"width:520px\"],\ndiv[style*=\"width:520px;\"]"}],[871625985,{"a":"#flashContent"}],[286316266,{"a":".herald-header-wraper.header-middle,\n[href^=\"//www.booking.com\"]"}],[221096366,{"a":".header_banner"}],[97865757,{"a":".home-featured-boxes,\n.homepage-banner,\n[href^=\"https://www.skinmedspa.ro/\"]"}],[539472348,{"a":"[href^=\"https://www.facebook.com/TurnulBerarilorOficial/\"]"}],[670784153,{"a":".sam_branding.hidden-xs,\ndiv[class^=\"strawberry\"]"}],[1299426434,{"a":"#home_calendar > a"}],[1609285201,{"a":"#background-div"}],[1246457535,{"a":".td_block_template_1.td-single-image-"}],[2146464850,{"a":"#adocean\\.slots\\.box3,\n.minh-250.mb-20.mt-20,\n.minh-lg-600.sidebarBox,\n.slick-slider.slick-initialized.ws_gallery_image,\n.slick-slider.slick-initialized.ws_gallery_image > .draggable.slick-list > .slick-track"}],[1002967079,{"a":"[id^=\"werad\"]"}],[79215897,{"a":"[href=\"https://www.hulber.ro/\"],\n[href^=\"http://constantinnautics.ro/index.php\"]"}],[1797075451,{"a":"[href=\"https://www.pieseshop.ro/\"]"}]]);

const hostnamesMap = new Map([["stirileprotv.ro",1826559109],["stiripesurse.ro",1152090971],["substantial.ro",213963983],["tenisdecamp.ro",1396882263],["trafictube.ro",138423441],["transilvaniareporter.ro",871625985],["tuktuk.ro",286316266],["turatii.ro",221096366],["turbomag.ro",97865757],["tvmneamt.ro",539472348],["retete.unica.ro",670784153],["urban.ro",1299426434],["virginradio.ro",1609285201],["vremeanoua.ro",1246457535],["wall-street.ro",2146464850],["weradio.ro",1002967079],["yachtexpert.ro",[79215897,1797075451]],["zero-accidente.ro",1797075451]]);

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
