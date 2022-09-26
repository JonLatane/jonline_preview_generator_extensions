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

// cze-0

const argsMap = new Map([[823375495,{"a":".mid-lead-hp"}],[262849452,{"a":"div[data-e-b-n*=\"advert\"],\ndiv[data-e-b-n*=\"sklik\"]"}],[1690502309,{"a":"div[class^=\"branding-ad\"]"}],[803551,{"a":"div.ad-exclusive,\ndiv.ogm-sticky-repeater"}],[1788662526,{"a":"a[href*=\"track.smartmania.cz\"]"}],[1945393428,{"a":"#P_reklama_horni,\n.reklamni_sdeleni,\n.rs_reklama,\n[style=\"vertical-align:middle; text-align: left; width: 139px;\"]"}],[1667253137,{"a":".mabo.faa,\n[style=\"width:960px;margin:0 auto;text-align:left\"]"}],[1744141474,{"a":"a[data-dot=\"c_pozadi\"],\na[data-dot=\"hp_pozadi\"],\ndiv.ad"}],[779412087,{"a":"#ad"}],[1561454396,{"a":".bbtitle"}],[1456604518,{"a":"#vyjizdeciBoxikDiv"}],[755652314,{"a":".sidebar-banner,\n.skyscrapper-right"}]]);

const hostnamesMap = new Map([["serialzone.cz",823375495],["clanky.seznam.cz",262849452],["search.seznam.cz",262849452],["tv.seznam.cz",1690502309],["www.seznam.cz",803551],["smartmania.cz",1788662526],["sms.cz",1945393428],["stesti.cz",1667253137],["super.cz",1744141474],["login.szn.cz",779412087],["tiscali.cz",1561454396],["topzine.cz",1456604518],["tvfreak.cz",755652314]]);

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
