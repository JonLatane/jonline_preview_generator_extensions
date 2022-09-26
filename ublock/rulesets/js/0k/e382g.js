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

const argsMap = new Map([[1618886025,{"a":"#anuncios-amp,\n.content > .pad > span[style=\"font-size: 6pt\"],\n.post-inner > div[style=\"margin: 0 0 25px 0\"] > span[style=\"font-size: 6pt\"],\n.sidebar-content > #text-5,\nspan[style=\"font-size: 6pt\"]"}],[919539482,{"a":"[width=\"320\"][align=\"left\"]"}],[314471234,{"a":"#banner0,\n#pubprime,\n#seccionpauta1,\n#seccionpauta2,\n.moduletable_pubtexto,\na[href^=\"http://www.clubvital.com.co\"],\ndiv[style*=\"font-size: 0.8em; text-align: left; color:\"]"}],[1411085333,{"a":".textb,\ndiv[class^=\"ano_\"]"}],[1487559212,{"a":".fake_player"}],[1986057530,{"a":"#interVeil"}],[2042735223,{"a":"#interContainer"}],[866155933,{"a":"#mainmain,\na[target=\"_blank\"][rel=\"noopener noreferrer\"] > img"}],[887158200,{"a":".adsmovie,\n.pfake,\na[href=\"javascript:void(0);\"][onclick^=\"window.open('http://bit.ly/\"][rel=\"nofollow\"],\ndiv[align=\"center\"] > #player2"}],[2087429368,{"a":".fstory-rating-left > a[rel=\"nofollow\"]"}],[993897470,{"a":"#sidebar > #custom_html-2,\niframe[src^=\"https://a.adtng.com/\"]"}],[1564079319,{"a":"#closeX"}],[231311184,{"a":"div[id^=\"capa\"]"}],[718866012,{"a":".block.kayak"}],[1506459128,{"a":".ui-dialog,\n.ui-widget-overlay"}],[474064599,{"a":"#floating-bn"}],[18994497,{"a":"aside >div[id^=\"custom_html-\"]"}],[1005275789,{"a":".publicidadactriz"}],[1568122887,{"a":"a[href^=\"link.php?id=\"]"}],[793686390,{"a":"#clickbg"}],[1522283713,{"a":"#footer-iframe,\n#video-right"}],[1615610271,{"a":".home_1_ad"}],[868133629,{"a":".sidebar > div.tile-top > div[class=\"tile-content\"],\ndiv[id^=\"ppsPopup\"]"}],[1437196255,{"a":".sidebar > #fixed_bar"}],[392036307,{"a":"td[width=\"360\"] > center"}],[2113117422,{"a":".container > .native,\n.sectionWrapper > .container > .media.sidebar.visible-lg"}],[2083757627,{"a":".rectangle.ad"}],[228997643,{"a":"#SKY,\n#scAdContainer_i51_52,\n.scAdvertisement,\nbody[onload=\"stopAdTimer()\"]"}],[1958105378,{"a":"#header-leaderboard"}],[682259437,{"a":"#teaser2,\n#teaser3,\n.body-wrap > .c-bottom-sidebar,\n.site-header + .c-top-second-sidebar"}],[149532697,{"a":"#custom_html-9,\ndiv[data-dest=\"placeholder\"]"}],[1994822265,{"a":".show-load-ad"}],[526614511,{"a":"body > a[href*=\"?af_id=\"][target=\"_blank\"][style^=\"z-index:\"]"}],[1162967074,{"a":".publibox"}],[893689104,{"a":".SsdAS2,\n.recommended-widget"}],[710558139,{"a":"#banner_medio_medio_html,\n#top-banner-wrap"}],[1603704691,{"a":".pub728"}],[1836376772,{"a":".ad-fixed,\n.axds > div.henneoHB,\n.axds-lane,\n.editorial-banner"}],[1806085152,{"a":".creatividad,\n.publi-articulo,\n.publiABC,\n.publiTextlink,\na[href^=\"http://ad.doubleclick.net/clk\"]"}],[280143034,{"a":".av.clearfix,\n.m_advertiser,\n.m_promo"}],[559211920,{"a":".block-spti_operative"}],[941905317,{"a":".header-megabanner > *"}],[700352042,{"a":"#block-block-23,\n#block-views-sales_admin-block_2,\n.big_banner"}],[1668188552,{"a":".block-spti_operativ"}],[725007103,{"a":"div[class^=\"mega__BackgroundAds-\"]"}],[234113840,{"a":".voc-sponsored-related,\ndiv[style=\"width: 310px;margin: 2px 5px 0 0;float: left;clear: left;\"]"}],[1005001894,{"a":"#dtos-banner,\n#dtos-overlay,\n#lateral_descuentos,\n.adsb,\n.adst,\n.large,\n.publi_1,\n.top_jueg,\na[href^=\"/ver_contenido_link.php?c=\"]"}],[210179667,{"a":"a[target=\"_blank\"][onmouseup]"}],[614271421,{"a":"#advertising-top"}],[359294470,{"a":"#publiHeader"}],[401914639,{"a":"#columnapublicidad,\n#headertop > div[style=\"width:138px; float:left;\"]+div a[rel=\"nofollow\"] > img,\n#mediacolumna,\n#publiheader,\n#publitop,\n.advertising-corte-interstitial"}],[1843246416,{"a":"#PubDesplegable01,\n#banners_arriba,\n.bloque_infopublicidad,\n.sticky_horizontal"}],[1595258006,{"a":".addbox,\na[href^=\"https://bit.ly/\"].gofollow > img,\ndiv[id^=\"_header_row-3-\"][style=\"opacity: 1;\"]"}],[1731291757,{"a":"#dl_google_1"}],[11044684,{"a":"div[class^=\"controls-\"] > div[class^=\"outer-\"] > div[class^=\"slot-\"]"}],[2072939684,{"a":"#m3,\n#m6,\n#m9"}],[1105757578,{"a":".cntBannVertArriba"}],[1534766205,{"a":".BANNER-image,\n.baterybanner"}],[1920706490,{"a":".bbnx-module,\n.edi-advertising,\n.news-sponsored-content"}],[1374806173,{"a":".punteado,\np[style=\"font-size:11px; padding:5px\"]"}],[536313427,{"a":"#cabecera_banners"}],[1810553354,{"a":".ue-c-ad--sticky"}],[1051473897,{"a":"#publiBottom,\n#publiRight,\n#superHeader"}],[2121610738,{"a":"#SMNativeMainContainer"}],[839075460,{"a":".contenedor_publicidad,\n.ePubli1"}],[11500767,{"a":".notFondo"}],[1585321295,{"a":".geekads"}],[594339020,{"a":"#top_ads_container"}],[2051153605,{"a":".Home_Pub_Box.Home_Pub_BoxShadow,\n.Home_TopDcha,\n.Web_Banner"}],[519824311,{"a":"#publireportaje"}],[707102277,{"a":"#bannerAdmeenRectangleTopContainer,\n#bannerLeaderboardTop,\ndiv[id^=\"bannerAdmeen\"],\ndiv[id^=\"bannerGameSkyscraper\"]"}],[414068985,{"a":"#slider-oferplan"}],[621167480,{"a":".commercial-up-full"}],[1491117557,{"a":"#outbrain-id,\n.content__ad"}],[1634046808,{"a":".publicitat1"}],[314072163,{"a":".interst"}],[960007004,{"a":"#roba1,\n#roba2,\n.gallery--mega,\n.mega1,\n.mega2,\ndiv[id^=\"mega2_\"]"}],[1142855315,{"a":".ad-wrapper,\ndiv[class^=\"coreCarousel__advertisementBox-\"]"}],[1832821862,{"a":"#sidebar > [class^=\"roba\"],\n.size_static.mega1,\n.superbanner"}],[500625134,{"a":".megaBanner"}],[1423332664,{"a":"div[class^=\"c-nwtpubli-\"]"}],[341641064,{"a":"div[class^=\"cards__card_ad-\"]"}],[648541528,{"a":"#publicity,\n.adContainer1"}],[1104328589,{"a":".fdo_banner,\n[style=\"width: 300px; height: 264px;\"]"}],[255764744,{"a":"div[class*=\"advertisement-\"]"}],[1372897540,{"a":"#lightbox,\n#lightbox_fade"}],[1573758602,{"a":".promocion"}],[905143128,{"a":"#yuio"}]]);

