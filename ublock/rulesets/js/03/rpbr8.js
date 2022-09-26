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

const argsMap = new Map([[331072894,{"a":".center,\n.placeholder"}],[2093465854,{"a":".banner_bienes_rosario_contenido,\n.banner_dinamic,\n.banner_inferior"}],[1794907075,{"a":".banner_sop,\n.banner_superior"}],[468296109,{"a":".banner--full"}],[577231396,{"a":".addblock"}],[1075323194,{"a":"[href^=\"https://www.continental-neumaticos.es/\"]"}],[1472852477,{"a":"#multiplier_banner_container"}],[1466324076,{"a":"[href^=\"http://www.mcsinformatics.net/\"]"}],[328484997,{"a":"a[href^=\"https://innyweakela.co/redirect?\"]"}],[1157659027,{"a":".afiliados"}],[2104688669,{"a":".sidebar > .widget.Image,\ndiv[class^=\"fixed-\"][class$=\"Sd\"]"}],[542621042,{"a":".widget.Image"}],[1687558507,{"a":"div[style*=\"background-image: url\"]"}],[2082541220,{"a":"[href^=\"https://www.binance.com/\"],\n[href^=\"https://www.bitcoinshoy.com/\"]"}],[1261212475,{"a":"div[style=\"font-family:Arial, Helvetica, sans-serif;font-size:9px;color:#666666\"],\niframe[src*=\"://supercore.adm-vids.com/video_offer?\"]"}],[879214980,{"a":"#espacio-teads,\n[class*=\"div-gpt-ad-\"]"}],[694777819,{"a":"[href^=\"http://www.intellywp.com/\"]"}],[1342695987,{"a":".TableWidget"}],[1127916629,{"a":"#widget_sp_image-2"}],[246374309,{"a":"#mundo-descuento,\n.baner300x250,\n.baner630x250,\n.baner960x50,\n.baners-medio-nota-ampliada"}],[1096860155,{"a":".cnt-publi"}],[1617877104,{"a":"div[style^=\"width: 728px;\"]"}],[991924474,{"a":"div[style=\"margin-bottom:1px; padding-bottom:1px; height:70px; margin-top:1px\"]"}],[367990192,{"a":".hide-for-small"}],[494023555,{"a":".banner--"}],[2144075883,{"a":".banner--megabanner"}],[1860206101,{"a":"#barraAvisoAds"}],[1295599662,{"a":".td-a-rec"}],[725277433,{"a":".pasli"}],[1781155925,{"a":"#top"}],[1417965897,{"a":".cienradios-ads"}],[1319638758,{"a":".floatingBottomAd"}],[1277411257,{"a":".box-adv"}],[1627568811,{"a":"#coverAds"}],[1215456721,{"a":".StickyCorner,\n.TopLeaderboard"}],[270719272,{"a":".arcad-container,\n[id^=\"arcad-feature\"]"}],[603287270,{"a":".rteright"}],[1761748678,{"a":"[class*=\"td-a-rec-id-\"]"}],[251731586,{"a":".cript-adlabel,\n[class*=\"cript-advanced-ads\"],\n[class*=\"cript-homepage-\"]"}],[1036724462,{"a":".banner-revista,\n.content-banner,\n.entry-box-banner"}],[514469602,{"a":"[href^=\"https://cryptopotato.com/ad/lumenswap\"]"}],[332793456,{"a":"#anuncio"}],[1696806021,{"a":"#megaSuperior_multisite,\ndiv[class^=\"adsGroupTop\"],\ndiv[class^=\"ads__ad_\"],\ndiv[class^=\"cards__card_ad-\"]"}],[1883243561,{"a":"a[href^=\"http://premiercasino.es/\"],\na[href^=\"https://premiercasino.es/\"]"}],[1273729195,{"a":".sidebar > #text-html-widget-11"}],[493683149,{"a":"img[src=\"http://logos.cdn.cxpublic.com/PAN_logo_38px.png\"]"}],[1236437875,{"a":".itau-banner,\n[href^=\"https://camaraarmenia.org.co\"]"}],[957586260,{"a":"[class^=\"content_gpt_caja\"]"}],[1215504727,{"a":"a[rel*=\"sponsored\"]"}],[467737363,{"a":".banner-home"}],[453046841,{"a":"[id^=\"diari-\"]"}],[1088514596,{"a":".sponsorship"}],[1272987754,{"a":".caja_bannersV"}],[580929539,{"a":".Banner"}],[588501302,{"a":".bnn"}],[1987132967,{"a":".anuncio"}],[980001241,{"a":".banneritem"}],[2049758550,{"a":"img[width=\"300\"]"}],[1265371527,{"a":"#bannerDiv,\n#gkRightBottom,\n#gkRightTop,\n.vc_align_left,\n.wpb_raw_html"}],[1090058988,{"a":"#lngtd_ad_video"}],[730302288,{"a":"#banner_header,\n#box-ads-tr,\n#box-ads-trailer,\n.box-publi-left,\n.centerBanner,\n.mod-pubb,\n.pub300x250,\n.pub728x90,\na[href=\"http://ul.to/ref/4037259\"],\na[onclick*=\"pop.redirect.adsjudo.com\"],\ndiv[style=\"z-index:98;width:570px;height:400px;position:absolute;top:0px;left:0px;\"],\nli[style=\"width:100%;height:98px;\"]"}],[934715607,{"a":".samBannerUnit"}],[1297259279,{"a":"#banner-superior"}],[823586905,{"a":"#contiene_orejeras"}]]);

