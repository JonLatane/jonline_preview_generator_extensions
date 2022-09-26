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

const argsMap = new Map([[102655466,{"a":"a[target=\"_blank\"] > img[width=\"300\"][height=\"250\"],\na[target=\"_blank\"] > img[width=\"300\"][height=\"385\"],\na[target=\"_blank\"] > img[width=\"728\"][height=\"90\"]"}],[677181286,{"a":".mod_banners"}],[2073334390,{"a":"#page-body a[onclick*=\"'shift'\"][target=\"_blank\"]"}],[455372293,{"a":"#main-content > div[id][style=\"clear:both;\"] > div[align=\"center\"]"}],[337813767,{"a":"#ForumconstruireHB_ATF_300x600"}],[1696230932,{"a":"#pre_element_bloc + .post_background_contener_table0,\n#st_ad,\n[class^=\"habillage\"],\na[href*=\"/click.php?\"],\ndiv#\\32,\ndiv[id^=\"bloc_discussion_\"] > :first-child + div"}],[2016708577,{"a":".sospon_contener,\n[style=\"width:350px;cursor:pointer;padding:15px\"]"}],[1896046406,{"a":"div#\\31"}],[508809778,{"a":"#slide,\n.titre-publi"}],[1809638613,{"a":"#banniere"}],[1276365916,{"a":".simpleoFlashBanner"}],[1914417654,{"a":".fondcliquable,\n.hab"}],[10852078,{"a":".hb__ad,\ndiv[class^=\"container_native_\"],\ndiv[id^=\"container_native_\"]"}],[319700272,{"a":".megabanner"}],[117231640,{"a":"#topbar"}],[31486581,{"a":".Usenet"}],[78683850,{"a":"#wrap_pub_listing"}],[595652703,{"a":"div[style=\"height:250px; width:300px;\"],\ndiv[style=\"height:90px; width:728px;\"]"}],[1306363970,{"a":"div[style$=\"width:300px;height:250px;\"],\ndiv[style*=\"width:160px;height:600px;\"]"}],[425616564,{"a":"#pubtopmenu"}],[1611803339,{"a":".ed__news-h--native,\n.gamerprices-tab,\n.mpubas-wrapper,\ndiv[class^=\"gk__ads\"]"}],[368979731,{"a":".bup,\narticle .product"}],[1953474830,{"a":".post-google"}],[538709096,{"a":"#banner_data"}],[1129221796,{"a":"div#wrapper > div#right img[src*=\"/11/03/61/79/\"]"}],[1987858805,{"a":"#intelliTXT > .product,\n.ntSponsored"}],[242417308,{"a":"#containerBanniere1mois,\ndiv[style^=\"width: 300px; height: 250px;\"]"}],[1663806444,{"a":".topSectionContainer"}],[697550614,{"a":".top-slot"}],[351759858,{"a":"#signature_chinoise > a > span"}],[2079892531,{"a":"#mega-hab"}],[597670523,{"a":".red-one-third"}],[1313221367,{"a":".pavepub"}],[605041373,{"a":"#bloc-partenaires"}],[92945356,{"a":"#bloc-droit-haut-250-250,\n#bloc-droite-bas-250-250,\n#bloc-milieu-300-250"}],[648062730,{"a":".footerboost"}],[1754873869,{"a":".cda-iab"}],[788523685,{"a":".deuxcarres"}],[1926249727,{"a":"div[style=\"float:right; width:336px; height:560px; margin-left:10px\"]"}],[888142797,{"a":"#bar > div[style=\"height: 700px\"]"}],[761497171,{"a":"img[width=\"1015\"][height=\"221\"],\nimg[width=\"958\"][height=\"142\"]"}],[1035455361,{"a":"img[width=\"1080\"][height=\"301\"],\nimg[width=\"1080\"][height=\"398\"],\nimg[width=\"1667\"][height=\"250\"],\nimg[width=\"460\"][height=\"60\"]"}],[854871967,{"a":"img[width=\"300\"][height=\"600\"]"}],[1068222278,{"a":".bandeau_header"}],[2011000043,{"a":"#und_ban,\n.chan_banner"}],[705200858,{"a":".megaban"}],[966485918,{"a":".TPlayer.on:after"}],[1036386296,{"a":"#ads_player_inside"}],[344690248,{"a":"#mask,\n#preroll"}],[1102947125,{"a":"#side_pub1,\n#side_pub2"}],[249503657,{"a":".autopromo_hpq,\n.obox-video-player"}],[660562275,{"a":".aliencable-link,\n.hab_link"}],[14919355,{"a":".merchant__banner-wrap"}],[324671619,{"a":"#partners-wrapper"}],[1484667162,{"a":".bg-pub-interne"}],[1549713877,{"a":"a[href^=\"/p/bannieres/\"]"}],[1858794483,{"a":"#pubBando"}],[1657484161,{"a":"#banner_container"}],[505938272,{"a":".slider.container"}],[510093957,{"a":".pubs"}],[1642445460,{"a":".page-background"}],[982473172,{"a":"a[href^=\"https://db.tt/\"],\na[href^=\"https://m.do.co/\"]"}],[1641046573,{"a":".Ads"}],[1545929470,{"a":"#sidebar > [id^=\"custom_html-\"]"}],[1732016499,{"a":"#clickfakeplayer"}],[727644231,{"a":".footer-actuly"}],[150570639,{"a":"a[href^=\"/ads/\"]"}],[1667717313,{"a":".rek_ban"}],[2082935858,{"a":"#barre-partenaires"}],[1780790027,{"a":".baner"}],[1088957209,{"a":".pull-left"}],[460617733,{"a":"#banner_jv,\n#mc_sponso,\n#menu_topventes,\n#pub_carre1,\n.bloc-boutique-droite,\n.item-home-accroche-sponso,\n.part-boutique,\n.publi_info,\n.publi_info + ul,\n.sideStore,\n.sideWootbox,\na[href^=\"/sponso/\"] img"}],[1187550636,{"a":".sponso"}],[1130589459,{"a":"#banner-ig,\n#jeuAssocie,\n#meilleursPrix"}],[355071599,{"a":".bloc-best-sellers"}],[55704953,{"a":".block-concours_en_cours,\n.block-divers-partenairePremium,\n.pub_refonte,\n.widgetGA"}],[2000038961,{"a":".banner-popup,\n.ftr-banners"}],[1127910430,{"a":".node-banner"}],[891864745,{"a":"#promo-pkp,\n.bigbox-container,\n.tuileLivreRepasSante"}],[1605211537,{"a":"#linkhabillage,\n.aawp-product"}],[714769626,{"a":"#ctn_infeed"}],[1008268445,{"a":".app_aside--content_commerce"}],[1407119034,{"a":"img[src^=\"blob:\"]"}],[992981009,{"a":"#news-droite-nepasmanquer a[href^=\"http://www.materiel.net/\"]"}],[1025496066,{"a":"#jt-footerContainer,\n.ui-pnotify"}],[1609396528,{"a":"#skin"}],[1700280159,{"a":"#KPubSetTop"}],[1416880134,{"a":"div[data-ad-unit-path]"}],[708439956,{"a":"div[style=\"width:300px;height:250px;\"]"}],[1648355591,{"a":"div[class$=\"item--ad\"]"}],[775932140,{"a":"#campain-bandeau"}],[398576992,{"a":"#banner_footer,\n#promo"}],[154058958,{"a":"#lig,\n.partenaire_simple,\n.partenaire_simple_home,\n.partenaire_triple"}],[204910274,{"a":"#cams"}],[750485882,{"a":".actus-case-pub,\n.actus-home-right-pub,\n.spons"}],[1443730860,{"a":".custom-html-widget > div[style=\"min-height:250px;\"],\ndiv[style=\"min-height:260px;text-align:center;\"],\ndiv[style=\"min-height:600px;text-align:right;\"],\ndiv[style=\"min-height:90px;\"]"}],[965094244,{"a":".adContainer"}],[765633193,{"a":".encart_bandeau_haut,\n.encart_colonne"}],[663561090,{"a":"a > img[src^=\"/images/stories/U\"]"}]]);

