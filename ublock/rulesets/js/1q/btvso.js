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

const argsMap = new Map([[187805213,{"a":"body > iframe[class][style^=\"border:\"][style*=\"z-index:\"]:not([src])"}],[1838786674,{"a":".side-300"}],[1193308508,{"a":".jk-300"}],[633353648,{"a":".promo"}],[1051344475,{"a":".buttonlink#contador"}],[672294907,{"a":".slogan.bottom"}],[1312730091,{"a":".vignette-content"}],[1031653910,{"a":".calhaw-slot,\n.manga-top-ad,\ndiv[amazon-offers-list]"}],[262782824,{"a":"iframe[id^=\"aswift_\"]"}],[1736143949,{"a":".publi_arriba"}],[582865062,{"a":"a[href^=\"https://goo.gl/\"]"}],[834222531,{"a":"#banner_right,\ndiv[style=\"height: 252px; margin: 10px 0 4px 80px;white-space:nowrap;overflow:hidden;text-align:center\"],\ndiv[style=\"height: 65px; border-top: 1px solid #aaa; padding-top: 3px; border-bottom: 1px solid #aaa; margin: 10px 0 4px 80px;white-space:nowrap;overflow:hidden\"],\ndiv[style=\"height: 95px; border-top: 1px solid #aaa; padding-top: 4px; border-bottom: 1px solid #aaa; margin: 10px 0 4px 80px;white-space:nowrap;overflow:hidden\"]"}],[1664415565,{"a":".banner-resposivo"}],[1683915731,{"a":"a[href][target=\"_blank\"] > img"}],[888911898,{"a":"#this-pays-for-bandwidth-container-hor"}],[1439700481,{"a":"#div_video_ads"}],[1435930323,{"a":"#banner-layer,\n#banner-overlay"}],[541626704,{"a":".topad"}],[1774942647,{"a":"#k2Container > div[class^=\"item\"] div[style*=\"background-color\"],\nins.adsbygoogle"}],[1232757575,{"a":"#NEWS_RELATED"}],[1178660285,{"a":".div-banner-popup-event"}],[528801461,{"a":"a[href^=\"https://goo.gl\"]"}],[1472783539,{"a":"body > iframe[src=\"about:blank\"]"}],[692934514,{"a":".tabads"}],[377041009,{"a":".stream-item-below-post > div[align=\"center\"] > span[style=\"font-size: 10pt;\"],\n.theiaStickySidebar > #custom_html-16"}],[684517329,{"a":".content #loading"}],[2099862102,{"a":"aside.widget-area > #custom_html-16"}],[871473790,{"a":".shq-ads"}],[591321776,{"a":"iframe[src=\"about:blank\"]"}],[2103695606,{"a":"#portalfullblock-desktop,\n#sidebanner,\n#sidebanner_single"}],[976815671,{"a":"#floatLayer6"}],[205067954,{"a":".angular_advertisement"}],[25647694,{"a":".ads_by_tico,\n.jcarousel-skin-anuncio,\na[href^=\"https://ticotimes.net/linkout/\"]"}],[1400710366,{"a":"#dm_topbar,\na[href^=\"http://www.tradeadexchange.com/\"]"}],[2057647033,{"a":".con_publi"}],[256493611,{"a":"#adsensecima,\n#nossiga"}],[12628196,{"a":"#Mod78,\n.bkbnrc_2,\ndiv[style=\"padding:5px;background-color:#DDD;width:728px;height:90px;\"]"}],[2035434610,{"a":".bubble_light"}],[766110430,{"a":"[id^=\"player\"] ~ div[onclick*=\"remove\"]"}],[255467756,{"a":".post-body > div[style=\"width: 1183px;height: 160px;\"],\n.pr-widget"}],[1497960790,{"a":".ads728_90"}],[1365889808,{"a":".baner_centro,\n.baner_superior"}],[1363356319,{"a":"#tgm-bar1_1280,\n#tgm-bar2_1280,\n#tgm-pagesponsor"}],[742845735,{"a":".e3lan"}],[1632435679,{"a":"div[id^=\"bloco\"]"}],[1117632235,{"a":"center > a[href^=\"https://bit.ly/\"][rel=\"noopener\"] > img"}],[1411956405,{"a":"div[class^=\"escomad\"]"}],[628628020,{"a":".adsBody,\n.adstopo"}],[584050736,{"a":"#content > div.contentBox+center,\n.garotaslindas"}],[1576286489,{"a":"#cboxOverlay,\n#colorbox"}],[1038347036,{"a":"img[style=\"border: 0px solid; width: 300px; height: 250px;\"]"}],[660840917,{"a":"ol#messageList > li.message:not([id]):not([data-author])"}],[2144902932,{"a":".adblock_detect"}],[1614529806,{"a":"a[href=\"http://www.primecursos.com.br/\"]"}],[2081617508,{"a":"a[href^=\"http://tocarviolao.com.br/\"]"}],[1407645415,{"a":"a.descarga_href_big"}],[576386504,{"a":"#ads-foda-fx,\na[href^=\"javascript:void(centerpopup('https://bit.ly/\"][rel=\"nofollow\"],\na[href^=\"javascript:void(centerpopup('https://goo.gl/\"][rel=\"nofollow\"]"}],[669204370,{"a":".TpRwCont > aside > div.ai_widget,\n.TpRwCont > aside > div.widget_text"}],[1743298462,{"a":".sidebaha[style^=\"background-color:\"]"}],[1216956728,{"a":".cuad01,\n.headpub,\n.pub60"}],[2055318581,{"a":".post-content > div[style=\" margin:12px; text-align:center\"] > a[rel=\"nofollow\"]"}],[604316958,{"a":"center > div.separator"}],[816404975,{"a":"a[href^=\"//mellowads.com/\"]"}],[567472282,{"a":"div[class*=\"pb-pub-\"]:not(.pb-pub-6)"}],[398013260,{"a":".box_gr"}],[1214671143,{"a":"a[href^=\"https://ladsanz.com/\"]"}],[1731324580,{"a":".banner-336x280"}],[2055086883,{"a":"#DESCARGAslidein,\n#ddbar,\niframe[height=\"600\"],\niframe[width=\"130\"],\niframe[width=\"300\"],\niframe[width=\"728\"]"}],[1159918276,{"a":"div[style=\"height:300px;\"]"}],[2077365351,{"a":".header,\na[href^=\"http://todaoferta.uol.com.br/\"]"}],[1172865805,{"a":"center > a[href][target=\"_blank\"]"}],[673389740,{"a":"div[class^=\"content_gpt_\"]"}],[328548226,{"a":"[data-ads-name]"}],[332911726,{"a":".aside-ads-top"}],[1786879447,{"a":".orbitslider"}],[222063767,{"a":"div[style^=\"position: absolute;\"][style*=\"z-index:\"][onclick*=\"anunciotag\"]"}],[1174148383,{"a":".box.xx"}],[740819317,{"a":"#headerPub,\n#lastPubPub,\n#topoPUBsidebar"}],[200217850,{"a":"#zahirflut,\n.bn300x250,\n.bn300x75,\n.box-border,\n.mon_td_glb"}],[1881544801,{"a":"[style=\"width:300px;height:250px;overflow:hidden;position:relative;\"],\n[style=\"width:300px;height:250px;overflow:visible;z-index:0;\"],\ndiv[style=\"width: 300px; height: 250px; overflow: hidden; position: relative;\"],\ndiv[style=\"width: 300px; height: 250px; overflow: visible; z-index: 0;\"]"}],[191369024,{"a":".mrec"}],[1128527578,{"a":".pub-textads"}],[116784392,{"a":".pubHeader,\n.pubTextual"}],[1545732856,{"a":".bannerPub"}],[367215538,{"a":".artfundpub"}],[1005783185,{"a":".moduletable_publicidade"}],[94004232,{"a":".mrec-status"}],[1213333073,{"a":".tg-adhesion-bar"}]]);

