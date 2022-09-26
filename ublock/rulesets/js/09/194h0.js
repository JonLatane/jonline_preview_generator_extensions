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

const argsMap = new Map([[321109368,{"a":".gujad-wrapper"}],[196200650,{"a":"#R1C1,\n#R1C2,\n#R1C3,\n#hp-aquamarin,\n#hp-aquamarin-1,\n#hp-aquamarin-2,\n.AD,\n.FC.mt-md-so[role=\"complementary\"],\n.FC__Container.min-height-250px-mu,\n.kasperskyclick,\na[onclick*=\".chip-secured-download.de/payperdownload/click?\"]"}],[1039609607,{"a":".Ad"}],[1855414190,{"a":"#sky-tisoomi-wrapper,\n.mrec-news"}],[1566160852,{"a":".c-FloatingPrompt,\n.compar_tbl_body_plugin,\n.su-button,\ndiv[id^=\"coinc-\"]"}],[1077928066,{"a":".abo"}],[2117997259,{"a":".wv_story_el_billboard"}],[105629898,{"a":".adbox-outstream,\n.article-view__rectangle,\n.blackfriday,\n.block1--banner,\n.block1--skyscraper,\n.text-ad,\na[rel*=\"sponsored\"] > img[alt=\"Anzeige\"]"}],[1150622692,{"a":".trc_related_container .syndicatedItem:not(.inNetworkItem)"}],[1971601394,{"a":"#text-2"}],[219433284,{"a":".idgLeaderBoard"}],[1553033115,{"a":".adcontainer"}],[758038628,{"a":".promContainer"}],[1461676299,{"a":".advert"}],[524380406,{"a":".quiz-footer-wrapper"}],[762807853,{"a":".banner-section"}],[448927389,{"a":".review-recommendation-headline,\n.review-recommendation-headline + a"}],[1307999284,{"a":"div[style*=\"width: 300px; height: 300px;\"]"}],[1191286081,{"a":"a[href^=\"https://www.amazon.de/\"] > img,\na[href^=\"https://www.google.com/\"] > img"}],[688493346,{"a":"#gpt_superbanner"}],[1488780605,{"a":"a[href^=\"https://www.manitu.de/?partner=\"]"}],[211978383,{"a":"#banner-right,\n#content-billboard,\n.premiumtreffer"}],[1412520603,{"a":"#dtm_multiboxcontainer,\n.banner_tl"}],[1174454671,{"a":".banner_top"}],[844584657,{"a":".wk"}],[299527914,{"a":".ed-element"}],[1113476630,{"a":".custom-inhoadd"}],[2015966934,{"a":".anzeige-links,\n.billbo"}],[173810663,{"a":".sad_banner,\n.sad_out-of-page,\n.sad_pubperform,\n.sad_rectangle,\n.sad_rectangle_2,\n.sad_sky,\n.sad_topmobile"}],[1448271882,{"a":".presse"}],[1282555045,{"a":"#superBContainer"}],[908739670,{"a":".container-banner-2,\n.partnerlogos"}],[129176985,{"a":".rotation-partners"}],[571080705,{"a":"#rstpl-before-higher-position,\n.banneritem,\n.n2-ss-slider-3"}],[398006360,{"a":".Rectangle"}],[1663292480,{"a":".widget_commerce"}],[1844178682,{"a":"#custom_html-8"}],[662101433,{"a":".amazon-auto-links,\n.custom_html-7,\ndiv[style=\"margin-bottom:10px\"]"}],[1304677191,{"a":"#sponsoren"}],[532558344,{"a":"#vlybyOneByOneWrapper"}],[539219855,{"a":".billboardbanner"}],[1762764609,{"a":"a[href^=\"/adserver/goto/\"],\na[href^=\"https://servedby.flashtalking.com/\"]"}],[413814388,{"a":"#dsBanner"}],[10457331,{"a":"#banner_right"}],[1599933927,{"a":"#banner_top"}],[1217029945,{"a":"#DCA_TOP"}],[34999126,{"a":"#DKGA_LEAD,\n#DKGA_SKY"}],[1576941608,{"a":"td[width=\"120\"][valign=\"top\"][align=\"center\"]:last-child"}],[268107360,{"a":"#c3296,\n#c5812"}],[934118410,{"a":"#AD,\n.footer-sponsor-section"}],[921169329,{"a":".ng-banner"}],[1765548736,{"a":".dbh-widget,\ndiv[id^=\"dbh-\"]"}],[2050661634,{"a":"#block-dudende-d-970x250-1billboard,\n#block-leaderboard2ndslot,\n#block-lexemleaderboardunten,\n.tabloid__side-column-top,\n.tile__wrapper"}],[283792150,{"a":".park-portal"}],[1292490150,{"a":"a[href^=\"https://www.all-inkl.com/index.php?partner=\"],\na[href^=\"https://www.octagon-germany.eu\"],\na[href^=\"https://www.satshop24.de\"]"}],[1787804049,{"a":".sponsor-list"}],[1726903706,{"a":".ce_plista"}],[1424443155,{"a":"#EAT_D_Index_Top_Wrapper,\n.adsense"}],[968883396,{"a":".srp-1p__banner,\n.vi-lb-placeholder"}],[1490324693,{"a":"#brws_banner-supersize,\n#liberty-home-above-header,\n#liberty-vip-billboard,\n#liberty-vip-middle,\n#liberty-zsrp-bottom,\n#liberty-zsrp-top-banner,\n.j-liberty-wrapper,\ndiv[data-liberty-ad-loaded=\"true\"]"}],[1418152850,{"a":"#text-20"}],[1076162625,{"a":"#marktplatz,\n.sbad"}],[1733177680,{"a":".g-adv-side,\n.g-adv-top > .inside"}],[966548900,{"a":".n2-ss-slider-pipeline"}],[419162579,{"a":"#media_gallery-2"}],[1894441033,{"a":"#rightcolumndiv"}],[522327202,{"a":".affiliate-button"}],[1747431268,{"a":".ef-article-card--ad,\n.ef-footer__section,\n.ef-footer__section--logos,\n.ef-stadium-ad__banner"}],[1563026977,{"a":".sponsor_wrapper"}],[856642214,{"a":".bannerContent"}],[145607550,{"a":"#MidRectangle"}],[642528789,{"a":"#oc24_container_top"}],[702453411,{"a":".holder-box-5"}],[552512630,{"a":".in-content"}],[2010318406,{"a":".p-header"}],[1216830797,{"a":"a[href*=\"/redirect/\"]"}],[1440147192,{"a":"div[class^=\"mtbnews-ad-container\"]"}],[1878862724,{"a":"a[href^=\"https://rover.ebay.com/\"]"}],[633353648,{"a":".promo"}],[1322886977,{"a":".plainContentCollection"}],[1395652587,{"a":".group-externe-links"}],[675477423,{"a":".placeholdercontainer"}],[1745926237,{"a":".eral_wrapper"}],[1096453712,{"a":"#stream-item-widget-2,\n#stream-item-widget-3"}],[2058113667,{"a":".ea-gat-slot-wrapper"}],[1650738860,{"a":".js-mock-banner"}],[1513115519,{"a":".js-stats-click"}],[513129418,{"a":".pub"}],[1143472035,{"a":".pub-content"}],[303472379,{"a":".bwdfb-widget"}],[870705221,{"a":".dm-slot"}],[1041072673,{"a":".premiumpartner,\n.topsponlink"}],[232483512,{"a":"#block-block-32,\n#block-block-35,\n#block-block-5"}],[452733884,{"a":"#sp-content-top"}],[673791633,{"a":"#text-4"}],[1014602265,{"a":".borlabs-dealer,\n.borlabs_fairaudio_ads_widgetx,\n.candy-top"}],[349045014,{"a":"#incontent_1,\n#incontent_2"}]]);

