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

// fin-0

const argsMap = new Map([[785688244,{"a":[{"selector":"body:not(.post-type-archive-advertoriaali) .bg-white.p-3.mb-6","tasks":[["has",{"selector":"a[href*=\".fi/advertoriaali/\"]"}]]},{"selector":"div[class=\"w-full bg-white border-gray-200 border-b py-2 px-4\"]","tasks":[["has",{"selector":"[id*=\"_smart_boksi\"]"}]]},{"selector":"div[style^=\"min-height:\"]","tasks":[["has",{"selector":"[id*=\"_smart_paraati\"]"}]]}]}],[2104799588,{"a":[{"selector":".ui-body-inherit.ui-li-static","tasks":[["has-text","loadAd"]]},{"selector":"center > b","tasks":[["has-text","Mainos:"]]},{"selector":"div[style=\"text-align: center; font-size: 0.7em;margin-bottom:15px\"]","tasks":[["has-text","Mainos"]]}]}],[1520283612,{"a":[{"selector":".widget_text","tasks":[["has-text","Mainos"]]}]}],[1173604741,{"a":[{"selector":".voice-no-read","tasks":[["has-text","Mainos päättyy"]]}]}],[1971383440,{"a":[{"selector":"._3GUme._1hdYd","tasks":[["has",{"selector":"a[href^=\"https://pointti.fi\"]"}]]},{"selector":"article > div[class]","tasks":[["has-text","Mainos \\(sisältö jatkuu alla\\)"]]}]}],[1293537820,{"a":[{"selector":"div[class] > div[id^=\"sas_\"] + div","tasks":[["has-text","Mainos"]]}]}],[109266821,{"a":[{"selector":".main-article > div","tasks":[["has-text","Mainos"]]}]}],[446352527,{"a":[{"selector":".px-4.py-2.bg-white.w-full","tasks":[["has",{"selector":".poppartners"}]]}]}],[1385776234,{"a":[{"selector":".views-row","tasks":[["has",{"selector":".is-commercial"}]]}]}],[1326730615,{"a":[{"selector":"tbody > tr > td[style=\"width:468px\"][valign=\"undefined\"]","action":["style","width: unset !important"],"cssable":true}]}],[251066259,{"a":[{"selector":".SearchResultList__Row--advertisement, .Profile__TopCard--advertisement, .SearchResultList--advertisement","action":["style","width: 100% !important; min-height: unset !important; margin-right: unset !important; float: unset !important;"],"cssable":true}]}],[672406902,{"a":[{"selector":"#layout-left.with-right-side","action":["style","width: 100% !important"],"cssable":true},{"selector":".content-article.h-container","tasks":[["has",{"selector":"#FKM-paraati"}]]}]}],[283115758,{"a":[{"selector":"article","tasks":[["has-text","SPONSORED"]]}]}],[1976857860,{"a":[{"selector":".herald-sidebar > .widget_text","tasks":[["has",{"selector":"script"}]]},{"selector":".herald_posts_widget","tasks":[["has",{"selector":"a[href^=\"https://www.forssanlehti.fi/kaupallinen-yhteistyo/\"]"}]]}]}],[1070664191,{"a":[{"selector":".elementor-widget-divider.elementor-widget.elementor-widget-divider--element-align-center.elementor-widget-divider--view-line_text.elementor-element","tasks":[["has-text","Mainos"]]}]}],[1773494650,{"a":[{"selector":".elementor-widget","tasks":[["has",{"selector":"img[data-image-title^=\"MAINOS\"]"}]]}]}],[1001475678,{"a":[{"selector":"article.areview","tasks":[["has-text","Sponsoroitua sisältöä"]]}]}],[1566299804,{"a":[{"selector":"li","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":"ul.link","tasks":[["has",{"selector":"a[href^=\"http://clk.tradedoubler.com/\"]"}]]}]}],[69505977,{"a":[{"selector":".has-background","tasks":[["has-text","mainos"]]},{"selector":".is-sidebar > .has-background","tasks":[["has",{"selector":".is-advertorial"}]]},{"selector":".is-sidebar > .has-background","tasks":[["has",{"selector":"a[href*=\"utm_medium=banner\"]"}]]},{"selector":".js-tabpanel > ol > li","tasks":[["has",{"selector":".is-advertorial"}]]},{"selector":".wp-block-column > .has-background","tasks":[["has-text","MAINOS"]]}]}],[734638087,{"a":[{"selector":".wall-item__container","tasks":[["has-text","Mainos"]]}]}],[1444597657,{"a":[{"selector":"div[class=\"col-xs-12 col-sm-12 col-md-12 pad-0 hidden-xs\"]","tasks":[["has",{"selector":" > #lunch-widget"}]]}]}],[1584211343,{"a":[{"selector":".herald-sidebar > .herald_posts_widget","tasks":[["has",{"selector":"a[href^=\"https://www.hameensanomat.fi/kaupallinen-yhteistyo/\"]"}]]},{"selector":".herald-sidebar > .widget_custom_html","tasks":[["has",{"selector":"script"}]]}]}],[321957002,{"a":[{"selector":".top-ad-space","action":["style","min-height: 0 !important"],"cssable":true},{"selector":"br","tasks":[["has",{"selector":" + .adsbygoogle"}]]}]}],[154927429,{"a":[{"selector":"[class|=\"undefined\"]","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"a[href=\"https://reska.fi/lounasreska/\"]"}]]}]]}]}],[312021726,{"a":[{"selector":".module","tasks":[["has",{"selector":".bannergroup"}]]}]}],[1894619499,{"a":[{"selector":".feature","tasks":[["has",{"selector":"[href$=\"/mainosyhteistyo/\"]"}]]}]}],[1386787637,{"a":[{"selector":".bottomlistarticle","tasks":[["has",{"selector":".ag-promocolllabel"}]]},{"selector":".col-section","tasks":[["has",{"selector":".ag-promocolllabel"}]]}]}],[734886729,{"a":[{"selector":"article > .main-link","tasks":[["has",{"selector":".source","tasks":[["has-text","sponsoroitu"]]}]]}]}],[125653511,{"a":[{"selector":".embedded","tasks":[["has-text","Markkinapaikka"]]}]}],[247074517,{"a":[{"selector":".col.article-card.item","tasks":[["has-text","Kaupallinen yhteistyö, yhteistyössä"]]}]}],[1243313726,{"a":[{"selector":".m-contentListItemThumb.-level-1","tasks":[["has-text","Mainos"]]},{"selector":".m-managedListing__column.-level-1","tasks":[["has",{"selector":".-commercial"}]]}]}],[2097611131,{"a":[{"selector":".site__wrapper","action":["style","margin-top: 0.5em !important"],"cssable":true}]}],[750256922,{"a":[{"selector":".card","tasks":[["has",{"selector":"#il-rantapallo-right-column-box"}]]},{"selector":".card","tasks":[["has",{"selector":".etua-widget-container"}]]},{"selector":".category-double-article-container","tasks":[["has",{"selector":".half-article:nth-child(1)","tasks":[["has-text","Kaupallinen yhteistyö"],["spath"," + .half-article:nth-child(2)"],["has-text","Kaupallinen yhteistyö"]]}]]},{"selector":".double-column > a[href]:has(.article-container:has-text(Kaupallinen yhteistyö))","action":["remove",""]},{"selector":".embed-placeholder","tasks":[["has",{"selector":" > div > .eo-embed-announcements-container.card"}]]},{"selector":".side-column-content .card","tasks":[["has",{"selector":".nettiauto-sponsored-content-text"}]]},{"selector":"a.articles__list-item[href^=\"/telkku/\"]","tasks":[["has",{"selector":"p.articles__sponsored-banner"}]]},{"selector":"a.small-article","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"div.card","tasks":[["has-text","Mainos:"]]},{"selector":"div.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) > div > div > main div[class=\"card \"]","tasks":[["has",{"selector":".full-article","tasks":[["has-text","Kaupallinen yhteistyö"]]}]]},{"selector":"div.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) > div > div > main div[class=\"card \"]","tasks":[["has",{"selector":".half-article","tasks":[["has-text","Kaupallinen yhteistyö"]]}],["not",{"selector":"","tasks":[["has",{"selector":".half-article","tasks":[["not",{"selector":"","tasks":[["has-text","Kaupallinen yhteistyö"]]}]]}]]}]]},{"selector":"div.fp-container.card","tasks":[["has",{"selector":"[href*=\"undefined\"]"}]]},{"selector":"div.fp-container.card","tasks":[["has",{"selector":"[src*=\"ilcdn.fi/Nauha_Rantapallo\"]"}]]},{"selector":"div.fp-container.card","tasks":[["has",{"selector":"[src*=\"ilcdn.fi/asuminen_vattenfall_palkki\"]"}]]},{"selector":"div.fp-container.card","tasks":[["has",{"selector":"[src*=\"ilcdn.fi/kuvat/nauhat/nauha_terveys_specsavers\"]"}]]},{"selector":"div.fp-container.card","tasks":[["has",{"selector":"[src*=\"ilcdn.fi\"][src*=\"undefined\"]"}]]},{"selector":"div.fp-container.card","tasks":[["has",{"selector":"[src*=\"ilcdn.fi\"][src*=\"undefined\"][src*=\"undefined\"]"}]]},{"selector":"div.fp-container.card","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"div.is-visible.LazyLoad","tasks":[["has-text","kaupallinen yhteistyö"]]},{"selector":"div[class=\"card \"]","tasks":[["has",{"selector":" > .block > div[class=\"undefined\"]","tasks":[["has-text","kaupallinen yhteistyö"]]}]]},{"selector":"div[class=\"card \"]","tasks":[["has",{"selector":".block > a[class=\"undefined\"][href^=\"https://plus.iltalehti.fi/nakoislehti/\"]"}]]},{"selector":"div[class=\"card \"]","tasks":[["has",{"selector":"[class=\"undefined\"]"}]]}]}],[1625740285,{"a":[{"selector":"div.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) .article-list a[href]","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"div.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) > div > div > main .article-container","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"div.container:not(.sub-category-unikulma):not(.sub-category-rahapuhe):not(.sub-category-santander):not(.sub-category-miehen-terveys):not(.sub-category-kehon-hyvinvointi-ja-vitaepro):not(.sub-category-unijaterveys):not(.sub-category-huippukivaa-seksia):not(.sub-category-puhti):not(.sub-category-hyvinvointivinkit):not(.sub-category-hetki):not(.sub-category-kaalimato):not(.sub-category-oslo-skin-lab):not(.sub-category-kodin-siivousvinkit):not(.sub-category-qled-tv):not(.sub-category-jatevesiratkaisut):not(.sub-category-bluestep):not(.sub-category-sortter-reilua-lainavertailua):not(.sub-category-rahalaitos):not(.sub-category-aitien-keittiosta):not(.sub-category-koko-kansan-autokauppa):not(.sub-category-kuljetusten-kestava-kehitys):not(.sub-category-kestavat-liikkuvuusratkaisut):not(.sub-category-hintaopas):not(.sub-category-boltworks):not(.sub-category-samsung-tv):not(.sub-category-reseptit):not(.sub-category-terveystalo):not(.sub-category-etuafi-lainanottajan-asialla):not(.sub-category-vinkit-yrityslainaan) > div > div > main .half-article","tasks":[["has-text","Kaupallinen yhteistyö"]]}]}],[1771177508,{"a":[{"selector":".newsbox","tasks":[["has",{"selector":" > [id^=\"undefined\"]"}]]}]}],[1238369533,{"a":[{"selector":"p","tasks":[["has",{"selector":"[href^=\"https://track.adform.net/\"]"}]]}]}],[1392372038,{"a":[{"selector":"div[class=\"row align-center\"]","tasks":[["has",{"selector":"[class$=\"undefined\"]"}]]}]}],[1372616468,{"a":[{"selector":"div.node-extra","tasks":[["has-text","Mainos"]]},{"selector":"li.block-row","tasks":[["has-text","Mainos"]]}]}],[1302314008,{"a":[{"selector":".artikkeli-slide","tasks":[["has",{"selector":"img[src*=\"-nostokuva\"]"}]]},{"selector":".artikkeli-slide","tasks":[["has",{"selector":"img[src*=\"Ad-otsikko\"]"}]]},{"selector":".artikkeli-slide","tasks":[["has",{"selector":"img[src*=\"natiivi-otsikko\"]"}]]},{"selector":".view-full.uutinen","tasks":[["has",{"selector":"a[href=\"https://www.io-tech.fi/category/mainos/\"]"}]]}]}],[65368191,{"a":[{"selector":"article","tasks":[["has",{"selector":" > header > h2 span","tasks":[["has-text","Alennuskoodit"]]}]]}]}],[206675428,{"a":[{"selector":"a.article-item","tasks":[["has",{"selector":".sponsored"}]]}]}],[931883365,{"a":[{"selector":".sbs-articleitems.list-right-column","tasks":[["has",{"selector":"span.sponsored"}]]},{"selector":"div.item","tasks":[["has",{"selector":".sponsored"}]]}]}],[1908503321,{"a":[{"selector":".box--transparent","tasks":[["has",{"selector":".advert"}]]}]}],[921196267,{"a":[{"selector":"li","tasks":[["has",{"selector":"div[id|=\"undefined\"]"}]]}]}],[407179894,{"a":[{"selector":"a[href^=\"/artikkeli-\"]","tasks":[["has-text","MAINOS"]]}]}],[212561799,{"a":[{"selector":".content-section > .g","tasks":[["has",{"selector":"[id^=\"gpt-desktop-inside-article\"]"}]]},{"selector":".right-inner-section","tasks":[["has",{"selector":"#gpt-desktop-side"}]]},{"selector":"article.post","action":["style","height: 1px !important; width: 1px !important; margin-right: 0px !important"],"tasks":[["has-text","Kaupallinen yhteistyö"]]}]}],[1468020687,{"a":[{"selector":".widget-container","tasks":[["has",{"selector":"[class^=\"undefined\"]"}]]}]}]]);

