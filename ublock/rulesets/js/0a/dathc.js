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

// spa-1

const argsMap = new Map([[1133546896,{"a":".t-pubbox-ct-1,\ndiv[class^=\"t-modsys-pub\"],\ndiv[class^=\"t-pub-\"]"}],[1111192809,{"a":"#leaderboard-pub"}],[1334583438,{"a":".c-publicity"}],[293680272,{"a":"#Rectangle"}],[1461676299,{"a":".advert"}],[728674698,{"a":"#bannerFooter"}],[1059886430,{"a":"#bannerMrec"}],[1518685381,{"a":"#halfbanner,\n#topPub,\n.col-google,\n.pub-line,\n.pub_full,\n.pub_half"}],[240988985,{"a":"#mrec"}],[938487373,{"a":"#frase2"}],[627016585,{"a":".banner-obj"}],[1569492123,{"a":"div[class^=\"t-pub-box-\"]"}],[1363172163,{"a":"a[href^=\"http://ad.doubleclick.net/\"]"}],[1293579800,{"a":".beachPartners,\n.dealer-block,\n.liveCamInfoContainer > div.sponsorContainer + div"}],[713427371,{"a":"#table50"}],[1233185326,{"a":".commBanners"}],[650350954,{"a":".ad-slot,\n.rmp-ad-outstream,\n.stack__ads,\na[href^=\"http://bs.serving-sys.com/\"]"}],[1949085580,{"a":"[align=\"right\"][width=\"348\"],\n[height=\"76\"][width=\"8\"]"}],[1773486379,{"a":".GooglePub300_250,\n.PubGoogle300"}],[1821459103,{"a":"#MREC2,\n#pub728x90ifrm,\n.BoxPub300x250,\n.PagInicialPub2,\n.bannerMrec,\n.comentariosPag,\n.cx-iniciativas-pub,\n[style=\"WIDTH:300px; margin-bottom:10px; TEXT-ALIGN:right\"],\n[style=\"padding: 20px 0px; text-align: center; height: 90px;\"],\n[style=\"padding:20px 0px; text-align:center; height:90px\"],\n[style=\"width: 300px; margin-bottom: 10px; text-align: right;\"],\n[style=\"width: 527px; height: 150px; float: right;\"],\n[style=\"width:527px; height:150px; float:right\"],\ntable[cellpadding=\"5\"][width=\"641\"]"}],[939679894,{"a":".pubTextInfo,\ndiv[id^=\"pubText_\"]"}],[1339893070,{"a":".odigi-adlabel"}],[1328991250,{"a":"div[id^=\"ws_widget__ad_\"]"}],[246011757,{"a":".t-a-pub-1,\n.t-pubbox-bb-1,\n.t-pubbox-mrec-1"}],[323456645,{"a":"#magazine_modules_receivenewsletter,\n.stk_666"}],[1608160789,{"a":".pubframe"}],[741973974,{"a":"#adslot-side-mrec,\n#adslot-top-lead"}],[2063719226,{"a":".theiaStickySidebar > #custom_html-2"}],[1251936183,{"a":"#ba_avanza,\n#ba_interbanco"}],[938081648,{"a":".adsInfo,\n.adsLateral"}],[1417762871,{"a":"body ~ iframe[style*=\"width:\"][style*=\"opacity:\"][style*=\"z-index:\"][style*=\"position:\"]:not([src])"}],[457097059,{"a":"div[class*=\"gg_ads\"]"}],[1469251678,{"a":".enlace_descarga"}],[1918728052,{"a":".entry-content center > a[rel=\"noopener\"] > img"}],[1071705650,{"a":"#sticky-banner1"}],[1625557306,{"a":".inside-header > a[target=\"blank\"] > img,\n.inside-right-sidebar > #custom_html-4"}],[1547064472,{"a":".happy-player-beside,\n.player__happy-inside"}],[1256998926,{"a":"a[class^=\"reserve-button\"][target=\"_blank\"] > img,\ncenter > a[class^=\"super-r-button\"] > img"}],[1901221894,{"a":".happy-section,\ndiv[class^=\"adde_\"],\ndiv[id^=\"adde_modal-\"]"}],[1177173355,{"a":"#content > .contentBox + center,\n#sidebarGeral > .sidebar:first-child,\nbody > center"}],[694176054,{"a":".DvrAbs"}],[1985981715,{"a":"#firstClick"}],[1655690065,{"a":"center > a[target*=\"_blank\"] > img"}],[622540414,{"a":"#frutuante"}],[838975776,{"a":"td[width=\"961\"][height=\"60\"]"}],[1540033999,{"a":"#iphone_banner"}],[284379117,{"a":"td[class=\"style6\"][style=\"height: 53px\"]"}],[1991943344,{"a":".generalModal,\na[href^=\"https://btt-pt.toldmeroc.com/\"]"}],[1901308329,{"a":".TPlayerNv > .Button.STPb[data-tplayernv=\"Opt0\"],\na[href^=\"https://ocio.leadzutw.com/\"]"}],[399371021,{"a":"a[href^=\"http://www.portablemusic.mobi/\"],\np > a[href][rel=\"noopener\"][target=\"_blank\"] > img"}],[1076645438,{"a":"#cointainerBanner300,\ndiv#banner300x250"}],[1414521433,{"a":".ParceirosLink,\n.Publicidade728"}],[1419009742,{"a":"iframe[width=\"220\"]"}],[968871549,{"a":"#superderbi"}],[1428185779,{"a":"#capa2"}],[1068694808,{"a":"a[href^=\"/play/\"]"}],[1422091387,{"a":"body > .vizerNewBox.adsByVizer"}],[247812008,{"a":".comments-pub,\n.movies-pub"}],[304785246,{"a":"a[href^=\"http://www.neobux.com/\"]"}],[1015211470,{"a":".ads-container,\n.ads-under-header,\n.editorial-ads,\ndiv[style=\"width:300px;padding:4px;margin:8px;float:left;border:0px solid #eeeeee;\"]"}],[721104068,{"a":".module1colAds,\ndiv[class*=\"category-secondary-ad\"]"}],[558620572,{"a":".ultim-adlabel + a[rel=\"nofollow\"],\ndiv[class^=\"ultim-\"]"}],[521273191,{"a":"a[href^=\"https://bit.ly/\"] > img"}],[1281937018,{"a":"#adxx"}],[1309858387,{"a":".adorshop,\ndiv[style=\"margin-top:.5em;min-height:312px\"]"}],[1718984012,{"a":"td[height=\"630\"]"}],[615683183,{"a":"#adsacumulada,\n#adsalosexo,\n#adscamerasex,\n#adsempire,\n#adsmp,\n#adsoriginal,\n#adspb,\n#amigos"}],[1367319302,{"a":".sidebar section.widget_block > a[target=\"_blank\"] > img"}],[1352730666,{"a":".fg1 > a[target=\"_blank\"].snd"}],[114829860,{"a":"#videoss > section:not([class]),\n.dvcss"}],[1654868072,{"a":"#text-19,\n.top-header-ads-mobile"}],[1151208803,{"a":".mt_ad"}],[1566141290,{"a":"div[class$=\"-iframe mb-20 text-center\"]"}],[184359096,{"a":".ad-bodyvideo"}],[620824413,{"a":".lst_ft_bn"}],[1073812358,{"a":"#block-7,\n.rteam_antiadb"}],[335826019,{"a":"div[style^=\"width:300px;height:250px;display: inline-block;\"]"}],[1681583695,{"a":"div[style][onclick*=\"anunciotag()\"]"}],[18399207,{"a":"#custom_html-2"}]]);

