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

// nor-0

const argsMap = new Map([[901584462,{"a":".content_right_medium_rect_ad_box,\n.do_not_print.article_teaser_no_border"}],[1161926218,{"a":"#top-banner,\n.adsenseblock,\n.font-robotoregular.font10,\n.index-banner,\ndiv[data-glade]"}],[967347719,{"a":"section.article__adblock"}],[1806805520,{"a":".dfp-top-wrp-wide,\n.dfp_front_special_ad,\n.padtop15.row,\n.text-center.col-md-4,\n.text-center.sidebar-module-inset,\ndiv[class^=\"undefined\"][class*=\"undefined\"],\ntd[colspan=\"6\"]:not([class])"}],[1701625403,{"a":"#top-header-partner"}],[643064268,{"a":".adslot-tag"}],[2121661535,{"a":".article-content > div[style^=\"undefined\"]"}],[1956839326,{"a":"#Abox.AminoBox,\n#top-shadow-pad,\n.ad624-60,\n.ad624x60,\n.topAd930x180"}],[1506604980,{"a":"body > div[style^=\"text-align: center;\"]"}],[1039609607,{"a":".Ad"}],[1549567353,{"a":".article-bottom .qx-inner > .qx-section:last-of-type,\n.t3-sl"}],[545663659,{"a":".text_box,\n.top_header"}],[1516323025,{"a":".paywall-wrapper:before"}],[1048285286,{"a":".vip-finance"}],[575708896,{"a":"#leftFloatingBanner,\n#rightFloatingBanner,\n.container-featured + .container:last-of-type,\n.recbanner300x250"}],[2065653853,{"a":".mb-50.text-center"}],[598907750,{"a":"#dstop,\n._adr_abp_container"}],[121928754,{"a":"#selvsalg-reklame"}],[1346189703,{"a":".code-block"}],[1077478211,{"a":".dfp,\n.indent-wrapper > .overlay,\n.native-ads,\n.native-ads-item,\n.side-banner,\n[href*=\"://borsen.dk/sponsoreret\"]"}],[1479126226,{"a":"#right_container > .right_content:nth-of-type(1n+2)"}],[1032224875,{"a":".article-container > .row > .sidebar,\n.dre-item--feature-e-commerce,\n.hidden-md-down,\n.hidden-sm-down,\n.injecton-banners-container,\n.sidebar.col-xl-4.col-lg-4.col-md-12.col-sm-12.col-xs-12"}],[656820373,{"a":".grid-article-sponsored"}],[1889536289,{"a":".region-header,\n.region-sidebar-second > div:first-of-type"}],[335213893,{"a":"#computerworldleaderboard,\n.candis-spot,\n.paragraphAd"}],[619924784,{"a":".ad"}],[35669471,{"a":".adblock"}],[804890989,{"a":".col-sticky > div > p,\n.col-sticky > p"}],[400954731,{"a":".banner-megaboard-top,\n.pushBelow.pushAbove,\ndiv.no-print.hidden-xs.row"}],[2097022885,{"a":".marketing-container"}],[1143505844,{"a":".grid__column--12.grid__placement,\n.grid__sticky-block"}],[670439273,{"a":".e-banner"}],[877390658,{"a":"#banner-zone-1"}],[1000153924,{"a":"#nordea-beregner,\n.alert-offers"}],[1880780511,{"a":"#banners_left,\n#banners_right"}],[2001939286,{"a":"#top_banner"}],[220791411,{"a":".fade-out"}],[1542093388,{"a":".add-container"}],[1010769126,{"a":"#ban_200x200"}],[222250181,{"a":"#ebcontentMegaboard"}]]);

const hostnamesMap = new Map([["fl-arena.de",901584462],["fla.de",1161926218],["dk",967347719],["123mc.dk",1806805520],["3point.dk",1701625403],["aarhusupdate.dk",643064268],["altomcamping.dk",2121661535],["amino.dk",1956839326],["autouncle.dk",1506604980],["avisen.dk",1039609607],["baadmagasinet.dk",1549567353],["babyklar.dk",545663659],["berlingske.dk",1516323025],["bilbasen.dk",1048285286],["bilgalleri.dk",575708896],["bobedre.dk",2065653853],["bo-bedre.no",2065653853],["bold.dk",598907750],["boligdebatten.dk",121928754],["boosted.dk",1346189703],["isolor.no",1346189703],["storfjordnytt.no",1346189703],["thetravelinspector.no",1346189703],["borsen.dk",1077478211],["bossman.dk",1479126226],["bt.dk",1032224875],["building-supply.dk",656820373],["jernindustri.dk",656820373],["licitationen.dk",656820373],["byggeplads.dk",1889536289],["magasinetgulv.dk",1889536289],["officeplusdesign.dk",1889536289],["computerworld.dk",335213893],["connery.dk",619924784],["mmm.dk",619924784],["skagensavis.dk",619924784],["spilcomputer.dk",619924784],["1881.no",619924784],["bygg.no",619924784],["e24.no",619924784],["golferen.no",619924784],["kino.no",619924784],["kystogfjord.no",619924784],["reavisa.no",619924784],["smakmagasinet.no",619924784],["smartmeny.no",619924784],["ut.no",619924784],["vg.no",619924784],["dagbladet-holstebro-struer.dk",35669471],["fyens.dk",35669471],["hsfo.dk",35669471],["jv.dk",35669471],["lydogbillede.dk",35669471],["stiften.dk",35669471],["ugeavisen.dk",35669471],["viborg-folkeblad.dk",35669471],["lydogbilde.no",35669471],["dagens.dk",804890989],["dagensbyggeri.dk",400954731],["dba.dk",2097022885],["dbrs.dk",1143505844],["degulesider.dk",670439273],["krak.dk",670439273],["gulesider.no",670439273],["denstoredanske.dk",877390658],["dingeo.dk",1000153924],["dk-kogebogen.dk",[1880780511,2001939286]],["shareholders.dk",2001939286],["dknyt.dk",220791411],["kommunen.dk",220791411],["dmi.dk",1542093388],["docplayer.dk",1010769126],["ebcontent.dk",222250181]]);

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
