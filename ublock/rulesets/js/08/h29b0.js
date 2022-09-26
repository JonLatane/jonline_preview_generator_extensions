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

const argsMap = new Map([[1754350928,{"a":"a[href*=\"&utm_\"]"}],[1219430153,{"a":"a[href*=\"/linkout/\"]"}],[583849505,{"a":".croco_wrapper,[onclick^=\"_\"],[onclick^=\"var\"],[style*=\"position:relative; height: 90px;\"]"}],[180438836,{"a":".c-pwned-gg"}],[1893437792,{"a":".abspos"}],[1176968802,{"a":"#liste-webcams"}],[549471747,{"a":"a[href*=\"?utm_source=\"]"}],[847099445,{"a":".g1-ad,\n.g1-banner,\nimg[alt=\"PUBLICITE\"]"}],[242355919,{"a":"a[rel=\"nofollow\"] > img"}],[486889882,{"a":".module_annonce"}],[741965366,{"a":"#banniereRight"}],[118012668,{"a":".banniere"}],[2095492121,{"a":".lienExterne"}],[1629637741,{"a":"body > a.lienExterne"}],[1670865590,{"a":"#Layer1,\n#bLayer"}],[2132025366,{"a":".banner1"}],[1001589113,{"a":"a[href=\"http://www.afromeet.com/\"]"}],[2146235865,{"a":"[id^=\"pbad_\"]"}],[1244933003,{"a":".land-management-sgs"}],[1277012541,{"a":"#floatdiv"}],[1784688979,{"a":"#myModal,\n.ban_holder,\n.nbs-flexisel-container"}],[660526378,{"a":"a[href^=\"/component/banners/\"]"}],[779412087,{"a":"#ad"}],[1554254912,{"a":".interessant"}],[1659506202,{"a":".cellulePUB"}],[1339273188,{"a":"#partenaires"}],[1293850484,{"a":"#pub1"}],[1999495526,{"a":"#icegram_messages_container"}],[1717971366,{"a":".alger-in"}],[655778784,{"a":".local-home-300x600,\nimg[width=\"300\"][height=\"500\"]"}],[1848857782,{"a":"img[width=\"300\"][height=\"250\"]"}],[622721332,{"a":"img[width=\"728\"][height=\"90\"]"}],[406906784,{"a":".pubpub"}],[968670273,{"a":"#AlireAussi,\n#bglink,\n#bloc_pub_sprt,\n#boxes,\n#pub_300_acc,\n#pub_rand300a,\n#pub_rand300b,\n#pubsousVid,\ndiv[class^=\"pub300\"],\ndiv[class^=\"pub600\"],\ndiv[class^=\"pub728\"]"}],[263936006,{"a":"#flottante_droite,\n#flottante_gauche,\n#topbanner_wrapper,\na[class][data-track][href],\ndiv[class^=\"spu-\"]"}],[198482526,{"a":".g-dyn"}],[1632369952,{"a":".bg-link-left,\n.bg-link-right"}],[409178813,{"a":".addInfos + a"}],[207614919,{"a":"a[href^=\"http://www.amazon.fr/gp/product/\"]"}],[205364227,{"a":"#habillage-right,\n#habillage-top,\ndiv[style=\"width:300px; height:250px;margin:10px; margin: 0 auto; padding:15px 0; clear:both;\"]"}],[500288387,{"a":".main-content > section.my-4 > .has-text-centered > div[style=\"margin:0; min-height: 90px\"],\n.skyscraper"}],[912472221,{"a":"#cb-bg-to,\n.cb-sidebar-widget"}],[1477156431,{"a":"#sponsor"}],[824872261,{"a":"#BlocPartenaires"}],[1035928933,{"a":".adsbygoogle"}],[1707922114,{"a":"#ad1"}],[1848234050,{"a":".rborderpurple"}],[738497234,{"a":".HB-Modal"}],[83967495,{"a":"#publeft"}],[1706609448,{"a":"a[href*=\"/?part=\"][target=\"_blank\"]"}],[192549956,{"a":"#index-right > div[id^=\"aar\"],\n#index-sp-int,\n.page-content > div[id^=\"aac\"],\n.skyscrapper-content,\na[href*=\"&ref=\"]"}],[2025455294,{"a":"#precontent,\n.af-block-native,\na[href^=\"http://hyperurl.co/\"]"}],[1279433649,{"a":"#slidebox"}],[527199797,{"a":"#header_3,\ndiv[style=\"position:relative;width:728px;height:90px;\"]"}],[509423808,{"a":".banner_sp,\n.banner_sp_art,\n.banner_sp_cat,\n.blc_300x250_blanc,\n.bloc_728x90_brd,\nbody > a > img"}],[1282725450,{"a":".td-banner-wrap-full"}],[684326042,{"a":"#habillage_a,\n#habillage_b,\n#habillage_flash"}],[998568167,{"a":"#header72890"}],[829664722,{"a":".ipsDataItem a[href*=\"advertisement&ad=\"] > img"}],[2141884868,{"a":"#arx_home_partenaires"}],[1180576322,{"a":".px_container"}],[84930421,{"a":".header-banner"}],[286537401,{"a":"img[width=\"280\"][height=\"425\"]"}],[851922993,{"a":"a[href^=\"/goto/\"]"}],[162207767,{"a":"a > img[alt^=\"Pub\"]"}],[1749639708,{"a":".pub-1000x90-top,\n.pub-300x250"}],[1211805181,{"a":"#bloc_partenaire,\n#partenaire_premium,\n#skip-link,\n.banner-background,\n.block-bati-pub,\n.emploi,\n.partenaire-wrapper,\n.selection-produitheque,\n.type-NAT_HOME,\n.type-native,\n.type-publi"}],[994536881,{"a":".annonce_immo"}],[2093869032,{"a":"#habillage"}],[2014275197,{"a":"#hab_click,\n#hab_click_side,\n.ban-top,\n.interne-300x140,\n.pub-interne-top"}],[1818560938,{"a":"#text-159,\na[href^=\"http://www.moncoachingminceur.com/index.php\"]"}],[1729737805,{"a":".bt__ad,\na[href^=\"/stat/clic.php?\"]"}],[624394420,{"a":"a[href*=\"smartadserver.com/call/cliccommand/\"]"}],[1144156067,{"a":"#habillage_cliquable,\n#lien_brasserie_commerce"}],[629635058,{"a":"#banner_left,\n#banner_right,\n#banner_top,\na[href^=\"/partner/\"]"}],[1680674166,{"a":"#pubSidebar1"}],[983715406,{"a":"#Tpromo"}],[1009858862,{"a":"#AjaxCarreEditoIoomyz"}],[338126118,{"a":".OffreHabitat"}],[1567196938,{"a":".colStickyWrapperP2"}],[84985631,{"a":".iookaz"}],[1818595171,{"a":"#nos_partenaires"}],[1618834586,{"a":".view-pub"}],[1351736576,{"a":".bann"}],[505311179,{"a":".column-left-inner"}],[277341590,{"a":"#sponsor250"}],[2073101136,{"a":".sponsor"}],[985231432,{"a":"#pageflip"}],[922517803,{"a":".cyt-affi-wrapper"}],[1355312318,{"a":"#ads"}],[1599893596,{"a":"#products-export"}],[739619364,{"a":".popover_spygasm"}],[104328244,{"a":"#ladivvid,\n.l-top__header,\na[href*=\"/rf/\"][style],\ndiv[class][style^=\"background\"]"}],[1444608173,{"a":".cover-banner"}],[859799148,{"a":"#dropin,\n.xo-banner-ad-footer"}],[347170999,{"a":"#banner-wrapper,\n#doc-partenaires,\n#footer-partenaires,\n#sponsored,\n.partenaire-bourse"}],[487408337,{"a":".bloc-liens-partenaires,\n.injected.block,\n.l-header__gigaban,\n.smart,\na[href^=\"http://ads.\"]"}],[322770771,{"a":".partenaires"}],[681116856,{"a":"a[href*=\"smartadserver.com/h/cc?imgid=\"]"}]]);

