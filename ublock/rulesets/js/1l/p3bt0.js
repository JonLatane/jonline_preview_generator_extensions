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

// isr-0

const argsMap = new Map([[940596517,{"a":"#CloseshellAds"}],[1789727839,{"a":".leftBanner,\n.midBanner,\n.rightBanner"}],[619924784,{"a":".ad"}],[1388167388,{"a":"#ZA_CAMP_BG,\n#ZA_CAMP_CONTAINER,\n#ZA_CAMP_SLIDEIN_CONTAINER,\n#hp_bottom_strip,\n#mysupermarketcontainer,\n#neoTopStrip,\n.bannerClose,\n.mako_main_portlet_container > a[target=\"_blank\"] > img,\n.pzm_banners,\n.sidebar_pic,\n[href^=\"https://adclick.g.doubleclick.net/\"],\ndiv[class*=\"mainRoot\"] > div:nth-child(4) > div[class*=\"ordering\"] > div:nth-child(6),\ndiv[id^=\"top-strip\"]"}],[1448559633,{"a":"iframe[src*=\"javascript:document.write('\"]"}],[1094391487,{"a":"#playerAdArea"}],[1217001323,{"a":"#bLColumnText.small,\n#bRColumnText.small,\n.spacer.leftBox:nth-of-type(2),\n.tallBanner.spacer"}],[1518585862,{"a":".google-ad-links-wrapper,\n.top-firsomet"}],[1346821569,{"a":".adv160_600,\n.adv300_250,\n.adv300_600,\n.banner-wrapper,\n.pirsumba,\n.pirsumbaTop"}],[1332971474,{"a":".TopLeftRadvertisement_translation,\n.result_adv,\n.top_line_ad,\n.top_line_ad_translation"}]]);

const hostnamesMap = new Map([["madas.co.il",940596517],["maka.co.il",1789727839],["mako.co.il",[619924784,1388167388,1448559633]],["pcmagazine.co.il",619924784],["m.sport5.co.il",619924784],["walla.co.il",1448559633],["shironet.mako.co.il",1094391487],["makorrishon.co.il",1217001323],["masa.co.il",1518585862],["mavir.co.il",1346821569],["morfix.co.il",1332971474]]);

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
