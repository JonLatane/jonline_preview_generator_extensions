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

const argsMap = new Map([[1641888862,{"a":"div[class=\"Anuncio1\"]"}],[1570918528,{"a":".td-header-sp-recs"}],[565885979,{"a":".publis-bottom,\ndiv[class^=\"right-player-\"]"}],[1237825011,{"a":".pautafacil_caracoltv_home,\n.zona_comercial"}],[1988971108,{"a":".label_publicidade"}],[1383472586,{"a":"div[class^=\"regBloc\"]"}],[326625814,{"a":".adsGeek"}],[1483786667,{"a":".d-grid > div[class*=\"Caja-\"],\n.navBarAd"}],[1146876120,{"a":"div[id^=\"pub-\"]"}],[814307814,{"a":".cloudbanner"}],[970479498,{"a":"a[href^=\"//mellowads.com\"]"}],[644867599,{"a":"#b-main-footer-cerrar,\n.banner-border,\n.box-adv,\n.publi183_90,\nbody .des-adv[data-name=\"advert\"]"}],[869635222,{"a":"#bannerbox"}],[2121196521,{"a":"#annonce_pub2"}],[403707250,{"a":".g-row-banner >div.g-col-sidebar,\ncenter > a[rel=\"nofollow\"] > img"}],[1132001038,{"a":".table_port_7"}],[623626933,{"a":".rodape-afiliados"}],[1179071519,{"a":"center > a[href][target=\"_blank\"] > img"}],[285768238,{"a":".wrap-banner"}],[151022217,{"a":"#sidebar > div[id^=\"text-\"]"}],[61555847,{"a":".aawp"}],[1053512265,{"a":"#centrado,\n#text-11,\na[href^=\"https://goo.gl\"] > img"}],[1264808510,{"a":".dfp-position,\ndiv[class^=\"wrapper_roba_\"]"}],[731484159,{"a":"#sidebar > [class=\"widget\"][style=\"min-height:250px; text-align: center;\"]"}],[2028809177,{"a":".adupee"}],[1233226667,{"a":".banner-sticky-wrapper,\niframe[src^=\"https://ads01.\"],\niframe[vsmsrc^=\"https://ads01.\"]"}],[1520389769,{"a":"div[style=\"width:300px;height:250px;display:block;clear:both;overflow:hidden\"]"}],[774171956,{"a":"div[class^=\"adsInfo__container\"]"}],[1677684353,{"a":".cards__card_ad-3gZy"}],[1793678149,{"a":".add990x90"}],[1392733487,{"a":"img[class^=\"responsive_ads_\"]"}],[1384361068,{"a":".ComentariosDD720x90,\n.Der350Portada,\n.FaceForDer160x600,\n.FaceForIzq160x600,\n.Izq350Portada,\n.Publitop,\ndiv[style=\"width:950px;margin-left:auto;margin-right:auto;\"]"}],[1846905584,{"a":"#poster2"}],[759542288,{"a":".analisis > div[class^=\"abc-\"]"}],[1561570570,{"a":".ads-300x600"}],[489660267,{"a":"#adsdiv"}],[1851825393,{"a":"#vlc"}],[950086979,{"a":".pub728x90"}],[1381061853,{"a":"body > p > span[style*=\"color:\"][style*=\"text-align:center\"]:not([class]):not([id])"}],[1706446631,{"a":".banner_doubleclick,\n.banner_konouz"}],[1455273490,{"a":"#banner600x30space,\n#bannerRight,\n#bannermiddle728x90"}],[222782598,{"a":".publiTop[id^=\"megabanner_\"],\n.roba,\ndiv[id*=\"publicidad\"]"}],[532576039,{"a":".ads-light"}],[278386881,{"a":".contentt"}],[579778130,{"a":"body > a[href^=\"https://bit.ly/\"][target=\"_blank\"][id]"}],[857382285,{"a":"#clickfakeplayer,\n.asgdc,\n.content > .load_modules,\n.custom-html-widget > a[rel=\"noopener noreferrer\"] > img"}],[974400278,{"a":".esv-pub-300-250"}],[1240965685,{"a":".banner_eco3,\n.cont_publicidad"}],[790993242,{"a":"#pRectGA"}],[1339111010,{"a":"[style=\"width: 330px; margin-top: 4px; margin-bottom: 4px; float: left; background-color: rgb(238, 240, 237); padding-top: 13px; padding-bottom: 5px; background-image: url(\"imagenes/bannerFichero/publicidadHorizontal.gif\"); background-repeat: no-repeat; background-position: center top;\"],\n[style=\"width:330px; margin-top:4px; margin-bottom:4px; background-color:#eef0ed; padding-top:13px; padding-bottom:5px; background-image:url(imagenes/bannerFichero/publicidadHorizontal.gif); background-repeat:no-repeat; background-position:top;\"]"}],[1489278876,{"a":".bg-ad"}],[1643613347,{"a":"#zonaComercial,\n.anuncioPrincipal,\n.contenedorAnuncio"}],[1245382708,{"a":".fn_googlePubliCenter,\n.fn_googlePubliLeft,\n.fn_googlePubliRight,\n.mp_publiContenedor,\n.publi_box"}],[464036751,{"a":".hide-div,\n.revUnit--placeholder"}],[1907936595,{"a":"#TB_iframeContent,\ntable[width=\"600\"]"}],[504906923,{"a":"#TB_overlay,\n#TB_window"}],[841049413,{"a":".aviso-inferior-trial,\ndiv[id^=\"ads_\"]"}],[244646840,{"a":".voc-advertising"}],[201897978,{"a":"#gebruiker_shadow"}],[2103255205,{"a":"#mensenwat"}],[577811014,{"a":"#homeBillboard,\n.article-adv,\n.article-body__adv,\n.comments-adv,\n.container > .homeNormalNoMobile,\n.container div[id^=\"homeMPU\"],\ndiv[class^=\"article-inline\"]"}],[908948595,{"a":"#publifooter,\ndiv[id*=\"publi_\"]"}],[808394551,{"a":"#pianoContainer,\n.box_pauta_top,\n.relpauta,\n.suscripciones,\ndiv[class^=\"Ads\"]"}],[460279150,{"a":"table[height=\"19\"][width=\"98%\"][id=\"AutoNumber4\"],\ntable[height=\"368\"][width=\"1000\"][id=\"AutoNumber1\"]"}],[1598862735,{"a":"#floatLayer[style],\na[href=\"http://elgrancine.com\"],\na[href=\"http://tuning-mix.com\"],\na[href^=\"http://elgrantv.com/\"][href*=\"Premium\"],\na[href^=\"http://www.verfutbol.net\"],\ntr[bgcolor=\"#0A0545\"] > td[valign=\"middle\"]"}],[1695650210,{"a":".BannerHorizontalCopiaTOP,\n.Cuadro300x250"}],[1579615362,{"a":".highlight-box-header-partner,\n.highlight-box-header-partner + div.tabs-gold,\ndiv[class^=\"advertising\"]"}],[1029564294,{"a":"#cta-button-container,\n#imarket6042,\n#paywallOfferSmall,\n.ad-giga,\n.publi_h"}],[1591036257,{"a":"#contactPlan,\n.minHeightLong,\n.site-header__promos-conte,\n.tp-backdrop"}],[13773213,{"a":".BottomLeft,\n.recomendados"}],[1318577062,{"a":"[data-ad-position-baldomero]:not([data-bbnx-module])"}],[117231640,{"a":"#topbar"}],[562265852,{"a":".banner_680"}],[2049890826,{"a":".adunit-googleadmanager"}],[1347979738,{"a":".BannersTop,\n.bannersTop"}],[352049070,{"a":".BnMid,\n.BnRig,\n.BnTop,\n.feature-taboola,\n.table.pb-2.border"}],[1495921657,{"a":".banner_blhome"}],[1854679424,{"a":".box-intext-ad"}],[1722060230,{"a":"#CajaFarox2,\n#adx_p,\n#contenedor_vivedescuentos,\na[href*=\"trk_cid\"]"}],[1504543985,{"a":".content > div[id^=\"el-02\"]"}],[1706025154,{"a":".big-square-inline,\n.intro-top,\n.snippet-parragraph > a[style^=\"display: inline-block; float: left;\"] > img,\ndiv[style=\"display: flex; justify-content: center; align-items: center;\"] > a"}],[2028312726,{"a":".intro-top > .mh-280"}],[1832894278,{"a":".emj-it-adv,\n.emj-it-advright"}],[647016452,{"a":".adsense"}],[1025782327,{"a":".publicidad"}],[210323226,{"a":"#cuerpo > div.derecha"}],[1739252279,{"a":"#overlayVid,\ndiv[class$=\"-game-ad\"]"}],[1016494547,{"a":".DvrCn"}]]);

