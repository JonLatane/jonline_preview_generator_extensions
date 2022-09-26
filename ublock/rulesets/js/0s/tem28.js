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

const argsMap = new Map([[1480823236,{"a":".main > center > a[target=\"_blank\"] > img"}],[739463398,{"a":"#text-6.widget_text"}],[1335868438,{"a":"#playerads"}],[2065291534,{"a":".module_single_ads"}],[1687579467,{"a":"div[style^=\"width: 100%;\"][style*=\"align-items: center;\"]"}],[1381204264,{"a":"#stAd_MegaBoton1,\n.hpActualidad-IcoNorm2,\n.hpPrincipal-Cont2-Nav2,\n.hpVideos-Cont2-Cont6,\n.marcopublicidad320250,\ndiv[style=\"width:728px; height:90px; background-color:#000000; float:left\"]"}],[1759752700,{"a":".row > div.justify-content-center > a[target=\"_blank\"] > img,\na[href^=\"https://track.wg-aff.com/\"]"}],[773379936,{"a":".list > #postnativesingle"}],[2031510958,{"a":".bnfo"}],[1107122596,{"a":".popup"}],[516178267,{"a":"div[class^=\"publicidade\"]"}],[1390379588,{"a":"#theLayer"}],[2078301170,{"a":"img[width=\"336\"][height=\"250\"],\nimg[width=\"336\"][height=\"300\"]"}],[75048266,{"a":".facebook-ads-square,\nbody .banner-module"}],[406009127,{"a":"#Square_Island,\n.banner_miolo,\n.banner_publicidade_trends,\n.cidades_banner,\n.include_shopping,\n.materia_coluna,\n.r7-flex-adv__placeholder,\n.side-banner-container,\n.single-trend-island,\n.toolkit-ad-shell,\ndiv[id^=\"taboola-mid-article-category-\"],\ntd[align=\"center\"][height=\"110\"]"}],[919336449,{"a":".module-publicidad"}],[708439956,{"a":"div[style=\"width:300px;height:250px;\"]"}],[1191547903,{"a":".natureba-lazyloadingads"}],[689315509,{"a":"#divErroFundo"}],[1444120605,{"a":"div[id^=\"zonapublicidad\"]"}],[1058455529,{"a":".widget_et_ads"}],[756717572,{"a":".etiquetaPublicidadNueva,\n.marcoBannerGde,\ntd[style=\"height:110px;width:760px;padding-left:25px;padding-top:5px;\"]"}],[2125197855,{"a":"a[href^=\"https://www.deltafinanceiro.com.br/aff.php\"]"}],[1457896176,{"a":".box-fixed-ads"}],[467737363,{"a":".banner-home"}],[34889022,{"a":".filenium"}],[2069953301,{"a":".TPlayer > div.TPlayerTb > div > a[rel=\"nofollow\"]"}],[679228535,{"a":"#auto_banner"}],[242355919,{"a":"a[rel=\"nofollow\"] > img"}],[1134789087,{"a":"#video-right > .video-relacionado,\n.abbcn-footer,\n.banner-160x600"}],[1174095387,{"a":"#overlay-video,\n.ntv-disclaimer"}],[1442080608,{"a":".banner-inArticle,\n.single__footer-banner"}],[1640390635,{"a":".itfbppl_overlay"}],[29351896,{"a":"iframe[src^=\"https://adserver.juicyads.com/\"]"}],[1773426281,{"a":".ff-dad"}],[815327525,{"a":".an1,\n.an2,\n.an3,\n.nr1"}],[679589114,{"a":"#divBotaoDownload + div[id][style^=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: black; opacity: 0.8;\"]"}],[1171472413,{"a":"body > a[target=\"_blank\"]"}],[1691149940,{"a":"#leftpane,\n#rightpane"}],[512495235,{"a":".blochomeD > .blochomeDp,\n.blochomeIbanner,\n.internewnew,\n.publiD,\n.thenew > .newclients[style=\"margin-top:20px\"]"}],[631873576,{"a":".blAdd"}],[251279749,{"a":".lateral > aside[id^=\"custom_html-\"]"}],[641759551,{"a":"#fixed_ads"}],[1604656848,{"a":".post-content > p:empty:before"}],[1588851900,{"a":"#top-unit,\n.ad__slot,\n.temp-300x250-unit"}],[158666822,{"a":".at-addcontent,\n.at-addthumbnail,\ndiv[class^=\"left-menu_layout_adsense-\"]"}],[1720664518,{"a":"#sup,\n.s818,\nbody > #w > #f.f"}],[539316298,{"a":".full_banner"}],[800447387,{"a":"div[id=\"anuncio\"]"}],[265818384,{"a":".bloque_ads"}],[587585850,{"a":"#ptd_c_pubheader,\n#ptd_encabezado_degradado,\n#ptd_encabezado_publicidad"}],[1937164763,{"a":"#Pluginbarraa"}],[518852434,{"a":"a[href=\"https://www.teknofilo.com/sorteo-lg-g6/\"]"}],[142461120,{"a":".prime-banner"}],[966720856,{"a":"#publicidad-video"}],[1144679183,{"a":"#ctn-tgm-right"}],[717223345,{"a":".sidebar .banner"}],[782431094,{"a":".anime-pub,\ndiv[style=\"position:fixed; left:20%; bottom:0; width:732px; height:94px; z-index:99999; background:#3b5998; \"]"}],[1004248201,{"a":".vbanner,\n.vbanner2"}],[934715607,{"a":".samBannerUnit"}],[1206066642,{"a":".mybanner"}],[1245964800,{"a":"#myModal"}],[61187277,{"a":"a[href^=\"https://goo.gl/\"] > img"}],[284310121,{"a":"div[style=\"float:left;width:620px;height:250px;margin:auto;\"]"}],[1522507927,{"a":".gray[style=\"width:100%;height:98px;\"]"}],[765150270,{"a":".box-publi-left"}],[1553206479,{"a":"#movie-advertising"}],[1698516703,{"a":".bannerCENTER,\n.bannerTOP"}],[1661496783,{"a":".sticky-sidebar-container .m-desvio-ecommerce"}],[1738278234,{"a":".olPopup,\ndiv[class^=\"floatad-\"]"}],[348115029,{"a":"[class*=\"advertising\"]"}],[391829981,{"a":"[style=\"width: 748px; margin-bottom: 8px;\"]"}],[2038992072,{"a":"#footerWidgets,\n.taboola-container"}],[2113954270,{"a":"#banner1"}],[24752290,{"a":"#overlaysContainer,\n.sponsoredEvents,\ndiv[id$=\"ad_container\"],\ndiv[id*=\"sponsor\"]"}],[1062616960,{"a":"#topbar2"}],[1734618634,{"a":"a[href=\"http://www.brigtek.com\"],\na[href^=\"http://www.pokerstars.com/\"],\nimg[style=\"width: 125px; height: 125px;\"]"}],[1315877461,{"a":"a[href^=\"http://www.metodoroleta.com/\"]"}],[1671524152,{"a":"#banner_deslizante"}],[710467690,{"a":"#clck_ntv,\n#nuevo_publi,\niframe[src^=\"https://www.tuhentaionline.com/publi/\"]"}],[1963771739,{"a":".pub300x250"}],[2119198051,{"a":"#box-ads-tr,\n.pub160x600,\n.sidebar > div[class=\"widget mod-pubb\"],\ndiv[style=\"float:left;width:100%;height:275px;\"],\nli[style=\"width:100%;height:98px;\"]"}],[559175783,{"a":".sidebar-col #text-72,\n.sidebar-col #text-74,\n.sidebar-col #text-76"}],[1763794057,{"a":"div[class^=\"contenedorAdcentrado\"]"}],[906667994,{"a":".boxBanner,\n.main950"}],[312203687,{"a":"#r6f8,\nnoscript + [id^=\"r\"],\nscript + i[id^=\"r\"]"}],[1067691732,{"a":"div[style=\"float:left;width:100%;height:100px;\"],\ndiv[style=\"float:left;width:100%;height:90px;\"],\ndiv[style=\"width:620px;height:250px;margin:20px auto;\"]"}],[1140347553,{"a":"table[summary=\"banner\"]"}]]);

