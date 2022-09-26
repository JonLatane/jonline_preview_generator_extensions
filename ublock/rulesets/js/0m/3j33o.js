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

const argsMap = new Map([[1665925790,{"a":".qt-sponsors"}],[220157181,{"a":".bannerswidget"}],[1030293178,{"a":".right-banner-root-container"}],[1248732326,{"a":"#banner-top-dt,\n#top-banner-wrapper,\n.BannerBottom-root,\n.BannerRight-root,\n.Banners-bannerFeedItem,\n.banner-row,\n.banner-vipbottom,\n.mp-Banner,\n.mp-Page-element > .mp-Listings + div:not([class]):not([id]):has(:scope > .mp-Listings__admarktTitle),\n.mp-adsense-header,\n.premium-content,\n.vip-banner-top-sticky-container"}],[1137618578,{"a":".advertisement"}],[67714294,{"a":".dfp-space"}],[1530697649,{"a":".page-header__section--spacer"}],[1520427891,{"a":".tile:has(:scope > .ankeiler--advertisement)"}],[765412832,{"a":".sales-cat-context"}],[584207506,{"a":"#buttonUnderVideoLink"}],[947128528,{"a":".leaderboard"}],[422126595,{"a":".imu"}],[962784716,{"a":".leaderboardWrap"}],[1255192568,{"a":".cl-billboad-wrapper"}],[392632036,{"a":"#sidebar-top-content > .widget-area:has(img[width=\"970\"][height=\"250\"]),\n.sidebar-inner aside:has(.carousel.slide)"}],[865042704,{"a":"#banner"}],[441516478,{"a":"#section--banner"}],[790504852,{"a":".well:has([src^=\"https://www.affilaxy.com/\"]),\n.well:has(img[src])"}],[1890925114,{"a":".well:has(img[src^=\"https://www.2k19.nl/\"])"}],[1993279082,{"a":".gofollow"}],[619924784,{"a":".ad"}],[1458142247,{"a":".ad + .card-divider"}],[689900283,{"a":"#advertising"}],[2064454737,{"a":".ad-container"}],[1040168262,{"a":"#adholderContainerHeader"}],[7095527,{"a":".trackerclick"}],[1171569000,{"a":".ads"}],[1652044333,{"a":".partners"}],[185915656,{"a":".sponsorartikelen"}],[912477837,{"a":".true-logo"}],[482507746,{"a":".inhype-bb-block-header"}],[907851759,{"a":".well:has(.bannergroup)"}],[1401710801,{"a":".well:has(img[src^=\"/images/banners\"])"}],[703095194,{"a":"div.card:has(img[src*=\"/banner\"])"}],[892519733,{"a":"#video-sidebar-wrap"}],[1772886759,{"a":"#top-advertisement-area"}],[1112962122,{"a":".dish-sponsors"}],[1167965877,{"a":".c-scroll-list:has(img[src*=\"farmaline.be/assets/banners/\"])"}],[1917766735,{"a":"aside:has(.adsbygoogle)"}],[412422711,{"a":"a[href^=\"https://ads.focus-wtv.be/\"]"}],[1212742569,{"a":"#katon-slot"}],[803256056,{"a":".bannerContainer"}],[1401914995,{"a":".is-billboard,\n.is-skyscraper"}],[1963126848,{"a":"#topbox"}],[712293426,{"a":".card:has([src^=\"https://www.affilaxy.com/promos/\"])"}],[629417851,{"a":"#leaderbord,\n[class^=\"gz-ads\"]"}],[2110719627,{"a":".pub-leaderboard-top"}],[230585593,{"a":"#sponsors-carousel"}],[1166355040,{"a":".header__bottom,\n.partners-holder,\n[class*=\"-ad-banner-box\"]"}],[1351821229,{"a":".advertising"}],[1066920720,{"a":"main .widgetgroup > .grid,\nmain > section.grid:has(.link-complex)"}],[1648783512,{"a":".footer-top"}],[360008690,{"a":".widget:has(.article-teaser)"}],[513129418,{"a":".pub"}]]);

