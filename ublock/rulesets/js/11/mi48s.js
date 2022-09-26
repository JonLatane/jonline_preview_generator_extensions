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

const argsMap = new Map([[1763631056,{"a":"[href^=\"//wizliebeg.com/\"]"}],[55357812,{"a":".box_item_berlangganan"}],[995593252,{"a":".sitemaji_banner"}],[2015065909,{"a":"#nbpopx-wrapper,\n.jx-ads.nobar-ads"}],[414307305,{"a":"#left_ads_float_phonedevelop,\n#under-video-ads,\n.mask-ads"}],[602766596,{"a":"#wrap > table"}],[1335722436,{"a":"#sidebar-right,\ncenter > table"}],[1829158849,{"a":".bannermovie,\n.banners"}],[1692327606,{"a":".content-kuss-ikln"}],[940158887,{"a":"#fatas"}],[772329896,{"a":"#fbawah,\n#previewBox2"}],[939729830,{"a":"#previewBox4"}],[1525677976,{"a":"#floatbawah"}],[203005383,{"a":"[href=\"https://www.ocanoke.com/\"]"}],[1853038553,{"a":".center-ban,\n.detads,\n.rc-ad-300x250,\n.skyscrapper,\n.sponsored-belt468x60"}],[1557243362,{"a":".center-paralax,\n.flying_ads"}],[1284374706,{"a":".banner-zone"}],[1650797624,{"a":".r-ads"}],[851250942,{"a":".alignnone.size-large.wp-image-458"}],[2012459279,{"a":"#cont-megabillboard"}],[1858122332,{"a":".sticky-ads,\n.sticky-ads-content"}],[1022719736,{"a":".float-ck"}],[938618725,{"a":"#float-left,\n#float-right"}],[162738428,{"a":".semprotnenenmontok_2"}],[840213087,{"a":".c-message > div:nth-of-type(1)"}],[72962624,{"a":"#me-div-gpt-ad-parallax,\n.clear.size-wide-custom.dummy"}],[1958310006,{"a":".ujipopup"}],[685812753,{"a":"div[style=\"height:260px;\"]"}],[291709028,{"a":".margin-right-40.left.pullquotes,\ndiv.ad-before"}],[1357515806,{"a":"#forum_ads_8,\n#sodasusu_ads_side_left,\n#sodasusu_ads_side_right,\n#teaser4"}],[588225314,{"a":".adds-top.add,\n.banner-top-m.widget-ads-top,\n.placeholder_expose,\n.placeholder_leaderboard,\n.placeholder_medium,\n.placeholder_r1,\n.placeholder_r2,\n.placeholder_r3,\n.placeholder_read_body,\ndiv.placeholder_pariwara"}],[1128823937,{"a":".\\33 .Premium.Sundul,\n.\\34 .Premium.Sundul"}],[252814459,{"a":"#right_ads_float_phonedevelop,\n.overlay"}],[2124861083,{"a":"div[style=\"position:absolute; top:20px; left:45px; width:70px; background:#000; text-align:center;\"]"}],[627774681,{"a":"#fancybox-wrap"}]]);

const hostnamesMap = new Map([["nekonime.com",1763631056],["neonime.com",55357812],["neonime.vip",55357812],["ninemanga.com",995593252],["nobartv.com",2015065909],["nontonbokeps.com",414307305],["nontonfilm77.com",602766596],["nontonfilm88.com",1335722436],["nontonme.com",1829158849],["nontonplus.com",1692327606],["nontonserial.com",[940158887,772329896,939729830]],["fb21.tv",[772329896,939729830]],["nonton21.tv",[772329896,939729830]],["dunia21s.fun",939729830],["lk21.li",939729830],["nontonsini.com",1525677976],["dl.ocanoke.com",203005383],["okezone.com",1853038553],["news.okezone.com",1557243362],["oktavita.com",1284374706],["otomania.com",1650797624],["palingseru.com",851250942],["pikiran-rakyat.com",2012459279],["radenku.com",1858122332],["readwebtoons.com",1022719736],["remo-xp.com",938618725],["semprot.com",162738428],["siherp.com",840213087],["tetew.info",840213087],["greget.space",840213087],["sindonews.com",72962624],["sinemakaca.com",1958310006],["bioskopxxi.net",1958310006],["situshp.com",685812753],["smartphoneku.com",291709028],["sodasusu.com",1357515806],["suara.com",588225314],["sundul.com",1128823937],["susterbokep.com",252814459],["tabloidbintang.com",2124861083],["teknoup.com",627774681],["idfl.me",627774681],["r-l.me",627774681]]);

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
