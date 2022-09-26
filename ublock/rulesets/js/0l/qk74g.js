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

// fin-0

const argsMap = new Map([[1591644104,{"a":".advertoriaalit"}],[1750384864,{"a":".mainos-top"}],[1253977962,{"a":".CMAC_AdChangerWidget.widget"}],[1760169978,{"a":"div.views-injected-row.views-row,\ndiv[class=\"main-container header-container container-fluid\"]"}],[619924784,{"a":".ad"}],[642808004,{"a":".preroll-text,\n.text-ad-container"}],[195132654,{"a":"a[href=\"/category/mainos/\"]"}],[2013033104,{"a":".ad-list-read-all"}],[1176259362,{"a":".ad-assigned.panoraamabanneri"}],[1121766051,{"a":".after-ad,\n.before-ad,\n.jattiboksi,\n.natiivimainos,\n.paraati"}],[1048180466,{"a":"div.polii-widget.gridhub-widget-box.widget.gridhub-side-widget"}],[1629647394,{"a":".widget_media_image > a[href=\"http://dimex.fi\"]"}],[893319293,{"a":".proje-widget"}],[171213612,{"a":"section.sbs-articleitems[data-module_position_id=\"640\"]"}],[1032412156,{"a":".block-radiovoima-advertisements"}],[1089575346,{"a":"img[id=\"undefined\"]"}],[814357390,{"a":"#lomakone-results-horizontal-ads-3,\n.ad-empty,\n.recommended.lomakone-results-row"}],[974475667,{"a":"#adslot_bottom,\n#adslot_search,\n#topslot,\n[href=\"https://www.suomi24.fi/lainaa/yhdista-lainat/\"]"}],[103065856,{"a":".category-mainos"}],[1954596090,{"a":"a[href*=\"subaction=bannerredirect\"]:not(a[href*=\"-rv-tilaus\"])"}],[997914879,{"a":"div[class|=\"g g\"]"}],[1067286421,{"a":".RuutuPlayer__Error-sc-1o2b3la-0"}],[1768057452,{"a":".panoraama_etus"}],[1884408257,{"a":"#inhouse_ad,\n.ad-inhouse-desktop,\n.category-container--commercial.category-container.container-fluid,\n.dre-item--skin-native,\n.tilaa-banner"}],[1043744344,{"a":".mainospalsta"}],[429008783,{"a":".article-item.column-mainospaikka"}],[734877124,{"a":".a-281.g-single"}],[551947293,{"a":".view-2019-ajankohtaiset-tarjoukset,\n.view-banneripaikka-etusivuoikea1"}],[1193716190,{"a":"#auto-grid-container-5c470b0150cba"}],[1997070437,{"a":".banner-boksi1,\na[href^=\"https://www.autonvaraosat24.fi/\"]"}]]);

const hostnamesMap = new Map([["olutposti.fi",1591644104],["omalahio.fi",1750384864],["orivedensanomat.fi",1253977962],["pelaaja.fi",1760169978],["pelikone.fi",[619924784,642808004]],["teknavi.fi",619924784],["pelit.fi",195132654],["pietarsaarensanomat.fi",2013033104],["selanne-lehti.fi",[2013033104,1043744344]],["pkank.fi",1176259362],["pointti.fi",1121766051],["poliisiuutiset.fi",1048180466],["pottupellossa.fi",1629647394],["projektiuutiset.fi",893319293],["radionova.fi",171213612],["radiovoima.fi",1032412156],["rakentaja.fi",1089575346],["rantapallo.fi",814357390],["ratkojat.fi",974475667],["retkilehti.fi",103065856],["ristinvoitto.fi",1954596090],["ruuhkavuodet.fi",997914879],["ruutu.fi",1067286421],["satakunnanviikko.fi",1768057452],["seiska.fi",1884408257],["seurakuntalainen.fi",429008783],["sijoittaja.fi",734877124],["sijoitustieto.fi",551947293],["somerolehti.fi",1193716190],["suomela.fi",1997070437]]);

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
