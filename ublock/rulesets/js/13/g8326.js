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

const argsMap = new Map([[208276101,{"a":[{"selector":"#more > div[align=\"center\"]","tasks":[["has",{"selector":" > table table a[rel*=\"sponsored\"]"}]]}]}],[549510917,{"a":[{"selector":"._fukugan_grid","action":["style","height: auto!important;"],"cssable":true},{"selector":".plugin-memo > div.side > a[href^=\"https://hb.afl.rakuten.co.jp/\"]","tasks":[["upward",2]]}]}],[819118696,{"a":[{"selector":".plugin-memo","tasks":[["has",{"selector":" > div.side > a[href*=\"dmm.co\"]"}]]},{"selector":".plugin-memo","tasks":[["has",{"selector":" > div.side > a[href*=\"www.dlsite\"]"}]]}]}],[1699937656,{"a":[{"selector":".entry-content > div#a8rakutenadrank_pc","tasks":[["upward",1]]}]}],[359559742,{"a":[{"selector":".ccn-article-info li","tasks":[["has-text","【PR】"]]}]}],[83633201,{"a":[{"selector":"#Center > div.partsHeading","tasks":[["has-text","インタレスト"]]},{"selector":".homeRightTable > div.parts > div.partsBanner","tasks":[["upward",2]]}]}],[34782112,{"a":[{"selector":".advertisement2[style=\"clear: both;\"]","tasks":[["has",{"selector":" + div.block-block"}]]}]}],[795893154,{"a":[{"selector":".pg-container-side div.cb-l1-m2 > div.cb > .OUTBRAIN","tasks":[["upward",2]]},{"selector":".pg-container-side div.cb-l1-m2","tasks":[["has",{"selector":"div.bnr-rect"}]]}]}],[1237223319,{"a":[{"selector":"._popIn_recommend_container a._popIn_recommend_article_ad","tasks":[["upward","._popIn_recommend_container"]]},{"selector":".is-fixed.secondaryContents","action":["style","position: static!important;margin-left: auto!important;"],"cssable":true}]}],[822574940,{"a":[{"selector":".hustle-no-scroll","action":["style","overflow: auto !important;"],"cssable":true}]}],[1887562469,{"a":[{"selector":".article > div[style=\"padding: 8px 0; font-weight: bold;\"]","tasks":[["has-text","編集部おすすめ"]]},{"selector":"headline > ul > li > a.pr","tasks":[["upward",1]]}]}],[1194848260,{"a":[{"selector":"#video_container > div[style*=\"position: absolute; overflow: hidden;\"]","tasks":[["has",{"selector":" > img[src=\"/plus7/web/imgs/animation_spinner.gif\"]"}]]}]}],[652199696,{"a":[{"selector":"#cmsBody > div.inner > p:last-of-type","tasks":[["has",{"selector":" > * > a[href^=\"https://twitter.com/\"][target=\"_blank\"]"}],["has-text","作品提供"],["spath"," ~ div.cmsAmazonWrap"]]}]}],[1134035108,{"a":[{"selector":".article-list > li > script[src^=\"//yads.\"]","tasks":[["upward",1]]},{"selector":"li[id^=\"top-news-article-\"] > a.article-ad","tasks":[["upward",1]]}]}],[439028890,{"a":[{"selector":".block_ad > div.img_ad > div#adbnr-s > ins.adsbygoogle","tasks":[["upward",3]]}]}],[652645046,{"a":[{"selector":".top-articles > div[id^=\"div-gpt-\"]","tasks":[["upward",1]]}]}],[947468422,{"a":[{"selector":".ad_common_1_970x250","action":["style","min-height: 0 !important;"],"cssable":true}]}],[90311242,{"a":[{"selector":".banner > #knpc-rec1","tasks":[["upward",1]]}]}],[2059224000,{"a":[{"selector":"body #sb3","tasks":[["has-text","\\[PR\\]"]]}]}],[2052975121,{"a":[{"selector":"body","action":["style","overflow: visible !important;"],"cssable":true}]}],[1666030913,{"a":[{"selector":"#Main > div > div.OUTBRAIN","tasks":[["upward",1]]},{"selector":"#result_nav","action":["style","bottom: 0 !important;"],"cssable":true}]}],[2047465360,{"a":[{"selector":".-info","tasks":[["has",{"selector":" > li > div[id^=\"div-gpt-\"]"}]]},{"selector":".dag_aside_pickup","tasks":[["upward",1]]}]}],[767379924,{"a":[{"selector":".l-section-side h2.c-heading-side-h2--otherStyle__text","tasks":[["upward",".l-section-side"]]}]}],[1939788079,{"a":[{"selector":"#content-side > table div[id*=\"Rak_Blog_User_SideBanner\"]","tasks":[["upward","table"]]}]}],[801442903,{"a":[{"selector":".side-box > div[id^=\"rdn-adspot\"]","tasks":[["upward",1]]}]}],[482021369,{"a":[{"selector":".c-content-main > h2:not([data-bg-pattern])","tasks":[["has-text","こちらもおすすめ"]]}]}],[1093565180,{"a":[{"selector":".mb30 > h2","tasks":[["has-text","スペシャルコンテンツ"]]},{"selector":".mb30","tasks":[["has",{"selector":" > div > script[src*=\"rakuten\"]"}]]}]}],[1521711239,{"a":[{"selector":".hsNormal > div.bJava","tasks":[["upward",1]]}]}],[1934826126,{"a":[{"selector":".s-ad","action":["style","height: 1px !important;"],"cssable":true}]}],[977470142,{"a":[{"selector":"#common-header > div[class^=\"common-header-pc-\"]","action":["style","padding-top: 0 !important;"],"cssable":true}]}],[2088411572,{"a":[{"selector":"div[data-test-id=\"TeaserFourUpCol\"] > div > div[id^=\"ad-\"]","tasks":[["upward",2]]}]}],[1402800565,{"a":[{"selector":"div[class^=\"LayoutContentInner-sc\"] > div[class^=\"Promotion-sc\"]","action":["style","grid-template-columns: 1fr 0 !important;"],"cssable":true},{"selector":"div[class^=\"LayoutMain-sc\"] > aside[class^=\"Component-sc\"]","tasks":[["has",{"selector":" > div[id^=\"adS\"]"}]]},{"selector":"div[class^=\"LayoutMain-sc\"] > section[class^=\"Component-sc\"]:last-of-type","tasks":[["has",{"selector":" > div[id^=\"adS\"]"}]]}]}],[643297400,{"a":[{"selector":".SS__list","tasks":[["has",{"selector":"span.Badge--ad"}]]}]}],[1826704379,{"a":[{"selector":"#yjSub > div.cmnBnr > div#ydn-mr","tasks":[["upward",1]]},{"selector":"#yjSub > div.nav > div[id^=\"ydn-right-\"]","tasks":[["upward",1]]}]}],[1167804302,{"a":[{"selector":"#lsc div[class^=\"ClapLv3SearchList_Chie-SearchList__Item__\"]","tasks":[["has",{"selector":" > div > div[class*=\"__Information__\"] > div[class*=\"__InformationIcon__\"] > div[class*=\"__InformationText__\"]","tasks":[["has-text","広告"]]}]]}]}],[363347645,{"a":[{"selector":"aside[class^=\"ClapLv3SubList_Chie-SubList__ListItem__\"] > div.infdAd","tasks":[["upward",1]]}]}],[616975724,{"a":[{"selector":"#contents + div > div > div > div[class]","tasks":[["has",{"selector":" > div > div[id^=\"ad_\"]"}],["matches-css",{"name":"padding-right","value":"^12px$"}]]},{"selector":"#contents + div > div[class^=\"wP-\"]","tasks":[["has",{"selector":" > div[class]:only-child > div[id^=\"ad_\"]"}],["matches-css",{"name":"width","value":"^300px$"}]]},{"selector":"#contents > div[class^=\"_\"] > div[class^=\"_\"] > div[class*=\"_\"]","tasks":[["matches-css",{"name":"min-height","value":"^250px$"}]]},{"selector":"div > #mainAdTop","tasks":[["upward",1]]},{"selector":"div > div > div[class^=\"_\"] > div[class] > div[class*=\"_\"] > div[class]","tasks":[["has",{"selector":" > div[id^=\"ad_\"]"}],["matches-css",{"name":"min-height","value":"217px|42px"}]]},{"selector":"div > div[class] > div[class*=\"_\"] > div[class]","tasks":[["has",{"selector":" > div[id^=\"ad_\"]"}],["matches-css",{"name":"min-height","value":"^200px$"}]]},{"selector":"div > div[class^=\"wP-\"] div[class]","tasks":[["matches-css",{"name":"min-height","value":"^250px$"}]]}]}],[89827268,{"a":[{"selector":"#tagYadsDetail","tasks":[["upward",1]]},{"selector":"#tagYadsListTop","tasks":[["upward",1]]},{"selector":"#tagYadsSideColumn","tasks":[["upward",1]]},{"selector":"body.withsky div#shellcontent[style]","action":["style","right: 0 !important;"],"cssable":true}]}],[2100415334,{"a":[{"selector":"#ydn-bot","action":["style","visibility: hidden !important; height: 0 !important;"],"cssable":true}]}],[1218126897,{"a":[{"selector":".p-article-reading-recommend-list-item > article > div[id^=\"ad_dfp\"]","tasks":[["upward",2]]}]}],[41147392,{"a":[{"selector":".wp-caption-text","tasks":[["has-text","※楽天ブックスにリンクします"]]}]}],[759304839,{"a":[{"selector":".relation-block > div.OUTBRAIN","tasks":[["upward",1]]}]}],[315567765,{"a":[{"selector":".p-10px > div.OUTBRAIN","tasks":[["upward",1]]},{"selector":".sidebar-items > header.story-card-header.large","tasks":[["has-text","zakスペシャル"]]}]}],[2146216527,{"a":[{"selector":".homelist-in[style^=\"text-align:center;height:\"]","action":["remove",""]}]}],[318815788,{"a":[{"selector":".latestnewstable2014[height^=\"1\"]","action":["style","height: auto!important;"],"cssable":true}]}],[1846595394,{"a":[{"selector":".p-widget-list__item > div[id^=\"div-gpt-\"]","action":["remove",""],"tasks":[["upward",1]]}]}],[110054886,{"a":[{"selector":".block-block ins[data-revive-zoneid]","tasks":[["upward",".block-block"]]}]}],[2025856911,{"a":[{"selector":".article center > div#SPREAD_VIDEO_PLAYER","tasks":[["upward",".article"]]},{"selector":".blogbody center > div#SPREAD_VIDEO_PLAYER","tasks":[["upward",".blogbody"]]}]}],[582338886,{"a":[{"selector":".style_table > tbody > tr > td.style_td > div[class*=\"Rect\"][style^=\"margin:\"]","tasks":[["upward","tr"]]}]}],[1992925286,{"a":[{"selector":".c-box-ad","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"a[href$=\"/recruit1/\"]"}]]}]]}]}],[1561865550,{"a":[{"selector":".plugin1_outline > div > div.plugin-freearea > center > a[href=\"https://shadowverse-evolve.com/\"]","tasks":[["upward",4]]}]}],[1846183680,{"a":[{"selector":".l-sidebar > .widget","tasks":[["has",{"selector":" > .textwidget > p > .adsbygoogle"}]]}]}],[1809032647,{"a":[{"selector":"div[class^=\"side_1cbox_\"] > div[class^=\"amazon_sbox\"]","tasks":[["upward",1]]}]}],[275970053,{"a":[{"selector":".plugin-memo > div.side > div[id^=\"i2i\"]","tasks":[["upward",2]]}]}],[341849009,{"a":[{"selector":".l-sidebar-b[style^=\"position: fixed\"]","action":["style","position: static!important;"],"cssable":true}]}],[579029272,{"a":[{"selector":"blockquote","tasks":[["has",{"selector":"a[href^=\"https://www.amazon.co.\"]"}]]}]}],[646900382,{"a":[{"selector":"#sidebar > div.plugin-memo","tasks":[["has",{"selector":" > div.sidetitlebody > div.sidetitle","tasks":[["has-text","ad"]]}]]}]}],[822203599,{"a":[{"selector":"#adnone","action":["style","height: auto!important;"],"cssable":true}]}],[931568829,{"a":[{"selector":".plugin_right > div > div.plugin-freearea > a[rel$=\"sponsored\"]","tasks":[["upward",3]]}]}],[188418462,{"a":[{"selector":".bnr-s_2 > div[id^=\"div-gpt-ad\"]","tasks":[["upward",1]]}]}],[409084175,{"a":[{"selector":"#sidebar1 > div.widget_text","tasks":[["has",{"selector":" > div > div.center > a[target=\"_blank\"]"}]]}]}],[1711399887,{"a":[{"selector":"li > div.related-ad > ins.adsbygoogle","tasks":[["upward",2]]}]}],[1952372716,{"a":[{"selector":".pum-open","action":["style","overflow: auto !important;"],"cssable":true}]}],[751548969,{"a":[{"selector":".cMovieboxC > div.cPabox.babg","tasks":[["upward",1]]}]}],[1083866363,{"a":[{"selector":".bg--deep a[class*=\"gtm-ad\"]","tasks":[["upward",".bg--deep"]]}]}],[637718163,{"a":[{"selector":".adBillBoardPC","action":["style","min-height: 0!important"],"cssable":true}]}],[516792661,{"a":[{"selector":"#stage","action":["style","max-height: 100% !important;"],"cssable":true}]}],[123966955,{"a":[{"selector":"#amzn-ranking-zone-title","tasks":[["has-text","Amazon売り上げランキング"]]},{"selector":".widget_catbox_widget.post-widgets-bottom > div > div.amzn-tabs-container","tasks":[["upward",1]]}]}],[678589887,{"a":[{"selector":".l-sidebar-ads > li","tasks":[["if-not"," > a[href^=\"https://full-count.jp\"]"]]}]}],[742289240,{"a":[{"selector":".box_top > div.box_btm > ul.bukken-list","tasks":[["upward",2]]},{"selector":".box_top > div.box_btm > ul.realestate-list","tasks":[["upward",2]]},{"selector":".box_top > div.box_btm > ul.recipe-side-img-area","tasks":[["upward",2]]},{"selector":".mdl-card > div > ul.bukken-list","tasks":[["upward",2]]},{"selector":".mdl-card > div > ul.realestate-list","tasks":[["upward",2]]}]}],[1214925424,{"a":[{"selector":"div > div[style=\"text-align:center;\"] > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1057648294,{"a":[{"selector":"#taboola-below-article-thumbnails-pcxrr","tasks":[["upward",1]]}]}],[1036480234,{"a":[{"selector":".l-generalContent-secondary[style=\"position: unset;\"]","action":["style","position: sticky!important;"],"cssable":true}]}],[1492437695,{"a":[{"selector":".csw-content-box:not(.ise-ad) > div.csw-content-footer:not(.csw-off) > span.csw-ad-icon","tasks":[["has-text","PR"],["upward",2]]}]}],[919837414,{"a":[{"selector":".mainbody > h2","tasks":[["has-text","おすすめ関連記事"]]}]}],[1179976413,{"a":[{"selector":".hatena-module-html > div.hatena-module-body > ins.adsbygoogle","tasks":[["upward",2]]}]}],[636242682,{"a":[{"selector":".hatena-module-html > div.hatena-module-body > a[href*=\"//hb.afl.rakuten.co.jp/hsc/\"]","tasks":[["upward",2]]},{"selector":".hatena-module-html > div.hatena-module-body > a[href^=\"https://adf.shinobi.jp/\"]","tasks":[["upward",2]]},{"selector":".hatena-module-html > div.hatena-module-body > a[href^=\"https://click.linksynergy.com\"]","tasks":[["upward",2]]},{"selector":".hatena-module-html > div.hatena-module-body > script[src^=\"//adm.shinobi.jp/\"]","tasks":[["upward",2]]},{"selector":".hatena-module-html > div.hatena-module-body > script[src^=\"//z-fe.amazon-adsystem.com/\"]","tasks":[["upward",2]]}]}],[1581430039,{"a":[{"selector":"#box2-inner > div.hatena-module","tasks":[["has",{"selector":" > div.hatena-module-title","tasks":[["has-text","\\[AD\\]"]]}]]}]}],[771872943,{"a":[{"selector":".l-section > div.u-alignCenter > ins.adsbygoogle","tasks":[["upward",2]]}]}],[36369453,{"a":[{"selector":".ng-isolate-scope > li.ng-scope ins.adsbygoogle","tasks":[["upward","li"]]}]}],[2030757600,{"a":[{"selector":"#side > div.sidewrapper","tasks":[["has",{"selector":" > div.sidetitle","tasks":[["has-text","★スポンサー"]]}]]},{"selector":"#wrap .entrybox","tasks":[["has-text","(?:【スポンサー】|【PR】)"]]}]}],[1672367102,{"a":[{"selector":".full_screen_ad","action":["remove",""]}]}],[393994034,{"a":[{"selector":"div[class^=\"pr_list_contentsbox\"] > a > div > img[src^=\"https://ibarakinews.jp/images/common/PR_\"]","tasks":[["upward",3]]}]}],[1663356772,{"a":[{"selector":".brick:last-child","tasks":[["has",{"selector":" > div.items-scrolling > ul.items-goods > li > p > a.ga-buy"}]]}]}],[1903858347,{"a":[{"selector":".--wid.m-article-3colm:last-child","tasks":[["has",{"selector":" > div.m-article-3colm-list > div.ad-block"}]]},{"selector":".m-article-colm-list > div#recommend_pc","tasks":[["upward",1]]}]}],[682158686,{"a":[{"selector":".column-inner-2 > div.plugin-memo","tasks":[["has",{"selector":" > div.sidetitlebody > div.sidetitle","tasks":[["has-text","Amazon"]]}]]}]}],[603883416,{"a":[{"selector":"#entry .entry_title","tasks":[["has-text","スポンサーサイト"],["upward","#entry"]]},{"selector":".entry .entry_title","tasks":[["has-text","スポンサーサイト"],["upward",".entry"]]},{"selector":".entry > h2","tasks":[["has-text","スポンサーサイト"],["upward",1]]},{"selector":".entry","tasks":[["has",{"selector":"#gInactiveAdContainer"}]]},{"selector":".entry_area > h2","tasks":[["has-text","スポンサーサイト"],["upward",1]]},{"selector":".side_content > dl div#jgSideAdContainer","tasks":[["upward","dl"]]}]}],[1175834964,{"a":[{"selector":"#breadcrumb","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[940084346,{"a":[{"selector":"#acrank_top td[id^=\"div-gpt-\"]","tasks":[["upward",1]]}]}],[1646116842,{"a":[{"selector":"#recommendations > li > div[class^=\"ad\"]","tasks":[["upward",1]]}]}],[1234107231,{"a":[{"selector":".search > span.url > a.pr","tasks":[["upward",2]]},{"selector":".slider > div[id^=\"div-gpt-\"]","tasks":[["upward",1]]}]}],[1739097696,{"a":[{"selector":".ad-bnr","tasks":[["upward",1]]}]}],[677091850,{"a":[{"selector":".swiper-slide[data-history^=\"photo_extra\"]","action":["remove",""]}]}],[1850171049,{"a":[{"selector":".plugin-memo","tasks":[["has",{"selector":" > div.side > div > iframe[src^=\"//rcm-fe.amazon-adsystem.com/\"]"}]]}]}],[1566722515,{"a":[{"selector":".plugin-memo > div.side > div.osusume-side","tasks":[["upward",2]]}]}],[1971822070,{"a":[{"selector":".post > subheading.point","tasks":[["has-text","あわてて読みたい"]]}]}],[1009587471,{"a":[{"selector":".container05 > div.t_kokoku_title","tasks":[["upward",1]]}]}],[1504910576,{"a":[{"selector":".post > div.pc_display > div[id^=\"logly\"]","tasks":[["upward",1]]}]}],[1579776265,{"a":[{"selector":"div[class^=\"recommendArticles_pRecommend_\"] > div#cxMorePc","tasks":[["upward",1]]}]}],[1067451076,{"a":[{"selector":"","action":["style","position: static!important;"],"tasks":[["matches-path","/goldennews"],["spath","#side-column[style^=\"position: fixed\"]"]]},{"selector":"#aside > div#fix_sidewrapper > div.sidewrapper","tasks":[["has",{"selector":"script[src*=\"i-mobile\"]"}]]},{"selector":"#aside > div.plugin-memo > div.sidetitlebody > div.sidetitle","tasks":[["has-text","3日間集計逆アクセス"]]},{"selector":"#left_wrapper > div.area01 > p[style=\"”font-size:5pt;\"] + center","tasks":[["has-text","スポンサードリンク"]]},{"selector":".article-body-more > div[align=\"center\"] > a[href^=\"https://www.sokmil.com/av/_item/\"]","tasks":[["upward",1]]},{"selector":".article-outer-3 > div.article-option > h3 + div[style=\"text-align:center; margin-top:10px;\"] > script[type]","tasks":[["upward",2]]},{"selector":".left-column-inner > div.plugin-memo","tasks":[["has",{"selector":" > div.side > ins.widget-banner"}]]},{"selector":".left-container > div.plugin-memo","tasks":[["has",{"selector":" > div.side > div.amakuri-undertext"}]]},{"selector":".plugin-memo > .side > a[href^=\"https://adf.shinobi.jp/\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > .side > a[href^=\"https://www.infocart.jp/\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > .side > a[href^=\"https://www.infotop.jp/click\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > a[href^=\"http://550909.com/\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > a[href^=\"https://affiliate.suruga-ya.jp\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > center > script[src$=\"ziyu.net/js/dqnplus.js\"]","tasks":[["upward",3]]},{"selector":".plugin-memo > div.side > div.ad-center","action":["style","visibility: hidden!important;height: 0!important;"],"tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > div.gad-fixed","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > div.yms-user-ad-side","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > p.gad","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > script[src*=\"//adm.shinobi.jp/\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > script[src*=\"i-mobile.co.jp/\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > script[src^=\"//j.microad.net/\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > script[src^=\"//z-fe.\"]","tasks":[["upward",2]]},{"selector":".plugin-memo > div.side > script[src^=\"https://i-section\"]","tasks":[["upward",2]]},{"selector":".plugin-memo","tasks":[["has",{"selector":" > div.side > a[href*=\"amazon.co.jp\"]"}]]},{"selector":".right > div.plugin-memo > div.side > p:last-of-type > a[href*=\"amazon.\"]:first-of-type","tasks":[["upward",".plugin-memo"]]},{"selector":"font > #links_left > div.plugin-memo","tasks":[["has",{"selector":"a[href^=\"https://al.dmm.co.jp/\"]"}]]}]}],[490444431,{"a":[{"selector":".post-block > div#taboola-below-article-thumbnails","tasks":[["upward",1]]}]}],[13643080,{"a":[{"selector":".swiper-slide-extra","action":["remove",""]}]}],[744562223,{"a":[{"selector":".module-list-articles__item[style=\"padding:0px\"]","action":["remove",""]}]}],[546530735,{"a":[{"selector":".ads_native","action":["style","visibility: hidden !important;margin: 0 !important;"],"cssable":true}]}],[1799065326,{"a":[{"selector":".featurelist > li > div[id^=\"ad-\"]","tasks":[["upward",1]]},{"selector":".is-2col.articlelist > li > div[id^=\"ad-pc-article\"]","action":["remove",""],"tasks":[["upward",1]]},{"selector":"section[id^=\"oblist\"] > div.OUTBRAIN","tasks":[["upward",1]]}]}],[390023707,{"a":[{"selector":".contents_ad01","tasks":[["upward",1]]}]}],[1780870276,{"a":[{"selector":".l-sidebar_inner > div.c-secondarysection","tasks":[["has",{"selector":" > div.c-secondarysection_header > p.c-secondarysection_heading","tasks":[["has-text","スポンサーサイト"]]}]]}]}],[815076421,{"a":[{"selector":"#col_content > div.footer_content","tasks":[["has",{"selector":" > div.ads"}]]}]}],[1584739518,{"a":[{"selector":".common-wrap > div.OUTBRAIN","tasks":[["upward",1]]}]}],[1662354174,{"a":[{"selector":".c-glo-section > div[id^=\"logly\"]","tasks":[["upward",1]]}]}],[1150093229,{"a":[{"selector":".ly_content_wrapper","action":["style","margin-bottom: 0!important;"],"cssable":true}]}],[873278150,{"a":[{"selector":".ads970","action":["style","height: 0 !important; min-height: 0 !important;"],"cssable":true}]}],[2073550608,{"a":[{"selector":"li.mb10","tasks":[["has",{"selector":"script.optanon-category-ad"}]]}]}],[1268151743,{"a":[{"selector":".list-object__item > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1908183548,{"a":[{"selector":".articleList-attention[style^=\"min-height\"]","action":["style","min-height: auto !important;"],"cssable":true}]}],[433947773,{"a":[{"selector":".l-main > .p-aside-section","tasks":[["has",{"selector":" > div > div > div > div[id^=\"div-gpt-\"]"}]]},{"selector":".p-aside-section > div[id^=\"div-gpt-ad-\"]","tasks":[["upward",1]]}]}],[1999386553,{"a":[{"selector":".newPostWrap_item > div[id^=\"div-M_MD_gtx_\"]","tasks":[["upward",1]]}]}],[1844547891,{"a":[{"selector":"#new_article_alltop > li > div[id^=\"logly\"]","tasks":[["upward",1]]}]}],[1286546530,{"a":[{"selector":"section > a[href^=\"https://hb.afl.\"][onclick]","tasks":[["upward",1]]}]}],[802916597,{"a":[{"selector":".indexContents > div.indexContentsright","tasks":[["has",{"selector":" > div#googleadd"}]]}]}],[622983053,{"a":[{"selector":"#header","action":["style","height:60px!important;"],"cssable":true}]}],[94800164,{"a":[{"selector":".list_base_nom > li > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1722587824,{"a":[{"selector":".adBillboard_pc","action":["style","height: 0 !important; min-height: 0 !important; margin-bottom: 0 !important;"],"cssable":true}]}],[1375593626,{"a":[{"selector":"#NR-sub-in > aside > div.module-frame > div.areamatch","tasks":[["upward",1]]}]}],[482990007,{"a":[{"selector":"#mod-freearea-main","tasks":[["has",{"selector":"[id^=\"gooad-\"]"}]]}]}],[1916771592,{"a":[{"selector":".event-cards__item > a.event-card--banner","tasks":[["upward",1]]}]}],[88880489,{"a":[{"selector":".articlePhotoList_articleNormal > a[data-osccid^=\"recommend_qa_ad\"] > div.img_crown","tasks":[["upward",2]]}]}],[1908985997,{"a":[{"selector":"div[class^=\"sc-\"]:only-child > div:first-child > div[id^=\"rectangle_main_\"]","tasks":[["upward",2]]}]}],[269718062,{"a":[{"selector":".sideFixedWrapper > div[class^=\"undefined\"]","tasks":[["has",{"selector":"[class^=\"undefined\"]"}]]},{"selector":".simple-header","tasks":[["has-text","izaスペシャル|あなたにオススメ"]]}]}],[94491762,{"a":[{"selector":".c-section__title--ranking","tasks":[["has-text","あなたにおすすめ"]]}]}],[916405713,{"a":[{"selector":"#area01 > div.access > script[src$=\"/show_ads.js\"]","tasks":[["upward",2]]},{"selector":"#sidebar-in2 > div.contents > ins.adsbygoogle","tasks":[["upward",1]]},{"selector":"#sidebar-in2 > h3","tasks":[["has-text","広告|PAKUTASO"]]}]}]]);

const hostnamesMap = new Map([["mfujin.blog.jp",208276101],["sunri2525.blog.jp",549510917],["blogo.jp",819118696],["buzzap.jp",1699937656],["news.careerconnection.jp",359559742],["chixi.jp",83633201],["chibanippo.co.jp",34782112],["cnn.co.jp",795893154],["daily.co.jp",1237223319],["eguchi-hd.co.jp",822574940],["excite.co.jp",1887562469],["fod.fujitv.co.jp",1194848260],["nlab.itmedia.co.jp",652199696],["iwate-np.co.jp",1134035108],["j-wave.co.jp",439028890],["jomo-news.co.jp",652645046],["news.jorudan.co.jp",947468422],["kobe-np.co.jp",90311242],["kochinews.co.jp",2059224000],["friday.kodansha.co.jp",2052975121],["mapion.co.jp",1666030913],["nfm.nikkeibp.co.jp",2047465360],["nishinippon.co.jp",767379924],["plaza.rakuten.co.jp",1939788079],["pointmall.rakuten.co.jp",801442903],["sagatv.co.jp",482021369],["sponichi.co.jp",1093565180],["mangalifewin.takeshobo.co.jp",1521711239],["teny.co.jp",1934826126],["tv-asahi.co.jp",977470142],["vogue.co.jp",2088411572],["auctions.yahoo.co.jp",1402800565],["beta-map.yahoo.co.jp",643297400],["map.yahoo.co.jp",643297400],["carview.yahoo.co.jp",1826704379],["chiebukuro.yahoo.co.jp",1167804302],["detail.chiebukuro.yahoo.co.jp",363347645],["finance.yahoo.co.jp",616975724],["mail.yahoo.co.jp",89827268],["weather.yahoo.co.jp",2100415334],["yomiuri.co.jp",1218126897],["otekomachi.yomiuri.co.jp",41147392],["ytv.co.jp",759304839],["zakzak.co.jp",315567765],["coinpost.jp",2146216527],["cosp.jp",318815788],["curet.jp",1846595394],["cyclowired.jp",110054886],["da-te.jp",2025856911],["game-i.daa.jp",582338886],["dailyshincho.jp",1992925286],["deneblog.jp",1561865550],["live.doneru.jp",1846183680],["doope.jp",1809032647],["doorblog.jp",275970053],["duellinks.doorblog.jp",341849009],["kabumatome.doorblog.jp",579029272],["otakumix.doorblog.jp",646900382],["shikaku2ch.doorblog.jp",822203599],["doujinonsei.jp",931568829],["news.dwango.jp",188418462],["englishhub.jp",409084175],["enuchi.jp",1711399887],["ero-gazou.jp",1952372716],["erozon.jp",751548969],["esportsnewsjapan.jp",1083866363],["figgy.jp",637718163],["firecross.jp",516792661],["fukafuka295.jp",123966955],["full-count.jp",678589887],["gaccom.jp",742289240],["gamedbs.jp",1214925424],["gameranbu.jp",1057648294],["gizmodo.jp",1036480234],["grapee.jp",1492437695],["hochi.news",1492437695],["h1g.jp",919837414],["hateblo.jp",[1179976413,636242682]],["kkamegawa.hatenablog.jp",1179976413],["momiage.work",1179976413],["taxtax.hatenablog.jp",1581430039],["heim.jp",771872943],["hibiki-radio.jp",36369453],["hosyusokuhou.jp",2030757600],["hotokami.jp",1672367102],["ibarakinews.jp",393994034],["ikaclo.jp",1663356772],["jbpress.ismedia.jp",1903858347],["jisakuhibi.jp",682158686],["jugem.jp",603883416],["k-knuckles.jp",1175834964],["kabutan.jp",940084346],["kanaloco.jp",1646116842],["home.kingsoft.jp",1234107231],["kurukura.jp",1739097696],["kuruma-news.jp",677091850],["trafficnews.jp",677091850],["dq-10.ldblog.jp",1850171049],["hattatu-matome.ldblog.jp",1566722515],["leaked.jp",1971822070],["city.niigata.lg.jp",1009587471],["libae.jp",1504910576],["lifehacker.jp",1579776265],["blog.livedoor.jp",1067451076],["lnews.jp",490444431],["magmix.jp",13643080],["maidonanews.jp",744562223],["hrs-game.main.jp",546530735],["main-hrs-game.ssl-lolipop.jp",546530735],["mainichi.jp",1799065326],["manga100ka.jp",390023707],["markezine.jp",1780870276],["matomame.jp",815076421],["mbs.jp",1584739518],["medicalnote.jp",1662354174],["minkabu.jp",1150093229],["minpo.jp",873278150],["mondotv.jp",2073550608],["moviecollection.jp",1268151743],["news.mynavi.jp",1908183548],["woman.mynavi.jp",433947773],["39.benesse.ne.jp",1999386553],["st.benesse.ne.jp",1844547891],["biglobe.ne.jp",1286546530],["game.biglobe.ne.jp",802916597],["weather.biglobe.ne.jp",622983053],["free.foto.ne.jp",94800164],["gamer.ne.jp",1722587824],["onlinegamer.jp",1722587824],["goo.ne.jp",1375593626],["blog.goo.ne.jp",482990007],["map.goo.ne.jp",1916771592],["oshiete.goo.ne.jp",88880489],["d.hatena.ne.jp",1908985997],["iza.ne.jp",269718062],["news.merumo.ne.jp",94491762],["www2.odn.ne.jp",916405713]]);

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
