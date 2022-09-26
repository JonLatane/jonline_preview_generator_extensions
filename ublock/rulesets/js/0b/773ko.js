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

const argsMap = new Map([[1877510546,{"a":"#block_a_decouvrir"}],[302704858,{"a":"#habillage_site"}],[1984967489,{"a":".promo_link"}],[1103087391,{"a":"#menubanner"}],[932284556,{"a":"#Habillage1,\n#Habillage2,\n#MegaBan,\n.containerPub,\n.filetPub,\n.logosPartenaires"}],[1268188392,{"a":"#megaban-footer"}],[1247923844,{"a":"#trk_promoforum,\n.habpage"}],[818155162,{"a":".habillage"}],[1728148743,{"a":"#paFooterPubPartner,\n.jsNoPrdtBloc,\n.lpTradeRegie,\n.pubBloc,\n.regBloc"}],[2013032351,{"a":"a[href*=\"//clk.tradedoubler.com/click?\"]"}],[1437734587,{"a":".middle-container"}],[1416365911,{"a":"a[href*=\"/redirect.\"]"}],[2126052351,{"a":"#logos-partenaires"}],[839337566,{"a":"#sidPub"}],[842541872,{"a":".titre_paragraphe + div[style=\"height:450px; margin-left:12px;\"]"}],[1012562128,{"a":"#popup,\n.sidebar_block"}],[1416992262,{"a":".oadb-popup-container"}],[897445926,{"a":"a[href=\"#secondModal\"]"}],[1231950662,{"a":"#header-banner,\n.horizontal-banner"}],[2022462548,{"a":"#ba_position4,\n#ba_right,\n#bloc_sponsor"}],[1351821229,{"a":".advertising"}],[215360893,{"a":".ccm_pugoo__sponso,\n[class$=\"_adsense\"],\n[class*=\"_item--sponsor\"]"}],[1317696054,{"a":"[id^=\"lig_\"]"}],[250052646,{"a":".cat_bons_plans_du_comptoir"}],[1674779080,{"a":"#pb_lb,\n#pb_sb,\n#pb_sq"}],[1051603949,{"a":"#hunt,\na[href^=\"/rc_787_\"]"}],[1141498237,{"a":"#cadre-vignette-carnet,\n#equipement,\n#ja-banner"}],[2100183481,{"a":"div[style^=\"width:300px;height:250px\"]"}],[2007227906,{"a":"a[href=\"/g2a-link/\"]"}],[1351230422,{"a":"#add_bottom"}],[429336692,{"a":"#add_top"}],[1269361299,{"a":"#bannertop,\n#blocpub1,\n#bottom_pubN2,\na#habiclic,\na[href^=\"http://www.ldlc.com#aff\"] > img"}],[1043659140,{"a":"#advi"}],[1355016578,{"a":"#eshop300"}],[1904243313,{"a":".dm_widget_advert_iabrighttitle"}],[1995409741,{"a":".banner_125x125"}],[595581823,{"a":".js-idealo-section,\nsection[data-track*=\"widget_pirates_carousel\"]"}],[2060044092,{"a":"a[href*=\"?utm_source=ds_shop\"]"}],[414883347,{"a":"#link_pub"}],[654108395,{"a":"#pubLink,\n.pub-bonaboSite,\na[onclick*=\"/resultspage/\"]"}],[1070376834,{"a":".big-button"}],[1472590958,{"a":".espace-cam"}],[2143513342,{"a":"#colonneDroite > aside > #encart_droite > div[class^=\"dvpb\"][style^=\"display: inline-block; width:\"],\n#colonneDroite >aside > [style=\"text-align:center\"] > div[id][style=\"display: inline-block; width: 300px; height: 250px\"],\n#gabarit_pubBB"}],[495142393,{"a":"div[id^=\"gabarit_megaban\"]"}],[1835750534,{"a":".td-a-rec-id-content_bottom"}],[263049247,{"a":"#tableau_info"}],[753166519,{"a":".news-banner"}],[1520279029,{"a":"a[href*=\"/rel/index.cfm?RST=\"]"}],[793838796,{"a":"center > a[href^=\"https://www.dl-protecte.com/telecharger.php\"],\ncenter > a[href^=\"https://www.dl-protecte.com/usnt.php\"]"}],[1092024287,{"a":"#affichage_tag_58,\n#header_tr_banniere"}],[795230765,{"a":"div#an-fin,\ndiv#an-fin-legales"}],[325349940,{"a":"div[style=\"float:left;width:500px;height:300px;\"],\ndiv[style=\"margin-top:10px;float:left;height:250px;width:250px;\"]"}],[220611291,{"a":"#dc_cadrebottompub,\n#dc_cadretoppub,\n#mc_cadrebottompub,\n#mc_cadretoppub,\n.accueil_pubotherlan,\n.mcdescresumepub,\n.mcdescresumepubnews,\ndiv[id^=\"pubbox-\"]"}],[679790414,{"a":".col-player > div[style^=\"position:relative;\"][style*=\"border:none !important; background:none;\"]:not([class]):not([id])"}],[438661298,{"a":"a[href=\"http://dzzik.OurToolbar.com/exe\"]"}],[1202361478,{"a":"div[data-role=\"sp\"],\ndiv[data-role=\"sp2\"]"}],[1920360078,{"a":"#esv-pub-hp"}],[678767026,{"a":"a[href*=\"offer?prod=\"]"}],[1617913153,{"a":"a[href*=\"/partenaire.php\"],\na[href^=\"http://www.ebooks-gratuit.com/partenaire.php\"]"}],[1477648431,{"a":"img[width=\"468\"][height=\"60\"]"}],[586118655,{"a":"#Advertisement,\n.ech-live__ads,\n.no_design,\n.soundcloud-related,\ndiv[style^=\"display:inline-block;width:300px;height:250px;\"],\ndiv[style^=\"width:200px; padding:2px; border:#AAA 1px solid;\"],\ndiv[style^=\"width:728px;height:90px;\"]"}],[1638437310,{"a":"div[style*=\"width:468px;\"]"}],[612204313,{"a":"#ad2"}],[75139436,{"a":"#cgSidebarATF1,\n.cgIncontentSlot,\n.sidebar-banner,\n.top-banner"}],[448906960,{"a":".showpub"}],[769235584,{"a":"a > [width=\"630\"][height=\"100\"],\na > [width=\"720\"][height=\"98\"]"}],[1453180801,{"a":"#topads,\n.vpub"}],[2083778423,{"a":"#megabanner"}],[1524606172,{"a":"#pub_habillage_lien,\n.mh-banner"}],[980001241,{"a":".banneritem"}],[623255988,{"a":"div[style=\"clear: both; text-align: center;\"] > a[href^=\"https://shopping.encoreedusud.com/\"]"}],[2146012640,{"a":".rek"}],[173585416,{"a":".big-ad2"}],[2064459836,{"a":"#pub_boutique,\n#pub_club,\n#pub_tatoo"}],[1824266766,{"a":".xoxo a > img"}],[854192524,{"a":"a[href*=\"/goto_part.php?\"]"}],[1634543180,{"a":".vba_300"}],[1205005286,{"a":"#partner-ajax-on-forum,\n.travel-insurance"}],[1373099611,{"a":"#bob"}],[32864347,{"a":"#header-infoblock,\n#sky"}],[113738417,{"a":"a[aria-label=\"Lien de l’annonceur\"]"}],[779651610,{"a":".lbx_content,\n.lbx_overlay"}],[1300008620,{"a":"#custom_html-2,\ndiv[class^=\"code-block code-block-\"][style*=\"margin: 8px auto; text-align: center;\"]"}],[418906285,{"a":"img[width^=\"728height=90\"]"}],[1518879384,{"a":".megasquare,\n.topmargin"}],[1840849329,{"a":"a[href*=\"/banniere\"]"}],[773257502,{"a":"#wallpaper,\n[class$=\"-link\"],\na[href=\"#\"] + img[src^=\"http://www.hostpic.org\"],\na[href^=\"http://amzn.to/\"],\na[href^=\"http://vplan.com/\"]"}],[1016997686,{"a":"a[href^=\"https://www.amazon.fr/\"]"}],[1858120989,{"a":".urad"}],[396298268,{"a":".accueil-derniere-annonce > #carou.well"}],[515483449,{"a":".sponsors-section"}],[1583853000,{"a":"div[style^=\"position:relative;\"][style*=\"width:100%;max-width:467px;\"][style*=\"height:60px; border:none !important; background:none; margin:auto; clear:both;\"]"}],[84809348,{"a":"#aff_tuto_com"}],[564654284,{"a":".sponsoInside"}],[1459852048,{"a":"a[target=\"_blank\"] > img"}],[661200910,{"a":".xd_footer"}],[1612110821,{"a":"#download,\n#prom"}],[863313995,{"a":".lig,\n.sidebar img:first-child"}],[752467369,{"a":"#link-wrap-around,\n#wrap-around"}]]);

