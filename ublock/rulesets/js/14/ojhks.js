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

const argsMap = new Map([[1629841333,{"a":"div[class^=\"angwp_\"]"}],[427959927,{"a":".adsplaceholder,\np[style=\"color: #dddddd; font-size: .6em; margin-bottom: 0px; text-transform: uppercase;\"]"}],[322595394,{"a":".blue,\ndiv[style*=\"width:100%;\"][style*=\"background:#FFF;\"][style*=\"overflow:\"]"}],[172782238,{"a":"#publicidade"}],[779080951,{"a":".PubTopo,\n.bannerTopo,\n.publicity__bx"}],[1318922749,{"a":"body .code-block"}],[864492602,{"a":"#my_popup_background,\n#my_popup_wrapper"}],[1261098612,{"a":"#edicao-eletronica,\n#topodoodle"}],[1282725450,{"a":".td-banner-wrap-full"}],[887673066,{"a":"div[id^=\"gooad_palavra\"]"}],[1420836896,{"a":"div[style=\"height:322px;\"]"}],[1821765207,{"a":"div[style=\"height:90px;\"]"}],[525850808,{"a":"#sidebar > .widget > .widget-content > a[href^=\"https://bit.ly/\"] > img,\n.widget-content > a[href$=\"&utm_content=bannersite\"] > img"}],[889503725,{"a":".ads-ancorads,\n.container > small[class=\"hidden-print txt-no-serif\"],\n.container > small[class=\"txt-no-serif hidden-print\"],\n.containerads"}],[1794231685,{"a":".break-com-texto"}],[1061859195,{"a":"#box_zapimoveis,\n#jogos,\n.ajuste-banner,\n.dvBannerX08,\n.pub157x27,\n.row-media-lab,\narticle[class^=\"destaque-default -patrocinado\"],\ndiv[class*=\"AdPlaceholder\"]"}],[437429162,{"a":".superBanner"}],[682389411,{"a":".publi-area,\n.publi-sticky-banner-container"}],[1508461260,{"a":".wrap-publicidade"}],[1205227766,{"a":"body div.post-horizontal-ad"}],[1143010177,{"a":".flexbannergroup,\n.gafancybox-overlay"}],[161250920,{"a":"[style=\"clear: both; position:relative;\ttop: 0px; \twidth: 990px; border: 1px solid #c1c1c1; padding-left: 5px; padding-bottom: 5px; padding-top: 5px; height:100px\"]"}],[312132193,{"a":"div[id^=\"floatLayer\"]"}],[1733445154,{"a":"div[style=\"margin:0;padding:0;position:absolute;left:188px;top:15px;width:755px;height:100px;text-align:left;z-index:4;\"]"}],[871799457,{"a":"[style=\"height: 105px; width: 1000px; background-color: #04290A; padding-top: 10px;\"],\n[style=\"height: 105px; width: 1000px; background-color: rgb(4, 41, 10); padding-top: 10px;\"]"}],[1570727512,{"a":"#penci_custom_html-4,\n.gg-ad-home"}],[1663500829,{"a":"#skyBanner"}],[794147157,{"a":"div[id^=\"pub\"]"}],[32515593,{"a":".card-advertising"}],[1410633998,{"a":"p[style=\"line-height: 150%;\"]"}],[646668099,{"a":"a[target=\"_blank\"][href^=\"http://www.forumchaves.com.br/viewforum.php?f=\"]"}],[275017876,{"a":"#banner_dhtml,\n.area_anuncios_topo,\n.area_banner_125x125,\n.area_banner_arroba,\n.area_banner_botao,\n.area_banner_full,\n.area_banner_half,\n.area_banner_selo_grande,\n.area_banner_sky_grande,\n.area_banner_texto,\n.divbloco"}],[633301928,{"a":".banner_super"}],[2137514766,{"a":"#bannerheader,\n#publicidade-banner"}],[806823681,{"a":".bglink"}],[565315687,{"a":".ads-fixed,\n.c-ads,\n.especial-patrocinado,\ndiv[class^=\"box-ads-header\"]"}],[1844941577,{"a":".banner-topo"}],[202097711,{"a":".c-publi"}],[911552206,{"a":"#custom_html-4"}],[651653128,{"a":"#custom_html-7"}],[447247106,{"a":"#banner_meio"}],[1407730893,{"a":".banner-item,\n.section-banner-topo"}],[1843796150,{"a":"table[bgcolor=\"#808080\"],\ntd[bgcolor=\"#dcdcdc\"]"}],[83339957,{"a":"#box-ad-topo"}],[910430175,{"a":".hd-ad--background"}],[813977672,{"a":".publicity-area"}],[706451758,{"a":"#fullbanner"}],[62846078,{"a":"#advertisement,\n#ing,\n#rectangle_banner"}],[2092013740,{"a":".ig-ad"}],[940693019,{"a":"#BF6F388D-5A38-457D-991A-A827E8F29D58,\n#C5E63B4A-2E0E-47A9-A1CA-8C6719CFA8CB,\n#PPA03406,\n#advertising,\n#enqueteLayer,\n#pub-Position,\n#pub-Right,\n#pub-island,\n#publateral,\n#pubmasterbox,\n#pubsidebar,\n#pubsidebar2,\n#pubtop,\n#super-banner,\n.betOrBillboard,\n.box_publicidade,\n.container-publicidade-mrec1,\n.ig-shopping,\n.previsaoTempoBox,\n.pub-island.fl,\n.pub-ticker.fl"}],[173630632,{"a":"div[class^=\"maislidas\"]"}],[1777639321,{"a":"#taboola,\n#text-intext-ads,\n.billboard_2,\n.intext-ads,\n.vitrine-ofertas-odia"}],[1869696301,{"a":".anugoogle.ver"}],[1035972251,{"a":"div[class^=\"tvpri\"]"}],[439361271,{"a":"#pubRight"}],[865042704,{"a":"#banner"}],[883878458,{"a":"#fundo,\n.text-justify > p img[style=\"height:104px; width:500px\"]"}],[1172158518,{"a":".advisor-banner-container,\n.advisor-promo-banners,\n.bottomBannerInside,\n.headerSEO,\n.publicity"}],[1268774411,{"a":"div[class=\"container row border-t py-5 mt-5\"]"}],[1266818558,{"a":".modal__banner,\nbody .height-ads,\niframe[src^=\"https://banners.inforchannel.com.br/\"]"}],[942367479,{"a":".modal-backdrop"}],[372019832,{"a":".texto_cinzaclaro_10,\n[width=\"300\"]"}],[423170218,{"a":"[height=\"90\"][width=\"728\"]"}],[725963899,{"a":"#bannersTopo"}],[2027970714,{"a":".publi178_2,\n.public"}],[1195842703,{"a":"div[id^=\"banner_\"]"}],[607688987,{"a":".columns.medium-4 > .text-center > a[href][target=\"_blank\"] > img,\n.faixa-banner .columns > a[href][target=\"_blank\"] > img"}],[1735875911,{"a":"#Position_TopFixed"}],[1757783968,{"a":"div[style=\"margin: 0px auto 10px auto; text-align:center\"],\ndiv[style=\"margin:10px auto; text-align:center\"]"}],[1144943710,{"a":"#ads-blog-content"}],[153312005,{"a":"a[href^=\"http://www.geragera.com.br/?ref=\"],\na[href^=\"http://www.hipercontas.com.br/bit-share.php?id=\"]"}],[809351035,{"a":"div[data-adloc-par=\"1\"]"}],[1748449680,{"a":"div[class*=\"mpp-container-position-middle-\"]"}],[489088512,{"a":"#linkpatrocinados"}],[1035928933,{"a":".adsbygoogle"}],[647457628,{"a":".e3lan-top > a[href][target=\"_blank\"] > img"}],[1000890926,{"a":".bg-ad-wrapper,\n.widget--adsense"}],[67390724,{"a":".rock-convert-banner"}],[528323289,{"a":".ad-halfpage-placeholder,\n.ad-leaderboard-placeholder"}],[1001351165,{"a":"div[class*=\"banner\"]"}],[120019001,{"a":".menu-myml-ads"}],[1375658124,{"a":"[class^=\"container banner\"]"}],[1138647981,{"a":".adsense_colado,\n.arroba_banner_sidebar,\n.banner_triplo,\n.bloco_horizotal_duplo,\n.bloco_horizotal_triplo,\n.half_page_banner,\n.pbmt,\n.publicidade_300x250,\n.publicidade_970x90"}],[2033755176,{"a":".topico__body > p > span > a[href^=\"https://s.migalhas.com.br/\"],\napp-banner"}],[1457642622,{"a":".customadimg"}],[347088788,{"a":".ad-banner-inarticle,\ndiv[id^=\"banner-top-\"]"}],[1687785632,{"a":".cotbar__ad"}],[1217840045,{"a":".entry-content > center.mt-xlg.mb-xlg"}]]);

