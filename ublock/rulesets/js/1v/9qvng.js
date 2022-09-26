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

const argsMap = new Map([[1155145273,{"a":"#branding-content > div#sidebar_header,\n.simple_overlay"}],[496189384,{"a":"table[style=\"padding-left: 8px; padding-top: 8px; padding-bottom: 0px;\"],\ntable[style=\"padding-left:8px;padding-top:8px;padding-bottom:0px;\"]"}],[681248136,{"a":"#pub300x250"}],[1811419555,{"a":".sidebar-content > div[id^=\"text-\"]"}],[743013784,{"a":".banner"}],[2055781586,{"a":"#sponsor_image"}],[1280542236,{"a":"#posts > li.postcontainer[id^=\"yui-gen\"]"}],[1474762084,{"a":".contenedor_banner_popup,\n.zona_banners"}],[1897491984,{"a":"a[href^=\"http://bit.ly/\"] > img"}],[171059848,{"a":".ad-header-right"}],[1258713981,{"a":"#sidebar div.theiaStickySidebar,\n.g-dyn > p[align=\"center\"] > a[data-track][target=\"_blank\"] > img"}],[298046060,{"a":".adv"}],[1157581280,{"a":"#mbEnd"}],[1170472073,{"a":"#prestitial_layer"}],[1069239690,{"a":"#bn-lateral,\n#cajaEspeciales,\n.--ads,\n.temas > div.titulares-del-dia,\ndiv[class^=\"content-bnhoy\"]"}],[751384751,{"a":".mod-banner"}],[617290528,{"a":"#header-banner-wrapper"}],[1302549114,{"a":"#subscription-cta-body-bottom,\n#suscription-header"}],[928779934,{"a":".block-banner,\n.bloque-ads"}],[937226797,{"a":"#MClicsQCatAdImg,\n.MClics-bottom"}],[1112990858,{"a":"#homeBannerSchneider"}],[1416566798,{"a":"#sidebar-primary-sidebar > .primary-sidebar-widget,\n.hlymgdwv,\n.oxte-pubadban,\n.sidebar > div.widget_oxte,\n.widget_hlymgdwv,\ndiv[class*=\"-pubadban\"],\ndiv[data-adid]"}],[1663582906,{"a":".racin-widget"}],[608853317,{"a":".wallpaper"}],[1845039278,{"a":"#HiperLibertad,\na[href^=\"http://www.clubelterritorio.com.ar/Suscriptor/Inscripcion?utm_source=\"]"}],[877311393,{"a":"div[id^=\"parent-arcAds-\"]"}],[560462617,{"a":".entry-content > center > b"}],[819500675,{"a":"div[class^=\"publicidade-\"]"}],[988548511,{"a":".chamada .g-single > a > img[src*=\"cloudfront.net/wp-content/uploads/\"][src*=\"/BAN\"]"}],[106655963,{"a":".anuncios a:not([href^=\"https://discord.gg/\"]) > img"}],[1286709253,{"a":".bf"}],[1605303433,{"a":"#main-content > div[style^=\"margin-bottom:\"] > a[href^=\"https://bit.ly/\"][target=\"_blank\"] > img,\n#sidebar > .discord-image > center > a[href^=\"https://bit.ly/\"][target=\"_blank\"] > img"}],[1838331732,{"a":"#bannerMontado,\n#sombra,\na > img[alt^=\"banner-\"]"}],[1357425270,{"a":".well.z-body,\niframe[width=\"300px\"][height=\"250px\"],\niframe[width=\"970px\"][height=\"250px\"]"}],[1974343158,{"a":".adsContainer,\n.right > .mbottom,\niframe[data-src^=\"//ad.a-ads.com/\"]"}],[613956563,{"a":"body > #divbox[style^=\"position:\"],\nbody > #divmodal[style^=\"position:\"]"}],[1517999442,{"a":"#baNwan,\n#banIz"}],[1567260465,{"a":"#anuncio1"}],[51295575,{"a":".gp-sidebar > #html_javascript_adder-3,\n.gp-sidebar > #text-7,\n.theiaStickySidebar > #html_javascript_adder-3,\n.theiaStickySidebar > #text-7,\na[href=\"https://pivigames.blog/descargar.php\"]"}],[2015592520,{"a":".adcontainer-portlet"}],[668692795,{"a":"table[cellpadding=\"1\"][width=\"640\"],\ntable[width=\"468\"]"}],[619924784,{"a":".ad"}],[625489907,{"a":"div[id^=\"ad_\"]"}],[745974292,{"a":"#abrVitrine,\n#cnOfertas,\n#containerBanner,\n#tbBanner,\n#tbBannerRight,\n.ad-sense,\n.boxBN,\n.linksPatrocinados,\n.pbc-patrocinio,\n.pbc-right1,\n.publSquare,\n.rodape-verao,\n.skyBanner,\n.widget-superbanner"}],[1171569000,{"a":".ads"}],[1928905827,{"a":".fixed-banner,\n.tobecontinuedBlock"}],[1254474108,{"a":"#ad-300x250-noticia,\n.main > div[style*=\"height: 250px;\"],\n.section__publicidade,\ncenter.mb-4.mt-2 > small"}],[1376784428,{"a":".cbola-box"}],[1303552952,{"a":".banners"}],[224033808,{"a":"#banner_topo"}],[982380722,{"a":"div[class^=\"banner_footer\"],\ndiv[id^=\"div-ad-\"]"}],[1599933927,{"a":"#banner_top"}],[1508659298,{"a":"div[id^=\"adx\"]"}],[802643885,{"a":".RgtColTopImg,\n.headerBanner"}],[2075532584,{"a":"#adtopDet,\n.ad-text-centered,\ndiv[style=\"float:left; padding:0 10px 10px 0; width:300px;\"],\ntr[id^=\"tr-ads_bxk_search_native-\"]"}],[28004739,{"a":".bn-Flutuante,\n.bn-header__banner-item"}],[1758642734,{"a":"#dv_arroba,\n#ofertas"}],[2101011117,{"a":"#skyscraper"}],[1318655888,{"a":".theiaStickySidebar > div[id^=\"bdaia-widget-e3-\"]"}],[880208877,{"a":".publicidade-bd"}],[1944544651,{"a":"div[class*=\"sidebar\"] .textwidget > p > a[href]:not([href*=\"boainformacao.com.br\"]) > img,\ndiv[class*=\"sidebar\"] .textwidget > p ~ a[href]:not([href*=\"boainformacao.com.br\"]) > img"}],[1746163657,{"a":".testad"}],[1594348382,{"a":"#bp-superbanner-cont,\n.ads-lateral,\n.banner-vitrine"}],[2004827409,{"a":"div[class^=\"Advertisement\"],\ndiv[class^=\"Hits_SponsoredWrapper__\"]"}],[2129063381,{"a":"div[class$=\"-anuncio-dfp\"]"}],[58010705,{"a":"[style=\"width: 738px; height: 90px; margin-top: 5px;\"],\n[style=\"width: 738px; height: 90px;\"]"}],[1295351768,{"a":".preheader > .box-banner"}],[2076697286,{"a":".bloco-anuncios,\n.continue-lendo ~ p,\ndiv[id^=\"dmp-v-par\"]"}],[1987132967,{"a":".anuncio"}],[2068783092,{"a":".floatingBottomAd,\ndiv[id^=\"pub-cc-\"]"}],[1717096490,{"a":"div[id^=\"pub_\"]"}],[513129418,{"a":".pub"}],[903370767,{"a":"#block-10,\n#progressModal"}],[1111725761,{"a":".-ads,\n.ads-block:not(.prebid),\n.ads:not(.prebid),\n.block-ads-wrapper"}],[894572125,{"a":"#bannersDireita"}],[741326590,{"a":"#box-clicshop,\n.clic-advertising,\n.contemPublicidadeRetangulomedio,\n.contemPublicidadeSuperbanner,\n.nivelA-tipo6,\n.nivelA-tipo8,\n.nivelB-modB-tipo1"}],[262938210,{"a":"#superbanner"}],[489582626,{"a":".ad-parallax-container,\n.ads-section-area,\n.m-advertising"}],[2064454737,{"a":".ad-container"}],[1828227722,{"a":".contentBanner,\n.overlay,\ndiv[class*=\"__DivStick\"]"}],[1558072569,{"a":".container > div[class=\"row\"] > div[class=\"col-lg-4\"] > div[class=\"_margin-t-20\"]"}],[92200811,{"a":".wrapper-banner"}],[646731896,{"a":".caixa_topo,\n.ipsDialog_narrow,\n.ipsModal"}],[1370832493,{"a":"td[width=\"20%\"]"}],[1531856998,{"a":"#colegioweb_header"}],[518652766,{"a":".label-publicidade"}],[111746315,{"a":".pub-hor,\ndiv[id^=\"cb-publicidade-\"],\nsmall[class=\"hidden-print txt-no-serif\"]"}],[496076737,{"a":".ads__with-bg"}]]);

