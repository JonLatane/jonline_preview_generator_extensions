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

const argsMap = new Map([[119674346,{"a":".centralads,\n.lateralads"}],[428710539,{"a":"#adv-top"}],[1653049511,{"a":".mod-ad-middle,\n.mod-ligatus,\n.show-ads,\n.sticky-wrap-publi,\naside[class^=\"mod-ad-top\"]"}],[1333406703,{"a":".publicidad_banner_right"}],[895196478,{"a":"div[class^=\"spm |\"]"}],[653874236,{"a":".ads_player"}],[714676810,{"a":".contadorads"}],[745040770,{"a":"[id^=\"floatLayer\"]"}],[65434155,{"a":".module-box-ads"}],[865453032,{"a":".robapaginas"}],[711058002,{"a":".flash_element"}],[1126689948,{"a":".publi_robapaginas,\n.publi_sky"}],[1835433865,{"a":".anuncios"}],[41779272,{"a":"#mega-atf"}],[1966963804,{"a":"center > a[href^=\"https://tinyurl.com/\"] > img"}],[1756814914,{"a":"#divadblock"}],[18349426,{"a":"#takeover-desktop-counter"}],[851693030,{"a":".Anuncios"}],[689899410,{"a":"div[style=\"top:-1px;width:33%;float:left; vertical-align:top;\"]"}],[352347084,{"a":"#MSC"}],[2063507846,{"a":".anunciofooter"}],[436032966,{"a":".ads300x600,\n.ads728x90"}],[2085414516,{"a":".ads > *"}],[1259106294,{"a":".body-wrap > .c-top-sidebar"}],[1976635315,{"a":".chapter-content > div.bottom-bloc"}],[1623060710,{"a":"#publi_sup,\n.aside-ad,\n.aside-outbrain,\n.content > iframe[src^=\"http://91.116.142.114\"],\n.gallery-slide-ad,\n.modulo_orbyt,\n.news-item ~ section.row-layout:empty,\n.publi-resultados,\n.publi_630_noticia"}],[1320656333,{"a":".content-ad"}],[1757093707,{"a":".banner-leader"}],[2037995927,{"a":".conteudo[id^=\"adx\"]"}],[1025921255,{"a":".bgshadow,\n.boxintersitial"}],[1128587066,{"a":".ad-wap"}],[1368142354,{"a":".toppic > a[target=\"_blank\"]"}],[157179296,{"a":"div[align=\"center\"] > div > [style=\"position:relative; width:280px; height:95px; border:none !important; background:none; margin:auto; clear:both;\"]"}],[1333999977,{"a":".m-banner-wrap"}],[828556833,{"a":".OUTBRAIN"}],[26173563,{"a":"#matb_adszone"}],[2141735677,{"a":"#block-block-12,\n#block-block-13,\n#block-block-188,\n#block-block-208"}],[1414228075,{"a":".TextAnuncio"}],[215250211,{"a":"table[width=\"335\"][height=\"260\"]"}],[1586622141,{"a":".banner[data-banner-size]"}],[1012651270,{"a":"p[style=\"text-align: center;\"] > a[rel=\"noopener\"] > img"}],[1454741186,{"a":"table[bgcolor=\"red\"]"}],[401795543,{"a":"#upgrade"}],[564026437,{"a":"#shoppingmodule"}],[1606074884,{"a":".imglinkabslist13"}],[1007804938,{"a":"#ie8,\n#marketingbanne"}],[1088514596,{"a":".sponsorship"}],[2003953264,{"a":"amp-iframe[src^=\"https://ads.mtlnovel.com/\"]"}],[1788810576,{"a":".widget_anuncio"}],[638947420,{"a":"a[href^=\"https://k.digital2cloud.com/\"]"}],[674875030,{"a":"#aumento,\n#sexdate"}],[783556410,{"a":".ads-sticky"}],[1466557442,{"a":".info-player > .banner-blue"}],[1611335919,{"a":"#bannerTurboNick"}],[1352025792,{"a":"#el-02,\n#framed > #timer,\n#framed > #txt"}],[1540150194,{"a":"#docosas > div#Pub1,\n#tiGen + div:not([id]):not([class]) > div.movil,\n#tiGen + div:not([id]):not([class]) > div.pc"}],[1238844164,{"a":".pd.pbf"}],[718442537,{"a":".tab_content > p[style=\"text-align: center;\"] > a.button"}],[707440979,{"a":"a[href^=\"https://loboclick.com/\"],\na[rel=\"nofollow noopener\"] > img,\nimg[width=\"300\"][height=\"250\"]"}],[32584575,{"a":"div[onimpression=\"nk_playbuzz_impression\"]"}],[1033992739,{"a":".widget-content .adsbygoogle ~ a[href^=\"http://bit.ly/\"][target=\"_blank\"] > img,\n.widget-content .adsbygoogle ~ a[href^=\"https://amzn.to/\"][target=\"_blank\"] > img"}],[1973501984,{"a":"#Layer1"}],[552382103,{"a":"#banner_header,\n#vlcb"}],[92961730,{"a":"div[style=\"float:left;width:100%;height:160px;\"]"}],[2082138423,{"a":"#box-ads-trailer"}],[253572418,{"a":".close-text"}],[427412800,{"a":"#widget_A,\n.widget_execphp"}],[810652569,{"a":"body > div#skin"}],[1133730357,{"a":".pub-space"}],[768582896,{"a":".banner.marginBottom,\n.bannerGeneral,\n.bannerLateral"}],[1357186062,{"a":"div[style=\"margin: 8px 0; clear: both;\"]"}],[819846299,{"a":"p > a[target=\"_blank\"] > img:not([height^=\"6\"])"}],[816496362,{"a":".banners_content_home,\n.leaderboard"}],[818153210,{"a":".container-banner-single"}],[869584072,{"a":".ad-slot-ph,\n.aux-col > .widget_aawp_widget_bestseller"}],[2069892543,{"a":"#teaser1"}],[1211017323,{"a":".mvic-btn > a.btn-successful[target=\"_blank\"]"}],[1196443588,{"a":"#ono_banner_bar,\n.grid_5.modulo_correo_2"}],[1709649980,{"a":"#pubTopo"}],[177006255,{"a":".bg_rek_on,\n.viewn_r,\na[href=\"http://www.maiores18.com/\"]"}],[433115088,{"a":".abcnn_,\n.resumecard__banner"}],[1354830929,{"a":".adversiment"}],[437306560,{"a":"#ContenidoPubliCotizax"}],[816267890,{"a":".pub-single-160x600,\n.pub-single-300x250"}],[1049429270,{"a":".posts a[href*=\"/offer?\"]"}],[204026531,{"a":"div[style^=\"position:fixed; left:50%; top:50%\"]"}],[1020615004,{"a":".post > div[align=\"center\"] > div"}],[552102884,{"a":"center > a[href][rel=\"nofollow\"] > img"}]]);

