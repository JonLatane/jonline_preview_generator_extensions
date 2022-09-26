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

const argsMap = new Map([[1559335503,{"a":"div[class*=\"slider\"]:has([class*=\"sliderwidget\"])"}],[1284064546,{"a":".nomobile.boxlinks:has(.homebanner)"}],[1719936321,{"a":".o-news__add"}],[1787522780,{"a":"#itdaily-article-sidebar,\n#itdaily-article-top,\n#itdaily-footer,\n#itdaily-home-floor"}],[1745312160,{"a":"#adRechts"}],[743013784,{"a":".banner"}],[983017476,{"a":".js-partner-content"}],[1650682410,{"a":".widget_links"}],[228731582,{"a":".block-leaderboard"}],[1299254296,{"a":"#leaderboard_row"}],[1161367071,{"a":"div[class*=\"blocksponsors\"]"}],[369307194,{"a":".googleadvidx"}],[281972982,{"a":".cta-container"}],[2014389268,{"a":"div[class*=\"AdWrapper\"]"}],[324431792,{"a":".midzone,\n[id^=\"ads-row\"]"}],[945768959,{"a":"#reclameblok-wrapper"}],[294172664,{"a":".view-id-banners_top"}],[967117314,{"a":".text_12_jobs_only"}],[1225427364,{"a":".well:has([src*=\".sdcash.nl/\"])"}],[569733320,{"a":".banner-silver,\n.content > .box:has(#partner-slider),\n.region-banner-diamond,\n.view-vw-banners.view"}],[915023655,{"a":".advertentie"}],[1976480563,{"a":".widget-area.sidebar:has([data-advadstrackid])"}],[1789869227,{"a":".promSB"}],[1207900967,{"a":".adlink:not(:has([src*=\"PalNWS\"])),\n.ads-wrapper:not(:has(a[href*=\"palnws.be\"])),\n.content-inner > .palnw-target:has([id^=\"div-gpt-ad\"]),\n.jeg_ad:not(:has(a[href*=\"palnws.be\"])),\n.jeg_ad_top:not(:has(a[href*=\"palnws.be\"]))"}],[347491559,{"a":"[id^=\"text-\"]:not(:has(a[href^=\"https://peoplesphere.be/\"])):not(:has(.twitter-timeline))"}],[716806790,{"a":"[class^=\"Advertisement__AdvertisementContainer\"]"}],[1691464550,{"a":".col.pix-sidebar"}],[1673251501,{"a":".inside-left-sidebar"}],[1967686322,{"a":".widget_sponsors_widget"}],[2126210075,{"a":".banner-size-leaderbord"}],[205430761,{"a":".leaderBoard"}],[1156785080,{"a":"#w-leaderboard"}],[1174342250,{"a":".block-ad-banner,\n.view-weather-ads-view"}],[1529881016,{"a":".card:has(img[src$=\".gif\"])"}],[1494202354,{"a":".moduletable:has([src*=\"2k19.nl\"]),\n.moduletable:has([src*=\"affilaxy.com/promos/\"])"}],[1728604472,{"a":"#aside > :has(iframe[data-src*=\"affilaxy.com\"])"}],[488539392,{"a":".video-sidebar"}],[50087354,{"a":".homepage-seo-footer"}],[1087781073,{"a":".nieuws-detail-page-bottom-part > :has(.konvento)"}],[1185442773,{"a":"#latest_news_above:has(.sponsored-right-bottom):has([rel=\"sponsored\"])"}],[1246836570,{"a":"[id^=\"text-\"]:has(img[src*=\"hotlinkie.com/\"])"}],[105275518,{"a":".ad--button,\n.ad--halfpageskyscraper"}],[310909615,{"a":".widget:has(a[href*=\".bn5x.net/\"])"}],[1212071758,{"a":"td.di1:has(img[src$=\"/yourad.gif\"])"}],[1282725450,{"a":".td-banner-wrap-full"}],[1846527946,{"a":"a[href^=\"https://ds1.nl/\"]"}],[1685704756,{"a":".commercial-banner"}],[1369889800,{"a":".ac_paragraph:has(.bb_wrapper),\n.c-articlelistitem:has([id=\"adhese_sponsoredstory\"]),\n.c-articleteaser--sponsored,\n.c-sitenavPlaceholder__ad,\n.sticky-article-halfpager,\n[class$=\"sponsored\"]"}],[797030268,{"a":".site-footer"}],[954369860,{"a":"#tracking-url"}],[1854283083,{"a":".partners-immo,\n.sponsor-sn"}],[308872030,{"a":"[id^=\"rossel-leader\"]"}],[140586866,{"a":".simpleads"}],[968182113,{"a":".block.spacer:has(#advert-campaign)"}]]);

