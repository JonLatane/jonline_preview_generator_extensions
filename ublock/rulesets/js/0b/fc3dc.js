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

// fin-0

const argsMap = new Map([[1889709962,{"a":".compareGoogleCell"}],[868854939,{"a":"#div-leeadsFullpageAd,\n.article-ad-container,\n.commercial-row"}],[1065709215,{"a":".dls-loaded"}],[1317131981,{"a":".isosentteri1,\n[href^=\"/uutiset/mainos-\"]"}],[859790704,{"a":".paraati1"}],[1618551804,{"a":".ads__wrapper,\n.pointti_container"}],[1878004102,{"a":".bg-elisa-dark"}],[915708335,{"a":"#tilt-ad-top-stay-away"}],[859446710,{"a":".box.ads,\narticle[class=\"article-preview content-marketing box\"],\ndiv.section:nth-of-type(2) > .row > .show-for-large.columns.xxlarge-6.xlarge-7.large-8.sidebar"}],[489505197,{"a":".page-notes > .note--highlight"}],[1860481879,{"a":"#annonsspalt,\n#leaderboard,\n.annonspekare"}],[1147240960,{"a":".sponsoredrow"}],[1483494099,{"a":".alp-advert"}],[419182898,{"a":".thirstylinkimg,\n[href^=\"https://online.adservicemedia.dk/cgi-bin/click.pl\"]"}],[137327079,{"a":".Advertisement__Box,\n.Advertisement__Box--with-padding,\n.Advertisement__Top,\n.FrontPageSpots__Ad"}],[2109538380,{"a":".banner-wrapper,\n.banner_middle"}],[784999264,{"a":".in-list-ad-containers"}],[1007424636,{"a":".detailLeaderboard"}],[1644038272,{"a":".map-ad"}],[1558094581,{"a":".widget_custom_html"}],[336485436,{"a":".elementor-element-228d8bca,\n.elementor-element-24aa8e2,\n.elementor-element-9e2ec43,\n.elementor-widget-container > [href^=\"https://northernmarketing.fi/\"]"}],[1993279082,{"a":".gofollow"}],[1546635709,{"a":"#adContainer,\n#ad_topScroller,\n#bigVideoAd_content,\n#eventad,\n#sky2_1,\n#sky2_2,\n.ad_video,\n.itsanad,\n.rwd.colthin > div,\n.sponsor,\n.videoAd,\nsection.artistyle3.rightbox:nth-of-type(1)"}],[91135401,{"a":".is-advertorial,\ndiv[id|=\"div-gpt-ad\"]"}],[1543223927,{"a":".ad-list,\n.newslink-ad"}],[727109974,{"a":"#herald_posts_widget-5"}],[2049678137,{"a":".adsbygoogle + script + br"}],[1137618578,{"a":".advertisement"}],[61955908,{"a":".content.single-banner,\n.top.panorama.banner,\na[rel=\"lightbox[palvelut]\"]"}],[1528121457,{"a":".td-a-rec-id-content_inline,\n.ylapala"}]]);

const hostnamesMap = new Map([["edukas.fi",1889709962],["ehandel.fi",868854939],["enontekionsanomat.fi",[1065709215,1317131981,859790704]],["inarilainen.fi",[1065709215,859790704]],["kainuunsanomat.fi",1065709215],["kittilalehti.fi",[1065709215,1317131981,859790704]],["kotilappi.fi",1065709215],["kuhmolainen.fi",1065709215],["luoteis-lappi.fi",[1065709215,1317131981,859790704]],["saariselansanomat.fi",1065709215],["sompio.fi",[1065709215,859790704]],["sotkamolehti.fi",1065709215],["ylakainuu.fi",1065709215],["epari.fi",1618551804],["ilkkapohjalainen.fi",1618551804],["jarviseutu-lehti.fi",1618551804],["jurvansanomat.fi",1618551804],["komiat.fi",1618551804],["suupohjansanomat.fi",1618551804],["vaasanikkuna.fi",1618551804],["viiskunta.fi",1618551804],["episodi.fi",[1878004102,915708335]],["inferno.fi",915708335],["rumba.fi",915708335],["esaimaa.fi",859446710],["ita-savo.fi",859446710],["kouvolansanomat.fi",859446710],["kymensanomat.fi",[859446710,489505197]],["lansi-savo.fi",859446710],["uutisvuoksi.fi",859446710],["ess.fi",489505197],["etn.fi",1860481879],["f1-forum.fi",1147240960],["feedi.fi",1483494099],["tanssiin.fi",1483494099],["fiksukuluttaja.fi",419182898],["finder.fi",137327079],["findit.fi",2109538380],["finnkino.fi",784999264],["flashscore.fi",1007424636],["fonecta.fi",1644038272],["fontanka.fi",1558094581],["fuengirola.fi",[336485436,1993279082]],["paakallo.fi",1993279082],["puheenaiheet.fi",1993279082],["mesta.net",1993279082],["gamereactor.fi",1546635709],["gogolf.fi",91135401],["haapavesi-lehti.fi",1543223927],["kalajokilaakso.fi",1543223927],["kalajokiseutu.fi",1543223927],["keskipohjanmaa.fi",1543223927],["kokkola-lehti.fi",1543223927],["lestijoki.fi",1543223927],["nivala-lehti.fi",1543223927],["perhonjokilaakso.fi",1543223927],["pietarsaarensanomat.fi",1543223927],["selanne-lehti.fi",1543223927],["hameensanomat.fi",727109974],["hardware.fi",[2049678137,1137618578]],["kaksplus.fi",1137618578],["metsalehti.fi",1137618578],["hattulaan.fi",61955908],["reska.fi",61955908],["hauskimmat.fi",1528121457]]);

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
