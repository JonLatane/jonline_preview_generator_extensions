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

const argsMap = new Map([[374640945,{"a":".postanzeige"}],[674919200,{"a":"#custom_html-6"}],[963982765,{"a":".med4,\n.med5,\n.unserePartner"}],[179970077,{"a":"#anzeigendiv"}],[1434767770,{"a":"#main-sponsor,\n.sponsoring-footer"}],[496368608,{"a":".hauptsponsor,\n.sponsoren-right"}],[852396917,{"a":"#module-sponsors"}],[134301366,{"a":"img[width=\"150\"][height=\"111\"]"}],[607412794,{"a":"#bannerzone,\n.article-layout__header-wrbng,\n.img-ad,\n.perf-cls-reduc-leaderboard,\n.perf-cls-reduc-rectangle,\nA-PATERNOSTER,\ndiv[style=\"min-height: 250px\"],\ndiv[style=\"min-height: 400px;\"]"}],[812468916,{"a":"a[href^=\"/de/hertha/sponsoren/exklusiv-partner/uebersicht/page/\"]"}],[712274820,{"a":".sky1-outer-container"}],[785637112,{"a":".themenmonat"}],[153398027,{"a":"#anzeiged2"}],[1506503301,{"a":".asm_async_creative"}],[867714897,{"a":".btn-danger,\na[href^=\"https://www.hockeyweb.de/?rex-api-call=pixel_forward&url=\"]"}],[742419902,{"a":"a[href^=\"https://clk.tradedoubler.com/\"]"}],[1378491644,{"a":"#block-block-217,\n#block-block-218,\n#mrec-wrapper,\n#superbanner-wrapper,\n.content-amazon"}],[297665767,{"a":".ksv-sponsoren-footer"}],[979721769,{"a":".hs_anbieter_box_block"}],[164070406,{"a":"div[id^=\"block-views-advertising-\"]"}],[743044427,{"a":".av-partner-fake-img,\n.avia-slideshow-1"}],[1656723299,{"a":"#greyscale-2"}],[108997708,{"a":"#c5307,\n#sponsor-slider"}],[1307328622,{"a":"tr > td[valign=\"top\"]:first-child + td[width=\"15\"] + td[width=\"186\"][valign=\"top\"]:last-child"}],[163792321,{"a":"div[id^=\"ibiza-\"]"}],[583153668,{"a":".brick[data-b-title*=\"Traffective\"]"}],[1513176899,{"a":"#verbraucherhinweis-300x600,\n#verbraucherhinweis-970,\n#verbraucherhinweis-970x250,\n#verbraucherhinweis-latest,\n#verbraucherhinweis-single-300x250"}],[860329673,{"a":"#halfpage-banner"}],[1724356123,{"a":"#immowebAdCont"}],[305237184,{"a":".banner-top-placeholder"}],[323129608,{"a":".amalink"}],[1667039370,{"a":".billboard-wrapper"}],[2054384738,{"a":"#INS_D_ROS_Parallax,\n#parallax"}],[282892121,{"a":"#bigsize"}],[1617877104,{"a":"div[style^=\"width: 728px;\"]"}],[161193226,{"a":".post div[style=\"float:none;margin:0px 0 0px 0;text-align:center;\"],\ndiv[style=\"margin-bottom:.5em;padding-top:.5em;min-height: 270px;display: flex;justify-content: center;align-items: center\"]"}],[1506539118,{"a":".bigbanner,\n.skyscraper_left,\n.skyscraper_right"}],[1818340638,{"a":"#text-64"}],[275315800,{"a":".islam-widget"}],[2051853186,{"a":".ad__template"}],[1747722256,{"a":".plistaList > .itemLinkPET"}],[2039904835,{"a":".mpu"}],[1920902794,{"a":".magazinteaser"}],[290545776,{"a":"#jf-stroer-sky,\n#jf-stroer-superbanner"}],[1334742569,{"a":"#banner_sidebar"}],[1072642807,{"a":".cad_box,\n.fusslogos"}],[1157934892,{"a":"#addemam-wrapper"}],[2061319046,{"a":"#below-header"}],[1434731037,{"a":"#globalAnnouncement"}],[1534037472,{"a":".footer-banner"}],[1744802980,{"a":".kca-wrapper"}],[1075563785,{"a":"a[style=\"position:relative; float:left; width:698px; height:63px; padding-left:28px; padding-right:0px; padding-top:14px; border:1pt solid #DADADC; background:#FFFFFF display:inline;\"]"}],[424392338,{"a":".kick__ad-pos_wrapper"}],[1915534926,{"a":".kick__euro2020-brand-sponsor,\n.kick__modul--euro__sponsor"}],[1337812876,{"a":"#MR,\ndiv[style*=\"height:250px\"]"}],[972702518,{"a":"#header_main"}],[1185747299,{"a":".klartads-widget"}],[67154383,{"a":".banner-position"}],[1167399850,{"a":".admanager__ems__dmofooter-1,\n.admanager__ems__superbanner-1,\n.kb-home-medrec-halfpage"}],[1303405011,{"a":"#mini-panel-rs_teaser_verpoorten,\n.contentRect"}],[486776873,{"a":"div[style=\"width:300px; height:250px;float:left; margin-right:15px; margin-bottom:15px; border:0; background-color:#c0c0c0; overflow:hidden;\"],\ndiv[style=\"width:728px; height: 90px; text-align: center; background-color:#c0c0c0;\"]"}],[2123712792,{"a":".widget-1"}],[221163193,{"a":".sidebar-right > #text-11,\n.sidebar-right > #text-6"}],[378339804,{"a":"#banner-wrapper-right-v3,\n#banner-wrapper-top-v1"}],[710665601,{"a":"#bdaia-widget-e3-10,\n#bdaia-widget-e3-11,\n#bdaia-widget-e3-12,\n#bdaia-widget-e3-14,\n#bdaia-widget-e3-9,\n#bdaia-widget-html-4,\n#bdaia-widget-html-7"}],[102768814,{"a":".dm_ta300x300.sold_content"}],[2054367152,{"a":"img[width=\"200\"][height=\"600\"]"}],[2109551741,{"a":"#content-bottom-highlighted"}],[497350031,{"a":".editorial-teaser"}],[371290414,{"a":"#kratzer,\n.bb_top,\n.ed_d"}],[942327345,{"a":"#content-solads,\n#home-teaser,\n#page-closing-sol,\n#page-top-sol,\n#zeiten,\n.additional-banner,\n.location-teaser,\n.section-banner,\n.sol-content,\na[href^=\"https://zwinkr.de/landing/\"]"}],[944471539,{"a":".addtop"}],[1376743190,{"a":"td[width=\"730\"] + td[align=\"center\"]"}],[393719852,{"a":".banner_rechts,\ndiv[style*=\"width:300px;height:250px;\"]"}],[1477648431,{"a":"img[width=\"468\"][height=\"60\"]"}],[1819000027,{"a":".zusatz_billboard"}],[356042530,{"a":".avad1_widget"}],[1422579941,{"a":".anzeige_content,\n.inline_wrapper"}],[1306036681,{"a":".metaslider"}],[1959611213,{"a":"#tdi_67,\n.media_image-19,\n.media_image-22,\n.media_image-23,\n.media_image-24,\n.media_image-26,\n.media_image-28,\n.media_image-29,\n.media_image-30,\n.media_image-32,\nimg[height=\"250\"],\nimg[width=\"700\"],\nimg[width=\"770\"]"}],[859474921,{"a":"div[class^=\"MoliAd_\"]"}],[611621046,{"a":"#container-sidebar-banners"}],[786749624,{"a":".adlabel"}],[1322532135,{"a":"#banner-floater"}],[907620597,{"a":".productbox"}],[1844858214,{"a":".Content_1-minheight,\n.Content_3-minheight,\ndiv[class^=\"Billboard-\"],\ndiv[class^=\"Billboard_\"],\ndiv[class^=\"Rectangle_\"]"}],[582568736,{"a":"#leadfullWrapper"}],[1095955821,{"a":".top-products,\na[href^=\"http://www.verleihshop.de/index.html?partner=\"]"}],[1699499956,{"a":"#bigsize-top"}],[1616680176,{"a":".spielseite_anz_2,\n.spielseite_kopf"}],[96313598,{"a":".logo-footer-module"}],[1736197866,{"a":".core-commercial,\n.trf-billboardcontainer"}],[710528951,{"a":"a[class*=\"sponsoredProductCard\"]"}],[2080170820,{"a":"#content-banner"}],[358754159,{"a":".clsy-adv-item,\n.clsy-c-advsection"}],[1272718034,{"a":"#container_fs,\n#container_left,\n#container_right"}],[360262829,{"a":".section-banner-fullwidth"}]]);

