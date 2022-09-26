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

const argsMap = new Map([[743013784,{"a":".banner"}],[1122420891,{"a":"[class*=\"Adverticum\"]"}],[871543073,{"a":"#joylike,\n[class^=\"adIn\"],\n[class^=\"adPlace\"]"}],[651734948,{"a":"#cookie_container"}],[1648781159,{"a":"[data*=\"banner\"]"}],[1890158342,{"a":"#header"}],[1319835851,{"a":"#cookieSpan,\ndiv.bottom_sticky_banner"}],[1561002658,{"a":"#cookie-consent-dialog"}],[563371805,{"a":"#above_article_banner,\n#advertisements,\n#below_content_banner,\n#left_banners,\n#right_banners,\n#social,\n#wide_banners,\n.article_banner,\ndiv.subscribe_module,\ndiv[class=\"fb-like fb_iframe_widget\"]"}],[334254487,{"a":".cookies-message-container"}],[1937831414,{"a":"#cookieAcceptanceContainer"}],[1082254656,{"a":"[id*=\"advert\"]"}],[553183300,{"a":"#nap_ajanlata,\n.tamogatott,\n.vippr,\nDIV[id*=\"billboard\"],\nDIV[id*=\"linkbox\"],\n[class*=\"banner-\"],\n[class*=\"offer prbox\"],\n[class*=\"pr--\"],\n[class^=\"pr-\"],\n[class^=\"prbox\"],\ndiv.endless-shared-area"}],[189408939,{"a":"#spu-103927,\n[class^=\"spu\"]"}],[1314509595,{"a":"#vshu-box,\n.integralt_felso_zona,\n[id*=\"adsense\"]"}],[1001351165,{"a":"div[class*=\"banner\"]"}],[501682611,{"a":".kapu,\n.mini_slider_div0"}],[874294682,{"a":"[class*=\"Banner\"]"}],[846777774,{"a":"div.accept-cookies"}],[1862441207,{"a":"[name*=\"banner\"]"}],[929078925,{"a":".adbg"}],[24771241,{"a":".category > #prodstop1,\n.single-post > #prodstop1"}],[649985253,{"a":"#current_promotions_block,\n#skin-left,\n#skin-right,\n.box-general.clearfix,\n.discount.clearfix.nonLpk,\n.fullwidth.current_promotions_block"}],[213437833,{"a":"#beuszoAjanlo,\n#cikkalatti,\n#floating-recommendation,\n#mc-holder,\n#ovasar,\n#right-ecom,\n#top,\n.col-visible-xl.r-side.col-xl-4,\n.email-under-article,\n.hird300,\n.kiskepes,\n.magnum,\n.spar,\n.szoveges,\n[data-module-name=\"hirlevel\"],\n[data-module-name=\"ingatlanbazar\"],\n[data-module-name=\"koponyeg\"],\n[data-module-name=\"videa\"],\n[size=\"300x600\"],\ndiv[class$=\"widget\"]"}],[1020666721,{"a":"#pr-box,\n.newsletter-layer,\n.panorama-wrapper,\n.pr-item,\n[id^=\"szponz-\"],\ndiv.article-recommendation-zones"}],[222468625,{"a":"#ac"}],[2064596230,{"a":"#page-top"}],[1971488245,{"a":"[class*=\"adserver\"]"}],[1308122936,{"a":"[class*=\"-ad\"]"}],[227708704,{"a":"#navi_btm + div,\nimg[src^=\"https://logout.hu/muvelet/hozzaferes/kapcsolodas.php\"]"}],[1029586056,{"a":".nobanner,\n[class^=\"banner_\"],\n[id^=\"banner_\"]"}],[790091779,{"a":"#exposeMask"}],[143307097,{"a":"#page_PopupContainer"}],[186091296,{"a":".goAds,\n.visible-lg.container"}],[996317722,{"a":"#eucookielaw,\n.ad-magnum,\n.ad-verticalfull,\n[class*=\"simpleads\"]"}],[845409346,{"a":"#block-block-12,\n#block-block-19,\ndiv.gdprBoxContainer,\ndiv.promo-bar"}],[2066816269,{"a":"#newsletter-box,\ndiv[style*=\"fiskars\"],\nhtml body div#all div#mainbgbg div#mainbg>div[style^=\"width: 125px\"]"}],[1232084319,{"a":"[class*=\"articleBanner\"]"}]]);

const hostnamesMap = new Map([["ize.hu",743013784],["napiszex.hu",743013784],["sztarklikk.hu",743013784],["tvgo.hu",743013784],["ncore.pro",743013784],["joy.hu",[1122420891,871543073]],["nlcafe.hu",1122420891],["kalohirek.hu",651734948],["kamaszpanasz.hu",[1648781159,1890158342]],["mozinezo.hu",1890158342],["muhelynet.hu",[1890158342,790091779]],["kapu.hu",1319835851],["kektura.hu",1561002658],["keol.hu",563371805],["kfc.hu",334254487],["kh.hu",1937831414],["kisalfold.hu",[1082254656,553183300]],["gloria.tv",1082254656],["kiszamolo.hu",189408939],["koponyeg.hu",[1314509595,1001351165]],["webbeteg.hu",1001351165],["kossuth.hu",501682611],["kreativ.hu",[874294682,846777774]],["marmalade.hu",874294682],["nol.hu",874294682],["turizmusonline.hu",874294682],["transindex.ro",874294682],["kulturpart.hu",1862441207],["ma.hu",1862441207],["lakberendezes.hu",929078925],["leet.hu",24771241],["libri.hu",649985253],["life.hu",[213437833,1020666721,222468625]],["origo.hu",[1020666721,222468625]],["szoftverbazis.hu",222468625],["unilife.hu",222468625],["lifemagazin.hu",2064596230],["linkcenter.hu",1971488245],["litera.hu",1308122936],["superiorhirek.hu",1308122936],["logout.hu",227708704],["love.hu",1029586056],["lumenet.hu",[790091779,143307097]],["mafab.hu",186091296],["magyarhirlap.hu",996317722],["magyarnemzet.hu",845409346],["mandiner.hu",2066816269],["manus.hu",1232084319]]);

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
