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

// ltu-0

const argsMap = new Map([[833032274,{"a":"#bottom-banners,\n.remejulogo"}],[2101517260,{"a":"#rightcol"}],[1796127130,{"a":"a[href*=\"http://www\"] > img"}],[1836207649,{"a":"CENTER > A > *,\na[alt=\"Prezi.lt\"] + CENTER"}],[815277170,{"a":"img[alt=\"Informacija ir pagalba telefonu 1588\"]"}],[1361748394,{"a":"div[style=\"width: 80%; font-size: 12px; padding: 5px; border: 1px dashed #CCF5CC; background: #F0FCF0; margin: 0 auto;\"]"}],[999165378,{"a":"#k980x200_krepsinis_net > *,\na[href^=\"https://goo.gl/\"],\ndiv[style=\"width:100%; top:44px; left:0; height:100vh; background-repeat:no-repeat;  position:fixed; background-position:50% 0px; background-image:url(https://www.tv3.lt/Uploads/wp_danai.jpg);\"]"}],[1389783443,{"a":".home.blog .homeslider.rotator,\n.rightbar *"}],[261458824,{"a":"img[alt=\"www.linda-seeds.com\"]"}],[900268926,{"a":"a[href=\"http://sportouzdarbis.com/\"] > *"}],[1927438046,{"a":"#wdBannerImg"}],[418511728,{"a":".side-body > TABLE[bgcolor=\"#87B6D9\"]"}],[878970382,{"a":"#block-block-7 P,\n#sidebar-right"}],[428454205,{"a":".adsb"}],[1630042906,{"a":"a[target=\"undefined\"] > img"}],[1649305034,{"a":"a[href^=\"/redirect/ad/\"] > *"}],[823612553,{"a":".hometakeover.gofollow"}],[917067578,{"a":"a[href=\"http://www.filmux.us\"]"}]]);

const hostnamesMap = new Map([["zalgiris.lt",833032274],["zappy.lt",2101517260],["zindyk.lt",1796127130],["zooplius.lt",1836207649],["zurnalai.lt",815277170],["danielius.net",1361748394],["krepsinis.net",999165378],["kulturizmas.net",1389783443],["legalus.net",261458824],["linksmiau.net",900268926],["lietuvis.no",1927438046],["drauge.org",418511728],["pradzia.org",878970382],["vardai.org",428454205],["internetine-tv.narod.ru",1630042906],["anglija.today",1649305034],["ekspresas.co.uk",823612553],["lttv.us",917067578]]);

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
