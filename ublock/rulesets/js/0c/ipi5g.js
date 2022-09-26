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

const argsMap = new Map([[1051306112,{"a":".main_ban_rek > .container > .g,\n.main_ban_rek > .g,\n.sidebar_rek"}],[1955488398,{"a":"#rt-sidebar-b > .rt-block"}],[1347335467,{"a":".custom-html-widget > iframe,\n.td-fix-index > iframe"}],[12844625,{"a":"#execphp-24 > .execphpwidget,\n#execphp-25 > .execphpwidget,\n#reklama1,\n#reklamavodafonestopwords,\n#sidebar,\n.notes-right"}],[48062257,{"a":"#HTML1"}],[506948287,{"a":".adds--main.adds,\n.adds_left,\n.radio-live-adv"}],[35030306,{"a":"#foxpush_subscribe"}],[1042123597,{"a":".vc_column-inner > .wpb_wrapper > .vc_hidden-sm > .wpb_wrapper"}],[1948543982,{"a":".app_holder,\n.rekl-phone"}]]);

const hostnamesMap = new Map([["fishmedia.info",1051306112],["albacenter.it",1955488398],["dritare.net",1347335467],["gazetatema.net",12844625],["iphonealbania.net",48062257],["lajmi.net",506948287],["pamfleti.net",35030306],["revistakosovarja.net",1042123597],["syri.net",1948543982]]);

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
