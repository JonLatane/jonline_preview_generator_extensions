/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

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

/// name css-specific

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// chn-0

const argsMap = new Map([[1050637490,{"a":".MFV"}],[1229185751,{"a":".fr > a[href^=\"https://www.digitalocean.com/\"],\n.sidebar_compliance,\n.sidebar_units,\ndiv[class^=\"wwads-\"],\ndiv[style][onclick*=\"geekhub.\"]"}],[368523570,{"a":"#b2-widget-html-12,\n#gg-box,\n.slider-4-box1"}],[1190683222,{"a":".advlr,\n.main-adv"}],[635192846,{"a":".banneradv-newbox"}],[832448586,{"a":".liAds,\n.safari_pop,\n.scol-banner,\n.top-ad-link"}],[480409993,{"a":".vgart_top,\n.vgart_top > img"}],[1242807385,{"a":"#home-row-lunbo,\ndiv[id^=\"home-row-ads\"]"}],[687456374,{"a":"#fwin_content_imc_attachad [style=\"WIDTH: 100%; padding-left:10px;\"] > div > a[href][target=\"_blank\"] > img,\n#fwin_content_imc_attachad [style=\"WIDTH: 100%; padding-left:10px;\"] > div > p > a[href][target=\"_blank\"]"}],[981344308,{"a":"div[data-marker-title=\"undefined\"],\ndiv[id^=\"info\"]"}],[1073428796,{"a":"a[href^=\"/ad/\"]"}],[1711879796,{"a":"#long_image,\n.spbox"}],[649837611,{"a":".banner_img,\ndiv[id^=\"a\"]"}],[799390761,{"a":".container-fluid > .gsfha3 > .gsfha3,\n.gsfha3-form,\n.gthfdsa"}],[1654717374,{"a":"#featured1,\n#media,\n#uc,\n.top_a1,\ndiv[class*=\"xx\"]"}],[1775552742,{"a":".v-sponsors"}],[799953418,{"a":".async[href^=\"http\"]"}],[439744572,{"a":"#block-block-49"}],[938294406,{"a":"#home-top-narrow"}],[1624084729,{"a":"section > div.article-gg,\nsection > div.content > p > a[href*=\"taobao.com/coupon/\"] > img"}],[72711954,{"a":"a[style=\"display: inline-block;position: relative\"]"}],[1313786406,{"a":"div[class^=\"my-ad-\"]"}],[789219540,{"a":".adsbox"}],[506622309,{"a":".hz2"}],[1330552531,{"a":"#frame37boCx,\n#frameo834m9"}],[544013339,{"a":"#ggao-article-bottom,\n.ggao-everyone-rebeat,\n.left-gg-box > div.sl-ggao > div.gg,\ndiv[class$=\"-ad-top\"]"}],[1035008717,{"a":".pNavigateAd,\n.pTopTextAd,\na[href*=\".simcentric.\"],\na[href*=\"/click/a_d_\"],\ntd[id$=\"_SPONSOR\"]"}],[2030623479,{"a":"a[href^=\"https://www.ebay.com\"]"}],[1449778878,{"a":"#pl_common_ali,\n.UG_bn_a,\n.tag_showTopicL[href^=\"https://shop.sc.weibo.com/\"],\ndiv[ad-data],\ndiv[class^=\"HotTopic_doticon_\"] + div[class^=\"HotTopic_tit_\"],\ndiv[feedtype=\"ad\"]"}],[1097429773,{"a":"#p-nav-fix + .p-area.w980"}],[108429677,{"a":"#player_ad_div,\n#popup_bottom"}],[615425016,{"a":".agency-list,\n.bg-box > .slide-box,\n.g-side-r > a[onclick^=\"onLogs\"]"}],[1642207500,{"a":"#ft_hb"}],[1201297937,{"a":"#adt,\n#marquee,\n.otherposts > ul > li > a[target=\"_blank\"],\n.sidebar > .banners,\n.topbannerw"}],[1657905524,{"a":"#leftside,\n#rightside"}],[706723891,{"a":".col > ul:not([id]) > li > a[href^=\"http\"]:not([href*=\".wenxuecity.\"])"}],[701590729,{"a":"a[href^=\"http://www.edewin.com/\"],\ndiv[style=\"padding:6px 0; width:950px; height:45px\"],\ntd[height=\"18\"][bgcolor=\"#FFFFE8\"],\ntd[id^=\"Ad\"]"}],[300542917,{"a":"table[id^=\"table_Ad\"]"}],[1827859818,{"a":"#notify > a[target=\"_blank\"]"}],[637411078,{"a":"div.item"}],[483927015,{"a":"#xldz"}],[274626007,{"a":".four_box,\n.ware_gs"}],[1735866076,{"a":".fu-welcome"}],[1050234180,{"a":".ggwrap"}],[1867578790,{"a":".aibyte_ad,\n.downloader"}],[1812949059,{"a":".sidebar > .widget:not(:first-child):not(.widget_ui_posts),\na[href^=\"http\"]:not([href*=\"://www.wn789.\"]) > img"}],[1976273479,{"a":"a[href^=\"http\"]:not([href*=\"wnacg.\"]) img,\nimg[width=\"399\"][height*=\"6\"],\nscript + div > a > img"}],[1284374706,{"a":".banner-zone"}],[741946182,{"a":".article--heroAd,\n.article-bottomAd,\n.article-topAd"}],[504501374,{"a":"#wpjam_blog_300x250_1"}],[1847007683,{"a":"#rightAllJournal,\n.news-white-content-right"}],[1180088136,{"a":"#portal_block_12045"}],[851855786,{"a":".tmall_tab"}],[1237898703,{"a":"a[href^=\"/ad.\"]"}],[719253452,{"a":".addd"}],[444876081,{"a":"img[alt*=\"广告\"]"}],[1927869777,{"a":"#leftbottbox,\n#rightbottbox,\n#sidebar > .box-b img,\n.activity-box,\n.chao_ggw,\n.navbar + .clearfix,\na[href=\"http://61.160.236.52\"]"}],[1694074697,{"a":".vw-header-ads-wrapper,\niframe[src*=\"//ads.xfastest.com/\"]"}],[167771675,{"a":".adv-side-wrap,\n.adv_v2"}],[641219352,{"a":".vw-sticky-sidebar-wrapper #custom_html-5"}],[1997421780,{"a":"#HtmlMoKua_752383,\n.ads_bottom"}],[1742588793,{"a":".wsappad,\ndiv[class^=\"category-iloveyou\"]"}],[1593945561,{"a":".details-small-carousel,\n.yun-advertisement"}],[1728088865,{"a":".ceo_ads"}],[295743315,{"a":".down-list,\n.gg_box"}],[1279825237,{"a":"#top_content"}],[961823756,{"a":"#gg_2,\n#public_right_mid_ad,\n.down_list"}],[920353990,{"a":"#topc"}],[172703183,{"a":"#index_tan,\n.main > a[href][target=\"_blank\"] > img,\n.sidebar > .block.spots"}],[1234386094,{"a":"#qmenu_menu + .wp,\n.adft"}],[1805167257,{"a":".dmcenterb"}],[636875218,{"a":".d_textbanner"}],[624900033,{"a":".adv-column2,\n.columBox.book,\n.part-ad1,\n.xhdf_moreAdv"}],[628123919,{"a":".adv3"}],[664747817,{"a":"a[href*=\"/adclick\"]"}],[1668625731,{"a":"#news_contents_left > .left_gg"}],[1390505569,{"a":"#pw_content > .forum_panel:nth-child(4),\n.advert-entry-list,\n.readCon_right"}],[1991885352,{"a":".cmp_v"}],[1611066289,{"a":".ad-right-aside"}],[1999426558,{"a":".mini-pop"}],[1167075963,{"a":".articleAD,\n.rctad"}],[1401698759,{"a":"div[class^=\"AD_\"]"}],[644311615,{"a":"div[class^=\"xueshu-a\"]"}],[1627875339,{"a":".speed"}],[1574992232,{"a":"#ACT_crazy,\n#ACT_takeover,\n#ACT_takeover2,\n#crazyAD,\n#hp-ad-left,\n#hp-ad-right,\n#my-adsHPSPON,\n#my-adsMBAR,\n#ysm-umu,\n.ad-tl2b,\n.geminiAd,\n.js-list-ad-noview,\n.js-stream-content > div > div > div > h3 > a[href^=\"https://hk.promotions.\"],\n.stream-items[data-wf-beacons],\n.sys_dict_native_ads,\n.wafer-beacon[data-wf-beacons],\na[href^=\"https://beap.gemini.yahoo.com/\"] + .NoTextDecoration,\ndiv[data-ad-feedback-beacon],\ndiv[id*=\"-Stream-ad-\"],\ndiv[id^=\"-ad-\"],\ndiv[id^=\"ads-\"],\ndiv[id^=\"gemini-ad-\"],\nli[class^=\"gemini-ad-\"]"}],[897776411,{"a":"#livePromote"}],[1147191463,{"a":"#mntl1,\n.js-stream-content[style=\"background-color:#fafaff;\"],\ndiv[id^=\"my-ads\"],\nli[class=\"js-stream-content Cf Pos-r RevealNested      \"][data-uuid]:not([data-uuid*=\"-\"])"}],[2142758164,{"a":".hpad-wrapper"}],[300719426,{"a":"a[href^=\"https://hk.promotions.yahoo.com/\"]"}],[1984444456,{"a":".yog-col div.classickick[data-beacon-fired]"}],[778755156,{"a":"#module-mktBanner,\n#sda-MON,\n.gn_sub_blue,\nli[id^=\"ad-\"]"}],[1340134600,{"a":"#ysmcm,\ndiv[align=\"center\"][style=\"height:90px\"],\ntd > div.ysm,\ntr:has( > td[valign=\"top\"] > .geminiAd)"}],[1487038151,{"a":".travelads"}],[1698316982,{"a":".tabads,\n[class*=\"has-beacon-click\"][data-wf-beacons^=\"https://*.gemini.yahoo.com/\"],\ndiv[id^=\"applet_p_\"][class^=\"dealstdv2wafer\"]"}],[1278018166,{"a":".axdBox"}],[967713189,{"a":"div[id^=\"adgshp\"]"}],[1897754945,{"a":"div[style=\"width:618px;height:150px;margin: 0 auto; display:block;\"]"}],[760399971,{"a":"#AD,\n#j_focus_img,\n#maryAd,\n#newfix-dsp,\n.abstract_ad,\n.ad24090,\n.ad71090,\n.ad96090,\n.banner960,\n.footer_float_box,\ndiv[id*=\"underHdAd\"],\ndiv[id^=\"bot_ad\"]"}],[763468820,{"a":".container > .top"}],[651587612,{"a":".player > div[id][style^=\"width: 100%; height: 100%; background:\"][style*=\"position: absolute; z-index:\"],\n.wp > div[class] > div[id] > a[data-num][style*=\".yaseok.com/uploads/20\"][style$=\".gif');\"][href*=\".yaseg3.com/go?id=\"]"}],[1993990640,{"a":".aasdwa,\n.container > div[class] > div#list_asiall > div a[target=\"_blank\"] > img,\n.container > fieldset[style*=\"text-align: center; border: 1px solid\"],\n.video-thumb > .video-thumb-image[style^=\"background-image: url('https://static2.yaseok.com/uploads/\"],\ndiv[style*=\"position: absolute;\"][style*=\"text-align: center;\"][style*=\"align-items: center;\"]"}],[1056959004,{"a":"#cdaas-rand,\na[href*=\"yasem5.com/go\"][target=\"_blank\"]"}],[1651039921,{"a":".banners,\n.mini-over-top"}],[1729967416,{"a":"div[id^=\"pop\"]"}],[1942888106,{"a":"#adFirefox"}],[169777866,{"a":".boardnav > #ct > .sd,\n.sd.pph > .mbm.hm"}],[1055832636,{"a":"#adsc3,\n#adsc4,\n#content-728,\n#content-728-top,\n#content-ads-right,\n.new-index-ad300,\n.new-index-main-728,\n.new-index-main-ysm,\n.new-sidebar-today-300ad,\n.notification"}],[991875429,{"a":".abox,\n.down_referer,\n.down_referer + .bottom,\n.down_referrer,\ndiv[class^=\"ad1\"],\ndiv[class^=\"ad2\"],\ndiv[class^=\"ad3\"],\ndiv[class^=\"ad6\"],\ndiv[class^=\"ad7\"],\ndiv[class^=\"ad9\"]"}],[1365176585,{"a":".dfb-ad,\n.gg_loadpage,\n.gg_pop,\n.gg_preview"}],[1711646104,{"a":".focusad-box-s,\n.focusbglink-s,\n.right-box > div[class^=\"ad\"],\ndiv[class*=\"-adv\"],\ndiv[class*=\"words-ad\"]"}],[1462573693,{"a":".ad_w"}],[1096234041,{"a":"#maincontent3 > div[style^=\"height\"]"}],[494240629,{"a":".focus_bottom_banner,\n.video_abl,\n.video_abr"}],[1166170669,{"a":"#wp > table[width=\"960\"]"}],[1359641276,{"a":".yyl-ads-main > .yyl-ads-swiper:first-child + .yyl-ads-title,\n.yyl-ads-swiper,\n.yyl-video-list-item-width"}],[698964349,{"a":".side_box,\n.side_box2"}],[1265020468,{"a":".info_logrt"}],[644299554,{"a":"#ynetG_B1"}],[1407865631,{"a":".dict-download-guide"}],[1897374030,{"a":".sidebar-ft"}],[1664948681,{"a":".header-widget-region"}],[1979467958,{"a":"#lotteryToolbar,\n#lotteryToolbarBig,\n#playlistIkuAD,\n#relationvideo_async > .items > .v-horiz:nth-child(-1n+2),\n#seebuyGuide,\n#seebuyhome,\n.yk-AD-tong,\ndiv[name=\"m_pos\"] > #FullPromotion,\ndiv[style=\"position:relative;\"]:first-child > a[style*=\"z-index:5; display:block;\"]"}],[9113327,{"a":"body > [style=\"width: 100px; height: 100px; position: fixed; top: auto; right: 0px; bottom: 0px; left: auto; z-index: 188;\"]:not([class]):not([id])"}],[1722606737,{"a":"#b2-widget-html-2"}],[869903561,{"a":"iframe[src=\"/js/loading.html\"]"}],[133225947,{"a":".orbui-post-footer"}],[1050621816,{"a":".widget_ui_orbui"}],[742225963,{"a":".login_panel"}],[692257565,{"a":"div[style=\"position:fixed; width:200px; top: 330px;right:10px;font-size:9pt;text-align:left;\"]"}],[145169298,{"a":"#diynews_ad1"}],[1001739471,{"a":"#fix"}],[1206074945,{"a":"#dd1,\n.fend_ad,\n.ftop_ad,\n.ftop_ad_2016"}],[1004016031,{"a":"#frameUTSzKE"}],[159808626,{"a":"#gs_down"}],[1080626057,{"a":".gs"}],[971512373,{"a":"#adbg,\n#highdown,\n#sy,\n#tl_adv,\n.gsdown,\n.gsxz_ydw,\n.pc_down"}],[1992044569,{"a":"table[width=\"980\"] > tbody > tr > td[height=\"70\"]"}],[950090095,{"a":"#playertipian"}],[399954870,{"a":".banner_simple,\n.game_wrap,\n.left_bottom_gg3"}],[994398164,{"a":".td-main-content > div[id^=\"metaslider-id\"]"}],[1875134942,{"a":".downgg"}],[538897920,{"a":"#gg_left,\n#gg_right"}],[2102970539,{"a":".m_left"}],[158281250,{"a":".right-gg,\nli[class*=\"baidu\"]"}],[686549805,{"a":"a[href^=\"https://jump.9118ads.com/\"]"}],[1021597346,{"a":".article-bottom-ads,\n.article-top-ads"}],[364496298,{"a":".index950x90,\n.index960x90,\n.show2960x90"}],[1208618823,{"a":"#block-views-zb2016-freefrom-block-1"}],[1117414692,{"a":"div[style^=\"width:100%;height:100%;border:2px\"]"}],[824290240,{"a":".btn11[onclick],\nul[id^=\"gaosuxiazai\"]"}],[1261793907,{"a":"#play-gif"}],[1957476355,{"a":".buy_container,\n.series_app"}],[712025085,{"a":".td-all-devices"}],[1711132063,{"a":"#post-single + .pd10.mar10-t.box,\n.media-content[style*=\"0x\"],\n.widget_index_add"}],[966155469,{"a":".ssr"}],[1446985742,{"a":".lunboceng"}],[900996573,{"a":"#box_tips,\n.pop_shousuo"}],[1274596430,{"a":"#topAdOut,\n#topRecomm,\n.col-aside,\n.col-google,\n.da_bottom,\n.sldebar_out + *,style[id] + a[class],\n.top_da,\n.top_da_out,\n[class*=\"_block-\"],\n[class*=\"bottom_\"],\n[class*=\"zxx\"] + *,ARTICLE > .link:first-child,\n[onclick*=\"Ad\"],\na[href*=\".ke.qq.\"],\na[href*=\".mawen.\"],\na[href*=\".url.cn/\"],\na[href*=\"datayi.cn\"],\na[href^=\"http://dwz.date/\"],\na[style^=\"background-image\"],\narticle > .link + :not(p),\ndiv[class^=\"col-left\"] > a[href^=\"https://item.jd.com/\"][style=\"display:block!important;position:sticky;top:0;\"],\ndiv[class^=\"top_da_out_\"],\ndiv[style^=\"height: 300px;\"]"}],[1174454671,{"a":".banner_top"}],[1045283152,{"a":"#wzgg,\n.buttonBar"}],[764058207,{"a":"a[href*=\"czvv.com\"]"}],[1083230264,{"a":".news_blanck"}],[1186951334,{"a":".ng-scope[ng-repeat*=\"adMatchList\"]"}],[544874140,{"a":".mad_top,\n.normal-banner,\n.sf_1,\n[class^=\"piaofu\"],\na[href*=\"512856.com\"],\ndiv[class^=\"all-\"][style^=\"position:relative;width:50%;float:\"]"}],[1130275784,{"a":".sytl"}],[1422838253,{"a":".Banner-link,\n.Banner-link + .Pc-card-button-close,\n.Card.Banner,\n.MBannerAd,\n.MHotFeedAd,\n.MRelateFeedAd,\n.Pc-word,\n.QuestionAdBanner,\n.RelatedReadings-adItem,\n.TopstoryItem--advertCard,\n.WeiboAd-wrap,\ndiv[data-type=\"ad\"]"}],[1684326783,{"a":"#QPhiddenLayer,\n.adb"}],[1136919217,{"a":"a[href^=\"http://u.ctrip.com/\"]"}],[312981979,{"a":".focusBox"}],[618789690,{"a":"div[style=\"width:100%;height:100%;position:fixed;top:0\"]"}],[917966469,{"a":"#article-cnt > a"}],[1340120452,{"a":".cjtz-border,\n.posts-top-cjtz"}],[322057279,{"a":"#footer-widget-box,\n#text-12,\naside[id^=\"custom_html-\"]"}],[2135892409,{"a":".asb-post-footer"}],[2044632921,{"a":".msg"}],[391105708,{"a":".banner-post"}],[524767615,{"a":"#rightFixed"}],[1958311605,{"a":"#tutorial_btm,\na[href=\"/j/coding/\"],\na[href=\"/j/coding/\"] + .w-text-red"}],[1736356900,{"a":"a[href^=\"/ago.\"]"}],[371634784,{"a":"#modules-17"}],[1298189004,{"a":".adnav,\n.adnav2,\n.rt-banner"}],[788701329,{"a":".middle_list"}],[1303846288,{"a":".ad_tl"}],[2088339475,{"a":"#\\36 roomRecommend,\n#index_game,\ndiv[alog-group=\"index_04_game\"]"}],[2104141972,{"a":".hitADclass"}],[405644744,{"a":"#wAdTop1,\n#wAdTop2"}],[543376928,{"a":".gg_1,\n.gg_bt,\n.newa"}],[1662922822,{"a":".zuanpw,\ndiv[style=\"padding:0px 0 10px 0;background-color:#F1F1F1;\"],\ntbody[id^=\"normalthread_\"] + tbody > tr > td[colspan=\"5\"]"}],[1962121120,{"a":".activity-poster:not([href*=\"zuimeia.\"])"}],[2067545417,{"a":".couplet_left,\n.couplet_right"}],[78464192,{"a":".imgBox"}],[1886623866,{"a":".container > .none"}],[1207304146,{"a":"#askTeacher-after-adx-wrap,\n.firstBanner,\nbody.m-question > a[href^=\"https://www.kuaiduizuoye.com/\"][target=\"_blank\"] > img"}],[1018246065,{"a":"div[id^=\"divad_\"]"}],[1256220519,{"a":"#topnav,\n#topnav + div[style],\n.imglistbg-ad,\n.imglistbg_ad"}],[1861046641,{"a":"#geektime,\n#geektime-ads,\n.snd-ad"}],[213044765,{"a":".entry-body > div[class]:first-child,\naside > div[class=\"widget \"],\ndiv[class^=\"g \"]"}],[957336649,{"a":"a.wbalist_thumb[target=\"_blank\"]"}],[320062059,{"a":".list-item-content-ad"}],[2042504638,{"a":"div[style^=\"height:258px;background-image:\"]"}],[1600126893,{"a":"a[href*=\"urlto.pw\"]"}],[1328176370,{"a":"div[class^=\"servers-cost-money\"]"}],[961478313,{"a":".riplus_ads_wrap"}],[590205084,{"a":"#ab_div_px1,\n#gid_group_restricted > .gid_group_title,\ndiv[id^=\"div-gpt-ad\"] + div[id],\ndiv[style=\"width:728px;height:90px;\"],\niframe[src=\"/fb_page_plugin.php?interface=web\"],\niframe[src^=\"yna\"]"}],[1974182183,{"a":"#gamepage_banner"}],[1286912516,{"a":"div[id^=\"div-gpt-ad\"][style]"}],[1657204282,{"a":"#ad-inhouse-top,\n#ad0,\n#ad5"}],[1820616798,{"a":"#topBar,\ndiv[id^=\"banner\"]"}],[1355038828,{"a":".main_ad_b"}],[146139797,{"a":"#author-spotlight + .clear + div,\n#text-33,\n.code-block"}],[1384969188,{"a":"#top-ad-left,\n#top-ad-right,\n.ad-full-screen"}],[172513495,{"a":".oath-lrec-player"}],[844596180,{"a":".rectAd680"}],[427605658,{"a":"#slideshow"}],[1698032485,{"a":"#post-sidebar-ad"}],[1346136774,{"a":".mb-4.slider"}],[1318175302,{"a":".banner-section,\n.feedAdsense"}],[1260695322,{"a":"body > div[style^=\"background: black; position: fixed; \"][style*=\"opacity: 0.5; z-index: 1999;\"]"}]]);

