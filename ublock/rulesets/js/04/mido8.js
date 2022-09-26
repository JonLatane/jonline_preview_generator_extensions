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

const argsMap = new Map([[34544952,{"a":"#bioskop-kiri,\nbioskop-kanan"}],[1181496088,{"a":".hilang2"}],[1300413133,{"a":"#modal"}],[265943430,{"a":"#myModal,\n.modal-content"}],[2036733090,{"a":"iframe[style*=\"z-index: 2147483647\"]"}],[579980257,{"a":"#middle-banner"}],[1282725450,{"a":".td-banner-wrap-full"}],[1739310049,{"a":".current.ujimodal.ujipopup"}],[1607675839,{"a":"#div-Inside-MediumRectangle"}],[2144978602,{"a":".ad-photo,\n.cls-outstream,\n.commSkin__fluid--left.commSkin__fluid,\n.commSkin__fluid--right.commSkin__fluid,\n.mb3.gpt-ad-head-wrapper.widget"}],[1266010634,{"a":"#advertisement-2"}],[1114059626,{"a":".banner-fix-bottom,\n.banner320x480,\n.bannerhead,\n.bg-black.bannerhead,\n.closebanner1,\n.closebanner2"}],[702702800,{"a":".ayu-headads"}],[147357968,{"a":"#energysaving"}],[743013784,{"a":".banner"}],[365282305,{"a":"img[width=\"720\"][height=\"90\"]"}],[1349450720,{"a":".middle-ad-cont"}],[1729509445,{"a":".anm__flying--ads-holder"}],[1240510187,{"a":"a[href^=\"http://anizan.slask.pl/go.php\"]"}],[1920447321,{"a":"a[href=\"http://162.144.35.114/\"]"}],[1795637963,{"a":"#billboard_banner,\na:nth-of-type(2),\ntd:nth-of-type(3)"}],[216887086,{"a":"#floating_banner_bottoms"}],[1776313145,{"a":"#floating_banner_tops"}],[332304660,{"a":"#wrap > center"}],[808075714,{"a":".headborder:nth-of-type(5)"}],[1459939537,{"a":".sidebarborder:nth-of-type(2)"}],[1210331914,{"a":"#floating_banner_top"}],[1657323982,{"a":".textwidget"}],[2010425349,{"a":".textwidget img"}],[134541820,{"a":".adsPushdown"}],[88177207,{"a":"#floating_banner_bottom2,\n#floating_banner_top img[width=\"728\"][height=\"90\"]"}],[894075861,{"a":"[href=\"http://www.cocobet.\"]"}],[2088529343,{"a":".wpa"}],[619924784,{"a":".ad"}],[945453963,{"a":"#fbanner"}]]);

const hostnamesMap = new Map([["bioskop168.co",34544952],["bioskop168.online",34544952],["bioskop168.pro",34544952],["bioskop21.co",1181496088],["fastdrama.co",[1300413133,265943430]],["hkfree.co",1300413133],["komikstation.co",2036733090],["komikcast.com",2036733090],["bacamanga.id",2036733090],["kiryuu.id",2036733090],["movies21.co",579980257],["lk21tv.com",579980257],["dunia21.cx",579980257],["ganool.watch",579980257],["nontondramaonline.co",1282725450],["nontondramaonline.net",1282725450],["nontonfilm25.co",1739310049],["didrakorindo.com",1739310049],["pintubioskop.com",1739310049],["sukanonton.online",1739310049],["indoxxi.pictures",1739310049],["www.parapuan.co",[1607675839,2144978602]],["www.sonora.id",1607675839],["streamingbokeps.co",1266010634],["tempo.co",1114059626],["22cinema.com",702702800],["90animax.com",147357968],["animebatchs.com",[743013784,365282305]],["goblintvfree.com",743013784],["nanime.in",743013784],["juragan-anime.net",743013784],["astroawani.com",1349450720],["autonetmagz.com",1729509445],["bagas31.com",1240510187],["bioskop19.com",1920447321],["bioskop78.com",[1795637963,216887086,1776313145,332304660]],["movie76.net",[216887086,332304660,1210331914]],["nonton33.com",1776313145],["bioskop99.me",1776313145],["bioskop99.mobi",1776313145],["nonton33.tv",1776313145],["bioskopgalaxy21.com",[332304660,1210331914,1657323982]],["juragantomatx.com",[332304660,1210331914]],["juraganmovie.net",[332304660,1210331914]],["bioskop90.com",[808075714,1459939537]],["sejutafilm.com",1459939537],["nontonganool.net",1459939537],["bioskopstar88.com",1210331914],["cinemaqq.com",1210331914],["nontonlk21.live",1210331914],["bioskop55.me",1210331914],["tvkabel.net",1657323982],["indostreamings.xyz",1657323982],["semi168.xyz",1657323982],["bioskoptigalima.com",2010425349],["icinema3satu.net",2010425349],["bisnis.com",134541820],["blogspot.com",88177207],["kazefuri.blogspot.com",894075861],["cdramabase.com",2088529343],["clip.cewecewe.com",619924784],["cinema-indo.com",945453963],["layarkaca21.com",945453963],["cinemaindo.web.id",945453963],["filmbagus21.web.id",945453963],["layarkaca21.web.id",945453963],["nontonmovie.web.id",945453963],["filmbagus21.info",945453963],["ganool.li",945453963],["layarkaca21.net",945453963],["nonton21.net",945453963],["lk21.org",945453963],["layarkaca21.tv",945453963],["lk21.tv",945453963]]);

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
