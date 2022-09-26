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

const argsMap = new Map([[888206545,{"a":[{"selector":"._6y8t","tasks":[["has",{"selector":"a[href=\"/ads/about/?entry_product=ad_preferences\"]"}]]}]}],[1260978794,{"a":[{"selector":".inside-list-boxes","tasks":[["upward",1]]}]}],[307583983,{"a":[{"selector":"#bodyContent","action":["style","width:100% !important"],"cssable":true}]}],[1242055389,{"a":[{"selector":"ins.adsbygoogle, iframe[id^=\"aswift_\"]","action":["style","opacity:0 !important; pointer-events: none !important;"],"cssable":true}]}],[189684445,{"a":[{"selector":".title-section","tasks":[["has-text",["adv","i"]]]}]}],[461124964,{"a":[{"selector":"div[class*=\" hidden-\"]","tasks":[["has",{"selector":".adsbygoogle"}]]}]}],[155858113,{"a":[{"selector":".advertising","tasks":[["upward",2]]}]}],[1951295857,{"a":[{"selector":"span","tasks":[["has-text","^Ad$"],["upward","div[style]"]]}]}],[229924263,{"a":[{"selector":"main > div > div > div[class]","tasks":[["matches-css",{"name":"width","value":"^350px$"}]]}]}],[952055245,{"a":[{"selector":"table.cajasnews > tbody > tr > td > table > tbody > tr > td > a[rel=\"undefined\"]","tasks":[["has-text","Promos"],["upward",2]]}]}],[1765049941,{"a":[{"selector":"[id*=\"adslot\"]","tasks":[["upward","ul > li"]]}]}],[1067829057,{"a":[{"selector":".homepage","tasks":[["has",{"selector":" > div[id^=\"InStream\"]"}]]}]}],[862134473,{"a":[{"selector":".post_simple","tasks":[["has",{"selector":".postsimple_pseudo","tasks":[["has-text",["promo","i"]]]}]]}]}],[344579305,{"a":[{"selector":"#main","action":["style","right: 0 !important;"],"cssable":true}]}],[494105452,{"a":[{"selector":".uppercase","tasks":[["has-text",["advertisement","i"]]]}]}],[64488173,{"a":[{"selector":"[style]","tasks":[["has-text","Advertisement"]]}]}],[1526634913,{"a":[{"selector":"a.download","action":["style","visibility: hidden;"],"cssable":true}]}],[1832320461,{"a":[{"selector":"div[class][id]:not(.logo)","tasks":[["if-not","*"],["has-text","^$"]]}]}],[2129756845,{"a":[{"selector":".partner-banner","tasks":[["upward","div[style]"]]}]}],[676807950,{"a":[{"selector":".thumb-list > .video-thumb","action":["style","margin-right: 0px !important;"],"cssable":true}]}],[148245671,{"a":[{"selector":".spot-thumbs > .right","action":["style","height:1px !important"],"cssable":true}]}],[1888783917,{"a":[{"selector":"iframe[src^=\"/external/\"]","tasks":[["upward",1]]}]}],[303657114,{"a":[{"selector":"","tasks":[["matches-path","\\/posts"],["spath"," div[data-comment*=\"gab-ad\"]"],["has",{"selector":"span[class]","tasks":[["has-text","Sponsored"]]}]]},{"selector":"div[class] > span[class]","tasks":[["has-text","Sponsored"],["upward",5]]}]}],[898440621,{"a":[{"selector":".item > a[href] > img[src*=\"//cdn.69games.xxx/\"]","tasks":[["upward",".item"]]}]}],[1424465329,{"a":[{"selector":".warningbox","tasks":[["upward",1]]}]}],[350847237,{"a":[{"selector":"#bodyContent","action":["style","width:100%!important"],"cssable":true}]}],[1077041248,{"a":[{"selector":".col-sm-4","tasks":[["has-text","Advertisement"]]},{"selector":"div","tasks":[["has",{"selector":" > div:has( > .adsbygoogle)"}]]},{"selector":"div.border_radius","tasks":[["has-text","Advertisement"]]},{"selector":"embed","action":["style","display:inherit!important"],"cssable":true}]}],[1733502722,{"a":[{"selector":"#ava-game_container","action":["style","display:inherit!important"],"cssable":true},{"selector":"#wrapped-content","action":["style","display:inherit!important"],"cssable":true}]}],[1163334103,{"a":[{"selector":".mobile-leaderboard-320-50","tasks":[["upward","[style]"]]}]}],[1309421186,{"a":[{"selector":"#yuidea-generate, #yuidea-snp","action":["style","display: block !important;"],"cssable":true}]}],[579875879,{"a":[{"selector":"#yuidea-snp","tasks":[["others",""]]},{"selector":".g-recaptcha, iframe[src*=\"google.com/recaptcha\"], #yuidea-btn-before, #yuidea-btn-after","tasks":[["others",""]]}]}],[501878296,{"a":[{"selector":"div[class^=\"TopContentdesktop__PromoContainer-\"]","tasks":[["upward",1]]}]}],[548032563,{"a":[{"selector":".leftMenu .menuHeadline","tasks":[["has-text","3D"]]}]}],[1273242699,{"a":[{"selector":".artSideWrapBox","tasks":[["has-text","Advertisement"]]}]}],[283236701,{"a":[{"selector":"[src^=\"https://spotlights-feed.github.com/spotlights/octoprint/\"]","tasks":[["upward","article[class]"]]}]}],[2099876201,{"a":[{"selector":".download-btn-group","action":["style","display: inline-flex !important;"],"cssable":true}]}],[1694606650,{"a":[{"selector":".golin-adlabel","tasks":[["upward","[class^=\"golin-content\"]"]]}]}],[1355678344,{"a":[{"selector":".content2","tasks":[["has",{"selector":"div[id^=\"div-gpt-ad\"]"}]]},{"selector":".moduletable","tasks":[["has",{"selector":"div[id^=\"div-gpt-ad\"]"}]]}]}],[1403581685,{"a":[{"selector":"#verify_button","action":["style","display: block !important;"],"cssable":true},{"selector":"#verify_button","tasks":[["upward",1],["spath"," ~ #primary, #secondary"]]}]}],[391029328,{"a":[{"selector":"#spot_livecams_menu","tasks":[["upward",".holder"]]}]}],[1674627399,{"a":[{"selector":"[class*=\"css\"]","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"ADVERTISEMENT"}]]},{"selector":"[href*=\"redirect\"]","tasks":[["upward","section"]]},{"selector":"aside","tasks":[["has",{"selector":"div","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"ADVERTISEMENT"}]]}]]},{"selector":"div[data-empty^=\"true\"]","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"ADVERTISEMENT"}]]}]}],[1439111239,{"a":[{"selector":"[src^=\"//\"]","tasks":[["upward","[target=\"_blank\"]"]]}]}],[1982095242,{"a":[{"selector":".ad","tasks":[["upward",".horizontal-ads-content"]]}]}],[1552840178,{"a":[{"selector":"#header","action":["style","position: inherit !important;"],"cssable":true}]}],[576832389,{"a":[{"selector":".onp-sl-content","action":["style","display:block !important"],"cssable":true}]}],[949315053,{"a":[{"selector":".advertiser","action":["style","position:absolute !important; left:-3000px !important; display:block !important"],"cssable":true}]}],[1792768857,{"a":[{"selector":".title","tasks":[["has-text","^Ads$"],["upward",1]]}]}],[1155843697,{"a":[{"selector":"div[class]","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"Advertisements"}]]}]}],[1404344367,{"a":[{"selector":".uk-panel.widget-text","action":["style","height: 0px !important; visibility: collapse;"],"cssable":true}]}],[964107396,{"a":[{"selector":".preShell","action":["style","height: 0 !important;"],"cssable":true}]}],[1055799604,{"a":[{"selector":".no-scroll","action":["style","overflow:auto!important"],"cssable":true}]}],[1514944843,{"a":[{"selector":"body#styleguide-v2","action":["style","background-color: #e3e2dd !important; background-image: none !important;"],"cssable":true}]}],[1561422196,{"a":[{"selector":"#image_details","action":["style","margin-top: 30px !important"],"cssable":true}]}],[1336981175,{"a":[{"selector":".Post-item--interactions","tasks":[["upward",1]]},{"selector":".Post-item-external-ad","tasks":[["upward","div[style]"]]},{"selector":"a.Post-item","tasks":[["has",{"selector":"div.Post-item-external-ad"}]]}]}],[1300495271,{"a":[{"selector":"h2","tasks":[["has-text","Promoted"],["spath"," + div"]]}]}],[1330405879,{"a":[{"selector":".active > ul > li","tasks":[["has-text","Ad:"]]},{"selector":"div h2","tasks":[["has",{"selector":"span","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"Sponsored"}]]}],["spath"," + div"]]},{"selector":"div h2","tasks":[["has",{"selector":"span","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"Sponsored"}]]}]]}]}],[1935518566,{"a":[{"selector":"#container","action":["style","opacity: 1 !important;"],"cssable":true}]}],[1439462547,{"a":[{"selector":".esi_container","tasks":[["has",{"selector":"[onclick] P","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"Ad"}]]}]]}]}],[1149445006,{"a":[{"selector":".g1-advertisement-inside-grid","tasks":[["upward","li"]]}]}],[1393495899,{"a":[{"selector":"#wpsafe-generate, #wpsafe-link","tasks":[["others",""]]}]}],[2136451156,{"a":[{"selector":".in-post-sticky > .ad-wrapper","tasks":[["upward",1]]}]}],[1779842161,{"a":[{"selector":"div[style=\"max-height: inherit; max-width: inherit; display: none !important;\"]","tasks":[["has",{"selector":"span","tasks":[["has-text","Paid partnership with "]]}]]},{"selector":"div[style=\"max-height: inherit; max-width: inherit; display: none !important;\"]","tasks":[["has",{"selector":"span","tasks":[["has-text","Paid partnership"]]}]]},{"selector":"div[style=\"max-height: inherit; max-width: inherit;\"]","tasks":[["has",{"selector":"span","tasks":[["has-text","Paid partnership with "]]}]]},{"selector":"main > div > section div[style*=\"flex-direction: column;\"] > article > div","action":["style","visibility: hidden !important;"],"tasks":[["has",{"selector":"span","tasks":[["has-text","Sponsored"]]}]]},{"selector":"main > div > section div[style*=\"flex-direction: column;\"] > article > div","tasks":[["has",{"selector":"span","tasks":[["has-text","Sponsored"]]}]]}]}],[1049963682,{"a":[{"selector":".flowplayer.is-cva .fp-controls","action":["style","display: flex !important"],"cssable":true},{"selector":".flowplayer.is-cva .fp-fullscreen","action":["style","display: flex !important"],"cssable":true}]}],[2025480579,{"a":[{"selector":"#capbtn, #gtbtn2","action":["style","display: block !important"],"cssable":true}]}],[513926055,{"a":[{"selector":".logo, .blinker","action":["style","animation: none !important;"],"cssable":true}]}],[1741511965,{"a":[{"selector":".adstrick > .video-item","action":["style","clear: none !important;"],"cssable":true}]}],[271453720,{"a":[{"selector":"#wrapfabtest","action":["style","height:1px !important;width:1px !important"],"cssable":true}]}],[154248708,{"a":[{"selector":".text-center > div.koukoku_1","tasks":[["upward",1]]}]}],[269520341,{"a":[{"selector":".videos-ad__wrap","action":["style","background-color: transparent !important"],"cssable":true}]}],[230494879,{"a":[{"selector":"iframe[src^=\"//a.o333o.com\"]","tasks":[["upward","li.thumb"]]}]}],[257754075,{"a":[{"selector":".video-block-happy","tasks":[["upward",".order-1"]]}]}],[1432956504,{"a":[{"selector":"#embed","action":["style","position: static!important; margin-top: 0!important;"],"cssable":true}]}],[1286656932,{"a":[{"selector":".video-image > .track_outbound_post","tasks":[["upward",2]]}]}],[934067658,{"a":[{"selector":"#blockblockB","action":["style","visibility: visible !important; display: block !important;"],"cssable":true}]}],[653022351,{"a":[{"selector":".inner-arrow","tasks":[["has-text","#AD"]]},{"selector":"span","tasks":[["has-text","AD$"]]}]}],[1889907038,{"a":[{"selector":".queue","tasks":[["has",{"selector":".sponsored"}]]}]}],[121073856,{"a":[{"selector":".adunitContainer","tasks":[["upward","[data-qa-id]"]]}]}],[2033583080,{"a":[{"selector":".th > span.th-ad","tasks":[["upward",1]]}]}],[987270233,{"a":[{"selector":".site-margin > .container-block .item.widget_text","tasks":[["upward",1]]}]}],[712063093,{"a":[{"selector":"[data-ref=\"saashub\"]","tasks":[["upward","div.feed-item"]]}]}],[1823357621,{"a":[{"selector":"style","action":["remove",""],"tasks":[["has-text","@media.*ad"]]}]}],[1284757086,{"a":[{"selector":".feed-shared-update","tasks":[["has-text","Promoted"]]},{"selector":".feed-shared-update-v2","tasks":[["has",{"selector":".feed-shared-actor__description","tasks":[["has-text","Anzeige|Sponsored|Promoted|Dipromosikan|Propagováno|Promoveret|Gesponsert|Promocionado|促銷內容|Post sponsorisé|프로모션|Post sponsorizzato|广告|プロモーション|Treść promowana|Patrocinado|Promovat|Продвигается|Marknadsfört|Nai-promote|ได้รับการโปรโมท|Öne çıkarılan içerik|Gepromoot|الترويج"]]}]]},{"selector":".feed-shared-update-v2","tasks":[["has",{"selector":".feed-shared-actor__sub-description","tasks":[["has-text","Anzeige|Sponsored|Promoted|Dipromosikan|Propagováno|Promoveret|Gesponsert|Promocionado|促銷內容|Post sponsorisé|프로모션|Post sponsorizzato|广告|プロモーション|Treść promowana|Patrocinado|Promovat|Продвигается|Marknadsfört|Nai-promote|ได้รับการโปรโมท|Öne çıkarılan içerik|Gepromoot|الترويج"]]}]]}]}],[1466783737,{"a":[{"selector":"#originalLink","action":["style","display: block!important;"],"cssable":true}]}],[620055422,{"a":[{"selector":"div","tasks":[["has",{"selector":" > div > div.fbAdLink"}]]}]}],[1336833984,{"a":[{"selector":"pjsdiv[style=\"position: absolute; top: -7px; left: -111px; pointer-events: none; opacity: 1; transition: opacity 0.1s linear 0s, transform 0.1s linear 0s; color: rgb(255, 255, 255); font-size: 15px; font-family: Tahoma; letter-spacing: 0.5px; padding: 0px 3px; white-space: nowrap; font-weight: bold; transform: scale(1);\"]","tasks":[["upward",1]]}]}],[837024445,{"a":[{"selector":"a[href^=\"https://mini.m-able.app/@mini/loawa?tracking_template\"]","action":["remove",""]}]}],[983693768,{"a":[{"selector":"p[style=\"font-size:12px; text-align:center;\"] > span","tasks":[["has-text","Advertisement"]]},{"selector":"section.wix-blog-hide-in-print p[style=\"font-size:12px; text-align:center;\"] > span","tasks":[["has-text","Advertisement"],["upward","section"]]}]}],[482015864,{"a":[{"selector":".amp-animate","action":["remove",""]},{"selector":".publi_luto_horizontal","action":["style","max-height: 1px !important;"],"cssable":true},{"selector":"div[id^=\"google_ads_iframe_\"]","action":["style","max-height: 1px !important;"],"cssable":true},{"selector":"iframe[id^=\"google_ads_iframe\"]","action":["style","max-height: 1px !important;"],"cssable":true}]}],[1604711591,{"a":[{"selector":".mod-container","tasks":[["has-text",["sponsor","i"]]]}]}],[1681436333,{"a":[{"selector":"#scroll.hidden, .footerLink.hidden","action":["style","display: block!important"],"cssable":true}]}],[2099230642,{"a":[{"selector":".flex-1 > .adsbyexoclick","tasks":[["upward",1]]}]}],[2089707876,{"a":[{"selector":".ad-vertical","tasks":[["upward",1]]}]}],[438471724,{"a":[{"selector":"html, body","action":["style","overflow: auto !important;"],"cssable":true}]}],[22805222,{"a":[{"selector":"iframe","tasks":[["upward",2]]}]}],[668901292,{"a":[{"selector":"div[class^=\"css-\"]","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"ADVERTISEMENT"}]]},{"selector":"div[id=\"__next\"] > div[class^=\"css-\"] > aside","tasks":[["has",{"selector":" > div","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"ADVERTISEMENT"}]]}]]},{"selector":"div[id=\"__next\"] > div[class^=\"css-\"] > div > section > div","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":"ADVERTISEMENT"}]]}]}],[333889364,{"a":[{"selector":".box-main > .box > .banner-captcha","tasks":[["upward",1]]}]}],[168706095,{"a":[{"selector":"h4","tasks":[["has-text","VPN"]]}]}],[64776457,{"a":[{"selector":"#content.sidebar2","action":["style","margin-right: 0 !important;"],"cssable":true}]}],[167906555,{"a":[{"selector":"#videoad","action":["style","position:absolute !important;left:-3000px !important"],"cssable":true},{"selector":".attribution","tasks":[["has-text","ᴬᵈ"]]}]}],[98663283,{"a":[{"selector":"#go_d","action":["style","display: inline-block !important"],"cssable":true},{"selector":"a#go_d.submitBtn","tasks":[["others",""]]}]}],[1656426387,{"a":[{"selector":"#wpsafe-link","action":["style","display: block !important"],"cssable":true}]}],[257575124,{"a":[{"selector":"iframe","tasks":[["upward","[style*=\"visibility\"]"]]}]}],[261301841,{"a":[{"selector":"div[style^=\"background-color:\"]","tasks":[["has-text","Advertisement"]]}]}],[157120127,{"a":[{"selector":".headline.wrapper","tasks":[["has-text","Advertisement"],["spath"," + div"]]},{"selector":".headline.wrapper","tasks":[["has-text","Advertisement"]]},{"selector":".video-info > section","tasks":[["has-text","Adv"]]},{"selector":"article > .headline","tasks":[["has-text","Suggested"],["spath"," + section"]]},{"selector":"article > .headline","tasks":[["has-text","Suggested"]]}]}],[1410056199,{"a":[{"selector":"[class=\"nativead\"]","tasks":[["upward",1]]},{"selector":"[data-aop=\"stripe.sponsored.navigation_stripenavigation\"]","tasks":[["upward",2]]},{"selector":"[data-aop=\"stripe.store.navigation_stripenavigation\"]","tasks":[["upward",2]]},{"selector":"div[class^=\"displayAds\"]","tasks":[["upward",1]]}]}],[377136489,{"a":[{"selector":"[class^=\"nativeAd-\"]","tasks":[["upward",1]]}]}],[85095562,{"a":[{"selector":"a[href^=\"/visual/\"]","tasks":[["upward",".menu > div[id]"]]},{"selector":"div","tasks":[["matches-css-after",{"name":"content","pseudo":"after","value":"Ads"}]]},{"selector":"div[id*=\"myabandonware_leaderboard_btf_\"]","tasks":[["upward","div[id]"]]},{"selector":"div[id*=\"myabandonware_medrec_right_\"]","tasks":[["upward","div[id]"]]}]}],[253290323,{"a":[{"selector":".mdl-gpt-tag","tasks":[["upward","div[class]"]]}]}],[762804010,{"a":[{"selector":".posts > div.posts","tasks":[["has",{"selector":".adsbygoogle"}]]}]}],[436230688,{"a":[{"selector":"div[class^=\"span\"] > div.box","tasks":[["has",{"selector":" > .title > div","tasks":[["has-text","Advertisement"]]}]]}]}],[208408590,{"a":[{"selector":".banner","tasks":[["upward",".block"]]}]}],[660614388,{"a":[{"selector":".FrameBackgroundFull--grey","tasks":[["has",{"selector":".ad-wrapper"}]]}]}],[1356660425,{"a":[{"selector":".most-popular__post","tasks":[["has",{"selector":".most-popular__presented_by"}]]}]}],[1289619407,{"a":[{"selector":"#ins_videodetail","action":["style","display: block !important;"],"cssable":true}]}],[1020261284,{"a":[{"selector":"#jeocontainer > span","tasks":[["has-text","Promoted"]]}]}],[1887476428,{"a":[{"selector":".adblockerContent","action":["style","display: initial !important;"],"cssable":true}]}],[1892974991,{"a":[{"selector":"a[onclick][target]","tasks":[["upward",2]]}]}],[601612255,{"a":[{"selector":".viewtable","tasks":[["has",{"selector":" > center","tasks":[["has-text","▼ Scroll down to Continue ▼"]]}],["spath"," > a[href][target=\"_blank\"]"]]}]}],[2094076284,{"a":[{"selector":".toolinfo","tasks":[["has",{"selector":"a[href$=\"/reimage\"]"}]]},{"selector":"h4","tasks":[["has",{"selector":"a[href$=\"/reimage\"]"}]]}]}],[1217754605,{"a":[{"selector":"#wrapper","action":["style","padding-top: 0 !important;"],"cssable":true},{"selector":".advert","action":["style","z-index: -999999 !important;"],"cssable":true}]}],[1935755987,{"a":[{"selector":"#gameEtTopRight.commonEt","action":["style","height: 0 !important;"],"cssable":true},{"selector":"#gamelistCategories","action":["style","margin-bottom: auto !important;"],"cssable":true}]}],[1589771977,{"a":[{"selector":"img[src$=\"/knewz_300x250.png\"]","tasks":[["upward",".widget_text"]]}]}],[663789133,{"a":[{"selector":"#app > div > div > div[data-testid=\"StandardAd\"]","tasks":[["upward",1]]},{"selector":"article.story","action":["style","opacity: 1.0 !important;"],"cssable":true},{"selector":"section[aria-labelledby=\"new-york-section\"] > div > div[class^=\"css\"] > #pp_morein-wrapper","tasks":[["upward",1]]}]}],[377615012,{"a":[{"selector":".nytc---modal-window---isShown","tasks":[["not",{"selector":"","tasks":[["has",{"selector":".nytc---largepicturemodal---contentBody > .nytc---x---x.nytc---largepicturemodal---xBtn[role=\"button\"], .nytc---grocerylistmodal---groceryListContentContainer"}]]}]]},{"selector":"body","action":["style","height: auto !important; overflow: auto !important"],"cssable":true},{"selector":"html","action":["style","height: auto !important; overflow: auto !important"],"cssable":true}]}],[1724404756,{"a":[{"selector":"strong","tasks":[["has-text","PAID CONTENT"]]}]}],[1734420594,{"a":[{"selector":"#yuidea-snp","action":["style","display:block !important"],"cssable":true}]}],[521905346,{"a":[{"selector":"iframe","tasks":[["upward",".thumb"]]}]}],[811731542,{"a":[{"selector":".countdown, .get-link","tasks":[["others",""]]}]}],[1919204812,{"a":[{"selector":".banotset","tasks":[["upward",3]]}]}],[793053388,{"a":[{"selector":"#adter","tasks":[["upward",3]]},{"selector":".single-entry-titles","tasks":[["has-text","Sponsor"]]}]}],[773244472,{"a":[{"selector":"center > font[size=\"3\"][face=\"ARIAL\"]","tasks":[["has-text","ADVERTISING"],["upward","td"]]}]}],[463352140,{"a":[{"selector":"div[style]:not([class]):not([id]) > .adsbyvli:first-child","tasks":[["upward",1]]}]}],[891114542,{"a":[{"selector":".listingResult > div.sponsored-post","tasks":[["upward",1]]}]}],[1992579844,{"a":[{"selector":"header","action":["style","top:0 !important"],"cssable":true}]}],[420268219,{"a":[{"selector":"#adkit_billboard","action":["style","padding-top: 0px!important;"],"cssable":true}]}],[546251240,{"a":[{"selector":".adsbox","action":["remove",""]}]}],[94470630,{"a":[{"selector":".AdInventory__overlay","tasks":[["upward",4]]}]}],[1027821275,{"a":[{"selector":"body.swal2-shown > [aria-hidden=\"true\"]","action":["style","filter: none !important"],"cssable":true}]}],[827851526,{"a":[{"selector":".wcfAdLocation","tasks":[["upward","li"]]}]}],[1363632264,{"a":[{"selector":"#googletop","action":["remove",""]}]}],[2055756039,{"a":[{"selector":"div#over","action":["remove",""]}]}],[1820576422,{"a":[{"selector":".adsbygoogle","action":["style","height: 1px !important; width: 1px !important;"],"cssable":true}]}],[202515838,{"a":[{"selector":"h1","tasks":[["has-text","Ads"]]}]}],[670404871,{"a":[{"selector":"#Page","action":["style","right: 0px !important;"],"cssable":true}]}],[48394710,{"a":[{"selector":"div[style=\"height: 250px; width: 300px;\"]","tasks":[["upward",2]]},{"selector":"div[style=\"height: 600px; width: 160px;\"]","tasks":[["upward",2]]},{"selector":"div[style=\"height: 90px; width: 728px;\"]","tasks":[["upward",2]]}]}],[914742499,{"a":[{"selector":".owl-carousel","tasks":[["has",{"selector":".carousel-ad"}]]}]}],[2029931245,{"a":[{"selector":"#videoitems.videoitems > .onevideothumb > .clip-link > img[src^=\"/uploads/\"][src$=\"gif\"]","tasks":[["upward",".onevideothumb"]]},{"selector":"[src*=\".gif\"]","tasks":[["upward","[target=\"_blank\"]"]]}]}],[1590557336,{"a":[{"selector":"a[href=\"javascript:void(0);\"]","tasks":[["upward",".contentbox"]]},{"selector":"iframe[src^=\"//\"]","tasks":[["upward",".contentbox"]]}]}],[1640023410,{"a":[{"selector":"[href^=\"https://www.handy-sextreffen.info/\"]","tasks":[["upward",".grid_box"]]}]}]]);

const hostnamesMap = new Map([["facebook.com",888206545],["facebookcorewwwi.onion",888206545],["familyporner.com",1260978794],["fandom.com",307583983],["ff14angler.com",1242055389],["filmytoday.com",189684445],["webtools.fineaty.com",461124964],["flashingjungle.com",155858113],["flipkart.com",1951295857],["foreca.com",229924263],["forocoches.com",952055245],["m.forocoches.com",1765049941],["fortune.com",1067829057],["forumconstruire.com",862134473],["h5.fotor.com",344579305],["freebeacon.com",494105452],["freecourseslab.com",64488173],["freecoursessites.com",64488173],["freetutorialseu.com",64488173],["ftuforums.com",64488173],["freeroms.com",1526634913],["freethesaurus.com",1832320461],["thefreedictionary.com",1832320461],["fucktube4k.com",2129756845],["fullxh.com",676807950],["megaxh.com",676807950],["unlockxh4.com",676807950],["xhamster46.com",676807950],["xhday.com",676807950],["xhday1.com",676807950],["xhplanet1.com",676807950],["xhplanet2.com",676807950],["xhtab2.com",676807950],["xhwebsite.com",676807950],["xhwide1.com",676807950],["fuqer.com",148245671],["fux.com",1888783917],["pornerbros.com",1888783917],["porntube.com",1888783917],["gab.com",303657114],["gamcore.com",898440621],["classic.gamcore.com",1424465329],["gamepedia.com",350847237],["games2rule.com",1077041248],["wowescape.com",1077041248],["games4king.com",1733502722],["gamesradar.com",1163334103],["techradar.com",1163334103],["tomsguide.com",1163334103],["tomshardware.com",1163334103],["whathifi.com",1163334103],["gaminplay.com",[1309421186,579875879]],["themorningtribune.com",1309421186],["genius.com",501878296],["getsexgames.com",548032563],["ggrecon.com",1273242699],["github.com",283236701],["gocmod.com",2099876201],["golinuxcloud.com",1694606650],["guru99.com",1355678344],["hashhackers.com",1403581685],["newsongs.co.in",1403581685],["katdrive.net",1403581685],["hd21.com",391029328],["healthline.com",1674627399],["hentai2read.com",1439111239],["hentaicloud.com",1982095242],["hero-magazine.com",1552840178],["hitproversion.com",576832389],["homedecoratione.com",949315053],["homeworklib.com",1792768857],["hotcleaner.com",1155843697],["igg-games.com",1404344367],["ign.com",964107396],["ilbianconero.com",1055799604],["imdb.com",1514944843],["imgtaxi.com",1561422196],["imgur.com",1336981175],["indiatimes.com",1300495271],["economictimes.indiatimes.com",1330405879],["mumbaimirror.indiatimes.com",1935518566],["timesofindia.indiatimes.com",1439462547],["influencersgonewild.com",1149445006],["informaxonline.com",1393495899],["ufacw.com",1393495899],["insider.com",2136451156],["instagram.com",1779842161],["iseekgirls.com",1049963682],["itscybertech.com",2025480579],["itstillworks.com",513926055],["javbake.com",1741511965],["javdoge.com",1741511965],["javsexfree.com",1741511965],["javcensored.net",1741511965],["javuncensored.watch",1741511965],["javcl.com",271453720],["javfull.net",271453720],["javrank.com",154248708],["javynow.com",269520341],["jerkoffer.com",230494879],["justfullporn.com",257754075],["jzzo.com",1432956504],["kaotic.com",1286656932],["kertashitam.com",934067658],["kpopsea.com",653022351],["ksl.com",1889907038],["kumparan.com",121073856],["letmejerk.com",2033583080],["letmejerk3.com",2033583080],["letmejerk4.com",2033583080],["letmejerk5.com",2033583080],["letmejerk6.com",2033583080],["letmejerk7.com",2033583080],["lewdzone.com",987270233],["nodejs.libhunt.com",712063093],["lightnovelpub.com",1823357621],["linkedin.com",1284757086],["linksht.com",1466783737],["outlook.live.com",620055422],["liveschauen.com",1336833984],["loawa.com",837024445],["logikfx.com",983693768],["los40.com",482015864],["mail.com",1604711591],["makemoneywithurl.com",1681436333],["mangameta.com",2099230642],["marketrealist.com",2089707876],["masterduelmeta.com",438471724],["maturell.com",22805222],["mikesmatures.com",22805222],["nakedolders.com",22805222],["nudemilfwomen.com",22805222],["oldgirlsporn.com",22805222],["paulsmatures.com",22805222],["pornoplum.com",22805222],["vulgarmilf.com",22805222],["widewifes.com",22805222],["medicalnewstoday.com",668901292],["mfk-shorter.com",333889364],["mgnetu.com",168706095],["mind42.com",64776457],["miniwebtool.com",167906555],["mobi2c.com",98663283],["forex-gold.net",98663283],["world-trips.net",98663283],["newforex.online",98663283],["model-tas-terbaru.com",1656426387],["techrfour.com",1656426387],["techymozo.com",1656426387],["therootdroid.com",1656426387],["blognews.in",1656426387],["moddingzone.in",1656426387],["rajsayt.xyz",1656426387],["worldappsstore.xyz",1656426387],["movie.momo-net.com",257575124],["moonastro.com",261301841],["mrgay.com",157120127],["msn.com",1410056199],["microsoftnews.msn.com",377136489],["myabandonware.com",85095562],["mydramalist.com",253290323],["mylivewallpapers.com",762804010],["mylust.com",436230688],["nakedneighbour.com",208408590],["nationalgeographic.com",660614388],["nbcbayarea.com",1356660425],["nbcboston.com",1356660425],["nbcchicago.com",1356660425],["nbcconnecticut.com",1356660425],["nbcdfw.com",1356660425],["nbclosangeles.com",1356660425],["nbcmiami.com",1356660425],["nbcnewyork.com",1356660425],["nbcphiladelphia.com",1356660425],["nbcsandiego.com",1356660425],["nbcwashington.com",1356660425],["ndtv.com",1289619407],["food.ndtv.com",1020261284],["gadgets.ndtv.com",1887476428],["neogeo-system.com",1892974991],["ddaynormandy.forumgaming.fr",1892974991],["newsonthegotoday.com",601612255],["nex-software.com",2094076284],["nme.com",1217754605],["novelgames.com",1935755987],["nypost.com",1589771977],["nytimes.com",663789133],["nytimes3xbfgragh.onion",663789133],["cooking.nytimes.com",377615012],["onepagerules.com",1724404756],["onlinegamesx.com",1734420594],["onlylesbiantube.com",521905346],["blog.onroid.com",811731542],["oscobo.com",1919204812],["ovagames.com",793053388],["palcomix.com",773244472],["pastebin.com",463352140],["pcgamer.com",891114542],["pcgamesn.com",1992579844],["theloadout.com",1992579844],["pcmag.com",420268219],["peacocktv.com",546251240],["pholder.com",94470630],["photobucket.com",1027821275],["photovoltaikforum.com",827851526],["pikkado.com",1363632264],["playhydrax.com",2055756039],["hydrax.net",2055756039],["playok.com",1820576422],["playonlinux.com",202515838],["plotaroute.com",670404871],["poki.com",48394710],["pollunit.com",914742499],["porcore.com",2029931245],["porngames.com",1590557336],["pornojenny.com",1640023410]]);

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
