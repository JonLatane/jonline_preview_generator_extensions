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

// hun-0

const argsMap = new Map([[1838392443,{"a":"[src*=\"/banner/\"]"}],[921534635,{"a":"[id*=\"float\"]"}],[2078879408,{"a":"#column-left-inner,\n[id*=\"HTML\"]"}],[1025840392,{"a":"#HTML1,\n#HTML111,\n#HTML8,\n#LinkList94,\n#SC_TBlock_342633_Table,\n#header-blog"}],[1773979886,{"a":"#HTML5"}],[162076520,{"a":"#article_end_popup,\n.banner.boxed"}],[1516857235,{"a":"#rstbox_2"}],[1841531430,{"a":"#a1,\n#a2"}],[1797103795,{"a":"#onetrust-banner-sdk"}],[1521983883,{"a":"#eu-cookie-law,\n#facebook-likebox-8,\n.wpcnt"}],[295673050,{"a":"[class*=\"advert\"]"}],[804568053,{"a":".ctsGadx"}],[595335489,{"a":"#webaruhaz-ajanlo,\n.hashtags,\n.wrap,\nTD[id*=\"l_sponsor\"],\n[class*=\"adv_\"]"}],[335764756,{"a":"[class*=\"adtext\"]"}],[647803604,{"a":".fb-exit-popup-container"}],[1569080768,{"a":"#facebook-sharebar"}],[1235814721,{"a":"#fanback"}],[1203185223,{"a":"#permission-bar,\n.fu-container,\n.sample,\n[href*=\"hirdetes\"],\na[href*=\"adf.ly\"],\na[style=\"text-decoration:none;\"],\ntable[bgcolor=\"darkgray\"]"}],[1065919337,{"a":".content-list.content-body > .recommendation-holder,\n.content-text > .recommendation-holder,\n.left-column.col-md-8.col-sm-12 > .recommendation-holder,\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(1),\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(2),\n.top-column.col-xs-12 > .recommendation-holder,\ni > .recommendation-holder:nth-of-type(1),\ni > .recommendation-holder:nth-of-type(2)"}],[1661598242,{"a":".tqWLsnEEqeEw-bg,\n[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.85098); display: block;\"]"}],[394723954,{"a":"[style=\"background: rgb(255, 255, 255); max-width: 720px; z-index: 9999999; opacity: 1; visibility: visible;\"]"}],[303274175,{"a":"[data-zadtype=\"billboard\"],\ndiv.mobileArticleAds"}],[1603560166,{"a":"DIV[id*=\"banner\"]"}],[1090986442,{"a":"[class*=\"banner\"]"}],[1490822633,{"a":"[app=\"tibrr-cookie-consent\"],\n[class^=\"k\"][class*=\"-container\"][class*=\"-2\"][class$=\"-hide\"]"}],[231386251,{"a":".bpkad"}],[1031023642,{"a":"A[href^=\"http://goo.gl\"]"}],[1077971146,{"a":"[class*=\"reklam\"]"}],[354895101,{"a":"[id*=\"reklam\"]"}],[1333840329,{"a":"[id*=\"banner\"]"}],[454461036,{"a":"DIV[class*=\"etarget\"]"}],[1995634948,{"a":"DIV[class*=\"banner\"]"}],[1647454227,{"a":"[class*=\"pea_cook\"]"}],[1927706316,{"a":"[style=\"width:300px;height:250px;\"]"}],[275705368,{"a":"[class*=\"advertisement\"]"}],[1517132715,{"a":"#text-3"}],[960851570,{"a":"[class^=\"ad-\"]"}],[1674521709,{"a":"A[href*=\"=banner\"]"}]]);

