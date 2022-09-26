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

// grc-0

const argsMap = new Map([[389917537,{"a":".custom_area_single_01,\n.elementor-element-3db4f540,\n.elementor-element-5680254d,\n.elementor-element-5716b5fa,\n.elementor-element-c2a8f89,\n.elementor-section-items-middle,\n.elementor-widget-image,\n.jeg_ad,\n.widget_sp_image,\n[class^=\"custom_position_single\"]"}],[9524750,{"a":"#das_out,\n#das_r1 > a[href^=\"/lines/click/\"],\n#das_top > a[href^=\"/lines/click/\"],\n.textads-wrapper,\na[href*=\"/lines/click/\"]"}],[545496651,{"a":"#itrofi-left,\n#itrofi-right"}],[1803220501,{"a":"DIV.textLink,\nDIV.textLink.right"}],[95194998,{"a":"#box_text_ads"}],[330933286,{"a":"#text-88 > .textwidget"}],[1801321226,{"a":".cityAdv,\n.newsbeast"}],[618292321,{"a":"#google_ads_container"}],[1159528250,{"a":"DIV.banner"}],[1134439370,{"a":"#editor_link,\n#link-deliveras,\n#mainContent > .alpha.grid_12 > .bolder.lineborder,\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(4),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(5),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(6),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(8),\n.seatimage,\nDIV[class=\"undefined\"],\ndiv[class=\"banner\"]"}],[118898859,{"a":"[href*=\"bit.ly\"]"}],[857262910,{"a":"#adFixFooter,\n#artFoot,\n#imgAd,\n.icon-popular.nespressoAdd,\n.menuAdd,\n.topShare_textad,\n.txtLinks,\nA[href*=\"http://bs.serving-sys.com/\"]"}],[1509816292,{"a":"#json-textlinks,\n.skin-link,\nDIV[style=\"mergin:5px 0\"]"}],[1705706074,{"a":"#left,\n#right,\n#sponsor-link,\nA[href*=\"http://194.219.47.98/link/\"],\nDIV[style=\"margin: 10px 0 0 0; display: block;clear:both;\"]"}]]);

const hostnamesMap = new Map([["larissanet.gr",389917537],["www.lifo.gr",9524750],["live24.gr",545496651],["livescores.gr",1803220501],["madata.gr",95194998],["makeleio.gr",330933286],["meteo.gr",1801321226],["naftemporiki.gr",[618292321,1159528250]],["sport-fm.gr",1159528250],["news247.gr",1134439370],["www.news247.gr",118898859],["newsbeast.gr",857262910],["newsbomb.gr",1509816292],["newsit.gr",1705706074]]);

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
