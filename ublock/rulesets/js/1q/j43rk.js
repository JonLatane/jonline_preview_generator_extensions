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

// alb-0

const argsMap = new Map([[771520429,{"a":".reklama-box"}],[205315091,{"a":"center,\niframe"}],[628952808,{"a":".fixed-ad,\n.rek-holder"}],[464042353,{"a":"#bottom_fixed_notification"}],[1279433649,{"a":"#slidebox"}],[729431863,{"a":"#tidio-chat"}],[1013882480,{"a":".sendpulse-bar,\n.stream-item-top-wrapper,\n.theiaStickySidebar > .stream-item-widget"}],[1607634141,{"a":"#check-also-box"}],[1513415806,{"a":"#target_banner_1,\n#target_banner_2,\n#target_banner_3,\n#target_banner_4,\n#target_banner_41,\n#target_banner_42,\n#target_banner_5,\n#target_banner_6"}]]);

const hostnamesMap = new Map([["panorama.com.al",[771520429,205315091]],["shkabaj.net",205315091],["shekulli.com.al",628952808],["droni.al",464042353],["durreslajm.al",1279433649],["evolve.al",729431863],["faxweb.al",[1013882480,1607634141]],["radiokosovaelire.com",1607634141],["gazetacelesi.al",1513415806]]);

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
