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

// default

const argsMap = new Map([[568563742,{"a":[{"selector":".col-md-3 > iframe[src^=\"/external\"]","tasks":[["upward",1]]}]}],[1459478085,{"a":[{"selector":"#blockblockB","action":["style","display: block!important;"],"cssable":true}]}],[612079812,{"a":[{"selector":"aside","tasks":[["has",{"selector":"[data-empty]"}]]}]}],[529069769,{"a":[{"selector":".FeedStory.feed_item > div > div","tasks":[["has-text",["by Quora for Business","i"]]]},{"selector":".Toggle.SimpleToggle.ToggleAnswerFooterWrapper > div","tasks":[["has-text",["Promoted","i"]]]}]}],[1998462655,{"a":[{"selector":".ad","tasks":[["upward","article.result.web"]]}]}],[1204953097,{"a":[{"selector":".e76xF.bJlt-","action":["style","padding-top:0px !important"],"cssable":true}]}],[1823638556,{"a":[{"selector":".box.gradient","tasks":[["has",{"selector":"a[href*=\"&Click=\"]"}]]}]}],[175835756,{"a":[{"selector":".rshift:has(.adv)","tasks":[["upward",1]]},{"selector":".tbar2","tasks":[["has-text","advert"]]}]}],[46867724,{"a":[{"selector":".body-description > div","tasks":[["has-text","ADVERTISEMENT"]]}]}],[1724678433,{"a":[{"selector":"strong","tasks":[["has-text","Adv"]]}]}],[2019999755,{"a":[{"selector":"#btnshow","action":["style","display: block !important;"],"cssable":true}]}],[767608282,{"a":[{"selector":".adLinkBar","tasks":[["upward","article[style=\"z-index: 1;\"]"]]},{"selector":"[id^=\"t3\"].promotedlink","tasks":[["upward",".rpBJOHq2PR60pnwJlUyP0 > div"]]},{"selector":"article.Post","tasks":[["has",{"selector":"a[rel=\"nofollow noopener sponsored\"]"}]]},{"selector":"div[id*=\"sidebar\"][data-before-content=\"advertisement\"]","tasks":[["upward",3]]}]}],[282779756,{"a":[{"selector":"div > header + div > div + div","tasks":[["has-text","Sponsors"]]}]}],[1903810261,{"a":[{"selector":"#page-header","action":["style","margin-bottom: -265px !important"],"tasks":[["has",{"selector":" + .phpbb-ads-center","tasks":[["matches-css",{"name":"height","value":"^280px$"}]]}]]},{"selector":".phpbb-ads-center","action":["style","pointer-events: none !important"],"cssable":true},{"selector":"ins","action":["style","opacity: 0 !important; pointer-events: none !important"],"cssable":true}]}],[1347958678,{"a":[{"selector":"#colunas","action":["style","display: block !important;"],"cssable":true},{"selector":"body > p > span","tasks":[["has-text","adblock"]]}]}],[1401994077,{"a":[{"selector":"div","tasks":[["matches-css",{"name":"position","value":"fixed"}]]}]}],[336167681,{"a":[{"selector":".ad-block-popup","tasks":[["upward",2]]},{"selector":".native-ad-item-panel","tasks":[["upward",".vertical-view__item"]]}]}],[1805720766,{"a":[{"selector":".marketplace-row-item-wrapper","tasks":[["has",{"selector":".sponsored"}]]}]}],[372763504,{"a":[{"selector":"#yuidea-generate","action":["style","display: block !important;"],"cssable":true},{"selector":"#yuidea-snp","action":["style","display: block !important;"],"cssable":true}]}],[1000486332,{"a":[{"selector":".background-cloud","action":["style","display: none !important;"],"cssable":true}]}],[696509318,{"a":[{"selector":".cover","action":["style","background-image: none!important;"],"cssable":true}]}],[490826541,{"a":[{"selector":"#nextBTNH","action":["style","display: block !important;"],"cssable":true}]}],[611173431,{"a":[{"selector":".btn-primary","action":["style","visibility: visible !important;"],"cssable":true}]}],[1770657886,{"a":[{"selector":".adsbygoogle","action":["remove",""]}]}],[1798251879,{"a":[{"selector":".footerLink.hidden","action":["style","display: block !important;"],"cssable":true},{"selector":".getlink","tasks":[["others",""]]}]}],[1190712002,{"a":[{"selector":".ssm_adunit_container","tasks":[["upward","[id^=\"list_ads\"]"]]}]}],[1112437098,{"a":[{"selector":"a[href^=\"https://grammarly.go2cloud.org/\"]","tasks":[["upward",1]]}]}],[16474145,{"a":[{"selector":"div#box[style=\"display: inline-block;\"]","tasks":[["upward",1]]}]}],[1163676576,{"a":[{"selector":".adsbygoogle","tasks":[["upward",".row-container"]]}]}],[436055362,{"a":[{"selector":".dfp-ad-unit","tasks":[["upward",1]]}]}],[725177011,{"a":[{"selector":"div[class$=\"-margin-Advert\"]","action":["style","height:1px !important;width:1px !important;position:absolute !important;left:-3000px !important"],"cssable":true}]}],[56827403,{"a":[{"selector":"#ad_header_leaderboard","tasks":[["upward",1]]}]}],[381161454,{"a":[{"selector":".content","tasks":[["has",{"selector":" > div","tasks":[["has-text","Branded Content"]]}]]}]}],[2054228271,{"a":[{"selector":".OUTBRAIN","tasks":[["upward",2]]}]}],[1852446974,{"a":[{"selector":"#botaoLink","action":["style","display: block !important;"],"cssable":true}]}],[1782309524,{"a":[{"selector":".td-pb-span8","action":["style","width: 100% !important;"],"cssable":true}]}],[658157234,{"a":[{"selector":"#link","action":["style","display: block !important;"],"cssable":true}]}],[2033082901,{"a":[{"selector":"#makingdifferenttimer","action":["style","display: block!important"],"cssable":true}]}],[1057477309,{"a":[{"selector":".adsbygoogle","action":["style","height: 0px !important;"],"cssable":true},{"selector":"a[href*=\".sjv.io\"] > img","action":["style","width: 1% !important; opacity: 0 !important;"],"cssable":true}]}],[936146839,{"a":[{"selector":".ProductRecsLink-sc-4mw94v-0","tasks":[["has",{"selector":"p","tasks":[["has-text","sponsored"]]}]]},{"selector":"div[data-test=\"@web/ProductCard/ProductCardVariantAisle\"]","tasks":[["has-text","Sponsored"]]},{"selector":"div[data-test=\"@web/site-top-of-funnel/ProductCardWrapper\"]","tasks":[["has-text","sponsored"]]}]}],[122719157,{"a":[{"selector":".thumb-holder[style=\"height:250px;\"]","tasks":[["upward",1]]},{"selector":"[href=\"/category/taxi-fares/\"]","tasks":[["upward",".thumb"]]}]}],[1036531965,{"a":[{"selector":"body.body-load","action":["style","overflow: auto !important;"],"cssable":true}]}],[1988664037,{"a":[{"selector":"html","action":["style","overflow: auto !important"],"cssable":true}]}],[1818075107,{"a":[{"selector":".home-page.main-section, html > body","action":["style","margin-top: 0px !important;"],"cssable":true},{"selector":".slideMenu","action":["style","top: -7px !important;"],"cssable":true},{"selector":"body","action":["style","padding-top: 0px !important;"],"cssable":true},{"selector":"header","action":["style","top: 0px !important;"],"cssable":true}]}],[454827349,{"a":[{"selector":"","action":["style","opacity: 0 !important; pointer-events: none !important;"],"tasks":[["matches-path","/29"],["spath"," body:not([data-template]):has(.imgcontainer) *:not([class=\"imgcontainer\"]) > a:not([href^=\"https://www.techpowerup.com/img/\"]) img:not([href^=\"https://tpucdn.com/img/\"])"]]},{"selector":"","action":["style","opacity: 0 !important; pointer-events: none !important;"],"tasks":[["matches-path","articles"],["spath"," body:not([data-template]) a:not([href^=\"http://www.techpowerup.com/articles/\"]) img:not([src^=\"https://tpucdn.com/articles/\"])"]]},{"selector":"","action":["style","opacity: 0 !important; pointer-events: none !important;"],"tasks":[["matches-path","cpu-specs"],["spath"," body:not([data-template]) *:not(div[class=\"clearfix images\"]) > * > a img"]]},{"selector":"","action":["style","opacity: 0 !important; pointer-events: none !important;"],"tasks":[["matches-path","download"],["spath"," body:not([data-template]) a:not([href^=\"/download/\"]) img:not([src^=\"https://tpucdn.com/download/\"])"]]},{"selector":"","action":["style","opacity: 0 !important; pointer-events: none !important;"],"tasks":[["matches-path","gallery"],["spath"," body:not([data-template]) *:not([class=\"gallery-box\"]) > a:not([href^=\"/gallery/\"]) img:not([src^=\"https://tpucdn.com/gallery/\"])"]]},{"selector":"","action":["style","opacity: 0 !important; pointer-events: none !important;"],"tasks":[["matches-path","gpu-specs"],["spath"," body:not([data-template]) a:not([href^=\"https://tpucdn.com/gpu-specs/\"]) img:not([src^=\"https://tpucdn.com/gpu-specs/\"])"]]},{"selector":"","action":["style","opacity: 0 !important; pointer-events: none !important;"],"tasks":[["matches-path","live"],["spath"," body:not([data-template]) a[href^=\"/\"]:not([href^=\"/live/images/\"]) img[src^=\"/\"]:not([src^=\"/live/images/\"])"]]},{"selector":"","action":["style","opacity: 0 !important; pointer-events: none !important;"],"tasks":[["matches-path","review"],["spath"," body:not([data-template]) *:not(header.clearfix + script + .text) > *:not([class=\"responsive-image-xx\"]) > * > a:not([href^=\"/review/\"]) img:not([src^=\"/review/\"])"]]},{"selector":"","action":["style","opacity: 0 !important; pointer-events: none !important;"],"tasks":[["matches-path","vgabios"],["spath"," body:not([data-template]) a:not([href^=\"/gpu-specs/\"]) img:not([src^=\"/gpu-specs/\"])"]]},{"selector":"body:not([data-template]) a[rel=\"nofollow\"][href^=\"/reviyuu/b784/\"]","action":["style","pointer-events: none !important;"],"cssable":true}]}],[900164368,{"a":[{"selector":"#td-outer-wrap","action":["style","cursor: default !important"],"cssable":true}]}],[33476534,{"a":[{"selector":".sec-title2","tasks":[["has-text","From Our Sponsor"]]}]}],[138459855,{"a":[{"selector":"#lite-end-sora-button","action":["style","display: block !important; margin-left: auto !important; margin-right: auto !important;"],"cssable":true},{"selector":"#lite-human-verif-button","action":["style","display: block !important; margin-left: auto !important; margin-right: auto !important;"],"cssable":true},{"selector":"#lite-start-sora-a","action":["style","display: block !important;"],"cssable":true}]}],[2086246670,{"a":[{"selector":"#msgblock","action":["style","display: block !important"],"cssable":true}]}],[38387426,{"a":[{"selector":"#wpsafe-generate, #wpsafe-link, .bt-success","action":["style","display: block !important;"],"cssable":true},{"selector":"#wpsafe-time","tasks":[["upward","[id^=\"wpsafe-wait\"]"]]}]}],[1230838684,{"a":[{"selector":"body, html","action":["style","height: auto !important; overflow: auto !important"],"cssable":true}]}],[183379746,{"a":[{"selector":"#nn_bfa_wrapper","action":["remove",""]},{"selector":".sticky_rail600","action":["remove",""]},{"selector":"html > body","action":["style","padding-top:10px!important;"],"cssable":true}]}],[974707450,{"a":[{"selector":"p[style=\"text-align: center;font-size: 30px;font-family: fantasy;text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;\"]","tasks":[["upward",1]]}]}],[1241138855,{"a":[{"selector":".bg-yellow-400","tasks":[["has",{"selector":".topAlertAds"}]]}]}],[845871698,{"a":[{"selector":"._4xQrn","action":["style","max-height:0px"],"cssable":true},{"selector":"span","tasks":[["has-text","ADVERTISEMENT"]]}]}],[1118291567,{"a":[{"selector":"img[src*=\"/Banner\"]","tasks":[["upward","a"]]}]}],[591942172,{"a":[{"selector":"#btm-widget img[onload]","tasks":[["upward","#btm-widget > .colombiaonesuccess > div"]]}]}],[166723818,{"a":[{"selector":".entry-content > div > strong","tasks":[["has-text","find & fix Windows error"]]}]}],[1520579799,{"a":[{"selector":"div[class^=\"SearchControls__withBanner--\"]","action":["style","margin-top:0 !important"],"cssable":true}]}],[25725442,{"a":[{"selector":".ipsType_richText a","action":["style","color:currentcolor !important"],"cssable":true}]}],[2057569052,{"a":[{"selector":".article-small-sidebar > .sticky-container","tasks":[["has",{"selector":"div[id^=\"ad-\"]"}]]}]}],[1671621166,{"a":[{"selector":"tr","tasks":[["has",{"selector":" > td[align=\"center\"][valign=\"middle\"][colspan=\"2\"][class=\"gC\"]"}]]}]}],[463876361,{"a":[{"selector":"#vidPlayer span","tasks":[["has-text","Advertisement"]]}]}],[1233086483,{"a":[{"selector":"tbody","tasks":[["has-text","Please visit our below advertisers"]]}]}],[1036018444,{"a":[{"selector":"#download_link","action":["style","display: inline-block !important"],"cssable":true}]}],[645287891,{"a":[{"selector":".cAWGu","tasks":[["has",{"selector":"a","tasks":[["has-text","Similar Sponsored Properties"]]}]]},{"selector":".dsnvR","tasks":[["has",{"selector":"span","tasks":[["has-text","Sponsored"]]}]]}]}],[827218248,{"a":[{"selector":".sidebar-featured","tasks":[["has",{"selector":"a[href^=\"https://pluralsight.pxf.io/\"]"}]]}]}],[1605372282,{"a":[{"selector":"a[href^=\"http://www.theclassicporn.com/\"]","tasks":[["upward",1]]}]}],[987797877,{"a":[{"selector":".ge_yK","tasks":[["has",{"selector":".hM19_"}]]},{"selector":"header[role=\"banner\"] > div > a[href=\"/docs/en/relevantads\"]","tasks":[["upward",3]]}]}],[890804823,{"a":[{"selector":"body","action":["style","visibility:visible !important"],"cssable":true}]}],[835933742,{"a":[{"selector":"[data-testid=\"trend\"]","tasks":[["has-text","Promoted|Gesponsert|Promocionado|Patrocinat|Sponsorisé|Sponsorizzato|Promowane|Promovido|Реклама|Uitgelicht|Sponsorlu|Promotert|Promoveret|Sponsrad|Mainostettu|Sponzorováno|Promovat|Ajánlott|Προωθημένο|Dipromosikan|Được quảng bá|推廣|推广|推薦|推荐|プロモーション|프로모션|ประชาสัมพันธ์|प्रचारित|বিজ্ঞাপিত|تشہیر شدہ|مُروَّج|تبلیغی|מקודם"],["upward",1]]},{"selector":"nav + section > div[aria-label] > div > div[style^=\"transform\"] h2 > div[style^=\"-webkit-line-clamp\"] > span","tasks":[["has-text","^(?:Promoted Tweet|プロモツイート|Promowany Tweet)$"],["upward",3]]}]}],[798894509,{"a":[{"selector":"div[data-testid=\"UserCell\"]","tasks":[["has",{"selector":"svg + div[dir=\"auto\"] > span","tasks":[["has-text","Promoted|Gesponsert|Promocionado|Sponsorisé|Sponsorizzato|Promowane|Promovido|Реклама|Uitgelicht|Sponsorlu|Promotert|Promoveret|Sponsrad|Mainostettu|Sponzorováno|Promovat|Ajánlott|Προωθημένο|Dipromosikan|Được quảng bá|推廣|推广|推薦|推荐|プロモーション|프로모션|ประชาสัมพันธ์|प्रचारित|বিজ্ঞাপিত|تشہیر شدہ|مُروَّج|تبلیغی|מקודם"]]}]]},{"selector":"div[data-testid=\"eventHero\"]","tasks":[["has-text","Promoted|Gesponsert|Promocionado|Sponsorisé|Sponsorizzato|Promowane|Promovido|Реклама|Uitgelicht|Sponsorlu|Promotert|Promoveret|Sponsrad|Mainostettu|Sponzorováno|Promovat|Ajánlott|Προωθημένο|Dipromosikan|Được quảng bá|推廣|推广|推薦|推荐|プロモーション|프로모션|ประชาสัมพันธ์|प्रचारित|বিজ্ঞাপিত|تشہیر شدہ|مُروَّج|تبلیغی|מקודם"]]},{"selector":"div[data-testid=\"placementTracking\"]","tasks":[["has",{"selector":"svg + div[dir=\"auto\"] > span","tasks":[["has-text","Promoted|Gesponsert|Promocionado|Sponsorisé|Sponsorizzato|Promowane|Promovido|Реклама|Uitgelicht|Sponsorlu|Promotert|Promoveret|Sponsrad|Mainostettu|Sponzorováno|Promovat|Ajánlott|Προωθημένο|Dipromosikan|Được quảng bá|推廣|推广|推薦|推荐|プロモーション|프로모션|ประชาสัมพันธ์|प्रचारित|বিজ্ঞাপিত|تشہیر شدہ|مُروَّج|تبلیغی|מקודם"]]}]]},{"selector":"div[data-testid=\"trend\"]","tasks":[["has-text","Promoted|Gesponsert|Promocionado|Sponsorisé|Sponsorizzato|Promowane|Promovido|Реклама|Uitgelicht|Sponsorlu|Promotert|Promoveret|Sponsrad|Mainostettu|Sponzorováno|Promovat|Ajánlott|Προωθημένο|Dipromosikan|Được quảng bá|推廣|推广|推薦|推荐|プロモーション|프로모션|ประชาสัมพันธ์|प्रचारित|বিজ্ঞাপিত|تشہیر شدہ|مُروَّج|تبلیغی|מקודם"]]},{"selector":"h2[role=\"heading\"]","tasks":[["has-text","Promoted|Gesponsert|Promocionado|Sponsorisé|Sponsorizzato|Promowane|Promovido|Реклама|Uitgelicht|Sponsorlu|Promotert|Promoveret|Sponsrad|Mainostettu|Sponzorováno|Promovat|Ajánlott|Προωθημένο|Dipromosikan|Được quảng bá|推廣|推广|推薦|推荐|プロモーション|프로모션|ประชาสัมพันธ์|प्रचारित|বিজ্ঞাপিত|تشہیر شدہ|مُروَّج|تبلیغی|מקודם"]]}]}],[904717361,{"a":[{"selector":".tweet","tasks":[["has",{"selector":".promo"}]]}]}],[592908721,{"a":[{"selector":".MbNnd","tasks":[["has",{"selector":"a","tasks":[["has-text","Sponsored"]]}]]},{"selector":"div[data-affiliates-grid-container]","tasks":[["upward",1]]},{"selector":"div[style^=\"--row-gutter\"] > div a[href=\"/brands\"]","action":["remove",""],"tasks":[["upward","div[style^=\"--row-gutter\"] > div"]]}]}],[1659092350,{"a":[{"selector":"#recap-btn","action":["style","display: block !important"],"cssable":true}]}],[321021750,{"a":[{"selector":".gnt_n","action":["style","top: 0 !important; margin-top: 0 !important;"],"cssable":true}]}],[1309649374,{"a":[{"selector":"div[id] ","tasks":[["has",{"selector":" > a[href]","tasks":[["has-text","^Try (?:D.?V.?D.?F.?a.?b|StreamFab)"],["spath"," + a[href]"]]}]]}]}],[1253129519,{"a":[{"selector":"#app","action":["style","display: none !important;"],"cssable":true},{"selector":"#app_msg","action":["style","display: none !important;"],"cssable":true},{"selector":"#download-form","action":["style","display: initial !important;"],"cssable":true}]}],[1540363194,{"a":[{"selector":"#breadcrumb + .trytopnav","action":["style","top: 36px!important;"],"cssable":true},{"selector":"#tryitLeaderboard + #breadcrumb ~ #container","action":["style","top: 84px!important;"],"cssable":true},{"selector":"#tryitLeaderboard + .trytopnav ~ #dragbar + #container","action":["style","top: 48px!important;"],"cssable":true},{"selector":"#tryitLeaderboard + .trytopnav","action":["style","top: 0!important;"],"cssable":true}]}],[1441892678,{"a":[{"selector":".ads-between-post","tasks":[["upward",".post-item"]]}]}],[849025966,{"a":[{"selector":"div[class=\"mb1 ph1 pa0-xl bb b--near-white w-25\"]","tasks":[["has",{"selector":"div[data-ad-component-type=\"wpa-tile\"]"}]]},{"selector":"li.items-center","tasks":[["has",{"selector":"div[data-ad-component-type=\"wpa-tile\"]"}]]}]}],[1508207137,{"a":[{"selector":".widget a.gofollow","tasks":[["upward",".widget"]]}]}],[1062422636,{"a":[{"selector":".bottom-ad--bigbox","tasks":[["upward",1]]},{"selector":"html[style=\"overflow: hidden;\"]","action":["style","overflow: auto !important;"],"cssable":true},{"selector":"section > div","tasks":[["has-text","^AD$"]]}]}],[2128539024,{"a":[{"selector":".adsbygoogle","tasks":[["upward","div"]]}]}],[271791850,{"a":[{"selector":"#mw-content-text > div","tasks":[["has-text","^Advertisement$"]]}]}],[1395977040,{"a":[{"selector":".code-block","tasks":[["has",{"selector":"a[href^=\"http://www.reimageplus.com/\"]"}]]},{"selector":"strong","tasks":[["has",{"selector":"a[href^=\"http://www.reimageplus.com/\"]"}]]}]}],[554712412,{"a":[{"selector":".lienet","action":["style","display:block !important"],"cssable":true}]}],[1531778157,{"a":[{"selector":".ulromlist > .element > ul > li > .adsbygoogle","tasks":[["upward",3]]}]}],[341773258,{"a":[{"selector":".wsj-16h9qyj-Box","action":["style","min-height: auto !important;"],"cssable":true},{"selector":"div[class^=\"style--column--\"] > div[class=\"\"] > div[id^=\"wrapper-AD_NATIVE\"]","tasks":[["upward",2]]}]}],[1380966836,{"a":[{"selector":".postbit-wrapper","tasks":[["if",{"selector":".postbit-userinfo-cell","tasks":[["has-text","Sponsor Content"]]}]]}]}],[252056409,{"a":[{"selector":".nvheader > span","tasks":[["has-text","Advertisement"]]}]}],[1635316627,{"a":[{"selector":"div[class^=\"styles-grid-col-\"]","tasks":[["has",{"selector":"span[class^=\"MediaObject-MediaObject-meta-\"]","tasks":[["has-text","Gesponsert|Sponsored|Patrocinado|Sponsorisé|Sponsorizzato"]]}]]}]}],[520256665,{"a":[{"selector":".img_box","tasks":[["has-text","Anzeige"]]}]}],[1137548134,{"a":[{"selector":"#asg-inplayer-block","tasks":[["upward",4]]}]}],[219952784,{"a":[{"selector":"[href^=\"/plugout.php\"]","tasks":[["upward","[class^=\"col-sm\"]"]]}]}],[1753330234,{"a":[{"selector":"body.desktopView.hasFooterAd .mainSection","action":["style","margin-bottom: 0!important;padding-bottom: 0!important;"],"cssable":true}]}],[1334483371,{"a":[{"selector":"*","tasks":[["matches-css-after",{"name":"content","pseudo":"after","value":["Advertisement","i"]}]]}]}],[1634632590,{"a":[{"selector":"[data-test-locator=\"ntk-ad-link\"]","tasks":[["upward",2]]}]}],[1783166428,{"a":[{"selector":"#shellcontent","action":["style","right: 0px !important;"],"cssable":true},{"selector":".ab_C.I_Zjpytw","tasks":[["has-text","blocker"]]}]}],[299726905,{"a":[{"selector":"#right","tasks":[["has-text",[" ads ","i"]]]}]}],[1577663437,{"a":[{"selector":"[data-locker-id]","action":["style","display: block !important"],"cssable":true}]}],[166064771,{"a":[{"selector":"[data-zone=\"underplayer_970x90\"]","tasks":[["upward",1]]}]}],[1477757003,{"a":[{"selector":".ads-thumb-list","tasks":[["upward",".outer-item"]]}]}],[1188558696,{"a":[{"selector":"aside","tasks":[["has",{"selector":"a.ad-remove"}]]}]}],[396673361,{"a":[{"selector":".card > #torrent-description","tasks":[["upward",1]]}]}],[859754089,{"a":[{"selector":".header","action":["style","top: 0 !important"],"cssable":true}]}],[382946513,{"a":[{"selector":"ytd-display-ad-renderer","tasks":[["upward","ytd-rich-item-renderer"]]}]}],[1708633948,{"a":[{"selector":".center","tasks":[["has-text","Advertisement"]]}]}],[1406969358,{"a":[{"selector":"[href*=\"-redir.\"]","tasks":[["upward",2]]},{"selector":"[style*=\"z-index:0\"]","action":["remove",""]},{"selector":"span","tasks":[["matches-css",{"name":"background-image","value":"url.*//www.idnes.cz"}],["upward",2]]}]}],[1638794756,{"a":[{"selector":"body","action":["style","background-image:none !important"],"cssable":true}]}],[2014870769,{"a":[{"selector":".branding","tasks":[["upward","[target=\"_blank\"]"]]}]}],[951812084,{"a":[{"selector":".b-main__section","tasks":[["has",{"selector":"h2.b-section__header","tasks":[["has-text","Advertisement"]]}]]}]}],[585875743,{"a":[{"selector":".main-nav .utilities > li","action":["style","margin-left:-0.5px !important"],"cssable":true},{"selector":"[style]","tasks":[["has-text","Anzeige"],["spath",":has(iframe)"],["upward",1]]},{"selector":"div","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":["Anzeige","i"]}]]}]}],[1258595920,{"a":[{"selector":".elementor-row","tasks":[["has-text","\\[Anzeige\\]"]]}]}],[1789927897,{"a":[{"selector":".slideshow__desktop-ad","action":["style","max-height:20px"],"cssable":true}]}],[1935695894,{"a":[{"selector":"[id^=\"desig-\"]","tasks":[["has-text","ANZEIGE"]]}]}],[1301744671,{"a":[{"selector":".clearfix.branding > .surftipp","tasks":[["has-text","Anzeige"]]}]}],[1473129670,{"a":[{"selector":".list-articles > li","tasks":[["has",{"selector":".icon-addy","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"^\"Anzeige\"$"}]]}]]},{"selector":".sp-article","tasks":[["has",{"selector":"span","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":["Anzeige","i"]}]]}]]}]}],[884937279,{"a":[{"selector":"[class*=\"superbanner\"]","tasks":[["upward","article > div:not(#main)"]]}]}],[228233426,{"a":[{"selector":"strong","tasks":[["has-text",["anzeige","i"]]]}]}],[2121534083,{"a":[{"selector":".id-Page-layoutWrap, .id-SiteWrap, .id-SiteHeader-wrap","action":["style","width: 100% !important; max-width: 100% !important;"],"cssable":true}]}],[1271484788,{"a":[{"selector":".ad","action":["style","position:absolute !important;left:-3000px !important;display:block !important"],"cssable":true},{"selector":".iba-acceptable","tasks":[["has-text","Anzeige|Info"]]}]}],[694133002,{"a":[{"selector":"[id^=\"outbrain_widget_\"]","tasks":[["has-text",["anzeige","i"]]]}]}],[932929336,{"a":[{"selector":"article","tasks":[["has-text","Promoted"]]}]}],[333450956,{"a":[{"selector":"#download3","action":["style","display: block !important;"],"cssable":true}]}],[986677626,{"a":[{"selector":".disabled-vscroll","action":["style","overflow: auto !important; position: initial !important;"],"cssable":true}]}],[498333172,{"a":[{"selector":".label","tasks":[["has-text","Publicidad"],["upward",1]]}]}],[84178257,{"a":[{"selector":".alert","tasks":[["has-text","VPN"]]},{"selector":".col-md-4","tasks":[["has-text","Usenet\\.nl"]]},{"selector":".trtbl","tasks":[["has",{"selector":".warnIp"}]]}]}],[616552146,{"a":[{"selector":".mat-drawer-container","action":["style","overflow-x: auto !important"],"cssable":true}]}],[2068448362,{"a":[{"selector":".adsbygoogle","action":["style","visibility: collapse !important"],"cssable":true}]}],[1132811838,{"a":[{"selector":"#o_carrepub","action":["style","height: 1px; margin: 0; min-height: auto; visibility: hidden; width: 1px;"],"cssable":true}]}],[1558612287,{"a":[{"selector":"input[type=\"submit\"]","action":["style","display: block !important;"],"cssable":true}]}],[1222625033,{"a":[{"selector":"[id^=\"div-gpt-ad\"]:not([class])","tasks":[["upward","div[class]"]]}]}],[812254522,{"a":[{"selector":"#vote-root","action":["style","display:block !important"],"cssable":true}]}],[1910905682,{"a":[{"selector":"#af-all","action":["style","margin-top: 4em;"],"cssable":true}]}],[1160625572,{"a":[{"selector":"a:not([href])","action":["style","text-decoration:none !important;"],"cssable":true}]}],[1836214077,{"a":[{"selector":"#alt_content_main_div > p","tasks":[["has-text","SpyHunter"]]},{"selector":".entry-content > div","tasks":[["has-text","Special Offer"]]}]}],[1526521163,{"a":[{"selector":"[style=\"display: none;\"]:has(#vplayer)","action":["style","display:block!important;"],"cssable":true}]}],[1712574336,{"a":[{"selector":"div.secret","action":["style","display:block !important"],"cssable":true}]}],[1071547704,{"a":[{"selector":"html","action":["style","background-image:none !important"],"cssable":true}]}],[1001922429,{"a":[{"selector":"body > .pubTime","action":["style","display: block !important"],"cssable":true},{"selector":"body > .secArticleImage","action":["style","display: block !important"],"cssable":true},{"selector":"body > .secArticleTitle","action":["style","display: block !important"],"cssable":true},{"selector":"body > .storyBody","action":["style","display: block !important"],"cssable":true}]}],[1011750118,{"a":[{"selector":".show_download_links","action":["style","display: block !important"],"cssable":true}]}],[1338183001,{"a":[{"selector":"#zedoads1","action":["style","height: 1px !important"],"cssable":true},{"selector":"#zedoads2","action":["style","height: 1px !important"],"cssable":true}]}],[752399067,{"a":[{"selector":"#story-maincontent","action":["style","display: block !important"],"cssable":true},{"selector":"#zedotopnavads","action":["style","height: 1px !important"],"cssable":true},{"selector":"#zedotopnavads1","action":["style","height: 1px !important"],"cssable":true}]}],[1273068486,{"a":[{"selector":"#advert-space > iframe","action":["style","visibility: collapse !important"],"cssable":true},{"selector":".captchaAd","action":["style","visibility: collapse !important"],"cssable":true},{"selector":"[src^=\"//coinad.com/ads/\"]","action":["style","visibility: collapse !important"],"cssable":true},{"selector":"iframe#claimAd","action":["style","max-height:1px !important;max-width:1px !important"],"cssable":true}]}],[289357729,{"a":[{"selector":"#myDIV","action":["style","display: block!important;"],"cssable":true}]}],[660090356,{"a":[{"selector":"#player_img","tasks":[["upward",2]]}]}],[1705980844,{"a":[{"selector":"#wpsafe-generate, #wpsafe-link, #getlinkbtn","action":["style","display: block !important;"],"cssable":true},{"selector":"#wpsafe-generate, #wpsafe-link, #getlinkbtn","tasks":[["others",""]]}]}],[1164697646,{"a":[{"selector":".adblockcontainer","action":["style","display: block !important"],"cssable":true}]}]]);

