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

const argsMap = new Map([[1708784329,{"a":".js-autotaurage-banner"}],[1386122248,{"a":"div[class^=\"undefined\"]"}],[1965363390,{"a":"#citadele-box"}],[1820733191,{"a":".header-ann,\n.no-print.view-bottom-media,\n.no-print:not([class*=\" \"]),\n.reklama-300x250"}],[623495586,{"a":".list-media"}],[1526946961,{"a":"#bigbank-mobile"}],[207776333,{"a":".header > .container,\n.reklamaadd"}],[1750929864,{"a":".ap-loan-calculator-native,\n.apl-content-calculator,\n.apl-example-note,\n.bigbank-price-leasing-button,\n.gallery-loan-opacity,\n.head-small,\n.ket-rules,\n.leader-board-wrapper,\n.parameter-value-bigbank,\n.superdedes-inannouncement,\ndiv[class*=\"bigbank-slideshow\"]"}],[549392742,{"a":".ads-items"}],[375359906,{"a":".bigbank-button,\n.bigbank-leasing-button,\n.bigbank-price-calculators-container,\n.middle-banner-label"}],[619924784,{"a":".ad"}],[1951366088,{"a":".showWhenBlocked,\n[style=\"margin-bottom: 10px; height: 100px; padding-left: 10px; padding-right: 10px; text-align: center;\"],\nimg[alt=\"undefined\"]"}],[292430353,{"a":".main_title > div[style=\"text-align: center;\"] > a > img,\ndiv[style^=\"text-align: center; width: 300px; height: 250px;\"]"}],[1149003707,{"a":".archive.tax-recipe-categories.term-velykos.term-82[style=\"overflow: hidden;\"]:last-child,\n.dialogBg,\n.valdiklis_reklama.clearfix [alt=\"probiotic valikliai\"]"}],[1542913398,{"a":"#marquee,\n#paremk-panel"}],[1355601383,{"a":".hook.roof-placeholder"}],[259544465,{"a":"#for-product1"}],[1303552952,{"a":".banners"}],[2060643983,{"a":".textwidget.custom-html-widget"}],[2079597911,{"a":".standartinisSarasas.sriftas13,\na[href=\"http://egu.lt\"]"}],[1134052418,{"a":"a[href^=\"/component/banners/click/\"] > img"}],[1336763115,{"a":".post.bg3,\nimg[onclick=\"Set_Cookie( 'popunder31254', 'true', 3, '/', '', '' );document.getElementById('myBtn').style.display='none';\"]"}],[1328956556,{"a":"[style=\"line-height: 25px; margin: 15px 8px 2px auto;\"]"}],[1287857083,{"a":"#alio_block,\n.ad-marker,\n.col-xs-9 a[href^=\"https://bit.ly/\"],\n.col-xs-9.left + div[class]:not([class*=\" \"]),\n.header-nav-container + :not(script,div,a,iframe,link),\n.hero,\n.revolut-juosta,\n.row > .left + div[class]:not(.right):not([id]) > :not(iframe):not(span):not(table):not(form):not([class]),\n[style]>[href]>img[width=\"100%\"],\nbody > #header-top-banner + [class]:not(div):not(iframe):not(span):not(table):not(form),\nbody > .container > .row > .left ~ :not(.right) > :not(.delfi-ads-block),\nbody > div[style*=\"height:\"][style*=\"z-index:\"],\ndiv[class^=\"undefined\"][style^=\"float: left; \"]:first-of-type + div[class]:not([class*=\" \"]):last-of-type,\ndiv[itemprop=\"articleBody\"] > div[style=\"float:left;margin: 0 25px 25px 0;\"],\niframe[src*=\"alio.lt/posPages.html\"],\niframe[src=\"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\"]"}]]);

const hostnamesMap = new Map([["auto-loads.lt",[1708784329,1386122248]],["autogidas.lt",[1386122248,1820733191,623495586]],["diena.lt",1386122248],["savaite.lt",1386122248],["autobilis.lt",1965363390],["www.plius.lt",[623495586,549392742]],["m.autogidas.lt",1526946961],["automokyklos.lt",207776333],["autoplius.lt",[1750929864,549392742]],["m.autoplius.lt",[375359906,619924784]],["delfi.lt",[619924784,1287857083]],["imunitetas.lt",619924784],["mesmoterys.lt",619924784],["snaujienos.lt",619924784],["anglija.today",619924784],["basketnews.lt",1951366088],["m.basketnews.lt",292430353],["beatosvirtuve.lt",1149003707],["bernardinai.lt",1542913398],["beta.lt",1355601383],["server2.beta.lt",259544465],["bitute.lt",1303552952],["meistras1.lt",1303552952],["piniginuke.lt",1303552952],["silentpc.lt",1303552952],["tuka.lt",1303552952],["vivasaninfo.lt",1303552952],["chatas.lt",2060643983],["dainos.lt",2079597911],["danguje.lt",1134052418],["diskusijos.darnipora.lt",1336763115],["day.lt",1328956556]]);

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
