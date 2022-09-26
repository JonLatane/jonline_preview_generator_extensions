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

const argsMap = new Map([[497957857,{"a":"a[href^=\"https://amzn.to/\"]"}],[1658568743,{"a":"a[href^=\"https://cutt.ly/\"]"}],[740452465,{"a":"#block-block-7"}],[1079504939,{"a":"a[onmousedown^=\"this.href='https://paid.outbrain.com/network/redir?\"][target=\"_blank\"]"}],[726340005,{"a":"div[style=\"height:90px\"]"}],[1470182718,{"a":"a[href*=\"//bit.ly/\"]"}],[1210924364,{"a":".plistaList > .plista_widget_belowArticle_item[data-type=\"pet\"],\na[href^=\"http://click.plista.com/pets\"]"}],[1323070793,{"a":".banner-top-section"}],[1764632338,{"a":".tf-de"}],[954369860,{"a":"#tracking-url"}],[2046742239,{"a":"#bannerpos2"}],[930515266,{"a":".gpt"}],[1166222922,{"a":"#responsive_lightbox_image_widget-5,\n#responsive_lightbox_image_widget-6"}],[1596803707,{"a":".ai-placement"}],[2051871743,{"a":".anzeige"}],[1133838836,{"a":"#custom_html-42"}],[1266149777,{"a":"#custom_html-5"}],[882340834,{"a":"img[alt=\"Logo Partner\"]"}],[446260226,{"a":"#custom_html-17"}],[2084103287,{"a":".footer-partner"}],[1658065501,{"a":".ap"}],[891791438,{"a":".sponsor-section"}],[1160248154,{"a":".a-single"}],[1815978380,{"a":".TopBanner-root"}],[735189409,{"a":"#banner-news,\n.banner-super-middle,\n.superbanner-top"}],[950224010,{"a":".c-sponsors-list"}],[1875895118,{"a":".displaybanner-container"}],[894786297,{"a":".da__placeholder,\n.sda"}],[1196974952,{"a":".kosmonaut_120x600,\n.kosmonaut_300x250"}],[323906900,{"a":"#tt_wrapper"}],[1415645669,{"a":".stx"}],[803792013,{"a":".promotion-teaser-container"}],[118092243,{"a":".prmtnKeepHeight"}],[528276731,{"a":"a[href^=\"https://airbnb.com/rooms/\"]"}],[531350093,{"a":".advheader"}],[882392721,{"a":"#acTop"}],[1492401564,{"a":".dazn"}],[814836424,{"a":".spons"}],[66245550,{"a":"#flattr > a,\n#flattr > p"}],[1244414073,{"a":"#mcebox,\n#mcebox-sidebar"}],[1535483309,{"a":"a[href=\"/www/888casino\"]"}],[315290620,{"a":"ins[data-meh-id]"}],[894650825,{"a":".Common-Kn-Rp-Inline,\n.Flights-Results-FlightRightRail"}],[1758786029,{"a":".pb-8.text-center.float-center"}],[1257213054,{"a":".wrap > footer[style=\"bottom: -260px;\"]:last-child > div:first-child"}],[1222970732,{"a":".adv-wrapper,\nimg[width=\"450\"][height=\"300\"],\nimg[width=\"450\"][height=\"700\"],\nimg[width=\"500\"],\nimg[width=\"800\"][height=\"230\"],\nimg[width=\"900\"][height=\"350\"]"}],[862856295,{"a":".qm-head,\n.qm-side,\ndiv[style=\"min-height: 280px; margin-top: -20px;\"]"}],[857710487,{"a":"#tennisnetWidget"}],[2035741223,{"a":"a[href^=\"https://www.krokodeal.net/\"]"}],[594472335,{"a":".premium"}],[847179397,{"a":"#trade"}],[1034350509,{"a":".uhren-widget"}],[53347089,{"a":".ai-viewport-1"}],[1398087236,{"a":".Anzeige"}],[1272167690,{"a":"#adup1,\n#adup3,\n#adup5"}],[549247741,{"a":".promobox"}],[396751163,{"a":".werbung:not(.toolbar-wrapper)"}],[1783927414,{"a":"#urban-medrect1,\n#urban-medrect2"}],[1270484852,{"a":"div[style=\"float:left;clear:left;height:620px;width:180px;padding-top:15px;\"]"}],[954974847,{"a":"#sp-sidebar1"}],[2090525279,{"a":".boxx"}],[608003634,{"a":".footer-widget-zone,\na[href^=\"https://www.zononi.com/LA/LP/Finder?\"],\na[href^=\"https://www.zononi.com/VX/LP/Roulette?\"]"}],[528317802,{"a":"a[href^=\"https://www.wazazu.com/LA/Landingpage?\"]"}],[888498065,{"a":".zenid-adlabel"}],[1804108109,{"a":".pornofilme_recht"}],[415742298,{"a":".zgsky"}],[499746737,{"a":".item-advert"}],[911552206,{"a":"#custom_html-4"}],[1198118130,{"a":".kleinueber > .row + div > .topzubehoeranzeige-berichte"}],[842306045,{"a":"#angeboteStartseite2018"}],[99149078,{"a":".ad_below-nav"}],[1513123903,{"a":".clearit_s"}],[1137338858,{"a":"#Container > #head:first-child + #content + br + .spacer + center"}],[646311971,{"a":"#adc1,\n#adc2"}],[134000235,{"a":".left-col__bottom"}],[1183250326,{"a":"div[align=\"center\"][width=\"468px\"] > table[height=\"60\"][cellspacing=\"0\"][cellpadding=\"0\"][border=\"0\"][align=\"center\"]"}],[901023465,{"a":".zona_publi"}],[664201770,{"a":"#UNWB300100,\n#UNWB300200,\n#UNWB300300"}],[1962323354,{"a":".spalten_33_werbung,\ndiv[style=\"text-align: center; min-height: 110px;\"],\ndiv[style=\"text-align: center; min-height:260px;\"]"}],[1414499722,{"a":"#schnaeppchenlayer"}],[1327273877,{"a":"div[class^=\"ad_\"]"}],[146448924,{"a":".monkey-container"}],[1994350611,{"a":".add_top"}],[878181956,{"a":"#adunten + div[style=\"font-size:8pt; color:#999999; margin-left:39px; width: 728px;\"],\n#iphpbannerleft,\n#layerleft,\n#layerright,\n.rightbanner,\ncenter > table > tbody > tr > td[valign=\"bottom\"][align=\"center\"][style=\"width: 100%;\"]"}],[231621217,{"a":"#skyL_wrapper,\n#skyR_wrapper"}],[642056629,{"a":"a[href^=\"https://allvideoslots.com/\"],\na[href^=\"https://casino-bonus24.net/\"],\na[href^=\"https://casinoandy.com/\"],\na[href^=\"https://casinopilot24.com/\"]"}],[72523313,{"a":".slide-box"}],[819839785,{"a":".anzeigenbox"}],[436129830,{"a":"#masthead"}],[948569664,{"a":"#display-ga"}],[712075679,{"a":".ad + #flashContent,\n.ad + .tdt,\n.ad + .uk-panel,\n.block-weather-link,\n.hd-banner,\na[target=\"_new\"][href^=\"inc/inc_link.php?id=\"]"}],[195329573,{"a":".container-banner,\nimg[name=\"banner\"]"}],[354667000,{"a":".ympb_target_banner"}],[2019919015,{"a":"#skyScraper,\n#superBanner,\n.produkt_uebersicht > div > br.clear"}],[437680360,{"a":".NaviTopP,\n.naviP"}],[826933379,{"a":"#ape_Detail_ad-endcap-1_Glance_placement,\n#heroQuickPromo_feature_div,\ndiv[data-ad-id],\ndiv[id^=\"sp_detail\"]"}],[1157130877,{"a":".fnetbr-pbb-container"}]]);