const hostnamesMap = new Map([["hartware.de",374640945],["haus-garten-magazin.de",674919200],["nachrichten.es",674919200],["hausgeraete-test.de",963982765],["heimwerker-test.de",963982765],["hifitest.de",[963982765,785637112]],["haustechnikdialog.de",179970077],["hc-erlangen.de",1434767770],["hc-erlangen-ev.de",496368608],["hceintracht-hildesheim.de",852396917],["heimspiel-online.de",134301366],["heise.de",607412794],["herthabsc.de",812468916],["hifi.de",712274820],["hl-live.de",153398027],["hockeyweb.de",[1506503301,867714897,742419902]],["scienceblogs.de",1506503301],["tourenfahrer.de",1506503301],["unicum.de",1506503301],["wissen.de",1506503301],["wissenschaft.de",1506503301],["meintomtom.de",742419902],["news.de",742419902],["hoerzu.de",1378491644],["holstein-kiel.de",297665767],["homeandsmart.de",979721769],["hpd.de",164070406],["hsc2000.de",743044427],["hsg-pohlheim.de",1656723299],["hsg-wetzlar.de",108997708],["ibash.de",1307328622],["ibiza-heute.de",163792321],["idowa.de",583153668],["ifun.de",1513176899],["iphone-ticker.de",1513176899],["immo4trans.de",860329673],["immoauktionen.de",1724356123],["immobilienscout24.de",305237184],["indirekter-freistoss.de",323129608],["infranken.de",1667039370],["inside-digital.de",[2054384738,282892121]],["modhoster.de",282892121],["tikonline.de",282892121],["integralrechner.de",1617877104],["ableitungsrechner.net",1617877104],["iphone-tricks.de",161193226],["iplayapps.de",1506539118],["isaswomo.de",1818340638],["islamische-zeitung.de",275315800],["jetzt.de",[2051853186,1747722256]],["prosieben.de",1747722256],["transfermarkt.de",1747722256],["tvspielfilm.de",1747722256],["jetztspielen.de",2039904835],["juedische-allgemeine.de",1920902794],["juraforum.de",290545776],["juve.de",1334742569],["ka-news.de",1072642807],["kalenderwoche.de",1157934892],["karrierebibel.de",2061319046],["kartfahrer-forum.de",1434731037],["katzeausdemsack.de",1534037472],["kauperts.de",1744802980],["kfz-steuer.de",1075563785],["kicker.de",424392338],["euro.kicker.de",1915534926],["kinderspiele-welt.de",1337812876],["klamm.de",972702518],["klartext-ne.de",1185747299],["klassikradio.de",67154383],["kochbar.de",1167399850],["koeln.de",1303405011],["korrekturen.de",486776873],["kostenloses-fernsehen.de",2123712792],["kreativfieber.de",221163193],["kriminalpolizei.de",378339804],["kroatien-nachrichten.de",710665601],["ksta.de",102768814],["kultur-port.de",2054367152],["utvmagazin.de",2054367152],["kunst-zeiten.de",2109551741],["l-mag.de",497350031],["laborjournal.de",371290414],["ladies.de",942327345],["laengengrad-breitengrad.de",944471539],["land-der-traeume.de",1376743190],["lerntippsammlung.de",393719852],["lexolino.de",1477648431],["lifeverde.de",1819000027],["likehifi.de",356042530],["lippe-news.de",1422579941],["lite-magazin.de",1306036681],["lokalo.de",1959611213],["lovelybooks.de",859474921],["lowbeats.de",611621046],["lust-auf-kroatien.de",786749624],["macgadget.de",1322532135],["maclife.de",907620597],["mactechnews.de",1844858214],["macwelt.de",[582568736,1095955821]],["pcwelt.de",582568736],["magistrix.de",1699499956],["mahjongkostenlos.de",1616680176],["mainz05.de",96313598],["mannheimer-morgen.de",1736197866],["manomano.de",710528951],["marketing-boerse.de",2080170820],["markt.de",358754159],["mediabiz.de",1272718034],["meedia.de",360262829]]);

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
