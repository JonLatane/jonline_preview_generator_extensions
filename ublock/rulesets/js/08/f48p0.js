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

const argsMap = new Map([[494798021,{"a":"#floatbanner"}],[227919490,{"a":"#credential_picker_container,\n#crt-225c8f8a,\n#crt-4f9f1ad0,\n#crt-f6d317f5,\n.ads-latest-wrap,\n.ads-on-body,\n.adsMR1Lipsus1,\n.bannerAdB,\n.bannerCenter,\n.bannerCenter1SubRubrik,\n.bannerCenter2SubRubrik,\n.bannerCenterRubrik,\n.bannerR,\n.bannerR2,\n.bannerR2A,\n.bannerR3,\n.bannerR3A,\n.bannerTopOut,\n.boxBanner1,\n.boxBanner3,\n.boxBannerR1akt,\n.boxSkinAd,\n.clearfix.kcm__big.kcm,\n.clearfix.kcm__horizontal.kcm,\n.clearfix.kcm__rectangle.kcm,\n.clearfix.kcm__sticky.kcm,\n.clearfix.kcm__top.kcm,\n.clearfix.kcm__tower.kcm,\n.clearfix.kcm__track.kcm,\n.hAds,\n.js-giant-wp-top1.clearfix.kcm__big.kcm,\n.kcm,\n.kcm-track-sticky,\n.kcm__articleList,\n.kcm__stick--left,\n.kcm__stick--right,\n.kcm__superbig.kcm,\n.native-wrap,\n.ol_big_inner,\n.premium_div,\n.show.ol_promo,\n.video-box-wrap,\n[src^=\"https://adsimg.kompas.com\"]"}],[1962985227,{"a":"iframe[title=\"3rd party ad content\"]"}],[244228316,{"a":".bannerR1,\n.bannerTop1"}],[607835614,{"a":".w340.r-ads.right > ul > li"}],[1756105265,{"a":".banner620x80,\n.banner_right2"}],[507249728,{"a":".banner-center,\n.banner-mgid"}],[715482480,{"a":".banner-dable.banner,\n.banner-gennie.banner,\n.banner-mgid-read.banner,\n.banner-right-big.banner,\n.banner-right.banner,\n.clearfix.banner-horizontal.ads-horizontal,\n.mb20.mt20.banner-dable-read.banner,\n.sticky-right.banner-center.banner-sky.ads__skyscraper.ads"}],[1058233854,{"a":"#bannertheme_left,\n#bannertheme_right"}],[1592701234,{"a":".adssingle,\na[href=\"http://kshowid.com/advertising/\"]"}],[1750990365,{"a":"center"}],[1883484144,{"a":".banner_box"}],[1283070716,{"a":".banner_main,\n.leftcontent[style=\"padding:0px; margin:0px auto; height:250px; width:720px; border:0px; background:none; \"]"}],[1003819381,{"a":"#hbanner"}],[729054972,{"a":".img-banner"}],[640881711,{"a":"#idcomboard1.com-728x90,\n#idcomright1.com-300x250,\n#idcomright2.com-300x250,\n#idcomsensebox1.com-300x250,\n#idcomsky1.com-160x600,\n.ctnitem.ctncom"}],[100259466,{"a":"#lht2_lesson_after_vocab2_300x250_phone,\n#lht2_lesson_bottom_300x250_phone,\n#lht2_lesson_top_320x50_phone,\n#lht_base_bot_320x50_phone,\n#lht_lesson_right2_300x250_desktop,\n#lht_lesson_right_300x250_desktop"}],[159665233,{"a":".box-ads-right"}],[1981774996,{"a":"#float-banner"}],[1535652411,{"a":"#rotating"}],[1207428876,{"a":".ad_990_80"}],[247134028,{"a":".hero_adslot"}],[634156567,{"a":"#aa,\n#close,\n.mas_tamvan"}],[1871871100,{"a":".kln.mlb.blox"}],[1417221194,{"a":"#lbanner"}],[972688169,{"a":".kln"}],[957424619,{"a":".c-ads.ad"}],[1013509017,{"a":".banner-top,\n.bannercol,\n.bannerfloat,\n.bannerpos,\n.cell_banner_inside"}],[543693501,{"a":"#ad-genie-container,\n#div-paralax-container,\n.ads__boxr--big.ads__boxr"}],[121538405,{"a":".js-tower-sticky.clearfix.kcm__tower.kcm"}],[649681738,{"a":".nkt__stick--left,\n.nkt__stick--right"}],[1644865108,{"a":"#floatads1"}],[1147911079,{"a":".spnsr-top,\n.vip-info"}],[212602625,{"a":"[class^=\"undefined\"]"}],[1549118374,{"a":"#fab"}]]);

const hostnamesMap = new Map([["komikstation.com",494798021],["kompas.com",[227919490,1962985227]],["tribunnews.com",1962985227],["indonesiasatu.kompas.com",244228316],["otomotif.kompas.com",607835614],["tekno.kompas.com",1756105265],["kompasiana.com",507249728],["www.kompasiana.com",715482480],["kotakgame.com",1058233854],["kshowid.com",1592701234],["kuyhaa-me.com",1750990365],["gigapurbalingga.net",1750990365],["lapar.com",[1883484144,1283070716]],["loveindonesia.com",[1883484144,1207428876]],["layarkaca21.com",1003819381],["cinemaindo.web.id",1003819381],["layarkaca21.web.id",1003819381],["layarkaca21.net",1003819381],["lk21.org",1003819381],["ld2tv.com",729054972],["lensaindonesia.com",640881711],["www.lingohut.com",100259466],["liputan6.com",159665233],["lk21tv.com",[1981774996,1535652411]],["lk21.web.id",1981774996],["sinemaindo.web.id",1981774996],["lk21.pw",1981774996],["malaysiakini.com",247134028],["mangacanblog.com",634156567],["mangaceng.com",1871871100],["mangafap.com",1417221194],["manhwalist.com",972688169],["mareceh.com",972688169],["nontondramaseri.com",972688169],["anoboy.id",972688169],["kiryuu.id",972688169],["manhwaindo.id",972688169],["komikindo.me",972688169],["manhwaland.mom",972688169],["kazefuri.net",972688169],["mangakita.net",972688169],["mangashiro.net",972688169],["manhwaland.top",972688169],["manytoon.com",957424619],["manhwahentai.me",957424619],["www.webtoon.xyz",957424619],["modifikasi.com",1013509017],["motorplus-online.com",[543693501,121538405,649681738]],["www.sonora.id",121538405],["grid.id",649681738],["moviebaru21.com",1644865108],["mydramalist.com",[1147911079,212602625]],["negumo.com",1549118374]]);

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
