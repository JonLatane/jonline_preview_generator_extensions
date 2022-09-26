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

// tha-0

const argsMap = new Map([[1224912097,{"a":"div[class^=\"fancybox\"]"}],[1881126645,{"a":"#rightbottom_sidebar .region div[id^=\"block-views-jobs\"]"}],[144431752,{"a":"div[id^=\"arevicofancy\"]"}],[1626877540,{"a":"#survey-popup"}],[840372682,{"a":"#loginModal,\ndiv[data-dismiss=\"modal\"]"}],[1848431269,{"a":".banner-img-au,\n.content-widget:nth-of-type(2),\n.sidebar-widget:nth-of-type(2) > .textwidget"}],[1189155889,{"a":"#bg-main > table:nth-of-type(1) > tbody > tr > td:nth-of-type(3) > table > tbody > tr:nth-of-type(1)"}],[733801479,{"a":".backgroundPopup,\ndiv[aria-describedby=\"alert_popup_dialog\"]"}],[106292357,{"a":"#divnews,\nbutton[onclick][title=\"close\"]"}],[19078127,{"a":".theiaStickySidebar div[id^=\"ads300_250\"]"}],[989452856,{"a":"div[id=\"content\"] div[align=\"center\"] > a:first-of-type"}],[2005287862,{"a":"#intro,\ndiv[class^=\"banner-X2\"]"}],[685763112,{"a":".bigza-ads-block"}],[298919497,{"a":"#popDiv,\n#popup"}]]);

const hostnamesMap = new Map([["becteroradio.com",1224912097],["kodlikes.com",1224912097],["oopsmobile.net",1224912097],["blognone.com",1881126645],["chujai.com",144431752],["ithaihotnews.com",144431752],["itnews24hrs.com",144431752],["juropy.com",144431752],["kaijeaw.com",144431752],["laughwoo.com",144431752],["mthai.com",144431752],["petmaya.com",144431752],["thaihitz.com",144431752],["extremepc.in.th",144431752],["tgpl.in.th",[144431752,106292357]],["cleothailand.com",1626877540],["clip-th.com",840372682],["clip33.com",1848431269],["www.club-172hd.com",1189155889],["compgamer.com",[733801479,106292357]],["coregamerth.com",19078127],["dedbit.com",989452856],["dodeden.com",2005287862],["doodiza.com",[685763112,298919497]],["startclip.com",298919497]]);

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
