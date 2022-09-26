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

// svn-0

const argsMap = new Map([[623158104,{"a":".module.banner"}],[204798591,{"a":".pattern > .span2,\n.span2:nth-of-type(3) > div"}],[2001939286,{"a":"#top_banner"}],[1226475450,{"a":".bs-irp-thumbnail-3-full"}],[1000336092,{"a":"#bart_banner,\n.adbox,\n.kos_semitrans"}],[849333041,{"a":"#adtopart,\n#top > .nbs-flexisel-container"}],[2005586253,{"a":"#article_social_top"}],[86033119,{"a":"#main-column-inner > .kos_semitrans"}],[1600029961,{"a":"#article_social_top > .social-line,\n#main-column-inner > .kos_signup"}],[1846657697,{"a":"#bannerFooter_wrap,\n.verde_wrap"}],[1137618578,{"a":".advertisement"}],[1517498717,{"a":".outFrameRight"}],[1293392038,{"a":"div[onclick*=\"_blank\"],\ntable[background=\"images/promocije_background.png\"]"}],[2123761990,{"a":".banner-top-wrap,\n.banner1"}]]);

const hostnamesMap = new Map([["druzina.si",623158104],["e-mesto.si",204798591],["enajdi.si",2001939286],["explicit.si",1226475450],["finance.si",1000336092],["izvozniki.finance.si",[849333041,2005586253]],["startaj.finance.si",[2005586253,86033119]],["www.startaj.si",2005586253],["topjob.finance.si",1600029961],["gohome.si",1846657697],["golfportal.si",1137618578],["informiran.si",1517498717],["instore.si",1293392038],["kajkupiti.si",2123761990]]);

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
