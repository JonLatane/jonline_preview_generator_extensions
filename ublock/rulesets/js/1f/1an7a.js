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

const argsMap = new Map([[1132051248,{"a":[{"selector":".wpsafe-top","action":["style","margin-top: 50px !important"],"cssable":true}]}],[2116770163,{"a":[{"selector":"#verifyAd, #flexContentAdFrame","action":["style","position:absolute !important; height:500px !important; display:block !important; left:-30000px !important"],"cssable":true}]}],[1787081917,{"a":[{"selector":".panel","tasks":[["has",{"selector":"h3","tasks":[["has-text","Sponsored Ad"]]}]]}]}],[369205386,{"a":[{"selector":"#wrapper-content","action":["style","margin-top:0px !important"],"cssable":true}]}],[355361310,{"a":[{"selector":".postbit","tasks":[["has",{"selector":"#adslot-showthread"}]]}]}],[1199552196,{"a":[{"selector":"#wtf","action":["style","visibility:visible!important;display:block!important;"],"cssable":true}]}],[1052967425,{"a":[{"selector":".panel-default.panel","tasks":[["not",{"selector":"","tasks":[["has-text","[a-zA-Z0-9]"]]}],["spath",":has(.link-image[src=\"\"])"]]}]}],[1351206879,{"a":[{"selector":".text-center.my-3","tasks":[["has",{"selector":"span","tasks":[["has-text","Advertisement"]]}]]}]}],[2128497479,{"a":[{"selector":".thleft","tasks":[["has-text","Fast"],["upward",2]]}]}],[2108312904,{"a":[{"selector":".desc","tasks":[["upward","[class*=\"adb\"]"]]}]}],[1245812347,{"a":[{"selector":"li.plate iframe[width=\"300\"]","tasks":[["upward",".plate"]]}]}],[2059232881,{"a":[{"selector":".widget_text","tasks":[["has-text","Adv"]]}]}],[1655650089,{"a":[{"selector":".adsbyvli","action":["style","height: 1px !important; opacity: 0 !important; pointer-events: none !important;"],"cssable":true}]}],[307182406,{"a":[{"selector":".adsbygoogle","action":["style","position: absolute !important; left: -4000px !important;"],"cssable":true}]}],[1611154320,{"a":[{"selector":".login-page","action":["style","-webkit-animation: none !important"],"cssable":true}]}],[1299165258,{"a":[{"selector":"","action":["remove",""],"tasks":[["matches-path","utm_medium=banner"],["spath"," html"]]}]}],[2124424934,{"a":[{"selector":"","action":["remove",""],"tasks":[["matches-path","utm_medium=referral"],["spath"," html"]]}]}],[2032707833,{"a":[{"selector":"html","action":["remove",""]}]}],[232330088,{"a":[{"selector":"a[class][href^=\"/\"][href$=\".php\"][target=\"_blank\"]","tasks":[["upward",1]]}]}],[488425743,{"a":[{"selector":".lista > tbody > tr","tasks":[["has-text",["v\\s{0,}p\\s{0,}n","i"]]]}]}],[1741084588,{"a":[{"selector":".active.dimmer.ui","tasks":[["has-text",["Wait|Skip","i"]]]}]}],[352445169,{"a":[{"selector":"body","action":["style","background: none !important; overflow: auto !important;"],"cssable":true}]}],[1392357848,{"a":[{"selector":"body","action":["style","background-image: none !important;"],"cssable":true}]}],[1890675590,{"a":[{"selector":"a[href^=\"https://www1.president.go.kr\"]","action":["style","pointer-events: none !important; user-select: none !important;"],"cssable":true},{"selector":"aside#genesis-sidebar-primary *","action":["style","pointer-events: none !important; background-color: transparent !important; color: transparent !important; user-select: none !important;"],"cssable":true}]}],[424028667,{"a":[{"selector":".container > div[class$=\"content\"] > div[class] > script","tasks":[["upward",1]]}]}],[2108087391,{"a":[{"selector":".MvnAbvsLowerThirdLogo","tasks":[["upward",1]]}]}],[362556811,{"a":[{"selector":".downloadareabig","tasks":[["has",{"selector":"[title^=\"An‌on‌ymous Download\"]"}]]},{"selector":"table:first-of-type","tasks":[["has-text","Sponsored Links"]]}]}],[370819767,{"a":[{"selector":"button.flleft.btn-lg.btn-warning.btn.skip","action":["style","display:block !important"],"cssable":true}]}],[719823845,{"a":[{"selector":"[id^=\"aswift\"]","action":["style","visibility: collapse !important;"],"cssable":true}]}],[79982328,{"a":[{"selector":"[id]","tasks":[["has-text","Provider"]]}]}],[1990911212,{"a":[{"selector":".MediaStep","action":["style","cursor: pointer !important;"],"cssable":true}]}],[1963085564,{"a":[{"selector":".butt","tasks":[["others",""]]}]}],[1160483663,{"a":[{"selector":"center","tasks":[["has-text","sponsored"]]}]}],[2141389268,{"a":[{"selector":"#adf-click","action":["style","cursor: default !important;"],"cssable":true},{"selector":"body::after","action":["style","content: ''; display: block; position: absolute; left: 0; top: 0; height: 100%; width: 100%; background-color: white;"],"cssable":true}]}],[38695913,{"a":[{"selector":"#download","action":["style","display: inline !important"],"cssable":true}]}],[184447806,{"a":[{"selector":"div[title=\"Click to Close the Ad\"]","tasks":[["upward",1]]}]}],[1217182482,{"a":[{"selector":"main > h2:nth-of-type(1)","tasks":[["has-text","Sponsored"]]}]}],[407832088,{"a":[{"selector":".hidden-xs.hidden-sm","tasks":[["has-text","Warning!‌ Download only with VPN\\.\\.\\."]]}]}],[1287798798,{"a":[{"selector":".safelink-recatpcha","action":["style","display: block !important;"],"tasks":[["upward",1]]},{"selector":"button[class^=\"btn-\"]","action":["style","display: block !important;"],"tasks":[["upward","form"]]},{"selector":"form > div[id]","action":["style","display: block !important;"],"cssable":true}]}],[1741184006,{"a":[{"selector":".adsbygoogle","action":["style","position:absolute !important;left:-3000px !important"],"cssable":true}]}],[637391974,{"a":[{"selector":".related_box:has(.adds)","action":["style","height: 1px !important;"],"cssable":true}]}],[1953639953,{"a":[{"selector":".adsbygoogle","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1815831296,{"a":[{"selector":".item > div[id^=\"ts_ad_native\"]","tasks":[["upward",1]]},{"selector":".item > iframe[src^=\"https://go.\"]","tasks":[["upward",1]]}]}],[2022045831,{"a":[{"selector":"button#downloadBtnClickOrignal","action":["style","display:block !important"],"cssable":true}]}],[1550697750,{"a":[{"selector":"[id^=\"aswift\"]","action":["style","display:none!important;"],"cssable":true},{"selector":"[target=\"_blank\"]","tasks":[["has-text","Download"]]}]}],[1294705828,{"a":[{"selector":".sag-ust","action":["style","height: 0px !important"],"cssable":true}]}],[1982367734,{"a":[{"selector":"a[href^=\"https://www.videoproc.com/\"]","tasks":[["upward",1]]}]}],[1188817783,{"a":[{"selector":"#right_col > div","tasks":[["has",{"selector":"p","tasks":[["has-text","Advertisement"]]}]]},{"selector":".moduleContent","tasks":[["has-text","Advertisement"]]}]}],[1699204485,{"a":[{"selector":".resp-prelinker","tasks":[["upward",1]]}]}],[1065062823,{"a":[{"selector":"#leftside .adsbyvli","tasks":[["upward","div[style$=\"height: 90px;\"]"]]},{"selector":".adsbyvli","tasks":[["upward","div[style$=\"width: 610px;\"]"]]}]}],[1008373456,{"a":[{"selector":"center","tasks":[["has-text","Advertisement"]]}]}],[1595963220,{"a":[{"selector":".button-checkbox","action":["style","opacity: 1 !important"],"cssable":true}]}],[948664992,{"a":[{"selector":".widget-title","tasks":[["has-text","Adv"]]}]}],[1520880922,{"a":[{"selector":".metaRedirectWrapperBottomAds > div","action":["style","opacity: 0 !important; pointer-events: none !important;"],"cssable":true}]}],[582327022,{"a":[{"selector":"table > tbody > tr","tasks":[["has-text","Advertisement"]]}]}],[628806066,{"a":[{"selector":".thecontent","action":["style","opacity: 1 !important; background: none !important"],"cssable":true}]}],[885968899,{"a":[{"selector":"style","action":["remove",""],"tasks":[["has-text","data:image"]]}]}],[1621935671,{"a":[{"selector":"script[src$=\"ads.js\"]","tasks":[["upward","section[id]"]]}]}],[460312359,{"a":[{"selector":".selected","tasks":[["has-text","Ads"]]}]}],[178845166,{"a":[{"selector":"#js-mount-point-header.with-ad","action":["style","min-height: auto !important"],"cssable":true},{"selector":"div[class^=\"sc-\"] > div[class^=\"sc-\"] > div[style*=\"width: 728px;\"]:only-child > iframe[name=\"footer\"][width=\"728\"][height=\"90\"]","tasks":[["upward",2],["matches-css",{"name":"padding-bottom","value":"^56px$"}]]},{"selector":"iframe[name=\"dashboard_home\"]","tasks":[["upward","div[class^=\"sc-\"][span=\"1\"]"]]},{"selector":"iframe[name=\"footer\"][width=\"728\"][height=\"90\"]","tasks":[["upward",1]]},{"selector":"iframe[name=\"header\"][width=\"468\"][height=\"60\"]","tasks":[["upward",1]]},{"selector":"iframe[name=\"rectangle\"][width=\"300\"][height=\"250\"]","tasks":[["upward",1]]},{"selector":"iframe[name=\"topbranding_rectangle\"][width=\"300\"][height=\"250\"]","tasks":[["upward","li[size=\"2\"][offset=\"1\"]"]]},{"selector":"iframe[name][width=\"184\"][height=\"232\"]","tasks":[["upward",1]]},{"selector":"iframe[name][width=\"500\"][height=\"520\"]","tasks":[["upward",1]]},{"selector":"section > div[class^=\"sc-\"]:last-child > div[style*=\"width: 728px;\"]:only-child > iframe[name=\"footer\"][width=\"728\"][height=\"90\"]","tasks":[["upward",2],["matches-css",{"name":"margin-bottom","value":"^-16px$"}]]}]}],[2095854185,{"a":[{"selector":"div#vstr","action":["style","display: block!important;"],"cssable":true}]}],[2013420916,{"a":[{"selector":".lite-page__header-navigation--with-ad","action":["style","top: 0 !important;"],"cssable":true},{"selector":".research-resources-summary__inner.is-sticky","action":["style","top: 0 !important;"],"cssable":true}]}],[59303477,{"a":[{"selector":"section[id$=\"left\"] > .blockbody > script[type]","tasks":[["upward",2]]},{"selector":"section[id$=\"main\"] > .blockbody > .adsbyexoclick","tasks":[["upward",2]]}]}],[621234881,{"a":[{"selector":"div.row.body:nth-of-type(1)","action":["style","padding:0px !important"],"cssable":true}]}],[1472384326,{"a":[{"selector":"#yuidea-btn","action":["style","display: block !important"],"cssable":true},{"selector":".percent","tasks":[["upward","[id^=\"yuidea-wait\"]"]]}]}],[1596549743,{"a":[{"selector":"[id^=\"gpt-passback\"]","tasks":[["upward","table"]]}]}],[719998175,{"a":[{"selector":".site-inner > .wrap","tasks":[["has-text","Scroll down & click on"]]}]}],[1086676666,{"a":[{"selector":".async-hide","action":["style","opacity:1.0 !important"],"cssable":true}]}],[1454831094,{"a":[{"selector":".container","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":".container","tasks":[["has",{"selector":"a[title=\"Affiliate link\"]"}]]}]}],[763867784,{"a":[{"selector":"[itemprop]","tasks":[["has",{"selector":".sponsored-flag"}]]}]}],[416811654,{"a":[{"selector":".single-portfolio .xxx-banner","tasks":[["upward",".single-portfolio"]]}]}],[1168699774,{"a":[{"selector":"div[id^=\"imCell_\"][class=\"\"]","tasks":[["has-text",["Advertisement","i"]]]}]}],[791131278,{"a":[{"selector":".les-title","tasks":[["has-text","Sponsor"]]},{"selector":".selected","tasks":[["has-text","Sponsor"]]}]}],[1564379209,{"a":[{"selector":"[target=\"_blank\"][style]","tasks":[["upward","[style]"]]}]}],[1910280661,{"a":[{"selector":".homeadv > span","tasks":[["has-text","Advertisement"]]},{"selector":"div[class=\"\"][data-locker-id]","action":["style","display:block !important"],"cssable":true}]}],[467818083,{"a":[{"selector":".ad-dfp","action":["style","min-height: 3.52px !important; height: 3.52px !important; pointer-events: none !important;"],"cssable":true},{"selector":".header-link-exaroton","action":["style","filter: opacity(0) !important;"],"cssable":true},{"selector":".header-link-exaroton-link","action":["style","pointer-events: none !important;"],"cssable":true},{"selector":".sidebar","action":["style","width: 0px !important;"],"cssable":true}]}],[1952151637,{"a":[{"selector":"span[class]","tasks":[["has-text","Advert"],["upward",1]]}]}],[213849529,{"a":[{"selector":"div[class*=\"better-ads-listitemad\"]","action":["remove",""]}]}],[1606561166,{"a":[{"selector":".widget","tasks":[["has-text","Adv"]]}]}],[44703775,{"a":[{"selector":"[href*=\"3cx\"]","tasks":[["upward","tbody"]]}]}],[2140540351,{"a":[{"selector":".widget-title","tasks":[["has-text","AD"]]}]}],[804305936,{"a":[{"selector":".adsbygoogle","action":["style","height: 10px !important;"],"cssable":true}]}],[457721033,{"a":[{"selector":".code-block","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":".widget_custom_html","tasks":[["has",{"selector":".adsbygoogle"}]]}]}],[2130333983,{"a":[{"selector":"body[style=\"overflow: hidden;\"]","action":["style","overflow: auto!important;"],"cssable":true}]}],[155247688,{"a":[{"selector":"div[id$=\"_frame_content\"][class=\"wide_boxcontent\"]","tasks":[["has-text","Adblock"]]}]}],[351284981,{"a":[{"selector":".post-thumbnail-container","tasks":[["has-text","AD"],["upward",1]]}]}],[407985882,{"a":[{"selector":".gtSmartphone-only","tasks":[["if",{"selector":" > div.section-header:first-child","tasks":[["has-text","Fantasy games"]]}]]},{"selector":"body","action":["style","background: transparent !important;"],"cssable":true}]}],[1922660014,{"a":[{"selector":"#messageList > li.message","tasks":[["has-text","Anzeige"]]}]}],[942150925,{"a":[{"selector":"","action":["remove",""],"tasks":[["matches-path","^\\/(archive\\/\\d+\\/[-a-z]+)?$"],["spath"," .exo-native-widget, div[style*=\"250px\"], div[style*=\"728px\"], img[width=\"300px\"], img[width=\"728px\"], video, img[height=\"250px\"]"]]},{"selector":".exo-native-widget, div[style*=\"250px\"], div[style*=\"728px\"], img[width=\"300px\"], img[width=\"728px\"], video, img[height=\"250px\"]","action":["style","filter:opacity(0%)!important;pointer-events:none!important"],"cssable":true}]}],[218245982,{"a":[{"selector":".videobrick > .videoadintro","tasks":[["upward",1]]}]}],[45757390,{"a":[{"selector":".ui-dialog","tasks":[["has-text","extension"]]}]}],[1156655102,{"a":[{"selector":".align-items-center.list-row","tasks":[["has",{"selector":".col:empty"}]]},{"selector":".row","tasks":[["has-text","Promotion Bot"]]}]}],[266770004,{"a":[{"selector":".cp-modal-popup-container","action":["remove",""]}]}],[310709743,{"a":[{"selector":".wide_boxcontent","tasks":[["has-text",["adb","i"]]]},{"selector":"div[data-width][style*=\"background-image: url\"]","action":["style","background: none !important"],"cssable":true}]}],[167845935,{"a":[{"selector":"#play_button","action":["style","display:block!important;"],"cssable":true},{"selector":"a.button-link.mybutton","tasks":[["has-text","Play"]]}]}],[391391639,{"a":[{"selector":"li","tasks":[["has",{"selector":".viewLink","tasks":[["has-text","AD \\|"]]}]]}]}],[1945744248,{"a":[{"selector":"html","action":["style","max-height: 1px !important;"],"cssable":true}]}],[1880904899,{"a":[{"selector":".col-xs-2-4","tasks":[["has",{"selector":"div[data-sqe=\"ad\"]"}]]}]}],[105524786,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > img[src] + div > style","tasks":[["has-text","flex: 0 0 100%"]]}]]}]}],[272681549,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > h6","tasks":[["has-text","Oferty dla Ciebie"],["spath"," + div > img[src^=\"https://www.o2.pl/\"][role=\"presentation\"]"]]}]]}]}],[709714296,{"a":[{"selector":"div[class] > img[src^=\"https://v.wpimg.pl/\"] + img[src^=\"https://v.wpimg.pl/\"] + div:has(div[style=\"opacity: 1;\"])","tasks":[["upward",1]]}]}],[1452039407,{"a":[{"selector":".g-recaptcha, iframe[src*=\"google.com/recaptcha\"], .btn-captcha, .btn-black-outline","tasks":[["others",""]]}]}],[968775348,{"a":[{"selector":".wrapper","action":["style","margin-top: auto !important"],"cssable":true}]}],[1902544448,{"a":[{"selector":".torrentinfo div + div","tasks":[["has-text","Fast And Direct Download Safely And Anonymously"]]}]}],[262773693,{"a":[{"selector":"#root > div > div","tasks":[["has",{"selector":" > .vm-placement"}]]},{"selector":"#root > div","tasks":[["has",{"selector":"a[href*=\"undefined\"]"}]]}]}],[1574505674,{"a":[{"selector":"html","action":["style","overflow-y: auto !important;"],"cssable":true}]}],[32282976,{"a":[{"selector":"div[class*=\"-\"] > ins.adsbyexoclick","tasks":[["upward",1]]}]}],[1980062678,{"a":[{"selector":"[src^=\"blob:https://autofaucet.dutchycorp.space/\"]","action":["remove",""]}]}],[825263224,{"a":[{"selector":"[style][href]","tasks":[["upward","[style]"]]}]}],[1514905420,{"a":[{"selector":".adsbygoogle","action":["style","left-3000px !important;position:absolute !important"],"tasks":[["upward",2]]}]}],[2076315769,{"a":[{"selector":"#makingdifferenttimer","action":["style","display:block!important"],"cssable":true},{"selector":".row","action":["style","display: block !important;"],"cssable":true}]}],[666090028,{"a":[{"selector":"body.modal-open","action":["style","overflow: auto!important;"],"cssable":true}]}],[1041699727,{"a":[{"selector":"tr","tasks":[["has",{"selector":"[alt=\"UseNet\"]"}]]}]}],[1641285369,{"a":[{"selector":"[id^=\"tp-snp\"]","action":["style","display: block !important"],"cssable":true}]}],[1748610174,{"a":[{"selector":"div.text","tasks":[["upward",1]]}]}],[237942968,{"a":[{"selector":".row > div > #tile-ad","tasks":[["upward",1]]}]}],[638403126,{"a":[{"selector":"a[href^=\"https://track.aftrk1.com/\"]","tasks":[["upward",1]]}]}],[688113190,{"a":[{"selector":"h6","tasks":[["has-text","adblocker"],["upward",2]]}]}],[1888645495,{"a":[{"selector":"body > div","tasks":[["has-text","Close AD"]]}]}],[1175705921,{"a":[{"selector":".buttondll","tasks":[["has-text",["Download","i"]]]},{"selector":".buttonfirst","tasks":[["has-text",["watch","i"]]]}]}],[503729035,{"a":[{"selector":"iframe.hide-ads","tasks":[["upward","div[style]"]]}]}],[486240519,{"a":[{"selector":"[class*=\"MPU\"]","action":["style","height: 1px !important"],"cssable":true},{"selector":"[id*=\"mpu\"]","action":["style","height: 1px !important"],"cssable":true}]}],[689441044,{"a":[{"selector":".module.html_snippet","tasks":[["has-text","Shop"]]},{"selector":".pufftext > .sponsored","tasks":[["upward",3]]},{"selector":".pufftext","tasks":[["has-text","SPONSORED"],["upward",2]]}]}],[51259797,{"a":[{"selector":"display-ad-component, [class^=\"DisplayAd\"], .ark-ad-message","action":["style","visibility: collapse !important"],"cssable":true}]}],[871153057,{"a":[{"selector":"body > div#wrapper","action":["style","padding-top: 0px !important;"],"cssable":true}]}],[633918281,{"a":[{"selector":".jnzTeZ.sc-qYGWS.bSwWwA.sc-qQKeD","action":["style","max-height:0px !important"],"cssable":true},{"selector":"article > div > div > div[data-tile-name=\"top_banner\"]","tasks":[["upward",2]]}]}],[953473973,{"a":[{"selector":"li","tasks":[["has",{"selector":".product-header"}],["has-text","Sponsored"]]}]}],[2081139939,{"a":[{"selector":"div[id^=\"comp-\"] > a[data-testid=\"linkElement\"] > wix-image[data-src$=\"~mv2.gif\"]","tasks":[["upward",2]]}]}],[1575478477,{"a":[{"selector":".ad_code2","action":["style","height: 1px !important;"],"cssable":true}]}],[510529361,{"a":[{"selector":"#adsads","action":["style","height: 9px !important;"],"cssable":true},{"selector":"h1","tasks":[["has-text","adblock|supporter"]]}]}],[296746057,{"a":[{"selector":"div > div[id] > br ~ h2","tasks":[["has-text","disable ad-block"],["upward",1]]}]}],[1862730373,{"a":[{"selector":".brand-ad","tasks":[["upward","div"]]}]}],[364579372,{"a":[{"selector":"div.pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads","action":["style","display:block !important"],"cssable":true}]}],[1935384062,{"a":[{"selector":"#download-button, #generate-link, .button, #main-download","tasks":[["others",""]]}]}],[531195361,{"a":[{"selector":".thumb div.ad","tasks":[["upward",".thumb"]]}]}],[1478778948,{"a":[{"selector":"body > a > div[id]","action":["style","background: var(--c-bg, #aae5a3) !important"],"cssable":true}]}],[1196931599,{"a":[{"selector":"#fafsf2","action":["style","display:block !important"],"cssable":true}]}],[819402380,{"a":[{"selector":"#getlink, #pop-button","action":["style","display: block !important;"],"cssable":true}]}],[413088309,{"a":[{"selector":".inst > div.text-left iframe[src^=\"//\"]","tasks":[["upward",".inst"]]}]}],[960090530,{"a":[{"selector":"#yuidea-snp","action":["style","display: block !important"],"cssable":true}]}],[1572666937,{"a":[{"selector":"#gtelinkbtn, #wpsafe-generate, #wpsafe-link","action":["style","display: block !important;"],"cssable":true}]}],[1499257719,{"a":[{"selector":"[target=\"_blank\"][style]","tasks":[["upward",1]]}]}],[1186112351,{"a":[{"selector":"a#link","action":["style","display: block !important"],"cssable":true}]}],[1380756989,{"a":[{"selector":"ul > li","tasks":[["has-text",["‌","i"]]]}]}],[1397035875,{"a":[{"selector":".jw-reset.jw-wrapper","action":["style","z-index:2147483647 !important"],"cssable":true}]}],[1923195085,{"a":[{"selector":".td_flex_block","tasks":[["has",{"selector":"span","tasks":[["has-text","Sponsored"]]}]]}]}]]);

