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

// irn-0

const argsMap = new Map([[1985980443,{"a":".text-ads"}],[446331702,{"a":"#bottombanner,\n.apnl,\n.b"}],[1336429371,{"a":"#sezfvg-2,\n.sezfvg,\n.sticky-column:not(:has(a[href*=\"modirnameh.ir\"]))"}],[2095844036,{"a":".txt-ads-sl"}],[1189516031,{"a":".banneritem:has(a[href*=\"/banners/click/\"]),\n.eb-inst"}],[1689357270,{"a":".adspanel"}],[1797692568,{"a":".adsblockpop,\n.afc_popup,\n.banners,\n.textAds"}],[1309857916,{"a":"#kaprila_p30download_ir_related,\n#kaprila_p30download_ir_related-top-post,\n.sidebar-tabliq.widget,\n.text-tabliq"}],[1522644239,{"a":".body_wrapper > div:nth-of-type(4)"}],[1139808485,{"a":"#custom_html-108,\n.stream-item-top,\n.widget_custom_html:has(img[src*=\".gif\"])"}],[602480388,{"a":"div > div > a.toolt > .onsc"}],[138686842,{"a":".banner-box"}],[2147433344,{"a":".tabligh-logo"}],[1077893995,{"a":".center.body_c > div > div,\n.center.body_c > div:nth-of-type(2),\n.txtad"}],[542151342,{"a":"#ad7_40,\n.footer-ads"}],[1144870174,{"a":"[href*=\"/fa/ads/\"]"}],[605491442,{"a":".left_banner,\n.links"}],[1494317328,{"a":"#ads3,\n.main-ads,\n.morders,\n.textads2"}],[488156552,{"a":".heading-ads,\n.sidebar-right > div.box:nth-of-type(1)"}],[515584538,{"a":".adv_mobile"}],[212572729,{"a":".stream-item"}],[178606187,{"a":".textwidget,\naside:nth-of-type(5)"}],[1940999101,{"a":".backoritybase,\n.news-box,\n.text-ads-1,\n.widgets.bg-custom.box"}],[1313583962,{"a":"#cycle_adv_tabnak"}],[307080045,{"a":".Topadver"}],[714973720,{"a":".ads120000,\n.leftads,\ndiv.Relement.Bstyle.RBC:nth-of-type(5)"}],[998370574,{"a":".havdqrmf-align-right"}],[1269624638,{"a":".inner-wrapper-sticky > .mb-3,\n.sidebar-banners"}]]);

const hostnamesMap = new Map([["mihand.ir",1985980443],["mobile.ir",446331702],["modirnameh.ir",1336429371],["montiego.ir",2095844036],["moviemag.ir",1189516031],["omidnamehnews.ir",1689357270],["p30day.ir",1797692568],["p30download.ir",1309857916],["parsipet.ir",1522644239],["pedal.ir",1139808485],["pgnews.ir",602480388],["rond.ir",138686842],["rouydad24.ir",2147433344],["rozup.ir",1077893995],["sena.ir",542151342],["shahraranews.ir",1144870174],["shmi.ir",605491442],["skinak.ir",1494317328],["smusic.ir",488156552],["snn.ir",515584538],["softsaaz.ir",212572729],["sornamusic.ir",178606187],["subf2m.ir",1940999101],["tabnak.ir",1313583962],["taknaz.ir",[307080045,714973720]],["talab.org",307080045],["technet24.ir",998370574],["timecity.ir",1269624638]]);

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