const hostnamesMap = new Map([["3dnatives.com",[1754350928,1219430153]],["audiofanzine.com",[1754350928,192549956]],["lesimprimantes3d.fr",1754350928],["elwatan.com",1219430153],["3oloum.com",583849505],["ahladalil.com",583849505],["ahlamontada.com",583849505],["alamontada.com",583849505],["arabepro.com",583849505],["darkbb.com",583849505],["easyforumpro.com",583849505],["fcmulhousefans.com",583849505],["forum2jeux.com",583849505],["forumactif.com",583849505],["forums-actifs.com",583849505],["gid3an.com",583849505],["lebonforum.com",583849505],["manager-fifa.com",583849505],["own0.com",583849505],["passionmilitaria.com",583849505],["sorcieremonique.com",583849505],["walkingdead-rpg.com",583849505],["yoo7.com",583849505],["ze-43eme.com",583849505],["forumactif.fr",583849505],["forumpro.fr",583849505],["superforum.fr",583849505],["1fr1.net",583849505],["banouta.net",583849505],["forum-gratuit.net",583849505],["forumalgerie.net",583849505],["jordanforum.net",583849505],["orizzontescuolaforum.net",583849505],["syriaforums.net",583849505],["7olm.org",583849505],["forumactif.org",583849505],["galoppourlavie.org",583849505],["750g.com",180438836],["a10.com",1893437792],["a40ans.com",1176968802],["abcbourse.com",549471747],["meteofrance.com",549471747],["abidjanshow.com",847099445],["achat-bitcoins.com",242355919],["actu-environnement.com",[486889882,741965366,118012668]],["emploi-environnement.com",[741965366,118012668]],["chouf-chouf.com",118012668],["webfrance.com",118012668],["actualitte.com",2095492121],["bdzmag.actualitte.com",1629637741],["africanmanager.com",1670865590],["afrik-cuisine.com",2132025366],["afroo.com",1001589113],["agate-france.com",2146235865],["agenceecofin.com",1244933003],["agroligne.com",[1277012541,1784688979,660526378]],["auto-utilitaire.com",[1277012541,527199797,509423808]],["mobilealgerie.com",[1277012541,509423808]],["zone911.com",660526378],["ahlaejaba.com",779412087],["zalotech.com",[779412087,1355312318]],["net-iris.fr",779412087],["orange.fr",779412087],["vido.fun",779412087],["radio.co.ma",779412087],["ajoutezvotresite.com",1554254912],["akelys.com",1659506202],["alalettre.com",[1339273188,1293850484]],["annonces-automobile.com",1339273188],["fun-trades.com",1339273188],["lemoteurdusexe.com",1339273188],["saucissonsexe.com",1339273188],["ucpa-vacances.com",1339273188],["portail.free.fr",1339273188],["hardware.fr",1339273188],["ouifm.fr",1339273188],["ledemondujeu.com",1293850484],["quiveutdufromage.com",1293850484],["minuteur-en-ligne.fr",1293850484],["matchendirect.mobi",1293850484],["algerianmag.com",[1999495526,1717971366]],["avis-express.com",[1999495526,84930421,286537401]],["algerie-eco.com",[655778784,1848857782,622721332]],["francoischarron.com",[1848857782,622721332]],["soonnight.com",1848857782],["framboise314.fr",[1848857782,622721332]],["jeu.fr",[1848857782,622721332]],["undernews.fr",[1848857782,622721332]],["israelmagazine.co.il",[1848857782,198482526]],["maliweb.net",[1848857782,622721332]],["mediacritik.com",622721332],["norefer.com",622721332],["autosurfs.fr",622721332],["algerie-focus.com",406906784],["algerie360.com",968670273],["algeriepatriotique.com",[263936006,198482526]],["allkeyshop.com",1632369952],["goclecd.fr",1632369952],["allostreaming-fr.com",409178813],["alsacreations.com",207614919],["alternance.com",205364227],["ingenieurs.com",205364227],["brevetdescolleges.fr",205364227],["devoirs.fr",205364227],["doc-etudiant.fr",205364227],["marketing-etudiant.fr",205364227],["mediaetudiant.fr",205364227],["bac-es.net",205364227],["bac-l.net",205364227],["bac-pro.net",205364227],["bac-s.net",205364227],["bac-stg.net",205364227],["alvinet.com",500288387],["android-dz.com",912472221],["animeka.com",1477156431],["europages.fr",[1477156431,2073101136]],["annoncesbateau.com",824872261],["annuaire-ebook.com",1035928933],["macplanete.com",1035928933],["iphonesoft.fr",1035928933],["iphonetweak.fr",1035928933],["annuaire-inverse-france.com",[1707922114,1848234050]],["ecouter-en-direct.com",1707922114],["telecharger-jeu-pc.com",1707922114],["liveradio.fr",1707922114],["ed-protect.org",1707922114],["application-remuneratrice.com",738497234],["argentmania.com",83967495],["artdeseduire.com",1706609448],["aufeminin.com",2025455294],["aujourdhui.com",1279433649],["autoalgerie.com",1282725450],["lecourrier-du-soir.com",1282725450],["autobip.com",684326042],["autojdid.com",998568167],["forums.automobile-propre.com",829664722],["autoreflex.com",2141884868],["avcesar.com",1180576322],["lnr-dz.com",84930421],["babesxworld.com",851922993],["cocogals.com",851922993],["basket-infos.com",162207767],["basketusa.com",1749639708],["batiactu.com",[1211805181,994536881]],["montelimar-news.fr",994536881],["bd-sanctuary.com",2093869032],["bioalaune.com",[2093869032,1618834586]],["cine-sanctuary.com",2093869032],["comics-sanctuary.com",2093869032],["ffeminin.com",2093869032],["manga-sanctuary.com",2093869032],["banques-en-ligne.fr",2093869032],["c8.fr",2093869032],["gamer-network.fr",2093869032],["jeux-mmorpg.fr",2093869032],["lequipement.fr",2093869032],["letelegramme.fr",2093869032],["nrj.fr",2093869032],["bdgest.com",2014275197],["bedetheque.com",2014275197],["buzz.be.com",1818560938],["beaute-test.com",[1729737805,624394420]],["magicmaman.com",624394420],["cotemaison.fr",624394420],["sports.fr",624394420],["besac.com",1144156067],["betaseries.com",[629635058,1680674166]],["soundlightup.com",1680674166],["bfmtv.com",983715406],["bienpublic.com",[1009858862,338126118,1567196938,84985631]],["lalsace.fr",[338126118,1567196938]],["ledauphine.com",1567196938],["lejsl.com",1567196938],["dna.fr",1567196938],["estrepublicain.fr",1567196938],["leprogres.fr",1567196938],["republicain-lorrain.fr",[1567196938,84985631]],["vosgesmatin.fr",1567196938],["bienvenue-a-la-ferme.com",1818595171],["bismirabbika.com",1351736576],["coran-francais.com",1351736576],["orientation-chabab.com",1351736576],["bitcoincours.com",505311179],["blogduwebdesign.com",[277341590,2073101136]],["shake.events",2073101136],["channelbiz.fr",2073101136],["itespresso.fr",2073101136],["silicon.fr",2073101136],["blogspot.com",985231432],["blumei-piano.com",922517803],["bobvoyeur.com",[1355312318,1599893596]],["djazairess.com",1355312318],["filmstreamy.com",1355312318],["vostfree.com",1355312318],["pubeco.fr",1355312318],["tendancehotellerie.fr",1355312318],["ecogine.org",1355312318],["bongacams.com",739619364],["booska-p.com",104328244],["boredpanda.com",1444608173],["boulistenaute.com",859799148],["boursier.com",347170999],["boursorama.com",[487408337,322770771,681116856]],["caradisiac.com",322770771],["dunod.com",322770771],["nouvelobs.com",322770771],["lesechos.fr",322770771],["lfp.fr",322770771],["mangario.fr",322770771],["saint-etienne.fr",322770771],["ficam.ma",322770771],["zdnet.fr",681116856]]);

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
