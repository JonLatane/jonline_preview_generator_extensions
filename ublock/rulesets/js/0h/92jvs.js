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

// spa-0

const argsMap = new Map([[2126465204,{"a":".clublavoz,\n.imgSponsor,\n.producto-tienda"}],[724952752,{"a":".ppp_H12,\n.ppp_H13,\n.ppp_H14,\n.ppp_H18,\n.ppp_H19,\n.ppp_H20,\n.ppp_H4,\n.ppp_H5,\n.ppp_H6,\n.ppp_P5,\n.ppp_P6"}],[650016420,{"a":".sugerencias"}],[371213884,{"a":".fondo_column_publi2"}],[950656210,{"a":".header_publicity,\n.link-ads-content,\n.publicity"}],[1970820092,{"a":".sponsored"}],[1392246427,{"a":"#swiffycontainer"}],[1873499617,{"a":".banner-center,\n.banner-noticia"}],[881251043,{"a":".banner-border"}],[552564281,{"a":"a[href=\"https://www.facebook.com/SchneiderARG/\"],\na[href=\"https://www.youtube.com/watch?v=IZPtel51MlA\"]"}],[404009680,{"a":".partnerships-view"}],[1503158999,{"a":"#sticky-banner-article"}],[1638432604,{"a":".m-pod-promo-image"}],[1977676983,{"a":".ofertas2"}],[335576651,{"a":".swf-banner-1,\n.swf-banner-2"}],[1971601394,{"a":"#text-2"}],[1126446745,{"a":".penci-featured-cat-custom-ads,\n.text-4,\n.text-7"}],[634454651,{"a":".article-banner,\n.banners-rotate,\n.bloque-secondary,\n.featured-banner"}],[1361255653,{"a":".banner-bloque,\n.box-banners-dest,\n.box-bloque-banners,\n.columna-tercera"}],[1868139652,{"a":"#imagensidebar,\n.Estilo1,\n[href^=\"https://www.bancodecorrientes.com.ar\"]"}],[452451070,{"a":".quadro-ads-widget-1col"}],[1313706205,{"a":".banners_flash"}],[999952974,{"a":"#publiRightContainer"}],[2100077352,{"a":".banner-side"}],[1692909607,{"a":"#bloque-11"}],[845789167,{"a":".banner-billboard-wrapper"}],[493124387,{"a":"#text-1000,\n#text-1001,\n#text-25,\n#text-999"}],[1666577128,{"a":".horizontal-area,\n.square-area"}],[2036733090,{"a":"iframe[style*=\"z-index: 2147483647\"]"}],[1669721972,{"a":"a[href*=\".php\"],\na[href^=\"https://bstk.me/\"]"}],[684307728,{"a":".ed-ads,\n.leftSidebar,\n.rightSidebar"}],[896356748,{"a":"a[href=\"http://bit.ly/1Lppy4T\"],\na[href=\"http://byggboss.se\"],\na[href=\"http://www.hagopro.se\"],\ndiv[style=\"background-color:rgba(0,0,0,0.1);width:750px;height:100px;max-width:100%;margin:0 5px 10px 8px\"]"}],[1861707857,{"a":"[action^=\"https://significadoconcepto.com/\"]"}],[1713125811,{"a":"#divderecha_1053,\n.iberpi_cajaext,\n.pub_340x250"}],[621167480,{"a":".commercial-up-full"}],[1028820855,{"a":".roba"}],[1521308559,{"a":"ra[type=\"intext\"]"}],[1877845698,{"a":".c-banner"}],[26263257,{"a":"a[href*=\"://bit.ly/\"]"}],[140276753,{"a":"[href^=\"https://www.tgtravel.net/\"]"}],[661484152,{"a":"#divTopBanner,\n.row-publi-portada,\n.spotPortada"}],[327351736,{"a":".publicitat"}],[194418440,{"a":"#publicos,\n#publientrenotis"}],[915662871,{"a":"[href^=\"https://www.caixabank.cat\"]"}],[1688142250,{"a":".caixa-publicitat"}],[1455450639,{"a":".publi-horizontal,\n.publicitat-banner"}],[803256056,{"a":".bannerContainer"}],[1738259710,{"a":".drts"}],[298946206,{"a":".Ycsdp"}],[852933015,{"a":"#banner_publi"}],[113461656,{"a":".banner-ancho,\n.banner-ancho-movil"}],[75481149,{"a":".widget_text"}],[1948245960,{"a":".banner-capital"}],[237664679,{"a":".banner-top"}],[942799776,{"a":".td-main-sidebar > .td-ss-main-sidebar > .td_block_template_5:nth-of-type(1),\n.wpb_text_column"}],[2011243924,{"a":"div[style=\"width:100%;margin: 30px auto; text-align:center;clear:both;padding:20px 0;\"]"}],[1652979560,{"a":"#bannerGCP,\n#pub,\n.RP,\n.cajabanners"}],[1169896457,{"a":"a[href=\"https://www.santotomas.cl\"],\ndiv[style=\" width: 300px;height: 200px;background-color:#ededed; text-align: center;\"],\nembed[href=\"http://www.radio.uchile.cl/\"]"}],[2064454737,{"a":".ad-container"}],[987261809,{"a":".boxbanner_container"}],[546704763,{"a":".d_banner_t13,\n.t_banner_t13,\n[class^=\"home-category-grid\"],\n[class^=\"home-slider__ads\"]"}],[1757522428,{"a":"[href^=\"https://jeronimosoymuyfeliz.org/\"],\n[href^=\"https://www.dsa.com.co/\"]"}],[1245964800,{"a":"#myModal"}],[127535870,{"a":"[href^=\"http://www.cedimed.com/\"],\n[href^=\"http://www.incodol.com/\"],\n[href^=\"https://kstore.com.co/\"],\n[href^=\"https://www.aress.com.co/\"],\n[href^=\"https://www.usana.com/\"]"}]]);

