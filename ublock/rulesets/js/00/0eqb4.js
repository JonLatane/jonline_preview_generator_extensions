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

const argsMap = new Map([[1446561842,{"a":"center:nth-of-type(2),\ndiv.container > .row > .center_lnwphp"}],[84515410,{"a":"div.container:nth-of-type(1)"}],[320964769,{"a":"#slider-l,\n#slider-r"}],[1005839808,{"a":".container > .row > .col-md-8,\n.container > .row > a,\n.row > center:nth-of-type(1),\ncenter:nth-of-type(6)"}],[1204123128,{"a":"center:nth-of-type(3),\ncenter:nth-of-type(5)"}],[1838379680,{"a":".panel-body > center > a,\n.row > .col-md-8,\n.row > center:nth-of-type(2),\ncenter > center"}],[869421600,{"a":"strong#xaab"}],[322784106,{"a":".module_home_x"}],[865702908,{"a":".imgbanner"}],[994715234,{"a":"#bt-ads"}],[1237681477,{"a":"#link_h_movie_ad"}],[1207284112,{"a":".row > center"}],[1467390916,{"a":".theiaStickySidebar #ads300_250-widget-4"}],[1584871743,{"a":"#ads,\n#clip-banner,\n#mainarea > .ads_forum,\n#mid-banner,\n#sidebar-right,\n#soccer-table > .banner-wp:nth-of-type(3),\n#soccer-table > .banner-wp:nth-of-type(4),\n#soccer-table > .banner-wp:nth-of-type(5),\n#top-banner,\n#webboard > .banner-wp:nth-of-type(2),\n#webboard > .banner-wp:nth-of-type(3),\n#webboard > .banner-wp:nth-of-type(4),\n.L0.banner-wp,\n.L1.banner-wp,\n.L2.banner-wp,\n.L3.banner-wp,\n.L4.banner-wp,\n.L5.banner-wp,\n.L7.banner-wp,\n.L8.banner-wp,\n.T2"}]]);

const hostnamesMap = new Map([["anime-master.com",1446561842],["anime-ox.com",84515410],["anime-sugoi.com",[320964769,1005839808,1204123128]],["xxx5porn.com",320964769],["www.anime-sugoi.com",[1204123128,1838379680]],["anime-thclub.com",869421600],["animekimi.com",322784106],["animeloli.com",[865702908,994715234,1237681477]],["www.animelolo.com",[865702908,1207284112]],["animedd.xyz",1237681477],["animeranku.com",1467390916],["baanpolballs.com",1584871743]]);

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
