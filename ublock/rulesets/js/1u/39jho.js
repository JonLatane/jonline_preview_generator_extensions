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

const argsMap = new Map([[1329522392,{"a":"[href^=\"https://www.morerayvallejo.es\"]"}],[1055629979,{"a":"#asd"}],[858164847,{"a":"#banners-superiores,\n#progressBar,\n.bankia-cuerda,\n.caja-publi-port,\na[onmousedown^=\"this.href='http://paid.outbrain.com/network/redir?\"][target=\"_blank\"]"}],[276914572,{"a":"#modulo_buscador_sv,\n.flex__publi,\n.other-services"}],[1481828254,{"a":"#ads_position_2,\n.m_gollum"}],[1336176393,{"a":"div[style=\"width: 336px; height: 565px; float: right; margin-top: 30px;\"],\ndiv[style=\"width:300px; height:600px; float:right; margin-left:3px;\"],\ndiv[style=\"width:300px;height:600px;float:right\"],\ndiv[style=\"width:728px; height:90px; margin: 0 auto; margin-top: 5px; margin-bottom: 5px;\"],\ndiv[style=\"width:728px;height:90px;margin: 0 auto; margin-bottom:5px; margin-top:5px\"],\ndiv[style=\"width:970px;height:90px;margin:0 auto;margin-bottom:5px;\"]"}],[1558094581,{"a":".widget_custom_html"}],[399692475,{"a":"div[align^=\"center\"]"}],[1163175324,{"a":".col-sm-2"}],[1602008175,{"a":"a[href*=\"/publicidad.php?id=\"],\niframe[src*=\"://www.netpol.es/\"]"}],[416476587,{"a":"#layer_coupon"}],[280151292,{"a":"#ai_widget-2"}],[2038665114,{"a":".node-anuncio-megabanner"}],[1294820093,{"a":"[href=\"http://espanol.istockphoto.com/?esource=gi_es_home_3pack_istock_3\"] > .promo-hover"}],[1749859133,{"a":".addg,\n.titulo-publicidad"}],[525232526,{"a":"[href^=\"https://www.colex.es\"],\n[href^=\"https://www.nuevamutuasanitaria.es\"]"}],[535997578,{"a":"img[alt=\"http://interbenavente.es/pag/serviciosweb\"],\nimg[alt=\"http://www.ford.es/serviciopostventa/PromocionesPostventa2013\"],\nimg[alt=\"http://www.serviciosfunerarioszamoranos.com/\"],\nimg[alt=\"https://www.facebook.com/pages/Caprichos-Benavente/1151234814894029?fref=ts\"],\nimg[alt=\"https://www.facebook.com/zarabanda.regalos?fref=ts\"]"}],[1365108110,{"a":"#headerBanner,\n.bannerBlock"}],[1140649971,{"a":"#text-72,\na[href*=\"caixabank.es/\"],\na[href*=\"comprometidoscon.org/\"]"}],[1885914058,{"a":".car-insurance,\n.finance"}],[848490719,{"a":"#bn_vandyck"}],[1524166822,{"a":".commercial-up-full__wrapper,\n[id^=\"pc-div-gpt-ad_\"]"}],[1394608503,{"a":"#caja_1_derecha_17_0,\n#divderecha_1050,\n.caja_cuponisimo_slider300,\n.dcham2,\n.listaofertas"}],[1324298009,{"a":".textoPatrocinio,\n.vinculoPatrocinio"}],[658095748,{"a":"#text-10,\n#text-11"}],[1795428079,{"a":".adpos,\n.mujerhoy"}],[421949062,{"a":"#aside,\n#sidebar,\n[id^=\"djslider\"]"}],[597240039,{"a":"img[alt*=\"Banner\"]"}],[408699767,{"a":"#text-7 > .textwidget"}],[516711773,{"a":"#divderecha_1001,\n#divderecha_1007,\n#divderecha_1008,\n#divderecha_1020,\n#divderecha_1021,\n#divderecha_1055,\n#divderecha_1061,\n.banner_doscolum,\n.contenedor_widget_1col,\n.fondo_patrocicio"}],[710528951,{"a":"a[class*=\"sponsoredProductCard\"]"}],[849691412,{"a":".partenaire_simple,\n.partenaire_simple_home"}],[2005660581,{"a":".mega--desktop"}],[157234010,{"a":".mega1,\n.mega2"}],[1445694243,{"a":".ad-wrapper,\n.titleList.DestacadoBox.clearfix.ModuleSimple:last-child,\nA[href=\"http://www.premiercasino.es/redirect?provenanceCode=CONECTA5CASINO\"],\na[href=\"http://www.eltiempohoy.es/\"],\na[href=\"http://www.tiendagranhermano.com\"]"}],[1458444219,{"a":".roba1,\n.roba1_movil,\n.roba2,\n.roba2_movil"}],[1359872626,{"a":"#slider-wrapper,\n.lateral"}],[1778803179,{"a":".publi-sidebar-listado"}],[1306966156,{"a":".cad,\n.vp,\na[href^=\"http://www.fresalia.com/\"],\na[href^=\"http://www.fuegodevida.com/\"]"}],[1693334790,{"a":"#banner_superior,\n#banners_laterales"}],[1399253723,{"a":"#brand-carousel"}],[449913871,{"a":"article[id^=\"divAdserver\"]"}],[1931028183,{"a":"#enjuego"}],[1087020212,{"a":"a[href^=\"https://www.awin1.com/cread.php\"]"}],[89439937,{"a":"#decine21_widget_estrenos,\n.megabanner-container,\nimg[src=\"http://ficheros.publico.es/resources/cintillos/iberia-express.jpg\"]"}],[596281069,{"a":"#opciones > #patrocinio"}],[1081975870,{"a":"#horizotal-banners,\n#right-banners,\n#widget_banners"}],[302547375,{"a":".sponsors,\na[href=\"http://www.cyclosaltamirano.es/\"],\na[href=\"http://www.morellasingletracks.com/\"],\na[href=\"http://www.mybikenet.com/development/\"],\na[href=\"https://www.facebook.com/pages/BENIBIKES-Benidorm/177123992350243?fref=ts\"]"}],[585737712,{"a":".promo262x90"}],[99175633,{"a":".sevil-widget"}],[1641003064,{"a":"#z-sites-na,\n.logoadvertiser,\n.ob-p,\n.sp-add,\ndiv[data-item-syndicated=\"true\"]"}],[1397738196,{"a":"#kbg"}],[1834923961,{"a":".grid_24"}],[1911020466,{"a":"a[href=\"http://turismourense.com/index\"]"}],[912619222,{"a":"div[style=\"height:270px; padding: 10px 0;\"]"}],[1991147342,{"a":".g"}],[1870795804,{"a":".ads-block,\n.fw-container"}],[1020875650,{"a":".bg-banner"}],[1151586441,{"a":"#spBx"}],[1697980828,{"a":".ads_block"}],[942791710,{"a":"a[target=\"_blank\"][href*=\"aming.net\"],\na[target=\"_blank\"][href*=\"gaming.net\"]"}],[897447078,{"a":"a[class^=\"fasc\"]"}],[765426076,{"a":".ver-ahora"}],[2082789254,{"a":"#taboola_nota,\n.multimedia_taboola"}]]);

