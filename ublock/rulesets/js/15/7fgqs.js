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

const argsMap = new Map([[1733513343,{"a":"#ado970p2"}],[416825719,{"a":"#ado300p1,\n#adobranding"}],[1401537772,{"a":"#carvertical_widget,\n.description_area_gad,\n.second_carvertical_noVin,\n[href^=\"https://www.carvertical.com/\"]"}],[1219717925,{"a":"#footer-ads-section,\n.pin-it-button"}],[875282666,{"a":".bf > .wpel-icon-right,\n.cd-is-visible.cd-top,\n.cetinblog > .site-header > .prehead,\n.wpel-icon-right.bflink"}],[445214081,{"a":".google-ads-billboard,\n.google-ads-in_article"}],[929306581,{"a":"[id^=\"ad\"]"}],[1367249804,{"a":".wpb_wrapper > aside.widget_text.widget"}],[65800325,{"a":"[href=\"https://www.kerigma.ro/\"],\n[href^=\"https://librariact.ro/\"]"}],[2032069628,{"a":"[src*=\"banner\"]"}],[1657323982,{"a":".textwidget"}],[1816435166,{"a":"[href=\"https://redsky.ro/\"]"}],[1163598752,{"a":"[class*=\"widget_media_image\"],\n[id*=\"widget_sp\"]"}],[392474034,{"a":"[href=\"https://hotelilavamaveche.ro/\"]"}],[862923669,{"a":".profitshare"}],[647016452,{"a":".adsense"}],[466230455,{"a":".essbis-container"}],[1579910842,{"a":"[href^=\"https://ccir.ro/\"]"}]]);

const hostnamesMap = new Map([["capital.ro",[1733513343,416825719]],["evz.ro",1733513343],["carzz.ro",1401537772],["catchy.ro",1219717925],["cetin.ro",875282666],["click.ro",445214081],["clujust.ro",929306581],["craiovaforum.ro",1367249804],["crestintotal.ro",65800325],["crisana.ro",2032069628],["cspower.ro",[2032069628,1816435166]],["hotnews.ro",2032069628],["luju.ro",2032069628],["cristianmargarit.ro",1657323982],["gazetadecluj.ro",1657323982],["sroscas.ro",1657323982],["ct100.ro",1163598752],["curier.ro",392474034],["daciaclub.ro",[862923669,647016452]],["mobilissimo.ro",862923669],["reno.ro",[862923669,647016452]],["dailyfeed.ro",466230455],["dcnews.ro",1579910842],["stiripesurse.ro",1579910842]]);

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
