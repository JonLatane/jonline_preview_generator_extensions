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

// ltu-0

const argsMap = new Map([[67533346,{"a":"#info_video,\niframe[src*=\"rekovers.ru/filmux.net.html\"]"}],[1569891405,{"a":"#left_banner,\n#top_banner_torrent_details,\n.left > #inside > .block:nth-child(4),\n.tb_click,\n.tb_click_left,\n.tb_click_right,\n[href^=\"https://bit.ly/\"][target=\"_blank\"],\na[href*=\"flirtai.lt\"],\na[href*=\"topsport.lt\"],\na[href=\"store?ad=0\"],\na[href^=\"https://7bet.lt\"]"}],[168514744,{"a":"#AutoNumber1"}],[830837014,{"a":".sidebar"}],[1527368135,{"a":"marquee img"}],[1667162010,{"a":"#Image2_img"}],[996167170,{"a":"a[href=\"http://www.veltinis.lt\"] > img"}],[925365996,{"a":"#Slideshow2_slideshow"}],[1713235379,{"a":"#HTML3 A > img"}],[558303628,{"a":".content.citems.banner"}],[375925175,{"a":"#sidebar-primary-sidebar"}],[928109983,{"a":"#cc-m-imagesubtitle-image-3868849257"}],[1216583038,{"a":"#banners_170"}],[1471643074,{"a":"#norbe_sponsors-2,\n#norbe_sponsors-3"}],[905403889,{"a":"a[href=\"http://prekes.suaugusiems.lt/naujienos/knyga-kaip-prailginti-seksa?id=3691\"] > img"}],[1171569000,{"a":".ads"}],[1164023204,{"a":".wrapper-sticky"}],[1162866293,{"a":"div:last-child > P[align=\"undefined\"]"}],[743013784,{"a":".banner"}],[926637944,{"a":".col-sm-4.sidebar-column"}],[221609776,{"a":"img[alt=\"veltinis.lt - rankdarbiai iš vilnos, vėlimas\"]"}],[370166226,{"a":"[alt=\"Klipas Donorystė\"]"}],[1756317236,{"a":".textwidget > a[href^=\"http://\"] > img"}],[1829910906,{"a":"#text-5.widget.widget_text"}]]);

const hostnamesMap = new Map([["161.97.106.129",67533346],["torrent.ai",1569891405],["torrent.lt",1569891405],["orai.biz",168514744],["anglijaplius.com",830837014],["infodiena.com",[830837014,375925175]],["siandien.com",[830837014,1164023204]],["cagsolution.blogspot.com",1527368135],["enorca.blogspot.com",1667162010],["knygoholike.blogspot.com",996167170],["rinkoje.blogspot.com",925365996],["zhalia-pieva.blogspot.com",1713235379],["dumblas.com",558303628],["bigbenas.lt",375925175],["kuliesius.jimdo.com",928109983],["lzskelbimai.com",1216583038],["norbefilms.com",1471643074],["pirmas-kartas.com",905403889],["pokernews.com",1171569000],["15min.lt",1171569000],["sorimpeksas.com",1162866293],["tikrojilietuva.com",[743013784,926637944]],["1588.lt",743013784],["m.autogidas.lt",743013784],["basketnews.lt",743013784],["cs-servers.lt",743013784],["delfi.lt",743013784],["ekopirk.lt",743013784],["kcci.lt",743013784],["pasikeisk.lt",743013784],["priekavos.lt",743013784],["racas.lt",743013784],["rinkaplius.lt",743013784],["sodobaldai.lt",743013784],["strazdaneles.lt",743013784],["zaislaivaikams.lt",743013784],["lianosgalerija.webs.com",221609776],["donoryste.eu",370166226],["gyvenimas.eu",1756317236],["pasidarykpats.eu",1829910906],["pagamintarankomis.lt",1829910906]]);

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
