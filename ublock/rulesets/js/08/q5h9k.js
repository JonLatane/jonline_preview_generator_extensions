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

// nld-0

const argsMap = new Map([[1135431477,{"a":".widget_alaya_ad"}],[1993640441,{"a":".aa-top-dog,\n.widget_offers,\n[data-name=\"dynamic-content\"][data-nosnippet],\nheader[data-name=\"featured-header\"]"}],[2132283782,{"a":".footer-widget-1,\n.header-widget-region"}],[1472533026,{"a":"#aanbblok,\n#singleab,\n.ph_upgreatest,\n[class^=\"ph_block\"],\na[href^=\"/adverteren-\"]"}],[758040057,{"a":".content-start > .items-center:has([advobject])"}],[1948259548,{"a":"#adblk1,\n#bottum_ad"}],[157327454,{"a":"div[class^=\"col-sm-\"]:has(.ad-item)"}],[542311038,{"a":"[href=\"/dl-14-days-trial\"]"}],[1695309797,{"a":".widget_ab_sidebar"}],[1771460237,{"a":".widget_nlpartners"}],[1894156675,{"a":"#parentgpt,\n.autowereld_ros_bravo_leaderboard-billboard,\n.bottom-bannuring"}],[1383364564,{"a":"#liggende-banner,\n.advertentie_links,\n.bigbanner"}],[1905972199,{"a":".advertise"}],[1951509563,{"a":"#banner-lister-top,\n#mainbanner"}],[918324808,{"a":".ad300x1050,\naside > .ad"}],[445724518,{"a":".block.mod_article:has(.flexslider)"}],[1516381266,{"a":".shailan_banner_widget"}],[1309466005,{"a":".w-300x.RM5"}],[1229208301,{"a":"div[data-component=\"partner\"]"}],[992618863,{"a":".widget_random_banner_widget"}],[2104895900,{"a":".plusbtn"}],[222297989,{"a":".Textads"}],[633353648,{"a":".promo"}],[912035585,{"a":".bh-ads"}],[1282017514,{"a":"[id^=\"ad-block\"]"}],[556811761,{"a":".plus500,\n.ut--billboard,\n.ut--rectangle"}],[502152381,{"a":".widget:has(img[src^=\"https://beveiligingnieuws.nl/banners/\"])"}],[47826706,{"a":".bieos-widget"}],[305868590,{"a":"#BJA2,\n#BJA3,\n#banTop"}],[1369955924,{"a":".elementor-image:has(img[src*=\"banner\"])"}],[1193116078,{"a":"aside div[class=\"c-teaser\"]:not(:has(a[href*=\"binnenlandsbestuur.nl\"]))"}],[1023427731,{"a":"div[style=\"height:52px;\"]"}],[1696643438,{"a":".ligatus-sidebar-block,\n[id^=\"block-block-\"]:has([target=\"_blank\"] > img.media-element)"}],[613953941,{"a":".branded"}],[103530886,{"a":".bnrrow"}],[247548422,{"a":"#frontpage_mediumrect"}],[1897222972,{"a":"[id^=\"block-\"]:has([src*=\"_Banner\"])"}],[738094675,{"a":".wpb_wrapper[data-td-block-uid^=\"tdi_\"]:has(.owl-item)"}],[385254391,{"a":"a[href^=\"https://www.onderdelenshop24.com/\"]"}],[1714618036,{"a":"#banners"}],[56624750,{"a":"[href^=\"https://partner.bol.com/\"],\ncenter:has([src^=\"https://partner.bol.com/\"])"}],[19117751,{"a":".linklist,\n.uitradar:has(img[src*=\".nl/resources//images/promo/\"])"}],[891627541,{"a":".ll_partnerexpert,\n[class*=\"-teaser\"]:has(.bi-label--advertorial)"}],[1296925262,{"a":".TS_Banner_Spot"}],[1742067058,{"a":".ontwerp_ads"}],[1163246640,{"a":"[class$=\"container\"]:has([id*=\"HyperLinkBanner\"])"}],[915200609,{"a":".happy-player-beside,\n.happy-section"}],[2076108462,{"a":"#b_searchboxInc,\n.theiaStickySidebar > .text-html-box:not(:has(a[href^=\"https://ciaotutti.nl/\"])):not(:has(a[href^=\"http://eepurl.com/\"])):not(:has(a[href*=\"facebook.com/blogciaotutti\"]))"}],[823999772,{"a":".d-none.d-md-block:has([class*=\"anativead\"][href*=\"/ad/\"]),\n.vacation-big-widget"}],[575927405,{"a":"div.brievenbus"}],[586241091,{"a":".owl-carousel"}],[705816968,{"a":"#partners"}],[1355312318,{"a":"#ads"}],[1513645303,{"a":".theiaStickySidebar div[id^=\"media_image\"]:has(img[src*=\"wp.com/\"])"}]]);

