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

// nor-0

const argsMap = new Map([[1962242633,{"a":".global-overlay-background"}],[1326767148,{"a":".ad-position-top,\n.ad-stamp"}],[2120304723,{"a":"#extraContainer3"}],[290711933,{"a":".blog-entry > .stacks_out"}],[1900987231,{"a":"li[style^=\"order:\"]:not([style*=\"order: \"])"}],[288494728,{"a":".page-body .col-sm-6,\n.page-body .col-xs-12,\n.rek-container"}],[882371110,{"a":".contentBanner"}],[1835092618,{"a":"a[href*=\"/annonse/\"]"}],[1696585148,{"a":"#dt-top-banner,\n.cp-slidein-body,\n.dfp-netboard,\n.mb-top-banner-wrapper,\n[id^=\"undefined\"]"}],[784492310,{"a":"#dfp-leaderboard-container,\n.ad.netboard,\n.ad.post-item,\n.ad.rightboard,\n.ad.sideboard,\n.ad.superboard"}],[1606808329,{"a":".sidebar__widget--ad"}],[1599953596,{"a":".recommended-module"}],[818935239,{"a":".frontpage-top-poster-wrap,\n.undefined.hidden"}],[2146247275,{"a":".login-wall__gradient,\n.lp-r > div,\n.spklw-post-attr[data-pc],\n.sponsor,\ndiv[data-cyp$=\"undefined\"],\ndiv[data-third-party-link^=\"[\"\"]"}],[913390646,{"a":".article-contentmarketing"}],[1936059923,{"a":"#Topbanner,\nfieldset"}],[1820453040,{"a":".bottom-widead"}],[439752244,{"a":"#facebook + .ad,\n.simple-news + .ad,\n.social + .ad"}],[1457487937,{"a":".top_banner"}],[72383946,{"a":".teaserContent:before,\n.vo-annonse"}],[591769062,{"a":".betting-widgets,\n.df-skin-vgpartnerstudio,\n.finn-placeholder,\n.partnerstudio-front,\n.tipster,\n.type-advert,\n.wid-betting,\ndiv[class$=\" ad-container\"],\ndiv[class^=\"undefined\"] > div[class^=\" css-\"],\ndiv[data-test-tag=\"undefined\"] + div:before,\ndiv[data-test-tag=\"undefined\"] + p + div:before,\nhr[class^=\"undefined\"],\np[data-test-tag=\"undefined\"] ~ p[class] ~ div[class]:not(.undefined):not([class^=\"undefined\"]):before"}],[279805428,{"a":".tipster-liveodds-embed"}],[48067135,{"a":"#player.pulse-isPauseAdVisible > .jw-overlays,\n.apnx-container,\n.video-branding"}],[1751382731,{"a":".digital_bilag_wrapper_horizontal,\n.tree-house"}],[186391369,{"a":".td_mod_wrap"}],[378787830,{"a":".ad-cols,\n.ad-fullwidth-container,\n.vlDesktopAd"}],[824834451,{"a":".ab-appnexus-ads-wrapper"}],[1991000868,{"a":".overlay-bg,\n.overlay-container,\n.overlay-wrapper,\n.sb-overlay"}],[2089934689,{"a":"#side > div:nth-of-type(1),\ntd:empty"}],[123844220,{"a":"#hcol"}],[291371268,{"a":".bannercontent"}],[1372067088,{"a":".numbered-phones"}],[770396713,{"a":"#modaladv,\n.modal-backdrop"}],[718843427,{"a":".block_w3 + .block_w3,\n.header_middle"}]]);

const hostnamesMap = new Map([["telenor.no",1962242633],["test.no",1326767148],["thaiguiden.no",2120304723],["thainytt.no",290711933],["tiendeo.no",1900987231],["tilbudmaskin.no",288494728],["tilbudsuken.no",882371110],["topp.no",1835092618],["trening.no",1696585148],["treningsforum.no",784492310],["trinesmatblogg.no",1606808329],["trondheim24.no",1599953596],["tu.no",818935239],["tv2.no",2146247275],["tvh.no",913390646],["utdanningsnytt.no",1936059923],["utrop.no",1820453040],["vagabond.no",439752244],["varden.no",1457487937],["vartoslo.no",72383946],["vg.no",591769062],["vglive.no",279805428],["vgtv.no",48067135],["viivilla.no",1751382731],["viralefilmer.no",186391369],["vl.no",378787830],["vredens-gnag.no",824834451],["xlmoto.no",1991000868],["yrkesbil.no",2089934689],["ytresogn.no",123844220],["bornholm.nu",291371268],["frisms.nu",1372067088],["norges.online",770396713],["apningstider.org",718843427]]);

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
