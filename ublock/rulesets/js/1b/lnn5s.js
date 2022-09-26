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

const argsMap = new Map([[1083357517,{"a":"[class^=\"fl-row fl-row-\"][data-node]:has(.fl-module-uabb-image-carousel)"}],[2135275384,{"a":".artikel-banners,\n.background_link"}],[1986596851,{"a":"[class^=\"banner\"]"}],[1190635283,{"a":"#shopside,\n.cbcontent"}],[616837831,{"a":".flat-theme-content:has(a[href][rel^=\"noopener\"])"}],[956430623,{"a":".elementor-widget-container:has(.strack_bnr)"}],[1791725364,{"a":".external"}],[1572345179,{"a":".rand:has(img[src$=\".gif\"])"}],[781070588,{"a":".ashe-widget"}],[1285313279,{"a":".desktoponly > .text-center"}],[1735986602,{"a":".textwidget:has(.model)"}],[2141055927,{"a":".prefilm,\n.side"}],[489871105,{"a":".widget:has(img[src]),\nhr:nth-of-type(1)"}],[1243794553,{"a":".c-footer-sponsors"}],[2122852062,{"a":".logolinks-wrapper"}],[131099601,{"a":".article-page__bumper"}],[1789260001,{"a":"#footer-banner"}],[1243045705,{"a":".wp-block-genesis-blocks-gb-columns:has(a[href*=\"/go/www.bet365.nl/\"])"}],[1183008495,{"a":".add-background"}],[1284359493,{"a":".gesponsord_blokje"}],[540222812,{"a":".in-house,\n.mag-box.half-box,\n.mag-box:has(.gofollow),\n.mag-box:has([src*=\"adskeeper.com\"]),\n.mag-box:has(img[width=\"728\"][height=\"90\"]),\n.nfn-target[data-advadsredirect],\n.sticky-element-placeholder,\n[id^=\"text-\"]:has(.nfn-target[data-advadsredirect]),\narticle > div.entry-content > .mag-box-container:has(h3),\ndiv[class^=\"mag-box\"] + #adskeeper"}],[156342355,{"a":"#content-footer-section:has(.adsbygoogle)"}],[2016983904,{"a":".bg-gray-100:has([advobject])"}],[202182577,{"a":"[id^=\"slideshowwidget\"]:has(img[src$=\".gif\"])"}],[1369673286,{"a":".bannerListWidget,\n.ewic-slider-pro-widget,\n.headbanner"}],[999291103,{"a":".ster-banner,\n.teletekst__banner"}],[2080447190,{"a":".amaz_el"}],[1139794018,{"a":"#header > .zone,\n.temptation__aside,\n[class=\"zone clearfix\"][data-zone$=\"bottom\"]:has([id^=\"ad\"]),\na[href*=\"/advertorial-\"],\naside#h1,\ndiv.articlelist[data-section^=\"advertorial\"][data-section$=\"-adverteerder\"],\ndiv[id^=\"block-in-article-ad\"]"}],[620124600,{"a":".inner:has([href^=\"/\"])"}],[1964580276,{"a":".sidebar,\ndiv[align=\"center\"] a[target=\"_blank\"]"}],[601112054,{"a":"div[class^=\"ad-\"]"}],[1327273877,{"a":"div[class^=\"ad_\"]"}],[1885139512,{"a":"#qtFooterWidgets:has(.gs_logo_single--wrapper)"}],[898559070,{"a":".sponsor-carousel"}],[454031892,{"a":"[id^=\"media_image-\"]:has(img[width=\"300\"]):not(:has([href*=\"youtube\"]))"}],[1553033115,{"a":".adcontainer"}],[215888747,{"a":".slider-wrapper"}],[1603416665,{"a":"aside.widget:has(script[src*=\"affilaxy.com\"])"}],[75433593,{"a":".promotion-block"}],[450141717,{"a":".clearfix.entry > small,\n[style^=\"margin\"]:has(.adsbygoogle)"}],[214553502,{"a":"#top_ad-360,\n[id^=\"AdvertMid\"],\n[id^=\"containersitead\"]"}],[219732664,{"a":"[class$=\"sidebar-widget\"]:has(p > a[href*=\"casino\"]):not(:has(div[class=\"widget-title\"]))"}],[1990185223,{"a":".widget:has([href^=\"https://short1.nl/smart/\"])"}],[20874704,{"a":".SponsorBar"}],[51462347,{"a":"[href^=\"https://www.reisburobartlimburg.nl/\"]"}],[707354024,{"a":".home-banner"}],[302879918,{"a":"#dropinboxv2cover,\n[src=\"http://www.oops.nl/banner/bannerindex.html\"],\ntable[cellspacing=\"30\"]"}],[2065174225,{"a":".rcntctr"}],[294007930,{"a":"div.contentContainer:has(img[src^=\"/content/\"])"}],[919810825,{"a":".wdslider"}],[1760973341,{"a":".element:has(.sb-advertentie > .adsbygoogle)"}],[1622511797,{"a":".ad--section"}],[1512899439,{"a":".site__sidebar > .block:has(div.banner),\ndiv.block:has([id^=\"div-gpt-ad\"])"}],[1965013398,{"a":".widget_custom_html:has([src^=\"//aweproto.com/\"])"}]]);

