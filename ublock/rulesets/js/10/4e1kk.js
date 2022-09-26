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

// rou-1

const argsMap = new Map([[1442959808,{"a":"#slidebox,\n.DAGInScrollContainer,\n.bH600.bannerBox,\n.bannerBox,\n.desktop_only.grey.section,\n.max600.bannerBox,\naside > .bannerBox,\nbody > .bannerGrey"}],[117207931,{"a":"[href^=\"https://msi.gm/\"]"}],[76336492,{"a":".pubheader"}],[447548831,{"a":"[href=\"https://www.kia.ro/\"]"}],[956659962,{"a":".td_spot_img_all"}],[959106737,{"a":".td-pb-span12.tdi_24"}],[917006190,{"a":".reclama"}],[1933551916,{"a":".bg--dark,\n.branding"}],[692483636,{"a":"#text-49,\n.banner_g,\n[href^=\"https://www.brd.ro/\"]"}],[1251630366,{"a":"A[href=\"http://bit.ly/1RQRaRq\"],\nA[href=\"https://aegonmarket.ro/\"],\nA[href=\"https://bancatransilvania.ro/pentru-companii/imm/credite-imm/investeste-romaneste/\"],\nDIV[id=\"_tdv_all\"]"}],[1986596851,{"a":"[class^=\"banner\"]"}],[1147957204,{"a":"[class^=\"reclama\"]"}],[1536636602,{"a":"#sidebar > [href*=\"_click\"]"}],[2059581721,{"a":".zoom.banner"}],[1319652526,{"a":".banner-ads-container"}],[1917789834,{"a":".height-250.mg-bottom-20"}],[613174970,{"a":".height-250"}],[2045672155,{"a":".height-sm-360.height-xs-200.mg-bottom-20"}]]);

const hostnamesMap = new Map([["antena3.ro",1442959808],["arenait.ro",117207931],["autoexpert.ro",[76336492,447548831]],["floteauto.ro",76336492],["autolatest.ro",[956659962,959106737]],["flux24.ro",956659962],["focuspress.ro",956659962],["monitorulexpres.ro",956659962],["refleqtmedia.ro",956659962],["automobilen.ro",917006190],["eblogauto.ro",917006190],["b1tv.ro",1933551916],["bankingnews.ro",692483636],["biziday.ro",1251630366],["bugetul.ro",[1986596851,1147957204]],["cugetliber.ro",1986596851],["gsp.ro",1986596851],["buletindecarei.ro",1536636602],["bursa.ro",2059581721],["campinatv.ro",1319652526],["cancan.ro",[1917789834,613174970,2045672155]],["prosport.ro",1917789834],["impact.ro",613174970]]);

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
