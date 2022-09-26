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

// jpn-1

const argsMap = new Map([[881890546,{"a":[{"selector":"#amazonSelector","tasks":[["upward",1]]},{"selector":"#wrapAmazon","tasks":[["upward",1]]}]}],[402406836,{"a":[{"selector":".MuiCard-root > ins.adsbygoogle","tasks":[["upward",1]]},{"selector":".MuiGrid-container.MuiGrid-root[style*=\"min-height:\"]","action":["style","min-height: auto!important;"],"cssable":true},{"selector":".MuiGrid-item.MuiGrid-root[style*=\"min-height:\"]","action":["style","min-height: auto!important;"],"cssable":true}]}],[763535109,{"a":[{"selector":".BottomContainer.InView","action":["style","min-height:auto !important;"],"cssable":true}]}],[803679465,{"a":[{"selector":"div[style=\"margin-left: -4px;\"] > a.auto[href*=\"/Ads\"]","tasks":[["upward",1]]}]}],[151658412,{"a":[{"selector":".InGameAdvertisingModal__ModalContent","tasks":[["upward",".Modal__Modal__Overlay"]]}]}],[441988506,{"a":[{"selector":"#side > div.mb-4.p-3 div.global-ad-info","tasks":[["upward",".p-3"]]}]}],[906590791,{"a":[{"selector":".following_buttons_upper","action":["style","bottom: 0 !important;"],"cssable":true}]}],[829364291,{"a":[{"selector":".prBanner > ul > li > ins.adsbygoogle","tasks":[["upward",3]]}]}],[1871339811,{"a":[{"selector":"#_popIn_recommend ul._popIn_infinite_page","tasks":[["has",{"selector":" > li > a._popIn_recommend_article_ad"}]]}]}],[1503866007,{"a":[{"selector":"#writerprofile + aside.adsense","action":["style","height: 90px!important;width: 0!important;"],"cssable":true}]}],[1850830131,{"a":[{"selector":".jackFix + div.siteContent","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[874523637,{"a":[{"selector":".side[style^=\"height\"]","action":["style","height: auto!important;"],"cssable":true}]}],[466296553,{"a":[{"selector":"._popIn_infinite_page > a._popIn_recommend_article_ad_reserved","tasks":[["upward",1]]}]}],[873390761,{"a":[{"selector":"#footer","action":["style","height: auto !important;"],"cssable":true},{"selector":"#main[style=\"padding-bottom:300px;\"]","action":["style","padding-bottom: 170px !important;"],"cssable":true}]}],[406447953,{"a":[{"selector":"body.app-scroll-lock","action":["style","position: relative!important;overflow-y: unset!important;"],"cssable":true}]}],[2016194918,{"a":[{"selector":".article-triple > div[id^=\"pc_pol_woman_recommend\"]","tasks":[["upward",1]]}]}],[184380616,{"a":[{"selector":".c-box","tasks":[["has",{"selector":" > div.uz-radichubu_pc"}]]},{"selector":".c-topics__card__item--half","tasks":[["has",{"selector":" > div.ad_pr"}]]}]}],[1448918235,{"a":[{"selector":"li.item--box","tasks":[["has",{"selector":"[id^=\"iid_ad\"]"}]]}]}],[308223968,{"a":[{"selector":"article > div > ins.adsbygoogle","tasks":[["upward",1]]}]}],[2086923315,{"a":[{"selector":"a[name=\"\"] + h2.title","tasks":[["has-text","スポンサーサイト"]]}]}],[388335616,{"a":[{"selector":"#main-column > div.custom-html-feature","tasks":[["has",{"selector":" > div.biz-column > header > h2","tasks":[["has-text","Recommend"]]}]]},{"selector":"#main-column > div.grid > div > div.gptAd","tasks":[["upward",1]]},{"selector":"#wrapper > main > section.module_recommend","tasks":[["has",{"selector":" > div.module_content > div.OUTBRAIN"}]]}]}],[1914416672,{"a":[{"selector":".contents > div.OUTBRAIN","tasks":[["upward",1]]},{"selector":".contents > div.section_relation > div.uz-ny","tasks":[["upward",2]]}]}],[1081773183,{"a":[{"selector":"#main > table:first-child #ninja-blog-inactive","tasks":[["upward","table"]]},{"selector":".entryBlock #ninja-blog-inactive","tasks":[["upward",".entryBlock"]]},{"selector":"article.EntryTextBox","tasks":[["has",{"selector":"#ninja-blog-inactive"}]]},{"selector":"div.EntryBlock","tasks":[["has",{"selector":"#ninja-blog-inactive"}]]},{"selector":"div.EntryInner","tasks":[["has",{"selector":"#ninja-blog-inactive"}]]},{"selector":"div.EntryTitle","tasks":[["has",{"selector":"a[href=\"\"]","tasks":[["has-text","\\[PR\\]"]]}]]}]}],[889259633,{"a":[{"selector":".pt-10 > ins.adsbygoogle","tasks":[["upward",1]]}]}],[357628729,{"a":[{"selector":".section > h3","tasks":[["has-text","今、あなたにおすすめの記事"]]}]}],[338030419,{"a":[{"selector":"li > .p0[href^=\"https://amzn.to\"][title=\"Amazonを新しいタブで開く\"]","tasks":[["upward",1]]}]}],[1264395533,{"a":[{"selector":".list-recommend > h2","tasks":[["has",{"selector":" > span.line","tasks":[["has-text","おすすめ情報"]]}]]},{"selector":".list-recommend > ul","tasks":[["has",{"selector":" > li > a[href^=\"http://socialife.sony.net\"] > img"}]]}]}],[850970079,{"a":[{"selector":".section > div > div[class^=\"col-\"] > div[id^=\"div-gpt-ad\"]","tasks":[["upward",3]]},{"selector":".section > div[id^=\"div-gpt-ad\"]","tasks":[["upward",1]]}]}],[747772748,{"a":[{"selector":".p-card-sponsored","tasks":[["upward",1]]}]}],[1875320234,{"a":[{"selector":".te-article__body__inner > div.te-article__section","tasks":[["has",{"selector":" > div.uz-ny"}]]}]}],[559945329,{"a":[{"selector":"div[class^=\"css-\"] > div:not([class]) > ins.adsbygoogle","tasks":[["upward",2]]}]}],[1598717037,{"a":[{"selector":".sidebarcontents > div.pr","tasks":[["upward",1]]}]}],[369311303,{"a":[{"selector":"#slider_list span.title-text","tasks":[["has-text","おすすめPR"],["upward","#slider_list"]]},{"selector":"ul[class^=\"_taxel_row\"] > li > div[class^=\"_taxel_ad_article\"]","tasks":[["upward",1]]}]}],[55337192,{"a":[{"selector":".news_list > li > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1046780542,{"a":[{"selector":"#pickup-box > article div.ad-ranking","tasks":[["upward","article"]]}]}],[518226723,{"a":[{"selector":".fortune-submit","action":["style","display: block !important;"],"cssable":true}]}],[380411562,{"a":[{"selector":"#sub > section.block > div[style^=\"width:100%; margin:0 auto\"]","tasks":[["upward",1]]}]}],[326371192,{"a":[{"selector":"#widget_code_php_in_widget-23","action":["style","height: 24px!important;"],"cssable":true}]}],[401947238,{"a":[{"selector":"#ejjeBottomRightFixedAds > div.sideBlock > div[id^=\"div-gpt-\"][style^=\"height:80px; width:320px;\"]","tasks":[["upward",1]]},{"selector":".mainBlock > #ejje2ndDicRecommendAdId","tasks":[["upward",1]]},{"selector":".mainBlock > .flex-rectangle-ads-frame","tasks":[["upward",1]]},{"selector":".sideBlock","tasks":[["has",{"selector":"[id$=\"undefined\"]"}]]}]}],[1564014104,{"a":[{"selector":"#main","action":["style","width:auto !important; padding-left:15px !important;"],"cssable":true},{"selector":".tngMainT","action":["style","width:100% !important;"],"cssable":true}]}],[411448243,{"a":[{"selector":".together-posts > li > div[id^=\"logly-\"]","tasks":[["upward",1]]}]}],[1086511870,{"a":[{"selector":"#right_menu > h1:first-child","tasks":[["has-text","^Information$"]]},{"selector":"#wiki_menu.left_side > h2:only-of-type","tasks":[["has-text","^管理者のススメ$"]]},{"selector":"#wiki_menu.left_side > p > a[href^=\"http://www.sekaimon.com/\"]","tasks":[["upward",1]]},{"selector":"#wiki_menu.left_side > p > a[href^=\"https://www.amazon.co.jp/gp/\"]","tasks":[["upward",1]]},{"selector":"#wiki_menu.left_side > p > a[href^=\"https://www.powera.com/\"]","tasks":[["upward",1]]},{"selector":".sidebar > p > a[href^=\"https://www.amazon.co.jp/ref=assoc_\"]","tasks":[["upward",1]]}]}],[586247675,{"a":[{"selector":"div[class*=\"ContentFooterWrapper-\"]","tasks":[["has",{"selector":" > div > div.wide-adrail"}]]}]}],[1235673051,{"a":[{"selector":"#mybox > ul > li > div.textwidget > ins.adsbygoogle","tasks":[["upward",3]]},{"selector":".hentry > aside > script + div","tasks":[["has-text","スポンサーリンク"]]},{"selector":".kizi-under-box > div.textwidget > p","tasks":[["has-text","スポンサーリンク"]]}]}],[1433193338,{"a":[{"selector":".clickable-sentence iframe[src^=\"https://rcm-fe.\"]","tasks":[["upward",".clickable-sentence"]]},{"selector":".side-component a[href^=\"https://www.amazon.co.jp/\"]","tasks":[["upward",".side-component"]]}]}],[2121094876,{"a":[{"selector":".c-search-item > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1145667777,{"a":[{"selector":".widget_custom_html > div > div[id^=\"jp_crv_\"]","tasks":[["upward",2]]}]}],[1118708725,{"a":[{"selector":"table[width=\"780\"] > tbody > tr","tasks":[["has",{"selector":" > td[width][height][align]"}]]}]}],[1909659524,{"a":[{"selector":"ul[class^=\"list-comic-\"] > li > div.native-ad-wrap","tasks":[["upward",1]]}]}],[1386784049,{"a":[{"selector":".blockContainer > div[id^=\"logly-\"]","tasks":[["upward",1]]},{"selector":".blockContainer[style$=\"-60px auto;\"] > div[style=\"min-height: 90px;\"]","action":["style","min-height: 1px!important;"],"cssable":true},{"selector":"div[style$=\"height: 250px;\"] + div.elementSectionHeadingsWithSuffix","tasks":[["has",{"selector":" + .OUTBRAIN"}]]}]}],[474433873,{"a":[{"selector":"div[class$=\"-block\"] > div.m-ad-rectangle","tasks":[["upward",1]]}]}],[1635239025,{"a":[{"selector":".table_line","tasks":[["has",{"selector":"a[href^=\"https://click.\"]"}]]},{"selector":".table_line","tasks":[["has",{"selector":"iframe[src]"}]]}]}],[798305512,{"a":[{"selector":".nend_text_ad","tasks":[["upward","li"]]}]}],[1015726669,{"a":[{"selector":".archive__item > ins.adsbygoogle","tasks":[["upward",1]]}]}],[253261937,{"a":[{"selector":"#more > b","tasks":[["not",{"selector":"","tasks":[["has-text","まとめもり～"]]}]]}]}],[1094847778,{"a":[{"selector":".sticky_side_point > div.my-4","tasks":[["has",{"selector":"div.ads-item"}]]}]}],[210545685,{"a":[{"selector":"#js-forms","action":["style","height: auto !important;"],"cssable":true},{"selector":".bbsmenu-with-ad","action":["style","padding-bottom: 0 !important;"],"cssable":true}]}],[869577846,{"a":[{"selector":".grid_post-box ins.adsbygoogle","tasks":[["upward",".grid_post-box"]]}]}],[1231614384,{"a":[{"selector":"#EntryBlock > .EntryTextBox #ninja-blog-inactive","tasks":[["upward",".EntryTextBox"]]},{"selector":"#EntryListBlock > article #ninja-blog-inactive","tasks":[["upward","article"]]}]}],[2067666114,{"a":[{"selector":"#site-box #d-box + div > font","tasks":[["has-text","^スポンサーリンク$"]]},{"selector":"#site-box > #b-box > div > font","tasks":[["has-text","^スポンサーリンク$"]]},{"selector":"table[summary] > tbody > tr[align=\"left\"][bgcolor]","tasks":[["has",{"selector":" > td > .adsbygoogle"}]]},{"selector":"table[summary] > tbody > tr[align=\"left\"][bgcolor]","tasks":[["has",{"selector":" > td > font","tasks":[["has-text","^スポンサーリンク$"]]}]]}]}],[1542999608,{"a":[{"selector":".col-lg-4 > .p-t-1","tasks":[["has",{"selector":" > h5","tasks":[["has-text","広告"]]}]]}]}],[1865150004,{"a":[{"selector":"#MainBlock > div > div > #ninja-blog-inactive","tasks":[["upward",2]]}]}],[1835221495,{"a":[{"selector":".column > div.card > div.adv","tasks":[["upward",2]]}]}],[139931820,{"a":[{"selector":".blockSide > div.blockWrapper > div > div.ninja-recommend-block","tasks":[["upward",2]]},{"selector":".blockSide > div.blockWrapper > div > div[class$=\"eroterest_partsv2\"]","tasks":[["upward",2]]}]}],[1360426927,{"a":[{"selector":"#center-left","action":["style","height: auto !important;"],"cssable":true}]}],[359300910,{"a":[{"selector":".blockWrapper div[id^=\"mhub-\"]","tasks":[["upward",".blockWrapper"]]}]}],[2039306099,{"a":[{"selector":".epad #ninja-blog-inactive","tasks":[["upward",".epad"]]}]}],[1333555462,{"a":[{"selector":".rblock > div.rad","tasks":[["upward",1]]},{"selector":"div[id^=\"plist\"] > div > div[id^=\"div-gpt-ad\"]","action":["remove",""]}]}],[688638736,{"a":[{"selector":".plugin-memo > div.side > div.ad-center","tasks":[["upward",2]]}]}],[482638364,{"a":[{"selector":"#bottom_area","action":["style","height: 1px !important;"],"cssable":true}]}],[1288813320,{"a":[{"selector":"[class^=\"caption\"]","tasks":[["has-text","PR"]]}]}],[81088976,{"a":[{"selector":".pc_only.fp_list_each > div.pc_only_ad","tasks":[["upward",1]]}]}],[872968367,{"a":[{"selector":"#recommended > div > div.floatL > a > img[title^=\"[PR]\"]","tasks":[["upward",3]]}]}],[2068018039,{"a":[{"selector":".entryContents > h3","tasks":[["has-text","おすすめ記事"]]}]}],[385251564,{"a":[{"selector":".main-image-in > .blogroll-wrapper","tasks":[["has",{"selector":" > .blogroll-column > b > script","tasks":[["has-text","blogroll_channel_id"]]}]]}]}],[356718067,{"a":[{"selector":".bottombox > div > span[class=\"accent\"]","tasks":[["upward",2]]},{"selector":".bottomsection > div > ins.adsbygoogle","tasks":[["upward",2]]},{"selector":".detail > .related","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".related-cate","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]}]}],[1957084021,{"a":[{"selector":"section > div.card > div.date > a[class] > span.catab","tasks":[["has-text","広告"],["upward","section"]]},{"selector":"section > div.card > div.thumb > script[src*=\"/www/delivery/\"]","tasks":[["upward",3]]}]}],[426868080,{"a":[{"selector":".cst > div.inNews > div.flex > div[id^=\"div-gpt-\"]","tasks":[["upward",3]]}]}],[411944388,{"a":[{"selector":"#utilities > div.plugin-memo","tasks":[["has",{"selector":" > div.side > center > a[href^=\"https://www.amazon.co.jp\"]"}]]},{"selector":".plugin-memo > div.side div.ad-center","tasks":[["upward",".plugin-memo"]]}]}],[723738853,{"a":[{"selector":"body[style=\"margin:5%;\"] > #content","action":["style","color:initial!important;text-shadow:none!important;"],"cssable":true}]}],[1467873801,{"a":[{"selector":".uk-width-large-1-3 > div[style=\"text-align: center;margin:0px;\"] > ins.adsbygoogle","tasks":[["upward",2]]}]}],[1296572164,{"a":[{"selector":".section > div.clear","tasks":[["has",{"selector":" > a[href^=\"https://amazon.co.jp/\"]"}]]}]}],[1307440469,{"a":[{"selector":".plugin_item ins.adsbygoogle","tasks":[["upward",".plugin_item"]]}]}],[1302800707,{"a":[{"selector":".l-contents > div > div.p-ad","tasks":[["upward",2]]},{"selector":".type_button > a[target=\"_blank\"]","tasks":[["not",{"selector":"","tasks":[["has-text","読む"]]}]]}]}],[1780323764,{"a":[{"selector":"#content > center","tasks":[["has",{"selector":" > script[src=\"http://pagead2.googlesyndication.com/pagead/show_ads.js\"]"}]]}]}],[2078324627,{"a":[{"selector":".entry[data-type=\"undefined\"] script[src^=\"https://img.ad-nex.com/\"]","tasks":[["upward",".entry"]]}]}],[286187003,{"a":[{"selector":"a[id^=\"Type\"]","tasks":[["upward",1]]}]}],[26242660,{"a":[{"selector":"#main-2 > .post","tasks":[["has",{"selector":" > .pc_ad:only-child"}]]}]}],[880092013,{"a":[{"selector":".menu_div > center > ins.contents_ad_main","tasks":[["upward",2]]}]}],[1920374785,{"a":[{"selector":"#text-2 > div.textwidget > p > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1115656127,{"a":[{"selector":".flex-grow > main > div[class^=\"sc-\"]","tasks":[["has",{"selector":" > div[class^=\"sc-\"] > div[class^=\"sc-\"] div[id^=\"div-gpt-ad-\"]"}]]}]}],[1932580263,{"a":[{"selector":"#maintext > blockquote","tasks":[["has",{"selector":" > div.AmaQuick-box"}]]},{"selector":"aside > div.plugin-memo","tasks":[["has",{"selector":" > div.sidetitlebody > div.sidetitle","tasks":[["has-text","スポンサードリンク"]]}]]}]}],[1949041876,{"a":[{"selector":".custom-html-widget","tasks":[["has",{"selector":" > a[href^=\"https://www.amazon.co.jp/dp/\"]"}]]}]}],[1714546707,{"a":[{"selector":".entry #SPREAD_VIDEO_PLAYER","tasks":[["upward",".entry"]]}]}],[658493804,{"a":[{"selector":"#dmm_ranking_pc_more ~ h2","tasks":[["has-text","ランキング"]]}]}],[1381886471,{"a":[{"selector":".ad_unit.ad-unit.text-ad.text_ad.pub_300x250","action":["style","display: block !important;"],"cssable":true},{"selector":".entry-content div[id^=\"oumi-\"]","tasks":[["has",{"selector":" > .oumi-adlabel"}]]}]}],[173626102,{"a":[{"selector":"#content11","action":["style","padding-top:0 !important;"],"cssable":true},{"selector":"#wrap-main","action":["style","padding-top:0 !important;"],"cssable":true},{"selector":".blogparts_freeArea","tasks":[["has",{"selector":"a[href^=\"https://www.amazon.co.jp/exec/\"]"}]]}]}],[637400657,{"a":[{"selector":".-freeArea ins.adsbygoogle","tasks":[["upward",".-freeArea"]]}]}],[1353520413,{"a":[{"selector":".jbbsCustomHeader > table[width=\"95%\"] #tokuwari","tasks":[["upward","table[width=\"95%\"]"]]},{"selector":".jbbsCustomHeader > table[width=\"95%\"] a[href=\"http://wiki.livedoor.jp/fuzokuwiki/\"]","tasks":[["upward","table[width=\"95%\"]"]]},{"selector":".jbbsCustomHeader > table[width=\"95%\"] td > a[href^=\"http://seesaawiki.\"]","tasks":[["upward","table[width=\"95%\"]"]]},{"selector":"body > div[style]","tasks":[["has",{"selector":" > table[border] > tbody > tr > td[height] > div[id^=\"criteo_slot_\"]"}]]},{"selector":"body table[width=\"640\"] > tbody","tasks":[["has",{"selector":" > tr > td > a[href^=\"http://www.amazon.\"]"}]]},{"selector":"td > div[align=\"left\"]","tasks":[["has",{"selector":" > a[href^=\"http://www.amazon.\"]"}]]}]}],[1430650831,{"a":[{"selector":"#right_folder > div.textwidget","tasks":[["has",{"selector":" > a[rel^=\"nofollow\"] > img"}]]},{"selector":"#right_folder > div.textwidget","tasks":[["has",{"selector":"ins.adsbygoogle"}]]}]}],[593000760,{"a":[{"selector":".entrys #ninja-blog-inactive","tasks":[["upward",".entrys"]]}]}],[1567308824,{"a":[{"selector":".cardtype > .cardtype__article > .adsbygoogle","tasks":[["upward",1]]}]}],[425155691,{"a":[{"selector":"#article-body > #topic-board.subsection","tasks":[["has",{"selector":" > .title-parts > span.ad"}]]},{"selector":"#article-bottom > #trend-library.subsection","tasks":[["has",{"selector":" > .title-parts > span.ad"}]]},{"selector":"#main-column > #trend-library","tasks":[["has",{"selector":" > .title-parts > span.ad"}]]},{"selector":"#sub-column > #information","tasks":[["has",{"selector":" > .title-parts > span.ad"}]]}]}],[1540255822,{"a":[{"selector":".art_li[style^=\"width\"]","action":["remove",""]},{"selector":".inv_scroll_cancel","action":["style","overflow: auto !important; height: auto !important;"],"cssable":true}]}],[300814533,{"a":[{"selector":".contents_title > a[href=\"\"]","tasks":[["upward",1]]},{"selector":".entry_foot > a[title=\"[PR]の記事トップへ\"]","tasks":[["upward",1]]},{"selector":".entry_main #ninja-blog-inactive","tasks":[["upward",".entry_main"]]},{"selector":".entry_state > a[href=\"\"]","tasks":[["upward",1]]}]}],[325230519,{"a":[{"selector":"#EntryBlock > .w1 #ninja-blog-inactive","tasks":[["upward",".w1"]]}]}],[611716592,{"a":[{"selector":".archive-entry > ins.adsbygoogle","tasks":[["upward",1]]}]}],[757540334,{"a":[{"selector":".classic-textwidget","tasks":[["has",{"selector":"a[href^=\"//ck.jp.ap.valuecommerce.com\"]"}]]}]}],[12973821,{"a":[{"selector":".entry-content > p[style=\"text-align: center;\"]","tasks":[["has-text","スポンサーリンク"]]}]}],[1982390550,{"a":[{"selector":"#rank li > iframe[src^=\"/ad_frame.\"]","tasks":[["upward","li"]]}]}],[1332404444,{"a":[{"selector":".box-onetag-rec","tasks":[["upward",1]]}]}],[543776173,{"a":[{"selector":"#secondary > div.widget_text a[href^=\"https://amzn\"]","tasks":[["upward",1]]}]}],[1247906757,{"a":[{"selector":"#main_panel","action":["style","height: 300px !important;"],"cssable":true}]}],[526257021,{"a":[{"selector":".container > h4","tasks":[["has",{"selector":" > a[href^=\"javascript\"] > span[id^=\"urad\"]"}]]}]}],[768565120,{"a":[{"selector":"#log-1[colspan=\"2\"]","tasks":[["has-text","スポンサードリンク"]]},{"selector":"body > div:not([style]) > ins.adsbygoogle","tasks":[["upward",1]]},{"selector":"div[style=\"margin-left:175px;zoom:1;\"] > div[style=\"margin-top:10px;\"]","tasks":[["has-text","^スポンサードリンク$"]]}]}],[294852775,{"a":[{"selector":"font > table > tbody > tr","tasks":[["has",{"selector":" > td[align] > font","tasks":[["has-text","^\\(PR\\)$"]]}]]}]}],[1884236736,{"a":[{"selector":"table[width=\"780\"] > tbody > tr > td[height][bgcolor=\"#ff0080\"][align=\"center\"] > font","tasks":[["upward",2]]}]}],[57253707,{"a":[{"selector":".pum-open-overlay","action":["style","overflow: auto!important;"],"cssable":true}]}],[156826953,{"a":[{"selector":"div.center[style=\"margin-top:20px;min-height:167px;\"] > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1961942899,{"a":[{"selector":"p a[href^=\"//ck.jp.ap.\"]","tasks":[["upward","p"]]},{"selector":"p a[href^=\"https://px.\"]","tasks":[["upward","p"]]}]}],[341348269,{"a":[{"selector":".plugin-memo > div.side > div.ninja-recommend-block","tasks":[["upward",2]]}]}],[1758669003,{"a":[{"selector":".c_tile_article_sq297_div > .ad-top_pc","tasks":[["upward",1]]}]}],[2107640681,{"a":[{"selector":".container > div.home-img-box > div.center-ad","tasks":[["upward",1]]}]}],[1717540760,{"a":[{"selector":".grid > div[id^=\"undefined\"]","action":["remove",""],"tasks":[["upward",1]]},{"selector":"li.large.grid","action":["remove",""]}]}],[737326926,{"a":[{"selector":"table[width=\"780\"] > tbody > tr","tasks":[["has",{"selector":" > td > font > script"}]]}]}],[1891865150,{"a":[{"selector":".table > tbody > tr.active","tasks":[["has",{"selector":" > td > center > script[src^=\"//j.microad.net/\"]"}]]}]}],[187075588,{"a":[{"selector":".hatena-module-html > div.hatena-module-body > a[href^=\"https://tradingview\"]","tasks":[["upward",2]]},{"selector":".hatena-module-html > div.hatena-module-body > script[src^=\"//ad.\"]","tasks":[["upward",2]]}]}],[619718704,{"a":[{"selector":".entry > h3","tasks":[["has-text","こちらの記事も"]]}]}]]);

const hostnamesMap = new Map([["yukkuri-futaba.sakura.ne.jp",881890546],["news.so-net.ne.jp",402406836],["nicovideo.jp",763535109],["dic.nicovideo.jp",803679465],["game.nicovideo.jp",151658412],["nurse-senka.jp",441988506],["okwave.jp",906590791],["kankomie.or.jp",829364291],["topics.or.jp",1871339811],["otajo.jp",1503866007],["otakomu.jp",1850830131],["otonanswer.jp",874523637],["otonasalone.jp",466296553],["sumaiweb.jp",466296553],["piapro.jp",873390761],["novel.prcm.jp",406447953],["president.jp",2016194918],["radichubu.jp",184380616],["response.jp",1448918235],["s8a.jp",308223968],["sagafan.jp",2086923315],["sankeibiz.jp",388335616],["sanyonews.jp",1914416672],["blog.shinobi.jp",1081773183],["blog.skeg.jp",889259633],["smart-flash.jp",357628729],["main-hrs-game.ssl-lolipop.jp",338030419],["tanoshiiosake.jp",1264395533],["tap-biz.jp",850970079],["tasclap.jp",747772748],["techable.jp",1875320234],["teller.jp",559945329],["thetv.jp",1598717037],["trafficnews.jp",369311303],["trailrunner.jp",55337192],["tsuiran.jp",1046780542],["uranaitv.jp",518226723],["weathernews.jp",380411562],["webcartop.jp",326371192],["ejje.weblio.jp",401947238],["uwl.weblio.jp",1564014104],["weekly-jitsuwa.jp",411448243],["wiki3.jp",1086511870],["wired.jp",586247675],["hoimiso.xsrv.jp",1235673051],["yourei.jp",1433193338],["medley.life",2121094876],["creive.me",1145667777],["hime.me",1118708725],["konyoku.net",1118708725],["mangalove.me",1909659524],["gendai.media",1386784049],["limo.media",474433873],["marumie.name",1635239025],["2ch-c.net",798305512],["417ena.net",1015726669],["46matome.net",253261937],["keyakizaka46matomemory.net",253261937],["5ch.net",1094847778],["itest.5ch.net",210545685],["753ya.net",869577846],["99ing.net",1231614384],["all-freesoft.net",2067666114],["ascii2d.net",1542999608],["asukablog.net",1865150004],["avgle.net",1835221495],["blogterest.net",139931820],["buhidoh.net",1360426927],["clublucifer.net",359300910],["cooklog.net",2039306099],["diamond-rm.net",1333555462],["ebitsu.net",688638736],["roote.ekispert.net",482638364],["elog-ch.net",1288813320],["fashion-press.net",81088976],["azby.fmworld.net",872968367],["fumumu.net",2068018039],["geeksokuhou.net",385251564],["gigafree.net",356718067],["gigazine.net",1957084021],["news.gree.net",426868080],["imas-cg.net",411944388],["warui.intaa.net",723738853],["followcheck.itby.net",1467873801],["jigen.net",1296572164],["keokeoblog.net",1307440469],["lettuceclub.net",1302800707],["masterwiki.net",1780323764],["matometatta-news.net",2078324627],["mj-news.net",286187003],["moeimg.net",26242660],["morekorea.net",880092013],["nihongonosensei.net",1920374785],["odaibako.net",1115656127],["openworldnews.net",1932580263],["orefolder.net",1949041876],["osakazine.net",1714546707],["sp.oshaburi.net",658493804],["ouminews.net",1381886471],["pokemon-matome.net",173626102],["pokemongo-kouryakumatome.net",637400657],["jbbs.shitaraba.net",1353520413],["solomon-review.net",1430650831],["take-uma.net",593000760],["tanweb.net",1567308824],["toyokeizai.net",425155691],["twivideo.net",1540255822],["v-kei.net",300814533],["visualshoxx.net",325230519],["wackwack.net",611716592],["warotanien.net",757540334],["wifi-kiwami.net",12973821],["with2.net",1982390550],["yoheim.net",1332404444],["zekamashi.net",543776173],["gigafile.nu",1247906757],["busjav.one",526257021],["kabegami.jpn.org",768565120],["shitagi.org",294852775],["bbs.shitagi.org",1884236736],["a-d.pw",57253707],["connect.coron.tech",156826953],["ribbon.to",1961942899],["vipstyle.tokyo",341348269],["reminder.top",1758669003],["hpav.tv",2107640681],["nukiez.tv",1717540760],["toukou.tv",737326926],["2ch.vet",1891865150],["momiage.work",187075588],["socom.yokohama",619718704]]);

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
