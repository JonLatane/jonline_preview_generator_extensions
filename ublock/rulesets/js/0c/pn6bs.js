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

// deu-0

const argsMap = new Map([[89502621,{"a":".r"}],[830837014,{"a":".sidebar"}],[417932722,{"a":"#chati_frame,\n#spezial_column,\n#wb_widget,\n.size-300x250,\n.spz_height_60"}],[117934851,{"a":"#BelowRectangle"}],[1371407227,{"a":"div[class^=\"runds-werbung-\"]"}],[586241091,{"a":".owl-carousel"}],[550924224,{"a":"#custom_html-121,\n#custom_html-126,\n#custom_html-127,\n#custom_html-132,\n#custom_html-143,\n#custom_html-144,\n#custom_html-145,\n#desktop_understitial,\n#halfpage,\n#media_image-10,\n#rectangle,\n#top_0,\na[href*=\".rokkr.net/promo/\"],\na[href*=\"/hide.me/de/?friend=\"],\na[href*=\"/prf.hn/click/\"],\na[href*=\"?sca_ref=\"],\na[href^=\" https://www.bit.ly/\"],\na[href^=\"https://hide.me/de/promotion/\"],\ndiv[style=\"width:300px;height:250px\"]"}],[2052718222,{"a":".dt"}],[704982675,{"a":".supporter"}],[1483522986,{"a":".page-banner"}],[1015528915,{"a":".bxslider,\n.partvert-right"}],[873142832,{"a":"a[id=\"bottombanner\"]"}],[1829289884,{"a":".mainSponsor,\n.sportnews"}],[1659063729,{"a":".werb"}],[1314549932,{"a":".sponsorslider"}],[220394840,{"a":".qodef-e-logo > img[height=\"80\"]"}],[647727981,{"a":".w-header"}],[1142861307,{"a":".add"}],[634809801,{"a":".slideshowck"}],[1436429416,{"a":".divAdd_Banner"}],[1500512142,{"a":".custom-ban-wrap"}],[236378226,{"a":"#header-wrapper + div[class=\"row \"],\n.ad-listing"}],[1770928493,{"a":".teaser--sponsored"}],[712215904,{"a":".banPlace1,\n.banner_sidebar"}],[1934806417,{"a":"#head_banner,\n#pis_posts_in_sidebar-6,\n#widget_sp_image-14"}],[738414590,{"a":"#superreplacement"}],[834875654,{"a":"a[href^=\"https://www.banggood.com/marketing-\"]"}],[617448945,{"a":"#topBanner"}],[1399569120,{"a":"#forumbanner"}],[1611662710,{"a":"#dnvsuperbanner"}],[1721034242,{"a":"#adunit"}],[569379902,{"a":".commercialbar,\n.top_bannerbar"}],[360691616,{"a":"#billboard_btf_2,\n#footer-ad,\n#news-contentads,\n#sticky-superbanner,\n#ubs-banner-fallback,\n.adsbygoogle,\n.cpg_incontent1-container,\n.cpg_incontent2-container,\n.mleft-10 + .table-quotes,\n.mrec-height-prefix,\na[href=\"#p500Werbehinweis\"],\na[href=\"http://g.finanzen.net/ubs-aktiendetail-hebel-fallback\"],\na[href^=\"http://g.finanzen.net/hsbc-startseite-top-flop?id=\"],\na[href^=\"https://ad.doubleclick.net/\"],\nimg[alt=\"Passende Produkte von Vontobel\"],\nimg[alt=\"Passende Produkte von der Société Générale\"]"}],[739557949,{"a":"#nab_container"}],[730965463,{"a":".field--name-dynamic-token-fieldnode-wett-tipps-4-wettanbieter-h2 + .field--name-dynamic-block-fieldnode-top-3-anbieter"}],[1840803308,{"a":"#ai_widget-5,\n#text-6"}],[1582836058,{"a":"._bb_1,\n._gartenjournal_billboard,\n._gartenjournal_inarticle_2,\n._gartenjournal_leaderboard_oben,\n._gartenjournal_leaderboard_unten,\n.adinj"}],[2067567610,{"a":".atkp-container"}],[1589334079,{"a":".pane-dpipub-rossel-imu-middle-moblile,\n.pane-dpipub-rossel-native-top,\ndiv[class^=\"pane-dpipub-\"]"}],[577463659,{"a":".rectangles-row"}],[853646554,{"a":"#page-header + br + .forabg"}],[706632761,{"a":"div[style^=\"width:300px;height:250px;\"]"}],[1062268509,{"a":".content-main-box-300x250,\n.content-main-box-728x90,\n.content-right-box-300x250right"}],[165871613,{"a":".netpoint"}],[1818284569,{"a":".noprint > div[style] + div[style] > script:first-child + div[style]:last-child"}],[1051630921,{"a":".gstsk"}],[438530163,{"a":"td:nth-of-type(3):not(:last-of-type) table[width^=\"3\"]"}],[1022910610,{"a":"#as2931,\n.pi-banner,\na[href^=\"https://www.fincabayano.net/\"]"}],[9592129,{"a":".funbox"}],[506104155,{"a":".code-block-12,\n.code-block-14,\n.code-block-h-250px,\n.code-block-h-300px,\ndiv[style=\"height: 300px;\"]"}],[116263241,{"a":"#catfad"}],[1694371285,{"a":"#wa_join_btn,\na[href^=\"http://www.livestrip.com/FreeAccountLanding.aspx?\"]"}],[1157749469,{"a":"#subheader"}],[513662501,{"a":"#Layer1,\n#Layer2"}],[712141473,{"a":".header-promo"}],[1289412233,{"a":"#banners,\ndiv[style=\"float:right; width: 110px; margin-left: 15px; margin-top: 12px; margin-bottom: 15px; padding: 2px 6px; text-align: center; border: 1px solid black; background:white; line-height: 2em; color: black;\"]"}],[2127591691,{"a":".widget_atkp_widget"}],[1535325213,{"a":"a[href^=\"http://camgirly.net\"]"}],[1682912636,{"a":"#centcon-side-inner"}],[572466126,{"a":".azk-native-responsive"}],[700435532,{"a":"#leaderwidget"}],[266607954,{"a":".googlediv"}],[1270270434,{"a":".adb"}],[140373740,{"a":".amz"}],[502461008,{"a":".zitat > div[style=\"width:300px;\"]"}],[618734547,{"a":".e_adv"}],[497741681,{"a":"div[id^=\"modifiedwerbung_\"]"}],[918360828,{"a":"div[style=\"height: 280px; margin: 5px 0 5px 0;\"]"}],[1180811710,{"a":"#ny_banner,\n#right160x600,\n.googl,\n.recommend,\n.right > .widgetbox2,\ndiv[style=\"height:90px;overflow:hidden;text-align:center;\"]"}],[322203611,{"a":"a[href=\"http://topne.ws/onlineoutlet\"]"}],[1998678455,{"a":"#parcello-mo"}],[713334854,{"a":"#wn-insurance-quote-editor"}],[1986516149,{"a":"#gad-sky,\n#gads-leaderboard,\n.pane-aktuelle-top-links"}],[263134190,{"a":".zenoLSInnerProductTableRightAmazon"}],[856958931,{"a":"#custom_post_widget-6"}],[2140398445,{"a":"#premium-partners"}],[1748819199,{"a":"div[id^=\"edit\"][style=\"padding:0px 0px 6px 0px\"] > table[id^=\"post\"][width=\"100%\"][cellspacing=\"0\"][cellpadding=\"6\"][border=\"0\"][align=\"center\"] + br + .tborder[width=\"100%\"][cellspacing=\"0\"][cellpadding=\"6\"][border=\"0\"][align=\"center\"]"}],[2011880298,{"a":".d_695692"}],[1482676791,{"a":"a[href^=\"http://filestore.to/premium\"]"}],[580929539,{"a":".Banner"}],[1655285835,{"a":"#selfpromotionOverlay"}],[1220789088,{"a":".d_702192"}],[2100008172,{"a":".dl2019main,\n.top2019main"}],[310526946,{"a":"a[href*=\"/af.php\"]"}],[2423141,{"a":"a[href^=\"//fbmedia-ckl.com/\"]"}],[1534715989,{"a":"#ni-overlay"}],[648016519,{"a":".d_702232"}],[96697258,{"a":"a[href^=\"https://lp.mydirtyhobby.com/\"]"}],[111983082,{"a":".d_702212"}],[544533560,{"a":".top_news_adv"}],[29635601,{"a":".fixed.bottom-0.pb-8"}],[1148366556,{"a":".sdtv-gothaer"}],[1716409370,{"a":"a[href^=\"https://hoerbuch.us/dll/\"],\na[href^=\"https://linksnappy.com/?ref=\"],\na[href^=\"https://www.purevpn.com/?aff=\"],\na[href^=\"https://www.purevpn.com?aff=\"]"}],[891368162,{"a":".tftable"}],[840002945,{"a":"#block-anzeige,\n.region-topad"}],[1018818486,{"a":"a[href^=\"//plx.hammerporno.xxx/pool_link/\"]"}],[65781420,{"a":"#unten_anzeigen"}]]);

