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

// swe-1

const argsMap = new Map([[289367078,{"a":".outsider,.panel--naringsliv"}],[397227796,{"a":".pea_cook_wrapper"}],[59955088,{"a":"[href*=\"casino\"][target]"}],[925267680,{"a":".sponsor-list,.cookie-law-wrapper"}],[1786427571,{"a":"#takeover"}],[1109309903,{"a":"td[valign=\"middle\"] > a[target=\"_blank\"]"}],[257576866,{"a":".cookie-box"}],[647222044,{"a":".u-bottomFixer"}],[1721759838,{"a":"#sidebar > li:not(.widget_wp_sidebarlogin),li.widget_sp_image"}],[1557077380,{"a":".cookiePush,\n.stickyFollow"}],[1305215186,{"a":"#more-banners"}],[870324523,{"a":"a[onclick*=\"bannerClick\"]"}],[556687363,{"a":"a[href*=\"adform.net\"],.ad-fullscreenWallpaper__container"}],[1613484148,{"a":".bet365,.panorama-wrapper,.tvg-manager-box"}],[1603733954,{"a":".image-post-link[target]"}],[1527935383,{"a":"[id^=\"adservice\"]"}],[1780491249,{"a":".skyad-wrapper"}],[174812988,{"a":"#top-banner-container,#top-banner-wrapper"}],[1673579023,{"a":".gorgad,.gorg-side-content > div.small:nth-last-child(2)"}],[1560829637,{"a":"a[href*=\"&do=advertisement&ad=1\"]"}],[140937141,{"a":"div[id^=\"sverigesNaturPopup\"]"}],[918482202,{"a":"[class*=\"top-ad-\"]"}],[869635222,{"a":"#bannerbox"}],[1186413314,{"a":".featured-area"}],[802926022,{"a":".cookie-accept"}],[437057116,{"a":".cookies"}],[1225383874,{"a":".site-cookies"}],[591095291,{"a":"#onetrust-consent-sdk"}],[1525372074,{"a":".article-list-item--native,.advert-notice-box,\n.cookies-wrap,.Modal"}],[478357457,{"a":"#megaAd-placeholder,#superright-side,a[href^=\"/brandstudio\"],a[href*=\"/casinoguide\"],[id^=\"adPlacement\"],a[href^=\"https://kampanj.aftonbladet\"],a[href*=\"/rabattkod\"][data-test-tag=\"internal-link\"],a[href^=\"/sportbladet/speltips/\"],\ndiv[class^=\"css-\"]:has([data-ad-subtype=\"mega\"]),\nmain > section > div[class^=\"css-\"]:first-child:has(img[src*=\"closeButton\"])"}],[1330004504,{"a":".ab_responsive_ads"}],[1303552952,{"a":".banners"}],[2144709786,{"a":".partnerCard,.partnerContent,.entry-content figure.wp-block-image,.category-partner"}],[165836727,{"a":".article-list-item--native"}],[1137618578,{"a":".advertisement"}],[1518429478,{"a":".analysguiden-promote-articles"}],[621753475,{"a":".native"}],[460803268,{"a":".scroll-message,.gallery-banner,.horseshoe,[data-ad-type]"}],[2461640,{"a":"#__next > div[class^=\"css-\"]:last-child,\na[href^=\"/annons/\"],a[href^=\"/native/\"],.slot-module,.slot-articlemodule"}],[1246319723,{"a":".front-slider-reklamsamarbete,.category-gastkronika-reklamsamarbete"}],[1295599662,{"a":".td-a-rec"}],[476373169,{"a":"#widget_code-6"}],[1000045624,{"a":".collapse.row.jobb.annonslista,#sponsored,#banners-right,.mittenbanner,#banners-top"}],[1858661783,{"a":".lokus-engine,.seekly,.rabble-widget"}],[803486110,{"a":"app-ads,.cdk-overlay-container"}],[1791849286,{"a":"#company-card_top-banner"}],[1434100315,{"a":".ga"}],[1690858092,{"a":".app-cookie-line,.partners-slideshow-widgets,.partners-slideshow-slide,.matches-calendar-sponsor,.sponsors,.footer-sponsors"}],[1270503313,{"a":"#partnerMenuContainer,#partnerMenuContainerFiller,\n.spons-artc,a[href^=\"/native/\"]"}],[1281989359,{"a":".sek-module-inner a[target=\"_blank\"]"}]]);

