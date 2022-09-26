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

const argsMap = new Map([[1010254432,{"a":[{"selector":".yildiz-pageskin #header","action":["style","margin: 0 auto 0px auto !important;"],"cssable":true}]}],[1649183660,{"a":[{"selector":".once-reklam","action":["remove",""]}]}],[891572746,{"a":[{"selector":".herald-sidebar > div.widget","tasks":[["has",{"selector":"a[target=\"_blank\"][rel^=\"noopener\"] > img"}]]}]}],[1027301255,{"a":[{"selector":".entry-content > center","tasks":[["has",{"selector":" > a[target=\"_blank\"] > img"}]]}]}],[795608204,{"a":[{"selector":".content-container > #aside > div[style=\"height:600px;\"]","tasks":[["upward",1]]},{"selector":".news-row > .news-item","tasks":[["has",{"selector":" > .wrapper > a[rel=\"nofollow\"][href^=\"https://ads.sondakika.com/redir.asp?\"]"}]]}]}],[731807210,{"a":[{"selector":".td-ss-main-sidebar > .td_block_template_1.widget","tasks":[["has",{"selector":" > .block-title","tasks":[["has-text","Sponsor"]]}]]},{"selector":".wpb_wrapper > .td-a-rec-id-sidebar","tasks":[["has",{"selector":".td-adspot-title"}]]},{"selector":"aside","tasks":[["has",{"selector":" > h4 > span","tasks":[["has-text","SPONSOR"]]}]]}]}],[842191435,{"a":[{"selector":".video-list > ul > li","tasks":[["has",{"selector":" > div[id^=\"div-gpt-ad-\"]"}]]}]}],[3548722,{"a":[{"selector":".theiaStickySidebar > div.widget_text","tasks":[["has",{"selector":" > div.textwidget > ins.adsbygoogle"}]]}]}],[1265612284,{"a":[{"selector":".category-populer > .yan-gri","tasks":[["has",{"selector":" > .ad-title"}]]},{"selector":".category-sag > .yan-gri","tasks":[["has",{"selector":" > #reklam-ver-link"}]]}]}],[2072706082,{"a":[{"selector":".theiaStickySidebar > .bilesen","tasks":[["has",{"selector":" > .w_baslik > div[style=\"color:#FFF; text-decoration:none;\"]","tasks":[["has-text","Sponsorlu Bağlantılar"]]}]]}]}],[917916122,{"a":[{"selector":"#headertop","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[1633248165,{"a":[{"selector":".after-ads","action":["style","display: block!important;"],"cssable":true}]}],[1553759992,{"a":[{"selector":"body > .new_content.shadow1","tasks":[["has",{"selector":" > .header_big_advert"}]]}]}],[662061078,{"a":[{"selector":".pull-left > .box","tasks":[["has",{"selector":" > script","tasks":[["has-text","sas\\.render"]]}]]},{"selector":"ul.app-features","action":["style","margin-top: 0!important;"],"cssable":true}]}],[458309140,{"a":[{"selector":".header[style^=\"margin-top:\"]","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[643728352,{"a":[{"selector":".hp-showcase-item","tasks":[["has-text","GA_googleFillSlot"]]}]}],[1448503464,{"a":[{"selector":"#main > #content[style^=\"margin-top:\"]","action":["style","padding-top: 0!important;"],"cssable":true},{"selector":"#main > .header-wrapper + .clearfix + div[style=\"float:left;width:100%;text-align:center;margin:70px 0 0 0;min-height:90px;\"]","action":["style","margin-top: 10px!important;"],"cssable":true}]}],[1296018750,{"a":[{"selector":".sidebar-content > .sidebar-top > p","tasks":[["has-text","^Reklam$"],["upward",1]]}]}],[1622797575,{"a":[{"selector":".tdc_zone > div.tdc-row","tasks":[["has",{"selector":" > div.vc_row div.wpb_wrapper > div.td-fix-index > div[class^=\"tekno-banner-alani-\"]"}]]},{"selector":".vc_column > div.wpb_wrapper","tasks":[["has",{"selector":" > div.td-a-rec-id-header"}]]},{"selector":".wpb_wrapper > div.vc_row_inner","tasks":[["has",{"selector":" > div.vc_column_inner div.wpb_wrapper > div.td-fix-index > div[id^=\"tekno-\"]"}]]}]}],[1786620370,{"a":[{"selector":".td-ss-main-sidebar > .ai-viewport-2","tasks":[["has",{"selector":" > .code-block > .adsbygoogle"}]]}]}],[315130650,{"a":[{"selector":"#sag > .bilesen","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":"#sol > div","tasks":[["has",{"selector":".adsbygoogle"}]]}]}],[912966863,{"a":[{"selector":".columns.is-multiline > .column > .card-sl > .sponsorlu","tasks":[["upward",2]]},{"selector":".columns.is-multiline > .column > center > amp-ad","tasks":[["upward",2]]}]}],[338793335,{"a":[{"selector":".CloudWrapper > div[align=\"center\"] > span.previous_results_class > center > .adsbygoogle","tasks":[["upward",2]]}]}],[1083008217,{"a":[{"selector":".sagKolon > .sagItem","tasks":[["has",{"selector":" > script"}]]}]}],[614091873,{"a":[{"selector":".ad-scrollpane","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[415906340,{"a":[{"selector":".in-bg-pop > #morev","tasks":[["has",{"selector":" > div[id*=\"ScriptRoot\"]"}]]}]}],[2052975121,{"a":[{"selector":"body","action":["style","overflow: visible !important;"],"cssable":true}]}],[755972194,{"a":[{"selector":".inf_append > div.card","tasks":[["has",{"selector":" > div.text-center > ins.adsbygoogle"}]]}]}],[1857839000,{"a":[{"selector":".kardesKutu","tasks":[["has",{"selector":" > iframe[src*=\"/zoneReklam\"]"}]]},{"selector":".kardesKutu","tasks":[["has",{"selector":" > img[src=\"/img/logust.jpg\"]"}]]}]}],[1186434184,{"a":[{"selector":"#sidebar > .temayan > .textwidget > p > a[href][target=\"_blank\"] > img[width=\"300\"][height=\"250\"]","tasks":[["upward",4]]}]}],[1618820312,{"a":[{"selector":".samOverlay_30","tasks":[["has",{"selector":" > div.overlay > div.overlay-title","tasks":[["has-text","Reklam"]]}]]}]}],[2146989194,{"a":[{"selector":".col-right-sticky > .row > .col-12","tasks":[["has",{"selector":".adControl"}]]}]}],[909099619,{"a":[{"selector":".sidebar-widget > .textwidget","tasks":[["has",{"selector":" > a[href=\"https://www.avsavip.com/\"][target=\"_blank\"]"}]]}]}],[837785155,{"a":[{"selector":"div[data-testid=\"mesh-container-content\"] > div[id^=\"comp-\"]","tasks":[["has",{"selector":" > div[style] > div[class]","tasks":[["has-text","^Widget Didn’t Load$"]]}]]},{"selector":"div[data-testid=\"mesh-container-content\"] > div[id^=\"comp-\"]","tasks":[["has",{"selector":" > iframe[title=\"Google AdSense\"]"}]]}]}],[1908361774,{"a":[{"selector":".theiaStickySidebar > div.stream-item-widget","tasks":[["has",{"selector":" > .stream-item-widget-content > .adsbygoogle"}]]}]}],[238434870,{"a":[{"selector":"#sidebar > div.widget","tasks":[["has",{"selector":" > div.widget-header > h3.widget-title","tasks":[["has-text","Sponsor"]]}]]}]}],[1074359062,{"a":[{"selector":"#secondary > div.g1-column-inner > aside[id^=\"text-\"]","tasks":[["has",{"selector":"header > h2","tasks":[["has-text","Reklamlar"]]}]]},{"selector":".g1-row-inner > div[id^=\"g1-column\"]","tasks":[["has-text","REKLAM"]]},{"selector":".g1-sidebar > aside[id^=\"text-\"] > header > h2[class=\"g1-delta g1-delta-2nd widgettitle\"]","tasks":[["has-text","Reklamlar"]]}]}],[59067886,{"a":[{"selector":".entry-content > div.film-content > div.film-share","tasks":[["upward",1]]}]}],[580256863,{"a":[{"selector":".wt-container[style*=\"padding-top: 0px;\"]","action":["style","padding-top: 60px!important;"],"cssable":true},{"selector":".wt-masthead","action":["style","padding: 0 !important;"],"cssable":true}]}],[1943442616,{"a":[{"selector":"#content-left > .medium_title","tasks":[["has-text","Sponsor Bağlantılar"]]},{"selector":"#content-right .flickr > center > h3","tasks":[["has-text","Sponsor Bağlantılar"]]}]}],[2012014196,{"a":[{"selector":".page > div[align=\"left\"] > div[id^=\"edit\"] > .vbseo_like_postbit[align=\"center\"]","tasks":[["has",{"selector":" > tbody > tr > td > a[href][rel=\"sponsored\"] > img"}]]},{"selector":"table[align=\"center\"][cellspacing=\"1\"]","tasks":[["has",{"selector":" > tbody > tr > td > a[rel=\"sponsored\"]"}]]},{"selector":"table[align=\"center\"][cellspacing=\"1\"]","tasks":[["has",{"selector":" > tbody > tr > td > a[title*=\"Reklam\"]"}]]}]}],[1739642568,{"a":[{"selector":".box-news > .row > .col-md-4 > .banner","tasks":[["upward",1]]}]}],[333868419,{"a":[{"selector":".sidebar > div.widget-container","tasks":[["has-text","Reklam"]]}]}],[425443628,{"a":[{"selector":"#preroll_skip_btn","action":["style","display: block !important;"],"cssable":true}]}],[1230653261,{"a":[{"selector":".content-block > div.block","tasks":[["has",{"selector":" > div.block-content > a[target=\"_blank\"] > img"}]]}]}],[167428420,{"a":[{"selector":".wrap-imagebox > .row > .col-md-12","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]}]}],[1485153707,{"a":[{"selector":"div[id^=\"edit\"] > div[style*=\"stylevar\"] > table > tbody > tr > .thead","tasks":[["has-text","^Reklamlar$"],["upward",3]]}]}],[715477492,{"a":[{"selector":"section#results #header","action":["style","background-image: none!important;"],"cssable":true}]}],[6819995,{"a":[{"selector":"#sidebar1 > div[style^=\"border-bottom:\"]","tasks":[["has",{"selector":"a[href=\"http://store.zaytung.com\"]"}]]}]}],[478554176,{"a":[{"selector":".sb-right > div.sb-widget","tasks":[["has",{"selector":" > div.ad-widget"}]]}]}],[89259350,{"a":[{"selector":"body > #cboxOverlay","tasks":[["has",{"selector":" + #colorbox","tasks":[["has",{"selector":"#popup-reklam"}]]}]]},{"selector":"body > #colorbox","tasks":[["has",{"selector":"#popup-reklam"}]]}]}],[1169093483,{"a":[{"selector":"#usttekiReklam","action":["remove",""]},{"selector":".adsbygoogle","action":["style","height:1px!important;"],"cssable":true}]}],[1210534182,{"a":[{"selector":".container > section#content > p[style]","tasks":[["has-text","SEX YAPABİLECEĞİM"]]}]}],[14561610,{"a":[{"selector":".vce-main-content > div[id^=\"main-box-\"]","tasks":[["has",{"selector":" > .main-box-inside > p > .adsbygoogle"}]]}]}],[1076697096,{"a":[{"selector":"#dinami","action":["style","display: block !important;"],"cssable":true}]}],[621896156,{"a":[{"selector":"#kendisi","action":["style","display: block !important;"],"cssable":true}]}],[1789839905,{"a":[{"selector":"#VideOnrekLam","action":["remove",""]},{"selector":".movplay > div[id^=\"Oncvideo\"] a[href][target=\"_blank\"] > video","action":["remove",""]}]}],[939940708,{"a":[{"selector":"#kendisi","action":["style","display: block!important;"],"cssable":true},{"selector":"video#SlotBar > source[src^=\"/reklams/\"]","action":["remove",""]}]}],[1975999626,{"a":[{"selector":".rfs > .div","tasks":[["has",{"selector":"a[href^=\"http://track.bcvc.mobi/earn.php\"]"}]]}]}],[1579223666,{"a":[{"selector":".thead","tasks":[["has-text","Reklam"],["upward",2]]},{"selector":"div[style=\"padding:0px 10px 0px 10px\"] > div[id=\"posts\"] > table[class=\"tborder\"][width=\"100%\"][align=\"center\"]","tasks":[["has",{"selector":"td.thead","tasks":[["has-text","Sponsorlu Baglantilar"]]}]]}]}],[1617619346,{"a":[{"selector":"span.stream-title","tasks":[["has-text","^Reklam$"]]}]}],[588129193,{"a":[{"selector":".sidebar > div.widget","tasks":[["has",{"selector":" > div.textwidget > p > a[href^=\"https://mubi.com/\"]"}]]}]}],[1159498719,{"a":[{"selector":".sol_sidebar","tasks":[["has",{"selector":"img[src*=\"/banner/\"]"}]]},{"selector":".sol_sidebar","tasks":[["has",{"selector":"ins.adsbygoogle"}]]}]}],[205498593,{"a":[{"selector":".mainbody > article > center","tasks":[["has",{"selector":" > a[href][target=\"_blank\"] > img"}]]}]}],[1943422612,{"a":[{"selector":".reklam.advertisement:not(body)","action":["style","height: 1px !important;"],"cssable":true}]}],[963245551,{"a":[{"selector":"div[class^=\"neatmag-list-post\"]","tasks":[["has",{"selector":"a[href=\"//www.tesetturluelbise.com/\"]"}]]}]}],[1564835534,{"a":[{"selector":".adsbygoogle","action":["style","position: absolute!important; left: -10000px!important;"],"cssable":true},{"selector":"div[class^=\"col\"] > div.detail","tasks":[["has",{"selector":" > #taboola-below-article-thumbnails"}]]}]}],[1703315895,{"a":[{"selector":"#blogkafemnet-reklam","action":["style","height: 1px!important;"],"cssable":true}]}],[726002094,{"a":[{"selector":"[class$=\"menu\"] > [class^=\"sidebars\"]","tasks":[["has",{"selector":" > .sidebarHeading > h4","tasks":[["has-text","-|Reklam"]]}]]}]}],[134865556,{"a":[{"selector":".tepe-banner","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[1631677262,{"a":[{"selector":".banner300Soru","tasks":[["upward","div"]]}]}],[1796581557,{"a":[{"selector":".reklam","action":["style","display: block!important; height: 1px!important;"],"cssable":true}]}],[1630028394,{"a":[{"selector":"body","action":["style","background: #00050e!important;"],"cssable":true}]}],[891649817,{"a":[{"selector":"td[width=\"130\"] > table[align=\"center\"][width=\"150\"]","tasks":[["has",{"selector":"font > b","tasks":[["has-text","Reklamlar"]]}]]}]}],[1572264711,{"a":[{"selector":"body.modal-open","action":["style","overflow: visible!important;"],"cssable":true}]}],[296176280,{"a":[{"selector":"#sidebar-container > .sidebar-widget","tasks":[["has",{"selector":" > .textwidget > span[id^=\"ezoic-pub-ad-placeholder-\"]"}]]}]}],[527463713,{"a":[{"selector":".hesaplama_sonuclari > ol li","tasks":[["has",{"selector":"a[href^=\"http://ad.\"]"}]]}]}],[1785638145,{"a":[{"selector":"main > fieldset > b","tasks":[["has-text","Adrese Teslim Kredi"]]},{"selector":"main > fieldset > b","tasks":[["has-text","Bu İndirim Kaçmaz!"]]}]}],[194839877,{"a":[{"selector":"a[class][onclick^=\"window.open(\"][rel=\"nofollow\"]","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[303881677,{"a":[{"selector":"#detect.ad-placement","action":["style","display: block !important;"],"cssable":true}]}],[161559888,{"a":[{"selector":"div[class$=\"tside\"] > .btl","tasks":[["has",{"selector":" > span","tasks":[["has-text","Sponsorlu"]]}]]}]}],[431378897,{"a":[{"selector":"#FlashnewsContainer > table > tbody > tr > td[style*=\"width:\"]","tasks":[["has",{"selector":" > a[target=\"_blank\"]"}]]},{"selector":".col-12 > .content-items.grid > .col-12 > div[id^=\"ENGAGEYA_WIDGET_\"]","tasks":[["upward",1]]},{"selector":".col-12 > .content-items.grid > .col-6 > .widget-336x280","tasks":[["upward",1]]},{"selector":".grid > .col-12 > .swiper-container ~ div[class=\"txt:center panel\"] > a[href][onclick^=\"gtag('event', 'Click'\"] > img","tasks":[["upward",2]]},{"selector":"td","tasks":[["has",{"selector":" > span[id$=\"_adv_top\"]"}]]}]}],[1209999406,{"a":[{"selector":"#pagenav_menu ~ div","tasks":[["has",{"selector":" > font[color] div[id=\"slider\"] > ul > li > div[style] > a[target=\"_blank\"] > img"}]]}]}],[483416864,{"a":[{"selector":"#uix_wrapper .funbox","tasks":[["has",{"selector":"ins.adsbygoogle"}]]},{"selector":".mainContent > div[class=\"sectionMain funbox\"]","tasks":[["has",{"selector":" > .funboxWrapper > center:only-child > .adsbygoogle"}]]},{"selector":".mainContent > div[class=\"sectionMain funbox\"]","tasks":[["has",{"selector":" > .funboxWrapper > center:only-child > a[href][target=\"_blank\"]"}]]}]}]]);

const hostnamesMap = new Map([["sinefilmizlesen.com",1010254432],["sinemavitrini.com",1649183660],["filmfiz.net",1649183660],["filmdelisi.org",1649183660],["sivilalan.com",891572746],["sleepsport.com",1027301255],["sondakika.com",795608204],["sonperiyot.com",731807210],["sosyalhalisaha.com",842191435],["sosyola.com",3548722],["sosyorol.com",1265612284],["sozsepeti.com",2072706082],["sportsregg.com",917916122],["tafdi1.com",1633248165],["tamgaturk.com",1553759992],["tamindir.com",662061078],["tarsusakdeniz.com",458309140],["tasit.com",643728352],["techinside.com",1448503464],["technoprogram.com",1296018750],["teknoblog.com",1622797575],["teknoloji6.com",1786620370],["teknolojice.com",315130650],["telegramgruplari.com",912966863],["telesikayet.com",338793335],["tenceretv.com",1083008217],["timeout.com",614091873],["tr-cam.com",415906340],["trabzonhaber24.com",2052975121],["forum.turkmmo.com",[2052975121,1618820312]],["kayseristarhaber.com.tr",2052975121],["trhaber.com",755972194],["tribundergi.com",1857839000],["turizmhaberleri.com",1186434184],["turkuvazradyolar.com",2146989194],["tvaktuel.com",909099619],["tvdizix.com",837785155],["unisinav.com",1908361774],["unikampus.net",1908361774],["upslut.com",238434870],["uzakrota.com",1074359062],["vitoporno.com",59067886],["webtekno.com",580256863],["whatsappdurumlari.com",1943442616],["wmaraci.com",2012014196],["yeniduzen.com",1739642568],["yeniwindows.com",333868419],["yerliyabancidizi.com",425443628],["yesiligdir.com",1230653261],["yorumbudur.com",167428420],["ytpara.com",1485153707],["zargan.com",715477492],["zaytung.com",6819995],["nurmutfagi.de",478554176],["yesilcamtv.eu",89259350],["altin.in",1169093483],["gerzek.info",1210534182],["webmaster.kitchen",14561610],["tr.link",1076697096],["filmgezegeni.live",621896156],["fullhdfilmizle.pw",621896156],["fullhdfilmsitesi.live",1789839905],["hdfilmcehennem.live",939940708],["apkindir.mobi",1975999626],["agaclar.net",1579223666],["aktuelsanat.net",1617619346],["altyazi.net",588129193],["amatorlig.net",1159498719],["apkcell.net",205498593],["asyadizileri.net",1943422612],["bakimlikadin.net",963245551],["birgun.net",1564835534],["blogkafem.net",1703315895],["buguzelsozler.net",726002094],["evrensel.net",134865556],["fenokulu.net",1631677262],["fontyukle.net",1796581557],["fullhdfilmizlersen.net",1630028394],["gulum.net",891649817],["haber61.net",1572264711],["her-sey.net",296176280],["hesaplama.net",527463713],["vucut-kitle-endeksi.hesaplama.net",1785638145],["indircafe.net",194839877],["mangaship.net",303881677],["mayonez.net",161559888],["memurlar.net",431378897],["minipassion.net",1209999406],["forum.miuiturkiye.net",483416864]]);

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
