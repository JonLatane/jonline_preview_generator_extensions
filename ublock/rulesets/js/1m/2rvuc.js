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

const argsMap = new Map([[743013784,{"a":".banner"}],[1090986442,{"a":"[class*=\"banner\"]"}],[940321987,{"a":".bigbnr"}],[1730480626,{"a":"img[src^=\"VIRARTICLES/shadv/\"]"}],[1727380734,{"a":".WidgetHidden.article-aside,\n.WidgetHidden_false.article-aside"}],[675174556,{"a":".ad-970-250"}],[1233610073,{"a":"#Plasma_1,\n#divBanner_Plazma,\n#sdera.width100pc,\n#top_banner_ph,\n.centered.padt10 > .clear"}],[121993247,{"a":"#AdvertisementSystemTakeOver,\n#divBanner_BigPlazma,\n#divBanner_RegularPlazma,\n#divPlazma,\n#dolphinContainer,\n#flashBtnX,\n#floatDownBar,\n#test.f-right,\n.banner.clear,\n.fade,\n.floaterin.floaterout,\n.response[style=\"background-color:#F4F2F0\"],\n.title14pxblue,\n[style=\"position: relative; display: inline-block; vertical-align: text-bottom; text-align: justify; height: 20px; width: 111px;\"],\niframe[src^=\"http://ads.bhol.co.il/\"],\ntd[style=\"padding-bottom:4px; padding-top:7px\"]"}],[1662340470,{"a":"#LeftBanner,\n.HotBannerDiv,\n.TopBannerDiv"}],[1199725070,{"a":".adv-article-left-kubia"}]]);

const hostnamesMap = new Map([["a.co.il",743013784],["forum.lametayel.co.il",743013784],["maariv.co.il",743013784],["aiwa.co.il",[1090986442,940321987]],["bladna.co.il",1090986442],["karmelna.net",1090986442],["almadar.co.il",1730480626],["marmar.co.il",1730480626],["auto.co.il",1727380734],["baba-mail.co.il",675174556],["bhol.co.il",[1233610073,121993247]],["bhol-forums.co.il",1233610073],["bipbip.co.il",1662340470],["bizportal.co.il",1199725070]]);

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
