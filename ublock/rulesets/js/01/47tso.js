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

const argsMap = new Map([[308303443,{"a":"[class=\"undefined\"][style=\"padding-top:15px;\"]"}],[767356960,{"a":"div.nc_r_banner"}],[460240545,{"a":"#smallViewHouseBanner"}],[1435101362,{"a":"#offer,\n#tulos-etu"}],[1106283859,{"a":".samBannerUnit,\n.samCodeUnit,\n.td-header-sp-recs"}],[1819460139,{"a":".js-notices.notices--block.notices"}],[1485575489,{"a":"#nav + div[style=\"min-height:250px;text-align:center\"]"}],[1263010729,{"a":".views-injected-row"}],[2078889799,{"a":"[id^=\"undefined\"]"}],[745128849,{"a":"#bookingnostokuvasarjassa,\n#pm_mp_kotisivu"}],[1085548069,{"a":".adv_ads_ad_unit"}],[1750990365,{"a":"center"}],[871543574,{"a":".banner-slot-preroll"}],[225177659,{"a":"div[id=\"undefined\"]"}],[444499719,{"a":"[href^=\"http://ads.leovegas.com/\"],\n[href^=\"http://www.primeslots.com/\"],\ndiv[style=\"font-size:14px;line-height:21px;padding-top:6px;\"],\ndiv[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"] + [type=\"text/javascript\"] + div,\ndiv[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"] + table[width=\"468\"] + div,\nscript[src^=\"http://adserving.unibet.com/ad.aspx\"] + div[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"],\ntable[width=\"468\"]"}],[1148351382,{"a":"[data-bottom-floater]"}],[971798434,{"a":"[href$=\"/nettikasinot/\"]"}],[1471801346,{"a":"a[href^=\"https://on.vallila.fi/\"],\np a[href^=\"https://related.iittala.com/\"]"}],[561094200,{"a":".adf-placement-top"}],[893174484,{"a":".annons"}],[618163063,{"a":".panorama-wrapper"}],[269963698,{"a":"#mvp-leader-wrap,\n.clever-core-ads"}],[1821877814,{"a":"#text-8,\n#text-9"}],[1351821229,{"a":".advertising"}],[2118387670,{"a":"#header ~ .xl\\:pr-sideAdOffset.bg-softwall"}],[96695932,{"a":"article[class|=\"undefined\"]"}],[25968640,{"a":"#bottomBanner,\n.parade-ad.ad,\narticle[class*=\"native-ad\"]"}],[1312938822,{"a":"[data-info-container-text^=\"MAINOS\"]"}],[1772600631,{"a":"div[class$=\"undefined\"]"}],[2057748862,{"a":"[href=\"/tilaa-lehti\"]"}]]);