const hostnamesMap = new Map([["forum.ad",1155145273],["portalangop.co.ao",496189384],["sapo.ao",681248136],["sapo.cv",681248136],["sapo.mz",681248136],["sapo.pt",[681248136,513129418]],["16valvulas.com.ar",1811419555],["26noticias.com.ar",743013784],["lanacion.com.ar",[743013784,1069239690,751384751]],["lapoliticaonline.com.ar",[743013784,617290528]],["lavoz.com.ar",[743013784,1302549114,928779934]],["losandes.com.ar",[743013784,1302549114]],["bnews.com.br",743013784],["clickpb.com.br",[743013784,894572125]],["defesanet.com.br",743013784],["metropolitanafm.com.br",743013784],["migalhas.com.br",743013784],["omelete.com.br",743013784],["parana-online.com.br",743013784],["uol.com.br",[743013784,92200811]],["dalealbo.cl",743013784],["auniao.com",743013784],["elespectador.com",743013784],["emagister.com",743013784],["globo.com",[743013784,298046060]],["mibrujula.com",743013784],["mundotecnologias.com",743013784],["r7.com",743013784],["mundo.sputniknews.com",743013784],["toxico-pc.com",743013784],["tycsports.com",743013784],["urlcero.com",743013784],["valenciaplaza.com",743013784],["veneapp.com",743013784],["lyon.kim",743013784],["urlcloud.us",743013784],["3dgames.com.ar",2055781586],["foros.3dgames.com.ar",1280542236],["anbariloche.com.ar",1474762084],["autoblog.com.ar",[1897491984,171059848]],["animeflv.net",1897491984],["blizzboygames.net",1897491984],["verestrenos.net",1897491984],["espaebook.org",1897491984],["culturageek.com.ar",[1258713981,298046060]],["poder360.com.br",298046060],["clarin.com",298046060],["elespanol.com",298046060],["google.com.ar",1157581280],["google.com.br",1157581280],["google.cl",1157581280],["google.com.co",1157581280],["google.com.ec",1157581280],["google.es",1157581280],["google.com.mx",1157581280],["google.com.ni",1157581280],["google.com.pe",1157581280],["google.pt",1157581280],["lacapital.com.ar",1170472073],["lanacionar-la-nacion-ar-prod.cdn.arcpublishing.com",751384751],["mercadolibre.com.ar",937226797],["ole.com.ar",1112990858],["puraciudad.com.ar",1416566798],["racingdealma.com.ar",1663582906],["taxofcnym.com.ar",608853317],["territoriodigital.com.ar",1845039278],["territoriodigital.com",1845039278],["tn.com.ar",877311393],["cndfandres64.blogspot.com.au",560462617],["cndfandres64.blogspot.com",560462617],["cndfandres64.blogspot.de",560462617],["futandres.ml",560462617],["bahia.ba",[819500675,988548511]],["d.arede.info",819500675],["animesgratisbr.biz",106655963],["animesvision.biz",[1286709253,1605303433]],["goyabu.com",1286709253],["anitube.biz",1838331732],["anitubebr.biz",1357425270],["anitubebr.com",1357425270],["anitube.info",1357425270],["centraldeanime.biz",1974343158],["file4go.biz",613956563],["file4go.net",613956563],["remusica.biz",1517999442],["musicaeu.com",1517999442],["tvgol.biz",1567260465],["pivigames.blog",51295575],["paginasiete.bo",2015592520],["24horasnews.com.br",668692795],["abril.com.br",[619924784,625489907,745974292]],["atribuna.com.br",619924784],["dicio.com.br",619924784],["jovemnerd.com.br",619924784],["band.uol.com.br",619924784],["vagalume.com.br",619924784],["genbeta.com",619924784],["onyxplay.com",619924784],["xataka.com",619924784],["xatakandroid.com",619924784],["laopiniondemurcia.es",619924784],["larazon.es",[619924784,1171569000]],["auto10.com",625489907],["quatrorodas.abril.com.br",1171569000],["veja.abril.com.br",1171569000],["link.estadao.com.br",1171569000],["odia.ig.com.br",1171569000],["leouve.com.br",1171569000],["sbt.com.br",1171569000],["tribunapr.com.br",1171569000],["jc.ne10.uol.com.br",1171569000],["acidadeon.com",1171569000],["especiais.g1.globo.com",1171569000],["cbn.globoradio.globo.com",1171569000],["infoescola.com",1171569000],["internetpasoapaso.com",1171569000],["maxitorrent.com",1171569000],["novelasd.com",1171569000],["anime-tube.tv",1171569000],["administradores.com.br",1928905827],["adrenaline.com.br",1254474108],["androidpit.com.br",1376784428],["aquiacontece.com.br",[1303552952,224033808]],["gmconline.com.br",1303552952],["novanews.com.br",1303552952],["xvideoz.es",1303552952],["elotrolado.net",1303552952],["areah.com.br",[982380722,1599933927]],["canal13.cl",1599933927],["plus.es",1599933927],["arnolds.com.br",1508659298],["guialocaliza.club",1508659298],["baboo.com.br",802643885],["baixaki.com.br",2075532584],["baladain.com.br",28004739],["band.com.br",[1758642734,2101011117]],["terra.com.br",2101011117],["bhaz.com.br",1318655888],["boadiversao.com.br",880208877],["boainformacao.com.br",1944544651],["bracontece.com.br",1746163657],["brasilportais.com.br",1594348382],["buscape.com.br",2004827409],["canalrural.com.br",2129063381],["capitalnews.com.br",58010705],["casaevideo.com.br",1295351768],["catracalivre.com.br",2076697286],["cbnmaringa.com.br",1987132967],["engeplus.com.br",1987132967],["melissabenoist.com.br",1987132967],["redesuldenoticias.com.br",1987132967],["botinnifit.com",1987132967],["libertaddigital.tv",1987132967],["cifraclub.com.br",[2068783092,1717096490,513129418]],["letras.mus.br",1717096490],["letras.com",1717096490],["lavozdegalicia.es",513129418],["clix.pt",513129418],["destak.pt",513129418],["iol.pt",513129418],["publico.pt",513129418],["wareztuga.tv",513129418],["blog.clarocombomais.com.br",903370767],["oplanetatv.clickgratis.com.br",1111725761],["clicrbs.com.br",[741326590,262938210]],["diariodepernambuco.com.br",262938210],["aristeguinoticias.com",262938210],["edreams.es",262938210],["gauchazh.clicrbs.com.br",[489582626,2064454737]],["hobbyconsolas.com",2064454737],["vozpopuli.com",2064454737],["larepublica.pe",2064454737],["climaaovivo.com.br",1828227722],["climatempo.com.br",[1558072569,92200811]],["clubedohardware.com.br",646731896],["forum.clubedohardware.com.br",1370832493],["colegioweb.com.br",1531856998],["concursosnobrasil.com.br",518652766],["correiobraziliense.com.br",[111746315,496076737]],["em.com.br",496076737]]);

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
