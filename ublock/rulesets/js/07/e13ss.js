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

// deu-0

const argsMap = new Map([[1282241033,{"a":"#myspacerinner,\n#myspacerright,\n#wobra-suche,\n.span > .white_bg[style=\"width: 100%; padding-right: 5px;\"],\n.span.white_bg[style=\"padding: 7px 2px; margin-left: 5px;\"],\n.span[style=\"width: 160px; margin-left: 5px;\"]"}],[1304673253,{"a":".marketing-wrapper"}],[99672098,{"a":".banner-inline"}],[1308011651,{"a":"#portfolio"}],[220288777,{"a":".sponsored--container"}],[1046123344,{"a":".shipment,\n.shipmentPremium"}],[722688834,{"a":"img[width=\"250\"]"}],[1310995705,{"a":".sb"}],[870515144,{"a":"img[width=\"180\"][height=\"120\"],\nimg[width=\"300\"][height=\"150\"],\nimg[width=\"400\"][height=\"100\"]"}],[1867735085,{"a":"div[id^=\"moads-\"]"}],[1891672514,{"a":".dsp-placeholder,\n.srp-placeholder,\n.topresult + .dealerAd,\n.vip-placeholder"}],[591882674,{"a":"#m_vip_slot_2,\n#m_vip_top"}],[1872312545,{"a":"a[data-eventcategory=\"Kooperation\"]"}],[860636544,{"a":".grey-banner,\n.grey-banner-bottom"}],[1106097256,{"a":"#bigsize_inner"}],[278748432,{"a":".Common-Kn-Display,\n.Common-Kn-Rp-FlightInline"}],[1640880590,{"a":"#anzeige"}],[691470001,{"a":".mopo-ads-editor"}],[1809781543,{"a":".mcad_wrapper,\n.mcadblock,\ndiv[class^=\"morec-\"]"}],[184993221,{"a":"#text-16,\n#text-33,\n#text-39,\n#text-41,\n#text-42"}],[555572952,{"a":"#plista,\n.bannerInfo"}],[1835038057,{"a":".boxjob"}],[321023794,{"a":"#MTB_M_ROS_Sticky,\n#header,\n#header-banner-mobile,\n.mtbn-fotos-incontent__container--mobile,\n.mtbnews-forum__in-thread,\n.mtbnews-forum__mobile-top,\n.mtbnews-mobile-sticky,\n.mtbnews-top,\n.mtbnewsAdBillboardContainer"}],[1561709461,{"a":".incontent__container"}],[385285335,{"a":"#freikarten"}],[1831195678,{"a":"#abAside,\n.anzC"}],[2071933710,{"a":".anz"}],[1886828402,{"a":"a[href^=\"https://popup.taboola.com/\"],\niframe[src*=\"//fom.bildungscentrum.de/\"]"}],[282908114,{"a":"#spion_content_container"}],[429894986,{"a":"#toplists"}],[1433013505,{"a":"a[href^=\"https://www6.smartadserver.com/\"] > img"}],[862903716,{"a":"#outofpageWrapper,\n#sb1Wrapper"}],[1136116761,{"a":".ems-slot"}],[1939601058,{"a":".adcontent"}],[2027711867,{"a":"#Ads"}],[1022567655,{"a":".as-frame-center"}],[857307157,{"a":"#logobanner"}],[269065484,{"a":".tdi_88"}],[1440200311,{"a":"#Werbung"}],[1065854416,{"a":".cardealers,\na[class=\"placement\"]"}],[1348746631,{"a":"#FlexSky,\n#news_content_2,\n#news_content_3,\n#news_header,\n.extraContentContainer,\n.halfpage,\n.ialayerContainer"}],[150119708,{"a":".shopWidget"}],[1468524617,{"a":"#div-header,\n#div-sidebar_right_extra,\n#sky-left-container,\n.al-amazon,\n.gptSlot"}],[419834816,{"a":"#text-11,\n#text-13,\n#text-21,\n#text-26,\n#text-35,\n#text-54,\nimg[width=\"330\"][height=\"220\"],\nimg[width=\"533\"]"}],[60404026,{"a":"#homeDisplay,\n.widget_dkge_wrapper"}],[1103159103,{"a":".bannerwrapper"}],[314987080,{"a":"#page_billboard,\ndiv[style=\"min-height:290px\"]"}],[2103845365,{"a":"#nordkurier\\.de_bb_1,\n#nordkurier\\.de_bb_2,\n#nordkurier\\.de_lb_1,\n#nordkurier\\.de_mr_1,\n#nordkurier\\.de_mr_2"}],[1432812320,{"a":".av-carousel,\n.av-fade-carousel"}],[1008884635,{"a":".nozmhn_ad,\ndiv[id^=\"nozmhn_ad_\"]"}],[1443187136,{"a":"#banner_container_rc,\n#banner_left_container_lc"}],[935057255,{"a":".ax-medium-rectangle-n"}],[517084056,{"a":".webcam-premium,\na[href^=\"https://www.visit-x.net/de/w/chathost/?w=\"]"}],[381064388,{"a":".anzeige + .slider,\n.anzeige + p"}],[1563859023,{"a":".swiper-container"}],[1379864941,{"a":".jrCardBanner"}],[938496237,{"a":".adv-indicator,\n.bnrad,\n.right-leaderboard,\n.top-leaderboard"}],[293935860,{"a":"#slot-banner,\n#slot-rectangle,\n#slot-sky"}],[2048199303,{"a":".panel-display > .panel-col-side > #block-views-website-block-1"}],[303066318,{"a":"div[style=\"clear: both; min-height: 300px;\"],\ndiv[style=\"clear: both; min-height: 640px;\"]"}],[1768891649,{"a":".main-club-partner"}],[1603475614,{"a":".boxesBottom,\n.boxgenericBox41"}],[1015863333,{"a":".define"}],[1819417670,{"a":".preisboxinner"}],[1165312935,{"a":"#on-footer-banner,\n#on-rectangle,\n#on-sky,\n.on-top-banner-wrapper"}],[406510985,{"a":"#SMART_BILLBOARD,\n.ANZEIGE,\n.BILLBOARD,\n.SKYSCRAPER,\n.TEASERBOX.DEPOT_KONTO,\n.advertisedFund,\n.isSponsored,\na[href*=\"&adname=\"]"}],[574500494,{"a":"#jsn-pos-user-top"}],[1396870650,{"a":"#bigklick"}],[1827865239,{"a":".header-widget-inner"}],[364024286,{"a":".ox"}],[2092731524,{"a":".paradiso-hp-ads-horizontal"}],[1755493821,{"a":".anzeigen"}],[829988777,{"a":".affiliateBelowArticle"}],[1823203615,{"a":".at_sponsored"}],[1930235830,{"a":".box[data-ga-event-label=\"Angebote für PC-WELT Leser\"],\n.box[data-ga-event-label=\"Für Sie empfohlen\"],\n.box[data-ga-event-label=\"PC-WELT Specials\"],\n.idgAmazonTextV2,\n.marketplace,\na[href^=\"http://www.pcwelt.de/pv/\"],\na[href^=\"http://www.verleihshop.de/pwindex.html?partner=\"],\na[href^=\"https://get.surfshark.net/aff_c?\"],\na[href^=\"https://ndirect.ppro.de/\"],\na[href^=\"https://pvn.mediamarkt.de/\"],\na[href^=\"https://pvn.saturn.de/\"],\na[href^=\"https://tracking.s24.com/\"],\na[href^=\"https://www.tkqlhce.com/click-\"]"}],[1432672363,{"a":"a[href^=\"https://www.awin1.com/cread.php?\"]"}],[1167473706,{"a":".Laddbox,\n.Laddbox300"}],[540732591,{"a":"kas"}],[1892197891,{"a":".superbanner-frame"}],[1344634372,{"a":"div[class^=\"pictu-\"]"}],[300625898,{"a":"#sidebar_right > #HTML7,\n#sidebar_right > #HTML9"}],[1754889400,{"a":".clipad,\ndiv[style=\"float:right; width: 300px; height: 250px\"]"}],[1591365330,{"a":"#omsRectangleChannel"}],[1805904734,{"a":".amazon"}],[794245804,{"a":"div[id^=\"playf-\"]"}],[472159980,{"a":".sidebar > .imglinks"}],[2081700968,{"a":".ts-sptag"}],[1707922114,{"a":"#ad1"}],[1524137395,{"a":"#ad2,\n#ad3"}],[347568731,{"a":"#custom_html-21,\n.sc-button[href^=\"https://amzn.to/\"],\n.sc-button[href^=\"https://www.amazon.de/\"],\ndiv[style=\"min-height: 280px;\"]"}],[1276846791,{"a":".prad-td-header-sp-recs"}],[2038693730,{"a":"#header-image-js"}],[1357501325,{"a":".cms-cl_tariff-row--ad"}],[767423879,{"a":".AFS_ADD"}],[805926301,{"a":"img[width=\"160\"][height=\"92\"]"}],[585468691,{"a":".td-header-container"}],[1722855893,{"a":"div[id^=\"profe-\"]"}]]);

