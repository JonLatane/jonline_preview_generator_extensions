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

const argsMap = new Map([[470098768,{"a":".ad.tac"}],[2132025366,{"a":".banner1"}],[2116184081,{"a":"#maxbannerads-3,\n#maxbannerads-4,\n#maxbannerads-5,\n#maxbannerads-6,\n.bannertop.clearfix"}],[1404997544,{"a":".slidingBanners"}],[2141151425,{"a":".sban"}],[2013755579,{"a":"#advert_5,\n.adv-728-90.adv-block"}],[66597194,{"a":"#rightCol"}],[2029016733,{"a":"#wdBanners"}],[249358408,{"a":".bigbanner,\n.verticalbanner"}],[1477924204,{"a":"#tcvn-banner-slider215"}],[1861496262,{"a":"#advert_id"}],[418550819,{"a":"#\\5f _dimScreen,\n#advm_preload,\n#pop_up_s"}],[1897982289,{"a":"#left_banner_img,\n#right_banner"}],[1379579640,{"a":"#banner_wrap,\n.users_wrap"}],[618382532,{"a":"#gkBannerTop"}],[1328177967,{"a":".Footer,\nDIV[style=\"margin-bottom:10px\"]"}]]);

const hostnamesMap = new Map([["nenovinite.com",[470098768,2132025366]],["serialmaniq.com",[2132025366,418550819]],["nessebar-news.com",2116184081],["pirinsko.com",1404997544],["plovdiv-sport.com",2141151425],["podtepeto.com",2013755579],["rechnik-bg.com",66597194],["rodopinews.com",2029016733],["ruse-news.com",249358408],["samokov365.com",1477924204],["segabg.com",1861496262],["silabg.com",1897982289],["sliven-news.com",1379579640],["smolyandnes.com",618382532],["struma.com",1328177967]]);

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