const hostnamesMap = new Map([["onepiece-tube.com",[497957857,1658568743]],["picdumps.com",[497957857,1470182718]],["anderes-wort.de",497957857],["bitreporter.de",497957857],["fairytail-tube.org",497957857],["online-webradio.com",740452465],["buecher-magazin.de",740452465],["widgets.outbrain.com",1079504939],["autobild.de",1079504939],["focus.de",1079504939],["gamestar.de",1079504939],["metal-hammer.de",1079504939],["musikexpress.de",1079504939],["n-tv.de",1079504939],["pcwelt.de",1079504939],["ran.de",1079504939],["rollingstone.de",1079504939],["sport.de",1079504939],["tvspielfilm.de",1079504939],["finanzen.net",1079504939],["photaq.com",726340005],["spox.com",[1470182718,1492401564,814836424]],["dkamera.de",1470182718],["donau3fm.de",1470182718],["isaswomo.de",1470182718],["ofdb.de",1470182718],["rechtsdepesche.de",1470182718],["via-ferrata.de",1470182718],["polizei.news",1470182718],["plista.com",1210924364],["pokerfirma.com",1323070793],["pornomonster.com",1764632338],["analsexporno.net",1764632338],["deutsche-sexfilme.net",1764632338],["pornotim.com",954369860],["port01.com",2046742239],["pr0gramm.com",930515266],["pressecop24.com",1166222922],["radiodeutsch.com",1596803707],["radsport-news.com",2051871743],["112-magazin.de",2051871743],["drwindows.de",2051871743],["filmpost.de",2051871743],["gesetzlichekrankenkassen.de",2051871743],["helles-koepfchen.de",2051871743],["lehrerfreund.de",2051871743],["medizin-netz.de",2051871743],["ntg24.de",2051871743],["oktoberfestportal.de",2051871743],["pharmazeutische-zeitung.de",2051871743],["sportal.de",2051871743],["touristik-aktuell.de",2051871743],["tweakpc.de",2051871743],["vhs-ol.de",2051871743],["radsportjournaltourman.com",[1133838836,1266149777]],["signal-online.d",[1266149777,911552206]],["primavera24.de",1266149777],["nachrichten.es",1266149777],["rbleipzig.com",882340834],["rc-modellbau-blog.com",446260226],["ecrbs.redbulls.com",2084103287],["fussball.de",2084103287],["reiseblog7.com",1658065501],["rittnerbuam.com",891791438],["rotor-magazin.com",1160248154],["de.rt.com",1815978380],["scfreiburg.com",[735189409,950224010]],["sgf1903.de",950224010],["segeljournal.com",1875895118],["servus.com",894786297],["terramatermagazin.com",894786297],["sexgeschichten.com",1196974952],["sexvideos-gratis.com",323906900],["sexvideos-hd.com",323906900],["xnxx-sexfilme.com",323906900],["pornoente.tv",323906900],["sinn-frei.com",1415645669],["snowsociety.com",803792013],["songtexte.com",118092243],["spanienlive.com",528276731],["speedweek.com",531350093],["spielesite.com",882392721],["german-porno-deutsch.info",814836424],["spreeblick.com",66245550],["startxxl.com",1244414073],["strippokerregeln.com",1535483309],["sumikai.com",315290620],["swoodoo.com",894650825],["tagesstimme.com",1758786029],["technic3d.com",1257213054],["teneriffa-aktuell.com",1222970732],["teneriffa-news.com",862856295],["tennisnet.com",857710487],["trendmutti.com",2035741223],["tri2b.com",594472335],["kinofilme.ucoz.com",847179397],["uhrenratgeber.com",1034350509],["veggieboom.com",53347089],["genialetricks.de",53347089],["leckerschmecker.me",53347089],["vermieter-forum.com",1398087236],["elektrikforen.de",1398087236],["jungewelt.de",1398087236],["voucherwonderland.com",1272167690],["wegwerfemailadresse.com",549247741],["wetter.com",396751163],["wetter-deutschland.com",1783927414],["wirtschaftslexikon24.com",1270484852],["wochenblitz.com",954974847],["x-oo.com",2090525279],["xhamsterde.com",[608003634,528317802]],["pornhubdeutsch.info",528317802],["zenideen.com",888498065],["zuckerporno.com",1804108109],["zwischengas.com",415742298],["pragerzeitung.cz",499746737],["ipadblog.de",911552206],["presse-nachrichten.de",911552206],["1000ps.de",1198118130],["100urlaubsziele.de",842306045],["11freunde.de",99149078],["14-tage-wettervorhersage.de",1513123903],["1kh.de",1137338858],["1und1.de",646311971],["web.de",[646311971,134000235]],["gmx.net",[646311971,134000235]],["home.1und1.de",134000235],["3dchip.de",1183250326],["3drei3.de",901023465],["4crazy.de",664201770],["4fansites.de",1962323354],["4players.de",1414499722],["90min.de",1327273877],["99damage.de",146448924],["abg-net.de",1994350611],["abload.de",878181956],["ad-hoc-news.de",231621217],["adventures-kompakt.de",642056629],["aedt.de",72523313],["aerzteblatt.de",819839785],["africa-positive.de",436129830],["agriaffaires.de",948569664],["ak-kurier.de",[712075679,195329573]],["nr-kurier.de",195329573],["ww-kurier.de",195329573],["aktionspiele.de",354667000],["mahjongspielen.de",354667000],["zeitmanagementspiel.de",354667000],["aktionspreis.de",2019919015],["alle-autos-in.de",437680360],["amazon.de",826933379],["amazona.de",1157130877]]);

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
