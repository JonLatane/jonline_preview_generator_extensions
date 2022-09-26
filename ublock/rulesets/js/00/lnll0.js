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

const argsMap = new Map([[986064060,{"a":"#modalHome,\n.show.modal-backdrop"}],[1597048525,{"a":"#g207"}],[1456699632,{"a":"#fb-root"}],[1009672940,{"a":".slider-adv,\n.small-adv,\nbody > .container > .advert-under"}],[329666214,{"a":".td_block_template_1 > a > img"}],[1977984343,{"a":"#weather,\n.small-ad-wrapper"}],[566695737,{"a":"#horiz_banner_2-wrap,\n#upprev_box,\n.col-lg-3 > a > img,\n.col-md-4 > a,\n.col-md-4 > iframe,\n.container > iframe,\n.cssnow,\n.pazar"}]]);

const hostnamesMap = new Map([["bankofalbania.org",986064060],["short24.pw",1597048525],["alsat-m.tv",1456699632],["oranews.tv",1009672940],["rrokum.tv",329666214],["www.tvkoha.tv",329666214],["rtv21.tv",1977984343],["vizionplus.tv",566695737]]);

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
