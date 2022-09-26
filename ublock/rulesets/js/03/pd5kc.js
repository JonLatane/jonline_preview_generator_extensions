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

// svn-0

const argsMap = new Map([[1263730794,{"a":".bannerInText,\n.h-banner"}],[267026976,{"a":".bsaProItems"}],[2055981078,{"a":"#itisAdPromo,\n#yodaarticle,\n.card--ts_storitva,\n.fold__homepage_banner,\n.grid-12.grid-md-3,\n.grid-12.grid-md-8.grid-lg-3,\n.marketing,\n.neo-image,\n.spored_widget--special > .no-gutter,\n.ts_storitve"}],[928777698,{"a":".wrapper > .col-4"}],[477856586,{"a":".sf-ads_container,\n.sf-panel:nth-of-type(2)"}],[929306581,{"a":"[id^=\"ad\"]"}],[1929545502,{"a":"#banner_side_layer,\ndiv.banner_footer"}],[298518179,{"a":"#sidebar-footer > .mosaicflow__column:nth-of-type(4),\n#wppas_custom_widgets-3"}],[479586095,{"a":".background_link"}],[1236274030,{"a":".banner-app-article"}],[682263737,{"a":".livenetlife_linkswidget_logo"}],[1892628661,{"a":"#baner,\n#banners,\n.uvodna_bottomBaners"}],[1784820821,{"a":".xl\\:h-250.h-470"}],[39113668,{"a":".banner-970,\n.td-zsd"}]]);

const hostnamesMap = new Map([["ringaraja.net",1263730794],["sentjur.net",267026976],["siol.net",2055981078],["tv-spored.siol.net",928777698],["slo-foto.net",477856586],["www.slonep.net",929306581],["studentarija.net",1929545502],["www.tekaskiforum.net",298518179],["1nadan.si",479586095],["aktivni.si",[1236274030,682263737]],["slovenskenovice.si",682263737],["avto-fokus.si",1892628661],["bibaleze.si",1784820821],["dominvrt.si",1784820821],["bizi.si",39113668]]);

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