const hostnamesMap = new Map([["ml5.nl",1083357517],["motocrossplanet.nl",[2135275384,1986596851]],["amusement.tv",1986596851],["beurs.tv",1986596851],["cultuur.tv",1986596851],["formule1.tv",1986596851],["gamen.tv",1986596851],["geloof.tv",1986596851],["gezondheid.tv",1986596851],["informatief.tv",1986596851],["jongeren.tv",1986596851],["kennis.tv",1986596851],["kinderen.tv",1986596851],["kook.tv",1986596851],["lachen.tv",1986596851],["mensen.tv",1986596851],["mode.tv",1986596851],["muziek.tv",1986596851],["natuur.tv",1986596851],["nederland.tv",1986596851],["nieuws.tv",1986596851],["ondernemen.tv",1986596851],["onrecht.tv",1986596851],["oranje.tv",1986596851],["politiek.tv",1986596851],["reis.tv",1986596851],["serie.tv",1986596851],["spelletjes.tv",1986596851],["sporten.tv",1986596851],["talentenjacht.tv",1986596851],["vaartuig.tv",1986596851],["verkiezing.tv",1986596851],["voertuig.tv",1986596851],["voetbal.tv",1986596851],["weer.tv",1986596851],["woon.tv",1986596851],["motorfietsblog.nl",1190635283],["motorrijdenexpert.nl",616837831],["mr-online.nl",956430623],["musicmeter.nl",1791725364],["mygaydate.nl",1572345179],["nailtalk.nl",781070588],["nd.nl",1285313279],["nederlandsewebcambabes.nl",1735986602],["nederlandsextube.nl",2141055927],["netxxx.nl",489871105],["ngf.nl",1243794553],["nieuweoogst.nl",2122852062],["nieuwnieuws.nl",131099601],["nieuws.nl",1789260001],["nieuwslog.nl",1243045705],["nieuwsmotor.nl",1183008495],["nieuwsuitdelden.nl",1284359493],["ninefornews.nl",540222812],["nl-nieuwsonline.nl",156342355],["nnp.nl",2016983904],["noordernieuws.nl",202182577],["noordkopcentraal.nl",1369673286],["nos.nl",999291103],["notebookcheck.nl",2080447190],["nu.nl",1139794018],["nzbindex.nl",620124600],["oisterwijknieuws.nl",1964580276],["omroepbrabant.nl",[601112054,1327273877]],["reclamefolder.nl",1327273877],["omroepeemsdelta.nl",1885139512],["omroephouten.nl",898559070],["omroeprsh.nl",454031892],["omroepwest.nl",[1553033115,215888747]],["omroepzeeland.nl",1553033115],["onderdanigeman.nl",1603416665],["oneworld.nl",75433593],["online-omzetten.nl",450141717],["online-radio.nl",214553502],["onlinecasinorss.nl",219732664],["onlinekraslotenrss.nl",219732664],["voetbalsnafu.nl",219732664],["voetbalweddenrss.nl",219732664],["onschuldigemeiden.nl",1990185223],["onsoranje.nl",20874704],["ontdek-amerika.nl",51462347],["oogtv.nl",707354024],["oops.nl",302879918],["oozo.nl",2065174225],["opiniepeilers.nl",294007930],["osuradio.nl",919810825],["paginamarkt.nl",1760973341],["parool.nl",1622511797],["trouw.nl",1622511797],["pcmweb.nl",1512899439],["pikanterooieoortjes.nl",1965013398]]);

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