const hostnamesMap = new Map([["bricoleurdudimanche.com",1877510546],["buzzdefou.com",302704858],["gerardmerinfo.fr",302704858],["calendrier.com",1984967489],["captchme.com",1103087391],["caradisiac.com",932284556],["cartimini.com",1268188392],["cbanque.com",[1247923844,818155162]],["clubpronostics.com",[818155162,1231950662]],["gratuiciel.com",818155162],["lelogicielgratuit.com",818155162],["logicielmac.com",818155162],["logitheque.com",818155162],["made-in-algeria.com",818155162],["maghrebex.com",818155162],["mediscom.com",818155162],["quetelecharger.com",818155162],["toucharger.com",818155162],["made-in-tunisia.net",818155162],["cdiscount.com",[1728148743,2013032351]],["clubic.com",[2013032351,897445926]],["sosiphone.com",2013032351],["supertoinette.com",2013032351],["lemonde.fr",2013032351],["tomtomax.fr",2013032351],["ceesty.com",1437734587],["clkmein.com",1437734587],["cllkme.com",1437734587],["corneey.com",1437734587],["destyy.com",1437734587],["festyy.com",1437734587],["gestyy.com",1437734587],["skipp.io",1437734587],["clkme.me",1437734587],["skiip.me",1437734587],["wiid.me",1437734587],["sh.st",1437734587],["shorte.st",1437734587],["centre-audition.com",1416365911],["easyzic.com",1416365911],["info-algerie.com",1416365911],["centreimmo.com",2126052351],["choisirsonforfait.com",839337566],["cinemotions.com",842541872],["clicbienetre.com",1012562128],["cliqueduplateau.com",1416992262],["commentcamarche.com",[2022462548,1351821229,215360893,1317696054]],["commentcamarche.net",[2022462548,1351821229,215360893,1317696054]],["traildesforts.com",1351821229],["latribune.fr",1351821229],["ccm.net",[1351821229,215360893]],["journaldesfemmes.com",1317696054],["turf-fr.com",1317696054],["free.fr",1317696054],["orange.fr",1317696054],["comptoir-hardware.com",250052646],["comptoir-info.com",1674779080],["confidentielles.com",1051603949],["conseils-courseapied.com",1141498237],["copine-coquine.com",2100183481],["corobizar.com",2007227906],["courrierlaval.com",[1351230422,429336692]],["letraitdunion.com",429336692],["cowcotland.com",1269361299],["cuisineaz.com",1043659140],["cuisineetvinsdefrance.com",1355016578],["dailymotion.com",1904243313],["darjadida.com",1995409741],["dealabs.com",595581823],["deco-smart.com",2060044092],["degroupnews.com",414883347],["degrouptest.com",654108395],["des-amours.com",1070376834],["desinhibition.com",1472590958],["developpez.com",[2143513342,495142393]],["developpez.net",495142393],["diaspordc.com",1835750534],["dinogaia.com",263049247],["directvelo.com",753166519],["dl-protect1.com",1520279029],["dl-protecte.com",793838796],["dogzer.com",1092024287],["domimmo.com",795230765],["douniamusic.com",325349940],["driverscloud.com",220611291],["dustreaming.com",679790414],["dzzik.com",438661298],["e-monsite.com",1202361478],["easyvoyage.com",1920360078],["ebookdz.com",678767026],["ebooks-gratuit.com",1617913153],["echangegagnant.com",1477648431],["espace-francophone.com",1477648431],["genhit.com",1477648431],["comparatif-vpn.fr",1477648431],["echangedeclics.fr",1477648431],["undernews.fr",1477648431],["israelmagazine.co.il",1477648431],["lankhor.net",1477648431],["space-blogs.net",1477648431],["abandonware.org",1477648431],["abandonware-definition.org",1477648431],["abandonware-magazines.org",1477648431],["abandonware-videos.org",1477648431],["echoroukonline.com",[586118655,1638437310]],["maxifoot.fr",1638437310],["ecouter-en-direct.com",612204313],["ed-protect.org",612204313],["ecranlarge.com",75139436],["educatout.com",448906960],["elmihwar.com",769235584],["elmoudjahid.com",1453180801],["elwatan.com",[2083778423,1524606172]],["glenatbd.com",2083778423],["lerevenu.com",2083778423],["ventsdouest.com",2083778423],["channelbiz.fr",2083778423],["franceantilles.fr",2083778423],["franceguyane.fr",2083778423],["itespresso.fr",2083778423],["emploitic.com",980001241],["maghrebemergent.com",980001241],["laverite.mg",980001241],["encoreedusud.com",623255988],["endirect24.com",2146012640],["ennaharonline.com",173585416],["entrecoquins.com",2064459836],["esoxiste.com",1824266766],["espritlib.com",854192524],["excel-pratique.com",1634543180],["expat.com",1205005286],["explorimmo.com",1373099611],["ezgif.com",32864347],["facebook.com",113738417],["faclic.com",779651610],["factandfurious.com",1300008620],["faireunlien.com",418906285],["fan-de-cinema.com",1518879384],["fcstream.com",1840849329],["streamonsports.me",1840849329],["fdesouche.com",[773257502,1016997686]],["wikimonde.com",1016997686],["lacoccinelle.net",1016997686],["fibladi.com",1858120989],["shopping.fibladi.com",396298268],["fifa.com",515483449],["filmstreamy.com",1583853000],["finalclap.com",84809348],["findmysexfriend.com",564654284],["finobuzz.com",1459852048],["footnamurois.com",1459852048],["planet-streaming1.com",1459852048],["youwatch-serie.com",1459852048],["youwatch-series.com",1459852048],["buzzporn.net",1459852048],["planet-streaming.net",1459852048],["seriezone.org",1459852048],["serie-streaming.watch",1459852048],["flaghit.com",661200910],["fluvore.com",1612110821],["foot01.com",863313995],["footendirect.com",752467369]]);

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
