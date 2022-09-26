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

// bgr-0

const argsMap = new Map([[2003478650,{"a":".hp-right-column"}],[1402617100,{"a":".adwise"}],[290912675,{"a":"#pop"}],[122646098,{"a":"DIV[style=\"position:absolute; width:130px;left:-130px;height:900px;\"],\nDIV[style=\"position:absolute;width:120px;right:-120px;\"]"}],[1318403472,{"a":"#divbh1.lfs-top-banner-holder"}],[1413141451,{"a":"#GoogleAdSense,\n.nws-commercial-column"}],[712149383,{"a":".sponsor-logo,\n.ts-commercial-column,\n.ts-header-banner"}],[471602327,{"a":".td-header-rec-wrap"}],[307797457,{"a":"#MAX_a02e99f2,\ndiv[style=\"height:90px;\"]"}],[1733229274,{"a":"#banners_position_2,\n#banners_position_3,\n#banners_position_4,\n#banners_position_5"}],[290671797,{"a":".LW-Home-Page-Banner-Top-Right"}],[775921949,{"a":".banner468_60,\nDIV[style=\"margin: auto; background-color: transparent; border-width: 0px; width: 300px; height: 250px;\"]"}],[1895868163,{"a":"#header_banner"}],[1312893947,{"a":"#gpt-banner-1-desktop"}],[727693889,{"a":"#main-billboard-spacer"}],[201681023,{"a":".banner_header_right,\n.etarget_container,\n.header_banner_container"}]]);

const hostnamesMap = new Map([["get.bg",2003478650],["gong.bg",1402617100],["recepti.gotvach.bg",290912675],["homes.bg",122646098],["lifestyle.ibox.bg",1318403472],["news.ibox.bg",1413141451],["topsport.ibox.bg",712149383],["iskra.bg",471602327],["burgasnews.com",471602327],["kamioni.bg",307797457],["knnews.bg",1733229274],["legalworld.bg",290671797],["lex.bg",775921949],["lifehacker.bg",1895868163],["lifestyle.bg",1312893947],["money.bg",1312893947],["news.bg",1312893947],["mail.bg",727693889],["mediapool.bg",201681023]]);

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