const hostnamesMap = new Map([["correiodeitapetininga.com.br",1629841333],["diariorp.com.br",[1629841333,1282725450]],["folhaonline.es",1629841333],["correiodopovo.com.br",427959927],["decorardicas.com.br",322595394],["loucasporcabelos.com.br",322595394],["destakjornal.com.br",172782238],["diariodopara.com.br",[172782238,1261098612]],["ig.com.br",[172782238,2092013740,940693019]],["diariodepernambuco.com.br",779080951],["diariodocomercio.com.br",1318922749],["idinheiro.com.br",1318922749],["noticiasautomotivas.com.br",[1318922749,651653128]],["remender.pe",1318922749],["diariodoiguacu.com.br",864492602],["dicio.com.br",887673066],["dicionarioinformal.com.br",[1420836896,1821765207]],["somosche.com",1821765207],["diolinux.com.br",525850808],["em.com.br",889503725],["engeplus.com.br",1794231685],["estadao.com.br",[1061859195,437429162]],["gazetaonline.com.br",437429162],["einvestidor.estadao.com.br",682389411],["emais.estadao.com.br",1508461260],["jornaldocarro.estadao.com.br",1205227766],["expressodaspraias.com.br",1143010177],["expressomt.com.br",161250920],["filmessemlimite.com.br",[312132193,1733445154]],["jogossemlimite.com.br",312132193],["brasilligado.org",312132193],["tv-en-vivo.org",312132193],["finalsports.com.br",871799457],["flatout.com.br",1570727512],["folha.com.br",1663500829],["folhabv.com.br",794147157],["jornalnh.com.br",794147157],["folhavitoria.com.br",32515593],["forumchaves.com.br",1410633998],["www.forumchaves.com.br",646668099],["futnet.com.br",[275017876,633301928]],["gizmodo.com.br",[633301928,447247106]],["galeriadaarquitetura.com.br",2137514766],["gamersclub.com.br",806823681],["gazetadopovo.com.br",[565315687,1844941577,202097711]],["umdoisesportes.com.br",1844941577],["genshinpro.com.br",[911552206,651653128]],["vitoriadaconquistanoticias.com.br",911552206],["daemon-hentai.com",911552206],["universoformulas.com",911552206],["mundodebolso.me",911552206],["jav-asia.top",911552206],["gmconline.com.br",1407730893],["guiadasemana.com.br",1843796150],["guiasp.com.br",83339957],["hardware.com.br",910430175],["homepedia.com.br",813977672],["ibtimes.com.br",[706451758,62846078]],["tecnoblog.net",706451758],["economia.ig.com.br",173630632],["odia.ig.com.br",1777639321],["tecnologia.ig.com.br",1869696301],["tvprime.ig.com.br",1035972251],["ultimosegundo.ig.com.br",439361271],["ijuinews.com.br",[865042704,883878458]],["terra.com.br",865042704],["cadenasuper.com",865042704],["peladas69.com",865042704],["rcmpharma.com",865042704],["animeflv.net",865042704],["infojobs.com.br",1172158518],["infomoney.com.br",1268774411],["inforchannel.com.br",[1266818558,942367479]],["redesuldenoticias.com.br",942367479],["itweb.com.br",[372019832,423170218]],["record.pt",423170218],["jmonline.com.br",725963899],["jornalagora.com.br",2027970714],["jornaldeitapetininga.com.br",1195842703],["jornalznorte.com.br",607688987],["jovemnerd.com.br",1735875911],["jovempan.com.br",1757783968],["jumpmanclubbrasil.com.br",[1144943710,153312005]],["3dsounada1.blogspot.com",153312005],["kbb.com.br",809351035],["futebolatino.lance.com.br",1748449680],["lancenet.com.br",489088512],["lctutors.com.br",1035928933],["simsvip.com.br",1035928933],["eusouandroid.co",1035928933],["androidaba.com",1035928933],["damelibros.com",1035928933],["letras2.com",1035928933],["majesy.com",1035928933],["mangahost2.com",1035928933],["techmoviles.com",1035928933],["vivo-tv.com",1035928933],["vivotvhd.com",1035928933],["2cheat.net",1035928933],["goldenmangas.online",1035928933],["tabletsesmartphones.org",1035928933],["unionmangas.top",1035928933],["urlcloud.us",1035928933],["install.lctutors.com.br",647457628],["legiaodosherois.com.br",1000890926],["marketplace.magazineluiza.com.br",67390724],["megacurioso.com.br",528323289],["melhoresdestinos.com.br",1001351165],["mercadolivre.com.br",120019001],["meucarronovo.com.br",1375658124],["meutimao.com.br",1138647981],["migalhas.com.br",2033755176],["mixmods.com.br",1457642622],["moneytimes.com.br",[347088788,1687785632]],["seudinheiro.com",1687785632],["mundoconectado.com.br",1217840045]]);

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
