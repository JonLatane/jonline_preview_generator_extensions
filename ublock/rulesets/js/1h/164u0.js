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

// tur-0

const argsMap = new Map([[1003225998,{"a":"div[style=\"clear:both;margin:10px 0; height: 250px;\"],\ndiv[style=\"max-width:328px;margin:10px 0;\"],\ndiv[style^=\"width:60%;float:left;\"]"}],[1152757880,{"a":".right-banner"}],[1067688047,{"a":".banner-bottom,\n.right-sticky-banners-off"}],[18399207,{"a":"#custom_html-2"}],[633078776,{"a":".topad,\n.wpipa"}],[1436819051,{"a":".fixedAd"}],[1610074098,{"a":".b-banner"}],[188586127,{"a":"#rightBanners,\n.bannerBox"}],[767854244,{"a":"td[height=\"250\"][bgcolor=\"#CCCCCC\"]"}],[708747300,{"a":".addss"}],[893113384,{"a":".splashAds"}],[745899183,{"a":".dissagreklam"}],[656691870,{"a":".newser-artical-bottom-ads,\n.zozo_ads_widget"}],[1256320310,{"a":".sagyan_reklam > img[alt=\"reklam\"]"}],[96653182,{"a":"#saniyeli_reklamx"}],[1603519702,{"a":"#topBanner,\ndiv[style=\"width: 300px; height: 250px;\"]"}],[545655674,{"a":".yanReklamlar"}],[1815934897,{"a":"a[href=\"https://goo.gl/zMa6wH\"]"}],[1167407952,{"a":".after-post-content-after-body"}],[1408760264,{"a":"#reklam-sol"}],[1483036300,{"a":".patslot"}],[727464389,{"a":".slider-reklam"}],[528475695,{"a":"#js-hook-for-ing-credit,\n#js-hook-for-kocfinans-credit,\n.mutlu-aku-banner"}],[1927358391,{"a":".ads_aky"}],[1418152850,{"a":"#text-20"}],[1745746287,{"a":"#ReklamAlani"}],[420211636,{"a":".hbr-solreklam"}],[2008959749,{"a":"#panels > div.sidebarWidget.safirBox,\n.theiaStickySidebar > div.homeWidget.safirBox,\ndiv[class^=\"arena-\"],\nimg[width=\"1200\"][height=\"200\"]"}],[877153326,{"a":"img[width=\"300\"][height=\"300\"]"}],[1999630191,{"a":"#mvp-leader-wrap"}],[467424804,{"a":".advbox"}],[1050906699,{"a":"a[href^=\"https://oley.com\"]"}],[1325626245,{"a":"li[id^=\"grand_news_custom_ads-\"]"}],[313027619,{"a":".fulladds"}],[1683915731,{"a":"a[href][target=\"_blank\"] > img"}],[342471507,{"a":".mob-desk"}],[120603062,{"a":".ust_reklam"}],[907318208,{"a":"img[alt=\"Ad\"]"}],[1205977223,{"a":".headbanner,\na[href=\"http://www.raykal.com.tr\"] > img"}],[1908706666,{"a":".main-banner"}],[2008353299,{"a":".sidebar-banner"}],[1611667955,{"a":"#adni_widgets-2,\n._ning_zone_inner"}],[941287532,{"a":"a[href^=\"https://www.aydinpost.com/advert/\"],\na[title^=\"Advert \"]"}],[1878587894,{"a":".splash"}],[300683379,{"a":"div[class^=\"adv-\"]"}],[870824853,{"a":"div[class^=\"ads_widget\"]"}],[1298619103,{"a":".header > .adv"}],[1691747349,{"a":".index_sub_headline[style=\"height:230px; width: 780px; overflow:hidden; margin:0 auto; text-align:center;\"],\n.menuustu-reklam,\n.sag336-reklam"}],[2096265171,{"a":".h80-reklam + div[style*=\"width:100%; height: 280px;\"],\ndiv[style=\"width:100%; height: 280px; margin:0 auto;margin-bottom:5px;\"],\niframe[src^=\"/advertisement/\"]"}],[1786803741,{"a":"#SolBlok div.hideMobil,\n#bottomBx,\niframe[src*=\"/a_kutu/\"]"}],[740659714,{"a":"#widget_455,\n.ad_header_inner,\n.canvas-layout-container > table[width=\"100%\"][cellspacing=\"0\"]"}],[1470887801,{"a":"img[width=\"468\"][height=\"58\"]"}],[1504310205,{"a":".ashe-preloader-wrap"}],[1024796072,{"a":"#ad_global_below_navbar"}],[2143865307,{"a":".sagyan_reklam"}],[1584703843,{"a":"div[class$=\"_reklam_160x600\"]"}],[824618825,{"a":"div[class^=\"reklam\"]"}],[1576286489,{"a":"#cboxOverlay,\n#colorbox"}],[2092427326,{"a":".reklam-header"}],[485453567,{"a":"img[alt=\"Reklam\"]"}],[301579690,{"a":"#fixedban,\na[href^=\"http://gg.gg/\"]"}],[1459852048,{"a":"a[target=\"_blank\"] > img"}],[1937897964,{"a":".x_advert"}],[1588045538,{"a":"div[class*=\"Reklam_\"]"}],[586629850,{"a":"#siteGenel > div[style^=\"text-align: center; width: 980px;\"],\n#solBlok > div[style^=\"text-align: center; width: 100%;\"]"}],[1037106113,{"a":".theiaStickySidebar > #text-97"}],[1418776062,{"a":"#MenuAlti"}],[95134940,{"a":"div[class*=\"_greklam \"]"}],[329949675,{"a":".container > div[class^=\"ana-sayfa-\"][class*=\"-buyuk-adv\"]"}],[2017739530,{"a":".arkaresim,\n.arkaresimm,\n.arkaresimmasa,\n.arkaresimmasas,\n.fiori-container > div[style=\"text-align:center\"] > div:not([class]):not([id]) a[href][target=\"_blank\"] > img,\n.ustreklam,\n.ustreklammasa,\na[href*=\"&utm_campaign=\"][target=\"_blank\"] > img[src*=\"banner\"],\na[title=\"reklam\"][target=\"_blank\"]"}],[1356817093,{"a":"div.ads"}],[854871967,{"a":"img[width=\"300\"][height=\"600\"]"}],[432010377,{"a":".haber-reklam"}],[1661657135,{"a":"#sgcboxOverlay,\n#sgcolorbox"}],[1853676493,{"a":".dikey > p > a[href][target=\"_blank\"],\n.theiaStickySidebar > .tb-block > a[href=\"https://www.VitaminDuragim.com/\"],\n.theiaStickySidebar > .tb-block > a[href][target=\"_blank\"] > img"}],[1405812810,{"a":"img[style=\"height:348px; width:748px\"],\ninput[style=\"width: 748px; height: 348px;\"]"}],[1869483845,{"a":".sidebar > div.koseyazarlari + div.widget"}],[1905100671,{"a":"#leader-wrapper"}],[939988902,{"a":".safirBox > a[target=\"_blank\"] > img"}],[651063390,{"a":".safirGalleryAds"}],[258656914,{"a":"#detaybar > div.engin06"}],[1179071519,{"a":"center > a[href][target=\"_blank\"] > img"}],[602128486,{"a":"#Video-Oncesi"}],[1044486452,{"a":".dynamic-ads-container,\n.other-ads-container,\ndiv[id^=\"media_image-\"]"}],[316672797,{"a":".widget-banner"}],[999868116,{"a":"#notificationHeaderShell"}],[1455885243,{"a":"#sidebar > #black-studio-tinymce-11,\n#sidebar > #black-studio-tinymce-12,\n#sidebar > #black-studio-tinymce-13,\n#sidebar > #black-studio-tinymce-14,\n#sidebar > #black-studio-tinymce-5,\n#sidebar > #black-studio-tinymce-6"}],[376893929,{"a":".grids > div[class] > .sidebar"}],[1574466987,{"a":".right > .right[style*=\"280px;\"],\ndiv[class=\"right\"] > div[class=\"photo\"][style=\"text-align:center;height:280px;\"],\ndiv[id^=\"ads-div-\"]"}],[31072994,{"a":"div[class^=\"reklam\"] .sponsorlu,\ndiv[class^=\"reklam\"]:not([style*=\"margin-top:\"])"}],[775946912,{"a":"div[class*=\"reklam\"]"}],[581649814,{"a":".add_middle_cont,\ndiv[class^=\"ad_type\"],\ndiv[id^=\"ad275x145\"]"}],[2125021024,{"a":".mtsnb-top,\n.wpb_wrapper a[href^=\"https://goo.gl/\"] > img"}],[1309200182,{"a":"a[href^=\"http://bit.ly/\"][target=\"_blank\"] > img"}],[974815268,{"a":".col-sm-3 > div[style=\"width:300px;height:600px\"]:not([class]):not([id]),\na[href^=\"https://www.acilkitap.com/\"] > img,\niframe[src=\"https://www.bilgicik.com/iframe/ari_sm/index.html\"],\nimg[alt*=\"reklam\"]"}],[1548455526,{"a":"div[data-zone]"}],[2028645268,{"a":".contentWrapperInner > .homeFeedBox,\n.entry-footer,\n.single_head_ad_wrapper,\n.stickySideAdsContainer"}],[1659262863,{"a":"#PanelSolReklam"}],[2134740382,{"a":"div[id^=\"kahtlejw-\"]"}],[651318831,{"a":".sidebar > .widget > .textwidget > *:not(.sossy-social-profile) > a[href][target=\"_blank\"][rel] > img,\n.thecontent > .code-block > a[href][target=\"_blank\"][rel].external > img,\n.thecontent > div.code-block > a[data-wpel-link=\"external\"] > img,\ncenter > a[href*=\"://bit.ly/\"] > img,\ncenter > a[href][target=\"_blank\"][rel].external > img"}],[1207642889,{"a":"iframe[src^=\"https://www.obilet.com/widget/\"]"}],[348804829,{"a":".fullads,\n.uc-ads"}],[1604339987,{"a":"#tickeradss,\n.fulladsd,\n.fvitrin,\n.kapla > .icerik > p > img[src$=\"enerya.png\"]"}],[1826683685,{"a":"div[class^=\"ads-\"]"}],[1191086893,{"a":".td-a-rec-id-header > a[href] > img"}],[1471375592,{"a":"#rklmpst"}],[934715607,{"a":".samBannerUnit"}],[930531284,{"a":".menualti"}],[2068087846,{"a":"a > img[style=\"margin-bottom:10px; max-width:990px;\"],\ntd[align=\"right\"][width=\"573\"],\ntd[width=\"300\"][valign=\"top\"] > a[href]:not([href^=\"http://www.bizbolulular.com\"]) > img"}],[419691366,{"a":"a[href^=\"https://bit.ly/\"]"}],[1856683185,{"a":".ad-channel"}],[65895019,{"a":".c-reklam"}],[258408949,{"a":"div[id^=\"reklam\"]"}],[1170115231,{"a":".linktl_flashad_wrap"}],[498825734,{"a":"#headads,\n#koddostureklamkodu,\n#main > #HTML1,\n.sidebar > #HTML2,\n.sidebar > #HTML4"}],[1820173761,{"a":".mustheadmyrealcontainer,\n.viessmann,\n.widget-sponsor-slider,\na[href*=\"/advertpro/\"]"}],[8260436,{"a":".mastheadvisisblity,\n.rightColWrap > div[class=\"col-sm-12 col-xs-12 pad0 border1 pad30 marTB20 text-center\"]"}],[1827998911,{"a":"#haber_ustu_reklam"}],[697526776,{"a":".new-ad"}],[1522552100,{"a":".singleAd2"}],[2029288022,{"a":".nativeWidget"}],[970093423,{"a":"div[class^=\"huge_it_slideshow_image_wrap\"]"}],[1582806109,{"a":"a[target=\"\"_blank\"\"]:not([href^=\"https://bodrumhaber.com/\"]) > [data-placeholder-resp]"}],[2136618211,{"a":".header > div.surmansetu,\n.kutu"}],[1266149777,{"a":"#custom_html-5"}],[837306496,{"a":"#custom_html-3"}],[1497908621,{"a":"a[href^=\"https://gozdoktorubodrum.com/\"]"}],[798518388,{"a":".reklamalan1"}],[1592992159,{"a":"#maltreklamsef"}],[69964462,{"a":".banner-pageskin"}],[1767030164,{"a":"#flashContentAlt"}],[1041076558,{"a":"#solyaka,\n.buyu-rek,\n.divdivediv,\n.paket-servis,\n.reklam-alan,\n.vitrintum,\ndiv[style*=\"margin-bottom:20px\"][style*=\"padding:5px\"],\ndiv[style=\"position:relative;margin-bottom:20px;\"],\nvideo[src*=\"reklam\"]"}],[1449828234,{"a":".logo-banner,\n.reklam-haber-ici"}],[490895510,{"a":".splash-popup"}],[1273923815,{"a":"#girisReklamalani"}],[999365841,{"a":"#rklm-sayfaustu"}],[1739578411,{"a":".reklam-metin"}],[318925519,{"a":".flash-wrapper,\n.modulAds,\n.reklam-manset,\n.sag-manset"}],[300451689,{"a":"a[class*=\"SideBarBanner\"],\ndiv[class*=\"BannerDiv\"] > a[target=\"_blank\"],\ndiv[class*=\"Bannerdiv\"] > a[target=\"_blank\"]"}],[509021029,{"a":".adsnd"}],[291131972,{"a":".right_ad_areas"}]]);

