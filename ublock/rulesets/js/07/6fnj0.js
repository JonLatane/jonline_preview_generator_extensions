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

const argsMap = new Map([[1955746076,{"a":".habillage-left,\n.habillage-right"}],[958981487,{"a":".habillage-top"}],[1698339356,{"a":"#page-sexcam--roomlist,\na[href^=\"http://store.letagparfait.com/\"]"}],[298046060,{"a":".adv"}],[1142861307,{"a":".add"}],[1705555920,{"a":"#adBlockDetect"}],[1986862088,{"a":"#pub2"}],[424042795,{"a":".footer_banners"}],[2078462909,{"a":".addPic,\n.campaignImage"}],[673893695,{"a":"#teaser3"}],[1708773172,{"a":".big-banner2,\n.sw-banner,\n.zoom"}],[528735246,{"a":"#block-larubriquesponsoriseinternational"}],[1736743204,{"a":"#bandeauBas,\n.bandeauTrouve"}],[207221078,{"a":".popup-adblocker"}],[179287747,{"a":"div[align=\"center\"] > #tester"}],[393794927,{"a":".menu_droite_partenaire,\n.menu_droite_thumb:first-child"}],[127795039,{"a":".noBlock__content"}],[803494483,{"a":".skin-link"}],[2124545996,{"a":".ln__a-dc,\n.ln__sb__second > a[href^=\"/publicite/\"],\na[href^=\"/publicite/\"]"}],[882117210,{"a":"div[omerlo-ad-formats]"}],[1831426461,{"a":".bannergroup_pave"}],[296879810,{"a":".trtbl"}],[672962831,{"a":"#fakeplayer"}],[1123033874,{"a":"#floatLayer1"}],[1466408112,{"a":"#bannerRightTop"}],[2045604101,{"a":".dlTopBanner,\n.l_deepl_ad_container"}],[1342760055,{"a":"#googleAdSense,\n.app_amazon_content,\ndiv[id^=\"Crt-\"]"}],[1152146601,{"a":"#adni_widgets-2,\n.description + .telechargement"}],[1398004880,{"a":"#intersticiel,\n.pub_vip_0"}],[2130832184,{"a":"#mv-info > a[target=\"_blank\"] > img,\n.mvic-desc > a[target=\"_blank\"] > img"}],[1891780323,{"a":"#header_empl,\na[href^=\"http://www.lyonmag.com/home/habillage/\"]"}],[1190758935,{"a":"#home-top-offers,\n.covering,\n.m-coveringIab,\ndiv[style*=\"/ads/\"]"}],[1928435055,{"a":"#simplemodal-container,\n#simplemodal-overlay,\n#topappWidget"}],[1061895239,{"a":"#arch"}],[132583208,{"a":"#sidebar > div[id^=\"custom_html\"],\na[href^=\"https://www.macboost.net\"]"}],[300768680,{"a":".annonce"}],[767932627,{"a":".extra-block"}],[1146007237,{"a":"#idkey1ban,\n#idkey2ban"}],[846884126,{"a":"a[href*=\"/banners/click/\"]"}],[1829918847,{"a":"#boutiqueRight"}],[1568414228,{"a":".cegg_widget_products"}],[1302949123,{"a":".deal_daywoo,\n.elementor-widget-heading,\n.elementor-widget-post_carousel_mod,\n.mediad,\na[href^=\"https://www.bons-plans-elise.fr/\"],\ndiv[class^=\"deals\"]"}],[582864972,{"a":"#pub_MAP_ROTATION_PUB_EMPLACEMENT_TOPMAP,\ndiv[id*=\"-pub-\"],\ndiv[id*=\"-publi-\"]"}],[1660183788,{"a":"#blocSponsor"}],[643291208,{"a":"#sliderPartenaire"}],[585520267,{"a":"ins[id^=\"aswift_\"]"}],[1276937769,{"a":"#cg_skin"}],[1694466071,{"a":".partenaire_pave"}],[1120767203,{"a":".brand-link"}],[425054141,{"a":"#ban970250,\n#bangeante,\n#block-up,\n#homePromoEd,\n.external-link"}],[1209881061,{"a":".ad-pane"}],[309922757,{"a":"#a300x600,\n.leftHabillage,\n.rightHabillage"}],[372435947,{"a":"#wafasalf"}],[1115475697,{"a":"a[href^=\"/index.php?option=com_banners\"]"}],[1134544011,{"a":".media-in-article-header"}],[156299954,{"a":".cold-bloc-video-generique"}],[1847983015,{"a":".int-mb-fond,\n.megabann,\na[href*=\"&utm_campaign=\"]"}],[1202959714,{"a":"#backgrounddiv,\n#bouyguestelecom,\n#home_mea_1,\n#home_mea_2,\n#home_mea_3,\n.pubCarre,\n.pub_combo,\n.topListingSp"}],[1837167114,{"a":"a[href*=\"/-\"] > img"}],[1861840094,{"a":"#bom_ban"}],[727741171,{"a":".cluj"}],[128774394,{"a":".mod-publiinfos,\n[href*=\".xiti.com\"] > img,\na[href*=\"https://www.ardoiz.com/\"]"}],[992721977,{"a":"#featured_content #div-gpt-ad-lowerbox-featured,\n#sidebar > #dv-gpt-ad-bigbox-wrap"}],[337964777,{"a":".hotelteaser,\n.promote_large"}],[705816968,{"a":"#partners"}],[1777358237,{"a":".ftr_partners,\n.ftr_pub,\n.partenaires-header,\na[href*=\"=H_pub_\"]"}],[244164472,{"a":"#header3"}],[1387854072,{"a":".pane-mbspush"}],[1737274059,{"a":"#ad-display,\n#banner-offer,\n.tpa,\n.widget_custom_html"}],[44052906,{"a":"a[href^=\"#\"].btn-fastest"}],[860830045,{"a":".normalCoupProjo,\n.titreCoupProjo"}],[641308253,{"a":"#overlay"}],[1553033115,{"a":".adcontainer"}],[1474908316,{"a":".aside-ad,\n.logo > a[target=\"_blank\"] > img[width=\"300\"],\n.non-empty-ad,\n.promobanner,\n.sponsorship,\n.startpage > div.refreshbody[style^=\"top:\"],\n.stripecontainer[data-section-id=\"stripe.msstore\"],\n.win10promo"}],[132614575,{"a":"#pub3,\ndiv[id^=\"pubsousmenu\"]"}],[1920640411,{"a":".blockrightpub"}],[1766665207,{"a":"[class^=\"ads_\"]"}],[1721142822,{"a":".gad,\n.pad"}],[1364385356,{"a":"a[href^=\"http://sigma-beauty.7eer.net/\"]"}],[774156491,{"a":".inner a[onclick*=\"'shift'\"][target=\"_blank\"]"}],[1520299269,{"a":".argus-logo,\n.cetelem"}],[164313844,{"a":"#bigAdd"}],[796477796,{"a":".modal_background,\n.nm_ad,\n.nm_header_ad"}],[130671228,{"a":".back_content,\n.content_kelkoo_link"}],[1652044333,{"a":".partners"}],[223249570,{"a":"#article-colonne-partenaires,\n.ObsBox-Ligatus,\n.bloc-partenaires,\n.bloc-partners,\n.leGuideContainer,\n.obs-pub,\n.partenaires-services,\n.r89-partenariats--vertical,\n.slice--ad,\na[href*=\"/leguide-shopping.\"],\na[href*=\"/les-bons-plans-shopping/\"],\na[href*=\"?partner=\"],\na[href*=\"leguide.com/\"]"}],[1092377124,{"a":".ObsPartners"}],[1489858148,{"a":".box-simulation-immo,\n.promo-bottom-art,\na[href*=\"?partnerlinkid=\"]"}],[2045199630,{"a":".sponsor-home,\n.sponsor-home-square,\n.sponsor-top"}],[1714618036,{"a":"#banners"}],[968769290,{"a":".is-original-antlion,\n.is-wrong-porcupine,\n.oopnative,\n.wrap > div.top-bloc"}],[2029644586,{"a":".cyberguerre-end-block-post,\n.native.ic-native"}],[1699157403,{"a":".full-cover.interstitiel-container,\n.loader-container"}],[787999746,{"a":".td-ss-main-sidebar > .td_block_template_1.widget:not(:first-child)"}],[1539823454,{"a":"center > div[style=\"font-size:5px; color: #777; text-align: center;text-transform: uppercase;\"]"}],[49283893,{"a":"#box_link_left,\n#box_link_right,\n#box_link_top"}],[1501029532,{"a":"#pub_rectangle"}],[1355924985,{"a":".apnmndd-single"}],[1557523244,{"a":".footer"}]]);

