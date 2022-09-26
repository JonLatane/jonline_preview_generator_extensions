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

const argsMap = new Map([[1391582174,{"a":[{"selector":".videoAdBlock > div.content","action":["style","display: block !important;"],"cssable":true}]}],[1718461590,{"a":[{"selector":".tbanner","action":["style","visibility: hidden !important;"],"cssable":true}]}],[597213135,{"a":[{"selector":".gutters-sm > div[class=\"col-md-3 d-none d-md-block\"]","tasks":[["has",{"selector":" > [id^=\"reklamokul\"]:not(#reklamokul2)"}]]}]}],[165330857,{"a":[{"selector":".nav > div[align=\"center\"] > div[style] > table.tborder","tasks":[["has",{"selector":" > tbody > tr > td.tcat","tasks":[["has-text","Sponsorlar"]]}]]},{"selector":".nav div[id=\"pagenav_menu\"] + div[style]","tasks":[["has",{"selector":" > table.tborder > tbody > tr > td.thead > b","tasks":[["has-text","Reklam"]]}]]}]}],[1551278313,{"a":[{"selector":".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links","action":["style","display:block!important;"],"cssable":true}]}],[949326855,{"a":[{"selector":"body > main > div[class] > .rPanel","tasks":[["has",{"selector":" > .head","tasks":[["has-text","^Reklam $"]]}]]},{"selector":"body > main","action":["style","padding-left: unset !important;"],"cssable":true}]}],[985179917,{"a":[{"selector":".sag > div.sidebarbas","tasks":[["has",{"selector":" > div.textwidget > center > a[target=\"_blank\"] > img"}]]},{"selector":".sag > div.sidebarbas","tasks":[["has",{"selector":" > div.textwidget > center > ins.adsbygoogle"}]]}]}],[189488000,{"a":[{"selector":".td-ss-main-sidebar > .td_block_template_1.widget_text","tasks":[["has",{"selector":" > h4 > span","tasks":[["has-text","Sponsor"]]}]]}]}],[430396784,{"a":[{"selector":".sidebar > div[id^=\"custom_html-\"] > .textwidget > .thb-ad","tasks":[["upward",2]]}]}],[2121054434,{"a":[{"selector":".main > #baslik","tasks":[["has",{"selector":" > [class^=\"lol\"]"}]]}]}],[1044535325,{"a":[{"selector":".sidebar > div.sidebar_list > aside.widget","tasks":[["has",{"selector":" > div.textwidget > a[rel^=\"nofollow\"]"}]]}]}],[609397537,{"a":[{"selector":".wrap > .maltibanner","tasks":[["has",{"selector":" > a[href]"}]]}]}],[355344071,{"a":[{"selector":".ads","action":["remove",""]}]}],[377390530,{"a":[{"selector":".samBackground[style]","action":["style","background-image: none!important;"],"cssable":true},{"selector":".td-background-link #td-outer-wrap","action":["style","cursor: auto !important;"],"cssable":true},{"selector":".x-root","action":["style","background-image: none !important;"],"cssable":true},{"selector":"body > #x-root","action":["style","background-image: none!important;"],"cssable":true},{"selector":"body.td-ad-background-link #td-outer-wrap","action":["style","cursor: auto!important;"],"cssable":true},{"selector":"body.td-ad-background-link","action":["style","background-image: none!important;"],"cssable":true}]}],[1513251728,{"a":[{"selector":".sidebar > div > .sidct","tasks":[["has",{"selector":" > h3","tasks":[["has-text","Reklam"]]}]]}]}],[568496644,{"a":[{"selector":".sFlexCont > .sFlexElement[style] > .adsbygoogle","tasks":[["upward",1]]}]}],[1196053041,{"a":[{"selector":".sag > .anatablo","tasks":[["has",{"selector":" > .karereklam"}]]}]}],[2018397281,{"a":[{"selector":".main-content > div[id^=\"tie-block_\"].stream-item","tasks":[["has",{"selector":" > .container-wrapper > .adsbygoogle"}]]}]}],[1917759222,{"a":[{"selector":"#sidebar-right > div.widget","tasks":[["has",{"selector":" > div.sidebarnav > h3 > div[style]","tasks":[["has-text","Reklam"]]}]]}]}],[1804977534,{"a":[{"selector":".widget_text","tasks":[["has-text","Reklamları"]]}]}],[3057997,{"a":[{"selector":".ContentAnasayfa > fieldset > legend","tasks":[["has-text","^Reklam$"]]}]}],[477838682,{"a":[{"selector":"#header","tasks":[["has",{"selector":" > a[alt=\"reklam\"]"}]]}]}],[1625532138,{"a":[{"selector":".module > div.module-inner div.bannergroup","tasks":[["upward",".module"]]}]}],[1149214881,{"a":[{"selector":"#sidebar > li","tasks":[["has",{"selector":" > .block.smaller span.blocktitle","tasks":[["has-text","Sponsor"]]}]]}]}],[856398214,{"a":[{"selector":".td-ss-main-sidebar aside.widget.widget_text","tasks":[["has",{"selector":"span","tasks":[["has-text","Reklam"]]}]]}]}],[336456812,{"a":[{"selector":"#sidebar > li","tasks":[["has",{"selector":"span.blocktitle","tasks":[["has-text","Reklamlar"]]}]]}]}],[1170744365,{"a":[{"selector":"#content-area ins.adsbygoogle","tasks":[["upward",2]]}]}],[1019140190,{"a":[{"selector":"#videos","action":["style","display: block !important;"],"cssable":true}]}],[1469087049,{"a":[{"selector":".theiaStickySidebar > aside.widget ins.adsbygoogle","tasks":[["upward","aside.widget"]]}]}],[874375340,{"a":[{"selector":".p-body > .p-body-inner > div[style=\"text-align: center\"] > a.link--external[target=\"_blank\"]","tasks":[["upward",1]]}]}],[361199081,{"a":[{"selector":".fullstory > a[href*=\"clck.php\"][target=\"_blank\"]","action":["style","position: absolute!important; left: -4000px!important;"],"cssable":true},{"selector":".swal2-shown","action":["style","overflow:visible!important;"],"cssable":true}]}],[774195494,{"a":[{"selector":".reklam-row > .rro-col > .rro-bg","tasks":[["has",{"selector":" > a[href][target=\"_blank\"] > img"}]]}]}],[1149038717,{"a":[{"selector":"body","action":["style","overflow: auto !important;"],"cssable":true}]}],[30699964,{"a":[{"selector":"#vast > iframe[src]","action":["style","display: block !important;"],"cssable":true}]}],[1822415516,{"a":[{"selector":"#mobil-header","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[1444699580,{"a":[{"selector":"#mvp-site-main","action":["style","margin-top: 0!important;"],"cssable":true}]}],[801630680,{"a":[{"selector":"body","action":["style","background: #0b0e1a !important;"],"cssable":true}]}],[1457550788,{"a":[{"selector":".sag > .sysk","tasks":[["has",{"selector":" > .strrklm2"}]]}]}],[2008390626,{"a":[{"selector":"#content-wrapper > div[id$=\"-kule\"]","action":["style","visibility: hidden !important;"],"cssable":true},{"selector":"#text > div[style^=\"height:\"] > div[id^=\"div-gpt-ad\"]","tasks":[["upward",1]]},{"selector":".col-4 > div[style^=\"height\"] > [id^=\"div-gpt-ad\"]","tasks":[["upward",1]]},{"selector":".column > .center","tasks":[["has",{"selector":" > div > div[id^=\"div-gpt-ad-\"]"}]]},{"selector":".shaperin1sol > .fbw","tasks":[["has",{"selector":" > div[id^=\"ENGAGEYA_WIDGET_\"]"}]]},{"selector":"div[style^=\"height:\"] > [id^=\"div-gpt-ad\"]","tasks":[["upward",1]]},{"selector":"div[style^=\"height:\"] > div[id^=\"ENGAGEYA_WIDGET_\"]","tasks":[["upward",1]]},{"selector":"div[style^=\"width:\"] > [id^=\"div-gpt-ad\"]","tasks":[["upward",1]]}]}],[1615374914,{"a":[{"selector":".card.bg-body > h4.text-warning","tasks":[["has-text","Sponsor"]]}]}],[481928094,{"a":[{"selector":".page-wrapper > .container > .row > div[class=\"col-12 col-md-6 col-lg-4 view-20\"] > .advers-box","tasks":[["upward",1]]}]}],[900936334,{"a":[{"selector":".sidebar > .RandomPostWidget > #rotating-item-wrapper4","tasks":[["has",{"selector":" > a[href=\"http://www.aydtr.com/\"]"}]]}]}],[1342328987,{"a":[{"selector":".theiaStickySidebar > .widget-container","tasks":[["has",{"selector":" > .widget-list-ads"}]]}]}],[1433182760,{"a":[{"selector":".adsmd","action":["style","height: 1px!important;"],"cssable":true}]}],[1755203411,{"a":[{"selector":".side-iframe-box > div","tasks":[["has",{"selector":" > iframe[name=\"BIKADV\"]"}]]}]}],[6169305,{"a":[{"selector":"body","action":["style","overflow: auto !important; padding-right: 0 !important;"],"cssable":true}]}],[1657863341,{"a":[{"selector":".sidebar_widget > .widget_text","tasks":[["has",{"selector":" > .textwidget > p > .adsbygoogle"}]]}]}],[1396869737,{"a":[{"selector":"body > div.row","tasks":[["has",{"selector":" > div[class] > div[id^=\"ENGAGEYA_WIDGET\"]"}]]}]}],[88862028,{"a":[{"selector":".container > div.row","tasks":[["has",{"selector":" > div[style] > div[class^=\"container-ads\"]"}]]},{"selector":".swiper-wrapper > div.swiper-slide","tasks":[["has",{"selector":" > a[href^=\"/reklam/\"]"}]]},{"selector":".with-popup","action":["style","overflow: visible!important;"],"cssable":true},{"selector":"body.with-bg","action":["style","padding-top: 0!important;"],"cssable":true}]}],[15857715,{"a":[{"selector":".in-view-ads","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[2092800235,{"a":[{"selector":"tbody > tr > td[width=\"307\"][valign=\"top\"][bgcolor=\"#FFFFFF\"] > table[width=\"100%\"][cellpadding=\"8\"]","tasks":[["has",{"selector":"iframe[name=\"BIKADV\"]"}]]}]}],[615434500,{"a":[{"selector":".solbar > .sol-kutu","tasks":[["has",{"selector":" > .m-baslik > p > b","tasks":[["has-text","^SPONSOR REKLAMLAR$"]]}]]}]}],[859177858,{"a":[{"selector":".p-body-inner > .notices > .notice","tasks":[["has",{"selector":" > .notice-content > center > a[href^=\"https://bit.ly/\"] > img"}]]},{"selector":".p-body-sidebar > div.block","tasks":[["has",{"selector":" > div.block-container > h3.block-minorHeader","tasks":[["has-text","Reklam"]]}]]}]}],[1446439420,{"a":[{"selector":".main_container + div.main-sidebar > div.tr_e3lan-widget","tasks":[["has",{"selector":"img[alt=\"ad\"]"}]]},{"selector":".tr_e3lan-widget","tasks":[["has",{"selector":" > script"}]]}]}],[2141735173,{"a":[{"selector":".row > div.col-4","tasks":[["has",{"selector":" > div.bg-white > div.bg-filigran > div.ads-wrapper"}]]}]}],[1418677532,{"a":[{"selector":".bigpara-homepage-widget","action":["style","height: calc(100%)!important;"],"cssable":true},{"selector":".box__item","tasks":[["has",{"selector":" > section.adv"}]]},{"selector":".flex-row > section.flex-col-left > div.infinitegallery-picture-container","tasks":[["has-text","Bahis"]]},{"selector":".homepage-news-top div.news-wrapper","tasks":[["has",{"selector":" > a[href^=\"https://\"]:not([href^=\"http://www.hurriyet.com.tr/\"])[target=\"_blank\"]"}]]},{"selector":".news-right-content > div.sticky-wrapper","tasks":[["has",{"selector":" > div.sticky > section.adv"}]]},{"selector":".rhd-all-article-detail > p","tasks":[["has",{"selector":" > strong","tasks":[["has-text","Misli\\.com"]]}]]}]}],[724853661,{"a":[{"selector":".flex-column > .sosyal-medya-alt","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1436010003,{"a":[{"selector":"#sidebar > .sidebar-box > h4 > span","tasks":[["has-text","^REKLAM$"],["upward",2]]}]}],[1712359644,{"a":[{"selector":".grid-stack-item","tasks":[["has",{"selector":" > div.Reklam_001","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"iframe[src^=\"http://mardinhaber.tv/\"]"}]]}],["not",{"selector":"","tasks":[["has",{"selector":"a[href^=\"http://www.mardinhaber.tv\"]"}]]}]]}]]}]}],[166573621,{"a":[{"selector":".gllAd","action":["style","visibility: hidden;"],"cssable":true},{"selector":".ligatusWidget > div.recommendation > ul > li","tasks":[["has",{"selector":"div.imageContainer","tasks":[["has-text","REKLAM"]]}]]}]}],[1410806812,{"a":[{"selector":"div[class^=\"adv-\"]","action":["style","height: 0 !important;"],"cssable":true}]}],[1784711620,{"a":[{"selector":"#iki.oynama","action":["style","display: block !important;"],"cssable":true},{"selector":"#orta > .karisikOyunlarr > div > .adsbygoogle","tasks":[["upward",2]]}]}],[1896397471,{"a":[{"selector":"#panels > div.nativeWidget","tasks":[["has",{"selector":" > div.sidebarWidget > div.bc_random_banner"}]]},{"selector":"div[id^=\"site\"] > div[style^=\"width\"]","tasks":[["has",{"selector":" > div[style] strong","tasks":[["has-text","REKLAM"]]}]]}]}],[116849511,{"a":[{"selector":".card-type > div.card","tasks":[["has",{"selector":" > div.adsbox"}]]}]}],[2039926474,{"a":[{"selector":".container > div[class=\"row section\"] + div[class=\"row row-flex section\"]","tasks":[["has",{"selector":" > div.col-flex > figure.multiple > a[href=\"http://tinyurl.com/yawtosx4\"]"}]]},{"selector":".row-flex > .col-flex","tasks":[["has",{"selector":"a[href^=\"https://bit.ly\"]"}]]},{"selector":"header.advertControlArea","action":["style","top: 0!important;"],"cssable":true}]}],[881283317,{"a":[{"selector":".yanwidget > .widget > .do-space","tasks":[["has",{"selector":"div[id^=\"div-gpt-ad\"]"}]]}]}],[2124003254,{"a":[{"selector":"#galleryContent","action":["style","visibility: visible!important;"],"cssable":true},{"selector":".sidebar > div.widget","tasks":[["has",{"selector":" > div.kutu > div.textwidget > iframe[name=\"BIKADV\"]"}]]}]}],[2137166091,{"a":[{"selector":".browse-content > div.browse-content-inner","tasks":[["has",{"selector":" > div.news-box > a[href^=\"http://bit.ly/\"]"}]]},{"selector":".browse-content-inner > .news-box","tasks":[["has",{"selector":" > a[href^=\"http://bit.ly/\"]"}]]},{"selector":".listed-news#sz_manset_alti > div[class^=\"case-\"]","tasks":[["has",{"selector":" > div.cas-inner > div.news-box > a[href^=\"http://bit.ly/\"]"}]]}]}],[858031551,{"a":[{"selector":".news-wrapper > .flex.center","tasks":[["has",{"selector":" > div[id^=\"ENGAGEYA_WIDGET_\"]:only-child"}]]},{"selector":"li","tasks":[["has",{"selector":" > a[href*=\"//apps.star.com.tr/advredir\"]"}]]}]}],[1850145456,{"a":[{"selector":".editorial-selection > .three-column > .column.left","tasks":[["has",{"selector":"[id^=\"div-gpt-ad-\"]"}]]},{"selector":".top-banner-wrapper","action":["style","padding: 1px!important; background-color: #007fc5!important;"],"cssable":true}]}],[1388872616,{"a":[{"selector":".Banner","action":["style","border: none !important;"],"cssable":true},{"selector":"a[href$=\"#ReklamRezervasyon\"]","action":["style","visibility:hidden !important;"],"cssable":true}]}],[218571227,{"a":[{"selector":".footer","action":["style","display: table;"],"cssable":true}]}],[1530855673,{"a":[{"selector":".module-default-topHeadlines > .box > ul > li","tasks":[["has",{"selector":" > a[href^=\"https://yeniakit.com.tr/ads\"]"}]]}]}],[1457341263,{"a":[{"selector":"#custom_html-3","tasks":[["has",{"selector":"a[href=\"https://www.pazar365.com/\"]"}]]}]}],[576598252,{"a":[{"selector":"section > div.textwidget","tasks":[["has",{"selector":" > p > a[target=\"_blank\"][rel^=\"noopener\"]"}]]}]}],[1731721175,{"a":[{"selector":"#table1 > tbody > tr > td.info","tasks":[["has",{"selector":" > center > script[src*=\"pagead2.googlesyndication.com\"]"}]]}]}],[978247098,{"a":[{"selector":"div[class^=\"col-\"] > div.row","tasks":[["has",{"selector":" > div[class] > hr.altCizgi"}]]}]}],[1263806539,{"a":[{"selector":".view-content > .videogallery-thumbnail-fix-height","tasks":[["has",{"selector":"div.ad-adsense"}]]}]}],[2100758606,{"a":[{"selector":".sidebar > .widget","tasks":[["has",{"selector":"a[href=\"http://www.1074cankirispor.org\"]"}]]}]}],[1818806106,{"a":[{"selector":"td[valign=\"top\"]","tasks":[["has",{"selector":"table[cellspacing=\"1\"] b","tasks":[["has-text","Reklamlar"]]}]]}]}],[924462059,{"a":[{"selector":"html.uk-modal-page > body","action":["style","overflow: auto !important;"],"cssable":true},{"selector":"html.uk-modal-page","action":["style","overflow: auto !important;"],"cssable":true}]}],[564587928,{"a":[{"selector":".full-news-content > center","tasks":[["has",{"selector":" > a[href^=\"http://ngsbahis62.com/\"]"}]]},{"selector":".full-news-content > center","tasks":[["has-text","Sponsoru Ngsbahis"]]}]}],[770539974,{"a":[{"selector":"#oframeplayerjs > pjsdiv[style]","tasks":[["has",{"selector":" > pjsdiv > pjsdiv[style*=\"background: rgb(255, 0, 0);\"]"}]]}]}],[951491021,{"a":[{"selector":"#oframeplayerjs > pjsdiv","tasks":[["has",{"selector":" > pjsdiv > button[is=\"google-cast-button\"]"}],["spath"," + pjsdiv[style]"]]}]}]]);

const hostnamesMap = new Map([["mobeseizle.net",1391582174],["motosiklet.net",1718461590],["okultanitimi.net",597213135],["opelim.net",165330857],["osxinfo.net",1551278313],["r10.net",949326855],["rehberlikservisi.net",985179917],["saglikbilgisi.net",189488000],["shiftdelete.net",430396784],["solidshare.net",2121054434],["sordum.net",1044535325],["starkibris.net",609397537],["tafdi.net",355344071],["technopat.net",377390530],["teknobilmarket.net",1513251728],["turkegitim.net",568496644],["turkudostlari.net",1196053041],["unikampus.net",2018397281],["unyetv.net",1917759222],["videoseyredin.net",1804977534],["vipingilizce.net",3057997],["webteizle.one",477838682],["21yyte.org",1625532138],["akademikpersonel.org",1149214881],["androidtr.org",856398214],["appleyardim.org",336456812],["aydinlatma.org",1170744365],["filmdelisi.org",1019140190],["oyuncukuru.org",1469087049],["spyhackerz.org",874375340],["torrenthd.org",361199081],["turkhackteam.org",774195494],["turkishairforce.org",1149038717],["karadenizgazete.com.tr",[1149038717,724853661]],["filmmom.pro",30699964],["fullhdfilmizle.pw",1822415516],["gazetem.ru",1444699580],["ranzhuai.top",801630680],["59.com.tr",1457550788],["aksam.com.tr",2008390626],["aksiyon.com.tr",1615374914],["aspor.com.tr",481928094],["autoparts.com.tr",900936334],["aykutozdemir.com.tr",1342328987],["baho.com.tr",1433182760],["bbnhaber.com.tr",1755203411],["besiktas.com.tr",6169305],["btnet.com.tr",1657863341],["capital.com.tr",1396869737],["cumhuriyet.com.tr",88862028],["fanatik.com.tr",15857715],["finikeakdeniz.com.tr",2092800235],["freemagazine.com.tr",615434500],["forum.gamer.com.tr",859177858],["gidaturk.com.tr",1446439420],["haber365.com.tr",2141735173],["hurriyet.com.tr",1418677532],["maisonfrancaise.com.tr",1436010003],["mardinhaber.com.tr",1712359644],["milliyet.com.tr",166573621],["muud.com.tr",1410806812],["oyunu.com.tr",1784711620],["pasada.com.tr",1896397471],["posta.com.tr",116849511],["sabah.com.tr",2039926474],["salom.com.tr",881283317],["sonsaat.com.tr",2124003254],["sozcu.com.tr",2137166091],["star.com.tr",858031551],["t24.com.tr",1850145456],["tercihrobotu.com.tr",1388872616],["turkiyegazetesi.com.tr",218571227],["yeniakit.com.tr",1530855673],["yenicikanlar.com.tr",1457341263],["yenimeram.com.tr",576598252],["felsefe.gen.tr",1731721175],["trt.net.tr",978247098],["haber.sol.org.tr",1263806539],["cankiri.tv",2100758606],["gazeteoku.tv",1818806106],["ssport.tv",924462059],["stadyum.tv",564587928],["jojdn2.xyz",770539974],["swang10.xyz",951491021]]);

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
