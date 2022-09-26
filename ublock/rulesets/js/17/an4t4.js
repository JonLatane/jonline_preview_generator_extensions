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

const argsMap = new Map([[1003365278,{"a":".backdrop"}],[177409344,{"a":".article .row div .fb-like"}],[1352912935,{"a":".bigbanner,\n.targetbanner-hilight,\n.top-billboard-1200,\n.wrapper > div:nth-of-type(7),\nbody > div:nth-of-type(2),\ndiv[style*=\"text-align:center\"] div[style*=\"z-index:\"]"}],[1745715508,{"a":"#spu-1170,\n.stb-container"}],[565640670,{"a":".dgd_stb_box.clean_white"}],[1117292196,{"a":"#spc"}],[445643657,{"a":"#player_banner"}],[1198486839,{"a":"div[id^=\"cbox\"]"}],[1782477916,{"a":"#showLikePopup,\n#topAd,\n.detail_content .ui_adblock,\n.foot_fb_like,\n.like_yellow,\ndiv[itemprop=\"articleBody\"] a[class^=\"ui_btn\"][href*=\"line.me\"]"}],[1864729176,{"a":".fancybox-overlay,\n.fancybox-wrap"}],[1071830019,{"a":"#ui_popup_window_tpl,\ndiv[id^=\"win_showLike\"]"}],[1763719925,{"a":"#popup_countdown,\ndiv[id^=\"itro_\"]"}],[2098123187,{"a":".adsense-leadin,\n.ezAdsense"}],[703347191,{"a":"div#p9fe"}]]);

const hostnamesMap = new Map([["kaijeaw.com",1003365278],["thaihitz.com",1003365278],["thaijobsgov.com",1003365278],["kanomjeeb.com",177409344],["kapook.com",1352912935],["kidjarak.com",1745715508],["kiitdoo.com",565640670],["meekhao.com",565640670],["www.king-anime.com",1117292196],["www.leoplayer3.com",445643657],["liceza.com",1198486839],["liekr.com",1782477916],["lonely-rooyang.com",1864729176],["manyum.com",1071830019],["marketingoops.com",1763719925],["meepanda.com",2098123187],["misa-anime.com",703347191]]);

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
