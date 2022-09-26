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

const argsMap = new Map([[2024452578,{"a":"#ctl00_articleLeftColumn_ctl04_adRotatorUpdatePanel,\n#ctl00_articleLeftColumn_ctl05_adRotatorUpdatePanel,\n#ctl00_articleLeftColumn_ctl06_adRotatorUpdatePanel,\n#ctl00_topBannersRight_ctl00_adRotatorUpdatePanel,\n.top_banners_outer"}],[620604230,{"a":".topClickable"}],[1118405854,{"a":"div[class=\"story-textlinks\"]"}],[453252148,{"a":"DIV[style=\"border: 1px solid rgb(224, 224, 224); padding: 2px; margin-left: 20px; background-color: rgb(244, 244, 252); width: 140px; font-size: 12px;\"]"}],[639917221,{"a":"#banners,\n.banners_mid_2"}],[585388062,{"a":".yeslidergroup,\ndiv[id^=\"hstp-\"]"}],[820878299,{"a":"div[id^=\"epom-\"]"}],[954886450,{"a":"div[id=\"ad-links\"]"}],[1072620929,{"a":"#box-sponsors"}],[1417190264,{"a":"#block-block-40,\n#block-block-41,\n#left-ad-container,\n#region-sidebar-second,\n#right-ad-container,\n.block-header-728x90"}],[1723904074,{"a":".big-banner-top,\n.main-margin.container > .newstrack-content.row > .post-margin-right.col-xs-8.col-md-8 > .waypoints.post-content > .affiliate > .textwidget"}],[980001241,{"a":".banneritem"}],[1791222833,{"a":"#realTopBanner,\n#realTopBannerGap"}],[1663142616,{"a":"#right_col,\n.gk_tab_container0-style1,\n.gk_tab_wrap-style1"}]]);

const hostnamesMap = new Map([["nooz.gr",2024452578],["oneman.gr",620604230],["onmed.gr",1118405854],["opensoft.gr",453252148],["oroskopos.gr",639917221],["parianostypos.gr",[585388062,820878299]],["veriotis.gr",820878299],["pathfinder.gr",954886450],["shopping.pathfinder.gr",1072620929],["patrainews.gr",1417190264],["popaganda.gr",1723904074],["prismanews.gr",980001241],["real.gr",1791222833],["realestatenews.gr",1663142616]]);

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
