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

const argsMap = new Map([[92000318,{"a":"#imCell_259,\n#imStickyBar_imObjectButton_03,\na[href^=\"https://www.clictune.com/\"],\na[style*=\"width: 98%; height: 100%; inset:\"]"}],[1774239443,{"a":"#smart-bann"}],[346936725,{"a":".headertitrelien[target=\"_blank\"]"}],[1215876229,{"a":"#common-top-widget,\na[href^=\"http://ads.oujdacity.net/\"]"}],[1708226383,{"a":"#footer"}],[788687021,{"a":"div[style=\"width:300px;height:600px;\"]"}],[1179301525,{"a":".dynInFeed,\n.pstAd"}],[672801863,{"a":"div[style=\"float:left; width:100%; clear:both; margin-bottom:10px; text-align:center; height:90px;\"]"}],[438533864,{"a":"#campain_bg"}],[1369059182,{"a":".promo_texte2"}],[2122203622,{"a":"a[href*=\"/?ad=\"]"}],[1160688398,{"a":"#presse_citron_skin,\n#presse_citron_skin_banner,\n.plan-list"}],[839171854,{"a":".bloc-header-play,\n.container-pave-haut-sidebar,\n.shopping"}],[614321863,{"a":".mega-banner"}],[95757623,{"a":"#adBlockBnr,\n.adcontent,\n[class^=\"vda-\"]"}],[1803887631,{"a":"#tplInstallNow + .install-now,\na[id][href][target][style]"}],[1926718353,{"a":"#shadow,\n.sonicprice,\n.webrox._300x250.centered"}],[1861785796,{"a":"a[href*=\"/affiliate-\"] > img"}],[587359969,{"a":".pub_ra,\na[href=\"http://www.bleuhabitat.fr/\"] > img"}],[1377480489,{"a":"#amazonLink,\n.module.moduleBoutiqueEncart"}],[263316323,{"a":"#bgclicable"}],[1370836104,{"a":"a[href^=\"/file.php\"]"}],[1498385751,{"a":"a[href^=\"http://www.rpjf.com/asp/lien.asp?\"]"}],[280649356,{"a":".item[style],\nbody > div + .row.align-center.section"}],[134311096,{"a":"[class*=\"pico-\"]"}],[1937553812,{"a":"a[href^=\"http://www.bitdefender.fr/media/\"]"}],[1722650249,{"a":".block_news_main_pub,\n.header_logo + div > table tr > td > a[target=\"_blank\"],\ndiv[id][onclick][style]"}],[118294745,{"a":".in-block,\n.wait_buffer"}],[1453950878,{"a":"a[href*=\"?title=\"]"}],[1227764368,{"a":"#chaussuresCarousel"}],[302992042,{"a":"#leader-small,\na[href*=\"/?utm_source=\"]"}],[636502222,{"a":".post--0"}],[1631695527,{"a":"a[href=\"http://arabzik.org/free-phone/\"]"}],[124185095,{"a":"#partner_content,\n.pubDroite"}],[1882458012,{"a":".pub_logo,\na[href^=\"http://www.dzsat.org/forum/rbs_banner.php?\"]"}],[625750848,{"a":".affichier_lien > tbody > tr + tr[class],\n.ip-warning"}],[1688785335,{"a":"#skinlink"}],[768276002,{"a":"#vpnvpn"}],[1473011147,{"a":"div[style*=\"float:right;width:300px;\"]"}],[360509317,{"a":"a[href=\"http://www.jeddl.org/Regarder-le-film.html\"],\na[href=\"http://www.jeddl.org/Telecharger-le-film.html\"],\na[href^=\"//www.jeddl.org/telechargement-film.php?\"]"}],[1678275275,{"a":".adtitle"}],[451974546,{"a":"a.homepage_background"}],[1593876645,{"a":".m_amazon_product_bloc"}],[2135154912,{"a":"img[width=\"300\"][height=\"300\"],\nimg[width=\"600\"][height=\"62\"],\nimg[width=\"692\"][height=\"100\"],\nimg[width=\"692\"][height=\"85\"],\nimg[width=\"695\"][height=\"86\"],\nimg[width=\"740\"][height=\"161\"],\nimg[width=\"740\"][height=\"185\"],\nimg[width=\"800\"][height=\"150\"]"}],[1777423267,{"a":"a[href^=\"http://osdb.link/go?\"]"}],[1939645816,{"a":"#titre_librairie,\n.sample-lst,\ndiv[style=\"margin-bottom:15px;\"] > table > tbody"}],[1342439757,{"a":".bloc_evt,\ndiv[id^=\"programme-televisionorg_\"][id$=\"_ar\"].cmi_pSticky:empty"}],[921462347,{"a":"#pubSky,\n#pubSky2"}],[824690250,{"a":"a[href*=\"&pos=\"]"}],[658512641,{"a":"table[width=\"728\"]"}],[1643890632,{"a":"div[style*=\"text-align: center\"][style*=\"width:250px\"]"}],[1879684509,{"a":".liketable"}],[1193446596,{"a":".bloc_promomiddle"}],[2035947888,{"a":"#ads_tall"}],[269934180,{"a":".bnr"}],[563852407,{"a":".iad"}],[2114847655,{"a":"div[style=\"width:1230px; height: 110px; background-color: #eff1f1\"]"}],[680874140,{"a":".rightside > .blocks > .dbtm > center > a[href][target=\"blank\"] > img,\n.rightside > center > a[href][target=\"blank\"] > img"}],[1395660916,{"a":"#contenedor > div[class] > a[target=\"_blank\"],\n#plyb"}],[1145798390,{"a":"a[href^=\"ads/\"]"}],[2114088000,{"a":"#headbanner"}],[1452788973,{"a":".mydll"}],[285680799,{"a":"a[href*=\"//trk.\"]"}],[1946514562,{"a":"#micontenedor > div#total"}],[747886646,{"a":"#adress_utiles"}],[743351734,{"a":"#vjs-overlayclip-container-box"}],[725283810,{"a":".ad-alert-wrapper"}],[1344406771,{"a":".col-player > div[style^=\"position:relative; width:100% !important;\"]:not([class]):not([id])"}],[231112908,{"a":".mvic-btn > a.btn-successful,\ndiv[id^=\"gothamadblock_\"]"}],[961095868,{"a":".movie-aye,\na[href=\"/streaming-video.html\"]"}],[923420235,{"a":".megabanhome"}],[741023694,{"a":"#download_div2"}],[636379895,{"a":".series-player > #bd_sp"}],[306318403,{"a":"a[onclick^=\"openAuc\"]"}],[1926145626,{"a":"a[href^=\"/go.php?\"][target=\"_blank\"] > img"}],[2123567613,{"a":"ad-host"}],[160494260,{"a":".block-mozaic-pub,\n.video-preroll"}],[1776942432,{"a":".pop_parent"}],[1164373934,{"a":"#pubBaniereContainer,\n#pubIlotContainer"}],[853056506,{"a":"#point_part"}],[12470448,{"a":"#bigBox"}],[1225932274,{"a":"div[class*=\"publicite-\"],\nli.bigBox"}],[1005873155,{"a":"a[href^=\"http://watchfomny.tv/Pop/\"]"}],[707221473,{"a":"a[href*=\"://out.streamcomplet.vet/\"]"}],[1559840013,{"a":"#mobile_clic,\n.bgClick,\na[style=\"position: fixed;top: 110px;left: 0;bottom: 0;width: 50%;\"]"}],[927581898,{"a":"#layer1,\n#sidebar > .fstory-content[style=\"text-align:center;\"],\ncenter > .block-violet > center[style=\"font-size:12pt;color:#C420C9;\"]"}],[2018267209,{"a":"a[href=\"/telechargement-direct.php\"] > img,\na[href=\"/telechargera.php\"] > img,\na[href^=\"http://seriestreaming.xyz/\"],\na[href^=\"http://www.seriestreaming.xyz/\"]"}],[2064903767,{"a":"a[href^=\"https://dl-protect.info/url-premium?\"]"}],[166595798,{"a":"center > a[rel=\"nofollow\"],\ncenter > span > a[rel=\"nofollow\"]"}],[957956777,{"a":"a[href^=\"http://anonym.to?\"]"}],[1472058661,{"a":".iframe-area > .iframe-contentserie"}],[1455392715,{"a":".affiliate"}],[675858585,{"a":"#horizontal-banner"}],[877860235,{"a":"a#lang_download[href=\"/download\"]"}],[661180598,{"a":"center > a[href=\"/telecharger.php\"]"}]]);

