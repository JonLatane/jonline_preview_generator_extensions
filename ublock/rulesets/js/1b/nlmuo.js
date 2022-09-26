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

// bgr-0

const argsMap = new Map([[1858590892,{"a":"#login_popup"}],[1582456993,{"a":"#site-cap-banner,\n.page_margin_top.box-with-shadow.wide-banner.wb-content,\n.placeholder.wide-banner.site-cap-banner,\n.sliding_banner_div,\n.widget.simple.square-banner,\n.widget.simple.square-banner.banner-zone-c"}],[1048149482,{"a":".infor-before-content"}],[1991329962,{"a":"IMG[style=\"width: 300px; height: 250px;\"]"}],[1316748417,{"a":".poop2"}],[42707783,{"a":".e3lan-top"}],[1538926745,{"a":".customContent"}],[621204005,{"a":"DIV[style=\"width: 462px; padding:3px; margin: 10px 0px 0px 0px; min-height: 60px; border: #dddddd solid 1px;\"],\nDIV[style=\"width: 466px; height:58px; overflow:hidden; border: #dddddd solid 1px;\"]"}],[1113817422,{"a":"#header_img_right"}],[1982155223,{"a":"DIV[style=\"width:728px; height:90px;\"],\n[style=\"width:300px;height:250px;\"],\n[style=\"width:300px;height:600px;\"]"}],[1925277063,{"a":"#SC_TBlock_73002,\n#navpages"}],[862686983,{"a":"#right"}],[847129960,{"a":"IMG:first-child:last-child"}],[1225694911,{"a":"#hot_offers"}],[662840461,{"a":"#text-26,\n#text-34,\n#text-35,\n#text-39,\n#text-40,\nDIV[style=\"width:630px; margin-bottom:10px; height:90px;   overflow:hidden;\"]"}],[830872464,{"a":"TABLE[height=\"253\"],\nTABLE[height=\"600\"]"}]]);

const hostnamesMap = new Map([["bgsimsonimz.forumotion.net",1858590892],["haskovo.net",1582456993],["informiran.net",1048149482],["itforumbg.net",1991329962],["kaminata.net",1316748417],["lekuva.net",42707783],["mikrotik-bg.net",1538926745],["moreto.net",621204005],["photo-forum.net",1113817422],["politikata.net",1982155223],["skandalno.net",1925277063],["sedmica.sliven.net",862686983],["subsunacs.net",847129960],["svejo.net",1225694911],["vchas.net",662840461],["vestnici.net",830872464]]);

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