const hostnamesMap = new Map([["irmaosdotados.net",187805213],["jkanime.net",1838786674],["jkhentai.net",1193308508],["kiosko.net",633353648],["kshowes.net",1051344475],["laflecha.net",672294907],["leitor.net",[1312730091,1031653910]],["mangalivre.net",1031653910],["forum.lfspro.net",262782824],["mangamovil.net",1736143949],["megafilmestorrents.net",582865062],["meneame.net",834222531],["onepieceex.net",1664415565],["pcprogramasymas.net",1683915731],["peliculaswarez.net",888911898],["pheu.net",1439700481],["poringa.net",1435930323],["programaswebfull.net",541626704],["raulprietofernandez.net",1774942647],["redeszone.net",1232757575],["repelis.net",1178660285],["seucinema.net",[528801461,1472783539]],["tudotv.tv",1472783539],["skanime.net",692934514],["stockrom.net",377041009],["sudoroot.net",684517329],["superflix.net",2099862102],["superhq.net",871473790],["tarjetaroja-tv.net",591321776],["tecnoblog.net",2103695606],["televalltv.net",976815671],["thephoneclub.net",205067954],["ticotimes.net",25647694],["torrentdosfilmeshd.net",1400710366],["tribuna.net",2057647033],["tvthudinha.net",256493611],["ver-pelis.net",12628196],["video2mp3.net",2035434610],["worlwidestream.net",766110430],["xn--hentaienespaol-1nb.net",255467756],["elnuevodiario.com.ni",1497960790],["laprensa.com.ni",1365889808],["terra.com.ni",1363356319],["pelisplus.one",742845735],["empregonews.online",1632435679],["g1novelas.online",1117632235],["g1novelas.org",[1117632235,576386504]],["ordenador.online",1411956405],["animeplus.org",628628020],["animesorion.org",584050736],["baixefilmesgratis.org",1576286489],["baixeturbo.org",1038347036],["bmwfaq.org",660840917],["comandotorrents.org",2144902932],["degracaemaisgostoso.org",[1614529806,2081617508]],["yesfilmes.org",[2081617508,2077365351]],["espaebook.org",1407645415],["gamesfull.org",669204370],["hayatbul.org",1743298462],["internautas.org",1216956728],["megawarez.org",2055318581],["pastepvp.org",604316958],["pastesgamesfull.org",816404975],["dicionario.priberam.org",567472282],["procurandovagas.org",398013260],["seriesanimadas.org",1214671143],["tabletsesmartphones.org",1731324580],["tomadivx.org",2055086883],["top10mais.org",1159918276],["zdescargas.org",1172865805],["elcomercio.pe",[673389740,328548226]],["gestion.pe",673389740],["peru21.pe",[328548226,1786879447]],["larepublica.pe",332911726],["megaseriesonline.pro",222063767],["servernew.xyz",222063767],["servertwo.xyz",222063767],["mundotec.pro",1174148383],["acorianooriental.pt",740819317],["aeiou.pt",200217850],["autosport.aeiou.pt",1881544801],["caras.pt",191369024],["exameinformatica.pt",191369024],["xl.pt",191369024],["clix.pt",[1128527578,116784392]],["publico.pt",116784392],["correiomanha.pt",1545732856],["dementia.pt",367215538],["diariocoimbra.pt",1005783185],["dn.pt",[94004232,1213333073]],["tsf.pt",94004232],["jn.pt",1213333073]]);

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
