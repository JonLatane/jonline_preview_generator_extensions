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

const argsMap = new Map([[523846954,{"a":".ob-p"}],[1284528079,{"a":"div[data-url-link^=\"https://track-adspree.com/\"]"}],[2141644925,{"a":"div[style=\"width:160px;height:600px;\"]"}],[2012080292,{"a":".nfy-banner"}],[1754576915,{"a":"#banneroben,\n#bannerrechts,\n#startrechts,\n.leistenbanner,\n.listenbannerlinks,\n.toplinks"}],[424407979,{"a":"#advlft,\n.bnr-wrp,\n.cnt-rgt,\ndiv[class^=\"div-gpt-\"],\ndiv[style=\"overflow:hidden;text-align:center;position:relative;height:300px;\"]"}],[2057770008,{"a":".stickyBanner-wrapper"}],[1459469458,{"a":".btn2,\n.rectright"}],[1125148000,{"a":".elementor-element-f3e9036"}],[1947344868,{"a":".branchenberichte"}],[1640401789,{"a":".trikots"}],[1709221333,{"a":".header-main"}],[199384371,{"a":".ad-component,\n.ad-slot-container"}],[1483700958,{"a":"img[class=\"bnr\"]"}],[944180176,{"a":".superbanner_wrapper"}],[1533351123,{"a":"#block-3"}],[1228176006,{"a":".wk-slideshow"}],[1320903724,{"a":".lb"}],[1485949255,{"a":"#platzierung"}],[2128737948,{"a":"iframe[src=\"/more\"]"}],[114390055,{"a":".port.hi"}],[2033915604,{"a":".Banner--isAd"}],[1000064449,{"a":"div[style=\"height: 600px !important; max-width: 320px; margin: 15px auto;\"]"}],[1560710617,{"a":"div[style=\"height: 250px\"]"}],[1156992633,{"a":"img[height=\"200\"][width=\"240\"]"}],[2086673085,{"a":"li[data-content-type=\"ad\"]"}],[877745055,{"a":".sidebar-addbox,\n.topanzeigen-slider-wrapper"}],[1772781584,{"a":".footer__slider"}],[2013778377,{"a":".articlebody__rectangle,\n.page__billboard"}],[2143952739,{"a":".vc_custom_1629451242127"}],[613500795,{"a":"#text-27"}],[514809500,{"a":"div[class^=\"Adstyled_\"]"}],[201408259,{"a":"#rollertuningpage\\.de_lb_1,\n#rollertuningpage\\.de_sitebar_1,\n#rollertuningpage\\.de_sitebar_2"}],[1548320877,{"a":"div[style=\"margin:40px 0 0 0; text-align:center;\"],\ndiv[style=\"margin:60px 0 0 0; text-align:center;\"]"}],[1952413278,{"a":"#billboard_1"}],[136825600,{"a":"div[data-adformat=\"halfpage\"],\ndiv[data-adformat=\"rectangle\"]"}],[1326819768,{"a":"#bigsizebanner,\n#contentbanner"}],[266519046,{"a":"#dfp-banner"}],[2143605605,{"a":".action-item > * > .ad"}],[443829210,{"a":".custom_googleanzeige"}],[580218656,{"a":".footer_sponsor_row"}],[1207989846,{"a":".footer-sponsors,\n.module-advertising"}],[1122893414,{"a":"a[data-name=\"topbanner\"],\ndiv[id^=\"schlager-ad-\"]"}],[1344669027,{"a":"a[href^=\"https://www.lead-alliance.net/tc.php\"]"}],[2071925838,{"a":"div[style=\"height: 166px\"]"}],[1901717287,{"a":".dp-sponsorenfooter"}],[742178568,{"a":".bg,\n.welcome"}],[810729225,{"a":"div[id^=\"seenl-\"]"}],[1013560212,{"a":"#topb,\n.selbs-blog-startseite-und-kategorien,\n.selbs-unter-artikeln,\n.tad1"}],[58836619,{"a":"#crazyclownhint"}],[1424918962,{"a":"#divBG,\n#logoFalken,\n#promobalken"}],[1524730916,{"a":".bannerWrap,\n.sponsors-col"}],[1542816853,{"a":"div[style=\"margin: 30px 0px 30px 0px;padding: 10px; border-width: 2px; border-style: dashed; background-color: #f6f5f2;\"]"}],[777460170,{"a":".bannerBox"}],[779412087,{"a":"#ad"}],[762598889,{"a":"#Mid,\n#anchorBG"}],[464662964,{"a":".banner-container"}],[175291165,{"a":".sdc-site-au__leaderboard,\n.sdc-site-au__mpu-1"}],[1193449093,{"a":"#MEDMRECHome,\n#MEDMRECHome2Lazy,\n#MEDMRECHome3Lazy"}],[292630728,{"a":"#outer_SR_banner_ganz_unten,\n#outer_SR_rechner_banner_unter_rechner,\n#outer_SR_rechner_display_unter_rechner"}],[986760976,{"a":"div[id^=\"smart-\"]"}],[1282725450,{"a":".td-banner-wrap-full"}],[1963037887,{"a":"#smsboxIframe"}],[1737045736,{"a":"#banner_oben"}],[1345575952,{"a":"#text-53,\n#text-56,\n.infeedthingy"}],[1578431041,{"a":".skycraper"}],[571418166,{"a":"a[href^=\"https://wgaffiliate.com/?a=\"]"}],[1456259750,{"a":"#wallpaper-link"}],[761218474,{"a":".hockeystick,\n.stiRectangleRgt,\n.stiSkyscraperRgt"}],[1390116453,{"a":".banner-btf-side-rectangle"}],[1835107815,{"a":".parallax_link,\n.strack_cli"}],[553145842,{"a":".ad-mark"}],[967732743,{"a":".abox"}],[403663925,{"a":".s1-ad"}],[218107104,{"a":".dcm-section-wrapper"}],[1383550079,{"a":"img[width=\"768\"][height=\"768\"]"}],[1750102547,{"a":".elementor-element-127b96a"}],[2003345472,{"a":"div[style=\"padding:5px 0 5px 0;\"][align=\"center\"]"}],[855716068,{"a":"#sponsorenleiste"}],[2003959615,{"a":".psw-container,\na[href^=\"https://www.communicationads.net/tc.php?\"],\nimg[data-image-title=\"amazonAktion\"]"}],[67158306,{"a":".adserver,\nimg[width=\"728\"]"}],[655737110,{"a":".smartmag-widget-codes"}],[1316182087,{"a":"#colLeft > #info,\n#colRight > #search"}],[546877313,{"a":".banner_bigsize_unten,\n.banner_content,\n.banner_sky"}],[475689640,{"a":"div[style=\"width: 468px;height: 60px;overflow: hidden;float: right\"]"}],[1625424881,{"a":"div[style=\"width: 160px; height: 600px; margin: auto;\"]"}],[1180324730,{"a":"#ston-billboard,\n#ston-footer-ad"}],[957390107,{"a":".iqad,\na[href^=\"https://cmk.sueddeutsche.de/cms/hub/\"][href*=\"/anzeige/\"]"}],[301845705,{"a":"#text-8"}],[301081855,{"a":".tracking_trigger"}],[1633606456,{"a":"div[id^=\"super-\"]"}],[1158480448,{"a":".gpevxonqc"}],[1033321544,{"a":".swp-adbox"}],[1362810024,{"a":"#T-85628670,\n#T-86926496,\n#T-Shopping,\n#T-shoppingbox,\n#Tasfeed1,\n#Tasfeed3,\n#Tcontboxi + #Tgboxf,\n#Tlibelle,\n#ma_mrec,\n#vmsky,\n.Tadc,\n.Tgbox--anz,\n.Tgbox--blau,\n.Thh5Thide4PUR,\n.Thide4PUR,\n.Tprtnrmobilesib,\n.Tshlogobox,\n.Tsshopst2 + .Tmm,\n.med_anz,\n.toi-sh-breaker,\na[data-url^=\"https://count.shopping.t-online.de/RE?ID=\"],\na[href=\"https://gebrauchtwagen-suche.t-online.de/marke-skoda/modell-superb\"],\na[href^=\"http://count.shopping.t-online.de/RE?ID=\"],\na[href^=\"https://count.shopping.t-online.de/RE?ID=\"],\ndiv[class^=\"Tsshopst\"],\ndiv[data-dy*=\"Partner:\"],\ndiv[id^=\"T-\"].Tmm.Tltb.Tts.Tmc1.Tww1.Thh3[onfocus^=\"A('zid=\"] > .Ttsc.Ttsv169,\ndiv[id^=\"T-\"][oncontextmenu=\"return false\"],\ndiv[id^=\"ma_ar\"],\ndiv[id^=\"mrec\"],\nimg[alt^=\"Modetrends\"],\nimg[width=\"920\"][usemap^=\"#immap\"]"}],[1670017148,{"a":".css-1gm9xpz,\n.css-1lb3bt5,\n.css-2k2lok,\n[data-commercial-format],\ndiv[data-component=\"CommercialNativendo\"],\ndiv[data-testid=\"Stage.Companion.Commercial\"],\ndiv[data-testid^=\"Nativendo.ArticleFeed\"],\ndiv[id^=\"nativendo\"],\nsection[data-stage-layout^=\"custom_nativendo_\"]"}],[1062627408,{"a":"#tMRM_amazon,\n#tMRM_billiger"}],[1194679673,{"a":".c-ad__container-p1,\n.tg-articletype-sponsored-deal.c-pin,\n.tg-articletype-sponsored-post,\n.tg-stage-sponsoredcontent"}]]);

