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

const argsMap = new Map([[1186282742,{"a":"#qql"}],[340483235,{"a":"tr:first-child:last-child > td[align=\"left\"][width=\"150\"][valign=\"top\"]:first-child + td[align=\"center\"] + td[align=\"left\"][width=\"150\"][valign=\"top\"]:last-child"}],[1226093449,{"a":".mod-sponsor-icon"}],[945546795,{"a":".hauptsponsoren"}],[1802854961,{"a":".module-footer-sponsors"}],[1922480105,{"a":".b-logo-listing,\n.sponser-lead-inner"}],[781091303,{"a":".top-footer-inner"}],[822231666,{"a":".sponsoren_wrapper"}],[490549203,{"a":".fusion-builder-row-3,\nimg[width=\"280\"][height=\"160\"]"}],[387921300,{"a":".elementor-element-f2d5c64"}],[263781663,{"a":".werbemittel"}],[736853941,{"a":".card-streaming-btns"}],[1908706666,{"a":".main-banner"}],[823912380,{"a":"#m > div[style=\"left:16px;width:468px;overflow:hidden\"] + .p[style=\"left:4px;width:492px;height:262px\"]:last-child"}],[598918682,{"a":"#block-2,\n#block-7"}],[1322573026,{"a":".snippet--cta"}],[1195842703,{"a":"div[id^=\"banner_\"]"}],[1090024543,{"a":"div[id^=\"finan-\"]"}],[582864329,{"a":"#dban1"}],[68493872,{"a":"#dban2,\n#dmr1,\n#dmr2,\n#fn-ankuendigung,\n#sideteaser,\n.nadT,\n.smartbroker--text,\n.smartbroker-logo,\n.smartbroker1"}],[1191825381,{"a":".videosponsor_hsbc"}],[1531149672,{"a":".affiliate-amex,\n.affiliate-mediamarkt,\n.affiliate-o2,\n.affiliate-saturn,\n.affiliate-tink"}],[89568958,{"a":"a[href^=\"https://www.communicationads.net/tc.php\"] > img"}],[298046060,{"a":".adv"}],[75280693,{"a":".head-top-bannerplace,\n.wrapper-banner"}],[548651058,{"a":".pbph,\n.skyscrapper-left,\n.skyscrapper-right,\ndiv[id^=\"cncpt-dsk_\"]"}],[1900293682,{"a":".boxOverContent__banner"}],[1276577774,{"a":".float-widget,\n.partners-title + .partners"}],[1573243891,{"a":".sidebar_partners"}],[1853162832,{"a":".user-flzads-pi1"}],[851985128,{"a":"#CT_DESKTOP_NATIVE_HOR_ANY_hor2,\n#tfm_admanagerTeaser,\n#tfm_footer_yield,\n.adsBlock,\n.cad,\n.cad_native,\n.cls_slot_xxoutstreamxx,\n.cls_ver_prnt,\n.cls_ver_prnt_xs,\n.fol_mew-flying-carpet-wrapper,\n.ob-ad-carousel-layout,\n.ps-trackingposition_OrangerButton,\n.ps-trackingposition_PDFkasten,\n.shoppingcartctn,\na[href^=\"https://www.communicationads.net/tc.php\"],\na[href^=\"https://www.financeads.net/tc.php\"],\ndiv[id^=\"CT_SMARTPHONE_NATIVE_\"],\ndiv[id^=\"M_CONTENTAD\"],\ndiv[id^=\"M_TRSCT_hor\"]"}],[1718698650,{"a":"div[id^=\"foodw-\"]"}],[1870530260,{"a":"#bs-container,\ndiv[id^=\"outer_sas_\"]"}],[1883282122,{"a":".banner-row"}],[1816430475,{"a":".pane-landing-advertorial"}],[503218641,{"a":".id-StoryElement-beepWrap"}],[723111334,{"a":"#gf-superbanner"}],[107107640,{"a":"#frnBanner,\n.frn_contAmazon"}],[1152888910,{"a":".result-container > .container-right"}],[1446892733,{"a":".sponsors-wrapper"}],[1650682410,{"a":".widget_links"}],[138442415,{"a":"#ezisgib,\n#thgirrennab,\n.hinweisad"}],[224208046,{"a":".bannertop,\n.ligaadd,\n.premiumPartner,\n.skyadd"}],[1763381680,{"a":".element_leaderboard,\n.element_squarebuttongroup,\n.news-item-wbg"}],[415860942,{"a":"img[width=\"140\"][height=\"140\"]"}],[333654199,{"a":".fp-banner"}],[661608266,{"a":".noContentBannerArea,\n.tandem_right,\n.tandem_top,\ndiv[id^=\"npm_\"]"}],[1694840771,{"a":".mediumrectangle"}],[1313508644,{"a":".superbanner"}],[1232115051,{"a":"#partnerCentersLogoBar"}],[569545119,{"a":".news-spiel-quoten"}],[1327051534,{"a":"#SPMADS_fussballn_HOME_MEDREC_1"}],[206264595,{"a":".block-11,\n.block-12,\n.block-13,\n.block-15"}],[868740563,{"a":".normal_text[width=\"100%\"][valign=\"top\"][height=\"100\"][align=\"left\"][border=\"0\"]"}],[1030196917,{"a":".jad-placeholder"}],[1639536215,{"a":"img[width=\"300\"][height=\"246\"]"}],[18865257,{"a":"#mpu,\n#sky2_1,\ndiv[style=\"min-height: 600px; margin-bottom: 20px;\"]"}],[917463183,{"a":"#arb"}],[1896468408,{"a":".yftovjn,\n.yftovjn-container"}],[485871230,{"a":"#dfp-header,\n#dfp-header-container,\n#rectangle-container-desktop,\ndiv[id^=\"ad-div-\"]"}],[1299019332,{"a":".widget_aawp_widget_bestseller"}],[611764764,{"a":".widget_aawp_widget_box"}],[1945983306,{"a":".mobile-interscroller"}],[2089929509,{"a":".header-widget-area"}],[1151310489,{"a":"a[data-track]"}],[600887888,{"a":"#right-banners,\n.hitdb"}],[338417753,{"a":"#banner_content"}],[2109361754,{"a":"#buybox"}],[1853441684,{"a":"#dtm_super,\n#rectangles,\n.mod-RechteWerbespalteStartseite"}],[2098899250,{"a":".shoepassion_content_banner,\n.shoepassion_sidebar_banner"}],[601802673,{"a":"#teaserheld-header"}],[334391992,{"a":".banner-homepage,\n.sidebar-btn-affiliate[rel=\"nofollow noopener sponsored\"],\ndiv[data-trigger=\"sourcepoint-ad\"]"}],[1443147643,{"a":".verticalCarousel"}],[1353908681,{"a":"div[style=\"border: 1px solid #000; padding: 5px; margin-bottom: 15px; background: url(https://www.go2android.de/wp-content/plugins/amazonsimpleadmin/img/amazon_DE_small.gif) right bottom no-repeat #ffffff;\"]"}],[1918378792,{"a":"#coba_trading_investment_news,\n.v-is-sponsored-box"}],[2071782691,{"a":"#pricehits,\n.g6 > .clearfix[style=\"margin: 20px 0; clear: both; min-height: 640px;\"],\n.gbox_affiliate,\n.sp-breakout-affy,\n.tags"}],[36897835,{"a":"div[id^=\"csi_forum\"][style=\"min-height: 100px; padding: 0px; display: block;\"]"}],[1500645906,{"a":".ad_list"}],[1970984099,{"a":".premium_firm_list"}],[1697262137,{"a":"a[href^=\"https://amzn.to/\"] > img"}],[998733352,{"a":".mgawerbungbase"}],[844615080,{"a":".container_skyscraper"}],[466723569,{"a":".noContentBannerWb"}],[1557523244,{"a":".footer"}],[2043302828,{"a":"#rothaus-aktion"}],[423460676,{"a":".mh-widget.s5214-widget"}],[1979849055,{"a":".banner_image"}],[361209577,{"a":"#sponsors_slider,\n.home_sponsor_slider,\nimg[width=\"605\"][height=\"690\"]"}],[1679075088,{"a":".vc_carousel-inner"}],[392375432,{"a":"img[alt^=\"Werbung\"]"}],[1594173599,{"a":".ad-info,\na[data-adid]:not([data-adid=\"12937\"])"}],[868455076,{"a":".tx-imagecycle-pi1"}],[1553526997,{"a":"div[id^=\"promotionHeader\"]"}],[1736402134,{"a":".bannerbox"}],[1000439598,{"a":".su-button-wide[href^=\"http://amzn.to/\"]"}],[1451089854,{"a":"div[id^=\"hardw-\"]"}],[845346733,{"a":".ba-fullsize"}]]);

