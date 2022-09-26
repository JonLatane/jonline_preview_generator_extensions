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

const argsMap = new Map([[2019664699,{"a":".bgbanner"}],[985015878,{"a":"#firstGoogleAd"}],[1460931245,{"a":"#adPlayer,\n#adPlayerSecondary,\n#videoOverlay,\n.ads-spaces-shdera-hp,\n.commercial-items.mixed-sequence.sequence,\n.css-k0dd80,\n.homepage-desktop-top-ad,\n.more-in-walla-aside.side-article.fc,\n.no-mobile.shdera > ul,\n.no-title.shatapim.sequence,\n.ob-taste-left,\n.positioned,\n.slot-top-margin + .static-spaces-rectangle-buzzer.no-tablet.no-mobile,\n.tld-side-recommendation.editor-selections.three-section-articles.sequence,\n.top_banner_outer.relative,\n.vertical-232.tld.type-2.vertical-editable.common-hp-articles.sequence,\n.walla-shops,\n.with-margin-bottom.only-desktop.wide.css-13oxhn3.css-1u5pva.slot,\n.with-margin-bottom.only-desktop.wide.css-1mblpkl.css-11sz7.slot,\n[alt=\"adImg\"],\n[data-adid],\n[data-advertiser-id],\n[name=\"adIframe\"],\na[href*=\"jor-el.net\"] + img[src^=\"blob\"],\na[href*=\"jor-el.net\"] img[src^=\"blob\"],\na[href][onmousedown] img[src^=\"blob\"],\na[href^=\"javascript:\"] img[src^=\"blob\"],\ndiv[class^=\"ads-spaces\"],\ndiv[id^=\"Fusion_holder\"],\ndiv[style=\"width:468px;margin:0 auto;\"],\niframe[id*=\"AMAdIframe\"],\nvideo[poster^=\"data:image/gif;base64,\"]"}],[869581448,{"a":"[href^=\"https://dtv.walla.co.il\"],\n[href^=\"https://unionhorizon.walla.co.il\"],\n[href^=\"https://www.democratv.org\"]"}],[1656588723,{"a":".game-item > .pre-game"}],[1309214749,{"a":"#ad1,\n#ads-mail-cube,\n.ads-mail-cube,\ndiv[data-ads-params],\ndiv[data-ads-space]"}],[1776170603,{"a":".banner-tower,\n.master-popup-banner"}],[31390006,{"a":"#toolbarLink,\n.daily_container,\n.walTopBannerInside"}],[552699310,{"a":".type-2.common-hp-articles.sequence"}],[617448945,{"a":"#topBanner"}]]);

const hostnamesMap = new Map([["upf.co.il",2019664699],["uzit.co.il",985015878],["walla.co.il",1460931245],["animals.walla.co.il",869581448],["astrology.walla.co.il",869581448],["b.walla.co.il",869581448],["buzzit.walla.co.il",869581448],["cars.walla.co.il",869581448],["celebs.walla.co.il",869581448],["e.walla.co.il",869581448],["elections.walla.co.il",869581448],["euro.walla.co.il",869581448],["fashion.walla.co.il",869581448],["finance.walla.co.il",869581448],["food.walla.co.il",869581448],["healthy.walla.co.il",869581448],["home.walla.co.il",869581448],["judaism.walla.co.il",869581448],["kids.walla.co.il",869581448],["mag.walla.co.il",869581448],["movies.walla.co.il",869581448],["mundial.walla.co.il",869581448],["nadlan.walla.co.il",869581448],["news.walla.co.il",869581448],["nick.walla.co.il",869581448],["olympics.walla.co.il",869581448],["sports.walla.co.il",[869581448,552699310]],["tags.walla.co.il",869581448],["tech.walla.co.il",869581448],["travel.walla.co.il",869581448],["tv-guide.walla.co.il",869581448],["usaelections.walla.co.il",869581448],["viva.walla.co.il",869581448],["vod.walla.co.il",869581448],["weather.walla.co.il",869581448],["www.walla.co.il",869581448],["fun.walla.co.il",1656588723],["mail.walla.co.il",1309214749],["mazaltov.walla.co.il",1776170603],["newmail.walla.co.il",31390006],["wallashops.co.il",617448945]]);

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
