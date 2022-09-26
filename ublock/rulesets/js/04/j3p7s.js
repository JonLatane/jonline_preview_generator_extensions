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

// nor-0

const argsMap = new Map([[1821113362,{"a":"#related-articles + div[class^=\"undefined\"],\n#topstripes,\n.classic-perks-container,\n.contentboard-container,\n.perks-container,\ndiv[class^=\"undefined\"] > div[class^=\" \"],\ndiv[class^=\"undefined\"] > div[class^=\"undefined\"]"}],[1360537831,{"a":".bazaar"}],[1855305355,{"a":".textwidget > div[align=\"undefined\"]"}],[1588949201,{"a":".wsite-spacer"}],[1028096168,{"a":".section-ad-netboard"}],[1483906551,{"a":".ads-floating,\n.ads-strip"}],[1897078286,{"a":".body-spacer,\n.maestro-banner-wallpaper,\n.maestro-content-plugins,\n.maestro-content-plugins + div[style],\n.maestro-resize"}],[688000479,{"a":".sponsor-row"}],[600268291,{"a":"#bannerContainer:not(.HeaderBanner1)"}],[1437197097,{"a":"#block-annonse-blokk1"}],[1313807346,{"a":".ad-separator,\n.ad-separator-top"}],[543726737,{"a":".theiaStickySidebar > .widget-1"}],[1872952776,{"a":".banner-inline,\ntd.visible-lg"}],[692237723,{"a":".jss270,\ndiv[class*=\" jss312 \"]"}],[1177917794,{"a":".ad-displace-sidebar:before,\n.ad-fit-body,\n.desktop-only.l-row > .omega.grid-12.grid-item.col,\n.w-advert-article"}],[1386549341,{"a":".xrow.fullwidth,\nmain > div[class^=\"undefined\"] > div[class^=\"undefined\"]:last-of-type"}],[212602625,{"a":"[class^=\"undefined\"]"}],[1452784083,{"a":".widget-article-ad.widget"}],[2040382784,{"a":"#main > .small-12:nth-of-type(1)"}],[1435403799,{"a":".dot-shorttext:before"}],[1875683594,{"a":".clickad-container > .row,\n.dagsavisenDesktopAd,\na[href*=\"norsk-tipping.no/artikler/\"]"}],[271025555,{"a":".container[style*=\" solid \"],\ndiv[style*=\";width:200px;\"]"}],[56798903,{"a":".cWidgetContainer[data-widgetarea=\"undefined\"]"}],[1163053524,{"a":"h2.list-heading"}],[1996117522,{"a":"#order-form:before,\n.commercial,\n.native,\nmain > .hidden"}],[1973074088,{"a":".products-carousel"}],[1293744527,{"a":".top-poster-wrap"}],[1423160788,{"a":".ad-label-vertical"}],[2035917729,{"a":".carpet"}],[587985901,{"a":"[id^=\"undefined\"]:not([id$=\"undefined\"])"}],[7314362,{"a":".newsAD"}],[1682303412,{"a":".article-body:after"}],[394676325,{"a":"#diskusjon_toppbanner,\n.love-placeholder,\n.prisguide-content,\n.skyskraper"}],[2033828887,{"a":".vrs-image-block__image-description-overlay,\n[id^=\"undefined\"]:not(#googlead-toppbanner)"}],[1635861927,{"a":".ad-col-article,\n.ad-in-column"}],[802891714,{"a":".td-footer-wrapper"}],[457595650,{"a":"#adPlaceholderFront,\n#main > div:nth-of-type(1),\n#main > div:nth-of-type(3),\n.bg-xAdrow,\n.component_content-marketing,\n.content-marketing-container,\n.teaser__preview,\na[href*=\"/go.click?\"],\ndiv[class^=\"undefined\"] > div[class^=\"undefined\"][class*=\" \"],\ndiv[data-ad-subtype],\ndiv[data-placement^=\"undefined\"]"}],[768208633,{"a":"#nav_menu-3.widget_nav_menu,\n.eiker-adlabel,\n[href*=\"eikernytt.no/linkout/\"]"}],[868378883,{"a":".cm-message"}],[1661831773,{"a":".RightBoxWrapper,\n.SkyskraperWrapper"}]]);

const hostnamesMap = new Map([["bt.no",1821113362],["budstikka.no",1360537831],["bussmagasinet.no",1855305355],["bvbnorge.no",1588949201],["byas.no",1028096168],["bygg.no",1483906551],["byggebolig.no",1897078286],["byggfakta.no",[688000479,600268291]],["byggfaktabolig.no",600268291],["vvsaktuelt.no",600268291],["campingportalen.no",1437197097],["canariajournalen.no",1313807346],["canariposten.no",543726737],["alletilbudsaviser.co.no",1872952776],["crazygames.no",692237723],["cw.no",1177917794],["dagbladet.no",[1386549341,212602625]],["filmweb.no",212602625],["gamer.no",[212602625,1973074088]],["godt.no",212602625],["sol.no",212602625],["dagensmedisin.no",1452784083],["dagensperspektiv.no",2040382784],["kulturplot.no",2040382784],["velferd.no",2040382784],["dagogtid.no",1435403799],["dagsavisen.no",1875683594],["daria.no",271025555],["detailersclub.no",56798903],["diabetes.no",1163053524],["digi.no",[1996117522,1973074088,1293744527,1423160788,2035917729,587985901]],["tek.no",1973074088],["tu.no",[1293744527,2035917729,587985901]],["veier24.no",1293744527],["medier24.no",1423160788],["dinavis.no",7314362],["dinepenger.no",1682303412],["diskusjon.no",394676325],["dn.no",2033828887],["dusken.no",1635861927],["dyrevennene.no",802891714],["e24.no",457595650],["eikernytt.no",768208633],["ektenyheter.no",868378883],["elmagasinet.no",1661831773]]);

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
