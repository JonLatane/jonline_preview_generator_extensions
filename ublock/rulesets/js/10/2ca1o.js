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

// nor-0

const argsMap = new Map([[1700048133,{"a":".extra-adlabel,\n.widget_media_image,\nfigure.wp-caption"}],[874512076,{"a":".td-loader-gif"}],[964459866,{"a":"#text-5"}],[854743598,{"a":".navigation-banner"}],[1321158874,{"a":".tracking-article-offers,\ndiv.netboard"}],[1419521015,{"a":".appnexus"}],[525153851,{"a":".annonse_forklaring,\n.responsiv_reklame"}],[2060128007,{"a":"#adPosContainer,\n.mpu,\n.topad.row"}],[1461600230,{"a":".parallax-container"}],[60700525,{"a":"article[id^=\"undefined\"]"}],[955916256,{"a":"#afshcontainer,\n.ads__unit--banner,\n.banners,\ndiv.ads__unit[aria-hidden]"}],[1355312318,{"a":"#ads"}],[571280248,{"a":".teaser_overlay,\ndiv[id^=\"undefined\"] + .hide_on_print"}],[2072172909,{"a":"#header_right_cell"}],[398838748,{"a":"#viewport > #outer"}],[1512572381,{"a":".top-skinny-banner-container"}],[175695008,{"a":".center[style*=\";font-weight:700;\"]"}],[1626396272,{"a":".right-column-wrapper"}],[1045834996,{"a":"#ads_fullwidth_container,\n#wallpaperCenterAd"}],[1013079536,{"a":".inlineAdBlock"}],[1272232243,{"a":".annonse-plass"}],[1382779417,{"a":".brandboard-container"}],[1225943362,{"a":".ad-continues-txt,\n.single-post > .wrapper-2"}],[2113380661,{"a":".aaa-980x150,\n.aaa-placeholder,\n.article__articleboard,\n.d-none.d-lg-flex,\n.feed--commercial,\n.mkdsk-placeholder,\n.netboard-wrap,\n.posta-placeholder,\n.pst-placeholder,\n.site__sticky__ads + div[class*=\" \"],\nbody > div.d-none.mb-4,\nimg[src^=\"blob:\"]"}],[1952408339,{"a":".ad_wrapper_content"}],[1389525201,{"a":".topBarInLogoArea"}],[951134561,{"a":"#os_ad_beam,\n#smallboard,\n.os_big_board_box"}],[743715365,{"a":"#adSign,\n.adSign"}],[1929837121,{"a":".PartnerLinks,\n.ResultListBanner"}],[1124342574,{"a":".banners-row"}],[1001449882,{"a":".faded-content:before"}],[2032930831,{"a":".annonsestyle"}],[2035758932,{"a":".theiaStickySidebar >  .widget_text"}],[1751474718,{"a":".ad-container-na-ne,\n.ad-container-wrap"}],[1832701689,{"a":".td-footer-ad"}],[179205453,{"a":".col-md-12"}],[532127831,{"a":".sidebar-inner aside:last-of-type"}],[1475459829,{"a":".onlybigplaktat,\n.prodlist > .row > .small-12"}],[515087305,{"a":".air-block"}],[1631145125,{"a":".master.x10"}]]);

const hostnamesMap = new Map([["extraavisen.no",1700048133],["f7.no",874512076],["f7city.no",964459866],["f7hvordanlage.no",854743598],["familieklubben.no",[1321158874,1419521015]],["vg.no",1419521015],["filmfront.no",525153851],["filmweb.no",2060128007],["finansavisen.no",[1461600230,60700525]],["finn.no",[60700525,955916256]],["h-a.no",[60700525,1124342574,1001449882]],["kapital.no",60700525],["finndel.no",1355312318],["fiskeribladet.no",571280248],["flyprat.no",2072172909],["folkebladet.no",398838748],["foodora.no",1512572381],["framtiden.no",175695008],["freak.no",1626396272],["friflyt.no",[1045834996,1013079536]],["terrengsykkel.no",1013079536],["froya.no",1272232243],["fvn.no",1382779417],["gaffa.no",1225943362],["gamer.no",2113380661],["gaysir.no",1952408339],["glr.no",1389525201],["golferen.no",951134561],["gratiskryssord.no",743715365],["gulesider.no",1929837121],["lokal-avisa.no",1001449882],["ringsakern.no",1001449882],["stangeavisa.no",1001449882],["hammerfestingen.no",2032930831],["hangar.no",2035758932],["hblad.no",1751474718],["helsesjefen.no",1832701689],["popidol.no",1832701689],["historienet.no",179205453],["hushagehobby.no",532127831],["hytteavisen.no",1475459829],["ice.no",515087305],["innherred.no",1631145125]]);

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
