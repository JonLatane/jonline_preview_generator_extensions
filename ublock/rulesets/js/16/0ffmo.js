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

// grc-0

const argsMap = new Map([[1160452385,{"a":"body > table:nth-of-type(2)"}],[1719126441,{"a":"DIV.banners"}],[533300420,{"a":"IMG[src=\"images/betathome.jpg\"]"}],[444149301,{"a":"#sp-banners-carousel,\n#sp-banners-top,\n#sp-left,\n#sp-right,\n.sp-page-title,\n.sppb-section-content-center"}],[1536766784,{"a":".skin.news[href=\"https://www.facebook.com/NAIstinEllada\n\"],\nDIV#jw_wwg,\nDIV#kw_logo,\nDIV[id=\"sony-internet-tv-holder\"],\nSPAN#jwlogo"}],[1622983356,{"a":"#banner_160_filters,\n#banner_160_home,\n#banner_728_home,\n#new_contract_online_overlay,\n#sponsorship,\n.product-ad,\n.s_call_to_action,\nDIV[id=\"afc\"],\nDIV[id=\"home_728x90\"]"}],[905644893,{"a":"#featurette"}],[842533802,{"a":"DIV.text-link-container.marg-top-10,\nDIV[style=\"float: left; width: 70px; padding-top: 7px;\"]"}],[395921746,{"a":"#backgroundlink,\n.textlinks,\nA.banner,\nA.footballbet,\nA.ga_track,\nA[href*=\"/specials/williamhill?\"],\nA[href*=\"http://adfarm.mediaplex.com/\"],\nA[href*=\"http://serve.williamhill.com/\"],\nA[href*=\"http://www.e-germanos.gr\"],\nA[href=\"#0.1_\"],\nA[style=\"padding: 3px; background-color: rgb(222, 135, 20); color: rgb(255, 255, 255); text-decoration: none;\"][href=\"http://www.vistabet.com/?affiliate=sportfmVB&pname=Textlink\"],\nDIV[id=\"seios-link\"],\nLI.blue.casino,\nLI.blue.poker,\nSPAN.icon.icon-latest-news-ad"}],[924923371,{"a":".bet-logos"}],[1045679847,{"a":"#editor_link[style*=\"background:transparent url(http://www.contra.gr/Columns/article\"],\n#page > .content-top-wrap,\nA[class=\"ad\"],\nA[href*=\"acidbet.gr\"],\nA[href*=\"betclic.com\"],\nA[href*=\"doubleclick.net\"],\nA[href*=\"e-shop.gr\"],\nA[href*=\"http://www.allshops.gr\"],\nA[href*=\"http://www.menperfect.gr\"],\nA[href*=\"http://www.sport24.gr/html/ent/042/ent.374042.asp\"],\nA[href*=\"http://www.sport24.gr/html/ent/765/ent.371765.asp\"],\nA[href*=\"mens-x.gr\"],\nA[href*=\"www.bwin.com\"],\nDIV.code.currentArea-logo,\ndiv.ad,\ndiv[id^=\"undefined\"]"}],[1517705426,{"a":"#box-block-block-12"}],[997711646,{"a":".textlink"}],[1935535128,{"a":"#main > .ads,\n.aside"}]]);

const hostnamesMap = new Map([["runningnews.gr",1160452385],["www.trinews.gr",1160452385],["sday.gr",1719126441],["sentragoal.gr",533300420],["serraikanea.gr",444149301],["skai.gr",1536766784],["skroutz.gr",1622983356],["www.skroutz.gr",905644893],["sport.gr",842533802],["sport-fm.gr",395921746],["www.sport-fm.gr",924923371],["sport24.gr",1045679847],["supersyntages.gr",1517705426],["tanea.gr",997711646],["tovima.gr",997711646],["www.taxheaven.gr",1935535128]]);

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
