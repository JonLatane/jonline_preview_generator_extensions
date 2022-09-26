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

// fra-0

const argsMap = new Map([[1271388265,{"a":"#widget-tops-partenaires"}],[266004576,{"a":".menu-btn-pub,\n.partner-block"}],[1964596619,{"a":"#mvp-leader-wrap,\n#mvp-wallpaper"}],[1912115809,{"a":".annemp"}],[1655375266,{"a":"a.seo"}],[1657370972,{"a":"#hleft,\n#hright"}],[1416466847,{"a":"#banniere_top"}],[1798385467,{"a":".inner_partenaire"}],[82793974,{"a":"#publine,\n#xpubpart"}],[1597916160,{"a":".boite-partenaire-v"}],[1970820092,{"a":".sponsored"}],[1569141913,{"a":"#home_immo,\n.ekk-footer-ad-wrapper,\n.in-ooredoo,\n.newsfeed__ooredoo,\n.sponsored-by"}],[1635878508,{"a":"#co_sponsor,\n.footer_partner_container_wrapper"}],[1356419424,{"a":".vjs-toolbar"}],[262304217,{"a":"a[href^=\"/artpublic/banniere/click3.php?\"]"}],[1006016287,{"a":"#top_header,\n.top2Pic"}],[982207783,{"a":".pubMixte"}],[1480246622,{"a":"a[href^=\"http://www.amazon.fr/\"] > img"}],[2097510745,{"a":".banniere1,\n.banniere2,\n.bannierebas,\n.milieubanniere2"}],[1994703331,{"a":"iframe[src^=\"https://cdn.ctzcdn-ua.fr\"]"}],[594521002,{"a":"div[id^=\"publicite-\"]"}],[2085290204,{"a":"img[width=\"250\"][height=\"300\"]"}],[1825693805,{"a":"#new_travelbloc,\ndiv[style=\"width:310px;height:270px;\"]"}],[842853113,{"a":".horizons-va-sidebar,\n.nos-partenaires,\n.view-horizons-valeurs-actuelles"}],[968660182,{"a":"#verif_pub_adsense_commander,\n#verif_pub_pave,\n#verif_pub_vignette"}],[1496786395,{"a":"#nav-page-default > ul > li.nav-item > a.with-new-tag[href][rel=\"nofollow\"],\n#nav-page-default > ul > li.nav-item > a[class^=\"top-nav-button\"][href][rel=\"nofollow\"],\n.player-right"}],[934463684,{"a":"#top-ban"}],[2095473009,{"a":"#esspub"}],[826780252,{"a":".ad2,\n.addLink"}],[1146694823,{"a":"table[width=\"300\"][height=\"280\"]"}],[261301304,{"a":"#vs-summary-300x250,\n.kiwii-box-300x250"}],[263795322,{"a":".links-bottom,\n.links-top"}],[434609138,{"a":"#pubColumn,\n.adShadow,\n.annoncer_sur,\n.breadcrumb,\n.pubColumn,\n[class^=\"adShadow\"],\n[class^=\"offers\"],\n[id*=\"billboardArround\"],\na[class^=\"offer\"],\na[href*=\"_ads;\"],\ndiv[id][style*=\"float: left; height: 250px; width: 310px;\"],\ndiv[id][style=\"display: block; width: 850px; margin-top: -9px; height: 285px;\"],\ndiv[id][style=\"width: 850px; height: 127px; overflow: hidden; vertical-align: top;\"],\ndiv[id^=\"pa\"][style*=\"display: table;\"][style*=\"float: left;\"],\ndiv[style=\"display: block; margin-top: 0px; width: 836px; margin-bottom: -7px; height: 285px;\"],\ndiv[style=\"overflow: hidden; width: 454px;\"],\ndiv[style^=\"display: table; float: left; height: 250px; width: 310px;\"]"}],[586266801,{"a":"#block-vsct_vsca-megabanner,\n.gondola-pub,\n.gondola__video"}],[1315137217,{"a":".orange"}],[1769377465,{"a":"#home-sponsor"}],[737994641,{"a":"a[href^=\"http://www.webfrance.com/go/\"]"}],[1789013466,{"a":"#encart-sky,\n#top-pub-header"}],[1255135534,{"a":".annonce-gris"}],[1218178746,{"a":"#top_body_right"}],[1986596851,{"a":"[class^=\"banner\"]"}],[1852117201,{"a":"a[href*=\"_adw&\"]"}],[1680290872,{"a":".banner_leaderboard"}],[1077638706,{"a":".promocentered,\n.sidebar-promotion"}],[1058701105,{"a":".colpub,\n.pubhaut"}],[768138008,{"a":"#pave300x250,\n#pave695x90,\n#paves214x157,\n.megabanner-container,\n.right-pub-zone,\na[href^=\"link,\"]"}],[1947222103,{"a":"#wixFooter,\n#wixfooter"}],[1375282103,{"a":".entry-featured"}],[239882313,{"a":".eneba"}],[407522167,{"a":"#nuevoa"}],[439704828,{"a":".sponsorise"}],[547369148,{"a":".pub-read"}],[2061424533,{"a":"#yad-billboard,\n.classickick,\n.sponsor-dd,\na[href^=\"https://beap.gemini.yahoo.com/\"]"}],[1281449853,{"a":".tpub"}],[270581053,{"a":".partner-listing"}],[819824099,{"a":".zone_a,\n.zone_b,\n[href*=\"./\"],\n[onclick*=\"./\"],\nvideo[autoplay][loop]"}],[2018599999,{"a":".interpage"}],[1679933075,{"a":"#offer-module,\n#promotion-shelf"}],[1144835564,{"a":"#google"}],[188113555,{"a":"#album"}],[1809498050,{"a":"a[href*=\"/telecharger/\"]"}],[338095315,{"a":"#adfd"}],[26156212,{"a":"#Bottom,\n#Middle2_id,\n.hPubRight2"}],[1379691790,{"a":".cpi-banner-description-content"}],[576635043,{"a":"#right_banner"}],[767982189,{"a":".uk-slideshow[style=\"height: 718px;\"]"}],[946959821,{"a":".ads-vert"}],[1772444084,{"a":"#sponsors"}],[125781973,{"a":"img[style^=\"width: 720px; height: 90px;\"]"}],[981139220,{"a":"a[href=\"https://www.radioalgerie.dz/pub/\"]"}],[1778270763,{"a":".middle-banner"}],[1777523532,{"a":"[data-hash]"}],[527858892,{"a":"#Partenaire"}],[600894027,{"a":".pub-gauche-flottant"}],[1687931433,{"a":".alert-info"}],[388519184,{"a":".annonce-container"}],[1089732462,{"a":".special-message-wrapper"}],[1015875537,{"a":".vpn,\na[href*=\"/get_vpn\"],\na[style][onclick],\ntd[style][onclick]"}],[2101011117,{"a":"#skyscraper"}],[2133193198,{"a":"div[style=\"float:right;width:300px;height:600px\"]"}],[1181215415,{"a":".blockLinkSkin-communication,\n.c-20-minutes-ad-bar-custom,\n.communication"}],[446524049,{"a":".leguide"}],[998610279,{"a":".mod-promo--simple"}],[1989569956,{"a":".ac-banner-ad"}],[1263757946,{"a":".nicebtn"}],[1328657221,{"a":".pub_image"}],[803132722,{"a":".bloc-shopping"}],[2127687934,{"a":".adsenseContentBottom"}],[2034485588,{"a":"a[href^=\"http://aidemu.fr/pub/\"]"}],[1328373238,{"a":"#amazon"}],[1947576995,{"a":"#bannershop"}],[1686744151,{"a":"#shoppingBox"}],[1908706666,{"a":".main-banner"}],[1099633585,{"a":"#zzone,\n.zpart"}],[1190269867,{"a":"#footer-boom,\n#home-p2"}],[681263485,{"a":".video-pub,\na[href*=\"/?id=\"]"}],[806774450,{"a":"#DAadrp,\n#DAr2,\n#desktop-rhs-carousels_click_within_right,\n#sp_detail,\n#sp_detail2,\n.a-link-normal[href*=\"&adId=\"],\n.amzn-safe-frame-container,\n[class*=\"-advertising-\"],\n[class*=\"-sponsored-\"]"}],[1575798504,{"a":"[class^=\"pub_\"]"}],[56794410,{"a":"div[style=\"float:left; width:976px; line-height:0; min-height:90px; margin-bottom:5px; text-align:center;\"]"}]]);