const hostnamesMap = new Map([["forexmt4indicators.com",102655466],["formation-dz.com",677181286],["forum-airguns.com",2073334390],["forumactif.com",2073334390],["forumgaming.fr",2073334390],["forum-mdp.com",455372293],["forumconstruire.com",[337813767,1696230932,2016708577]],["forumpiscine.com",[2016708577,1896046406]],["france-alerte.com",508809778],["france-pittoresque.com",1809638613],["paruvendu.fr",1809638613],["radiofrance.fr",1809638613],["matchendirect.mobi",1809638613],["francemobiles.com",1276365916],["francetransactions.com",1914417654],["frandroid.com",[10852078,319700272]],["p-nintendo.com",319700272],["lapauseinformelle.fr",319700272],["freepik.com",117231640],["frenchddl.com",31486581],["frequence-radio.com",78683850],["futura-sciences.com",595652703],["gamalive.com",1306363970],["gamaniak.com",425616564],["gamekult.com",1611803339],["gamergen.com",[368979731,1953474830]],["generation-nt.com",[368979731,1987858805]],["gamesplanet.com",538709096],["gamopat-forum.com",1129221796],["geny.com",242417308],["get-your-rom.com",1663806444],["gfycat.com",697550614],["glenatmanga.com",351759858],["goldenmoustache.com",2079892531],["gonzai.com",597670523],["grands-reportages.com",1313221367],["montagnes-magazine.com",1313221367],["graphistesonline.com",605041373],["gratuiciel.com",92945356],["logitheque.com",92945356],["gratuit-xxx.com",648062730],["grosbill.com",1754873869],["grosnews.com",788523685],["forum.gsmhosting.com",1926249727],["guideautoweb.com",888142797],["guinee7.com",[761497171,1035455361,854871967]],["mediaguinee.org",1035455361],["framboise314.fr",854871967],["handroit.com",1068222278],["hclips.com",2011000043],["txxx.com",2011000043],["hdnumerique.com",705200858],["rugbyfederal.com",705200858],["hdstreamvf.com",[966485918,1036386296]],["vf-film.org",[966485918,1036386296]],["vf-serie.org",[966485918,1036386296]],["vf-film.top",966485918],["hellokids.com",344690248],["herault-tribune.com",1102947125],["hollywoodpq.com",249503657],["homecinema-fr.com",660562275],["igraal.com",14919355],["ijero.com",324671619],["iladit.com",1484667162],["immigrer.com",1549713877],["info-clipper.com",1858794483],["infobebes.com",1657484161],["infoconcert.com",505938272],["inovaovao.com",510093957],["cci.fr",510093957],["tennisactu.net",510093957],["intermarche.com",1642445460],["it-swarm-fr.com",982473172],["ivocommunication.com",1641046573],["ivoprint.com",1641046573],["jcbtechno.com",1545929470],["jetanimes.com",1732016499],["dpstream.info",1732016499],["simonetwealth.net",1732016499],["hds-streaming.su",1732016499],["jeunesfooteux.com",[727644231,150570639]],["rewmi.com",150570639],["senioractu.com",150570639],["zinfos974.com",150570639],["avocat.fr",150570639],["ladepeche.pf",150570639],["ophtalmo.tv",150570639],["jeux-e.com",1667717313],["jeux-gratuits.com",2082935858],["jeux-mmorpg.com",1780790027],["iphone4.fr",1780790027],["jeuxflash.com",1088957209],["jeuxvideo.com",[460617733,1187550636]],["phonandroid.com",1187550636],["jeuxvideo-live.com",1130589459],["jeuxvideopc.com",[355071599,55704953]],["jeuxvideo.fr",355071599],["jizzbunker.com",2000038961],["jolpress.com",1127910430],["journaldemontreal.com",891864745],["journaldugeek.com",1605211537],["journaldunet.com",[714769626,1008268445]],["linternaute.com",1008268445],["jpost.com",1407119034],["judgehype.com",992981009],["juritravail.com",1025496066],["jvn.com",1609396528],["koaci.com",1700280159],["konbini.com",1416880134],["koreus.com",708439956],["picasion.com",708439956],["kozikaza.com",1648355591],["ktotv.com",775932140],["lacanausurfinfo.com",398576992],["lachainemeteo.com",154058958],["lafranceapoil.com",204910274],["lagazettedescommunes.com",750485882],["lalanguefrancaise.com",1443730860],["lastminute.com",965094244],["t-algerie.com",965094244],["latribunedelart.com",765633193],["launedalgerie.com",663561090]]);

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