const hostnamesMap = new Map([["uwants.com",1050637490],["price.com.hk",[1050637490,1657204282]],["v2ex.com",1229185751],["v2rayssr.com",368523570],["vanpeople.com",[1190683222,635192846]],["vansky.com",832448586],["vgtime.com",480409993],["vikacg.com",1242807385],["vipthz.com",687456374],["viu.com",981344308],["vk922.com",1073428796],["vmvps.com",1711879796],["vod1769.com",649837611],["vpsdx.com",799390761],["vpsmm.com",1654717374],["vuetifyjs.com",1775552742],["vx666.com",799953418],["w3cplus.com",439744572],["wacowla.com",938294406],["waerfa.com",1624084729],["wandhi.com",72711954],["wangfz.com",1313786406],["wantgoo.com",789219540],["warting.com",506622309],["wcjbb.com",1330552531],["wdzj.com",544013339],["webkaka.com",1035008717],["weebly.com",2030623479],["weibo.com",1449778878],["manhua.weibo.com",1097429773],["weihemenye.com",108429677],["weiyun001.com",615425016],["wendangxiazai.com",1642207500],["wenxuecity.com",1201297937],["www.wenxuecity.com",[1657905524,706723891]],["ri1.site",1657905524],["win007.com",[701590729,300542917]],["win0168.com",[300542917,637411078]],["live.win007.com",1827859818],["win7w.com",483927015],["win7xzb.com",274626007],["windows7en.com",1735866076],["winshang.com",1050234180],["wmzhe.com",1867578790],["wn789.com",1812949059],["wnacg.com",1976273479],["wnacg.org",1976273479],["worldjournal.com",1284374706],["woshipm.com",741946182],["wpjam.com",504501374],["x-mol.com",1847007683],["x3cn.com",1180088136],["x6d.com",[851855786,1237898703]],["ziyuanyo.com",851855786],["booom.net",851855786],["xiaodao0.com",1237898703],["x6g.com",719253452],["xblian.com",444876081],["xc6b.com",1927869777],["xfastest.com",1694074697],["hk.xfastest.com",167771675],["news.xfastest.com",641219352],["xhzyw.com",1997421780],["xia1ge.com",1742588793],["xiadele.com",1593945561],["xiaohutuwb.com",1728088865],["xiaopi.com",295743315],["xiashanet.com",1279825237],["xiazaizhijia.com",961823756],["xijucn.com",920353990],["xin99r2.com",172703183],["xineurope.com",1234386094],["xinfcw.com",1805167257],["xingkbjm.com",636875218],["xinhuanet.com",[624900033,628123919]],["yxdm.live",628123919],["kdhome.net",628123919],["xitek.com",664747817],["xixik.com",1668625731],["xmfish.com",1390505569],["bbs.xmfish.com",1991885352],["xueqiu.com",1611066289],["xunlei.com",1999426558],["xvna.com",1167075963],["xz7.com",1401698759],["xzbu.com",644311615],["xzji.com",1627875339],["yahoo.com",1574992232],["tw.bid.yahoo.com",897776411],["hk.yahoo.com",1147191463],["tw.mall.yahoo.com",2142758164],["hk.mobi.yahoo.com",300719426],["hk.news.yahoo.com",1984444456],["tw.news.yahoo.com",778755156],["tw.stock.yahoo.com",1340134600],["tw.yahoo.com",[1487038151,1698316982]],["yam.com",[1278018166,967713189]],["yantuchina.com",1897754945],["yaolan.com",760399971],["yaoshe67.com",763468820],["yaseg2.com",651587612],["yaseg3.com",651587612],["yasehub.com",1993990640],["yasem5.com",1056959004],["yazhouse8.com",1651039921],["yb983.com",1729967416],["yeecloud.com",1942888106],["yeeyi.com",169777866],["yes-news.com",1055832636],["yesky.com",991875429],["yicai.com",1365176585],["yiche.com",1711646104],["yicheshi.com",1462573693],["yimuhe.com",1096234041],["yinyuetai.com",494240629],["yixingjia.com",1166170669],["pc.yiyouliao.com",1359641276],["yjcf360.com",698964349],["ylfx.com",1265020468],["ynet.com",644299554],["fanyi.youdao.com",1407865631],["note.youdao.com",1897374030],["youivr.com",1664948681],["youku.com",1979467958],["m.youku.com",9113327],["youmelive.com",1722606737],["zhujib.com",1722606737],["yp868.com",869903561],["ypojie.com",[133225947,1050621816]],["fuliba2021.net",133225947],["ypppt.com",742225963],["ys168.com",692257565],["yshw1.com",145169298],["ysw191.com",1001739471],["ytbbs.com",1206074945],["ytshe.com",1004016031],["yxbao.com",[159808626,1080626057]],["newyx.net",1080626057],["yxdown.com",971512373],["yxfdc.com",1992044569],["yxingqiu.com",950090095],["yxlady.com",399954870],["yxssp.com",994398164],["yxzoo.com",1875134942],["yy.com",538897920],["lgn.yy.com",2102970539],["yyrtv.com",158281250],["yzl333.com",686549805],["yzmg.com",1021597346],["zahuishi.com",364496298],["zaobao.com",1208618823],["zddream.com",1117414692],["zdfans.com",824290240],["zdqx.com",1261793907],["zealer.com",1957476355],["zeekmagazine.com",712025085],["zhaiiker.com",1711132063],["zhain8.com",966155469],["acwifi.net",966155469],["zhainanfulishe.com",1446985742],["zhan.com",900996573],["zhangxinxu.com",1274596430],["zhaogepu.com",1174454671],["zhaolianmeng.com",1045283152],["zhaozhaoqu.com",764058207],["zhcw.com",1083230264],["zhibocool.com",1186951334],["zhicheng.com",544874140],["zhifang.com",1130275784],["zhihu.com",1422838253],["zhijia.com",1684326783],["zhlzw.com",1136919217],["zhongkao.com",312981979],["zhongziso.com",618789690],["zhuankebar.com",917966469],["zhujiboke.com",1340120452],["zhujiceping.com",322057279],["zhujiwiki.com",[2135892409,2044632921]],["ssr.tools",2135892409],["zhumengwl.com",391105708],["fuli.us",391105708],["zimushe.com",524767615],["ziqiangxuetang.com",1958311605],["ziyuanba.com",1736356900],["ziyuanwu.com",371634784],["zj.com",1298189004],["zjhlcp.com",788701329],["zjstv.com",1303846288],["zongheng.com",2088339475],["zp365.com",2104141972],["zqzq.com",405644744],["zt5.com",543376928],["zuanke8.com",1662922822],["zuimeia.com",1962121120],["zuowen.com",2067545417],["zxdy777.com",78464192],["zxzjtv.com",1886623866],["zybang.com",1207304146],["zyue.com",1018246065],["zzbaike.com",1256220519],["ant.design",1861046641],["idanmu.ee",213044765],["olevod.eu",957336649],["mo.fish",320062059],["gaoqing.fm",2042504638],["enjoymore.fun",1600126893],["nyaa.fun",1328176370],["wuyong.fun",961478313],["discuss.com.hk",[590205084,1974182183]],["gohome.com.hk",1286912516],["recruit.com.hk",1820616798],["tvmost.com.hk",1355038828],["vjmedia.com.hk",146139797],["gameapps.hk",1384969188],["gotrip.hk",172513495],["passiontimes.hk",844596180],["popart.hk",427605658],["unwire.hk",1698032485],["cangku.icu",1346136774],["juejin.im",1318175302],["logi.im",1260695322]]);

/******************************************************************************/

let hn;
try { hn = document.location.hostname; } catch(ex) { }
const styles = [];
while ( hn ) {
    if ( hostnamesMap.has(hn) ) {
        let argsHashes = hostnamesMap.get(hn);
        if ( typeof argsHashes === 'number' ) { argsHashes = [ argsHashes ]; }
        for ( const argsHash of argsHashes ) {
            const details = argsMap.get(argsHash);
            if ( details.n && details.n.includes(hn) ) { continue; }
            styles.push(details.a);
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

if ( styles.length === 0 ) { return; }

try {
    const sheet = new CSSStyleSheet();
    sheet.replace(`@layer{${styles.join(',')}{display:none!important;}}`);
    document.adoptedStyleSheets = [
        ...document.adoptedStyleSheets,
        sheet
    ];
} catch(ex) {
}

/******************************************************************************/

argsMap.clear();
hostnamesMap.clear();

/******************************************************************************/

})();

/******************************************************************************/