const hostnamesMap = new Map([["porntube.com",568563742],["pornve.com",1459478085],["psychcentral.com",612079812],["quora.com",529069769],["lite.qwant.com",1998462655],["qz.com",1204953097],["radioreference.com",1823638556],["rarlab.com",175835756],["rawstory.com",46867724],["readheroacademia.com",1724678433],["recipesdelite.com",2019999755],["reddit.com",767608282],["regex101.com",282779756],["forum.release-apk.com",1903810261],["ricettafitness.com",1347958678],["rjno1.com",1401994077],["scrolller.com",336167681],["seattleweekly.com",1805720766],["sevenjournals.com",372763504],["sexodi.com",1000486332],["shemalestube.com",696509318],["shortenbuddy.com",490826541],["shorterall.com",611173431],["promo-visits.site",611173431],["satoshi-win.xyz",611173431],["simply-debrid.com",1770657886],["skincarie.com",1798251879],["enit.in",1798251879],["slidesgo.com",1190712002],["smartparaphrasingtool.com",1112437098],["smoner.com",16474145],["splitshire.com",1163676576],["sportbible.com",[436055362,725177011]],["unilad.co.uk",436055362],["tyla.com",725177011],["gamingbible.co.uk",725177011],["stocktwits.com",56827403],["stomp.straitstimes.com",381161454],["streamingsites.com",2054228271],["subsvip.com",1852446974],["sumikai.com",1782309524],["supergoku.com",658157234],["ta2deem7arbya.com",2033082901],["tamrieltradecentre.com",1057477309],["target.com",936146839],["taxidrivermovie.com",122719157],["tcsjerky.com",1036531965],["techhelpbd.com",1988664037],["her.ie",1988664037],["techjunkie.com",1818075107],["techpowerup.com",454827349],["techsignin.com",900164368],["techtimes.com",33476534],["techvybes.com",138459855],["techxpulse.com",2086246670],["techymedies.com",38387426],["theblockcrypto.com",1230838684],["thedigitalfix.com",183379746],["thehouseofportable.com",974707450],["thepostmillennial.com",1241138855],["thequint.com",845871698],["thesquarshers.com",1118291567],["theswagsports.com",591942172],["thewindowsclub.com",166723818],["thingiverse.com",1520579799],["thumpertalk.com",25725442],["time.com",2057569052],["titantv.com",1671621166],["tnaflix.com",463876361],["tossinggames.com",1233086483],["trendyoum.com",1036018444],["tripadvisor.com",645287891],["troyhunt.com",827218248],["tubepornclassic.com",1605372282],["tumblr.com",987797877],["tvshows4mobile.com",890804823],["blog.aming.info",890804823],["arrowos.net",890804823],["twitter.com",[835933742,798894509]],["twitter3e4tixl4xyajtrzo62zg5vztmjuricljdp2c5kshju4avyoid.onion",835933742],["mobile.twitter.com",904717361],["unsplash.com",592908721],["yt.upshrink.com",1659092350],["usatoday.com",321021750],["videohelp.com",1309649374],["vrcmods.com",1253129519],["w3schools.com",1540363194],["wallpaperwaifu.com",1441892678],["walmart.com",849025966],["washingtoninformer.com",1508207137],["washingtonpost.com",1062422636],["webnovelpub.com",2128539024],["wikiprocedure.com",271791850],["windowsbulletin.com",1395977040],["wo2viral.com",554712412],["wowroms.com",1531778157],["wsj.com",341773258],["forum.xda-developers.com",1380966836],["xfreehd.com",252056409],["xing.com",1635316627],["xnxx-sexfilme.com",520256665],["xnxxjapon.com",1137548134],["xrares.com",219952784],["xtube.com",1753330234],["xxxdan.com",1334483371],["yahoo.com",1634632590],["mail.yahoo.com",1783166428],["in.search.yahoo.com",299726905],["yhocdata.com",1577663437],["you-porn.com",166064771],["youporngay.com",166064771],["youpornru.com",166064771],["youngpornvideos.com",1477757003],["youporn.com",1188558696],["yourbittorrent2.com",396673361],["yourdictionary.com",859754089],["youtube.com",382946513],["zippyshare.com",1708633948],["idnes.cz",1406969358],["uschovna.cz",[1638794756,2014870769]],["vladan.fr",1638794756],["kitguru.net",1638794756],["china.ahk.de",951812084],["bild.de",585875743],["btc-echo.de",1258595920],["businessinsider.de",1789927897],["designtagebuch.de",1935695894],["focus.de",1301744671],["golem.de",1473129670],["rtl.de",884937279],["sport1.de",228233426],["wa.de",2121534083],["web.de",1271484788],["welt.de",694133002],["app.daily.dev",932929336],["tiny.do",333450956],["elmundo.es",986677626],["tutorialesenlinea.es",498333172],["multiup.eu",84178257],["multiup.org",84178257],["gigantti.fi",616552146],["fiches-auto.fr",2068448362],["orange.fr",1132811838],["claim.fun",1558612287],["tech.madshiba.fun",1558612287],["test.madshiba.fun",1558612287],["op.gg",1222625033],["top.gg",812254522],["u.gg",1910905682],["bestpractices.ca.gov",1160625572],["howtoremove.guide",1836214077],["akvi.icu",1526521163],["kelasexcel.id",1712574336],["thejournal.ie",1071547704],["m.aajtak.in",1001922429],["apkmodhub.in",1011750118],["businesstoday.in",[1338183001,752399067]],["indiatoday.in",[1338183001,1164697646]],["intoday.in",[1338183001,1164697646]],["moondoge.co.in",1273068486],["defaultfreeshort.in",289357729],["filerio.in",660090356],["financeflix.in",1705980844],["technoflip.in",1705980844]]);

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
