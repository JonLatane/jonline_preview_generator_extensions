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

const argsMap = new Map([[1039609607,{"a":".Ad"}],[1543054591,{"a":"#afscontent2"}],[232062177,{"a":".gptSlot"}],[144069136,{"a":".pub-container"}],[674919200,{"a":"#custom_html-6"}],[2047732935,{"a":".StyledAdWrapper,\n.StyledDigitalPremiumAdWrapper,\n.top-smad,\n[class*=\"AdUnit\"]"}],[904806614,{"a":"div[id-banner],\ndiv[rel=\"container_banner_meio_noticia\"]"}],[780265468,{"a":"div[class^=\"banner-\"]"}],[1863419816,{"a":"#sidebar > .rel-news,\n.banner-728x90-area,\n.page-ad-wrapper,\ndiv[id^=\"banner-300x\"],\ndiv[id^=\"page-ad-v-\"]"}],[2119177392,{"a":"#fullBanner,\n.bannersButton"}],[1017264639,{"a":"#adsense-slot,\n#top-main-content"}],[2040632792,{"a":"table[width=\"768\"]"}],[1384686022,{"a":"#bannerMateriaAbertaMeiaPagina"}],[695025179,{"a":"#tpPublicidade"}],[2105175047,{"a":"td[width=\"300\"]"}],[285327355,{"a":".GIAX5IEDAN.GIAX5IEDE1B,\n.O-PN"}],[65971668,{"a":"#seminovossuper,\n.publicidade-article,\ndiv.cf.slot-item.count-2.slot-count-20,\ndiv[id^=\"ATF_\"],\ndiv[id^=\"BTF_\"],\ndiv[id^=\"ads-\"]"}],[1812317182,{"a":"div[class^=\"code-block code-block-\"][style^=\"margin: 8px\"]"}],[1742009401,{"a":".ai_widget"}],[1983610069,{"a":".an-full"}],[795559595,{"a":"#floater_fold_banner"}],[694734583,{"a":"#anuncioRodape"}],[47652800,{"a":"div[aria-label=\"anúncio patrocinado\"]"}],[520277933,{"a":"div[class^=\"perna-conteudo\"]"}],[1096468199,{"a":".pub-left,\n.publicidade-cima-container"}],[1044646163,{"a":".pub-300x250"}],[1705480088,{"a":".pub_insert_content"}],[100745763,{"a":".card-banner"}],[144098262,{"a":".pub1"}],[1655879831,{"a":".adunitContainer"}],[584022207,{"a":"div[class^=\"div03-banner-\"]"}],[692236748,{"a":"div[class^=\"code-block code-block-\"][style^=\"margin: 8px\"] > div[id^=\"Position_\"]"}],[1197531252,{"a":"div[id=\"modal-noticias\"][visualizacoes=\"69502\"]"}],[1328981629,{"a":"#advertisingA"}],[2125549480,{"a":".notices-ads"}],[1484765631,{"a":".banner-flying,\n.box-ads-header-home"}],[496482196,{"a":".bannergroup"}],[1182395043,{"a":"#Position_Top,\ndiv[id^=\"Position_Content\"]"}],[99138016,{"a":".doisbannertopo,\n.se-publicidade-rasgado-1-container,\n.se-publicidade-rasgado-1-top"}],[304462750,{"a":".hidden-xs > .showcase.no-negative-xs"}],[1772013784,{"a":"#ad-container-top-placeholder"}],[1104401099,{"a":".black_banner_prop_desk"}],[1626162002,{"a":"#ads-square,\n#bannerTopo,\n#listaMegaCurioso,\n.tec--ad,\np > a[href^=\"https://bit.ly/\"][target=\"_blank\"] > span > img"}],[1446442948,{"a":"#HeaderBannerContainer,\n#advRuller2--wrapper,\n#barraM.varejo,\n#grandeS,\n#ilha,\n#megabanner,\n.banner_propaganda_dir,\n.float_right_container,\n.publicidade_lg"}],[1906507186,{"a":"#tgm-bottom,\n.ctn-tgm-advertising"}],[154107053,{"a":"#tgm-right"}],[1478991044,{"a":"#fauxadsense,\n.bloco-adsense"}],[1917190917,{"a":".home-taboola,\n.showcase-box[data-iab-tag^=\"content_mpu\"],\n.tgad-top"}],[1767508626,{"a":"div[id^=\"banner-\"]"}],[1622117539,{"a":"#ad-120x600-other,\n#banner-120x240,\n#banner-120x240-area,\n#banner-125x125,\n#banner-125x125-2,\n#banner-125x125-2-area,\n#banner-125x125-area,\n#banner-155x260-area,\n#banner-200x446-6-Area,\n#banner-200x78-3-Area,\n#banner-300x250-12-Area,\n#banner-300x250-5-Area,\n#banner-300x250-area,\n#banner-468x60-1-area,\n#banner-468x60-area,\n#banner-608x90-area,\n#banner-728x90-area,\n#banner-stick,\n#banner-top,\n#banners120x36,\n#corpoEsquerdaEcommerce,\n#divShoppingMod1Canvas,\n#folha_shopping,\n#marketplaceTelecom,\n#mod-shopping,\n#moduloBanner728x90,\n#nbusiness,\n#pub_noticia,\n#publicidade_topo,\n#responsive-vitrine-publicidade-vitrine-1,\n#shop-canhoto,\n#shop2,\n#shopnow-coldir,\n#to,\n#uoltm-float-push,\n.advertisementArea--showLabel,\n.banner_topo,\n.bannersticky-base,\n.bannersticky-top-container,\n.bannersticky-wrapper.fixed,\n.box-publicidade-topo,\n.cardAd,\n.cyrela_wrap,\n.ecommerce-produtos-container,\n.google,\n.label-produtos,\n.label-publicidade:before,\n.lista-ecommerce,\n.mod-publieditorial,\n.mod-servicos-box,\n.mod-uol-host,\n.model-base-bnr,\n.moduloBanner,\n.native-vitrine,\n.pub_insert_content_titulo,\n.publicidade-content,\n.shopping-produtos-uol,\n.slot-m + #magazine-cover,\n.up-floating,\ndiv[style=\"height: 90px;\"],\nul.produtos"}],[1174454671,{"a":".banner_top"}],[1410736711,{"a":"#bloco-native-rodape"}],[2052298222,{"a":"#top-banner"}],[1839717815,{"a":"#bxShoppingLateral,\n#game_super,\n#super_top"}],[1213518728,{"a":"#area_flutuante_1,\n#conteudo-texto > div > div[style=\"height:250px; width:300px;\"],\ndiv[class^=\"pub_insert_content\"]"}],[1943950321,{"a":".area-publi-topo,\n.br-grid-1-publicidade,\n.corpoPubli,\n.publi-dir,\ndiv[id^=\"area-flutuante-artigo-\"]"}],[1921468136,{"a":".uol_placeholder"}],[128246747,{"a":".banner-area"}],[1241638013,{"a":".interna-publicidade-topo,\n.wrapper-bnr"}],[1039477296,{"a":"div[class^=\"pub_\"]"}],[1732993285,{"a":"#classified,\n#fourth_column[style=\"display: block;\"],\n#todaOferta,\n.ads-livrariadafolha,\n.bookstore,\n.c-advertising__banner-area,\n.row.drops > .livraria"}],[744758076,{"a":"#shopping"}],[1351821229,{"a":".advertising"}],[322483551,{"a":".cleverads,\n.header-banner,\nbody .box-banner"}],[1447961033,{"a":"#viewlet-blog"}],[464662964,{"a":".banner-container"}],[609445896,{"a":".taboola-middle-text"}],[269934180,{"a":".bnr"}],[1882095174,{"a":".entry > div[style^=\"display: flex; align-items: center; justify-content: center;\"],\n.pb_inner_content,\ndiv[id^=\"area_flutuante_\"],\ndiv[style=\"height:250px; width:300px;\"]"}],[1164729974,{"a":".arroba-texto,\n.banner_conteudo,\n.publicidade-label,\n[id^=\"banner\"]"}],[996541798,{"a":".desktop-banner"}],[243893346,{"a":".banner_wrapper,\ndiv[id^=\"banner-300x250-\"]"}],[1076340220,{"a":".container_assine,\ndiv[id^=\"div-gpt-\"]"}],[318188141,{"a":".BannerUOLPlay__Container,\n.LinguetaApple,\n.obx-ad"}],[832992893,{"a":".tp-sponsored.tp-offer"}],[1966823594,{"a":"div[class^=\"ads\"]"}],[1226077129,{"a":"table[height=\"600\"]"}],[813184132,{"a":"tr[height=\"90\"]"}],[1737630234,{"a":"#custom_html-5,\n#webtivaFloating,\n.adcontainer,\n.bsac-float-center,\n.post-header > a > img[src*=\"imgur.com/\"],\n.post-header > br,\n.single-container > div[align=\"center\"] > div#wrapper"}],[1921228509,{"a":".ad-leaderboard-wrapper,\n.widget-taboola"}],[1374946324,{"a":".widget-shopping"}],[295111609,{"a":"#enveloping,\n.axd-inner"}],[236521724,{"a":"a[href^=\"http://bit.ly/\"]"}],[1688144248,{"a":"#bg_trasp,\n.node_529"}],[1755858728,{"a":"#adsverticalmenu,\n#bnrfull,\n#propaganda"}],[1583657145,{"a":".cnt-space-top"}],[738539503,{"a":".ad-full"}],[1877845698,{"a":".c-banner"}]]);