const hostnamesMap = new Map([["peliculasytv.com",1480823236],["animeytv.tv",1480823236],["seriesytv.tv",1480823236],["pelisr.com",[739463398,1335868438]],["popfilmeshd.net",1335868438],["pepeliculas.com",2065291534],["perfil.com",1687579467],["peru.com",1381204264],["playpaste.com",1759752700],["pornocarioca.com",773379936],["pornogratisdiario.com",2031510958],["portaldacidade.com",1107122596],["preparaenem.com",516178267],["programasfull.com",1390379588],["psicocode.com",2078301170],["psicologiaymente.com",75048266],["r7.com",406009127],["radiopanamericana.com",919336449],["rapifutbol.com",708439956],["receitanatureba.com",1191547903],["rededownload.com",689315509],["reforma.com",1444120605],["saberprogramas.com",1058455529],["saludalia.com",756717572],["sayrodigital.com",2125197855],["semana.com",1457896176],["series-br.com",467737363],["seriescoco.com",34889022],["seriesgato.com",2069953301],["seriesyonkis.com",679228535],["seriesypelis24.com",242355919],["serviporno.com",[1134789087,1174095387]],["pornburst.xxx",1174095387],["seudinheiro.com",1442080608],["seuseriado.com",1640390635],["sexomoda.com",29351896],["shmoop.com",1773426281],["significadoes.com",815327525],["significadoswords.com",679589114],["sinalpublico.com",1171472413],["solitarios-online.com",1691149940],["solowrestling.com",512495235],["somosche.com",631873576],["sonovinhasbr.com",251279749],["soy502.com",641759551],["soydemac.com",1604656848],["sporcle.com",1588851900],["stardeos.com",158666822],["submanga.com",1720664518],["superperolas.com",539316298],["supertelevisionhd.com",800447387],["aohdonline.info",800447387],["sxmanga.com",265818384],["xtraordinaryfansub.com",265818384],["ddhentaid.net",265818384],["tabascohoy.com",587585850],["taringamp3.com",1937164763],["teknofilo.com",518852434],["deportes.televisa.com",142461120],["television-envivo.com",966720856],["terra.com",1144679183],["tioanime.com",717223345],["todoanimes.com",782431094],["todocvcd.com",1004248201],["todopolicia.com",934715607],["torrentazos.com",1206066642],["torrentmegafilmes.com",[1245964800,61187277]],["torrentbrazil.org",61187277],["torrentrapid.com",[284310121,1522507927,765150270]],["tvsinpagar.com",[1522507927,1963771739,1067691732]],["tumejortorrent.com",[765150270,1963771739,2119198051]],["totaldescargas.com",1553206479],["toxico-pc.com",1698516703],["trendencias.com",1661496783],["vidaextra.com",1661496783],["tribogamer.com",1738278234],["tribunavalladolid.com",348115029],["trivela.com",391829981],["tuasaude.com",2038992072],["tudorondonia.com",2113954270],["eleconomista.es",2113954270],["tuenti.com",24752290],["tuga-filmes.com",[1062616960,1734618634,1315877461]],["piratatugas.net",[1062616960,1315877461]],["piratatuga.ws",1062616960],["tuhentaionline.com",[1671524152,710467690]],["jkhentai.net",1671524152],["mangamovil.net",1671524152],["tunovelaligera.com",559175783],["tusubtitulo.com",1763794057],["tvazteca.com",906667994],["tvportugalhd.com",312203687],["ultimahora.com",1140347553]]);

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
