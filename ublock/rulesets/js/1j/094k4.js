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

// rou-1

const argsMap = new Map([[619924784,{"a":".ad"}],[309339305,{"a":".banner_720,\n.fab_lastpost,\n.fab_mid_thread,\n.my_post_goad.my_post.row-fluid"}],[1830011080,{"a":".banners-box,\n.new_domain_r.block"}],[922436648,{"a":".rm-skin"}],[729054972,{"a":".img-banner"}],[567052582,{"a":"[style]:has(.adsbygoogle)"}],[1901070494,{"a":"#ipsLayout_sidebar > .cWidgetContainer,\n.advertise,\n.content-page-mg > p,\n[alt=\"advertisement_alt\"],\n[href=\"https://luxuryescorts.com/\"],\n[href^=\"https://bcprm.com/promo.php\"]"}],[1495514262,{"a":"[style^=\"overflow:auto;\"]"}],[526987529,{"a":"td[height^=\"500\"]"}],[671896847,{"a":"a[href^=\"https://www.udont2021.com/\"]"}],[75481149,{"a":".widget_text"}],[883784450,{"a":"#ppsPopupBgOverlay,\n.ai_widget.widget,\n.code-block-8.code-block,\n.ppsPopupShell"}],[315426932,{"a":"[href^=\"https://event.2performant.com/\"]"}],[109914397,{"a":".branding-container,\n[href*=\"AdB\"]"}],[795506435,{"a":"[href^=\"https://www.gralmedical.ro/\"]"}],[543614407,{"a":"#adv-Piede-sticky"}],[91962041,{"a":".mask,\n.widget-popup,\n.widget-profitshare"}],[2033103740,{"a":"#bula-ultima-ora"}]]);

const hostnamesMap = new Map([["asculta-live.com",619924784],["sighet247.ro",619924784],["clubopel.com",309339305],["escortebucuresti.com",1830011080],["gazetaromaneasca.com",922436648],["georgebutunoiu.com",729054972],["restocracy.ro",729054972],["mediculmeu.com",567052582],["nimfomane.com",1901070494],["qreferat.com",1495514262],["rasfoiesc.com",526987529],["roboxfilme4k.com",671896847],["romaniataramea.com",75481149],["timpul.md",75481149],["viatasisanatate.com",883784450],["vloggeri.com",315426932],["ziare.com",109914397],["ziartopdearges.com",795506435],["ziarulromanesc.de",543614407],["academiacatavencu.info",91962041],["gandul.info",2033103740],["mediafax.ro",2033103740],["prosport.ro",2033103740],["zf.ro",2033103740]]);

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