const hostnamesMap = new Map([["universoformulas.com",1618886025],["univision.com",919539482],["vanguardia.com",314471234],["verepeliculas.com",[1411085333,1487559212]],["cine-online.eu",1487559212],["vergol.com",[1986057530,2042735223]],["vagos.es",1986057530],["cdn.chatytvgratis.net",[1986057530,2042735223]],["vermangasporno.com",866155933],["verpeliculasenlatino.com",887158200],["verpeliculasultra.com",2087429368],["verpornocomic.com",993897470],["vertelevisor.com",[1564079319,231311184]],["vertelevision.tv",1564079319],["viajenaviagem.com",718866012],["videoaltadefinicion.com",1506459128],["embed.videosdemadurasx.com",474064599],["videosdesuavizinha.com",18994497],["videospornosos.com",1005275789],["visaonoticias.com",1568122887],["vkmag.com",793686390],["voglioporno.com",1522283713],["vozpopuli.com",1615610271],["windowsblogitalia.com",868133629],["winphonemetro.com",1437196255],["xchica.com",392036307],["xnalgas.com",2113117422],["xtraordinaryfansub.com",2083757627],["mail.yahoo.com",228997643],["yourupload.com",1958105378],["yugenmangas.com",682259437],["zona-militar.com",149532697],["zonamixs.com",1994822265],["zonammorpg.com",526614511],["zonarutoppuden.com",1162967074],["zubby.com",893689104],["cdn.com.do",710558139],["naruho.do",1603704691],["20minutos.es",1836376772],["abc.es",1806085152],["adn.es",280143034],["animax.es",559211920],["setenveo.es",559211920],["arquitecturaydiseno.es",941905317],["autobild.es",700352042],["axn.es",1668188552],["businessinsider.es",725007103],["canarias7.es",234113840],["cinetube.es",1005001894],["chinesetubex.com.es",210179667],["comunio.es",614271421],["cope.es",359294470],["desdesoria.es",401914639],["diariodenavarra.es",1843246416],["dodmagazine.es",1595258006],["download3k.es",1731291757],["dplay.es",11044684],["edreams.es",2072939684],["elcorreogallego.es",1105757578],["eldiadezamora.es",1534766205],["eldiario.es",1920706490],["eleconomista.es",1374806173],["elimparcial.es",536313427],["elmundo.es",1810553354],["emprendedores.es",1051473897],["europapress.es",2121610738],["europasur.es",839075460],["gaceta.es",11500767],["geeknetic.es",1585321295],["heraldo.es",594339020],["infobolsa.es",2051153605],["interviu.es",519824311],["isladejuegos.es",707102277],["lagacetadesalamanca.es",414068985],["laopiniondemurcia.es",621167480],["larazon.es",1491117557],["lavanguardia.es",1634046808],["lavozdegalicia.es",314072163],["marie-claire.es",960007004],["miarevista.es",960007004],["muyhistoria.es",960007004],["muyinteresante.es",[960007004,1832821862,500625134]],["muynegociosyeconomia.es",960007004],["serpadres.es",960007004],["mitele.es",1142855315],["correiomanha.pt",500625134],["newtral.es",1423332664],["niusdiario.es",341641064],["ondacero.es",648541528],["orange.es",1104328589],["paisdelosjuegos.es",255764744],["paisdelosjuegos.com.pe",255764744],["phonehouse.es",1372897540],["planetadeagostini.es",1573758602],["primedeportes.es",905143128]]);

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
