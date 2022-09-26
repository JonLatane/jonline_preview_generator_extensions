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

const argsMap = new Map([[151817304,{"a":"[class*=\"sda\"]:not(.post-content)"}],[1009723282,{"a":"div.banner_position"}],[2011649028,{"a":"#banner-left-pane,\n#banner-top-four,\n#sportObchodBanner,\ndiv.bannerHolderZapasRight"}],[1683151114,{"a":"#branding_anchor_left,\n#branding_anchor_right,\n.adtea_inpage,\n.adtea_leaderboard"}],[1739390278,{"a":".amalker"}],[2140109235,{"a":"#bnx300x300,\nA[onclick^=\"openAd\"]"}],[917187775,{"a":"#tblHorniLista"}],[735647236,{"a":".native-ads"}],[448368769,{"a":".wpa.top"}],[1025681626,{"a":".banner-header"}],[1804332839,{"a":"#biglink"}],[1264876362,{"a":"#content-right > div[style]:first-of-type"}]]);

const hostnamesMap = new Map([["grunex.com",151817304],["kamsdetmi.com",1009723282],["onlajny.com",2011649028],["programujte.com",1683151114],["tipcars.com",1739390278],["titulky.com",2140109235],["war4all.com",917187775],["zmeskanyhovor.com",735647236],["365tipu.cz",448368769],["appliste.cz",1025681626],["serialzone.cz",1025681626],["autobazar.cz",1804332839],["autoforum.cz",1264876362]]);

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
