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

// svn-0

const argsMap = new Map([[87344285,{"a":"onl-article-connected,\nonl-banner"}],[743013784,{"a":".banner"}],[201461473,{"a":"onl-magick-box"}],[784007837,{"a":"onl-eurojackpot-teaser"}],[1968346776,{"a":".grid--ads,\n.ng-star-inserted > .ng-star-inserted > .sidebar__box,\n.ng-star-inserted.background > .ng-star-inserted > .adplayer,\n.ng-star-inserted.banner--article,\n.sidebar__box--banner,\nonl-voyo.sidebar__box"}],[314250456,{"a":"#Banner300R"}],[1797934920,{"a":".widget-ad-bottom-banner"}],[1295599662,{"a":".td-a-rec"}],[1493443170,{"a":".shop__card.noPaddingAlways.col-md-12,\n.topBanner,\n.topBannerLanding"}],[1127707545,{"a":"#coloumnAd,\n#newsOfTheDay,\n#servicesToItems,\n.BannerAlignment,\n.BannerBillboard,\n.EntityList--ListItemFeaturedStore,\n.EntityList--ListItemVauVauAd,\n.HeaderSpotlight:has(a[href^=\"https://bit.ly\"]),\n.trakica_container"}],[279514061,{"a":"#block-block-35,\n#left_click_div,\n#right_click_div,\n.featurebar_right,\n.front_topgames_footer"}],[1004913801,{"a":"#sp-pasice,\n#sp-pasice3,\n#sp-user2,\n.bannergroup,\n.editoriali,\n.matej-carousell-left,\n.matej-carousell-right"}],[1487037022,{"a":"#html_javascript_adder-2"}],[1666770311,{"a":".addthis_toolbox,\n.widget_subscribe_widget"}]]);

const hostnamesMap = new Map([["24ur.com",[87344285,743013784,201461473,784007837,1968346776]],["moskisvet.com",[87344285,201461473]],["okusno.je",87344285],["bibaleze.si",87344285],["cekin.si",[87344285,743013784,201461473,784007837]],["dominvrt.si",87344285],["vizita.si",87344285],["zadovoljna.si",[87344285,743013784,201461473]],["vreme.24ur.com",743013784],["napovednik.com",743013784],["studentarija.net",743013784],["mojaleta.si",743013784],["svet24.si",743013784],["tehnik.telekom.si",743013784],["avtomanija.com",314250456],["avtomanija.si",314250456],["avtomobilizem.com",1797934920],["avtonasveti.com",1295599662],["mojprihranek.si",1295599662],["bicikel.com",1493443170],["naprostem.si",1493443170],["tekac.si",1493443170],["bolha.com",1127707545],["bringler.com",279514061],["dnevne-novice.com",1004913801],["dne.enaa.com",1487037022],["lifestyle.enaa.com",1666770311]]);

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
