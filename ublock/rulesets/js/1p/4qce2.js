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

const argsMap = new Map([[21829767,{"a":[{"selector":"#ad","action":["style","height: 1px !important;"],"cssable":true}]}],[1743153763,{"a":[{"selector":"p span#RealtimeClockArea2","tasks":[["upward","p"]]}]}],[1851194595,{"a":[{"selector":".plugin-memo > div.side > script[src*=\"i-mobile\"]","tasks":[["upward",2]]}]}],[491508668,{"a":[{"selector":"#extra div.plugin-memo > div.side > div[id]","tasks":[["upward",".plugin-memo"]]},{"selector":"#extra div.plugin-memo script[src*=\"i-mobile.co.jp/\"]","tasks":[["upward",".plugin-memo"]]},{"selector":"#extra div.plugin-memo script[src^=\"https://js.gsspcln.jp/\"]","tasks":[["upward",".plugin-memo"]]}]}],[1286387862,{"a":[{"selector":".plugin-memo","tasks":[["has",{"selector":" > div.side > a[href*=\"amazon.co.jp/\"]"}]]}]}],[74994519,{"a":[{"selector":".plugin-memo > div.side > div[class^=\"alistcloud-\"]","tasks":[["upward",2]]}]}],[2016886856,{"a":[{"selector":"aside.section-box","tasks":[["has",{"selector":" > div.plugin-ad"}]]}]}],[452921692,{"a":[{"selector":".entry-content > p + h2","tasks":[["has-text","【PR】"]]}]}],[1967359862,{"a":[{"selector":"div[class*=\"column-inner\"] > div.plugin-memo","tasks":[["has",{"selector":" > div.sidetitlebody > div.sidetitle","tasks":[["has-text","スポンサードリンク"]]}]]}]}],[1137087914,{"a":[{"selector":"#playertopads","action":["style","height: 51px!important; position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1204655186,{"a":[{"selector":".blogbody .aposted[href=\"\"]","tasks":[["upward",".blogbody"]]}]}],[1472485480,{"a":[{"selector":".blogbody > a[name=\"\"]","tasks":[["upward",1]]}]}],[1149038717,{"a":[{"selector":"body","action":["style","overflow: auto !important;"],"cssable":true}]}],[1409387636,{"a":[{"selector":"li > div[style=\"height:250px;\"]","tasks":[["upward",1]]}]}],[2015911133,{"a":[{"selector":".module--free ins.adsbygoogle","tasks":[["upward",".module--free"]]}]}],[996965880,{"a":[{"selector":".entryList > li #ninja-blog-inactive","tasks":[["upward","li"]]}]}],[2021625491,{"a":[{"selector":".my-2","tasks":[["not",{"selector":"","tasks":[["has",{"selector":" > div.card"}]]}]]}]}],[753906339,{"a":[{"selector":".entry-block #ninja-blog-inactive","tasks":[["upward",".entry-block"]]}]}],[760216889,{"a":[{"selector":".entry[data-type=\"space\"] script[src^=\"https://img.ad-nex\"]","tasks":[["upward",".entry"]]}]}],[934256618,{"a":[{"selector":".ac-mb-3.text-center > div[id^=\"div-gpt-ad-side\"]","tasks":[["upward",1]]},{"selector":".ac-p-2.bg-e6e6e6.donation-box-right","tasks":[["has",{"selector":" > .ad-center"}]]}]}],[376266460,{"a":[{"selector":".plugin-memo > div.side > a > img[src*=\"dmm.com/af/\"]","tasks":[["upward",3]]},{"selector":".plugin-memo > div.side > script[src*=\"amazon-adsystem.com/\"]","tasks":[["upward",2]]},{"selector":"blockquote","tasks":[["has",{"selector":" > .amazon"}]]}]}],[2046467138,{"a":[{"selector":".plugin-memo > div.side > ins.adsbygoogle","tasks":[["upward",2]]}]}],[2058016117,{"a":[{"selector":".indArticleFrame > div.goodsBox","tasks":[["upward",1]]}]}],[1139849596,{"a":[{"selector":"._popIn_infinite_page > li","tasks":[["has",{"selector":" > a[class*=\"_popIn_recommend_article_ad\"]"}]]}]}],[873303175,{"a":[{"selector":"table[width=\"95%\"][bgcolor=\"#CCFFCC\"] div[align=\"center\"] > iframe[src*=\"mmaaxx.com\"]","tasks":[["upward","table[width=\"95%\"]"]]},{"selector":"table[width=\"95%\"][bgcolor=\"#EFEFEF\"] div[align=\"center\"] > iframe[src*=\"/koukoku_\"]","tasks":[["upward","table[width=\"95%\"]"]]},{"selector":"table[width=\"95%\"][bgcolor=\"#EFEFEF\"] td[colspan=\"3\"] > iframe[src*=\"/koukoku_\"]","tasks":[["upward","table[width=\"95%\"]"]]}]}],[1331193302,{"a":[{"selector":"div[class^=\"article-body\"] > blockquote","tasks":[["has",{"selector":" > div[align=\"center\"] > a[href*=\"amazon.co.jp\"]"}]]}]}],[721428261,{"a":[{"selector":".sidewrapper.widget_text > .sidebody > .textwidget > div[id] > script","tasks":[["upward",4]]}]}],[323710956,{"a":[{"selector":".EntryInnerBlock:not(.EntryInnerBlock:last-child) #ninja-blog-inactive","tasks":[["upward",".EntryInnerBlock"]]}]}],[1703495390,{"a":[{"selector":".entry_table #ninja-blog-inactive","tasks":[["upward",".entry_table"]]}]}],[502622253,{"a":[{"selector":"#EntryTextBox #ninja-blog-inactive","tasks":[["upward","#EntryTextBox"]]}]}],[994553537,{"a":[{"selector":".article1 #ninja-blog-inactive","tasks":[["upward",".article1"]]}]}],[1253219785,{"a":[{"selector":"#EntryListBlock > .EntryTextBox #ninja-blog-inactive","tasks":[["upward",".EntryTextBox"]]}]}],[806193728,{"a":[{"selector":".EntryContainerExt #ninja-blog-inactive","tasks":[["upward",".EntryContainerExt"]]}]}],[2104478347,{"a":[{"selector":".main_body > .text_body #ninja-blog-inactive","tasks":[["upward",".text_body"]]},{"selector":".main_title_box h3 > a[href=\"\"]","tasks":[["upward",".main_title_box"]]}]}],[808219223,{"a":[{"selector":"#sidebar > li","tasks":[["has",{"selector":" > div.block > div.blocksubhead > a#collapse_block_html_4"}]]}]}],[838158299,{"a":[{"selector":"#main-inner > .text #ninja-blog-inactive","tasks":[["upward",".text"]]},{"selector":".posted > a[href=\"\"]","tasks":[["upward",1]]},{"selector":".title > a[href=\"\"]","tasks":[["upward",1]]}]}],[998177077,{"a":[{"selector":".article2 #ninja-blog-inactive","tasks":[["upward",".article2"]]}]}],[770617249,{"a":[{"selector":".mt-3","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]}]}],[1494143598,{"a":[{"selector":".kk_sidebar_items > div.item_box_sdb","tasks":[["has",{"selector":" > p.item_box-image > a[href^=\"https://www.amazon.co\"]"}]]}]}],[1622563412,{"a":[{"selector":"#main-content > #content > .block.odd","tasks":[["has",{"selector":"aside[id^=\"div-gpt-ad\"]"}]]},{"selector":".sidebar > .region-inner > .block.odd","tasks":[["has",{"selector":"div[id^=\"div-gpt-ad\"]"}]]}]}],[1401729258,{"a":[{"selector":"#SubInner > div[class]","tasks":[["has",{"selector":" > div.Ad"}]]},{"selector":"#SubInner > div[class]","tasks":[["has",{"selector":" > div.Pr"}]]},{"selector":".content > h2.widget-header","tasks":[["has-text","あなたにおススメの記事"]]},{"selector":".l-main > div[class^=\"_\"] > div > ul > li > div[id^=\"div-gpt-\"]","tasks":[["upward",1]]},{"selector":".vjs-controls-disabled.vjs-error .vjs-control-bar","action":["style","display: block !important;"],"cssable":true}]}],[100775647,{"a":[{"selector":".module-list-articles__item > div[id^=\"div-gpt-\"]","tasks":[["upward",1]]}]}],[617021032,{"a":[{"selector":".td-post-content > div > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1086890143,{"a":[{"selector":".entry > p > ins.adsbygoogle","tasks":[["upward",1]]}]}],[414578898,{"a":[{"selector":".not-athleterecipe > aside.ad","tasks":[["upward",1]]}]}],[1729787236,{"a":[{"selector":".results_bid > td[colspan=\"5\"] > ins.adsbygoogle","tasks":[["upward",2]]}]}],[2135817385,{"a":[{"selector":"body","action":["style","background: none !important;"],"cssable":true}]}],[909177657,{"a":[{"selector":"table:not([width]) b","tasks":[["has-text","［PR］"],["upward","table"]]}]}],[742736285,{"a":[{"selector":"#top #head","action":["style","height: auto !important;"],"cssable":true}]}],[744023516,{"a":[{"selector":"#player_3x2_close","action":["style","opacity: 0 !important; height: 300px !important;"],"cssable":true},{"selector":".col-sm-6 > div.well > a[href^=\"https://javhd.com\"]","tasks":[["upward",2]]}]}],[1530617248,{"a":[{"selector":"#EntryBlockNa #ninja-blog-inactive","tasks":[["upward","#EntryBlockNa"]]}]}],[240469060,{"a":[{"selector":".entry > h2","tasks":[["has",{"selector":" > a[href=\"\"]"}],["spath"," + .entry_date"]]},{"selector":".entry_body #ninja-blog-inactive","tasks":[["upward",".entry_body"]]},{"selector":".entry_state > .entry_comments > a[href=\"\"]","tasks":[["upward",2]]}]}],[795214313,{"a":[{"selector":"h2 > a[href=\"\"]","tasks":[["upward",1]]}]}],[50522211,{"a":[{"selector":".EntryFooter > a[href=\"\"]","tasks":[["upward",1]]},{"selector":".EntryHeader a[href=\"\"]","tasks":[["upward",".EntryHeader"]]},{"selector":".EntryText #ninja-blog-inactive","tasks":[["upward",".EntryText"]]},{"selector":".EntryTitle > .Title > a[href=\"\"]","tasks":[["upward",2]]}]}],[1777127566,{"a":[{"selector":".grid_post-box > div.post-box-contents > div > div.dfad","tasks":[["upward",3]]}]}],[925792278,{"a":[{"selector":".adsbygoogle","action":["style","position: absolute!important;left: -4000px!important;"],"cssable":true},{"selector":"body[style=\"display: none;\"]","action":["style","display: block !important;"],"cssable":true}]}],[1596019912,{"a":[{"selector":"li.p-topics-list__item div[id^=\"yads\"]","tasks":[["upward","li"]]}]}],[674613533,{"a":[{"selector":".eall #ninja-blog-inactive","tasks":[["upward",".eall"]]}]}],[1326718849,{"a":[{"selector":".items > div.item > div[id^=\"logly-\"]","tasks":[["upward",1]]},{"selector":".slick-slide > div[id] + script","action":["remove",""],"tasks":[["upward",1]]}]}],[1153002534,{"a":[{"selector":".article #ninja-blog-inactive","tasks":[["upward",".article"]]}]}],[1533572377,{"a":[{"selector":".entry_table2 #ninja-blog-inactive","tasks":[["upward",".entry_table2"]]}]}],[533778233,{"a":[{"selector":".pad #ninja-blog-inactive","tasks":[["upward",".pad"]]}]}],[1483349410,{"a":[{"selector":"#ArticleBlock > .entryMain","tasks":[["has",{"selector":"#ninja-blog-inactive"}],["spath"," + #CommentBlock"]]},{"selector":".entryHeader > a.entryListTime[href=\"\"]","tasks":[["upward",1]]},{"selector":".entryMain #ninja-blog-inactive","tasks":[["upward",".entryMain"]]}]}],[1773896891,{"a":[{"selector":".readmoreWrap > p > ins.adsbygoogle","tasks":[["upward",1]]},{"selector":".widget_text ins.adsbygoogle","tasks":[["upward",".widget_text"]]},{"selector":".widget_text script[src*=\"zucks.net\"]","tasks":[["upward",".widget_text"]]}]}],[1823419731,{"a":[{"selector":"li[class^=\" \"]","tasks":[["has",{"selector":" > div.Ad"}]]}]}],[167789061,{"a":[{"selector":".plugin-memo","tasks":[["has",{"selector":" > div.sidetitlebody > div.sidetitle","tasks":[["has-text","amazon"]]}]]}]}],[944639174,{"a":[{"selector":".post-item > ins.adsbygoogle","tasks":[["upward",1]]},{"selector":".related-post-item > ins.adsbygoogle","tasks":[["upward",1]]}]}],[1002882236,{"a":[{"selector":"h5 > div.dfad","tasks":[["upward",1]]}]}],[1988452583,{"a":[{"selector":"div[id^=\"_popIn_recommend_\"] ul._popIn_infinite_page > li","tasks":[["has",{"selector":" > a[class*=\"_popIn_recommend_article_ad\"]"}]]}]}],[1283960866,{"a":[{"selector":"#entry > #entryStatus","tasks":[["has",{"selector":" > li > a[href=\"\"]"}],["spath"," + #entryTime"]]},{"selector":"#entry > #entryText #ninja-blog-inactive","tasks":[["upward","#entryText"]]},{"selector":"#entry > #entryText","tasks":[["has",{"selector":"#ninja-blog-inactive"}],["spath"," + .hr"]]},{"selector":"#entryStatus > li > a[href=\"\"]","tasks":[["upward",2]]},{"selector":"h2.entryTitle > a[href=\"\"]","tasks":[["upward",1]]}]}],[1951312046,{"a":[{"selector":".linkul > li","tasks":[["has",{"selector":" > script[src^=\"https://pagead2.googlesyndication.com\"]"}]]}]}],[1850366523,{"a":[{"selector":".topstoriestxt > p > ins.adsbygoogle","tasks":[["upward",2]]}]}],[493859239,{"a":[{"selector":".section > div > ins.adsbygoogle","tasks":[["upward",2]]},{"selector":".section > div.container > div.row > div > ins.adsbygoogle","tasks":[["upward",4]]}]}],[1566618953,{"a":[{"selector":".card.example-1","tasks":[["upward",1]]},{"selector":".hatena-module-html > div > script:only-child:not([src])","tasks":[["upward",2]]}]}],[1713408416,{"a":[{"selector":"#content > h2","tasks":[["has-text","\\[PR\\]"]]},{"selector":".d_line > img[src$=\"/cat20.gif\"]","tasks":[["upward",1]]}]}],[1848717329,{"a":[{"selector":".widget_custom_html a[href^=\"https://app.seedapp.jp\"]","tasks":[["upward",".widget_custom_html"]]}]}],[1705981668,{"a":[{"selector":".widget_text > div > div[id^=\"logly\"]","tasks":[["upward",2]]},{"selector":".widget_text > div > p > ins.adsbygoogle","tasks":[["upward",3]]}]}],[968241923,{"a":[{"selector":"footer","action":["style","height: auto !important;"],"cssable":true}]}],[1684379619,{"a":[{"selector":".mainTitle > h3","tasks":[["has-text","FANZA関連動画"]]}]}],[333063468,{"a":[{"selector":".plugin-memo","tasks":[["has",{"selector":" > div.side > div#azrank-sidebar"}]]},{"selector":".siteContent","action":["style","margin-top: 0!important;"],"cssable":true},{"selector":".siteRanking-main","action":["style","margin-left: 0!important;"],"cssable":true},{"selector":"blockquote:last-of-type","tasks":[["has",{"selector":" > div.amazlet-box"}]]}]}],[465558515,{"a":[{"selector":".search-box ~ div.l-contents-block","tasks":[["has",{"selector":".card-game-sale-rank--amazon"}]]}]}],[1927616882,{"a":[{"selector":"#main-container","action":["style","padding: 0px 60px 80px !important;"],"cssable":true},{"selector":"#reserve > section.side-menu > div.sidebar-style ins.adsbygoogle","tasks":[["upward","section.side-menu"]]},{"selector":".plugin1_outline > div.plugin1_body > div.plugin-freearea > div[id^=\"i2i\"]","tasks":[["upward",3]]},{"selector":".plugin1_outline > div.plugin1_body > div.plugin-freearea > script[src*=\"//adm.\"]","tasks":[["upward",3]]},{"selector":".plugin1_outline > div.plugin1_body > div.plugin-freearea > script[src*=\"//adm.shinobi.jp/\"]","tasks":[["upward",3]]},{"selector":".plugin2_outline > div.plugin2_body > div.plugin-freearea > iframe[src*=\"mmaaxx.com/\"]","tasks":[["upward",3]]},{"selector":".plugin2_outline > div.plugin2_body > div.plugin-freearea > iframe[src^=\"http://customize.dtiserv\"]","tasks":[["upward",3]]},{"selector":".plugin2_outline > div.plugin2_body > div.plugin-freearea > script[src$=\"/show_ads.js\"]","tasks":[["upward",3]]},{"selector":".plugin_content > div.plugin_body > div.plugin-freearea > div[id^=\"i2i\"]","tasks":[["upward",3]]},{"selector":".side-menu > div.sidebar-style > div.plugin-freearea > img[src^=\"//v2st.shinobi.jp/\"]","tasks":[["upward",3]]},{"selector":".side-menu > div.sidebar-style > div.plugin-freearea > script[src^=\"//adm.shinobi.jp/\"]","tasks":[["upward",3]]}]}],[1770657886,{"a":[{"selector":".adsbygoogle","action":["remove",""]}]}],[682358988,{"a":[{"selector":"ins.adsbygoogle","action":["style","width: 1px!important;height: 1px!important;"],"cssable":true}]}],[1953946968,{"a":[{"selector":"table div.goods","tasks":[["upward","table"]]}]}],[795876954,{"a":[{"selector":"#side_r > div[class^=\"plugin\"]","tasks":[["has",{"selector":"a[name=\"amazletlink\"]"}]]}]}],[1934949810,{"a":[{"selector":".pink","tasks":[["has-text","おとなのおもちゃ"]]}]}],[1728077933,{"a":[{"selector":".menuBlock","tasks":[["has",{"selector":"div.plugin-freearea > div[style^=\"overflow:hidden\"] > div.wboxlink"}]]}]}],[1081296452,{"a":[{"selector":".side_plugin","tasks":[["has",{"selector":".adsbygoogle"}]]}]}],[777338045,{"a":[{"selector":"#menu1Block > div.menu1BlockBase","tasks":[["has",{"selector":" > div.menu1BlockHead > div","tasks":[["has-text","最新記事＋AD"]]}]]},{"selector":".mainCommentBold2","tasks":[["has-text","^PR$"]]},{"selector":".mainCommentBold2","tasks":[["has-text","^関連記事$"]]}]}],[1951530931,{"a":[{"selector":".app-container[aria-expanded=\"false\"] section.with-ad","action":["style","width: calc(100% - 20px) !important;"],"cssable":true}]}],[1584331640,{"a":[{"selector":".with-ad[data-layout=\"list\"] .main-header","action":["style","width: 100% !important;"],"cssable":true},{"selector":".with-ad[data-layout=\"list\"][data-section-type=\"new-video\"] .content-wrap:nth-child(-1n+2)","action":["style","width: 100% !important;"],"cssable":true}]}],[1464902774,{"a":[{"selector":".entry .aposted[href=\"\"]","tasks":[["upward",".entry"]]}]}],[831158052,{"a":[{"selector":"article > section","tasks":[["has",{"selector":"img[src^=\"http://koukoku.\"]"}]]}]}],[136274738,{"a":[{"selector":".entry_main_body > p.contentText","tasks":[["has-text","【PR】"]]}]}],[1076961912,{"a":[{"selector":".post-box > div.post-box-contents > ins.adsbygoogle","tasks":[["upward",2]]}]}],[1619107581,{"a":[{"selector":"#article-options > div[style=\"width: 100%;\"] + h3","tasks":[["has-text","楽天"]]},{"selector":".plugin-memo > div.side > script[src*=\"i2i.jp/\"]","tasks":[["upward",2]]}]}],[919770030,{"a":[{"selector":".cardtype__article > ins.adsbygoogle","tasks":[["upward",1]]}]}],[422115993,{"a":[{"selector":"body","action":["style","background: none!important;"],"cssable":true}]}],[1542415230,{"a":[{"selector":".under_content > .box > .textwidget > p > .adsbygoogle","tasks":[["upward",3]]}]}],[1074297059,{"a":[{"selector":".cage #ninja-blog-inactive","tasks":[["upward",".cage"]]}]}],[995010695,{"a":[{"selector":"#sidebar > div.widget_custom_html","tasks":[["has",{"selector":"center > a[rel^=\"nofollow\"] > img"}]]}]}],[167092263,{"a":[{"selector":".posts-inner","tasks":[["has-text","スポンサードリンク|関連コンテンツ|他サイト様人気記事|最新記事|こちらもオススメ"]]}]}],[1034468766,{"a":[{"selector":".Entry #ninja-blog-inactive","tasks":[["upward",".Entry"]]}]}],[1579031802,{"a":[{"selector":".left-column-inner > .plugin-memo:nth-child(2)","tasks":[["has",{"selector":" > div.side > a[href^=\"https://www.amazon.co.jp/\"]"}]]}]}],[1390530210,{"a":[{"selector":".mb-3.text-center","tasks":[["has-text","スポンサーリンク"]]}]}],[706591884,{"a":[{"selector":".waku-zentai > div.ako1","tasks":[["upward",1]]}]}],[1351988439,{"a":[{"selector":".article_box_item > div.pcBanner_category","tasks":[["upward",1]]},{"selector":".list_item > div.pcBanner_index","tasks":[["upward",1]]}]}],[1939964355,{"a":[{"selector":".article > h3","tasks":[["has-text","他にこんな記事も"]]}]}],[616095725,{"a":[{"selector":".entry-content","action":["style","display: block!important;"],"cssable":true},{"selector":".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links","action":["style","display:block!important;"],"cssable":true}]}],[573754732,{"a":[{"selector":".box > div[id^=\"pc_top_infeed\"]","action":["remove",""],"tasks":[["upward",1]]},{"selector":".typeB_ttl","tasks":[["has-text","記事"]]}]}],[548955594,{"a":[{"selector":".loop-entry > span.memo:first-child ~ ins.adsbygoogle","tasks":[["upward",1]]}]}],[466443736,{"a":[{"selector":".entry #ninja-blog-inactive","tasks":[["upward",".entry"]]}]}],[41368833,{"a":[{"selector":".widget > div","tasks":[["has-text","^スポンサーリンク$"],["upward",1]]},{"selector":".widget > div","tasks":[["has-text","おすすめ"],["upward",1]]}]}],[2025779172,{"a":[{"selector":".box-article > div.border-ao.text-center","tasks":[["has-text","関連商品"]]},{"selector":".page-desktop > div.text-dark","tasks":[["has-text","プレバン|楽天"]]}]}],[32438442,{"a":[{"selector":".adsbygoogle","tasks":[["upward",1]]}]}],[2123113162,{"a":[{"selector":"div[style^=\"width:100%;box-sizing:border-box;padding:1em\"] > a[href^=\"https://click.dtiserv2.com/\"]:only-child","tasks":[["upward",1]]}]}],[1031439849,{"a":[{"selector":".article-body > center","tasks":[["has",{"selector":" > a[href^=\"https://wu.\"] > img"}]]}]}],[1467736641,{"a":[{"selector":"section > center > span[style=\"opacity:0.7;font-size:xx-small\"]","tasks":[["upward",1]]}]}],[252730956,{"a":[{"selector":"#index_nav > h1","action":["style","padding-top: 30px!important;"],"cssable":true}]}],[1317162841,{"a":[{"selector":".entry-list-item #ninja-blog-inactive","tasks":[["upward",".entry-list-item"]]}]}],[660196342,{"a":[{"selector":".nb-entry #ninja-blog-inactive","tasks":[["upward",".nb-entry"]]}]}],[35309085,{"a":[{"selector":".zad.billboard","action":["style","min-height: 1px !important;"],"cssable":true}]}],[428858590,{"a":[{"selector":".post > table[style]","tasks":[["has",{"selector":" > tbody > tr > td > .adsbygoogle"}]]}]}],[538742610,{"a":[{"selector":"table[height=\"878\"] > tbody > tr","tasks":[["has",{"selector":" > td[height=\"307\"][bgcolor=\"#f8fafc\"][align=\"center\"]"}]]}]}],[1474316563,{"a":[{"selector":".side-amazon","tasks":[["upward",".ad"]]}]}],[1120976226,{"a":[{"selector":".sidewrapper.plugin-memo > div","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]}]}],[1767988485,{"a":[{"selector":".panel:last-child > p.panel-heading","tasks":[["has-text","PR情報"],["upward",1]]}]}],[1555549203,{"a":[{"selector":".widget-sidebar script[src$=\"/show_ads.js\"]","tasks":[["upward",".widget-sidebar"]]}]}],[2037320438,{"a":[{"selector":"div.title-sec","tasks":[["has-text","姉妹サイト"]]}]}],[183636360,{"a":[{"selector":".container > div.row","tasks":[["has",{"selector":" > div.text-center > script[src^=\"https://poweredby.jads.co/\"]"}]]}]}]]);

const hostnamesMap = new Map([["animenew.be",21829767],["kagua.biz",1743153763],["livedoor.biz",1851194595],["2chcopipe.com",1851194595],["akb48taimuzu.livedoor.biz",491508668],["michaelsan.livedoor.biz",[1286387862,74994519]],["toushichannel.net",1286387862],["seiyufan.livedoor.biz",2016886856],["lionmaru.blog",452921692],["valorantchannel.livedoor.blog",1967359862],["380cc.cc",1137087914],["miyachan.cc",[1204655186,1472485480]],["namjai.cc",1204655186],["ffsagami.com",[1204655186,1464902774]],["junglekouen.com",1204655186],["da-te.jp",1204655186],["kyo2.jp",1204655186],["naturum.ne.jp",1204655186],["niiblo.jp",[1204655186,1472485480]],["sagafan.jp",1204655186],["tamaliver.jp",[1204655186,1472485480,1464902774]],["osakazine.net",[1204655186,1472485480]],["hamazo.tv",1204655186],["ti-da.net",1472485480],["wave.popin.cc",1149038717],["ula.cc",1409387636],["sekisei.click",2015911133],["yaamjw.click",996965880],["anime-festa.com",[996965880,323710956,1703495390]],["anime-report.com",[996965880,323710956,806193728,2104478347]],["anime-voice.com",[996965880,323710956,1703495390,838158299]],["animegoe.com",[996965880,323710956,1703495390,502622253,998177077]],["bangofan.com",[996965880,323710956,240469060,795214313,50522211]],["bijual.com",[996965880,323710956,994553537,1253219785,674613533]],["blog-fps.com",[996965880,323710956,502622253]],["cosplay-festa.com",[996965880,323710956,998177077]],["cosplay-navi.com",[996965880,323710956,502622253,533778233]],["cosplay-report.com",[996965880,998177077]],["game-ss.com",[996965880,323710956,1034468766]],["iku4.com",[996965880,323710956]],["kakuren-bo.com",[996965880,323710956,1253219785]],["ko-me.com",[996965880,323710956,502622253,1253219785]],["koushijima.com",[996965880,753906339,323710956,502622253,1253219785,998177077,466443736]],["living-myself.com",996965880],["mamagoto.com",[996965880,323710956,1253219785,240469060,795214313]],["mangalog.com",[996965880,323710956,1703495390,1253219785,533778233,466443736]],["mmo-fps.com",[996965880,323710956,502622253,1253219785,838158299,998177077,795214313,50522211]],["ms-inst.com",996965880],["nomcaphe.com",996965880],["pazru.com",[996965880,323710956,1253219785]],["ryorika.com",[996965880,323710956,502622253,998177077,466443736]],["sankuzushi.com",[996965880,753906339,323710956,502622253,998177077]],["satsumablog.com",[996965880,753906339,323710956,502622253,994553537,1253219785,838158299,466443736,1317162841]],["sugo-roku.com",[996965880,323710956,1253219785,533778233]],["tyoshublog.com",[996965880,323710956,502622253,998177077]],["ya-gasuri.com",[996965880,323710956,795214313,50522211]],["blog.shinobi.jp",[996965880,323710956,1703495390,1253219785,240469060,795214313,1034468766]],["99ing.net",[996965880,323710956,1703495390,1253219785]],["anime-japan.net",[996965880,323710956,1153002534]],["anime-movie.net",[996965880,323710956,1703495390,502622253,1153002534]],["anime-navi.net",[996965880,323710956,502622253]],["anime-ranking.net",[996965880,466443736]],["animech.net",[996965880,502622253]],["cos-mania.net",[996965880,323710956]],["cosplay-japan.net",[996965880,502622253,2104478347]],["fukuwarai.net",[996965880,323710956,838158299]],["gjgd.net",[996965880,753906339,323710956,1253219785,533778233,1034468766,466443736,1317162841]],["gjpw.net",[996965880,323710956,838158299,1153002534,466443736]],["go-th.net",[996965880,1253219785,466443736]],["kai-seki.net",[996965880,323710956,502622253,1253219785,998177077,240469060,795214313]],["ky-3.net",[996965880,753906339,323710956,1253219785]],["mangadou.net",[996965880,323710956,502622253]],["ni-3.net",[996965880,323710956,1253219785]],["o-oi.net",[996965880,323710956,1253219785]],["p-kin.net",[996965880,323710956,1703495390,502622253,998177077,674613533,1153002534]],["yamatoblog.net",[996965880,753906339,323710956,1153002534]],["gbfmatome.xyz",996965880],["mangaraw.co",2021625491],["yotsumeyui.co",753906339],["dou-jin.com",[753906339,323710956]],["ni-moe.com",[753906339,323710956,998177077]],["3rin.net",[753906339,323710956,1253219785,1317162841]],["edoblog.net",[753906339,323710956,1703495390,1253219785,240469060,795214313]],["janken-pon.net",[753906339,323710956,502622253,838158299,1153002534]],["omaww.net",[753906339,323710956,1703495390,1253219785]],["2ch-mma.com",760216889],["afo-news.com",760216889],["newsnow-2ch.com",760216889],["besttrendnews.net",760216889],["konowaro.net",760216889],["matometatta-news.net",760216889],["news-choice.net",760216889],["news-three-stars.net",760216889],["ac-illust.com",934256618],["akb48rompen.com",[376266460,2046467138]],["gamehig.com",[2046467138,1579031802]],["blog.jp",2046467138],["ldblog.jp",2046467138],["blog.livedoor.jp",2046467138],["akiba-souken.com",2058016117],["am-our.com",1139849596],["asahi.com",[1139849596,1401729258]],["curazy.com",1139849596],["intojapanwaraku.com",1139849596],["books.j-cast.com",1139849596],["japanese.joins.com",1139849596],["moneyforward.com",1139849596],["news.nifty.com",1139849596],["uta-net.com",1139849596],["yamahack.com",1139849596],["yukawanet.com",1139849596],["animageplus.jp",1139849596],["animeanime.jp",1139849596],["autocar.jp",1139849596],["careerconnection.jp",1139849596],["saitama-np.co.jp",1139849596],["news.tv-asahi.co.jp",1139849596],["dailyportalz.jp",1139849596],["gamespark.jp",1139849596],["getnavi.jp",1139849596],["inside-games.jp",1139849596],["kanaloco.jp",1139849596],["mensnonno.jp",1139849596],["mynavi.jp",1139849596],["smt.docomo.ne.jp",1139849596],["matome.response.jp",1139849596],["ryukyushimpo.jp",1139849596],["taishu.jp",1139849596],["uhb.jp",1139849596],["zigsow.jp",1139849596],["hinata.me",1139849596],["cafend.net",1139849596],["cinemacafe.net",1139849596],["iionna.tokyo",1139849596],["angel-bbs.com",873303175],["anihatsu.com",1331193302],["animanch.com",721428261],["anime-cosplay.com",[323710956,1703495390,502622253,994553537]],["anime-life.com",[323710956,502622253,1253219785]],["bangalog.com",[323710956,502622253,994553537,1253219785,838158299,1530617248]],["blog-mmo.com",[323710956,1253219785,1153002534,1533572377]],["blog-rpg.com",[323710956,1253219785,533778233]],["blog-sim.com",[323710956,2104478347,998177077,1483349410]],["coelacanth108.com",323710956],["cos-live.com",[323710956,502622253,998177077,674613533]],["dankanoko.com",[323710956,502622253,1253219785,998177077,240469060,795214313]],["darumasangakoronda.com",[323710956,838158299,1283960866]],["en-grey.com",[323710956,1253219785]],["escapepower.com",323710956],["futatsutomoe.com",[323710956,994553537,1253219785,838158299,1074297059]],["gg-blog.com",[323710956,1253219785]],["guhaw.com",[323710956,1253219785,533778233,466443736]],["iga-log.com",[323710956,1317162841,660196342]],["indiesj.com",[323710956,1703495390,994553537,1253219785,674613533]],["kagome-kagome.com",[323710956,502622253,466443736]],["kamakurablog.com",[323710956,1253219785,2104478347,674613533]],["kazamidori-o.com",323710956],["komochijima.com",[323710956,502622253,838158299]],["kurofuku.com",[323710956,502622253,1253219785]],["manga-cosplay.com",[323710956,1703495390,1283960866]],["misujitate.com",[323710956,502622253]],["moe-cosplay.com",[323710956,502622253,838158299]],["nari-kiri.com",[323710956,502622253,1253219785,838158299,998177077,1153002534]],["no-mania.com",[323710956,1703495390,502622253]],["or-hell.com",[323710956,994553537,1253219785,533778233,466443736]],["outisigoto.com",323710956],["ria10.com",[323710956,1253219785,795214313,50522211,533778233]],["sekigaharablog.com",[323710956,1703495390,838158299]],["sjisjis.com",323710956],["tosalog.com",323710956],["tou3.com",[323710956,502622253,838158299,533778233]],["tsuyushiba.com",[323710956,1703495390,1253219785,1530617248]],["vi-lab.com",323710956],["visualfan.com",[323710956,1703495390,502622253,1253219785]],["wa-syo-ku.com",[323710956,502622253,1253219785,838158299,998177077]],["yamauchinet.com",323710956],["yotsumeyui.com",[323710956,1703495390,1253219785,998177077]],["yugioh2.com",323710956],["zoku-sei.com",[323710956,1253219785,838158299,533778233,1317162841]],["11songs.info",323710956],["ginoushi.jp",323710956],["7narabe.net",[323710956,533778233]],["asukablog.net",[323710956,1253219785,838158299]],["atgj.net",[323710956,998177077,240469060,795214313,1283960866,466443736]],["cooklog.net",[323710956,838158299,795214313,50522211,533778233]],["coslife.net",[323710956,502622253]],["game-waza.net",[323710956,502622253,1253219785,466443736]],["hyakunin-isshu.net",[323710956,502622253,1253219785]],["ichi-matsu.net",[323710956,1253219785]],["kuizu.net",[323710956,502622253,1253219785,240469060,795214313,533778233]],["kyotolog.net",[323710956,1703495390]],["sakeblog.net",[323710956,1703495390,502622253,1253219785,466443736]],["samwisegamgee.net",323710956],["side-story.net",[323710956,466443736]],["syoyu.net",[323710956,466443736]],["take-uma.net",[323710956,1703495390,502622253]],["blog.tkooler.net",323710956],["v-kei.net",[323710956,1253219785,1153002534,466443736]],["visualshoxx.net",[323710956,502622253,240469060,795214313,466443736]],["koyo-kochi.com",1253219785],["kimamana-theater.info",1253219785],["b0ne.me",1253219785],["totheworld.net",1253219785],["2012rinsho-eiyo.org",1253219785],["akashicdesign.org",1253219785],["anime-sharing.com",808219223],["annict.com",770617249],["apollomaniacs.com",1494143598],["appllio.com",1622563412],["globe.asahi.com",100775647],["asiatravelnote.com",617021032],["astage-ent.com",1086890143],["athleterecipe.com",414578898],["aucfree.com",1729787236],["automaton-media.com",2135817385],["av-kyujin.com",909177657],["avfuuzoku.com",742736285],["avgle.com",744023516],["baraero.com",1777127566],["battlecats-db.com",925792278],["bengo4.com",1596019912],["biteki.com",1326718849],["mikado-koubou.com",1153002534],["bokuslog.com",1773896891],["buzzfeed.com",1823419731],["chaos2ch.com",167789061],["charmer-media.com",944639174],["platabi.com",944639174],["elife-media.jp",944639174],["frequ.jp",944639174],["miima.jp",944639174],["vivre-media.jp",944639174],["connecnect.com",1002882236],["cosmopolitan.com",1988452583],["elle.com",1988452583],["esquire.com",1988452583],["harpersbazaar.com",1988452583],["womenshealthmag.com",1988452583],["25ans.jp",1988452583],["ellegirl.jp",1988452583],["fujingaho.jp",1988452583],["dddfont.com",1951312046],["frames-design.com",1951312046],["fukidesign.com",1951312046],["kage-design.com",1951312046],["calligra.design",1951312046],["designstoriesinc.com",1850366523],["douga-getter.com",493859239],["ear-phone-review.com",1566618953],["elog-ch.com",1713408416],["enrichoneslife.com",1848717329],["entameclip.com",1705981668],["ero-kawa.com",968241923],["erokolky.com",1684379619],["blog.esuteru.com",333063468],["famitsu.com",465558515],["blog.fc2.com",1927616882],["gadgetdamage.blog.fc2.com",1770657886],["helpsupport.blog.fc2.com",682358988],["nikonikona.blog.fc2.com",1953946968],["nofootynolife.blog.fc2.com",795876954],["ohhiyhiy.blog.fc2.com",1934949810],["supersolenoid.blog.fc2.com",1728077933],["supersolenoid.jp",1728077933],["uwagakisimasuka.blog.fc2.com",1081296452],["workingnews.blog117.fc2.com",777338045],["video.fc2.com",[1951530931,1584331640]],["video.laxd.com",1951530931],["fightingirl.com",831158052],["financial-field.com",136274738],["fnjpnews.com",1076961912],["football-2ch.com",1619107581],["fragrantica-japan.com",919770030],["gadgerba.com",919770030],["taisy0.com",919770030],["complesso.jp",919770030],["nilcollection.net",919770030],["freesoft-100.com",422115993],["futabagumi.com",1542415230],["fx-koryaku.com",995010695],["gadget2ch.com",167092263],["geartics.com",1390530210],["gekimatosoku.com",706591884],["newmatosoku.com",706591884],["gemmed.ghc-j.com",1351988439],["ghibli-tosidensetu.com",1939964355],["gigaho.com",616095725],["golfsapuri.com",573754732],["gpc-check.com",548955594],["yutairui.com",466443736],["mogtas.net",466443736],["haijin-boys.com",41368833],["hayamimi-gunpla.com",2025779172],["hayamimi-hobby.com",2025779172],["hikak.com",32438442],["shindans.com",32438442],["zengin.ajtw.net",32438442],["hikaritube.com",2123113162],["poyopara.com",2123113162],["sugirl.info",2123113162],["iqoo.me",2123113162],["erry.one",2123113162],["himasoku.com",1031439849],["hlsloader.com",1467736641],["hostlove.com",252730956],["ign.com",35309085],["inakadaisuki.com",428858590],["infraexpert.com",538742610],["irodorich.com",1474316563],["iroirosokuhou.com",1120976226],["its-mo.com",1767988485],["iyuto.com",1555549203],["j-cast.com",2037320438],["javbus.com",183636360]]);

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
