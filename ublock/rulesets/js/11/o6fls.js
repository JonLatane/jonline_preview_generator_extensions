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

const argsMap = new Map([[1898399992,{"a":"a[href^=\"/produits_contextuels/\"]"}],[1317552674,{"a":".boxpub"}],[1592669486,{"a":".placeholder"}],[1866083926,{"a":"#fondhabillage,\n.clickleft,\n.clickright,\n.clicktop"}],[151463657,{"a":".list_promotions,\n.promoted_image"}],[1006369732,{"a":"#header_leaderboard"}],[638464861,{"a":".carousel-multi-css-side,\n.tabletoff"}],[303487637,{"a":"#rightcol_top,\n#rightcol_top_anchor"}],[1535488938,{"a":"#background-cover"}],[1474097912,{"a":".annuinv-index-gauche,\na[href^=\"https://track.effiliation.com/servlet/effi.click?\"],\na[href^=\"https://www.awin1.com/cread.php?\"]"}],[1116594474,{"a":".commerce,\n[data-feed-reason=\"SPONSORED\"]"}],[278685753,{"a":".js-loadPremium"}],[1411582056,{"a":"#partenaire_img,\n#partenaire_link"}],[1130245786,{"a":"#pb_block,\n.footerBanner,\n.gridBanner,\n.rightColBanner"}],[205367005,{"a":"#topShopper,\n#widget_shopper,\n.textPub"}],[1126374154,{"a":"#homeLesPartenaires,\n#prehome_contenu,\n#prehome_fond,\n#pub1000,\n#topLigne,\n.ad1,\n.habillageLien,\na[href^=\"/go/go.php?\"]"}],[1378958609,{"a":"a[href=\"http://meilleurs-vpn.fr/\"],\na[href^=\"https://www.undernews.fr/redirect/\"],\nimg[width][height][alt$=\"VPN\"]"}],[962628552,{"a":"#annonce_a,\n#annonce_b"}],[2046474648,{"a":"#la-promo-showskin-a"}],[269368449,{"a":".rules + script + .topic-actions + .clear + .post"}],[1364713006,{"a":"#pub_background"}],[1160537668,{"a":"#content-right-shopping,\n.offsetCardGrid-cardsContainer > .offsetCardGrid-card.nativeCard"}],[529691086,{"a":".cp-webinar-container"}],[931349093,{"a":"div[id*=\"banner-top\"]"}],[553230427,{"a":"#js-fixed-bar"}],[1335426288,{"a":"[class][onclick],\ndiv[style^=\"cursor: pointer; background:\"]"}],[768301526,{"a":"#shop"}],[1812581921,{"a":"#leaderBottom,\n#leaderTop,\n#mpuBottom,\n#mpuTop,\n#sponsoredItemtop,\n.mpu-middle,\na[data-track-action=\"partners_traffic_drivers\"],\na[data-track-category=\"powercenter\"]"}],[231967693,{"a":"#col_droite,\n#col_droite_fine,\n.ban2"}],[2069575348,{"a":"a[href^=\"https://uploadsnack.com/\"]"}],[1800346633,{"a":".innerArtAdd"}],[1761712427,{"a":"#amazon_container,\n#habillagesite,\n#logo_droite"}],[1177655371,{"a":".hadopi,\na[href=\"https://www2.yggtorrent.gg/engine/get_vpn\"]"}],[370474279,{"a":".eds-animate"}],[1536101483,{"a":"#featgal,\na > img[width=\"238\"],\na[target=\"_blank\"] > img[src$=\".gif\"],\nimg[width=\"600\"][height=\"90\"]"}],[1743293019,{"a":".headerinfo:last-of-type,\n.nomobile [style=\"float:right;\"],\n.nomobile[style=\"float:right;\"],\n[class^=\"a\"]:last-of-type,\n[style*=\"base64\"],\na[href*=\"/?t=\"][style],\na[href*=\"Fwww.objetschinois.com\"],\na[onclick^=\"window.open\"],\ndiv[id][style=\"float: right;\"],\nimg[src*=\"base64\"]"}],[1205906713,{"a":".row > div:not([class]):not([id]) > div[style^=\"position:relative; width:320px; height:50px;\"],\n.row > div:not([class]):not([id]) > h5[style^=\"padding: 0px; margin: 0px; background:\"]"}],[1904428147,{"a":"a[href^=\"http://www.djelfa.info/ar/click/\"]"}],[1742343438,{"a":".blkad"}],[320854573,{"a":"[class^=\"banniere-\"]"}],[1264816980,{"a":".bigwrap-univers,\n.category-sponsor,\n.side a[href*=\"://bit.ly/\"],\n[data-cfpa],\na[href^=\"http://bitly.com/2MZMxbb\"],\na[href^=\"https://amzn.to/\"] > img,\ndiv[id^=\"alderaan-\"]"}],[1203883202,{"a":".countclick"}],[960697135,{"a":"#zox-wallpaper"}],[1205810635,{"a":"#chanel_links > a[onclick^=\"document.getElementById('video').src='/fk.php?\"],\na[href^=\"/go\"][href*=\".php?e=\"][rel=\"nofollow\"],\nimg[alt=\"bannière publicitaire\"]"}],[306315860,{"a":"#pubRdc"}],[714676810,{"a":".contadorads"}],[116296500,{"a":"a[href^=\"https://cutt.us/\"]"}],[1001217826,{"a":"#full-container > div#header-wrapper + div[class],\n.ad-listing,\n.fake-topper"}],[157352851,{"a":"#min_rectangle"}],[1790774020,{"a":".sc-1p6rkuz-0.bdJKQF,\ndiv[style=\"display: block; margin-bottom: 10px;\"] > ._LaI0D"}],[1310137206,{"a":"#banner2"}],[1913690005,{"a":".pub-medium"}],[1821300971,{"a":".rbanner-wrap,\n.vbanner-wrap"}],[1998973267,{"a":"form > center > a[href*=\".php\"]"}],[867748789,{"a":"a[href*=\".html\"],\na[href^=\"/regarder\"]"}],[664838043,{"a":"a[href=\"https://fcstream.com/player.html\"] > img,\na[href^=\"http://bit.ly/\"][rel=\"nofollow\"] > img,\na[href^=\"https://fcstream.com/banniere\"]"}],[1833799375,{"a":"a[href$=\"/\"]"}],[726234715,{"a":"#box-link-left,\n#box-link-right,\n#extruderLeft1,\n.bgTGC,\ndiv[style=\"margin-top:5px;float:auto;width:100%;height:250px;text-align:center\"]"}],[1340632803,{"a":"#region-user-second,\n.generic-atomic"}],[1992983962,{"a":"div[style*=\"height:90px;\"][style*=\"728px\"]"}],[28231877,{"a":"a[href^=\"http://clic.reussissonsensemble.fr/click.asp?\"]"}],[1473054202,{"a":"body > center + #layer2"}],[830648710,{"a":"[style*=\"position: absolute; z-index: 99999\"]"}],[1606877127,{"a":".widget-5"}],[1837644189,{"a":".privacylinks"}],[406011110,{"a":"#gauche > iframe[width=\"300\"][height=\"250\"]"}],[263223608,{"a":"a[href^=\"http://pubs.ecranfantastique.net/\"]"}],[2095755082,{"a":"#bannerTopWrapper"}],[1686724572,{"a":".ads--insertor-casper"}],[1143472035,{"a":".pub-content"}],[13527440,{"a":"a[href^=\"https://href.li/\"]"}],[1723884678,{"a":"td[align=\"left\"][colspan=\"3\"] > div[style=\"width:70%;\"]"}],[1704234650,{"a":".publi"}],[1372379959,{"a":".alert-warning"}],[196690044,{"a":"iframe[width=\"300\"][height=\"250\"],\niframe[width=\"728\"][height=\"90\"]"}],[1653878571,{"a":"tr > td[height=\"95\"][align=\"center\"][colspan=\"2\"]"}],[1236803409,{"a":".article-body + div[style*=\"width: 336px;\"]"}],[987235301,{"a":"#background-promo,\n.p-sky,\n.top-pub"}],[1055565385,{"a":".tradeDoubler"}],[1342247397,{"a":"a[href*=\"http://www.liutilities.com/aff\"]"}],[934715607,{"a":".samBannerUnit"}],[1590032292,{"a":"a[href^=\"https://ahegao.fr\"],\na[href^=\"https://drmanga.net\"]"}],[1444909781,{"a":".myButton"}],[895353114,{"a":".pub_large"}],[2113282539,{"a":".pubbas"}],[1974607375,{"a":".adsl"}],[872526632,{"a":".top-bar"}],[1033523630,{"a":"#pub0,\n#pubz"}],[439867312,{"a":".articleText > .large_rectangle"}],[1902580488,{"a":"#ExpoPermanente"}],[2004700770,{"a":"a[href^=\"LienExterne.asp?\"]"}],[2002462335,{"a":"div[id^=\"sas_\"]"}],[1529743741,{"a":"#lastBar,\n.homePub,\ndiv[style=\"overflow: hidden; width: 336px; height: 280px; margin: 0 auto;\"]"}],[1349616827,{"a":"#lpn_pub_main,\n.blockShopping"}],[217050948,{"a":"#jobat_content,\n.footer--partners"}],[1795842575,{"a":"#header_content_banner"}],[294763023,{"a":"a[target=\"_blank\"] > img[width=\"300\"][height=\"100\"],\na[target=\"_blank\"] > img[width=\"300\"][height=\"200\"]"}],[1231319593,{"a":".layout-grid__banner-top,\n.subscription-prompt,\na[href^=\"/blogsecretdefense/ads/\"]"}],[469009505,{"a":"a[href^=\"http://www.meetmuslima.net/go/\"]"}]]);

