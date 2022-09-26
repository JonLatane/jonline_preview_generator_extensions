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

const argsMap = new Map([[15992661,{"a":"#promoContainer"}],[1179058435,{"a":"#floating_banner_bottom"}],[1080374363,{"a":"#ouibounce-modal"}],[297854083,{"a":".jwseed"}],[868713130,{"a":".banner-left,\n.banner-right"}],[1648455056,{"a":"[href^=\"http://bit.ly/\"]"}],[2005181925,{"a":"#kayan_reklam_sag,\n#kayan_reklam_sol"}],[673893695,{"a":"#teaser3"}],[129889815,{"a":".contentlist"}],[149221232,{"a":"[href^=\"https://manjur.id/search.php\"]"}],[471602327,{"a":".td-header-rec-wrap"}],[509054675,{"a":".sg-popup-content,\nimg[width=\"300\"][height=\"300\"]"}],[1848857782,{"a":"img[width=\"300\"][height=\"250\"]"}],[1355312318,{"a":"#ads"}],[629623185,{"a":"div[class^=\"adsgen\"],\ndiv[class^=\"mobileads\"]"}],[1246378073,{"a":"#netkevin-overlay"}],[1160622097,{"a":"#popup_content"}],[1177451002,{"a":"a[href=\"http://www.filmxy.cc/download/\"],\na[href=\"http://www.filmxy.cc/watch/\"]"}],[1165216416,{"a":"#tengah > span"}],[1092681852,{"a":"tbody"}],[1549653568,{"a":"#floating_banner_left,\n#floating_banner_right"}],[1397141878,{"a":".textwidget > p"}],[1171043485,{"a":"#wrap > .headborder > .headcontent > .textwidget"}],[2032417437,{"a":"#col,\n#tengah,\n#tengahaa,\ndiv.content-kuss"}],[2033891248,{"a":".klikdisini"}],[213830876,{"a":"#fadeinbox"}],[679442196,{"a":"#filmoncereklam"}],[419691366,{"a":"a[href^=\"https://bit.ly/\"]"}],[1044172052,{"a":".home.border"}],[321530901,{"a":"#banner-tengah"}],[1408054765,{"a":"[href$=\"/sukamovieclub\"]"}],[415140938,{"a":"[href^=\"http://152.44.32.81\"]"}],[1622778286,{"a":"#btm_banner"}],[324929846,{"a":".iklansamping,\n.klnrec,\n.sidebar_right,\na[rel=\"nofollow\"] > img[src*=\"bp.blogspot.com\"],\na[rel=\"noopener\"] > img[src*=\"bp.blogspot.com\"]"}],[1323860521,{"a":"#ptbanner"}]]);

const hostnamesMap = new Map([["185.231.223.76",15992661],["gomunime.biz",15992661],["173.199.189.86",1179058435],["bioskop55.club",[1179058435,1549653568,1171043485]],["bioskop90.com",[1179058435,1549653568]],["bioskopgalaxy21.com",[1179058435,673893695]],["bioskoptigalima.com",1179058435],["blogspot.com",1179058435],["juragantomatx.com",1179058435],["filmbioskop.my.id",1179058435],["bioskop55.me",[1179058435,1549653568]],["154.12.229.9",1080374363],["drakorindo.best",[1080374363,1648455056]],["giladrakor.com",1080374363],["gatsunime.org",1080374363],["indosemi45.org",1080374363],["manhwaid.org",1080374363],["layarkeren.site",1080374363],["indoxx1.art",297854083],["indoxxi.bz",297854083],["dewabioskop21.asia",868713130],["dewabioskop21.org",868713130],["bioskopkerenin.com",1648455056],["bioskop201.biz",[2005181925,673893695,129889815]],["b201.info",2005181925],["bioskop21.co",673893695],["downloadfilmbaru.com",673893695],["layarbiru21.com",673893695],["22cinema.download",673893695],["nontonmovie.web.id",673893695],["filmbaru.in",673893695],["kikil.net",673893695],["komiku.net",673893695],["movie76.net",673893695],["ganool.nl",673893695],["ganool.ph",673893695],["cinemaindo.stream",673893695],["cinemaindo.tv",673893695],["animexin.xyz",673893695],["kabarviral.blog",149221232],["lewat.club",[149221232,2033891248]],["mediapermata.com.bn",471602327],["terkini.id",471602327],["oploverz.bz",[509054675,1848857782]],["lihat.co.id",1848857782],["perawabokep.cam",1355312318],["perawanbokep.cam",1355312318],["budiarto.id",1355312318],["cinemaindo.web.id",1355312318],["filmapik.tv",1355312318],["nekopoi.care",629623185],["nekopoi.cash",629623185],["nekopoi.lol",629623185],["cafecinema.cc",[1246378073,1160622097]],["sidrama.com",[1246378073,321530901]],["dramamu.net",[1246378073,1160622097]],["lk21.world",1246378073],["lk21.io",1160622097],["filmxy.cc",1177451002],["lk21.cc",[1165216416,1092681852]],["dunia21.top",[1165216416,419691366]],["bioskop007.club",[1549653568,1397141878]],["bioskop1080.com",1549653568],["cinema007.com",1549653568],["cinemastar21.com",[1549653568,679442196]],["nontononline99.com",1549653568],["bioskop90.me",1549653568],["bioskop212.net",[1549653568,679442196]],["indoxx1.club",2032417437],["apk.miuiku.com",2033891248],["nf21.club",213830876],["nontonfilm21.club",679442196],["sinema21.id",679442196],["ns21.club",419691366],["animeindo.co",419691366],["idxxi.co",419691366],["lk21indo.co",419691366],["lk21xxi.co",419691366],["bioskopbos.com",419691366],["dramaind.com",419691366],["filmbioskop21.com",419691366],["lk21n.com",419691366],["nontondramas.com",419691366],["nontonsub.com",419691366],["otakufile.com",419691366],["anoboy.digital",419691366],["bioskopkeren.fun",419691366],["lk21c.fun",419691366],["subindo.id",419691366],["animebatch.web.id",419691366],["eka.web.id",419691366],["kazefuri.web.id",419691366],["mangaku.in",419691366],["lk-21.me",419691366],["mangashiro.net",419691366],["neonime.net",419691366],["nontongratis88.net",419691366],["anoboy.org",419691366],["nontonbioskop21.org",419691366],["bioskop168.pro",419691366],["cinemaindo.pro",419691366],["layarindo21.pro",419691366],["indoxxi.top",419691366],["animeku.tv",419691366],["semi168.club",1044172052],["bioskop168.co",1044172052],["sukamovie.club",[321530901,1408054765]],["indoxx1.co",321530901],["idxxx1.com",321530901],["akurat.co",415140938],["awsubs.co",[1622778286,324929846]],["benfile.com",1622778286],["blifnews.com",1622778286],["kabar2.com",1622778286],["mangacanblog.com",1622778286],["semuaberita.com",1622778286],["mangaku.web.id",1622778286],["nusareborn.in",1622778286],["mangakita.net",1622778286],["film21terbaru.org",1622778286],["ayononton.co",1323860521],["layarkaca21.com",1323860521],["lk21tv.com",1323860521],["terbit21.cool",1323860521],["dunia21.cx",1323860521],["layarkaca21.web.id",1323860521]]);

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