const hostnamesMap = new Map([["hyc.be",1559335503],["ikwilneuken.be",1284064546],["ikwilneuken.net",1284064546],["30plussexdate.nl",1284064546],["meidenzoekensex.nl",1284064546],["sexcontactadressen.nl",1284064546],["inmemoriam.be",1719936321],["itdaily.be",1787522780],["kinderspelletjes.be",1745312160],["klasse.be",743013784],["retaildetail.be",743013784],["truck1.be",743013784],["truck1-nl.be",743013784],["tvgemist.be",743013784],["voetbalnieuws.be",743013784],["allradio.nl",743013784],["broadcastmagazine.nl",743013784],["camjam.nl",743013784],["creditexpo.nl",743013784],["elkspel.nl",743013784],["erotracks.nl",743013784],["executive-people.nl",743013784],["filmladder.nl",743013784],["gezondheidsnet.nl",743013784],["nieuweoogst.nl",743013784],["nieuws.nl",743013784],["nrc.nl",743013784],["nu.nl",743013784],["retaildetail.nl",743013784],["sexfotodating.nl",743013784],["startbewijs.nl",743013784],["startkabel.nl",743013784],["startpagina.nl",743013784],["televizier.nl",743013784],["telezien.nl",743013784],["totaaltv.nl",743013784],["truck1.nl",743013784],["tvgids.nl",743013784],["uiennieuws.nl",743013784],["uw-folder.nl",743013784],["waldnet.nl",743013784],["afkortingen.nu",743013784],["unity.nu",743013784],["knack.be",983017476],["livestreamvandaag.be",1650682410],["ajaxreport.nl",1650682410],["feyenoordreport.nl",1650682410],["onlinekraslotenrss.nl",1650682410],["onlinepokerrss.nl",1650682410],["psvreport.nl",1650682410],["sportweddenrss.nl",1650682410],["voetbalsnafu.nl",1650682410],["livios.be",228731582],["made-in.be",1299254296],["mandelnieuws.be",1161367071],["mariogames.be",369307194],["menttv.be",281972982],["meteovista.be",2014389268],["mijn-tv-gids.be",324431792],["mnm.be",945768959],["stubru.be",945768959],["mo.be",294172664],["netonline.be",967117314],["neuk-sexcontact.be",1225427364],["nnieuws.be",569733320],["nuus.be",[915023655,1976480563]],["deoudrotterdammer.nl",915023655],["openingsurengids.be",1789869227],["palnws.be",1207900967],["peoplesphere.be",347491559],["poki.be",716806790],["proximus.be",1691464550],["radiopros.be",1673251501],["radioreflex.be",1967686322],["radioviainternet.be",2126210075],["rendez-vous.be",205430761],["rtl.be",1156785080],["rubenweytjens.be",1174342250],["seksdatemet-milfs.be",1529881016],["sexcontact-xxx.be",1494202354],["sexdating-vrouwen.be",1728604472],["sexdatingtube.be",488539392],["sexbios.net",488539392],["camsexbabe.nl",488539392],["mijnpornotube.nl",488539392],["pornosterneuken.nl",488539392],["sexylingerie-winkel.be",50087354],["showbizzsite.be",1087781073],["spaargids.be",1185442773],["spermatube.be",1246836570],["swingerstube.be",1246836570],["xxx-tube.be",1246836570],["standaard.be",105275518],["streamwijzer.be",310909615],["surfplaza.be",1212071758],["techpulse.be",1282725450],["tennisplaza.be",1846527946],["tennisvlaanderen.be",1685704756],["tijd.be",1369889800],["tubeseks.be",[797030268,954369860]],["rapetube.eu",954369860],["hdtienersexfilms.nl",954369860],["poepsexfilmstube.nl",954369860],["teen-sex.nl",954369860],["vakantieweb.be",[1854283083,308872030]],["immo.vlan.be",308872030],["velt.be",140586866],["veto.be",968182113]]);

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
