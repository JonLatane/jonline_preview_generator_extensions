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

const argsMap = new Map([[1675242080,{"a":"iframe[src^=\"https://openx.notebookspec.com\"]"}],[14781330,{"a":"#nungg-1447152404 > .section-images,\n.section-images"}],[2114144468,{"a":"[href^=\"https://www.ad-pic.com/\"]"}],[416788536,{"a":"#upprev_box"}],[1373815452,{"a":".filmborder:nth-of-type(1)"}],[1755372137,{"a":".ads-tabloid,\n.m-block a[href*=\"ads.pantip.com\"],\n.post-pick-ad,\ndiv[class^=\"ads-\"],\ndiv[id^=\"ads-\"],\niframe[src*=\"ads.pantip.com\"],\niframe[src=\"https://pantip.com/home/get_activity_main\"],\nimg[src*=\"tapad.com\"]"}],[1437488470,{"a":".smartbanner,\n.social-banner"}],[1246827265,{"a":"#arvlbdata"}],[1245964800,{"a":"#myModal"}],[229902121,{"a":".modal-backdrop.fade.in"}],[1208653116,{"a":"#bg-left,\n#bg-right,\n#bgyoutube,\n.alert.cookiealert,\n.cover_preload,\n.preloader,\n.promote,\ndiv[class^=\"promote_\"]"}],[542424734,{"a":"#content div .banner-mobile-size,\n.banner-990x90"}],[718398157,{"a":"#rsticky,\n.mainbox > div > .adsbygoogle,\n.xadsense_middle"}],[883526309,{"a":"#AutoNumber2,\na[href*=\"pramool.com/ads\"],\niframe[src*=\"ads.pramool.com\"],\ntable[cellspacing=\"0\"][border=\"1\"]"}]]);

const hostnamesMap = new Map([["notebookspec.com",1675242080],["specphone.com",1675242080],["nungg.com",14781330],["octopusbanner.com",2114144468],["ohlor.com",416788536],["okmovie-hd.com",1373815452],["pantip.com",1755372137],["m.pantip.com",1437488470],["petmaya.com",1246827265],["playpark.com",[1245964800,229902121]],["tnews.co.th",1245964800],["playulti.com",1208653116],["mustplay.in.th",1208653116],["popcornfor2.com",542424734],["postjung.com",718398157],["pramool.com",883526309]]);

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
