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

const argsMap = new Map([[2078889799,{"a":"[id^=\"undefined\"]"}],[510799402,{"a":".full-width-banner,\n.full-width-banner-top,\n[widget-attachpoint^=\"undefined\"].not-marketplace,\niframe[src^=\"https://www.sblizingas.lt/\"]"}],[1834330324,{"a":".ban"}],[784769714,{"a":".announcements_short"}],[1529799729,{"a":".dialog.facebook-dialog > *,\n.widget-overlay"}],[377675052,{"a":".top-media"}],[1052585818,{"a":"#bfad178770,\n#bfad240549,\n.headerhorizontalbanners,\n.headerverticalbanners"}],[1483249500,{"a":"[title=\"Blogosferos Autorių Teisių Gynimo Asociacijos Agentūra\"] > *,\nimg[alt=\"FlyLAL logo\"]"}],[1292370219,{"a":"a[target=\"undefined\"] > *"}],[769693003,{"a":".main_banner.hidden-xs,\n.side_banners__items,\n.top_banners.visible-md"}],[48292220,{"a":"#content-banners,\n.header-banner"}],[1890759366,{"a":"#dnn_LeftPane,\n#dnn_daugiauInfo"}],[61396448,{"a":"#ja-col2"}],[212602625,{"a":"[class^=\"undefined\"]"}],[1875149708,{"a":"img[title=\"Free Delivery on all Books at the Book Depository\"]"}],[31914256,{"a":".ukio10"}],[2084933027,{"a":"div[style=\"background-color: rgb(0, 0, 0); z-index: 100000001; opacity: 0.85; position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; display: block;\"],\ndiv[style=\"background-color: rgb(92, 103, 103); z-index: 100000001; opacity: 0.85; position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; display: block;\"],\ndiv[style=\"position: fixed; z-index: 100000003; visibility: visible; display: block; left: 0px; right: 0px; top: 0px; bottom: 0px;\"]"}],[375507101,{"a":".mobile_banner,\na[href^=\"http://www.respublika.lt/,banner_id.\"]"}],[21935283,{"a":".advertisement.list"}],[196527131,{"a":"#newsticker-demo,\n.infiniteCarousel > *,\n.infiniteCarousel LI"}],[1285974133,{"a":".banner-left-side"}],[1010752186,{"a":".banner_right"}],[1770052544,{"a":"div[align=\"undefined\"]"}],[1731081646,{"a":".flexbannergroup,\na[href=\"http://www.lefkada-hotels.com/\"]"}]]);

const hostnamesMap = new Map([["pigu.lt",[2078889799,510799402]],["savaite.lt",2078889799],["sportas.lt",2078889799],["tv3.lt",2078889799],["pirkanglijoje.lt",1834330324],["planuokatostogas.lt",784769714],["domo.plius.lt",1529799729],["www.plius.lt",377675052],["pokeris.lt",1052585818],["rokiskis.popo.lt",1483249500],["portas.lt",1292370219],["reksas.lt",1292370219],["priejuros.lt",769693003],["priekavos.lt",48292220],["prokuraturos.lt",1890759366],["pulsas.lt",61396448],["pzemaitis.lt",212602625],["sveikatossodas.lt",212602625],["xn--mslaikas-qzb5f.lt",212602625],["radiocool.lt",1875149708],["rde.lt",31914256],["receptai.lt",2084933027],["respublika.lt",375507101],["rinka.lt",21935283],["rkdragunas.lt",196527131],["rutana.lt",1285974133],["samata.lt",1010752186],["sapnuotisapnus.lt",1770052544],["savas.lt",1731081646]]);

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
