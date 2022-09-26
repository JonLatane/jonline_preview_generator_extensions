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

const argsMap = new Map([[209349658,{"a":"#ads\\.top"}],[757392822,{"a":"a[href*=\"goodluckblockingthis.com\"],\na[onmousedown*=\"goodluckblockingthis.com\"]"}],[154596200,{"a":"#ArticleBanner,\n#ads\\.premium,\n#carouselAdLi,\n#old_Arts_Ad,\n#relevanti_area,\n.SetArtWidth[style=\"margin-top:7px;\"] > table[width=\"478\"][height=\"174\"],\n.banner.new > .no-print,\n.banner.new.layoutItem,\n[height=\"7\"] + [valign=\"top\"] + tr[height=\"7\"],\n[src=\"http://partner.googleadservices.com/gpt/pubads_impl_86.js\"] + *,\n[valign=\"top\"] + [valign=\"top\"] + tr[height=\"7\"]"}],[346385169,{"a":"#arti-banner-popup,\n#stSegmentFrame,\n.contento_Container,\n.rt-banners"}],[1282942201,{"a":".ad-slot.gpt-ad-container"}],[460009067,{"a":".adbox"}],[828556833,{"a":".OUTBRAIN"}],[969176418,{"a":"#adfxp"}],[2144657564,{"a":"#taboola-left-rail-thumbnails,\n.desktop-ad-720-90,\n.gadgety-ad-wrapper,\n.vertical-ad"}],[1815391967,{"a":"#jumbo_container.nocontent.topBanner,\n.Banner_in_Content"}]]);

const hostnamesMap = new Map([["calcalist.co.il",[209349658,757392822,154596200]],["frogi.co.il",[209349658,460009067]],["mynet.co.il",209349658],["ynet.co.il",[209349658,757392822]],["ch10.co.il",346385169],["foodsdictionary.co.il",1282942201],["fxp.co.il",[828556833,969176418]],["gadgety.co.il",[828556833,2144657564]],["maariv.co.il",828556833],["isramedia.net",828556833],["globes.co.il",1815391967]]);

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