const hostnamesMap = new Map([["meetingpoint-brandenburg.de",1282241033],["mein-pferd.de",1304673253],["mein-wahres-ich.de",99672098],["meintomtom.de",1308011651],["menshealth.de",220288777],["motorradonline.de",220288777],["runnersworld.de",220288777],["merkurist.de",1046123344],["messweb.de",722688834],["metal.de",1310995705],["mikanews.de",870515144],["mo-web.de",1867735085],["mobile.de",1891672514],["m.mobile.de",591882674],["mobilegeeks.de",1872312545],["modernhifi.de",860636544],["modhoster.de",1106097256],["momondo.de",278748432],["moonsault.de",1640880590],["mopo.de",691470001],["morecore.de",1809781543],["motormobiles.de",184993221],["moviejones.de",555572952],["msxfaq.de",1835038057],["mtb-news.de",321023794],["bikemarkt.mtb-news.de",1561709461],["mufa.de",385285335],["musiker-board.de",[1831195678,2071933710]],["recording.de",2071933710],["musikexpress.de",1886828402],["mv-spion.de",282908114],["myfont.de",429894986],["myhomebook.de",1433013505],["myself.de",862903716],["n-tv.de",1136116761],["nachtkritik.de",1939601058],["nd-aktuell.de",2027711867],["neue-braunschweiger.de",1022567655],["neuelandschaft.de",857307157],["neumarkt-tv.de",269065484],["neumarktaktuell.de",1440200311],["neuwagen.de",1065854416],["news.de",1348746631],["newzs.de",150119708],["nextpit.de",1468524617],["nh24.de",419834816],["nibelungen-kurier.de",60404026],["nnz-online.de",1103159103],["nordbayern.de",314987080],["nordkurier.de",2103845365],["notebookinfo.de",1432812320],["noz.de",1008884635],["nrhz.de",1443187136],["nrwhits.de",935057255],["nsladies.de",517084056],["ntg24.de",381064388],["ntz.de",1563859023],["scdhfk-handball.de",1563859023],["nur-positive-nachrichten.de",1379864941],["oberberg-aktuell.de",938496237],["obermain.de",293935860],["rhoenundsaalepost.de",293935860],["oekoportal.de",2048199303],["oekotest.de",303066318],["ofc.de",1768891649],["offroadforen.de",1603475614],["ok-magazin.de",1015863333],["oljo.de",1819417670],["onmeda.de",1165312935],["onvista.de",406510985],["ostfriesischer-kurier.de",574500494],["osthessen-news.de",1396870650],["oxmoxhh.de",1827865239],["oz-online.de",364024286],["paradiso.de",2092731524],["partyamt.de",1755493821],["pcgames.de",829988777],["pcgameshardware.de",1823203615],["pcwelt.de",[1930235830,1432672363]],["radsport-seite.de",1432672363],["perspektive-mittelstand.de",1167473706],["petra.de",540732591],["pharmazeutische-zeitung.de",1892197891],["pictures-magazin.de",1344634372],["pinksugar-kessy.de",300625898],["pixelio.de",1754889400],["planetradio.de",1591365330],["plattentests.de",1805904734],["playfront.de",794245804],["ploetzblog.de",472159980],["pnn.de",2081700968],["tagesspiegel.de",2081700968],["pokewiki.de",[1707922114,1524137395]],["timeanddate.de",1707922114],["popkultur.de",347568731],["prad.de",1276846791],["preis.de",2038693730],["preis24.de",1357501325],["preissuchmaschine.de",767423879],["prewarcar.de",805926301],["primavera24.de",585468691],["professional-audio.de",1722855893]]);

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
