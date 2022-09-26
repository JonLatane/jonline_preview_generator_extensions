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

const argsMap = new Map([[1024617776,{"a":".flat,\n.site_ad_container"}],[1190489982,{"a":".greyed-text,\n.masthead"}],[457805416,{"a":".top-banner"}],[212572729,{"a":".stream-item"}],[329982154,{"a":".addon--ad"}],[1971601394,{"a":"#text-2"}],[2116792001,{"a":".mobiletakeover-background"}],[1462281136,{"a":"#MegaBoard_Top,\n.bpTopPlacement,\n.jp-banner,\ndiv[class*=\" jp-banner--\"]"}],[406139161,{"a":"#c1670,\n#c1671,\n#c2283,\n#c888,\n#c890,\n#knapper,\ntable[width=\"620\"],\ntd[height=\"237\"]:not([valign]),\ntd[height=\"237\"][width=\"315\"]:not(#colRight),\ntd[width=\"315\"][height=\"55\"]"}],[356080125,{"a":".OA,\n.OX"}],[867880343,{"a":".transparent-bg"}],[1228313782,{"a":".banner-top,\n.col-xs-12[style],\ndiv[style=\"padding-top: 20px; padding-bottom: 20px; \"]"}],[1830337793,{"a":".spotContainer"}],[982541433,{"a":".banner-block"}],[2137550188,{"a":"#betting_offer,\n#right_sidebar_news,\ndiv[style^=\"padding:5px; \"]"}],[471602327,{"a":".td-header-rec-wrap"}],[2102229271,{"a":".custom-annoncer-wrapper"}],[853157604,{"a":".adremark,\n.hidead,\n.lbplussinfo"}],[334036048,{"a":".madbanditten-widget"}],[1586913873,{"a":"#yb_anchor_wrapper,\n.maden-after-content,\n.maden-site-header,\n.maden-widget"}],[1836842885,{"a":".g-ads"}],[160744138,{"a":".uk-grid:not([class*=\" \"])"}],[1359647709,{"a":".region-leaderboard,\n.region-sidebar-first > .clearfix > .first"}],[25799426,{"a":".acf-block,\n.gradient-y-trans-to-white-95,\n.mega-banner"}],[1906093505,{"a":".adform"}],[1525252492,{"a":".megaboard-inner,\n.outer-skybanner"}],[123018988,{"a":"td:nth-of-type(3)"}],[191973911,{"a":"#sectionBeforeBottom"}],[1160248154,{"a":".a-single"}],[2006791295,{"a":".topAdBannerFixed,\n.vspacer"}],[1490065436,{"a":".fadeout"}],[169668788,{"a":".tower"}],[107434895,{"a":".side-block-products"}],[994781684,{"a":".content-widget-HTML"}],[260919868,{"a":"#wrapper-top"}],[1306345585,{"a":".widget_banner_ads"}],[457871741,{"a":".common-advert-bold"}],[1006512816,{"a":".ad-unit-center,\n.post-the-content > .clearfix,\n.post-the-content > div[class*=\"undefined\"]"}],[1436251488,{"a":".widget_widget_ads"}],[1527630119,{"a":".custom-html-widget.textwidget"}]]);

const hostnamesMap = new Map([["indkast.dk",1024617776],["information.dk",1190489982],["ing.dk",457805416],["in.fo",457805416],["kvennabladid.is",457805416],["historienet.no",457805416],["komputer.no",457805416],["koplr.no",457805416],["natgeo.no",457805416],["inputmag.dk",212572729],["verktoy24.no",212572729],["installator.dk",329982154],["jodelgrin.dk",1971601394],["jubii.dk",2116792001],["jyllands-posten.dk",1462281136],["kanalfrederikshavn.dk",406139161],["m.kanalfrederikshavn.dk",356080125],["kendte.dk",867880343],["kommunikationsforum.dk",1228313782],["komogvind.dk",1830337793],["kulturportalen.dk",982541433],["livescore.dk",2137550188],["localeyes.dk",471602327],["karfan.is",471602327],["lokalavisen.dk",2102229271],["lydogbillede.dk",853157604],["lydogbilde.no",853157604],["madbanditten.dk",334036048],["madensverden.dk",1586913873],["madogvenner.dk",1836842885],["vimedhund.dk",1836842885],["madridista.dk",160744138],["magasinetskolen.dk",1359647709],["markedsforing.dk",[25799426,1906093505]],["bergenkino.no",1906093505],["kimenkino.no",1906093505],["trondheimkino.no",1906093505],["maskinbladet.dk",1525252492],["matematikbogen.dk",123018988],["mediavejviseren.dk",191973911],["meremobil.dk",1160248154],["min-mave.dk",2006791295],["mm.dk",1490065436],["mobilkunden.dk",169668788],["mobil.nu",169668788],["mobilsiden.dk",[107434895,994781684,260919868]],["frisms.nu",107434895],["telepristjek.dk",260919868],["netavis.dk",1306345585],["netdoktor.dk",457871741],["newsbreak.dk",1006512816],["newz.dk",[1436251488,1527630119]],["railgun.dk",1436251488],["nutiminn.is",1527630119]]);

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
