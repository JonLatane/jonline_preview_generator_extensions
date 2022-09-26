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

// bgr-0

const argsMap = new Map([[980001241,{"a":".banneritem"}],[640685898,{"a":"#sbox-overlay,\n#sbox-window,\n#wpfront-notification-bar,\n.code-block.code-block-12,\n.top_banner"}],[743013784,{"a":".banner"}],[322900495,{"a":".fc-dialog-container"}],[102630124,{"a":".col-lg-12.col-md-12.col-sm-12.col-xs-12"}],[1546023050,{"a":".abw_message"}],[1812535541,{"a":"[id^=\"banner\"]"}],[1506386681,{"a":"MARQUEE,\nTD[style=\"text-align: center; border: 1px dashed rgb(24, 130, 237); box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3); padding: 3px;\"]"}],[5060327,{"a":".banner-right,\ntable[width=\"220\"][bgcolor=\"#ffffff\"]"}],[100662664,{"a":".bann300x250"}],[1490659842,{"a":"#offers"}],[1410874103,{"a":"#BANNER,\ntd[style=\"border:1px solid #555555; width:340px; height:280px;\"],\ntd[valign=\"middle\"][align=\"center\"][style=\"border: 1px solid rgb(85, 85, 85); width: 340px; height: 280px;\"]"}],[489790837,{"a":"#bplay,\n#ips-ad,\n#setech,\n#single_ad,\n#your-ad,\n.custom-ad"}],[298046060,{"a":".adv"}],[2106806561,{"a":".bannerWraper"}],[1783305519,{"a":"#colorbox"}]]);

const hostnamesMap = new Map([["bivol.bg",[980001241,640685898]],["smolyandnes.com",980001241],["blitz.bg",[743013784,322900495]],["dnevnik.bg",743013784],["topsport.ibox.bg",743013784],["mediapool.bg",743013784],["money.bg",743013784],["vnews.bg",743013784],["etapgroup.com",743013784],["briag.bg",102630124],["btv.bg",[1546023050,1812535541]],["btvnovinite.bg",1546023050],["bukvi.bg",1506386681],["business.bg",5060327],["capital.bg",100662664],["carmarket.bg",1490659842],["conquiztador.bg",1410874103],["crimes.bg",489790837],["cross.bg",[298046060,2106806561]],["download.bg",298046060],["econ.bg",298046060],["burgasnews.com",298046060],["e-novinar.com",298046060],["dariknews.bg",1783305519]]);

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