const hostnamesMap = new Map([["elcorreoweb.es",1329522392],["eldia.es",1055629979],["eleconomista.es",858164847],["elmundo.es",276914572],["eltiempo.es",1481828254],["epasatiempos.es",1336176393],["equipar.es",1558094581],["nicaraguahoy.info",1558094581],["futbolchile.net",1558094581],["famosateca.es",399692475],["force-download.es",1163175324],["foropolicia.es",1602008175],["freepik.es",416476587],["futbolretro.es",280151292],["gaceta.es",[280151292,2038665114]],["gettyimages.es",1294820093],["hoyaragon.es",1749859133],["iberley.es",525232526],["interbenavente.es",535997578],["interviu.es",1365108110],["irispress.es",1140649971],["estadiodeportivo.whitelabel.kelisto.es",1885914058],["lagacetadesalamanca.es",848490719],["laopiniondemalaga.es",1524166822],["laprovincia.es",1394608503],["larazon.es",1324298009],["laschicascalientes.es",658095748],["lavozdegalicia.es",1795428079],["lebrijadigital.es",421949062],["leganews.es",597240039],["livenumetal.es",408699767],["lne.es",516711773],["manomano.es",710528951],["meteoconsult.es",849691412],["miarevista.es",[2005660581,157234010]],["muyinteresante.es",[157234010,1458444219]],["mitele.es",1445694243],["noticiasmallorca.es",1359872626],["paginasamarillas.es",1778803179],["pajarracos.es",1306966156],["paxinasgalegas.es",1693334790],["pickinup.es",1399253723],["planetadeagostini.es",449913871],["pornstarsyfamosas.es",1931028183],["portalbici.es",1087020212],["publico.es",89439937],["dle.rae.es",596281069],["realbetisbalompie.es",1081975870],["ruedasgordas.es",302547375],["rumbo.es",585737712],["sevillainfo.es",99175633],["sport.es",1641003064],["supremacy1914.es",1397738196],["tallasgrandes.es",1834923961],["telecinco.es",1911020466],["todomercadoweb.es",912619222],["valencianews.es",1991147342],["yorokobu.es",1870795804],["zooplus.es",1020875650],["bandaancha.eu",1151586441],["fuerzasarmadas.eu",1697980828],["gamestorrents.fm",942791710],["pelis24.gratis",897447078],["seriesturcas.gratis",765426076],["elheraldo.hn",2082789254]]);

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