const hostnamesMap = new Map([["mega-p2p.net",92000318],["otaku-attitude.net",1774239443],["ouiounon.net",346936725],["oujdacity.net",1215876229],["forum.oujdacity.net",1708226383],["paroles.net",788687021],["passeportsante.net",1179301525],["photofunky.net",672801863],["piwee.net",438533864],["pornojeune.net",1369059182],["presse-algerie.net",2122203622],["presse-citron.net",1160688398],["programme-tv.net",839171854],["radio-m.net",614321863],["reverso.net",95757623],["savefrom.net",1803887631],["slappyto.net",1926718353],["sosvirus.net",1861785796],["space-blogs.net",587359969],["techno-science.net",1377480489],["tennisactu.net",263316323],["theboystelecharger.net",1370836104],["topj.net",1498385751],["trictrac.net",280649356],["uploaded.net",134311096],["usbfix.net",1937553812],["vakarm.net",1722650249],["vidoza.net",118294745],["voirseriestreaming.net",1453950878],["wanarun.net",1227764368],["webactus.net",302992042],["zebrascrossing.net",636502222],["arabzik.org",1631695527],["cciaf.org",124185095],["dzsat.org",1882458012],["ed-protect.org",625750848],["freeonline.org",1688785335],["gktorrents.org",768276002],["impotsurlerevenu.org",1473011147],["jeddl.org",360509317],["jeux.org",1678275275],["jeuxvideo.org",451974546],["marmiton.org",1593876645],["mediaguinee.org",2135154912],["opensubtitles.org",1777423267],["phpsources.org",1939645816],["programme-television.org",1342439757],["remede.org",921462347],["sante-nutrition.org",824690250],["forum.softmaroc.org",658512641],["superphysique.org",1643890632],["trackitonline.org",1879684509],["trackitonline.ru",1879684509],["tv5.org",1193446596],["ustart.org",2035947888],["vf-film.org",269934180],["vf-serie.org",269934180],["vide-greniers.org",563852407],["forum.webxfrance.org",2114847655],["zone-telechargement1.org",680874140],["zustream.org",1395660916],["ladepeche.pf",1145798390],["classement.pro",2114088000],["hds-stream.pro",1452788973],["flashx.pw",285680799],["flashx.tv",[285680799,741023694]],["playerhd2.pw",1946514562],["clicanoo.re",747886646],["sibnet.ru",743351734],["yggtorrent.si",725283810],["dpstream.site",1344406771],["vostfr.stream",231112908],["zoneseries.stream",961095868],["realites.com.tn",923420235],["flashx.to",741023694],["fullstream.to",636379895],["hqq.to",306318403],["hqq.tv",306318403],["streamonsport.to",1926145626],["coflix.tv",2123567613],["d8.tv",160494260],["e-wok.tv",1776942432],["telequebec.tv",1164373934],["terre.tv",853056506],["tetesaclaques.tv",12470448],["ici.tou.tv",1225932274],["watchfomny.tv",1005873155],["streamcomplet.vet",707221473],["jeu.video",1559840013],["filmstreaming1.vip",927581898],["zone-annuaire.website",2018267209],["zone-telechargement.work",2064903767],["filmz.ws",166595798],["porno-mobile.ws",957956777],["voirfilms.ws",1472058661],["mvideoporno.xxx",1455392715],["videopornoinceste.xxx",675858585],["dl-protect.xyz",877860235],["zone-annuaire.xyz",661180598]]);

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
