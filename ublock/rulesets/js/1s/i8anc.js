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

const argsMap = new Map([[2019797688,{"a":".left_fixed,\n.right_fixed"}],[116320106,{"a":"[src*=\"/BANNERS/\"],\n[src*=\"/banners/\"],\ndiv.title.sp-module:nth-of-type(5)"}],[664767561,{"a":"#text-10,\n#text-16,\n.td_block_widget,\n.vc_widget_sidebar"}],[675174556,{"a":".ad-970-250"}],[1126615973,{"a":"DIV#b177,\nDIV#b178,\nDIV#b199,\nDIV#b25,\nDIV#b32,\nDIV#b39,\nDIV#b41,\nDIV#b42,\nIMG#BLOGGER_PHOTO_ID_5491192352761655986,\nTD.content.first"}],[1582666928,{"a":".sls,\n.srs"}],[2141988349,{"a":"DIV#promotext,\nDIV.banner300250,\nDIV.underphoto,\ndiv[class=\"agores300\"]"}],[241178605,{"a":"#custom_html-2,\n.bos_searchbox_widget_class"}],[552660170,{"a":".adv,\n.widget_text[class^=\"widget-\"],\nimg[src$=\".gif\"]"}],[1066289430,{"a":".td_block_15,\n.td_flex_block,\n.td_mod_wrap,\n.tdi_88_ffb,\n.vc_raw_html"}],[1880040038,{"a":".banner.medrect,\n.banner.minirect"}],[351716264,{"a":".bdaia-ad-container,\n.bdaia-bellow-header,\n.bdaia-custom-area > .bd-container > div,\n.bdaia-widget-e3"}],[1313508644,{"a":".superbanner"}],[210919875,{"a":"div[align=\"left\"]"}]]);

const hostnamesMap = new Map([["www.eklogika.gr",2019797688],["eleftheria.gr",116320106],["emvolos.gr",664767561],["energypress.gr",675174556],["enet.gr",1126615973],["ethnos.gr",[1582666928,2141988349]],["imerisia.gr",1582666928],["eviaportal.gr",241178605],["evros-news.gr",552660170],["filadelfia-xalkidona.gr",1066289430],["flix.gr",1880040038],["fonien.gr",351716264],["forthnet.gr",1313508644],["gasprice.gr",210919875]]);

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
