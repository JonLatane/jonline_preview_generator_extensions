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

// pol-2

const argsMap = new Map([[387968423,{"a":"#warning"}],[1259081329,{"a":"#popup_adblock"}],[479764108,{"a":"#quads-myModal"}],[1372379959,{"a":".alert-warning"}],[1461676299,{"a":".advert"}],[616404956,{"a":"[id$=\"_slidein\"] > .letterBox_inner"}],[1870958468,{"a":"#adblock-belka-container"}],[1473573083,{"a":"#pread"}],[1164703503,{"a":".alert-dismissible.alert-success.alert"}],[1148355132,{"a":"#kociak"}],[1808217583,{"a":"[class*=\"popup\"]"}],[917721109,{"a":".btn-warning.btn-block.btn"}]]);

const hostnamesMap = new Map([["proste.info.pl",387968423],["infoair.pl",1259081329],["infobike.pl",1259081329],["infobus.pl",1259081329],["inforail.pl",1259081329],["infoship.pl",1259081329],["infotram.pl",1259081329],["transinfo.pl",1259081329],["instrukcjapdf.pl",479764108],["ipon.pl",1372379959],["istotne.pl",1461676299],["jakaoferta.pl",616404956],["kobietaxl.pl",1870958468],["kurnik.pl",1473573083],["kursbootstrap.pl",1164703503],["lubimyczytac.pl",1148355132],["magazynbieganie.pl",1808217583],["maxkino.pl",917721109]]);

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
