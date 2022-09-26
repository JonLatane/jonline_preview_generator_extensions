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

const argsMap = new Map([[652605891,{"a":[{"selector":".td-ad-background-link #td-outer-wrap","action":["style","cursor: default !important"],"cssable":true}]}],[1372875435,{"a":[{"selector":"#SITE_PAGES > div > div[id]","action":["style","min-height: auto !important"],"cssable":true},{"selector":"[data-mesh-id]","action":["style","min-height: auto !important; height: auto !important"],"cssable":true},{"selector":"div[id]","tasks":[["has",{"selector":" > wix-iframe"}]]}]}],[1958373509,{"a":[{"selector":"body > #page","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1174317894,{"a":[{"selector":".home","action":["style","background-image: none !important; padding-top: 0 !important"],"cssable":true}]}],[495715445,{"a":[{"selector":".d-none","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1336098239,{"a":[{"selector":".widget-title","tasks":[["has-text","Новости партнёров"]]}]}],[353172350,{"a":[{"selector":"[class*=\"_title\"]","tasks":[["has-text",[" партн|реклама","i"]]]}]}],[1118650757,{"a":[{"selector":".module-title > .title","tasks":[["has-text",["ПАРТНЕРІВ","i"]]]}]}],[1625972193,{"a":[{"selector":".block-dark","tasks":[["has",{"selector":"script"}]]}]}],[245490878,{"a":[{"selector":"[class] > div","tasks":[["has",{"selector":" > [class*=\"title\"]","tasks":[["has-text","Our Friends|Sluts"]]}]]}]}],[820534156,{"a":[{"selector":".col-right tbody > tr","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":".col-right tbody > tr","tasks":[["has",{"selector":"[id*=\"banner\"]"}]]},{"selector":".col-right tbody > tr","tasks":[["has",{"selector":"[id^=\"SRTB_\"]"}]]},{"selector":".col-right tbody > tr","tasks":[["has",{"selector":"[id^=\"yandex_rtb_\"]"}]]},{"selector":".col-right tbody > tr","tasks":[["has",{"selector":"[src*=\"/ads/\"]"}]]}]}],[1789180763,{"a":[{"selector":"#wrap","action":["style","margin-top: auto !important"],"cssable":true}]}],[1124705853,{"a":[{"selector":".sidebar__block","tasks":[["has",{"selector":" > .block > .block__content > .smi24__informer"}]]},{"selector":".sidebar__block","tasks":[["has",{"selector":" > .block > .block__content > [data-la-block]"}]]},{"selector":".sidebar__block","tasks":[["has",{"selector":" > .block > .block__content > [id^=\"div-gpt-ad-\"]"}]]}]}],[468473856,{"a":[{"selector":"h2","tasks":[["has-text",["новости партнеров","i"]]]}]}],[463994840,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":" > .textwidget:first-child > :first-child:not(#SinoptikInformer)"}]]}]}],[1776185269,{"a":[{"selector":".side_header","tasks":[["has-text","Новости партнеров"]]}]}],[1319347758,{"a":[{"selector":".entry-galery","tasks":[["has",{"selector":" > .entry-galery-title","tasks":[["has-text",["полезное объявление|горячие новости","i"]]]}]]},{"selector":".left-column center","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[859754089,{"a":[{"selector":".header","action":["style","top: 0 !important"],"cssable":true}]}],[194994999,{"a":[{"selector":"body","action":["style","padding-top: 0 !important"],"cssable":true}]}],[2099544523,{"a":[{"selector":"body > .page-wrapper .test-vpn > a","action":["style","opacity: 0 !important; pointer-events: none !important"],"cssable":true},{"selector":"body[class] .content-article > p","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":"body[class] .related-content-links","tasks":[["has",{"selector":" > div[class^=\"ad_result\"]"}]]},{"selector":"body[class] .related-content-links-root > li","tasks":[["has",{"selector":" > a[href^=\"https://krot.io\"]"}],["spath"," + div"]]},{"selector":"body[class] .related-content-links-root > li","tasks":[["has",{"selector":" > a[href^=\"https://krot.io\"]"}]]}]}],[626943030,{"a":[{"selector":".overlayed .bottom-page.scroll-block","action":["style","filter: none !important; -webkit-filter: none !important"],"cssable":true}]}],[1702815870,{"a":[{"selector":".post_content.newsletter","action":["style","max-height: unset !important"],"cssable":true}]}],[868881912,{"a":[{"selector":"body","action":["style","position: unset !important"],"cssable":true}]}],[130550349,{"a":[{"selector":"[data-test-id=\"News_SpecialArticle\"] + div[class]:not(:empty) + div[class]:not(:empty)","action":["style","min-height: auto !important"],"cssable":true},{"selector":"[data-test-id=\"News_SpecialArticle\"] + div[class]:not(:empty)","action":["style","min-height: auto !important"],"cssable":true},{"selector":"[data-test-id=\"News_SpecialArticle\"] ~ div[class]:empty + div[class]:not(:empty) + div[class]:not(:empty)","action":["style","min-height: auto !important"],"cssable":true},{"selector":"[data-test-id=\"News_SpecialArticle\"] ~ div[class]:empty + div[class]:not(:empty)","action":["style","min-height: auto !important"],"cssable":true},{"selector":"[data-test-id=\"News_SpecialArticle\"]:empty","action":["style","min-height: auto !important"],"cssable":true},{"selector":"body > #app [data-branding-wrapper]","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":"body > #app [data-gtm-el=\"content-body\"] ~ div > div","tasks":[["has",{"selector":" > [data-subscribe-zen]"}]]},{"selector":"body > #app div","tasks":[["has",{"selector":" > div > [data-smi-blockid]"}]]},{"selector":"body > #app div","tasks":[["has",{"selector":" > div:first-child + div > div:first-child > div:first-child + section > div > div > script[data-key]"}]]},{"selector":"body > #app div[class]","tasks":[["has",{"selector":" > a[draggable=\"false\"][href^=\"https://zen.yandex.ru/\"]"}]]},{"selector":"body > #app div[style=\"display:block !important\"] > div:first-child > div:first-child + div > div:first-child + div > div[data-name]:first-child + div","action":["style","margin-top: auto !important"],"cssable":true}]}],[616779094,{"a":[{"selector":"body > .l-wrapper > div[style^=\"position: absolute; width: 30px; height: 30px; bottom: 13px; left: 10px;\"]","action":["style","opacity: unset !important"],"cssable":true}]}],[1304446936,{"a":[{"selector":"html > body:not(#id)","action":["style","overflow: auto !important"],"cssable":true}]}],[1970968149,{"a":[{"selector":"body","action":["style","background-color: inherit !important"],"cssable":true}]}],[580639433,{"a":[{"selector":".main-container","action":["style","margin-top: 0 !important"],"cssable":true}]}],[453427046,{"a":[{"selector":"body","action":["style","background: #e8ecff !important"],"cssable":true}]}],[1964751270,{"a":[{"selector":".page-layout-without-banner","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1365817023,{"a":[{"selector":".tn-article-grid > .tn-article-item","tasks":[["has",{"selector":" > div[class*=\"banner\"]"}]]},{"selector":"article > p","tasks":[["has",{"selector":" > a[href^=\"https://t.me/\"]"}]]}]}],[1802301510,{"a":[{"selector":".module","tasks":[["has",{"selector":" > div > iframe[src*=\"://yk.kz/\"][src$=\"/\"]"}]]},{"selector":".top-line + header.main","action":["style","top: auto !important"],"cssable":true}]}],[543057064,{"a":[{"selector":"body","action":["style","background: none !important"],"cssable":true}]}],[1394527302,{"a":[{"selector":"body > .wrap","action":["style","top: 0 !important"],"cssable":true}]}],[1304818768,{"a":[{"selector":"tr.row3 > td > ul > li","tasks":[["has",{"selector":" > a[href*=\"offer_id=\"]"}]]}]}],[183254658,{"a":[{"selector":".content > #info:nth-of-type(1)","tasks":[["has",{"selector":" > .textos"}]]}]}],[1705552320,{"a":[{"selector":".serials > .serial","tasks":[["has",{"selector":" > .serial-btn > .row > div > img[src^=\"/assets/smotret_anime-\"]"}]]}]}],[405457052,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > img[src*=\"/upload/bookmaker-\"]"}]]}]}],[1517010224,{"a":[{"selector":"aside > div","tasks":[["has",{"selector":" > [id*=\"banner\"]"}]]}]}],[1668932024,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":" > .widget-title","tasks":[["has-text","Реклама партнеров"]]}]]}]}],[730128577,{"a":[{"selector":"div[id$=\"sidebar\"] > .rounded","tasks":[["has",{"selector":" > .roundct > noindex"}]]}]}],[132059494,{"a":[{"selector":".have-brand .obertka-in","action":["style","margin-top: 70px !important"],"cssable":true}]}],[744282444,{"a":[{"selector":"div","tasks":[["has",{"selector":" > a[title=\"Реклама\"]"}]]}]}],[1947018807,{"a":[{"selector":".rightBlock","tasks":[["has",{"selector":" > .shopOffers"}]]}]}],[555244245,{"a":[{"selector":".AsideHeading","tasks":[["has-text",["kinopoiskhd","i"]]]},{"selector":".DefaultLayout-main","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".Grid-in .GridItem","tasks":[["has",{"selector":" > div .show-item-kinopoisk"}]]},{"selector":".Home-section","tasks":[["has",{"selector":" > div .title [class*=\"-promo-kp__\"]"}]]}]}],[639297484,{"a":[{"selector":".container > .marginBottomBase","tasks":[["has-text","Смотри на КиноПоиск HD|Watch on KinoPoisk HD"],["spath"," + .row + .contAlt"]]},{"selector":".container > .marginBottomBase","tasks":[["has-text","Смотри на КиноПоиск HD|Watch on KinoPoisk HD"],["spath"," + .row"]]},{"selector":".container > .marginBottomBase","tasks":[["has-text","Смотри на КиноПоиск HD|Watch on KinoPoisk HD"]]}]}],[1392062127,{"a":[{"selector":".quote a.btn","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":".sidebar > .site-team","tasks":[["has",{"selector":" > #twitch-embed"}]]}]}],[1856293737,{"a":[{"selector":"html.dark-mode > body","action":["style","filter: invert(90%) !important"],"cssable":true},{"selector":"html.dark-mode > iframe","action":["style","filter: none !important"],"cssable":true},{"selector":"html.dark-mode","action":["style","filter: none !important"],"cssable":true}]}],[656371939,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > a[title] > div[class]"}]]}]}],[1685496842,{"a":[{"selector":".wrap","action":["style","margin-top: 0 !important"],"cssable":true}]}],[2093036448,{"a":[{"selector":"#embed-video > [id^=\"blink\"]","action":["style","-webkit-animation: none !important; animation: none !important; color: var(--color--normal) !important; font-weight: normal !important"],"cssable":true},{"selector":".navbart > a[href] > .spin","action":["style","animation-name: none !important"],"cssable":true},{"selector":".publisher-name > [id^=\"blink\"]","action":["style","-webkit-animation: none !important; animation: none !important; color: var(--color--normal) !important; font-weight: normal !important"],"cssable":true}]}],[1122116082,{"a":[{"selector":".side-b > [class] [class]","tasks":[["has",{"selector":" > [class]:not(div) > [class]:empty"}]]},{"selector":".tabsbox [class] [class]","tasks":[["has",{"selector":" > [class]:not(div) > [class]:empty"}]]}]}],[2079565782,{"a":[{"selector":".dwrp","action":["style","margin-top: 0 !important"],"cssable":true}]}],[613340905,{"a":[{"selector":"[data-test-id$=\"-recommended\"] > div > div > div:nth-child(-1n+3)","tasks":[["has",{"selector":" > div > div > div:empty"}]]},{"selector":"body.ReactModal__Body--open","action":["style","overflow: auto !important"],"cssable":true}]}],[1045030740,{"a":[{"selector":".article__bg","action":["style","left: 49% !important"],"cssable":true}]}],[1225078877,{"a":[{"selector":".wrap","action":["style","padding-top: 0 !important; top: 0 !important"],"cssable":true}]}],[1680790953,{"a":[{"selector":"aside > .sidebar-widget","tasks":[["has",{"selector":" > .widget-head > h4","tasks":[["has-text",["реклама","i"]]]}]]}]}],[1789870473,{"a":[{"selector":"body > #header","action":["style","top: 0 !important"],"cssable":true},{"selector":"body > .page","action":["style","padding-top: 144px !important"],"cssable":true}]}],[742386144,{"a":[{"selector":".d-print-none","tasks":[["has",{"selector":" > script[src*=\".censor.net/js/\"]"}]]},{"selector":".right-sidebar__title_without_border","tasks":[["has",{"selector":" > div[style^=\"width: 300px; height: \"]"}]]},{"selector":"body > .widget_header .header_icons","action":["style","top: 0 !important"],"cssable":true},{"selector":"body > .widget_header .lang_switcher","action":["style","top: 0 !important"],"cssable":true},{"selector":"body > .widget_header .menu","action":["style","top: 0 !important"],"cssable":true},{"selector":"body > .widget_header","action":["style","padding-top: 60px !important"],"cssable":true}]}],[1571930753,{"a":[{"selector":".ipsWidget_inner","tasks":[["has",{"selector":" > #layout_al"}]]},{"selector":"form > article[id^=\"elComment_\"]","tasks":[["has",{"selector":"strong > a[href$=\"-Adver/\"]"}]]}]}],[1960147319,{"a":[{"selector":".sidebar > .section","tasks":[["has",{"selector":"h3","tasks":[["has-text","Реклама"]]}]]}]}],[1831160256,{"a":[{"selector":".wrapper.full","action":["style","margin-top: 70px !important"],"cssable":true}]}],[950826812,{"a":[{"selector":"body > #right ~ .middle","action":["style","margin-right: 4px !important"],"cssable":true}]}],[1933843961,{"a":[{"selector":".ReactVirtualized__Grid__innerScrollContainer","action":["style","height: auto !important"],"cssable":true},{"selector":".fs-table__row","action":["style","position: initial !important"],"cssable":true},{"selector":".fs-table__row[style^=\"height: 162px;\"]","action":["style","height: auto !important"],"cssable":true}]}],[731092240,{"a":[{"selector":".wrap > .block","action":["style","margin-top: 0 !important"],"cssable":true}]}],[184091649,{"a":[{"selector":"#container","action":["style","cursor: auto !important"],"cssable":true},{"selector":".content__sub-heading","tasks":[["has-text","Новости партнёров"]]},{"selector":".drag_element","tasks":[["has",{"selector":".content__text > b","tasks":[["has-text","Реклама"]]}]]},{"selector":".drag_element","tasks":[["has",{"selector":"[href*=\"/profile/1499330\"]"}]]},{"selector":".drag_element","tasks":[["has",{"selector":"[href*=\"poleznaja-reklama.html\"]"}]]},{"selector":".drag_element","tasks":[["has",{"selector":"[href]","tasks":[["has-text","Реклама"]]}]]}]}],[1313098624,{"a":[{"selector":"div[id^=\"post\"]","tasks":[["has",{"selector":"[href*=\"/profile/1499330\"]"}]]},{"selector":"div[id^=\"post\"]","tasks":[["has",{"selector":"[href*=\"/profile/543769\"]"}]]},{"selector":"div[id^=\"post\"]","tasks":[["has",{"selector":"[href]","tasks":[["has-text","Реклама"]]}]]}]}],[29466586,{"a":[{"selector":".page","action":["style","margin-top: 0 !important"],"cssable":true}]}],[626357743,{"a":[{"selector":"span","tasks":[["has-text","Интересные новости"]]}]}],[2109330989,{"a":[{"selector":".right-column > .b-newsfeed > span","action":["style","margin-top: 0 !important"],"cssable":true}]}],[810059794,{"a":[{"selector":"[class*=\"navi_title\"]","tasks":[["has-text",["браузер|партнеры","i"]]]}]}],[1046457627,{"a":[{"selector":"#wrapper","action":["style","margin-top: 0 !important"],"cssable":true}]}],[937827703,{"a":[{"selector":".mvp-widget-home-title","tasks":[["has-text","Реклама"]]}]}],[1529385509,{"a":[{"selector":"body:not(#id)","action":["style","padding-top: 0 !important; padding-bottom: 0 !important"],"cssable":true}]}],[1827540595,{"a":[{"selector":"body > div[class^=\"wrapper\"]","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1440066211,{"a":[{"selector":"[id^=\"oframevideoplayer\"] > pjsdiv","tasks":[["has",{"selector":" > pjsdiv","tasks":[["has-text","Сексчат"]]}]]}]}],[1072271083,{"a":[{"selector":".article","tasks":[["has",{"selector":" > .article__title > a > .advertising"}]]}]}],[49513487,{"a":[{"selector":"div","tasks":[["has",{"selector":" > table > tbody a[href*=\"kulichki.com/advert\"]"}]]}]}],[738061779,{"a":[{"selector":".sidebar > .widget_list_mag_wp_300px","tasks":[["has",{"selector":" > .img-300 > a[href][target=\"_blank\"]"}]]},{"selector":".sidebar > .widget_list_mag_wp_300px","tasks":[["has",{"selector":" > .img-300 > div[id]"}]]}]}],[809960957,{"a":[{"selector":"[href*=\"poluchenie-premium-dostupa.html\"] > b > .fa-spin","action":["style","animation: none !important"],"cssable":true}]}],[2002691193,{"a":[{"selector":"#videoViewPlayer","action":["style","padding-top: unset !important"],"cssable":true}]}],[1896370668,{"a":[{"selector":"div[id$=\"-menu\"] [class*=\"module-body\"]","tasks":[["has",{"selector":" > script[src]:not([src*=\"vk.com\"])"}]]}]}],[1442970129,{"a":[{"selector":".rightColomn > aside","tasks":[["has",{"selector":" > .textwidget"}]]}]}],[503415192,{"a":[{"selector":".container > .row > .col","tasks":[["has",{"selector":" > .card script"}]]}]}],[1373522116,{"a":[{"selector":"header > .body","action":["style","margin-top: 54px !important"],"cssable":true}]}],[613726256,{"a":[{"selector":".main-post > h3","tasks":[["has-text","Популярное"]]}]}],[1325123624,{"a":[{"selector":"body > #page","action":["style","margin-top: 65px !important"],"cssable":true},{"selector":"html > body","action":["style","background-image: none !important; background-color: transparent !important"],"cssable":true}]}],[1845325333,{"a":[{"selector":".banner","action":["style","height: 90px !important"],"cssable":true}]}],[1972171698,{"a":[{"selector":"p","tasks":[["has",{"selector":" > strong","tasks":[["has-text",["париматч","i"]]]}]]}]}],[938360606,{"a":[{"selector":".download_file","tasks":[["has",{"selector":" > a[href*=\"/sb/clk/\"]"}]]}]}],[1204049252,{"a":[{"selector":".blocked .text","action":["style","filter: none !important; -webkit-filter: none !important"],"cssable":true},{"selector":".blocked","action":["style","filter: none !important; -webkit-filter: none !important"],"cssable":true},{"selector":".locked .example","action":["style","filter: none !important; -webkit-filter: none !important"],"cssable":true}]}],[825695537,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":" > .widget-title","tasks":[["has-text","Хостинг-партнёр|Реклама"]]}]]}]}],[69873226,{"a":[{"selector":"#subheader","action":["style","padding-top: 0 !important"],"cssable":true}]}],[604197880,{"a":[{"selector":"#main-wrapper","action":["style","top: 0 !important"],"cssable":true}]}],[1314929317,{"a":[{"selector":"span[class]","tasks":[["has-text","Это может быть интересно"]]}]}],[746269208,{"a":[{"selector":".right-sidebar","action":["style","margin-top: 0 !important; overflow: hidden !important"],"cssable":true},{"selector":".widget-title","tasks":[["has-text","Реклама"]]}]}],[1033797500,{"a":[{"selector":"div[id^=\"news-id-\"] > .quote","tasks":[["has",{"selector":" > div"}]]}]}],[637063202,{"a":[{"selector":"#comments_block","action":["style","margin-top: unset !important"],"cssable":true},{"selector":".embed-instagram > iframe","action":["style","max-width: unset !important"],"cssable":true}]}],[1772921930,{"a":[{"selector":".newsText > p","tasks":[["has",{"selector":" > ins"}]]}]}],[1706832761,{"a":[{"selector":".side-widget","tasks":[["has",{"selector":"[id*=\"ScriptRoot\"]"}]]}]}],[1058073615,{"a":[{"selector":"body:not(#id)","action":["style","overflow: auto !important"],"cssable":true}]}],[720823260,{"a":[{"selector":"td[style=\"width:200px;\"] > table","tasks":[["has",{"selector":"b","tasks":[["has-text","Рекламный блок"]]}]]}]}],[1801476972,{"a":[{"selector":".adv-news:not(#id)","action":["style","display: block !important; pointer-events: none !important; opacity: 0 !important; height: 0 !important"],"cssable":true}]}],[832190022,{"a":[{"selector":"#top_banner:not(#id)","action":["style","display: block !important; pointer-events: none !important; opacity: 0 !important; height: 0 !important"],"cssable":true},{"selector":".advt:not(#id)","action":["style","display: block !important; pointer-events: none !important; opacity: 0 !important; height: 0 !important"],"cssable":true}]}],[845705737,{"a":[{"selector":".fixed-block > div[class] ~ div:not(#id)","action":["style","display: block !important; pointer-events: none !important; opacity: 0 !important; height: 0 !important"],"cssable":true},{"selector":".right-banner > div","action":["style","height: auto !important"],"cssable":true},{"selector":"a[href*=\"adpool.bet/\"]","action":["style","pointer-events: none !important; opacity: 0 !important; height: 0 !important"],"cssable":true},{"selector":"a[href][id$=\"op\"][style]:not(#id)","action":["style","display: block !important; pointer-events: none !important; opacity: 0 !important; height: 0 !important"],"cssable":true},{"selector":"article > section","tasks":[["has",{"selector":" > div > div > a[href*=\"/ad.adriver.\"]"}]]},{"selector":"div[class^=\"fuel-\"][class$=\"-banner\"]:not(#id)","action":["style","display: block !important; pointer-events: none !important; opacity: 0 !important; height: 0 !important"],"cssable":true},{"selector":"iframe[src*=\"/safemore.ukr.net/pframe/\"]","action":["style","height: 0 !important"],"cssable":true}]}],[550247945,{"a":[{"selector":".title-without-border","tasks":[["has-text","Новини партнерів"]]}]}],[773040886,{"a":[{"selector":".block","tasks":[["has",{"selector":" > .block-title","tasks":[["has-text","Интересное|Наши друзья|Реклама|Сидбокс|MARKETGID"]]}]]}]}],[177128001,{"a":[{"selector":".code-block","tasks":[["has",{"selector":" > .content_rb"}]]}]}],[2130761715,{"a":[{"selector":".article-right > div","tasks":[["has-text","Реклама"]]},{"selector":".container-mat p","tasks":[["has-text","Реклама"]]}]}],[971987342,{"a":[{"selector":".for-article > .js-switch-blocks-center > .news-feed-wrapper","tasks":[["has",{"selector":" > .news-feed > .for-banner"}]]}]}],[400370482,{"a":[{"selector":".body-branding","action":["style","background: none !important; padding-top: 0 !important"],"cssable":true}]}],[438067085,{"a":[{"selector":".td-post-content > p","tasks":[["has",{"selector":" > i > [onclick^=\"yaCounter\"]"}]]}]}],[1540642972,{"a":[{"selector":".grid > div[class^=\"it_\"]","tasks":[["has",{"selector":"a[href][target=\"_blank\"]"}]]},{"selector":"div[class^=\"it_\"]","tasks":[["has",{"selector":" > div[class^=\"banner\"]"}]]},{"selector":"p","tasks":[["has",{"selector":" > script","tasks":[["has-text","smi2"]]}]]}]}],[1562614758,{"a":[{"selector":"body","action":["style","background-image: none !important; background-color: #ffffff !important; padding-top: 0 !important"],"cssable":true}]}],[1889251052,{"a":[{"selector":".main .header","action":["style","padding-top: 94px !important"],"cssable":true},{"selector":".showfull .header","action":["style","padding-top: 60px !important"],"cssable":true},{"selector":"img[src]","action":["style","filter: none !important"],"cssable":true}]}],[905206304,{"a":[{"selector":".sidebar-block","tasks":[["has",{"selector":" > .sticky .comm-blog"}]]}]}],[1729525950,{"a":[{"selector":"header.top","action":["style","margin-bottom: 0 !important"],"cssable":true}]}],[1862622938,{"a":[{"selector":".header","action":["style","padding-block-start: 0 !important"],"cssable":true}]}],[1196780559,{"a":[{"selector":"body > .wrapper","action":["style","padding-top: 0 !important; padding-bottom: 0 !important"],"cssable":true},{"selector":"body","action":["style","padding-top: 0 !important; padding-bottom: 0 !important; background-image: none !important"],"cssable":true}]}],[1629050792,{"a":[{"selector":".title-block","tasks":[["has",{"selector":" > h2","tasks":[["has-text","Реклама"]]}]]}]}],[777428723,{"a":[{"selector":".bg_container > .wrapper-content","action":["style","padding-top: 0 !important"],"cssable":true}]}],[1580116020,{"a":[{"selector":"iframe.youtube-video:not([src*=\"//utraff.com/\"])","action":["style","display: block !important"],"cssable":true}]}],[2010405883,{"a":[{"selector":".book-box","tasks":[["has",{"selector":" > [class*=\"banner\"]"}]]}]}],[1081365087,{"a":[{"selector":".content:not(#id)","action":["style","margin-top: 80px !important"],"cssable":true}]}],[1140740639,{"a":[{"selector":".yet","tasks":[["has",{"selector":"div[id]:empty"}]]}]}],[564885350,{"a":[{"selector":".sidebar-widget","tasks":[["has",{"selector":" > [data-la-block]"}]]}]}],[1751429726,{"a":[{"selector":".posts-container > .card","tasks":[["has",{"selector":" > div > [id^=\"yandex_rtb_\"]"}]]},{"selector":".posts-container > .card","tasks":[["has",{"selector":" > iframe[src*=\"/banners/\"]"}]]}]}],[1092969840,{"a":[{"selector":".item","tasks":[["has",{"selector":" > script"}]]},{"selector":".item","tasks":[["has",{"selector":"[src*=\"/images/pek.png\"]"}]]}]}],[670432447,{"a":[{"selector":"td[align=\"left\"]","tasks":[["has",{"selector":" > div[id^=\"bb\"] > [id*=\"ScriptRoot\"]"}]]},{"selector":"td[valign=\"top\"][width=\"155\"] > table","tasks":[["has",{"selector":"div[id*=\"Composite\"]"}]]},{"selector":"td[valign=\"top\"][width=\"155\"] > table","tasks":[["has",{"selector":"div[id^=\"bn_\"]"}]]}]}],[2046798653,{"a":[{"selector":"#content","action":["style","top: 0 !important; left: 0 !important; width: 100% !important; margin-left: 0 !important"],"cssable":true}]}],[2019780905,{"a":[{"selector":".vce-related-box","tasks":[["has",{"selector":" > .main-box-inside script"}]]}]}],[1860021988,{"a":[{"selector":"li","tasks":[["has",{"selector":" > .preview > [href*=\"advg.agency\"]"}]]}]}],[1259993854,{"a":[{"selector":"body:not(#id) .header","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1305358088,{"a":[{"selector":"#left-block","action":["style","min-height: 100% !important"],"cssable":true},{"selector":"#right-block","action":["style","min-height: 100% !important"],"cssable":true}]}],[1108416395,{"a":[{"selector":".justify-content-center > .col[id]","action":["style","max-width: max-content !important"],"cssable":true},{"selector":"body > footer","action":["style","background: none !important"],"cssable":true},{"selector":"main#mainContainer","action":["style","max-width: unset !important"],"cssable":true}]}],[1882463269,{"a":[{"selector":"#advert","action":["style","height: 1px !important"],"cssable":true}]}],[1542480760,{"a":[{"selector":".menu > li[style^=\"padding-left:\"]","action":["style","padding-left: unset !important"],"cssable":true},{"selector":".menu ul li a","action":["style","height: auto !important"],"cssable":true}]}],[1875758868,{"a":[{"selector":"h6","tasks":[["has-text",["^реклама","i"]]]}]}],[2034989238,{"a":[{"selector":".short-poster > img","action":["style","filter: none !important; -webkit-filter: none !important"],"cssable":true}]}],[1893568855,{"a":[{"selector":"body > .container","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1589451708,{"a":[{"selector":".social_title","tasks":[["has-text","Новости партнеров"]]}]}],[771060096,{"a":[{"selector":"#main","action":["style","max-width: 100% !important"],"cssable":true}]}],[294241635,{"a":[{"selector":"td > .forabg","tasks":[["has",{"selector":"dt","tasks":[["has-text","Проверенный выгодный обменник!"]]}]]}]}],[1539180412,{"a":[{"selector":"#rightside > div","tasks":[["has-text","На правах рекламы"]]}]}],[238140874,{"a":[{"selector":".navbar-default","action":["style","margin-bottom: 0 !important"],"cssable":true}]}],[144457997,{"a":[{"selector":".nchead","tasks":[["has",{"selector":" > .ncheading","tasks":[["has-text",["партн","i"]]]}]]},{"selector":".row[style^=\"padding-\"]","tasks":[["has",{"selector":" > .nchead > .ncheading","tasks":[["has-text",["^партн","i"]]]}]]}]}],[1222679437,{"a":[{"selector":".item","tasks":[["has",{"selector":" > div > [src*=\"pek.png\"]"}]]}]}],[302045234,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":"a[href*=\"/is.gd\"]"}]]}]}],[2081521724,{"a":[{"selector":".mcolum > .search","tasks":[["has",{"selector":"script"}]]},{"selector":"table.bblock","tasks":[["has",{"selector":"[src*=\"/wizit/\"]"}]]}]}],[246151012,{"a":[{"selector":".title","tasks":[["has",{"selector":" > h2","tasks":[["has-text",[" партнер","i"]]]}]]}]}],[558186433,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":" > .td-block-title","tasks":[["has-text","Реклама"]]}]]}]}],[1763092013,{"a":[{"selector":"div","tasks":[["has",{"selector":" > div > [href*=\"bit.ly\"]"}]]}]}],[114810388,{"a":[{"selector":"#vO5STmSLgNAkebzSluI8coxpDgsG97g","action":["style","height: 1px !important; min-height: 1px !important"],"cssable":true}]}],[1379718718,{"a":[{"selector":"#main-wrapper > #wrap","action":["style","padding: 0 10px !important"],"cssable":true},{"selector":"td[valign=\"top\"] > .forabg","tasks":[["has",{"selector":" > div > div > .inner > .postbody > .content > script[src*=\"oldxit.ru\"]"}]]}]}],[1352603240,{"a":[{"selector":"body > #branding","action":["style","padding-top: 0 !important"],"cssable":true}]}],[1722143159,{"a":[{"selector":".top_bg","action":["style","height: 0 !important"],"cssable":true}]}],[1500822508,{"a":[{"selector":".sideBlock","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".sideBlock","tasks":[["has",{"selector":" > [id^=\"CNM\"]"}]]}]}],[942027620,{"a":[{"selector":".media-block-wrap","tasks":[["has",{"selector":" > div iframe[src*=\"/russian-echo-widget/\"]"}]]}]}],[998447205,{"a":[{"selector":"body","action":["style","width: 100% !important"],"cssable":true}]}],[1543842298,{"a":[{"selector":"td","tasks":[["has-text","bit.ly|clck.ru|vk.cc"]]}]}],[51971933,{"a":[{"selector":".colorAdmin","action":["style","color: black !important; font-weight: 100 !important; font-size: 8px !important"],"cssable":true}]}],[1072892665,{"a":[{"selector":"#textstory ~ div[id][class]","tasks":[["has",{"selector":" > a > img"}]]}]}],[1434675777,{"a":[{"selector":".content > .media","action":["style","padding-bottom: unset !important"],"cssable":true},{"selector":".right-sidebar","action":["style","height: auto !important"],"cssable":true}]}],[496286661,{"a":[{"selector":".main-container","action":["style","margin-top: 80px !important"],"cssable":true}]}],[2062200530,{"a":[{"selector":".side-block","tasks":[["has",{"selector":"div","tasks":[["has-text","Реклама"]]}]]}]}],[184869423,{"a":[{"selector":".body > .body","action":["style","user-select: text !important; -moz-user-select: text !important; -webkit-user-select: text !important"],"cssable":true},{"selector":".footer","action":["style","background: #1c1e1f !important; color: #fff !important"],"cssable":true},{"selector":".gallery_img_preload","action":["style","position: absolute !important; display: block !important; opacity: 0 !important; margin-top: 155px !important; margin-left: 20px !important; width: calc(100% - 40%);"],"cssable":true},{"selector":".lstfml .footer .links a","action":["style","color: #fff !important"],"cssable":true},{"selector":"body","action":["style","background-image: none !important; background-color: #1c1e1f !important"],"cssable":true}]}],[971933728,{"a":[{"selector":".popularreviewscats-home","tasks":[["has",{"selector":" > h2","tasks":[["has-text","Новини партнерів"]]}]]},{"selector":".row > div","tasks":[["has",{"selector":" > .card-blog script"}]]},{"selector":"p","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[2144740568,{"a":[{"selector":"span","tasks":[["has-text","Реклама"]]}]}],[2046247997,{"a":[{"selector":".BodyNewsStyle","tasks":[["has",{"selector":" > div > [id^=\"yandex_rtb\"]"}]]}]}],[1347940752,{"a":[{"selector":".side-bt","tasks":[["has-text",["интересное|реклама","i"]]]}]}],[589463791,{"a":[{"selector":"#page-wrapper > header","action":["style","margin-bottom: auto !important"],"cssable":true}]}],[945556070,{"a":[{"selector":".wrapper","action":["style","padding-top: 0 !important"],"cssable":true}]}],[1803185380,{"a":[{"selector":"#overlay-modal > div > div > div","tasks":[["has",{"selector":" > [data-cms-place]"}]]},{"selector":".right-column-container > .right-column > div","action":["style","height: auto !important"],"cssable":true},{"selector":"noindex > div[class]:empty","action":["style","height: auto !important"],"cssable":true}]}],[1448934701,{"a":[{"selector":".widget_custom_html","tasks":[["has",{"selector":" > .textwidget > #MediaMetricsInject"}]]}]}],[726546771,{"a":[{"selector":"div[class^=\"Branding_container_\"]","action":["style","margin-top: unset !important; height: auto !important"],"cssable":true}]}],[1851923268,{"a":[{"selector":".body *","action":["style","opacity: 1 !important; filter: none !important; pointer-events: auto !important"],"cssable":true},{"selector":".topAdvertize__wrapper","action":["style","height: auto !important"],"cssable":true}]}],[1703022702,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > [class] > span ~ a[href^=\"http://redirect.2gis.com/adv/\"]"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > div[class] > [class]","tasks":[["has-text","^Организации рядом$|^Похожие организации$"]]}]]},{"selector":"div[style^=\"--bg-color:\"] + div > div:nth-child(2) div[class]","tasks":[["has",{"selector":" > div > span","tasks":[["has-text"," — реклама"]]}]]},{"selector":"div[style^=\"display:\"][style*=\"flex;\"][style*=\"height:\"][style*=\"100%;\"][style*=\"overflow:\"][style*=\"hidden;\"][style*=\"width:\"] div[style^=\"position: absolute;\"] div[class]","tasks":[["matches-css",{"name":"background-color","value":"^rgb\\(255, 250, 235\\)$"}]]}]}],[398566128,{"a":[{"selector":"span","tasks":[["has-text"," — реклама"]]}]}],[1698702764,{"a":[{"selector":".subscribe_padding","action":["style","padding-top: 60px !important"],"cssable":true}]}],[1771604329,{"a":[{"selector":"#global-wrapper:not(#id) > #wrapper","action":["style","top: 0 !important"],"cssable":true},{"selector":"#global-wrapper[style*=\"pointer\"] > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"#global-wrapper[style*=\"pointer\"]","action":["style","cursor: auto !important; padding-top: 0 !important; background: none !important; pointer-events: none !important"],"cssable":true},{"selector":"html[lang=\"ru\"] > body","action":["style","background: radial-gradient(ellipse at center,#4e4e4e 0%,#1a1a1a 100%) !important"],"cssable":true}]}],[31039707,{"a":[{"selector":".post-footer > span","tasks":[["has-text","Реклама на сайте"]]},{"selector":".theiaStickySidebar > .widget > .widget ","tasks":[["has",{"selector":".widget-title > h2","tasks":[["has-text","Интересная реклама"]]}]]}]}],[1722866592,{"a":[{"selector":"h3","tasks":[["has-text","Новости Lentainform|Новости СМИ2|Новости Лентаинформ"]]}]}],[1228251153,{"a":[{"selector":".col > .news-grid","tasks":[["has",{"selector":"[class*=\"adv-\"]"}]]}]}],[136104387,{"a":[{"selector":"body","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1696657997,{"a":[{"selector":"td.t_bg > center","tasks":[["has",{"selector":" > a[href][target=\"_blank\"] > img"}]]}]}],[662134199,{"a":[{"selector":".billboard__item","tasks":[["has",{"selector":" > .adv-daily"}]]}]}],[721971987,{"a":[{"selector":".content","tasks":[["has",{"selector":" > div > #nadoelo"}]]}]}],[326207531,{"a":[{"selector":"#new_logo_helper01","action":["style","top: 0 !important"],"cssable":true}]}],[1165141092,{"a":[{"selector":"#container:not(#id)","action":["style","margin-top: 0 !important"],"cssable":true}]}],[344448692,{"a":[{"selector":"#rightside .main-content","tasks":[["has",{"selector":" > span script"}]]},{"selector":"#rightside .main-head","tasks":[["has",{"selector":" > .hn > span","tasks":[["has-text","Реклама"]]}]]}]}],[381907573,{"a":[{"selector":".b_read_online","tasks":[["has",{"selector":" > .litres_fragment_body"}]]}]}],[1128214427,{"a":[{"selector":".container","tasks":[["has",{"selector":" > div[align=\"center\"] > video > [src*=\"://dental-paint.ru/\"]"}]]}]}],[840654808,{"a":[{"selector":".content-wrapper","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".field-item > p","tasks":[["has",{"selector":"noindex [href*=\"adfox.ru\"]"}]]},{"selector":".field-item > p","tasks":[["has",{"selector":"noindex [href*=\"adpool.bet\"]"}]]},{"selector":".field-item > p","tasks":[["has",{"selector":"noindex [href*=\"fonbet.ru\"]"}]]},{"selector":".field-item > p","tasks":[["has",{"selector":"noindex [href*=\"pari.ru\"]"}]]},{"selector":".field-item > p","tasks":[["has",{"selector":"noindex [href*=\"paribet.ru\"]"}]]},{"selector":".field-item > p","tasks":[["has",{"selector":"noindex [href*=\"parimatch.ru\"]"}]]},{"selector":".field-item > p","tasks":[["has",{"selector":"noindex [href*=\"utm_campaign\"]"}]]},{"selector":".last-news","tasks":[["has",{"selector":" > .block_title ~ [id^=\"unit_\"]"}]]},{"selector":".voting > .block_title","tasks":[["has-text","Новости партнеров"]]},{"selector":"body *","action":["style","transition: none !important"],"cssable":true}]}],[1640862240,{"a":[{"selector":"main > .container > .site-content","tasks":[["has",{"selector":" > .content-banner"}]]}]}],[842747058,{"a":[{"selector":".adr-top","action":["style","height: 0 !important; min-height: 0 !important"],"cssable":true}]}],[804921631,{"a":[{"selector":".deflt-blk","tasks":[["has",{"selector":" > div[id^=\"adfox_\"]"}]]}]}],[644718064,{"a":[{"selector":"tbody > tr","tasks":[["has",{"selector":" > td[valign=\"top\"][width=\"130\"] > font > [href=\"/advertising/\"]"}]]},{"selector":"tbody > tr","tasks":[["has",{"selector":" > td[valign=\"top\"][width=\"130\"] > font > [href=\"/approach/\"]"}]]}]}],[2000111396,{"a":[{"selector":"#trend","action":["style","margin-bottom: 0 !important"],"cssable":true},{"selector":"#wrapper","action":["style","background: none !important"],"cssable":true}]}],[845885272,{"a":[{"selector":".nav-line","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"body","action":["style","background-color: rgb(255, 255, 238) !important"],"cssable":true}]}],[1926969486,{"a":[{"selector":".home","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":".single","action":["style","padding-top: 0 !important"],"cssable":true}]}],[1255593055,{"a":[{"selector":".need-friends","action":["style","margin-top: 125px !important"],"cssable":true}]}],[338062717,{"a":[{"selector":".headb","action":["style","height: auto !important"],"cssable":true},{"selector":".wrap","action":["style","margin-top: unset !important"],"cssable":true}]}],[490734092,{"a":[{"selector":"article.full > div .skrin ~ div","action":["style","border: unset !important; background-color: unset !important"],"cssable":true},{"selector":"aside > .side-c","tasks":[["has",{"selector":"[id^=\"adfox_\"]"}]]}]}],[735627289,{"a":[{"selector":".wrapper","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1727127221,{"a":[{"selector":".htitle","action":["style","margin-left: 0 !important; left: 150px !important"],"cssable":true},{"selector":".logo","action":["style","margin-left: 0 !important; left: 0 !important"],"cssable":true},{"selector":"body > .standard","action":["style","height: 100px !important; background: transparent !important"],"cssable":true},{"selector":"header[role=\"banner\"]","action":["style","height: 100px !important; background: transparent !important"],"cssable":true},{"selector":"nav[role=\"navigation\"] > ul","action":["style","top: 0 !important"],"cssable":true}]}],[1532322156,{"a":[{"selector":".native-brand ~ section.main","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".native-brand","action":["style","height: 0 !important"],"cssable":true},{"selector":"header","action":["style","position: relative !important"],"cssable":true}]}],[1015568895,{"a":[{"selector":".page-wrapper","action":["style","padding-top: 0 !important"],"cssable":true}]}],[1284856550,{"a":[{"selector":".col","tasks":[["has",{"selector":" > [id^=\"yandex_rtb_\"]"}]]},{"selector":"[class]","tasks":[["has",{"selector":" > a[href] [class*=\"partner\"]"}]]},{"selector":"li","tasks":[["has",{"selector":" > span","tasks":[["has-text","Новости партнеров"]]}]]}]}],[1192351965,{"a":[{"selector":".sp-column > .sp-module","tasks":[["has",{"selector":"[id*=\"ScriptRoot\"]"}]]}]}],[1061164734,{"a":[{"selector":".tablebg","tasks":[["has",{"selector":" > tbody > tr > td > .nalivaj"}]]},{"selector":".tablebg","tasks":[["has",{"selector":" > tbody > tr > td > h4","tasks":[["has-text","^Реклама$"]]}]]}]}],[116954473,{"a":[{"selector":"#pagewrapper","action":["style","margin-top: 0 !important"],"cssable":true}]}],[563711552,{"a":[{"selector":".right-block-content > .slider","action":["style","padding: 0 !important"],"cssable":true}]}],[592066631,{"a":[{"selector":".aside-block","tasks":[["has",{"selector":" > .media_aside_our-partners"}]]}]}],[1264635010,{"a":[{"selector":".text-center","tasks":[["has-text",["ДВИГАТЕЛЬ ТОРГОВЛИ|И еще немного рекламы|новости партнеров","i"]]]}]}],[893727951,{"a":[{"selector":"#bigColumn + div[class] > div:first-child + div > div div","action":["style","min-height: 0 !important; border-bottom: unset !important"],"cssable":true},{"selector":"#bigColumn script + div[class] > div[style^=\"height\"] *","action":["style","height: inherit !important"],"cssable":true},{"selector":"#bigColumn script + div[class] > div[style^=\"height\"] > div","action":["style","position: initial !important; transform: none !important; width: inherit !important"],"cssable":true},{"selector":"#bigColumn script + div[class] > div[style^=\"height\"]","action":["style","width: inherit !important; height: inherit !important"],"cssable":true},{"selector":".commercial-branding div[class]","tasks":[["has",{"selector":" > div[class] > div[id^=\"adfox-\"]:only-child"}]]},{"selector":"[data-blocks=\"top_news_block\"] > div:first-child + div > div div","action":["style","min-height: 0 !important; border-bottom: unset !important"],"cssable":true},{"selector":"[data-blocks] div[class]:empty","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"[data-blocks^=\"cluster_\"] > div:empty ~ div","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"div[style=\"order:-1\"] > div > div","action":["style","min-height: 0 !important"],"cssable":true}]}],[653142597,{"a":[{"selector":"div","tasks":[["has",{"selector":" > div > [data-rnet]"}]]}]}],[1946811769,{"a":[{"selector":".avito-ads-container","action":["style","margin: 0 !important; min-height: 0 !important; padding-top: 0 !important"],"cssable":true}]}],[1114291113,{"a":[{"selector":"div","tasks":[["has",{"selector":" > [class] > h2","tasks":[["has-text","Pеклама"]]}]]},{"selector":"div[class^=\"styles-root\"]","tasks":[["has",{"selector":" > div > div[class^=\"avito-ads\"]"}]]},{"selector":"div[class^=\"styles-root\"]","tasks":[["has",{"selector":" > div[class^=\"avito-ads\"]"}]]}]}],[38445341,{"a":[{"selector":".right-column > [class]","tasks":[["has",{"selector":"[src*=\"2xclick.ru\"]"}]]}]}],[1272391907,{"a":[{"selector":".wrapper-background","action":["style","padding-top: 0 !important"],"cssable":true}]}],[450250263,{"a":[{"selector":".header--short.header","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1112893612,{"a":[{"selector":"article > aside","tasks":[["has",{"selector":" > [data-offer]"}]]}]}],[659130689,{"a":[{"selector":"p > strong","tasks":[["has-text","реклама"]]}]}],[539767417,{"a":[{"selector":"main > article.post","tasks":[["has",{"selector":" > header > .mainpage_title > [title^=\"InstallPack\"]"}]]}]}],[1056566708,{"a":[{"selector":"#userTabs","action":["style","float: none !important"],"cssable":true}]}],[647560394,{"a":[{"selector":"h4","tasks":[["has-text","Реклама :"]]},{"selector":"p","tasks":[["has-text","Реклама :"]]}]}],[1029664934,{"a":[{"selector":".sidebar__content-wrp","tasks":[["has",{"selector":".sidebar__image > a[href^=\"http://gamazavr.ru/\"]"}]]}]}],[1479817841,{"a":[{"selector":".box","tasks":[["has",{"selector":" > noindex"}]]},{"selector":"aside > div","tasks":[["has",{"selector":"script"}]]}]}],[495932868,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > [id^=\"yandex_rtb_\"]"}]]}]}],[456900348,{"a":[{"selector":".widget_custom_html","tasks":[["has",{"selector":"span","tasks":[["has-text","Реклама партнера"]]}]]}]}],[1847696417,{"a":[{"selector":".branding","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1570303300,{"a":[{"selector":"#news-arch","tasks":[["has",{"selector":"h4","tasks":[["has-text","Реклама"]]}]]},{"selector":"*","tasks":[["has",{"selector":" > [id^=\"BlockId\"]"}]]}]}],[611981243,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":".medicinetizer"}]]}]}],[2100621415,{"a":[{"selector":"#sidebar > .block","tasks":[["has",{"selector":" > .blockcontent > noindex > [id^=\"kdm-bloc-\"]"}]]}]}],[71505411,{"a":[{"selector":"body.cookielaw-blur-background > *","action":["style","filter: none !important"],"cssable":true},{"selector":"html > head ~ body","action":["style","overflow-y: auto !important"],"cssable":true}]}],[794650104,{"a":[{"selector":"html > body","action":["style","background-image: none !important; pointer-events: none !important"],"cssable":true}]}],[1936557657,{"a":[{"selector":".shelf","tasks":[["has",{"selector":" > .adaptive-banner"}]]},{"selector":".shelf","tasks":[["has",{"selector":" > .ebooks-widget"}]]},{"selector":".shelf","tasks":[["has",{"selector":" > [data-disclaimer*=\"Реклама\"]"}]]}]}]]);

const hostnamesMap = new Map([["mediasat.info",652605891],["mivmeste.info",1372875435],["news-sport.info",1958373509],["newsyou.info",1174317894],["nnovosti.info",495715445],["pkzsk.info",1336098239],["pravdanews.info",353172350],["ruspravda.info",353172350],["procherk.info",1118650757],["rgmechanics.info",1625972193],["rintor.info",245490878],["rintor.net",245490878],["ru-an.info",820534156],["rusfootball.info",1789180763],["socportal.info",[1124705853,468473856]],["glav.su",468473856],["treebuna.info",463994840],["x-true.info",1776185269],["zhzh.info",1319347758],["zhzh.com.ua",1319347758],["1plus1.international",[859754089,194994999]],["bigudi.tv",[859754089,194994999]],["plus-plus.tv",[859754089,194994999]],["tet.tv",[859754089,194994999]],["1plus1.ua",[859754089,194994999]],["2plus2.ua",[859754089,194994999]],["paramountcomedy.com.ua",[859754089,194994999]],["1plus1.video",[859754089,194994999]],["kaztorka.org",[194994999,771060096]],["allboxing.ru",[194994999,840654808]],["star-wars-film.ru",194994999],["nv.ua",194994999],["livesport.ws",194994999],["2ip.io",2099544523],["2ip.ru",2099544523],["mega.io",626943030],["mega.nz",626943030],["thebell.io",1702815870],["vtimes.io",868881912],["kp.kg",[130550349,616779094]],["kp.kz",[130550349,616779094]],["kp.md",[130550349,616779094]],["kp.ru",[130550349,616779094]],["teleprogramma.pro",616779094],["116.ru",[616779094,1803185380]],["14.ru",[616779094,1803185380]],["161.ru",[616779094,1803185380]],["164.ru",[616779094,1803185380]],["178.ru",[616779094,1803185380]],["26.ru",[616779094,1803185380]],["29.ru",[616779094,1803185380]],["35.ru",[616779094,1803185380]],["43.ru",[616779094,1803185380]],["45.ru",[616779094,1803185380]],["48.ru",[616779094,1803185380]],["51.ru",[616779094,1803185380]],["53.ru",[616779094,1803185380]],["56.ru",[616779094,1803185380]],["59.ru",[616779094,1803185380]],["60.ru",[616779094,1803185380]],["62.ru",[616779094,1803185380]],["63.ru",[616779094,1803185380]],["68.ru",[616779094,1803185380]],["71.ru",[616779094,1803185380]],["72.ru",[616779094,1803185380]],["74.ru",[616779094,1803185380]],["76.ru",[616779094,1803185380]],["7days.ru",[616779094,136104387]],["86.ru",[616779094,1803185380]],["89.ru",[616779094,1803185380]],["93.ru",[616779094,1803185380]],["chita.ru",[616779094,1803185380]],["doctorpiter.ru",616779094],["e1.ru",[616779094,1803185380]],["ircity.ru",[616779094,1803185380]],["dom.mail.ru",616779094],["lady.mail.ru",616779094],["mgorsk.ru",[616779094,1803185380]],["msk1.ru",[616779094,1803185380]],["ngs.ru",[616779094,1803185380]],["ngs22.ru",[616779094,1803185380]],["ngs24.ru",[616779094,1803185380]],["ngs42.ru",[616779094,1803185380]],["ngs55.ru",[616779094,1803185380]],["ngs70.ru",[616779094,1803185380]],["nn.ru",[616779094,1803185380]],["proizhevsk.ru",[616779094,1803185380]],["provoronezh.ru",[616779094,1803185380]],["radiokp.ru",616779094],["sochi1.ru",[616779094,1803185380]],["sterlitamak1.ru",[616779094,1803185380]],["tolyatty.ru",[616779094,1803185380]],["ufa1.ru",[616779094,1803185380]],["v1.ru",[616779094,1803185380]],["wday.ru",616779094],["woman.ru",616779094],["namba.kg",1304446936],["ts.kg",[1970968149,580639433]],["asienda.ru",[1970968149,116954473]],["diets.ru",1970968149],["gameguru.ru",1970968149],["mycharm.ru",[1970968149,116954473]],["myjane.ru",[1970968149,116954473]],["povarenok.ru",1970968149],["relook.ru",1970968149],["stranamam.ru",1970968149],["namba.kz",453427046],["shaiba.kz",1964751270],["tengrinews.kz",1365817023],["yk.kz",1802301510],["nnm-club.lib",[543057064,1394527302]],["nnm-club.me",[543057064,1394527302]],["serialbox.org",543057064],["nnmclub.ro",[543057064,1394527302]],["hi-fi.ru",543057064],["hi-news.ru",543057064],["modernrock.ru",543057064],["nnmclub.to",[543057064,1394527302]],["kino-teatr.ua",543057064],["rutracker.lib",1304818768],["rutr.life",1304818768],["rutracker.net",1304818768],["rutracker.nl",1304818768],["rutracker.org",1304818768],["igra.life",183254658],["24.animez.live",1705552320],["scores24.live",405457052],["point.md",1517010224],["news.center4.me",1668932024],["cwer.me",730128577],["cwer.ru",730128577],["cwer.su",730128577],["cwer.ws",730128577],["filmhd1080.me",132059494],["gdekino.me",744282444],["librebook.me",1947018807],["myshows.me",555244245],["old.myshows.me",639297484],["online-fix.me",1392062127],["opennet.me",1856293737],["opennet.ru",1856293737],["spafilms.me",656371939],["tabfil.me",1685496842],["tasix.me",2093036448],["kino.video",2093036448],["tokino.me",1122116082],["torrentinka.me",2079565782],["adme.media",613340905],["holod.media",1045030740],["1080kino.net",1225078877],["asilmedia.net",1680790953],["www.bigmir.net",1789870473],["censor.net",742386144],["forum.cxem.net",1571930753],["do4a.net",1960147319],["doramax.net",1831160256],["driveroff.net",950826812],["fex.net",1933843961],["filmishki.net",731092240],["fishki.net",184091649],["old.fishki.net",1313098624],["hdru.net",29466586],["headinsider.net",626357743],["hvylya.net",2109330989],["igrigo.net",810059794],["igry-online.net",1046457627],["kinocok.org",1046457627],["fullfilmhd.space",1046457627],["animespirit.tv",1046457627],["infosmi.net",937827703],["jut-su.net",1529385509],["kinoakter.net",1827540595],["kinokordon.net",1440066211],["korrespondent.net",1072271083],["football.kulichki.net",49513487],["lavnik.net",738061779],["lrepacks.net",809960957],["megogo.net",2002691193],["memesmix.net",1896370668],["mods-fs.net",1442970129],["mskins.net",503415192],["nashaplaneta.net",1373522116],["novostionline.net",613726256],["playua.net",1325123624],["politobzor.net",1845325333],["prsport.net",1972171698],["repackov.net",938360606],["context.reverso.net",1204049252],["rg-adguard.net",825695537],["rserials.net",69873226],["season-var.net",604197880],["seosprint.net",1314929317],["vip-prom.net",1314929317],["seo-master.org",1314929317],["stravy.net",746269208],["texdizain.net",1033797500],["tochka.net",637063202],["toneto.net",1772921930],["transkarpatia.net",1706832761],["turboserial.net",1058073615],["stalker-2-2012.ucoz.net",720823260],["ukr.net",1801476972],["mail.ukr.net",832190022],["www.ukr.net",845705737],["unian.net",550247945],["unian.ua",550247945],["uniongang.net",773040886],["uniongang.org",773040886],["vsekamni.net",177128001],["wotsite.net",2130761715],["yarnews.net",971987342],["zaycev.net",400370482],["bugaga.ru",400370482],["dontimes.news",438067085],["sm.news",1540642972],["ua.news",1562614758],["hentai-share.one",1889251052],["theuk.one",905206304],["amedia.online",1729525950],["animegid.online",1862622938],["animego.online",1196780559],["gorod24.online",1629050792],["kirov.online",777428723],["tv-kanali.online",1580116020],["vklasse.online",2010405883],["zaycev.online",1081365087],["24smi.org",1140740639],["allkey.org",564885350],["anadyr.org",1751429726],["appmo.org",1092969840],["bigfangroup.org",670432447],["freebfg.org",670432447],["binmovie.org",2046798653],["bizua.org",2019780905],["blokino.org",1860021988],["dostfilms.org",1259993854],["liveresult.ru",1259993854],["wowskill.ru",1259993854],["dugtor.org",1305358088],["dugtor.ru",1305358088],["fastpic.org",1108416395],["freeopenvpn.org",1882463269],["freetp.org",1542480760],["graniru.org",1875758868],["hentaiz.org",2034989238],["igrovaya.org",1893568855],["vsetors.org",1893568855],["inforesist.org",1589451708],["bt.kubyshka.org",294241635],["lion-tv.org",1539180412],["my-hit.org",238140874],["nikcenter.org",144457997],["obmenvsem.org",1222679437],["ofitsialnaya-versiya.org",302045234],["opensharing.org",2081521724],["ostro.org",246151012],["photolessons.org",558186433],["photoshop-besplatno.org",1763092013],["pronpic.org",114810388],["riperam.org",1379718718],["rufootballtv.org",1352603240],["pimpletv.ru",1352603240],["simhost.org",1722143159],["siteua.org",1500822508],["svoboda.org",942027620],["tfile-music.org",998447205],["trupornolabs.org",1543842298],["uniondht.org",51971933],["vsthemes.org",1072892665],["animedia.pro",[1434675777,496286661]],["tt.animedia.tv",496286661],["e-news.pro",2062200530],["e-news.su",2062200530],["lostfilm.pro",184869423],["lostfilm.run",184869423],["lostfilmtv.site",184869423],["lostfilmtv1.site",184869423],["lostfilmtv2.site",184869423],["lostfilmtv3.site",184869423],["lostfilmtv4.site",184869423],["lostfilmtv5.site",184869423],["lostfilm.today",184869423],["lostfilm.tv",184869423],["lostfilm.tw",184869423],["lostfilm.uno",184869423],["lostfilmtv.uno",184869423],["lostfilm.win",184869423],["pingvin.pro",971933728],["remontka.pro",2144740568],["unews.pro",2046247997],["kinohulk.pw",1347940752],["jjjo.ru",1347940752],["cpa.rip",589463791],["101.ru",945556070],["125region.ru",1448934701],["www.1tv.ru",726546771],["26-2.ru",1851923268],["arbitr-praktika.ru",1851923268],["budgetnik.ru",1851923268],["buhsoft.ru",1851923268],["business.ru",1851923268],["cxychet.ru",1851923268],["dirsalona.ru",1851923268],["fd.ru",1851923268],["gazeta-unp.ru",1851923268],["gd.ru",1851923268],["gkh.ru",1851923268],["glavbukh.ru",1851923268],["hr-director.ru",1851923268],["kdelo.ru",1851923268],["kom-dir.ru",1851923268],["law.ru",1851923268],["lawyercom.ru",1851923268],["menobr.ru",1851923268],["nalogplan.ru",1851923268],["pro-goszakaz.ru",1851923268],["pro-personal.ru",1851923268],["resobr.ru",1851923268],["rnk.ru",1851923268],["sekretariat.ru",1851923268],["stroychet.ru",1851923268],["trudohrana.ru",1851923268],["ugpr.ru",1851923268],["zarplata-online.ru",1851923268],["zdrav.ru",1851923268],["budgetnyk.com.ua",1851923268],["dzakupivli.com.ua",1851923268],["kadrovik01.com.ua",1851923268],["medsprava.com.ua",1851923268],["sop.com.ua",1851923268],["golovbukh.ua",1851923268],["2gis.ru",[1703022702,398566128]],["2gis.ua",398566128],["360tv.ru",1698702764],["3dnews.ru",1771604329],["433175.ru",31039707],["5-tv.ru",1722866592],["66.ru",1228251153],["adult-images.ru",1696657997],["imgbum.ru",1696657997],["xpicture.ru",1696657997],["daily.afisha.ru",662134199],["afportal.ru",721971987],["ag.ru",326207531],["aif.ru",1165141092],["alcodistillers.ru",344448692],["aldebaran.ru",381907573],["alexbruni.ru",1128214427],["allcarz.ru",1640862240],["allhockey.ru",842747058],["amurmedia.ru",804921631],["eaomedia.ru",804921631],["irkutskmedia.ru",804921631],["krasnoyarskmedia.ru",804921631],["magadanmedia.ru",804921631],["primamedia.ru",804921631],["sakhalinmedia.ru",804921631],["sevastopolmedia.ru",804921631],["ulanmedia.ru",804921631],["ussurmedia.ru",804921631],["yakutiamedia.ru",804921631],["krasnodarmedia.su",804921631],["anchem.ru",644718064],["androidinsider.ru",2000111396],["anekdot.ru",845885272],["anime-naruto.ru",1926969486],["blich.ru",1926969486],["borutoplanet.ru",1926969486],["bungou-stray-dogs.ru",1926969486],["doktor-stoun.ru",1926969486],["haikyu.ru",1926969486],["hunter-x-hunter.ru",1926969486],["klinok-rassekayuschiy-demonov.ru",1926969486],["magicheskaya-bitva.ru",1926969486],["my-hero-academia.ru",1926969486],["one-pieces.ru",1926969486],["reinkarnatsiya-bezrabotnogo.ru",1926969486],["tokiyskie-mstiteli.ru",1926969486],["anime777.ru",1255593055],["animecos.ru",338062717],["animedub.ru",490734092],["animemobi.ru",735627289],["euro-football.ru",735627289],["onlinestreams.ru",735627289],["animemovie.ru",1727127221],["app-time.ru",1532322156],["app2top.ru",1015568895],["argumenti.ru",1284856550],["armflot.ru",1192351965],["ascnb1.ru",1061164734],["audioboo.ru",563711552],["auto43.ru",592066631],["auto62rus.ru",1264635010],["autorambler.ru",[893727951,653142597]],["rambler.ru",[893727951,653142597]],["sport.rambler.ru",653142597],["avito.ru",1946811769],["www.avito.ru",1114291113],["avtovzglyad.ru",38445341],["baby.ru",1272391907],["banki.ru",450250263],["bankiros.ru",1112893612],["benzin-price.ru",659130689],["besplatnyeprogrammy.ru",539767417],["bestpersons.ru",1056566708],["bibe.ru",647560394],["bioware.ru",1029664934],["bitcryptonews.ru",[1479817841,495932868]],["forum.materinstvo.ru",495932868],["vse-shutochki.ru",495932868],["bitva-ex.ru",456900348],["bombardir.ru",1847696417],["bookskeeper.ru",1570303300],["bookzvuk.ru",611981243],["boomtv.ru",2100621415],["bosch-home.ru",71505411],["botanichka.ru",794650104],["briefly.ru",1936557657]]);

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