const hostnamesMap = new Map([["calculadorasonline.com",1641888862],["canalbpv.com",1570918528],["canalporno.com",565885979],["caracoltv.com",1237825011],["catve.com",1988971108],["cdiscount.com",1383472586],["chochox.com",326625814],["cienradios.com",1483786667],["cifraclub.com",1146876120],["oglobo.globo.com",1146876120],["cinemainterativo.com",814307814],["cinemaniahdd.com",970479498],["solowarez.org",970479498],["clarin.com",644867599],["clb1.com",869635222],["clubic.com",2121196521],["cnnamador.com",403707250],["cocinayhogar.com",1132001038],["manualidadyhogar.com",1132001038],["plantasyhogar.com",1132001038],["coisosonthego.com",623626933],["comandotorrents.com",1179071519],["mkv-paste.com",1179071519],["pelispedia.tv",1179071519],["comidinhasdochef.com",[285768238,151022217]],["mujeres-desnudas.com",151022217],["comoacaba.com",61555847],["compucalitv.com",1053512265],["computerhoy.com",1264808510],["conmishijos.com",731484159],["criptonizando.com",2028809177],["cronista.com",1233226667],["cuantarazon.com",1520389769],["cuatro.com",[774171956,1677684353]],["factoriadeficcion.com",[774171956,1677684353]],["bemad.es",[774171956,1677684353]],["divinity.es",[774171956,1677684353]],["eltiempohoy.es",[774171956,1677684353]],["energytv.es",[774171956,1677684353]],["mtmad.es",[774171956,1677684353]],["radioset.es",774171956],["telecinco.es",[774171956,1677684353]],["uppers.es",774171956],["yasss.es",774171956],["cuerpomente.com",1793678149],["clara.es",1793678149],["historia.nationalgeographic.com.es",1793678149],["dade68.com",1392733487],["damepc.com",1384361068],["dealante.com",1846905584],["definicionabc.com",759542288],["depor.com",1561570570],["deportesmax.com",489660267],["iptvvall.com",489660267],["television-envivo.com",489660267],["deportesmax.info",489660267],["televall.website",489660267],["descargardvdrip.com",1851825393],["descargas2020.com",950086979],["torrentrapid.com",950086979],["tumejortorrent.com",950086979],["tvsinpagar.com",950086979],["descargasdd.com",1381061853],["destinia.com",1706446631],["diariolibre.com",1455273490],["diariovasco.com",222782598],["discoverybrasil.com",532576039],["doramashd.com",278386881],["doramasmp4.com",579778130],["dvdgayonline.com",857382285],["easyviajar.com",974400278],["economia3.com",1240965685],["elabueloeduca.com",790993242],["eladelantado.com",1339111010],["elchapuzasinformatico.com",1489278876],["elcolombiano.com",1643613347],["elcomercio.com",1245382708],["elconfidencial.com",464036751],["elcorillord.com",[1907936595,504906923]],["taringamp3.com",504906923],["teledeporteshd.com",504906923],["elcorreo.com",[841049413,244646840,201897978,2103255205]],["diariosur.es",[244646840,201897978,2103255205]],["laverdad.es",244646840],["larioja.com",[201897978,2103255205]],["abc.es",[2103255205,1025782327]],["elespanol.com",577811014],["vandal.elespanol.com",908948595],["elespectador.com",808394551],["elfolladero.com",460279150],["elgrantv.com",1598862735],["elimpulso.com",1695650210],["elnuevodia.com",1579615362],["elpais.com",1029564294],["elperiodico.com",1591036257],["elperiodicodearagon.com",13773213],["lacronicadebadajoz.elperiodicoextremadura.com",1318577062],["elrincondelmovil.com",117231640],["elrincondelsymbian.com",117231640],["htcmania.com",117231640],["nerdyfilmes.com",117231640],["saludalia.com",117231640],["cinefilmesonline.net",117231640],["sonidodance.net",117231640],["elsolonline.com",562265852],["eltiempo.com",2049890826],["eluniversal.com",1347979738],["eluniverso.com",352049070],["emagister.com",1495921657],["emedemujer.com",1854679424],["emol.com",1722060230],["empregovaga.com",1504543985],["financashoje.online",1504543985],["financasnow.online",1504543985],["enmimaquinafunciona.com",[1706025154,2028312726]],["iteramos.com",2028312726],["preguntandroid.com",2028312726],["entremujeres.com",1832894278],["escolhasegura.com",647016452],["escuchasmusica.com",[1025782327,210323226]],["expansion.com",1025782327],["goomusica.com",[1025782327,210323226]],["marca.com",1025782327],["mp3xd.mom",[1025782327,210323226]],["lastmusica.net",210323226],["espacioarcade.com",1739252279],["espornohd.com",1016494547]]);

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
