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

// irn-0

const argsMap = new Map([[714480894,{"a":".ads-box"}],[383118904,{"a":"#NR-Ads"}],[354370320,{"a":".col-xs-36.col-sm-4.col-md-4.col-lg-4,\n.hidden-xs.col-sm-4.col-md-4.col-lg-4"}],[368034941,{"a":".stream-item-top-wrapper"}],[560737909,{"a":"#block-3,\n#block-4,\nli:has([href^=\"https://jalebamooz.com/reportage/\"])"}],[590863436,{"a":".widget_custom_html,\naside:nth-of-type(2)"}],[1699911527,{"a":"#table10,\n#table10 > tbody > tr > .textBoldColor,\n#table4 > tbody > tr > td > table > tbody > tr > td > center,\n.bgleftmenu > div > div,\ntable#table9.bgtable:nth-of-type(13)"}],[1361645131,{"a":"div.white-block:nth-of-type(2)"}],[331509027,{"a":"[href^=\"/nf/sponsor/\"]"}],[1858685571,{"a":"[class^=\"zxc\"]"}],[1866624865,{"a":".sticky_notify"}],[1359343420,{"a":"#ads_f,\n#banners_120_top_1,\n#block-block-120,\n.track-click"}],[1424688190,{"a":".peyvand,\n[href*=\"/advertisements/\"]"}],[505347752,{"a":"div.rbox:nth-of-type(1)"}],[1933442835,{"a":".mobile-fixed-banner"}],[101134551,{"a":".ads-placment"}],[35142465,{"a":".advertisement-in-topic,\n.banner-wrapper,\n.homepage-content,\n.mobileBanner"}],[1281934666,{"a":".article-mobile-inContent,\n.bannercontainer"}],[1378535640,{"a":".msg_ad_explain,\n.msg_ad_pictorial,\n.msg_ad_subject"}],[1055932812,{"a":"#custom_html-4,\n#text-31,\n#text-35,\n.adbar"}],[181972808,{"a":"#text-13,\n.adwrap-widget"}],[429470854,{"a":"#ads-container"}],[1805027772,{"a":".alert-new,\n.text-center.mt-3.py-3.bg-all-box"}],[2041635110,{"a":".mdiaad,\nsection.sidebox:nth-of-type(4)"}],[857253670,{"a":".widget_text.widget"}],[728434679,{"a":".sponsors"}],[1589475164,{"a":"#sponsor_wrapper,\ndiv.banner_v"}],[1714443970,{"a":"div.sidebar_item:nth-of-type(5)"}]]);

const hostnamesMap = new Map([["itgheymat.com",714480894],["itresan.com",383118904],["jahannews.com",354370320],["jalebamooz.com",[368034941,560737909]],["vgdl.ir",368034941],["jesarat.com",590863436],["k2cod.com",1699911527],["ketabesabz.com",1361645131],["khabarban.com",331509027],["khabareazad.com",[1858685571,1866624865]],["mosalasonline.com",1866624865],["khabarfarsi.com",1359343420],["khabarfoori.com",1424688190],["khabarpu.com",505347752],["khodrobank.com",1933442835],["kilipo.com",101134551],["kojaro.com",[35142465,1281934666]],["zoomit.ir",1281934666],["lamtakam.com",1378535640],["lenzak.com",1055932812],["majalesalamat.com",181972808],["mehrnews.com",429470854],["imna.ir",429470854],["mihandownload.com",1805027772],["mihanfal.com",2041635110],["mihangame.com",857253670],["mihanmarket.com",728434679],["news.mihanmarket.com",1589475164],["moderndl.com",1714443970]]);

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
