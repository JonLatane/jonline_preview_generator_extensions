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

// swe-1

const argsMap = new Map([[1743736155,{"a":"#topbanner,.adMarking"}],[1985049351,{"a":"#newsletter-popup,#premium-bottom-bar,#premium-popup,.is-native,.is-ad,.is-native-yes,.after-article-widget,.banner-bottom"}],[281226918,{"a":".commercial-row,.aside-image-with-link,.post-container-sponsored,aside a[href*=\"/branschnyheter/\"]"}],[164551029,{"a":"#lblock-ads"}],[1191552485,{"a":".content aside.column-narrow:last-of-type"}],[1284676295,{"a":"#main > #home_start_div ~ .m_t.box:nth-last-child(-1n+2),\n#sticky-panorama"}],[228444257,{"a":".advertisement--item"}],[1783302040,{"a":".sidebar-widget > .textwidget"}],[50603122,{"a":"#cookie-consent-wrapper"}],[670439273,{"a":".e-banner"}],[1658850540,{"a":".cookie-bar,\nimg[alt*=\"casino\"]"}],[1696417421,{"a":"a[href*=\"utm_campaign\"]"}],[601840518,{"a":"[data-controller=\"ad-container\"],.bg-gradient-white"}],[980001241,{"a":".banneritem"}],[1566248853,{"a":"#secondary > .widget:nth-child(2)"}],[1732491821,{"a":"#nyhetsbrev-pp-wrapper__container,\n.partnerartikel,#sidebar-ads-right"}],[1734208488,{"a":"#panorama"}],[1233904955,{"a":".gdprcookie,[data-gabnr],#carpet"}],[269934180,{"a":".bnr"}],[2033099889,{"a":"#slidebox,\n.wm-nopop,#main > p[style^=\"color\"]"}],[1076518823,{"a":"div[class*=\"expo-ads\"],div[class*=\"pane-openx\"],.modal,.header-top.show-cookie-block"}],[1173618038,{"a":".campaign"}],[1079625841,{"a":".html-widget > div[style^=\"text-align: center; font-size: 10px;\"],\n.teaser > a[href*=\"/kampanj.\"],.teaser > a[href*=\"/brandstudio\"],.teaser > a[href*=\"/brand-studio\"],figure[data-article-data*=\"/sponsrat\"],figure[data-article-data*=\"/annons\"],figure[data-article-data*=\"/brand-studio\"],.teaser--native,.native-article,\na[href*=\"/spel.exp\"],a[href*=\"/lanapengar.exp\"],a[href*=\"/rabattkoder.exp\"],a[href*=\"/annons\"],.match-betting,.discount-ad,.b-ad__caption,.pressrelease-teaser,.widget-ad-marker,.widget-ad-marker + a,.promotion-banner,.widget--collaboration,.rotator--external,a[data-click-track*=\"prisjakt\"],.linked-image-widget a[href*=\"/kampanj/\"],.linked-image-widget a[href*=\"www.cmore.se\"],.linked-image-widget a[href*=\"lifestyle.expressen.se\"],#premiumAdWrapper,.tapet-popup-overlay,.outsider-ads"}],[953119610,{"a":"a[href*=\"/kampanj/\"],.flm-kampanj"}],[236353022,{"a":".cookies-wrapper"}],[1834871892,{"a":"a[href*=\"/banner/out/\"],.bnr_box,div[class^=\"panel\"][style*=\"lightgoldenrodyellow\"]"}],[2131545460,{"a":".adspace"}],[1781581072,{"a":".burt-unit,.art_ad,adline,f-panorama,f-deals,#rpPopular,#maxetiseFull,#outsider"}],[754154645,{"a":".advert-take-over"}],[922760492,{"a":"a[title*=\"Casino\"],#top-content"}],[1393950881,{"a":"a[href*=\"/sponsra\"]"}],[1589369081,{"a":"#topslider-wrapper + .container > .sidebar,\n.row.news > div[style^=\"border\"]:last-of-type"}],[350765864,{"a":".cooperation-banner__container"}],[1568752189,{"a":".m-blockAd"}],[898374977,{"a":".banner-wrapper,.col-banner"}],[2061947821,{"a":"#leader-wrap,#rpwe_widget-2"}],[253346592,{"a":"#dt-kiosk-position"}],[1678242445,{"a":".fisher-takeover-container"}],[1595118802,{"a":".Banner,.TakeOverBanner,.CookieNotice"}],[303574299,{"a":".boxOverContent--a,.otPlaceholder"}],[2060791665,{"a":"#PreHeader"}],[196338382,{"a":"#cookie"}],[588563853,{"a":".fodertipset-org-banner"}],[947794701,{"a":".External-ad,#CybotCookiebotDialog,#CybotCookiebotDialogBodyUnderlay"}],[1428561896,{"a":"#myModal,.adImage"}],[1164874345,{"a":".top-banner-container"}],[1813565028,{"a":"#ckieconsent"}],[1231936136,{"a":"div[id*=\"panorama\"]"}],[1417229691,{"a":".c-cookie"}],[1220203873,{"a":"[id^=\"ff_banner\"],.home .partner_article + .mh-section,.home .payed_article + .mh-section,.home-columns .ticker-title.partner_article,.home-columns .ticker-title.payed_article,.mh-header .widget_sow-slider,.sow-slider-image,.houdini_partner_article,.houdini_video_banner,.houdini_produktnytt,#houdini_tjanster-2"}]]);

const hostnamesMap = new Map([["duochjobbet.se",1743736155],["e55.se",1985049351],["news55.se",1985049351],["ehandel.se",281226918],["ekonominyheter.se",164551029],["electronic.se",1191552485],["emocore.se",1284676295],["energi.se",228444257],["energismartahem.se",1783302040],["engelholm.se",50603122],["kartor.eniro.se",670439273],["epochtimes.se",1658850540],["esportare.se",1696417421],["etc.se",601840518],["etn.se",980001241],["uppsalanyheter.se",980001241],["eventeffect.se",[1566248853,1732491821,1734208488]],["executiveeffect.se",[1732491821,1734208488]],["saleseffect.se",[1732491821,1734208488]],["svartgul.se",1734208488],["evertiq.se",[1233904955,269934180]],["fz.se",269934180],["existenz.se",2033099889],["expo.se",1076518823],["expressen.se",[1173618038,1079625841]],["voister.se",1173618038],["familjeliv.se",953119610],["familjesidan.se",236353022],["fastighetssverige.se",1834871892],["fastighetstidningen.se",2131545460],["feber.se",1781581072],["tjock.se",1781581072],["fen.se",754154645],["ingenjorsjobb.se",754154645],["festivalinfo.se",922760492],["fightermag.se",1393950881],["filmtipset.se",1589369081],["filmtopp.se",350765864],["finansliv.se",1568752189],["findit.se",898374977],["firstclassmagazine.se",2061947821],["fiskejournalen.se",[253346592,1678242445]],["jaktjournalen.se",1678242445],["flamman.se",1595118802],["flashscore.se",303574299],["flygtorget.se",2060791665],["fn.se",196338382],["kb.se",196338382],["fodertipset.se",588563853],["fof.se",947794701],["foodfolder.se",1428561896],["foodora.se",1164874345],["foreca.se",1813565028],["foretagande.se",1231936136],["foretagarna.se",1417229691],["forvaltarforum.se",1220203873]]);

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
