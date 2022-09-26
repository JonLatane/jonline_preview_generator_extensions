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

// hun-0

const argsMap = new Map([[153352061,{"a":".footprint_cookie"}],[2066014173,{"a":"[id*=\"_ajanlatunk_\"],\ndiv.floating_share"}],[359681243,{"a":"[id*=\"AdFrame\"]"}],[179881608,{"a":"[class=\"wc_content wc_contentwide\"],\n[id*=\"AdZone\"]"}],[664929091,{"a":"div.penci-wrap-gprd-law,\ndiv.sgpb-popup-dialog-main-div-theme-wrapper-1,\ndiv.sgpb-popup-overlay-42657,\ndiv.sgpb-popup-overlay-42658"}],[2052797049,{"a":"[id*=\"sense-\"]"}],[654343776,{"a":".adsListItem,\n.videoBanner"}],[427617528,{"a":".logopic2 + .fll,\n.overlay,\n.pupopadbox,\n[class=\"cikkbanner hirdbox mh40 listafriss\"],\n[style=\"margin-left:auto;margin-right:auto;width:980px;text-align:center\"]"}],[1182953507,{"a":".state-fb-pop-up"}],[1966781499,{"a":".d-none[style*=\"padding: 10px\"],\n.d-xl-none[style*=\"padding: 10px\"],\n.post_content_box_article_continue + .text-center,\n.post_content_box_sidebar"}],[905706537,{"a":"#sidebad,\n#spu-main,\n#text-html-widget-6,\n[class*=\"PostAd\"],\n[class=\"e3lan e3lan-top\"],\n[id*=\"-bg\"]"}],[1829834469,{"a":".Cookie--bottom,\ndiv[id^=\"ga_g\"]"}],[739653182,{"a":"[href^=\"https://rosszlanyok.hu/\"],\n[style]:has(.adslot_1)"}],[1321197687,{"a":".hover_bkgr_fricc"}],[1199835865,{"a":"#RedUserNotification"}],[386098678,{"a":"[id*=\"facebox\"]"}],[782328768,{"a":"[id*=\"warning\"]"}],[32923928,{"a":".post_content_box > .post_content_box_sidebar,\n.post_content_box_article_continue + div,\ndiv.d-xl-block[style*=\"padding: 10px\"],\ndiv.d-xl-none[style*=\"padding: 10px\"]"}],[1552598553,{"a":"#zadost,\n.cookies"}],[84164658,{"a":".wrapper>.slider"}],[409358347,{"a":".widget.widget_text"}],[706010873,{"a":".back"}],[1851364784,{"a":"#x-pop"}],[1508579258,{"a":"#article > section > div:not(.article_content)"}],[1134390780,{"a":"#st-2,\ndiv[id*=\"banner\"]"}],[223264983,{"a":"#Promolecek,\n.header-1,\n[class*=\"Reklam\"],\ndiv[id*=\"Reklam\"],\ndiv[id*=\"anner\"]"}],[1371796832,{"a":".myftp-widget,\n[id^=\"fancybox-\"],\n[id^=\"myftp\"]"}]]);

const hostnamesMap = new Map([["wasabi.hu",153352061],["webbeteg.hu",2066014173],["webforditas.hu",359681243],["wellnesscafe.hu",179881608],["widescreen.hu",664929091],["wikiszotar.hu",2052797049],["online.filmek-sorozatok.info",654343776],["kuruc.info",427617528],["vilaglato.info",1182953507],["zoldmano.info",1966781499],["hir.ma",905706537],["szekelyfold.ma",1829834469],["filmvilag.me",739653182],["online-filmek.me",1321197687],["androbit.net",1199835865],["netii.net",386098678],["notonlyporn.net",782328768],["szineshir.net",32923928],["calculat.org",1552598553],["feliratok.org",84164658],["hogyan.org",409358347],["hu.jooble.org",706010873],["ncore.pro",1851364784],["maszol.ro",1508579258],["szatmar.ro",1134390780],["transindex.ro",223264983],["nepszava.us",1371796832]]);

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
