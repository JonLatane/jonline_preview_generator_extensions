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

const argsMap = new Map([[1576286489,{"a":"#cboxOverlay,\n#colorbox"}],[1102975579,{"a":"#cookie-msg"}],[1594849562,{"a":"#floatingBox,\n.ui-floating-message,\n.wsp-wrap,\n[class*=\"tBanner\"]"}],[2121921118,{"a":".articles,\n.proposer,\n.read_vs"}],[1989705479,{"a":"#fbpopup"}],[1316574603,{"a":".cookie-bar,\n.mrc-bnr-plchldr,\n.popup-wrap,\n[class^=\"banner\"]"}],[1617970332,{"a":".sticky"}],[984202529,{"a":".article-textlinkbox"}],[323461420,{"a":"#ad-image-big,\n#fadeandscale,\n.billboard-cikk,\n.hir-fekvo,\nDIV[class=\"billboard fr\"],\nDIV[class=\"fej-elso-sor cf\"],\n[class*=\"ads_box\"]"}],[1765707313,{"a":".allow-cookie-stripe"}],[253760046,{"a":"[class^=\"adv\"]"}],[1731148425,{"a":"#app-advice,\n#app-commission,\n.x-marketing"}],[712502779,{"a":".cim-reklam,\n.widget_text.widget.widget_custom_html"}],[497474838,{"a":".om-holder"}],[1176969024,{"a":"[class*=\"box ajanlo\"],\n[id*=\"ctnet\"]"}],[460009067,{"a":".adbox"}],[308008259,{"a":"[align=\"center\"] > a[href*=\"banner\"],\n[class^=\"ui-dialog\"]"}],[1827160506,{"a":"#mobilinstruments,\n#stickyfooter,\n.cikkajanlo,\n.totalcar,\n[id*=\"billboard\"],\na[href^=\"https://bit.ly/\"]"}],[1902683275,{"a":"#custom_html-4,\n#primary-sidebar,\n.right"}],[178409070,{"a":"#sidebar"}],[1219753895,{"a":".banner-bottom,\n.ckwrap,\n.list-item.has-banner"}],[819767251,{"a":"#didyou,\n#wallpaper_left,\n#wallpaper_right,\n.bet365_connect,\n[class*=\"_szponzor_\"]"}],[1047182354,{"a":"[class^=\"ad_\"]"}],[608651848,{"a":"[class*=\"adlabel\"],\n[class*=\"leftlogo\"],\n[id*=\"adserver\"]"}],[244607706,{"a":"div#show_news_box,\ndiv.cookie-message"}],[1246857940,{"a":"#tab-widget"}],[556443137,{"a":".m-fbPopup"}],[524427134,{"a":".m-pcPromoArticlePointsLayer,\n.m-pcPromoFooterLayer,\ndiv.m-articleStickySocial,\ndiv.m-breakingLayer"}],[732369155,{"a":".boxcontent,\n.cikk_vegi_google,\n.pr,\nDIV[class^=\"cikk_hirdetes\"][class$=\"x120\"],\nDIV[class^=\"hirdet\"][class$=\"wrp\"],\nH3[class*=\"adlabel\"],\n[class*=\"adlist\"],\n[class*=\"boxhirdetes\"]"}],[752579065,{"a":"[data-placeholder-caption=\"hirdetés\"]"}],[1474164195,{"a":".noprint,\nDIV[class*=\"ad-container\"]"}],[936030236,{"a":"#cookie-consent"}],[2103283410,{"a":".colorbox-cookiepolicy"}],[567527985,{"a":"#datasheetNavHelp"}],[431613095,{"a":"#slidebox,\n.highlighted-banner"}],[1687454669,{"a":"#detect + .wrapper"}],[267594591,{"a":"[class*=\"ad-warning\"],\n[class=\"ad-blocked\"],\n[class=\"p-t-10 ad-blocked\"]"}],[1721832211,{"a":"#advert"}]]);

const hostnamesMap = new Map([["mavcsoport.hu",1576286489],["sorozataddict.hu",1576286489],["mediacenter.hu",1102975579],["medicalonline.hu",1594849562],["menetrendek.hu",2121921118],["menshealth.hu",1989705479],["merce.hu",1316574603],["meska.hu",1617970332],["mfor.hu",984202529],["mindmegette.hu",[323461420,1765707313]],["nemzetisport.hu",[1765707313,819767251,1047182354]],["mitortent.hu",253760046],["vilagszam.hu",253760046],["vilagszammagazin.hu",253760046],["mkbnetbankar.hu",1731148425],["mlzphoto.hu",712502779],["mme.hu",497474838],["mozishop.hu",497474838],["mno.hu",1176969024],["mobilarena.hu",460009067],["mult-kor.hu",308008259],["napi.hu",1827160506],["napidroid.hu",1902683275],["napinemszar.hu",178409070],["napiszex.hu",1219753895],["nlcafe.hu",[1047182354,556443137,732369155]],["vehir.hu",1047182354],["nepszava.hu",608651848],["nice.hu",244607706],["nkmenergia.hu",1246857940],["nlc.hu",[556443137,524427134]],["vezess.hu",556443137],["noizz.hu",752579065],["nol.hu",1474164195],["nyest.hu",936030236],["webforditas.hu",936030236],["obi.hu",2103283410],["olcsobbat.hu",567527985],["onroad.hu",431613095],["onvideo.hu",1687454669],["oprend.hu",267594591],["origo.hu",1721832211],["feliratok.info",1721832211]]);

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