const hostnamesMap = new Map([["marsta.nu",289367078],["motorforum.nu",397227796],["nyatider.nu",59955088],["autonytt.se",59955088],["podcasts.nu",925267680],["quizza.nu",1786427571],["forum.robsoft.nu",[1109309903,257576866]],["svenskaturistforeningen.se",257576866],["rollspel.nu",647222044],["friaordet.org",647222044],["bukefalos.se",647222044],["husbilsklubben.se",647222044],["thaisnack.se",647222044],["xn--lnforum-exa.se",647222044],["sff.nu",1721759838],["skiljebosk.nu",1557077380],["hallbyhandboll.se",1557077380],["skillingaryd.nu",1305215186],["xn--vrnamo-bua.nu",1305215186],["sporttv.nu",870324523],["tv.nu",556687363],["tvmatchen.nu",1613484148],["usabil.nu",1603733954],["webb-tv.nu",1527935383],["webbkryss.nu",1780491249],["flashback.org",174812988],["garaget.org",1673579023],["forum.mustangclubsweden.org",1560829637],["sverigesnatur.org",140937141],["180.se",918482202],["2000tv.se",869635222],["56kilo.se",1186413314],["8sidor.se",802926022],["aapl.se",437057116],["hrnytt.se",437057116],["inblick.se",437057116],["inredningsarkitektur.se",437057116],["ljuskultur.se",437057116],["accentmagasin.se",1225383874],["adecco.se",591095291],["apotekhjartat.se",591095291],["ica.se",591095291],["tele2.se",591095291],["affarsvarlden.se",1525372074],["aftonbladet.se",[478357457,1330004504]],["skonhetsredaktorerna.se",1330004504],["aikfotboll.se",1303552952],["vaken.se",1303552952],["akaskidor.se",2144709786],["husohem.se",2144709786],["praktisktbatagande.se",2144709786],["sportfack.se",2144709786],["svenskgolf.se",2144709786],["tidningenhalsa.se",2144709786],["utemagasinet.se",2144709786],["vagabond.se",2144709786],["akaviaaspekt.se",[165836727,1137618578]],["lakartidningen.se",1137618578],["modette.se",1137618578],["nyheter24.se",1137618578],["tidningenkulturen.se",1137618578],["aktiespararna.se",[1518429478,621753475]],["alekuriren.se",[621753475,476373169]],["civilekonomen.se",621753475],["tidningen.se",621753475],["aktivtraning.se",460803268],["digitalfotoforalla.se",460803268],["iform.se",460803268],["militarhistoria.se",460803268],["pctidningen.se",460803268],["popularhistoria.se",460803268],["aktuellhallbarhet.se",2461640],["byggindustrin.se",2461640],["dagensmedia.se",2461640],["dagensmedicin.se",2461640],["dagenssamhalle.se",2461640],["dagligvarunytt.se",2461640],["fastighetsnytt.se",2461640],["market.se",2461640],["resume.se",2461640],["aktuellsakerhet.se",[1246319723,1295599662]],["borattforum.se",1295599662],["sjostadsbladet.se",1295599662],["aletorget.se",1000045624],["alingsastorget.se",1000045624],["almhulttorget.se",1000045624],["alvestatorget.se",1000045624],["amaltorget.se",1000045624],["angelholmtorget.se",1000045624],["arbogatorget.se",1000045624],["arvikatorget.se",1000045624],["askersundtorget.se",1000045624],["avestatorget.se",1000045624],["bastadtorget.se",1000045624],["bengtsforstorget.se",1000045624],["bjuvtorget.se",1000045624],["bodentorget.se",1000045624],["bollebygdtorget.se",1000045624],["bollnastorget.se",1000045624],["borastorget.se",1000045624],["borlangetorget.se",1000045624],["botkyrkatorget.se",1000045624],["bromollatorget.se",1000045624],["eksjotorget.se",1000045624],["enkopingtorget.se",1000045624],["eskilstunatorget.se",1000045624],["eslovtorget.se",1000045624],["fagerstatorget.se",1000045624],["falkenbergtorget.se",1000045624],["falkopingtorget.se",1000045624],["faluntorget.se",1000045624],["filipstadtorget.se",1000045624],["flentorget.se",1000045624],["forshagatorget.se",1000045624],["gallivaretorget.se",1000045624],["gavletorget.se",1000045624],["gislavedstorget.se",1000045624],["goteborgtorget.se",1000045624],["gotenetorget.se",1000045624],["gotlandtorget.se",1000045624],["hagforstorget.se",1000045624],["hallsbergtorget.se",1000045624],["hallstahammartorget.se",1000045624],["halmstadtorget.se",1000045624],["haningetorget.se",1000045624],["harnosandtorget.se",1000045624],["harrydatorget.se",1000045624],["hassleholmtorget.se",1000045624],["hebytorget.se",1000045624],["hedemoratorget.se",1000045624],["helsingborgtorget.se",1000045624],["herrljungatorget.se",1000045624],["hoforstorget.se",1000045624],["hoganastorget.se",1000045624],["hoortorget.se",1000045624],["horbytorget.se",1000045624],["huddingetorget.se",1000045624],["hudiksvalltorget.se",1000045624],["hultsfredtorget.se",1000045624],["hyltetorget.se",1000045624],["jonkopingtorget.se",1000045624],["kalixtorget.se",1000045624],["kalmartorget.se",1000045624],["karlshamntorget.se",1000045624],["karlskogatorget.se",1000045624],["karlskronatorget.se",1000045624],["karlstadtorget.se",1000045624],["katrineholmtorget.se",1000045624],["kavlingetorget.se",1000045624],["kiltorget.se",1000045624],["kirunatorget.se",1000045624],["klippantorget.se",1000045624],["kopingtorget.se",1000045624],["kramforstorget.se",1000045624],["kristianstadtorget.se",1000045624],["kristinehamntorget.se",1000045624],["krokomtorget.se",1000045624],["kumlatorget.se",1000045624],["kungalvtorget.se",1000045624],["kungsbackatorget.se",1000045624],["laholmtorget.se",1000045624],["landskronatorget.se",1000045624],["leksandtorget.se",1000045624],["lidkopingtorget.se",1000045624],["ljungbytorget.se",1000045624],["ljusdaltorget.se",1000045624],["ludvikatorget.se",1000045624],["luleatorget.se",1000045624],["lundtorget.se",1000045624],["lyckseletorget.se",1000045624],["lysekiltorget.se",1000045624],["malmotorget.se",1000045624],["mariestadstorget.se",1000045624],["markarydtorget.se",1000045624],["marktorget.se",1000045624],["moratorget.se",1000045624],["nackatorget.se",1000045624],["nassjotorget.se",1000045624],["norrtaljetorget.se",1000045624],["nybrotorget.se",1000045624],["nykopingtorget.se",1000045624],["nynashamntorget.se",1000045624],["olandtorget.se",1000045624],["olofstromtorget.se",1000045624],["orebrotorget.se",1000045624],["ornskoldsvikstorget.se",1000045624],["orusttorget.se",1000045624],["osbytorget.se",1000045624],["oskarshamntorget.se",1000045624],["ostersundtorget.se",1000045624],["osthammartorget.se",1000045624],["partilletorget.se",1000045624],["piteatorget.se",1000045624],["ronnebytorget.se",1000045624],["saffletorget.se",1000045624],["salatorget.se",1000045624],["sandvikentorget.se",1000045624],["sigtunatorget.se",1000045624],["simrishamntorget.se",1000045624],["sjobotorget.se",1000045624],["skaratorget.se",1000045624],["skellefteatorget.se",1000045624],["skovdetorget.se",1000045624],["skuruptorget.se",1000045624],["soderhamntorget.se",1000045624],["sodertaljetorget.se",1000045624],["sollefteatorget.se",1000045624],["sollentunatorget.se",1000045624],["solnatorget.se",1000045624],["solvesborgtorget.se",1000045624],["staffanstorptorget.se",1000045624],["stenungsundtorget.se",1000045624],["stockholmtorget.se",1000045624],["strangnastorget.se",1000045624],["stromstadtorget.se",1000045624],["sundsvalltorget.se",1000045624],["sunnetorget.se",1000045624],["svenljungatorget.se",1000045624],["tabytorget.se",1000045624],["tanumtorget.se",1000045624],["tidaholmtorget.se",1000045624],["tierptorget.se",1000045624],["timratorget.se",1000045624],["tingsrydtorget.se",1000045624],["tjorntorget.se",1000045624],["tomelillatorget.se",1000045624],["torsbytorget.se",1000045624],["tranastorget.se",1000045624],["tranemotorget.se",1000045624],["trelleborgtorget.se",1000045624],["trollhattantorget.se",1000045624],["trosatorget.se",1000045624],["uddevallatorget.se",1000045624],["ulricehamntorget.se",1000045624],["umeatorget.se",1000045624],["uppsalatorget.se",1000045624],["vallentunatorget.se",1000045624],["vanersborgtorget.se",1000045624],["varatorget.se",1000045624],["varbergtorget.se",1000045624],["varnamotorget.se",1000045624],["vasterastorget.se",1000045624],["vasterviktorget.se",1000045624],["vaxjotorget.se",1000045624],["vellingetorget.se",1000045624],["vetlandatorget.se",1000045624],["vimmerbytorget.se",1000045624],["ystadtorget.se",1000045624],["alingsastidning.se",1858661783],["bohuslaningen.se",1858661783],["gp.se",1858661783],["hallandsposten.se",1858661783],["hn.se",1858661783],["kungalvsposten.se",1858661783],["kungsbackaposten.se",1858661783],["lokaltidningensto.se",1858661783],["molndalsposten.se",1858661783],["partilletidning.se",1858661783],["stromstadstidning.se",1858661783],["sttidningen.se",1858661783],["ttela.se",1858661783],["alkompis.se",803486110],["allabolag.se",1791849286],["allatvkanaler.se",1434100315],["allsvenskan.se",1690858092],["superettan.se",1690858092],["alltforforaldrar.se",1270503313],["alltomhif.se",1281989359]]);

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
