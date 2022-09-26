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

const argsMap = new Map([[150816024,{"a":"iframe"}],[1723252421,{"a":".essb-popup,\n.essb_bottombar"}],[1527646785,{"a":".articleContent div[class^=\"midAdModule\"],\n.theContainer.foryou"}],[1530365014,{"a":"#basic-modal-content,\ndiv[id^=\"simplemodal\"]"}],[1438398018,{"a":"div.miru-blockads,\ndiv.spu-bg,\ndiv.spu-box"}],[1239718259,{"a":"#main .loading,\n#slider + center,\n[id*=\"ads\"],\n[id*=\"ads\"] + center"}],[1501980681,{"a":"#ads-overlay,\n#ads-preload-popup,\n#close-preload,\n#video_ads_container,\n#welcome,\n.bjqs,\n.os-banner-ads,\n.os-page-wallpaper,\n.os_preload_popup,\ndiv[class^=\"introjs\"],\ndiv[class^=\"os-ads\"],\ndiv[data-widget=\"plista_widget_belowArticle\"],\ndiv[data-widget=\"plista_widget_sidebar\"],\ndiv[id*=\"div-gpt-ad\"],\nsection.bigbanner-ad"}],[777890325,{"a":".ad-box"}],[992763123,{"a":"#leaderboard_bottom.bottom_banner,\n.os-install-app,\nfigure[class=\"os-floating-ad\"],\nfigure[class^=\"os-ad\"]"}],[1282477422,{"a":"div#sitefocus,\ndiv.pcb > div:nth-of-type(3),\ndiv.pcb > div:nth-of-type(5)"}],[39835912,{"a":"#SC_TBlock_289622,\n.adscenter:nth-of-type(10),\n.adscenter:nth-of-type(11),\n.adscenter:nth-of-type(12),\n.adscenter:nth-of-type(13),\n.adscenter:nth-of-type(18),\n.adscenter:nth-of-type(19),\n.adscenter:nth-of-type(20),\n.adscenter:nth-of-type(9),\n.block750,\n.blockcolumn1,\n.blockcolumn3,\n.slidetop"}],[498016874,{"a":"div[id^=\"SC_TBlock\"]"}],[557367339,{"a":".ads-sidebar-middle,\n.exit-overlay,\n.post-entry .ads,\n.subscribe-form,\n.ui-front.ui-widget-overlay"}],[1099556810,{"a":".container .row .ads,\n.e18fudrz1.css-1wc8xzy,\ndiv[tabindex][style*=\"z-index\"]"}]]);

const hostnamesMap = new Map([["zaapmak.com",150816024],["picnic.ly",1723252421],["today.line.me",1527646785],["upic.me",1530365014],["miruanime.net",1438398018],["nungxthai.net",1239718259],["online-station.net",[1501980681,777890325]],["thairath.co.th",[777890325,1099556810]],["m.online-station.net",992763123],["snipertopanime.net",1282477422],["xxxpostpic.org",39835912],["sudting.party",498016874],["rabbit.co.th",557367339]]);

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
