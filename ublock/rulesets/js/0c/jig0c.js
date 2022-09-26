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

const argsMap = new Map([[1389287696,{"a":".g-single"}],[104959203,{"a":"[href^=\"https://bit.ly/\"]"}],[1310371340,{"a":"[href^=\"https://velotax.com.co/\"]"}],[117231640,{"a":"#topbar"}],[1917282077,{"a":".anuncioAlt,\nimg[alt=\"ADR Formación\"]"}],[1684960226,{"a":"#radlinks,\n.gpt_300,\n.leaderboard-wrap"}],[1657323982,{"a":".textwidget"}],[1814749540,{"a":"#z_pub_inf_new,\n#z_pub_sup_new,\n.ads-superior,\n.pub_lat1_father,\n.pub_lat2_father,\n.pub_lat3_father"}],[626200912,{"a":"#tiquetesMasBaratos,\n.Widgetsliderintelecto,\n.contentBannerIntelecto,\n.intelectoslidercabecera"}],[600338066,{"a":".adcrt300x600,\n.revUnit--placeholder"}],[1831996944,{"a":"#custom_html-53,\n#custom_html-54,\n#publitopfondo,\n.fullwidthabanner,\n.fullwidthbanner-container"}],[2040505968,{"a":".adv_inline,\n.article-adv,\n.comments-adv,\n.publi_intext2,\na[href*=\"extramaduracion.es/\"],\na[href*=\"volcanoteide.com/\"],\np[style=\"color: #969696;font-family: Arial,Helvetica,sans-serif;font-size: 1rem;font-weight: 400;\"]"}],[1204242559,{"a":".pubbox"}],[851622738,{"a":".external-logos"}],[1605804108,{"a":".___-N"}],[698407509,{"a":".banner_box,\n.banner_box_p"}],[1277003139,{"a":"#en_nd_home_flat_2,\n#en_nd_home_flat_3"}],[793597109,{"a":".note-home-container--1-space"}],[1801434319,{"a":".publi-top"}],[760921612,{"a":".banner-a"}],[2072238390,{"a":".banner-b,\n.banner-c,\n.banner-d,\n.banner-e,\n.banner-f,\n.banner-g"}],[2044979231,{"a":".banner-h"}],[755055107,{"a":".c-bra"}],[1529968559,{"a":".ad02-obj"}],[401436359,{"a":"div[class^=\"adcont_\"]"}],[713535888,{"a":".banner_lat"}],[1485894057,{"a":"[href^=\"https://www.yara.com.ec/\"]"}],[1558285403,{"a":"#banner-ficha"}],[1504325379,{"a":".separator"}],[795575489,{"a":".publi-lateral"}],[1220548188,{"a":".board-tu-negocio"}],[843139059,{"a":"p[style=\"color: rgb(144, 144, 144); background-color: rgb(235, 235, 235);font-size: 12px;padding-left:5px;\"]"}],[876260772,{"a":".border-grey-100"}],[565170697,{"a":".bt_publicar_ecn"}],[628960183,{"a":".bannering"}],[192627080,{"a":"#bannerHorizontal,\ndiv[style=\"background-color:#FFFFFF;border-top:2px solid red; margin-bottom: 16px;\"],\ndiv[style=\"background-color:#ffffff;border-top:2px solid red; margin-bottom: 16px;\"],\ndiv[style=\"clear:both;width:100%;background-color: #EFEFEF;height:90px\"],\ndiv[style=\"clear:both;width:100%;background-color: #EFEFEF;height:90px;\"]"}],[1789066228,{"a":".stream-item-widget,\n.widget_wp_views"}],[870997271,{"a":"a[href^=\"https://esaschicas.com/rbs_banner.php?\"]"}],[336040159,{"a":".media-ajust-tablet-publi-top,\n.pub-2,\n.publi-foot"}],[1131683592,{"a":"#pave_haut"}],[421147015,{"a":".bloque_anun"}],[1867541802,{"a":"#mvp-wallpaper"}],[435554467,{"a":"#motor-home"}],[1936336508,{"a":"#f_find_bar"}],[1665882418,{"a":".bankimia,\n.retargetting,\nimg[class=\"ue-c-widget__sponsor\"]"}],[71914416,{"a":".patrocinio"}],[772751618,{"a":".cross-promo-bnr"}],[1836591838,{"a":"[id^=\"arcad-\"]"}],[514409164,{"a":".gtag"}],[1181025121,{"a":"td[style=\"font-family:Arial, Helvetica, sans-serif;font-size:9px;color:#efefef\"]"}],[1254177421,{"a":".pub-btf,\n.pub-mid,\n.pub-top"}],[1225512503,{"a":".adshare_belownav,\n.adshare_firstpost,\n.adshare_lastpost"}],[1191147928,{"a":"#notices"}],[105409213,{"a":"#posts > div > div > div[style=\"padding:0px 0px 0px 0px\"],\n.pbanner,\na[href*=\"www.amazon.es/\"]"}],[917488411,{"a":"#AutoNumber30,\n#div-300x250,\n#div-336x280_foro_footer,\n#div-336x280_respuesta_medio,\n#div-970x90,\n#div-970x90_respuesta,\n#div-970x90_respuesta_final,\na[href=\"http://goo.gl/NDrfcW\"]"}],[1840685855,{"a":"#ad_global_below_navbar,\ndiv[style=\"width:120px; height:600px;\"],\ndiv[style=\"width:970px; height:90px;\"]"}],[340073506,{"a":"[href^=\"https://roobet.com/\"]"}],[335447009,{"a":".btn_betplay"}],[515452128,{"a":".timer"}],[1480094406,{"a":"div[style=\"margin-top: -60px;\"]"}],[51243055,{"a":".banner-bajo-header"}],[1706562285,{"a":".back-top-banner"}],[1390720151,{"a":"[class^=\"angwp_\"]"}],[1180629894,{"a":"div[style=\"margin: 0 0 15px 0; overflow: hidden; position: relative; height: 0; padding-bottom: 25.39%;\"],\ndiv[style=\"margin: 0 0 15px 0; overflow: hidden; position: relative; height: 0; padding-bottom: 338.34%;\"],\ndiv[style=\"margin: 0 0 15px 0; overflow: hidden; position: relative; height: 0; padding-bottom: 344.09%;\"],\ndiv[style=\"margin: 0 0 15px 0; overflow: hidden; position: relative; height: 0; padding-bottom: 9.39%;\"]"}]]);

