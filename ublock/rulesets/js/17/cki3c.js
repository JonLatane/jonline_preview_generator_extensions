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

const argsMap = new Map([[1594875690,{"a":".btnads,\n.pfake"}],[1194432014,{"a":".box"}],[672962831,{"a":"#fakeplayer"}],[1410838149,{"a":"#banner990,\n#bannerMobile01,\n#bannerMobile02,\n#bannerMobile03,\n#bannerScreen01,\n#bannerScreen02,\n#bannerScreen03,\n#div_blockTop_1,\n.ark-ad-block,\n.d-xs-none.d-xxl-flex"}],[2034757352,{"a":".bg-ads-spac"}],[876118331,{"a":".hustle-popup"}],[1351821229,{"a":".advertising"}],[1023722412,{"a":".epl-space"}],[1593079122,{"a":"a[href*=\"wg-aff.com/click?\"]"}],[674916106,{"a":"[href^=\"https://record.secure.acraffiliates.com/\"]"}],[2001913552,{"a":"#ad-leaderboard__container,\n#widget_difusion"}],[177373440,{"a":"div[class*=\"banner-set\"]"}],[445167945,{"a":".Txt_PROMOCIONES,\n.Txt_Promociones,\n.Txt_promoclaro,\n.Txt_promomovistar,\n.Txt_promotigo"}],[212572729,{"a":".stream-item"}],[2138799117,{"a":"[onclick*=\"'page' : '/virtual/Ad/\"]"}],[1385978239,{"a":"#AdsTextHomeCenter,\n#AdsTextHomeMultiple,\n[class^=\"pu-\"],\n[id^=\"pu-\"]"}],[948600384,{"a":".c-banner-webcams,\n.c-webcams"}],[1314492411,{"a":"[class*=\"code-block-\"]"}],[565104379,{"a":"#wallpaper,\n.head-wrap-out"}],[760177045,{"a":"[id^=\"frame-div-gpt-ad-\"]"}],[1466495104,{"a":"#zonaavisos,\n.container_publicidad"}],[2069776713,{"a":".comprabilletes"}],[775933062,{"a":".loading-add"}],[1696998940,{"a":".barra-megabanner-tp,\n.widget-sdb-publi,\n.widget-widget_this_theme_publi_text"}],[1769923511,{"a":"#rev_slider_1_1_wrapper"}],[1454838467,{"a":".banner_bienes_rosario,\n.banner_centro_inf"}],[1303007637,{"a":"td[style=\"color:#666666; font-size:11px; padding:2px;\"]"}],[1275583604,{"a":"a[href^=\"https://telelatinotv.page.link/\"]"}],[330833095,{"a":".externo,\na[href*=\".leadzutw.com/\"]"}],[1982452767,{"a":".a728"}],[1408843075,{"a":".abcn-footer"}],[1023706450,{"a":".ntv-disclaimer,\n[class*=\"r-iframe\"],\n[class*=\"related-sites\"]"}],[1122249936,{"a":".insterstitial,\n.leaderboard,\n.rectangle"}],[1806621523,{"a":".code-block[style^=\"margin: 20px auto;\"]"}],[1798587911,{"a":"[href^=\"/clickb.php\"]"}],[612388757,{"a":"div[id^=\"article_ads\"],\ndiv[id^=\"list_ads\"]"}],[2085386663,{"a":"#anuncio_pancarta_campaign"}],[433924741,{"a":"#text-52,\n.ad3,\n.ad4,\n.ad5,\n.ad6"}],[62877394,{"a":".ad2"}],[1096791740,{"a":".oxy-modal-backdrop"}],[1542468891,{"a":".it-ad,\n.it-ad-wrapper"}],[117560777,{"a":".advertisement + .tborder,\n[href^=\"https://secretovalencia.com/\"],\n[href^=\"https://www.hescort.com/\"],\n[href^=\"https://www.mileroticos.com/\"],\na[href*=\"http://www.adcean.com/\"],\nmarquee"}],[1789321790,{"a":"[href*=\"quest.com/\"],\n[href^=\"https://www.apexsql.com/\"]"}],[84907662,{"a":"#pub_sup"}],[2138458317,{"a":"#imCell_10,\n#imCell_117,\n#imCell_119,\n#imCell_120,\n#imCell_180,\n#imCell_182,\n#imHeader_imHTMLObject_27_wrapper"}],[1075121016,{"a":"div[style=\"width:300px; height:250px; margin:0px auto;\"]"}],[1015235309,{"a":".containerBannerDesplegable,\n.mainContainerBanner"}],[1512824227,{"a":"#a-insd,\n.adspots"}],[2132953721,{"a":".e3lan,\na[href*=\"://clk.tradedoubler.com/click?\"],\na[href^=\"//clk.tradedoubler.com/click?\"]"}],[1154858648,{"a":".tlf-ad"}],[457481920,{"a":"#author-banner,\n#blog-banner,\n#header-banner,\n#highlights-banner,\n#text-69,\n#text-86,\n#text-87"}],[1401325145,{"a":".ad_space_large,\n.rapid_banner_home,\n.rapid_banner_sidebar"}],[142461120,{"a":".prime-banner"}],[1169515537,{"a":".tno-banner"}],[1533842636,{"a":".pInVistix,\n.rightBarBannersx"}],[1002855133,{"a":"#slimbanner,\ndiv[style^=\"overflow: hidden\"]"}],[1148024195,{"a":"#mbanner"}],[1986631384,{"a":"a[href*=\"://psicotecnicos2x.es/\"],\na[href=\"http://www.sespol.es\"]"}],[1446718675,{"a":"#chat-show"}],[1796198292,{"a":".fan,\n.intensive-add"}],[2144987269,{"a":".slide"}],[264301682,{"a":"img[width=\"336\"]"}],[1132276428,{"a":"#bannerbajo"}],[1758313736,{"a":"#interstitial_container"}]]);

