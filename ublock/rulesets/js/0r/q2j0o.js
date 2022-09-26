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

const argsMap = new Map([[1219430153,{"a":"a[href*=\"/linkout/\"]"}],[1577177410,{"a":".smsbox1,\n.smsbox2"}],[429493843,{"a":"#sidebar > li > .ffwidget_sidebar"}],[251558454,{"a":".marcopolo,\n.widget--marktplatz"}],[2027086655,{"a":"img[referrerpolicy]"}],[445883225,{"a":"#text-59"}],[883082604,{"a":".infoHeadWrap1"}],[1385967029,{"a":".bxnxr_column,\n.bxv"}],[2059245407,{"a":".rechteseite,\na[href^=\"http://cpm.amateurcommunity.de/\"],\na[href^=\"https://lp.amateurcommunity.com/\"]"}],[1493855077,{"a":"#wcontent,\ntable[width=\"300px\"][cellspacing=\"0\"][cellpadding=\"0\"][border=\"0\"]"}],[423620061,{"a":"div[style=\"width: 300px; height: 250px;\"],\ndiv[style=\"width: 336px; height: 280px;\"]"}],[16333275,{"a":"#mh_magazine_custom_posts-5"}],[922539744,{"a":".advert_,\n.headeradvert_"}],[1889251286,{"a":"#logo-right-widget"}],[222625048,{"a":"a[href^=\"https://www.erocom.tv/?utm_\"],\na[href^=\"https://www.erotik-von-nebenan.com/?utm_\"],\na[href^=\"https://www.handy-sextreff.info/?c=\"]"}],[101990377,{"a":"a[href^=\"https://www.julia-reaves.com/?bicc=\"]"}],[482686230,{"a":"a[href^=\"https://www.susi.live/FreeAccountLanding.aspx?\"]"}],[1200321517,{"a":".da_placeholder"}],[1607102742,{"a":"a[href^=\"https://www.booking.com/searchresults.de.html?aid=\"]"}],[1519328573,{"a":"a[href$=\"xref=nosim/wwwbildschirm-21\"]"}],[1965947848,{"a":"a[href^=\"http://www.amazon.\"][href*=\"tag=\"]"}],[1819656452,{"a":".custom-bexad"}],[2083685992,{"a":"div[style=\"height:80px;background-color:#fff\"]"}],[356154241,{"a":".code-block-1,\n.code-block-7"}],[1724748991,{"a":".code-block-10,\n.code-block-16,\n.code-block-3,\n.code-block-5,\n.code-block-6"}],[1996209848,{"a":".code-block-2"}],[90722744,{"a":".code-block-4"}],[1565467515,{"a":".add-inner,\n.header-top"}],[56834697,{"a":"iframe[src^=\"https://ssl.connextra.com\"]"}],[40834190,{"a":"div[class^=\"lp_track_\"]"}],[271031951,{"a":".creatividad"}],[1289385044,{"a":"#chatinator_frame"}],[1157614934,{"a":"#special_column,\n#wa_widget,\n.spc_height_80,\n.vjs-overlays"}],[2121576592,{"a":".banner_container"}],[1738094416,{"a":".banner_page_top,\n.sideboard_conatainer"}],[1374885799,{"a":".default__interest-block"}],[795934400,{"a":".default__realtive-block,\n.video__sidebar-item"}],[934715607,{"a":".samBannerUnit"}],[1104359226,{"a":".samCodeUnit"}],[840175673,{"a":"#video-right,\n.abcn-footer,\n.resumecard"}],[575804376,{"a":"#anzeige9"}],[1893321976,{"a":".partner-wrapper"}],[16578488,{"a":".v-A_-commercial"}],[76803242,{"a":"a[href*=\"/go/\"],\na[href^=\"http://in.mydirtyhobby.com/track/\"],\ntable[align-center][cellpadding=\"13\"][border=\"0\"][bgcolor=\"lightgrey\"],\ntable[style=\"border: 1px solid black; padding: 5px 0px 5px 0px; background-color: lightgrey; text-align: center\"]"}],[1137618578,{"a":".advertisement"}],[967858996,{"a":".BannerContainer"}],[1093599234,{"a":".fcb-ad-banner-container,\n.footer-p4rtn3r-container,\n.footer-partner-container,\n.header-presented-by"}],[1228368396,{"a":".ff-ba"}],[2006901406,{"a":".banner3box"}],[1966654227,{"a":"#spz_42,\n.sz_300_250,\n.vjs-overlay"}],[14481464,{"a":"div[style=\"margin:10px 0 5px 0;min-height:250px;\"]"}],[514409164,{"a":".gtag"}],[642825051,{"a":"#text-48"}],[1355312318,{"a":"#ads"}],[2144628615,{"a":"a[href^=\"https://prf.hn/\"]"}],[1660827531,{"a":".aff-inhalt-geil-spalte,\n.zeigenfick"}],[1271246523,{"a":"#text-html-widget-3"}],[614700168,{"a":"#tr-contentbottom,\nimg[width=\"140\"][height=\"68\"]"}],[876550348,{"a":"#top_sponsor_inner"}],[728434679,{"a":".sponsors"}],[204752065,{"a":".partner-main-footer"}],[1295580427,{"a":"#gamelead,\n.adtitle"}],[1347191246,{"a":".primary-footer"}],[1168943200,{"a":".tipps"}],[1695940564,{"a":".x-topbar"}],[761872474,{"a":".addslot"}],[447533901,{"a":".skybg,\ntable[style=\"margin-top:4px; margin-left:198px\"]"}],[1389001168,{"a":".home_rennab,\n.lead_rennab,\n.miragobox"}],[305404387,{"a":"#skyscraper-group,\n#skyscraper-group-left"}],[2052298222,{"a":"#top-banner"}],[1134602548,{"a":"div[id^=\"journ-\"]"}],[680430446,{"a":".dkpw"}],[1028213422,{"a":".advertisments"}],[1361852037,{"a":"#tip_top"}],[416526133,{"a":"#custom_html-12"}],[2130752447,{"a":"#custom_html-9"}],[729054972,{"a":".img-banner"}],[1295599662,{"a":".td-a-rec"}],[532306007,{"a":"#tab-live-odds,\n.boxOverContent,\n.live-betting-strip,\n.odds,\n.prematchOddsBonus__bonus"}],[1510332540,{"a":"#link_placeholder"}],[1747330967,{"a":"#au,\n#nrad,\n#side-spot"}],[1025782327,{"a":".publicidad"}],[1460085002,{"a":"#labelpub"}],[2123822697,{"a":".widget-3"}],[1572428032,{"a":".f1de-container"}],[814781340,{"a":".stroer-ap"}],[517602264,{"a":".anzeige_teas_rect,\n.anzeige_teas_rect_ax"}],[1984029716,{"a":"a[href^=\"http://rover.ebay.com/\"]"}],[930597321,{"a":"a[href^=\"https://clkde.tradedoubler.com/\"]"}],[330916962,{"a":"a[href^=\"https://ebay.at/\"]"}],[102510369,{"a":".elementor-element-0e1ce7d"}],[1211249905,{"a":".list-group"}],[1848857782,{"a":"img[width=\"300\"][height=\"250\"]"}],[1771805046,{"a":".panorama,\n.search-affiliate__part,\n.site-header__panorama"}],[2133896248,{"a":".ai-track,\n.widget_aawp_widget_new_releases"}],[1263300772,{"a":".plistaList > .plista_widget_underArticle_item[data-type=\"pet\"]"}],[930669080,{"a":".am_el"}]]);

