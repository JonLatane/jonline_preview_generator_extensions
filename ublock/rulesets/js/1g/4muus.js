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

const argsMap = new Map([[2004395636,{"a":"#dynabar"}],[1675703562,{"a":".publi_horizontal"}],[709951136,{"a":"div[class*=\" ad-pos-\"],\ndiv[class^=\"AdContainer-\"],\ndiv[class^=\"Footer__FooterAnchorAd-\"],\ndiv[id^=\"home-native-ad-\"],\ndiv[id^=\"noticias_relacionadas\"],\ndiv[id^=\"related-news-\"][id$=\"-ad\"],\ndiv[id^=\"veja_tambem_pos_\"],\nfooter ~ div > .container-fluid > .anchor-ad,\nfooter ~ div > .container-fluid > button.anchor-button"}],[1897709322,{"a":"div[class^=\"AdContainer\"]"}],[1897023436,{"a":"#pub200x400,\n#pub234x60b"}],[153341736,{"a":".wpforo-ad"}],[1790089694,{"a":".sidebar > .encabezados:nth-child(2)"}],[1308275930,{"a":"#boxPubli2,\ndiv[style=\"float:right; position:relative; margin:-110px -247px 0 5px; width:300px; height:250px;\"],\ntable[width=\"336\"]"}],[2083593110,{"a":"#publicidade-invideo,\n.links-legais,\n.parceiros,\ndiv[id^=\"scroller\"]"}],[1597867800,{"a":"#banners_footer,\n.separabot2 > .centrado"}],[1551702851,{"a":".banner_fondo"}],[203069181,{"a":".body-wrap > div.c-sidebar.wp-manga"}],[720596371,{"a":".banner300b"}],[1447396366,{"a":".detalleftbanner,\n.m_add_one,\n.midtopadd,\n.rightbanner1"}],[893337537,{"a":".adsense_div,\n.cAdLatContainer,\n.cAdResponsiveInsideCardContainer,\n.cContainerAd"}],[1554829153,{"a":"center > p > a[target=\"_blank\"] > img"}],[2141198605,{"a":"center > a[target=\"_blank\"] > img"}],[1762015025,{"a":"#d_adsky"}],[1042185298,{"a":".billboardBanner,\n.container_16 > .billboardBanner + .clear + .spacer60,\n.fancybox-overlay,\n.supperBanner"}],[1237124276,{"a":".squareBanner"}],[459202694,{"a":".jumbotron"}],[945168800,{"a":".col-anu,\n.pub-btfm,\n.pub-mid,\n.pub-top,\np[class=\"isec i-news\"]"}],[1985216570,{"a":"div[style*=\"height:90px\"][style*=\"min-width: 728px\"]"}],[895471282,{"a":"span[style=\"border: solid #FAFAFA; border-left: 10px solid #DADADA; PADDING-LEFT: 5px; padding:5px; margin: 1px; float: right; width: 301px; height: 251px;\"]"}],[1121520901,{"a":"div[class^=\"contenedorPublicidad\"]"}],[423415240,{"a":"#contenido > div.bright > div[style=\"margin: 5px 0;\"],\n.box-publicidad"}],[1531159867,{"a":"#capaoverlay1"}],[1932003145,{"a":"#capa1,\n#closeX1"}],[1058395971,{"a":"#pop_upHI,\nimg[width=\"468\"]"}],[332793456,{"a":"#anuncio"}],[1083550110,{"a":"#adstab01"}],[146074576,{"a":".content-width.content-container.pub-table"}],[1944288320,{"a":".slice-ad-footer,\n[class^=\"bgApbContent\"]"}],[1191349538,{"a":"center > a[target=\"_blank\"] > img[style*=\"height:60px;\"],\ncenter > a[target=\"_blank\"][href^=\"http\"]:not([href^=\"https://www.gamezfull.com/\"])"}],[1791544274,{"a":".bg_flash"}],[951730317,{"a":"#BannerTopo,\n#Sky,\n#banner_vitrine_container,\n#detecta-adblock,\n#globocom,\n#linksPatGoogle,\n#pbright,\n#prePagina,\n#publicidade01,\n#superBanner,\n#widget_shopping_49051,\n.bi,\n.bstn-feed-ad,\n.container-adv,\n.glb-opec,\n.publicidade_c,\n.vitrine_banner,\ndiv[id^=\"banner_home\"],\niframe[src^=\"/dinamico/get_oas_advertisement/?\"],\nli[data-item-type=\"advertising\"]"}],[708193061,{"a":"#pub-banner-audima,\n#pub-shopping,\ndiv[class^=\"container-adv\"]"}],[1770718918,{"a":".adv-item"}],[926092596,{"a":"div[data-notice=\"Publicidade\"]"}],[314155888,{"a":".block--advertising,\n.block__subpane--advertising,\n.block__subpane--esp-pub,\n.publicidade,\n.teaser__submodule,\n[data-oglobo-advertising-format]"}],[1778270763,{"a":".middle-banner"}],[668904265,{"a":".banner-fix-cls"}],[1611181451,{"a":"#box-globomais"}],[98158837,{"a":"#div_banner728,\na[href^=\"http://grupolidertel.com/affiliates/\"]"}],[383049411,{"a":"#box_banner"}],[1024796072,{"a":"#ad_global_below_navbar"}],[236616655,{"a":"#header-top-banner"}],[572323285,{"a":"#floatLayer3,\niframe[src=\"http://inkanime.com/taboola.php\"]"}],[1929664218,{"a":".widget-area > div[id^=\"custom_html\"]"}],[977255618,{"a":"#banner_float,\n#new_ads"}],[247929785,{"a":"iframe[src^=\"//ads2.contentabc.com/\"]"}],[166305361,{"a":"#player > #ap"}],[1961977700,{"a":".wrapperBanner"}],[1343160253,{"a":"#TOPGLOBE"}],[697268957,{"a":"#promoHola,\n.sponsored-news"}],[2078710916,{"a":".banner_cubo_space"}],[1406384944,{"a":"div[class^=\"glx-slider-container-\"][style*=\"z-index:\"]"}],[2081137474,{"a":".promocines"}],[1957270701,{"a":".mainContent > div[style=\"text-align: center; font-size: 75%;\"],\nli[id^=\"post-\"] > div > div[style=\"text-align: center; font-size: 75%;\"],\nli[id^=\"post-\"] > div > div[style=\"text-align: center; font-size: 75%;\"] + a > img"}],[1030533725,{"a":"div[class^=\"banner-descarga\"]"}],[2017637649,{"a":"#publi"}],[1437809036,{"a":"#fg_popup,\n#photos > a[rel=\"nofollow\"],\n#publi2,\n#publi3"}],[1098776224,{"a":"#leaderboardPlaceholder,\n.ads125BackTexture,\n[style=\"height: 100px; padding: 0px;\"],\n[style=\"height: 125px; width: 125px; float: left; padding-left: 10px;\"],\n[style=\"height: 125px; width: 125px; margin-left: 10px; float: left; padding-right: 10px;\"],\n[style=\"height: 250px; padding: 0px;\"],\n[style=\"height: 600px; padding: 0px;\"],\n[style=\"height:100px;padding:0px;\"],\n[style=\"height:125px;width:125px;float:left;padding-left:10px\"],\n[style=\"height:250px;padding:0px;\"],\n[style=\"height:600px;padding:0px;\"],\n[style=\"height:90px;padding:0px;\"]"}],[1626142446,{"a":".header_top,\n[class^=\"list_table_banner\"]"}],[1238055755,{"a":".bnePEP"}],[2003320469,{"a":".bannerLibre,\n.mod-banner_300x50,\n.mod-banner_650,\n.mod-banner_650x150,\n.mod-banner_984,\n.navbar-ad-container"}],[1102032125,{"a":"#cab_publi,\n.moduletable"}],[1202438397,{"a":".navi_right,\n.topnavtd"}],[1554732988,{"a":"div[id^=\"index-banner300x250-\"]"}],[2111717161,{"a":".adspl"}],[1349941461,{"a":"iframe[height=\"105\"][width=\"700\"]"}],[1477391613,{"a":".adv-top"}],[737006571,{"a":"img[width=\"350\"][height=\"225\"]"}],[1782738702,{"a":"#banner_dir_cima,\n#temp_banner_left,\n#temp_banner_right,\n.banner320_270"}],[640323020,{"a":"a[href^=\"http://clk.tradedoubler.com/click?p\"]"}],[1972875541,{"a":"#cse-search-box + iframe[src],\n#pie"}],[1219760414,{"a":".adnet"}],[605844983,{"a":"#bottom-bar-floating"}],[111331827,{"a":"#contenedor"}],[238268062,{"a":".glidecontent"}],[207221078,{"a":".popup-adblocker"}],[1241165223,{"a":".game-page-sidebar"}],[1822453745,{"a":".banner-190,\n.g-4,\n.spu-bg,\n.spu-box,\n.spu-content"}],[1758775063,{"a":"#sidebar_top"}],[577467457,{"a":"#user-sidebar div.kau"}],[1773893661,{"a":"#fixedban"}],[1289778778,{"a":".banners_cab,\n.cont_banner300,\n.cont_banner468"}],[186280114,{"a":"#publicidad_frontpage_medio,\n#publicidad_superior,\n.banner_zona_9,\n.contenedor_publicidad_lateral"}]]);

