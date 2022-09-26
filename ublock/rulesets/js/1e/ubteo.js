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

const argsMap = new Map([[1338145630,{"a":"#robapaginasCont,\n.Noticias_300x250"}],[340475923,{"a":"#group-bottom,\n#mega"}],[22575751,{"a":"a[href^=\"https://www.marie-claire.es/\"] > img,\ndiv[class^=\"roba\"],\ndiv[id].henneoHB"}],[825690240,{"a":"#publicidadsuperior,\n.publicidad40"}],[171626584,{"a":"#redirect_langue_flou,\n#spartooday"}],[334146391,{"a":".above-content,\n.below-content,\n.sidebar-bottom-content,\n.sidebar-top-content"}],[1020101607,{"a":"#instaladorSL,\n#popUpContainer,\n.ad-top,\n.publi300,\n.publi_bg"}],[165124921,{"a":"#banner300,\n#tgm-ppi,\n#tgm-right-2,\n.bann"}],[803169903,{"a":"#oursponsors"}],[1120454364,{"a":".dhtmlwindow,\n[style=\"width:120px !important;height:800px !important;width:122px;height:802px;background:#F1F1F1;border:1px solid black;margin-top:255px;padding:0;position:relative\"],\n[style=\"width:906px !important;height:98px !important;width:908px;height:100px;background:#F1F1F1;border:1px solid #9F6A1E;margin-left:auto;margin-right:auto;padding:0;position:relative\"],\ndiv[style=\"margin-left:20px;width:300px;height:250px;margin-left:20px;\"],\ntable[height=\"250px\"][width=\"700px\"],\ntable[style=\"border:0px width:1010px;height:250px;margin-left:auto;margin-right:auto;margin-top:10px;margin-bottom:10px;\"]"}],[768183731,{"a":"#HTML3"}],[171440652,{"a":"#headlineatas,\na[href^=\"http://www.hibids10.com\"],\ndiv[id^=\"M\"][id*=\"ScriptRoot\"]"}],[2028992514,{"a":"#BandaAncha_160x600,\n#BandaAncha_Roba_300x250_Sec,\n#robapaginas_300x250"}],[115115110,{"a":"body #expandirBotones,\nbody > .add"}],[2095258918,{"a":"#link-view  > a[href][rel=\"nofollow\"] > img,\n.banner-inner,\na[href^=\"https://ads.enrt.eu/\"]"}],[1452975617,{"a":"div[style*=\"width:300px;height:250px;\"]"}],[352703061,{"a":"#adw_1"}],[860538184,{"a":"a[target=\"_blank\"] > img[style=\"width: 100%;\"]"}],[763925163,{"a":".table-grids > div[id][style=\"width:336px;height:280px;\"]:empty,\n.table-grids > div[id][style=\"width:728px;height:90px;\"]:empty,\ndiv[align=\"center\"] > [id][style=\"width:970px;height:250px;\"],\ndiv[class=\"modal fade in\"][id][data-backdrop=\"static\"][style=\"display: block; padding-right: 17px;\"],\ndiv[class=\"modal fade in\"][id][data-backdrop=\"static\"][style=\"display: block; padding-right: 17px;\"] ~ div.modal-backdrop.fade"}],[1616000596,{"a":".Ad-Under-Game,\naside[id^=\"adace_ads_widget-\"]"}],[484291265,{"a":"div[class^=\"AdmUnit_\"]"}],[860286439,{"a":".alertWS"}],[327017928,{"a":".featuredtop2"}],[651241095,{"a":"#fourthColBanners,\n#leftBanners"}],[1663031750,{"a":"#sidebar > #custom_html-6,\ndiv[id^=\"chp_ads_blocker-\"]"}],[1691722840,{"a":".cont-publicidade-cat,\n.container-autosImoveis,\n.container-editoria-maisLidas,\n.container-post-pub-comentarios,\n.topo-banner,\n[class^=\"container-publicidade\"],\narticle[class$=\"-pub\"],\ndiv[id^=\"publicidade-\"]"}],[1741728665,{"a":"#secondary > #text-5"}],[55098090,{"a":"span[style=\"float: right; width: 300px; height: 260px;\"]"}],[1640863445,{"a":"td[width=\"300\"][align=\"center\"][valign=\"top\"] > div[align=\"center\"],\ntd[width=\"729\"][align=\"center\"][valign=\"top\"]"}],[914515820,{"a":"#flyingBottomAd"}],[1039696893,{"a":"iframe[src^=\"http://extremotv\"][src*=\".php\"]:not([src*=\"lateral.php\"])"}],[1739927185,{"a":"#empty_tyo"}],[213830876,{"a":"#fadeinbox"}],[1791115255,{"a":"#contendor-right-publicidad,\nbody > div[style=\"z-index:3; display:block\"]#players"}],[1319729512,{"a":"#text-7,\n.widget_themoneytizer_widget"}],[1295485733,{"a":".mvic-btn > a.btn-successful"}],[447803974,{"a":"#yb_bb,\n#yb_mm"}],[1561772896,{"a":".pub-large,\n.pub-medium"}],[261701973,{"a":".pubBlock"}],[1787621608,{"a":"#HTML2 > .widget-content,\n#HTML3 > .widget-content > span[style=\"font-weight: bold;\"],\n.post-body > span[style=\"font-weight: bold;\"],\n.sidebar > #HTML1 > .widget-content [style=\"font-weight:bold;\"],\nspan[style=\"font-weight: bold;\"],\nspan[style=\"font-weight:bold;\"]"}],[549020318,{"a":"div[style] > a[target=\"_blank\"] > img"}],[1355312318,{"a":"#ads"}],[1013261372,{"a":".layer"}],[2140869145,{"a":"a[href^=\"https://startgaming.net/\"]"}],[1379706204,{"a":"div[class*=\"faux\"]:not(.fauxborder-left):not(.fauxcolumns)"}],[1512612237,{"a":".m-ib"}],[2018821629,{"a":".theiaStickySidebar > aside[id=\"text-2\"]"}],[641308253,{"a":"#overlay"}],[899314620,{"a":".btnpubli"}],[1305394159,{"a":"a[href^=\"http://altadefinizione.pink\"]"}],[2120854680,{"a":"#sp-above_body_1,\n#sp-left > .module,\n.row-fluid > #sp-content1"}],[1983132607,{"a":"iframe[src^=\"http://zonasports.at.ua/\"],\niframe[src^=\"http://zonasports.at.ua/\"] + p"}],[1808115634,{"a":".column-right-outer,\n.fauxcolumn-right-outer"}],[1463551010,{"a":".publi-int-cuadro"}],[102454323,{"a":"#adsTop,\n.adHz,\n.adSt,\n.adVl"}],[1603796198,{"a":"#oasTOP"}],[1457261433,{"a":".fondo"}],[392873763,{"a":"[style=\"width: 995px; height: 90px;\"]"}],[1443242778,{"a":"#pubhead,\n.pubcuad,\n.publoque9,\ndiv[style=\"background:#CCC; width:310; height:280; float:left\"]"}],[735308810,{"a":".ArticlePage-stickyAd,\n.GoogleDfpAd-wrap"}],[1055744227,{"a":".dixio-banner,\n.medium-rectangle"}],[1598909998,{"a":"#uno-div[style],\n#uno[style]"}],[961057244,{"a":"#banner_flotante,\n#flotante,\n#home2,\na.publimg,\ntd.pieimg"}],[1013406359,{"a":".paineld > a.pp"}],[1932789540,{"a":"#left > div.cto,\niframe[name=\"Pub300\"]"}],[414047666,{"a":".a300x250,\n.pub_728,\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:728px;height:90px\"],\ndiv[style^=\"width:300px\"][style*=\"height:600px\"]"}],[584433086,{"a":"#area_conteudo_secoes > .paginador_numerico_A > div[align=\"center\"] > div[id][style=\"width: 336px; height: 280px;\"],\n.area_conteudo_news_fala > div[align=\"center\"] > div[id][style=\"width: 336px; height: 280px;\"]"}],[775585313,{"a":".entry :not(#player) iframe:not([src])"}],[1400860054,{"a":"#movido"}],[1409218107,{"a":"#banDe,\n#fblike"}],[150281835,{"a":"div[class*=\"vc_btn3\"] > a[href^=\"https://bit.ly/\"][target=\"_blank\"]"}],[1901859467,{"a":"#content > center > a[href][target=\"_blank\"] > img"}],[198087313,{"a":".entry-content > div[style^=\"float: none;\"] > a[href][target=\"_blank\"] > img"}],[185058710,{"a":".mt-AdvertisingRoadblock-top"}],[946835006,{"a":".inside-right-sidebar > #custom_html-2"}],[94932297,{"a":".textwidget > a[rel=\"nofollow\"] > img,\na[href^=\"//goo.gl/\"][target=\"_blank\"] > img,\na[href^=\"//trisxisys.com/afu.php\"]"}],[1466815371,{"a":"#stickyb"}],[630928790,{"a":"#text-23,\n.widget_abn_admanager_sidestealer"}],[3070809,{"a":"#wrapper > center > div[class] > div[class] > a[target*=\"_blank\"] > img"}],[1482526525,{"a":".anno,\n.dfp-queue,\ndiv.news-ad"}],[674985000,{"a":"#secondary > #text-2"}],[1318481950,{"a":".banner + div.box"}],[469470296,{"a":"#conteudo_download > .lateral"}],[821505065,{"a":".divbanner"}],[421264282,{"a":".p-body-pageContent > center > a[target=\"_blank\"] > img"}],[1049964555,{"a":"#ge-gadget-shop,\n.ge-gadget.cornerHeaderLG[style=\"width: 210px;\"],\n.ge-gadget.cornerHeaderLG[style=\"width:210px;\"],\n[style=\"float:left; padding-right:0px; width:130px; display:inline;\"],\n[style=\"float:left; padding-right:0px; width:475px; display:inline;\"]"}],[1337295127,{"a":".dmPhotoGalleryResp a[href=\"https://calentadores.shoptena.com/\"]"}],[1152541603,{"a":"#client_ads"}]]);

