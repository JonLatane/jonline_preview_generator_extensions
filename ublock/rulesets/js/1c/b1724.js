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

// ind-0

const argsMap = new Map([[1748273742,{"a":"#before-ad"}],[1814402459,{"a":".add-section-home.right"}],[970929329,{"a":".no-vigyapan-section,\n.no-vigyapan-single"}],[490168097,{"a":"#fn-before-content-sidebar,\n.fn-widget-image"}],[981546303,{"a":".ad_responsive"}],[754922361,{"a":".topadrt"}],[787858807,{"a":".long_ads1"}],[1578848253,{"a":"#header-banner"}],[1948984094,{"a":"#sidebar .widget_block"}],[115565808,{"a":".header_biggapon"}],[1161645952,{"a":".themesbazar_gallery_sec > .row:first-child > .col-md-6:first-child"}],[897967163,{"a":"#stream-item-widget-12"}],[1320049878,{"a":".code-block:not(.code-block-10)"}],[1685322530,{"a":".bs-injection,\ndiv[id^=\"vuqly-\"]"}],[1192700113,{"a":".td_separator_solid"}],[2069098071,{"a":".navin-content_13,\ndiv[class^=\"navin-content\"] img:not([src*=\"PicsArt_05-19-01.16.30.png\"])"}],[485871174,{"a":"div[class*=\"m__dfp\"]"}],[1901169372,{"a":".penci-sidebar-right"}],[1717228606,{"a":".search2"}],[1177456055,{"a":".am-top-ads,\n.long-add,\n.single-pg-ad-2"}],[1844152031,{"a":"a[href*=\"gurkhasfinance.com.np\"],\nsection.widget img:not(.wp-image-243554)"}],[1758399139,{"a":".post-body .tr-caption-container,\n.sidebar .HTML:not(#HTML15):not(#HTML8),\n.sidebar .Image:not(#Image6)"}],[134271930,{"a":".wp-image-2104,\n.wp-image-2806"}],[468948383,{"a":".ads-conatiner"}],[1653764367,{"a":".horizental-ad-image"}],[18324874,{"a":".logo-ads,\n.logo-ads-header,\n.logo-ads-singlepage"}],[314246462,{"a":".adsgo,\n.midads"}],[314256836,{"a":".nepalijanta-ad"}],[142614719,{"a":"#content .news_portal_ads_banner"}],[2099914452,{"a":".rd-ads"}],[2102836525,{"a":"a[href*=\"callrakesh.com\"]"}],[2024627131,{"a":".category_ads_3_cols,\n.headline_below_ad,\n.single-news-ad,\n.taza_ad,\nimg[alt=\"ads\"]"}],[397724035,{"a":".nk-sidebar-ads"}],[1113405775,{"a":".paraAd"}],[905054532,{"a":".advertiseImage,\n.single-post-advertisement"}],[1241112652,{"a":".ads img:not(.wp-image-72119)"}],[1007248623,{"a":"#Image39"}],[1950049298,{"a":".adsimage img:not(.wp-image-143293)"}],[1020889632,{"a":".full-ad-img,\n.inner-page-ful-ad-btm,\n.rojgar-img-blk"}],[1585867120,{"a":".topfull"}],[202615119,{"a":".gam-each-npad"}],[299942016,{"a":".widget_sso_advertisement"}],[463212230,{"a":".advert-width,\n.tc-side-ads"}],[1687886099,{"a":".gam-each-nvad"}],[192683460,{"a":".gam-each-caad:not(#gam-ad-13):not(#gam-ad-15)"}],[93775706,{"a":".yotcuzeh"}],[1159051255,{"a":"#floating-sidebar .custom"}],[1903581997,{"a":".tigDiv,\n.vc_figure"}],[677648983,{"a":".vc_slide"}],[1473959678,{"a":"#main-head .right"}],[1511313213,{"a":".footer-bottom"}],[709368001,{"a":".wpcp-carousel-wrapper"}],[502407920,{"a":"#content center img"}],[2106966576,{"a":"div[class^=\"sgpb-\"]"}],[1125395007,{"a":"#vigyapan,\n.ad-container,\n.ad_cntainer,\n.add_secton,\n.ads-slider,\n.ftrad,\n.global-storylist li[style^=\"height\"],\n.my-ad-rhs,\n.pwa_add,\n.sideMiddle,\n.sideTop,\n.site-ad-container,\ndiv[class*=\"Header_inner_ad\"],\ndiv[class^=\"HomeMobile_mobile_add\"],\ndiv[style*=\"300px\"][style*=\"background\"]"}],[243890427,{"a":"div.newstrendvideo-box > ul > li:nth-child(7)"}],[1799444677,{"a":".entry-content iframe"}],[1216873673,{"a":".container .container #page-sidebar"}],[844871322,{"a":".mom-e3lanat"}],[1656624893,{"a":".wpb_gallery"}],[2007083374,{"a":".wp-image-643,\n.wp-image-8371"}],[1413853851,{"a":"a[href*=\"narendramodi.in\"]"}],[345973009,{"a":".top iframe"}],[1153470680,{"a":".home_last_ad"}],[1751379699,{"a":".topHeaderAd"}],[390238733,{"a":".add-banner"}],[582810567,{"a":".aside-add"}],[617106629,{"a":".home_popup"}],[435859880,{"a":"#header .col-lg-7"}],[1134295599,{"a":".adds_menu img"}],[1030453860,{"a":".add .textwidget > h3.title,\n.col-md-8 .add .textwidget"}],[673914506,{"a":".newsb-adlabel"}],[768072471,{"a":".oit-ad-code"}],[1388502383,{"a":".slider-ad1"}],[1824951540,{"a":".tdb_single_content img"}],[141187474,{"a":".mid-adv .row,\naside.widget_simpleimage"}],[1987534125,{"a":".ad--widget"}],[981071939,{"a":".header--ad"}],[1102273319,{"a":".Add-Master-Sside1,\n.Matter-Bottom-Add,\n.Matter-Top-Add"}],[1296456559,{"a":".block__2,\n.book_ads"}],[1108024688,{"a":"div[id^=\"newsh-\"]"}],[641434708,{"a":".entry-content p img:only-child,\n.mh-header-widget-2"}],[1432310330,{"a":".sidea .wp-block-image,\n.wid-1"}],[1510220864,{"a":".utt_top"}],[1334864789,{"a":".adfoxly-wrapper,\n.td-main-sidebar .widget_media_image,\n.ugaam-ad-wrapper-outer,\na[href*=\"href.li\"]"}],[1416076610,{"a":"div[id^=\"newsl-\"]"}],[1595994082,{"a":".wpb_single_image figure img:not([src*=\"NM-01\"])"}],[444453912,{"a":"#v-newsnationtv-v4-0,\n.adsense"}],[727954631,{"a":"#custom_html-23"}],[1597761761,{"a":"section.widget > a img"}],[609700965,{"a":".addMidle,\n.forAdd,\n.sidebarAdd,\nimg[alt=\"Biggapon\"]"}],[563786664,{"a":".advtertise"}],[442539002,{"a":".section .adalyticsblock,\nsection.widget img:not(.wp-image-85386):not(.wp-image-87331)"}],[1391218087,{"a":".mySlides"}],[1744424170,{"a":".sidebar-banner,\n.single-sidebar .post-carousel-1"}],[666288749,{"a":"figure.wp-block-image"}],[498709357,{"a":".top-most-banner"}],[1290661268,{"a":".wp-image-10388,\n.wp-image-10536,\n.wp-image-11042,\n.wp-image-19215,\n.wp-image-2083,\n.wp-image-3711,\n.wp-image-77"}],[1455229109,{"a":".header_adver"}],[1788414649,{"a":"#sidebar-primary-sidebar > .widget:not([id^=\"bs-\"])"}],[972382504,{"a":".uris-slider-post-title,\n.wp-post-author .code-block img"}],[872598351,{"a":".code-block-1"}],[777683465,{"a":"a[href*=\"narayan98.co.in\"],\na[href*=\"youtu.be/yEWmOfXJRX8\"]"}],[752766177,{"a":".section_before_trneding"}],[326129274,{"a":"div[class^=\"newst-\"]"}],[1602259362,{"a":"#main .widget_custom_html,\n#myVideo1,\n[id^=\"newsu-\"]"}],[804809557,{"a":".td-g-rec-id-custom_ad_1"}],[1254597501,{"a":".stream-item-above-footer"}],[1381544312,{"a":"#main .widget_sow-image"}],[1541592796,{"a":"div[id^=\"AS_O_LHS_1\"] > div:nth-child(2n+1)"}],[888992968,{"a":".td-footer-wrapper .widget_media_image,\n.top_index_block_adnow"}],[983003724,{"a":".block-wrapper ~ #webbank-ad-section"}],[1577408035,{"a":".foogallery_widget"}],[834575461,{"a":".elementor-widget-shortcode"}],[1671884661,{"a":".smashwords-widget"}],[1159421473,{"a":"#sidebar2"}],[774902771,{"a":".nnews-content"}],[476224364,{"a":".advertise-ifrme"}],[2057978884,{"a":"div[class^=\"nokha-\"]"}],[110590484,{"a":".top_most_news_post_ad,\ndiv[class*=\"_bottom_ad\"],\ndiv[class*=\"_right_ad\"],\ndiv[class*=\"inner-main-ad\"]"}],[2075002121,{"a":".ai-attributes"}],[1895014867,{"a":".sidebar iframe"}],[258722647,{"a":".addsn,\na[href*=\"countryoven.com\"]"}],[247250681,{"a":"#awt-left"}],[1018696268,{"a":"#carouselExampleControls"}],[2080858542,{"a":"#HTML19"}],[1531940205,{"a":"#content section.widget_text"}],[168125607,{"a":".td-ss-main-sidebar .widget_custom_html"}],[926334940,{"a":"#header .sidebar"}],[1494353445,{"a":".footer-sidebar .widget_media_image"}],[1772940236,{"a":".ad-title + a"}],[488789377,{"a":".wp-image-133"}],[1093503997,{"a":"._adr_abp_container,\n.cmscontent-top,\n.oiad"}],[1539636751,{"a":".btmAdHldr"}],[1659321803,{"a":".add-2"}],[1710760029,{"a":".addb > a img,\n.skpa,\n.tadd"}],[770609050,{"a":"#ok18-roadblock-wrap,\n.add__fullwidth,\n.nh_list,\n.ok-full-widht-adv,\n.okam-ad-position-wrap,\n.okam-each-ad,\n.tribox-add"}],[1487538090,{"a":"#sgpb-popup-dialog-main-div-wrapper"}],[1548290883,{"a":".adds-sec"}],[1944437100,{"a":"img[alt=\"1205X128\"],\nimg[alt=\"Header Ad\"]"}],[641717746,{"a":"aside.widget_media_image img:not(.wp-image-64636)"}],[548061448,{"a":".proad"}],[1353286248,{"a":".betn-add"}],[1650881267,{"a":".googleAdBlock"}],[1763929164,{"a":".onlyn-after-content"}],[893822530,{"a":".facebook_title + .video"}],[322822557,{"a":"a[href*=\"hons.com\"]"}],[1740504307,{"a":"img.attachment-full"}],[1912525175,{"a":".single-left-col"}],[891251777,{"a":".addcomponent,\n.attachment-full.size-full:not(.wp-image-644950)"}],[99592605,{"a":".adds_rajn,\n.adds_side,\n.taja-adds"}],[73857650,{"a":"a[href*=\"rv-weddinghall\"]"}],[573258375,{"a":"a[href*=\"tel:\"]"}],[1229721202,{"a":".widget_custom_html:not(#custom_html-14)"}],[495177341,{"a":"#aside #sidebar,\n#small-news,\n.ad_10"}],[146017762,{"a":".pum-content,\n[id^=\"td_uid_3\"]"}],[1658605548,{"a":".pahad-widget"}],[1376170286,{"a":"div[id^=\"pahad-\"]"}],[397182388,{"a":"div[class^=\"pakun-\"]"}],[115474070,{"a":"div[data-structure=\"12\"]"}],[43451574,{"a":".ads > a"}],[1578233271,{"a":"#webs-bin-5836d5a9170f38d57b00df0a,\n#webs-bin-5bd3752bd8b6aa0001ca1138,\n#webs-bin-5bd3762dd8b6aa0001ca1164,\na[href*=\"baluasiaadd\"],\na[href*=\"channel/UCrx9evkteoAOVMtnZIssVuA/\"],\na[href*=\"stsstudio.com\"]"}],[417022387,{"a":"#disqus_thread iframe:first-child"}],[1068993776,{"a":".wp-image-4609,\n.wp-image-5343,\n.wp-image-5345,\n.wp-image-5348,\n.wp-image-735,\n.wp-image-752,\n.wp-image-8135,\n.wp-image-822,\n.wp-image-825"}],[452854661,{"a":".exv-image"}],[834022404,{"a":"#block-6"}],[56930851,{"a":"#box,\n.annonce_head,\n.group2,\n.group3,\n.text-center > table[width=\"98%\"],\ndiv[style$=\"height:90px;\"]"}],[636166861,{"a":".theiaStickySidebar .widget_media_video"}],[119447649,{"a":".parva-widget,\ndiv[class^=\"parva-after-content\"]"}],[19940310,{"a":".single_page .widget_area img"}],[564797942,{"a":".widget_media_image:not(#media_image-29)"}],[855575827,{"a":".td-adspot-title + a"}],[97735419,{"a":"#Mod155,\n#Mod173,\n#Mod174"}],[705145124,{"a":"div[class^=\"aryav-\"],\ndiv[class^=\"newsf-\"],\ndiv[class^=\"patna-\"]"}],[1814334967,{"a":"#slide-holder,\n.oad"}],[219819631,{"a":".vmag_pro_medium_ad"}],[1887013097,{"a":".featured-post-ads,\n.fullwidhtads,\n.indexadsone,\n.pragads,\n.title_below_ads"}],[1256366905,{"a":".AdvtSample"}],[1202033640,{"a":"iframe[class^=\"FrameAdvt\"]"}],[1331015308,{"a":".td_uid_23_5ee077adb2830_rand"}],[2013927086,{"a":"img[alt*=\" Ad-\"]"}],[2049113883,{"a":".tdb_single_content figure .blocks-gallery-grid:only-child"}],[1078105048,{"a":".elementor-widget-image img:not([src*=\"About-pokhara\"])"}],[1259623788,{"a":".advertise-sec-header"}],[1568503419,{"a":".vc_figure .vc_box_border_blue"}]]);

