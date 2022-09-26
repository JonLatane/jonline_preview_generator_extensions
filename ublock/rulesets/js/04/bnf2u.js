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

const argsMap = new Map([[936539360,{"a":[{"selector":".container","tasks":[["has",{"selector":" > .remove-sda-wrap"}]]}]}],[1093328495,{"a":[{"selector":".main-wrapper","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1788337913,{"a":[{"selector":".page-wrapper","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1928146300,{"a":[{"selector":"body:not(#id)","action":["style","background-image: none !important"],"cssable":true}]}],[43658491,{"a":[{"selector":"body:not(#id)","action":["style","padding-top: 0 !important"],"cssable":true}]}],[2048662612,{"a":[{"selector":"html:not(#id)","action":["style","padding-top: 0 !important"],"cssable":true}]}],[997661330,{"a":[{"selector":"html:not(#id)","action":["style","background-image: none !important"],"cssable":true}]}],[1962822171,{"a":[{"selector":"div[class^=\"headbg\"] > .menu .sar","action":["style","bottom: auto !important; top: 50px !important; z-index: 100 !important"],"cssable":true},{"selector":"div[class^=\"headbg\"] > .menu","action":["style","top: 0 !important"],"cssable":true},{"selector":"div[class^=\"headbg\"]","action":["style","background-image: none !important; height: auto !important"],"cssable":true},{"selector":"div[id^=\"moduleLeft\"]","tasks":[["has",{"selector":"iframe"}]]}]}],[42556366,{"a":[{"selector":"#FheaderContent > div[id]:not([class])","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"div","tasks":[["has",{"selector":" > ins"}]]}]}],[324936395,{"a":[{"selector":"#wrap[class*=\"menu\"]","action":["style","position: static !important"],"cssable":true},{"selector":"body","action":["style","background: black !important"],"cssable":true},{"selector":"div[style=\"clear:both;\"] > div[class]:first-child","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1045953032,{"a":[{"selector":"body:not(#id)","action":["style","padding: 0 !important"],"cssable":true},{"selector":"html:not(#id)","action":["style","padding: 0 !important"],"cssable":true}]}],[2133577873,{"a":[{"selector":"#wr-bg","action":["style","padding-top: 60px !important; margin-top: unset !important"],"cssable":true}]}],[1460227402,{"a":[{"selector":".wrap","action":["style","padding-top: 0 !important"],"cssable":true}]}],[758211361,{"a":[{"selector":"#site","action":["style","top: 0 !important"],"cssable":true}]}],[1213122678,{"a":[{"selector":".bs-vc-sidebar-column > div > div","tasks":[["has",{"selector":"[id^=\"yandex_rtb\"]"}]]}]}],[1207535938,{"a":[{"selector":"body","action":["style","padding-top: 0 !important; background-color: transparent !important"],"cssable":true}]}],[1153819463,{"a":[{"selector":"#id_box_r_y1","action":["style","position: absolute !important; top: -10000px !important; left: -10000px !important; height: 50px !important"],"cssable":true},{"selector":"#idbbbad","action":["style","position: absolute !important; top: -10000px !important; left: -10000px !important; height: 50px !important"],"cssable":true}]}],[1680517928,{"a":[{"selector":"div[class^=\"right\"] .ramka1","tasks":[["has",{"selector":"noindex"}]]}]}],[12225543,{"a":[{"selector":"#sidebar > .widget","tasks":[["has",{"selector":"[href*=\"//pwnd.cx\"]"}]]},{"selector":"#sidebar > .widget","tasks":[["has",{"selector":"[href*=\"utm_\"][target=\"_blank\"]"}]]}]}],[1084126463,{"a":[{"selector":".forums tr[id^=\"f-\"]","tasks":[["has",{"selector":".topic_icon[src$=\"/folder_lock.gif\"]"}]]},{"selector":".site-logo","action":["style","max-height: 90px !important; width: auto !important"],"cssable":true}]}],[845805364,{"a":[{"selector":"div[class=\"article vid\"]","action":["style","margin-top: auto !important"],"cssable":true}]}],[1906881431,{"a":[{"selector":"[id^=\"oframe\"] > pjsdiv","tasks":[["has",{"selector":" > pjsdiv > img[src$=\"/adblock.png\"]"}]]}]}],[394183118,{"a":[{"selector":".av-branding .page","action":["style","padding-top: 0 !important; padding-bottom: 0 !important"],"cssable":true},{"selector":".av-branding","action":["style","background: none !important"],"cssable":true}]}],[1586739783,{"a":[{"selector":".template","tasks":[["has",{"selector":" > .template-content > .template-block > div > script"}]]}]}],[1190648144,{"a":[{"selector":".another-news__text > h2","tasks":[["has-text","котировки"]]},{"selector":".b-article-content > h2","tasks":[["has-text","букмекер"]]},{"selector":"div[class^=\"b-betting\"]:not(#id)","action":["style","display: block !important; position: fixed !important; top: -10000px !important; left: -10000px !important"],"cssable":true}]}],[2012503892,{"a":[{"selector":".VkpGBb","tasks":[["has",{"selector":".gghBu"}]]},{"selector":".rlfl__tls > div[jstcache]","tasks":[["has",{"selector":".gghBu"}]]}]}],[1412308094,{"a":[{"selector":"body[class*=\"modal-\"]","action":["style","overflow: auto !important"],"cssable":true}]}],[57045443,{"a":[{"selector":"#content div[class]:not([id])","tasks":[["has",{"selector":" > [id^=\"adfox_\"]:first-child"}]]}]}],[1688761118,{"a":[{"selector":"[data-name=\"ad_in_listing\"] > article","tasks":[["has",{"selector":" > div > [id^=\"adfox_\"]"}]]}]}],[1460943814,{"a":[{"selector":"#page","action":["style","top: 0 !important"],"cssable":true}]}],[1576664386,{"a":[{"selector":"#mainWrapper","action":["style","background: none !important; padding-top: 0 !important"],"cssable":true}]}],[655269015,{"a":[{"selector":".adfox-banner-background ~ .layout-container","action":["style","max-width: unset !important; top: unset !important"],"cssable":true}]}],[1734674911,{"a":[{"selector":".b-global-branding[branding_url*=\"undefined\"] .b-global-wrap","action":["style","cursor: auto !important"],"cssable":true},{"selector":".b-global-wrap > .b-global-offset","action":["style","padding: unset !important"],"cssable":true}]}],[1473096058,{"a":[{"selector":"main > div[class*=\" \"]","action":["style","min-height: auto !important; height: auto !important"],"cssable":true}]}],[550839209,{"a":[{"selector":"#content > .block","tasks":[["has",{"selector":"a[href][target=\"_blank\"] > img"}]]},{"selector":".block","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":".block","tasks":[["has",{"selector":"[id^=\"yandex_rtb\"]"}]]},{"selector":".main","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":".sidebar > .block","tasks":[["has",{"selector":"a[href][target=\"_blank\"] > img"}]]}]}],[334669814,{"a":[{"selector":"#page","action":["style","padding-top: 0 !important"],"cssable":true}]}],[1370708983,{"a":[{"selector":"#utm_article_block > div > #article_body > p > strong","tasks":[["has-text","^Ниже"]]},{"selector":".m-hop > [class]","tasks":[["has",{"selector":"span","tasks":[["has-text","Реклама"]]}]]},{"selector":"html[class] > body","action":["style","background-color: #e6e6e6 !important"],"cssable":true}]}],[1611565134,{"a":[{"selector":".sport-table tr > th ~ th","tasks":[["has-text","Ставка"]]},{"selector":"blockquote","tasks":[["has",{"selector":" > p > strong","tasks":[["has-text","Партнер"]]}]]},{"selector":"span > small","tasks":[["has-text","Приведённые букмекерские коэффициенты"]]},{"selector":"th > .tooltip-item","tasks":[["has-text","К"]]}]}],[286682420,{"a":[{"selector":"#gkRightTop > div[class=\"box\"]","tasks":[["has",{"selector":" > div > .content:first-child > .custom > p:first-child:last-child"}]]}]}],[412177124,{"a":[{"selector":".b-page","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":".b-page.overlay[data-bem*=\"serp-metrika\"]","action":["style","overflow-y: auto !important"],"cssable":true},{"selector":".document_infinity-zen-loading_yes:not(.document_modal_yes) > body","action":["style","overflow-y: unset !important"],"cssable":true},{"selector":".document_infinity-zen-loading_yes:not(.document_modal_yes)","action":["style","overflow-y: unset !important"],"cssable":true},{"selector":".feed__row[id^=\"zen-row-\"] .feed__item-wrap > .feed__item","action":["style","min-height: auto !important"],"cssable":true},{"selector":".feed__row[id^=\"zen-row-\"] .feed__item-wrap","tasks":[["has",{"selector":" > .feed__item div[class=\"card-rtb-one-column-stub__image\"] > div:empty"}]]},{"selector":".forecast-details > .card","tasks":[["has",{"selector":" > [class*=\"adv\"]"}]]},{"selector":".head-stripe","action":["style","position: fixed !important; transform: scale(0) !important"],"cssable":true},{"selector":".main .widgets__col_td_1","action":["style","max-width: unset !important"],"cssable":true},{"selector":".media-grid .media-grid__row_visible_yes > div:empty","action":["style","height: auto !important"],"cssable":true},{"selector":".media-infinity-footer__content_sticky_yes","action":["style","position: fixed !important"],"cssable":true},{"selector":".mg-grid__col > .mg-card > .mg-card__text-content > .mg-card__text > .mg-card__link","action":["style","max-width: 100% !important"],"cssable":true},{"selector":".mg-grid__col","tasks":[["has",{"selector":" > .news-feed__advert"}]]},{"selector":".mg-grid__col","tasks":[["has",{"selector":" > .sport-feed__advert"}]]},{"selector":".monetization-group > .monetization-group__item","action":["style","height: auto !important"],"cssable":true},{"selector":".page__result .typo","tasks":[["has-text",["^новости партн","i"]]]},{"selector":".scroller__wrap > .showcase__item","tasks":[["has",{"selector":".product-card__direct"}]]},{"selector":".scroller__wrap > div[class^=\"minibadge\"]","tasks":[["has",{"selector":".serp-item .label","tasks":[["has-text","реклама"]]}]]},{"selector":".serp-header","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".serp-list > .serp-item","tasks":[["has",{"selector":".organic__advLabel"}]]},{"selector":".serp-list > .serp-item","tasks":[["has",{"selector":"[data-bem] > .Organic-ContentWrapper > .TextContainer","tasks":[["has-text","Реклама.·"]]}]]},{"selector":".services-new__list > .services-new__list-item","action":["style","min-width: unset !important; flex: auto !important"],"cssable":true},{"selector":".sidebar-container .business-card-view__main-wrapper > div[style^=\"min-height:\"]","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"body > .services-new__more-popup","action":["style","top: 23px !important"],"cssable":true},{"selector":"body.b-page > .b-page__container .card.content__adv.card","action":["style","margin-bottom: unset !important; padding: unset !important"],"cssable":true},{"selector":"body[class*=\"b-page\"] .widgets[role=\"main\"] :not(div) :not(div):first-child ~ :not(div) :not(div) > div[class]:not([class*=\"widget\"]):not([class^=\"services\"]):not([class*=\"search\"]):not([class*=\"news\"]):not([class*=\"home\"]) > div[class]:not([class*=\"widget\"]):not([class^=\"services\"]):not([class*=\"search\"]):not([class*=\"news\"]):not([class*=\"home\"])","action":["style","padding-bottom: unset !important"],"cssable":true},{"selector":"body[class*=\"b-page\"] .widgets[role=\"main\"] div[class] > div[class]","tasks":[["matches-css",{"name":"padding-top","value":"^90px$"}]]},{"selector":"body[class*=\"b-page\"] .widgets[role=\"main\"] div[class]","tasks":[["matches-css",{"name":"margin-top","value":"^16px$"}]]},{"selector":"body[class*=\"b-page\"] .widgets[role=\"main\"] div[class]","tasks":[["matches-css",{"name":"margin-top","value":"^24px$"}]]},{"selector":"body[class*=\"exp_ym-referrer-original-url\"] div[class*=\"_type_\"]","action":["style","min-height: 0 !important; height: unset !important"],"cssable":true},{"selector":"body[class*=\"exp_ym-referrer-original-url\"] div[class*=\"rect\"][id][data-name]","action":["style","min-height: 0 !important; height: unset !important"],"cssable":true},{"selector":"body[class*=\"exp_ym-referrer-original-url\"] div[class*=\"turbo-\"][class*=\"load-error\"]","action":["style","min-height: 0 !important; margin-top: unset !important; margin-bottom: unset !important"],"cssable":true},{"selector":"html[class*=\" Theme_color_news-\"] div[class*=\"_type_native\"] [class*=\"_type_card\"]","tasks":[["has",{"selector":" > div > div:empty"}]]}]}],[1045254084,{"a":[{"selector":".b-page_type_maps div[class$=\"__content\"] > [class$=\"__ad\"] > div","action":["style","width: unset !important"],"cssable":true},{"selector":".climate-calendar__cell","action":["style","width: 13.8% !important; -webkit-flex-basis: 13.8% !important; flex-basis: 13.8% !important"],"cssable":true}]}],[1439208446,{"a":[{"selector":".mini-suggest__item:has( > a[href*=\"://yabs.yandex.\"][href*=\"/count/\"])","action":["remove",""]},{"selector":".mini-suggest__item:has( > a[href*=\"://yandex.\"][href*=\"/clck/\"])","action":["remove",""]},{"selector":".mini-suggest__item:has( > a[href][target=\"_blank\"])","action":["remove",""]}]}],[1171610843,{"a":[{"selector":".content-event_commercial_yes","action":["style","margin-top: auto !important"],"cssable":true},{"selector":"div[class*=\"_tld_\"][id^=\"uniq\"]:empty","action":["style","height: unset !important"],"cssable":true}]}],[805374843,{"a":[{"selector":"[class*=\"ComposeDoneScreen\"] *","action":["style","height: auto !important; min-height: 0 !important"],"cssable":true}]}],[89042342,{"a":[{"selector":"body.no-scroll","action":["style","overflow: visible !important"],"cssable":true}]}],[1670057543,{"a":[{"selector":".SearchSegments__row","tasks":[["has",{"selector":"[class*=\"banner\"]"}]]},{"selector":".SearchSegments__row","tasks":[["has",{"selector":"[id*=\"banner\"]"}]]}]}],[925865589,{"a":[{"selector":"#dle-content > .news","tasks":[["has",{"selector":" > .news_text :not(.text_spoiler) > a:not([href^=\"/\"]):not([href*=\"anistar.org/\"]):not([href*=\"astar.bz/\"]):not([href*=\"online-star.org/\"]):not([href*=\"online-stars.org/\"])"}]]},{"selector":"#dle-content > .news","tasks":[["has",{"selector":" > .news_text object"}]]},{"selector":".drowmenu","action":["style","z-index: 1999999999 !important"],"cssable":true},{"selector":".list-nav","action":["style","z-index: 1 !important"],"cssable":true},{"selector":"body > .main.wrapper","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"body > header","action":["style","top: 0 !important"],"cssable":true},{"selector":"html > body:not(#id)","action":["style","background-image: none !important"],"cssable":true}]}],[899960058,{"a":[{"selector":"#cams_top_block","action":["style","height: 0 !important"],"cssable":true},{"selector":".banner","action":["style","height: 0 !important"],"cssable":true}]}],[550887382,{"a":[{"selector":"body > #heading.clickable","action":["style","max-height: 50px !important"],"cssable":true},{"selector":"body > .page","action":["style","background-color: rgba(253,253,253,1) !important"],"cssable":true}]}],[714437460,{"a":[{"selector":"#dle-content > .short","tasks":[["has",{"selector":" > div > h2 > a[href*=\"with-prints.html\"]"}]]}]}],[1555642156,{"a":[{"selector":"div","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[2081277538,{"a":[{"selector":"div","tasks":[["has",{"selector":" > [id^=\"yandex_rtb\"]"}]]},{"selector":"p","tasks":[["has-text","Для скачивания подождите отсчет таймера\\.\\.\\."]]}]}],[1297841070,{"a":[{"selector":"body","action":["style","overflow: auto !important"],"cssable":true}]}],[1514157293,{"a":[{"selector":"#timer_2","action":["style","display: block !important"],"cssable":true}]}],[880630599,{"a":[{"selector":"[class*=\"side\"][class*=\"right\"] *","tasks":[["has",{"selector":" > [href*=\"utm_campai\"]"}]]}]}],[487563540,{"a":[{"selector":"h3","tasks":[["has-text",["^нов.+партн.+р.в$","i"]]]}]}],[1102897629,{"a":[{"selector":"#page","action":["style","margin-top: 0 !important"],"cssable":true}]}],[39878697,{"a":[{"selector":"body:not(#id):not(:empty)","action":["style","background: whitesmoke !important"],"cssable":true}]}],[297012384,{"a":[{"selector":"#wrapper > .menu","action":["style","margin-top: auto !important"],"cssable":true}]}],[14079610,{"a":[{"selector":"#wrapper:not(#id)","action":["style","margin-top: 67px !important"],"cssable":true}]}],[1558619020,{"a":[{"selector":"table","tasks":[["has",{"selector":"tbody > tr.alt1 > td","tasks":[["has-text","Реклама"]]}]]}]}],[637262526,{"a":[{"selector":"html > body","action":["style","padding-top: unset !important"],"cssable":true}]}],[464818083,{"a":[{"selector":"#head","action":["style","width: 100% !important"],"cssable":true},{"selector":"#table_reduser","action":["style","width: 100% !important"],"cssable":true},{"selector":".full #top_tools","action":["style","padding-left: 0 !important"],"cssable":true}]}],[126181234,{"a":[{"selector":".sectionColumn","tasks":[["has",{"selector":" > .subTitle","tasks":[["has-text",["реклама","i"]]]}]]}]}],[1473778906,{"a":[{"selector":"#localNotice > .floatleft > a > img","action":["style","height: 70px !important; width: auto !important"],"cssable":true},{"selector":"#siteNotice","action":["style","background: none !important"],"cssable":true}]}],[1410430048,{"a":[{"selector":"body > .wrapper","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1163666444,{"a":[{"selector":"body","action":["style","background-image: none !important"],"cssable":true}]}],[1187926704,{"a":[{"selector":"#main > .wrap-center","action":["style","margin-left: auto !important; margin-right: auto !important"],"cssable":true},{"selector":".content > .sect-header","action":["style","margin-bottom: 0 !important"],"cssable":true},{"selector":".content","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":".full","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":".popular-in","action":["style","padding-top: 80px !important"],"cssable":true},{"selector":".sticky-wrap","action":["style","position: relative !important"],"cssable":true},{"selector":".wrap > .popular","action":["style","visibility: visible !important"],"cssable":true}]}],[1463958411,{"a":[{"selector":".body-wrap > #content","action":["style","margin-top:42px !important"],"cssable":true}]}],[2044925362,{"a":[{"selector":"#keysbox","action":["style","display: block !important"],"cssable":true}]}],[1281657432,{"a":[{"selector":"div","tasks":[["has",{"selector":" > [src=\"/secret.png\"]"}]]}]}],[1089307820,{"a":[{"selector":"body > .wrapp","action":["style","margin-top: 0 !important"],"cssable":true}]}],[50603489,{"a":[{"selector":"body > header","action":["style","margin-top: 0 !important"],"cssable":true}]}],[2022773294,{"a":[{"selector":".wrapper main","action":["style","margin-top: 0 !important"],"cssable":true}]}],[693487996,{"a":[{"selector":"#right_case > .module","tasks":[["has",{"selector":"script"}]]}]}],[1423712509,{"a":[{"selector":".panel-default","tasks":[["has",{"selector":" > .panel-body > div > a > [alt=\"Друзья\"]"}]]},{"selector":".panel-default","tasks":[["has",{"selector":" > .panel-body:empty"}]]},{"selector":".panel-default","tasks":[["has",{"selector":" > .panel-heading > .fa-google-wallet"}]]}]}],[1623326623,{"a":[{"selector":"body > .all-wrap","action":["style","margin-top: 0 !important"],"cssable":true}]}],[82302539,{"a":[{"selector":".center-box2","action":["style","margin-top: 0 !important"],"cssable":true}]}],[779630734,{"a":[{"selector":".wrapper > .main-content","action":["style","margin-top: 0 !important"],"cssable":true}]}],[564437497,{"a":[{"selector":"[id^=\"oframe\"] > pjsdiv","tasks":[["has",{"selector":" > pjsdiv","tasks":[["has-text",["adblock|adblok|блокировщик|блокировку","i"]]]}]]}]}],[1854025405,{"a":[{"selector":"#right > [class*=\"block\"]","tasks":[["has",{"selector":" > .rec"}]]}]}],[767426389,{"a":[{"selector":"#oframeflashcontent > pjsdiv[style*=\"transition: transform\"]","action":["style","transform: none !important"],"cssable":true},{"selector":"video","action":["style","filter: none !important"],"cssable":true}]}],[657345782,{"a":[{"selector":"html > body","action":["style","cursor: default !important"],"cssable":true}]}],[10705313,{"a":[{"selector":"#sidebar-primary > aside","tasks":[["has",{"selector":" > .textwidget > div[class^=\"r\"]"}]]},{"selector":"center","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[894795507,{"a":[{"selector":".widget","tasks":[["has",{"selector":" > div > .av-block"}]]}]}],[1252236103,{"a":[{"selector":"div[style^=\"position: fixed;\"]","tasks":[["has",{"selector":" > ","tasks":[["has-text","Об��аружена блокировка рекламы"]]}]]}]}],[134296751,{"a":[{"selector":".namerub","tasks":[["has-text",["гнездо","i"]]]},{"selector":".namerub","tasks":[["has-text",["новости|партнер","i"]]]}]}],[1544699395,{"a":[{"selector":".blocklite","tasks":[["has",{"selector":" > div > [class]","tasks":[["has-text","Реклама"]]}]]}]}],[1799451719,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":"[id^=\"yandex_rtb\"]"}]]}]}],[502242959,{"a":[{"selector":".playfair","tasks":[["has",{"selector":" > b","tasks":[["has-text",["^партн","i"]]]}]]},{"selector":".svejnov","tasks":[["has",{"selector":" > h2 > b","tasks":[["has-text","^Інші"]]}]]}]}],[1888397113,{"a":[{"selector":"body > div:not([id]):not([class]):not([style]):empty","action":["remove",""]}]}],[868435436,{"a":[{"selector":"body > iframe[name]:not([id]):not([class]):not([src])","action":["remove",""]}]}],[1310205629,{"a":[{"selector":"#content-padding > *","action":["style","color: black !important"],"cssable":true},{"selector":"#content-padding","action":["style","color: white !important"],"cssable":true}]}],[59569322,{"a":[{"selector":"body","action":["style","background-color: white !important"],"cssable":true}]}],[1451423040,{"a":[{"selector":".header-logo__link > img","action":["style","display: block !important"],"cssable":true},{"selector":".page-sidebar > .sticky-vertical","action":["style","position: relative !important; top: 0 !important"],"cssable":true}]}],[1101982068,{"a":[{"selector":"#body","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1539409711,{"a":[{"selector":"aside > .widget","tasks":[["has",{"selector":"h4","tasks":[["has-text","^Новини$|Реклама"]]}]]}]}],[1563238294,{"a":[{"selector":"header[class=\"header -transparent\"]","action":["style","background: #e0e0e0 !important"],"cssable":true}]}],[691700618,{"a":[{"selector":"td[width=\"300\"] + td[valign=\"top\"] > .textc","tasks":[["has",{"selector":"a[href^=\"goto.php\"]"}]]}]}],[1463565041,{"a":[{"selector":".fon_site_pic","action":["style","background-image: none !important; padding-top: 0 !important"],"cssable":true}]}],[152927223,{"a":[{"selector":".c-block","tasks":[["has",{"selector":" > .c-dv-sns"}]]},{"selector":".c-block","tasks":[["has",{"selector":" > [id^=\"adfox_\"]"}]]}]}],[585609250,{"a":[{"selector":".js-page > div[class$=\"-header\"] + div[class] > span.o-anchor[id]:first-child ~ div:last-child > div[class*=\"--content\"]","action":["style","max-width: unset !important"],"cssable":true},{"selector":".js-page > div[class$=\"-header\"] + div[class]:last-child > div:first-child:not([class*=\"column\"]) + div:last-child","action":["style","min-height: 0 !important; box-shadow: unset !important"],"cssable":true},{"selector":".u-extend-fix","action":["style","background: center / 100% 100% no-repeat #515151 var(--res-logo) !important; border-radius: 6px !important"],"cssable":true},{"selector":"div[class*=\"--content article \"] + div ~ div:last-child > div:first-child:not(:only-child)","action":["style","max-width: unset !important"],"cssable":true},{"selector":"div[itemtype*=\"://schema.org/BlogPosting\"] ~ div:last-child > div:first-child:not(:only-child)","action":["style","max-width: unset !important"],"cssable":true},{"selector":"div[itemtype*=\"://schema.org/BlogPosting\"] ~ div:not(:last-child)","action":["style","min-height: 0 !important; padding-top: unset !important; padding-bottom: unset !important; box-shadow: inherit !important"],"cssable":true},{"selector":"div[itemtype*=\"://schema.org/Product\"] ~ div:last-child > div:first-child:not(:only-child)","action":["style","max-width: unset !important"],"cssable":true},{"selector":"div[itemtype*=\"://schema.org/Product\"] ~ div:not(:last-child)","action":["style","min-height: 0 !important; padding-top: unset !important; padding-bottom: unset !important; box-shadow: inherit !important"],"cssable":true},{"selector":"div[itemtype*=\"://schema.org/Review\"] ~ div:last-child > div:first-child:not(:only-child)","action":["style","max-width: unset !important"],"cssable":true},{"selector":"div[itemtype*=\"://schema.org/Review\"] ~ div:not(:last-child)","action":["style","min-height: 0 !important; padding-top: unset !important; padding-bottom: unset !important; box-shadow: inherit !important"],"cssable":true}]}],[682974749,{"a":[{"selector":"body > *","action":["style","pointer-events: auto"],"cssable":true}]}],[170977412,{"a":[{"selector":"body","action":["style","padding-top: 0 !important; background: whitesmoke !important; overflow: auto !important; pointer-events: none"],"cssable":true},{"selector":"html","action":["style","padding-top: 0 !important; background: whitesmoke !important; overflow: auto !important; pointer-events: none"],"cssable":true}]}],[1012446734,{"a":[{"selector":".side_bookmakers","tasks":[["has",{"selector":" > .bookmakers_list"}]]}]}],[1367846615,{"a":[{"selector":".right-indent > .wrapper-box","tasks":[["has",{"selector":" > div > .boxTitle","tasks":[["has-text",["реклама","i"]]]}]]}]}],[1673241820,{"a":[{"selector":".widget","tasks":[["has",{"selector":".block-title > span","tasks":[["has-text","Новости партнер"]]}]]}]}],[1705970083,{"a":[{"selector":".maincontent","action":["style","margin-top: 0 !important"],"cssable":true}]}],[412725329,{"a":[{"selector":"[data-bookmaker-id]","action":["style","pointer-events: none !important"],"cssable":true}]}],[99808554,{"a":[{"selector":".site-section-header","tasks":[["has-text","РЕКЛАМА"]]}]}],[1048119884,{"a":[{"selector":"head > iframe[name]:not([id]):not([class]):not([src])","action":["remove",""]}]}],[1851760136,{"a":[{"selector":"body:not(#id)","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1264248182,{"a":[{"selector":"body:not(#id)","action":["style","overflow-y: auto !important"],"cssable":true}]}],[1031359909,{"a":[{"selector":".roarticlecol","action":["style","top: 2px !important"],"cssable":true},{"selector":"body > div:not([id]):not([class]) > div[class] > div[class]","action":["style","background-image: none !important"],"cssable":true},{"selector":"body > div:not([id]):not([class]) > div[class]","action":["style","padding-top: unset !important; background-color: inherit !important"],"cssable":true}]}],[1286483392,{"a":[{"selector":"body.modal-open","action":["style","overflow: auto !important"],"cssable":true}]}],[823059893,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > a[title] ~ a[title] > div[class]"}]]}]}],[206662292,{"a":[{"selector":".main.with-top-menu","action":["style","padding-top: 100px !important"],"cssable":true}]}],[1672048895,{"a":[{"selector":".text-center","tasks":[["has",{"selector":"script"}]]}]}],[530617947,{"a":[{"selector":"div","tasks":[["has",{"selector":" > [href*=\"://gdz-ru.work/\"]"}]]}]}],[596063633,{"a":[{"selector":"div","tasks":[["has",{"selector":" > img[src*=\"ops.\"]"}]]}]}],[419177870,{"a":[{"selector":"body > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"body","action":["style","pointer-events: none !important"],"cssable":true}]}],[1401644026,{"a":[{"selector":".gazeta-widget","tasks":[["has",{"selector":".widget-title > span","tasks":[["has-text",["реклама|новости партнеров","i"]]]}]]}]}],[2036598003,{"a":[{"selector":"#col-left > .contest-bl","tasks":[["has",{"selector":" > h4 > strong","tasks":[["has-text","^Новин|Join"]]}]]},{"selector":"#col-right > .bl-middle2","tasks":[["has",{"selector":" > h4","tasks":[["has-text",["новини|додати","i"]]]}]]}]}],[792863951,{"a":[{"selector":"html:not([class*=\" mob\"]) > body > .wrap","action":["style","width: 1170px !important; padding: 20px !important"],"cssable":true}]}],[1469915154,{"a":[{"selector":"#page-content","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".ui-sortable > .ui-sortable-handle","tasks":[["has",{"selector":" > h4","tasks":[["has-text","Реклама"]]}]]}]}],[1436364159,{"a":[{"selector":".footer","action":["style","position: relative !important"],"cssable":true}]}],[1793120525,{"a":[{"selector":"td[valign=\"top\"] > table","tasks":[["has",{"selector":"a[href*=\"/go.php\"][target=\"_blank\"]"}]]}]}],[1530979014,{"a":[{"selector":"td","tasks":[["has",{"selector":" > a[href*=\"/advv_rek/\"]"}]]}]}],[1541804220,{"a":[{"selector":"#reader_pane","action":["style","padding-right: unset !important"],"cssable":true},{"selector":"#sinner_container","action":["style","display: block !important; z-index: 0 !important"],"cssable":true},{"selector":".ad_title","action":["style","display: block !important; position: fixed !important; top: -10000px !important; left: -10000px !important"],"cssable":true},{"selector":".adsbygoogle","action":["style","display: block !important"],"cssable":true},{"selector":".leaderboard_ad","action":["style","display: block !important; position: fixed !important; top: -10000px !important; left: -10000px !important"],"cssable":true}]}],[1412027747,{"a":[{"selector":"body[style*=\"overflow: hidden;\"]","action":["style","overflow: auto !important"],"cssable":true}]}],[1266153097,{"a":[{"selector":".homepageWidget","tasks":[["has",{"selector":" > #topBroker"}]]}]}],[1945007540,{"a":[{"selector":".b-article > h4","tasks":[["has-text","Справочник по ценам"]]},{"selector":"body:not(#id) > .b-content.b-content__breadcrumbs","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"body:not(#id) > .b-content__pagecontent","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1469815819,{"a":[{"selector":".body_content_table > .left.column","action":["style","margin-right: 0 !important; width: 100% !important"],"cssable":true},{"selector":".body_wrapper","action":["style","max-width: 100% !important"],"cssable":true},{"selector":".fullscreen_branding ~ .body_content_table","action":["style","margin-top: 0 !important; z-index: 0 !important"],"cssable":true},{"selector":".left.column > #question.dialog_thanks","action":["style","left: 67% !important"],"cssable":true}]}],[1104111151,{"a":[{"selector":".smb-bg","action":["style","background: none !important"],"cssable":true},{"selector":".wrapper > #tm","action":["style","margin-bottom: auto !important"],"cssable":true}]}],[1696293758,{"a":[{"selector":".tm-wrapper > .tm","action":["style","margin-bottom: auto !important"],"cssable":true},{"selector":"body","action":["style","background: #eee !important"],"cssable":true}]}],[897873281,{"a":[{"selector":"#page-wrapper > #header","action":["style","margin-bottom: auto !important"],"cssable":true},{"selector":"#page-wrapper > .tm-wrapper > .tm","action":["style","margin-bottom: auto !important"],"cssable":true},{"selector":"#page-wrapper","action":["style","background-color: white !important"],"cssable":true}]}],[1119246609,{"a":[{"selector":"#page-wrapper .container","action":["style","max-width: 100% !important"],"cssable":true},{"selector":"#page-wrapper > #wrapper","action":["style","padding-top: 0 !important"],"cssable":true}]}],[1420145750,{"a":[{"selector":".nb2-list","tasks":[["has",{"selector":" > .nb2-head","tasks":[["has-text","Визитка"]]}]]}]}],[1110308945,{"a":[{"selector":"#secondary > .sidebar-widget","tasks":[["has",{"selector":"[id^=\"yandex_rtb\"]"}]]}]}],[1425447565,{"a":[{"selector":".b-background","action":["style","background: none !important; padding-top: 0 !important"],"cssable":true}]}],[1709560129,{"a":[{"selector":"body","action":["style","margin-top: auto !important"],"cssable":true}]}],[2002048988,{"a":[{"selector":".__post-content-preview::after","action":["style","content: none !important"],"cssable":true},{"selector":"div[id^=\"post_\"][class=\"__post-content-preview\"]","action":["style","max-height: none !important"],"cssable":true}]}],[1970837656,{"a":[{"selector":"body > .wrapper > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"body > .wrapper","action":["style","pointer-events: none !important"],"cssable":true}]}],[301270742,{"a":[{"selector":".content > .card ~ div","tasks":[["has",{"selector":" > center > [id^=\"adfox_\"]"}]]}]}],[125550787,{"a":[{"selector":".b-branding__wrap","action":["style","padding: 0 !important"],"cssable":true}]}],[6936409,{"a":[{"selector":"h6","tasks":[["has-text",["новости партнеров","i"]]]}]}],[942401258,{"a":[{"selector":"body > .navbar","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"html > body","action":["style","background-color: white !important"],"cssable":true}]}],[1708526458,{"a":[{"selector":".blblock > .pheading","tasks":[["has",{"selector":" > h3 > span","tasks":[["has-text",["реклама","i"]]]}]]},{"selector":".mainb > .main_block","tasks":[["has",{"selector":" > #slides > #reklama"}]]}]}],[2062587691,{"a":[{"selector":".clauses_block_rel .panel","tasks":[["has",{"selector":"[href*=\"dex.browser\"]"}]]},{"selector":"div","tasks":[["has",{"selector":" > div > [href*=\"dex.browser\"]"}]]}]}],[943926239,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":" > .textwidget > #mt_promo_wghot"}]]}]}],[1866157083,{"a":[{"selector":"td > table[width=\"220\"]","tasks":[["has",{"selector":".block_title","tasks":[["has-text",["реклама","i"]]]}]]}]}],[525219668,{"a":[{"selector":"body > .header","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1030503875,{"a":[{"selector":".splide__list > .splide__slide","tasks":[["has",{"selector":" > article > ._ads_recreativ"}]]},{"selector":".splide__list > .splide__slide","tasks":[["has",{"selector":" > article > .banner"}]]}]}],[1789954264,{"a":[{"selector":".downloadlink a","action":["style","color: #09c !important; text-decoration: underline !important"],"cssable":true},{"selector":".post-info > div[style^=\"width: 730px;\"][style*=\"#f9f9f9\"]","action":["style","background-color: #333 !important"],"cssable":true}]}],[680645902,{"a":[{"selector":"[class*=\"_no_abs\"] > *","action":["style","height: auto !important"],"cssable":true},{"selector":"[class*=\"_no_abs\"]","action":["style","height: auto !important"],"cssable":true}]}],[2133401786,{"a":[{"selector":"div > .mainmenu","tasks":[["has",{"selector":" > a[href*=\"pornolavka.pw\"]"}]]}]}],[2050990932,{"a":[{"selector":".articles_list_inner > div","tasks":[["has",{"selector":" > .sdv-box"}]]},{"selector":".header-clear","action":["style","margin-bottom: 0 !important"],"cssable":true}]}],[1262348910,{"a":[{"selector":"div","tasks":[["has",{"selector":" > [src*=\"pagead2.\"]"}]]},{"selector":"div[id^=\"sidebar\"] div[id^=\"sidebar\"]","tasks":[["has",{"selector":"div > [src*=\"pagead2.\"]"}]]}]}],[1144691857,{"a":[{"selector":".sidebox","tasks":[["has",{"selector":" > div[id^=\"bn_\"]"}]]}]}],[2068770510,{"a":[{"selector":"#topbrandingspot","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":"html:not(#id) > body","action":["style","background-color: #fff !important"],"cssable":true}]}],[1190900352,{"a":[{"selector":"#ad_global_below_navbar","action":["style","position: fixed !important; transform: scale(0) !important; top: -10000px !important"],"cssable":true},{"selector":"#header ~ *","action":["style","position: fixed !important; transform: scale(0) !important; top: -10000px !important"],"cssable":true},{"selector":".above_body > div[style]","action":["style","height: auto !important"],"cssable":true}]}],[247320210,{"a":[{"selector":".HTML","tasks":[["has",{"selector":" > .widget-content > .adsbygoogle"}]]}]}],[1678468909,{"a":[{"selector":".branding .main-content","action":["style","margin-top: 90px !important"],"cssable":true},{"selector":".poster-grid-item > a[target=\"_blank\"]:first-child","action":["style","pointer-events: none !important"],"cssable":true},{"selector":"html[xmlns]","action":["style","background-image: none !important"],"cssable":true}]}],[1515098602,{"a":[{"selector":"div[id*=\"-error-page\"] > p","action":["style","height: 0 !important; opacity: 0 !important"],"cssable":true}]}],[321530786,{"a":[{"selector":".fader-social","action":["style","position: fixed !important; top: -10000px !important; opacity: 0 !important; z-index: -9999 !important"],"cssable":true}]}],[1239837588,{"a":[{"selector":".social-open","action":["style","overflow: auto !important"],"cssable":true}]}],[721108163,{"a":[{"selector":"body:not(#id) .all-wrapper","action":["style","top: 0 !important"],"cssable":true},{"selector":"body:not(#id) .bottom-bar","action":["style","top: 0 !important"],"cssable":true}]}],[1934236919,{"a":[{"selector":"html:not(#id) > body:not(#id)","action":["style","background: none !important"],"cssable":true}]}],[1078917395,{"a":[{"selector":".tpc > .post > a[href]","action":["style","word-break: break-all"],"cssable":true},{"selector":".tpc > .post > table[width] > tbody > tr > .lgf","action":["style","word-break: break-word"],"cssable":true}]}],[1745402392,{"a":[{"selector":"*","tasks":[["has",{"selector":" > a[href*=\"prostitutkixxx\"]"}]]}]}],[21702318,{"a":[{"selector":"div","tasks":[["has",{"selector":" > .mom-ads-wrap"}]]}]}],[1988664037,{"a":[{"selector":"html","action":["style","overflow: auto !important"],"cssable":true}]}],[688229658,{"a":[{"selector":"html > body","action":["style","overflow: auto !important"],"cssable":true}]}],[739925373,{"a":[{"selector":"#wrapper > #all","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1595895571,{"a":[{"selector":"article > p","tasks":[["has-text","отключите блокировку рекламы!$"]]}]}],[1408663102,{"a":[{"selector":".cardPageDescMain > div[style*=\"min-height:\"]","action":["style","min-height: 0 !important"],"cssable":true}]}],[101517812,{"a":[{"selector":".header--text","tasks":[["has-text","Реклама"]]},{"selector":".mainContainer","action":["style","padding-top: 0 !important"],"cssable":true}]}],[701768543,{"a":[{"selector":".block > .block","tasks":[["has",{"selector":" > .bt > .bct","tasks":[["has-text","Партнери"]]}]]},{"selector":".rightModules > .block","tasks":[["has",{"selector":" > .bt > .bct","tasks":[["has-text",["партнер","i"]]]}]]}]}],[1519746083,{"a":[{"selector":".admineditor-menu","action":["style","margin-top: 0 !important"],"cssable":true}]}],[2091633385,{"a":[{"selector":"body > #td-outer-wrap > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"body > #td-outer-wrap","action":["style","pointer-events: none !important; cursor: auto !important"],"cssable":true},{"selector":"html > body","action":["style","background-image: none !important; background-color: #e8e8e8 !important; cursor: auto !important"],"cssable":true}]}],[2122173274,{"a":[{"selector":".page-content","action":["style","background-color: inherit !important"],"cssable":true},{"selector":".page-content","action":["style","padding-top: 0 !important"],"cssable":true}]}],[369233080,{"a":[{"selector":"#ipsLayout_sidebar .ipsBox","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":"#ipsLayout_sidebar .ipsBox","tasks":[["has",{"selector":" > [id^=\"yandex_rtb\"]"}]]},{"selector":"#ipsLayout_sidebar .ipsBox","tasks":[["has",{"selector":"[href][target^=\"_blan\"] > img[src*=\"/gra/\"]"}]]}]}],[548359065,{"a":[{"selector":"body > .header-menu-bg","action":["style","margin-bottom: 0 !important"],"cssable":true}]}],[988806760,{"a":[{"selector":"#branding-layout > * > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"#branding-layout > a","action":["style","width: 0 !important; height: 0 !important; left:-10000px !important"],"cssable":true},{"selector":"#branding-layout","action":["style","pointer-events: none !important"],"cssable":true},{"selector":"#branding-layout:not(#id)","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":".aside-news-list__item","tasks":[["has",{"selector":" > .aside-news-list__advert","tasks":[["has-text","Реклама"]]}]]},{"selector":".aside-news-list__item","tasks":[["has",{"selector":" > [href*=\"utm_campaign\"]"}]]},{"selector":".news > .short-news > p","tasks":[["has",{"selector":" > .advert_material"}]]},{"selector":".news > .short-news > p","tasks":[["has",{"selector":" > .betting_insider"}]]},{"selector":".page-layout","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":":not(.nba-global-nav-wrapper) + #branding-layout:not(#id)","action":["style","margin-top: 96px !important"],"cssable":true},{"selector":"[data-content-name=\"banner-static\"]","action":["style","position: fixed !important; left: -10000px !important; transform: scale(0) !important; display: none !important"],"cssable":true},{"selector":"body.img-bg","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":"html > body","action":["style","background-image: none !important; background-color: #a7a7a7 !important"],"cssable":true}]}],[1884680645,{"a":[{"selector":"body","action":["style","cursor: auto !important"],"cssable":true}]}],[925921572,{"a":[{"selector":"#window-frame > #window-body > p","tasks":[["has-text","или"]]}]}],[497026023,{"a":[{"selector":".head-top","action":["style","position: absolute !important"],"cssable":true},{"selector":"body","action":["style","background: #091016 !important"],"cssable":true}]}],[913270274,{"a":[{"selector":".asside","tasks":[["has",{"selector":" > .topBook"}]]},{"selector":".h2","tasks":[["has-text","Реклама"]]}]}],[2115446733,{"a":[{"selector":"header .container","action":["style","padding-top: 30px !important"],"cssable":true}]}],[713199547,{"a":[{"selector":".navbar","action":["style","position: relative !important"],"cssable":true},{"selector":".right-column > .sticky-box","action":["style","position: relative !important"],"cssable":true},{"selector":"body","action":["style","padding-top: unset !important"],"cssable":true}]}],[1262281753,{"a":[{"selector":".main-sidebar > .row > div","tasks":[["has",{"selector":".active","tasks":[["has-text","Реклама"]]}]]}]}],[627627388,{"a":[{"selector":"#page_wall_posts > div[id^=\"post-\"]","tasks":[["has",{"selector":".wall_marked_as_ads"}]]},{"selector":"#wk_content > #wl_post > div","tasks":[["has",{"selector":".wall_marked_as_ads"}]]},{"selector":".JoinForm__notNow","action":["style","font-weight: bold !important; color: red !important; border: 3px solid red !important; padding: 6px !important"],"cssable":true},{"selector":".wall_wrap div[id^=\"post-\"]","tasks":[["has",{"selector":".post_content > .post_info > .wall_text > .wall_post_cont > .wall_marked_as_ads"}]]},{"selector":"div[class^=\"feed_row \"] > div[id^=\"feed_repost-\"]","tasks":[["has",{"selector":".wall_marked_as_ads"}]]},{"selector":"div[class^=\"feed_row \"] > div[id^=\"post-\"]","tasks":[["has",{"selector":".wall_marked_as_ads"}]]}]}],[1733577077,{"a":[{"selector":".card-separator__title","tasks":[["has-text","реклама"]]}]}],[99046983,{"a":[{"selector":"html > body > *","action":["style","pointer-events: auto !important"],"cssable":true}]}],[137050371,{"a":[{"selector":"html > body","action":["style","background-image: none !important"],"cssable":true},{"selector":"html > body","action":["style","pointer-events: none !important"],"cssable":true}]}],[680176916,{"a":[{"selector":"body > #layout-center > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"body > #layout-center","action":["style","pointer-events: none !important"],"cssable":true}]}],[1314181895,{"a":[{"selector":".items","tasks":[["has",{"selector":" > .item-card [src*=\"/images/pek.png\"]"}]]},{"selector":".items","tasks":[["has",{"selector":" > .item-card script"}]]}]}],[610482894,{"a":[{"selector":"#header_box","action":["style","height: auto !important; min-height: auto !important"],"cssable":true}]}],[479870641,{"a":[{"selector":".item-content","tasks":[["has",{"selector":" > .title > a[href*=\"//zen.yandex.ru/\"]"}]]}]}],[1868686426,{"a":[{"selector":"body","action":["style","background-color: #e5e5e5 !important"],"cssable":true}]}],[1977474285,{"a":[{"selector":"#footer","action":["style","background: none !important; padding: 0 !important"],"cssable":true},{"selector":"#top-line","action":["style","background: none !important; padding: 0 !important; height: auto !important"],"cssable":true},{"selector":".lenta > tbody > tr","tasks":[["has",{"selector":" > .newshead > div > .mainpage:first-child"}],["spath"," + tr + tr"]]},{"selector":".lenta > tbody > tr","tasks":[["has",{"selector":" > .newshead > div > .mainpage:first-child"}],["spath"," + tr"]]},{"selector":".lenta > tbody > tr","tasks":[["has",{"selector":" > .newshead > div > .mainpage:first-child"}]]},{"selector":"body:not(#id)","action":["style","background-color: #9ab9a7 !important"],"cssable":true},{"selector":"form > table[id^=\"p_row_\"]:nth-of-type(2)","tasks":[["has",{"selector":"*","tasks":[["has-text","Yap"]]}]]}]}],[1429056540,{"a":[{"selector":"#contents > ytd-rich-item-renderer","tasks":[["has",{"selector":" > #content > ytd-display-ad-renderer"}]]}]}],[1996588441,{"a":[{"selector":"#sitebox:not(#id)","action":["style","margin-top: 0 !important"],"cssable":true}]}],[2032761612,{"a":[{"selector":".branding_wrapper > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":".branding_wrapper","action":["style","pointer-events: none !important"],"cssable":true}]}],[1566694176,{"a":[{"selector":".wrapper > header","action":["style","margin-top: 15px !important"],"cssable":true}]}],[1990027361,{"a":[{"selector":"#page-body > .post","tasks":[["has",{"selector":"[class=\"username-coloured\"]","tasks":[["has-text","Advertiser"]]}]]}]}],[38498454,{"a":[{"selector":"#sp-right > .sp-inner > .module","tasks":[["has",{"selector":"[id*=\"ScriptRoot\"]"}]]},{"selector":"#sp-right > .sp-inner > .module","tasks":[["has",{"selector":"[onerror]"}]]}]}],[829407169,{"a":[{"selector":".cookie-paywall-visible div > .article-body-content ~ .article-body-content","action":["style","display: flex !important"],"cssable":true}]}],[1442190912,{"a":[{"selector":"article div","tasks":[["has-text","^Реклама$"]]}]}],[1478755325,{"a":[{"selector":"div","tasks":[["has",{"selector":" > a[href]:not([href^=\"/films/\"]):not([href^=\"/serials/\"]) > div"}]]}]}],[62791384,{"a":[{"selector":".slick-slide","tasks":[["has",{"selector":"div","tasks":[["has-text","На правах рекламы"]]}]]},{"selector":":not(#dle-content) > .shortstory","tasks":[["has",{"selector":" > a > div > .advs-label"}]]}]}],[538217748,{"a":[{"selector":".i-layout__branding-content-wrapper","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".i-layout_branding","action":["style","background-image: none !important"],"cssable":true}]}],[553654051,{"a":[{"selector":"h4","tasks":[["has-text","партнеры"]]}]}],[630018367,{"a":[{"selector":"h2","tasks":[["has-text",["^реклама","i"]]]}]}],[969632673,{"a":[{"selector":"#article_feeds > .row","tasks":[["has",{"selector":" > div > a[href*=\"yandex.\"][href*=\"news\"][href*=\"favid\"]"}]]},{"selector":"#article_feeds > .row","tasks":[["has",{"selector":" > div > p","tasks":[["has-text",["яндекс","i"]]]}]]}]}],[1396721614,{"a":[{"selector":"#topper_up","action":["style","height: 88px !important"],"cssable":true}]}],[517455585,{"a":[{"selector":".have-brand .wrap","action":["style","margin-top: 0 !important"],"cssable":true}]}],[959143759,{"a":[{"selector":".table > tbody[id^=\"post_\"]","tasks":[["has",{"selector":"a[title*=\"всю рекламу\"]"}]]}]}],[656782279,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":"#kwork-widget"}]]}]}],[39706251,{"a":[{"selector":".main","action":["style","margin-top: 2px !important"],"cssable":true}]}],[1755921021,{"a":[{"selector":"#alert > *","action":["style","pointer-events: auto"],"cssable":true},{"selector":"#alert","action":["style","pointer-events: none"],"cssable":true},{"selector":"body","action":["style","background: black !important; cursor: default"],"cssable":true}]}],[734305946,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > div[id][align=\"center\"]"}]]}]}],[1364203067,{"a":[{"selector":"#mainContainer","action":["style","cursor: auto !important; padding-top: unset !important; background-color: inherit !important"],"cssable":true}]}],[1500036271,{"a":[{"selector":"body > .wrap","action":["style","margin-top: 0 !important; padding-top: 0 !important"],"cssable":true},{"selector":"html > body","action":["style","background-color: #e5e5e5 !important"],"cssable":true}]}],[1030162510,{"a":[{"selector":".articleContent > p","tasks":[["has",{"selector":" > span + strong[style]"}]]}]}],[1324163307,{"a":[{"selector":"[class]","tasks":[["has",{"selector":" > .name","tasks":[["has-text",["больше | партн|прочие | сми","i"]]]}]]}]}],[1777855612,{"a":[{"selector":".base","tasks":[["has",{"selector":".r-r","tasks":[["has",{"selector":"script","tasks":[["has-text","^bbs_"]]}]]}]]},{"selector":".base","tasks":[["has",{"selector":".r-r","tasks":[["has",{"selector":"script[src]:not([src*=\"/templates/\"])"}]]}]]}]}],[1788341461,{"a":[{"selector":".light","tasks":[["has",{"selector":"[href=\"#hideRekCaption\"]"}]]}]}],[1362180512,{"a":[{"selector":".b-cell > div[id]","action":["style","padding-top: 0 !important"],"cssable":true}]}],[1622486168,{"a":[{"selector":"div[id] > [class]","tasks":[["has-text","^Новости партнеров"]]}]}],[46479592,{"a":[{"selector":".td-header-sp-logo","action":["style","max-height: 90px !important"],"cssable":true}]}],[1245587263,{"a":[{"selector":".newsfeed","action":["style","height: auto !important"],"cssable":true}]}],[822889168,{"a":[{"selector":"article > div[style]","tasks":[["has",{"selector":" > div","tasks":[["has-text","Реклама"]]}]]}]}],[2090315634,{"a":[{"selector":"div","tasks":[["has",{"selector":" > a[href*=\"aHR0c\"][target=\"_blank\"] div"}]]},{"selector":"div","tasks":[["has",{"selector":" > a[href*=\"aHR0c\"][target=\"_blank\"] img"}]]}]}],[559376395,{"a":[{"selector":".side-box","tasks":[["has",{"selector":" > [id=\"div-gpt-ad-sidebar\"]"}]]}]}],[929464636,{"a":[{"selector":".adsbygoogle","action":["style","max-height: 6px !important"],"cssable":true}]}],[1510550676,{"a":[{"selector":".footer-logo","action":["style","filter: invert(0.8) !important"],"cssable":true},{"selector":"img[src=\"/vision/footer-logo.png\"]","action":["style","filter: invert(0.8) !important"],"cssable":true}]}]]);

const hostnamesMap = new Map([["filmix.ac",[936539360,1093328495,1788337913]],["filmix.gay",[936539360,1093328495,1788337913]],["filmix.life",[936539360,1093328495,1788337913]],["filmix.love",[936539360,1093328495,1788337913]],["filmix.tech",[936539360,1093328495,1788337913]],["filmix.zone",[936539360,1093328495,1788337913]],["ru-drivemusic.net",1093328495],["nevasport.ru",1093328495],["xatab-repack.com",[1788337913,1928146300,997661330,1868686426]],["otxataba.net",[1788337913,1928146300,997661330,1868686426]],["xatab-repack.org",[1788337913,1928146300,997661330,1868686426]],["playtor.tv",[1788337913,1928146300,997661330]],["24video.adult",[1928146300,43658491,2048662612]],["hdrezka.ag",[1928146300,43658491,2048662612,997661330]],["rezka.ag",[1928146300,43658491,2048662612,997661330]],["hdrezka.buzz",[1928146300,43658491,2048662612,997661330]],["hdrezka.by",[1928146300,43658491,2048662612,997661330]],["kv.by",[1928146300,997661330,1460943814]],["hdrezka.city",[1928146300,43658491,2048662612,997661330]],["hdrezka.club",[1928146300,43658491,2048662612,997661330]],["mirkino.club",[1928146300,997661330,50603489]],["hdrezka.cm",[1928146300,43658491,2048662612,997661330]],["kinotochka.co",[1928146300,997661330,82302539]],["3ivi.com",[1928146300,43658491,2048662612,997661330]],["bestivi.com",[1928146300,43658491,2048662612,997661330]],["betahdrezka.com",[1928146300,43658491,2048662612,997661330]],["drhdrezka.com",[1928146300,43658491,2048662612,997661330]],["ezhdrezka.com",[1928146300,43658491,2048662612,997661330]],["freehdrezka.com",[1928146300,43658491,2048662612,997661330]],["gecid.com",[1928146300,997661330,419177870]],["hdrezkame.com",[1928146300,43658491,2048662612,997661330]],["hdrezkaonline.com",[1928146300,43658491,2048662612,997661330]],["hdrezkayou.com",[1928146300,43658491,2048662612,997661330]],["instahdrezka.com",[1928146300,43658491,2048662612,997661330]],["ixbt.com",[1928146300,43658491,2048662612,997661330,59569322,1945007540]],["justhdrezka.com",[1928146300,43658491,2048662612,997661330]],["liveivi.com",[1928146300,43658491,2048662612,997661330]],["livejournal.com",[1928146300,997661330]],["lostserials.com",[1928146300,43658491,2048662612,997661330]],["mrhdrezka.com",[1928146300,43658491,2048662612,997661330]],["rehdrezka.com",[1928146300,43658491,2048662612,997661330]],["rezkery.com",[1928146300,43658491,2048662612,997661330]],["rezkify.com",[1928146300,43658491,2048662612,997661330]],["smotri.com",[1928146300,997661330,739925373]],["tryhdrezka.com",[1928146300,43658491,2048662612,997661330]],["upivi.com",[1928146300,43658491,2048662612,997661330]],["24video.in",[1928146300,43658491,2048662612,997661330]],["hdrezka.in",[1928146300,43658491,2048662612,997661330]],["hdrezka.ink",[1928146300,43658491,2048662612,997661330]],["hdrezka.live",[1928146300,43658491,2048662612,997661330]],["hdrezka.loan",[1928146300,43658491,2048662612,997661330]],["hdrezka.me",[1928146300,43658491,2048662612,997661330]],["kinobar.me",[1928146300,43658491,2048662612,997661330]],["kinopub.me",[1928146300,43658491,2048662612,997661330]],["kinotochka.me",[1928146300,997661330,82302539]],["hdrezka.name",[1928146300,43658491,2048662612,997661330]],["hdrezka1tty21.net",[1928146300,43658491,2048662612,997661330]],["hdrezka334dfx.net",[1928146300,43658491,2048662612,997661330]],["hdrezka63hhty.net",[1928146300,43658491,2048662612,997661330]],["hdrezka74hh1g.net",[1928146300,43658491,2048662612,997661330]],["hdrezkabbdh4d.net",[1928146300,43658491,2048662612,997661330]],["hdrezkadgg3y7.net",[1928146300,43658491,2048662612,997661330]],["hdrezkaeqww4d.net",[1928146300,43658491,2048662612,997661330]],["hdrezkagghrt2.net",[1928146300,43658491,2048662612,997661330]],["hdrezkahdg24s.net",[1928146300,43658491,2048662612,997661330]],["hdrezkahf22hh.net",[1928146300,43658491,2048662612,997661330]],["hdrezkahfjj2e.net",[1928146300,43658491,2048662612,997661330]],["hdrezkajjfhr5.net",[1928146300,43658491,2048662612,997661330]],["hdrezkan35734.net",[1928146300,43658491,2048662612,997661330]],["hdrezkaxvb323.net",[1928146300,43658491,2048662612,997661330]],["hdrezkaygzp2t.net",[1928146300,43658491,2048662612,997661330]],["hdrezkayt7810.net",[1928146300,43658491,2048662612,997661330]],["hdrezkayyt43d.net",[1928146300,43658491,2048662612,997661330]],["oblozhki.net",[1928146300,997661330,1851760136]],["zakarpatpost.net",[1928146300,997661330]],["hdrezka19139.org",[1928146300,43658491,2048662612,997661330]],["hdrezka1wn.org",[1928146300,43658491,2048662612,997661330]],["hdrezka2mwgm.org",[1928146300,43658491,2048662612,997661330]],["hdrezkacvb.org",[1928146300,43658491,2048662612,997661330]],["hdrezkap3g.org",[1928146300,43658491,2048662612,997661330]],["hdrezkapez.org",[1928146300,43658491,2048662612,997661330]],["hdrezkapoi.org",[1928146300,43658491,2048662612,997661330]],["hdrezkapzm.org",[1928146300,43658491,2048662612,997661330]],["hdrezkaqwe.org",[1928146300,43658491,2048662612,997661330]],["hdrezkarty.org",[1928146300,43658491,2048662612,997661330]],["hdrezkasdf.org",[1928146300,43658491,2048662612,997661330]],["hdrezkawer.org",[1928146300,43658491,2048662612,997661330]],["hdrezkazxc.org",[1928146300,43658491,2048662612,997661330]],["rd8j1em1zxge.org",[1928146300,43658491,2048662612,997661330]],["rufootballtv.org",[1928146300,997661330]],["userstyles.org",[1928146300,997661330]],["hdrezka.re",[1928146300,43658491,2048662612,997661330]],["hdrezka.rest",[1928146300,43658491,2048662612,997661330]],["aif.ru",[1928146300,997661330]],["game-pool.ru",1928146300],["nootropos.ru",[1928146300,997661330]],["oper.ru",[1928146300,997661330]],["pay-day.ru",[1928146300,43658491,2048662612]],["pure-t.ru",[1928146300,43658491,2048662612,997661330]],["sc2tv.ru",[1928146300,997661330]],["stopgame.ru",[1928146300,997661330]],["hdrezka.run",[1928146300,43658491,2048662612,997661330]],["hdrezka.sh",[1928146300,43658491,2048662612,997661330]],["hdrezka.today",[1928146300,43658491,2048662612,997661330]],["mc.today",[1928146300,997661330]],["hdrezka.top",[1928146300,43658491,2048662612,997661330]],["newstudio.tv",[1928146300,43658491,2048662612,997661330]],["uateam.tv",[1928146300,997661330,1851760136]],["ain.ua",[1928146300,997661330]],["bit.ua",[1928146300,997661330,1851760136]],["budport.com.ua",[1928146300,997661330]],["epravda.com.ua",[1928146300,997661330,1045953032,1888397113,868435436,1048119884,1884680645]],["ko.com.ua",[1928146300,997661330]],["hdrezka.vip",[1928146300,43658491,2048662612,997661330]],["rusporno.vip",[1928146300,43658491,2048662612,997661330]],["hdrezka.website",[1928146300,43658491,2048662612,997661330]],["hdrezka.win",[1928146300,43658491,2048662612,997661330]],["hd-rezka.ag",[43658491,2048662612]],["kinoplanet.biz",[43658491,2048662612]],["tfile.cc",[43658491,2048662612,464818083]],["vse-sezony.cc",[43658491,2048662612]],["kinobe.club",[43658491,2048662612]],["tfilm.club",[43658491,2048662612]],["hdrezka.co",[43658491,2048662612]],["lotzon.co",[43658491,2048662612]],["tfile.co",[43658491,2048662612,464818083]],["torentor.co",[43658491,2048662612]],["film-ua.com",[43658491,2048662612]],["gordonua.com",[43658491,2048662612,792863951]],["ikinohd.com",[43658491,2048662612]],["utorrentfilmi.com",[43658491,2048662612]],["moskva.fm",[43658491,2048662612]],["dnepr.info",[43658491,2048662612]],["virusinfo.info",[43658491,2048662612,1851760136]],["gidonline.io",[43658491,2048662612]],["nnm-club.lib",[43658491,2048662612]],["zombie-film.live",[43658491,2048662612]],["baskino.me",[43658491,2048662612]],["nnm-club.me",[43658491,2048662612]],["tfilm.me",[43658491,2048662612]],["filmitorrent.net",[43658491,2048662612]],["filmy-smotret.net",[43658491,2048662612]],["koshara.net",[43658491,2048662612]],["smotret-film.net",[43658491,2048662612]],["smotret-filmy.net",[43658491,2048662612]],["dugtor.org",[43658491,2048662612]],["kintor.org",[43658491,2048662612]],["mrutor.org",[43658491,2048662612]],["my-tfile.org",[43658491,2048662612,464818083]],["serialbox.org",[43658491,2048662612]],["tfile-music.org",[43658491,2048662612]],["torrfan.org",[43658491,2048662612]],["trupornolabs.org",[43658491,2048662612]],["utorrentfilmi.org",[43658491,2048662612]],["xxxadulttorrent.org",[43658491,2048662612]],["gtorrent.pro",[43658491,2048662612]],["lotzon.pro",[43658491,2048662612]],["nnmclub.ro",[43658491,2048662612]],["dugtor.ru",[43658491,2048662612]],["hdkinozor.ru",[43658491,2048662612]],["hdkinozzoro.ru",43658491],["investxp.ru",[43658491,2048662612]],["roem.ru",[43658491,2048662612]],["sobaka.ru",[43658491,2048662612]],["vc.ru",[43658491,2048662612]],["you-anime.ru",[43658491,2048662612]],["hdrezka.su",[43658491,2048662612]],["nnmclub.to",[43658491,2048662612]],["baskino1.top",[43658491,2048662612]],["hdrezka.tv",[43658491,2048662612]],["tfilm.tv",[43658491,2048662612]],["wikianime.tv",[43658491,2048662612]],["yummyanime.tv",[43658491,2048662612]],["jetsetter.ua",[43658491,2048662612]],["kinoafisha.ua",[43658491,2048662612]],["kronverkcinema.ua",[43658491,2048662612]],["baskino-2021.uno",[43658491,2048662612]],["gtorrent.xyz",[43658491,2048662612]],["torra.xyz",[43658491,2048662612]],["championat.com",[2048662612,1451423040]],["4video.adult",997661330],["2pay-day.ru",997661330],["animevost.am",1962822171],["animevost.org",1962822171],["vost.pw",1962822171],["animevost.top",1962822171],["rp5.am",42556366],["rp5.by",42556366],["rp5.kz",42556366],["rp5.lt",42556366],["rp5.lv",42556366],["rp5.md",42556366],["rp5.co.nz",42556366],["rp5.ru",42556366],["rp5.ua",42556366],["rp5.co.uk",42556366],["cartoonka.art",324936395],["multmania.club",324936395],["seasonvar.be",1045953032],["online-freebee.club",1045953032],["fast-torrent.co",1045953032],["uniondht.org",1045953032],["seasonvar.re",1045953032],["seasonvar.ru",1045953032],["anidub.best",2133577873],["senpai.cc",2133577873],["kinogo-net.la",2133577873],["anilibria.life",2133577873],["animedia.life",2133577873],["animego.life",2133577873],["yummyanime.life",2133577873],["anistar.su",2133577873],["animebest.tv",2133577873],["animevost.tv",2133577873],["yummyanime.best",1460227402],["newseries.me",1460227402],["dc-marvel.org",1460227402],["cinema-hd.ru",1460227402],["goodfilms.su",1460227402],["filmshd.vip",1460227402],["ukr.bio",758211361],["365news.biz",1213122678],["delovoymir.biz",1207535938],["infoua.biz",1153819463],["kino-live8.biz",1680517928],["kino-live2.org",1680517928],["openssource.biz",12225543],["pornolab.biz",1084126463],["pornolab.cc",1084126463],["pornolab.lib",1084126463],["pornolab.net",1084126463],["ruporus.biz",845805364],["ruporus.cc",845805364],["ruporus.com",845805364],["ruporus.net",845805364],["porus.ru",845805364],["ruporus.top",845805364],["ruporus.tv",845805364],["ruporus.xyz",845805364],["sport7.biz",1906881431],["sportbar.biz",1906881431],["sportbarchik88.com",1906881431],["sporting77.com",1906881431],["channels247.net",1906881431],["goool7.ws",1906881431],["av.by",394183118],["ex-press.by",1586739783],["footboom.by",1190648144],["footboom.com",1190648144],["footboom.kz",1190648144],["google.by",2012503892],["google.com",2012503892],["google.kz",2012503892],["google.ru",2012503892],["google.com.ua",2012503892],["kraj.by",1412308094],["allapteki.ru",1412308094],["profile.ru",1412308094],["kurs.com.ua",1412308094],["cont.ws",1412308094],["auto.kufar.by",57045443],["re.kufar.by",1688761118],["nn.by",1576664386],["www.onliner.by",655269015],["mag.relax.by",1734674911],["reshuct.by",1473096058],["sdamgia.ru",1473096058],["sport-tv.by",550839209],["old.sport-tv.by",334669814],["tut.by",1370708983],["sport.tut.by",1611565134],["vgr.by",286682420],["yandex.by",[412177124,1045254084,1439208446]],["yandex.kz",[412177124,1045254084,1439208446]],["yandex.ru",[412177124,1045254084,1439208446]],["yandex.uz",[412177124,1045254084,1439208446]],["dzen.ru",1045254084],["ya.ru",1439208446],["afisha.yandex.by",1171610843],["afisha.yandex.kz",1171610843],["afisha.yandex.ru",1171610843],["afisha.yandex.uz",1171610843],["mail.yandex.by",805374843],["mail.yandex.com",805374843],["mail.yandex.kz",805374843],["mail.yandex.ru",805374843],["mail.yandex.uz",805374843],["music.yandex.by",89042342],["music.yandex.kz",89042342],["music.yandex.ru",89042342],["music.yandex.uz",89042342],["rasp.yandex.by",1670057543],["rasp.yandex.kz",1670057543],["rasp.yandex.ru",1670057543],["rasp.yandex.uz",1670057543],["astar.bz",925865589],["anistar.org",925865589],["online-star.org",925865589],["online-stars.org",925865589],["sochi.camera",899960058],["alexfilm.cc",550887382],["alexfilm.org",550887382],["animeonline.cc",714437460],["dmod.cc",[1555642156,2081277538,1297841070,1514157293]],["help-wifi.com",1555642156],["od-news.com",1555642156],["pixwords-help.info",1555642156],["socportal.info",1555642156],["mods-fs.net",1555642156],["mydiv.net",1555642156],["nikolaev-city.net",1555642156],["readweb.org",1555642156],["wotspeak.org",1555642156],["pingvin.pro",1555642156],["draug.ru",[1555642156,2081277538,1297841070,1514157293]],["festima.ru",1555642156],["modsforwot.ru",[1555642156,2081277538,1297841070,1514157293]],["slo.ru",1555642156],["stroy-podskazka.ru",1555642156],["vplate.ru",1555642156],["7themes.su",1555642156],["cyberpedia.su",1555642156],["banker.ua",1555642156],["karpatnews.in.ua",1555642156],["freekeys.club",[1297841070,2044925362]],["trialnod.club",[1297841070,2044925362]],["investing.com",[1297841070,1266153097]],["ogorodniki.com",1297841070],["delfi.ee",1297841070],["moscowtimes.eu",1297841070],["newsyou.info",[1297841070,868435436,1048119884]],["2ip.io",1297841070],["8fornod.net",[1297841070,1988664037]],["fex.net",1297841070],["26-2.ru",1297841070],["2ip.ru",1297841070],["arbitr-praktika.ru",1297841070],["batenka.ru",1297841070],["budgetnik.ru",1297841070],["buhsoft.ru",1297841070],["business.ru",1297841070],["cxychet.ru",1297841070],["dirsalona.ru",1297841070],["fd.ru",1297841070],["gazeta-unp.ru",1297841070],["gd.ru",1297841070],["gkh.ru",1297841070],["glavbukh.ru",1297841070],["hr-director.ru",1297841070],["kdelo.ru",1297841070],["kom-dir.ru",1297841070],["law.ru",1297841070],["lawyercom.ru",1297841070],["menobr.ru",1297841070],["moscowtimes.ru",1297841070],["nalogplan.ru",1297841070],["pro-goszakaz.ru",1297841070],["pro-personal.ru",1297841070],["resobr.ru",1297841070],["rnk.ru",1297841070],["rusprofile.ru",1297841070],["sekretariat.ru",1297841070],["stroychet.ru",1297841070],["trudohrana.ru",1297841070],["ugpr.ru",1297841070],["zarplata-online.ru",1297841070],["zdrav.ru",1297841070],["w98008mo.beget.tech",1297841070],["budgetnyk.com.ua",1297841070],["dzakupivli.com.ua",1297841070],["kadrovik01.com.ua",1297841070],["medsprava.com.ua",1297841070],["sop.com.ua",1297841070],["factor.ua",[1297841070,1888397113,868435436]],["golovbukh.ua",1297841070],["podrobno.uz",1297841070],["stalkerportaal.ru",1514157293],["top-mods.ru",1514157293],["stalker-mods.clan.su",1514157293],["stalker-mods.su",1514157293],["erofishki.cc",[880630599,487563540]],["fishki.net",[880630599,487563540]],["i-news.kz",487563540],["hvylya.net",[487563540,868435436]],["tochka.net",[487563540,1888397113,868435436]],["sharknews.ru",487563540],["topdaynews.ru",487563540],["apostrophe.ua",487563540],["wworld.com.ua",487563540],["freehat.cc",[1102897629,39878697]],["turkcinema.org",1102897629],["lalapaluza.ru",[1102897629,39878697]],["smartmama.com.ua",[1102897629,1163666444]],["hdkinomir.cc",297012384],["kinokrad.cc",14079610],["kinokong.pro",14079610],["nowa.cc",1558619020],["sefon.cc",637262526],["intermedia.ru",637262526],["gorod.dp.ua",[637262526,1888397113,868435436]],["aramil.city",126181234],["lurkmore.click",1473778906],["all-episodes.club",[1410430048,1163666444]],["filmive-hd.net",1410430048],["kinoshack.net",1410430048],["tree.tv",1410430048],["riotpixels.com",[1163666444,721108163]],["animego.space",1163666444],["anidub.club",1187926704],["anime.anidub.com",1187926704],["online.anidub.com",[1187926704,1252236103]],["anime.anidub.life",[1187926704,1252236103]],["online.anidub.life",1187926704],["anidub.link",1187926704],["films-online.club",1463958411],["gdzotputina.club",1281657432],["reshebnik.com",[1281657432,530617947,1515098602]],["spishi.fun",1281657432],["gdzputina.net",1281657432],["zoobrilka.net",1281657432],["gdz.ninja",1281657432],["hdtochka.club",1089307820],["anti-malware.ru",50603489],["myseason.club",2022773294],["onlinemix.club",693487996],["selezen.club",1423712509],["selezen.net",1423712509],["selezen.org",1423712509],["uakino.club",1623326623],["ofxme.co",779630734],["tivix.co",564437497],["cdnpotok.com",564437497],["cdntelesee.com",564437497],["cdntvpotok.com",564437497],["oneliketv.com",564437497],["phys-kids.com",564437497],["sovetromantica.com",[564437497,101517812]],["liveball7.gq",564437497],["rxtv.github.io",564437497],["pokaz.me",564437497],["liveball8.ml",564437497],["domatv.net",564437497],["hdone.net",564437497],["hdru.net",564437497],["luxurytv.online",564437497],["cdnneedtv.ru",564437497],["kipolino.site",564437497],["t1pochek.site",564437497],["tip0chek.site",564437497],["worldvideo.site",564437497],["hindcine.tv",564437497],["viks.tv",564437497],["strah.video",564437497],["klplayer.website",564437497],["2es.work",564437497],["ani.wtf",564437497],["chepok.xyz",564437497],["tipochek.xyz",564437497],["torrentfilmi.co",1854025405],["1bigboss.com",767426389],["bigboss.video",767426389],["1informer.com",657345782],["fainaidea.com",[657345782,1673241820]],["root-nation.com",[657345782,1934236919]],["housechief.ru",657345782],["itech.co.ua",657345782],["7days-ua.com",10705313],["andro-news.com",894795507],["myanime.online",1252236103],["argumentiru.com",134296751],["armourbook.com",1544699395],["averina.com",1799451719],["just-for-fun.ru",1799451719],["bilshe.com",[502242959,1888397113,868435436]],["buhgalter911.com",[1888397113,868435436]],["ditey.com",[1888397113,868435436]],["f1analytic.com",[1888397113,868435436,1367846615]],["football-ukraine.com",[1888397113,868435436,99808554]],["forumodua.com",[1888397113,868435436,1048119884]],["nashamama.com",[1888397113,868435436]],["vsetv.com",[1888397113,868435436]],["bigmir.net",[1888397113,868435436]],["censor.net",[1888397113,868435436,1048119884]],["liga.net",[1888397113,868435436]],["besplatka.ua",[1888397113,868435436]],["24boxing.com.ua",[1888397113,868435436,1048119884]],["buhgalter.com.ua",[1888397113,868435436]],["eurointegration.com.ua",[1888397113,868435436,1048119884]],["footballtransfer.com.ua",[1888397113,868435436]],["dengi.ua",[1888397113,868435436]],["facenews.ua",[1888397113,868435436]],["football24.ua",[1888397113,868435436]],["i.ua",[1888397113,868435436]],["isport.ua",[1888397113,868435436]],["kolobok.ua",[1888397113,868435436]],["tvgid.ua",[1888397113,868435436,1048119884]],["businessua.com",[868435436,59569322]],["enovosty.com",868435436],["glianec.com",[868435436,2036598003]],["internetua.com",[868435436,1048119884]],["orakul.com",868435436],["real-vin.com",868435436],["sportanalytic.com",[868435436,701768543]],["nnovosti.info",868435436],["autoua.net",[868435436,1048119884,1239837588]],["stravy.net",868435436],["toneto.net",[868435436,1048119884]],["udoktora.net",[868435436,1048119884]],["ukr.net",868435436],["inforesist.org",868435436],["ostro.org",868435436],["kriminal.tv",868435436],["4mama.ua",[868435436,1048119884]],["beauty.ua",[868435436,1048119884]],["avtovod.com.ua",868435436],["lifedon.com.ua",868435436],["pravda.com.ua",868435436],["tvoymalysh.com.ua",[868435436,1048119884]],["u-news.com.ua",868435436],["zdorovia.com.ua",868435436],["gazeta.ua",868435436],["gismeteo.ua",[868435436,1048119884]],["kp.ua",868435436],["mama.ua",[868435436,1048119884]],["meteo.ua",868435436],["mport.ua",868435436],["nv.ua",868435436],["okino.ua",[868435436,1048119884]],["sinoptik.ua",[868435436,1048119884]],["smak.ua",868435436],["tv.ua",868435436],["brestcity.com",1310205629],["cherkassy-sport.com",1101982068],["cikavosti.com",1539409711],["coub.com",1563238294],["crazyatomicgames.com",[691700618,1463565041]],["xxx-igra.com",[691700618,1463565041]],["yaldagames.com",[691700618,1463565041]],["animejapan.tv",1463565041],["drive2.com",[152927223,585609250]],["drive2.ru",585609250],["economistua.com",[682974749,170977412]],["hs-manacost.ru",682974749],["egamersworld.com",1012446734],["filmozavr.com",1705970083],["filmozavr.net",1705970083],["flashscorekz.com",412725329],["flashscore.ru.com",412725329],["soccerstand.com",412725329],["livescore.in",412725329],["flashscore.com.ua",412725329],["freerutor.com",1851760136],["smb.ixbt.com",[1851760136,1104111151,1696293758]],["gidonline.fun",1851760136],["ixbt.games",[1851760136,1696293758,39706251]],["sportboom.info",1851760136],["repackov.net",1851760136],["allbasketball.org",1851760136],["urologypro.ru",1851760136],["kinoboom.su",1851760136],["greenpost.ua",1851760136],["gagadget.com",1264248182],["gazeta.ru",1264248182],["lenta.ru",1264248182],["rambler.ru",1264248182],["gamer-info.com",1031359909],["gasolina-online.com",1286483392],["houzz.ru",[1286483392,1988664037]],["galka.if.ua",1286483392],["gdespaces.com",823059893],["spac1.com",823059893],["spaces-blogs.com",823059893],["spaces.im",823059893],["spac1.info",823059893],["spac.me",823059893],["spac1.me",823059893],["spcs.me",823059893],["gdespaces.net",823059893],["spac1.net",823059893],["spac1.org",823059893],["spac1.ru",823059893],["spcs.social",823059893],["gdetraffic.com",206662292],["gdz4you.com",1672048895],["gdzguru.com",[530617947,596063633]],["tt-cup.com",[419177870,1884680645]],["dyvys.info",[419177870,46479592]],["biqle.ru",419177870],["valetudo.ru",419177870],["agronom.com.ua",[419177870,1884680645]],["glavnayatema.com",1401644026],["gubkinskiy.com",1469915154],["hellomagazine.com",1436364159],["hen-tay.com",1793120525],["hibiny.com",1530979014],["inoreader.com",1541804220],["instagram.com",1412027747],["forum.ixbt.com",1469815819],["www.ixbt.com",[897873281,1119246609]],["ixbt.market",1119246609],["kafanews.com",1420145750],["keysportal.com",1110308945],["kinokladovka.com",1425447565],["kinorium.com",1709560129],["kwikeer.com",2002048988],["latifundimag.com",1970837656],["list-org.com",301270742],["maxpark.com",125550787],["newsland.com",125550787],["mignews.com",6936409],["chelseanews.ru",6936409],["mignews.ru",6936409],["mobile-review.com",942401258],["myfreeproject.com",1708526458],["nonameno.com",2062587691],["novynarnia.com",943926239],["nwcod.com",1866157083],["obozrevatel.com",525219668],["darkermagazine.ru",525219668],["www.obozrevatel.com",1030503875],["open3dmodel.com",1789954264],["otzovik.com",680645902],["parnuxi.com",2133401786],["partnerkin.com",2050990932],["photofuneditor.com",1262348910],["pidru4nik.com",1144691857],["promodj.com",2068770510],["pvpru.com",1190900352],["razvitierebenka.com",247320210],["rbkgames.com",1678468909],["ringside24.com",[321530786,1239837588]],["dynamo.kiev.ua",[321530786,1239837588]],["www.okino.ua",1239837588],["forum.ru-board.com",1078917395],["ruero.com",1745402392],["salonav.com",21702318],["sherdog.com",[1988664037,688229658]],["softportal.com",[1988664037,1408663102]],["dentalmagazine.ru",1988664037],["noddb.ru",1988664037],["ppt.ru",1988664037],["texterra.ru",1988664037],["buh24.com.ua",1988664037],["senior.ua",1988664037],["tarkov-wiki.ru",688229658],["sntch.com",1595895571],["sportarena.com",1519746083],["tehnot.com",2091633385],["the-village-kz.com",2122173274],["the-village.me",2122173274],["the-village.ru",2122173274],["the-village.com.ua",2122173274],["tomat-pomidor.com",369233080],["torent-igruha.com",548359065],["by.tribuna.com",988806760],["sports.ru",988806760],["gastronom.ru",1884680645],["turboobit.com",925921572],["turbobit.net",925921572],["turbosit.net",925921572],["turbobi.pw",925921572],["turbobit.ru",925921572],["ua-cinema.com",497026023],["ua-football.com",913270274],["uakino.com",2115446733],["ukrainianwall.com",713199547],["vedomosti-ua.com",1262281753],["vk.com",627627388],["vkfaces.com",1733577077],["volyninfo.com",[99046983,137050371]],["botanichka.ru",99046983],["prikol.ru",99046983],["agronews.ua",[99046983,137050371]],["volynpost.com",680176916],["vpopke.com",1314181895],["bookmo.org",1314181895],["eromo.org",1314181895],["vidmo.org",1314181895],["vserialy.com",610482894],["vserialy.fun",610482894],["great-tv.ru",610482894],["vsezdorovo.com",479870641],["yaplakal.com",1977474285],["yap.ru",1977474285],["youtube.com",1429056540],["zagonk.com",1996588441],["zagonka.net",1996588441],["zagonko.org",1996588441],["zogonka.org",1996588441],["zagonka.tv",1996588441],["zerno-ua.com",2032761612],["znak.com",1566694176],["zx-pk.com",1990027361],["igra-prestoloff.cx",38498454],["igra-prestoloff10.xyz",38498454],["postimees.ee",829407169],["kavkaz-uzel.eu",1442190912],["anwap.film",1478755325],["kerch.fm",62791384],["mel.fm",538217748],["nsn.fm",553654051],["radiorecord.fm",630018367],["dokumental.ru",630018367],["infox.ru",630018367],["ria-m.tv",630018367],["sib.fm",969632673],["tort.fm",1396721614],["hdrezka.fun",517455585],["omskbird.tv",517455585],["kinokrad.us",517455585],["piratbit.fun",959143759],["vidak.icu",959143759],["piratbit.org",959143759],["piratbit.pw",959143759],["piratbit.top",959143759],["pb.wtf",959143759],["zaruba.fun",656782279],["aces.gg",1755921021],["searchengines.guru",734305946],["conversion.im",1364203067],["lordfilm.in",1500036271],["lordfilm.net",1500036271],["lordsfilm.net",1500036271],["lordsfilm.pro",1500036271],["lordsfilms.pro",1500036271],["lord-films.pw",1500036271],["lordfilm6.tv",1500036271],["lordfilm7.tv",1500036271],["lordfilmtv.vip",1500036271],["kinoxa.win",1500036271],["7days2die.info",1030162510],["allpravda.info",1324163307],["geo-politica.info",1324163307],["inosmi.info",1324163307],["news24today.info",1324163307],["pravdoryb.info",1324163307],["putin24.info",1324163307],["globalwarnews.ru",1324163307],["polit-mir.ru",1324163307],["vnn24.ru",1324163307],["animelend.info",1777855612],["big-games.info",1788341461],["small-games.info",1788341461],["doefiratv.info",1362180512],["dv-gazeta.info",1622486168],["glavred.info",1245587263],["glavred.net",1245587263],["gre4ka.info",822889168],["hentai-game.info",2090315634],["hentay-game.net",2090315634],["knigomir.info",559376395],["leninsw.info",929464636],["freeopenvpn.org",929464636],["lostfilm.info",1510550676]]);

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
