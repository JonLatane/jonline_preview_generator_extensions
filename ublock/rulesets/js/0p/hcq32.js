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

// rus-0

const argsMap = new Map([[1927734247,{"a":[{"selector":"#app > div","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"div[style*=\"height:\"][style*=\"600px\"]","action":["style","background-color: transparent !important"],"cssable":true},{"selector":"div[style^=\"min-height:\"]","action":["style","min-height: 0 !important"],"cssable":true}]}],[311366338,{"a":[{"selector":".g-icon-big.g-play:after","action":["style","bottom: calc(50% - 55px) !important; left: calc(50% - 55px) !important; cursor: pointer !important"],"cssable":true},{"selector":".js-index-central-column > .js-index-doscroll","tasks":[["has",{"selector":" > .history > div > .l-col-center [href*=\"://ad.adriver.ru/\"]"}],["spath"," > div"]]},{"selector":".js-index-doscroll audio[autoplay]","action":["remove",""]},{"selector":".l-small-width-top-padding","action":["style","padding-top: unset !important"],"cssable":true},{"selector":".video-gallery-popup.single .video-gallery-popup__body","action":["style","left: 200px !important; right: 200px !important"],"cssable":true},{"selector":".video-gallery-popup.single .video-gallery-popup__wrap","action":["style","max-width: 100% !important"],"cssable":true}]}],[1760947248,{"a":[{"selector":".g-banner__news-footer","action":["style","min-height: 0 !important"],"cssable":true},{"selector":".g-relative > .forecast","action":["style","height: auto !important"],"cssable":true},{"selector":".l-col-100h","action":["style","min-height: 0 !important; height: auto !important"],"cssable":true},{"selector":".l-sticky:has(.forecast:empty) ~ .js-news-feed > .news-feed","action":["style","top: 166px !important"],"cssable":true}]}],[2024449563,{"a":[{"selector":"div.news.grid_16 h3","tasks":[["has",{"selector":"span","tasks":[["has-text","Реклама"]]}],["spath"," ~ a[href][target=\"_blank\"]"]]},{"selector":"div.news.grid_16 h3","tasks":[["has",{"selector":"span","tasks":[["has-text","Реклама"]]}],["spath"," ~ div[style=\"overflow: hidden;\"]"]]},{"selector":"div.news.grid_16 h3","tasks":[["has",{"selector":"span","tasks":[["has-text","Реклама"]]}]]}]}],[1186667445,{"a":[{"selector":".widget_custom_html","tasks":[["has",{"selector":"[id^=\"yandex_rtb\"]"}]]}]}],[140997468,{"a":[{"selector":"#topcontainer","action":["style","margin-top: 40px !important"],"cssable":true}]}],[1768709047,{"a":[{"selector":".m-blur","action":["style","filter: none !important; position: relative !important"],"cssable":true}]}],[87842915,{"a":[{"selector":"#content_container #content","action":["style","margin-right: 0 !important"],"cssable":true},{"selector":"#content_container","action":["style","margin-right: 0 !important"],"cssable":true}]}],[595892696,{"a":[{"selector":"div","tasks":[["has",{"selector":" > div > [id^=\"adfox_\"]"}]]}]}],[1631517471,{"a":[{"selector":"div","tasks":[["has",{"selector":" > div > [id^=\"yandex_rtb\"]"}]]}]}],[1544134182,{"a":[{"selector":"#wrapper > #header","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1765464391,{"a":[{"selector":".widget_categories","tasks":[["has",{"selector":" > div[align=\"center\"] > img[src*=\"/aliban\"]"}]]}]}],[131689493,{"a":[{"selector":".body--brranding > .content","action":["style","margin-top: unset !important"],"cssable":true},{"selector":"html:not(#id) > body:not(#id) .body--brranding > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"html:not(#id) > body:not(#id) .body--brranding","action":["style","pointer-events: none !important"],"cssable":true}]}],[1876579963,{"a":[{"selector":".menu[role=\"navigation\"] div[style*=\"height:\"]","action":["style","height: auto !important"],"cssable":true},{"selector":"aside > div[class]:first-child > div","action":["style","height: auto !important"],"cssable":true},{"selector":"aside > div[class]:first-child","action":["style","height: auto !important"],"cssable":true},{"selector":"aside center > div[style*=\"height:\"]","action":["style","height: auto !important"],"cssable":true}]}],[1333868294,{"a":[{"selector":"div","tasks":[["has",{"selector":" > .title_also","tasks":[["has-text","Партнерский контент"]]}]]}]}],[2015469001,{"a":[{"selector":"body > .row","action":["style","margin-left: 0 !important; margin-right: 0 !important"],"cssable":true}]}],[96308504,{"a":[{"selector":".adsbygoogle","action":["style","max-height: 121px !important; opacity: 0 !important; pointer-events: none !important"],"cssable":true},{"selector":".well-google","action":["style","max-height: 121px !important; opacity: 0 !important; pointer-events: none !important"],"cssable":true},{"selector":".well-span","action":["style","max-height: 121px !important; opacity: 0 !important; pointer-events: none !important"],"cssable":true}]}],[186311655,{"a":[{"selector":".bl0","tasks":[["has",{"selector":"div","tasks":[["has-text",["блок|израил|предложение|реклама|bitcoin","i"]]]}]]}]}],[1864879195,{"a":[{"selector":".entry > div:not([aria-label=\"Аудиоплеер\"])","tasks":[["has",{"selector":"a[href^=\"https://serveradmin.ru/\"]","tasks":[["has-text","."]]}]]},{"selector":"div","tasks":[["has",{"selector":" > a[href*=\"otus\"]"}]]},{"selector":"div","tasks":[["has",{"selector":" > a[href^=\"https://serveradmin.ru/devops\"]"}]]},{"selector":"div","tasks":[["has",{"selector":" > a[href^=\"https://serveradmin.ru/otus\"]"}]]}]}],[1204211159,{"a":[{"selector":"#sidebar .toggled","tasks":[["has",{"selector":" > .mob_quad_banner"}]]}]}],[1263816029,{"a":[{"selector":"html.dark > body","action":["style","background-color: #171717 !important"],"cssable":true},{"selector":"html:not(.dark) > body","action":["style","background: initial !important"],"cssable":true}]}],[1267582987,{"a":[{"selector":"#twocol center","tasks":[["has",{"selector":" > div[style] [src=\"//an.yandex.ru/system/context.js\"]"}]]}]}],[1906954553,{"a":[{"selector":".block-body.block-row","tasks":[["has",{"selector":".TeraPromo"}]]},{"selector":".block-body.block-row","tasks":[["has",{"selector":".resourseReklverx"}]]}]}],[93641082,{"a":[{"selector":"div","tasks":[["has",{"selector":" > div[id^=\"M\"][id*=\"Composite\"]"}]]}]}],[279456264,{"a":[{"selector":".abp","action":["style","transform: none !important; direction: ltr !important"],"cssable":true}]}],[1192692697,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > div > [data-id^=\"adfox-\"]"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > div > [data-id^=\"exAd_\"]"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > div[font-size] > span","tasks":[["has-text",["опрос","i"]]]}]]}]}],[1944874831,{"a":[{"selector":".promotion .h-layoutWide","action":["style","cursor: auto !important"],"cssable":true}]}],[1656346425,{"a":[{"selector":"article > .b-post-view__section","tasks":[["has",{"selector":" > .b-post-view__projects > div > [id^=\"adv220_\"]"}]]}]}],[1205273403,{"a":[{"selector":".section","tasks":[["has",{"selector":" > .navbar > .flex-center > p","tasks":[["has-text","Новости партнеров"]]}]]}]}],[1073519725,{"a":[{"selector":"#main_body > .block","action":["style","height: auto !important"],"cssable":true},{"selector":"#site","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1318635863,{"a":[{"selector":"div[class^=\"page_\"][class$=\"_right\"] div","tasks":[["has",{"selector":" > div[id]:empty ~ script"}]]}]}],[1733730395,{"a":[{"selector":"div","tasks":[["has",{"selector":" > #kb"}]]}]}],[1682453483,{"a":[{"selector":".ipsList_reset > .ipsWidget","tasks":[["has",{"selector":" > div > [id^=\"yandex_rtb\"]"}]]},{"selector":".ipsList_reset > .ipsWidget","tasks":[["has",{"selector":" > div > p > a > img[src*=\"/banners/\"]"}]]}]}],[893152865,{"a":[{"selector":"td[width=\"210\"] > center > table","tasks":[["has",{"selector":"center > b","tasks":[["has-text","Реклама"]]}]]}]}],[1321970674,{"a":[{"selector":"[itemprop=\"articleBody\"] > [class]","tasks":[["has-text","РЕКЛAМA|РЕКЛАМA|РЕКЛАМА"]]}]}],[1361400103,{"a":[{"selector":".se-onair-popup:not([class*=\"active\"]) > .se-onair","action":["style","background: #292e35 !important"],"cssable":true},{"selector":".se-onair-popup:not([class*=\"active\"])","action":["style","bottom: 10px !important; right: 0 !important; width: 155px !important; top: 22px !important"],"cssable":true},{"selector":"body.popup","action":["style","overflow:auto !important"],"cssable":true}]}],[477750999,{"a":[{"selector":".tab__sport a[href^=\"https://www.championat.com/\"]","action":["style","pointer-events: none !important"],"cssable":true}]}],[1658349115,{"a":[{"selector":".header-middle-wrapper","action":["style","height: auto !important"],"cssable":true}]}],[2044868064,{"a":[{"selector":".layout_footer","action":["style","margin-top: 20px !important"],"cssable":true}]}],[219709533,{"a":[{"selector":".main-blogs > .main-blogs__wrap","tasks":[["has",{"selector":"a[href*=\"okko.sport\"]"}]]}]}],[582205567,{"a":[{"selector":".columns-layout__right > section","tasks":[["has",{"selector":"[data-is-ad-poll]"}]]},{"selector":".recommendations__list > .recommendations__item","tasks":[["has",{"selector":"[href*=\"promo\"]"}]]},{"selector":"body.is-fixed","action":["style","overflow: auto !important"],"cssable":true},{"selector":"p","tasks":[["has",{"selector":" > a[href]","tasks":[["has-text","М\\.Видео"]]}]]}]}],[281244057,{"a":[{"selector":".video_adsense","tasks":[["has",{"selector":"#vid_over_float"}]]}]}],[1961383897,{"a":[{"selector":"div[id^=\"videoplayer_\"][class^=\"iframe_wrapper\"]","action":["style","display: block !important"],"cssable":true},{"selector":"section > div[class^=\"_content-wrapper_\"]","tasks":[["has",{"selector":" > div > a[href=\"/razbor/new\"]"}],["spath"," ~ div[class^=\"_content-wrapper_\"] a[href^=\"/to?http\"]"]]},{"selector":"section > div[class^=\"_content-wrapper_\"]","tasks":[["has",{"selector":" > div > a[href=\"/video/new\"]"}],["spath"," ~ div[class^=\"_content-wrapper_\"] > [class^=\"_list_\"]"]]},{"selector":"section > div[class^=\"_content-wrapper_\"]","tasks":[["has",{"selector":" > div > a[href=\"/video/new\"]"}],["spath"," ~ div[class^=\"_content-wrapper_\"] a[href^=\"/to?http\"]"]]}]}],[2006555720,{"a":[{"selector":"#left-b > div","tasks":[["has",{"selector":" > a[href*=\"goo.gl\"]"}]]},{"selector":".n-main-branding-container","action":["style","margin-top: 0 !important"],"cssable":true}]}],[193108342,{"a":[{"selector":"#footer","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"#vbulletin_html .above_body","action":["style","margin-bottom: auto !important"],"cssable":true},{"selector":"html","action":["style","background-color: #dbdbdb !important"],"cssable":true}]}],[1299814993,{"a":[{"selector":".span4 > .block_name_pink","tasks":[["has-text","Реклама"],["spath"," + .sidebar_block"]]},{"selector":".span4 > .block_name_pink","tasks":[["has-text","Реклама"]]},{"selector":".span8 > div","tasks":[["has",{"selector":" > h4","tasks":[["has-text","Удивительное"]]}]]}]}],[1120392821,{"a":[{"selector":".box","tasks":[["has",{"selector":" > div[data-dlebclicks]"}]]}]}],[507458969,{"a":[{"selector":".featured_articles > .header","tasks":[["has-text","^Новости партнеров|^Также читайте"]]}]}],[570435142,{"a":[{"selector":"#js-mediator-article > .pr","tasks":[["has-text","Новости партнеров"]]},{"selector":".pr","tasks":[["has",{"selector":" > [id^=\"smi_teaser_\"]"}]]}]}],[1887077633,{"a":[{"selector":"aside > div[class^=\"NavPanel_nav\"]","action":["style","width: unset !important"],"cssable":true}]}],[1024036218,{"a":[{"selector":".gray_block","tasks":[["has",{"selector":" > .block_links"}]]}]}],[1251218281,{"a":[{"selector":".section-heading","tasks":[["has",{"selector":" > .h-text","tasks":[["has-text","Новости партнеров"]]}]]}]}],[1875749282,{"a":[{"selector":".content > .homepage_widget","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":".content ~ #sidebar > .widget","tasks":[["has-text","Опрос недели"]]},{"selector":"div[class]","tasks":[["has",{"selector":" > .js-relap-anchor"}]]}]}],[1193325716,{"a":[{"selector":"#article > div[style=\"width: 1000%; float: left;\"]","tasks":[["has",{"selector":" > .img_preview > img[src*=\"/adcode/\"]"}]]},{"selector":".newsListingBoxContent > tbody > tr","tasks":[["has",{"selector":" > .newsListingBoxContentText > b > a[href*=\"utm_campai\"][target=\"_blank\"]"}]]},{"selector":"body > div[style*=\"1010\"]","action":["style","width: auto !important; margin-top: 0 !important"],"cssable":true},{"selector":"body","action":["style","background: whitesmoke !important"],"cssable":true},{"selector":"table","tasks":[["has",{"selector":" > tbody > tr > td > span","tasks":[["has-text",["^реклама$","i"]]]}]]}]}],[996879221,{"a":[{"selector":".reviewwidget","tasks":[["has",{"selector":".adwidget"}]]}]}],[859034647,{"a":[{"selector":"#all:not(#id) > #content","action":["style","margin-top: 20px !important"],"cssable":true},{"selector":"body","action":["style","background-color: #fff !important"],"cssable":true}]}],[1289900130,{"a":[{"selector":".modal-open","action":["style","overflow: auto !important"],"cssable":true}]}],[1527022801,{"a":[{"selector":"article.type-post","tasks":[["has",{"selector":"[href=\"/adblock\"]"}]]}]}],[1352319603,{"a":[{"selector":".tBlurred","action":["style","-webkit-filter: none !important"],"cssable":true}]}],[1817767838,{"a":[{"selector":"html[prefix] > body","action":["style","background-color: #202030 !important; background-image: none !important"],"cssable":true}]}],[2113739527,{"a":[{"selector":".h2","tasks":[["has",{"selector":" > span","tasks":[["has-text","^СМИ$"]]}]]}]}],[947025365,{"a":[{"selector":".sidebar_title","tasks":[["has-text","Яндекс\\."]]}]}],[846988038,{"a":[{"selector":".panel","tasks":[["has",{"selector":" > .panel-body > #marketWidget"}]]},{"selector":".panel","tasks":[["has",{"selector":" > .panel-body > [id^=\"yandex_rtb_\"]"}]]}]}],[362051419,{"a":[{"selector":"div[class*=\"other_smi\"]","tasks":[["has",{"selector":" > .razdel_name","tasks":[["has-text",["[a-z]|сми|заинтересует","i"]]]}]]}]}],[838931453,{"a":[{"selector":".news-group__content > .news-group__item","tasks":[["has",{"selector":" > .banner"}]]},{"selector":"[class*=\"title\"]","tasks":[["has-text",["новости партнеров","i"]]]}]}],[2062683902,{"a":[{"selector":".col-light-grey","tasks":[["has",{"selector":" > .bottom-banner"}]]}]}],[1299522944,{"a":[{"selector":".widget","tasks":[["has",{"selector":" > .pm-ads-banner"}]]}]}],[239751875,{"a":[{"selector":".box-title","tasks":[["has",{"selector":" > span","tasks":[["has-text","Новости партнеров"]]}]]}]}],[2120126416,{"a":[{"selector":".vgtrk-a1","tasks":[["has",{"selector":"[id^=\"MediaMetricsInject\"]"}]]},{"selector":".vgtrk-a1","tasks":[["has",{"selector":"[id^=\"adfox_\"]"}]]}]}],[1412663900,{"a":[{"selector":".page-wrap","action":["style","margin-right: unset !important"],"cssable":true}]}],[1621881942,{"a":[{"selector":"#cmain","action":["style","margin-left: unset !important"],"cssable":true},{"selector":".box-primary","tasks":[["has",{"selector":" > .box-body > [id^=\"adfox_\"]"}]]}]}],[719153755,{"a":[{"selector":"body[style] > .vgt_orig_bg","action":["style","display: block !important"],"cssable":true},{"selector":"html > body[style] > :not(.vgt_orig_bg)","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"html > body[style]","action":["style","pointer-events: none !important; padding-top: 0 !important; background-image: none !important"],"cssable":true}]}],[1878440420,{"a":[{"selector":"#sidebar > .sidebar-content","tasks":[["has",{"selector":" > .top > .fix","tasks":[["has-text","Реклама"]]}]]}]}],[1887697059,{"a":[{"selector":".with-cookies-agreements .channels-line","action":["style","top: calc(70px + 0px) !important"],"cssable":true},{"selector":".with-cookies-agreements .header","action":["style","top: 0 !important"],"cssable":true},{"selector":".with-cookies-agreements .wrapper","action":["style","margin-top: 120px !important"],"cssable":true},{"selector":".wrapper.adfoxClickable > div","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":".wrapper.adfoxClickable","action":["style","padding-top: 0 !important; background-image: none !important; pointer-events: none !important; background-color: #ECEFF2 !important"],"cssable":true},{"selector":"body > .wrapper","action":["style","padding-top: 0 !important; background-color: #ECEFF2 !important"],"cssable":true}]}],[1106957903,{"a":[{"selector":"div[class$=\"Owner\"]","action":["style","min-height: 0 !important; height: unset !important"],"cssable":true},{"selector":"div[style^=\"min-height: 100vh;\"]","action":["style","min-height: 0 !important"],"cssable":true}]}],[196597394,{"a":[{"selector":"ul.tabsmenuverch li","action":["style","padding-right: 2px !important; padding-left: 2px !important"],"cssable":true}]}],[807559579,{"a":[{"selector":".ly.header","action":["style","top: 34px !important"],"cssable":true},{"selector":".onair[style^=\"height:\"] > .onair_wrapper > [name=\"btn_air_close\"]","action":["style","opacity: unset !important"],"cssable":true},{"selector":".onair_wrapper","action":["style","position: relative !important; bottom: unset !important; right: unset !important; -webkit-animation: none !important; animation: none !important"],"cssable":true},{"selector":".vjs-poster","action":["style","position: inherit !important"],"cssable":true}]}],[1407348118,{"a":[{"selector":"span.articles_info > b","tasks":[["has-text","Реклама:"]]}]}],[299058383,{"a":[{"selector":".hr","tasks":[["has-text","Яндекс.Директ ВОмске|Другие новости"]]}]}],[930290376,{"a":[{"selector":"td[width=\"100%\"][valign=\"top\"][class^=\"post\"] > .postcolor > img","action":["style","max-width: 100% !important"],"cssable":true}]}],[2110587694,{"a":[{"selector":"#header + .banner","action":["style","height: 100px !important"],"cssable":true}]}],[565759875,{"a":[{"selector":"div","tasks":[["has",{"selector":" > [data-block-after=\"productSet\"]"}]]}]}],[2098702789,{"a":[{"selector":".p_wrap","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1277199874,{"a":[{"selector":".box","tasks":[["has",{"selector":" > div > .adsbygoogle"}]]}]}],[1763759589,{"a":[{"selector":".module","tasks":[["has-text","Реклама"]]}]}],[874077349,{"a":[{"selector":".wrap","action":["style","transform: none !important; margin-top: 0 !important"],"cssable":true}]}],[1809292889,{"a":[{"selector":"table[width=\"190\"]","tasks":[["has",{"selector":"b","tasks":[["has-text",["^новости партн.ров","i"]]]}]]}]}],[1112191399,{"a":[{"selector":"body","action":["style","background-color: #f1f3f6 !important"],"cssable":true}]}],[500854487,{"a":[{"selector":"p","tasks":[["has",{"selector":" > .ContentTitle[style=\"height: 20px;\"]"}]]}]}],[790694271,{"a":[{"selector":"div","tasks":[["has",{"selector":" > [id^=\"adfox_\"]"}]]}]}],[1017080566,{"a":[{"selector":"div > .banner-root ~ .page-root > #page div[class^=\"_\"] > div > script + section > div:first-child + div div ~ div ~ div ~ div > div","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"div[class$=\"_visible\"]","tasks":[["has",{"selector":"[class$=\"icon\"] ~ [class]","tasks":[["has-text","Рекламы нет"]]}]]}]}],[1253790095,{"a":[{"selector":"#dle-content > div[style=\"margin-top:7px;\"]","tasks":[["has",{"selector":".newstitle > a[href*=\"/reklama.\"]"}]]},{"selector":"div[style=\"margin-left:21px;\"]","tasks":[["has",{"selector":".opros","tasks":[["has-text","Реклама"]]}]]}]}],[1641612977,{"a":[{"selector":".widget-title","tasks":[["has-text","Наши партнеры"]]}]}],[743511702,{"a":[{"selector":"div[style^=\"font-size\"]","tasks":[["has-text","Также узнайте\\.\\.\\."]]}]}],[1444784555,{"a":[{"selector":".branding","action":["style","background: none !important; height: auto !important"],"cssable":true},{"selector":".logo","action":["style","background: none !important; height: auto !important"],"cssable":true}]}],[1550937597,{"a":[{"selector":"#columns > .transparent","action":["style","background-color: transparent !important"],"cssable":true},{"selector":".ushki","action":["style","width: unset !important; height: unset !important"],"cssable":true},{"selector":"body > div[id][style*=\"margin-top\"]","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"html > body:not(#id)","action":["style","background-color: #3a3a3a !important"],"cssable":true}]}],[959500004,{"a":[{"selector":".rotate-block","action":["style","display: table !important"],"cssable":true}]}],[709135968,{"a":[{"selector":"body > #container","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1456875707,{"a":[{"selector":".wrapper-header","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1994572874,{"a":[{"selector":".wrapper","action":["style","top: 0 !important"],"cssable":true}]}],[434384384,{"a":[{"selector":".bg-websdr","tasks":[["has",{"selector":" > .card-body > div > [id] > div[id^=\"yandex_rtb\"]"}]]},{"selector":".row[style=\"display: block;\"]","tasks":[["has",{"selector":"iframe"}]]}]}],[1378775426,{"a":[{"selector":"div[class*=\"user-data-grid\"]","action":["style","background: none !important; height: auto !important"],"cssable":true}]}],[2036421176,{"a":[{"selector":"div[class*=\"grid-user-data\"]","tasks":[["has",{"selector":" > [class*=\"user-data-grid\"] > :empty"}]]}]}],[1378111631,{"a":[{"selector":"#root","action":["style","min-height: 0 !important"],"cssable":true}]}],[261523080,{"a":[{"selector":"#blink2[color=\"red\"]","action":["style","-webkit-animation: none !important; color: #837e6e !important"],"cssable":true},{"selector":"div[id^=\"pos\"] > a > img[src*=\"audioportal.su/!!!ads/!rotator/\"]","action":["style","zoom: 0.1 !important; filter: grayscale(1) !important"],"cssable":true}]}],[162947816,{"a":[{"selector":".module-full","tasks":[["has",{"selector":"#banner"}]]},{"selector":".module-full","tasks":[["has",{"selector":"span","tasks":[["has-text","advert"]]}]]}]}],[103140373,{"a":[{"selector":"h2","tasks":[["has-text",["новости партнеров","i"]],["spath"," ~ div"]]}]}],[1031519256,{"a":[{"selector":"td[width=\"240\"] > table[width=\"240\"] ~ table[width=\"240\"]","tasks":[["has",{"selector":"noindex > .adsbygoogle"}]]}]}],[6581668,{"a":[{"selector":".post-list__card","tasks":[["has",{"selector":" > .popular-block"}]]}]}],[1887777143,{"a":[{"selector":"#rightcol > div[class^=\"box\"]","tasks":[["has",{"selector":" > .spacer > h3","tasks":[["has-text","Реклама"]]}]]}]}],[917855486,{"a":[{"selector":".footerLeft","action":["style","background-color: #fff7e3 !important"],"cssable":true},{"selector":".footerRight","action":["style","background-color: #fff7e3 !important"],"cssable":true},{"selector":".is--forum","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"body > div[id]:not([class])","action":["style","margin-top: auto !important"],"cssable":true},{"selector":"body","action":["style","background-color: #fff7e3 !important"],"cssable":true},{"selector":"html","action":["style","background-color: #fff7e3 !important"],"cssable":true}]}],[511195988,{"a":[{"selector":".bltitle","tasks":[["has-text","Реклама"]]}]}],[941661539,{"a":[{"selector":"#sidebar_column .scrolled","action":["style","top: auto !important"],"cssable":true}]}],[572730343,{"a":[{"selector":"[style=\";background-image:none!important;background-color:transparent!important\"] [style=\";background-image:none!important;background-color:transparent!important\"] > *","tasks":[["has",{"selector":"a[href][target=\"_blank\"][style=\"display:none!important\"]"}]]},{"selector":"article ~ article","tasks":[["has",{"selector":" > [class] > div:only-child > img:first-child"}]]},{"selector":"body [data-revive-id] ~ script ~ [id][class]","action":["style","background-image: none !important"],"cssable":true},{"selector":"html:not([class]):not([style]) > body:not([itemscope]) > div[id] > div[id][href]","action":["style","cursor: auto !important"],"cssable":true},{"selector":"html[style] > body[style=\";background-color:#E6E7E9!important\"] [id][class] > .slider-list[style] ~ div[class]:not([id])","tasks":[["has",{"selector":" > :only-child:not(div):not([id]):not([class])"}]]},{"selector":"html[style] > body[style=\";background-color:#E6E7E9!important\"] [id][class] > div","tasks":[["has",{"selector":" > h2 ~ script"}]]},{"selector":"html[style] > body[style=\";background-color:#E6E7E9!important\"] [id][class] > div[id^=\"devdbc_all_\"] ~ div[class]","tasks":[["has",{"selector":" > :only-child:not(div):not([id]):not([class])"}]]},{"selector":"html[style] > body[style=\"background-color: rgb(230, 231, 233) !important;\"] [id][class] > .slider-list[style] ~ div[class]:not([id])","tasks":[["has",{"selector":" > :only-child:not(div):not([id]):not([class])"}]]},{"selector":"html[style] > body[style=\"background-color: rgb(230, 231, 233) !important;\"] [id][class] > div","tasks":[["has",{"selector":" > h2 ~ script"}]]},{"selector":"html[style] > body[style=\"background-color: rgb(230, 231, 233) !important;\"] [id][class] > div[id^=\"devdbc_all_\"] ~ div[class]","tasks":[["has",{"selector":" > :only-child:not(div):not([id]):not([class])"}]]}]}],[1828593697,{"a":[{"selector":".category-all #content","action":["style","background-image: none !important; cursor: auto !important"],"cssable":true}]}],[763767194,{"a":[{"selector":".bottom > .omega","tasks":[["has",{"selector":"ins"}]]}]}],[1195360329,{"a":[{"selector":"div[id^=\"widget_wrapper_\"]","tasks":[["has",{"selector":"#vid_vpaut_div"}]]},{"selector":"div[id^=\"widget_wrapper_\"]","tasks":[["has",{"selector":".widget_video_ads"}]]}]}],[1490848593,{"a":[{"selector":"table.lista[width=\"100%\"][style] > tbody > tr > td.header[width=\"110px\"]","action":["style","color: transparent !important"],"cssable":true}]}],[275939905,{"a":[{"selector":".sidebar--right > .block_full","tasks":[["has",{"selector":".banners-ads"}]]}]}],[1695362845,{"a":[{"selector":"#wrp","action":["style","margin-top: 0 !important"],"cssable":true}]}],[208397680,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > .content-b noindex"}]]}]}],[852318107,{"a":[{"selector":".container > header","action":["style","margin-top: 10px !important"],"cssable":true},{"selector":".topside::after","action":["style","background-image: none !important"],"cssable":true},{"selector":".topside::before","action":["style","background-image: none !important"],"cssable":true}]}],[1059576821,{"a":[{"selector":".topserial","action":["style","height: auto !important"],"cssable":true}]}],[398157232,{"a":[{"selector":".footer","action":["style","margin-bottom: 0 !important"],"cssable":true}]}],[2065508198,{"a":[{"selector":"#disqus_thread","action":["style","min-width: 700px !important"],"cssable":true}]}],[589513944,{"a":[{"selector":".video_content","action":["style","height: auto !important"],"cssable":true}]}],[524679458,{"a":[{"selector":".channel__list > .channel__item-container","tasks":[["has",{"selector":" > .channel-container > [id^=\"yandex_rtb\"]"}]]}]}],[232167146,{"a":[{"selector":".title_side","tasks":[["has-text","Реклама"]]}]}],[1171744553,{"a":[{"selector":"#sideLeft > .accordion-group","tasks":[["has",{"selector":".accordion-heading","tasks":[["has-text","seedbox\\.org\\.ua"]]}]]},{"selector":".post_wrap span[class^=\"post\"]","tasks":[["has-text",["при поддержке","i"]]]}]}],[176816040,{"a":[{"selector":"html:not(#id) *","action":["style","-webkit-filter: none !important; filter: none !important"],"cssable":true}]}],[1585084948,{"a":[{"selector":".boxTable","tasks":[["has",{"selector":".boxTitle","tasks":[["has-text","Это интересно|Новости"]]}]]}]}],[596009138,{"a":[{"selector":".body--has-ad","action":["style","padding-top: 0 !important"],"cssable":true}]}],[1338382416,{"a":[{"selector":".span4","tasks":[["has",{"selector":".thumbnail > a[href*=\"/asd/\"]"}]]}]}],[1477016057,{"a":[{"selector":"body","action":["style","overflow: auto !important; padding-right: 0 !important"],"cssable":true}]}],[1554363431,{"a":[{"selector":".d-flex","tasks":[["has",{"selector":" > div > [class^=\"partners\"]"}]]}]}],[621337439,{"a":[{"selector":"#cn-content.playlists-iframe","action":["style","display: block !important"],"cssable":true}]}],[384346614,{"a":[{"selector":"div > center","tasks":[["has",{"selector":" > [href^=\"https://zen.yandex.ru/\"]"}]]}]}],[1949544444,{"a":[{"selector":".news-item","tasks":[["has",{"selector":".ads"}]]}]}],[328232776,{"a":[{"selector":".sidebar > [class]","tasks":[["has",{"selector":" > [class]","tasks":[["has-text","Новости партнеров|Новини партнерів"]]}]]}]}],[300263564,{"a":[{"selector":".sb-block","tasks":[["has",{"selector":"[id*=\"ScriptRoot\"]"}]]}]}],[237457165,{"a":[{"selector":"#subbody","action":["style","top: auto !important"],"cssable":true},{"selector":".big-ad-wrapper","action":["style","height: auto !important"],"cssable":true},{"selector":"html > body:not(#id) > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"html > body:not(#id)","action":["style","pointer-events: none !important; background-color: #eff1f2 !important; margin-top: auto !important"],"cssable":true}]}],[385153962,{"a":[{"selector":"div[style=\"position:absolute;left:0px;top:0px;width:240px;margin-top:660px\"]","action":["style","position: relative !important; margin-top: auto !important"],"cssable":true}]}],[2007155315,{"a":[{"selector":".scroll-content.disable-scrolling","action":["style","overflow:auto !important"],"cssable":true},{"selector":"body.overflow--hidden","action":["style","overflow:auto !important"],"cssable":true}]}],[154201260,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":" > .widget-title > span","tasks":[["has-text","Реклама"]]}]]}]}],[1653982565,{"a":[{"selector":".container-wrapper","tasks":[["has",{"selector":" > .mag-box-title","tasks":[["has-text","Партнери проекту"]]}]]}]}],[708150981,{"a":[{"selector":"article > h2","tasks":[["has-text",["реклама","i"]],["spath"," + ul"]]},{"selector":"article > h2","tasks":[["has-text",["реклама","i"]]]},{"selector":"article > h3","tasks":[["has-text",["реклама","i"]],["spath"," + ul"]]},{"selector":"article > h3","tasks":[["has-text",["реклама","i"]]]}]}],[1284655964,{"a":[{"selector":"#wrapper > #header","action":["style","position: relative !important"],"cssable":true},{"selector":"#wrapper","action":["style","padding-top: 0 !important"],"cssable":true}]}],[491910921,{"a":[{"selector":"html","action":["style","position: relative !important; top: 0 !important"],"cssable":true}]}],[104622594,{"a":[{"selector":".l-col > .widget__title","tasks":[["has-text"," партн"],["spath"," ~ .listing"]]},{"selector":".l-col > .widget__title","tasks":[["has-text"," партн"]]},{"selector":".widget__title","tasks":[["has",{"selector":" > [href=\"#\"]"}],["spath"," + table"]]},{"selector":".widget__title","tasks":[["has",{"selector":" > [href=\"#\"]"}]]},{"selector":"body > #app","action":["style","margin-top: 0 !important"],"cssable":true}]}],[842291530,{"a":[{"selector":".sidebar > aside","tasks":[["has",{"selector":" > .textwidget:empty"}]]}]}],[930190829,{"a":[{"selector":".right-col > .hint-block","tasks":[["has",{"selector":" > .hint-block-title","tasks":[["has-text","Партнеры"]]}]]}]}],[1518448988,{"a":[{"selector":".postmeta-primary ~ [class^=\"subhead-\"] ~ div","tasks":[["has",{"selector":" > div > script"}]]},{"selector":".postmeta-primary ~ [class^=\"subhead-\"]","tasks":[["has-text",["партнер","i"]]]}]}],[1543787986,{"a":[{"selector":".right_column_aside > .block","action":["style","margin-top: auto !important"],"cssable":true},{"selector":"body > div[align=\"center\"]","action":["style","width: auto !important; margin: 0 !important"],"cssable":true}]}],[189629662,{"a":[{"selector":".header.fixed .layout","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".right_column_content > .block_news","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"header.header","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1198920043,{"a":[{"selector":".page-container","action":["style","top: 0 !important"],"cssable":true}]}],[1843207402,{"a":[{"selector":"center + br + div[style*=\"background-color: #ebebeb\"]","action":["style","margin-top: auto !important"],"cssable":true},{"selector":"h3","tasks":[["has-text","News Join"]]}]}],[708655972,{"a":[{"selector":".widget_custom_html","tasks":[["has",{"selector":"[data-wpel-link=\"external\"]"}]]},{"selector":".widget_custom_html","tasks":[["has",{"selector":"a[href*=\"utm_campai\"]"}]]}]}],[1491540388,{"a":[{"selector":"body","action":["style","background-image: none !important; background-color: #f5f5f5 !important"],"cssable":true}]}],[1951429665,{"a":[{"selector":"#headerMover #headerProxy","action":["style","height: 50px !important"],"cssable":true}]}],[1740538872,{"a":[{"selector":"#content > #header > div[style^=\"height: 94px;\"]","action":["style","height: 6px !important"],"cssable":true},{"selector":"#content > #header","action":["style","height: 220px !important; background-position-y: -100px !important"],"cssable":true},{"selector":"#right > div[style^=\"height:\"]","action":["style","height: 0 !important"],"cssable":true},{"selector":"td.left[width=\"200\"][valign=\"top\"]","action":["style","height: auto !important"],"cssable":true}]}],[162494412,{"a":[{"selector":"body","action":["style","padding-top: 40px !important; background-image: none !important"],"cssable":true}]}],[757935983,{"a":[{"selector":".gbg","action":["style","top: auto !important"],"cssable":true}]}],[310071045,{"a":[{"selector":"*","action":["style","-webkit-touch-callout: default !important; -webkit-user-select: text !important; -moz-user-select: text !important; -ms-user-select: text !important; user-select: text !important"],"cssable":true}]}],[1340525138,{"a":[{"selector":"#header","action":["style","height: auto !important"],"cssable":true}]}],[2034295214,{"a":[{"selector":".question","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".sidebar > .widget","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1415181153,{"a":[{"selector":"[aria-live] > tr","tasks":[["has",{"selector":" > .currencycom"}]]}]}],[1972557702,{"a":[{"selector":".side_block","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[791063545,{"a":[{"selector":".columnTitle","tasks":[["has-text","Новости партнеров"]]}]}],[933970190,{"a":[{"selector":".all-news > .items > .item","tasks":[["has",{"selector":" > div > [data-bn-slot]"}]]}]}],[1968539307,{"a":[{"selector":".widget_block","tasks":[["has",{"selector":" > div[id]:empty"}]]}]}],[393546817,{"a":[{"selector":"body > .block0","action":["style","margin-top: 0 !important"],"cssable":true}]}],[270637895,{"a":[{"selector":".ban_head","action":["style","display: block !important; background: none !important; pointer-events: none !important"],"cssable":true},{"selector":"header > a[href=\"/\"]","action":["style","display: block !important"],"cssable":true},{"selector":"main","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1055800398,{"a":[{"selector":".widget-group-no-name","tasks":[["has",{"selector":".sidebarAdvertising"}]]}]}],[1733323738,{"a":[{"selector":".sidebox > .sidetitle","tasks":[["has",{"selector":" > span","tasks":[["has-text",["купуй|реклама|формац","i"]]]}]]}]}],[1319699995,{"a":[{"selector":".widget > .widgettitle","tasks":[["has-text","Реклама"],["spath"," + .clear + .widgetbox"]]},{"selector":".widget > .widgettitle","tasks":[["has-text","Реклама"]]}]}],[2031381545,{"a":[{"selector":".windowbg","tasks":[["has",{"selector":" > .poster > h4","tasks":[["has-text","Форум Такси Сервис"]]}]]}]}],[999109862,{"a":[{"selector":".sidebar-wrap > div","tasks":[["has",{"selector":" > [id*=\"ScriptRoot\"]"}]]}]}],[535764927,{"a":[{"selector":".block-type-widget-area","action":["style","min-height: 0 !important; box-shadow: none !important"],"cssable":true},{"selector":".widget-area","tasks":[["has",{"selector":" > .widget_text > .textwidget > [id^=\"CNM\"]"}]]},{"selector":".widget-area","tasks":[["has",{"selector":" > .widget_text > .textwidget > [id^=\"MarketGid\"]"}]]},{"selector":".widget_text","tasks":[["has",{"selector":" > .textwidget > script"}]]},{"selector":".widget_text","tasks":[["has",{"selector":" > .textwidget img[src*=\"/banners/\"]"}]]}]}],[1465743468,{"a":[{"selector":".main-box","tasks":[["has",{"selector":" > .main-box-inside > div[id^=\"MIXADV_\"]"}]]}]}],[304254733,{"a":[{"selector":".titleblockpost","tasks":[["has-text",["новини партнерів|не пропусти|магазин","i"]]]}]}],[238323984,{"a":[{"selector":".wrap","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[472616487,{"a":[{"selector":"#left > .module","tasks":[["has",{"selector":" > div .adsbygoogle"}]]}]}],[1838361760,{"a":[{"selector":".back_bottom > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":".back_bottom","action":["style","cursor: auto !important"],"cssable":true},{"selector":".back_bottom","action":["style","pointer-events: none !important"],"cssable":true}]}],[2117625501,{"a":[{"selector":".island_overflow-initial > .feature_wide","action":["style","margin: auto !important"],"cssable":true}]}],[1144830909,{"a":[{"selector":"aside","tasks":[["has",{"selector":" > .aside-partners"}]]}]}],[1315916648,{"a":[{"selector":"#popup-manager.popup-show + #layout","action":["style","-webkit-filter: none !important; filter: none !important"],"cssable":true}]}],[1766076778,{"a":[{"selector":".c-feed__list-item","tasks":[["has",{"selector":" > .c-feed__item > .c-r"}]]}]}],[783901097,{"a":[{"selector":".sb__section","tasks":[["has",{"selector":" > .sb-partners"}]]}]}],[1878670931,{"a":[{"selector":"#ad-300 + .w","action":["style","margin-top: unset !important"],"cssable":true}]}],[1703882507,{"a":[{"selector":"#main-block > .content-block","action":["style","margin: auto !important"],"cssable":true},{"selector":".content-block > .headed-block","tasks":[["has",{"selector":" > div","tasks":[["has-text","новости партнеров"]]}]]}]}],[1058950576,{"a":[{"selector":"#primary > a[href=\"/article/\"] ~ .single-post","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":".single-post","tasks":[["has",{"selector":" > div > .sam-pro-container"}]]},{"selector":"body","action":["style","background-image: none !important; padding-top: 0 !important"],"cssable":true}]}],[21898523,{"a":[{"selector":".reset-scroll","action":["style","overflow: auto !important"],"cssable":true}]}],[1116591847,{"a":[{"selector":".body_container","action":["style","padding-bottom: unset !important"],"cssable":true},{"selector":".footer_container","action":["style","height: auto !important; margin-top: auto !important"],"cssable":true}]}],[328803990,{"a":[{"selector":".video-stream > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":".video-stream","action":["style","background-image:none !important; pointer-events: none !important"],"cssable":true}]}],[37532745,{"a":[{"selector":"aside#sidebar","action":["style","min-height: auto !important"],"cssable":true}]}],[149129610,{"a":[{"selector":".lenta-wrap > .lenta","action":["style","position: relative !important"],"cssable":true},{"selector":".lenta-wrap","action":["style","height: auto !important"],"cssable":true}]}],[803319739,{"a":[{"selector":"#totalbg","action":["style","background-image: none !important"],"cssable":true}]}],[638864331,{"a":[{"selector":"div[id^=\"brid-player\"] ~ p","tasks":[["has-text","AdBlock"]]}]}],[19313385,{"a":[{"selector":"body > .layout","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1193237391,{"a":[{"selector":".entry-content > p","tasks":[["has",{"selector":" > strong > a[href*=\"utm_campai\"]"}]]},{"selector":"a[href*=\"utm_campai\"]","action":["style","pointer-events: none !important"],"cssable":true}]}],[1134693703,{"a":[{"selector":".js-relap__item","tasks":[["has",{"selector":"[data-ad-link]"}]]},{"selector":".video-scroll","action":["remove",""]}]}],[1456654520,{"a":[{"selector":"html:not(#id)","action":["style","background: none !important"],"cssable":true}]}],[630300169,{"a":[{"selector":".sidebar-box","tasks":[["has",{"selector":" > .row > .block-block"}]]},{"selector":".sidebar-box","tasks":[["has",{"selector":" > [class^=\"ne-banner-\"]"}]]}]}],[1927613676,{"a":[{"selector":"h2","tasks":[["has-text",["^новости партн|^новини партн","i"]]]}]}],[2050103825,{"a":[{"selector":".promo-inner > .container","tasks":[["has",{"selector":" > .media:only-child"}]]},{"selector":".promo-inner > .container","tasks":[["has",{"selector":" > a[href*=\"://bit.ly/\"]"}]]},{"selector":".promo-inner > .container","tasks":[["has",{"selector":" > a[href*=\"utm_campaign\"]"}]]},{"selector":".promo-inner > .container","tasks":[["has",{"selector":" > a[href^=\"https://vechirniy.kyiv.ua/reklama/\"]"}]]}]}],[617473699,{"a":[{"selector":".search-results-section","tasks":[["has",{"selector":".new-building-offer-list"}]]},{"selector":"main ~ div[class]","tasks":[["has",{"selector":" > div > div > a[href*=\"/redirect-andromeda/\"] ~ a[href*=\"/redirect-andromeda/\"]"}]]}]}],[1209620553,{"a":[{"selector":".infobar > .info-block:not(.mail):not(.weather)","action":["style","border: none !important"],"cssable":true}]}],[1096215860,{"a":[{"selector":".presreliz","tasks":[["has",{"selector":"a","tasks":[["has-text","на правах реклами"]]}]]}]}],[1862546816,{"a":[{"selector":".main__business","tasks":[["has",{"selector":" > script"}]]}]}],[1707072996,{"a":[{"selector":".main__slider > a:not([href^=\"https://nrj.ua/\"])","action":["remove",""]},{"selector":".main__slider img[alt]","action":["style","max-height: 300px !important"],"cssable":true},{"selector":".wrapper > .header","action":["style","height: 150px !important"],"cssable":true}]}],[1594629258,{"a":[{"selector":"#home_page","action":["style","max-width: 100% !important"],"cssable":true}]}],[1908002002,{"a":[{"selector":"div","tasks":[["has",{"selector":" > div[id][data-url]"}]]}]}],[53716399,{"a":[{"selector":".alltop1","action":["style","margin-bottom: 30px !important"],"cssable":true}]}],[1298893943,{"a":[{"selector":"#r-colonka > .f-block","tasks":[["has",{"selector":".b-topa","tasks":[["has-text",["интересные блоки|еклама","i"]]]}]]}]}],[1040964734,{"a":[{"selector":"p","tasks":[["has",{"selector":" > strong ~ a[href*=\"://blockads.\"]"}]]}]}],[536368212,{"a":[{"selector":".widget_custom_html","tasks":[["has-text",["^новости партн|^реклама","i"]]]}]}],[1103441704,{"a":[{"selector":".main-content > .inner-page-container ~ .inner-page-container > .block_section > .container_padding","tasks":[["has",{"selector":" > .block_section_header > div > div > .section_title","tasks":[["has-text",["новини партнерів|новости партнеров","i"]]]}]]}]}],[1798173553,{"a":[{"selector":"#js-content","action":["style","padding-top: 40px !important"],"cssable":true}]}],[923933109,{"a":[{"selector":".box","tasks":[["has",{"selector":" > .box__sponsor"}]]}]}],[1062261050,{"a":[{"selector":".mfp-content","action":["style","background-color: #ddd !important"],"cssable":true},{"selector":".mfp-wrap","action":["style","position: unset !important"],"cssable":true}]}],[1605098788,{"a":[{"selector":"style:not(#id)","action":["style","all: inherit !important"],"cssable":true}]}],[1168187619,{"a":[{"selector":"#news_text > div[class]","tasks":[["has",{"selector":"table[cellpadding]"}]]},{"selector":"#news_text > p","tasks":[["has",{"selector":" > a[href*=\"://analyticsq1.com/\"]"}]]},{"selector":"#outer-top","action":["style","padding-top: initial !important"],"cssable":true}]}],[15839011,{"a":[{"selector":"section","tasks":[["has",{"selector":" > h2","tasks":[["has-text",["новости партн","i"]]]}]]}]}],[1293448713,{"a":[{"selector":".textwidget","tasks":[["has-text","adrotate_ad"]]}]}],[173764445,{"a":[{"selector":"body.locked","action":["style","overflow:auto !important"],"cssable":true},{"selector":"html.locked","action":["style","overflow:auto !important"],"cssable":true}]}],[1784409362,{"a":[{"selector":".c-section > .l-row > .l-col","tasks":[["has",{"selector":" > [data-ad-container]"}]]},{"selector":"main > aside.u-divider--t","tasks":[["has",{"selector":" > iframe[src*=\"/partner-news?\"]"}]]}]}],[1664447738,{"a":[{"selector":"#page","action":["style","-webkit-filter:none !important; filter: none !important"],"cssable":true},{"selector":".fancybox-lock body","action":["style","overflow: auto !important"],"cssable":true}]}],[1412085908,{"a":[{"selector":".col-3","tasks":[["has",{"selector":" > div > ins"}]]}]}],[598855405,{"a":[{"selector":".main","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1528689606,{"a":[{"selector":"#header-dummy:not(#id)","action":["style","min-height: 70px !important"],"cssable":true}]}],[574960275,{"a":[{"selector":"#site_container","action":["style","margin-top: auto !important"],"cssable":true}]}],[422699779,{"a":[{"selector":"._opo_-container-playlist-player","action":["style","background-color: #1A1F24 !important"],"cssable":true},{"selector":"body.show-cookies ._opo_-header","action":["style","top: 0 !important"],"cssable":true}]}],[1909257557,{"a":[{"selector":"body .header .header-fixed","action":["style","top: 0 !important"],"cssable":true},{"selector":"body .header","action":["style","padding-top: 0 !important"],"cssable":true}]}],[472037656,{"a":[{"selector":".td_blocks > .leftblock","tasks":[["has-text","Реклама"],["spath"," + .block_text"]]},{"selector":".td_blocks > .leftblock","tasks":[["has-text","Реклама"]]}]}],[978476540,{"a":[{"selector":"div.side-item-left","tasks":[["has",{"selector":" > .side-title","tasks":[["has-text","Реклама"]]}]]}]}],[536837461,{"a":[{"selector":"body > .root","action":["style","top: 0 !important"],"cssable":true}]}],[625703198,{"a":[{"selector":"p.main","tasks":[["has",{"selector":"[href*=\"bit.ly\"]"}]]}]}]]);

const hostnamesMap = new Map([["www.rambler.ru",1927734247],["rbc.ru",[311366338,1760947248]],["sportrbc.ru",[1760947248,219709533]],["redfm.ru",2024449563],["reedr.ru",1186667445],["relook.ru",140997468],["ria.ru",1768709047],["forum.ruboard.ru",87842915],["rusprofile.ru",[595892696,1631517471]],["tvin.su",595892696],["russorosso.ru",1544134182],["rustaste.ru",1765464391],["sc2tv.ru",131689493],["sdamgia.ru",1876579963],["selomoe.ru",1333868294],["semestr.ru",2015469001],["axd.semestr.ru",96308504],["math.semestr.ru",96308504],["sergeistrelec.ru",186311655],["serveradmin.ru",1864879195],["servers-rust.ru",1204211159],["shazoo.ru",1263816029],["shophelp.ru",1267582987],["siddgames.ru",1906954553],["silver.ru",93641082],["slushat-tekst-pesni.ru",279456264],["smi2.ru",1192692697],["snob.ru",1944874831],["sobaka.ru",1656346425],["sobesednik.ru",1205273403],["soccer.ru",1073519725],["soccer365.ru",1318635863],["soccer365-1.xyz",1318635863],["soundtimes.ru",1733730395],["fisher.spb.ru",1682453483],["grinkod.spb.ru",893152865],["spletnik.ru",1321970674],["sport-express.ru",1361400103],["sport-interfax.ru",477750999],["sportkp.ru",1658349115],["sportmail.ru",2044868064],["sports.ru",582205567],["stalkerportaal.ru",281244057],["stopgame.ru",1961383897],["stranamam.ru",2006555720],["stratege.ru",193108342],["stroi-help.ru",1299814993],["superkarate.ru",1120392821],["syl.ru",507458969],["syzran-small.ru",570435142],["xn----7sbabwosghnf8al4lkj7b.xn--p1ai",570435142],["tass.ru",1887077633],["taurion.ru",1024036218],["tele.ru",1251218281],["theins.ru",1875749282],["thg.ru",1193325716],["tmbw.ru",996879221],["tnt-online.ru",859034647],["tourpom.ru",1289900130],["tproger.ru",1527022801],["translit.ru",1352319603],["trashbox.ru",1817767838],["tsn24.ru",2113739527],["tulasmi.ru",947025365],["tuzlist.ru",846988038],["tvzvezda.ru",362051419],["utro.ru",838931453],["vashdosug.ru",2062683902],["vekx.ru",1299522944],["versia.ru",239751875],["vesti.ru",2120126416],["www.vesti.ru",1412663900],["vgae.ru",1621881942],["vgtimes.ru",719153755],["videomin.ru",1878440420],["videomore.ru",1887697059],["videoredaktor.ru",1106957903],["virtualbrest.ru",196597394],["vm.ru",807559579],["vmgu.ru",1407348118],["vomske.ru",299058383],["vrtp.ru",930290376],["warfiles.ru",2110587694],["wday.ru",565759875],["webfile.ru",2098702789],["wincore.ru",1277199874],["world-knigi.ru",1763759589],["wotspeak.ru",874077349],["wpristav.ru",1809292889],["wtftime.ru",1112191399],["y-games.ru",500854487],["yakutsk.ru",790694271],["7themes.su",790694271],["yandex.ru",1017080566],["joker.ykt.ru",1253790095],["zanmsk.ru",1641612977],["zhenskoe-mnenie.ru",743511702],["zoneofgames.ru",1444784555],["www.zoneofgames.ru",1550937597],["zr.ru",959500004],["filmitorrent.site",709135968],["lafa.site",1456875707],["animego.space",1994572874],["websdr.space",434384384],["loads.ati.su",1378775426],["tm.ati.su",[1378775426,2036421176]],["trucks.ati.su",[1378775426,2036421176,1378111631]],["audioportal.su",261523080],["stalker-mods.clan.su",162947816],["stalker-mods.su",162947816],["glav.su",103140373],["mirknig.su",1031519256],["mmorpg.su",6581668],["nintendo.moy.su",1887777143],["naruto-base.su",917855486],["oko-planet.su",511195988],["vo-dela.su",941661539],["4pda.to",572730343],["mc.today",1828593697],["baskino1.top",763767194],["indi1.top",1195360329],["innal.top",1490848593],["zannn.top",1490848593],["myfootball.top",275939905],["sinema.top",1695362845],["animespirit.tv",208397680],["anitokyo.tv",852318107],["baibako.tv",1059576821],["casstudio.tv",398157232],["espreso.tv",2065508198],["goclips.tv",589513944],["limehd.tv",524679458],["mister-robot.tv",232167146],["newstudio.tv",1171744553],["nezavisim.tv",176816040],["ovego.tv",1585084948],["peka2.tv",596009138],["pornogam.tv",1338382416],["protanki.tv",1477016057],["ren.tv",1554363431],["softbox.tv",621337439],["vokrug.tv",384346614],["1plus1.ua",1949544444],["1plus1.video",[1949544444,422699779]],["4mama.ua",328232776],["5.ua",300263564],["ain.ua",237457165],["bin.ua",385153962],["cf.ua",2007155315],["progolovne.ck.ua",154201260],["1news.com.ua",1653982565],["24boxing.com.ua",708150981],["4studio.com.ua",1284655964],["apnews.com.ua",491910921],["champion.com.ua",104622594],["cheline.com.ua",842291530],["chis-chernomorsk.com.ua",930190829],["denzadnem.com.ua",1518448988],["epravda.com.ua",1543787986],["eurointegration.com.ua",189629662],["footballhub.com.ua",1198920043],["footballtransfer.com.ua",1843207402],["grippua.com.ua",708655972],["gta.com.ua",1491540388],["infomama.com.ua",1951429665],["itnews.com.ua",1740538872],["sovet.kidstaff.com.ua",162494412],["ko.com.ua",757935983],["kolizhanka.com.ua",310071045],["kredos.com.ua",1340525138],["smartphone.ua",1340525138],["ktozvonit.com.ua",2034295214],["kurs.com.ua",1415181153],["lifedon.com.ua",1972557702],["mignews.com.ua",791063545],["minfin.com.ua",933970190],["nnews.com.ua",1968539307],["blogs.pravda.com.ua",393546817],["proagro.com.ua",270637895],["shopinfo.com.ua",1055800398],["siver.com.ua",1733323738],["sport-kr.com.ua",1319699995],["forum.taxiservice.com.ua",2031381545],["tvoymalysh.com.ua",999109862],["volnorez.com.ua",535764927],["volyninfa.com.ua",1465743468],["vsviti.com.ua",304254733],["work-info.com.ua",238323984],["zdsimulator.com.ua",472616487],["comments.ua",1838361760],["dev.ua",2117625501],["dnews.dn.ua",1144830909],["news.dn.ua",1315916648],["kriminal.net.ua",1315916648],["dsnews.ua",1766076778],["edinstvennaya.ua",783901097],["gazeta.ua",1878670931],["glavnoe.ua",1703882507],["hi-tech.ua",1058950576],["hotline.ua",21898523],["i.ua",1116591847],["ictv.ua",328803990],["blitz.if.ua",37532745],["asn.in.ua",149129610],["infocar.ua",803319739],["informator.ua",638864331],["isport.ua",19313385],["itc.ua",1193237391],["dynamo.kiev.ua",1134693703],["kino-teatr.ua",1456654520],["t.ks.ua",630300169],["day.kyiv.ua",1927613676],["vechirniy.kyiv.ua",2050103825],["flatfy.lun.ua",617473699],["meta.ua",1209620553],["molbuk.ua",1096215860],["pik.net.ua",1862546816],["nrj.ua",1707072996],["nv.ua",1594629258],["okna.ua",1908002002],["btu.org.ua",53716399],["mundolatino.org.ua",1298893943],["setup.pp.ua",1040964734],["profootball.ua",536368212],["racurs.ua",1103441704],["radioclub.ua",1798173553],["sport.segodnya.ua",923933109],["senior.ua",1062261050],["sinoptik.ua",1605098788],["sport.ua",1168187619],["superdom.ua",15839011],["te.ua",1293448713],["doba.te.ua",173764445],["tsn.ua",1784409362],["uteka.ua",1664447738],["baskino-2021.uno",1412085908],["podrobno.uz",598855405],["spot.uz",1528689606],["stadion.uz",574960275],["kinoprofi.vip",1909257557],["2baksa.ws",472037656],["android-club.ws",978476540],["filebase.ws",536837461],["cameleo.xyz",625703198]]);

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