const hostnamesMap = new Map([["moddingzone.in",1132051248],["zap.in",2116770163],["coinlisting.info",1787081917],["l2db.info",369205386],["modthesims.info",355361310],["nifteam.info",1199552196],["profitlink.info",1052967425],["rephrase.info",1351206879],["torrentdownload.info",2128497479],["work.ink",2108312904],["xxxvideos.ink",1245812347],["7labs.io",2059232881],["colonist.io",1655650089],["exey.io",307182406],["app.koinly.io",1611154320],["ok-ex.io",1299165258],["iranicard.ir",1299165258],["asiatech.ir",2124424934],["linkdoni.soft98.ir",2032707833],["demonoid.is",232330088],["rarbg.is",488425743],["rarbg2018.org",488425743],["rarbg2019.org",488425743],["rarbg2020.org",488425743],["rarbg2021.org",488425743],["rarbgaccess.org",488425743],["rarbgcore.org",488425743],["rarbgdata.org",488425743],["rarbgenter.org",488425743],["rarbgget.org",488425743],["rarbggo.org",488425743],["rarbgmirrored.org",488425743],["rarbgp2p.org",488425743],["rarbgprx.org",488425743],["rarbgto.org",488425743],["rarbgtor.org",488425743],["rarbgtorrents.org",488425743],["rarbgunblocked.org",488425743],["rarbgweb.org",488425743],["unblockedrarbg.org",488425743],["rarbg.to",488425743],["adshrink.it",1741084588],["hdmotori.it",352445169],["ilprimatonazionale.it",1392357848],["ppss.kr",1890675590],["hitomi.la",424028667],["vaughn.live",2108087391],["limetorrents.lol",362556811],["adyou.me",370819767],["downloads.descendant.me",719823845],["dirp.me",79982328],["mboost.me",1990911212],["specx.me",1963085564],["unknowncheats.me",1160483663],["fcdn.lauta.media",2141389268],["fileku.mobi",38695913],["haho.moe",184447806],["piracy.moe",1217182482],["yts.mx",407832088],["allcryptoz.net",1287798798],["crewbase.net",1287798798],["crewus.net",1287798798],["shinbhu.net",1287798798],["shinchu.net",1287798798],["thumb8.net",1287798798],["thumb9.net",1287798798],["topcryptoz.net",[1287798798,1596549743]],["ultraten.net",1287798798],["uniqueten.net",1287798798],["alrakoba.net",1741184006],["calculator-online.net",637391974],["cut-y.net",1953639953],["cutscenes.net",1815831296],["dailyuploads.net",2022045831],["financemonk.net",1550697750],["fontyukle.net",1294705828],["freedownloadvideo.net",1982367734],["gamersnexus.net",1188817783],["jacquieetmicheltv.net",1699204485],["kisscenter.net",1065062823],["kissorg.net",1065062823],["lovenovels.net",1008373456],["mac-torrent-download.net",1595963220],["medievalists.net",948664992],["megaup.net",1520880922],["mypornstarbook.net",582327022],["neuroeconomia.net",628806066],["noscript.net",885968899],["rule34.paheal.net",1621935671],["peliculasmx.net",460312359],["pixiv.net",178845166],["quickvideo.net",2095854185],["researchgate.net",2013420916],["rule34hentai.net",59303477],["sexphimhd.net",621234881],["tecmundo.net",1472384326],["yoshare.net",719998175],["kruidvat.nl",1086676666],["geekzone.co.nz",1454831094],["stuff.co.nz",763867784],["hentaibaka.one",416811654],["hentaicomics.pro",416811654],["webserver.one",1168699774],["allstreaming.online",791131278],["vidstreamz.online",1564379209],["mcloud.to",1564379209],["3dmodelshare.org",1910280661],["aternos.org",467818083],["bitcointalk.org",1952151637],["cgtips.org",213849529],["chimicamo.org",1606561166],["distrowatch.org",44703775],["elizabeth-mitchell.org",2140540351],["freeopenvpn.org",804305936],["gankrin.org",457721033],["garrysmods.org",2130333983],["girlsofdesire.org",155247688],["hentaifreak.org",351284981],["hltv.org",407985882],["java-forum.org",1922660014],["koushoku.org",942150925],["ohentai.org",218245982],["opensubtitles.org",45757390],["porn-w.org",1156655102],["responsivevoice.org",266770004],["sensualgirls.org",310709743],["telepisodes.org",167845935],["temp-mail.org",391391639],["ads.ylilauta.org",1945744248],["shopee.ph",1880904899],["dobreprogramy.pl",105524786],["gadzetomania.pl",105524786],["money.pl",105524786],["o2.pl",[105524786,272681549]],["polygamia.pl",105524786],["pudelek.pl",105524786],["wp.pl",105524786],["www.wp.pl",709714296],["afly.pro",1452039407],["filmmakinesi.pro",968775348],["limetorrents.pro",1902544448],["mtgarena.pro",262773693],["businesstimes.com.sg",1574505674],["sukebei.nyaa.si",32282976],["autofaucet.dutchycorp.space",1980062678],["playerx.stream",825263224],["loadout.tf",1514905420],["ashort1a-matik.tk",2076315769],["seg-ashort1a-ma.tk",2076315769],["topchort.tk",2076315769],["ashort1a.xyz",2076315769],["himovies.to",666090028],["mirrored.to",1041699727],["haonguyen.top",1641285369],["txxxporn.tube",1748610174],["av01.tv",237942968],["hanime.tv",638403126],["hotscope.tv",688113190],["hpav.tv",1888645495],["hpjav.tv",1888645495],["momomesh.tv",1175705921],["wco.tv",503729035],["bishopsstortfordindependent.co.uk",486240519],["cambridgeindependent.co.uk",486240519],["dissexpress.co.uk",486240519],["fenlandcitizen.co.uk",486240519],["granthamjournal.co.uk",486240519],["kentonline.co.uk",486240519],["lynnnews.co.uk",486240519],["newarkadvertiser.co.uk",486240519],["rutland-times.co.uk",486240519],["spaldingtoday.co.uk",486240519],["stamfordmercury.co.uk",486240519],["suffolknews.co.uk",486240519],["velvetmag.co.uk",486240519],["dailymail.co.uk",689441044],["games.dailymail.co.uk",51259797],["idealhome.co.uk",871153057],["look.co.uk",871153057],["independent.co.uk",633918281],["www.sainsburys.co.uk",953473973],["taxi-point.co.uk",2081139939],["megaleech.us",1575478477],["maxstream.video",510529361],["wstream.video",296746057],["tiki.vn",1862730373],["vieon.vn",364579372],["techus.website",1935384062],["ptjobsz.xyz",1935384062],["cambb.xxx",531195361],["rule34.xxx",1478778948],["adnit.xyz",1196931599],["bloggertheme.xyz",819402380],["edummm.xyz",413088309],["insurglobal.xyz",960090530],["sitecuatui.xyz",1572666937],["streamabc.xyz",1499257719],["techthematter.xyz",1186112351],["1337x.unblock2.xyz",1380756989],["vardembed.xyz",1397035875],["mg.co.za",1923195085]]);

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
