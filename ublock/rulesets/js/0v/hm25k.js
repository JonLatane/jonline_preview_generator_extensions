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

const argsMap = new Map([[810264606,{"a":".art-sidebar2"}],[1955371474,{"a":"#banner1,\n#topBannerBlock,\n.adwise-right,\n.hot-offers-block"}],[1545077680,{"a":".popup-back"}],[562652510,{"a":"#trendo_branding,\n.shop_box"}],[1245958049,{"a":"#adv"}],[388797316,{"a":"#banner_2"}],[2075624268,{"a":"#banner_3,\n.white_box.right_box.actual_offers"}],[780509165,{"a":".banneritem_text"}],[662312499,{"a":"#topbanner"}],[194038494,{"a":".phAddsText"}],[1171569000,{"a":".ads"}],[1740871870,{"a":"#banner_11,\n#banner_4,\n#banner_5,\n#banner_7,\n#spot-1,\n#spot-4,\n#spot-5,\n.ads_left,\n.border-left.w-100,\n.d-none.d-sm-none.d-md-none.d-lg-inline-block.col-lg-2,\n.hidden-xs.hidden-sm.arena_9.mb5,\n.hidden-xs.hidden-sm.arena_9.revive.mb5,\n.mb-2.mt-2.border,\n.mb-3.d-none.d-sm-block.border,\n.panel-footer.text-center.arena_10,\nIFRAME[src*=\"/banner/\"],\nIFRAME[src*=\"banner.htm\"],\niframe[src=\"about:blank\"]"}],[753208235,{"a":"#canvas"}],[1040826086,{"a":".small-horoscopes2.clearfix"}],[1957416540,{"a":"#bigbanner"}],[553493191,{"a":".RAD,\ntd[style=\"padding-bottom: 6px;\"]"}]]);

const hostnamesMap = new Map([["versia.bg",810264606],["vesti.bg",1955371474],["webcafe.bg",1545077680],["zajenata.bg",562652510],["subs.sab.bz",1245958049],["actualno.com",[388797316,2075624268]],["arenabg.com",[388797316,1171569000,1740871870]],["animes-bg.com",780509165],["antenneair.com",662312499],["bgnes.com",[662312499,1957416540]],["apteka-optima.com",194038494],["kaksepishe.com",1171569000],["cdn.arenabg.com",753208235],["bg-mamma.com",1040826086],["bgrabotodatel.com",553493191]]);

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
