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

// tha-0

const argsMap = new Map([[108586076,{"a":"#notification + .row > center,\n#torrent_download .row .small-12:nth-of-type(1)"}],[1798289614,{"a":"[data-wpel-link^=\"external\"]"}],[21347534,{"a":"#top-banner-section,\n.ad-box-widget,\n[alt=\"Advertisement\"]"}],[1808283837,{"a":".downapp_area"}],[1217909725,{"a":"#bar_left,\n#bar_left > div:nth-of-type(2),\n#bar_right,\n#content-left > .banner:nth-of-type(10),\n#content-left > .banner:nth-of-type(3),\n#content-left > .banner:nth-of-type(6),\n#content-left > .banner:nth-of-type(7),\n#content-left > .banner:nth-of-type(8),\n#content-left > .banner:nth-of-type(9),\n#content-right > .banner:nth-of-type(10),\n#content-right > .banner:nth-of-type(3),\n#content-right > .banner:nth-of-type(5),\n#content-right > .banner:nth-of-type(6),\n#content-right > .banner:nth-of-type(7),\n#content-right > .banner:nth-of-type(8),\n#content-right > .banner:nth-of-type(9),\n#imghead,\n.banner:nth-of-type(1),\n.banner:nth-of-type(11),\n.banner:nth-of-type(12),\n.banner:nth-of-type(13),\n.banner:nth-of-type(14),\n.banner:nth-of-type(15),\n.banner:nth-of-type(16),\n.banner:nth-of-type(18),\n.banner:nth-of-type(19),\n.banner:nth-of-type(2),\n.banner:nth-of-type(20),\n.banner:nth-of-type(21),\n.banner:nth-of-type(23),\n.banner:nth-of-type(24),\n.banner:nth-of-type(26),\n.banner:nth-of-type(27),\n.banner:nth-of-type(29),\n.banner:nth-of-type(30),\n.banner:nth-of-type(4)"}],[169112217,{"a":"#slidel,\n#slider"}],[2062936901,{"a":"#adsplayer,\n#page > center,\n.happy-player-beside.col-md-3.col-12,\n.happy-player-under.d-md-block.d-none,\n.happy-section"}],[1594090521,{"a":".insad_close"}],[1844600876,{"a":"#contentx > .adcen,\n.adimg,\n.insad_l_close,\n.insad_r_close,\n[href=\"https://hotgraph88.com\"],\n[href=\"https://kingdom66.com\"],\n[href=\"https://ufazeed.com/\"],\nbody > .adcen"}],[811419187,{"a":".column.colophon-message-body > center > a.adv > .adimg,\ncenter.adcen:nth-of-type(9)"}],[2007686497,{"a":"#main-nav + center > br"}],[907171406,{"a":".ad_foot.ad,\n.ad_single_content.ad"}],[522570431,{"a":".ad_single_content.ad > p:nth-of-type(1),\n.ad_single_content.ad > p:nth-of-type(2)"}],[1776713571,{"a":".td-post-content .err-subscription"}]]);

const hostnamesMap = new Map([["tt-torrent.com",108586076],["utaseries.com",1798289614],["vojkud.com",21347534],["vojkudee.net",21347534],["m.webtoons.com",1808283837],["xn--12cf0e9alaj8at1avvw8lrh.com",1217909725],["xn--12cl7cj4a8c1bl5l7c.com",[169112217,2062936901]],["nungxthai.net",169112217],["xn--72c9abh1f8ad1lzc.com",[1594090521,1844600876]],["xn--72ca2bsl7gxbd4m7c.com",[1594090521,811419187]],["xn--82c0bxcybxc2b.com",2007686497],["xxx5porn.com",907171406],["xxxporn7.com",522570431],["yaklai.com",1776713571]]);

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
