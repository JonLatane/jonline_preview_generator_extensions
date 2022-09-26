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

const argsMap = new Map([[2041030659,{"a":"#menu-item-640384 > a"}],[1657323982,{"a":".textwidget"}],[1826888368,{"a":".wpb_wrapper > div > a > img,\ndiv.wpb_content_element.wpb_text_column:nth-of-type(2) > .wpb_wrapper > .desktop,\ndiv.wpb_content_element.wpb_text_column:nth-of-type(4) > .wpb_wrapper > .desktop"}],[1208191195,{"a":".wpb_wrapper > p > a > img"}],[712025085,{"a":".td-all-devices"}],[629012914,{"a":"#snowflakeContainer"}],[911574761,{"a":"#mastertopbanner,\ndiv[id^=\"ctl00_ContentPlaceHolder1_Latest\"]"}],[172463471,{"a":".mvp-side-widget.widget_text"}],[1150449162,{"a":"#FBStickLayer,\n.stick_block_layer"}]]);

const hostnamesMap = new Map([["gazetadita.al",[2041030659,1657323982]],["preshevajone.com",1657323982],["gazetamapo.al",[1826888368,1208191195]],["revistakosovarja.net",1208191195],["ata.gov.al",712025085],["shkoder.net",712025085],["rrokum.tv",712025085],["gsh.al",629012914],["ikub.al",911574761],["intervista.al",172463471],["intv.al",1150449162]]);

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
