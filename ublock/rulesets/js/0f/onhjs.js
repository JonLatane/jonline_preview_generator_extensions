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

// idn-0

const argsMap = new Map([[1537358037,{"a":"#ads-float,\n#solopos_float,\n.bottom-fix"}],[195122625,{"a":"#bannerkategoriheader,\n#mybannerpopup,\n#mybannerpopup2"}],[1134197699,{"a":".spb_middle.spb_banner"}],[283067813,{"a":"#text-28 > .textwidget,\na[href^=\"http://www.pembesar-vimax-herbal.com/\"]"}],[26694947,{"a":"[style=\"float:right; margin:7px 0 10px 10px;\"] > small"}],[648061831,{"a":".inarticle-ads.wrapper-ads,\n.leaderboard-ads-wrapper.wrapper-ads"}],[1029710574,{"a":".parallax-ad"}],[1804443224,{"a":".sponsor_ads:nth-of-type(1),\n.sponsor_ads:nth-of-type(2),\n.sponsor_ads:nth-of-type(4)"}],[1280194039,{"a":"#floating_ads_bottom_textcss_wrap"}],[457805416,{"a":".top-banner"}],[756961009,{"a":".adBar-vertical.left,\n.adBar-vertical.right"}],[478207108,{"a":"#IklanIDGS,\n#bottombanner"}],[1437418413,{"a":".ktz-banneraftercontent"}],[1040641687,{"a":"#headerbanner"}],[1179434615,{"a":"#baca_juga,\n#more_stories,\n#title_kanal,\n#vertical_top_kanal"}],[1908061196,{"a":".aligncenter,\n.sidebar-widget:nth-of-type(1),\n.sidebar-widget:nth-of-type(3),\n.sidebar-widget:nth-of-type(4)"}],[907470210,{"a":"#player-side-right"}],[11684739,{"a":"._ning_link.strack_cli"}],[573823519,{"a":"#anchormasklink"}],[770420031,{"a":".bt-g1.b-g3.wb-300x100,\n.bt-g1.b-g3.wb-300x250"}],[857743443,{"a":"#bannerkiri"}],[982323167,{"a":".d.wp-120x600,\n.wb-300x250"}],[139691547,{"a":"img[style=\"width: 125px; height: 125px;\"]"}],[1544085111,{"a":"#playerOverlay"}],[517240517,{"a":"img:nth-of-type(2)"}],[1296318238,{"a":"[class^=\"ad-\"][class*=\"-container\"]"}],[1351512649,{"a":".adv-space"}],[1916529839,{"a":"#leaderboard"}],[991098924,{"a":".bottom-frame-banner-close-btn,\n.bottom-leaderboard-cont,\n.skycapper"}],[2103889201,{"a":"#v5-marcommpromotion.home-right-box,\n#v5-marcommpromotion2,\n#v5-showcase3,\n#v8-leaderboard"}],[1978860330,{"a":"#v5-showcase1,\n#v5-showcase2"}],[62877394,{"a":".ad2"}],[1209615848,{"a":"#blockblockA"}],[1982248803,{"a":".textwidget img[width=\"300\"][height=\"250\"],\ncenter img[width=\"728\"][height=\"70\"]"}],[186691300,{"a":"#left-skyscraper,\n#right-skyscraper,\n.ad.b300x250"}]]);

const hostnamesMap = new Map([["harianjogja.com",1537358037],["solopos.com",1537358037],["hdtvku.com",195122625],["hipwee.com",1134197699],["hotabis.com",283067813],["iberita.com",26694947],["idntimes.com",[648061831,1029710574]],["sindonews.com",1029710574],["idpelago.com",1804443224],["idxxx1.com",[1280194039,457805416]],["lapar.com",457805416],["nontonitu.com",457805416],["dewabioskop21.org",457805416],["indobokepz.com",756961009],["indogamers.com",478207108],["indonesiamovies21.com",1437418413],["indosiar.com",1040641687],["indotelko.com",1179434615],["indoxtream.com",1908061196],["indoxx1.com",907470210],["idxx1.top",907470210],["indoxximovie.com",11684739],["inilah.com",[573823519,770420031]],["kompasiana.com",573823519],["ekonomi.inilah.com",857743443],["teknologi.inilah.com",[857743443,982323167]],["isdaryanto.com",139691547],["iyottube.com",1544085111],["jakbos.com",517240517],["jalantikus.com",1296318238],["k-vid.com",1351512649],["dramacool.io",1351512649],["dramanice.io",1351512649],["kabar2.com",1916529839],["kabar24.com",991098924],["kapanlagi.com",[2103889201,1978860330]],["otosia.com",1978860330],["m.kapanlagi.com",62877394],["kertashitam.com",1209615848],["klikseru.com",1982248803],["komikbaru.com",186691300]]);

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
