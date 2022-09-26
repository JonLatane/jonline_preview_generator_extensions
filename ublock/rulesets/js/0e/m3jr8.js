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

// ltu-0

const argsMap = new Map([[1039763053,{"a":"[src*=\"http://www.senukai.lt/out/1/html/0/images/wysiwigpro/Baneris*\"]"}],[350178224,{"a":".providers-block *"}],[121426050,{"a":"a[target=\"undefined\"][href*=\"http://\"] > img"}],[1355312318,{"a":"#ads"}],[925379710,{"a":"#banner-three-in-one-between-items,\n#bigbank-small-loan,\n#items-view-type-grid > div[style^=\"margin-top: \"]:not([class]),\n#list-middle-zone,\n#right-side-layout,\n#top-item-zone,\n.bigbank-loan-calculator-wrapper,\n.bigbank-recommendation-by,\n.gallery-kainos-more-products,\n.kainos-gallery-item,\n.kainos-item,\n.lazy-zone,\n.luminor-item-container,\n.luminor-item-container-new,\n.luminor-spacer,\n[href^=\"https://www.aruodas.lt/nauji-projektai/?utm_source\"]"}],[499611089,{"a":"[src^=\"images/drawflash.php\"] + * > *,\na[href^=\"go.php?lt=\"]"}],[556091997,{"a":".campaigns-list,\n.front-ads,\n.gfBlock,\na[href^=\"http://www.skytech.lt/\"] > *"}],[705816968,{"a":"#partners"}],[1063193105,{"a":"img[alt=\"Poligrafijos įmonė 'Spauda': SPAUDA.COM\"]"}],[891344142,{"a":"#promo,\n.shortcode"}],[1133135776,{"a":"a[href^=\"http://www.taupiems.lt\"]"}],[451729853,{"a":".outerContainer"}],[1603463100,{"a":"div[style=\"width: 752px; padding-top: 7px;\"]"}],[314586100,{"a":".center.desktop.shadow-top,\nli[style=\"overflow:visible\"]"}],[764772771,{"a":"a[href*=\"pakavimopleveles.lt\"]"}],[778782411,{"a":".side-block.side-banner *"}],[1843293168,{"a":"A.close"}],[1804494313,{"a":"div[style=\"width:250px; float:left\"] > div[style^=\"height:\"]"}],[588008281,{"a":".blog-sidebar *,\n.wsite-image.wsite-image-border-none"}],[2090076517,{"a":"div[class=\"margin: 10px 0px\"]"}],[1527319280,{"a":".left_side"}],[1030194740,{"a":"#portal_baner_750x100_td_v2,\n.lygiuoti_centras[style=\"padding: 1.5em 0em 1.25em 0em;\"],\n.visualPadding.lygiuoti_centras,\ndiv[style=\"margin:0.5em 0.5em 0.5em 0.0em; display:table; width:300px; height:250px;\"]"}],[790818732,{"a":".leasing-info"}],[472137151,{"a":".boxcontent.bannersr"}]]);

const hostnamesMap = new Map([["senukai.lt",1039763053],["silentpc.lt",350178224],["siloaidas.lt",121426050],["silokarcema.lt",1355312318],["skelbiu.lt",925379710],["skrastas.lt",499611089],["skytech.lt",556091997],["spainetosdraudimas.lt",705816968],["spauda.lt",1063193105],["sport24.lt",891344142],["sportas.lt",1133135776],["widgets.sportotv.lt",451729853],["supermama.lt",1603463100],["sutarta.lt",314586100],["suvalkai.lt",764772771],["sveikas.lt",778782411],["gyvensena.sveikas.lt",1843293168],["sveikatosabc.lt",1804494313],["sveksnosnaujienos.lt",588008281],["tavovaikams.lt",2090076517],["technews.lt",1527319280],["technologijos.lt",1030194740],["technorama.lt",790818732],["teisescentras.lt",472137151]]);

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
