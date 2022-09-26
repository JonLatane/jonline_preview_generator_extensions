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

// tur-0

const argsMap = new Map([[1411651186,{"a":[{"selector":"#film","action":["style","display: block !important;"],"cssable":true}]}],[1626017112,{"a":[{"selector":".entry-content > center","tasks":[["has",{"selector":" > a[href^=\"http://bc.vc/\"] > img"}]]}]}],[1626037070,{"a":[{"selector":".newspapers > div.grid > div.grid-item","tasks":[["has",{"selector":" > div[style] > div.adpro"}]]}]}],[555259087,{"a":[{"selector":".colA > .s10widget","tasks":[["has",{"selector":" > a[href=\"https://www.yenibiris.com/\"]"}]]}]}],[1474023677,{"a":[{"selector":".theiaStickySidebar > div.widget_execphp","tasks":[["has",{"selector":" > div > h4","tasks":[["has-text","Reklam"]]}]]}]}],[648152662,{"a":[{"selector":"#sagsutunsbt .haber300x250","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":"div[class^=\"grid\"] > div[class^=\"grid\"] > div[class^=\"haber300\"]","tasks":[["has",{"selector":"a[target=\"_blank\"]:not([href*=\"gidagundemi.com\"])"}]]},{"selector":"div[class^=\"grid\"] > div[class^=\"grid\"] > div[class^=\"haber300\"]","tasks":[["has",{"selector":"ins.adsbygoogle"}]]}]}],[1424227801,{"a":[{"selector":"#printable > div[style]","tasks":[["has",{"selector":" > div[style] > div[class^=\"banner_\"]"}]]}]}],[78441575,{"a":[{"selector":".ipsList_reset > li.ipsWidget","tasks":[["has",{"selector":" > div.ipsWidget_inner > center > a[target=\"_blank\"] > img"}]]},{"selector":".ipsList_reset > li.ipsWidget","tasks":[["has",{"selector":" > div.ipsWidget_inner > center > ins.adsbygoogle"}]]}]}],[449291371,{"a":[{"selector":"#menuBG.sabitle","action":["style","top: 0!important;"],"cssable":true}]}],[1393783783,{"a":[{"selector":"#movie","action":["style","display: block !important;"],"cssable":true}]}],[783965107,{"a":[{"selector":"#cn-content","action":["style","display: block!important;"],"cssable":true}]}],[854965486,{"a":[{"selector":"aside.yanalan--right > .bilesen > .adsbygoogle","tasks":[["upward",1]]}]}],[2082434093,{"a":[{"selector":"body > div.container > div.header_big_advert","tasks":[["upward",1]]}]}],[640405043,{"a":[{"selector":"body","action":["style","overflow: visible!important;"],"cssable":true}]}],[854089163,{"a":[{"selector":"#CntnrNew > #dailymotion_widget","tasks":[["has",{"selector":" > iframe[src^=\"https://ads.yenimedya.com.tr/Partner/\"]"}]]},{"selector":".haberler-grids > div[class^=\"haberler-item\"]","tasks":[["has",{"selector":" > a[target=\"_blank\"][onclick^=\"ga('send',\"]"}]]},{"selector":".hbNewsBox > div.hbContainer > div.hbBoxScope > div.box","action":["style","background: none!important; box-shadow: none!important;"],"tasks":[["has",{"selector":" > iframe[src^=\"https://ads.yenimedya.com.tr/\"]"}]]},{"selector":".hbSideBar > div.hbBoxScope > #dailymotion_widget","tasks":[["has",{"selector":" > iframe[src^=\"https://ads.yenimedya.com.tr/Partner/\"]"}]]}]}],[1748417305,{"a":[{"selector":".galeri-grup > .galeriler > li","tasks":[["has",{"selector":"div[id^=\"ENGAGEYA_WIDGET\"]"}]]}]}],[2072939102,{"a":[{"selector":".widget-subjects > .wrapper > .box-row > .box > .ad-ver-ti-se-ment","tasks":[["upward",1]]}]}],[1863494406,{"a":[{"selector":"#Movie","action":["style","display: block!important;"],"cssable":true}]}],[1697216795,{"a":[{"selector":"#film","action":["style","display: block!important;"],"cssable":true},{"selector":"body","action":["style","background: #000000!important;"],"cssable":true}]}],[466306100,{"a":[{"selector":"#header","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[1946379134,{"a":[{"selector":"body","action":["style","background-image: none!important;"],"cssable":true}]}],[1296732044,{"a":[{"selector":".site-container","action":["style","margin-top: 10px!important;"],"cssable":true}]}],[518558380,{"a":[{"selector":".adsbygoogle","action":["style","height: 6px!important;"],"cssable":true},{"selector":".reklam-alan-tam","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[785898576,{"a":[{"selector":"div[id^=\"reki\"]","action":["remove",""]}]}],[1155076079,{"a":[{"selector":"#sag > .bilesen","tasks":[["has",{"selector":" > .bilesen-baslik","tasks":[["has-text","Sponsorlu Bağlantılar"]]}]]}]}],[1227756200,{"a":[{"selector":"div > a[href][target=\"_blank\"][style*=\"display: flex !important;\"]","action":["style","position: absolute !important; left: -3000px !important;"],"cssable":true}]}],[896045301,{"a":[{"selector":".theiaStickySidebar > div.widget_text","tasks":[["has",{"selector":" > div.widget-container > div.textwidget .adsbygoogle"}]]}]}],[1327664013,{"a":[{"selector":".widget-other-news > .custom-container > .row > .news-list.medium:not([href])","tasks":[["has",{"selector":" > div[id^=\"ENGAGEYA_WIDGET_\"]"}]]}]}],[68573761,{"a":[{"selector":".col-xs-4 > div[align=\"center\"]","tasks":[["has-text","Reklam"]]}]}],[1948673141,{"a":[{"selector":"body > div.fancybox-overlay","tasks":[["has",{"selector":" > div"}]]},{"selector":"body","action":["style","background: none!important;"],"cssable":true},{"selector":"html.fancybox-lock","action":["style","overflow: visible!important;"],"tasks":[["has",{"selector":" > body"}],["spath"," > body"]]},{"selector":"html.fancybox-lock","action":["style","overflow: visible!important;"],"tasks":[["has",{"selector":" > body"}]]}]}],[845908896,{"a":[{"selector":".adsbygoogle","action":["style","position: absolute !important; left: -3000px !important;"],"cssable":true}]}],[844651727,{"a":[{"selector":"#top_navbar ~ div.container","tasks":[["has",{"selector":" > div.header_big_advert"}]]}]}],[1831650676,{"a":[{"selector":"#siteSag > div[style]","tasks":[["has",{"selector":" > div > ins.adsbygoogle"}]]}]}],[1382296247,{"a":[{"selector":".haberDetayIcerik p > img[loading=\"lazy\"]","tasks":[["upward",1]]}]}],[1759136121,{"a":[{"selector":".sol_ana > div[class]","tasks":[["has",{"selector":" > div[style] > ins.adsbygoogle"}]]},{"selector":".theiaStickySidebar > div[class]","tasks":[["has",{"selector":" > div.bilesen-baslik"}]]},{"selector":".theiaStickySidebar > div[class]","tasks":[["has",{"selector":" > div.textwidget table[style] > tbody > tr > td","tasks":[["has-text","Mezunum"]]}]]}]}],[1276713211,{"a":[{"selector":".well-box","tasks":[["has",{"selector":" > center > ins.adsbygoogle"}]]}]}],[498747200,{"a":[{"selector":".mainTopic","tasks":[["has",{"selector":" > div.row > div.item > div.img > div[id^=\"div-gpt-ad-\"]"}]]},{"selector":".native-kutu","tasks":[["upward",1]]}]}],[2135817385,{"a":[{"selector":"body","action":["style","background: none !important;"],"cssable":true}]}],[2119139892,{"a":[{"selector":".modal-open","action":["style","overflow:visible!important;"],"cssable":true}]}],[2032741550,{"a":[{"selector":".td-ss-main-sidebar > aside.widget","tasks":[["has",{"selector":" > h4.block-title > span","tasks":[["has-text","Reklam"]]}]]}]}],[1121514131,{"a":[{"selector":".sidebar-content-fixed-scroll > aside.widget > div.widget_text > div.textwidget > ins[class] ~ script","tasks":[["upward","aside.widget"]]}]}],[583259558,{"a":[{"selector":"#game_content","action":["style","width: 100%!important; height: 100%!important;"],"cssable":true}]}],[83505737,{"a":[{"selector":".banner","action":["style","visibility: hidden !important; height: 150px !important;"],"cssable":true},{"selector":".better-ads-listitemad","action":["remove",""]},{"selector":".sidebar > .primary-sidebar-widget","tasks":[["has",{"selector":"div[data-adid]"}]]}]}],[752190062,{"a":[{"selector":".widget_text > div.textwidget ins + script","tasks":[["upward",".widget_text"]]},{"selector":".wpb_wrapper > div.widget_text","tasks":[["has",{"selector":" > strong","tasks":[["has-text","Reklam|BlockShow"]]}]]},{"selector":"aside > div.sidebar_inner > div.widget_text","tasks":[["has",{"selector":" > strong","tasks":[["has-text","Reklam"]]}]]},{"selector":"div[class^=\"sidebar_inner\"] > div.widget","tasks":[["has",{"selector":" > div.textwidget > p > a[target=\"_blank\"]"}]]}]}],[1037982058,{"a":[{"selector":".g1-collection-viewport > .g1-collection-items > .g1-injected-unit","tasks":[["has",{"selector":" > .g1-advertisement"}]]}]}],[401716301,{"a":[{"selector":".col-lg-8 > .panel-info > .panel-body > .panel > .panel-body > a[target=\"_blank\"]","tasks":[["upward",2]]}]}],[767012582,{"a":[{"selector":"aside > div.cb-sidebar-widget","tasks":[["has",{"selector":" > div.textwidget > p > a[target=\"_blank\"][rel^=\"noopener\"] > img"}]]},{"selector":"header > div.wrap > div.cb-block","tasks":[["has",{"selector":" > a[target=\"_blank\"][rel=\"noopener\"] > img"}]]}]}],[2121172001,{"a":[{"selector":"div[class^=\"Container\"] > div[class^=\"Spacer\"] div[id^=\"div-gpt-ad\"]","tasks":[["upward",1]]}]}],[1724470878,{"a":[{"selector":"","tasks":[["matches-path","^\\/$"],["spath",".container > div.row"],["has",{"selector":" > div[class^=\"col-\"] > div.banner"}]]},{"selector":"div[class*=\"latestnewslist\"] div[class^=\"col-\"]","tasks":[["has",{"selector":" > div[id^=\"adContainer\"]"}]]}]}],[1760674096,{"a":[{"selector":"#sidebar-wrapper > ul > .sidebar-widget","tasks":[["has",{"selector":" > .textwidget","tasks":[["not",{"selector":"","tasks":[["has",{"selector":" > *"}]]}]]}]]},{"selector":"#sidebar-wrapper > ul > .sidebar-widget","tasks":[["has",{"selector":"[id^=\"sas_\"]"}]]}]}],[535165799,{"a":[{"selector":".side2 > .box1 > .title-red","tasks":[["has",{"selector":" > .red-inside > .red-title","tasks":[["has-text","^Reklam$"]]}]]}]}],[2039425758,{"a":[{"selector":".page > div [id^=\"edit\"] > div[align=\"center\"]","tasks":[["has",{"selector":" > .page > div[style] > div[style] > .tborder > tbody > tr > td.thead","tasks":[["has-text","Sponsored Links"]]}]]}]}],[1951404696,{"a":[{"selector":".base_side > div.side_banner > a[href][target]","tasks":[["upward",1]]}]}],[593082932,{"a":[{"selector":"div.slick-track > a[href^=\"/service/advertclick\"]","action":["remove",""]},{"selector":"li[id^=\"slick-slide\"] > a[href^=\"/service/advertclick\"]","action":["remove",""],"tasks":[["upward",1]]}]}],[237141919,{"a":[{"selector":"div[style=\"float: right;\"] > a[href][target=\"_blank\"] > video","tasks":[["has",{"selector":" > source[src^=\"http://marastahaber.com/wp-content/uploads/\"][src$=\"/MaviTekReklam.webm\"]"}]]}]}],[1498092762,{"a":[{"selector":".content > .pst-block-head","tasks":[["has",{"selector":" > a[href=\"https://www.netpakambalaj.com/\"] > img"}]]}]}],[1775474385,{"a":[{"selector":"#right-sidebar > div","tasks":[["has-text","Reklam Alanı"]]},{"selector":".news-text > div > b > span[style^=\"font-size:\"]","tasks":[["has",{"selector":"span","tasks":[["has-text","Premium Üyelik"]]}]]}]}],[1916403491,{"a":[{"selector":"body > .categoriesBg","action":["style","top: 132px!important;"],"cssable":true},{"selector":"body > .ustLogoAlti","action":["style","top: 42px!important;"],"cssable":true}]}],[811868685,{"a":[{"selector":"#episode","action":["style","height: unset!important; width: unset!important; position: unset!important;"],"cssable":true}]}],[880286454,{"a":[{"selector":"section.sidebarWidget.nativeWidget","tasks":[["has",{"selector":" > .textwidget > p > img[src^=\"https://i.hizliresim.com/\"]"}]]}]}],[2075907833,{"a":[{"selector":".detail-content-inner > .others-news","tasks":[["has",{"selector":" > .other-news-partner"}]]}]}],[1884129703,{"a":[{"selector":".boxBlock","tasks":[["has",{"selector":" > div#AnaSayfa_SideBar_300x250_1"}]]},{"selector":".boxBlock","tasks":[["has",{"selector":" > figure > img[alt=\"Dusk of Dragons Oyna\"]"}]]}]}],[1039443197,{"a":[{"selector":".recipe-cards-area > div > div#arsiv-native","tasks":[["upward",1]]}]}],[61739667,{"a":[{"selector":".d-none > .card","tasks":[["has",{"selector":" > .card-body > .adsbygoogle"}]]}]}],[539491286,{"a":[{"selector":".sidebar > .widget > .adsbygoogle","tasks":[["upward",1]]}]}],[201018370,{"a":[{"selector":"div.bg-white","tasks":[["has",{"selector":" > span","tasks":[["has-text","^Reklam$"]]}]]}]}],[1380394384,{"a":[{"selector":"#main > aside > section.sidebarWidget","tasks":[["has-text","Sponsor Bağlantı"]]}]}],[363300464,{"a":[{"selector":"#root div[class] + div[class][style]","tasks":[["has",{"selector":" > div[class] > div[dir] > a[target=\"_blank\"][href*=\"=banner\"]"}]]}]}],[1660551202,{"a":[{"selector":".oyunsagblok > center > span","tasks":[["has-text","^Reklam$"]]},{"selector":".sagblok1 > center","tasks":[["has-text","^Reklam$"]]}]}],[223527338,{"a":[{"selector":".begenilen_anasayfa > ul > li.kitem > div[id^=\"div-gpt-ad\"]","tasks":[["upward",1]]}]}],[497376381,{"a":[{"selector":"body > div[style^=\"margin: 0 auto; width: 970px;\"]","tasks":[["has",{"selector":" > div[id^=\"reklam\"]"}]]},{"selector":"tbody > tr > td[height=\"100\"]","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":"tbody > tr > td[height=\"90\"]","tasks":[["has",{"selector":" > script","tasks":[["has-text","google_ad_client"]]}]]},{"selector":"tbody > tr > td[height^=\"25\"]","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[488856592,{"a":[{"selector":".code-block","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".sidebar-narrow > .widget > .widget-top","tasks":[["has",{"selector":" > h4","tasks":[["has-text","Sponsorlu Bağlantılar"]]}]]}]}],[663213990,{"a":[{"selector":".entry-sidebar .fixed-ratio","tasks":[["has",{"selector":" > .fixed-ratio-content > .p-bnr"}]]}]}],[1953639953,{"a":[{"selector":".adsbygoogle","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[312714914,{"a":[{"selector":"div[class*=\" \"] > div[class] > div[style^=\"height:\"] + div[class]","tasks":[["has-text","^Reklam$"],["upward",2]]}]}],[2069698983,{"a":[{"selector":".headline-side","tasks":[["has",{"selector":"a[href=\"https://www.politikars.com/ark-proje-ofisi-563062h.htm\"]"}]]}]}],[348036838,{"a":[{"selector":"div[data-testid=\"mesh-container-content\"] > div[id^=\"comp-\"] > iframe[aria-label=\"Google AdSense\"]","tasks":[["upward",1]]},{"selector":"div[data-testid=\"mesh-container-content\"] > div[id^=\"comp-\"] > wix-iframe > div > iframe[src^=\"https://www-popkedi-com.filesusr.com/html/\"]","tasks":[["upward",3]]}]}],[1817295494,{"a":[{"selector":"body div[id=\"header\"][class*=\"sticky\"]","action":["style","position: relative !important;"],"cssable":true},{"selector":"body.modern","action":["style","margin-top: -150px !important;"],"cssable":true}]}],[1338446356,{"a":[{"selector":".classifiedOtherDetails > div.uiBox","tasks":[["has",{"selector":" > div > h3","tasks":[["has-text","Sponsorlu"]]}]]}]}],[1392357848,{"a":[{"selector":"body","action":["style","background-image: none !important;"],"cssable":true}]}],[1762612496,{"a":[{"selector":".well > div.panel-heading","tasks":[["has",{"selector":" > span","tasks":[["has-text","REKLAM"]]}]]}]}],[2028616231,{"a":[{"selector":".gridlist > div.grid-item > div.complaint-card","tasks":[["has",{"selector":" > .media > div.complaint-list-square-ads"}]]}]}],[962629687,{"a":[{"selector":".p-body-pageContent > div.block","tasks":[["has",{"selector":" > div.block-container > div.block-body > a[href^=\"https://gibir.net.tr/\"]"}]]}]}],[2034153160,{"a":[{"selector":"#banner-advert-container img","action":["style","display: block!important;"],"cssable":true},{"selector":"#banner-advert-container","action":["style","display: block!important;"],"cssable":true}]}]]);

const hostnamesMap = new Map([["fullhdfilmizleabi.com",1411651186],["fullkurulum.com",1626017112],["gazeteoku.com",1626037070],["gazetevatan.com",555259087],["ggmyfriend.com",1474023677],["gidagundemi.com",648152662],["girisimhaber.com",1424227801],["golftutkusu.com",78441575],["gunbasi.com",449291371],["koroglugazetesi.com",449291371],["61medya.net",449291371],["guncelhdfilm.com",1393783783],["gununfilmleri.com",783965107],["kultfilmler.com",783965107],["xxfilmizle.com",783965107],["haberbucuk.com",854965486],["haberetanik.com",2082434093],["kanal42haber.com",2082434093],["haberintakasi.com",640405043],["karamangundem.com",640405043],["haberler.com",854089163],["fotogaleri.haberler.com",1748417305],["hthayat.haberturk.com",2072939102],["hd720pfilmizle.com",1863494406],["hdfilmcukka.com",1697216795],["hdfilmhit.com",466306100],["fullhdfilmizle.pw",466306100],["hdfilmifullizle.com",[1946379134,1296732044]],["technopat.net",1946379134],["pchocasi.com.tr",1946379134],["iddaaorantahmin.com",518558380],["imdbfilmizle.com",785898576],["incesoz.com",1155076079],["indirmp3mobil.com",1227756200],["mp3indirhane.com",1227756200],["tubazymp3.com",1227756200],["ceptenmuzikindir.me",1227756200],["mp3indirelim.org",1227756200],["ingilizcenotlar.com",896045301],["internethaber.com",1327664013],["istikbalgazetesi.com",68573761],["itemci.com",1948673141],["jurnalci.com",845908896],["kemergozcu.com",844651727],["keyfgazetesi.com",1831650676],["kibrisgercek.com",1382296247],["kibriswebhaber.com",1759136121],["kimintelefonu.com",1276713211],["kimkazandi.com",498747200],["kizlarsoruyor.com",2135817385],["kocaelikoz.com",2119139892],["koinfinans.com",2032741550],["koinmedya.com",1121514131],["kraloyun.com",583259558],["kriptoarena.com",83505737],["kriptokoin.com",752190062],["kriptoparahaber.com",1037982058],["paragezegeni.com",1037982058],["kriptoparapiyasasi.com",401716301],["kulturmafyasi.com",767012582],["letgo.com",2121172001],["lifebursa.com",1724470878],["listelist.com",1760674096],["lordiz.com",535165799],["mach1digital.com",2039425758],["malatyaguncel.com",1951404696],["mansetaydin.com",593082932],["marastahaber.com",237141919],["marketdergisi.com",1498092762],["medyaindir1.com",1775474385],["memohaber.com",1916403491],["morfilmizle.com",811868685],["muglayenigun.com",880286454],["mynet.com",2075907833],["oyun.mynet.com",1884129703],["nefisyemektarifleri.com",1039443197],["ogrenciyegelir.com",61739667],["ogznet.com",539491286],["onedio.com",201018370],["otokokpit.com",1380394384],["otuzbeslik.com",363300464],["oyunbus.com",1660551202],["oyunkolu.com",223527338],["oyunkuzusu.com",497376381],["ozengen.com",488856592],["paratic.com",663213990],["piyasaanketi.com",1953639953],["teknoblog.com",1953639953],["ucuzaucak.net",1953639953],["poki.com",312714914],["politikars.com",2069698983],["popkedi.com",348036838],["realhdfilmizle.com",1817295494],["sahibinden.com",1338446356],["sezonlukdizi2.com",1392357848],["turkcealtyazi.org",1392357848],["siberdeyiz.com",1762612496],["sikayetvar.com",2028616231],["silicone-forum.com",962629687],["simulasyonturk.com",2034153160]]);

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
