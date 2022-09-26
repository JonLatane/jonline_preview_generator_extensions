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

const argsMap = new Map([[1034469065,{"a":"#promo"}],[820825572,{"a":"#fan-exit,\n#fanback"}],[1171569000,{"a":".ads"}],[1682637867,{"a":".hidden-sm,\n.signad,\n.sticky-position"}],[1581258655,{"a":".other"}],[1213179858,{"a":".ekode-content-dno"}],[361907248,{"a":".banner--wrapper,\n.content--cta,\n.exposed__banner,\n.region--cta"}],[1736473610,{"a":"#doyoulikeus,\n.portus-video-slider-min"}],[575629108,{"a":".banner-scroller,\n.headbanner,\na[target=\"_blank\"][href^=\"http://www.mlacom.si/iskalnik\"]"}],[354339681,{"a":".fancybox-overlay,\n.info-box > .social"}],[1794926138,{"a":".style-buttons.before_content"}],[134248260,{"a":"#banner05,\n#skytower,\n.navigatortop,\n.titlered:nth-of-type(4)"}],[2105229963,{"a":".nativendo-container,\n.prNews"}],[676426686,{"a":".nat-content"}]]);

const hostnamesMap = new Map([["kolosej.si",1034469065],["kosmika.si",820825572],["lepdan.si",1171569000],["letakonosa.si",1682637867],["lokalno.si",1581258655],["lupa-portal.si",1213179858],["marketingmagazin.si",361907248],["megasvet.si",1736473610],["mlacom.si",575629108],["mladina.si",354339681],["mladipodjetnik.si",1794926138],["mobile.si",134248260],["mojaleta.si",2105229963],["mojaobcina.si",676426686]]);

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
