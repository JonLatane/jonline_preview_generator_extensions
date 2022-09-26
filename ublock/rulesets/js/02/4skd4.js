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

const argsMap = new Map([[109847095,{"a":".branding-link"}],[1261727134,{"a":".banner-brand"}],[227715026,{"a":".center,\nobject[id*=\"bfad\"]"}],[32472941,{"a":"#adLocation-21,\n#popwrapper,\n#t-overlay,\n.row0,\na[href=\"http://acu.cz\"],\nh3"}],[424606180,{"a":"[class^=\"ws-banner-\"]"}],[966680836,{"a":".SkyLeft.Banner"}],[1556190888,{"a":"div.main-top,\ndiv.site-reklama"}],[844714878,{"a":".bannero2"}],[1142947136,{"a":"#branding_conts,\n#floatad,\n#headertopbanner,\n.headerbanner"}],[1018830105,{"a":"#aa1"}],[1744940322,{"a":"div[style*=\"position:absolute;\"]"}],[1652299189,{"a":".c_banner300x300"}]]);

const hostnamesMap = new Map([["uschovna.cz",109847095],["vortex.cz",1261727134],["warezforum.cz",227715026],["warforum.cz",32472941],["webshare.cz",424606180],["zakonyprolidi.cz",966680836],["zena-in.cz",1556190888],["autobazar.eu",844714878],["letemsvetemapplem.eu",1142947136],["libise.eu",1018830105],["sktorrent.eu",1744940322],["pokec.azet.sk",1652299189]]);

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
