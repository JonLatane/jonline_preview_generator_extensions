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

const argsMap = new Map([[810069826,{"a":"img[width=\"1020\"][height=\"350\"]"}],[1683771621,{"a":"#semprot_ads_side_left,\n#semprot_ads_side_right"}],[79267774,{"a":"#jsemrp_372_719,\n#jsemrp_373_873,\n#jsemrp_374_469,\n#jsemrp_380_290"}],[1377635178,{"a":".semprotpokemon_1,\n.semprotpokemon_2"}],[694192240,{"a":".coliklan"}],[25450347,{"a":".cm-popup-modal"}],[1653646780,{"a":".banner3"}],[1437225749,{"a":".blox"}],[1784516618,{"a":"#floatads2,\n#floatads3"}],[1894469456,{"a":".anuads"}],[1460992086,{"a":"a[title^=\"manga4d\"]"}],[707716614,{"a":"#openpopunder"}],[840884083,{"a":".mvic-btn"}],[198522219,{"a":".sidebarborder:nth-of-type(4),\n.sidebarborder:nth-of-type(5)"}],[1743394282,{"a":"a[href^=\"//bit.ly/\"]"}],[288889792,{"a":"#videoOverAd"}],[1295785839,{"a":"#tutup,\n#tutup2"}],[2044985349,{"a":"#float-atas"}],[84930421,{"a":".header-banner"}],[701625187,{"a":".swal-overlay--show-modal.swal-overlay"}],[884547727,{"a":".s-sponsor"}],[1636293973,{"a":"#popuppress-9119,\n#top-banner-content"}],[2036374671,{"a":"a[href^=\"http://www.pencetpoker.\"]"}],[430155221,{"a":"#main-popup"}],[79409028,{"a":".banner-middle"}],[1090986442,{"a":"[class*=\"banner\"]"}],[2029692237,{"a":".teaser3"}],[426961596,{"a":"a[target=\"_blank\"][rel^=\"noopener noreferrer\"] > img[src$=\".gif\"]"}],[957941630,{"a":".idmuvi-banner-beforecontent"}],[1680949830,{"a":".kzl-header.kzl"}],[1450215828,{"a":".iklan-tengah"}],[546698752,{"a":"[href$=\"/referral/nontoncinema\"],\na[href^=\"http://referral.\"]"}],[546416640,{"a":".box_banner"}],[1065658989,{"a":"[href=\"//dumbpop.com/help.xml\"]"}],[160647828,{"a":"#largebanner"}]]);

const hostnamesMap = new Map([["funtasticko.net",810069826],["gadismalam.net",1683771621],["harakahdaily.net",79267774],["ibugil.net",1377635178],["indoxxi.net",694192240],["inidramaku.net",25450347],["juragan-anime.net",1653646780],["kazefuri.net",1437225749],["komiku.net",1784516618],["kurazone.net",1894469456],["mangakita.net",1460992086],["mangashiro.net",707716614],["nobarfilm21.net",840884083],["nontonganool.net",198522219],["seri168.net",1743394282],["torjack.net",288889792],["tvkabel.net",1295785839],["unyil.net",2044985349],["zonapanaz.net",84930421],["indobokep.pro",84930421],["dutafilm.observer",701625187],["bokepml.online",884547727],["layarxxi.online",1636293973],["anoboy.org",2036374671],["dewabioskop21.org",[430155221,79409028]],["dwa21.org",[430155221,1090986442]],["film21terbaru.org",2029692237],["gatsunime.org",426961596],["indosemi45.org",957941630],["kumpulmanga.org",1680949830],["nanimex.org",1450215828],["nontoncinema.org",546698752],["otakuindo.org",546416640],["pakbos21.org",1065658989],["pkspiyungan.org",160647828]]);

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
