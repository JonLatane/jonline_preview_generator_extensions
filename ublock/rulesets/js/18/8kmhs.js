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

const argsMap = new Map([[1345083708,{"a":"#kpopup"}],[1327840562,{"a":"#sliding-popup"}],[1557009250,{"a":"[id^=\"block-views-block-banners-\"]"}],[86799539,{"a":"#HTML9"}],[1242439399,{"a":"[id*=\"etarget\"]"}],[1529539112,{"a":"[class^=\"ads\"]"}],[1600619414,{"a":"[id^=\"adchange\"]"}],[2141459970,{"a":"#alsobox"}],[1397448125,{"a":"#cookieinfo"}],[656201761,{"a":"DIV[id*=\"col_2\"]"}],[987311229,{"a":"[id*=\"advertisment\"]"}],[350544510,{"a":"#sutik"}],[673791633,{"a":"#text-4"}],[496482196,{"a":".bannergroup"}],[1908356020,{"a":"#_iph_cp_popup,\n#cookie-bar,\n#cookie-notice,\n#cookie-window,\n#cookiebar,\n#hirdetes,\n#hirdetesek,\n#qc-cmp2-container,\n.cc-banner,\n.cc-banner-wrapper,\n.cc-window,\n.cc_banner,\n.cc_banner-wrapper,\n.cc_window,\n.hird,\n.hirdetes,\n.hirdetesek,\n.qc-cmp2-container"}],[569944323,{"a":"#cookie-law,\n.banner_middle"}],[2098418396,{"a":".ads_show_ad_title"}],[1164717378,{"a":".banner-wrapper"}],[141861752,{"a":"#overlay_readers_letter,\n#stickyHomePageRecommender,\n#webPushPopup,\n.banner-container,\n.m-donationBottomLine,\n.spklw-post-attr[data-type=\"ad\"],\n.widget-mini-article"}],[1973843827,{"a":"#cookie_popup_container,\n#kummanto,\n.d1912cka,\n.d1912cza,\n.d2020kv,\n.d36-top,\n.donation,\n.ease-modal,\n.pr-box,\n.support-box,\n.text-center,\nDIV[class=\"b-image-highlight b-image-highlight-article\"],\n[class*=\"xmas\"],\n[id*=\"-banner-\"],\narticle:has(a[href*=\"hirdetes\"]),\ndiv.item:has(a[href*=\"hirdetes\"]),\ndiv.k4.g7.en.gs.gr.ek.dX > .k4.k0.g7.en.gs.gr.ek.dX"}],[140187633,{"a":"#text-5,\n#text-6"}],[1623615158,{"a":"#galsoreklam,\n#oldalreklam,\n[href=\"https://777blog.hu/reklamblokkolo-kikapcsolasa/\"],\ndiv#rechtangle.widget:nth-of-type(5)"}],[1134840949,{"a":".AdW"}],[436004048,{"a":"#cookieconsent"}],[1161198342,{"a":"#cookieBox,\n#cookieBox_bg"}],[1306718435,{"a":"#cookies-alert,\n[class^=\"zone_\"]"}],[235638737,{"a":"#g0,\n.az-layer,\n.big_badge,\n.floating-help-wrapper"}],[421191618,{"a":"[class*=\"ads\"]"}],[136978502,{"a":"#ajanlo"}],[650038224,{"a":"#alapjarat_cikk_fekvo_1,\ndiv.header + .clearfix + .clearfix"}],[1377822552,{"a":"#block-block-16,\n#block-block-22,\n#block-views-ajanlo-block,\n#sticky_footer"}],[1856528559,{"a":".ui-widget-overlay"}],[2096632309,{"a":"[aria-describedby=\"cookies-dialog\"]"}],[1518127233,{"a":"div.cikk_zona,\ndiv.rightside > iframe"}],[1936108561,{"a":".sidebar1 > div:first-child,\n[id^=\"hird_\"]"}],[1010231558,{"a":".mask,\n.showLink.reveal"}],[464784046,{"a":"[class*=\" adH\"]"}],[1084913135,{"a":"#cookie-disclaimer,\n.brandbox"}]]);

const hostnamesMap = new Map([["paleomedicina.com",1345083708],["pannonrtv.com",[1327840562,1557009250]],["elemzeskozpont.hu",1327840562],["femcafe.hu",1327840562],["polusonline.com",86799539],["svedasztal.com",[1242439399,1529539112]],["autonavigator.hu",1242439399],["eletmod.hu",1242439399],["femina.hu",1242439399],["szervuszausztria.hu",[1242439399,1529539112]],["ecoline.hu",1529539112],["teltlanyok.com",1600619414],["5mp.eu",2141459970],["autobazar.eu",1397448125],["eudomain.eu",656201761],["netbulvar.eu",987311229],["tarhely.eu",350544510],["tenyek24.eu",673791633],["utajovobe.eu",496482196],["hu",1908356020],["112press.hu",569944323],["168.hu",[2098418396,1164717378]],["bien.hu",2098418396],["24.hu",141861752],["444.hu",1973843827],["5percblog.hu",140187633],["777blog.hu",1623615158],["888.hu",[1134840949,436004048]],["ripost.hu",436004048],["ado.hu",1161198342],["adoforum.hu",1306718435],["adozona.hu",[235638737,421191618]],["eduline.hu",421191618],["kiskegyed.hu",421191618],["agrarszektor.hu",136978502],["infostart.hu",136978502],["penzcentrum.hu",136978502],["alapjarat.hu",650038224],["alfahir.hu",1377822552],["americantourister.hu",[1856528559,2096632309]],["hrportal.hu",1856528559],["raketa.hu",1856528559],["androgeek.hu",1518127233],["angol-magyar-szotar.hu",1936108561],["aranyoldalak.hu",[1010231558,464784046]],["telefonkonyv.hu",464784046],["arukereso.hu",1084913135]]);

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
