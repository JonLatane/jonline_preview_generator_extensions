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

// svn-0

const argsMap = new Map([[84791859,{"a":"#taw"}],[582693233,{"a":"aside.ad"}],[619924784,{"a":".ad"}],[2026035573,{"a":"#contentLeft,\n#contentRight > .leaderboard,\n#playzone > .leaderboard,\n#userGenGames"}],[1965172485,{"a":".banner-inner"}],[879436183,{"a":".grid1.rectangle"}],[1035274632,{"a":".desktopAd"}],[1482201635,{"a":"blockquote"}],[1467234226,{"a":"#fixed > .site-banner"}],[762345100,{"a":".microsite-article"}],[1971858799,{"a":".microsite-section"}],[2073447843,{"a":".outbrain"}],[1716512649,{"a":".banner-wr,\n.box-shadow"}],[1534038016,{"a":".sideBoxBanner"}]]);

const hostnamesMap = new Map([["google.com",84791859],["google.si",84791859],["hudo.com",[582693233,619924784]],["mladina.si",619924784],["vreme.zurnal24.si",619924784],["igrice.hudo.com",2026035573],["mojepotovanje.hudo.com",[1965172485,879436183]],["moski.hudo.com",[879436183,1035274632]],["zenska.hudo.com",[1035274632,1482201635]],["med.over.net",1482201635],["shop.kapodol.com",1467234226],["moskisvet.com",[762345100,1971858799,2073447843,1716512649]],["okusno.je",[762345100,1971858799]],["bibaleze.si",[762345100,1971858799]],["cekin.si",[762345100,2073447843]],["dominvrt.si",762345100],["vizita.si",[762345100,1971858799]],["zadovoljna.si",[762345100,1971858799]],["nogomania.com",1534038016]]);

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