const hostnamesMap = new Map([["codecheck.info",89502621],["german-porno-deutsch.info",830837014],["hd-pornos.info",417932722],["pornoente.tv",417932722],["mazda-forum.info",117934851],["rundschau.info",1371407227],["ssv-brixen.info",586241091],["tarnkappe.info",550924224],["bolzano-bozen.it",2052718222],["broncos.it",704982675],["kultur.bz.it",1483522986],["dererker.it",1015528915],["dervinschger.it",873142832],["hceppan.it",1829289884],["sbb.it",1659063729],["nydus.org",[1659063729,1180811710]],["sportclub-meran.it",1314549932],["ssvbozenhandball.it",220394840],["stol.it",647727981],["suedtiroltv.it",1142861307],["wallis24.it",634809801],["volksblatt.li",1436429416],["filmstreaming-de.life",1500512142],["diegrenzgaenger.lu",236378226],["wort.lu",1770928493],["archzine.net",712215904],["belgieninfo.net",1934806417],["chilloutzone.net",738414590],["chinahandys.net",834875654],["otr.datenkeller.net",617448945],["dforum.net",1399569120],["dnv-online.net",1611662710],["g.doubleclick.net",1721034242],["edelsteine.net",569379902],["sternzeichen.net",569379902],["finanzen.net",360691616],["fupa.net",739557949],["fussballinfo.net",730965463],["fussballnationalmannschaft.net",1840803308],["gartenjournal.net",1582836058],["gartenratgeber.net",2067567610],["grenzecho.net",1589334079],["hifistatement.net",577463659],["hstt.net",853646554],["italienisch-lernen-online.net",706632761],["kostenlosspielen.net",1062268509],["lavendel.net",165871613],["mikrocontroller.net",1818284569],["my-homo.net",1051630921],["pesterlloyd.net",438530163],["pi-news.net",1022910610],["raidrush.net",9592129],["raptastisch.net",506104155],["sexei.net",116263241],["sexfilmegratis.net",1694371285],["sexvideoskostenlos.net",1694371285],["sims-3.net",1157749469],["staedte-info.net",513662501],["taucher.net",712141473],["breakpoint.untergrund.net",1289412233],["usa-info.net",2127591691],["zensiert.net",1535325213],["polizei.news",1682912636],["abmahnung.org",572466126],["anime-loads.org",700435532],["dejure.org",266607954],["fairytail-tube.org",[1270270434,140373740]],["naruto-tube.org",1270270434],["german-bash.org",502461008],["metropolico.org",618734547],["modified-shop.org",497741681],["n-mag.org",918360828],["outleter.org",322203611],["parcello.org",1998678455],["travelguide-en.org",713334854],["tschechien-online.org",1986516149],["zeno.org",263134190],["wochenblatt.pl",856958931],["wein.plus",2140398445],["boerse.sx",1748819199],["goldesel.sx",[2011880298,1482676791]],["blockbuster.to",[1482676791,1220789088]],["laden.to",[1482676791,648016519]],["saugen.to",[1482676791,111983082]],["blackdevils.team",580929539],["darkpantersclan.de.tl",1655285835],["gload.to",2100008172],["hd-source.to",310526946],["kinoger.to",2423141],["kinomax.to",1534715989],["pornkinox.to",96697258],["xrel.to",544533560],["fight24.tv",29635601],["sportdeutschland.tv",1148366556],["hoerbuch.us",1716409370],["kinox-filme.work",891368162],["jungle.world",840002945],["hammerporno.xxx",1018818486],["wildesporno.xxx",65781420]]);

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
