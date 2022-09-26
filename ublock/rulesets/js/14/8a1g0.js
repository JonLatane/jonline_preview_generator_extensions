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

// cze-0

const argsMap = new Map([[1781372043,{"a":"[class*=\"r-main\"]"}],[538290045,{"a":"div.advert-leader-board-container"}],[889570272,{"a":".mone_box"}],[1336352064,{"a":".reklama-background"}],[1405247072,{"a":"#social"}],[2019355606,{"a":".bannLead"}],[404351991,{"a":"[class*=\"ad_\"]"}],[440198854,{"a":".rleft,\n.rright,\n.tree"}],[772950365,{"a":"div[id^=\"banner\"]"}],[1924622605,{"a":"[class*=\"pаrtner\"],\na[rel=\"sponsored\"]"}],[1967956296,{"a":".top_background"}],[1167637711,{"a":"#z990x200,\n#zr300x600,\n[id^=\"adv_\"],\na[href*=\"utm_campaign=kurzy_\"],\niframe[src^=\"https://img.kurzy.cz/og\"]"}]]);

const hostnamesMap = new Map([["idnes.cz",1781372043],["lidovky.cz",1781372043],["modnipeklo.cz",1781372043],["idos.idnes.cz",538290045],["cnn.iprima.cz",889570272],["itnetwork.cz",1336352064],["jaknaletenky.cz",1405247072],["kaloricketabulky.cz",2019355606],["karaoketexty.cz",404351991],["kladenskelisty.cz",440198854],["kniha.cz",772950365],["krimi-plzen.cz",1924622605],["kupi.cz",1967956296],["kurzy.cz",1167637711]]);

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