const hostnamesMap = new Map([["como.fi",785688244],["tilt.fi",785688244],["dawn.fi",2104799588],["edgeski.fi",1520283612],["pottupellossa.fi",1520283612],["epari.fi",[1173604741,1971383440,1293537820]],["ilkkapohjalainen.fi",[1173604741,1971383440,2097611131]],["jarviseutu-lehti.fi",[1173604741,1971383440,1293537820]],["jurvansanomat.fi",[1971383440,1293537820]],["komiat.fi",[1971383440,1293537820]],["suupohjansanomat.fi",[1971383440,1293537820]],["vaasanikkuna.fi",1971383440],["viiskunta.fi",[1971383440,1293537820]],["vaasalehti.fi",1293537820],["episodi.fi",[109266821,446352527]],["inferno.fi",[446352527,1238369533]],["etlehti.fi",1385776234],["hyvaterveys.fi",1385776234],["soppa365.fi",1385776234],["tiede.fi",1385776234],["etn.fi",1326730615],["finder.fi",251066259],["finnkino.fi",672406902],["foreigner.fi",283115758],["forssanlehti.fi",1976857860],["fuengirola.fi",1070664191],["futissuomi.fi",1773494650],["gamereactor.fi",1001475678],["glu.fi",1566299804],["gogolf.fi",69505977],["gti.fi",734638087],["haapavesi-lehti.fi",1444597657],["kalajokilaakso.fi",1444597657],["kalajokiseutu.fi",1444597657],["keskipohjanmaa.fi",1444597657],["kokkola-lehti.fi",1444597657],["lestijoki.fi",1444597657],["nivala-lehti.fi",1444597657],["perhonjokilaakso.fi",1444597657],["pietarsaarensanomat.fi",1444597657],["selanne-lehti.fi",1444597657],["hameensanomat.fi",1584211343],["hardware.fi",321957002],["hattulaan.fi",154927429],["reska.fi",154927429],["helsinkitimes.fi",312021726],["hidastaelamaa.fi",1894619499],["hifimaailma.fi",1386787637],["high.fi",734886729],["hs.fi",125653511],["huonoaiti.fi",247074517],["iijokiseutu.fi",1243313726],["kaleva.fi",1243313726],["koillissanomat.fi",1243313726],["lapinkansa.fi",1243313726],["pyhajokiseutu.fi",1243313726],["raahenseutu.fi",1243313726],["rantalakeus.fi",1243313726],["siikajokilaakso.fi",1243313726],["iltalehti.fi",[750256922,1625740285]],["iltapulu.fi",1771177508],["inssinosingot.fi",1392372038],["bbs.io-tech.fi",1372616468],["www.io-tech.fi",1302314008],["is.fi",65368191],["iskelma.fi",[206675428,931883365]],["radionova.fi",931883365],["voice.fi",931883365],["jaatama.fi",1908503321],["m.jaatama.fi",921196267],["jp-kunnallissanomat.fi",407179894],["kaaoszine.fi",212561799],["kaasujalka.fi",1468020687]]);

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