const hostnamesMap = new Map([["economia3.com",1389287696],["gasteizhoy.com",[1389287696,51243055]],["realidadsm.com",1389287696],["desdesoria.es",1389287696],["ecosdelcombeima.com",[104959203,1310371340]],["vercomicsporno.com",104959203],["ecuavisa.com",117231640],["spalumi.com",117231640],["educaplay.com",1917282077],["ehowenespanol.com",1684960226],["elbierzodigital.com",1657323982],["villavonoticias.com",1657323982],["futbolretro.es",1657323982],["elblog.com",1814749540],["elcolombiano.com",626200912],["elconfidencial.com",600338066],["elcucodigital.com",1831996944],["elespanol.com",2040505968],["diariodeavisos.elespanol.com",1204242559],["elespectador.com",851622738],["elimparcial.com",[1605804108,698407509]],["frontera.info",[698407509,760921612]],["elnacional.com",1277003139],["elnueve.com",793597109],["elonce.com",[1801434319,760921612,2072238390,2044979231]],["esdiario.com",[1801434319,336040159]],["rewisor.com",2044979231],["elpais.com",755055107],["elpatagonico.com",1529968559],["elperiodic.com",401436359],["elperiodicodeaqui.com",713535888],["elproductor.com",1485894057],["elrellano.com",1558285403],["elrincondelvinotinto.com",1504325379],["elsaltodiario.com",795575489],["eltiempo.com",1220548188],["eluniversal.com",843139059],["eluniverso.com",876260772],["emol.com",565170697],["ennaranja.com",628960183],["entornointeligente.com",192627080],["envilladelparque.com",1789066228],["envilladevoto.com",1789066228],["esaschicas.com",870997271],["esgentside.com",1131683592],["ohmirevista.com",1131683592],["esmtb.com",421147015],["esportmaniacos.com",1867541802],["estrenarvivienda.com",435554467],["estrenosdtl.com",1936336508],["moviesdvdr.com",1936336508],["expansion.com",[1665882418,71914416]],["elmundo.es",71914416],["faptitans.com",772751618],["fayerwayer.com",1836591838],["fichajes.com",514409164],["fitnesszona.com",1181025121],["formulatv.com",1254177421],["forobeta.com",1225512503],["forochicas.com",[1191147928,105409213]],["forocoches.com",[1191147928,917488411]],["foroparalelo.com",1840685855],["freeethereum.com",340073506],["freetether.com",340073506],["coinfaucet.io",340073506],["freebitcoin.io",340073506],["futbolred.com",335447009],["gameflare.com",515452128],["gamezfull.com",1480094406],["es.gearbest.com",1706562285],["gerente.com",1390720151],["girabsas.com",1180629894]]);

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
