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

const argsMap = new Map([[1625268005,{"a":[{"selector":"[data-alias=\"Copyright\"] .widget-area > .widget_text:last-child","action":["style","border-style: none !important"],"cssable":true},{"selector":"[data-alias=\"Copyright\"] .widget-area > .widget_text:not(:last-child)","tasks":[["has",{"selector":"script"}]]}]}],[420394428,{"a":[{"selector":"html","action":["style","width: auto !important; position: unset !important; overflow: auto !important"],"cssable":true}]}],[1694800960,{"a":[{"selector":".page__section","tasks":[["has",{"selector":" > .partner"}]]}]}],[1606557423,{"a":[{"selector":"html","action":["style","background: none !important"],"cssable":true}]}],[562895635,{"a":[{"selector":"#art-main","action":["style","background-image: none !important"],"cssable":true},{"selector":".bg-top-menu","action":["style","top: 0 !important"],"cssable":true}]}],[1027680305,{"a":[{"selector":"td[valign=\"top\"] > table.tborder[width=\"240\"] ~ table.tborder[width]","tasks":[["has",{"selector":"td.tcat","tasks":[["has-text",["наши друзья|реклама","i"]]]}]]}]}],[884076764,{"a":[{"selector":".region[id^=\"content-\"] > .block","tasks":[["has",{"selector":"script","tasks":[["has-text",["adsbygoogle|advmanager|yadblock","i"]]]}]]}]}],[1759034759,{"a":[{"selector":".header.header-wrapper","action":["style","padding-top: 15px !important"],"cssable":true}]}],[260220547,{"a":[{"selector":".content","action":["style","background: none !important; padding: 0 !important"],"cssable":true}]}],[182185257,{"a":[{"selector":".recomend-section","tasks":[["has",{"selector":" > .flex > :not([data-href^=\"http://carrotblog.ru/\"])"}]]}]}],[828227952,{"a":[{"selector":"#main","action":["style","margin-top: 0 !important"],"cssable":true}]}],[718946739,{"a":[{"selector":".panel-group > .panel_primary","tasks":[["has",{"selector":" > .panel__body > #MediaMetricsInject"}]]}]}],[1268431190,{"a":[{"selector":"#ipsLayout_sidebar .ipsWidget","tasks":[["has",{"selector":"[alt=\"advertisement_alt\"]"}]]}]}],[1566522224,{"a":[{"selector":"body","action":["style","background: none !important; margin-top: 0 !important; padding-top: 0 !important"],"cssable":true}]}],[1784669786,{"a":[{"selector":".mt-auto","action":["style","margin-top: unset !important"],"cssable":true}]}],[792751840,{"a":[{"selector":".right_coll > .moduletable","tasks":[["has",{"selector":" > h3","tasks":[["has-text","Рекламные ссылки"]]}]]}]}],[1933666077,{"a":[{"selector":".dlblock","tasks":[["has",{"selector":"[href*=\".drp.su/\"]"}]]}]}],[527814375,{"a":[{"selector":"body:not(#id) > .header","action":["style","margin-bottom: auto !important"],"cssable":true}]}],[1784989529,{"a":[{"selector":".box[class*=\"content\"]","action":["style","margin-top: auto !important"],"cssable":true},{"selector":".cq-content > h2","tasks":[["has-text",["ставки","i"]]]},{"selector":".post-content > div > div","action":["remove",""],"tasks":[["matches-css",{"name":"height","value":"^150px$"}]]},{"selector":"div[class]:not([class*=\"-\"]):not([class*=\"_\"])","tasks":[["matches-css",{"name":"margin-top","value":"^16px$"}]]}]}],[982516887,{"a":[{"selector":".pocaz","action":["style","width: 10px !important; height: 10px !important; position: fixed !important; top:-100px !important"],"cssable":true}]}],[1363727112,{"a":[{"selector":".mainb > .main_block","tasks":[["has",{"selector":" > center > .slider"}]]}]}],[1975308410,{"a":[{"selector":"body > .site","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1727235628,{"a":[{"selector":".page > div[align=\"left\"] > table[style^=\"margin: 3px 0px\"]","tasks":[["has",{"selector":"script"}]]},{"selector":"body > div[style*=\"width\"][style*=\"margin\"]","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"table[id^=\"post\"] ~ div[style^=\"margin: 3px 0px\"]","tasks":[["has",{"selector":"[id^=\"yandex_rtb\"]"}]]}]}],[1807631850,{"a":[{"selector":".infoblock > .full","tasks":[["has",{"selector":" > div[style*=\"height:\"] > div > div[id^=\"adfox_\"]"}]]}]}],[1185664936,{"a":[{"selector":".page-layout > main","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":"div[class^=\"asideWidgets_\"] > .rounded-block","tasks":[["has",{"selector":" > [href*=\"bookmakers\"]"}]]}]}],[1557792341,{"a":[{"selector":"h6","tasks":[["has-text","РЕКОМЕНДУЕМ ПОЧИТАТЬ:"]]}]}],[782154546,{"a":[{"selector":"body > #container","action":["style","top: 0 !important"],"cssable":true}]}],[674555738,{"a":[{"selector":"#primary > article","tasks":[["has",{"selector":" > .panel > .panel-heading > [href=\"/reklama.php\"]"}]]},{"selector":"#secondary > aside","tasks":[["has",{"selector":" > .widget-title > [href=\"/reklama.php\"]"}]]}]}],[1581322698,{"a":[{"selector":"#grid-loop > .post","tasks":[["has",{"selector":" > a[href*=\"://urldirect.ru/\"]"}]]}]}],[60138163,{"a":[{"selector":"#for_fix > *","tasks":[["has",{"selector":".titlebar > span","tasks":[["has-text","партнеры"]]}]]}]}],[1012595344,{"a":[{"selector":".more-news","tasks":[["has-text","Новости партнеров"]]}]}],[189490619,{"a":[{"selector":".p-sidebar","action":["style","margin: auto !important"],"cssable":true},{"selector":"div[class^=\"banner\"] + section > div","action":["style","width: auto !important; height: auto !important"],"cssable":true},{"selector":"div[class^=\"banner\"] + section","action":["style","padding: unset !important; margin: unset !important"],"cssable":true},{"selector":"html:not(#id) > body > [id]:not([style])","action":["style","background-image: none !important; padding-top: 0 !important"],"cssable":true}]}],[1348883836,{"a":[{"selector":".adb","action":["style","position: fixed !important; transform: scale(0) !important"],"cssable":true},{"selector":".forumAd","action":["style","height: 1px !important"],"cssable":true},{"selector":".navbar_notice","action":["style","position: fixed !important; transform: scale(0) !important"],"cssable":true}]}],[2119263119,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > div > div > .drom-logo"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > div[id][class] > a[href] > img[src^=\"https://avatars.mds.yandex.net/get-adfox-content/\"]"}]]}]}],[316435289,{"a":[{"selector":"main > h3","tasks":[["has-text","Новости партнёров|Популярное в сети"]]}]}],[156492581,{"a":[{"selector":".contentWrap .lcWrap","action":["style","padding-right: unset !important"],"cssable":true}]}],[753702098,{"a":[{"selector":".igrozhur-promo-ref","action":["style","padding: 0 !important; background-color: transparent !important; cursor: auto !important"],"cssable":true}]}],[1334164628,{"a":[{"selector":"table[id^=\"post\"]","tasks":[["has",{"selector":" > tbody > tr > .thead","tasks":[["has-text","Это может быть интересно"]]}]]}]}],[1556768888,{"a":[{"selector":"body[style=\"overflow: hidden;\"]","action":["style","overflow-y: unset !important"],"cssable":true}]}],[1269494540,{"a":[{"selector":"section > section","tasks":[["has",{"selector":" > [class^=\"styled__AdvLink-sc-\"]"}]]}]}],[310567494,{"a":[{"selector":".container > .footer","tasks":[["has-text","реклама"]]}]}],[1276848428,{"a":[{"selector":".content-block","tasks":[["has",{"selector":"font","tasks":[["has-text","Новости партнеров"]]}]]}]}],[12554225,{"a":[{"selector":"#qr_posts > .forabg","tasks":[["has",{"selector":" > .inner > div [href=\"https://www.electric-house.ru/stop_rek.htm\"]"}]]},{"selector":".col-md-8 > span","tasks":[["has-text","Рекомендуем|Это интересно"],["spath"," ~ table"]]},{"selector":".col-md-8 > span","tasks":[["has-text","Рекомендуем|Это интересно"]]},{"selector":".panel","tasks":[["has",{"selector":" > .panel-heading","tasks":[["has-text","Интересные новости|Полезное|Реклама"]]}]]}]}],[227099175,{"a":[{"selector":".asideblock > div","tasks":[["has",{"selector":".icon > dt > span","tasks":[["has-text","Интересные новости|Предложения|Смотрите также"]]}]]}]}],[1088299696,{"a":[{"selector":".adsbygoogle","action":["style","height: 1px !important; opacity: 0 !important"],"cssable":true}]}],[225328145,{"a":[{"selector":".block","tasks":[["has",{"selector":" > .block__body > script"}]]},{"selector":".block","tasks":[["has",{"selector":" > div > [class*=\"bookmaker\"]"}]]}]}],[91728746,{"a":[{"selector":"body > .eva","action":["style","margin-top: 50px !important"],"cssable":true}]}],[566549136,{"a":[{"selector":"#search_panel > .panel-body","action":["style","display: block !important"],"cssable":true}]}],[1098083089,{"a":[{"selector":"div[class^=\"adv-\"]","tasks":[["has",{"selector":" > div[id^=\"adfox_\"]"}]]}]}],[1295636651,{"a":[{"selector":".site","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1552575933,{"a":[{"selector":"div","tasks":[["has",{"selector":" > .banner-bdm"}]]}]}],[1886531435,{"a":[{"selector":"h3","tasks":[["has",{"selector":" > span","tasks":[["has-text",["реклама","i"]]]}]]}]}],[1707034450,{"a":[{"selector":".sitemaker > .grid > .sm-responsive-full-width","action":["style","width: auto !important"],"cssable":true}]}],[1485003615,{"a":[{"selector":"article ~ div","tasks":[["has",{"selector":" > div + noindex"}]]},{"selector":"aside > div","tasks":[["has",{"selector":" > [id^=\"adv_\"]"}]]},{"selector":"aside > div","tasks":[["has",{"selector":" > div > [id^=\"adv_\"]"}]]},{"selector":"div","tasks":[["has",{"selector":" > div[id^=\"div-gpt-ad-\"]"}]]},{"selector":"section article div","tasks":[["has",{"selector":" > div:first-child > [id^=\"adv_\"]"}]]},{"selector":"section article ~ div div","tasks":[["has",{"selector":" > div > [id^=\"adv_\"]"}]]},{"selector":"section article ~ div","tasks":[["has",{"selector":" > [id^=\"adv_\"]"}]]}]}],[770396488,{"a":[{"selector":".bloc1","tasks":[["has",{"selector":"div[id^=\"bn_\"]"}]]},{"selector":".bloc_right > div","tasks":[["has",{"selector":" > .nopromo_view"}]]},{"selector":".lastnewscat","tasks":[["has",{"selector":" > [id*=\"ScriptRoot\"]"}]]},{"selector":"body > #header","action":["style","margin-top: 0 !important"],"cssable":true}]}],[269274564,{"a":[{"selector":".UNoyu","action":["style","height: calc(var(--vh, 1vh)*100 - 1px) !important"],"cssable":true}]}],[1529672958,{"a":[{"selector":"div","tasks":[["has",{"selector":" > [class$=\"relap-block\"]"}]]}]}],[83701301,{"a":[{"selector":".ftips-branding .td-main-page-wrap","action":["style","padding-top: 5px !important"],"cssable":true},{"selector":".ftips-branding-ad + div","action":["style","padding-top: 5px !important"],"cssable":true},{"selector":".ftips-branding.td_category_template_1 .td-category-header","action":["style","padding-top: 5px !important"],"cssable":true}]}],[1436131589,{"a":[{"selector":"div","tasks":[["has",{"selector":" > a[href^=\"/goto.php\"]"}]]},{"selector":"div","tasks":[["has",{"selector":" > sup"}]]}]}],[1857164169,{"a":[{"selector":"#T_Bottom","action":["style","width: auto !important"],"cssable":true}]}],[1614427312,{"a":[{"selector":"div[id^=\"pai_thumbz_\"][id$=\"_side\"]","action":["style","background: #363636 !important"],"cssable":true}]}],[1467029666,{"a":[{"selector":".rc2","tasks":[["has",{"selector":"div:first-child > #rc-bn"}]]},{"selector":".rc2","tasks":[["has",{"selector":"div[id^=\"adfox_\"]"}]]}]}],[674096113,{"a":[{"selector":"html > body","action":["style","overflow-y: auto !important; position: static !important"],"cssable":true}]}],[1850984446,{"a":[{"selector":".sidebar > .block-content","tasks":[["has",{"selector":" > noindex > script"}]]},{"selector":".sidebar > .block-title","tasks":[["has-text",["^реклама","i"]]]}]}],[1733530630,{"a":[{"selector":"div[class^=\"container-content\"] > div[class^=\"obolox\"]","action":["style","margin-top: 52px !important"],"cssable":true}]}],[922787731,{"a":[{"selector":"#secondary > .widget-wrap","tasks":[["has",{"selector":" > .widget_execphp"}]]}]}],[1784993187,{"a":[{"selector":"body > .container","action":["style","margin-top: 120px !important"],"cssable":true}]}],[353378617,{"a":[{"selector":"#content.site-max-width","action":["style","margin-top: 0 !important; padding-top: 0 !important"],"cssable":true},{"selector":"body > div[id] > div[id]","action":["style","background-image: none !important"],"cssable":true},{"selector":"body","action":["style","background-color: #303030 !important; background-image: none !important"],"cssable":true}]}],[1331643801,{"a":[{"selector":"#mainContent > section:first-of-type","action":["style","margin-top: unset !important"],"cssable":true}]}],[519460830,{"a":[{"selector":".comment-background","action":["style","background: none !important"],"cssable":true},{"selector":".main-content","action":["style","background: none !important"],"cssable":true},{"selector":".user-profile-section","action":["style","margin-top: unset !important"],"cssable":true}]}],[1993751925,{"a":[{"selector":"#wrapper","action":["style","max-width: none !important"],"cssable":true}]}],[2094207701,{"a":[{"selector":".section-map-grid","action":["style","margin-bottom: 20px !important"],"cssable":true}]}],[1427972337,{"a":[{"selector":"div:not([id]):not([class])","tasks":[["has",{"selector":" > div + div + section + section"}],["spath"," > div:first-child + div > div:only-child > div:first-child + div:last-child"]]}]}],[1073429028,{"a":[{"selector":".news-grid > .news-grid__col","tasks":[["has",{"selector":"[id^=\"banner\"]"}]]}]}],[1632946077,{"a":[{"selector":"a","tasks":[["has-text",["mediaget","i"]]]}]}],[1580338413,{"a":[{"selector":".layout-menu-header__links span[class*=\"pulse\"]:before","action":["style","animation: none !important"],"cssable":true}]}],[2041568888,{"a":[{"selector":"a[href^=\"https://www.goha.ru/~\"]","action":["style","pointer-events: none !important"],"cssable":true}]}],[1990728260,{"a":[{"selector":".wrapper__content-inner:not(#id)","action":["style","padding-top: 0 !important"],"cssable":true}]}],[427638773,{"a":[{"selector":".main-block .main-inner-wrap","action":["style","margin-top: 0 !important"],"cssable":true}]}],[2098991998,{"a":[{"selector":".right-side > .reading","tasks":[["has",{"selector":" > div > #MediaMetricsInject"}]]}]}],[1867647726,{"a":[{"selector":".section-feed-sm > div","tasks":[["has",{"selector":" > .blnk"}]]}]}],[1732293341,{"a":[{"selector":".box-shadow","tasks":[["has",{"selector":" > [id^=\"adfox_\"]"}]]}]}],[1969481364,{"a":[{"selector":"#Page","action":["style","margin-top: 0 !important"],"cssable":true}]}],[930807769,{"a":[{"selector":".rightColumn > .darkPart","action":["style","height: auto !important"],"cssable":true},{"selector":"footer.pageContainer","action":["style","height: auto !important"],"cssable":true}]}],[1546577362,{"a":[{"selector":".page-content","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1029864126,{"a":[{"selector":"#link-b","action":["style","display: block !important"],"cssable":true}]}],[1636451908,{"a":[{"selector":".wrapper-body","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1394096980,{"a":[{"selector":"#right-sidebar > aside","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":"#right-sidebar > aside","tasks":[["has",{"selector":"[id^=\"yandex_rtb\"]"}]]},{"selector":"#right-sidebar > aside","tasks":[["has",{"selector":"div[name]"}]]}]}],[1176494787,{"a":[{"selector":".jirrua","action":["style","margin-top: 0 !important"],"cssable":true}]}],[817619149,{"a":[{"selector":".page-branded","action":["style","margin-top: 0 !important"],"cssable":true}]}],[151758238,{"a":[{"selector":"body","action":["style","background-color: #596c84 !important"],"cssable":true}]}],[1074554590,{"a":[{"selector":"body > .all","action":["style","margin-top: 0 !important"],"cssable":true}]}],[167389378,{"a":[{"selector":".td-main-content-wrap","action":["style","margin-top: auto !important"],"cssable":true},{"selector":".tdc-content-wrap > div[class*=\"vc_custom_\"]:first-child","action":["style","margin-top: auto !important"],"cssable":true}]}],[2033785152,{"a":[{"selector":"#td-outer-wrap > *","action":["style","pointer-events: auto"],"cssable":true},{"selector":"#td-outer-wrap","action":["style","pointer-events: none"],"cssable":true},{"selector":"body","action":["style","background-image: none !important; background-color: whitesmoke !important"],"cssable":true},{"selector":"body","action":["style","pointer-events: none"],"cssable":true}]}],[84062458,{"a":[{"selector":"body > div[id]","tasks":[["has",{"selector":" > [onclick]"}]]}]}],[480290833,{"a":[{"selector":".hmenu_outer > .hmenu_box","tasks":[["has",{"selector":" > a[href^=\"http\"]:not([href*=\"igromania.ru/\"])"}]]},{"selector":".outer_inner > .wrapper_outer > div[class]","action":["style","height: auto !important; min-height: auto !important"],"cssable":true},{"selector":"body > .outer_outer > .outer_inner","action":["style","background: #dedede !important"],"cssable":true},{"selector":"div.hmenu_box a.hmenu","action":["style","padding-right: 13px !important; padding-left: 13px !important"],"cssable":true}]}],[1473212323,{"a":[{"selector":".article-detail > div[class]","tasks":[["has",{"selector":" > div[id^=\"marketWidget\"]"}]]}]}],[1026114124,{"a":[{"selector":".container > .row > div","tasks":[["has",{"selector":" > [src*=\"cdn-rtb.sape.ru\"]"}]]}]}],[2050203008,{"a":[{"selector":"#ot-right > div[id^=\"mod\"]","tasks":[["has",{"selector":".bannergroup"}]]}]}],[106182243,{"a":[{"selector":".stlt","tasks":[["has-text","Реклама"]]}]}],[248927193,{"a":[{"selector":"body > .page__wrapper","action":["style","padding-top: 60px !important"],"cssable":true}]}],[1600452996,{"a":[{"selector":"#contentShifter","action":["style","height: 127px !important"],"cssable":true}]}],[1744254482,{"a":[{"selector":"aside .widget","tasks":[["has",{"selector":" > .widget-container [class^=\"nadavi\"]"}]]},{"selector":"aside .widget","tasks":[["has",{"selector":" > .widget-container [id^=\"ya_\"]"}]]}]}],[112996638,{"a":[{"selector":"#content > .nav-single","tasks":[["has",{"selector":" > ins"}]]},{"selector":".fltext","action":["style","background: none !important; position: unset !important"],"cssable":true}]}],[1038558904,{"a":[{"selector":".page-wrapper > .content-main","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":"body.watch > div[class]:not([id]):not([style]):nth-child(-1n+2)","action":["style","background: none !important"],"cssable":true},{"selector":"body.watch > header.ivi-top","action":["style","top: 0 !important"],"cssable":true}]}],[961027022,{"a":[{"selector":".get_news_link__bottom__item","tasks":[["has",{"selector":" > a[href*=\"yandex.\"]"}]]}]}],[394883411,{"a":[{"selector":".adsbygoogle","action":["style","height: auto !important"],"cssable":true},{"selector":".prazdnik_main","action":["style","min-height: auto !important"],"cssable":true}]}],[251452352,{"a":[{"selector":"body:not(#id)","action":["style","background: whitesmoke !important"],"cssable":true}]}],[1378881924,{"a":[{"selector":".newsItem > .otherBlock","tasks":[["has",{"selector":" > .textContainer > noindex"}]]},{"selector":".newsItem","tasks":[["has",{"selector":" > div > small"}]]}]}],[1934344987,{"a":[{"selector":".comments_form","action":["style","min-height: 0 !important"],"cssable":true},{"selector":".section-related","tasks":[["has",{"selector":" > a[href=\"/////\"]"}]]},{"selector":".ten_ears_wrap","action":["style","margin: 35px auto 0 auto !important"],"cssable":true},{"selector":".ten_topbar","action":["style","height: 0 !important"],"cssable":true},{"selector":"body > .menu_wrap","action":["style","position: relative !important"],"cssable":true},{"selector":"body","action":["style","background-image: none !important; background-color: #bdbdbd !important"],"cssable":true}]}],[1322891722,{"a":[{"selector":"div[class^=\"boxFormWrapper\"]","tasks":[["has",{"selector":" > div[class^=\"link\"] a[href*=\"/images/reklama/\"]"}]]}]}],[376006493,{"a":[{"selector":".rightcol > div","tasks":[["has",{"selector":"a[href][target=\"_blank\"]"}]]},{"selector":"[class$=\"title\"]","tasks":[["has-text",["предложения","i"]]]}]}],[2073005394,{"a":[{"selector":"nav > #menu_line","action":["style","top: 3rem !important"],"cssable":true}]}],[1032118974,{"a":[{"selector":".outer","action":["style","padding-top: 0 !important"],"cssable":true}]}],[722129961,{"a":[{"selector":"body","action":["style","background-color: transparent !important"],"cssable":true}]}],[1424931128,{"a":[{"selector":"#actorListBlock","action":["style","padding-right: 19px !important"],"cssable":true},{"selector":"#header-info-bg","action":["style","background-color: transparent !important; background-image: none !important"],"cssable":true},{"selector":".app div[class^=\"device\"][class*=\" page-main__content\"]","action":["style","background-color: black !important"],"cssable":true},{"selector":".app__content div[style=\"min-height:250px\"]","action":["style","min-height: 0 !important"],"cssable":true},{"selector":".content-container_app-width_wide","action":["style","max-width: 100% !important"],"cssable":true},{"selector":".desktop-layout-with-sidebar__content > div[class][data-tid]","action":["style","width: auto !important"],"cssable":true},{"selector":".film-seances-page","action":["style","box-shadow: 0 -8px 15px #333333 !important"],"cssable":true},{"selector":".filmsListNew .info","action":["style","padding-right: 116px !important"],"cssable":true},{"selector":".header-navigation","action":["style","max-width: 100% !important"],"cssable":true},{"selector":".modal-root div[class^=\"fullscreen-selector\"]","action":["style","opacity: inherit !important"],"cssable":true},{"selector":".page-content > #header-info-bg + div[id]:not([class])","action":["style","margin-bottom: 40px !important"],"cssable":true},{"selector":".page-content > div[id]:not(#header-info-bg):empty + div[id]:not(#top)","action":["style","margin-bottom: 40px !important"],"cssable":true},{"selector":".shadow.shadow-restyle","action":["style","box-shadow: 0 -8px 15px #333333 !important"],"cssable":true},{"selector":".underheader-superbanner-wrapper","action":["style","min-height: 0 !important"],"cssable":true},{"selector":".user-subscription-partial-component__subscription-item-text","action":["style","white-space: pre-wrap !important"],"cssable":true},{"selector":"div > a[aria-label=\"КиноПоиск\"] ~ div > button ~ div","action":["style","opacity: inherit !important"],"cssable":true},{"selector":"div[class*=\" styles_basicInfoSection\"]","action":["style","padding-top: 40px !important"],"cssable":true},{"selector":"div[class*=\" styles_basicMediaSection\"]","action":["style","padding-top: 40px !important"],"cssable":true},{"selector":"div[class*=\" styles_videoContainer\"]","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"div[class*=\"kinopoisk-media-container_pending\"]","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"div[class*=\"styles_headerContainer\"] + div[class^=\"styles_\"]","action":["style","max-width: 100% !important"],"cssable":true},{"selector":"div[class*=\"user-bar\"] > div > button ~ div","action":["style","opacity: inherit !important"],"cssable":true},{"selector":"div[class^=\"styles_emptyItems__\"] div","action":["style","background-color: transparent !important"],"cssable":true},{"selector":"div[class^=\"styles_footerContainer__\"]","action":["style","max-width: 100% !important"],"cssable":true},{"selector":"div[class^=\"styles_pending_\"]","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"div[style=\"min-width: 1px;\"]","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"div[style=\"min-width:1px\"]","action":["style","min-height: 0 !important"],"cssable":true}]}],[749386007,{"a":[{"selector":"center","tasks":[["has",{"selector":" > p","tasks":[["has-text","Реклама"]]}]]}]}],[253403476,{"a":[{"selector":".header_container","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":"html > body","action":["style","background-image: none !important; background-color: black !important"],"cssable":true}]}],[1546841726,{"a":[{"selector":"div[style]","tasks":[["has",{"selector":" > [id^=\"adfox_\"]"}]]},{"selector":"div[style]","tasks":[["has",{"selector":" > [id^=\"unit_\"]"}]]},{"selector":"div[style]","tasks":[["has",{"selector":" > ntvk"}]]}]}],[611945439,{"a":[{"selector":".bg_container","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":".subbody2","action":["style","margin-top: 0 !important"],"cssable":true}]}],[214463603,{"a":[{"selector":".col-2 > div[id^=\"right_block\"]","tasks":[["has",{"selector":".content_rb"}]]}]}],[429696275,{"a":[{"selector":".block-test","tasks":[["has",{"selector":" > [id^=\"yandex_rtb\"]"}]]},{"selector":".block-test","tasks":[["has",{"selector":"#marketAttractive"}]]},{"selector":".block-test","tasks":[["has",{"selector":"#vid_vpaut_div"}]]}]}],[440292102,{"a":[{"selector":".shortcode-html","tasks":[["has",{"selector":" > header > div > [class]","tasks":[["has-text","Популярное в сети"]]}]]},{"selector":"div","tasks":[["has",{"selector":" > header ~ a[href][rel=\"sponsored\"]"}]]}]}],[2068826863,{"a":[{"selector":"div[id^=\"newsid_\"] > .row0[style=\"margin-bottom:8px;\"]","action":["style","pointer-events: none !important"],"cssable":true}]}],[227337415,{"a":[{"selector":"#allrecords > #t-header + div + div[id^=\"rec\"][style*=\"padding-top:\"]","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":"#allrecords > #t-header + div[id^=\"rec\"][style*=\"padding-top:\"]","action":["style","padding-top: 0 !important"],"cssable":true},{"selector":"#allrecords > div[id^=\"undefined\"]","tasks":[["has",{"selector":"[href*=\"/ad.admitad.com/\"]"}]]},{"selector":"#allrecords > div[id^=\"undefined\"]","tasks":[["has",{"selector":"[id^=\"marketWidget\"]"}]]},{"selector":".page-wrapper > .page-inner","action":["style","margin-top: auto !important"],"cssable":true}]}],[1439156123,{"a":[{"selector":".sidebox","tasks":[["has",{"selector":".adsbygoogle"}]]}]}],[282208763,{"a":[{"selector":".fadename","tasks":[["has-text","НОВОСТИ ПАРТНЕРОВ"]]}]}],[1644645127,{"a":[{"selector":"#right > h2","tasks":[["has-text","Рекомендуем"],["spath"," + .bordered"]]},{"selector":"#right > h2","tasks":[["has-text","Рекомендуем"]]},{"selector":".bordered","tasks":[["has",{"selector":" > center > .adsbygoogle"}]]},{"selector":".bordered","tasks":[["has",{"selector":" > center > [id^=\"yandex_rtb\"]"}]]},{"selector":".post > h2","tasks":[["has-text","Обратите внимание"]]}]}],[1955975121,{"a":[{"selector":".container[style=\"max-width: unset;\"] > .container","action":["style","margin-top: auto !important"],"cssable":true}]}],[346962449,{"a":[{"selector":".b-board._olimp > .b-board__wrap","action":["style","margin-left: 0 !important"],"cssable":true},{"selector":".b-board._olimp","action":["style","border-bottom: none !important; margin-top: 30px !important"],"cssable":true}]}],[276455330,{"a":[{"selector":".sideColumn div","tasks":[["has",{"selector":" > div + [id^=\"rnet_\"]"}]]}]}],[1549375210,{"a":[{"selector":".down_link","tasks":[["has",{"selector":" > .downloada:-abp-properties(display: block !important)"}],["spath"," > .wl"]]},{"selector":".downloada","action":["style","display: block !important"],"cssable":true}]}],[316679831,{"a":[{"selector":"body:not(#id)","action":["style","overflow: auto !important; margin-right: auto !important"],"cssable":true}]}],[888204875,{"a":[{"selector":".theme-wrapper > .container > div","action":["style","padding-bottom: unset !important"],"cssable":true}]}],[857464865,{"a":[{"selector":"#sidebar-right > .block","tasks":[["has",{"selector":" > h2","tasks":[["has-text","Наши партнёры"]]}]]}]}],[434527160,{"a":[{"selector":".content","action":["style","margin-top: 0 !important"],"cssable":true}]}],[466370333,{"a":[{"selector":".allpageinner > div:not(.header) > div[class*=\" \"] ~ .logo > a > span","action":["style","top: inherit !important; left: inherit !important; font-size: x-large !important; font-weight: bold !important; color: #0183cb !important"],"cssable":true}]}],[305609427,{"a":[{"selector":".widget","tasks":[["has",{"selector":" > [class*=\"bookmaker\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"a[href*=\"bookmaker\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"a[href*=\"utm_campai\"]"}]]},{"selector":"div","tasks":[["has",{"selector":" > [data-has-bookmaker-odds]"}]]}]}],[386333429,{"a":[{"selector":"#wrap","action":["style","background-image: none !important"],"cssable":true}]}],[962869511,{"a":[{"selector":"#search\\:container","action":["style","margin-top: 4px !important; margin-bottom: 4px !important"],"cssable":true},{"selector":".article__item_source_viqeo .article__container:before","action":["style","content: initial !important"],"cssable":true},{"selector":".pulse-lenta div","tasks":[["has",{"selector":" > a[href*=\"t.mail.ru/redir\"]"}]]},{"selector":"[data-mywidget-id^=\"myWidgetItem_\"]","tasks":[["has",{"selector":".m-mywidget__disclaimer","tasks":[["has-text","Реклама"]]}]]},{"selector":"[data-testid=\"grid-left-col\"] > .logo","action":["style","margin-top: 4px !important; margin-bottom: 4px !important"],"cssable":true},{"selector":"body > .grid .grid__rcol","action":["style","margin-left: 0 !important"],"cssable":true},{"selector":"body > .zeropixel ~ * .stripe-wrapper","action":["style","height: auto !important; margin-top: unset !important"],"cssable":true},{"selector":"body > .zeropixel ~ * .tabs-content > :first-child > a > .news-main__img","action":["style","max-width: unset !important; min-width: unset !important; height: 5em !important; width: 6.66em !important"],"cssable":true},{"selector":"body > .zeropixel ~ * .tabs-content > :first-child > a > .news-main__text-wrapper","action":["style","max-height: 5em !important; white-space: unset !important"],"cssable":true},{"selector":"body > .zeropixel ~ * .tabs-content > :first-child > a","action":["style","max-height: 5em !important; position: static !important"],"cssable":true},{"selector":"body > .zeropixel ~ * .tabs-content > :first-child > a::after","action":["style","position: unset !important"],"cssable":true},{"selector":"body > .zeropixel ~ * .tabs-content > :first-child","action":["style","max-width: 750px !important"],"cssable":true},{"selector":"body:not(.js-module) .tabs + div[class] > :first-child","action":["style","width: 100% !important"],"cssable":true},{"selector":"body:not(.js-module) .tabs + div[class]","action":["style","min-width: fit-content !important"],"cssable":true},{"selector":"body:not(.js-module) .tabs > .tabs__item","action":["style","padding: 0 7px !important"],"cssable":true}]}],[1983420174,{"a":[{"selector":".article__item > *","tasks":[["has-text","^Вам может быть интересно:$|^И не пропусти интересное видео:$|^И не пропусти ролик:$|^И не пропусти интересный ролик:$|^И не пропусти наш ролик:$|^Смотрите наши видео:$|^Смотрите видео:$|видео ниже:"]]}],"n":["dom.mail.ru","lady.mail.ru"]}],[1638714384,{"a":[{"selector":".article__item > p","tasks":[["has-text",["P.S.+(ОСАГО|каско)","i"]]]},{"selector":".cols__wrapper div[style^=\"position\"]","tasks":[["has",{"selector":"[class*=\"height_400\"]"}]]},{"selector":".cols__wrapper div[style^=\"position\"]","tasks":[["has",{"selector":"[id^=\"mailru\"]"}]]}]}],[354530011,{"a":[{"selector":".mailru-visibility-check","tasks":[["has",{"selector":" > [target=\"_blank\"][href^=\"https://r.mail.ru/\"]"}]]}]}],[1071293012,{"a":[{"selector":"body [class*=\"o\"] .r-source","tasks":[["has",{"selector":" > *"}]]}]}],[821924026,{"a":[{"selector":"body [class*=\"o\"] div[id^=\"trg-\"]","tasks":[["has",{"selector":" > *"}]]},{"selector":"body [class*=\"o\"] div[id^=\"yandex_ad\"]","tasks":[["has",{"selector":" > *"}]]}]}],[1933272337,{"a":[{"selector":"#app > #public > #content","action":["style","width: 100% !important"],"cssable":true},{"selector":"#app > #public","action":["style","width: 100% !important"],"cssable":true},{"selector":"#app","action":["style","background: none !important"],"cssable":true},{"selector":"div[class^=\"ReactViewer__root-\"]","action":["style","--bottom-banner-height: 1px !important"],"cssable":true}]}],[1828795835,{"a":[{"selector":"#LEGO > .b-sticky:first-child","action":["style","width: 100% !important"],"cssable":true},{"selector":".b-datalist > div","action":["remove",""],"tasks":[["matches-css",{"name":"height","value":"^39px$"}]]},{"selector":".b-letter_thread > div > div","action":["remove",""],"tasks":[["matches-css",{"name":"height","value":"^39px$"}]]},{"selector":".ph-projects > a[href^=\"https://e.mail.ru/messages/inbox?utm_\"]","action":["style","pointer-events: none !important"],"cssable":true},{"selector":"body:not(#id) > div[style=\"position: absolute; visibility: hidden; top: -10000px; left: -10000px;\"] > div","action":["style","display: block !important"],"cssable":true}]}],[488180974,{"a":[{"selector":"#app-canvas .application-mail__layout .layout__column_right","action":["style","width: auto !important"],"cssable":true},{"selector":"#app-canvas .paginator-container","action":["style","right: 8px !important"],"cssable":true},{"selector":".application-mail__wrap > .application-mail__layout > .layout[style*=\"grid-template-columns:\"]","action":["style","grid-template-columns: 232px 1fr 0 0 !important"],"cssable":true},{"selector":".layer-sent-page > .layer","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"html:root","action":["style","--vkui--octavius_size_headline_height--regular: 36px !important"],"cssable":true}]}],[741559690,{"a":[{"selector":".b-pc-str","action":["style","width: auto !important"],"cssable":true}]}],[507563833,{"a":[{"selector":".column_sidebar .margin_bottom_20","tasks":[["has",{"selector":"[data-adq-id]"}]]}]}],[955707993,{"a":[{"selector":"#portal-menu","action":["style","margin: 0 !important"],"cssable":true},{"selector":".header-banner","action":["style","margin: 0 !important"],"cssable":true}]}],[1620311477,{"a":[{"selector":"div","tasks":[["has",{"selector":" > script","tasks":[["has-text","mimic"]]}]]}]}],[880893274,{"a":[{"selector":"[href^=\"https://minigames.imgsmail.ru/static/css/social-likes.\"] ~ div[class]","tasks":[["has",{"selector":"[href*=\"/info/adblock\"]"}]]}]}],[623849802,{"a":[{"selector":"#portal-headline","action":["style","margin-top: auto !important"],"cssable":true}]}],[540892813,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > * > * > * > [href*=\"an.yandex.ru\"]"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > * > * > [href*=\"an.yandex.ru\"]"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > * > [href*=\"an.yandex.ru\"]"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > [href*=\"an.yandex.ru\"]"}]]},{"selector":"html.window-loaded .b-video-controls__inside-play-button","action":["style","visibility: visible !important; opacity: 0 !important; width: 100% !important; height: 100% !important; top: 0 !important; left: 0 !important"],"cssable":true}]}],[578876870,{"a":[{"selector":".js-fixed-panel .box","tasks":[["has",{"selector":"[class*=\"spring\"]"}]]},{"selector":"body [class*=\"o\"] .r-source","tasks":[["has",{"selector":" > * *"}]]},{"selector":"body [class*=\"o\"] div[id^=\"trg-\"]","tasks":[["has",{"selector":" > * *"}]]},{"selector":"body [class*=\"o\"] div[id^=\"yandex_ad\"]","tasks":[["has",{"selector":" > * *"}]]}]}],[486125767,{"a":[{"selector":".rb-slot","tasks":[["has",{"selector":"[id*=\"yandex_\"]"}]]},{"selector":".rb_banner","tasks":[["has",{"selector":"*"}]]},{"selector":"div","tasks":[["has",{"selector":" > * > .sourceInformer_bks"}]]},{"selector":"div","tasks":[["has",{"selector":" > * > a[href*=\"t.mail.ru/redir\"]"}]]},{"selector":"div[class*=\"rb_\"]","tasks":[["has",{"selector":"[id*=\"yandex_\"]"}]]}]}],[1478693415,{"a":[{"selector":"div[class^=\"pl_\"]","tasks":[["has",{"selector":" > * > [href*=\"t.mail.ru/redir\"]"}]]},{"selector":"div[data-testid=\"pulse-card\"]","tasks":[["has",{"selector":" > div > a > div > div > span"}]]}]}],[1669273977,{"a":[{"selector":".cards__col","tasks":[["has",{"selector":" > .card_cb"}]]}]}],[872420805,{"a":[{"selector":".maintitlecollapse","tasks":[["has-text","Реклама"]]}]}],[1429847078,{"a":[{"selector":".platform-content","tasks":[["has",{"selector":" > .moduletable a[rel=\"sponsored\"]"}]]}]}],[43790326,{"a":[{"selector":"main[style^=\"background-color:\"]","action":["style","background-color: inherit !important"],"cssable":true}]}],[709594885,{"a":[{"selector":"aside > .block","tasks":[["has",{"selector":"[id^=\"ambn\"]"}]]}]}],[1265462679,{"a":[{"selector":"div[id*=\"sidebar\"] > div[class*=\"module\"]","tasks":[["has",{"selector":" > [class*=\"moduletitle\"]","tasks":[["has-text",["^актуально|финам$|сми2$|marketgid|^интересные|гнездо.ру","i"]]]}]]}]}],[760006383,{"a":[{"selector":".topic-block","tasks":[["has",{"selector":" > .partner-block-wrapper"}]]},{"selector":".topic-block","tasks":[["has",{"selector":" > [id^=\"adfox_\"]"}]]}]}],[1425920015,{"a":[{"selector":".aggregator-page","action":["style","pointer-events: none !important; opacity: 0 !important"],"cssable":true}]}],[1905025263,{"a":[{"selector":"[class*=\"LayoutGuest_blur__\"]","action":["style","-webkit-filter: none !important; filter: none !important"],"cssable":true}]}],[218835125,{"a":[{"selector":"*","tasks":[["has",{"selector":" > .mkblock","tasks":[["has-text","Популярно в соцсетях"]]}]]},{"selector":".article-footer > div","tasks":[["has",{"selector":" > script","tasks":[["has-text","blockId"]]}]]},{"selector":".main > div","tasks":[["has",{"selector":" > script","tasks":[["has-text","blockId"]]}]]},{"selector":".wrap > div[class*=\" \"]","tasks":[["has",{"selector":" > center > script"}]]},{"selector":"aside > [class]","tasks":[["has",{"selector":"div[style=\"margin-top:3px; margin-bottom:3px;\"]"}]]},{"selector":"aside div","tasks":[["has",{"selector":" > script","tasks":[["has-text","blockId"]]}]]},{"selector":"aside div","tasks":[["has",{"selector":" > script","tasks":[["has-text",["adbdect|adfox|advmanager","i"]]]}]]},{"selector":"div[class^=\"Banner_right\"]","action":["style","margin-bottom: 0 !important; padding-bottom: 0 !important"],"cssable":true}]}],[1560654245,{"a":[{"selector":"#page > .content","action":["style","margin-top: 74px !important"],"cssable":true},{"selector":".header-wrapper","action":["style","min-height: 0 !important"],"cssable":true}]}],[715637132,{"a":[{"selector":".widget-sidebar","tasks":[["has",{"selector":"[src*=\"/wp-content/uploads/\"][src*=\"/ban\"][src*=\"er\"]"}]]},{"selector":".widget-sidebar","tasks":[["has",{"selector":"p > script"}]]}]}],[609728530,{"a":[{"selector":"#gl_pos1","action":["style","min-width: auto !important; width: unset !important"],"cssable":true},{"selector":"#main_tb","action":["style","top: 0 !important"],"cssable":true},{"selector":"#move_up[style*=\"left: -40px;\"]","action":["style","left: 0 !important"],"cssable":true},{"selector":"html > body","action":["style","background-color: #f7f8f9 !important"],"cssable":true}]}],[605923199,{"a":[{"selector":"#sidebar > .module","tasks":[["has",{"selector":" > .inner h3","tasks":[["has-text","Блок ссылок|Блок Google|Рекламный блок"]]}]]},{"selector":".left > div.moduletable","tasks":[["has",{"selector":" > h3 span","tasks":[["has-text","Блок Google|Рекламный блок"]]}]]}]}],[2035469581,{"a":[{"selector":"#wrap > .forabg","tasks":[["has",{"selector":" > div > div > .adbp > table"}]]}]}],[1730027445,{"a":[{"selector":".sidebox","tasks":[["has",{"selector":" > .inner > .adsbygoogle"}]]}]}],[583538230,{"a":[{"selector":"div[style=\"min-height: 50px;\"]","tasks":[["has",{"selector":" > img[src*=\"/file/id_content:\"]"}]]}]}],[744172820,{"a":[{"selector":"body.noscroll","action":["style","overflow: auto !important"],"cssable":true},{"selector":"body.noscroll:before","action":["style","content: none !important"],"cssable":true}]}],[1860110884,{"a":[{"selector":".wrapp_content","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1509301293,{"a":[{"selector":"body","action":["style","-webkit-touch-callout: default !important; -webkit-user-select: text !important; -khtml-user-select: text !important; -moz-user-select: text !important; -ms-user-select: text !important; user-select: text !important"],"cssable":true}]}],[986497229,{"a":[{"selector":"#sidebar > .sidebox","tasks":[["has",{"selector":" > .sidetitle > span","tasks":[["has-text",["^интересное","i"]]]}]]}]}],[1866790237,{"a":[{"selector":"span","tasks":[["has-text","Advertisements"]]}]}],[1229602047,{"a":[{"selector":".rightCol > div","tasks":[["has",{"selector":" > a > img[src*=\"/images/banners/\"]"}]]}]}],[2078953353,{"a":[{"selector":"p","tasks":[["has",{"selector":" > a[href*=\"yandex.\"][href*=\"news\"][href*=\"favid\"]"}]]}]}],[1397682962,{"a":[{"selector":".saitbar_bock","tasks":[["has",{"selector":".mpwidget"}]]}]}],[1030063180,{"a":[{"selector":".grid-cell__preview-wrapper","tasks":[["has",{"selector":"[href*=\"/smi2\"]"}]]}]}],[678888268,{"a":[{"selector":".bnd-cnt","tasks":[["has",{"selector":" > [class] > b","tasks":[["has-text","Новости партнеров"]]}]]}]}],[815700610,{"a":[{"selector":"#page-wrapper","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".col-side > .opinion-teaser","action":["style","border-top: none !important"],"cssable":true}]}],[1231050998,{"a":[{"selector":".aside-col > .moduletable","tasks":[["has",{"selector":" > .inner > .box-ct > .adsbygoogle"}]]}]}],[293861282,{"a":[{"selector":"[style*=\"font\"]","tasks":[["has-text","Новости партнеров"]]}]}],[2014017912,{"a":[{"selector":".post-content + div[style^=\"border:\"]","tasks":[["has",{"selector":" > div > [href*=\"yandex\"]"}]]}]}],[682922069,{"a":[{"selector":"#header-b","action":["style","margin-bottom: 11px !important"],"cssable":true}]}],[1071905586,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > div[style^=\"display\"] ~ div > div[id*=\"adfox_\"]"}]]}]}],[590689253,{"a":[{"selector":".widget_text","tasks":[["has",{"selector":" > .widget-title","tasks":[["has-text","Реклама"]]}]]}]}],[257802975,{"a":[{"selector":"div[class=\"global-top-menus article_menu_type\"]","action":["style","margin-top: auto !important"],"cssable":true}]}],[335196753,{"a":[{"selector":".adv-banner__right","action":["style","min-height: 0 !important"],"cssable":true}]}],[827792347,{"a":[{"selector":"#fourthColumnWrapper div","tasks":[["has",{"selector":" > div > div > div > img[src^=\"data:image\"][alt]"}]]},{"selector":"#fourthColumnWrapper div","tasks":[["has",{"selector":" > div[style*=\"visibility: visible\"]"}]]},{"selector":"#leftColumn div","tasks":[["has",{"selector":" > div > div > div > img[src^=\"data:image\"][alt]"}]]},{"selector":"#leftColumn div","tasks":[["has",{"selector":" > div[style*=\"visibility: visible\"]"}]]},{"selector":".feed-list > .feed-w","tasks":[["has",{"selector":".feed_label","tasks":[["has-text","Реклама"]]}]]},{"selector":".feed-list > div[class]","tasks":[["has",{"selector":"div[data-type*=\"Banner\"]"}]]},{"selector":"body > div:not([id]):not([class]) > .exit-popup","action":["style","display: block !important"],"cssable":true},{"selector":"div","tasks":[["has",{"selector":" > .banner350"}]]}]}],[707553873,{"a":[{"selector":".widget","tasks":[["has",{"selector":" > .text-center > script"}]]},{"selector":"div:not(.adv-wrapper)","tasks":[["has",{"selector":" > ins"}]]}]}],[184431889,{"a":[{"selector":"#left li","tasks":[["has",{"selector":"a[href*=\"//wink.\"]"}]]},{"selector":"#left li","tasks":[["has",{"selector":"a[href*=\"://opershop.ru\"]"}]]},{"selector":"#wrapper","action":["style","background-image: none !important; padding-bottom: 0 !important"],"cssable":true}]}],[1515596057,{"a":[{"selector":"#posts div[id^=\"ugolkrug\"] > div[style^=\"background-color\"]","action":["style","background: none !important"],"cssable":true},{"selector":"#posts div[id^=\"ugolkrug\"]","action":["style","box-shadow: none !important"],"cssable":true}]}],[776391863,{"a":[{"selector":".right-cell > div","tasks":[["has",{"selector":"div","tasks":[["has-text","Paid Content"]]}]]}]}],[1904990237,{"a":[{"selector":".an-link-list","action":["style","position: fixed !important; top: -10000px !important; left: -10000px !important"],"cssable":true},{"selector":".container-block","tasks":[["has",{"selector":" > [class]:not(.container-block) > ins"}]]},{"selector":".container-block","tasks":[["has",{"selector":" > ins:first-child"}]]},{"selector":".main-wrap > .grid.ui > .sixteen.wide.column.container-block","action":["style","position: fixed !important; top: -10000px !important; left: -10000px !important"],"cssable":true},{"selector":".material-inline-an","action":["style","position: fixed !important; top: -10000px !important; left: -10000px !important"],"cssable":true},{"selector":".right-sticky-content","tasks":[["has",{"selector":" > ins"}]]},{"selector":".spoiler-block","tasks":[["has",{"selector":" > .spoiler-body > [id^=\"yandex_rtb_\"]"}]]},{"selector":"a.over-hiddenlink-html[data-link*=\"citilink.ru\"]","action":["style","pointer-events: none !important; color: inherit !important"],"cssable":true},{"selector":"div","tasks":[["has",{"selector":" > #fixScrollPip"}]]},{"selector":"div","tasks":[["has",{"selector":" > .an-link-list"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > [id^=\"pipMtbRoot\"]"}]]}]}],[59488300,{"a":[{"selector":"table > tbody > tr","tasks":[["has",{"selector":" > [class^=\"profile\"]","tasks":[["has-text","Партнер|Реклама"]]}]]},{"selector":"tr > td[nowrap=\"nowrap\"][style=\"color: red;  font-weight: bold\"]","action":["style","color: #004488 !important; font-weight: 200 !important"],"cssable":true}]}],[1628409563,{"a":[{"selector":".zsnazzy","tasks":[["has",{"selector":".color_b","tasks":[["has-text","Блок рекламы"]]}]]}]}],[32594229,{"a":[{"selector":"body","action":["style","cursor: auto !important; background: whitesmoke !important"],"cssable":true}]}],[1307433226,{"a":[{"selector":"body > .a","action":["style","background-image: none !important"],"cssable":true}]}],[1368695099,{"a":[{"selector":"#rightpan > .block","tasks":[["has",{"selector":" > div > a[href*=\"banner\"][target=\"_blank\"]"}]]}]}],[2025710929,{"a":[{"selector":".post_wrap","tasks":[["has",{"selector":" > #post_body_b"}]]}]}],[335796520,{"a":[{"selector":".app > .app__inner[style*=\"padding-top\"]","action":["style","padding-top: 64px !important"],"cssable":true},{"selector":".footer","action":["style","height: auto !important"],"cssable":true},{"selector":".footer__inner","action":["style","background-color: var(--color--app__bg) !important; color: var(--color--app__text) !important"],"cssable":true},{"selector":".stories-feed__container > .story","tasks":[["has",{"selector":"[class*=\"sponsor\"]"}]]},{"selector":".stories-feed__message","tasks":[["has",{"selector":" > .pulse-widget"}]]},{"selector":".story","tasks":[["has",{"selector":"* > [id] + script"}]]},{"selector":"header > .header__main","action":["style","background-color: var(--color--header__bg) !important"],"cssable":true}]}],[787768112,{"a":[{"selector":".center-article-bottom > .custom_ ","tasks":[["has",{"selector":".blacktitle > span","tasks":[["has-text","Новости партнеров"]]}]]},{"selector":".custom_","tasks":[["has",{"selector":" > div[id*=\"ScriptRoot\"]"}]]},{"selector":".custom_","tasks":[["has",{"selector":" > div[id^=\"infox_\"]"}]]},{"selector":".custom_","tasks":[["has",{"selector":" > div[id^=\"unit_\"]"}]]}]}],[321408673,{"a":[{"selector":"#foundationWrapper > *","action":["style","pointer-events: auto !important"],"cssable":true},{"selector":"#foundationWrapper > div","action":["style","height: auto !important"],"cssable":true},{"selector":"#foundationWrapper","action":["style","background: #373737 !important; padding-top: 0 !important"],"cssable":true},{"selector":"#foundationWrapper","action":["style","pointer-events: none !important"],"cssable":true},{"selector":".content_aside-container > .content-column","action":["style","padding-left: 0 !important; padding-right: 40px !important"],"cssable":true},{"selector":".content_aside-container","action":["style","flex-direction: unset !important"],"cssable":true},{"selector":".gp-game-card .user-profile-sidebar","action":["style","max-width: unset !important"],"cssable":true}]}],[1292058360,{"a":[{"selector":".banner-advertise","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".open-main-container","action":["style","margin-top: 60px !important"],"cssable":true}]}],[572794882,{"a":[{"selector":"div[id][class*=\" BannerPlace-\"]","action":["style","filter: grayscale(1) !important"],"cssable":true}]}],[897873418,{"a":[{"selector":"body > h3","tasks":[["has-text","^Новости"]]},{"selector":"td","tasks":[["has",{"selector":" > a[href*=\"iloveyou.ru/\"]"}]]},{"selector":"tr > th","tasks":[["has-text","Реклама на Погода\\.ру"]]}]}],[1946868629,{"a":[{"selector":".page-width","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".sp-header-block","action":["style","height: 50px !important"],"cssable":true}]}],[235605159,{"a":[{"selector":"div[class=\"section\"]","tasks":[["has",{"selector":" > .staticFragment"}]]}]}],[279080945,{"a":[{"selector":"#container","action":["style","top: auto !important"],"cssable":true},{"selector":"html > body","action":["style","background-image:none !important; pointer-events: none !important"],"cssable":true}]}],[1215731579,{"a":[{"selector":"h4","tasks":[["has-text","Смотрите также"]]}]}],[1029643769,{"a":[{"selector":"#RIGHT > h3","tasks":[["has-text"," партнер"]]}]}],[835661330,{"a":[{"selector":"a[href*=\"://clck.ru/\"] ~ *","tasks":[["has-text","https://"]]},{"selector":"a[href*=\"://slurm.club/\"] ~ *","tasks":[["has-text","https://"]]}]}],[1059540388,{"a":[{"selector":"body:not(#id)","action":["style","padding-top: 130px !important"],"cssable":true}]}],[1966619391,{"a":[{"selector":"div[class$=\"-main\"]","tasks":[["has",{"selector":" > p","tasks":[["has-text","Новости партнеров"]]}]]}]}],[384216024,{"a":[{"selector":".stream-item-widget","tasks":[["has-text","Реклама"]]}]}],[483521107,{"a":[{"selector":".g1-header","action":["style","top: 0 !important; position: relative !important"],"cssable":true}]}],[336607673,{"a":[{"selector":"h4","tasks":[["has-text","Новости партнёров"]]}]}],[528621505,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > .inner > a[href=\"/help/adblock/\"]"}]]}]}],[363717434,{"a":[{"selector":".small-fancy-sheet","tasks":[["has",{"selector":" > .adv_banner"}]]},{"selector":".small-fancy-sheet","tasks":[["has",{"selector":" > script"}]]}]}],[2082037457,{"a":[{"selector":"#js_col_left > .l-sticky","action":["style","position: relative !important; top: unset !important"],"cssable":true},{"selector":".topline__branding__wrapper","action":["style","width: 0 !important"],"cssable":true}]}],[87328683,{"a":[{"selector":".l-col-container > .l-table","action":["style","width: calc(100% - 4px) !important"],"cssable":true}]}],[1115218738,{"a":[{"selector":"div","tasks":[["has",{"selector":" > div + [id^=\"rnet_\"]"}]]}]}],[102156938,{"a":[{"selector":"#pagecontent > .tablebg","tasks":[["has",{"selector":".postauthor","tasks":[["has-text","Реклама"]]}]]}]}],[1311142584,{"a":[{"selector":".main-wrapp__content","action":["style","margin-top: 0 !important"],"cssable":true}]}],[549059824,{"a":[{"selector":"#bigColumn + div[class] > div:first-child article ~ div div","action":["style","min-height: 0 !important; border-bottom: unset !important"],"cssable":true},{"selector":"#bigColumn > div[class]:nth-of-type(3)","action":["style","height: unset !important; margin-top: unset !important; margin-bottom: unset !important"],"cssable":true},{"selector":"#carousel .undefined","tasks":[["has",{"selector":"[id^=\"adfox-\"]"}]]},{"selector":"#rootWrapper div[style=\"min-height: 500px;\"] ~ div div","action":["style","background-color: transparent !important"],"cssable":true},{"selector":".side-content","tasks":[["has",{"selector":" > .side-content__header","tasks":[["has-text",["новости партн","i"]]]}]]},{"selector":"article ~ article ~ div[class]","tasks":[["has",{"selector":"div > div[class][style=\"display: none !important;\"]"}]]},{"selector":"article ~ article ~ div[class]","tasks":[["has",{"selector":"div > div[class^=\"banner--native-partner--\"]"}]]},{"selector":"body[style*=\"position:\"]","action":["style","position: unset !important"],"cssable":true},{"selector":"div","tasks":[["has",{"selector":" > [id^=\"adfox-\"] + div > div:only-child"}]]}]}],[1269861406,{"a":[{"selector":"a[data-horo$=\"::button\"]","action":["style","width: auto !important"],"cssable":true}]}],[358481534,{"a":[{"selector":"div[class]","action":["style","min-height: 0 !important"],"cssable":true}]}],[522075469,{"a":[{"selector":"div[class*=\"WithRightBarWrapper\"] > div[class*=\"AutoAppContainer\"]","action":["style","max-width: 100% !important"],"cssable":true}]}],[1740988189,{"a":[{"selector":".level__card","tasks":[["has",{"selector":" > [class*=\"banner\"]"}]]}]}],[1043254605,{"a":[{"selector":"html > body:not(#id)","action":["style","overflow: unset !important"],"cssable":true}]}],[390182286,{"a":[{"selector":".eplayer-skin-buttons-center","action":["style","visibility: visible !important"],"cssable":true}]}]]);

const hostnamesMap = new Map([["bryansknovosti.ru",1625268005],["novozybkov.su",1625268005],["buhonline.ru",420394428],["businessman.ru",1694800960],["buzulukday.ru",1606557423],["nsday.ru",1606557423],["orenday.ru",1606557423],["perevolockday.ru",1606557423],["saltday.ru",1606557423],["sorochinskday.ru",1606557423],["bvedomosti.ru",562895635],["bwtorrents.ru",1027680305],["calorizator.ru",884076764],["car.ru",1759034759],["carambatv.ru",260220547],["carrotblog.ru",182185257],["cars.ru",828227952],["chelny-izvest.ru",718946739],["chipmaker.ru",1268431190],["chita.ru",1566522224],["www.cnews.ru",1784669786],["cofp.ru",792751840],["comss.ru",1933666077],["coop-land.ru",527814375],["cq.ru",1784989529],["creativportal.ru",982516887],["csgolife.ru",1363727112],["ctv7.ru",1975308410],["cyberforum.ru",1727235628],["cyberleninka.ru",1807631850],["cybersport.ru",1185664936],["dachnye-sovety.ru",1557792341],["diets.ru",782154546],["dimonvideo.ru",674555738],["dnevnienovosti.ru",1581322698],["dni.ru",60138163],["dorognoe.ru",1012595344],["dota2.ru",189490619],["drahelas.ru",1348883836],["drive2.ru",2119263119],["drivenn.ru",316435289],["forums.drom.ru",156492581],["dtf.ru",753702098],["dusterclubs.ru",1334164628],["dzen.ru",1556768888],["eanews.ru",1269494540],["efxi.ru",310567494],["ekabu.ru",1276848428],["electric-house.ru",[12554225,227099175,1088299696]],["stroi-help.ru",[227099175,1088299696]],["freefotohelp.ru",[1088299696,1857164169]],["so-wiki.ru",1088299696],["vseprosto.top",1088299696],["euro-football.ru",225328145],["eva.ru",91728746],["fbsearch.ru",566549136],["fc-zenit.ru",1098083089],["fclmnews.ru",1295636651],["doramy.su",1295636651],["xsport.ua",1295636651],["finversia.ru",1552575933],["fit4power.ru",1886531435],["forum.flprog.ru",1707034450],["fontanka.ru",1485003615],["footballhd.ru",770396488],["forbes.ru",269274564],["forumhouse.ru",1529672958],["fototips.ru",83701301],["fragrantica.ru",1436131589],["freescreens.ru",1614427312],["imgbase.ru",1614427312],["imgcach.ru",1614427312],["imgclick.ru",1614427312],["payforpic.ru",1614427312],["picclick.ru",1614427312],["picclock.ru",1614427312],["picforall.ru",1614427312],["friday.ru",1467029666],["fssprus.ru",674096113],["fukushima-news.ru",1850984446],["game-pool.ru",1733530630],["game-roblox.ru",922787731],["game2day.ru",1784993187],["gamebomb.ru",353378617],["gameguru.ru",1331643801],["gamemag.ru",519460830],["gastronom.ru",1993751925],["www.gismeteo.ru",2094207701],["glavagronom.ru",1427972337],["go64.ru",1073429028],["gofrag.ru",1632946077],["goha.ru",1580338413],["www.goha.ru",2041568888],["gol.ru",1990728260],["goodgame.ru",427638773],["gorod48.ru",2098991998],["gorvesti.ru",1867647726],["gotovim-doma.ru",1732293341],["gotps3.ru",1969481364],["govoritmoskva.ru",930807769],["gstv.ru",1546577362],["gta-gaming.ru",1029864126],["gtavicecity.ru",1636451908],["hackware.ru",1394096980],["kali.tools",1394096980],["hdkinozzoro.ru",1176494787],["hi-fi.ru",817619149],["hlamer.ru",151758238],["oveg.ru",151758238],["horrorzone.ru",1074554590],["housechief.ru",167389378],["hs-manacost.ru",2033785152],["htmlweb.ru",84062458],["igromania.ru",480290833],["iguides.ru",1473212323],["imageban.ru",1026114124],["infoselection.ru",2050203008],["infox.ru",106182243],["inoprosport.ru",248927193],["iphones.ru",1600452996],["ironfriends.ru",1744254482],["it-actual.ru",112996638],["www.ivi.ru",1038558904],["iz.ru",961027022],["kakoysegodnyaprazdnik.ru",394883411],["xn--80aaiebcrjcibi8adgdtsm9z.xn--p1ai",394883411],["kaluga-poisk.ru",251452352],["yasniy-city.ru",251452352],["yola-poisk.ru",251452352],["kasparov.ru",1378881924],["kg-portal.ru",1934344987],["kingisepp-today.ru",1322891722],["xn----etbbecbrbp5ahkja1ae7v.xn--p1ai",1322891722],["kino-archive.ru",376006493],["kino-teatr.ru",2073005394],["kinomania.ru",1032118974],["kinometro.ru",722129961],["www.kinopoisk.ru",1424931128],["kinotan.ru",749386007],["kinoteatr.ru",253403476],["kirov-portal.ru",1546841726],["kirovnet.ru",611945439],["kleo.ru",214463603],["konstruktortestov.ru",429696275],["koolinar.ru",440292102],["korabel.ru",2068826863],["kp.ru",227337415],["krolmen.ru",1439156123],["ktv-ray.ru",282208763],["kulturologia.ru",1644645127],["l2top.ru",1955975121],["lenta.ru",346962449],["letidor.ru",276455330],["wmj.ru",276455330],["libertycity.ru",1549375210],["life.ru",316679831],["lifetambov.ru",888204875],["liveangarsk.ru",857464865],["livecars.ru",434527160],["livesport.ru",434527160],["liveinternet.ru",466370333],["liveresult.ru",305609427],["lostfilmhd.ru",386333429],["mail.ru",[962869511,1983420174]],["sportmail.ru",[1983420174,354530011,578876870]],["auto.mail.ru",[1638714384,354530011,1071293012,821924026]],["kino.mail.ru",[354530011,821924026]],["pogoda.mail.ru",1071293012],["realty.mail.ru",821924026],["cloud.mail.ru",1933272337],["e.mail.ru",[1828795835,488180974]],["octavius.mail.ru",488180974],["games.mail.ru",741559690],["health.mail.ru",507563833],["hi-tech.mail.ru",955707993],["horo.mail.ru",1620311477],["minigames.mail.ru",[880893274,623849802]],["okminigames.mail.ru",880893274],["my.mail.ru",540892813],["news.mail.ru",[578876870,486125767]],["pulse.mail.ru",1478693415],["marketsakhcom.ru",1669273977],["forum.materinstvo.ru",872420805],["megacritic.ru",1429847078],["www.mirf.ru",43790326],["mirlib.ru",709594885],["mirnov.ru",1265462679],["mirtesen.ru",760006383],["gamma.mirtesen.ru",1425920015],["mirvracha.ru",1905025263],["mk.ru",218835125],["mmo13.ru",1560654245],["mnogovoprosov.ru",715637132],["mobiltelefon.ru",609728530],["mobzon.ru",605923199],["forum.mobzon.ru",2035469581],["modsgaming.ru",1730027445],["my.mosenergosbyt.ru",583538230],["motorpage.ru",744172820],["movieshok.ru",1860110884],["my-expert.ru",1509301293],["tvvse.my1.ru",986497229],["myshared.ru",1866790237],["nakanune.ru",1229602047],["nashe.ru",2078953353],["radiojazzfm.ru",2078953353],["radioultra.ru",2078953353],["rockfm.ru",2078953353],["nastroyvse.ru",1397682962],["nat-geo.ru",1030063180],["newdaynews.ru",678888268],["newkaliningrad.ru",815700610],["news-tape.ru",1231050998],["newsomsk.ru",293861282],["newstula.ru",2014017912],["noob-club.ru",682922069],["novayagazeta.ru",1071905586],["obzor-new.ru",590689253],["softfl.ru",590689253],["ogorod.ru",257802975],["ohotniki.ru",335196753],["ok.ru",827792347],["only-paper.ru",707553873],["oper.ru",184431889],["optimakomp.ru",1515596057],["orsk.ru",776391863],["overclockers.ru",1904990237],["forums.overclockers.ru",59488300],["ovgorskiy.ru",1628409563],["penzainform.ru",32594229],["peterburg2.ru",1307433226],["php.ru",1368695099],["pickupforum.ru",2025710929],["pikabu.ru",335796520],["planet-today.ru",787768112],["playground.ru",321408673],["pluggedin.ru",1292058360],["pochta.ru",572794882],["pogoda.ru",897873418],["povarenok.ru",1946868629],["pravda.ru",235605159],["prikol.ru",279080945],["primpogoda.ru",1215731579],["progorodnsk.ru",1029643769],["progorodsamara.ru",1029643769],["programmersforum.ru",835661330],["prophotos.ru",1059540388],["proufu.ru",1966619391],["provladimir.ru",384216024],["pure-t.ru",483521107],["putin-news.ru",336607673],["qrz.ru",528621505],["queen-time.ru",363717434],["quote.ru",[2082037457,87328683]],["rbc.ru",2082037457],["sportrbc.ru",2082037457],["quto.ru",1115218738],["radiokot.ru",102156938],["radioromantika.ru",1311142584],["rambler.ru",549059824],["horoscopes.rambler.ru",[1269861406,358481534]],["weather.rambler.ru",358481534],["mail.rambler.ru",522075469],["news.rambler.ru",1740988189],["nova.rambler.ru",1043254605],["vp.rambler.ru",390182286]]);

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
