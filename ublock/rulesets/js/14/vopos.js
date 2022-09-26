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

const argsMap = new Map([[1154634838,{"a":"a[href*=\"&tag=freereseaufr-\"],\ndiv[style^=\"width: 728px; height: 90px;\"]"}],[689639909,{"a":".robots-nocontent > table a > img"}],[1097587738,{"a":"img[onclick^=\"window.open('http://logiciel.telechargement.fr/redirprod.html?\"]"}],[1646251070,{"a":"#LiensPartenaires,\n#partenairescontenu,\n#remonteesaktu,\n#soldes,\n#surleweb,\n#trousse,\n.shopping_carrousel_produit,\n.troiscent,\n.zoning--300-600,\n.zoning--726-90,\n.zoning--sticky,\ndiv[style=\"margin: 0 auto;width: 1000px;background-color:#fff;height:300px;border-bottom: 4px solid #2d98e0\"]"}],[1929232336,{"a":"#pud_search"}],[1801102877,{"a":"#troiscents"}],[1377865195,{"a":"img[alt=\"Banniere_ENI\"]"}],[1267209077,{"a":"#insidepic_widget"}],[2064711967,{"a":"a[href^=\"https://experiences.microsoft.fr/\"]"}],[1292074151,{"a":".c-prebid,\n.container-ads,\n.tranche-obd"}],[35669471,{"a":".adblock"}],[828556833,{"a":".OUTBRAIN"}],[1262081887,{"a":"#box-shopping"}],[1146863597,{"a":".offre"}],[184565570,{"a":"#gbFnac300,\n#gb_home_sponsor,\n#gb_megaban,\n#overlayFnac,\n#top_sales_slider,\n.footer__partners,\n.noPremium"}],[1479609699,{"a":"#pubLarge"}],[2089929509,{"a":".header-widget-area"}],[2016216296,{"a":"#habitdroit,\n#habitgauche"}],[318957966,{"a":".GGFODTBDCS"}],[153134099,{"a":".view-id-partenaires,\n.view-partenaires"}],[2044032185,{"a":".categoryBanner"}],[1948200652,{"a":".sideadd"}],[486734727,{"a":".right-minipub"}],[1341094790,{"a":".banner-halfpage"}],[129465509,{"a":"a[href^=\"https://www.ebay.fr/itm/\"]"}],[878315786,{"a":"#ban_big,\n#les_pubs_locales"}],[2134593838,{"a":"div[style=\"width: 445px; margin: 8px auto; text-align: center; background-color: #fff; border: 1px solid #e4e4e4;\"]"}],[1493307853,{"a":"#content-shadow"}],[1978874891,{"a":"[class^=\"regie_\"],\na[href^=\"http://www.guide-piscine.fr/scripts/gp_div_clic.php?\"]"}],[436129830,{"a":"#masthead"}],[1013688097,{"a":"#footer_img"}],[1367722319,{"a":".widget_affiliation_widget"}],[1509345355,{"a":"#pubbott"}],[1651433854,{"a":".incontent"}],[647016452,{"a":".adsense"}],[494840106,{"a":".pub-transfo"}],[80174411,{"a":"a[href^=\"/redirect.html?\"]"}],[826860827,{"a":".field-name-bloc-pub-1ere-sidebar-contenu-3,\n.field-name-pub-sidebar-first-content"}],[1268647419,{"a":".jcarousel"}],[2072619031,{"a":"#block-gsphere-refurb,\na[href^=\"http://aos.prf.hn/\"] img"}],[146985513,{"a":".rec_download,\n.support_guide_download_upper"}],[717063535,{"a":".topsky"}],[228503951,{"a":"#header_top"}],[984042197,{"a":".center.bigPub,\nbody > #msgUser"}],[334648832,{"a":".bigPub"}],[1929862347,{"a":"img[src$=\"Infrastructure_300x250_FR.gif\"]"}],[617448945,{"a":"#topBanner"}],[945062953,{"a":".Pblc,\n.Pblc2,\n.boutiqueAd"}],[2122995366,{"a":".regie_20,\na[href*=\"_clic.php?\"]"}],[1734743455,{"a":".entry-footer,\na[href*=\"?utm_campaign=\"],\na[href*=\"leadpages.co/\"],\na[href=\"http://jemangejemincis.com/cb/\"],\na[href=\"https://track.webgains.com/\"]"}],[1156216377,{"a":"[data-fallback-type=\"image\"]"}],[1216781874,{"a":"#bannerGameSkyscraperRight"}],[715384546,{"a":".umbg-overlay-link,\na[href*=\"://www.ludeek.com/\"] > img"}],[1767515419,{"a":".skyscraper-container"}],[2139819961,{"a":".widgetAmis,\n.widgetVrac"}],[1294737609,{"a":"#ctn_position2"}],[354572441,{"a":"#ctn_right,\n.ccmcss_oas_top"}],[290239173,{"a":".wallpaper-link"}],[800888170,{"a":".rightnav[style=\"background-color: #efefef;\"]"}],[1897235148,{"a":".megaBan"}],[262297268,{"a":".merchandising-modules,\n.priceminister,\n.results-lrec"}],[763740076,{"a":"div[class^=\"snp-\"]"}],[288616182,{"a":".caradisiac"}],[2069270330,{"a":"#encart_dernieres_annonces"}],[1581902825,{"a":"#immobilier"}],[1421776185,{"a":"#banniereTop,\n#materielOccasion"}],[1781823472,{"a":".hor_banners"}],[1766535010,{"a":"#marketing_top,\n#pubsuper"}],[1858055891,{"a":"#appel_MT_home_orange_fibre"}],[505321224,{"a":"#block-views-remote-products-block-home,\n.moduletable-banner,\n.product-shop,\n.push--shop"}],[1562919715,{"a":".basic-pub,\n.page-pub,\n.tile--flag--partner"}],[1104609279,{"a":".lien_hab,\n.lien_habillage"}],[1295666605,{"a":".banner-url"}],[576143090,{"a":"#partenaires-aside,\n.bandeau-annonce,\n.conteneur-sas,\n.item-partenaire"}],[364828264,{"a":".block-partner"}],[1342069647,{"a":".bandeau-abo,\n.bloc-payant,\n.if-abo"}],[1358249955,{"a":"#hp_banniere_haute,\n.pane-dpipub-article-banniere-haute,\nr-pub"}],[980934431,{"a":"#modal_chrome,\n.modal-backdrop"}],[1023708444,{"a":"#appel_BR_home_BPI_Stonest"}],[600202009,{"a":"#lht-space-ad"}],[1386450748,{"a":".fig-adgps"}],[779592800,{"a":"#Fe_Gigaban,\n.fig-promo-jardin,\n.fig-widget-satellite,\n.figsco__ad__container,\n.figsco__ads,\n.figsco__ads__title,\n.fim-annonces-similaires,\n.fim-container-bloc-annonces,\n.le-figaro-ad-bar-custom,\n.oto-blocvit,\n.pane-bloc-ad,\n.pub-carrousel-mini,\n.pub-icone,\n.pub-zoom,\n.s24-pub,\n.s24-shopping,\n.s24-thematique--igraal,\n.spec-ops-box,\n.tvm-ads-pave,\n.tvm-boutique,\n.tvm-boutique-iframe,\n.tvm-reagir__pub,\na[href^=\"http://lefigaro.explorimmo.com/resultat/annonces.html?\"],\na[href^=\"http://www.ticketac.com/?utm_source=\"],\na[href^=\"https://go.babbel.com/\"],\na[target=\"_blank\"] > img[style=\"width: 463px; height: 170px;\"],\ndiv[class*=\"mad__partenaire__\"],\ndiv[class*=\"mad__pub__\"]"}],[554027366,{"a":".mod.breve.pave-bg"}],[1444908159,{"a":"#appel_JC_home_BPI_Stonest"}],[1379941304,{"a":"#megabanner_bottom,\n#megabanner_top,\n.article-context-produit,\n.shoopingbox_products"}],[1375559132,{"a":"#js_deroule_ope,\n#lemonde-pub-logo_texte,\n#lemonde-pub-pave_bas,\n#lemonde-pub-pave_haut,\n#lemonde-pub-pave_milieu,\n#lemonde-pub-web_partenariat,\n#panneau-programme-emploi,\n.block-partners,\n.parmonster,\n.parstreet,\n.poops,\n.reco_cross_site_outbrain,\n.tuto-pub,\n.tuto-pub + [class$=\"_ad\"],\n[data-partner=\"bienici\"],\na[href=\"#panneau-programme-emploi\"],\na[href^=\"https://analytics.barnebys.sh/?\"],\ndiv[data-partner=\"barnebys\"]"}],[254307644,{"a":".rubrique_marque_fleuve"}],[126217269,{"a":".fixme-container,\ndiv[style=\"min-height:280px;\"],\ndiv[style=\"width:336px;height:600px;\"]"}],[1373001537,{"a":"div[id^=\"trg_\"]"}],[1997374426,{"a":"a[href*=\" \"]"}],[2096945585,{"a":".gradient-sponsor + .bloc-container,\n.mpu,\n.publi-info"}],[1615487879,{"a":".slpartner"}],[1381164605,{"a":"#block-lemouv_bloc-pub_ftv_right"}],[1833237249,{"a":"#block-lemouv_bloc-pub_ftv_top"}],[777327957,{"a":"#b_top,\n.nveco-widget"}],[1250660740,{"a":".footerSubscribe,\n.paywall-sticky,\n.sub-anchor"}],[154679144,{"a":"#habillage-pub,\na[href=\"http://www.ligloo.fr\"]"}],[594472335,{"a":".premium"}],[227643203,{"a":".alter"}]]);

