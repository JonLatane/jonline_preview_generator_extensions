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

const argsMap = new Map([[1623354658,{"a":"#fixslowshow"}],[647060992,{"a":"#dablewidget_RoOGdzom,\n#div-Skycrapper-Stocksetup,\n.heightads600.pad-t.pad-r.pad-l.pad-10,\n.heightads90.ads-middle-list-news,\n.text-center.center.width-px-1100"}],[516723652,{"a":"#Kolom-random-300,\n#iklan-dalam-postingan-300,\n#overlay[style=\"display: block;\"],\nimg[style=\"border:0;display:block;\"]"}],[878011924,{"a":"#top-banner-parallax,\n.banner-parallax"}],[647016452,{"a":".adsense"}],[1857176204,{"a":".ads-160,\n.ads-160-600,\n.ads-300-video,\n.set-ads-468,\na[style=\"width: 100%; height: 100%; display: block; position: fixed; z-index: 1\"]"}],[1311361267,{"a":"#otp_ads,\n.portlet.sideskycrapper"}],[750530166,{"a":"#bottomframe-ad,\n#skinframe-ad-left"}],[691847909,{"a":".ad-inventory-wrapper"}],[1032348899,{"a":"a[href^=\"http://www.apktiga.com/p/start-download-reayus.html\"]"}],[997615625,{"a":"#detailSkinAdLeft,\n#detailSkinAdRight"}],[341988530,{"a":".ads-mr,\n.ads__skyscraper,\n.ads_sky"}],[1936138724,{"a":".mt20.top1,\ndiv.banner-r"}],[279649653,{"a":".ads_sticky_footer"}],[993675480,{"a":".ads-sticky-left,\n.ads-sticky-right,\n.bg-grey.text-center.p-0.mb-3.mt-3,\n.mb-4.bg-grey.text-center"}],[80121424,{"a":".ad-box-wrappr,\n.row > .show-desktop > div,\n.underlay-ad-text-box"}],[41902704,{"a":"#main-banner-middle,\n.legend_banner-container,\n.stickybanner"}],[2086277212,{"a":".idmuvi-afterplayer"}],[1654342027,{"a":".ftadss"}],[1931161026,{"a":".parallax_ads,\n.widebanner.banner,\ndiv.showcase.banner,\ndiv.skycrapper.banner"}],[1570106460,{"a":".banner-skin--left,\n.banner-skin--right,\n.banner__giant.banner,\n.banner__left.banner,\n.banner__right.banner,\n.banner__top.banner"}],[1843654150,{"a":".ads-popup__inner"}],[2082123738,{"a":".ads.single_post_content,\n.animated.ads"}],[460009067,{"a":".adbox"}],[1204773394,{"a":".skinner-left,\n.skinner-right"}],[2086153011,{"a":".box-ads-300x250"}],[1722784150,{"a":".text-align-center.box-ads-content"}],[1782070587,{"a":".in_up_ad-area"}],[777195772,{"a":".cads"}],[1142353668,{"a":"#ilang2"}],[2048686712,{"a":".modal"}],[1284473539,{"a":".box-banner"}],[1748469872,{"a":"#floating_ads_bottom_textcss2"}],[755332796,{"a":".wait"}],[2087836225,{"a":"[href=\"https://kdslots.com/\"],\n[href=\"javascript:showHideGB()\"],\n[href^=\"http://dwatngkas.\"],\n[href^=\"https://www.indovegas.\"],\na[href^=\"http://cocobet.\"],\na[href^=\"http://www.cocobet.\"],\ndiv.ads300"}]]);

const hostnamesMap = new Map([["pusatdata.kontan.co.id",1623354658],["stocksetup.kontan.co.id",647060992],["lihat.co.id",516723652],["orami.co.id",878011924],["pontianakpost.co.id",647016452],["republika.co.id",1857176204],["viva.co.id",1311361267],["log.viva.co.id",750530166],["wartaekonomi.co.id",691847909],["filmterbaru.id",1032348899],["ggwp.id",997615625],["grid.id",341988530],["nextren.grid.id",1936138724],["inews.id",279649653],["www.inibaru.id",993675480],["investor.id",80121424],["kabargames.id",41902704],["layarlebar21.id",2086277212],["manganime.id",1654342027],["medcom.id",1931161026],["www.sonora.id",1570106460],["tek.id",1843654150],["terasjakarta.id",2082123738],["terkini.id",460009067],["tirto.id",1204773394],["uzone.id",2086153011],["internetpositif.uzone.id",1722784150],["animeindo.web.id",1782070587],["animeindo.video",1782070587],["animekompi.web.id",777195772],["cinemaindo.web.id",[1142353668,2048686712]],["sinemaindo.web.id",1142353668],["filmbagus21.info",2048686712],["eka.web.id",1284473539],["ganool.web.id",1748469872],["hightech.web.id",755332796],["kazefuri.web.id",2087836225]]);

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
