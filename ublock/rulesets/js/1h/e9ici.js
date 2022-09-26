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

const argsMap = new Map([[1491664799,{"a":[{"selector":".grid__item_lg-1.grid__item_1","tasks":[["has",{"selector":".dfp-advertisement"}]]},{"selector":"section[class=\"undefined\"] > p","tasks":[["has-text","^\\xA0$"]]}]}],[591809464,{"a":[{"selector":"body.home .container > div[style]","tasks":[["has",{"selector":".g-single > .hs-cta-wrapper"}]]},{"selector":"body.single-post .container[style]","tasks":[["has",{"selector":".g-single > .hs-cta-wrapper"}]]}]}],[562541120,{"a":[{"selector":"p > em > strong","tasks":[["has-text","Kaupallinen yhteistyö:"]]}]}],[1166273160,{"a":[{"selector":".td_block_wrap","tasks":[["has",{"selector":"[href=\"https://www.sss.fi/category/mainos/\"]"}]]},{"selector":"aside.widget_text","tasks":[["has-text","MAINOS"]]}]}],[870692832,{"a":[{"selector":".bg-box","tasks":[["has",{"selector":"[id|=\"undefined\"]"}]]}]}],[1465997603,{"a":[{"selector":".article-container","tasks":[["has-text","MAINOS"]]},{"selector":".box","tasks":[["has-text","MAINOS"]]},{"selector":"h2","tasks":[["has-text","Remonttirahoitus"]]},{"selector":"hr","tasks":[["has",{"selector":" + .centermobile > [data-adfscript]"}]]},{"selector":"hr","tasks":[["has",{"selector":" + h2","tasks":[["has-text","Remonttirahoitus"]]}]]},{"selector":"hr","tasks":[["has",{"selector":" + p > a[href=\"https://www.autodoc.fi/\"]"}]]},{"selector":"hr","tasks":[["has",{"selector":" + p > a[href^=\"https://www.autonvaraosat24.fi/\"]"}]]},{"selector":"p","tasks":[["has",{"selector":"a[href^=\"https://www.autodoc.fi/\"]"}],["spath"," + hr"]]},{"selector":"p","tasks":[["has",{"selector":"a[href^=\"https://www.autodoc.fi/\"]"}]]},{"selector":"p","tasks":[["has",{"selector":"a[href^=\"https://www.autonvaraosat24.fi/\"]"}],["spath"," + hr"]]},{"selector":"p","tasks":[["has",{"selector":"a[href^=\"https://www.autonvaraosat24.fi/\"]"}]]},{"selector":"p","tasks":[["has",{"selector":"a[href^=\"https://www.lainanvälittäjä.fi/\"]"}]]}]}],[2098294047,{"a":[{"selector":".clearfloats.content__body > p","tasks":[["has-text","^\\xA0$"]]}]}],[1158097045,{"a":[{"selector":"div[class^=\"undefined\"]","tasks":[["has",{"selector":"[class^=\"undefined\"]"}]]}]}],[1541326848,{"a":[{"selector":"div[class^=\"HomePage__RightColItem\"]","tasks":[["has",{"selector":" > div[class^=\"AdLivewrapped__AdWrapper\"]"}]]},{"selector":"div[class^=\"HomePage__RightColItem\"]","tasks":[["has",{"selector":" > div[class^=\"Lainavertailu__Container\"]"}]]},{"selector":"div[class^=\"ThreadGridItemWrapper__CardCol\"][width=\"100%\"] * div[class^=\"ThreadCardFooter__CardFooter\"] > div[class^=\"ThreadCardFooter__ColumnContainer\"]","action":["style","padding-right: 15px !important"],"cssable":true},{"selector":"div[class^=\"ThreadGridItemWrapper__CardCol\"][width=\"50%\"] > div[class^=\"ThreadGridItemWrapper__CardWrapper\"]","action":["style","padding-left: 0px !important"],"cssable":true},{"selector":"div[class^=\"ThreadGridItemWrapper__CardCol\"][width=\"50%\"]:has(+ div[class^=\"ThreadGridItemWrapper__CardCol\"][width=\"100%\"])","action":["style","width:100% !important"],"cssable":true},{"selector":"div[width=\"100%\"] + [width=\"50%\"] + div[class^=\"ThreadGridItemWrapper__CardCol\"][width=\"50%\"] * div[class^=\"ThreadCardFooter__CardFooter\"] > div[class^=\"ThreadCardFooter__ColumnContainer\"]","action":["style","padding-right: 15px !important"],"cssable":true},{"selector":"div[width=\"100%\"] + div[width=\"50%\"] + div[width=\"50%\"] + div[class^=\"ThreadGridItemWrapper__CardCol\"][width=\"50%\"] > div","action":["style","border-right: none !important; border-left: 1px solid lightgray !important"],"cssable":true},{"selector":"div[width=\"100%\"] + div[width=\"50%\"] + div[width=\"50%\"] + div[width=\"50%\"] > div[class^=\"ThreadGridItemWrapper__CardWrapper\"] > div","action":["style","padding-left: 15px !important"],"cssable":true},{"selector":"div[width=\"50%\"] + div[width=\"50%\"] + [width=\"50%\"] + div[class^=\"ThreadGridItemWrapper__CardCol\"][width=\"50%\"] * div[class^=\"ThreadCardFooter__CardFooter\"] > div[class^=\"ThreadCardFooter__ColumnContainer\"]","action":["style","padding-right: 15px !important"],"cssable":true},{"selector":"p","tasks":[["has",{"selector":" + p + .asp"}]]}]}],[1007087785,{"a":[{"selector":".article-content > p","tasks":[["has-text","MAINOS"]]},{"selector":".posts-list > .list-item","tasks":[["has",{"selector":"[href=\"https://suomimobiili.fi/kategoria/sponsoroitu/\"]"}]]},{"selector":".posts-listing-list-alt-b","tasks":[["has-text","Artikkeleita kumppaneilta"]]}]}],[322865339,{"a":[{"selector":".lazyload-wrapper","tasks":[["has",{"selector":"[id|=\"undefined\"]"}]]},{"selector":"[id|=\"undefined\"]","tasks":[["has-text","Kaupallinen Yhteistyö"]]},{"selector":"body:not(.is-style-kumppanisisallot) [class]","tasks":[["has",{"selector":" > a[href^=\"https://www.talouselama.fi/kumppanisisallot/\"]"}],["spath",":not(section)"]]},{"selector":"div.article-body > div","tasks":[["has",{"selector":" > div.LazyLoad.is-visible"}]]},{"selector":"div[width]","tasks":[["has",{"selector":".lazyload-wrapper"}]]}]}],[1605789813,{"a":[{"selector":".article-body > div[class]","tasks":[["has",{"selector":" > span","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"],["spath"," + a[href^=\"https://koulutus.almatalent.fi/\"]"]]}]]},{"selector":"div#skyscraper-height-div > aside > div > div > a","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"div#skyscraper-height-div > section > div > a","tasks":[["has-text","Kaupallinen yhteistyö"]]}]}],[1923377571,{"a":[{"selector":"[width]","tasks":[["has",{"selector":".lazyload-wrapper"}]]}]}],[855174045,{"a":[{"selector":".ch","tasks":[["has",{"selector":"em > a"}]]},{"selector":".ch","tasks":[["has-text","SPON|SPONS|SPONSO|SPONSOR|SPONSORO|SPONSOROI|SPONSOROIT|SPONSOROITU"]]}]}],[1626391755,{"a":[{"selector":".article-container.shadow-sm.col","tasks":[["has",{"selector":"img[alt^=\"Oma tilausmainos\"]"}]]}]}],[1614383985,{"a":[{"selector":"div[class^=\"undefined\"]","tasks":[["has-text","Mainos"]]},{"selector":"div[class^=\"undefined\"][class*=\"undefined\"]","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"]]}]}],[1355139472,{"a":[{"selector":"div","tasks":[["has",{"selector":" > [id|=\"undefined\"]"}]]}]}],[508387724,{"a":[{"selector":"#tik_fixed.with-ebanner","action":["style","top: 0 !important"],"cssable":true},{"selector":".itemwide","tasks":[["has",{"selector":"[href=\"https://www.nextory.fi/partner-collaboration/tiketti/\"]"}]]}]}],[1085888861,{"a":[{"selector":"#cnt_lista tr","tasks":[["has",{"selector":".mainosinline"}],["spath"," + tr"],["has",{"selector":" > .divid"}]]},{"selector":"#cnt_lista tr","tasks":[["has-text","^\\s$"],["has",{"selector":" + tr","tasks":[["has",{"selector":".mainosinline"}]]}]]}]}],[2048769519,{"a":[{"selector":"div[class=\"w-full bg-black border-gray-200 border-b\"]","tasks":[["has",{"selector":"a[href^=\"http://pubads.g.doubleclick.net/\"]"}]]}]}],[1981417629,{"a":[{"selector":"aside","tasks":[["has",{"selector":" > div > span","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"]]}]]},{"selector":"div#skyscraper-height-div > aside > div > section > div","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"]]},{"selector":"div#skyscraper-height-div > div > aside > div > section > div","tasks":[["has-text","KAUPALLINEN YHTEISTYÖ"]]},{"selector":"div#skyscraper-height-div > section > div > a > div","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"section > .lazyload-wrapper + div[class]","tasks":[["has",{"selector":" > a[href^=\"https://tivi.fi/kumppanisisallot/\"]"}]]}]}],[1316529021,{"a":[{"selector":"div[class=\"w-full py-2 px-2\"]","tasks":[["has",{"selector":" > div > div > div[id=\"banner_top\"][class^=\"bannerAd\"]"}]]}]}],[1064855227,{"a":[{"selector":".tsv3-c-common-forum-threadviewer__messages__item","tasks":[["has",{"selector":".smartad"}]]},{"selector":".tsv3-c-common-twocolumnslayout","tasks":[["has",{"selector":"div[class*=\"undefined\"]"}]]},{"selector":".tsv3-c-common-twocolumnslayout__row__right","tasks":[["has",{"selector":".noad-hideaction-self"}],["not",{"selector":"","tasks":[["has",{"selector":".tsv3-c-ts-newstip"}]]}],["not",{"selector":"","tasks":[["has",{"selector":".tsv3-c-common-forum-threadlist"}]]}]]}]}],[256159119,{"a":[{"selector":".elementor-widget-container","tasks":[["has-text","MAINOS"]]}]}],[242185301,{"a":[{"selector":".urjal-widget.main","tasks":[["has",{"selector":"a[href=\"https://urjalansanomat.fi/verkkomainonta/\"]"}]]},{"selector":".urjal-widget.main","tasks":[["has",{"selector":"a[href=\"https://ysiauto.fi/\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":" > a[href=\"/lounaat\"]"}]]}]}],[1355184010,{"a":[{"selector":"body:not(.is-style-kumppanisisallot) main > div[class]","tasks":[["has-text","Kaupallinen yhteistyö"]]}]}],[541117652,{"a":[{"selector":".lazyload-wrapper + section","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":".lazyload-wrapper","tasks":[["has",{"selector":".eo-embed-announcements-container"}]]},{"selector":"div#skyscraper-height-div > div > aside > section > a","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"div#skyscraper-height-div > div > main > div > a","tasks":[["has-text","Kaupallinen yhteistyö"]]}]}],[1352437329,{"a":[{"selector":".lazyload-wrapper","tasks":[["has",{"selector":".at-embed-container"}]]},{"selector":"aside > section","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"div[width]","tasks":[["has",{"selector":" > [id|=\"almad-parade\"]"}]]}]}],[691759369,{"a":[{"selector":"h2 > span","tasks":[["has-text","Mainos"]]}]}],[232266373,{"a":[{"selector":".pane-sbase-static-blocks-sbase-static-blocks-1","tasks":[["has",{"selector":" > h2 > a[href=\"https://alennuskoodi.is.fi/\"]"}]]}]}],[774949777,{"a":[{"selector":".elementor-motion-effects-parent","tasks":[["has",{"selector":".strossle-sidebar"}]]},{"selector":".elementor-section-height-default.elementor-section-boxed.elementor-element.elementor-top-section.elementor-section","tasks":[["has",{"selector":".elementor-widget-shortcode","tasks":[["has",{"selector":".vu-adlabel"}]]}]]},{"selector":"article.featured-post","tasks":[["has-text","Mainos"]]}]}],[2029015199,{"a":[{"selector":"li[class^=\"undefined\"][data-role=\"undefined\"]","tasks":[["has",{"selector":" > div > [id^=\"undefined\"][id*=\"undefined\"]"}]]}]}],[996892761,{"a":[{"selector":"div[id|=\"undefined\"]","tasks":[["has",{"selector":"br + br + div[id|=\"undefined\"] + br + br"}]]}]}],[1223299997,{"a":[{"selector":".voima-jutun-sisalla","tasks":[["has",{"selector":".voima-adlabel"}]]}]}],[595180458,{"a":[{"selector":"#sidebar-widgets-area-1 > .widget","tasks":[["has-text","Mainos"]]},{"selector":".widget","tasks":[["has",{"selector":"[href^=\"http://pizza-online.fi/tt/\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"[href^=\"https://c.trackmytarget.com?\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"[href^=\"https://kauppa.latvala.com\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"[href^=\"https://med.etoro.com/\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"[href^=\"https://tc.tradetracker.net/\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"[href^=\"https://track.adtraction.com/\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"[href^=\"https://www.awin1.com/\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"[href^=\"https://www.kahvivertailu.fi\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"[rel=\"sponsored\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"[src^=\"https://track.adtraction.com/\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"h2:only-child"}],["has",{"selector":" + .widget [href^=\"https://c.trackmytarget.com?\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"h2:only-child"}],["has",{"selector":" + .widget [href^=\"https://www.awin1.com/\"]"}]]},{"selector":".widget","tasks":[["has",{"selector":"h2:only-child"}],["has",{"selector":" + .widget [src^=\"https://track.adtraction.com/\"]"}]]},{"selector":".widget","tasks":[["has-text","tradedoubler\\.com"]]},{"selector":".wp-block-columns","tasks":[["has",{"selector":"[href^=\"https://c.trackmytarget.com?\"]"}]]}]}],[685924707,{"a":[{"selector":".ad","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"img[src*=\"doc_id=555723\"]"}]]}],["not",{"selector":"","tasks":[["has",{"selector":"img[src*=\"doc_id=553464\"]"}]]}]]}]}],[1382758819,{"a":[{"selector":"li","tasks":[["has",{"selector":"[href^=\"https://track.adtraction.com/\"]"}]]}]}],[516808371,{"a":[{"selector":".code-block","tasks":[["has",{"selector":"ins[class=\"adsbygoogle\"]"}]]},{"selector":".td_block_wrap.td-pb-border-top.td_flex_block","tasks":[["has",{"selector":"a[href=\"https://gekkonen.net/nettikasinot/\"]"}]]},{"selector":".td_block_wrap.td_block_text_with_title","tasks":[["has",{"selector":"a[href^=\"https://affmore.com/\"]"}]]},{"selector":".td_block_wrap.td_block_text_with_title","tasks":[["has-text",["kasino","i"]]]},{"selector":".widget","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":".widget","tasks":[["has",{"selector":"[rel^=\"https://affmore.com/\"]"}]]}]}],[1855804051,{"a":[{"selector":".grid-element-container","tasks":[["has",{"selector":".hise-link[href^=\"https://\"]"}]]}]}],[1204306425,{"a":[{"selector":".block-box.news-post","tasks":[["has",{"selector":"a[href^=\"https://www.metropoli.net/rahapelit/\"]"}]]}]}],[2028832964,{"a":[{"selector":".aligncenter","tasks":[["has",{"selector":"a[href*=\"tarjousproffa.com\"]"}]]},{"selector":".entry-content > h3","tasks":[["has-text","kasino"]]},{"selector":".featured-row-small","action":["style","background-color: white !important"],"cssable":true},{"selector":".sidebar-element > p[style=\"text-align: center;\"]","tasks":[["has",{"selector":"a[href=\"https://mvlehti.net/umv-kasinot/\"]"}]]},{"selector":".wp-block-image","tasks":[["has",{"selector":"a[href*=\"casino.com\"]"}]]},{"selector":"[class|=\"undefined\"]","tasks":[["has-text",["rahapeli|kasino","i"]],["has",{"selector":"a[href*=\"/202\"]"}]]},{"selector":"div[class=\"ad content-center\"]","tasks":[["not",{"selector":"","tasks":[["has",{"selector":" > a[href^=\"https://vk.com/\"]"}]]}],["not",{"selector":"","tasks":[["has",{"selector":" > a[href^=\"https://uvmedia.org/\"]"}]]}]]},{"selector":"li","tasks":[["has",{"selector":"a[href*=\"/202\"]"}],["has",{"selector":"a[href*=\"nettikasino\"]"}]]},{"selector":"p[style=\"text-align: center;\"]","tasks":[["has",{"selector":" > a[href^=\"https://kasino\"]"}]]}]}],[639559344,{"a":[{"selector":"section:not(section[id],section[class])","tasks":[["has-text","Mainos"]]}]}],[224625929,{"a":[{"selector":"div[class] + div[class] ~ div[class]","tasks":[["has",{"selector":" > .lazyload-wrapper [data-adfscript]"}]]}]}],[846475541,{"a":[{"selector":".windowbg3","tasks":[["has",{"selector":"#div-ff2-bottom"}]]}]}],[369911435,{"a":[{"selector":"fieldset","tasks":[["has-text","Poista mainos"]]}]}],[87129747,{"a":[{"selector":"section","tasks":[["has",{"selector":" > a[href=\"https://nocompromiseclothing.com/\"]"}]]}]}]]);

const hostnamesMap = new Map([["seura.fi",1491664799],["sijoittaja.fi",591809464],["sijoitustieto.fi",562541120],["sss.fi",1166273160],["styleroom.fi",870692832],["suomela.fi",1465997603],["suomenkuvalehti.fi",2098294047],["suomi24.fi",1158097045],["www.suomi24.fi",1541326848],["suomimobiili.fi",1007087785],["talouselama.fi",322865339],["tekniikkatalous.fi",[1605789813,1923377571]],["tivi.fi",[1923377571,1981417629]],["telsu.fi",855174045],["tervareitti.fi",1626391755],["terve.fi",1614383985],["ticketmaster.fi",1355139472],["tiketti.fi",508387724],["tilannehuone.fi",1085888861],["tilt.fi",2048769519],["autot.tori.fi",1316529021],["www.ts.fi",1064855227],["ulvilanseutu.fi",256159119],["urjalansanomat.fi",242185301],["uusisuomi.fi",[1355184010,541117652]],["www.uusisuomi.fi",[1355184010,1352437329]],["vaasalehti.fi",691759369],["vauva.fi",232266373],["verkkouutiset.fi",774949777],["vertaa.fi",2029015199],["viranomaisuutiset.fi",996892761],["voima.fi",1223299997],["ykkoslohja.fi",595180458],["ylasatakunta.fi",685924707],["lentopallo.info",1382758819],["murtopallo.net",1382758819],["gekkonen.net",516808371],["huuto.net",1855804051],["metropoli.net",1204306425],["mvlehti.net",2028832964],["assembly.org",[639559344,224625929]],["futisforum2.org",846475541],["opensubtitles.org",369911435],["pt-media.org",87129747]]);

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
