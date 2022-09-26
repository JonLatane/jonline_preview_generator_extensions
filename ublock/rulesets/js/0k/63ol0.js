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

const argsMap = new Map([[1005339888,{"a":"#banners_cabecera,\nhr[style=\"width:5px; color:#CC6600; background-color:#CC6600; margin-top:3px; margin-bottom: 3px;\"]"}],[2063507846,{"a":".anunciofooter"}],[1292416968,{"a":".ad-item-bt-cont,\n.codere,\n.flex-b-promociones"}],[494687708,{"a":".textwidget a[href^=\"https://ar.puma.com/\"],\nimg[width=\"750\"]"}],[746182408,{"a":".ib-ad-img"}],[443244431,{"a":".owl-example"}],[1685311771,{"a":".wpb_single_image"}],[2118013390,{"a":".brave_popup,\ndiv[id^=\"wmd-anuncio-\"]"}],[1828144193,{"a":"a[href^=\"https://alertlogsemployer.com\"]"}],[1631021856,{"a":"._p-ft,\n._p-tp"}],[2057525774,{"a":".sign,\nimg[alt^=\"caliente.mx\"]"}],[1695360227,{"a":"[href^=\"https://online.caliente.mx\"]"}],[838373566,{"a":"#enla"}],[214306740,{"a":"div[style=\"margin-top:5px; margin-bottom:5px; padding:0px;\"],\ndiv[style=\"padding:5px; font-family:arial; font-size:11px; color:#555555;\"],\niframe[style=\"margin-top:0px; margin-bottom:10px; border:1px solid black;\"]"}],[899086705,{"a":"a[target=\"_blank\"][href^=\"https://startgaming.net\"]"}],[1180007314,{"a":"div[data-id^=\"013f85c\"]"}],[2085008433,{"a":"#by_hawkers"}],[1011370443,{"a":"a[href^=\"https://www.univistainsurance.com/\"]"}],[637459686,{"a":".pb-tag"}],[1221145853,{"a":"div[style=\"align:center; margin-bottom:10px; margin-left:10px; border: 1px solid #cacaca; padding:5px; width:300px; height:250px;\"]"}],[1208945245,{"a":".horizontal-webb,\n[data-l^=\" pub\"]"}],[1714384665,{"a":".banner_detail_files,\n.banner_detail_top"}],[1125313411,{"a":"#moreg"}],[258920367,{"a":"a[href*=\"bestrevenuenetwork.com\"]"}],[1552483269,{"a":".banner-listado-simple"}],[131096712,{"a":"[class^=\"pub-banner\"]"}],[896704033,{"a":"#wrapper-20,\n#wrapper-65,\n#wrapper-7,\n.banner-ad-not-1,\n.banner-ad-not-top"}],[633353648,{"a":".promo"}],[540317402,{"a":"div[style=\"background-color:#FFF;margin-bottom:10px;height:250px;\"]"}],[1060828272,{"a":".bc_random_banner,\n.wp-block-image"}],[1313122924,{"a":"[href^=\"https://wa.me/\"],\n[href^=\"https://www.brandingsas.com/\"],\n[href^=\"https://www.cspeakers.com\"],\n[href^=\"https://www.cuposyserviciopublico.com/\"]"}],[581162838,{"a":"#widget-mdcribeo-loultimo,\n.bolarosa,\n.publi-box"}],[1411625937,{"a":".pds"}],[1912994676,{"a":"[id^=\"metaslider_widget-\"]"}],[479719184,{"a":"#ad_wrapper_head"}],[171885814,{"a":".widescreen"}],[801000366,{"a":".pub468x80,\n.sidebar,\ndiv[style=\"float:left;width:100%;height:160px;\"],\ndiv[style=\"float:left;width:100%;height:90px;\"],\ndiv[style=\"float:left;width:100%;min-height:1px;margin:4px 0px 4px 0px;\"],\ndiv[style=\"position:relative;margin-left:-30px;width:639px;min-height:1px;overflow:hidden;\"]"}],[1715028056,{"a":"a[href^=\"https://www.eneba.com/\"][href*=\"?af_id=\"]"}],[220313293,{"a":"#adpv1,\n#adpv2,\n#banneralto,\n#shopall1,\n.banner250"}],[1355312318,{"a":"#ads"}],[1138396457,{"a":"a[href=\"http://iglesiasegura.com/\"]"}],[116283984,{"a":".box_a"}],[1609396528,{"a":"#skin"}],[1574903634,{"a":"#carrusel_publicidad"}],[896012850,{"a":".cc3,\n.publii"}],[1554730368,{"a":".pinno-ad-label"}],[601776596,{"a":".prefix-adlabel,\na[href^=\"https://noticiasparamunicipios.com/linkout/\"]"}],[1528632220,{"a":"#ads-inread"}],[781659872,{"a":".banner-img"}],[736424991,{"a":".bannerspace"}],[301845705,{"a":"#text-8"}],[88128021,{"a":"div[style=\"background-color: #E6E6E6; padding: 2px; text-align: center\"]"}],[1985168852,{"a":".ad-slot-ph,\na[href*=\"legalitas.com/\"]"}],[1794428701,{"a":"[href^=\"https://seranking.com/\"]"}],[274039227,{"a":"div[class^=\"banner--\"]"}],[364233825,{"a":"[href^=\"https://www.electrohuila.com.co/\"],\niframe[src^=\"https://www.youtube.com/embed/CiedpC-wP7E?\"]"}],[839486190,{"a":"div[aria-label=\"QODE\"]"}],[1264283008,{"a":"[class*=\"wrapper_\"],\n[class^=\"aabcnn_\"]"}],[534432574,{"a":".space"}],[1853287706,{"a":".caja-banner-990"}],[444912002,{"a":"#Blokmnju,\n#Conten,\n#ContenidoPubliCotiza,\n#PubliBlog,\n#PubliBlogAbajo,\n.ContenidoClassPubliCotiza,\n.ContenidoClassPubliForo300"}],[1025921255,{"a":".bgshadow,\n.boxintersitial"}],[1944175295,{"a":".fake"}],[513129418,{"a":".pub"}]]);

