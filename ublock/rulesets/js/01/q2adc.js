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

// fra-0

const argsMap = new Map([[157524160,{"a":".o-promo,\n.o-promo-carousel,\n.o-promo-mobile,\n.promo-loader,\na[href^=\"http://m.ooredoo.dz/Ooredoo/Algerie/particuliers?\"]"}],[1337447099,{"a":"#network > ul > .jm"}],[1124169358,{"a":"#publaterale"}],[1192602071,{"a":".lmn-aside,\n.lmn-inread,\n.lmn-topban,\n.taboola-wrapper"}],[2136444578,{"a":".widget-ad-slot,\na[href^=\"https://www.airbnb.fr/rooms/\"] > img"}],[300116148,{"a":".margin_bottom[style=\"padding:5px;border:1px solid #8F8F8F;border-radius:5px 0px 5px 0px;box-shadow: 0px 0px 10px #000000;\"]"}],[743792812,{"a":"#leftcolumn2 > .thinbox div[style=\"height: 600px;\"],\n#rectangle > .thinbox div[style=\"height: 250px;\"]"}],[1933923523,{"a":".plugin_sidebar"}],[1502637803,{"a":"a[target=\"_blank\"] > img[src^=\"images/logo_\"]"}],[293979187,{"a":"td[width=\"340\"][height=\"265\"][align=\"center\"],\ntd[width=\"980\"][height=\"40\"][bgcolor=\"#FFFFFF\"]"}],[1806233689,{"a":".aff"}],[850455864,{"a":"#dv_partenaire,\n.partenaire_mid"}],[1215007672,{"a":".category-publicite"}],[92200811,{"a":".wrapper-banner"}],[725775608,{"a":".partner-picture"}],[892197993,{"a":".sky"}],[779792386,{"a":".afxshop,\n.bzkshop"}],[1267996761,{"a":"#highlight-new"}],[1205952512,{"a":".widget_text.widget.widget_custom_html"}],[1907969482,{"a":".p300"}],[1936313361,{"a":"#widget_difusion"}],[786444782,{"a":".news-ticker-wrap"}],[414640429,{"a":".vda-item"}],[256825540,{"a":"#box_4_pub"}],[2033238944,{"a":".bstpar"}],[1012205791,{"a":".bloc_abo,\n.carrousel_partenaires"}],[556413639,{"a":".ad-onePager,\n.ad__holder,\n.article-page-sticky,\nbody .ad__placeholder"}],[493381323,{"a":"div#link"}],[1139936941,{"a":".inner-pub,\n.size_200_90,\n.size_300_250,\n.size_300_600,\n.size_728_90"}],[964822932,{"a":"a[href^=\"streaming-series\"]"}],[429642694,{"a":"a[href*=\"xmediaserve\"]"}],[1805904734,{"a":".amazon"}],[976706433,{"a":".content-bloc-pub"}],[885518069,{"a":"#the-post .warning"}],[283689155,{"a":".happy-inside-player"}],[1387119740,{"a":".trends--general__info__text--brand,\na[href^=\"https://www.bing.com/aclick?\"],\na[href^=\"https://www.bing.com/aclk?\"]"}],[1504162317,{"a":"#responsive-banner-slider"}],[1833226728,{"a":".hp--categories-populaires--pub,\n.offersKelkoo,\n.rads,\n.radsV2"}],[751588139,{"a":".footer_sponsors"}],[357584147,{"a":".bloc_iab"}],[128868346,{"a":".autopromo-container"}],[274123025,{"a":"#container_ebay,\n.head_ebay"}],[1647015787,{"a":"#screen_block"}],[1010752186,{"a":".banner_right"}],[662776653,{"a":"div[id^=\"A2dEmplacement\"]"}],[1225883678,{"a":"#supersticiel,\n.esspo232x70,\n.esspo736x110,\n.offretopsite"}],[64493335,{"a":"#bottom_768x90,\n#left_sky,\n#right_sky"}],[986236301,{"a":"#mynewfooter"}],[972245341,{"a":"#partners-container,\n#revenue-wrapper,\n.revenue-wrapper"}],[1046975298,{"a":".partenaire"}],[1272729915,{"a":"#paragraphe"}],[1906459981,{"a":"#ab_bg,\n#ac_bg,\n#all > #az_bg:empty,\n#carouselTOPContainer,\n#pob_haut,\n.bpub,\nbody > .top_body:empty"}],[76336492,{"a":".pubheader"}],[1263397205,{"a":"a[href^=\"javascript:\"]"}],[1572483779,{"a":".bloc_pub"}],[657411225,{"a":".col_right__service"}],[1393974527,{"a":".h300"}],[2101977261,{"a":"a[href*=\"/xban/\"]"}],[1670718916,{"a":".habillage-banner,\n.sc-klass"}],[1270212341,{"a":"a[class^=\"ebooks_orange_72890\"]"}],[1985980371,{"a":"#catcher"}],[1642360568,{"a":"a[href=\"http://www.karouikaroui.com/fr/outdoor/\"]"}],[1179839962,{"a":"#colpub > #bloc_forum"}],[609496934,{"a":"#check-also-box,\n#posPub"}],[1402523803,{"a":".alj"}],[1137618578,{"a":".advertisement"}],[1957771236,{"a":".fixe"}],[1823288251,{"a":"#annonce"}],[148285642,{"a":"table[width=\"303\"] > tbody > tr > td[valign=\"top\"][height=\"260\"]"}],[1091720959,{"a":"[class^=\"bloc-partenaires\"]"}],[1022804348,{"a":"#myContent,\n#myVideo"}],[1690611608,{"a":".fileviewpro"}],[282600408,{"a":".adkiss"}],[348035800,{"a":"#cadre_partenaire,\n#popup_connect,\n#pub_imu,\n.bas_colonne"}],[1209141870,{"a":"#sondage_age"}],[1502419471,{"a":"#colonnePub"}],[1899917019,{"a":".flexslider"}],[1823227588,{"a":"a[href=\"http://www.bleuhabitat.fr/\"]"}],[940378161,{"a":".tableau_bleu"}],[1581894432,{"a":".grid[style=\"width: 770px; height: 69px;\"]"}],[101324318,{"a":".container_pubh_02,\n.post_pub"}],[1783261286,{"a":".pub_contenu_cr,\ndiv[style=\"margin:auto;margin-top:2px;width:728px;height:90px;\"]"}],[1065681642,{"a":".phone_support_banner"}],[1157221190,{"a":".bandeaupub"}],[1877529446,{"a":"a[href^=\"http://www.adcash.com/\"]"}],[1583696782,{"a":"[id^=\"pub_\"]"}],[329833275,{"a":"a[href^=\"/ads/\"] > .image"}],[1534457317,{"a":"#bannerDerPC"}],[1898645539,{"a":".pubcontent"}],[1728751685,{"a":".inside-banner,\n.native-banner,\nbanner"}],[43308363,{"a":"#aff-france"}],[1992247562,{"a":".smartstore"}],[931617286,{"a":"#adlbl"}],[197846514,{"a":"#sheader,\n.sad"}],[772933004,{"a":"#\\37 28x90_tennistemple,\n.right > .box_nd > [id^=\"300x250\"]"}],[1895614228,{"a":".c-product"}],[327889795,{"a":".contenu_pop,\na[href$=\"/boost.php\"]"}],[1113913874,{"a":"#banner_promo,\n.sidebarclick"}],[599645922,{"a":"#pid_f"}]]);

