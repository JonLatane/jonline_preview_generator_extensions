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

const argsMap = new Map([[1160508858,{"a":".ads-menu"}],[1573728089,{"a":"a[rel=\"nofollow\"]"}],[642583918,{"a":".truct-catfish,\n.truct-widget"}],[222953780,{"a":"#bsadsheadline,\n#bsadsheadline1"}],[1924816298,{"a":"#topbanner,\n.footer-info"}],[591851498,{"a":".tt8quangcao"}],[125658247,{"a":"div.mrb10"}],[1667049891,{"a":".adpia_banner"}],[1979622586,{"a":"#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2"}],[496533757,{"a":"#hide_float_right"}],[1790732247,{"a":"a[rel*=\"nofollow\"]"}],[488215357,{"a":".adsmobile,\n.textwidget>p"}],[1743157750,{"a":"a[target=\"_blank\"][rel=\"dofollow\"]"}],[1668416526,{"a":".item-qc"}],[1226072937,{"a":".Header_topBanner__1xD-2"}],[1194240022,{"a":"#block_widget-3,\n#block_widget-4,\n.header-block,\n.large-12.small-12"}],[1216153478,{"a":"#BigBanner,\n.ads_position"}],[1045849128,{"a":".ads_txt"}],[1915449279,{"a":".row>div>center"}],[1195183185,{"a":"div[class^=\"adbox\"]"}],[462583931,{"a":".button-action-float-banner"}],[1564189220,{"a":".mb-20"}],[1877653120,{"a":".wtt-ads"}],[1261711867,{"a":".datcuoc.button"}],[1284473539,{"a":".box-banner"}],[1299448571,{"a":".banner_pc"}],[979594517,{"a":".adv-side-bar,\n.banner-adv-wrapper,\n.item-qc1"}],[39729195,{"a":".balloon-block,\n.cash-fish-pc"}],[708448666,{"a":"a[rel=\"nofollow noopener noreferrer sponsored\"]"}],[1221535185,{"a":".bet-list,\n.top-bet-item,\n.top-bet-list,\n[href^=\"/ads/\"]"}],[1182162455,{"a":".mobile-banner,\n.pc-banner"}],[2032827058,{"a":"#catfish_content"}],[1964956476,{"a":".clipxx"}],[973765949,{"a":"#clck_ntv"}],[1544862095,{"a":".bnt_what_live"}]]);

const hostnamesMap = new Map([["tructiepdabong1.com",1160508858],["xoivo.info",[1160508858,1544862095]],["stream.tructiepnba.com",[1573728089,642583918]],["truyentranhmau.com",1573728089],["ketqua2.net",1573728089],["subnhanhz.net",1573728089],["nghean24h.vn",1573728089],["truongcongthang.com",222953780],["truyensieuhay.com",1924816298],["truyentranh86.com",591851498],["truyentranhaudio.com",125658247],["vcomic.net",125658247],["truyentranhaudio.online",125658247],["truyentranhtuan.com",[1667049891,1979622586]],["phimdinhcao.net",1667049891],["tenovi.net",1667049891],["tuoinung.com",496533757],["valvrareteam.com",1790732247],["vlxx.xyz",1790732247],["vaophimhay.com",488215357],["vatlypt.com",1743157750],["vesotantai.com",1668416526],["vietcetera.com",1226072937],["vietfacetvaust.com",1194240022],["vietgiaitri.com",1216153478],["vietjack.com",1045849128],["vietyo.com",1915449279],["vndoc.com",1195183185],["hoatieu.vn",1195183185],["webhoctienganh.com",462583931],["webtintuc.com",1564189220],["webtretho.com",1877653120],["xemlivenhanh.com",[1261711867,1284473539,1299448571]],["cakhia-tv.live",1261711867],["qdnd.vn",1284473539],["xosodaiphat.com",979594517],["yeuphimmoik.com",39729195],["appvuive.fun",708448666],["thethao12h.me",708448666],["banthang.in",1221535185],["doctruyen3q.info",1182162455],["phimbathu.info",2032827058],["m.phimsexsub.info",[1964956476,973765949]],["sexcotrang.net",973765949]]);

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
