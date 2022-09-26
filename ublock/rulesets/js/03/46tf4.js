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

const argsMap = new Map([[1085967180,{"a":"#text-24"}],[2125777432,{"a":"#text-28"}],[1115034082,{"a":"#text-29"}],[521982225,{"a":"#text-31"}],[1939229551,{"a":"#text-32"}],[1753659125,{"a":"#appnexus-placement-leaderboard,\n#appnexus-placement-performanceWideboard,\n#appnexus-placement-rectangle,\n#appnexus-placement-teaser1,\n#appnexus-placement-teaser2,\n#appnexus-placement-topicTeaser1,\n#appnexus-placement-topicTeaser2,\n.appnexus-container,\n.brandstudio,\n.placement-leaderboard,\n.placement-rectangle"}],[1891023534,{"a":".daydeal-container"}],[2101369595,{"a":".widget_metaslider_widget"}],[1105235696,{"a":"#partner-teaser-links,\n.adm-container"}],[1815953824,{"a":".bannerListPremium"}],[1057509497,{"a":".bannerListPremiumTop"}],[1907862797,{"a":"#partner"}],[835685061,{"a":".mega-banner-outer"}],[582865062,{"a":"a[href^=\"https://goo.gl/\"]"}],[1280683177,{"a":"#aditems,\n.aditem"}],[2132938999,{"a":".inner"}],[70798614,{"a":".banner-leadboard,\n.partner-logos"}],[1652044333,{"a":".partners"}],[815298074,{"a":".sidebar-sponsor-outlay"}],[1151733779,{"a":".sponsor--margin"}],[182058844,{"a":"#balken_top,\n.big_size,\na[href^=\"https://fra1-ib.adnxs.com/\"]"}],[1278561837,{"a":"div[style^=\"width:300px;\"]"}],[1628939528,{"a":"#section-sponsored-blogs"}],[904437143,{"a":"#rv_sponsors_slider"}],[1577553945,{"a":"a[href^=\"http://tidd.ly/\"]"}],[1477156431,{"a":"#sponsor"}],[1302843606,{"a":"#wallpaper,\n.rect"}],[1228510587,{"a":"#text-9"}],[976097136,{"a":".ads-container"}],[558807846,{"a":"#service-linklist,\ntr[data-component=\"MessageListSpecialRow\"]"}],[640693493,{"a":".bannerTop,\n.clubBox"}],[1283296367,{"a":".partnerlinks"}],[1597030071,{"a":".adwrapper"}],[1662580797,{"a":"table[width=\"195\"],\ntable[width=\"468\"]"}],[288378058,{"a":"div[class^=\"AdSlotContainer_\"]"}],[895575183,{"a":".asideBoxB,\n.footer-grey"}],[738147190,{"a":"div[style=\"width: auto; height: auto; min-height: 250px; display: flex; justify-content: center; align-items: center;\"],\ndiv[style=\"width: auto; height: auto; min-height: 250px; justify-content: center; align-items: center;\"]"}],[509010030,{"a":"#sky"}],[1830243577,{"a":"#sponsorbutton_div,\n.article_rectangle"}],[812044992,{"a":".qt-sponsor"}],[1789026868,{"a":".recommendations"}],[158212035,{"a":".gokb,\n.gokwblock"}],[689900283,{"a":"#advertising"}],[1450980324,{"a":".pz_cont"}],[430592265,{"a":"#js-banner"}],[1735825513,{"a":".tx-admanager"}],[2106137036,{"a":"#topCustomers"}],[1469648946,{"a":".et_pb_row_0_tb_header"}],[1921260355,{"a":"#td_uid_9_6141b5fdcbe72,\n.td-header-header,\n.td_uid_89_6141b5fdd19ca_rand"}],[329645736,{"a":".banner-holder"}],[1405116996,{"a":".kurator"}],[1449721838,{"a":".adition,\n.channel-sponsor"}],[1607459169,{"a":"#nfad-inner"}],[1919484229,{"a":".desktop-wideboard-top,\n.wideboard-top"}],[1371582541,{"a":".np8-type-advertorial,\n.view-partners"}],[1463162531,{"a":"div[style=\"width:300px;padding:12px;float:left;\"],\ndiv[style^=\"width: 300px;\"]"}],[2091174001,{"a":"#content-banner1,\n#content-banner3"}],[1633465062,{"a":"#xxParentDivForWerbPostbit"}],[2002671747,{"a":"#ContentFooterPartner"}],[1091442201,{"a":".qf-standard-banner-wrapp"}],[2008398748,{"a":"#square"}],[1708226383,{"a":"#footer"}],[1676171376,{"a":".mobile-billboard-box"}],[1759622943,{"a":".rectangle"}],[1388276406,{"a":"a[href^=\"https://www.frankly.ch/\"]"}],[268724285,{"a":".tisement"}],[1879195881,{"a":"#banner_leaderboard,\n#banner_vertical"}],[1379054234,{"a":".ministage-channel-sponsor-paragraph,\na[rel=\"sponsored\"]"}],[1056937866,{"a":".elementor-element-31a7df7,\n.elementor-element-a2b2b40"}],[2094656269,{"a":"a[rel^=\"sponsored\"]"}],[1474081640,{"a":".lead-col"}],[345349313,{"a":"#banner-top"}],[221465958,{"a":".banner200,\n.banner350,\n.banner60"}],[1801823653,{"a":"a[onclick^=\"__gaTracker('send', 'event', 'Ads'\"]"}],[955955730,{"a":".PrintMotifRotator"}],[1916529839,{"a":"#leaderboard"}],[331074908,{"a":".bannerspot"}],[1404887639,{"a":"#execphp-2,\n#execphp-3"}],[364585040,{"a":".l-partnerSlideContainer"}],[2064454737,{"a":".ad-container"}],[956491280,{"a":"#banner-top-all-viewports"}],[2010439274,{"a":".djslider-in"}],[1541669453,{"a":"#carouselInserate"}],[2056687808,{"a":".rotator"}],[926507519,{"a":".teaser_type_paid_content,\n.watson-ad"}],[1417097703,{"a":".ad-item,\n.mobile-list-ads,\n.side-ads"}],[437203704,{"a":".banner-img-bottom"}],[592493632,{"a":".bannerboxlinks-klein,\n.bannerboxrechts"}],[1202249712,{"a":".field--name-field-werbebild"}],[1941554799,{"a":".inArticleA,\n.underContentA"}],[1481122156,{"a":"#hat_message,\n.adv_block,\n.banner-wrapper,\n.promo__item"}],[1449470173,{"a":"#brands"}],[2131378770,{"a":"#sticky-aside-placeholder"}],[78809476,{"a":"#sticky-aside"}],[86534305,{"a":".spot"}],[1750046277,{"a":".spot_bottom"}],[1661957463,{"a":"div[class^=\"bireklam\"]"}]]);