const hostnamesMap = new Map([["publico.es",1338145630],["rumbo.es",340475923],["serpadres.es",22575751],["soitu.es",825690240],["spartoo.es",171626584],["studylib.es",334146391],["telecinco.es",1020101607],["terra.es",165124921],["totallycrap.es",803169903],["vagos.es",1120454364],["yoututosjeff.es",768183731],["zonasports.es",171440652],["bandaancha.eu",2028992514],["cine-online.eu",115115110],["enrt.eu",2095258918],["fungoepigeo.eu",1452975617],["esradio.fm",352703061],["gamestorrents.fm",860538184],["visioncloud.ga",763925163],["juegos.games",1616000596],["draft5.gg",484291265],["futemax.gratis",860286439],["latribuna.hn",327017928],["aurora-israel.co.il",651241095],["audiotools.in",1663031750],["d.arede.info",1691722840],["baixartorrent.info",1741728665],["burbuja.info",55098090],["deportesmax.info",1640863445],["exabytetv.info",914515820],["extremotv.info",1039696893],["filmesubtitrate.info",[1739927185,213830876]],["bp7.net",213830876],["musicaanime.info",1791115255],["neemias.info",1319729512],["pelisplaygratis.info",1295485733],["redecanais.info",447803974],["redecanais.link",447803974],["telanon.info",[1561772896,261701973]],["xl.pt",261701973],["xrivonet.info",1787621608],["pelisplus2.io",549020318],["repelis.io",1355312318],["lyon.kim",1013261372],["hackstore.la",2140869145],["vivoplay.sigue.la",1379706204],["paper.li",1512612237],["masbeneficios.life",2018821629],["allfeeds.live",641308253],["fullpeliculashd.me",899314620],["seriehd.me",1305394159],["tvfree.me",2120854680],["zonasports.me",1983132607],["futandres.ml",1808115634],["infochannel.com.mx",1463551010],["informador.com.mx",102454323],["mercadolibre.com.mx",1603796198],["noroeste.com.mx",1457261433],["publimetro.com.mx",392873763],["yucatan.com.mx",1443242778],["expansion.mx",735308810],["unam.mx",1055744227],["18hentaionline.net",1598909998],["alfabeta.net",961057244],["anicchan.net",1013406359],["anime-latino.net",1932789540],["animeflv.net",414047666],["animesvision.net",584433086],["apurogol.net",775585313],["baixemp3gratis.net",1400860054],["bateriafina.net",1409218107],["blizzboygames.net",150281835],["brupload.net",1901859467],["calistenia.net",198087313],["coches.net",185058710],["conhecimentolivre.net",946835006],["ddmix.net",94932297],["descargaspcpro.net",1466815371],["desdelinux.net",630928790],["downloadcursos.net",3070809],["elotrolado.net",1482526525],["erohentai.net",674985000],["eusaudavel.net",1318481950],["file4go.net",469470296],["flagrasamadores.net",821505065],["forowarez.net",421264282],["gazetaesportiva.net",1049964555],["globaltvapp.net",1337295127],["habboin.net",1152541603]]);

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