const hostnamesMap = new Map([["telemagazine.fr",1898399992],["telerama.fr",1317552674],["aujardin.info",1317552674],["tendanceaumasculin.fr",1592669486],["test-mobile.fr",1866083926],["tf1.fr",151463657],["tomsguide.fr",[1006369732,638464861]],["tomshardware.fr",[1006369732,303487637]],["top-for-phone.fr",1535488938],["toplien.fr",1474097912],["tripadvisor.fr",1116594474],["trovit.fr",278685753],["tube-teen.fr",1411582056],["tube8.fr",1130245786],["turbo.fr",205367005],["turfomania.fr",1126374154],["undernews.fr",1378958609],["upp-auteurs.fr",962628552],["virginradio.fr",2046474648],["vista-xp.fr",269368449],["vo2.fr",1364713006],["voici.fr",1160537668],["vpnmag.fr",529691086],["welovetennis.fr",931349093],["whassup.fr",553230427],["winamax.fr",1335426288],["zapiks.fr",768301526],["zdnet.fr",1812581921],["zebulon.fr",231967693],["zetorrents.fr",2069575348],["zoomdici.fr",1800346633],["millenium.gg",1761712427],["yggtorrent.gg",1177655371],["howtofix.guide",370474279],["israelmagazine.co.il",1536101483],["chine.in",1743293019],["time2watch.in",1205906713],["djelfa.info",1904428147],["dl-protect.info",1742343438],["jeu.info",320854573],["korben.info",1264816980],["lotusnoir.info",1203883202],["nordicmag.info",960697135],["streamonsport.info",1205810635],["xoo.it",306315860],["hds.lc",714676810],["zone-telechargement1.life",116296500],["lesfrontaliers.lu",1001217826],["lessentiel.lu",157352851],["avito.ma",1790774020],["hitradio.ma",1310137206],["lematin.ma",1913690005],["souk.ma",1821300971],["protect-link.me",1998973267],["streaming-series.me",867748789],["streamonsports.me",664838043],["yggtorrent.me",1833799375],["moov.mg",726234715],["lexpress.mu",1340632803],["expresso.1fr1.net",1992983962],["algeriephilatelie.net",28231877],["all-stadium.net",1473054202],["amvtv.net",830648710],["analyticsinsight.net",1606877127],["buzzporn.net",1837644189],["centerblog.net",406011110],["cinemafantastique.net",263223608],["clubpoker.net",2095755082],["commentcamarche.net",1686724572],["constructeurdemaison.net",1143472035],["dailyuploads.net",13527440],["depannetonpc.net",1723884678],["desdelinux.net",1704234650],["detecteur.net",1372379959],["developpez.net",196690044],["drague.net",1653878571],["elhayatonline.net",1236803409],["euro-2016-france.net",987235301],["forum-actif.net",1055565385],["forum-vista.net",1342247397],["hack-life.net",934715607],["hentaifr.net",1590032292],["illimitestreaming.net",1444909781],["hds-stream.pro",1444909781],["influencia.net",895353114],["internetparsatellite.net",2113282539],["ipadsl.net",1974607375],["jeretiens.net",872526632],["jeu.net",1033523630],["jeune-independant.net",439867312],["journaldelenvironnement.net",1902580488],["kerix.net",2004700770],["lacoccinelle.net",2002462335],["lafermeduweb.net",1529743741],["laposte.net",1349616827],["lavenir.net",217050948],["lefaso.net",1795842575],["maliweb.net",294763023],["marianne.net",1231319593],["meetmuslima.net",469009505]]);

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
