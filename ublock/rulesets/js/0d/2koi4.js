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

const argsMap = new Map([[1637931254,{"a":"#biscuitFormDiv"}],[1337664779,{"a":"#bannerC1_728,\n#bannerC2,\n.bannerR2"}],[99344554,{"a":"#header-right-section"}],[1698325461,{"a":"#heateor_ss_browser_popup_bg"}],[747301058,{"a":".custom-html-widget,\n.g-single,\n.widget-10.widget-last.widget-even"}],[843243808,{"a":".banners-box"}],[294185941,{"a":".BannerBox972,\n.GO-banner-Billboard,\n.Oblika3Container"}],[1840574681,{"a":"#desnistolpec,\n#oglas"}],[1500069640,{"a":".banner2,\n.banner_cont"}],[105171120,{"a":"#ad-detail,\n#ad-ribbon,\n#top_wrap,\n.ad-container"}],[178812973,{"a":".category > .col-md-3"}],[1851923423,{"a":"#lnl-footer,\n.feedo,\n.livenetlife_links,\n.widget_oglas_widget"}],[1770036787,{"a":".lwdgt"}],[1151509396,{"a":".roglas_lista:nth-of-type(2),\n.roglas_listaBanner"}]]);

const hostnamesMap = new Map([["slovnica.slovenscina.eu",1637931254],["avto.info",1337664779],["celje.info",[99344554,1698325461]],["svetopismo.si",1698325461],["kozjansko.info",747301058],["adomnia.net",843243808],["avto.net",294185941],["hribi.net",1840574681],["mediaspeed.net",1500069640],["nepremicnine.net",105171120],["obala.net",178812973],["med.over.net",[1851923423,1770036787]],["n1info.si",1770036787],["svet24.si",1770036787],["porscheinterauto.net",1151509396]]);

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
