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

const argsMap = new Map([[1809187364,{"a":"#videoad"}],[80442190,{"a":"#cookie-button-banner,\n.campaigns,[id*=\"GlobalCampaigns\"]"}],[1538361542,{"a":".masthead,.col-right,a[href^=\"https://goo.gl/\"],a[href*=\"//bit.ly/\"]"}],[2028868331,{"a":".right-sidebar aside[id^=\"block\"],.right-sidebar aside[id^=\"adguru\"]"}],[1140025665,{"a":".region-sidebar-second"}],[830837014,{"a":".sidebar"}],[1673741742,{"a":"#cookie-banner-root"}],[1530100880,{"a":".ss-modal,.modal-mobile-app"}],[1040125481,{"a":".polopolyNotification"}],[328590587,{"a":".block-rr"}],[326142194,{"a":".sidebar-right,.ad_header + p"}],[464662964,{"a":".banner-container"}],[1510914174,{"a":".mh-sidebar .textwidget"}],[673791633,{"a":"#text-4"}],[229948902,{"a":"[class^=\"BauProvider\"],\n[class^=\"CookieConsentPopup\"]"}],[939158753,{"a":".header_top,#media_image-2,#text-6,\na[href*=\"/annonsering\"]"}],[1271246523,{"a":"#text-html-widget-3"}],[1781772197,{"a":".column-left > .article-partial,\n[class^=\"ads-\"],[class*=\"article-casino\"]"}],[1116936334,{"a":".pnlAdTop"}],[487346705,{"a":".banner-right,.banner-left,.wpb_single_image a[target=\"_blank\"],.tdm-popup-modal-wrap"}],[1148645520,{"a":"[class*=\"jsx-\"][style*=\"position: sticky\"],.bc--grey-neutral-50[style^=\"min-height\"]"}],[868216382,{"a":".premium-page-ad,.footer-banner-wrapper"}],[639245198,{"a":"div[class*=\"-promo\"],div[class*=\"prisjakt-\"]"}],[459434775,{"a":"#mega-ad-wrapper,.Container--ad,.theme-Native,.AdWrapper,.AdPositionData,.Teaser--fullAdLabel,div[data-engage-entity-id=\"sales-banner-bottom-sticker-wide\"]"}],[219930519,{"a":"#eprivacyModal,.modal-backdrop"}],[1332595845,{"a":".widget_et_ads,.module-etads,#text-13,#block-4,a[target=\"_blank\"][rel=\"noopener noreferrer\"],a > img[width=\"300\"][height=\"250\"],a > img[width=\"800\"][height=\"175\"]"}],[1152846297,{"a":"[data-ad-id]"}],[562378512,{"a":"#bannercolumn,img[title^=\"Annons\"]"}],[1873558500,{"a":".cookie-layer"}],[411430698,{"a":"#cookieContainer"}],[895275763,{"a":"#cookie-box"}],[804496169,{"a":".cd-desktop-banner"}],[1535859629,{"a":"#nyh_cookie-message,#svtmat_cookie,section.nyh_share"}],[906954678,{"a":"div[id$=\"_ad\"],div[id$=\"_ad_mobile\"],.externalTopMobile,a[href^=\"//www.prisjakt.nu/produkt\"],#nativendo-mainfeed + aside > .article,.article-footer > h3,.article-footer > .aeChart"}],[478445851,{"a":"[class*=\"-reklam\"],.sif-sponsorer"}],[1906401740,{"a":".abann_wrapper,#hspalt_s1"}],[1868641466,{"a":".create-account-banner,.buy-premium-banner"}],[1779555234,{"a":".adscolumn"}],[1501419269,{"a":"section[id^=\"Panorama\"]"}],[940563643,{"a":".code-block,main > div:last-child:not(:only-child),#uid_08313ba73,#uid_ab3738b5a,.jeg_header_wrapper .jeg_midbar"}],[1792483467,{"a":".page-gutter.left,.page-gutter.right,[id^=\"bbPrisjakt\"]"}],[2096704747,{"a":".row-uppdragstest"}],[1511067,{"a":".ad-container-section,.article-sponsored"}],[1106792739,{"a":"a.td_single_image_bg:not([href*=\"thepattayanews.se\"])"}],[1951601240,{"a":".sidebar .widget_widget_code"}],[935228980,{"a":"div[style*=\"z-index: 999; background-color: rgba(0, 0, 0, 0.5)\"],.bg-grey.hideOnPrint,.bg-adYellow"}],[263755223,{"a":".elementor-image a[target=\"_blank\"],.revive-box"}],[1001666129,{"a":".subscribe_now_popup,.type-native,#captive"}],[298046060,{"a":".adv"}],[1657333614,{"a":".container-banner-sidebar"}]]);

const hostnamesMap = new Map([["skidspar.se",1809187364],["skk.se",80442190],["skogsforum.se",1538361542],["skolfamiljen.se",2028868331],["skrattnet.se",1140025665],["webben7.se",1140025665],["skyltat.se",830837014],["skyscanner.se",1673741742],["smartsenior.se",1530100880],["smhi.se",1040125481],["so-rummet.se",328590587],["spelagratis.se",326142194],["spelo.se",464662964],["spelochfilm.se",1510914174],["sportbilen.se",673791633],["sportexpressenplay.se",229948902],["sporthalsa.se",939158753],["sportpanelen.se",1271246523],["spray.se",1781772197],["stallet.se",1116936334],["startaochdriva.se",487346705],["stegforhalsa.se",1148645520],["stoppapressarna.se",868216382],["surfa.se",639245198],["svd.se",459434775],["svenskahousegruppen.se",219930519],["svenskhistoria.se",1332595845],["svensktgolfforum.se",1152846297],["svensktidskrift.se",562378512],["sverigesingenjorer.se",1873558500],["sverigeskommunikatorer.se",411430698],["sverigeskonsumenter.se",895275763],["sverigespringer.se",804496169],["svt.se",1535859629],["swedroid.se",906954678],["swehockey.se",478445851],["sydnarkenytt.se",1906401740],["synonymer.se",1868641466],["sysidan.se",1779555234],["tabyallehanda.se",1501419269],["tekniksmart.se",940563643],["99.teknikveckan.se",1792483467],["testfakta.se",2096704747],["thelocal.se",1511067],["thepattayanews.se",1106792739],["tidningen.se",1951601240],["tidningenbalans.se",935228980],["tidningenglobal.se",263755223],["tidningenridsport.se",1001666129],["tittapavideon.se",298046060],["tjanstebilen.se",1657333614]]);

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
