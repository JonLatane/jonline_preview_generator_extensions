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

const argsMap = new Map([[657952746,{"a":[{"selector":".plugin1_outline","tasks":[["has",{"selector":" > div > div > div.plugin-freearea > a[href^=\"https://www.amazon.co.jp\"]"}]]}]}],[1048562618,{"a":[{"selector":".sidebar_list > li#widget_text","tasks":[["has",{"selector":" > div.textwidget > center > a[target=\"_blank\"] > img"}]]}]}],[2071796144,{"a":[{"selector":"div[style=\"width:730px;font-size:11pt;\"] > table[width=\"730\"]","action":["style","width: 380px !important;"],"cssable":true}]}],[421850984,{"a":[{"selector":"#ct004 > div.contMain > table.tblPRbn","tasks":[["upward",2]]},{"selector":".alignC > div.mTop10 > div[style]","tasks":[["has-text","-PR-"]]},{"selector":".c-feed_cell > a.c-feed_item-pr","tasks":[["upward",1]]}]}],[1307766850,{"a":[{"selector":"#entry_li_body #ninja-blog-inactive","tasks":[["upward","#entry_li_body"]]}]}],[582985586,{"a":[{"selector":"#Left #ninja-blog-inactive","tasks":[["upward","#Left"]]}]}],[1816549027,{"a":[{"selector":"#main > p > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1600871934,{"a":[{"selector":"body[style=\"padding: 0px 0px 154px;\"]","action":["style","padding-bottom: 0 !important;"],"cssable":true}]}],[376167640,{"a":[{"selector":".readmore-header","tasks":[["has",{"selector":" > div.ads-label"}]]}]}],[276796582,{"a":[{"selector":".ui-block-b","tasks":[["has",{"selector":"script:not([src])"}]]}]}],[1590742958,{"a":[{"selector":".singleAdjust01 > div.adAdjust02","tasks":[["upward",1]]}]}],[1774951237,{"a":[{"selector":".entry-content :not([class])","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]}]}],[1191726077,{"a":[{"selector":".ads","action":["style","display: block!important;height: 1px!important;"],"cssable":true}]}],[632466944,{"a":[{"selector":"#side > h2.h2s","tasks":[["has-text","スポンサーリンク"]]}]}],[1944646620,{"a":[{"selector":".h2s:last-of-type","tasks":[["has-text","ポケモン関連"]]}]}],[1642723068,{"a":[{"selector":".is-separate-block-mv-list-item-pr","action":["remove",""]}]}],[658772111,{"a":[{"selector":"#EB a[href=\"\"]","tasks":[["upward","#EB"]]},{"selector":"#EiB2 #ninja-blog-inactive","tasks":[["upward","#EiB2"]]}]}],[111295239,{"a":[{"selector":".nav_div","tasks":[["has-text","PR"]]}]}],[647098137,{"a":[{"selector":".subSec:first-child > div[id^=\"div-gpt-ad\"]","tasks":[["upward",1]]},{"selector":".topicsList > li > i.pr","tasks":[["upward",1]]}]}],[1472157824,{"a":[{"selector":".lyricside > span.ezoic-ad","tasks":[["upward",1]]}]}],[1354059959,{"a":[{"selector":"#extra div.plugin-memo > div.side > script[language=\"JavaScript\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > script[src^=\"https://js.ad-stir.com/\"]","tasks":[["upward",2]]}]}],[1855171071,{"a":[{"selector":".EntryInnerBlock #ninja-blog-inactive","tasks":[["upward",".EntryInnerBlock"]]},{"selector":".entry_header:first-child > span.entry_title > a[href=\"\"]","tasks":[["has-text","\\[PR\\]"],["upward",2]]},{"selector":".entry_text > #ninja-blog-inactive","tasks":[["upward",1]]},{"selector":".entry_text:nth-child(2)","tasks":[["has",{"selector":" > #ninja-blog-inactive"}],["spath"," + .entry_footer"]]}]}],[232884200,{"a":[{"selector":".menuTabLight","tasks":[["has-text","PR"]]},{"selector":".plugin1_outline > div.plugin1_title","tasks":[["has-text","PR"],["upward",1]]},{"selector":".plugin3_body > div.ta_center > div.plugin-freearea","tasks":[["upward",3]]}]}],[890213759,{"a":[{"selector":"#content","action":["style","padding-bottom: 354px !important;"],"cssable":true},{"selector":".mdModal div.mdbnViewer__ad","tasks":[["upward",".mdModal"]]}]}],[1328405283,{"a":[{"selector":"#secondary > aside.widget_execphp","tasks":[["has",{"selector":" > h3","tasks":[["has-text","^PR$"]]}]]},{"selector":"aside[id^=\"custom_html-\"]","tasks":[["has",{"selector":" > h3","tasks":[["has-text","^PR$"]]}]]}]}],[662519234,{"a":[{"selector":".side--right > section.module--free","tasks":[["has",{"selector":" > div.module__body > ins.adsbygoogle"}]]}]}],[1815570818,{"a":[{"selector":"#sidebarbody-l > .sidebar-body","tasks":[["has",{"selector":" > div > div > a[href^=\"https://www.amazon.co.jp/\"]"}]]}]}],[589743062,{"a":[{"selector":".article-wrapper","action":["style","margin-top: 778px !important;"],"cssable":true}]}],[1978017791,{"a":[{"selector":"#EntryInnerBlock #ninja-blog-inactive","tasks":[["upward","#EntryInnerBlock"]]}]}],[1670566232,{"a":[{"selector":".widget_pc_text","tasks":[["has",{"selector":"script[src^=\"https://ad-nex.\"]"}]]}]}],[1889447742,{"a":[{"selector":"#wrap01","action":["style","height: 2205px !important;"],"cssable":true},{"selector":".tabpain[style=\"left: -260px; top: 280px;\"]","action":["style","top: 0 !important;"],"cssable":true},{"selector":".tabpain[style=\"top: 550px; left: 0px;\"]","action":["style","top: -1120px !important;"],"cssable":true}]}],[1157630155,{"a":[{"selector":".adsepa","action":["style","height: 0 !important;"],"cssable":true},{"selector":".reply_txad","action":["style","border: 0 !important;"],"cssable":true},{"selector":".thread_txad","action":["style","border: 0 !important;"],"cssable":true}]}],[1747934602,{"a":[{"selector":".ad-area > div.ad-label","tasks":[["has-text","^スポンサーリンク$"]]},{"selector":".text-center > p","tasks":[["has-text","^スポンサー ?リンク$"]]},{"selector":".text-center > p","tasks":[["has-text","スポンサー"]]}]}],[384092333,{"a":[{"selector":".section-title > p","tasks":[["has-text","^スポンサーリンク$"]]}]}],[795920749,{"a":[{"selector":"td > div.bbs_box > iframe[src^=\"//tool2.nan-net.com\"]","tasks":[["upward",1]]}]}],[1479486364,{"a":[{"selector":".sidebar-widget > div > div > a[href*=\"://ad.\"]","tasks":[["upward",3]]}]}],[157656292,{"a":[{"selector":".EntryInner #ninja-blog-inactive","tasks":[["upward",".EntryInner"]]}]}],[150342829,{"a":[{"selector":".divh1","tasks":[["has-text","PR"]]}]}],[689000300,{"a":[{"selector":".side > div.sideh2","tasks":[["has-text","広告"]]}]}],[1722942617,{"a":[{"selector":".vab > div#pr","tasks":[["upward",1]]}]}],[31182644,{"a":[{"selector":"body[style^=\"overflow:\"]","action":["style","overflow: auto !important;"],"cssable":true}]}],[291273610,{"a":[{"selector":"[class^=\"l-\"] > [class^=\"s-\"]","tasks":[["has",{"selector":" > [class^=\"ad-list\"]"}]]}]}],[1138116834,{"a":[{"selector":".entrybox #ninja-blog-inactive","tasks":[["upward",".entrybox"]]}]}],[1238763513,{"a":[{"selector":".widget > div[id^=\"div-gpt-\"]","tasks":[["upward",1]]}]}],[78665576,{"a":[{"selector":".wppwrap > div.ts10box","tasks":[["upward",1]]}]}],[862231648,{"a":[{"selector":"article > div.entry_content > h3","tasks":[["has-text","おすすめ商品"]]}]}],[743453468,{"a":[{"selector":".l-main_primary > .l-section","tasks":[["has",{"selector":" > #PianoRecsAtclBottom"}]]},{"selector":".l-main_primary > .l-section","tasks":[["has",{"selector":" > .-textAd"}]]}]}],[856255345,{"a":[{"selector":".js-sticky > section.l-asideSection","tasks":[["has",{"selector":" > div.p-sideArticleList > ul > li > div[id^=\"div-gpt-ad-recommend_pr_\"]"}]]}]}],[656502885,{"a":[{"selector":".l-section > ul.p-articleList > li > div[id^=\"div-gpt-ad\"]","tasks":[["upward",1]]}]}],[170064243,{"a":[{"selector":"#sticky1 > section.l-asideSection","tasks":[["has",{"selector":"div[id^=\"div-gpt-\"]"}]]},{"selector":".l-main_primary > section[class=\"l-section\"]","tasks":[["has",{"selector":" > div.c-iconAd"}]]},{"selector":".p-articleList_item > div[id^=\"div-gpt-ad\"]","tasks":[["upward",1]]},{"selector":".p-article_recommend","tasks":[["has",{"selector":" > .p-article_recommend_heading > .p-article_recommend_image > a[href*=\"campaign\"]"}]]}]}],[1980941000,{"a":[{"selector":".articles-list-item > div[id^=\"div-gpt-\"]","tasks":[["upward",1]]}]}],[1166400512,{"a":[{"selector":"#main-right > div.right_area > div.ninja-recommend-block","tasks":[["upward",2]]}]}],[645270511,{"a":[{"selector":".entry_body > center","tasks":[["has-text","\\[スポンサーリンク\\]"]]}]}],[984758808,{"a":[{"selector":".home-h > h1","tasks":[["has-text","ライブチャット"]]},{"selector":".home-h > h3","tasks":[["has-text","Stripchat"]]}]}],[703471409,{"a":[{"selector":"div[class=\"add\"] > div[id^=\"text-6\"]","tasks":[["has",{"selector":" > h4 > span","tasks":[["has-text","おすすめ関連記事"]]}]]}]}],[111310456,{"a":[{"selector":"#cb-container","action":["style","padding-top: 110px !important;"],"cssable":true},{"selector":".ovni-header","action":["style","height: auto !important;"],"cssable":true}]}],[2079898775,{"a":[{"selector":".entrytextbox #ninja-blog-inactive","tasks":[["upward",".entrytextbox"]]}]}],[1446337488,{"a":[{"selector":".noads-link","tasks":[["upward",1]]}]}],[307618780,{"a":[{"selector":"#extra div.free-box iframe[src*=\"amazon-adsystem\"]","tasks":[["upward","div.free-box"]]},{"selector":"div[id^=\"content_block_\"][class^=\"wiki-section-body-\"] table[id^=\"content_block_\"]","tasks":[["has",{"selector":"a.outlink[href*=\".amazon.co\"][target=\"_blank\"] img[style*=\"max-width:\"]"}]]}]}],[1868598208,{"a":[{"selector":".k_leftColumnCommon > .k_mt-6","tasks":[["has",{"selector":".k_text","tasks":[["has-text","AD"]]}]]}]}],[2100914040,{"a":[{"selector":"#home-side-ad","tasks":[["upward",1]]},{"selector":"#personalized-feed-side-ad","tasks":[["upward",1]]},{"selector":".p-items_main > div[class^=\"css-\"]","tasks":[["has",{"selector":"div[id^=\"dfp-slot-\"]"}]]},{"selector":"div[class^=\"css\"] > div > div.it-Ads_afterBodyContainer","tasks":[["upward",2]]}]}],[1605567501,{"a":[{"selector":"#link-will-go","action":["remove",""]}]}],[1378140559,{"a":[{"selector":"#main-column > div.EntryBlock #ninja-blog-inactive","tasks":[["upward",".EntryBlock"]]},{"selector":".EntryTitle > a[href=\"\"]","tasks":[["upward",1]]}]}],[1349636851,{"a":[{"selector":".row","tasks":[["has",{"selector":"div[id^=\"div-gpt-ad-\"]"}]]}]}],[712115385,{"a":[{"selector":"#main-inner > .content #ninja-blog-inactive","tasks":[["upward",".content"]]},{"selector":".page_navi > a[href=\"\"]","tasks":[["upward",1]]}]}],[989005128,{"a":[{"selector":"#content1 > .articles #ninja-blog-inactive","tasks":[["upward",".articles"]]}]}],[577661416,{"a":[{"selector":".header","action":["style","height: 50px!important;"],"cssable":true}]}],[647729023,{"a":[{"selector":".widget_text script[src^=\"//cdn.gmossp-\"]","tasks":[["upward",".widget_text"]]}]}],[295126085,{"a":[{"selector":".tb-r2 > table > tbody > tr > td","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":"div[id][style$=\"width:728px;\"]","action":["style","height: 0 !important; visibility: hidden !important;"],"cssable":true},{"selector":"table[id] td[align] > div[id]","action":["style","height: 1px!important;"],"cssable":true}]}],[1031413060,{"a":[{"selector":"#main center","tasks":[["has-text","スポンサーリンク"]]}]}],[342037868,{"a":[{"selector":".entry-content > div[style^=\"box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);\"] > ins.adsbygoogle","tasks":[["upward",1]]}]}],[324745680,{"a":[{"selector":".post_content > .has-border","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1507731862,{"a":[{"selector":".post_ad","action":["remove",""]}]}],[1764525574,{"a":[{"selector":".entry-content > p > ins.adsbygoogle","tasks":[["upward",1]]}]}],[181318932,{"a":[{"selector":".title_right_top","tasks":[["has-text","SPONSORED"]]}]}],[745919728,{"a":[{"selector":"#content","action":["style","display: block !important; width: 100% !important; height: 100% !important;"],"cssable":true}]}],[172594761,{"a":[{"selector":"#side > div > .widget-wrap > h3","tasks":[["has-text","^Ads$"],["upward",1]]},{"selector":".entry-footer > p[style]","tasks":[["has-text","\\[Ads & Featured Articles\\]"]]}]}],[524491234,{"a":[{"selector":".main > .newTemp > p:last-child","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1668409579,{"a":[{"selector":".news-list > li > ins.adsbygoogle","tasks":[["upward",1]]}]}],[665083440,{"a":[{"selector":".c-list__item > div[id^=\"_popIn_infeed\"]","tasks":[["upward",1]]}]}],[1074516038,{"a":[{"selector":".clearfix.contents","action":["style","min-height: auto!important;"],"cssable":true},{"selector":".tweet_box > div[class=\"list_box\"]:not([data-index]) > div > a[href^=\"https://www.amazon.co.jp/\"]","tasks":[["upward",2]]}]}],[381725255,{"a":[{"selector":".contents_right > div.box > div#ad_rectangle_1","tasks":[["upward",1]]}]}],[459485660,{"a":[{"selector":"#ar_w300px > div.cont > ul.tab","tasks":[["upward",1]]}]}],[852772945,{"a":[{"selector":"body[style=\"overflow-y: hidden;\"]","action":["style","overflow-y: auto!important;"],"cssable":true}]}],[255573291,{"a":[{"selector":"#main-block > .grid > div[class^=\"grid-cell\"]","tasks":[["has",{"selector":"iframe[src*=\"/ad-d/\"]"}]]},{"selector":"#pickup-block > .grid","tasks":[["has",{"selector":"iframe[src*=\"/ad-d/\"]"}]]}]}],[1472030519,{"a":[{"selector":"._popIn_infinite_page > a._popIn_recommend_article_ad","tasks":[["upward",1]]}]}],[1745902634,{"a":[{"selector":"center > table[width=\"85%\"]:first-child > tbody > tr > td[align=\"undefined\"] > script[src^=\"//pagead2\"]","tasks":[["upward",1]]}]}],[633536082,{"a":[{"selector":"#irelated > div > ul > div.bds > div.bd_left1[name]","tasks":[["has-text","PR"],["upward",4]]},{"selector":".banner_left1 > script","tasks":[["upward",1]]},{"selector":"tr > td > div[class^=\"text-top-tab1-\"] > div.bd > div.bd_left[name]","tasks":[["has-text","PR"],["upward",4]]}]}],[413948715,{"a":[{"selector":".entry_header > a[href=\"\"]","tasks":[["upward",1]]},{"selector":".entry_text #ninja-blog-inactive","tasks":[["upward",".entry_text"]]},{"selector":".layout_right > .entry_text","tasks":[["has",{"selector":"#ninja-blog-inactive"}],["spath"," + .entry_footer"]]}]}],[270192905,{"a":[{"selector":".widget_diver_widget_pcsp > div > center > script[src$=\"/adstir.js\"]","tasks":[["upward",3]]},{"selector":".widget_diver_widget_pcsp > div > div.adp","tasks":[["upward",2]]}]}],[1184462116,{"a":[{"selector":"body[style=\"position: fixed;\"]","action":["style","position: static !important;"],"cssable":true}]}],[133234537,{"a":[{"selector":".side_banner > #_popIn_recommend_image_right","tasks":[["upward",1]]},{"selector":".single_container > div[class=\"\"]","tasks":[["has-text","【あなたにオススメ記事】"]]}]}],[1034002985,{"a":[{"selector":".widget-post ul.horizontal-list","tasks":[["upward",".widget-post"]]}]}],[1385053357,{"a":[{"selector":".classic-text-widget > ins.adsbygoogle","tasks":[["upward",1]]}]}],[278889201,{"a":[{"selector":".clearfix > p > span[style=\"color: #ff0000;\"]","tasks":[["has-text","3千円プレゼント！"],["upward",1]]},{"selector":".clearfix > p > strong","tasks":[["has-text","↓"]]}]}],[1188493662,{"a":[{"selector":".plugin-memo > div.side > div.google-user-ad-side","tasks":[["upward",2]]}]}],[1298085668,{"a":[{"selector":"body.header_bg_ad.modal-open","action":["style","padding-right: auto !important; overflow: auto!important;"],"cssable":true}]}],[1425673219,{"a":[{"selector":".wp-block-cocoon-blocks-blank-box-1.has-light-blue-border-color","tasks":[["has",{"selector":" > div > div.amazon-item-box"}]]}]}],[261138915,{"a":[{"selector":".custom-html-widget > p > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1064797418,{"a":[{"selector":"#e-zone > h2 a[href=\"\"]","tasks":[["upward","h2"]]},{"selector":".ebody #ninja-blog-inactive","tasks":[["upward",".ebody"]]}]}],[1587674584,{"a":[{"selector":"#entry #ninja-blog-inactive","tasks":[["upward","#entry"]]}]}],[348991844,{"a":[{"selector":".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed","action":["style","bottom: 0 !important;"],"cssable":true}]}],[583267616,{"a":[{"selector":".pg-container-main-primary > section > div.pg-mod > h3.ttl-line-center","tasks":[["has-text","PR"]]}]}],[102801298,{"a":[{"selector":".entryinner #ninja-blog-inactive","tasks":[["upward",".entryinner"]]}]}],[1621398251,{"a":[{"selector":".innerframe > div.whiteboard > div > div.indent > center > div#ad_index_middle","tasks":[["upward",5]]},{"selector":".innerframe > div.whiteboard > div > div.indent > div#ad_index_top","tasks":[["upward",4]]},{"selector":".innerframe > div.whiteboard > div > div.indent > div#ad_kiji_middle","tasks":[["upward",4]]}]}],[1208219073,{"a":[{"selector":".l-contentsSub[style^=\"height\"]","action":["style","height: auto !important;"],"cssable":true}]}],[377843353,{"a":[{"selector":"div[class^=\"word_label\"]","tasks":[["has-text","スポンサーリンク"]]}]}],[682178346,{"a":[{"selector":".text-center > small","tasks":[["has-text","PR"]]}]}],[742116725,{"a":[{"selector":".nbox1-1[style]","tasks":[["has-text","広告"],["upward","tr[bgcolor=\"#fff\"]"]]},{"selector":".news_l","tasks":[["has",{"selector":" > a[href^=\"https://a.r10.to/\"]"}]]},{"selector":"div[class=\"澑掎呵狎ﾞl踪孳湮l\"] > div[style=\"height:334px;width:100%;background:#000;font-size:38px\"]","action":["style","height: auto !important;"],"cssable":true},{"selector":"td > div[class] > ins.adsbygoogle","tasks":[["upward",1]]}]}],[201067822,{"a":[{"selector":".side_inner > .box","tasks":[["has-text","スポンサーリンク"]]}]}],[907101012,{"a":[{"selector":"aside","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]}]}],[741750752,{"a":[{"selector":"#sidebar-inner > div.plugin-memo","tasks":[["has-text","スポンサードリンク"]]}]}],[1173733679,{"a":[{"selector":"#side-r","action":["style","position: static!important;"],"cssable":true}]}],[332171265,{"a":[{"selector":".plugin-memo > div.side > div.adblock","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > div.gdblock","tasks":[["upward",2]]}]}],[243206143,{"a":[{"selector":".linklist > li > a[target=\"_blank\"]","tasks":[["has-text","\\[PR\\]"]]}]}],[799710052,{"a":[{"selector":".footer_content > div.recommend_ads","tasks":[["upward",1]]}]}],[683895809,{"a":[{"selector":".frame > div[style=\"background-color:transparent;\"] > ins.adsbygoogle","tasks":[["upward",2]]}]}],[1969858498,{"a":[{"selector":".ui-wrapper","action":["style","display: block !important;"],"cssable":true}]}],[600950758,{"a":[{"selector":"#subAInner[style]","action":["style","position: static!important;margin-top: auto!important;"],"cssable":true},{"selector":".freespaceArea","tasks":[["has",{"selector":" > a[href^=\"//ck.jp\"][rel=\"nofollow\"]"}]]}]}],[50261418,{"a":[{"selector":"#loading","action":["style","z-index: auto !important;"],"cssable":true}]}],[493396815,{"a":[{"selector":"#adcheck.ads-ad","action":["style","display: block!important;"],"cssable":true}]}],[1181843043,{"a":[{"selector":".block-mobile > div[class^=\"list\"] > script[src^=\"https://cdn-fluct.sh.adingo.jp/\"]","tasks":[["upward",1]]}]}],[1661828227,{"a":[{"selector":"body > #jpWrap > #header","tasks":[["has",{"selector":" > .adsize728"}]]}]}],[695661159,{"a":[{"selector":"#body_footer","tasks":[["has",{"selector":" > a[href^=\"https://www.amazon.co.jp/\"] > img"}]]},{"selector":"#menubar2 > div.atwiki-contents > div > object[id^=\"Player_\"]","tasks":[["upward",3]]},{"selector":"#wikibody > h3[id^=\"id_\"] > span[style=\"font-weight: bold;\"] > center","tasks":[["has-text","広告"],["upward",2]]}]}],[338492918,{"a":[{"selector":".news__item > div.news__item--ad","tasks":[["upward",1]]}]}],[273723374,{"a":[{"selector":".center-xs","tasks":[["has",{"selector":" > div[id^=\"JP_BABY_resp\"]"}]]}]}],[1374447994,{"a":[{"selector":"#tertiary > aside.widget_text","tasks":[["has",{"selector":" > div > a[target=\"_blank\"]"}]]}]}],[2145414614,{"a":[{"selector":".l-sub__block > div.l-sub__bnr > div[id$=\"_Rectangle\"]","tasks":[["upward",2]]}]}],[2032785141,{"a":[{"selector":".plugin-memo > div.side > img[src*=\"a8.net/\"]","tasks":[["upward",2]]}]}],[398662495,{"a":[{"selector":".article-body-inner > div:last-child > div","tasks":[["has",{"selector":" > a[href^=\"https://ck.jp.ap.valuecommerce.com/\"]"}]]}]}],[755468851,{"a":[{"selector":".right-container[style^=\"position: fixed\"]","action":["style","position: static!important;"],"cssable":true}]}]]);

const hostnamesMap = new Map([["jishin-yogen.com",657952746],["jpopblog.com",1048562618],["jpzipblog.com",1048562618],["kabegamikan.com",2071796144],["kakaku.com",421850984],["kakuren-bo.com",1307766850],["kamakurablog.com",582985586],["blog.shinobi.jp",[582985586,1978017791,157656292,1378140559,1587674584]],["kanjitisiki.com",1816549027],["t-mall.kantangame.com",1600871934],["karapaia.com",376167640],["katuru.com",276796582],["kichikuou.com",1590742958],["kidanlog.com",1774951237],["knshow.com",1191726077],["koro-pokemon.com",632466944],["pente.koro-pokemon.com",1944646620],["kumanichi.com",1642723068],["kurofuku.com",658772111],["kuroyonhon.com",111295239],["news.livedoor.com",647098137],["lyrical-nonsense.com",1472157824],["majikichi.com",1354059959],["mangalog.com",1855171071],["matomecup.com",232884200],["medibang.com",890213759],["mhometheater.com",1328405283],["mildch.com",662519234],["mizugigurabia.com",1815570818],["mizuhonokuni2ch.com",589743062],["mmo-fps.com",1978017791],["momoniji.com",1670566232],["mozakin.com",1889447742],["bbs4.mozakin.com",1157630155],["musenboya.com",[1747934602,384092333]],["nan-net.com",795920749],["comic.nan-net.com",1479486364],["nari-kiri.com",157656292],["satsumablog.com",[157656292,1138116834,989005128]],["newmatoan.com",150342829],["newmatosoku.com",689000300],["news-boaters.com",1722942617],["news-postseven.com",31182644],["newsmatomedia.com",291273610],["ni-moe.com",1138116834],["tosalog.com",1138116834],["tsuyushiba.com",1138116834],["wa-syo-ku.com",[1138116834,413948715]],["ya-gasuri.com",1138116834],["animech.net",1138116834],["coslife.net",[1138116834,989005128]],["janken-pon.net",1138116834],["kyotolog.net",1138116834],["news.nifty.com",1238763513],["nijifeti.com",78665576],["nijinchu.com",862231648],["nikkei.com",743453468],["business.nikkei.com",856255345],["woman.nikkei.com",656502885],["xtech.nikkei.com",170064243],["xtrend.nikkei.com",1980941000],["nukeruerodouga.com",1166400512],["onepiece-log.com",645270511],["openloadpro.com",984758808],["jav.direct",984758808],["oreteki-design.com",703471409],["ovninavi.com",111310456],["pazru.com",2079898775],["photo-ac.com",1446337488],["pokemasujikaku.com",307618780],["purelovers.com",1868598208],["qiita.com",2100914040],["raw19.com",1605567501],["rawfree.net",1605567501],["ryorika.com",1378140559],["fukuwarai.net",1378140559],["sakeblog.net",[1378140559,1064797418]],["sankei.com",1349636851],["sankuzushi.com",712115385],["gjgd.net",989005128],["security-next.com",577661416],["seikatsu-hyakka.com",647729023],["sekai-kabuka.com",295126085],["setusoku.com",1031413060],["simtaro.com",342037868],["smartasw.com",324745680],["soco-st.com",1507731862],["souda-kansai.com",1764525574],["furugi1717.net",1764525574],["nilcollection.net",1764525574],["stats-japan.com",181318932],["supercweather.com",745919728],["suzukikenichi.com",172594761],["tabikobo.com",524491234],["tetsudo-ch.com",1668409579],["thedigestweb.com",665083440],["togetter.com",1074516038],["tokai-tv.com",381725255],["toremaga.com",459485660],["uraaka.com",852772945],["uraaka-joshi.com",255573291],["sp.uta-net.com",1472030519],["otonasalone.jp",1472030519],["sumaiweb.jp",1472030519],["utamap.com",1745902634],["viet-jo.com",633536082],["warotanikki.com",270192905],["sp.jp.wazap.com",1184462116],["wws-channel.com",133234537],["xn--icktho51ho02a0dc.com",1034002985],["xn--o9j0bk3kzb8d3ee20ala8a.com",1385053357],["pokemon.gamerstand.net",1385053357],["xn--u9j3iub5080abs7bxbc.com",278889201],["yagov30.com",1188493662],["blog.jp",[1188493662,2032785141]],["doorblog.jp",1188493662],["blog.livedoor.jp",1188493662],["keyakizaka46matomemory.net",1188493662],["yamareco.com",1298085668],["yomogame252.com",1425673219],["yosakoimatsuri.com",261138915],["yotsumeyui.com",[1064797418,1587674584]],["7narabe.net",1064797418],["young-machine.com",348991844],["japan.zdnet.com",583267616],["zoku-sei.com",102801298],["eegg.fun",1621398251],["applica.info",1208219073],["wa3.i-3-i.info",377843353],["npodb.info",682178346],["realtime-chart.info",742116725],["repeat-drama.info",201067822],["smhn.info",907101012],["2chblog.jp",741750752],["news.2chblog.jp",1173733679],["rabitsokuhou.2chblog.jp",332171265],["5chan.jp",243206143],["8mato.jp",799710052],["9db.jp",683895809],["ad-contents.jp",1969858498],["ameblo.jp",600950758],["animedeck.jp",50261418],["applion.jp",493396815],["asajikan.jp",1181843043],["ascii.jp",1661828227],["w.atwiki.jp",695661159],["portal.auone.jp",338492918],["baby-calendar.jp",273723374],["bakufu.jp",1374447994],["bestcarweb.jp",2145414614],["fireflyframer.blog.jp",398662495],["hiraganakeyaki.blog.jp",755468851]]);

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
