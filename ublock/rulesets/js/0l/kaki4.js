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

const argsMap = new Map([[1706114469,{"a":"#fasa,\n#text-39"}],[886660862,{"a":".custom-html-widget2,\ncenter"}],[1198888353,{"a":".code-block-6,\n.header-promo,\n.thene-prin-to-arthro,\n.thene-widget"}],[729932732,{"a":"#kalogritsas300"}],[496032763,{"a":"#g-content-top-a,\n.customhidden-mobile,\n.moduletable.sideAdvertFix,\n.moduletable.sideFix,\n.sponsor"}],[169485262,{"a":"#sma-top-box > .boxHead_TopBar"}],[820951065,{"a":"#MAINAD-box,\n.ADBox"}],[88828744,{"a":"#BannerCategArticle300Right1,\n#BannerCategArticle300Right2,\n#BannerCategArticle300Right3,\n#BannerCategArticle300Right4,\n#Categheaderbanner728,\n#Homeheaderbanner728"}],[1824525638,{"a":"A[href*=\"http://www.kazinoinfo.com/\"],\nDIV.box_main_ads"}],[3206072,{"a":"#wholesite1 > a[href^=\"http://jobby.gr\"],\nDIV[class=\"subBanner\"],\nDIV[id=\"sb-container\"]"}],[900104021,{"a":"#frame_id_1,\n#frame_id_2,\n.central_banner_area,\n.hyperad_iframe,\n.new60sbanners,\n[href=\"http://www.escore.gr/\"],\ndiv.adds_sec:nth-of-type(4),\ndiv.adds_sec:nth-of-type(5)"}],[1872152254,{"a":".HTML.widget:not(:last-child) > div:first-child"}],[762161094,{"a":"#ad_13_left_1"}],[1335669332,{"a":".row.sidebar-nav"}]]);

const hostnamesMap = new Map([["techgear.gr",1706114469],["tharrosnews.gr",886660862],["thenewspaper.gr",1198888353],["thepressproject.gr",729932732],["thestival.gr",496032763],["tlife.gr",169485262],["toarkoudi.gr",820951065],["tovima.gr",88828744],["tvsubtitles.gr",1824525638],["tvxs.gr",3206072],["usay.gr",900104021],["veriotis.gr",1872152254],["vimaonline.gr",762161094],["voicenews.gr",1335669332]]);

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
