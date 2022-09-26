/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

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

/// name css-specific-procedural

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// tur-0

const argsMap = new Map([[1443512396,{"a":[{"selector":"center > div > a[href][target=\"_blank\"]","action":["style","position: absolute !important; left: -3000px !important;"],"cssable":true}]}],[276451752,{"a":[{"selector":".sitewrapper","action":["style","margin-top: 0 !important;"],"cssable":true},{"selector":"iframe#ifr","action":["style","display: block !important;"],"cssable":true}]}],[197356664,{"a":[{"selector":"#cn-content","action":["style","display: block !important;"],"cssable":true}]}],[1904276998,{"a":[{"selector":".card-video","action":["style","display: block !important;"],"cssable":true}]}],[1029979668,{"a":[{"selector":".full-news-left > .top-item-title","tasks":[["has",{"selector":" > a[href=\"/filmifullizle.php\"]"}]]}]}],[1416469603,{"a":[{"selector":"div > a[href^=\"https://bcvcrdr.\"]","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[632248753,{"a":[{"selector":".theiaStickySidebar > .widget > .widget-container","tasks":[["has",{"selector":" > .textwidget > a[href][target=\"_blank\"][rel=\"nofollow\"]"}]]}]}],[51810497,{"a":[{"selector":"#sidebar > div.widget_text","tasks":[["has",{"selector":" > div.textwidget > ins.adsbygoogle"}]]},{"selector":".single_line","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]}]}],[1959393784,{"a":[{"selector":"a[href^=\"https://ads.lnklnk.com\"]","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1921774533,{"a":[{"selector":".theiaStickySidebar span.stream-title","tasks":[["has-text","^Reklam$"]]}]}],[1934448184,{"a":[{"selector":"div[class^=\"col-xs-\"] > .row > div[class^=\"col-xs-\"] > .panel","tasks":[["has",{"selector":" > #sponsored"}]]}]}],[2115209916,{"a":[{"selector":".sidebar aside.widget a[rel^=\"sponsored\"]","tasks":[["upward",1]]}]}],[1124438703,{"a":[{"selector":"body","action":["style","overflow: visible !important; padding-right: 0 !important;"],"cssable":true}]}],[848350932,{"a":[{"selector":"#wrapfabtest","action":["style","height: 1px !important;"],"cssable":true}]}],[134482542,{"a":[{"selector":"#sidebar > .yanmenu","tasks":[["has",{"selector":" > h2","tasks":[["has-text","Sponsorl"]]}]]},{"selector":".content > article > center","tasks":[["has-text","Sponsorlu Bağlantılar"]]},{"selector":".wrapper > .anasayfa > .homewidget","tasks":[["has",{"selector":" > h2","tasks":[["has-text","Sponsorl"]]}]]},{"selector":"body > .wrapper > .aligncenter","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1173296007,{"a":[{"selector":"#header","action":["style","height: 0px !important;"],"cssable":true}]}],[422018912,{"a":[{"selector":"tr > td[valign=\"top\"]","tasks":[["has",{"selector":" > table > tbody > tr > td[bgcolor] > a[href^=\"/showad\"]"}]]}]}],[356221673,{"a":[{"selector":"#main > div[id^=\"av_section_\"]","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":"#main > div[id^=\"av_section_\"]","tasks":[["has",{"selector":"center > a[href=\"https://www.losev.org.tr/bagis/ramazan.html\"]"}]]}]}],[1244474652,{"a":[{"selector":".container .none-margin-tablet > .margin-top--30 > .center__row > div[id^=\"category-\"] > script","tasks":[["has-text","defineSlot"],["upward",3]]}]}],[1528854130,{"a":[{"selector":".topBanner + header","action":["style","top: 0 !important;"],"cssable":true},{"selector":".topBanner","action":["style","top: -50px !important;"],"cssable":true},{"selector":"body > div[class^=\"sfv_\"] > div[id]","action":["style","top: 0 !important;"],"cssable":true}]}],[1405375865,{"a":[{"selector":".grid-stack-item","tasks":[["has",{"selector":" > div.Reklam_001"}]]}]}],[1891398998,{"a":[{"selector":".sidebar > .mom_custom_text > .custom_textwidget > .adsbygoogle","tasks":[["upward",2]]}]}],[487516882,{"a":[{"selector":"#header2","action":["style","height: 100px !important;"],"cssable":true}]}],[1497896812,{"a":[{"selector":"body > div.container","tasks":[["has",{"selector":" > div.header_big_advert"}]]}]}],[1485458461,{"a":[{"selector":"body > .container > .row + .shadow1 > .header_big_advert","tasks":[["upward",1]]}]}],[1427835571,{"a":[{"selector":"div[style^=\"width:60%;float:left;\"] + div[style]","action":["style","width: auto !important;"],"cssable":true}]}],[1575888559,{"a":[{"selector":"#js-hook-for-observer-tabs-wrapper > .detail-head-wrapper:not([id]) > h4.detail-head-separator","tasks":[["has-text","^SPONSORLU BAĞLANTILAR$"]]},{"selector":".min-height-at-index","action":["style","height: 144px!important;"],"cssable":true}]}],[1700940464,{"a":[{"selector":"#sidebar-primary-sidebar > .sidebar-widget > .adsbygoogle","tasks":[["upward",1]]}]}],[909615384,{"a":[{"selector":"body > .shadow1 > .header_big_advert","tasks":[["upward",1]]}]}],[486664038,{"a":[{"selector":"body.modal-open","action":["style","overflow: visible!important; padding-right: 0!important;"],"cssable":true}]}],[226891896,{"a":[{"selector":".custom-html-widget","tasks":[["has",{"selector":"a[href^=\"https://rebrand.ly/\"]"}]]}]}],[1787209658,{"a":[{"selector":".bilesen > .w_baslik","tasks":[["has",{"selector":" > .yazi_golge","tasks":[["has-text","Sponsorlu Bağlantılar"]]}]]}]}],[1565447520,{"a":[{"selector":".grid-stack > div.grid-stack-item","tasks":[["has",{"selector":" > div[class*=\"Reklam_\"]"}]]}]}],[878829256,{"a":[{"selector":"#panels > div.safirBox","tasks":[["has",{"selector":" > div.widgetContent > a[title=\"Limit\"]"}]]},{"selector":".home > div.bd-callout","tasks":[["has",{"selector":" > center > a[title=\"Limit\"]"}]]}]}],[1452746533,{"a":[{"selector":"#sidebar > .sidebarborder","tasks":[["has",{"selector":" > .sidebar-right > .execphpwidget > center > a[href][target=\"_blank\"] > img"}]]}]}],[83737612,{"a":[{"selector":".appear-animation","tasks":[["has",{"selector":" > div[style=\"height:195px\"] > iframe[name=\"BIKADV\"]"}]]}]}],[1040162732,{"a":[{"selector":"#Movie-video","action":["style","display: block!important;"],"cssable":true}]}],[1325564889,{"a":[{"selector":"#afterNotification","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[637837308,{"a":[{"selector":"#ajaxpartyukle > div[style=\"text-align:center\"]","action":["style","height: 50px !important;"],"cssable":true},{"selector":"a[href^=\"https://accounts.binance.com/tr/register\"]","action":["style","visibility: hidden !important;"],"cssable":true}]}],[865017534,{"a":[{"selector":".sidebar > .ai_widget","tasks":[["has",{"selector":" > .modul-title > h3.m-title","tasks":[["has-text","Sponsorlu"]]}]]},{"selector":"body.has-mtsnb[style^=\"padding-top:\"]","action":["style","padding-top: 0!important;"],"cssable":true}]}],[789306648,{"a":[{"selector":"table > tbody > tr","tasks":[["has",{"selector":" > td[width=\"173\"][height=\"267\"] .adsbygoogle"}]]}]}],[1331008622,{"a":[{"selector":".benzerYazilarNewContainer > .homeFeedBox","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".newContentWrapper > .homeFeedBox","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[52006941,{"a":[{"selector":"div:not([class]):not([id]) > a[href][rel=\"nofollow\"][style*=\"background-color:\"]","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[857953861,{"a":[{"selector":".sidebar > .bn-lg-sidebar","tasks":[["has",{"selector":" > .row > .adsbygoogle"}]]}]}],[1510326217,{"a":[{"selector":".block-pano > div[class]","tasks":[["has",{"selector":" > ins.rkm"}]]}]}],[248389113,{"a":[{"selector":"#panels > section.sidebarWidget","tasks":[["has",{"selector":"div[class^=\"huge_it_slideshow\"]"}]]}]}],[2083888549,{"a":[{"selector":".row > div.col-xs-12","tasks":[["has",{"selector":" > h1.buyu-rek"}]]}]}],[576164112,{"a":[{"selector":"#genel > div[style]","tasks":[["has",{"selector":" > img[src^=\"http://www.boluyankihaber.com/reklam/\"]"}]]}]}],[1725395107,{"a":[{"selector":".ppb_wrapper > div.ppb_text","tasks":[["has",{"selector":" > div.standard_wrapper > div.page_content_wrapper script[src^=\"https://run.admost.com/\"]"}]]}]}],[481557991,{"a":[{"selector":".icerik_reklam","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true},{"selector":".rek1","action":["style","height: 1px!important;"],"cssable":true},{"selector":".reklam_kontrol","action":["style","height: 1px!important;"],"cssable":true}]}],[879094703,{"a":[{"selector":"#solust","action":["style","position: static!important;"],"cssable":true}]}],[244668412,{"a":[{"selector":"#__next > div div[class] > div[class] > div[class] > section[class]","tasks":[["has",{"selector":" > div[class] > div[style][id*=\"_728x90_\"]"}]]},{"selector":"#__next > div div[class] > div[class] > div[class] > section[class]","tasks":[["has",{"selector":" > div[class][style][id*=\"_160x600\"]"}]]},{"selector":"#__next > div div[class] > div[class] > div[class] > section[class]","tasks":[["has",{"selector":"div[id^=\"google_ads_iframe\"]"}]]},{"selector":"div[name=\"teklifler\"] > div[class] > section[class]","tasks":[["has",{"selector":" > a[href*=\"&utm_campaign=cimri_sponsor_text_link\"][rel=\"nofollow\"]"}]]},{"selector":"div[name=\"teklifler\"] > div[class] > table[class] > tbody > tr","tasks":[["has",{"selector":" > td > div[class] > div[id*=\"_728x90_\"]"}]]},{"selector":"section > div[class]","action":["remove",""],"tasks":[["has",{"selector":" > div[id*=\"_728X90_\"][style^=\"background-color:\"]:only-child"}]]},{"selector":"section > div[id*=\"_300X250_\"][style^=\"background-color:\"]","action":["remove",""]},{"selector":"table > tbody > tr","tasks":[["has",{"selector":"div[width=\"728\"][height=\"90\"]"}]]},{"selector":"table > tbody > tr[class^=\"sc-\"]","tasks":[["has",{"selector":"a[width=\"728\"][height=\"90\"]"}]]}]}],[119999575,{"a":[{"selector":".vc_column-inner > .wpb_wrapper > .wpb_single_image","tasks":[["has",{"selector":" > .wpb_wrapper > a[href^=\"https://ad.cozumpark.com/\"] > img"}]]}]}],[609472942,{"a":[{"selector":"div > div.textwidget","tasks":[["has",{"selector":"a[target=\"_blanK\"] > img"}]]}]}],[222500161,{"a":[{"selector":".columns.is-multiline > .column > center > .adsbygoogle","tasks":[["upward",2]]}]}],[1878524473,{"a":[{"selector":"#ikinci","action":["style","display: block !important;"],"cssable":true}]}],[1487697418,{"a":[{"selector":".video-banner","action":["style","display: block !important;"],"cssable":true}]}],[751409420,{"a":[{"selector":"#preroll","action":["style","display: block !important;"],"cssable":true}]}],[1661881800,{"a":[{"selector":"#details > center","tasks":[["has-text","Sponsor"]]}]}],[1155435110,{"a":[{"selector":".eng_m_asw > .eng_m_widget_sw","tasks":[["has",{"selector":" > .eng_ads"}]]},{"selector":"nav[id^=\"NavMenu\"] > ul.oge","tasks":[["has",{"selector":" > li > a[href] > span.hot-topic-word > span.miktar","tasks":[["has-text","Reklam"]]}]]}]}],[1847731104,{"a":[{"selector":"#PopularSicakFirsatTopicsContent > div[class=\"populersatir\"]","tasks":[["has",{"selector":" > a > .populerbaslik > span","tasks":[["has-text","^\\(ilandır\\)$"]]}]]},{"selector":".sayfafull.uzat > .ie-navigasyon + .soltaraf","action":["style","width:calc(100% - 290px)!important;"],"cssable":true},{"selector":".sayfafull.uzat > .soltaraf","action":["style","width:calc(100% - 253px)!important;"],"cssable":true},{"selector":".soltaraf","action":["style","width: calc(100%)!important;"],"cssable":true},{"selector":"td[bgcolor=\"d0d0d0\"] > table[width=\"100%\"] > tbody > tr[bgcolor=\"#FFFFFF\"]","tasks":[["has",{"selector":"td[class]","tasks":[["has-text","Reklam"]]}]]}]}],[1469882592,{"a":[{"selector":"#sidebar > div.widget_text","tasks":[["has",{"selector":" > div > h3","tasks":[["has-text","Reklam"]]}]]}]}],[1142126216,{"a":[{"selector":".adBanner","action":["style","display: block!important;"],"cssable":true}]}],[1285019152,{"a":[{"selector":"body > div.container","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]}]}],[1442526435,{"a":[{"selector":".homeWidget","tasks":[["has",{"selector":" > div.textwidget > p img[alt$=\"Reklamı\"]"}]]}]}],[1169192996,{"a":[{"selector":"#container > #main","action":["style","padding-top: 0!important;"],"cssable":true},{"selector":"#quick-index-nav > li","tasks":[["has",{"selector":" > a[href*=\"adtitles\"]"}]]},{"selector":"#topic > ul#entry-list","tasks":[["has",{"selector":"a[class=\"entry-author\"][href=\"/biri/reklam\"]"}]]},{"selector":".ad-doubleclickwebinterstital","action":["remove",""]},{"selector":".ui-autocomplete > li.ui-menu-item:first-child > div[style=\"color:#000000\"]","tasks":[["upward",1]]}]}],[10542230,{"a":[{"selector":".container","tasks":[["has",{"selector":" > div.row > div[class] > div.center-block > div[class*=\"-adv\"]"}]]}]}],[866861385,{"a":[{"selector":"#main-content > h1","tasks":[["has",{"selector":" > a[href=\"http://tiki.com.tr\"]"}]]}]}],[536515276,{"a":[{"selector":".sidebar > .widget > .block-title > span","tasks":[["has-text","Reklamlar"],["upward",2]]}]}],[42819749,{"a":[{"selector":"#playerimiz","action":["style","display: block!important;"],"cssable":true}]}],[1144273229,{"a":[{"selector":".owl-stage > .owl-item","tasks":[["has",{"selector":" > .b-slider__item > a[href^=\"https://ensonhaber.me/r\"][target=\"_blank\"][rel=\"sponsored\"]"}]]},{"selector":".owl-stage > div.owl-item > div > a[rel=\"sponsored\"]","tasks":[["upward",2]]}]}],[2104582592,{"a":[{"selector":"#videos","action":["style","display: block!important;"],"cssable":true}]}],[249643038,{"a":[{"selector":"body.modal-open","action":["style","overflow: visible !important; padding-right: 0 !important;"],"cssable":true}]}],[429921533,{"a":[{"selector":".theiaStickySidebar > .text-html-box","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":"center > .nomobil","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1194043756,{"a":[{"selector":"#sideMenu.wrap310 > .widget","tasks":[["has",{"selector":" > .kutu a[href][target=\"_blank\"]"}]]}]}],[1406982772,{"a":[{"selector":"#episode","action":["style","height: auto !important; width: auto !important; overflow: auto !important; position: unset !important;"],"cssable":true}]}],[821406446,{"a":[{"selector":".tab-embed","action":["style","display: block !important;"],"cssable":true}]}],[33844712,{"a":[{"selector":".videoBox > div.iframe","action":["style","display: block !important;"],"cssable":true}]}],[227665935,{"a":[{"selector":".tab-embed","action":["style","display: block!important;"],"cssable":true}]}],[1392043873,{"a":[{"selector":".embed-responsive","action":["style","display: block !important;"],"cssable":true},{"selector":"body","action":["style","background-color: #0E0E0E !important;"],"cssable":true}]}],[555305523,{"a":[{"selector":"#konu","action":["style","display: block !important;"],"cssable":true}]}],[135925545,{"a":[{"selector":"#head > .menu-bar.cloned","action":["style","top: 0!important;"],"cssable":true}]}],[896944064,{"a":[{"selector":".bilgiler > center","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".blok1yap > .blokyap","tasks":[["has",{"selector":" > center > .adsbygoogle"}]]},{"selector":".dizi_haber > ul > li","tasks":[["has",{"selector":" > center > .adsbygoogle"}]]},{"selector":".dizi_video > .dizi_video","tasks":[["has",{"selector":" > br + .adsbygoogle"}]]}]}],[280900099,{"a":[{"selector":".col-md-sidebar > .widget > .pm-section-head","tasks":[["has",{"selector":" > h2","tasks":[["has-text","^Advertisment$"]]}]]}]}]]);

const hostnamesMap = new Map([["filmindir.be",1443512396],["sarkiyukleindir.com",1443512396],["mp3indirdurbedava.org",1443512396],["onlinedizi.biz",276451752],["altyazilifilm.cc",197356664],["filmbabasi.com",197356664],["tekparthdfilmizle.com",197356664],["dizipal12.cloud",1904276998],["dizipal13.cloud",1904276998],["dizipal14.cloud",1904276998],["dizipal15.cloud",1904276998],["dizipal16.cloud",1904276998],["dizipal17.cloud",1904276998],["dizipal18.cloud",1904276998],["dizipal19.cloud",1904276998],["dizipal20.cloud",1904276998],["dizipal21.cloud",1904276998],["dizipal22.cloud",1904276998],["dizipal23.cloud",1904276998],["dizipal24.cloud",1904276998],["dizipal25.cloud",1904276998],["dizipal26.cloud",1904276998],["dizipal27.cloud",1904276998],["dizipal28.cloud",1904276998],["dizipal29.cloud",1904276998],["dizipal30.cloud",1904276998],["dizipal31.cloud",1904276998],["dizipal32.cloud",1904276998],["dizipal33.cloud",1904276998],["dizipal34.cloud",1904276998],["dizipal35.cloud",1904276998],["dizipal36.cloud",1904276998],["dizipal37.cloud",1904276998],["dizipal38.cloud",1904276998],["dizipal39.cloud",1904276998],["dizipal40.cloud",1904276998],["dizipal41.cloud",1904276998],["dizipal42.cloud",1904276998],["dizipal43.cloud",1904276998],["dizipal44.cloud",1904276998],["dizipal45.cloud",1904276998],["dizipal46.cloud",1904276998],["dizipal47.cloud",1904276998],["dizipal48.cloud",1904276998],["dizipal49.cloud",1904276998],["dizipal50.cloud",1904276998],["filmifullizle.club",1029979668],["oyunindir.club",1416469603],["borsanasiloynanir.co",632248753],["habersiz.co",51810497],["indirin.co",1959393784],["sorumatik.co",1921774533],["turkanime.co",1934448184],["320volt.com",2115209916],["61saat.com",1124438703],["esgundem26.com",1124438703],["dizimax.plus",1124438703],["724indir.com",848350932],["ademocut.com",134482542],["ademyurt.com",1173296007],["airkule.com",422018912],["airturkhaber.com",356221673],["ajansspor.com",1244474652],["akakce.com",1528854130],["aksarayhaberci.com",1405375865],["bigahavadis.com",1405375865],["alomaliye.com",1891398998],["altinpiyasa.com",487516882],["anamurekspres.com",[1497896812,1485458461]],["larende.com",1497896812],["agazete.com.tr",1497896812],["anlikaltinfiyatlari.com",1427835571],["arabam.com",1575888559],["artigercek.com",1700940464],["avrupabulten.com",909615384],["sonses.tv",909615384],["aydinpost.com",486664038],["mygaziantep.com",486664038],["bahiskilavuz4.com",226891896],["bakirkoydenhaber.com",1787209658],["bandirmamanset.com",1565447520],["basarisiralamalari.com",878829256],["bayfilmizle.com",1452746533],["bbnhaber.com",83737612],["belgeselciyiz.com",1040162732],["benzinlitre.com",1325564889],["bestdizi.com",637837308],["bilgenc.com",865017534],["bilgicik.com",789306648],["bilgihanem.com",1331008622],["bizdebeles.com",52006941],["bizimgezegenimiz.com",857953861],["bizimyaka.com",1510326217],["bodrumgundem.com",248389113],["bolununsesi.com",2083888549],["boluyankihaber.com",576164112],["bthaber.com",1725395107],["cadcamsektoru.com",481557991],["cazkolik.com",879094703],["cimri.com",244668412],["cozumpark.com",119999575],["denizbulten.com",609472942],["discordsunucu.com",222500161],["dizimodu.com",1878524473],["dizipal300.com",1487697418],["dizipal301.com",1487697418],["dizipal302.com",1487697418],["dizipal303.com",1487697418],["dizipal304.com",1487697418],["dizipal305.com",1487697418],["dizipal306.com",1487697418],["dizipal307.com",1487697418],["dizipal308.com",1487697418],["dizipal309.com",1487697418],["dizipal310.com",1487697418],["dizipal311.com",1487697418],["dizipal312.com",1487697418],["dizipal313.com",1487697418],["dizipal314.com",1487697418],["dizipal315.com",1487697418],["dizipal316.com",1487697418],["dizipal317.com",1487697418],["dizipal318.com",1487697418],["dizipal319.com",1487697418],["dizipal320.com",1487697418],["dizipal321.com",1487697418],["dizipal322.com",1487697418],["dizipal323.com",1487697418],["dizipal324.com",1487697418],["dizipal325.com",1487697418],["dizipal326.com",1487697418],["dizipal327.com",1487697418],["dizipal328.com",1487697418],["dizipal329.com",1487697418],["dizipal330.com",1487697418],["dizipal331.com",1487697418],["dizipal332.com",1487697418],["dizipal333.com",1487697418],["dizipal334.com",1487697418],["dizipal335.com",1487697418],["dizipal336.com",1487697418],["dizipal337.com",1487697418],["dizipal338.com",1487697418],["dizipal339.com",1487697418],["dizipal340.com",1487697418],["dizipal341.com",1487697418],["dizipal342.com",1487697418],["dizipal343.com",1487697418],["dizipal344.com",1487697418],["dizipal345.com",1487697418],["dizipal346.com",1487697418],["dizipal347.com",1487697418],["dizipal348.com",1487697418],["dizipal349.com",1487697418],["dizipal350.com",1487697418],["dizipal351.com",1487697418],["dizipal352.com",1487697418],["dizipal353.com",1487697418],["dizipal354.com",1487697418],["dizipal355.com",1487697418],["dizipal356.com",1487697418],["dizipal357.com",1487697418],["dizipal358.com",1487697418],["dizipal359.com",1487697418],["dizipal360.com",1487697418],["dizipal361.com",1487697418],["dizipal362.com",1487697418],["dizipal363.com",1487697418],["dizipal364.com",1487697418],["dizipal365.com",1487697418],["dizipal366.com",1487697418],["dizipal367.com",1487697418],["dizipal368.com",1487697418],["dizipal369.com",1487697418],["dizipal370.com",1487697418],["dizipal371.com",1487697418],["dizipal372.com",1487697418],["dizipal373.com",1487697418],["dizipal374.com",1487697418],["dizipal375.com",1487697418],["dizipal376.com",1487697418],["dizipal377.com",1487697418],["dizipal378.com",1487697418],["dizipal379.com",1487697418],["dizipal380.com",1487697418],["dizipal381.com",1487697418],["dizipal382.com",1487697418],["dizipal383.com",1487697418],["dizipal384.com",1487697418],["dizipal385.com",1487697418],["dizipal386.com",1487697418],["dizipal387.com",1487697418],["dizipal388.com",1487697418],["dizipal389.com",1487697418],["dizipal390.com",1487697418],["dizipal391.com",1487697418],["dizipal392.com",1487697418],["dizipal393.com",1487697418],["dizipal394.com",1487697418],["dizipal395.com",1487697418],["dizipal396.com",1487697418],["dizipal397.com",1487697418],["dizipal398.com",1487697418],["dizipal399.com",1487697418],["dizipal400.com",1487697418],["dizipal401.com",1487697418],["dizipal402.com",1487697418],["dizipal403.com",1487697418],["dizipal404.com",1487697418],["dizipal405.com",1487697418],["dizipal406.com",1487697418],["dizipal407.com",1487697418],["dizipal408.com",1487697418],["dizipal409.com",1487697418],["dizipal410.com",1487697418],["dizipal411.com",1487697418],["dizipal412.com",1487697418],["dizipal413.com",1487697418],["dizipal414.com",1487697418],["dizipal415.com",1487697418],["dizipal416.com",1487697418],["dizipal417.com",1487697418],["dizipal418.com",1487697418],["dizipal419.com",1487697418],["dizipal420.com",1487697418],["dizipal421.com",1487697418],["dizipal422.com",1487697418],["dizipal423.com",1487697418],["dizipal424.com",1487697418],["dizipal425.com",1487697418],["dizipal426.com",1487697418],["dizipal427.com",1487697418],["dizipal428.com",1487697418],["dizipal429.com",1487697418],["dizipal430.com",1487697418],["dizipal431.com",1487697418],["dizipal432.com",1487697418],["dizipal433.com",1487697418],["dizirun1.com",751409420],["doeda.com",1661881800],["donanimhaber.com",1155435110],["forum.donanimhaber.com",1847731104],["donghuatr.com",1469882592],["dovizborsa.com",1142126216],["duzcetv.com",1285019152],["egeyonhaber.com",1442526435],["eksisozluk.com",1169192996],["elazigyenihaber.com",10542230],["emlakansiklopedisi.com",866861385],["emlakkulisi.com",536515276],["eniyioyuncu.com",42819749],["ensonhaber.com",1144273229],["eroticpub.com",2104582592],["filmdizievi1.com",2104582592],["asyadizileri.net",2104582592],["eskisehirhaber.com",249643038],["haberlisin.com",249643038],["halk54.com",249643038],["karaman24.com",249643038],["eskisehirekspres.net",249643038],["evvelcevap.com",429921533],["fethiyehaber.com",1194043756],["spor01.com",1194043756],["filmdiziplus.com",1406982772],["filmmoduu.com",1406982772],["hdfilmizlehd.com",1406982772],["seehdfilm.com",1406982772],["filmgooo.com",821406446],["filmkuzusu1.com",821406446],["safirfilmizle1.com",821406446],["filmhani.com",33844712],["filmizletix.com",227665935],["kelebekfilmizlee.com",227665935],["filmizle.tc",227665935],["filmmodu10.com",1392043873],["filmmodu2.com",1392043873],["filmmodu3.com",1392043873],["filmmodu4.com",1392043873],["filmmodu5.com",1392043873],["filmmodu6.com",1392043873],["filmmodu7.com",1392043873],["filmmodu8.com",1392043873],["filmmodu9.com",1392043873],["filmsezonu.com",555305523],["finansgundem.com",135925545],["fragman-tv.com",896944064],["fullhdfilmdeposu.com",280900099]]);

/******************************************************************************/

const addStylesheet = text => {
    try {
        const sheet = new CSSStyleSheet();
        sheet.replace(`@layer{${text}}`);
        document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets,
            sheet
        ];
    } catch(ex) {
    }
};

const nonVisualElements = {
    script: true,
    style: true,
};

// 'P' stands for 'Procedural'

class PSelectorTask {
    begin() {
    }
    end() {
    }
}

class PSelectorHasTextTask extends PSelectorTask {
    constructor(task) {
        super();
        let arg0 = task[1], arg1;
        if ( Array.isArray(task[1]) ) {
            arg1 = arg0[1]; arg0 = arg0[0];
        }
        this.needle = new RegExp(arg0, arg1);
    }
    transpose(node, output) {
        if ( this.needle.test(node.textContent) ) {
            output.push(node);
        }
    }
}

class PSelectorIfTask extends PSelectorTask {
    constructor(task) {
        super();
        this.pselector = new PSelector(task[1]);
    }
    transpose(node, output) {
        if ( this.pselector.test(node) === this.target ) {
            output.push(node);
        }
    }
}
PSelectorIfTask.prototype.target = true;

class PSelectorIfNotTask extends PSelectorIfTask {
}
PSelectorIfNotTask.prototype.target = false;

class PSelectorMatchesCSSTask extends PSelectorTask {
    constructor(task) {
        super();
        this.name = task[1].name;
        this.pseudo = task[1].pseudo ? `::${task[1].pseudo}` : null;
        let arg0 = task[1].value, arg1;
        if ( Array.isArray(arg0) ) {
            arg1 = arg0[1]; arg0 = arg0[0];
        }
        this.value = new RegExp(arg0, arg1);
    }
    transpose(node, output) {
        const style = window.getComputedStyle(node, this.pseudo);
        if ( style !== null && this.value.test(style[this.name]) ) {
            output.push(node);
        }
    }
}

class PSelectorMatchesMediaTask extends PSelectorTask {
    constructor(task) {
        super();
        this.mql = window.matchMedia(task[1]);
        if ( this.mql.media === 'not all' ) { return; }
        this.mql.addEventListener('change', ( ) => {
            if ( typeof vAPI !== 'object' ) { return; }
            if ( vAPI === null ) { return; }
            const filterer = vAPI.domFilterer && vAPI.domFilterer.proceduralFilterer;
            if ( filterer instanceof Object === false ) { return; }
            filterer.onDOMChanged([ null ]);
        });
    }
    transpose(node, output) {
        if ( this.mql.matches === false ) { return; }
        output.push(node);
    }
}

class PSelectorMatchesPathTask extends PSelectorTask {
    constructor(task) {
        super();
        let arg0 = task[1], arg1;
        if ( Array.isArray(task[1]) ) {
            arg1 = arg0[1]; arg0 = arg0[0];
        }
        this.needle = new RegExp(arg0, arg1);
    }
    transpose(node, output) {
        if ( this.needle.test(self.location.pathname + self.location.search) ) {
            output.push(node);
        }
    }
}

class PSelectorMinTextLengthTask extends PSelectorTask {
    constructor(task) {
        super();
        this.min = task[1];
    }
    transpose(node, output) {
        if ( node.textContent.length >= this.min ) {
            output.push(node);
        }
    }
}

class PSelectorOthersTask extends PSelectorTask {
    constructor() {
        super();
        this.targets = new Set();
    }
    begin() {
        this.targets.clear();
    }
    end(output) {
        const toKeep = new Set(this.targets);
        const toDiscard = new Set();
        const body = document.body;
        let discard = null;
        for ( let keep of this.targets ) {
            while ( keep !== null && keep !== body ) {
                toKeep.add(keep);
                toDiscard.delete(keep);
                discard = keep.previousElementSibling;
                while ( discard !== null ) {
                    if (
                        nonVisualElements[discard.localName] !== true &&
                        toKeep.has(discard) === false
                    ) {
                        toDiscard.add(discard);
                    }
                    discard = discard.previousElementSibling;
                }
                discard = keep.nextElementSibling;
                while ( discard !== null ) {
                    if (
                        nonVisualElements[discard.localName] !== true &&
                        toKeep.has(discard) === false
                    ) {
                        toDiscard.add(discard);
                    }
                    discard = discard.nextElementSibling;
                }
                keep = keep.parentElement;
            }
        }
        for ( discard of toDiscard ) {
            output.push(discard);
        }
        this.targets.clear();
    }
    transpose(candidate) {
        for ( const target of this.targets ) {
            if ( target.contains(candidate) ) { return; }
            if ( candidate.contains(target) ) {
                this.targets.delete(target);
            }
        }
        this.targets.add(candidate);
    }
}

// https://github.com/AdguardTeam/ExtendedCss/issues/31#issuecomment-302391277
//   Prepend `:scope ` if needed.
class PSelectorSpathTask extends PSelectorTask {
    constructor(task) {
        super();
        this.spath = task[1];
        this.nth = /^(?:\s*[+~]|:)/.test(this.spath);
        if ( this.nth ) { return; }
        if ( /^\s*>/.test(this.spath) ) {
            this.spath = `:scope ${this.spath.trim()}`;
        }
    }
    qsa(node) {
        if ( this.nth === false ) {
            return node.querySelectorAll(this.spath);
        }
        const parent = node.parentElement;
        if ( parent === null ) { return; }
        let pos = 1;
        for (;;) {
            node = node.previousElementSibling;
            if ( node === null ) { break; }
            pos += 1;
        }
        return parent.querySelectorAll(
            `:scope > :nth-child(${pos})${this.spath}`
        );
    }
    transpose(node, output) {
        const nodes = this.qsa(node);
        if ( nodes === undefined ) { return; }
        for ( const node of nodes ) {
            output.push(node);
        }
    }
    // Helper method for other operators.
    static qsa(node, selector) {
        const parent = node.parentElement;
        if ( parent === null ) { return []; }
        let pos = 1;
        for (;;) {
            node = node.previousElementSibling;
            if ( node === null ) { break; }
            pos += 1;
        }
        return parent.querySelectorAll(
            `:scope > :nth-child(${pos})${selector}`
        );
    }
}

class PSelectorUpwardTask extends PSelectorTask {
    constructor(task) {
        super();
        const arg = task[1];
        if ( typeof arg === 'number' ) {
            this.i = arg;
        } else {
            this.s = arg;
        }
    }
    transpose(node, output) {
        if ( this.s !== '' ) {
            const parent = node.parentElement;
            if ( parent === null ) { return; }
            node = parent.closest(this.s);
            if ( node === null ) { return; }
        } else {
            let nth = this.i;
            for (;;) {
                node = node.parentElement;
                if ( node === null ) { return; }
                nth -= 1;
                if ( nth === 0 ) { break; }
            }
        }
        output.push(node);
    }
}
PSelectorUpwardTask.prototype.i = 0;
PSelectorUpwardTask.prototype.s = '';

class PSelectorWatchAttrs extends PSelectorTask {
    constructor(task) {
        super();
        this.observer = null;
        this.observed = new WeakSet();
        this.observerOptions = {
            attributes: true,
            subtree: true,
        };
        const attrs = task[1];
        if ( Array.isArray(attrs) && attrs.length !== 0 ) {
            this.observerOptions.attributeFilter = task[1];
        }
    }
    // TODO: Is it worth trying to re-apply only the current selector?
    handler() {
        const filterer =
            vAPI.domFilterer && vAPI.domFilterer.proceduralFilterer;
        if ( filterer instanceof Object ) {
            filterer.onDOMChanged([ null ]);
        }
    }
    transpose(node, output) {
        output.push(node);
        if ( this.observed.has(node) ) { return; }
        if ( this.observer === null ) {
            this.observer = new MutationObserver(this.handler);
        }
        this.observer.observe(node, this.observerOptions);
        this.observed.add(node);
    }
}

class PSelectorXpathTask extends PSelectorTask {
    constructor(task) {
        super();
        this.xpe = document.createExpression(task[1], null);
        this.xpr = null;
    }
    transpose(node, output) {
        this.xpr = this.xpe.evaluate(
            node,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            this.xpr
        );
        let j = this.xpr.snapshotLength;
        while ( j-- ) {
            const node = this.xpr.snapshotItem(j);
            if ( node.nodeType === 1 ) {
                output.push(node);
            }
        }
    }
}

class PSelector {
    constructor(o) {
        if ( PSelector.prototype.operatorToTaskMap === undefined ) {
            PSelector.prototype.operatorToTaskMap = new Map([
                [ 'has', PSelectorIfTask ],
                [ 'has-text', PSelectorHasTextTask ],
                [ 'if', PSelectorIfTask ],
                [ 'if-not', PSelectorIfNotTask ],
                [ 'matches-css', PSelectorMatchesCSSTask ],
                [ 'matches-media', PSelectorMatchesMediaTask ],
                [ 'matches-path', PSelectorMatchesPathTask ],
                [ 'min-text-length', PSelectorMinTextLengthTask ],
                [ 'not', PSelectorIfNotTask ],
                [ 'others', PSelectorOthersTask ],
                [ 'spath', PSelectorSpathTask ],
                [ 'upward', PSelectorUpwardTask ],
                [ 'watch-attr', PSelectorWatchAttrs ],
                [ 'xpath', PSelectorXpathTask ],
            ]);
        }
        this.raw = o.raw;
        this.selector = o.selector;
        this.tasks = [];
        const tasks = [];
        if ( Array.isArray(o.tasks) === false ) { return; }
        for ( const task of o.tasks ) {
            const ctor = this.operatorToTaskMap.get(task[0]);
            if ( ctor === undefined ) { return; }
            tasks.push(new ctor(task));
        }
        // Initialize only after all tasks have been successfully instantiated
        this.tasks = tasks;
    }
    prime(input) {
        const root = input || document;
        if ( this.selector === '' ) { return [ root ]; }
        let selector = this.selector;
        if ( input !== document && /^ [>+~]/.test(this.selector) ) {
            return Array.from(PSelectorSpathTask.qsa(input, this.selector));
        }
        const elems = root.querySelectorAll(selector);
        return Array.from(elems);
    }
    exec(input) {
        let nodes = this.prime(input);
        for ( const task of this.tasks ) {
            if ( nodes.length === 0 ) { break; }
            const transposed = [];
            task.begin();
            for ( const node of nodes ) {
                task.transpose(node, transposed);
            }
            task.end(transposed);
            nodes = transposed;
        }
        return nodes;
    }
    test(input) {
        const nodes = this.prime(input);
        for ( const node of nodes ) {
            let output = [ node ];
            for ( const task of this.tasks ) {
                const transposed = [];
                task.begin();
                for ( const node of output ) {
                    task.transpose(node, transposed);
                }
                task.end(transposed);
                output = transposed;
                if ( output.length === 0 ) { break; }
            }
            if ( output.length !== 0 ) { return true; }
        }
        return false;
    }
}
PSelector.prototype.operatorToTaskMap = undefined;

class PSelectorRoot extends PSelector {
    constructor(o, styleToken) {
        super(o);
        this.budget = 200; // I arbitrary picked a 1/5 second
        this.raw = o.raw;
        this.cost = 0;
        this.lastAllowanceTime = 0;
        this.styleToken = styleToken;
    }
    prime(input) {
        try {
            return super.prime(input);
        } catch (ex) {
        }
        return [];
    }
}

/******************************************************************************/

class ProceduralFilterer {
    constructor(selectors) {
        this.selectors = [];
        this.masterToken = this.randomToken();
        this.styleTokenMap = new Map();
        this.styledNodes = new Set();
        this.timer = undefined;
        this.addSelectors(selectors);
    }

    addSelectors() {
        for ( const selector of selectors ) {
            let style, styleToken;
            if ( selector.action === undefined ) {
                style = 'display:none!important;';
            } else if ( selector.action[0] === 'style' ) {
                style = selector.action[1];
            }
            if ( style !== undefined ) {
                styleToken = this.styleTokenFromStyle(style);
            }
            const pselector = new PSelectorRoot(selector, styleToken);
            this.selectors.push(pselector);
        }
        this.onDOMChanged();
    }

    commitNow() {
        //console.time('procedural selectors/dom layout changed');

        // https://github.com/uBlockOrigin/uBlock-issues/issues/341
        //   Be ready to unhide nodes which no longer matches any of
        //   the procedural selectors.
        const toUnstyle = this.styledNodes;
        this.styledNodes = new Set();

        let t0 = Date.now();

        for ( const pselector of this.selectors.values() ) {
            const allowance = Math.floor((t0 - pselector.lastAllowanceTime) / 2000);
            if ( allowance >= 1 ) {
                pselector.budget += allowance * 50;
                if ( pselector.budget > 200 ) { pselector.budget = 200; }
                pselector.lastAllowanceTime = t0;
            }
            if ( pselector.budget <= 0 ) { continue; }
            const nodes = pselector.exec();
            const t1 = Date.now();
            pselector.budget += t0 - t1;
            if ( pselector.budget < -500 ) {
                console.info('uBOL: disabling %s', pselector.raw);
                pselector.budget = -0x7FFFFFFF;
            }
            t0 = t1;
            if ( nodes.length === 0 ) { continue; }
            this.styleNodes(nodes, pselector.styleToken);
        }

        this.unstyleNodes(toUnstyle);
    }

    styleTokenFromStyle(style) {
        if ( style === undefined ) { return; }
        let styleToken = this.styleTokenMap.get(style);
        if ( styleToken !== undefined ) { return styleToken; }
        styleToken = this.randomToken();
        this.styleTokenMap.set(style, styleToken);
        addStylesheet(
            `[${this.masterToken}][${styleToken}]\n{${style}}\n`,
        );
        return styleToken;
    }

    styleNodes(nodes, styleToken) {
        if ( styleToken === undefined ) {
            for ( const node of nodes ) {
                node.textContent = '';
                node.remove();
            }
            return;
        }
        for ( const node of nodes ) {
            node.setAttribute(this.masterToken, '');
            node.setAttribute(styleToken, '');
            this.styledNodes.add(node);
        }
    }

    unstyleNodes(nodes) {
        for ( const node of nodes ) {
            if ( this.styledNodes.has(node) ) { continue; }
            node.removeAttribute(this.masterToken);
        }
    }

    randomToken() {
        const n = Math.random();
        return String.fromCharCode(n * 25 + 97) +
            Math.floor(
                (0.25 + n * 0.75) * Number.MAX_SAFE_INTEGER
            ).toString(36).slice(-8);
    }

    onDOMChanged() {
        if ( this.timer !== undefined ) { return; }
        this.timer = self.requestAnimationFrame(( ) => {
            this.timer = undefined;
            this.commitNow();
        });
    }
}

/******************************************************************************/

let hn;
try { hn = document.location.hostname; } catch(ex) { }
const selectors = [];
while ( hn ) {
    if ( hostnamesMap.has(hn) ) {
        let argsHashes = hostnamesMap.get(hn);
        if ( typeof argsHashes === 'number' ) { argsHashes = [ argsHashes ]; }
        for ( const argsHash of argsHashes ) {
            const details = argsMap.get(argsHash);
            if ( details.n && details.n.includes(hn) ) { continue; }
            selectors.push(...details.a);
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

const proceduralSelectors = [];
const styleSelectors = [];
for ( const selector of selectors ) {
    if ( selector.cssable ) {
        styleSelectors.push(selector);
    } else {
        proceduralSelectors.push(selector);
    }
}

/******************************************************************************/

// Declarative selectors

if ( styleSelectors.length !== 0 ) {
    const cssRuleFromProcedural = details => {
        const { tasks, action } = details;
        let mq;
        if ( tasks !== undefined ) {
            if ( tasks.length > 1 ) { return; }
            if ( tasks[0][0] !== 'matches-media' ) { return; }
            mq = tasks[0][1];
        }
        let style;
        if ( Array.isArray(action) ) {
            if ( action[0] !== 'style' ) { return; }
            style = action[1];
        }
        if ( mq === undefined && style === undefined ) { return; }
        if ( mq === undefined ) {
            return `${details.selector}\n{${style}}`;
        }
        if ( style === undefined ) {
            return `@media ${mq} {\n${details.selector}\n{display:none!important;}\n}`;
        }
        return `@media ${mq} {\n${details.selector}\n{${style}}\n}`;
    };
    const sheetText = [];
    for ( const selector of styleSelectors ) {
        const ruleText = cssRuleFromProcedural(selector);
        if ( ruleText === undefined ) { continue; }
        sheetText.push(ruleText);
    }
    if ( sheetText.length !== 0 ) {
        addStylesheet(sheetText.join('\n'));
    }
}

/******************************************************************************/

// Procedural selectors

if ( proceduralSelectors.length !== 0 ) {
    const filterer = new ProceduralFilterer(proceduralSelectors);
    const observer = new MutationObserver(mutations => {
        let domChanged = false;
        for ( let i = 0; i < mutations.length && !domChanged; i++ ) {
            const mutation = mutations[i];
            for ( const added of mutation.addedNodes ) {
                if ( added.nodeType !== 1 ) { continue; }
                domChanged = true;
            }
            for ( const removed of mutation.removedNodes ) {
                if ( removed.nodeType !== 1 ) { continue; }
                domChanged = true;
            }
        }
        if ( domChanged === false ) { return; }
        filterer.onDOMChanged();
    });
    observer.observe(document, {
        childList: true,
        subtree: true,
    });
}

/******************************************************************************/

argsMap.clear();
hostnamesMap.clear();

/******************************************************************************/

})();

/******************************************************************************/
