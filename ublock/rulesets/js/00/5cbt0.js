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

const argsMap = new Map([[2045812567,{"a":"#newad,\ndiv.embed[data-url=\"/fkplayer/player.php\"]"}],[580929539,{"a":".Banner"}],[37540475,{"a":"#ventana-flotante"}],[1606273739,{"a":"#banner_160_600,\n.banner300x160"}],[558287800,{"a":".banner300x250"}],[1261823031,{"a":".center-banner"}],[1272931712,{"a":"#fullpageadd"}],[1534543635,{"a":"#homepagetop2,\n#homepagetop3,\n#homepagetop5,\n#homepagetop_side,\n#r_sidebar"}],[1080486424,{"a":".advs1,\n.advs2,\n.advs3"}],[462533464,{"a":"#headerabajo,\n.aviso220x90,\n.aviso300x250,\n.aviso728x90"}],[1088640119,{"a":"#mainrightbottom,\n#mainrightmiddle,\n#mainrighttop"}],[803168126,{"a":"#ctn-content-sharer-bottom,\n#ctn-content-sharer-top,\n#dual-experience-tabs,\n#live-alerts,\n#mod-adv,\n#trr-bar,\n.ctn-tgm"}],[1109736296,{"a":".ctn-tgm-bottom-holder"}],[160972530,{"a":".publicidad_728x90"}],[1481872279,{"a":"#mw-panel > .advertisements"}],[2106417669,{"a":".nat-publi,\n.nuevos-anuncios"}],[220592289,{"a":".avm,\n.episodeList > div > div:empty,\n.episodeList > div > div[style=\"float: left;\"]"}],[1369225542,{"a":"#pauta-top-home"}],[636181755,{"a":"#elementor-popup-modal-31279,\n.elementor-location-header div.elementor-widget-slides"}],[1899513991,{"a":".pauta"}],[1626088585,{"a":"body .td-header-style-10 .td-g-rec-id-header .adsbygoogle"}],[576477337,{"a":".buttons-p"}],[2108654244,{"a":".alert-message > #fake"}],[23324516,{"a":"center > p > a[href][target=\"_blank\"] > img"}],[420435366,{"a":"[id^=\"publicidade_\"]"}],[1139369910,{"a":"#custom_html-26"}],[1197045047,{"a":"div[class^=\"GoogleDfpAd-\"]"}],[1686042246,{"a":"#html1"}],[1832503253,{"a":"div[style=\"border:solid 1px black;text-align:center; margin:10px 0 10px 0;\"]"}],[498298103,{"a":".MuiGrid-container > div.MuiGrid-item > div.HalfPage > div[style=\"min-height: 250px;\"],\ndiv[style=\"height: 250px; width: 100%; display: block;\"],\ndiv[style=\"height: 90px; width: 100%; display: block;\"],\ndiv[style=\"height:250px;width:100%;display:block\"]"}],[251791330,{"a":"#dst_pub_728"}],[623360642,{"a":"#eyeDiv,\na[href^=\"http://adserver.adtech.de/\"]"}],[539225009,{"a":"#opec,\n.slb0"}],[740238928,{"a":".publicidad_start_post"}],[1298820101,{"a":"body ins.adsbygoogle"}],[1748384041,{"a":".inside-right-sidebar > aside[id^=\"custom_html-\"],\n.site-content > div[style=\"height:300px\"]"}],[1924230865,{"a":".Sright > .widgets > .akuma-widget,\nimg[src^=\"/wp-content/uploads/ads/\"]"}],[1384748559,{"a":"#framePopUp,\n#header-banner468,\n#inPopUp,\n.post-outer > div[style]:not([class]):not([id]) a"}],[267090003,{"a":".ad_featured"}],[1105507481,{"a":"#widget_sp_image-2,\na[href*=\"goo.gl\"] > img"}],[440832881,{"a":"#NEWS_BODY"}],[1400062229,{"a":"#GLOBAL_BD_TOP"}],[621867678,{"a":".news-item > div.visible-md.visible-lg"}],[31771186,{"a":".publi:not(.video-intext)"}],[1517132715,{"a":"#text-3"}],[2125972881,{"a":".jeg_midbar"}],[1272816100,{"a":"iframe[data-glx][style*=\"z-index\"]"}],[361592347,{"a":"#radioisekai"}],[1982452767,{"a":".a728"}],[1652666135,{"a":".a160"}],[1944206897,{"a":".row-ads,\na[href^=\"https://goo.gl/\"][rel=\"noopener\"] > img,\na[href^=\"https://www.aniclube.com\"],\nbody > div[id][style*=\"position: fixed\"][style*=\"z-index\"][style*=\"height:\"][style*=\"height:\"]:not(#container)"}],[1135833273,{"a":".pbl"}],[174611125,{"a":".google-ima-html5-preroll-plugin"}],[1697641599,{"a":"#publi1,\n.publi3,\n.publi5,\n.publiRoba"}],[50996455,{"a":".publi2"}],[812575126,{"a":".openx_afterafter,\n.openx_postinside728x90dos,\n.post_wrap_kmn"}],[1152684925,{"a":"body > section.gnBig"}],[1913867588,{"a":".boxbanner_notaterminal2,\ndiv[style=\"width:728px;height:90px;margin:0 auto;\"],\ndiv[style=\"width:728px;height:90px;margin:0 auto;padding: 0 0 5px 0;\"]"}],[723441167,{"a":"#publi_3columnas,\n.banner_sup,\n.publi-vertical,\n.slider-producto"}],[1704234650,{"a":".publi"}],[815584778,{"a":".ms_ga.dblock"}],[416669350,{"a":"a[href^=\"http://atvon.ourtoolbar.com\"]"}],[2103306674,{"a":".ddl > ul > li.slide"}],[1347941781,{"a":"#bannerTop,\n.adpause,\n.mod_ad_top,\n.mod_blanco,\nmain[class] > div > aside.s1ksqqi8-2"}],[863300656,{"a":".mod_roba"}],[1391422957,{"a":".af-adsense"}],[1330470202,{"a":".ad-boton-full-mega"}],[1116213899,{"a":".zonaGoogle"}],[1257530621,{"a":"#generic-btn-premium"}],[2121526380,{"a":".ad-cen,\ndiv[class^=\"ad ad-lat\"]"}],[1467076855,{"a":".content > #el-02"}],[1717318471,{"a":"a[href^=\"https://goo.gl/\"][rel=\"nofollow\"] > img"}],[772946323,{"a":".publicidad-topmenu"}],[1277985576,{"a":".sidebar > div[id^=\"custom_html-\"]"}],[20665832,{"a":"div[class$=\"b300x250\"]"}],[117809958,{"a":".am-slot,\n.margin-banner-menu"}],[37244566,{"a":"#text-html-widget-15"}],[1754977489,{"a":"#ads-home,\n#ads-title,\n#ads-top"}],[536645952,{"a":".exo_wrapper"}],[266689607,{"a":".sidebar #HTML5,\n.sidebar #Image1"}],[1127646274,{"a":"#floatLayer2"}],[1549807582,{"a":".GoogleDfpAd-Float-Content"}],[987261809,{"a":".boxbanner_container"}],[1115189889,{"a":".adBackground,\n.textPublicidade"}],[1221204895,{"a":"#banner-topo,\n#direita,\n#newsletter"}],[815703501,{"a":".tw-ads"}],[788107238,{"a":"#banners_header,\n.c-s > div:not([class]):first-child,\n.cnt-publi,\n.marketplace2"}],[1708226383,{"a":"#footer"}]]);