const hostnamesMap = new Map([["le2minutes.com",[1955746076,958981487]],["senscritique.com",1955746076],["lebonfap.com",[1698339356,298046060]],["letagparfait.com",298046060],["rajacasablanca.com",298046060],["fusac.fr",298046060],["laposte.fr",298046060],["lefigaro.fr",298046060],["lebonguide.com",1142861307],["online-image-editor.com",1142861307],["gmx.fr",1142861307],["ledauphine.com",1705555920],["ledemondujeu.com",1986862088],["musculaction.com",[1986862088,132614575]],["planeterenault.com",1986862088],["quiveutdufromage.com",1986862088],["minuteur-en-ligne.fr",1986862088],["legagnant.com",424042795],["lejsl.com",2078462909],["lelmanga.com",673893695],["lepetiteconomiste.com",1708773172],["lepetitjournal.com",528735246],["les-terrains.com",1736743204],["lesacdechips.com",207221078],["forum.lesarnaques.com",179287747],["lesdebiles.com",393794927],["lesinrocks.com",[127795039,803494483]],["funradio.fr",803494483],["rtl.fr",803494483],["lesnumeriques.com",2124545996],["lesoleil.com",882117210],["liberte-algerie.com",1831426461],["liens-telechargement.com",296879810],["liensporno.com",672962831],["streampourvous.com",672962831],["hds-stream.pro",672962831],["liguendirect.com",1123033874],["lil-life.com",1466408112],["linguee.com",2045604101],["linguee.fr",2045604101],["linternaute.com",1342760055],["logitheque.com",1152146601],["loisirados.com",1398004880],["lunchboards.com",2130832184],["lyonmag.com",1891780323],["ma-reduc.com",1190758935],["mac4ever.com",1928435055],["macbidouille.com",1061895239],["macplanete.com",132583208],["madagascar-tribune.com",300768680],["maddyness.com",767932627],["madstef.com",1146007237],["maghrebemergent.com",846884126],["maghrebemergent.info",846884126],["magicmaman.com",1829918847],["maison-et-domotique.com",[1568414228,1302949123]],["maxiapple.com",1568414228],["maisonapart.com",582864972],["maisonbrico.com",1660183788],["maitresrestaurateurs.com",643291208],["malekal.com",585520267],["mamytwink.com",[1276937769,1694466071]],["manga-sanctuary.com",1276937769],["mamzouka.com",1120767203],["manga-news.com",425054141],["mapcustomizer.com",1209881061],["mappy.com",309922757],["marocannonces.com",372435947],["mayottehebdo.com",1115475697],["mediacritik.com",1134544011],["mediadico.com",156299954],["meilleures-grandes-ecoles.com",1847983015],["meilleures-licences.com",1847983015],["meilleurs-masters.com",1847983015],["meilleurmobile.com",1202959714],["meilleurs-hebergeurs.com",1837167114],["memoclic.com",1861840094],["meteocity.com",727741171],["meteofrance.com",128774394],["meteomedia.com",992721977],["meteosun.com",337964777],["miroirsocial.com",705816968],["netbeopen.com",705816968],["slateafrique.com",705816968],["mistergooddeal.com",1777358237],["mobiles-actus.com",244164472],["monbestseller.com",1387854072],["monpetitforfait.com",1737274059],["montorrent.com",44052906],["moteurs-regionaux.com",860830045],["mp4upload.com",641308253],["e-wok.tv",641308253],["msn.com",[1553033115,1474908316]],["sourds.net",1553033115],["mystere-tv.com",1920640411],["narkive.com",1766665207],["tourte.org",1766665207],["nautiljon.com",1721142822],["needsandmoods.com",1364385356],["neogeo-system.com",774156491],["neowebcar.com",1520299269],["neurozinzin.com",164313844],["nicematin.com",796477796],["nintendo-master.com",[130671228,1652044333]],["caci.dz",1652044333],["lavenir.net",1652044333],["savefrom.net",1652044333],["ogaming.tv",1652044333],["nouvelobs.com",[223249570,1092377124,1489858148]],["challenges.fr",1489858148],["novaplanet.com",2045199630],["nticweb.com",1714618036],["numerama.com",968769290],["cyberguerre.numerama.com",2029644586],["numero.com",1699157403],["observalgerie.com",787999746],["onaregarde-pourvous.com",1539823454],["onlinetri.com",49283893],["onvasortir.com",1501029532],["opnminded.com",1355924985],["orientation-chabab.com",1557523244]]);

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