const hostnamesMap = new Map([["fanfiktion.de",1186282742],["favicon-generator.de",340483235],["fc.de",1226093449],["fc-hansa.de",945546795],["fc-union-berlin.de",1802854961],["fcaugsburg.de",1922480105],["fcbinside.de",781091303],["fcenergie.de",822231666],["fcschweinfurt1905.de",490549203],["femotion.de",387921300],["fernsehserien.de",263781663],["filmlaune.de",736853941],["filmstarts.de",1908706666],["filmz.de",823912380],["finanzen-nerd.de",598918682],["finanzen100.de",[1322573026,1195842703]],["spielen.de",1195842703],["finanzmarktwelt.de",1090024543],["finanznachrichten.de",[582864329,68493872]],["wallstreet-online.de",582864329],["finanztreff.de",1191825381],["fitbook.de",[1531149672,89568958]],["myhomebook.de",1531149672],["stylebook.de",[1531149672,89568958]],["techbook.de",1531149672],["travelbook.de",[1531149672,89568958]],["fitforfun.de",298046060],["ibb-anzeiger.de",298046060],["suchen.mobile.de",298046060],["suedtiroltv.it",298046060],["fkk24.de",75280693],["fla.de",548651058],["flashscore.de",1900293682],["floatmagazin.de",1276577774],["flugmodell-magazin.de",1573243891],["trucks-and-details.de",1573243891],["flz.de",1853162832],["focus.de",851985128],["foodwissen.de",1718698650],["formel1.de",1870530260],["fotohits.de",1883282122],["fotomagazin.de",1816430475],["fr.de",503218641],["frag-mutti.de",723111334],["freenet.de",107107640],["suche.freenet.de",1152888910],["freiburgesports.de",1446892733],["freiluft-blog.de",1650682410],["fremdwort.de",138442415],["frischauf-gp.de",224208046],["fruchthandel.de",[1763381680,415860942]],["nh24.de",415860942],["fruchtportal.de",333654199],["frustfrei-lernen.de",661608266],["fuersie.de",[1694840771,1313508644]],["jolie.de",[1694840771,1313508644]],["maedchen.de",[1694840771,1313508644]],["petra.de",[1694840771,1313508644]],["vital.de",1694840771],["jagderleben.de",1313508644],["ka-news.de",1313508644],["kochbar.de",1313508644],["i-fidelity.net",1313508644],["fundresearch.de",1232115051],["fussballdaten.de",569545119],["fussballn.de",1327051534],["galaxy-ingolstadt.de",206264595],["team.gamed.de",868740563],["gamepro.de",[1030196917,1639536215]],["gamestar.de",[1030196917,485871230]],["gamereactor.de",18865257],["gamersglobal.de",917463183],["games-mag.de",1896468408],["gameswirtschaft.de",[1299019332,611764764]],["haus-garten-magazin.de",1299019332],["gartenflora.de",1945983306],["gartenschlumpf.de",2089929509],["gawina.de",1151310489],["gebraucht-kaufen.de",600887888],["geemag.de",338417753],["gekonntgekocht.de",2109361754],["gelbeseiten.de",1853441684],["gentleman-blog.de",2098899250],["giga.de",[601802673,334391992]],["kino.de",601802673],["watson.de",601802673],["gn-online.de",1443147643],["go2android.de",1353908681],["godmode-trader.de",1918378792],["golem.de",2071782691],["forum.golem.de",36897835],["golfmagazin.de",1500645906],["jaegermagazin.de",1500645906],["st-georg.de",1500645906],["tennismagazin.de",1500645906],["golfv.de",1970984099],["googlewatchblog.de",1697262137],["goolive.de",998733352],["goslarsche.de",844615080],["gut-erklaert.de",466723569],["gwd-minden.de",1557523244],["h-bw.de",2043302828],["hallanzeiger.de",423460676],["hallelife.de",1979849055],["hallescherfc.de",[361209577,1679075088]],["pfalz-echo.de",1679075088],["hallespektrum.de",392375432],["kultur-port.de",392375432],["hallo-minden.de",1594173599],["hamburg-pride.de",868455076],["handballecke.de",1553526997],["handy-player.de",1736402134],["handyraketen.de",1000439598],["hardware-helden.de",1451089854],["hardwareschotte.de",845346733]]);

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
