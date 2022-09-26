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

const argsMap = new Map([[837314665,{"a":"#lightview1,\n[class*=\"popupBanner\"]"}],[840189396,{"a":"#cookie_policy,\n#lw_bg1,\ndiv[style^=\"height:\"]"}],[1949298089,{"a":"#newASZFLayer"}],[2005523995,{"a":"#onetrust-consent-sdk,\n.o-banner--hirdetes"}],[1881218849,{"a":".blockright,\n.google,\n.parom"}],[1785871809,{"a":".cookie__wrapper,\n.real-estate-wrapper,\n.subscription-box,\nA[href=\"/jatek\"],\nA[href=\"/nyarimagazin\"],\n[class*=\"__ad\"],\n[class*=\"adContainer\"],\na[target=\"_blank\"][class=\"videa-wrapper\"],\niframe[src*=\"koponyeg.hu\"]"}],[17308646,{"a":".newsletter-box"}],[517041717,{"a":"font + center"}],[261197549,{"a":"#onesignal-bell-container,\n#onesignal-slidedown-container"}],[1424038864,{"a":"#header_cookie_container"}],[622319771,{"a":".campaign-item,\n.ext-el-mask-banner,\n[id^=\"ext-gen\"]"}],[663952067,{"a":"#custom_html-11,\n#custom_html-6,\n#media_image-17,\ndiv[style=\"margin-top:20px;\"]"}],[416788536,{"a":"#upprev_box"}],[1114049407,{"a":"div.bpkad"}],[983317527,{"a":"#full-desktop,\n#full-mobile,\nheader + div[style^=\"margin:\"]"}],[191360482,{"a":"#cooker_container,\n.banner_main_page_wrapper"}],[1483107515,{"a":"#cookie_warn_text"}],[218810829,{"a":"#bef_mainbody_mod_2"}],[58448320,{"a":"#cadre_alert_cookies,\n#pa-push-notification-subscription,\n#sp-right>.sp-column>.sp-module.hidden-mobile,\n.banneritem"}],[1393165069,{"a":"[class^=\"adsense\"]"}],[1210374256,{"a":".advert,\n.occsz-banner"}],[1554106798,{"a":"#stvipcontainer,\nDIV[class=\"box rightbox\"],\n[class^=\"vippol_\"]"}],[550209966,{"a":"#aHirek,\n#hir,\n#hir2,\n#linkek,\n#oldal,\nDIV[class*=\"hirdetes\"],\n[data-ce-measure-widget^=\"CTS Banner\"]"}],[530312980,{"a":"[id*=\"bannerzona\"]"}],[951490075,{"a":"#cookie-policy-content,\n#web-push-popup,\n.ad-article-comment,\n.ad-article-end,\n.ad-article-inside,\n.ad-article-inside-automatic,\n.ad-article-under-lead,\n.ad-content-top,\n.ad-header-after > *,\n.ad-header-after-article,\n.share-article"}],[145526011,{"a":"[class*=\"card_box_\"]"}],[1749242317,{"a":"[class*=\"-adv\"]"}],[908082181,{"a":"#CookieAcceptLayer,\n#bdism1,\n#cikkajanlo,\n[class*=\"adv-\"]"}],[883605250,{"a":".art-sidebar1,\n.art-sidebar2"}],[842338571,{"a":"#fadeandscale_background,\n#fadeandscale_wrapper"}],[897044547,{"a":".enews-article-content .endless-shared-area"}],[1092201253,{"a":".sb-right > div:first-child"}],[31133273,{"a":"#cookie-law-info-bar"}],[1028612881,{"a":"#banner_sav"}],[945677192,{"a":"#headerBanner,\n.col-md-4.blog-sidebar:nth-child(),\n.slidingBanner,\n.tablet-advert,\n.totop,\n.widgetDefault"}],[312766476,{"a":".billboard"}],[1353598124,{"a":"#billboard,\n[class*=\"prbox\"],\n[id^=\"linkbox_article\"]"}],[1237861265,{"a":".region-header.region"}]]);

const hostnamesMap = new Map([["blogstar.hu",837314665],["tudtade.blogstar.hu",840189396],["bonuszbrigad.hu",1949298089],["bookline.hu",2005523995],["borsa.hu",1881218849],["borsonline.hu",[1785871809,17308646]],["magyarnemzet.hu",17308646],["ripost.hu",17308646],["vg.hu",17308646],["bpiautosok.hu",[517041717,261197549]],["pestisracok.hu",261197549],["budapestbank.hu",1424038864],["online.budapestbank.hu",622319771],["budapestkornyeke.hu",[663952067,416788536,1114049407,983317527]],["likenews.hu",[416788536,1114049407]],["starity.hu",416788536],["kekvillogo.hu",[1114049407,983317527]],["budapestpark.hu",191360482],["builder.hu",1483107515],["c-press.hu",218810829],["cartourmagazin.hu",58448320],["cegbongeszo.hu",1393165069],["ceginformacio.hu",1210374256],["chat.hu",1554106798],["citromail.hu",550209966],["civishir.hu",530312980],["computerworld.hu",951490075],["gamestar.hu",951490075],["pcworld.hu",951490075],["puliwood.hu",951490075],["cotcot.hu",145526011],["csaladinet.hu",[1749242317,908082181]],["femcafe.hu",1749242317],["csongradihirek.hu",883605250],["csupasport.hu",[842338571,897044547]],["mindmegette.hu",842338571],["cyberpress.hu",[1092201253,31133273]],["gyorplusz.hu",31133273],["itthonrolhaza.hu",31133273],["data.hu",1028612881],["dehir.hu",945677192],["delmagyar.hu",[312766476,1353598124]],["hwsw.hu",312766476],["kisalfold.hu",312766476],["demokrata.hu",1237861265]]);

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