const hostnamesMap = new Map([["ouedkniss.com",157524160],["p-nintendo.com",1337447099],["paris-communiques.com",1124169358],["plateformemedia.com",1124169358],["parismatch.com",1192602071],["parlons-basket.com",2136444578],["parlonspiscine.com",300116148],["parolesmania.com",743792812],["pausefun.com",1933923523],["prix.pcastuces.com",1502637803],["people-looks.com",293979187],["permaculteurs.com",1806233689],["petitfute.com",850455864],["phonandroid.com",[1215007672,92200811]],["papergeek.fr",92200811],["phpboost.com",725775608],["picmix.com",892197993],["pix-geeks.com",779792386],["pixmania.com",1267996761],["place4geek.com",1205952512],["planeterenault.com",1907969482],["pons.com",1936313361],["porndoe.com",786444782],["pornforrelax.com",414640429],["previmeteo.com",256825540],["promos-algerie.com",2033238944],["psychologies.com",1012205791],["purepeople.com",556413639],["pyrenees-team.com",493381323],["quebeccoupongratuit.com",1139936941],["quedustream.com",964822932],["quedustreaming.com",429642694],["quellecompagnie.com",1805904734],["portail.free.fr",[1805904734,1046975298]],["quetelecharger.com",976706433],["quick-tutoriel.com",885518069],["quotisexe.com",283689155],["jeux-porno.net",283689155],["qwant.com",1387119740],["radio-monaco.com",1504162317],["rakuten.com",1833226728],["realmadrid.com",751588139],["reducavenue.com",357584147],["reezocar.com",128868346],["refurbgeneration.com",274123025],["retinaboys.com",1647015787],["roadsexe.com",1010752186],["routard.com",662776653],["sfr.fr",662776653],["ruedesjoueurs.com",1225883678],["rugbyfederal.com",64493335],["salon-du-mobilier.com",986236301],["sante-dz.com",[972245341,1046975298]],["saucissonsexe.com",1272729915],["scan-manga.com",1906459981],["scifi-universe.com",76336492],["orangeinfo.fr",76336492],["security-links.com",1263397205],["uploadbyte.com",1263397205],["upload4earn.org",1263397205],["seloger.com",[1572483779,657411225]],["creativejuiz.fr",1572483779],["semageek.com",1393974527],["seneweb.com",2101977261],["senscritique.com",1670718916],["seriecenter.com",1270212341],["sexeautop.com",1985980371],["shinymen.com",1642360568],["signification-prenom.com",1179839962],["sitedesmarques.com",609496934],["sitesavisiter.com",1402523803],["skipass.com",1137618578],["lemoniteur.fr",1137618578],["telerama.fr",1137618578],["sky-animes.com",1957771236],["soap-passion.com",1823288251],["societe.com",148285642],["sofoot.com",1091720959],["api.solvemedia.com",1022804348],["solvusoft.com",1690611608],["sonetcyber.com",282600408],["soonnight.com",348035800],["sortirensemble.com",1209141870],["soundlightup.com",1502419471],["sous-la-mer.com",1899917019],["decodesign.space-blogs.com",1823227588],["forum.sportytrader.com",940378161],["star7arab.com",1581894432],["strastv.com",101324318],["supportduweb.com",1783261286],["supprimer-spyware.com",1065681642],["syskb.com",1157221190],["t411streaming.com",1877529446],["tahiti-infos.com",[1583696782,329833275]],["jeuxvideomoinschers.fr",1583696782],["tameteo.com",1534457317],["tasante.com",1898645539],["tchatche.com",1728751685],["telechargementgratuits.com",43308363],["telecharger-jeu-pc.com",1992247562],["telechargerunevideo.com",931617286],["telesatellite.com",197846514],["fr.tennistemple.com",772933004],["terrafemina.com",1895614228],["thebadbuzz.com",327889795],["tirage-gagnant.com",1113913874],["topanalyse.com",599645922]]);

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
