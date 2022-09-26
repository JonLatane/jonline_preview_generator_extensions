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

const argsMap = new Map([[394820355,{"a":[{"selector":".div-gpt-ad","action":["style","width:1px!important;height:1px!important;min-width:1px!important;min-height:1px!important;margin:0!important;padding:0!important;overflow:hidden!important;opacity:0!important"],"cssable":true},{"selector":"[class^=\"div-gpt-ad\"]","action":["style","width:1px!important;height:1px!important;min-width:1px!important;min-height:1px!important;margin:0!important;padding:0!important;overflow:hidden!important;opacity:0!important"],"cssable":true},{"selector":"[id^=\"div-gpt-ad\"]","action":["style","width:1px!important;height:1px!important;min-width:1px!important;min-height:1px!important;margin:0!important;padding:0!important;overflow:hidden!important;opacity:0!important"],"cssable":true},{"selector":"div.adsbygoogle.Ad-Container.sidebar-ad","action":["style","display:block !important"],"cssable":true},{"selector":"div[id^=\"div-gpt-\"]:not([id^=\"div-gpt-ad\"])","action":["style","width:1px!important;height:1px!important;min-width:1px!important;min-height:1px!important;margin:0!important;padding:0!important;overflow:hidden!important;opacity:0!important"],"cssable":true}]}],[476352329,{"a":[{"selector":"div.azyBPe","tasks":[["has",{"selector":"span.jHLihd"}],["spath"," + div"]]},{"selector":"div.azyBPe","tasks":[["has",{"selector":"span.jHLihd"}]]},{"selector":"div.sbsb_c","tasks":[["has",{"selector":"span.jHLihd"}]]},{"selector":"div[jsaction^=\"mouseover:\"]","tasks":[["has",{"selector":"span.irmCpc"}]]},{"selector":"div[jsaction^=\"mouseover:pane.\"]","tasks":[["has",{"selector":"span.jHLihd"}]]},{"selector":"div[jsaction^=\"mouseover:pane\"]","tasks":[["has",{"selector":"div[class*=\"-haAclf-\"] > div.UzWqLb"}]]},{"selector":"div[jsaction^=\"mouseover:pane\"]","tasks":[["has",{"selector":"span[class$=\"-badge-haAclf\"] > span[class$=\"-badge\"]"}]]},{"selector":"div[jsaction^=\"mouseover:pane\"]","tasks":[["has",{"selector":"span[class$=\"-haAclf\"] > span > button"}]]},{"selector":"div[jsaction^=\"pane.\"]","tasks":[["has",{"selector":"span.ARktye-Btuy5e"}]]},{"selector":"div[jsaction^=\"pane.place.carousel.card\"]","tasks":[["has",{"selector":"span.ARktye-badge"}]]}]}],[904962879,{"a":[{"selector":".listItem","tasks":[["has",{"selector":".sponsored_v2"}]]}]}],[720910323,{"a":[{"selector":"div[class^=\" container_\"]","tasks":[["has",{"selector":"a[href^=\"/adredir?\"]"}]]}]}],[1093375643,{"a":[{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Anzeige von\"]"}]]},{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Gesponsord door\"]"}]]},{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Promocionado por\"]"}]]},{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Promoted by\"]"}]]},{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Promowane przez\"]"}]]},{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Publicidade de\"]"}]]},{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Sponsor:\"]"}]]},{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Sponsorisée par\"]"}]]},{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Sponsorizzato da\"]"}]]},{"selector":"div[data-test-id=\"pin\"]","tasks":[["has",{"selector":"div[title=\"Рекламодатель:\"]"}]]}]}],[557633056,{"a":[{"selector":".subscribe-article .subscribe-truncate","action":["style","max-height:unset!important;order:unset!important;"],"cssable":true},{"selector":".subscribe-article .subscribe-truncate::before","action":["style","background:none!important;"],"cssable":true},{"selector":".subscribe-article .subscriber-hider","action":["style","display:block!important"],"cssable":true}]}],[678753659,{"a":[{"selector":"._2gSkZ","action":["style","height: 150px !important;"],"cssable":true},{"selector":"header","action":["style","top: 0 !important"],"cssable":true}]}],[125667851,{"a":[{"selector":".b-module","tasks":[["has",{"selector":"h2","tasks":[["has-text","Sponsored"]]}]]},{"selector":".mfe-lex","tasks":[["has",{"selector":"h2","tasks":[["has-text","sponsored"]]}]]},{"selector":".mfe-reco-ct","tasks":[["has",{"selector":".mfe-promoted-label"}]]},{"selector":".s-item","tasks":[["has",{"selector":"span[class^=\"s-item__title--tagblock__SPONSORED\"]"}]]}]}],[909304441,{"a":[{"selector":".subscribe-truncate","action":["style","order:0!important;max-height:inherit!important"],"cssable":true},{"selector":".subscribe-truncate:before","action":["style","background:none!important"],"cssable":true},{"selector":".subscriber-hider","action":["style","display:inherit!important"],"cssable":true}]}],[2066938236,{"a":[{"selector":".page__content-header","action":["style","height: 50px !important"],"cssable":true}]}],[142584071,{"a":[{"selector":".c9 > div","tasks":[["has-text","Advertisement"]]}]}],[1444318311,{"a":[{"selector":"tbody","tasks":[["has-text","WARNING! Use a"]]}]}],[854305728,{"a":[{"selector":".DvypSJ","tasks":[["has",{"selector":"span","tasks":[["has-text","Gesponsert|Gesponsord|Patrocinado|Sponset|Sponsitud|Sponsored|Sponsoreret|Sponsorēts|Sponsorizzato|Sponsorisé|Sponsoroitu|Sponsorowane|Sponsrad|Sponzorirano|Sponzorováno"]]}]]}]}],[1841107357,{"a":[{"selector":".attention-button-wrap","tasks":[["has-text","Reimage"]]},{"selector":".nfc-bottom-right","tasks":[["has-text","Reimage"]]},{"selector":"a","tasks":[["has-text","Reimage"]]},{"selector":"a","tasks":[["has-text","SpyHunter"]]},{"selector":"th","tasks":[["has-text","^Detection$"],["spath"," + td"]]},{"selector":"th","tasks":[["has-text","^Detection$"]]}]}],[1287238695,{"a":[{"selector":"div.layout_container_right","action":["style","padding-left:0 !important"],"cssable":true},{"selector":"div.single-leftside","action":["style","padding-right:0 !important"],"cssable":true},{"selector":"div.ss_left","action":["style","padding-left:0 !important"],"cssable":true}]}],[921134925,{"a":[{"selector":".postcontainer","tasks":[["has",{"selector":".usertitle","tasks":[["has-text","Publicidade"]]}]]}]}],[1031407245,{"a":[{"selector":"[id=\"colunas\"]","action":["style","display: block !important;"],"cssable":true}]}],[1429078227,{"a":[{"selector":".adsbygoogle","action":["style","max-height: 1px !important;"],"cssable":true}]}],[464851866,{"a":[{"selector":"[id^=\"banner-300x250\"]","action":["remove",""]}]}],[340624637,{"a":[{"selector":"#frameAd","action":["style","height: 51 px !important; display: block !important; visibility: collapse !important;"],"cssable":true}]}],[1255304847,{"a":[{"selector":"body","action":["style","padding-top:0px !important"],"cssable":true}]}],[450672920,{"a":[{"selector":"[href=\"/upgrade\"]","tasks":[["upward",1]]}]}],[1825224868,{"a":[{"selector":"style","action":["remove",""],"tasks":[["has-text","#blockblock"]]}]}],[1524218783,{"a":[{"selector":".happy-player-beside, .happy-section, .widget_execphp","tasks":[["has-text","Advertisement|ExoLoader"]]},{"selector":".video-block-happy-absolute","tasks":[["upward",".order-1"]]}]}],[1310669752,{"a":[{"selector":".fKZLNI","action":["style","width:120% !important"],"cssable":true}]}],[1605673727,{"a":[{"selector":"form#go-popup","action":["remove",""]}]}],[187768944,{"a":[{"selector":"#tp-generate, [id^=\"tp-snp\"]","action":["style","display: block !important"],"cssable":true}]}],[1645563334,{"a":[{"selector":".definetelynotanad","tasks":[["upward","[class^=\"col-md-\"]"]]}]}],[441010970,{"a":[{"selector":"#wpsafe-generate, #wpsafe-link","action":["style","display: block !important;"],"cssable":true}]}],[559245193,{"a":[{"selector":"#wpsafe-generate","action":["style","display: block !important"],"cssable":true}]}],[1280109526,{"a":[{"selector":".safelink-recatpcha","action":["style","display: block !important;"],"tasks":[["upward","div"]]}]}],[745659814,{"a":[{"selector":"img[onclick]","action":["style","display: block !important"],"tasks":[["upward",".wait"]]}]}],[1332940481,{"a":[{"selector":"#wpsafe-snp","action":["style","display: block !important;"],"cssable":true}]}],[1064861333,{"a":[{"selector":"#wpsafe-generate","action":["style","display: block !important;"],"cssable":true}]}],[427109387,{"a":[{"selector":".page-wrap > section","tasks":[["has-text","Download the free"]]}]}],[2077873295,{"a":[{"selector":".ad","action":["style","height: 20px !important;"],"cssable":true}]}],[1450914920,{"a":[{"selector":"li.uk-active","action":["remove",""]}]}],[454306025,{"a":[{"selector":".nav-bar","action":["style","top:0px !important"],"cssable":true},{"selector":"body:not(.skybox-loaded) .topnav","action":["style","margin-top:0px !important"],"cssable":true}]}],[2061126291,{"a":[{"selector":"#pageWrapper","action":["style","display: initial !important;"],"cssable":true}]}],[1149038717,{"a":[{"selector":"body","action":["style","overflow: auto !important;"],"cssable":true}]}],[796643855,{"a":[{"selector":"button","action":["style","display: inline-block !important"],"cssable":true}]}],[1621916442,{"a":[{"selector":"#sidebar1 > .HTML > .widget-content > .adsbygoogle","tasks":[["upward",2]]}]}],[643417836,{"a":[{"selector":".promoted","tasks":[["upward","article"]]},{"selector":"[id^=\"sidebar-stream-\"] > h4","tasks":[["has-text","Advertisement"]]}]}],[984412998,{"a":[{"selector":"#eachDownloadedModal .ac-btn[href^=\"https://premium.\"]","tasks":[["upward","#eachDownloadedModal"]]},{"selector":"body.modal-open *","action":["style","filter: none!important;"],"cssable":true}]}],[1818203839,{"a":[{"selector":".add-bx","action":["style","height: 0px !important; min-height: 0px !important;"],"cssable":true}]}],[738103710,{"a":[{"selector":".footer-btns","action":["style","display: block !important;"],"cssable":true}]}],[116393206,{"a":[{"selector":"#link1s-snp","action":["style","display:block!important"],"cssable":true}]}],[681072440,{"a":[{"selector":"#smspage","action":["style","display: block !important;"],"cssable":true}]}],[2023923707,{"a":[{"selector":".code-block > [style]","tasks":[["has-text","Adv"]]}]}],[822053562,{"a":[{"selector":"product-item-v2[class$=\"product-card-col\"]","tasks":[["has",{"selector":"div[data-qa=\"prd-itm-spnsrd\"]"}]]}]}],[483364997,{"a":[{"selector":".m-product-item","tasks":[["has-text","Sponsored Listing"]]}]}],[1297841070,{"a":[{"selector":"body","action":["style","overflow: auto !important"],"cssable":true}]}],[1894773268,{"a":[{"selector":"center","tasks":[["has-text","deal"]]}]}],[359159948,{"a":[{"selector":"*","action":["style","filter: none !important"],"cssable":true}]}],[228341297,{"a":[{"selector":".ad_by","tasks":[["upward",3]]},{"selector":"[href^=\"/advertorial/\"]","tasks":[["upward",2]]}]}],[406539977,{"a":[{"selector":".post.has-post-thumbnail video#gump","action":["remove",""],"tasks":[["upward",".post"]]}]}],[824025694,{"a":[{"selector":".maas-item","tasks":[["has-text","our Partners"]]}]}],[1238525948,{"a":[{"selector":"p","tasks":[["has-text","Advertisement"]]}]}],[1046103763,{"a":[{"selector":"#download_link","action":["style","display: block !important;"],"cssable":true}]}],[1125034168,{"a":[{"selector":".btnDownload","tasks":[["has-text","SHARE"]]}]}],[261977980,{"a":[{"selector":".gooWidget","action":["style","opacity: 0 !important;"],"cssable":true},{"selector":".google-ad-leaderboard","action":["style","opacity: 0 !important;"],"cssable":true}]}],[361153839,{"a":[{"selector":".adsbygoogle","action":["style","width:1px!important;height:1px!important;min-width:1px!important;min-height:1px"],"cssable":true}]}],[234144780,{"a":[{"selector":"#info","action":["style","display: block !important"],"cssable":true}]}],[1383929201,{"a":[{"selector":"#site-wrapper","action":["style","padding-top: 0 !important;"],"cssable":true}]}],[1449637283,{"a":[{"selector":"#wpsafe-generate, #wpsafe-link","action":["style","display: block !important"],"cssable":true}]}],[2016203468,{"a":[{"selector":"#wpsafe-snp","action":["style","display: block !important"],"cssable":true}]}],[624763999,{"a":[{"selector":"#ymm-sub-nav","action":["style","top:0px !important"],"cssable":true}]}],[1047158485,{"a":[{"selector":"svg:has([transform])","tasks":[["upward","span"],["spath"," + div"]]},{"selector":"svg:has([transform])","tasks":[["upward","span"]]}]}],[1786247960,{"a":[{"selector":"#player_3x2_close","action":["style","opacity: 0 !important; height: 300px !important;"],"cssable":true}]}],[471299883,{"a":[{"selector":"[class^=\"style\"]","tasks":[["has-text","Advertisement"]]}]}],[2131768669,{"a":[{"selector":".g-recaptcha","action":["style","margin-top:60px !important"],"cssable":true}]}],[1055174526,{"a":[{"selector":"#footer #wpsafe-link","action":["style","display: block !important;"],"cssable":true}]}],[457895867,{"a":[{"selector":"#myClickButton","tasks":[["others",""]]}]}],[1647595357,{"a":[{"selector":"#sticky-mpu","tasks":[["has",{"selector":".dotcom-ad-inner"}]]}]}],[221495381,{"a":[{"selector":"html, body","action":["style","overflow: auto !important"],"cssable":true}]}],[708485230,{"a":[{"selector":".prev-ave-nm","tasks":[["upward",1]]}]}],[415006136,{"a":[{"selector":".samBackground","action":["style","background-image:none !important"],"cssable":true}]}],[969375094,{"a":[{"selector":"[id^=\"Ad\"]","tasks":[["upward","[style]"]]}]}],[1234215622,{"a":[{"selector":"img[width=\"558\"][height=\"149\"]","tasks":[["upward","td[style]"]]}]}],[570716973,{"a":[{"selector":"","tasks":[["matches-path","~/shop"],["spath"," a[href*=\"/aclick?\"]:not(.vsp_ads)"]]},{"selector":".b_ad","action":["remove",""]},{"selector":".b_algo","tasks":[["has",{"selector":"p","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"^\"Ad\"$"}]]}]]},{"selector":"[onclick^=\"ad_choice\"]","tasks":[["upward",3]]}]}],[1887918345,{"a":[{"selector":".code-block","tasks":[["has",{"selector":"span","tasks":[["has-text","ADVERTISEMENT"]]}]]}]}],[1340951204,{"a":[{"selector":"#bc-home-news-main-wrap > li a[href$=\"/deals/\"]","tasks":[["upward","li"]]},{"selector":"#bc-home-news-main-wrap > li","tasks":[["has-text","Sponsored Content"]]}]}],[171289225,{"a":[{"selector":".asdf","action":["style","display: block !important;"],"cssable":true}]}],[1879332841,{"a":[{"selector":"#wpsafe-snp1","action":["style","display: block !important"],"cssable":true},{"selector":"#wpsafe-snp1","tasks":[["others",""]]}]}],[1528665931,{"a":[{"selector":".text-center","tasks":[["has-text","Adv"]]}]}],[791608050,{"a":[{"selector":".adsbygoogle","tasks":[["upward","[id^=\"HTML\"]"]]}]}],[2030105662,{"a":[{"selector":".widget-column > center > [href=\"https://boobgirlz.com/istripper\"]","tasks":[["upward",".widget-column"]]}]}],[1307218752,{"a":[{"selector":"#show_ag","action":["style","display:block !important"],"cssable":true}]}],[481348816,{"a":[{"selector":".main-body > div > div[class]:not([class^=\"item\"]):not([class^=\"article\"])","tasks":[["has-text","^Sponsored ads$"]]},{"selector":".main-body div[class] > .adsbyexoclick","tasks":[["upward",1]]},{"selector":"div[class*=\"article\"] > div:not([class]) > div[class]","tasks":[["has-text","^Sponsored ads$"]]}]}],[2053938351,{"a":[{"selector":".cb-comments__create-form","action":["style","margin-top: 30px !important;"],"cssable":true},{"selector":".cb-post-block-images-swiper .cb-post-block__comments .collapseable-comments__collapse","action":["style","margin-bottom: 0px !important;"],"cssable":true},{"selector":".cb-post-block-images-swiper .cb-post-block__comments","action":["style","margin-bottom: 0 !important; top: -97px !important;"],"cssable":true},{"selector":".cb-post-block-images-swiper .collapseable-comments__collapseable","action":["style","margin-bottom: -80px !important;"],"cssable":true},{"selector":".cb-post-block__comments","action":["style","padding-bottom: 0 !important;"],"cssable":true}]}],[1425173000,{"a":[{"selector":"[data-cg-ft=\"sponsored-listing-badge\"]","tasks":[["upward",3]]},{"selector":"[id^=\"bannerAdLEADERBOARD_INLINE_\"]","tasks":[["upward",1]]}]}],[1492456664,{"a":[{"selector":"div#network-bar-spacer","action":["style","height:0 !important"],"cssable":true}]}],[311708034,{"a":[{"selector":".row.divider","tasks":[["has-text",["sponsor|press releases","i"]]]},{"selector":".widget","tasks":[["has-text",["advert|sponsor","i"]]]}]}],[2000374634,{"a":[{"selector":".uitk-card","tasks":[["has",{"selector":".uitk-badge-sponsored"}]]}]}],[1215913446,{"a":[{"selector":"body.board-layout.with-und","action":["style","margin-right:0px!important"],"cssable":true}]}],[32842187,{"a":[{"selector":"#tp-generate, #getlinkbtn","action":["style","display: block !important;"],"cssable":true}]}],[1044037678,{"a":[{"selector":".ad-wrapper","tasks":[["upward","div.region-sidebar-first-wrapper"]]}]}],[819037146,{"a":[{"selector":".zox-side-widget","tasks":[["has-text","^Advertis"]]}]}],[1498743232,{"a":[{"selector":"iframe[src^=\"https://ads2.\"]","tasks":[["upward",".widget"]]}]}],[153421342,{"a":[{"selector":".item > div.spot","tasks":[["upward",1]]}]}],[1818235293,{"a":[{"selector":".cards__item--videos span.flag--banner","tasks":[["upward",".cards__item--videos"]]}]}],[32438442,{"a":[{"selector":".adsbygoogle","tasks":[["upward",1]]}]}],[1660758903,{"a":[{"selector":"form[action$=\"/links/popad\"]","action":["remove",""]}]}],[1077483376,{"a":[{"selector":"body > header","action":["style","top:0 !important"],"cssable":true},{"selector":"body.pcm-public","action":["style","margin-top: 84px !important;"],"cssable":true}]}],[1270745836,{"a":[{"selector":".onp-sl-content","action":["style","display: block !important;"],"cssable":true}]}],[34645188,{"a":[{"selector":"body","action":["style","overflow:auto !important"],"cssable":true}]}],[1659749646,{"a":[{"selector":"div[data-section=\"home\"] > div","tasks":[["has",{"selector":"span[name=\"adchoicehtml\"]"}]]}]}],[1393550596,{"a":[{"selector":".ct-related-videos-title","tasks":[["has-text","Advertisement"]]},{"selector":".ct-related-videos-title","tasks":[["has-text","You may also like"]]}]}],[1302548066,{"a":[{"selector":"div.grid-cell","tasks":[["has-text",["AD •","i"]]]}]}],[1146305235,{"a":[{"selector":"#locked_action_link.disabled","action":["style","cursor:pointer !important; opacity:1 !important; pointer-events:auto !important"],"cssable":true}]}],[1396713638,{"a":[{"selector":"#go-popup","action":["remove",""]}]}],[447625992,{"a":[{"selector":".td-animation-stack-type0-1","action":["style","opacity:1 !important"],"cssable":true}]}],[122408325,{"a":[{"selector":"#dclm-blur","action":["style","filter: none !important"],"cssable":true}]}],[517999712,{"a":[{"selector":"#XcVCCW","action":["style","display:block !important;"],"cssable":true}]}],[69460730,{"a":[{"selector":"#btngetlink","action":["style","display: inline-block !important"],"cssable":true}]}],[1281317601,{"a":[{"selector":".dd-nav-global","action":["style","top: 0 !important; transform: none !important;"],"cssable":true}]}],[959564621,{"a":[{"selector":"#wpsafe-link","action":["style","display:block !important"],"cssable":true}]}],[2077279309,{"a":[{"selector":".order-2 .duration-ad","tasks":[["upward",".order-2"]]},{"selector":"div[class^=\"inside-list-boxes\"]","tasks":[["upward",1]]}]}],[1552557441,{"a":[{"selector":"[style*=\"pointer-events\"]","action":["style","pointer-events:auto !important"],"cssable":true}]}],[523773080,{"a":[{"selector":"#wpsafe-link","action":["style","display: block !important;"],"cssable":true}]}],[923965932,{"a":[{"selector":"div[pb-serve-label*=\"advert\"]","tasks":[["upward",2]]}]}],[980916179,{"a":[{"selector":"#rightcolumn > .rbox > .rboxInner img[alt=\"Advertisement\"]","tasks":[["upward",".rbox"]]},{"selector":".wallpaperSidebarAds","tasks":[["upward","div"]]}]}],[1827577204,{"a":[{"selector":".single-story > header","action":["style","margin-top: 40px !important"],"cssable":true},{"selector":".tracking-widest","tasks":[["has-text","Sponsored"]]},{"selector":"article.fp-vertical-story","tasks":[["has",{"selector":"a[href=\"/channel/digg-pick\"]"}]]},{"selector":"article.fp-vertical-story","tasks":[["has",{"selector":"a[href=\"/channel/promotion\"]"}]]},{"selector":"article.fp-vertical-story","tasks":[["has",{"selector":"div","tasks":[["has-text","SPONSORED"]]}]]},{"selector":"article.relative","tasks":[["has",{"selector":"div","tasks":[["has-text","SPONSORED"]]}]]}]}],[259211844,{"a":[{"selector":".adsbygoogle","action":["style","height: 0px !important; visibility: collapse;"],"cssable":true}]}],[1780073128,{"a":[{"selector":".left_shadow","tasks":[["has-text","Fast"]]}]}],[2064875116,{"a":[{"selector":".adunitContainer","tasks":[["upward",1]]}]}],[925872960,{"a":[{"selector":"a > img + div[class]:last-of-type","tasks":[["has-text","Sponsored"],["upward","div[sizes]"]]},{"selector":"div[sizes] > span[class]","tasks":[["has-text","Sponsored"],["upward","div[sizes]"]]}]}],[172279244,{"a":[{"selector":"[href*=\"utm\"]","tasks":[["upward","tbody"]]}]}],[1352858109,{"a":[{"selector":"img[id^=\"ads-\"]","action":["style","visibility: hidden !important;"],"cssable":true}]}],[1748699484,{"a":[{"selector":"[data-testid=\"card.store\"] > div","tasks":[["has",{"selector":"div[data-anchor-id=\"SponsoredBadge\"]"}]]}]}],[982735372,{"a":[{"selector":".video-block-happy","tasks":[["upward",1]]}]}],[1117659441,{"a":[{"selector":".uk-panel-box-secondary.uk-panel-box.uk-panel","tasks":[["has-text","VPN"]]}]}],[987921389,{"a":[{"selector":".adBanner","action":["style","height:1px !important"],"cssable":true}]}],[1987443613,{"a":[{"selector":"html","action":["style","overflow: auto !important;"],"cssable":true}]}],[963978141,{"a":[{"selector":"#banner_overlay-postitial-video","action":["remove",""]}]}],[564763048,{"a":[{"selector":".aoa_overlay","action":["style","height: 0px !important"],"cssable":true}]}],[1102060461,{"a":[{"selector":".dpn","tasks":[["upward","div[class]"]]}]}],[203282269,{"a":[{"selector":"H2","tasks":[["has-text","Promoted"],["spath"," + DIV"]]}]}],[816476460,{"a":[{"selector":"h2","tasks":[["has-text","Promoted"]]}]}],[1611509190,{"a":[{"selector":"h3.my-4","tasks":[["has-text","^Advertising"]]}]}],[1198325999,{"a":[{"selector":".adsbygoogle","action":["style","height: 1px !important;"],"cssable":true}]}],[1349392306,{"a":[{"selector":"div > .page > div > div[style]","tasks":[["has-text",["^Advertise","i"]],["spath"," + a"]]}]}],[773249647,{"a":[{"selector":"iframe[width=\"970\"]","tasks":[["upward","[id^=tdi_].tdc-row"]]}]}],[2019104985,{"a":[{"selector":"ul[data-component=\"LatestStream\"] > li a[data-ylk^=\"slk:Sponsored\"]","tasks":[["upward","li"]]}]}],[592342816,{"a":[{"selector":"*::selection","action":["style","background-color:#338FFF!important"],"cssable":true}]}],[1917645506,{"a":[{"selector":"div","tasks":[["has",{"selector":" > .ad"}]]}]}],[1256734848,{"a":[{"selector":".listing-link[href*=\"ref=sc_gallery\"]","tasks":[["upward","li"]]},{"selector":"li.wt-grid__item-xs-6","tasks":[["has",{"selector":"a[href*=\"&plkey=\"]"}]]},{"selector":"li.wt-grid__item-xs-6","tasks":[["has",{"selector":"a[href*=\"?plkey=\"]"}]]}]}],[88876745,{"a":[{"selector":"#stream_pagelet div[id^=\"hyperfeed_story_id_\"]","tasks":[["if",{"selector":"h6","tasks":[["has-text","People You May Know"]]}]]},{"selector":".ego_column","tasks":[["if","a[href^=\"/campaign/landing\"]"]]},{"selector":".ego_section","tasks":[["if","a[href^=\"/ad_campaign\"]"]]},{"selector":".pagelet-group .pagelet","tasks":[["has",{"selector":"a","tasks":[["has-text","Sponsored|Create ad|Crear un anuncio|Publicidad"]]}]]},{"selector":".userContentWrapper > div div > span > span","tasks":[["has-text","^Suggested Post$"]]},{"selector":"div[id^=\"hyperfeed_story_id_\"]","tasks":[["has",{"selector":"div > span:has(abbr .timestampContent)","tasks":[["matches-css",{"name":"display","value":"^none$"}]]}]]}]}],[1101660101,{"a":[{"selector":"div[style=\"max-width: 390px; min-width: 190px;\"]","tasks":[["has",{"selector":"a[href^=\"/ads/\"]"}]]}]}]]);