const hostnamesMap = new Map([["promiflash.de",523846954],["prosiebengames.de",1284528079],["psychic.de",2141644925],["pz-news.de",2012080292],["rheinpfalz.de",2012080292],["queer.de",1754576915],["quoka.de",424407979],["radiobob.de",2057770008],["radioguetersloh.de",1459469458],["radioholiday.de",1125148000],["radmarkt.de",1947344868],["radsport-seite.de",1640401789],["radzeit.de",1709221333],["ran.de",199384371],["rc-news.de",1483700958],["readersdigest.de",944180176],["realtotal.de",1533351123],["regensburg-digital.de",1228176006],["regioactive.de",1320903724],["regionalleben.de",1485949255],["reimmaschine.de",2128737948],["reise-preise.de",114390055],["reisereporter.de",2033915604],["reiseuhu.de",1000064449],["news.reiseuhu.de",1560710617],["rendsburgerleben.de",1156992633],["restegourmet.de",2086673085],["rheiderland.de",877745055],["rhein-neckar-loewen.de",1772781584],["rhein-zeitung.de",2013778377],["ride-on-magazin.de",2143952739],["rlc-gamer.de",613500795],["spielesnacks.de",[613500795,1456259750]],["rnd.de",514809500],["rollertuningpage.de",201408259],["rsa-radio.de",1548320877],["rtl.de",[1952413278,136825600]],["vox.de",136825600],["rund-magazin.de",1326819768],["saechsische.de",266519046],["salue.de",2143605605],["satvision.de",443829210],["scdhfk-handball.de",580218656],["schalke04.de",1207989846],["schlager.de",1122893414],["schwedenstube.de",1344669027],["scifiscene.de",2071925838],["scp07.de",1901717287],["seekxl.de",742178568],["seenluft24.de",810729225],["selbstaendig-im-netz.de",1013560212],["seorch.de",58836619],["adspecials.sevenonemedia.de",1424918962],["sg-flensburg-handewitt.de",1524730916],["shopanbieter.de",1542816853],["sims4ever.de",777460170],["sis-handball.de",779412087],["skiinfo.de",762598889],["skipper-bootshandel.de",464662964],["tvtoday.de",464662964],["sport.sky.de",175291165],["slashcam.de",1193449093],["smart-rechner.de",292630728],["smarthomes.de",986760976],["smartphonemag.de",1282725450],["smsgott.de",1963037887],["sonic-seducer.de",1737045736],["sparneuwagen.de",1345575952],["spiele-kostenlos-online.de",1578431041],["spiele-umsonst.de",571418166],["spieletipps.de",761218474],["spielkarussell.de",1390116453],["spielregeln.de",1835107815],["spiesser.de",553145842],["sport-90.de",967732743],["sport1.de",403663925],["sportbuzzer.de",218107104],["sportradio-deutschland.de",1383550079],["spot-on-news.de",1750102547],["sprachnudel.de",2003345472],["ssv-jahn.de",855716068],["stadt-bremerhaven.de",2003959615],["stereo.de",67158306],["stereoguide.de",655737110],["steuerlinks.de",1316182087],["stock-world.de",546877313],["strafbuch.de",475689640],["stroxley.de",1625424881],["studis-online.de",1180324730],["sueddeutsche.de",957390107],["supermarkt-inside.de",[301845705,301081855]],["via-ferrata.de",301845705],["supertipp-online.de",1633606456],["swim.de",1158480448],["swp.de",1033321544],["t-online.de",[1362810024,1670017148]],["www-t--online-de.cdn.ampproject.org",1362810024],["suche.t-online.de",1062627408],["t3n.de",1194679673]]);

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
