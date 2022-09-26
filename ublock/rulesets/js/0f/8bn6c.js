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

const argsMap = new Map([[417640884,{"a":"[src^=\"https://kaasujalka.fi/assets/banners\"]"}],[673182357,{"a":".ad-mob_description,\n.placeholder"}],[832109897,{"a":"#native-list-wrapper,\n.native.feed_box_container"}],[1534763011,{"a":"#puff-container"}],[1336991291,{"a":"#outstream-container"}],[121514596,{"a":"#sidebar .simple-image > [href]:not([href^=\"https://kamera-lehti.fi\"])"}],[1735941829,{"a":".kaupallinen-general,\n.ksnote"}],[1715532735,{"a":"a[href=\"https://www.kielletytkirjat.com/\"],\na[href^=\"https://revoltnoir.com\"]"}],[1390330340,{"a":".elementor-element-2770b68,\n.elementor-element-3e26be8,\n.elementor-element-44ffbd5,\n.elementor-element-54b7f6f,\n.elementor-element-abfd7ba"}],[1804539675,{"a":".breaking-news-container,\na[href=\"https://punamustamedia.portal.worldoftulo.com/v2/shop/dtabkaiku\"]"}],[606418645,{"a":"aside > div[class] > a[href*=\"/kumppanisisallot/\"]"}],[1245890303,{"a":".blogi__nosto,\n.kl-sima--blocks > [href^=\"https://www.kauppalehti.fi/kumppanisisallot/\"]"}],[924854597,{"a":"#new-post-list-headings-17,\n.mpc-row.vc_custom_1515749959295.vc_row-fluid.wpb_row.vc_row,\n.mpc-row.vc_custom_1515750168978.vc_row-fluid.wpb_row.vc_row"}],[1832204403,{"a":".kiint-adlabel,\n.kiint-widget"}],[2074817997,{"a":".bannerlink"}],[1538781633,{"a":"app-ad"}],[743013784,{"a":".banner"}],[633353648,{"a":".promo"}],[1181702942,{"a":"#traktorpool-ad"}],[818938623,{"a":".banner--top"}],[239911180,{"a":".article-continues"}],[1386583917,{"a":".wp-block-otavamedia-google-ad-slot"}],[949214132,{"a":"#nmbc,\n.artikkelim-jatkuu,\n.headerau,\n.ktbanner,\n.thirstylink"}],[2101068397,{"a":"#kaikki-tarjoukset,\n.sbbyks"}],[292576639,{"a":".campaign-teaser-show,\n.gtm-banner,\n.wg-banner"}],[1624602786,{"a":"#middle"}],[1502997879,{"a":".fusion-carousel"}],[1915259199,{"a":"#content1-container"}],[146108042,{"a":".tilaa-tasta,\n.ylabanner1"}],[16454140,{"a":".hasordercontent.orange-bg,\n.mainbanner"}]]);

const hostnamesMap = new Map([["kaasujalka.fi",417640884],["kaksplus.fi",673182357],["keskustelu.kaksplus.fi",832109897],["kaleva.fi",[1534763011,1336991291]],["lapinkansa.fi",[1336991291,1915259199]],["kamera-lehti.fi",121514596],["kangasalansanomat.fi",1735941829],["kansalainen.fi",1715532735],["kansantahto.fi",1390330340],["karjalainen.fi",1804539675],["kauppalehti.fi",606418645],["mediuutiset.fi",606418645],["keskustelu.kauppalehti.fi",1245890303],["kiinteistolehti.fi",924854597],["kiinteistoposti.fi",1832204403],["kilipailut.fi",2074817997],["kinuskikissa.fi",1538781633],["klangi.fi",743013784],["paakallo.fi",743013784],["koneviesti.fi",[633353648,1181702942]],["maaseuduntulevaisuus.fi",633353648],["kotilappi.fi",818938623],["kuhmolainen.fi",818938623],["sotkamolehti.fi",818938623],["ylakainuu.fi",818938623],["kotiliesi.fi",[239911180,1386583917]],["suomenkuvalehti.fi",1386583917],["kotimaatutuksi.fi",[949214132,2101068397]],["lomamatkalle.fi",2101068397],["kotimikro.fi",292576639],["kuljetusnet.fi",1624602786],["kulutusluottovertailu.fi",1502997879],["lapuansanomat.fi",146108042],["lauttakyla.fi",16454140]]);

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
