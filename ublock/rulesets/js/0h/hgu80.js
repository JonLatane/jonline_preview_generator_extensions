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

const argsMap = new Map([[1849538345,{"a":".aside.right,\n.mgid"}],[196929937,{"a":".textwidget > a,\n.theiaStickySidebar > a"}],[1227633367,{"a":".murebestbannerdesktop,\n.murebestshowonlydesktop"}],[324556561,{"a":".ad-widget-box > img,\n.ad-widget-sizes > a > .ad-widget-box,\n.col-12.col-lg-4 > .d-none,\n.shortcode-widget-box,\n.textwidget > p > img"}],[118565219,{"a":".execphpwidget > a > img"}],[616431404,{"a":".leadBanner"}],[971179204,{"a":".sendpulse-prompt"}],[1126392290,{"a":".fn-header-banner,\n.textwidget > center > a"}],[1530075244,{"a":".web-ad"}]]);

const hostnamesMap = new Map([["tej.al",1849538345],["tiranapost.al",196929937],["tpz.al",1227633367],["tvklan.al",324556561],["vipsport.al",118565219],["www.albinfo.ch",616431404],["albeu.com",971179204],["almakos.com",1126392290],["anabelmagazine.com",1530075244]]);

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