const hostnamesMap = new Map([["estilourbanord.com",2004395636],["europafm.com",1675703562],["lasexta.com",1675703562],["exame.com",709951136],["minha.exame.com",1897709322],["expansion.com",1897023436],["expatsportugal.com",153341736],["extremotvplay.com",1790089694],["rojadirectaonlinetv.com",1790089694],["facilisimo.com",1308275930],["fadadosexo.com",2083593110],["tv.fakings.com",1597867800],["fcparma.com",1551702851],["fenixscan.com",203069181],["nartag.com",203069181],["file4go.com",720596371],["file4go.net",720596371],["filmixt.com",1447396366],["fisicalab.com",893337537],["fiuxy2.com",[1554829153,2141198605]],["mega-mkv.com",2141198605],["flyordie.com",1762015025],["folhadoslagos.com",[1042185298,1237124276]],["acritica.net",1237124276],["followmanga.com",459202694],["formulatv.com",945168800],["dragonbounbd.foroactivo.com",1985216570],["forocoches.com",895471282],["forodecostarica.com",1121520901],["foxmusicagratis.com",423415240],["futbol-envivohd.com",[1531159867,1932003145]],["peruanazotv.com",1932003145],["tv-onlinehd.com",1932003145],["vercanalestv1.com",1932003145],["futbolme.com",1058395971],["futeboltv.com",[332793456,1083550110]],["futeboltvgratis.com",[332793456,1083550110]],["aovivo.gratis",332793456],["gamerstek.com",146074576],["gamevicio.com",1944288320],["gamezfull.com",1191349538],["geovisites.com",1791544274],["globo.com",951730317],["epocanegocios.globo.com",[708193061,1770718918]],["revistaquem.globo.com",1770718918],["extra.globo.com",926092596],["oglobo.globo.com",314155888],["revistamonet.globo.com",1778270763],["valorinveste.globo.com",668904265],["vogue.globo.com",1611181451],["gsmspain.com",98158837],["guiadosquadrinhos.com",383049411],["hastlegames.com",1024796072],["hazmeelchingadofavor.com",236616655],["heavenmanga.com",572323285],["henaojara.com",1929664218],["hentaienesp.com",977255618],["hentaila.com",247929785],["hentaixtremist.com",166305361],["hipertextual.com",1961977700],["hispashare.com",1343160253],["hola.com",697268957],["holadoctor.com",2078710916],["holanime.com",1406384944],["hotelius.com",2081137474],["htforum.com",1957270701],["idescargar.com",1030533725],["imperiodefamosas.com",[2017637649,1437809036]],["animeflv.net",[2017637649,2111717161]],["impre.com",1098776224],["impulsonegocios.com",1626142446],["independentespanol.com",1238055755],["infobae.com",2003320469],["infobierzo.com",1102032125],["infocoches.com",1202438397],["infoescola.com",1554732988],["inkanime.com",[2111717161,1349941461]],["todoanimeshd.com",2111717161],["anime-latino.net",2111717161],["intereconomia.com",1477391613],["internetcine.com",737006571],["ipcdigital.com",1782738702],["ipjornal.com",640323020],["muacknet.ipower.com",1972875541],["it-swarm-es.com",1219760414],["iteramos.com",605844983],["preguntandroid.com",605844983],["jaffmisshwedd.com",111331827],["jornaldigital.com",238268062],["journaldemontreal.com",207221078],["juegos.com",1241165223],["juegosdechicas.com",1241165223],["ar.kairosweb.com",1822453745],["kidownload.com",1758775063],["kimovil.com",577467457],["knightnoscanlation.com",1773893661],["miauscan.com",1773893661],["taurusfansub.com",1773893661],["pelisplaygratis.info",1773893661],["lacartadelabolsa.com",1289778778],["lacerca.com",186280114]]);

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
