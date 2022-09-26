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

const argsMap = new Map([[2140273287,{"a":".adResult","n":["aggeliestanea.gr"]}],[954200771,{"a":".ad_wrapper","n":["athensmagazine.gr"]}],[59581713,{"a":".pub_300x250,\n.pub_300x250m,\n.pub_728x90,\n.text-ad,\n.text-ad-links,\n.text-ads,\n.textAd,\n.text_ad,\n.text_ads","n":["www.ediva.gr"]}],[128722342,{"a":"#mainBanner,\n.LeftMenuAd,\n.adForumAdDiv"}],[1437416761,{"a":"DIV[id=\"MaxFooterBannerCon\"]"}],[460069524,{"a":"A[href=\"http://www.amnizia.com/advertisement\"],\nA[href=\"http://www.elcid.com/\"],\nA[href=\"http://www.text-link-ads.com/\"]"}],[1148295167,{"a":"TABLE#bannerLandscape"}],[162257533,{"a":"#crosscol-overflow"}],[1275650528,{"a":".widget-content"}],[806918171,{"a":"DIV#HTML14,\nDIV#HTML15"}],[1124921002,{"a":".skinBanner,\n.sw-banner,\nvideo"}],[344754803,{"a":"#af-preloader,\n.adsbygoogle,\n.theiaStickySidebar"}],[1248758168,{"a":"DIV[id=\"floatit\"]"}],[1683460752,{"a":"P[style=\"color: rgb(255, 0, 0);\"],\ntd[class=\"message-box\"]"}]]);

const hostnamesMap = new Map([["adslgr.com",128722342],["aek365.com",1437416761],["aek365.gr",1437416761],["amnizia.com",460069524],["oddbanner.bet-at-home.com",1148295167],["elektronikosanagnostis.blogspot.com",162257533],["veriotis.gr",162257533],["fimotro.blogspot.com",1275650528],["tro-ma-ktiko.blogspot.com",806918171],["enimerosi.com",1124921002],["filoitexnisfilosofias.com",344754803],["greekddl.com",1248758168],["greeksubtitlesproject.com",1683460752]]);

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
