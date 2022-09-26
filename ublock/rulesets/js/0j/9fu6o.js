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

const argsMap = new Map([[2066735574,{"a":"[class*=\"sponsored\"],[class*=\"Sponsored\"],[class*=\"LivepodPuff\"],.videoAd,.js-video-ad,[class*=\"AdkContainer\"]"}],[690944782,{"a":"#page > div:not(.left):not(.right),\n#titlebanner"}],[1562029234,{"a":"a[target=\"_blank\"] picture"}],[178176874,{"a":"#svartalistan-login-required-overlay,\n.block-ad,#cookie-consent-dialog,a[href^=\"/partner/\"],.threadMatchedContent"}],[409387754,{"a":".pop_box"}],[576042296,{"a":".protect_contents-overlay,.ai_widget"}],[1950957995,{"a":"[class^=\"siteAds\"],.siteAlerts"}],[249853269,{"a":".insider-ads,[id^=\"mainadvertorial\"],[id^=\"dfptag\"],.block-advertorial,.block-views-blockconventus-info-articles-info-article-block,#dfp-tag-before_artikel,#dfp-tag-mobile_before_artikel"}],[1989441636,{"a":"#text-2.widget_text,.header-widget-area"}],[2080576314,{"a":"a[href*=\"/annons/\"]"}],[1506605343,{"a":".card-partner,.partner"}],[922999135,{"a":"#cookie-compliance,\n.block--extern-annons,.view-annonser"}],[500838236,{"a":"#CookiesBox,\n#rightSideAds,.OpenXAd,.DfpAd"}],[1945089752,{"a":".banner_window,.banner_label,.card_veckans_pryl,.bg_camping_se"}],[1417350866,{"a":".header-ads-wrapper,.ai-adb-hide,.ai-sticky-widget,.hampaonline"}],[1562498721,{"a":"div[id^=\"canna-\"]"}],[1770697543,{"a":"#cookie_directive_container"}],[453385843,{"a":".Cookie-notice,.Product-modal,.Offer-popup,.Toaster"}],[1706803201,{"a":".Blurb--native"}],[655917409,{"a":"[id^=\"block-views-ad\"],.modal-container"}],[523851441,{"a":"#text-6,\n.ajax_loader"}],[822540450,{"a":"#rollup"}],[1497690287,{"a":".penci-wrap-gprd-law"}],[1702355193,{"a":".sticky-sidebar,#gdpr-container,.slick-carousel"}],[2087455771,{"a":".featured-post--sponsored,.grid-item--sponsored"}],[454973979,{"a":"div.alignwide[style^=\"height\"]"}],[1907660309,{"a":".cookie-acceptance,.video-annons,.native-box,.arcad-block-container"}],[1389287696,{"a":".g-single"}],[829143365,{"a":".outher-sidebar,a[href*=\"/annons/\"]"}],[1603064687,{"a":"a[href*=\"/ps-partner/\"],.ad-links-module,.dagensps_ad,a[href*=\"ut.dagensps.se\"][target],.bottom_banner,.leftsidebanner"}],[128246747,{"a":".banner-area"}],[1758844217,{"a":"#dr-preloader,\n.cookies-popup,\n.header-top__wrapp"}],[1395727842,{"a":".rightcol"}],[1092277960,{"a":".cc-cookies"}],[390132819,{"a":".topdiv"}],[1355312318,{"a":"#ads"}],[1199755786,{"a":"[id^=\"ads300\"],[id^=\"linkcat-\"]"}],[574284206,{"a":"#fancybox-wrap,div[id^=\"densi-\"]"}],[535932788,{"a":".fp_banners"}],[1986382688,{"a":"#page-cookies"}],[1240101234,{"a":"div[style*=\"height: 244px;\"]"}],[327735072,{"a":".di_panorama-wrapper,.site-header__panorama,.di_panorama__isAdLabel,.discount-box,.campaign-ad-box,.di_start__teaser-placeholder,.di_teaser-flak-planbokskoll,.di_teaser-flak-container--native,.native-box,.bandit-box__teaser--native,a[href*=\"/brandstudio\"],.service-box,.brand-studio-box,.native-article,\n.market-start-top + div:not(.market-container__wrapper)"}],[802297825,{"a":"#rich-media-ads"}],[804133707,{"a":".teaser-native"}],[4692972,{"a":".bn_advertisement__panorama,.bn_advertisement__container"}],[1768289044,{"a":".c-cookies"}],[2037685586,{"a":"#sponsored-posts,#right-banners,.banner-wrapper,.top-banner-label,.banner-label"}],[686673762,{"a":".ai-track"}],[787155588,{"a":".article--native,\n.campaign-holder"}],[1719125076,{"a":".policy-disclaimer"}]]);