const hostnamesMap = new Map([["3druck.com",1219430153],["cannabis-special.com",1219430153],["supertipp-online.de",1219430153],["5-sms.com",1577177410],["abnehmen.com",429493843],["aquariumforum.de",429493843],["auswandererforum.de",429493843],["pferd.de",429493843],["radforum.de",429493843],["aerotelegraph.com",[251558454,2027086655]],["clever-tanken.de",2027086655],["supremacy1914.de",2027086655],["algarve-entdecker.com",445883225],["nh24.de",[445883225,642825051]],["allround-pc.com",883082604],["amerikawoche.com",1385967029],["amor-frau.com",2059245407],["astronews.com",1493855077],["astroportal.com",423620061],["av-views.com",16333275],["bankkaufmann.com",922539744],["bbc-magazin.com",1889251286],["beeg-pornos.com",[222625048,101990377,482686230]],["deinesexfilme.com",[222625048,101990377,482686230,1289385044,1157614934]],["einfachtitten.com",[222625048,101990377,482686230,1289385044,1157614934]],["gutesexfilme.com",[222625048,101990377,482686230,1289385044,1157614934]],["hd-sexfilme.com",[222625048,101990377,482686230,1289385044,1157614934]],["herzporno.com",[222625048,482686230,1157614934]],["lesbenhd.com",[222625048,101990377,482686230]],["meinyouporn.com",[222625048,101990377,482686230]],["pornoaffe.com",[222625048,101990377,482686230]],["pornofisch.com",[222625048,101990377,482686230,1289385044,1157614934]],["pornohammer.com",[222625048,101990377,482686230,1289385044,1157614934]],["pornohans.com",[222625048,101990377,482686230,1289385044,1157614934]],["pornojenny.com",[222625048,101990377,482686230,1289385044,1157614934]],["pornoklinge.com",[222625048,101990377,482686230,1289385044,1157614934]],["pornotom.com",[222625048,101990377,482686230,1289385044,1157614934]],["pornotommy.com",[222625048,101990377,482686230,1289385044,1157614934]],["pornozebra.com",[222625048,101990377,482686230,1289385044,1157614934]],["sexente.com",[222625048,101990377,482686230,1289385044,1157614934]],["sexvideos-hd.com",[222625048,101990377,482686230,1289385044,1157614934]],["tube8-pornos.com",[222625048,101990377,482686230,1289385044,1157614934]],["xhamster-sexvideos.com",[222625048,101990377,482686230]],["xnxx-porno.com",[222625048,101990377,482686230,1289385044,1157614934]],["hdpornos.net",[222625048,101990377,482686230,1289385044,1157614934]],["pornohirsch.net",[222625048,101990377,482686230,1289385044,1157614934]],["pornoente.tv",[222625048,101990377,482686230,1289385044,1157614934]],["nursexfilme.com",[482686230,1289385044,1157614934]],["pornofelix.com",[482686230,1289385044,1157614934]],["pornoschlange.com",[482686230,1289385044,1157614934]],["sexvideos-gratis.com",[482686230,1289385044,1157614934]],["xhamster-sexfilme.com",[482686230,1289385044,1157614934]],["xnxx-sexfilme.com",[482686230,1289385044,1157614934]],["halloporno.net",[482686230,1289385044,1157614934]],["bergwelten.com",1200321517],["berliner-stadtplan.com",1607102742],["bildschirmarbeiter.com",[1519328573,1965947848]],["das-sternzeichen.de",1965947848],["gamingmedia.de",1965947848],["meintomtom.de",1965947848],["metacrawler.de",[1965947848,1984029716]],["schule-studium.de",1965947848],["seaofsin.de",1965947848],["seaofsin.info",1965947848],["boerse-express.com",1819656452],["boerse-social.com",2083685992],["borncity.com",[356154241,1724748991,1996209848,90722744]],["raptastisch.net",356154241],["buenasideas.de",1996209848],["deinhandy.de",90722744],["computersm.com",1565467515],["connextra.com",56834697],["costanachrichten.com",40834190],["daswetter.com",271031951],["der-farang.com",[2121576592,1738094416]],["bluray-disc.de",2121576592],["deutschsex.com",[1374885799,795934400]],["deutschsex.mobi",1374885799],["digital-eliteboard.com",[934715607,1104359226]],["woodworker.de",934715607],["vielfliegertreff.de",1104359226],["drpornofilme.com",840175673],["eindeutscherporno.com",575804376],["eintracht.com",1893321976],["elektrobike-online.com",16578488],["outdoor-magazin.com",16578488],["aerokurier.de",16578488],["auto-motor-und-sport.de",16578488],["caravaning.de",16578488],["cavallo.de",16578488],["flugrevue.de",16578488],["menshealth.de",16578488],["motorradonline.de",16578488],["mountainbike-magazin.de",16578488],["outdoorchannel.de",16578488],["promobil.de",16578488],["roadbike.de",16578488],["runnersworld.de",16578488],["womenshealth.de",16578488],["erogeschichten.com",76803242],["extremnews.com",1137618578],["4investors.de",1137618578],["abendblatt.de",1137618578],["apotheken-umschau.de",1137618578],["heise.de",1137618578],["iplayapps.de",1137618578],["tarnkappe.info",1137618578],["fc-suedtirol.com",967858996],["fcbayern.com",1093599234],["ff-bz.com",1228368396],["fickverein.com",2006901406],["frauporno.com",1966654227],["fussballeuropa.com",14481464],["fussballtransfers.com",514409164],["geocaching-magazin.com",642825051],["gepostet.com",1355312318],["web.de",1355312318],["goal.com",2144628615],["guteporno.com",1660827531],["handy-auf-raten.com",1271246523],["hc-neumarkt.com",614700168],["hcgherdeina.com",876550348],["hcpustertal.com",728434679],["bayer04.de",728434679],["bvb.de",728434679],["dhb.de",728434679],["fc-union-berlin.de",728434679],["hallescherfc.de",728434679],["ofc.de",728434679],["rundumkoeln.de",728434679],["uniliga.gg",728434679],["herthabsc.com",204752065],["hierspielen.com",1295580427],["hsvhandball.com",1347191246],["htfgames.com",1168943200],["image-hifi.com",1695940564],["utvmagazin.de",1695940564],["inselradio.com",761872474],["internet-sms.com",447533901],["intimesrevier.com",1389001168],["it-production.com",[305404387,2052298222]],["focus.de",2052298222],["fool.de",2052298222],["journalistenwatch.com",1134602548],["kachelmannwetter.com",680430446],["kauf6.com",1028213422],["kopfhoerer.com",1361852037],["kuehlschrank.com",1361852037],["schlafsack.net",1361852037],["staubsauger.net",1361852037],["fernseher.org",1361852037],["laufband.org",1361852037],["kriegsberichterstattung.com",[416526133,2130752447]],["eu-vertretung.de",2130752447],["mixed.de",2130752447],["kronenachrichten.com",729054972],["literaturwelt.com",1295599662],["bitreporter.de",1295599662],["oscar-am-freitag.de",1295599662],["pfalz-echo.de",1295599662],["prad.de",1295599662],["elliniki-gnomi.eu",1295599662],["pi-news.net",1295599662],["liveticker.com",532306007],["lmdfdg.com",1510332540],["madchensex.com",1747330967],["mallorcamagazin.com",1025782327],["mein-wetter.com",1460085002],["melodieundrhythmus.com",2123822697],["kostenloses-fernsehen.de",2123822697],["de.motor1.com",[1572428032,814781340]],["insideevs.de",814781340],["motorsport-total.com",517602264],["msn.com",[1984029716,930597321,330916962]],["pcwelt.de",930597321],["mundus-art.com",102510369],["mydict.com",1211249905],["mydict.net",1211249905],["mygermantimes.com",1848857782],["arbeitsunrecht.de",1848857782],["boxen.de",1848857782],["fruchthandel.de",1848857782],["stadt-bremerhaven.de",1848857782],["via-ferrata.de",1848857782],["wirsiegen.de",1848857782],["pornofilm.zone",1848857782],["mytastedeu.com",1771805046],["nachbelichtet.com",2133896248],["notebookchat.com",1263300772],["prosieben.de",1263300772],["tvspielfilm.de",1263300772],["notebookcheck.com",930669080]]);

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
