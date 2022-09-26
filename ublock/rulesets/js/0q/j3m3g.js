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

const argsMap = new Map([[483225742,{"a":"A[href*=\"undefined\"]"}],[863080533,{"a":"#\\5f widget-5,\n#text-202339834,\nA[href*=\"http://www.ez-smoke.net/\"],\nA[href*=\"http://www.indolucky7.com/sbobet/sbobet.html\"],\nA[href=\"http://www.mp4converter.net/dvd-ripper-mac.html\"],\nA[href=\"http://www.verizoniphone4accessories.com/\"]"}],[1081085186,{"a":"#secondary"}],[579491805,{"a":"#ad-box-right,\nA[href*=\"http://serve.williamhillcasino.com/\"]"}],[652741893,{"a":"A#promoLink"}],[185907777,{"a":"A[href*=\"http://bold.adman.gr/\"],\nA[href*=\"http://talos.adman.gr/\"],\nDIV[id*=\"nimbleBuyWidget\"]"}],[496482196,{"a":".bannergroup"}],[982715686,{"a":".ads,\n.dockads.left,\n.inlineads"}],[172649171,{"a":"DIV[id=\"MaxFooter\"],\nDIV[id=\"leo14102010e\"],\nDIV[id=\"vavouralis\"],\nIFRAME[src*=\"undefined\"]"}],[1218099664,{"a":"#block-views-ads-sidebar-block-block"}],[1048082520,{"a":"#afdiv"}],[325565824,{"a":"#left-adv,\n#right-adv,\n.disaronnobox"}],[95965406,{"a":"EMBED#efirstPage"}],[1973952382,{"a":"strong > a[href^=\"http://autotriti.adman.gr/click\"]"}]]);

const hostnamesMap = new Map([["milaraki.com",[483225742,863080533]],["aek365.gr",[483225742,172649171]],["bno.gr",483225742],["i-live.gr",483225742],["techteam.gr",483225742],["start2click.com",1081085186],["newsauto.gr",1081085186],["subs4free.com",579491805],["williamhill.com",652741893],["gr",185907777],["2810.gr",496482196],["aegeanews24.gr",982715686],["alterthess.gr",1218099664],["antenna.gr",1048082520],["athinorama.gr",325565824],["auto24.gr",95965406],["autotriti.gr",1973952382]]);

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
