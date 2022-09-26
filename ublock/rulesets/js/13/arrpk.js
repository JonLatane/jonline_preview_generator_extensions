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

const argsMap = new Map([[1980310104,{"a":".hide-from-print.banner-module.module"}],[1530981424,{"a":".adform-flexblock"}],[1546213425,{"a":".bottom_banner_div"}],[1085307872,{"a":".banner-text"}],[1777876939,{"a":"#headersub"}],[1611349881,{"a":"#seealladv"}],[458154984,{"a":".vev"}],[1736100245,{"a":"#footer-adds"}],[1977048404,{"a":"#sticky_ad"}],[1757990428,{"a":".vev-wrap"}],[390160072,{"a":".mobile-hide[class*=\" banner-\"],\n.row > .mobile-hide"}],[1058514014,{"a":"#the_banners,\n.lysingarspot"}],[1949316554,{"a":".panels-flexible-row-grein-rnd-13"}],[865157908,{"a":"#ease_adgroup_3,\ncolumn[class*=\"undefined\"]:not([collapse])"}],[488815299,{"a":".adgroup--component[collapse=\"undefined\"]"}],[1847116908,{"a":"#sidebar_asside > a,\n#top_vev,\n.ablock,\n.full-width-vev.all"}],[355772857,{"a":"div[id*=\"undefined\"]"}],[1586373473,{"a":"#__next > div:not([class],[id])"}],[1142861307,{"a":".add"}],[591831462,{"a":".augl"}],[198482526,{"a":".g-dyn"}],[1087728510,{"a":".main-post,\n.owl-stage-outer"}],[1389287696,{"a":".g-single"}],[121901896,{"a":".banneritem,\n.lowerad,\n.upperad"}],[1847476553,{"a":".wpb_content_element"}],[1898620887,{"a":".ticker"}],[825549596,{"a":".ad-310x400"}],[1178054850,{"a":".strevda"}],[404566845,{"a":".wpb_raw_code"}],[654863682,{"a":".td-pb-span6"}],[715118217,{"a":".x-box-inner > .x-panel-noborder:not(.x-grid-panel)"}],[809453257,{"a":".h-banner"}],[1926848862,{"a":".widget[class*=\"undefined\"]:not([id*=\"undefined\"])"}],[1633382347,{"a":"article .tdc-row:first-of-type,\nsection[id^=\"undefined\"]"}],[1948349158,{"a":".kostad-efni"}],[489880709,{"a":"div.col-xs-4.items:nth-of-type(5) > .box"}],[1603078224,{"a":".banner-right"}],[1663992746,{"a":".textwidget > center"}],[1714618036,{"a":"#banners"}],[1725724086,{"a":".big_spons,\n.spons"}]]);

const hostnamesMap = new Map([["uniavisen.dk",1980310104],["vafo.dk",1530981424],["valutakurser.dk",1546213425],["m.valutakurser.dk",1085307872],["version2.dk",1777876939],["xklub.dk",1611349881],["brudleyp.fo",458154984],["hvat.fo",[458154984,1757990428]],["fiskur.fo",1736100245],["portal.fo",[1736100245,1847116908]],["roysni.fo",1736100245],["gaming.fo",1977048404],["in.fo",390160072],["jn.fo",1058514014],["kvf.fo",1949316554],["nordlysid.fo",[865157908,488815299]],["r7.fo",355772857],["familieklubben.no",355772857],["sona.fo",1586373473],["torg.fo",1142861307],["1819.is",591831462],["finna.is",591831462],["audlindin.is",[198482526,1087728510,1389287696]],["utvarpsaga.is",[198482526,1663992746]],["eirikurjonsson.is",1389287696],["arendalstidende.no",1389287696],["sorlandsavisen.no",1389287696],["verktoy24.no",1389287696],["austurfrett.is",121901896],["bb.is",1847476553],["dv.is",1898620887],["doktor.frettabladid.is",825549596],["heilsutorg.is",1178054850],["hestafrettir.is",404566845],["karfan.is",654863682],["keldan.is",715118217],["lindaben.is",809453257],["midjan.is",1926848862],["nutiminn.is",1633382347],["skessuhorn.is",1948349158],["sporttv.is",[489880709,1603078224]],["utdanningsnytt.no",1603078224],["vaktin.is",1714618036],["vb.is",1725724086]]);

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