const hostnamesMap = new Map([["breakit.se",2066735574],["bussmagasinet.se",690944782],["butikstrender.se",1562029234],["byggahus.se",178176874],["byggfaktadocu.se",409387754],["byggipedia.se",576042296],["byggnadsarbetaren.se",1950957995],["byggnyheter.se",249853269],["dagensfastigheter.se",249853269],["dagensnaringsliv.se",249853269],["energinyheter.se",249853269],["industrinyheter.se",249853269],["infrastrukturnyheter.se",249853269],["inredningsnyheter.se",249853269],["jarnvagsnyheter.se",249853269],["metallerochgruvor.se",249853269],["papperochmassa.se",249853269],["solenerginyheter.se",249853269],["sportochfritidsnyheter.se",249853269],["stockholmsbyggnyheter.se",249853269],["transportochlogistik.se",249853269],["vindkraftsnyheter.se",249853269],["byggteknikforlaget.se",1989441636],["byggvarlden.se",2080576314],["cafe.se",1506605343],["kingmagazine.se",1506605343],["manolo.se",1506605343],["caminomagasin.se",922999135],["camping.se",500838236],["campingsverige.se",1945089752],["cannabis.se",1417350866],["cannabisifokus.se",1562498721],["chalmers.se",1770697543],["chef.se",[453385843,1706803201]],["fokus.se",1706803201],["chefstidningen.se",655917409],["cineasten.se",523851441],["civilekonomen.se",822540450],["cornucopia.se",1497690287],["espressomedia.se",1497690287],["it-finans.se",1497690287],["it-halsa.se",1497690287],["it-kanalen.se",1497690287],["it-pedagogen.se",1497690287],["it-retail.se",1497690287],["cyclingplus.se",1702355193],["halsafitness.se",1702355193],["yogaworld.se",1702355193],["cykla.se",2087455771],["da.se",454973979],["dagen.se",1907660309],["dagensinfrastruktur.se",1389287696],["dagensjuridik.se",829143365],["dagensps.se",1603064687],["dalarnasaffarer.se",[128246747,1758844217]],["ica.se",128246747],["jamtlandsaffarer.se",[128246747,1758844217]],["naringslivetvgl.se",[128246747,1758844217]],["stockholmsaffarer.se",[128246747,1758844217]],["danskaspraket.se",[1395727842,1092277960,390132819]],["digitalavykort.se",[1092277960,390132819]],["viseniorer.se",1092277960],["vmj.se",[1092277960,390132819]],["danstidningen.se",1355312318],["lira.se",1355312318],["slangopedia.se",1355312318],["universitetslararen.se",1355312318],["deliquate.se",1199755786],["densistavilan.se",574284206],["dental24.se",535932788],["designbase.se",1986382688],["devote.se",1240101234],["familjeliv.se",1240101234],["di.se",[327735072,802297825,804133707]],["dn.se",[802297825,804133707,787155588]],["expressen.se",802297825],["privataaffarer.se",804133707],["borssnack.di.se",4692972],["diabetes.se",1768289044],["djungeltrumman.se",2037685586],["tidningen.djurskyddet.se",686673762],["drivkraftsverige.se",1719125076]]);

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
