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

// lva-0

const argsMap = new Map([[972362672,{"a":"#blocks > .tabsaction + .news,\n#footer > div:last-child,\n#section_full + #blocks > .news:first-child,\n.aptauja[style=\"margin-top:0px;margin-bottom:20px;\"],\n.banner_center,\n.hostnet"}],[71842725,{"a":"div[style=\"position:absolute;width:725px;height:90px;margin-left:250px;margin-top:33px;\"]"}],[1915892542,{"a":"div[style=\"padding-top:2px; font-size:0.917em;\"]"}],[737438682,{"a":"div[style=\"width:180px; overflow:hidden; background:#ffffff; border: solid 1px #D30528; font-family:Verdana; font-size:11px; margin: 5px 0px 10px 0px;\"]"}],[527687185,{"a":"#footer > table[width=\"100%\"],\n.top_slud.sakums"}],[1714981981,{"a":".ads--banner,\n.post-content-inner--ad-block,\n.zdorovje-widget"}]]);

const hostnamesMap = new Map([["notepad.lv",972362672],["nozare.lv",71842725],["nra.lv",1915892542],["oho.lv",737438682],["pornotv.lv",527687185],["press.lv",1714981981]]);

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