const hostnamesMap = new Map([["*",394820355],["google.ac",476352329],["google.ae",476352329],["google.com.ar",476352329],["google.at",476352329],["google.com.au",476352329],["google.be",476352329],["google.bg",476352329],["google.com.br",476352329],["google.by",476352329],["google.ca",476352329],["google.ch",476352329],["google.cl",476352329],["google.com.co",476352329],["google.com",476352329],["google.cz",476352329],["google.de",476352329],["google.dk",476352329],["google.dz",476352329],["google.com.ec",476352329],["google.ee",476352329],["google.com.eg",476352329],["google.es",476352329],["google.fi",476352329],["google.fr",476352329],["google.gr",476352329],["google.com.hk",476352329],["google.hr",476352329],["google.hu",476352329],["google.co.id",476352329],["google.ie",476352329],["google.co.il",476352329],["google.co.in",476352329],["google.it",476352329],["google.co.jp",476352329],["google.co.ke",476352329],["google.co.kr",476352329],["google.lt",476352329],["google.lv",476352329],["google.com.mx",476352329],["google.com.my",476352329],["google.nl",476352329],["google.no",476352329],["google.co.nz",476352329],["google.com.pe",476352329],["google.com.ph",476352329],["google.com.pk",476352329],["google.pl",476352329],["google.pt",476352329],["google.com.py",476352329],["google.ro",476352329],["google.rs",476352329],["google.ru",476352329],["google.com.sa",476352329],["google.se",476352329],["google.com.sg",476352329],["google.sk",476352329],["google.co.th",476352329],["google.com.tr",476352329],["google.com.tw",476352329],["google.com.ua",476352329],["google.co.uk",476352329],["google.com.uy",476352329],["google.co.ve",476352329],["google.com.vn",476352329],["google.co.za",476352329],["tripadvisor.com.ar",904962879],["tripadvisor.at",904962879],["tripadvisor.com.au",904962879],["tripadvisor.be",904962879],["tripadvisor.com.br",904962879],["tripadvisor.ca",904962879],["tripadvisor.ch",904962879],["tripadvisor.cl",904962879],["tripadvisor.cn",904962879],["tripadvisor.co",904962879],["tripadvisor.com",904962879],["tripadvisor.de",904962879],["tripadvisor.dk",904962879],["tripadvisor.com.eg",904962879],["tripadvisor.es",904962879],["tripadvisor.fr",904962879],["tripadvisor.com.gr",904962879],["tripadvisor.com.hk",904962879],["tripadvisor.co.id",904962879],["tripadvisor.ie",904962879],["tripadvisor.co.il",904962879],["tripadvisor.in",904962879],["tripadvisor.it",904962879],["tripadvisor.jp",904962879],["tripadvisor.co.kr",904962879],["tripadvisor.com.mx",904962879],["tripadvisor.com.my",904962879],["tripadvisor.nl",904962879],["tripadvisor.co.nz",904962879],["tripadvisor.com.pe",904962879],["tripadvisor.com.ph",904962879],["tripadvisor.pt",904962879],["tripadvisor.ru",904962879],["tripadvisor.se",904962879],["tripadvisor.com.sg",904962879],["tripadvisor.com.tr",904962879],["tripadvisor.com.tw",904962879],["tripadvisor.co.uk",904962879],["tripadvisor.com.ve",904962879],["tripadvisor.com.vn",904962879],["tripadvisor.co.za",904962879],["yelp.com.ar",720910323],["yelp.at",720910323],["yelp.com.au",720910323],["yelp.be",720910323],["yelp.com.br",720910323],["yelp.ca",720910323],["yelp.ch",720910323],["yelp.cl",720910323],["yelp.com",720910323],["yelp.cz",720910323],["yelp.de",720910323],["yelp.dk",720910323],["yelp.es",720910323],["yelp.fi",720910323],["yelp.fr",720910323],["yelp.com.hk",720910323],["yelp.ie",720910323],["yelp.it",720910323],["yelp.co.jp",720910323],["yelp.com.mx",720910323],["yelp.my",720910323],["yelp.nl",720910323],["yelp.no",720910323],["yelp.co.nz",720910323],["yelp.com.ph",720910323],["yelp.pl",720910323],["yelp.pt",720910323],["yelp.se",720910323],["yelp.com.sg",720910323],["yelp.com.tr",720910323],["yelp.co.uk",720910323],["pinterest.at",1093375643],["pinterest.com.au",1093375643],["pinterest.ca",1093375643],["pinterest.ch",1093375643],["pinterest.com",1093375643],["pinterest.de",1093375643],["pinterest.es",1093375643],["pinterest.fr",1093375643],["pinterest.it",1093375643],["pinterest.com.mx",1093375643],["pinterest.pt",1093375643],["pinterest.co.uk",1093375643],["begadistrictnews.com.au",557633056],["bendigoadvertiser.com.au",557633056],["goulburnpost.com.au",557633056],["maitlandmercury.com.au",557633056],["newcastleherald.com.au",557633056],["brisbanetimes.com.au",678753659],["smh.com.au",678753659],["theage.com.au",678753659],["watoday.com.au",678753659],["ebay.com.au",125667851],["ebay.com",125667851],["ebay.co.uk",125667851],["examiner.com.au",909304441],["theadvocate.com.au",909304441],["thecourier.com.au",909304441],["nowtolove.com.au",2066938236],["sbs.com.au",142584071],["123unblock.bar",1444318311],["eztv.tf",1444318311],["eztv.yt",1444318311],["zalando.be",854305728],["zalando.ch",854305728],["zalando.cz",854305728],["zalando.de",854305728],["zalando.dk",854305728],["zalando.ee",854305728],["zalando.es",854305728],["zalando.fi",854305728],["zalando.fr",854305728],["zalando.ie",854305728],["zalando.it",854305728],["zalando.lv",854305728],["zalando.no",854305728],["zalando.pl",854305728],["zalando.se",854305728],["zalando.si",854305728],["zalando.co.uk",854305728],["virusi.bg",1841107357],["wubingdu.cn",1841107357],["2-spyware.com",1841107357],["odstranitvirus.cz",1841107357],["dieviren.de",1841107357],["udenvirus.dk",1841107357],["viirused.ee",1841107357],["losvirus.es",1841107357],["virukset.fi",1841107357],["lesvirus.fr",1841107357],["ioys.gr",1841107357],["virusi.hr",1841107357],["avirus.hu",1841107357],["tanpavirus.web.id",1841107357],["senzavirus.it",1841107357],["uirusu.jp",1841107357],["virusai.lt",1841107357],["zondervirus.nl",1841107357],["viruset.no",1841107357],["usunwirusa.pl",1841107357],["semvirus.pt",1841107357],["faravirus.ro",1841107357],["bedynet.ru",1841107357],["utanvirus.se",1841107357],["virusler.info.tr",1841107357],["novirus.uk",1841107357],["voxfilmeonline.biz",1287238695],["hardmob.com.br",921134925],["lojadebicicleta.com.br",1031407245],["dietafitness.fun",1031407245],["topauto.fun",1031407245],["loskatchorros.com.br",1429078227],["dausel.co",1429078227],["onle.co",1429078227],["beverfood.com",1429078227],["dexterclearance.com",1429078227],["hackinformer.com",1429078227],["how2electronics.com",1429078227],["smallseotools.com",1429078227],["univers-simu.com",1429078227],["stokerpiller.dk",1429078227],["calculator-online.net",1429078227],["financemonk.net",1429078227],["skmedix.pl",1429078227],["uol.com.br",464851866],["adz.bz",340624637],["citynews.ca",1255304847],["trueachievements.com",1255304847],["truesteamachievements.com",1255304847],["truetrophies.com",1255304847],["camclips.cc",450672920],["filezip.cc",1825224868],["pornkino.cc",1524218783],["youwatchporn.com",1524218783],["pandamovies.me",1524218783],["watchfreexxx.net",1524218783],["xxxscenes.net",1524218783],["blick.ch",1310669752],["tui.click",1605673727],["cut-fly.com",1605673727],["foxseotools.com",1605673727],["link.bitmos.co.in",1605673727],["earnme.club",187768944],["usanewstoday.club",187768944],["jrlinks.in",187768944],["givee.club",1645563334],["mcrypto.club",[441010970,559245193,1280109526]],["veganab.co",441010970],["veganac.co",441010970],["veganal.co",441010970],["veganho.co",441010970],["apkmaven.com",[441010970,1046103763]],["blog-forall.com",441010970],["cgchotbox.com",441010970],["coinsearns.com",[441010970,1280109526]],["gaminplay.com",441010970],["gifans.com",441010970],["googledrivelinks.com",441010970],["inbbotlist.com",441010970],["informaxonline.com",441010970],["iptvjournal.com",441010970],["nawahi1.com",441010970],["tudaydeals.com",441010970],["ufacw.com",441010970],["allnewshubs.in",441010970],["cryptoblog24.info",441010970],["7apple.net",441010970],["allcryptoz.net",441010970],["crewbase.net",441010970],["crewus.net",441010970],["shinbhu.net",441010970],["shinchu.net",441010970],["thumb8.net",441010970],["thumb9.net",441010970],["toolss.net",441010970],["topcryptoz.net",441010970],["ultraten.net",441010970],["uniqueten.net",441010970],["1apple.xyz",441010970],["choiceappstore.xyz",441010970],["audiencepool.com",[559245193,2016203468]],["model-tas-terbaru.com",559245193],["techysnap.com",[559245193,1297841070,2016203468]],["therootdroid.com",559245193],["blognews.in",559245193],["moddingzone.in",559245193],["rajsayt.xyz",559245193],["worldappsstore.xyz",559245193],["pkpics.club",745659814],["mynewsmedia.co",[1332940481,1064861333]],["absolutesmmpanel.com",1332940481],["adomainscan.com",[1332940481,1064861333,738103710]],["menulisonline.com",[1332940481,1064861333]],["momozain.com",[1332940481,1064861333]],["myhiddentech.com",1332940481],["teknomuda.com",[1332940481,1064861333]],["thetechywizard.com",1332940481],["helow.id",[1332940481,1064861333]],["mynewspost.in",[1332940481,1064861333]],["motorantik.store",[1332940481,1064861333]],["amazingdarpon.com",1064861333],["babymodz.com",[1064861333,2131768669,1055174526]],["deezloaded.com",[1064861333,523773080]],["jardima.com",[1064861333,523773080]],["visflakes.com",[1064861333,523773080]],["apkandroidhub.in",[1064861333,2131768669,523773080]],["gamepure.in",[1064861333,523773080]],["warrenrahul.in",[1064861333,523773080]],["jaunpurmusic.info",[1064861333,523773080]],["theconomy.me",1064861333],["dulichkhanhhoa.net",[1064861333,523773080]],["isi7.net",1064861333],["mad.gplpalace.one",[1064861333,523773080]],["noithatmyphu.vn",[1064861333,523773080]],["insurance-space.xyz",1064861333],["modmakers.xyz",[1064861333,523773080]],["paidappstore.xyz",[1064861333,523773080]],["studyis.xyz",[1064861333,523773080]],["vsco.co",427109387],["xtremestream.co",2077873295],["1movietv.com",1450914920],["247sports.com",454306025],["360haven.com",2061126291],["4j.com",1149038717],["beautypackaging.com",1149038717],["bostonglobe.com",1149038717],["coatingsworld.com",1149038717],["contractpharma.com",1149038717],["happi.com",1149038717],["hindustantimes.com",1149038717],["ifenpaidy.com",1149038717],["mumbaimirror.indiatimes.com",1149038717],["inkworldmagazine.com",1149038717],["labelandnarrowweb.com",1149038717],["cinema.maalaimalar.com",1149038717],["mpo-mag.com",1149038717],["nutraceuticalsworld.com",1149038717],["odtmag.com",1149038717],["printedelectronicsnow.com",1149038717],["publish0x.com",1149038717],["sna3talaflam.com",1149038717],["walletinvestor.com",1149038717],["primeos.in",1149038717],["leechpremium.link",1149038717],["bccondos.net",1149038717],["advertiserandtimes.co.uk",1149038717],["5ggyan.com",[796643855,1621916442]],["apps2app.com",[796643855,361153839]],["9gag.com",643417836],["ac-illust.com",984412998],["photo-ac.com",984412998],["addictinggames.com",1818203839],["aemenstore.com",116393206],["aloass.com",116393206],["alobyt.com",116393206],["alocd.com",116393206],["alogum.com",116393206],["aloguy.com",116393206],["alohdd.com",116393206],["anhdep24.com",116393206],["byboe.com",116393206],["cazzette.com",116393206],["dreamcheeky.com",116393206],["fidlarmusic.com",116393206],["hookeaudio.com",116393206],["jncojeans.com",116393206],["kiemlua.com",116393206],["kingsleynyc.com",116393206],["lucidcam.com",116393206],["nousdecor.com",116393206],["pennbookcenter.com",116393206],["publicananker.com",116393206],["restorbio.com",116393206],["rezence.com",116393206],["rodjulian.com",116393206],["staaker.com",116393206],["thegoneapp.com",116393206],["truebrandy.com",116393206],["uebnews.online",116393206],["afreesms.com",681072440],["aidersonprochain.com",2023923707],["albertsons.com",822053562],["alibaba.com",483364997],["alliptvlinks.com",1297841070],["beermoneyforum.com",[1297841070,415006136]],["yusepjaelani.blogspot.com",1297841070],["greensboro.com",1297841070],["investing.com",1297841070],["ndtv.com",1297841070],["photobucket.com",1297841070],["web2.0rechner.de",1297841070],["alrincon.com",1894773268],["amateurs-fuck.com",359159948],["sex-amateur-clips.com",359159948],["sexmadeathome.com",359159948],["comicxxx.eu",359159948],["animenewsnetwork.com",228341297],["animenhentai.com",406539977],["aol.com",824025694],["apkcombo.com",1238525948],["winaero.com",1238525948],["tricksplit.io",[1238525948,32438442]],["dl.apkmb.com",1125034168],["apkmirror.com",261977980],["appvn.com",234144780],["ashemaletube.com",1383929201],["askpaccosi.com",1449637283],["coin-free.com",1449637283],["crypto4tun.com",1449637283],["kienthucrangmieng.com",1449637283],["autoblog.com",624763999],["autotrader.com",1047158485],["avgle.com",1786247960],["azaleasdolls.com",471299883],["baketax.com",457895867],["play.possiblewithelementor.com",457895867],["bbc.com",1647595357],["beckershospitalreview.com",221495381],["beegsexxx.com",708485230],["bhaskar.com",969375094],["divyabhaskar.co.in",969375094],["adultgamestop.bigtopsites.com",1234215622],["bing.com",570716973],["bleachernation.com",1887918345],["bleepingcomputer.com",1340951204],["blindhypnosis.com",171289225],["bloggingguidance.com",1879332841],["onroid.com",1879332841],["akuu-sflin.blogspot.com",1528665931],["blogupdated.com",791608050],["boobgirlz.com",2030105662],["br0wsers.com",1307218752],["buondua.com",481348816],["carbuzz.com",2053938351],["cargurus.com",1425173000],["cbssports.com",1492456664],["ccn.com",311708034],["cheaptickets.com",2000374634],["ebookers.com",2000374634],["expedia.com",2000374634],["hotels.com",2000374634],["orbitz.com",2000374634],["travelocity.com",2000374634],["wotif.com",2000374634],["chess.com",1215913446],["claimfey.com",32842187],["classicreload.com",1044037678],["cleantechnica.com",819037146],["clubsarajay.com",1498743232],["cluset.com",153421342],["cnnamador.com",1818235293],["codingnepalweb.com",32438442],["duplichecker.com",[32438442,1102060461]],["comidoc.net",32438442],["freevpn4you.net",32438442],["coinsparty.com",1660758903],["gir.ist",1660758903],["comicbook.com",1077483376],["compucalitv.com",1270745836],["crackllc.com",1270745836],["designmodo.com",1270745836],["10news.dk",1270745836],["megawarez.org",1270745836],["cookpad.com",34645188],["downphanmem.com",34645188],["expertvn.com",34645188],["urbanmilwaukee.com",34645188],["phica.net",34645188],["downfile.site",34645188],["cricbeamer.com",1659749646],["crocotube.com",1393550596],["cults3d.com",1302548066],["customercareal.com",1146305235],["cutpopads.com",1396713638],["sohexo.org",1396713638],["za.uy",1396713638],["adnit.xyz",1396713638],["cyberstumble.com",447625992],["dads-banging-teens.com",122408325],["home-xxx-videos.com",122408325],["mature-chicks.com",122408325],["teens-fucking-matures.com",122408325],["daemon-hentai.com",517999712],["redirect.dafontvn.com",69460730],["dailydot.com",1281317601],["dailynewstoknow.com",959564621],["darknessporn.com",2077279309],["familyporner.com",2077279309],["pisshamster.com",2077279309],["xanimu.com",2077279309],["eschenker.dbschenker.com",1552557441],["getintoway.com",523773080],["cinemakottaga.top",523773080],["go.insurance-space.xyz",523773080],["dekki.com",923965932],["desktopnexus.com",980916179],["digg.com",1827577204],["digilibraries.com",259211844],["torrentdownloads.dirproxy.com",1780073128],["discovermagazine.com",[2064875116,925872960]],["lesechos.fr",2064875116],["distrowatch.com",172279244],["dogemate.com",1352858109],["doordash.com",1748699484],["dotadostube.com",982735372],["hotxfans.com",982735372],["momxxxfun.com",982735372],["xtubetop.com",982735372],["downace.com",1117659441],["drphil.com",987921389],["drstevenlin.com",1987443613],["romaniataramea.com",1987443613],["straatosphere.com",1987443613],["discussingfilm.net",1987443613],["m.drtuber.com",963978141],["dubznetwork.com",564763048],["m.economictimes.com",[203282269,816476460]],["indiatimes.com",816476460],["elamigos-games.com",1611509190],["safe.elektroupdate.com",1198325999],["gameguardian.net",1198325999],["elitepvpers.com",1349392306],["elquintobeatle.com",773249647],["engadget.com",2019104985],["enterinit.com",592342816],["erofus.com",1917645506],["etsy.com",1256734848],["facebook.com",[88876745,1101660101]],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",88876745]]);

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