const hostnamesMap = new Map([["free-reseau.fr",1154634838],["assiste.com.free.fr",689639909],["dl.free.fr",1097587738],["portail.free.fr",1646251070],["search.free.fr",1929232336],["zimbra.free.fr",1801102877],["freemindparlexemple.fr",1377865195],["freenews.fr",1267209077],["frenchweb.fr",2064711967],["funradio.fr",1292074151],["rtl.fr",1292074151],["rtl2.fr",1292074151],["fusac.fr",35669471],["gala.fr",[828556833,1262081887]],["journaldesfemmes.fr",[828556833,1294737609]],["voici.fr",828556833],["galaxynote.fr",1146863597],["gameblog.fr",184565570],["gamer-network.fr",1479609699],["geek-malin.fr",2089929509],["geekopolis.fr",2016216296],["genybet.fr",318957966],["geste.fr",153134099],["girlsgogames.fr",2044032185],["gmx.fr",1948200652],["goldenboys.fr",486734727],["golem13.fr",1341094790],["goole.fr",129465509],["grandecran.fr",878315786],["groupon.fr",2134593838],["guadeloupe-paradise.fr",1493307853],["guide-piscine.fr",1978874891],["gulli.fr",436129830],["hardware.fr",1013688097],["hinata-online-community.fr",1367722319],["histoire-pour-tous.fr",1509345355],["hitek.fr",1651433854],["hooper.fr",647016452],["pooki.fr",647016452],["horoscope.fr",494840106],["hotvideo.fr",80174411],["humanite.fr",826860827],["idf1.fr",1268647419],["igen.fr",2072619031],["imobie.fr",146985513],["instinct-voyageur.fr",717063535],["intellego.fr",228503951],["iphonesoft.fr",[984042197,334648832]],["iphonetweak.fr",334648832],["it-connect.fr",1929862347],["itele.fr",617448945],["jardiner-malin.fr",945062953],["jds.fr",2122995366],["jemangejemincis.fr",1734743455],["jeu.fr",1156216377],["jeuxdelajungle.fr",1216781874],["jeuxetcompagnie.fr",715384546],["jeuxjeuxjeux.fr",1767515419],["joueurdugrenier.fr",2139819961],["sante.journaldesfemmes.fr",354572441],["journaldumusulman.fr",290239173],["joursferies.fr",800888170],["kamaz.fr",1897235148],["kelkoo.fr",262297268],["la-tendinite.fr",763740076],["lacentrale.fr",288616182],["ladepeche.fr",[2069270330,1581902825]],["midilibre.fr",1581902825],["lafranceagricole.fr",1421776185],["lagence.fr",1781823472],["lamanchelibre.fr",1766535010],["lamontagne.fr",1858055891],["lanutrition.fr",505321224],["laposte.fr",1562919715],["laptopspirit.fr",1104609279],["prix-portables.fr",1104609279],["lareclame.fr",1295666605],["largus.fr",576143090],["latribune.fr",364828264],["lavie.fr",1342069647],["lavoixdunord.fr",1358249955],["le-buzz.fr",980934431],["leberry.fr",1023708444],["leboncoin.fr",600202009],["lefigaro.fr",[1386450748,779592800]],["etudiant.lefigaro.fr",554027366],["lejdc.fr",1444908159],["lejournaldelamaison.fr",1379941304],["mariefrance.fr",1379941304],["lemonde.fr",1375559132],["abonnes.lemonde.fr",254307644],["paroles2chansons.lemonde.fr",[126217269,1373001537]],["paroles.net",1373001537],["lemondedekevin.fr",1997374426],["hdss.la",1997374426],["x1337x.ws",1997374426],["lemondeinformatique.fr",2096945585],["lemoteur.fr",1615487879],["lemouv.fr",[1381164605,1833237249]],["mouv.fr",1833237249],["lenouveleconomiste.fr",777327957],["leparisien.fr",1250660740],["leparking.fr",[154679144,594472335]],["leparking-moto.fr",[594472335,227643203]]]);

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
