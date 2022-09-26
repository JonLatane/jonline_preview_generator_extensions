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

const argsMap = new Map([[1999630191,{"a":"#mvp-leader-wrap"}],[1185758030,{"a":".footer_top > .footer-wrap > .columns"}],[684300214,{"a":".m-auto.ad"}],[1398979152,{"a":".df-auto-article,\ndiv[data-placeholder=\"undefined\"],\nsection > .padded--tight,\nsection.-bg-gray > .padded--less:not(.padded--no-bottom)"}],[1849770138,{"a":".hausad,\ndiv[style^=\"width:100%;max-width:390px;\"]"}],[1054518891,{"a":"a[href*=\"greenpilled.com\"]"}],[1280110243,{"a":".app_ad2,\n.logoads_wrap"}],[1976243121,{"a":"#footer,\n.layout-two-columns-aside,\n.omega.grid_6"}],[1264105065,{"a":".visible-lg-block,\na[href*=\"clk.tradedoubler.\"]"}],[327331568,{"a":"#dimmer_ad,\n.ad-sleepy"}],[528056683,{"a":".panel-ad-skyscraper"}],[124220856,{"a":"#commercial,\n.c-ad--adStickyContainer,\n.c-native-group__container,\n.container-newsfeed + section .u-x3of5-medium"}],[1212709345,{"a":"a[href*=\"adform.net\"]"}],[1526287515,{"a":"div[class^=\"undefined\"] > div[class^=\" css\"]"}],[2034453687,{"a":".overlay-wrap:before"}],[290216920,{"a":"#wallpaper"}],[1300349879,{"a":"#article-tags + div[class^=\" css-\"],\n#superright-side,\n#topboard,\n.standard-ad-container,\n.widget-salesposter:before"}],[26945168,{"a":".vc_empty_space"}],[2064454737,{"a":".ad-container"}],[141566547,{"a":"div[style^=\"padding: 15px\"],\ndiv[style^=\"padding: 30px\"]"}],[1891896398,{"a":".article-panel-mixed + .front-page-widget,\n.widget-1.columns-5,\n.widgetFullWidth.columns-5"}],[627548883,{"a":".BannerContainerTop"}],[1184201554,{"a":"a[href=\"//artige.no/blogg\"]"}],[1415906469,{"a":".carousel-ad"}],[677441619,{"a":"#block-block-1 > p:nth-of-type(4),\n.avvir-block-top.avvir-block-container"}],[1970820092,{"a":".sponsored"}],[765482064,{"a":"#cm2-1,\n.sportspill"}],[1575130424,{"a":".btDivider + section:not(.btDivider)"}],[1244818902,{"a":".bx-wrapper"}],[1171569000,{"a":".ads"}],[1778621337,{"a":"#advertisement"}],[2006199159,{"a":"#artikkel300x250right,\ntd[colspan=\"7\"][style]"}],[44888075,{"a":"#nettboard_art1"}],[1146787792,{"a":".contentmarketing-box"}],[1469144051,{"a":"div[class^=\"ad-container \"]"}],[971131483,{"a":".grid > h5"}],[856911861,{"a":".uk-overlay-hover.uk-panel"}],[368192121,{"a":".sidecol.hidden-xs"}],[442474086,{"a":".article-footer + .wg-editorial"}],[9086323,{"a":"#g-slideshow > .g-container > .g-grid > .size-100.g-block,\n.scs-banner"}]]);

const hostnamesMap = new Map([["veitingageirinn.is",1999630191],["veitingastadir.is",1185758030],["vf.is",684300214],["visir.is",1398979152],["eyjar.net",1849770138],["frihetskamp.net",1054518891],["sveip.net",1280110243],["1001spill.no",1976243121],["123nyheter.no",1264105065],["1881.no",327331568],["kart.1881.no",528056683],["abcnyheter.no",[124220856,1212709345]],["medier24.no",1212709345],["tv2.no",1212709345],["aftenbladet.no",[1526287515,2034453687]],["fvn.no",2034453687],["aftenposten.no",[290216920,1300349879]],["tek.no",290216920],["allers.no",26945168],["steigan.no",26945168],["altomdinhelse.no",2064454737],["altomfotball.no",141566547],["alvdalmiv.no",1891896398],["tynsetingen.no",1891896398],["anlast.no",627548883],["artige.no",1184201554],["av-avis.no",1415906469],["bygdanytt.no",1415906469],["strilen.no",1415906469],["vestnytt.no",1415906469],["avvir.no",677441619],["ba.no",[1970820092,765482064]],["itavisen.no",1970820092],["bardufoss.no",1575130424],["bdb.no",1244818902],["biff.no",1171569000],["diabetes.no",1171569000],["montages.no",1171569000],["united.no",1171569000],["valkal.no",1171569000],["biip.no",1778621337],["bilnorge.no",[2006199159,44888075]],["yrkesbil.no",44888075],["blogg.no",[1146787792,1469144051]],["klikk.no",1469144051],["bobilverden.no",971131483],["boblad.no",856911861],["bodonu.no",368192121],["boligpluss.no",442474086],["bramat.no",9086323]]);

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
