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

const argsMap = new Map([[1092726041,{"a":"[data-ad]"}],[927892404,{"a":"[href*=\"&utm_campaign\"],\n[href*=\"banner\"],\n[href=\"http://www.arenamall.ro/\"],\n[href=\"https://anunturi.desteptarea.ro/minireclame/\"],\n[href^=\"https://volvobacau.ro/cere-oferta\"],\n[style*=\"banner\"]"}],[245554188,{"a":".alert-warning.alert"}],[141049808,{"a":"#adContainer,\n#category_b"}],[421711756,{"a":".a-wrap"}],[1090986442,{"a":"[class*=\"banner\"]"}],[1646115831,{"a":".featuredBrandsCon"}],[1689772553,{"a":".ns-wrap-bottom-right"}],[1748231161,{"a":".section.add"}],[1906207336,{"a":"#background-link"}],[80268266,{"a":"#background-image,\n.nspb-interstitial"}],[475847313,{"a":"[href=\"http://boromir.ro/\"],\n[href=\"https://uzinamecanicavl.ro/site/index.php\"]"}],[1256930236,{"a":"#ado970p1,\n#lastmin,\n#lastmin2,\n#likepagefb,\n#overlay,\n#ureche-fb,\n.agoramag,\n.bncp-desktop,\n.brandc,\n.ford.reclama-auto,\n.news-listing-comunicate,\n[href=\"https://agoramag.ro\"]"}],[189211607,{"a":"[class^=\"ssc-card__branding\"],\n[data-banner],\n[id^=\"strawberry_feeds_manager_widget\"],\n[rel^=\"sponsored\"]"}],[606815935,{"a":".banner-info"}],[358392103,{"a":"div[id^=\"custom_html\"],\ndiv[id^=\"text\"]"}],[949635774,{"a":"[href^=\"https://ivecopentrutine.ro/\"]"}],[2060961470,{"a":"[href*=\"profitshare.ro/\"]"}]]);

const hostnamesMap = new Map([["dcnews.ro",1092726041],["desteptarea.ro",927892404],["dez.ro",245554188],["digi24.ro",141049808],["dinpopor.ro",421711756],["dirtbike.ro",1090986442],["zvj.ro",1090986442],["divahair.ro",1646115831],["emag.ro",1689772553],["epitesti.ro",1748231161],["europafm.ro",[1906207336,80268266]],["virginradio.ro",1906207336],["evenimentvalcean.ro",475847313],["evz.ro",1256930236],["fanatik.ro",189211607],["farmaciata.ro",606815935],["filmecrestineonline.ro",358392103],["floteauto.ro",949635774],["flux24.ro",2060961470]]);

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