const hostnamesMap = new Map([["naointendo.com.br",1039609607],["nestoria.com.br",1543054591],["nextpit.com.br",232062177],["noticiasaominuto.com.br",144069136],["noticiasaominuto.com",144069136],["noticiasautomotivas.com.br",674919200],["blogdoiphone.com",674919200],["segredosdomundo.r7.com",674919200],["mundodebolso.me",674919200],["nsctotal.com.br",2047732935],["oanhanguera.com.br",904806614],["oficinadanet.com.br",780265468],["ofuxico.com.br",1863419816],["olhardireto.com.br",2119177392],["olx.com.br",1017264639],["omelete.com.br",2040632792],["opopular.com.br",1384686022],["opovo.com.br",695025179],["orapois.com.br",2105175047],["orkut.com.br",285327355],["otempo.com.br",65971668],["otvfoco.com.br",[1812317182,1742009401]],["facialix.com",1742009401],["ouvirmusica.com.br",1983610069],["parana-online.com.br",795559595],["pedagogia.com.br",694734583],["sobiologia.com.br",694734583],["socontabilidade.com.br",694734583],["soespanhol.com.br",694734583],["sofisica.com.br",694734583],["sogeografia.com.br",694734583],["sohistoria.com.br",694734583],["soitaliano.com.br",694734583],["solinguainglesa.com.br",694734583],["soliteratura.com.br",694734583],["somatematica.com.br",694734583],["sonutricao.com.br",694734583],["soq.com.br",694734583],["sorusso.com.br",694734583],["soturismo.com.br",694734583],["soxadrez.com.br",694734583],["pelando.com.br",47652800],["pernambuconoticias.com.br",520277933],["portugues.com.br",[1096468199,1044646163,1705480088]],["preparaenem.com",[1044646163,1039477296]],["uol.com.br",[1705480088,1622117539,1174454671,1410736711,2052298222]],["promobit.com.br",100745763],["punch-fansub.com.br",144098262],["tiinside.com.br",144098262],["quizcovery.com.br",1655879831],["rbtv.com.br",584022207],["rd1.com.br",692236748],["redesuldenoticias.com.br",1197531252],["revistamonet.com.br",1328981629],["sbt.com.br",2125549480],["semprefamilia.com.br",1484765631],["setelagoas.com.br",496482196],["parasitipedia.net",496482196],["spinoff.com.br",1182395043],["superesportes.com.br",99138016],["mg.superesportes.com.br",304462750],["techtudo.com.br",[1772013784,1104401099]],["oglobo.globo.com",1772013784],["tecmundo.com.br",1626162002],["terra.com.br",[1446442948,1906507186,154107053]],["terra.com",1906507186],["terra.es",154107053],["terra.com.ni",[154107053,1351821229]],["titinet.com.br",1478991044],["tudogostoso.com.br",1917190917],["tvpop.com.br",1767508626],["contigo.uol.com.br",[1767508626,1921468136]],["midiamax.uol.com.br",1767508626],["tycsports.com",1767508626],["canal13.cl",1174454671],["elpais.com",1174454671],["los40.com",1174454671],["mundoeducacao.bol.uol.com.br",[1410736711,1213518728]],["maputo.co.mz",2052298222],["bol.uol.com.br",1839717815],["brasilescola.uol.com.br",1943950321],["eleicoes.uol.com.br",128246747],["iol.pt",128246747],["escolakids.uol.com.br",[1241638013,1039477296]],["folha.uol.com.br",[1732993285,744758076,1351821229]],["r7.com",744758076],["totaldescargas.com",1351821229],["tribunaavila.com",1351821229],["hugogloss.uol.com.br",322483551],["idgnow.uol.com.br",1447961033],["jovempan.uol.com.br",[464662964,609445896]],["ambito.com",464662964],["ratingcero.com",464662964],["mundoeducacao.uol.com.br",[269934180,1882095174]],["pornogratisdiario.com",269934180],["natelinha.uol.com.br",1164729974],["jc.ne10.uol.com.br",996541798],["noticiasdatv.uol.com.br",243893346],["oantagonista.uol.com.br",1076340220],["observatoriodatv.uol.com.br",318188141],["shopping.uol.com.br",832992893],["tribunapr.uol.com.br",1966823594],["ultradownloads.uol.com.br",[1226077129,813184132]],["elcorillord.com",1226077129],["vitoriadaconquistanoticias.com.br",1737630234],["voxel.com.br",[1921228509,1374946324]],["globo.com",1374946324],["webarcondicionado.com.br",295111609],["webcheats.com.br",[236521724,1688144248]],["peliculaonlinehd.com",236521724],["tufutbolpro.com",236521724],["cruzeirodosul.inf.br",1755858728],["letras.mus.br",[1583657145,738539503]],["letras.com",1583657145],["elnacional.cat",1877845698]]);

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