const hostnamesMap = new Map([["lavoz.com.ar",2126465204],["letrap.com.ar",724952752],["losandes.com.ar",650016420],["loteriasmundiales.com.ar",371213884],["loventine.com.ar",950656210],["loventine.es",950656210],["maximaonline.com.ar",1970820092],["elespanol.com",1970820092],["noticiaslasflores.com.ar",1392246427],["noticiasurbanas.com.ar",1873499617],["ole.com.ar",[881251043,552564281]],["clarin.com",881251043],["olx.com.ar",404009680],["pagina12.com.ar",1503158999],["paginasblancas.com.ar",1638432604],["blancas.cl",1638432604],["paginasblancas.com.pe",1638432604],["pdindustriales.com.ar",1977676983],["pescare.com.ar",335576651],["planbnoticias.com.ar",[1971601394,1126446745]],["elplanetaurbano.com",1971601394],["planetabocajuniors.com.ar",634454651],["puntobiz.com.ar",1361255653],["radioexito.com.ar",1868139652],["salpimenta.com.ar",452451070],["tiemposur.com.ar",1313706205],["tiendeo.com.ar",999952974],["unosantafe.com.ar",2100077352],["ushuaia24.com.ar",1692909607],["voydeviaje.com.ar",845789167],["comodorodeportes.gov.ar",493124387],["flvto.biz",[1666577128,2036733090]],["gnula.cc",[2036733090,1738259710]],["mp3juices.cc",2036733090],["series24.cc",[2036733090,298946206]],["atomixhq.club",2036733090],["2conv.com",2036733090],["animeblix.com",2036733090],["doramasflixs.com",2036733090],["doramasvip.com",2036733090],["animeyt.es",2036733090],["telenovelas-turcas.com.es",2036733090],["pelisplus2.io",2036733090],["superflix.io",2036733090],["pelishouse.me",2036733090],["jkanime.net",2036733090],["serieskao.net",2036733090],["vidoza.net",2036733090],["gnula.se",2036733090],["cuevana3.so",2036733090],["serieskao.tv",2036733090],["cuevana3.video",2036733090],["pelisplus.video",2036733090],["pivigames.blog",1669721972],["eldeber.com.bo",684307728],["dreamfilmhd.bz",896356748],["pelisplus.cam",1861707857],["diaridegirona.cat",[1713125811,621167480]],["diariocordoba.com",621167480],["emporda.info",621167480],["e-noticies.cat",[1028820855,1521308559]],["diariovasco.com",1028820855],["elcorreo.com",1028820855],["gonzoo.com",1028820855],["larioja.com",1028820855],["leonoticias.com",1028820855],["diariosur.es",1028820855],["digitalcamera.es",1028820855],["elcomercio.es",1028820855],["eldiariomontanes.es",1028820855],["elnortedecastilla.es",1028820855],["hoy.es",1028820855],["ideal.es",1028820855],["lasprovincias.es",1028820855],["laverdad.es",1028820855],["primeralinea.es",1028820855],["publico.es",1028820855],["elnacional.cat",1877845698],["cocheglobal.com",1877845698],["cronicavasca.com",1877845698],["culemania.com",1877845698],["cronicaglobal.elespanol.com",1877845698],["huleymantel.com",1877845698],["isabadell.cat",26263257],["autoextragti.com",26263257],["madridnorte24horas.com",26263257],["sport.es",26263257],["soloqchallenge.gg",26263257],["mexicodesconocido.com.mx",26263257],["labustia.cat",140276753],["laveu.cat",661484152],["lesportiudecatalunya.cat",327351736],["naciodigital.cat",194418440],["noticiestgn.cat",915662871],["racocatala.cat",1688142250],["tot-hospitalet.cat",1455450639],["tottarragona.cat",803256056],["uqload.com",1738259710],["grantorrent.ch",852933015],["adnradio.cl",113461656],["cafevirtual.cl",75481149],["pamplonaactual.com",75481149],["trincheraonline.com",75481149],["capital.cl",1948245960],["cooperativa.cl",237664679],["tycsports.com",237664679],["cronicadigital.cl",942799776],["elciudadano.cl",2011243924],["eldefinido.cl",1652979560],["elperiodico.cl",1169896457],["redgol.cl",[2064454737,987261809]],["eltiempo.com",2064454737],["wildtangent.com",2064454737],["somosfanaticos.fans",2064454737],["lapaginamillonaria.com",987261809],["t13.cl",546704763],["accounter.co",1757522428],["chrissysinvite.co",1245964800],["atlnacional.com.co",127535870]]);

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