const hostnamesMap = new Map([["dn.pt",1133546896],["dnoticias.pt",1111192809],["e-konomista.pt",1334583438],["ebuddy.pt",293680272],["eurogamer.pt",1461676299],["aeiou.expresso.pt",[728674698,1059886430]],["sapo.pt",[728674698,1059886430,240988985,1821459103]],["visao.pt",1059886430],["iol.pt",[1518685381,240988985]],["rr.pt",240988985],["diario.iol.pt",938487373],["ionline.pt",627016585],["jn.pt",1569492123],["jornaldenegocios.pt",1363172163],["beachcam.meo.pt",1293579800],["miau.pt",713427371],["millenniumbcp.pt",1233185326],["publico.pt",650350954],["record.pt",1949085580],["rtp.pt",1773486379],["kbb.sapo.pt",939679894],["odigital.sapo.pt",1339893070],["pplware.sapo.pt",1328991250],["tsf.pt",246011757],["xl.pt",323456645],["zerozero.pt",1608160789],["forum.zwame.pt",741973974],["portal.zwame.pt",2063719226],["lanacion.com.py",1251936183],["superanimes.site",938081648],["pelisplus.so",1417762871],["pdfslide.tips",457097059],["1v.to",1469251678],["comando.to",1918728052],["canaistv.top",1071705650],["downloadcursos.top",1625557306],["hentai-asia.top",1547064472],["mrpiracy.top",1256998926],["porno-japones.top",1901221894],["animesorion.tv",1177173355],["animespace.tv",694176054],["cablegratis.tv",1985981715],["comandotorrent.tv",1655690065],["filmeshd.tv",622540414],["infonegocios.tv",838975776],["justin.tv",1540033999],["calcular.onlinegratis.tv",284379117],["pobre.tv",1991943344],["seriesgato.tv",1901308329],["televisionparatodos.tv",399371021],["tu.tv",1076645438],["tudotv.tv",1414521433],["tuporno.tv",1419009742],["verfutebol.tv",968871549],["vertelevision.tv",1428185779],["vidcorn.tv",1068694808],["vizer.tv",1422091387],["wareztuga.tv",247812008],["tvperuana.us",304785246],["elpais.com.uy",[1015211470,721104068]],["ovaciondigital.com.uy",721104068],["ultimasnoticias.com.ve",558620572],["tabonitobrasil.video",521273191],["repelisplus.vip",1281937018],["numero.wiki",1309858387],["juegosypelis.ws",1718984012],["revistasgratis.ws",615683183],["cuevana-3.wtf",1367319302],["pelispedia-v2.wtf",1352730666],["aztecapornohd.xxx",114829860],["hentaiporno.xxx",1654868072],["morritastube.xxx",1151208803],["pornburst.xxx",1566141290],["pornolandia.xxx",184359096],["tupornogratis.xxx",620824413],["animesonehd.xyz",1073812358],["clickhouse.xyz",335826019],["playnewserie.xyz",1681583695],["suasaudeonline.xyz",18399207]]);

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