const hostnamesMap = new Map([["radiomonique.am",[1665925790,220157181]],["rbsradio.be",1665925790],["easyfm.nl",1665925790],["omroephouten.nl",220157181],["2dehands.be",[1030293178,1248732326]],["marktplaats.nl",[1030293178,1248732326]],["7sur7.be",[1137618578,67714294,1530697649,1520427891]],["hln.be",[1137618578,67714294,1530697649,1520427891]],["ad.nl",[1137618578,67714294,1530697649,1520427891]],["autoweek.nl",1137618578],["bd.nl",[1137618578,67714294,1530697649,1520427891]],["bnnvara.nl",1137618578],["destentor.nl",[1137618578,67714294,1530697649,1520427891]],["ed.nl",[1137618578,67714294,1530697649,1520427891]],["elektormagazine.nl",1137618578],["fonkmagazine.nl",1137618578],["gelderlander.nl",[1137618578,67714294,1520427891]],["hpdetijd.nl",1137618578],["hvzeeland.nl",1137618578],["kieskeurig.nl",1137618578],["modekoninginmaxima.nl",1137618578],["ovpro.nl",1137618578],["tankpro.nl",1137618578],["tubantia.nl",[1137618578,67714294,1520427891]],["zijaanzij.nl",1137618578],["goedgevoel.be",67714294],["bndestem.nl",[67714294,1520427891]],["pzc.nl",[67714294,1520427891]],["agriline.be",765412832],["autoline.be",765412832],["machineryline.be",765412832],["agriline.nl",765412832],["autoline.nl",765412832],["machineryline.nl",765412832],["anaaltube.be",584207506],["omatube.be",584207506],["scattube.be",584207506],["seksfilmstube.be",584207506],["plassextube.com",584207506],["smsextube.com",584207506],["tienersextube.com",584207506],["amateursextube.eu",584207506],["incesttube.eu",584207506],["schaamlip.net",584207506],["opasextube.nl",584207506],["sex-kamer.nl",584207506],["tubeclips.nl",584207506],["atletiekkrant.be",[947128528,422126595]],["autosportkrant.be",[947128528,422126595]],["basketbalkrant.be",[947128528,422126595]],["handbalkrant.be",[947128528,422126595]],["hockeykrant.be",[947128528,422126595]],["peoplesphere.be",947128528],["sportid.be",[947128528,422126595]],["tenniskrant.be",[947128528,422126595]],["volleybalkrant.be",[947128528,422126595]],["vrouwenvoetbalkrant.be",[947128528,422126595]],["wielerkrant.be",[947128528,422126595]],["voetbalkrant.com",[947128528,422126595]],["sport-planet.eu",[947128528,422126595]],["psv.nl",947128528],["atv.be",962784716],["robtv.be",962784716],["tvl.be",962784716],["tvoost.be",962784716],["autoscout24.be",1255192568],["autoscout24.nl",1255192568],["basketballbelgium.be",392632036],["belgiancycling.be",865042704],["zoekhulp.nl",865042704],["nieuwsfiets.nu",865042704],["magazine.belgiancycling.be",441516478],["belgie-sexcontact.be",790504852],["belgie-sexdate.be",1890925114],["belgischecasinos.be",1993279082],["ninefornews.nl",1993279082],["newspower.nu",1993279082],["bestereistijd.be",[619924784,1458142247]],["hetnieuwsvandaag.be",[619924784,513129418]],["itdaily.be",619924784],["sport.be",619924784],["standaard.be",619924784],["tripadvisor.be",619924784],["beleggersbelangen.nl",619924784],["besteproduct.nl",619924784],["hyvesgames.nl",619924784],["indebuurt.nl",619924784],["koopplein.nl",619924784],["limburger.nl",619924784],["radioluisterenlive.nl",619924784],["tellows.nl",619924784],["tradeidee.nl",619924784],["tripadvisor.nl",619924784],["voetbalnieuws.nl",619924784],["voetbalprimeur.nl",619924784],["wijlimburg.nl",619924784],["xgn.nl",619924784],["letsgodigital.org",619924784],["persinfo.org",619924784],["bloovi.be",689900283],["alle-tests.nl",689900283],["bruzz.be",2064454737],["girlscene.nl",2064454737],["omroepflevoland.nl",2064454737],["trendalert.nl",2064454737],["sportuitslagen.org",2064454737],["buienradar.be",1040168262],["buienradar.nl",1040168262],["chatmetvreemden.be",7095527],["chatmetvreemden.nl",7095527],["cinenews.be",1171569000],["webmastersunited.com",1171569000],["androidworld.nl",1171569000],["handbal.nl",1171569000],["openrotterdam.nl",1171569000],["wegdamnieuws.nl",1171569000],["clubbrugge.be",1652044333],["feyenoord.nl",1652044333],["ftm.nl",1652044333],["computable.be",[185915656,912477837]],["computable.nl",912477837],["dansendeberen.be",482507746],["dating-vinden.be",907851759],["deperfecte-sexdate.be",[907851759,1401710801]],["flirten-vlaanderen.be",907851759],["neuk-sexcontact.be",[907851759,1401710801]],["neukengratis.be",907851759],["sexcontact-xxx.be",907851759],["sexdate-xxx.be",907851759],["deperfecte-sexdate.nl",907851759],["geil-neuken.nl",907851759],["geile-sexverhalen.nl",907851759],["direct-sexdate.be",703095194],["dominant.be",892519733],["sextoons.be",892519733],["tiener-sex.be",892519733],["doorbraak.be",1772886759],["dagelijksekost.een.be",1112962122],["farmaline.be",1167965877],["feestdagen-be.be",1917766735],["feestdagen-nl.nl",1917766735],["focus-wtv.be",412422711],["funnygames.be",[1212742569,803256056,1401914995]],["funnygames.nl",[1212742569,803256056,1401914995]],["rtvdordrecht.nl",803256056],["spele.be",1401914995],["spele.nl",1401914995],["gazetvandaag.be",1963126848],["jupilerproleague.eu",1963126848],["f1-gp.nl",1963126848],["formule1-race.nl",1963126848],["gaming-nieuws.nl",1963126848],["giganieuws.nl",1963126848],["hotstreams.nl",1963126848],["krantvandaag.nl",1963126848],["nieuwsgigant.nl",1963126848],["recepten-vandaag.nl",1963126848],["voetbal-vandaag.nl",1963126848],["eredivisie.ws",1963126848],["formule1.ws",1963126848],["grandprix.ws",1963126848],["geile-sexcontacten.be",712293426],["gezondheid.be",629417851],["gocar.be",2110719627],["goldfm.be",230585593],["golf.be",1166355040],["goodbye.be",1351821229],["sporza.be",1351821229],["gva.be",1066920720],["handbal.be",1648783512],["hbvl.be",360008690],["mijn-tv-gids.be",513129418]]);

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
