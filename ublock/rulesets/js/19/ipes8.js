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

const argsMap = new Map([[1694918782,{"a":"#ilang1"}],[298046060,{"a":".adv"}],[1798311010,{"a":".bannersinglefot"}],[1187964846,{"a":"#googlebox"}],[331726129,{"a":"#floatbtmleft,\na[href^=\"//angel4d.com/\"],\na[href^=\"//telolet4d.com/\"]"}],[2100747365,{"a":".iklanSUKI"}],[1189305217,{"a":".lenyap"}],[705526975,{"a":".ad-float-image"}],[322959511,{"a":".rsABlock"}],[1225197569,{"a":".col-xs-12.col-md-6.col-lg-6"}],[1413544896,{"a":"#previewBox"}],[171551150,{"a":".wpb-outer-wrap"}],[865957403,{"a":".bot.ads"}],[2079061902,{"a":"#float-pop"}],[662742134,{"a":"#overlay-pop"}],[1662101091,{"a":"#fancybox-overlay"}],[1682959197,{"a":"[href=\"http://bit.ly/adsvbola\"],\n[id^=\"yui-gen\"].postcontainer"}],[1336328265,{"a":"a.bnner"}],[2088878693,{"a":".top-bnner.lazy"}],[55244176,{"a":"[href=\"https://144.126.241.203/invite/c6c83up\"],\n[href=\"https://bit.ly/anoboySG88\"],\n[href=\"https://kliksaya.info/mcdanoboy\"]"}],[1435921666,{"a":".adbtm,\n.bh-ad,\n.block-bh-googledfp,\n.center-block.img-responsive"}],[1350132850,{"a":".cari-ads"}],[1969518273,{"a":"#Taboola_widget,\n#rec_ad4,\n.tonal__standfirst"}],[1813005006,{"a":".adplaceholder-mrec"}],[1966832445,{"a":"#sadl,\n#sadr"}],[1098193137,{"a":".ktz_banner"}],[244125083,{"a":"#sct_banner_top,\n#videoad1"}],[1303249581,{"a":".ads-header-5"}],[950913351,{"a":"#bmpop_adpB"}],[1193150962,{"a":"img.aligncenter"}],[79173985,{"a":".cfmonitor"}],[1584382636,{"a":"#banner-popup-desktop"}],[1868968319,{"a":".idmupi-topbanner"}],[271330664,{"a":"#banner-right"}],[31547417,{"a":".clearfix.act2-970x90:nth-of-type(1),\n.clearfix.act2-970x90:nth-of-type(3)"}]]);

const hostnamesMap = new Map([["lk21.web.id",1694918782],["mangaku.web.id",298046060],["mangaku.in",298046060],["mangaku.site",298046060],["nontonmovie.web.id",1798311010],["videocrot.org",1798311010],["resep.web.id",1187964846],["sinemaindo.web.id",331726129],["suki48.web.id",2100747365],["b201.info",1189305217],["senimovie.info",[705526975,322959511]],["senimovies.net",705526975],["ganool.is",1225197569],["ganool.ph",1225197569],["ganool.se",1225197569],["ganool.st",1225197569],["lk21.li",1413544896],["nonton21.tv",1413544896],["nontonlk21.live",171551150],["bioskop99.me",865957403],["dunia21.me",[2079061902,662742134]],["dunia21.net",662742134],["dunia21.org",662742134],["dunia21.wtf",662742134],["idfl.me",[1662101091,1682959197]],["r-l.me",1662101091],["idtube.me",1336328265],["idxx1.top",1336328265],["xx1.me",2088878693],["anoboy.media",55244176],["bharian.com.my",1435921666],["mforum.cari.com.my",1350132850],["utusan.com.my",1969518273],["mediahiburan.my",1813005006],["youtube-mp3.my",1966832445],["anime17.net",1098193137],["animeindo.net",244125083],["awnime.net",1303249581],["bintangmawar.net",950913351],["cinema-indo.net",1193150962],["dramaqu.net",79173985],["duniaku.net",1584382636],["filmace21.net",1868968319],["filmbagus88.net",271330664],["filmku.net",31547417]]);

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
