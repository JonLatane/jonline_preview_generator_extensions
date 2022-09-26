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

const argsMap = new Map([[107000943,{"a":".preview-gradient,\n.row > .d-lg-block"}],[1770568071,{"a":"#contents-wrap > .block-wrap-columns,\n.\\35 00Add:not(.homepage-video-area),\n.ad:before,\n.adsbygoogle,\n.article-ad-video,\n.fifth-article-ad,\n.itavi-after-content,\n.itavi-article-page-video-player-outstream,\n.itavi-homepage-video-player-instream,\n.td-adspot-title,\n.td-c-loop-ad,\n.td-header-ad-wrap"}],[496482196,{"a":".bannergroup"}],[1499113771,{"a":".floatRight.columns"}],[1923999774,{"a":".top-profile.row"}],[143130131,{"a":".articles .bannerlocation,\n.bannerlocatixxxxon,\n.thearticlecontent > .bannerlocation,\n.wallpaperad"}],[1963500050,{"a":".column-banner-ads"}],[182489260,{"a":".strossle-container"}],[972783229,{"a":".overflow-hidden.hidden,\n.sidebar-box,\naside > .overflow-hidden.mb-6"}],[12103684,{"a":".prl-span-12 + h5"}],[1111795457,{"a":".center.size-100:not(.nopaddingall)"}],[164081131,{"a":".ehm-megaboard,\ndiv[class*=\" ehm-affiliate-\"]"}],[5155649,{"a":".disableFocus > .kbSkip + .container"}],[532640260,{"a":"a[title*=\"undefined\"]"}],[1698985202,{"a":".spklw-post-attr[data-content-source]"}],[1997373220,{"a":".adLarge"}],[89499240,{"a":"#horizontal-outer-widgets-1,\n#horizontal-outer-widgets-2,\n#text-14"}],[1320510845,{"a":"#sticky,\n.overskrift_naeringsinnhold"}],[1378728148,{"a":".avisa-widget"}],[905929935,{"a":".ad-toppbanner-article"}],[1991147342,{"a":".g"}],[572218129,{"a":".advert-container-inline,\n.advert-horseshoe"}],[1351821229,{"a":".advertising"}],[1724832244,{"a":".preview-overlay"}],[1888888158,{"a":".centered:not(#toTop),\n.spklw-widget"}],[1152161622,{"a":".article-container.locked:after"}],[666204237,{"a":".category-annonse,\n.dfp_mod"}],[960650820,{"a":"#topover,\n#topover-loader,\n.skyskraper-container,\n[param-editionid=\"undefined\"]"}],[1964664828,{"a":"div[class=\"undefined\"]"}],[438049588,{"a":".forsideInnhold,\n.forsideReklame,\n.forsideReklame2"}],[1026705628,{"a":".td-fix-index"}],[1380757218,{"a":"#g_image4,\ntable"}],[828703328,{"a":".spacerDesktop"}],[467786206,{"a":".ygg-base-article + .x10"}],[1538910591,{"a":".widget-annonse"}],[1184750268,{"a":".rightbanner,\n.toppbanner"}],[1364574688,{"a":"a[href=\"../html/gratis_no.html\"],\nbody > div > table > tbody > tr > td > table > tbody > tr > td:nth-of-type(2):last-of-type,\nbody > table > tbody > tr > td:nth-of-type(2):last-of-type"}],[1937731516,{"a":"#sidebar_2 #sidebarelement_2"}],[1063032931,{"a":".classified-ads"}],[989456380,{"a":".index_extadsm"}]]);

const hostnamesMap = new Map([["intrafish.no",107000943],["itavisen.no",1770568071],["kanalen.no",496482196],["klikk.no",1499113771],["kode24.no",1923999774],["kondis.no",143130131],["koplr.no",1963500050],["kreativeideer.no",182489260],["kreativtforum.no",972783229],["krs247.no",12103684],["ksu.no",1111795457],["forum.kvinneguiden.no",164081131],["kyst.no",5155649],["skipsrevyen.no",5155649],["latterkula.no",532640260],["liverpool.no",1698985202],["magasinetreiselyst.no",1997373220],["marsteinen.no",89499240],["matoppskrift.no",1320510845],["mc-avisa.no",1378728148],["medier24.no",905929935],["melkoghonning.no",1991147342],["minmote.no",572218129],["mittkongsvinger.no",1351821229],["morgenbladet.no",1724832244],["musikknyheter.no",1888888158],["nationen.no",1152161622],["nattogdag.no",666204237],["nettavisen.no",960650820],["nickelodeon.no",1964664828],["nocc.no",438049588],["norgesavisen.no",1026705628],["xstra.no",1026705628],["norskenettsider.no",1380757218],["norskkalender.no",828703328],["nt24.no",467786206],["nyereiselivsavisen.no",1538910591],["nyteknikk.no",1184750268],["onlineaviser.no",1364574688],["opn.no",1937731516],["opp.no",1063032931],["oppdrettstorget.no",989456380]]);

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