const hostnamesMap = new Map([["nandednewslive.com",1748273742],["yarldevinews.net",1748273742],["nandighoshatv.com",1814402459],["narayanionline.com",970929329],["narmadanchal.com",490168097],["nation1voice.com",981546303],["nationaldetectivenews.com",754922361],["ournewsbd.net",754922361],["nationalpowernews.com",787858807],["nationaltodaylive.com",1578848253],["nationalwartanews.com",1948984094],["natunjug.com",115565808],["natunshokal.com",1161645952],["navakeralanews.com",897967163],["tismedia.in",897967163],["navarashtra.com",1320049878],["navayuganews.com",1685322530],["navdeshtimes.com",1192700113],["navinsamachar.com",2069098071],["navjivanindia.com",485871174],["navsatta.com",1901169372],["nayabimarsha.com",1717228606],["nayabishwo.com",1177456055],["nayapage.com",1844152031],["nayasabera.com",1758399139],["nayesubah.com",134271930],["nepalbahas.com",468948383],["nepalcanadanews.com",1653764367],["nepaldubai.com",18324874],["nepalesediaspora.com",314246462],["nepalijanta.com",314256836],["nepalimato.com",142614719],["nepalipatra.com",2099914452],["nepalipost.com",2102836525],["nepaljapan.com",2024627131],["nepalkhabar.com",[397724035,1113405775]],["ratopati.com",1113405775],["nepalmamila.com",905054532],["nepalmanch.com",1241112652],["nepalmother.com",1007248623],["nepalpage.com",1950049298],["nepalpati.com",1020889632],["nepalplus.com",1585867120],["nepalpress.com",202615119],["nepalraftar.com",299942016],["nepalsamaya.com",463212230],["nepalviews.com",1687886099],["nepalwatch.com",192683460],["neplays.com",93775706],["nerpatham.com",1159051255],["netmalayalam.com",[1903581997,677648983]],["amaderkhulna.net",677648983],["newcinemaexpress.com",1473959678],["news127.com",[1511313213,709368001]],["thesurgicalnews.in",709368001],["news129.com",502407920],["news14india.com",2106966576],["thefourthmirror.com",2106966576],["suryaa.co.in",2106966576],["pcbtoday.in",2106966576],["dainikazadi.net",2106966576],["news18.com",1125395007],["kannada.news18.com",243890427],["news1hindustan.com",1799444677],["news24delhi.com",1216873673],["news30express.com",[844871322,1656624893]],["pclive7.com",844871322],["everesttimes.net",844871322],["newscrime24.com",1656624893],["indiaaajkal.in",1656624893],["news4himachal.com",2007083374],["news4himalayans.com",1413853851],["news4nation.com",345973009],["news71online.com",1153470680],["shamolynews24.com",1153470680],["newsagencyindia.com",1751379699],["newsatfirst.com",[390238733,582810567]],["samadhannews.com",390238733],["newsbangla24.com",617106629],["newsbazar24.com",435859880],["newsbhandar.com",1134295599],["newsbijoy.com",1030453860],["newsbindass.com",673914506],["newsbrahmanbaria.com",768072471],["newsbritant.com",[1388502383,1824951540]],["ujjwalhimachal.com",1824951540],["newsdeskkannada.com",141187474],["newsdnntv.com",[1987534125,981071939]],["pratyeknewslive.com",1987534125],["newsdustak.com",1102273319],["newsflash71.com",1296456559],["newsheight.com",1108024688],["newskadaba.com",641434708],["newskoseli.com",1432310330],["newskranti.com",1510220864],["newslabz.com",1334864789],["newslinkers.com",1416076610],["newsmerchants.com",1595994082],["newsnationtv.com",444453912],["newsnukkad.com",727954631],["newsofnepal.com",1597761761],["newspagebd.com",609700965],["newsplus24x7.com",563786664],["newspolar.com",442539002],["newsroomme.com",1391218087],["sindhudurglive.com",1391218087],["youngvarta.com",1391218087],["newssanjal.com",1744424170],["newssarakhon.com",666288749],["prasashan.com",666288749],["tirhutnow.com",666288749],["dainikkushtia.net",666288749],["newswings.online",666288749],["news27.org",666288749],["newssewa.com",498709357],["newssunamganj.com",1290661268],["newstaglive.com",1455229109],["newstodaycg.com",1788414649],["newstodayjharkhand.com",972382504],["newstodaynetwork.com",[872598351,777683465]],["theexclusivestory.com",872598351],["delhibulletin.in",872598351],["newstrack.com",752766177],["newstrendindia.com",326129274],["newsuperbharat.com",1602259362],["newsvariant.com",804809557],["newswing.com",1254597501],["pangighatidanikapatrika.in",1254597501],["newsxindia.com",1381544312],["newzfast.com",1541592796],["ni24news.com",888992968],["nigranee.com",983003724],["nijamtoday.com",1577408035],["nirbhiknazar.com",834575461],["punjablivenews.in",834575461],["samachardoot.in",834575461],["nittaa.com",1671884661],["nknewsindia.com",1159421473],["asalbaat.co.in",1159421473],["nnews24.com",774902771],["nobat.com",476224364],["nokhaexpress.com",2057978884],["nrimalayalee.com",110590484],["ntcnewsmedia.com",2075002121],["ntinews.com",1895014867],["ntnews.com",258722647],["ntvtelugu.com",247250681],["nzpunjabinews.com",1018696268],["obolokon24.com",2080858542],["spyviewnews.in",2080858542],["odiannews.com",1531940205],["odiapua.com",168125607],["sarthaksamay.com",168125607],["ucchakontha.com",168125607],["hugujarati.in",168125607],["khabarbhatapara.in",168125607],["newsofmithila.in",168125607],["trendingnewsindia.in",168125607],["odishamirror.com",926334940],["odishatime.com",1494353445],["officialkhabar.com",1772940236],["onakanthirkantho.com",488789377],["tamil.oneindia.com",1093503997],["onetamilnews.com",1539636751],["onlinedabali.com",[1659321803,1710760029]],["ratopost.com",1659321803],["sancharkendra.com",1659321803],["motivatenews.com.np",1659321803],["pokharapatra.com.np",1659321803],["onlinekhabar.com",770609050],["onlinemajdoor.com",[1487538090,1548290883]],["vakeesam.com",1487538090],["onlinemarg.com",1944437100],["onlinenepal.com",641717746],["onlinenews7.com",548061448],["onlinepana.com",1353286248],["onlinepatrakar.com",1650881267],["onlynews24.com",1763929164],["onnodristy.com",893822530],["onsnews.com",322822557],["onstimes.com",1740504307],["orthosongbad.com",1912525175],["osnepal.com",891251777],["otvnepal.com",99592605],["ourmyliddy.com",[73857650,573258375]],["beforeprint.in",573258375],["pabnabarta24.com",1229721202],["padmatimes24.com",495177341],["pagetamil.com",146017762],["pahadprabhat.com",[1658605548,1376170286]],["pahadkasach.in",1376170286],["pakundiapratidin.com",397182388],["pallibatani.com",115474070],["pankourinews.com",43451574],["pannagam.com",1578233271],["pardaphash.com",417022387],["paribahanjagot.com",1068993776],["parichaya.com",452854661],["paridarshaka.com",834022404],["rashtranayaknews.com",834022404],["thenewswave.com",834022404],["viralfactsindia.com",834022404],["kokanmedia.in",834022404],["newsnagar.in",834022404],["paristamil.com",56930851],["parvatjan.com",636166861],["lokshakti.in",636166861],["parvatprerna.com",119447649],["patheo24.com",19940310],["pathivaranews.com",564797942],["pathramonline.com",855575827],["loksansar.in",855575827],["patnadaily.com",97735419],["patnapost.com",705145124],["patrikai.com",1814334967],["payyanursouhrudavedi.com",219819631],["pchelpcenterbd.com",1887013097],["pinakatimes.com",[1256366905,1202033640]],["sachikalam.com",1256366905],["sehajtimes.com",1256366905],["pinkstea.com",1331015308],["pksnews24.com",2013927086],["pniindia.com",2049113883],["pokharacity.com",1078105048],["pokharaexpress.com",1259623788],["policemukhbir.com",1568503419]]);

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