const hostnamesMap = new Map([["filmesonlinehd7.cc",2045812567],["gshort.cf",580929539],["gigadownloads.co",580929539],["elreloj.com",580929539],["tvcanales.cf",37540475],["jaffmisshwedd.com",37540475],["liketvw.com",37540475],["televisiongratishd.com",37540475],["tvplusgratis.com",37540475],["xnalgas.com",37540475],["123.cl",[1606273739,558287800]],["autocity.com",[558287800,1116213899]],["13.cl",1261823031],["cambio21.cl",1272931712],["cdf.cl",1534543635],["lanacion.cl",1080486424],["lared.cl",462533464],["mega.cl",1088640119],["terra.cl",[803168126,1109736296]],["terra.com",1109736296],["tvn.cl",160972530],["wikicharlie.cl",1481872279],["masmusicacristiana.club",2106417669],["animeflv.co",220592289],["elpais.com.co",1369225542],["rollingstone.com.co",636181755],["elheraldo.co",1899513991],["eusouandroid.co",1626088585],["gnula.co",576477337],["goovie.co",2108654244],["gratisprogramas.co",23324516],["legendas.co",420435366],["pelis24tv.co",1139369910],["shock.co",1197045047],["sportzonline.co",1686042246],["sportsonline.to",1686042246],["01net.com",1832503253],["1001juegos.com",498298103],["3djuegos.com",[251791330,623360642]],["acidadeon.com",539225009],["actiludis.com",740238928],["adslayuda.com",1298820101],["ahount.com",1748384041],["akumanimes.com",1924230865],["allsoftwarefull.com",1384748559],["andro4all.com",267090003],["androidaba.com",1105507481],["androidayuda.com",[440832881,1400062229,621867678]],["gamerzona.com",[440832881,1400062229,621867678]],["hardzone.es",[440832881,1400062229,621867678]],["movilzona.es",[440832881,1400062229]],["softzone.es",[440832881,1400062229,621867678]],["tabletzona.es",[440832881,1400062229]],["redeszone.net",[440832881,1400062229]],["adslzone.tv",[440832881,1400062229,621867678]],["adslzone.net",1400062229],["androidsis.com",[31771186,1517132715]],["easydown11.wordpress.com",1517132715],["animeactua.com",2125972881],["animeblix.com",1272816100],["animefenix.com",361592347],["animeid.com",[1982452767,1652666135]],["elanimeflv.com",1982452767],["inkanime.com",1982452767],["jkanimeonline.com",1982452767],["peliculasytv.com",1982452767],["animeflv.net",[1982452767,1652666135]],["elanimeonline.net",1982452767],["animeyt.org",1982452767],["animeytv.tv",1982452767],["seriesytv.tv",1982452767],["anime-latino.net",1652666135],["animeskai.com",1944206897],["anitoc.com",1135833273],["enginepassion.com",1135833273],["mangalong.com",1135833273],["mangaready.com",1135833273],["mistermanga.com",1135833273],["motornk.com",1135833273],["otakuteca.com",1135833273],["recipesnk.com",1135833273],["worldmangas.com",1135833273],["anitubebr.com",174611125],["antena3.com",[1697641599,50996455]],["marca.com",[50996455,1704234650]],["antronio.com",812575126],["aovivonatv.com",1152684925],["aristeguinoticias.com",1913867588],["as.com",[723441167,1704234650]],["cadenaser.com",[1704234650,788107238]],["cincodias.com",1704234650],["destinia.com",1704234650],["elpais.com",1704234650],["lavozlibre.com",1704234650],["lawebdelprogramador.com",1704234650],["soydemac.com",1704234650],["desdelinux.net",1704234650],["asialiveaction.com",815584778],["assistatvonline.com",416669350],["atomtt.com",2103306674],["atresplayer.com",[1347941781,863300656]],["europafm.com",863300656],["aulafacil.com",1391422957],["auto10.com",1330470202],["awdescargas.com",1257530621],["bebesymas.com",2121526380],["trendenciashombre.com",2121526380],["bellareceitas.com",1467076855],["diariodecasamento.com",1467076855],["empregovaga.com",1467076855],["flashreceitas.com",1467076855],["grandnoticias.com",1467076855],["modaestiloeafins.com",1467076855],["portalmundocurioso.com",1467076855],["receitasabores.com",1467076855],["turismoeviagem.com",1467076855],["vidadeatletas.com",1467076855],["tecword.info",1467076855],["blotz.me",1467076855],["belezaedieta.net",1467076855],["blogdatecnologia.net",1467076855],["culinariadochef.net",1467076855],["eusaudavel.net",1467076855],["gameszoom.net",1467076855],["manualdamulher.net",1467076855],["cardapiodavovo.online",1467076855],["financashoje.online",1467076855],["financasnow.online",1467076855],["globalnoticias.online",1467076855],["noticiasfitness.online",1467076855],["noticiastecnologica.online",1467076855],["receitasdamamae.online",1467076855],["tudoemprego.online",1467076855],["vivercomsaude.online",1467076855],["muitasreceitas.site",1467076855],["receitasdomundo.site",1467076855],["tecnologiaonline.site",1467076855],["smartdoing.tech",1467076855],["fazendorendaextra.xyz",1467076855],["manchetehoje.xyz",1467076855],["bestfilmeshd.com",1717318471],["g1novelas.org",1717318471],["bibliatodo.com",772946323],["bibliotecahispana.com",1277985576],["bigbangnews.com",20665832],["bioguia.com",117809958],["blogdoiphone.com",37244566],["androidescomplicado.blogspot.com",1754977489],["colegialasrealesvideosyfotos.blogspot.com",536645952],["latino69.fun",536645952],["dual1080p.blogspot.com",266689607],["bludvfilmes.com",1127646274],["doramashd.com",1127646274],["fulltvhd.fi",1127646274],["18hentaionline.net",1127646274],["erohentai.net",1127646274],["megafilmestorrents.net",1127646274],["bluradio.com",1549807582],["caracoltv.com",1549807582],["bolavip.com",987261809],["brasil247.com",1115189889],["braziliantimes.com",1221204895],["cabezanews.com",815703501],["cadenasuper.com",1708226383]]);

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