const hostnamesMap = new Map([["peliculasaudiolatino.com",1594875690],["pelisadicto.com",1194432014],["pelishouse.com",672962831],["perfil.com",1410838149],["exitoina.perfil.com",2034757352],["periodicoeldiario.com",876118331],["periodistadigital.com",1351821229],["realovirtual.com",1351821229],["tribunaavila.com",[1351821229,1758313736]],["tribunaburgos.com",[1351821229,1758313736]],["tribunaleon.com",[1351821229,1758313736]],["tribunapalencia.com",[1351821229,1758313736]],["tribunasalamanca.com",[1351821229,1758313736]],["tribunasegovia.com",[1351821229,1758313736]],["tribunasoria.com",[1351821229,1758313736]],["tribunavalladolid.com",[1351821229,1758313736]],["tribunazamora.com",[1351821229,1758313736]],["peru.com",1023722412],["playpaste.com",1593079122],["pokertube.com",674916106],["pons.com",2001913552],["portalfruticola.com",177373440],["practisistemas.com",445167945],["profesionalreview.com",212572729],["pt-mexico.com",2138799117],["puromarketing.com",1385978239],["putalocura.com",948600384],["puupnewsapp.com",1314492411],["ramenparados.com",565104379],["rateyourmusic.com",760177045],["reforma.com",1466495104],["renfe.com",2069776713],["reporteindigo.com",775933062],["republica.com",1696998940],["revistagmgastronomia.com",1769923511],["rosariogarage.com",1454838467],["sailingzona.com",1303007637],["selafollan.com",1275583604],["seriesgato.com",330833095],["seriesgrey.com",1982452767],["serviporno.com",[1408843075,1023706450]],["muchoporno.xxx",1023706450],["sipse.com",1122249936],["skdesu.com",1806621523],["skylinewebcams.com",1798587911],["slidesgo.com",612388757],["slumi.com",2085386663],["smnoticias.com",[433924741,62877394]],["smnoticias.info",[433924741,62877394]],["costacadizcomunicacion.es",62877394],["softoniclabs.com",1096791740],["somosxbox.com",1542468891],["spalumi.com",117560777],["sqlshack.com",1789321790],["supercontable.com",84907662],["superligatv.com",2138458317],["tabascohoy.com",1075121016],["tandildiario.com",1015235309],["teatroporno.com",1512824227],["teknofilo.com",2132953721],["telefe.com",1154858648],["telesemana.com",457481920],["televisa.com",1401325145],["deportes.televisa.com",142461120],["theobjective.com",1169515537],["tnaflix.com",1533842636],["todoblaugrana.com",1002855133],["todocvcd.com",1148024195],["todopolicia.com",1986631384],["todorelatos.com",1446718675],["tokyvideo.com",1796198292],["torrentesx.com",2144987269],["transponder1200.com",264301682],["tresubresdobles.com",1132276428]]);

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
