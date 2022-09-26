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

const argsMap = new Map([[1316524776,{"a":"#fancybox_ajax,\n.advertisement_box1,\n.advertisement_box2,\n.footer_banner"}],[973382313,{"a":"#banner-atas,\n#banner-bawah"}],[1937612992,{"a":"#idb3"}],[281105818,{"a":"#div-Right-MediumRectangle-1"}],[1286636261,{"a":"#div-Top-Leaderboard"}],[1494063345,{"a":"#anchorads,\n#bannerku,\n#bannerkubawah,\n#boxright [style=\"width:300px; height:250px;\"],\n#div-Center-FullBanner-1,\n#div-Center-FullBanner-2,\n#div-Tribunnews-Home-Center-2-FullBanner,\n#skinads,\n.ads-placeholder,\n.ads-placeholder-inside,\n.belanja-picks,\n.content [style=\"width:160px; height:600px;\"],\n.ovh[style=\"width:468px;height:60px\"],\nimg[src*=\".pgi.tribunnews.com/\"]"}],[450269398,{"a":"#boxleft > .mb20"}],[142695529,{"a":"#div-Right-MediumRectangle-3"}],[14874882,{"a":"#an-Modal,\n.reveal-modal-bg"}],[980001241,{"a":".banneritem"}],[501978872,{"a":".code-block-3.code-block"}],[1161791278,{"a":".feedme-header-desktop.adsbygoogle"}],[1257926095,{"a":"#Ad300B,\n#Ad728"}],[2008811652,{"a":"#aside img[width=\"300\"][height=\"250\"],\n#lAds,\n#rAds,\n#simplemodal-container,\n#simplemodal-overlay"}],[275253754,{"a":"#judi2,\n.download,\na[href^=\"https://144.126.241.203/\"]"}],[1460038792,{"a":"#popup_bawah,\n#popup_box"}],[1246545696,{"a":"[href=\"http://click2go.me/aksesklik4a\"]"}],[488310020,{"a":"#teaser5"}],[472167500,{"a":"[class^=\"sgpb-\"]"}],[111478320,{"a":".headbanner"}],[408642666,{"a":"#previewBox3"}],[1870331710,{"a":"#flobwh,\na[href^=\"https://rebrand.ly/\"]"}],[1975142196,{"a":"#floatbot,\n.ads_2l,\n.appup"}],[1734942595,{"a":".nyaa300,\n.nyaa728"}],[1035928933,{"a":".adsbygoogle"}],[423072038,{"a":".sidebar > .klan300"}],[1978994743,{"a":".bottom-20.box-widget.right-300.banner300x250.banner"}],[1007245277,{"a":".bausastra-ads"}],[1551808019,{"a":".inf_infusionsoft_popup"}],[2143173821,{"a":"div.ui_adblock"}],[626792177,{"a":"#TopBannerBg"}],[269934180,{"a":".bnr"}],[1841318981,{"a":".banner-sc,\n.banner-sc2,\n.col-banner,\n.masonry-brick.drm-banner-x.drm-artikel:nth-of-type(3)"}],[1739877742,{"a":".header__kasad,\n.kasad-h"}],[86388085,{"a":"#adsoutsream,\n.heightads250"}]]);

const hostnamesMap = new Map([["teknoup.com",1316524776],["tempointeraktif.com",973382313],["topfilmz.com",1937612992],["blog.tribunjualbeli.com",[281105818,1286636261]],["tribunnews.com",[281105818,1494063345]],["jogja.tribunnews.com",450269398],["wartakota.tribunnews.com",450269398],["makassar.tribunnews.com",142695529],["unixmen.com",14874882],["waralabakan.com",980001241],["windowsreport.com",501978872],["winpoin.com",1161791278],["wowkeren.com",1257926095],["zonabola.com",2008811652],["anoboy.digital",[275253754,1460038792,1246545696]],["anoboy.media",[1460038792,1246545696]],["anoboy.watch",1460038792],["22cinema.download",488310020],["oploverz.fan",472167500],["bokepfull.fun",111478320],["sukamovie.mobi",111478320],["videocrot.org",111478320],["dunia21s.fun",408642666],["lk21.li",408642666],["fb21.tv",408642666],["nonton21.tv",408642666],["lk21c.fun",1870331710],["lk21.host",1975142196],["animeindo.id",1734942595],["apkmod.id",1035928933],["radarlombok.co.id",1035928933],["novelgo.id",1035928933],["paraedu.id",1035928933],["hightech.web.id",1035928933],["nama.web.id",1035928933],["batch.id",423072038],["beritagar.id",1978994743],["budiarto.id",1007245277],["alona.co.id",1551808019],["cerpen.co.id",2143173821],["chip.co.id",626792177],["cosmogirl.co.id",269934180],["anime17.net",269934180],["dream.co.id",1841318981],["kaskus.co.id",1739877742],["kontan.co.id",86388085]]);

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