const hostnamesMap = new Map([["anlikaltinfiyatlari.com",1003225998],["anneysen.com",[1152757880,1067688047]],["c4defence.com",1152757880],["ansiklopedist.com",[18399207,633078776]],["avmkatalog.com",18399207],["bodrumolay.com",[18399207,1436819051,1522552100,1266149777,837306496,1497908621]],["ggmyfriend.com",18399207],["gurkanbilgisu.com",18399207],["morlevha.com",[18399207,837306496]],["hdabla.net",18399207],["omerbozdi.com.tr",[18399207,837306496]],["antakyagazetesi.com",[1436819051,1610074098]],["basarisiralamalari.com",[1436819051,2017739530,1356817093]],["bodrumdabirgun.com",[1436819051,1522552100]],["muglayenigun.com",1436819051],["turkiyedeenerji.com",1436819051],["voleybolmagazin.com",1436819051],["degisimgazetesi.com.tr",[1436819051,651063390]],["sozcu.com.tr",[1610074098,2008353299]],["antalyaburada.com",188586127],["antalyagecegunduz.com",767854244],["antalyahakkinda.com",[708747300,893113384]],["sabahhaberi.com",893113384],["antalyakorfez.com",745899183],["antalyam.com",656691870],["antalyannchaber.com",[1256320310,96653182]],["ilkokul1.com",96653182],["olay.com.tr",96653182],["antoloji.com",1603519702],["apelasyon.com",545655674],["gazetespor.com.tr",[545655674,824618825]],["applefoni.com",1815934897],["applehocam.com",1167407952],["apron24.com",1408760264],["batmangapgazetesi.com",[1408760264,1869483845]],["fanmedya.com",1408760264],["istanbultakipte.com",1408760264],["kemerhaber.com",1408760264],["medyapress.net",1408760264],["ozgurifade.com.tr",1408760264],["araba.com",1483036300],["arabadergisi.com",727464389],["basketdergisi.com",[727464389,432010377]],["arabam.com",528475695],["arabamkacyakar.com",1927358391],["arabateknik.com",1418152850],["arasikackm.com",1745746287],["turizmgazetesi.com",1745746287],["ardahanhaberi.com",420211636],["arenabodrumhaber.com",[2008959749,877153326,1999630191]],["kadikoygazetesi.com",877153326],["paraanaliz.com",1999630191],["thegeyik.com",1999630191],["yenikutahya.com",1999630191],["arkeolojikhaber.com",467424804],["iha.com.tr",467424804],["asistanaliz.com",[1050906699,1325626245]],["bthaber.com",1325626245],["astakoshaber.com",313027619],["bomba32.com",[313027619,318925519]],["yenikocaeli.com",313027619],["asyafanatiklerim.com",1683915731],["hdfilmizletv.com",1683915731],["morfilmizle.com",1683915731],["yerlidizi.pw",1683915731],["atlasdergisi.com",342471507],["popsci.com.tr",342471507],["avmgezgini.com",120603062],["avrupaturkgazetesi.com",907318208],["ayakligazete.com",[1205977223,1908706666,2008353299]],["beyazperde.com",1908706666],["ulastirmadunyasi.com",2008353299],["aydinda.com",1611667955],["aydinpost.com",941287532],["aydinses.com",1878587894],["gemlikbasinhaber.com",1878587894],["aygazete.com",300683379],["ayvalikmagazin.com",870824853],["babakus.com",1298619103],["bafrahaber.com",1691747349],["m.bafrahaber.com",2096265171],["bahisanaliz31.com",1786803741],["bahisanaliz32.com",1786803741],["bahisanaliz33.com",1786803741],["bahisanaliz34.com",1786803741],["bahisanaliz35.com",1786803741],["bahisanaliz36.com",1786803741],["bahisanaliz37.com",1786803741],["bahisanaliz38.com",1786803741],["bahisanaliz39.com",1786803741],["bahisanaliz40.com",1786803741],["bahisanaliz41.com",1786803741],["bahisanaliz42.com",1786803741],["bahisanaliz43.com",1786803741],["bahisanaliz44.com",1786803741],["bahisanaliz45.com",1786803741],["bahisanaliz46.com",1786803741],["bahisanaliz47.com",1786803741],["bahisanaliz48.com",1786803741],["bahisanaliz49.com",1786803741],["bahisanaliz50.com",1786803741],["bahiskilavuz4.com",740659714],["bahiskilavuzu.com",1470887801],["bakbutrend.com",1504310205],["bakimliyiz.com",1024796072],["forum.grandepuntotr.com",1024796072],["renaultfanclub.com",1024796072],["turkeyforum.com",1024796072],["turkedebiyati.org",1024796072],["bakirkoydenhaber.com",[2143865307,1584703843]],["bilecik11.com",[2143865307,1584703843,775946912]],["kentgazetesi.com",2143865307],["ufukgazetesi.net",2143865307],["balikesir24saat.com",824618825],["bilardooyna.com",824618825],["bursa.com",824618825],["buyuksivas.com",824618825],["ebrosur.com",824618825],["gidagundemi.com",824618825],["iyihaberci.com",824618825],["kirsehirhakimiyet.com",824618825],["neguzelsozler.com",824618825],["orduyorum.com",824618825],["rekoroyun.com",824618825],["61medya.net",824618825],["balkangunlugu.com.tr",824618825],["icn.com.tr",824618825],["kanal15.com.tr",824618825],["muglagazetesi.com.tr",824618825],["balikesirhaberajansi.com",[1576286489,2092427326,485453567]],["dizired1.com",1576286489],["asyadizileri.net",1576286489],["fatsayenihaber.com",485453567],["geredeyenigun.com",485453567],["manisahabercilik.com",485453567],["kurtulusgazetesi.com.tr",485453567],["bamfilmizle.com",301579690],["banazguncelhaber.com",[1459852048,1937897964]],["erzurumsonhaber.com",1459852048],["edebiyathaberleri.com",1937897964],["larende.com",1937897964],["agazete.com.tr",1937897964],["bandirmamanset.com",1588045538],["basakgazetesi.com",1588045538],["haberdurus.com",1588045538],["kardelengazetesi.com",1588045538],["bandirmasehir.com",586629850],["bankotahminler.com",1037106113],["bantmag.com",1418776062],["bartinolay.com",[95134940,329949675]],["gaziantephaber.com",95134940],["gercekfethiye.com",329949675],["neolacakki.com",1356817093],["basedistanbul.com",854871967],["baslattusu.com",1661657135],["batiakdeniztv.com",1853676493],["batialanya.com",1405812810],["beefandfish.com",1905100671],["halklailiskiler.com.tr",1905100671],["belekomahaber.com",[939988902,651063390]],["bodrumgundem.com",[651063390,2029288022,970093423]],["belemturktv.com",258656914],["belesmp3indir.com",1179071519],["buycialisnbv.com",1179071519],["canadadrugsonlinewxwe.com",1179071519],["ekranlardan.com",1179071519],["mach1digital.com",1179071519],["mp3medya.com",1179071519],["muzikmp3indir.com",1179071519],["netflix-izle.com",1179071519],["obezitehaber.com",1179071519],["mp3indirco.info",1179071519],["apkcell.net",1179071519],["mp3indirdurun.net",1179071519],["mobilmp3indir.org",1179071519],["mp3indirdur.pro",1179071519],["belgeselciyiz.com",602128486],["belgeselizlesene.com",1044486452],["benguturk.com",316672797],["ogrencikariyeri.com",316672797],["benzinlitre.com",999868116],["benzinmagazin.com",1455885243],["bestylemagazine.com",376893929],["beyazgazete.com",1574466987],["biacaip.com",31072994],["elazigonline.com",775946912],["gazetecin.com",775946912],["haberler33.com",775946912],["kastamonuguncel.com",775946912],["kocaelidenge.com",[775946912,1856683185]],["liderbursa.com",775946912],["lidergazete.com",775946912],["mebehliyetsinavsorulari.com",775946912],["mygazete.com",775946912],["biletix.com",581649814],["bilgenc.com",[2125021024,1309200182]],["petroturk.com",[1309200182,1826683685]],["bilgicik.com",974815268],["bilgidem.com",1548455526],["lezizci.com",1548455526],["forum.sordum.net",1548455526],["bilgihanem.com",2028645268],["binbirkanal.com",1659262863],["biokadar.com",2134740382],["birhayalinpesinde.com",[651318831,1207642889]],["forum.memurlar.net",1207642889],["birlikhabergazetesi.com",[348804829,1604339987,1826683685]],["izmiringundemi.com",348804829],["mangazure.com",1826683685],["sgkrehberi.com",1826683685],["timeturk.com",1826683685],["yozgatgazetesi.com",1826683685],["birsence.com",1191086893],["bisikletforum.com",[1471375592,934715607]],["forumandroid.com",934715607],["gezenbilir.com",934715607],["kadinlarkulubu.com",934715607],["satoshiturk.com",934715607],["technopat.net",934715607],["webmasterforum.com.tr",934715607],["bitcoinsistemi.com",930531284],["bizbolulular.com",2068087846],["bizevdeyokuz.com",419691366],["donanimarsivi.com",419691366],["emlaktuel.com",419691366],["filmsezonu.com",419691366],["ghiygmg.com",419691366],["kanalfinans.com",419691366],["koreanturk.com",419691366],["ubnaija.com",419691366],["uludagsozluk.com",419691366],["enerjigazetesi.ist",419691366],["dizispeed.net",419691366],["diziwatch.net",419691366],["yeniisfikirleri.net",419691366],["incisozluk.com.tr",419691366],["pasada.com.tr",419691366],["tercihrobotu.com.tr",419691366],["bizimyaka.com",[1856683185,65895019]],["blackorwhitedergi.com",258408949],["haberler.com",258408949],["oyuncenneti.com",258408949],["oyunkuzusu.com",258408949],["oyungemisi.net",258408949],["bursaspor.org.tr",258408949],["blogvut.blogspot.com",1170115231],["paylasaninsanlar.blogspot.com",498825734],["bloomberght.com",1820173761],["businessht.bloomberght.com",8260436],["boatbuilderturkiye.com",1827998911],["cativecephe.com",1827998911],["enerji-dunyasi.com",1827998911],["suvecevre.com",1827998911],["yesilbinadergisi.com",1827998911],["yalitim.net",1827998911],["tesisat.com.tr",1827998911],["yanginguvenlik.com.tr",1827998911],["bodrumageldik.com",697526776],["bursverenkurumlar.com",1522552100],["dizifragmanlar.com",1522552100],["hemhalkegitim.com",1522552100],["yozgatolay.com",1522552100],["dilekcesepeti.com",2029288022],["egeyonhaber.com",2029288022],["yurthaber61.com",2029288022],["bodrumhaber.com",1582806109],["bodrumhaberpostasi.com",2136618211],["emlaklobisi.com",1266149777],["wblogy.com",1266149777],["autoshow.com.tr",1266149777],["teknobird.com",837306496],["kredi.biz.tr",837306496],["bolgegazetesi.com",798518388],["siirtpress.com",798518388],["kentdeha.com.tr",798518388],["boluekspres.com",1592992159],["bolugundem.com",69964462],["bolumsonucanavari.com",1767030164],["bolununsesi.com",1041076558],["boluobjektif.com",1449828234],["bolupostasi.com",490895510],["bozuyukhaberajansi.com",490895510],["imarhaber.com",490895510],["koroglugazetesi.com",490895510],["kumlucaweb.com",490895510],["medyaayvalik.com",490895510],["onlarnediyo.com",490895510],["yenicagri.com",490895510],["businesschannel.com.tr",490895510],["bolusporluyuz.com",[1273923815,999365841]],["ozgurbolu.com",1273923815],["spor14.com",1273923815],["bomba15.com",1739578411],["enpolitik.com",1739578411],["ispartamhaber.com",1739578411],["tarsusgazetesi.com",1739578411],["offtherecord.com.tr",1739578411],["borsadirekt.com",300451689],["borsagundem.com",509021029],["finansgundem.com",509021029],["borunsesi.com",291131972],["buyukhaber.com",291131972],["hendekgundem.com",291131972],["kayseriehaber.com",291131972],["kocaelioncu.com",291131972],["marashaberler.com",291131972],["usakhabermerkezi.com",291131972]]);

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