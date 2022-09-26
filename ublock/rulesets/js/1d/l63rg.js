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

const argsMap = new Map([[941898418,{"a":".wpb_wrapper.vc_figure"}],[808572337,{"a":"#offcanvas-article"}],[398777368,{"a":"#mibew-agent-button > img"}],[456074685,{"a":".new_banner,\n.sidebar-baner-middle,\n.sidebar-baner-top"}],[461384733,{"a":".main-nosplit > a"}],[278868785,{"a":".vw-more-articles--visible.vw-more-articles,\n.widget.widget_sp_image"}],[1857215375,{"a":".wp-super-snow-flake"}],[1676776211,{"a":".flurry-container,\n.footer-last-news-wrapper,\n.popup-container"}],[421546683,{"a":".mvp-feat1-list-ad,\n.mvp-main-box > .execphpwidget > div > a > img"}]]);

const hostnamesMap = new Map([["27.al",941898418],["360grade.al",808572337],["abcom.al",398777368],["acp.al",456074685],["blitz.al",461384733],["bota.al",278868785],["botimepegi.al",1857215375],["businessmag.al",1676776211],["cna.al",421546683]]);

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