const hostnamesMap = new Map([["topito.com",1271388265],["topsante.com",266004576],["touchdownactu.com",1964596619],["presse-citron.net",1964596619],["tourhebdo.com",1912115809],["touslesdrivers.com",1655375266],["touslesprix.com",1657370972],["toutcash.com",1416466847],["toutpratique.com",1798385467],["troc-velo.com",82793974],["trocdestrains.com",1597916160],["tsa-algerie.com",[1970820092,1569141913]],["trovit.fr",1970820092],["telquel.ma",1970820092],["marianne.net",1970820092],["tukif.com",[1635878508,1356419424]],["pornovore.fr",[1356419424,681263485]],["tunisie-news.com",262304217],["turf-fr.com",1006016287],["tuxboard.com",982207783],["scally.typepad.com",1480246622],["peuple-vert.fr",1480246622],["une-recette.com",2097510745],["universanimeiz.com",1994703331],["universfreebox.com",594521002],["uploadocean.com",2085290204],["vacanceo.com",1825693805],["valeursactuelles.com",842853113],["verif.com",968660182],["videosxgays.com",1496786395],["viewsurf.com",934463684],["ville-ideale.com",2095473009],["vinyculture.com",826780252],["virusphoto.com",1146694823],["vivastreet.com",261301304],["voir-films.com",263795322],["voyageforum.com",434609138],["voyages-sncf.com",586266801],["wamiz.com",1315137217],["webcamtoy.com",1769377465],["webfrance.com",737994641],["webgirondins.com",1789013466],["webrankinfo.com",1255135534],["webstar-auto.com",1218178746],["webstar-electro.com",1986596851],["welovebuzz.com",1852117201],["wheregoes.com",1680290872],["wikiclic.com",1077638706],["winds-up.com",1058701105],["windsurfjournal.com",768138008],["wix.com",1947222103],["wp-infinity.com",1375282103],["xboxygen.com",239882313],["xrares.com",407522167],["xstory-fr.com",439704828],["yabiladi.com",547369148],["yahoo.com",2061424533],["yatahonga.com",1281449853],["youpinet.com",270581053],["youporn.com",819824099],["youscribe.com",2018599999],["youtube.com",1679933075],["zero-complexe.com",1144835564],["zikinf.com",188113555],["zone-mania.com",1809498050],["zoneadsl.com",338095315],["zonebourse.com",26156212],["games.softgames.de",1379691790],["competition.dz",576635043],["cresus.dz",767982189],["cvya.dz",946959821],["esi.dz",1772444084],["sfr.fr",1772444084],["faf.dz",125781973],["radioalgerie.dz",981139220],["euroiphone.eu",1778270763],["films-telecharger.eu",1777523532],["installations-home-cinema.eu",527858892],["millepertuis.eu",600894027],["multiup.eu",1687931433],["multiup.org",1687931433],["sortir.eu",388519184],["ultimate-catch.eu",1089732462],["yggtorrent.fi",1015875537],["yggtorrent.la",1015875537],["yggtorrent.li",1015875537],["yggtorrent.nz",1015875537],["yggtorrent.re",1015875537],["yggtorrent.se",1015875537],["yggtorrent.si",1015875537],["yggtorrent.to",1015875537],["123pneus.fr",2101011117],["peterhahn.fr",2101011117],["1fichier.fr",2133193198],["20minutes.fr",[1181215415,446524049]],["femmeactuelle.fr",446524049],["lemonde.fr",446524049],["academiedugout.fr",998610279],["actu.fr",1989569956],["ad4.fr",1263757946],["aerobuzz.fr",1328657221],["aeroport.fr",803132722],["aeroports-voyages.fr",2127687934],["aidemu.fr",2034485588],["akeo.fr",1328373238],["aliceadsl.fr",[1947576995,1686744151]],["portail.free.fr",1686744151],["laposte.net",1686744151],["allocine.fr",1908706666],["alloforfait.fr",1099633585],["amateur2sexe.fr",[1190269867,681263485]],["amazon.fr",806774450],["ambiance-noel.fr",1575798504],["guide-piscine.fr",1575798504],["androidpit.fr",56794410]]);

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