const hostnamesMap = new Map([["manerasdevivir.com",1005339888],["mangacrab.com",2063507846],["marca.com",1292416968],["marcadegol.com",494687708],["marfanta.com",746182408],["mariosegura.com",[443244431,1685311771]],["armasymuniciones.net",1685311771],["mariskalrock.com",2118013390],["mastercoria.com",1828144193],["mediavida.com",1631021856],["mediotiempo.com",[2057525774,1695360227]],["record.com.mx",1695360227],["mega1080.com",838373566],["mejortorrent.com",214306740],["mejortorrentes.com",899086705],["pelispanda.com",899086705],["gamestorrents.fm",899086705],["divxtotal.li",899086705],["divxtotal.nl",899086705],["divxtotal.nu",899086705],["divxtotal.pm",899086705],["cuevana.se",899086705],["dontorrent.ws",899086705],["merca20.com",1180007314],["rinconforero.mforos.com",2085008433],["miamidiario.com",1011370443],["microsiervos.com",637459686],["milenio.com",1221145853],["mileroticos.com",1208945245],["miltorrents.com",1714384665],["minijuegos.com",1125313411],["minovelasubtitulada.com",258920367],["minutouno.com",1552483269],["mioriente.com",131096712],["misionescuatro.com",896704033],["mms-mexico.com",633353648],["monografias.com",540317402],["moracontenidos.com",1060828272],["mundo724.com",1313122924],["mundodeportivo.com",581162838],["muyzorras.com",1411625937],["nacionpaisa.com",1912994676],["es.nametests.com",479719184],["neoauto.com",171885814],["newpct1.com",801000366],["nintenderos.com",1715028056],["nomellamesfriki.com",220313293],["notariosyregistradores.com",1355312318],["hlat.me",1355312318],["ftail.tv",1355312318],["shippuden.tv",1355312318],["noticiacristiana.com",1138396457],["noticialdia.com",116283984],["noticias3d.com",1609396528],["noticiasamarillascartago.com",1574903634],["noticiasdel6.com",896012850],["noticiasenlamira.com",1554730368],["noticiasparamunicipios.com",601776596],["noticiasrcn.com",1528632220],["noticierodelllano.com",781659872],["noticierodigital.com",736424991],["nuestroclima.com",301845705],["todopolicia.com",301845705],["bufeo.do",301845705],["nuevamujer.com",88128021],["okdiario.com",1985168852],["omarhvelasquezm.com",1794428701],["onlineradiobox.com",274039227],["opanoticias.com",364233825],["oversos.com",839486190],["pampaporno.com",1264283008],["parentesis.com",534432574],["parlamentario.com",1853287706],["pcbolsa.com",444912002],["pctmix1.com",1025921255],["peliculas69.com",[1944175295,513129418]],["europa-agricola.es",513129418]]);

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
