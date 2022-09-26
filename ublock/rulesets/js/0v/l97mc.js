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

const argsMap = new Map([[1123347168,{"a":".top-interstitial"}],[1988723879,{"a":"#e-header > div[style^=\"undefined\"],\n#related-i,\n#st-back,\n#st-bottom,\n.narrow-banner"}],[222704515,{"a":"div[class*=\"undefined\"]"}],[164891820,{"a":".print-to-web-row"}],[1890158342,{"a":"#header"}],[1657323982,{"a":".textwidget"}],[1318145204,{"a":".sleeknote-anchor,\ndiv[style=\"width: 100%;\"],\ndiv[style=\"width: 100%;\"] + p"}],[2042400006,{"a":".ad--monster,\n.card.stopsign__article.stopsign:before,\n.js-sticky-container.col--overflow,\n.u-clearfix.row--justify-center.row > .js-sticky-container"}],[1960080606,{"a":"div[data-is-absolute-layout][style^=\"top:;\"],\ndiv[id^=\"undefined\"]:not([class],[style]),\nwix-iframe"}],[259412385,{"a":"#footer_header,\n.desktop-inline-ad,\n.outsider-ads"}],[598603988,{"a":".banner_300"}],[689401575,{"a":"#topads"}],[377015215,{"a":".TopBanner,\ndiv[style^=\"float:right;width:300px\"]"}],[1890665544,{"a":".td-header-header"}],[166785521,{"a":".an-unit"}],[1719632220,{"a":".partnersites,\na[href=\"/blog\"]"}],[1661233187,{"a":".fusion-row .code-block"}],[301911133,{"a":".frontpage-nordea"}],[912161228,{"a":"#left_section,\n#right_section"}],[1856841376,{"a":".apn-banner"}],[1834542918,{"a":".frontbanner"}],[1881427349,{"a":".auto_expandable[style$=\";margin-top:172px\"],\n.scroller"}],[479378736,{"a":".view-cf-skf-avisannoncer"}],[653159953,{"a":".first_paragraph_banner"}],[38495649,{"a":".centerMgfx,\n.top_b_display"}],[411577183,{"a":"#linkbox"}],[1476472220,{"a":"#lpc_belowArticle_1,\n#lpc_belowArticle_3"}],[98658090,{"a":".boxl"}],[1658377986,{"a":"#topbanner_container"}],[1377091475,{"a":".c-single__box-inset,\n.concept_banners-tag-wrapper,\n.h-background-color-gray-background,\nmain > section.l-padding-top-lg"}],[1812484381,{"a":".desktop_element.promo,\n.logos,\n.tabs_placeholder"}],[1298449676,{"a":".pages-container__element:first-of-type"}],[322056604,{"a":".tm-main-top,\n.widget_widgetkit"}],[1775019484,{"a":".top__banner"}],[299596547,{"a":".aff-inner-col"}],[376448692,{"a":".flickity-viewport,\ndiv.col-s-100.col-50:nth-of-type(2)"}],[1780401784,{"a":".o-article_sidebar > div.g-item"}],[388044153,{"a":".channelHeaderLogo"}],[1558333338,{"a":".ufl-banner"}],[1674404541,{"a":".ad-comments"}]]);

const hostnamesMap = new Map([["newz.dk",1123347168],["ni.dk",1988723879],["nordjyske.dk",[222704515,164891820]],["f7.no",222704515],["startsiden.no",222704515],["onlineposten.dk",[1890158342,1657323982]],["transitmag.no",1657323982],["peters1.dk",1318145204],["politiken.dk",2042400006],["presse-fotos.dk",1960080606],["prisjagt.dk",259412385],["pslife.dk",598603988],["pulze.dk",689401575],["realmadrid.dk",377015215],["recordere.dk",1890665544],["rejsespejder.dk",166785521],["ridr.dk",1719632220],["rykindribe.dk",1661233187],["selvsalg.dk",301911133],["shareholders.dk",912161228],["side6.dk",1856841376],["skagafm.dk",1834542918],["skagensavis.dk",1881427349],["skivefolkeblad.dk",479378736],["sn.dk",653159953],["sofabold.dk",38495649],["sol.dk",411577183],["stiften.dk",1476472220],["sundhedslex.dk",98658090],["superchat.dk",1658377986],["tipsbladet.dk",1377091475],["tnt-tv.dk",1812484381],["tnt-tv.no",1812484381],["travelmarket.dk",1298449676],["travservice.dk",322056604],["trendsales.dk",1775019484],["triplx.dk",299596547],["tv-kalundborg.dk",376448692],["nyheder.tv2.dk",1780401784],["tv3.dk",388044153],["ugeskriftet.dk",1558333338],["ukendtnummer.dk",1674404541],["telefonterror.co.no",1674404541]]);

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