const hostnamesMap = new Map([["bitcoinnews.ch",[1085967180,2125777432,1115034082,521982225,1939229551]],["rlc-gamer.de",[1085967180,1115034082]],["nh24.de",2125777432],["ecommerce-vision.de",1115034082],["laufzeit.de",1115034082],["via-ferrata.de",[1115034082,1228510587]],["ligablatt.de",521982225],["blick.ch",1753659125],["bluewin.ch",1891023534],["bueroblog.ch",2101369595],["computerfachmagazin.de",2101369595],["office-roxx.de",2101369595],["cash.ch",1105235696],["cherry.ch",[1815953824,1057509497]],["lust24.ch",[1815953824,2106137036]],["comback.ch",[1907862797,835685061]],["h-bw.de",1907862797],["denkmalpflege-schweiz.ch",582865062],["reiseziele.ch",[582865062,1676171376]],["pornotim.com",582865062],["xhamsterde.com",582865062],["engadinerpost.ch",1280683177],["erotikinserate.ch",2132938999],["esports.ch",[70798614,1652044333]],["sihf.ch",1652044333],["hannover96.de",1652044333],["p-stadtkultur.de",1652044333],["explora.ch",815298074],["fcz.ch",1151733779],["finanzen.ch",182058844],["fussball.ch",1278561837],["wetter.ch",1278561837],["wirtschaft.ch",1278561837],["fuw.ch",1628939528],["fvnws.ch",904437143],["gamemovieportal.ch",1577553945],["games.ch",[1477156431,1302843606]],["chemnitzerfc.de",1477156431],["deutsche-mittelstands-nachrichten.de",1477156431],["gazzettadellambri.ch",1228510587],["glarus24.ch",976097136],["radiocentral.ch",976097136],["sunshine.ch",976097136],["gmx.ch",558807846],["web.de",558807846],["gmx.net",558807846],["gota6.ch",[640693493,1283296367]],["sex-infos.ch",640693493],["highway-magazin.de",1283296367],["greenbyte.ch",1597030071],["erf.de",1597030071],["rtl.de",1597030071],["grower.ch",1662580797],["homegate.ch",288378058],["hottime.ch",895575183],["immoscout24.ch",738147190],["itmagazine.ch",[509010030,1830243577]],["gamereactor.de",509010030],["hardwareluxx.de",[509010030,1916529839]],["mopo.de",509010030],["jamesfm.ch",812044992],["jobscout24.ch",1789026868],["jungfrauzeitung.ch",158212035],["kath.ch",689900283],["lifechannel.ch",1450980324],["local.ch",430592265],["lolabrause.ch",1735825513],["marina.ch",1469648946],["marktindex.ch",1921260355],["medienjobs.ch",329645736],["prewarcar.de",329645736],["medienwoche.ch",1405116996],["my105.ch",1449721838],["namibia-forum.ch",1607459169],["nau.ch",1919484229],["netzwoche.ch",1371582541],["news.ch",1463162531],["onlinereports.ch",2091174001],["pocketpc.ch",1633465062],["privatmarkt.ch",2002671747],["radiobeo.ch",1091442201],["radiofr.ch",2008398748],["rasa.ch",1708226383],["polizei.news",1676171376],["rheintaler.ch",1759622943],["fussballdaten.de",1759622943],["metal.de",1759622943],["modhoster.de",1759622943],["i-fidelity.net",1759622943],["rockitradio.ch",1388276406],["vintageradio.ch",1388276406],["rro.ch",268724285],["saiten.ch",1879195881],["schweizer-illustrierte.ch",1379054234],["schweizerbauer.ch",1056937866],["sex4u.ch",2094656269],["andalusien-aktuell.es",2094656269],["sexabc.ch",1474081640],["sexy-land.ch",[345349313,221465958]],["annos.de",345349313],["chefkoch.de",345349313],["dasoertliche.de",345349313],["shaz.ch",1801823653],["simmentalzeitung.ch",955955730],["skiinfo.ch",1916529839],["skiinfo.com",1916529839],["bergsteiger.de",1916529839],["skiinfo.de",1916529839],["spieletipps.de",[1916529839,2064454737]],["videoaktiv.de",1916529839],["anrufer.info",1916529839],["sportal.ch",331074908],["swiss-divers.ch",1404887639],["swissfunddata.ch",364585040],["swissmom.ch",2064454737],["gebraucht-kaufen.de",2064454737],["mixed.de",2064454737],["raetsel-hilfe.de",2064454737],["zeit.de",2064454737],["watchtime.net",2064454737],["testedich.ch",956491280],["testedich.de",956491280],["tieronline.ch",2010439274],["urnerwochenblatt.ch",1541669453],["vilan24.ch",2056687808],["watson.ch",926507519],["xdate.ch",1417097703],["xerotik.ch",437203704],["xxxjob.ch",592493632],["zeitpunkt.ch",1202249712],["funcloud.club",1941554799],["perfektdamen.co",1481122156],["esport.cologne",1449470173],["11880.com",2131378770],["11889.com",78809476],["1milf.com",[86534305,1750046277]],["frauporn.com",[86534305,1750046277]],["xfilmen.com",[86534305,1750046277]],["wildesporno.xxx",86534305],["2ix2.com",1661957463]]);

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
