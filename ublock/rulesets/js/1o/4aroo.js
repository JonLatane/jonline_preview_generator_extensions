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

const argsMap = new Map([[273310320,{"a":".intent-exit-box.l-row,\n.js-popup-quest.intent-exit-popup--quest.intent-exit-popup,\ndiv[class*=\"adcontainer\"]"}],[338129872,{"a":".adsense,\n.leaderboard,\n.seriesadvert,\n.skyscraper"}],[743013784,{"a":".banner"}],[1228240988,{"a":"#r-leaderboardhp"}],[1982917922,{"a":"#fancybox-overlay,\n#h_part_right"}],[1640506017,{"a":"#t-content"}],[2139891709,{"a":".topbanner"}],[20373482,{"a":"div[id^=\"ad-leaderboard\"]"}],[1461676299,{"a":".advert"}],[1938555415,{"a":"#invelt"}],[1675111619,{"a":"div.klik--leaderboard"}],[1931877367,{"a":"#blackfooter"}]]);

const hostnamesMap = new Map([["echo24.cz",273310320],["edna.cz",[338129872,743013784]],["in-pocasi.cz",743013784],["webtrh.cz",743013784],["centrum.sk",743013784],["emimino.cz",1228240988],["esemes.cz",[1982917922,1640506017]],["warforum.cz",1640506017],["estav.cz",2139891709],["euro.cz",20373482],["eurogamer.cz",1461676299],["pravopisne.cz",1461676299],["pravopisne.sk",1461676299],["ewrc.cz",1938555415],["extra.cz",1675111619],["fdb.cz",1931877367]]);

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
