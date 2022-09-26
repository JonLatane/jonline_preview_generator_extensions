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

// vie-1

const argsMap = new Map([[1545463393,{"a":".banner-top-home"}],[2146265956,{"a":"#banner_top,\n#supper_masthead,\n.section_ads_300x250"}],[464905048,{"a":".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]"}],[1867450373,{"a":"#adsModal"}],[808004013,{"a":".banner-sidebar"}],[1003888714,{"a":"#sticker"}],[595576662,{"a":"#ads-1xbet-catfish,\n.info-footer:nth-child(4)"}],[1975353836,{"a":".ads_sticky_top"}],[1487096056,{"a":".activity_dialog"}],[2077518052,{"a":".single-box,\n[href^=\"//dooloust.net/\"]"}],[1174454671,{"a":".banner_top"}],[954635920,{"a":"a[href^=\"https://c.lazada.vn\"]"}],[1196419148,{"a":"#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"],\nlixi88-ads-left,\nmb_catfish_1xbet,\nmobile-catfix,\npreload-11bet,\nsobet-ads-right"}],[1596587907,{"a":".mobile-catfix"}],[1828508266,{"a":".pre-lb"}],[1103408563,{"a":"#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right"}],[165234648,{"a":"#chilladv,\n#goadv,\n#pmadv"}],[1202686612,{"a":".ins-content,\n.ins-overlay"}],[756769817,{"a":".ad-script,\n.elementor-widget-container>.widget_custom_html"}],[1395023373,{"a":"[href^=\"https://gotrackecom.info\"]"}],[2030302773,{"a":".adstophome-right,\n.advertPC,\n.has-banner,\n.has-banner-desktop,\n.has-banner-fixed"}],[1943227961,{"a":".ads_popup"}],[837092636,{"a":".fun88_home,\n.list_banner"}],[182575125,{"a":".banner_center,\n.custom-model-main"}],[1345673497,{"a":"body > .float-ckgiua,\nsection.container.video:nth-of-type(1)"}],[641058499,{"a":"#_AM_POPUP_FRAME"}],[993979128,{"a":"body>div[style^=\"position:fixed\"]"}],[881366640,{"a":"#HTML3,\n.is-ad"}],[648695427,{"a":".fixed-bottom"}],[1398015563,{"a":"#sticky-footer"}],[1093662318,{"a":".show.fade.modal"}],[1837120783,{"a":".show.fade.modal-backdrop"}],[874464265,{"a":"div:nth-of-type(8)"}],[1751056908,{"a":".elementor-widget-image"}],[1500106045,{"a":".box-rating"}]]);

const hostnamesMap = new Map([["ione.net",[1545463393,2146265956]],["vnexpress.net",2146265956],["ketqua2.net",464905048],["ketqua247.net",1867450373],["kienviet.net",808004013],["laptrinhvb.net",1003888714],["linkneverdie.net",595576662],["medoctruyentranh.net",1975353836],["m.medoctruyentranh.net",1487096056],["mitub.net",2077518052],["mythethao.net",1174454671],["o-study.net",954635920],["ophimhd.net",[1196419148,1596587907]],["phimgif.tv",[1196419148,1596587907]],["phimraphot.net",1596587907],["javhiv.xyz",1596587907],["phechill.net",1828508266],["phimdinhcao.net",1103408563],["phimmoichills.net",165234648],["phimvang.net",1202686612],["qthang.net",756769817],["sachmoi.net",1395023373],["saoteen.net",2030302773],["saytruyen.net",1943227961],["sbongdatv.net",837092636],["sexanime.net",182575125],["sieukhungzz.net",1345673497],["ssplay.net",641058499],["streamsb.net",993979128],["teenvietnam.net",881366640],["thichxemphim.net",648695427],["truyensac.net",1398015563],["vebo1.net",[1093662318,1837120783]],["vebotv.team",1093662318],["vebo2.tv",[1093662318,1837120783]],["viesub.net",874464265],["vietmoz.net",1751056908],["vkoolzz.net",1500106045]]);

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
