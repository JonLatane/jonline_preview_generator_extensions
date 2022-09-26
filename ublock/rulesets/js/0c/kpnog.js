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

const argsMap = new Map([[98944351,{"a":"#adZone,\n#inter,\n#inter-in,\n#origo_offers,\n#szoveges,\n.afc,\n.col-xl-8 + aside.col-xl-4.col-visible-xl,\n.lead-alatti,\n.mw-allow-notification-dialog,\n.origo-jatek-randi-bottom,\n.pr-blokk,\n.swiper-slide.z-slide,\nA[href*=\"xtb.hu\"],\nDIV[id*=\"magnum\"],\nIFRAME[id*=\"bookline\"],\n[class*=\"origoAjanlat\"],\n[class*=\"wsz_rotal\"],\n[id*=\"-hird\"],\n[id*=\"ajanlat_\"],\n[id*=\"hird-\"],\n[id^=\"edigital_\"],\ndiv.mme-doboz,\ndiv[class$=\"widget\"][data-adblockonly=\"1\"],\nsection.spar"}],[1411506005,{"a":"div.facebook-layer-box"}],[1675007325,{"a":"[class^=\"ad\"]"}],[319696627,{"a":"#zone-halfpage,\n#zone-roaddblock,\n.centercol.sponsor"}],[1475830323,{"a":"#zone-titleheader,\n.slidein.popup.closeablenotification.scripted,\n.zone[data-zoneid]"}],[2099346691,{"a":"#cookieconsentbar,\n#subscribepopuppanelalign"}],[58937070,{"a":".banner-content,\na[href*=\"banner_click\"]"}],[273815265,{"a":"#kutu"}],[1464764402,{"a":".frame-center,\n[class^=\"f10\"],\n[class^=\"grbox\"]"}],[982711868,{"a":"[class^=\"ads-\"]"}],[1791839862,{"a":".justClassBanner"}],[946100068,{"a":"#cikkertesito-reg-form,\n.banner.clearfix,\n.inner"}],[667110471,{"a":"#pushpushgo-container,\n.adult-overelay,\n.ph-flexi-box-wrap,\n.ui-dialog[aria-describedby=\"newsletter-modal\"],\n.ui-widget-overlay.ui-front,\n[aria-describedby=\"dialog-welcome\"],\n[class*=\"adbreak\"],\n[class*=\"c_banner\"],\n[class*=\"placeholder\"],\n[class=\"ph ph-responsive-wrap\"],\n[data-analytics-value]"}],[918267806,{"a":"#popup"}],[627215289,{"a":".articleMetadata,\n.container.css-table > div:not(.container),\n.edgebox-widget.show,\n.introjs-helperLayer,\n.introjs-overlay,\n.introjs-tooltip,\n.port-adbd,\n[class*=\"_spon\"],\n[class=\"advert fix-advert\"]"}],[553295802,{"a":"#BlockCikkajanlo,\n#mymodal2,\n.footer--partners,\nDIV[id*=\"adocean\"],\n[data-qa=\"oil-Layer\"],\n[data-qa=\"oil-full\"]"}],[1177054719,{"a":".lead_alatti_txt,\n.mfor_cikk_beuszo,\n.news-page > div[style*=\"background: #FFF900;\"]:first-child"}],[1710848525,{"a":"#newsletter_footer,\n#twister-banner,\n.cookie-layer"}],[451603834,{"a":"#fb_like_modal"}],[1107122596,{"a":".popup"}],[1033593623,{"a":"#top > div:first-child"}],[618516427,{"a":"[class*=\"banner \"],\n[id^=\"overlay\"]"}],[198614135,{"a":"[aria-describedby=\"newsletter-modal\"],\n[class*=\"adv--\"]"}],[1240065669,{"a":"#wallpaper,\n.wallpaper-link"}],[1549474339,{"a":"#psCookieNotification,\ndiv.ad-sm-text"}],[925155645,{"a":".std0,\nIMG[src=\"images/hirdetes.gif\"]"}],[536429655,{"a":"#gdprCookieWrap,\n[class*=\"AdWrap\"],\n[id*=\"AdWrap\"]"}],[1096536936,{"a":"#enableCookieDiv"}],[368762297,{"a":"[id*=\"ctnet_ad_\"],\ndiv[class*=\"ad \"]"}],[1318383662,{"a":"#fhr-cookie-bar,\n#fragment,\n[class*=\"-ad-\"]"}],[1109411308,{"a":"#text-9,\ndiv.sprtrvs-ad,\ndiv.tt-shortcode-1,\ndiv.tt-shortcode-2"}],[1569420815,{"a":"#menusimple2 + div,\ndiv[style=\"width:100%;height:14px;text-align:left;font-size:9px;letter-spacing:3px;color:#5F5F5F;border-bottom:1px solid #CCC;margin: 10px 0 5px 0;\"],\nscript[async] + [data-widget-id]"}],[157102903,{"a":"#push-notification,\n.kezdo-kereso,\n[box-name=\"Hirdetés\"],\n[class*=\"Adv\"],\n[class*=\"peelgame\"],\n[class^=\"adact\"],\n[class^=\"adx_\"],\n[id*=\"Advert\"],\n[id*=\"peelgame\"],\ndiv.container.banner-container.left,\ndiv.container.banner-container.right,\ndiv.container.banner-container.wide > *"}],[1721243787,{"a":"#google-display"}],[1491908852,{"a":"[src*=\"hirdetes_\"]"}],[374805413,{"a":".cikk-hir,\n[class*=\"googlebox\"],\ndiv[class*=\"adserver\"],\ndiv[id*=\"kirakat\"],\ndiv[id*=\"rightad\"]"}],[19456845,{"a":"[class=\"wp-container wp-top\"]"}],[694671763,{"a":"div.fb_shares"}]]);

const hostnamesMap = new Map([["origo.hu",[98944351,1411506005]],["travelo.hu",1411506005],["otvenentul.hu",1675007325],["hir.ma",1675007325],["pcforum.hu",[319696627,1475830323,2099346691]],["prog.hu",[319696627,2099346691,1107122596]],["pcguru.hu",58937070],["pecsma.hu",273815265],["penzcentrum.hu",1464764402],["pestisracok.hu",982711868],["pharmaonline.hu",1791839862],["piacesprofit.hu",946100068],["player.hu",667110471],["politaktika.hu",918267806],["szepsegbroker.hu",918267806],["hu.jooble.org",918267806],["port.hu",627215289],["portfolio.hu",553295802],["privatbankar.hu",1177054719],["profession.hu",1710848525],["profitline.hu",451603834],["propeller.hu",[1107122596,618516427]],["site88.net",1107122596],["prohardver.hu",1033593623],["raketa.hu",198614135],["rendszerigeny.hu",1240065669],["retikul.hu",1549474339],["sg.hu",925155645],["sielok.hu",536429655],["simple.hu",1096536936],["sonline.hu",368762297],["sorozatwiki.hu",1318383662],["sportorvos.hu",1109411308],["starity.hu",1569420815],["startlap.hu",157102903],["kereso.startlap.hu",1721243787],["stop.hu",1491908852],["storyonline.hu",374805413],["stylemagazin.hu",19456845],["szabadfold.hu",694671763]]);

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
