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

const argsMap = new Map([[477445151,{"a":".bannerGrey"}],[757472549,{"a":".ai-attributes,\n.reclamaLata"}],[266687937,{"a":"#floating"}],[947113236,{"a":".section-full-ads"}],[2017745739,{"a":".row-header-baner,\ndiv.bnd"}],[1306455824,{"a":".index-slide,\n[id*=\"banner\"],\naside.externals:has([href*=\"cotidianul.ro\"])"}],[349893272,{"a":"#copy"}],[1653166655,{"a":"#alephLiveBkp"}],[276856289,{"a":"#alephLive,\ndiv.notif-bula.notif"}],[1534698761,{"a":".theiaStickySidebar.inner,\n[href=\"http://www.volta.ro/\"],\n[href=\"https://www.platinumoptic.ro/\"],\n[href^=\"https://cybernet.volvocarsdealer.ro/cere-oferta\"]"}],[966285217,{"a":"#honda_bnr_rot_1,\n[href=\"http://www.itsybitsy.ro/live/\"]"}],[778962757,{"a":".aboveDisqusBanners"}],[1703420731,{"a":"#_tdv_all,\n[href*=\"imobiliare.ro\"]"}],[1262684887,{"a":"[class*=\"td-a-rec-id-custom_ad\"],\n[href=\"https://www.bursa.ro/\"]"}],[248427758,{"a":".widget_custom_html.widget.widget_text"}],[384366194,{"a":".listAd.center-block.img-responsive,\n.visible.go-premium-drawer"}],[884834059,{"a":".pls-dis-blck"}],[1553079544,{"a":"[href=\"http://www.coralimpex.ro/\"],\n[href=\"http://www.rosal.ro/\"],\n[href=\"http://www.trcj.ro\"]"}]]);

const hostnamesMap = new Map([["jurnalul.ro",477445151],["lauralaurentiu.ro",757472549],["libertatea.ro",266687937],["libertateapentrufemei.ro",947113236],["libnet.ro",2017745739],["luju.ro",1306455824],["manafu.ro",349893272],["mediafax.ro",[1653166655,276856289]],["zf.ro",1653166655],["mesagerulneamt.ro",1534698761],["missauto.ro",966285217],["mobilissimo.ro",778962757],["moise.ro",1703420731],["monitoruldevrancea.ro",1262684887],["motorclasic.ro",248427758],["multecase.ro",384366194],["myradioonline.ro",884834059],["napocanews.ro",1553079544]]);

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