const hostnamesMap = new Map([["www.nettimarkkina.com",308303443],["www.nettimokki.com",767356960],["www.nettimoto.com",460240545],["nopeustesti.com",1435101362],["pakkotoisto.com",1106283859],["keskustelu.pakkotoisto.com",1819460139],["palkkavertailu.com",1485575489],["pelaajalehti.com",1263010729],["pienimatkaopas.com",[2078889799,745128849]],["cdon.fi",2078889799],["hs.fi",[2078889799,2118387670,96695932]],["rahakirstu.com",1085548069],["sammysatv.com",1750990365],["karjalainen.fi",1750990365],["ap-cdn.sanomagames.com",871543574],["sportti.com",[225177659,444499719]],["historianet.fi",225177659],["maalampofoorumi.fi",225177659],["mikrobitti.fi",225177659],["raahenseutu.fi",225177659],["rakentaja.fi",225177659],["tori.fi",225177659],["vapaavuoro.uusisuomi.fi",225177659],["suomif1.com",1148351382],["suomifutis.com",[1148351382,971798434]],["suomikiekko.com",1148351382],["valioliiga.com",1148351382],["terveydenasialla.com",1471801346],["tinderinparhaat.com",561094200],["tvmatsit.com",[893174484,618163063]],["ehandel.fi",893174484],["uutisankka.com",269963698],["viikonloppu.com",1821877814],["vuokraovi.com",1351821229],["finnkino.fi",1351821229],["fum.fi",1351821229],["tilt.fi",1351821229],["aamulehti.fi",[2118387670,96695932,25968640]],["jamsanseutu.fi",[96695932,25968640]],["janakkalansanomat.fi",[96695932,25968640]],["kankaanpaanseutu.fi",[96695932,25968640]],["kmvlehti.fi",[96695932,25968640]],["merikarvialehti.fi",[96695932,25968640]],["nokianuutiset.fi",[96695932,25968640]],["rannikkoseutu.fi",[96695932,25968640]],["satakunnankansa.fi",[96695932,25968640]],["suurkeuruu.fi",[96695932,25968640]],["sydansatakunta.fi",[96695932,25968640]],["tyrvaansanomat.fi",[96695932,25968640]],["valkeakoskensanomat.fi",[96695932,25968640]],["aamuposti.fi",1312938822],["esaimaa.fi",1312938822],["ess.fi",1312938822],["forssanlehti.fi",1312938822],["hameensanomat.fi",1312938822],["hankasalmensanomat.fi",1312938822],["heinavedenlehti.fi",1312938822],["helsinginuutiset.fi",1312938822],["iisalmensanomat.fi",1312938822],["ita-savo.fi",1312938822],["itahame.fi",1312938822],["joroistenlehti.fi",1312938822],["joutsenolehti.fi",1312938822],["juvanlehti.fi",1312938822],["kaakonkulma.fi",1312938822],["kangasniemenlehti.fi",1312938822],["karkkilantienoo.fi",1312938822],["keski-hame.fi",1312938822],["keski-uusimaa.fi",1312938822],["keskilaakso.fi",1312938822],["koillis-savo.fi",1312938822],["kouvolansanomat.fi",1312938822],["ksml.fi",1312938822],["kymensanomat.fi",1312938822],["lansi-savo.fi",1312938822],["lansi-uusimaa.fi",1312938822],["lansisaimaa.fi",1312938822],["lansivayla.fi",1312938822],["lappeenrannanuutiset.fi",1312938822],["laukaa-konnevesi.fi",1312938822],["lopenlehti.fi",1312938822],["loviisansanomat.fi",1312938822],["luoteis-uusimaa.fi",1312938822],["luumaenlehti.fi",1312938822],["mantsalanuutiset.fi",1312938822],["mattijaliisa.fi",1312938822],["miilu.fi",1312938822],["mikkelinkaupunkilehti.fi",1312938822],["nurmijarvenuutiset.fi",1312938822],["pieksamaenlehti.fi",1312938822],["pielavesi-keitele.fi",1312938822],["pitajalainen.fi",1312938822],["pitajanuutiset.fi",1312938822],["pyhtaanlehti.fi",1312938822],["sampolehti.fi",1312938822],["savonsanomat.fi",1312938822],["seinajoensanomat.fi",1312938822],["seutuneloset.fi",1312938822],["sipoonsanomat.fi",1312938822],["sisa-savolehti.fi",1312938822],["sisasuomenlehti.fi",1312938822],["sjl.fi",1312938822],["soisalonseutu.fi",1312938822],["tamperelainen.fi",1312938822],["tollotin.fi",1312938822],["turkulainen.fi",1312938822],["uusilahti.fi",1312938822],["uusimaa.fi",1312938822],["uutis-jousi.fi",1312938822],["uutisvuoksi.fi",1312938822],["vantaansanomat.fi",1312938822],["viikkosavo.fi",1312938822],["viispiikkinen.fi",1312938822],["viitasaarenseutu.fi",1312938822],["warkaudenlehti.fi",1312938822],["puruvesi.net",1312938822],["aamuset.fi",1772600631],["motouutiset.fi",1772600631],["yrittajat.fi",1772600631],["akaanseutu.fi",2057748862],["lvs.fi",2057748862],["shl.fi",2057748862],["ylojarvenuutiset.fi",2057748862]]);

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
