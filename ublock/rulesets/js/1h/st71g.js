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

const argsMap = new Map([[2127962459,{"a":"#AS-Widget,\n#background-giga,\n#bp-ads-block-1,\n#column3 a[style=\"margin-bottom: 10px;\"],\n#custom-ads-block-33,\n#horoweatherblock,\n#inch-lv,\n#top-banner,\n.ads-block-small,\n.ads-blocks-link,\n.adsAdmin-section,\n.airbaltic-blog,\n.car-city24,\n.city24-2nd,\n.city24-2nd-block-title,\n.city24-2nd-items,\n.city24-2nd-news,\n.city24-articles,\n.city24-topBlock-extraLine,\n.city24-topBlock-wrapper,\n.city24ni,\n.city24nib,\n.d-sm-block,\n.pardod-widget,\n.top-banner,\n.veikali-banners-active,\n.zave-wrapper,\n.zave_r,\ndiv.adsAdmin-iblock-pinned,\ndiv.adsAdmin-section,\ndiv[style=\"background:#fef2d9;\"],\ndiv[style=\"margin:10px;border:1px dashed #8e8e9e;overflow:auto;padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px\"],\ndiv[style=\"margin:10px;margin-bottom:0;padding-bottom:10px;text-align:center;border-bottom:1px solid #b4c8de;text-align:center;\"],\ndiv[style=\"width:150px;margin-bottom:5px;\"],\ntable[style=\"background-color: #ECECEC; width:250px;\"]"}],[1405214350,{"a":".clo"}],[768020286,{"a":"#right,\n.delfi_shop,\n[id^=\"adoceandelfilv\"]"}],[97164542,{"a":".articlebanner"}],[1764665649,{"a":"div[style=\"width:250px;\"]:last-child"}],[1822095868,{"a":"#rightTop,\n.iepazisanas"}]]);

const hostnamesMap = new Map([["delfi.lv",[2127962459,1405214350,768020286,97164542]],["gudriem.lv",1405214350],["kurpirkt.lv",1405214350],["morning.lv",[768020286,97164542]],["skats.lv",97164542],["forums.delfi.lv",1764665649],["izklaide.delfi.lv",1822095868]]);

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
