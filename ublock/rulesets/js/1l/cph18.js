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

const argsMap = new Map([[348625254,{"a":".jquery-modal.blocker.current"}],[2123657755,{"a":".cikk-halfpage.t-article-container_sidebar > div:first-child,\n.menu-sponsor_link,\n.rovat-halfpage.t-rovat-container_sidebar > div:first-child,\n.tctk,\n[id*=\"szponzoracio\"],\niframe"}],[2042397313,{"a":".cikk-vegi-ajanlo-reklamok"}],[759551003,{"a":"[id*=\"hirdetes\"]"}],[522245493,{"a":"#interstitial"}],[1903713489,{"a":".adbd-layer"}],[1319865875,{"a":"body > section:not(.site-header):not(#toreskar):last-of-type"}],[1357710391,{"a":"[id*=\"_ad\"]"}],[404351991,{"a":"[class*=\"ad_\"]"}],[215335864,{"a":"[id*=\"ad_\"]"}],[944098245,{"a":"#ad-fekvo0,\n.detailRightAds,\n.rltd_container [id^=\"rltd-ad-\"],\n[class*=\"ad-\"],\n[class^=\"ads \"],\na[title=\"Hirdetés\"],\ndiv.wrapAds"}],[1954561794,{"a":".ibb-banner-decor"}],[2679915,{"a":"[id^=\"ad_\"]"}],[1366673355,{"a":"div[class*=\"contentBanner\"],\ndiv[style=\"text-align: center; margin-bottom:10px; position: relative;\"]"}],[1640442170,{"a":".sgpb-popup-dialog-main-div-wrapper"}],[1980386455,{"a":".penci-wrap-gprd-law,\n.sgpb-popup-overlay"}],[916403914,{"a":".block-block,\n.block-ouibounce-exit-modal,\n.node-buttons,\n.region-highlighted,\n.rtecenter,\n.sidebar,\n.underlay"}],[1689402933,{"a":".rckaexclude"}],[421908642,{"a":".super"}],[1063277273,{"a":"#tab-widget-wrapper,\n.cookiepanel_overlay"}],[1335972330,{"a":"div.cookieLayer,\ndiv.supportModal"}],[430357580,{"a":"IFRAME"}],[1116337551,{"a":"#article-recommend-popup,\n.article-page + .b-section,\n.article-page > .b-section,\n.article-reaction-holder + .b-section,\n.cookie-popup,\n.overlay-popup,\n.pull-left .b-section,\n.share.jssocials + .b-section,\n.top-section + .b-section"}],[380682624,{"a":"[class*=\"_adv \"]"}],[344250391,{"a":".popupunderlay,\n[class*=\"adPlace\"],\n[class^=\"goAdverticum\"]"}],[587177711,{"a":"[class*=\"adzone\"],\ndiv[id*=\"elementor-popup-modal-\"]"}],[619290572,{"a":"#catapult-cookie-bar"}],[2037210885,{"a":"#darklayer,\n.views-field-nothing,\n[class*=\"_ad \"],\n[id*=\"_ad-\"]"}],[1747736286,{"a":"#femina-shop-ajanlo-slider,\n.doboz_harmados,\n[class*=\"kepeslinkes\"]"}],[34607410,{"a":"DIV[class*=\"reklam\"]"}],[1318719135,{"a":"#felso_tavtarto,\n.fn9_separator,\n.rovatszponzor,\nDIV[class*=\"Etarget\"],\nDIV[class*=\"adbox\"],\nDIV[class*=\"cikk_kirakat\"],\nDIV[id^=\"sky_\"][id$=\"_side\"]"}],[2079046729,{"a":".crp_related,\ndiv[id^=\"forbesad\"],\np + [class*=\"-bekezdes-utan-\"]"}],[1573702244,{"a":".foot-logos.col-md,\n[href=\"https://www.barion.com/hu/vasarlok/arak-vasarloknak/\"],\na[href=\"http://consumer.huawei.com/hu/phones/mate10series/\"]"}],[144484584,{"a":"#accept-container"}],[441528471,{"a":"[class*=\"banners\"],\n[href*=\"hirdetesek\"]"}],[22309709,{"a":".etarget"}],[534811491,{"a":".facebook-layer-box"}],[1952314319,{"a":"[class*=\"magnum\"]"}]]);

const hostnamesMap = new Map([["dijnet.hu",348625254],["divany.hu",[2123657755,2042397313,759551003,522245493,1903713489,1319865875]],["index.hu",[2042397313,522245493,1903713489]],["kitekinto.hu",759551003],["linkcenter.hu",759551003],["nlcafe.hu",759551003],["olcsobbat.hu",759551003],["romnet.hu",759551003],["transindex.ro",759551003],["napi.hu",522245493],["velvet.hu",[522245493,1903713489]],["totalbike.hu",[1903713489,1319865875]],["totalcar.hu",[1903713489,1319865875]],["ecoline.hu",1357710391],["eduline.hu",[1357710391,404351991,215335864]],["magyarnarancs.hu",1357710391],["mno.hu",404351991],["sportorvos.hu",404351991],["egeszsegkalauz.hu",[944098245,1954561794]],["glamour.hu",1954561794],["kiskegyed.hu",1954561794],["egeszsegtukor.hu",2679915],["nemzetisport.hu",2679915],["vehir.hu",2679915],["elelmiszer.hu",1366673355],["elemi.hu",[1640442170,1980386455]],["topark.hu",1640442170],["elemzeskozpont.hu",916403914],["eletmod.hu",[1689402933,421908642]],["itmania.hu",1689402933],["ma.hu",[1689402933,421908642]],["elmuhalozat.hu",1063277273],["epiteszforum.hu",1335972330],["es.hu",430357580],["gyakorikerdesek.hu",430357580],["esport1.hu",1116337551],["est.hu",380682624],["evamagazin.hu",344250391],["f1vilag.hu",[587177711,619290572]],["forbes.hu",[619290572,2079046729]],["offline.hu",619290572],["femcafe.hu",2037210885],["femina.hu",1747736286],["filmoldal.hu",34607410],["fn.hu",1318719135],["fototrend.hu",[1573702244,144484584]],["gamepod.hu",144484584],["hardverapro.hu",144484584],["itcafe.hu",144484584],["logout.hu",144484584],["mobilarena.hu",144484584],["prohardver.hu",144484584],["fovarosi-hirhatar.hu",441528471],["freemail.hu",[22309709,534811491,1952314319]],["zene.hu",22309709],["life.hu",534811491],["unilife.hu",534811491]]);

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