const hostnamesMap = new Map([["bernabeudigital.com",331072894],["bienesrosario.com",[2093465854,1794907075]],["rosariogarage.com",1794907075],["bigbangnews.com",468296109],["bikezona.com",577231396],["bimotos.com",1075323194],["binary.com",1472852477],["blanesaldia.com",1466324076],["blog-peliculas.com",328484997],["mangas-en-pdf.blogspot.com",1157659027],["novelasromanticash.blogspot.com",2104688669],["reconquistanoticias.blogspot.com",[542621042,1687558507]],["ladefensadigital.com",542621042],["xanateach.blogspot.com",2082541220],["boardzona.com",1261212475],["bolivia.com",879214980],["colombia.com",879214980],["buenaventuraenlinea.com",694777819],["buscamultas.com",1342695987],["businesscol.com",1127916629],["cadena3.com",246374309],["cadenaser.com",1096860155],["calculadora-de-derivadas.com",1617877104],["calculadora-de-integrales.com",1617877104],["canalchic.com",991924474],["canalciclismo.com",367990192],["castellonplaza.com",[494023555,2144075883]],["valenciaplaza.com",494023555],["alicanteplaza.es",494023555],["cerebriti.com",1860206101],["chacodiapordia.com",1295599662],["eladelantado.com",1295599662],["periodismo.com",1295599662],["tumbaabierta.com",1295599662],["ultimahoraec.com",1295599662],["pcpro.es",[1295599662,2049758550]],["chacohoy.com",725277433],["corrienteshoy.com",725277433],["chathispano.com",1781155925],["cienradios.com",1417965897],["cifraclub.com",1319638758],["clarin.com",1277411257],["clipwatching.com",1627568811],["coin360.com",1215456721],["comutricolor.com",270719272],["contextoganadero.com",603287270],["criptoinforme.com",1761748678],["criptonoticias.com",251731586],["cronista.com",1036724462],["cryptopotato.com",514469602],["cualesmiip.com",332793456],["cuatro.com",[1696806021,1883243561]],["factoriadeficcion.com",1696806021],["bemad.es",1696806021],["divinity.es",1696806021],["energytv.es",1696806021],["mtmad.es",1696806021],["niusdiario.es",1696806021],["telecinco.es",[1696806021,1883243561]],["uppers.es",1696806021],["yasss.es",1696806021],["cuyonoticias.com",1273729195],["cdn.cxpublic.com",493683149],["dataifx.com",1236437875],["depor.com",957586260],["desarrollowp.com",1215504727],["microsiervos.com",1215504727],["supercpps.com",1215504727],["destinonegocio.com",467737363],["diaridesabadell.com",453046841],["diarideterrassa.com",453046841],["diariocordoba.com",1088514596],["diariocostadelsol.com",1272987754],["diariolagrada.com",580929539],["globalasia.com",580929539],["marketingregistrado.com",580929539],["prensa.com",580929539],["diariolaprovinciasj.com",588501302],["infofueguina.com",588501302],["pilaradiario.com",588501302],["diarioresponsable.com",[1987132967,980001241]],["elplural.com",1987132967],["esmtb.com",1987132967],["diariotextual.com",[2049758550,1265371527]],["hortanoticias.com",2049758550],["discogs.com",1090058988],["divxatope.com",730302288],["divxatope1.com",730302288],["newpct.com",730302288],["newpct1.com",730302288],["torrentrapid.com",730302288],["tumejortorrent.com",730302288],["doncolombia.com",934715607],["donlgbt.com",1297259279],["economia3.com",823586905]]);

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