const hostnamesMap = new Map([["amsterdamactueel.nl",1135431477],["androidplanet.nl",1993640441],["iphoned.nl",1993640441],["anoniem-surfen.nl",2132283782],["appletips.nl",1472533026],["arenalokaal.nl",758040057],["hetkrantje-online.nl",758040057],["asex.nl",1948259548],["assercourant.nl",157327454],["emmercourant.nl",157327454],["audiobookbay.nl",542311038],["autoblog.nl",1695309797],["automobielmanagement.nl",1771460237],["carwashpro.nl",1771460237],["infrasite.nl",1771460237],["ovpro.nl",1771460237],["rijschoolpro.nl",1771460237],["spoorpro.nl",1771460237],["tankpro.nl",1771460237],["taxipro.nl",1771460237],["verkeersnet.nl",1771460237],["autoreview.nl",1894156675],["autosport.nl",1383364564],["autoweek.nl",1905972199],["autowereld.nl",1951509563],["autozine.nl",918324808],["azerty.nl",445724518],["baanwacht.nl",1516381266],["barneveldsekrant.nl",1309466005],["edestad.nl",1309466005],["basketball.nl",1229208301],["bdsmleven.nl",992618863],["rtvideaal.nl",992618863],["belegger.nl",[2104895900,222297989]],["beursonline.nl",222297989],["debeurs.nl",222297989],["beleggersbelangen.nl",633353648],["berekenhet.nl",912035585],["besteproduct.nl",1282017514],["beursgorilla.nl",556811761],["beveiligingnieuws.nl",502152381],["bieos-omroep.nl",47826706],["biernet.nl",305868590],["biflatie.nl",1369955924],["binnenlandsbestuur.nl",1193116078],["bitcoinmagazine.nl",1023427731],["blikopnieuws.nl",1696643438],["bnr.nl",613953941],["bodylifebenelux.nl",103530886],["bokt.nl",247548422],["bol-an.nl",1897222972],["bollenstreekomroep.nl",738094675],["omroepspakenburg.nl",738094675],["bollywood.nl",385254391],["brandweerspotters.nl",1714618036],["coc.nl",1714618036],["cocamsterdam.nl",1714618036],["cochaaglanden.nl",1714618036],["fanclubbarcelona.nl",1714618036],["briefjevanjan.nl",56624750],["buienradar.nl",19117751],["businessinsider.nl",891627541],["buzzbie.nl",1296925262],["cabla.nl",1742067058],["camping-frankrijk.nl",1163246640],["camsexbabe.nl",915200609],["ciaotutti.nl",2076108462],["cip.nl",823999772],["classic.nl",575927405],["classicstogo.nl",586241091],["coastline945fm.nl",705816968],["coastlinefm.nl",705816968],["elfvoetbal.nl",705816968],["fonkmagazine.nl",705816968],["cocdeventer.nl",1355312318],["apintie.sr",1355312318],["commonsensetv.nl",1513645303]]);

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