const hostnamesMap = new Map([["trollfesz.cc",[1838392443,921534635]],["privatbankar.hu",1838392443],["freewaresoftwarenews.blogspot.com",2078879408],["hir444.blogspot.com",[1025840392,1773979886]],["polusonline.com",1773979886],["carstyling.com",162076520],["csajoknak.com",1516857235],["dictzone.com",1841531430],["eredmenyek.com",1797103795],["gumiszoba.com",1521983883],["hazipatika.com",[295673050,804568053,595335489,335764756,647803604,1569080768]],["delmagyar.hu",[295673050,1333840329]],["kisalfold.hu",[295673050,1603560166]],["mindenkilapja.hu",295673050],["sg.hu",295673050],["nlcafe.hu",[804568053,1090986442]],["mobilarena.hu",335764756],["24.hu",647803604],["babaszoba.hu",1569080768],["hirkosar.com",1235814721],["hosszupuskasub.com",[1235814721,1203185223]],["humormagazin.com",1065919337],["hungliaonline.com",[1661598242,394723954]],["vilagunk.hu",394723954],["hu.ign.com",303274175],["ingatlan.com",1603560166],["data.hu",1603560166],["harmonet.hu",1603560166],["index.hu",1603560166],["klubradio.hu",1603560166],["portfolio.hu",1603560166],["ingatlanmagazin.com",1090986442],["revizoronline.com",[1090986442,1333840329]],["444.hu",1090986442],["autopro.hu",1090986442],["bitport.hu",[1090986442,1333840329]],["blogstar.hu",1090986442],["builder.hu",1090986442],["chat.hu",[1090986442,1333840329]],["cotcot.hu",1090986442],["dimo.hu",1090986442],["donna.hu",[1090986442,1333840329]],["epresso.hu",1090986442],["eropolis.hu",1090986442],["es.hu",[1090986442,1333840329]],["est.hu",1090986442],["farm.hu",[1090986442,1333840329]],["femina.hu",1090986442],["figyelo.hu",1090986442],["firstman.hu",1090986442],["fn.hu",1090986442],["galamus.hu",1090986442],["gondola.hu",[1090986442,1333840329]],["gportal.hu",1090986442],["gyoricegregiszter.hu",1090986442],["gyorplusz.hu",1090986442],["hir6.hu",1090986442],["hirstart.hu",1090986442],["hrportal.hu",1090986442],["ingatlanok.hu",1090986442],["intima.hu",1090986442],["jogiforum.hu",1090986442],["kalohirek.hu",[1090986442,1333840329]],["kamaszpanasz.hu",1090986442],["kapos.hu",1090986442],["kaposvarmost.hu",1090986442],["komment.hu",[1090986442,1333840329]],["lifemagazin.hu",[1090986442,1333840329]],["lovebox.hu",1090986442],["magyarhirlap.hu",[1090986442,1333840329]],["mainap.hu",1090986442],["mfor.hu",1090986442],["mixonline.hu",1090986442],["mmonline.hu",1090986442],["mno.hu",1090986442],["moly.hu",1090986442],["napi.hu",[1090986442,1333840329]],["napiszar.hu",1090986442],["nemzetisport.hu",[1090986442,1333840329]],["nice.hu",1090986442],["noinetcafe.hu",1090986442],["noplaza.hu",1090986442],["novagyok.hu",[1090986442,1333840329]],["nyest.hu",1090986442],["origo.hu",[1090986442,1333840329,960851570]],["partyponty.hu",[1090986442,1333840329]],["prim.hu",1090986442],["retikul.hu",1090986442],["ricsajok.hu",1090986442],["rtlklub.hu",1090986442],["samsungsport.hu",1090986442],["sporthirado.hu",[1090986442,1333840329]],["szoftverbazis.hu",1090986442],["tech.hu",[1090986442,1333840329]],["valasz.hu",1090986442],["vidget.hu",1090986442],["weborvos.hu",1090986442],["wellnesscafe.hu",1090986442],["kronika.ro",1090986442],["sportoldal.ro",1090986442],["szatmar.ro",1090986442],["deres.tv",1090986442],["karpathir.com",1490822633],["kekfeny.com",231386251],["ketkes.com",1031023642],["magyarszo.com",[1077971146,354895101]],["puruttya.hu",1077971146],["napinemszar.hu",354895101],["myvip.com",[1333840329,454461036,1995634948]],["pdafanclub.com",1333840329],["bacsmegye.hu",1333840329],["betegvagyok.hu",1333840329],["bien.hu",1333840329],["divany.hu",1333840329],["duen.hu",1333840329],["egeszsegkalauz.hu",1333840329],["eletmod.hu",1333840329],["eron.hu",1333840329],["geeks.hu",1333840329],["hajdupress.hu",1333840329],["hg.hu",1333840329],["hirposta.hu",1333840329],["ipon.hu",1333840329],["kezilabda.hu",1333840329],["kiskegyed.hu",1333840329],["kreativ.hu",1333840329],["life.hu",[1333840329,454461036]],["multiplay.hu",1333840329],["pirulapatika.hu",1333840329],["revizoronline.hu",1333840329],["romnet.hu",1333840329],["startlap.hu",1333840329],["stylemagazin.hu",1333840329],["trademagazin.hu",1333840329],["velvet.hu",1333840329],["demotivalo.net",1333840329],["kakukk.ro",1333840329],["blog.hu",454461036],["metazin.hu",454461036],["holtankoljak.hu",1995634948],["kapcsolat.hu",1995634948],["mandiner.hu",1995634948],["nepszava.hu",1995634948],["najlepsie-clanky.com",1647454227],["napiszar.com",1927706316],["napiuzlet.com",275705368],["nemkutya.com",[1517132715,960851570]],["hir-24.eu",1517132715],["joy.hu",960851570],["netfirms.com",1674521709]]);

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
