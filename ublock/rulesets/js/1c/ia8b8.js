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

const argsMap = new Map([[1716618447,{"a":".vaihtuvamainos,\ndiv[class=\"w-full md:w-2/5 pt-6 md:pt-0 pl-0 md:pl-8\"]"}],[1643946965,{"a":".ugaam-archive-ad-wrapper"}],[1279932997,{"a":".box--full.grid__container.clearfix,\n.magazineorderwidget__content"}],[1983639175,{"a":"[href*=\"paratiisi.fi\"]"}],[25055732,{"a":"#front_after_menu,\n.soliloquy-link"}],[838549434,{"a":".kaupalliset,\ndiv.grid__item_tn-1-2"}],[1550673920,{"a":".widget_nativearticles"}],[865563638,{"a":"#native_text_wrapper"}],[1161835485,{"a":".native-comms"}],[310445722,{"a":"[class*=\"undefined\"]"}],[1119115352,{"a":".ads-parade-wrapper,\na[href^=\"https://www.arvopaperi.fi/kumppanisisallot/\"][target=\"_self\"]:not(section > a)"}],[1190147938,{"a":"[class*=\"p2m385-\"]"}],[916777347,{"a":".head.the-wrap"}],[1208962608,{"a":".pb[lazied]"}],[1453704581,{"a":"#pb_bottom,\n.box_dt,\n[href^=\"/clk\"]"}],[1798348872,{"a":"#pb_top"}],[1235583005,{"a":".front-page-ad-padding,\n.front-page-advertisement"}],[859011640,{"a":"#cm-banner"}],[1759377381,{"a":".pb,\n.pb0"}],[1630618492,{"a":"#rt-sidebar-b"}],[2090991733,{"a":".ad-wrapper,\n.widget_caravanlehti-ad,\nmain section.block-notices"}],[420675744,{"a":"div[data-recommendation-type=\"undefined\"]"}],[875684218,{"a":".poppartners"}],[613189520,{"a":".wrepper.mx-auto > .row[style=\"margin-bottom:20px\"]"}],[816773349,{"a":"[style=\"margin:-15px -15px 15px -15px;text-align:center; min-height: 250px;\"],\n[style=\"margin:-15px -15px 15px -15px;text-align:center; min-height: 300px;\"]"}],[1386122248,{"a":"div[class^=\"undefined\"]"}],[132721564,{"a":".ni_holder"}],[1775532200,{"a":".js-fragment-web-lazy_carousel"}],[1839093882,{"a":"._ning_outer"}],[1913790387,{"a":"[id|=\"undefined\"]"}]]);

const hostnamesMap = new Map([["aksa.fi",1716618447],["alfatvuutiset.fi",1643946965],["alibi.fi",[1279932997,1983639175]],["hymy.fi",1983639175],["alueviesti.fi",25055732],["anna.fi",[838549434,1550673920,865563638]],["kaksplus.fi",1550673920],["keskustelu.kaksplus.fi",865563638],["apteekkari.fi",1161835485],["apu.fi",310445722],["fonecta.fi",[310445722,1386122248]],["lily.fi",310445722],["meillakotona.fi",310445722],["terve.fi",310445722],["arvopaperi.fi",[1119115352,1190147938]],["kauppalehti.fi",1190147938],["mediuutiset.fi",1190147938],["mikrobitti.fi",1190147938],["talouselama.fi",1190147938],["tekniikkatalous.fi",1190147938],["tivi.fi",1190147938],["uusisuomi.fi",1190147938],["audiovideo.fi",916777347],["auto1.fi",[1208962608,1453704581,1798348872]],["ilmainensanakirja.fi",[1453704581,1798348872,1759377381]],["telsu.fi",[1453704581,1798348872,1759377381]],["testeri.fi",[1453704581,1798348872]],["blogit.fi",[1798348872,1759377381]],["avecmedia.fi",1235583005],["bittiraha.fi",859011640],["bomber.fi",1630618492],["caravan-lehti.fi",2090991733],["como.fi",[420675744,875684218]],["episodi.fi",[420675744,875684218]],["fum.fi",[420675744,875684218]],["inferno.fi",[420675744,875684218]],["rumba.fi",[420675744,875684218]],["soundi.fi",[420675744,875684218]],["tilt.fi",420675744],["dailyfinland.fi",613189520],["dawn.fi",816773349],["demokraatti.fi",1386122248],["esaimaa.fi",1386122248],["gamereactor.fi",1386122248],["ita-savo.fi",1386122248],["kouvolansanomat.fi",1386122248],["kymensanomat.fi",1386122248],["lansi-savo.fi",1386122248],["ls24.fi",1386122248],["mobiili.fi",1386122248],["satakunnankansa.fi",1386122248],["seiska.fi",1386122248],["suomi24.fi",1386122248],["keskustelu.suomi24.fi",1386122248],["www.suomi24.fi",1386122248],["uutisvuoksi.fi",1386122248],["download.fi",132721564],["duunitori.fi",1775532200],["edgeski.fi",[1839093882,1913790387]],["foregolf.fi",1913790387],["hinta.fi",1913790387],["rodeosnow.fi",1913790387],["vertaa.fi",1913790387]]);

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
