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

// isl-0

const argsMap = new Map([[2053238973,{"a":"#13_3623,\n#ctl00_RandomBanner2_divBanner,\n#ctl00_RandomBanner3_divBanner,\n#ctl00_cphMain_Wrapper1_ctl06_divBanner,\n#ctl00_ctl00_cphMain_cphMain_RandomBanner4_divBanner,\n#ctl00_ctl00_cphRullugardina_cphRullugardina_RandomBannerRullugardina_divBanner,\n#skyscrapper,\n#spoton,\n.bp26,\n.bp4,\n.randombanner-upperright"}],[562844526,{"a":".fb_ltr"}],[1562990843,{"a":"#imgAuglRight_1,\n#imgAuglRight_4,\n.imgAuglHead,\n.kostad-efni,\n.tdAuglMidja"}],[1594995484,{"a":".header_add,\nOBJECT[width=\"300\"]"}]]);

const hostnamesMap = new Map([["pressan.is",2053238973],["bleikt.pressan.is",562844526],["skessuhorn.is",1562990843],["smugan.is",1594995484]]);

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