const hostnamesMap = new Map([["lacuarta.com",119674346],["laguiatv.com",428710539],["lasexta.com",1653049511],["lasextadeportes.com",1333406703],["latercera.com",895196478],["latinohentai.com",[653874236,714676810]],["peliculaxd.com",[653874236,714676810]],["pepeliculas.com",[653874236,714676810]],["playview.io",653874236],["pelisr.com",714676810],["popfilmeshd.net",714676810],["latinoweb-tv.com",745040770],["capodeportes.net",745040770],["lavanguardia.com",[65434155,865453032]],["mundodeportivo.com",[65434155,783556410]],["abc.es",865453032],["interviu.es",865453032],["muyinteresante.es",865453032],["que.es",865453032],["lavozlibre.com",711058002],["lawebdelprogramador.com",1126689948],["libertaddigital.com",[1835433865,41779272]],["esradio.fm",1835433865],["zoofilia.gratis",1835433865],["desenhosanimados.site",1835433865],["libertaddigital.tv",1835433865],["libremercado.com",41779272],["librosgratisxd.com",1966963804],["liketvw.com",1756814914],["premiumtvchannels.com",1756814914],["tvplusgratis.com",1756814914],["lostiempos.com",18349426],["luchaonline.com",851693030],["lun.com",689899410],["magisnet.com",352347084],["mangacrab.com",2063507846],["mangahost2.com",436032966],["mangahostbr.com",2085414516],["mangahostbr.net",2085414516],["mangapt.com",1259106294],["mangatigre.com",1976635315],["marca.com",[1623060710,1320656333]],["olimpicos.marcaclaro.com",1757093707],["mastercuriosidadesbr.com",2037995927],["maxitorrent.com",1025921255],["maxmodapk.com",1128587066],["moddescargar.com",1128587066],["medianetto.com",1368142354],["megapastes.com",157179296],["metropoles.com",[1333999977,828556833]],["20minutos.es",828556833],["mforos.com",26173563],["milenio.com",2141735677],["minhasdelicias.com",1414228075],["minutodigital.com",215250211],["minutouno.com",1586622141],["mkv-paste.com",1012651270],["mocosoft.com",1454741186],["msn.com",401795543],["br.msn.com",564026437],["esportes.br.msn.com",1606074884],["es.msn.com",1007804938],["prodigy.msn.com",1088514596],["mtlnovel.com",2003953264],["muitomanga.com",1788810576],["mulheres18.com",638947420],["mulheresafoder.com",674875030],["mundodonghua.com",1466557442],["seriesdonghua.com",1466557442],["mundonick.com",1611335919],["mundotecnologias.com",1352025792],["musicasvip.com",1540150194],["muyzorras.com",1238844164],["mwpaste.com",718442537],["naoconto.com",707440979],["es.charla.motor.narkive.com",32584575],["nerdmaldito.com",1033992739],["newpct.com",[1973501984,552382103]],["pctestrenos.com",1973501984],["tumejortv.com",1973501984],["newpct1.com",[92961730,2082138423]],["torrentrapid.com",92961730],["nightlifeporn.com",253572418],["noticialdia.com",427412800],["noticias3d.com",810652569],["noticiasaominuto.com",1133730357],["noticiasmvs.com",768582896],["noticiast.com",1357186062],["novinhasdozapzap.com",819846299],["oantagonista.com",[816496362,818153210]],["okdiario.com",869584072],["olympusscanlation.com",2069892543],["online-dvdrip.com",1211017323],["ono.com",1196443588],["oreporter.com",1709649980],["oxe7.com",177006255],["pampaporno.com",433115088],["pasfox.com",1354830929],["pcbolsa.com",437306560],["pelicula20.com",816267890],["peliculas-dvdrip.com",1049429270],["peliculas-flv.com",204026531],["peliculas-mp4.com",1020615004],["peliculasdk.com",552102884]]);

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