const hostnamesMap = new Map([["chefkoch.de",321109368],["chip.de",[196200650,1039609607]],["finanzfrage.net",1039609607],["gutefrage.net",1039609607],["clever-tanken.de",1855414190],["coincierge.de",1566160852],["com-magazin.de",1077928066],["come-on.de",2117997259],["fnp.de",2117997259],["fr.de",2117997259],["merkur.de",2117997259],["soester-anzeiger.de",2117997259],["tz.de",2117997259],["wa.de",2117997259],["computerbase.de",105629898],["computerbild.de",1150622692],["computerschach.de",1971601394],["nh24.de",1971601394],["randombrick.de",1971601394],["nachrichten.es",1971601394],["computerwoche.de",219433284],["tecchannel.de",219433284],["connect.de",1553033115],["pc-magazin.de",1553033115],["vaterland.li",1553033115],["coolibri.de",758038628],["countrymusicnews.de",1461676299],["eurogamer.de",1461676299],["ka-news.de",1461676299],["morningstar.de",1461676299],["suedkurier.de",1461676299],["weser-kurier.de",1461676299],["crossmagazin.de",524380406],["curt.de",762807853],["curved.de",448927389],["custombike.de",1307999284],["cyclingmagazine.de",1191286081],["cz.de",688493346],["goettinger-tageblatt.de",688493346],["haz.de",688493346],["kn-online.de",688493346],["ln-online.de",688493346],["lvz.de",688493346],["maz-online.de",688493346],["neuepresse.de",688493346],["op-marburg.de",688493346],["ostsee-zeitung.de",688493346],["paz-online.de",688493346],["waz-online.de",688493346],["daily-pia.de",1488780605],["dasoertliche.de",211978383],["dastelefonbuch.de",[1412520603,1174454671]],["dnv-online.net",1174454671],["delamar.de",844584657],["der-rissener.de",299527914],["derkleinegarten.de",1113476630],["designtagebuch.de",2015966934],["desired.de",173810663],["familie.de",173810663],["deutsche-apotheker-zeitung.de",1448271882],["deutsche-versicherungsboerse.de",1282555045],["deutscherskiverband.de",908739670],["dfb.de",129176985],["diebildschirmzeitung.de",571080705],["dieharke.de",398006360],["diesachsen.de",1663292480],["digitalfernsehen.de",[1844178682,662101433]],["eu-vertretung.de",[1844178682,1096453712]],["digitalkamera.de",1304677191],["h-bw.de",1304677191],["digitalphoto.de",532558344],["djmag.de",539219855],["dkamera.de",1762764609],["drehscheibe-online.de",413814388],["dreingau-zeitung.de",[10457331,1599933927]],["linguee.de",1599933927],["druckerchannel.de",1217029945],["druckkosten.de",34999126],["dslr-forum.de",1576941608],["dsv.de",268107360],["dtb.de",934118410],["dtb-tennis.de",921169329],["dubisthalle.de",1765548736],["duden.de",2050661634],["duesseldorfer-anzeiger.de",283792150],["dxtv.de",1292490150],["dynamo-dresden.de",1787804049],["e-formel.de",1726903706],["eatsmarter.de",1424443155],["ebay.de",968883396],["ebay-kleinanzeigen.de",1490324693],["ebook-fieber.de",1418152850],["ef-magazin.de",1076162625],["ego4u.de",1733177680],["ehv-aue.de",966548900],["eihi.de",419162579],["einrichtungsbeispiele.de",1894441033],["einsteiger-keyboard.de",522327202],["eintracht.de",1747431268],["eisbaeren.de",1563026977],["eishockeynews.de",856642214],["elektrikforen.de",[145607550,642528789]],["megane-board.de",145607550],["windows-7-forum.net",145607550],["emmikochteinfach.de",[702453411,552512630]],["karrierebibel.de",552512630],["emtb-news.de",[2010318406,1216830797,1440147192]],["ladies.de",1216830797],["mtb-news.de",[1216830797,1440147192]],["emuenzen.de",1878862724],["endstation-rechts.de",633353648],["englisch-lernen-online.de",1322886977],["epd-film.de",1395652587],["esquire.de",675477423],["etcg.de",1745926237],["euractiv.de",2058113667],["eurocampings.de",1650738860],["eurogirlsescort.de",1513115519],["europa-landmaschinen.de",[513129418,1143472035]],["suedtirolnews.it",513129418],["eventelevator.de",303472379],["express.de",870705221],["f95.de",1041072673],["fachzeitungen.de",232483512],["factsverlag.de",452733884],["fahrzeuglackiererforum.de",673791633],["fairaudio.de",1014602265],["familienkost.de",349045014]]);

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
