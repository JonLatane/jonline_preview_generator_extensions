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

// swe-1

const argsMap = new Map([[479355169,{"a":[{"selector":".label","tasks":[["has-text",["sponsra","i"]],["upward",".post-teaser"]]}]}],[614131288,{"a":[{"selector":"body","action":["style","opacity:1!important"],"cssable":true}]}],[1279601164,{"a":[{"selector":".widget-title","tasks":[["has-text",["spons","i"]],["upward",".widget_text"]]}]}],[1402139027,{"a":[{"selector":".slick-slide, .post-wrapper, .post-large, .post","tasks":[["has-text",["sponsrad","i"]]]}]}],[1097507668,{"a":[{"selector":"a[title*=\"Sponsrad artikel\"]","tasks":[["upward",".meta-info-container"]]}]}],[626221198,{"a":[{"selector":".colorized","tasks":[["has-text",["annons","i"]],["upward","a"]]},{"selector":".sponsored","tasks":[["upward","a"]]},{"selector":".sponsored-chip","tasks":[["matches-css",{"name":"display","value":"^block$"}],["upward","a"]]},{"selector":"img[src$=\"ad_label.png\"]","tasks":[["upward",".outer"]]}]}],[842233852,{"a":[{"selector":".ad-mark","tasks":[["upward","a"]]},{"selector":".sponsor-mark","tasks":[["upward",".blog-article-card"]]}]}],[208615261,{"a":[{"selector":"section[class*=\"Sponsored\"]","tasks":[["upward","section[class*=\"Article_layout\"]"]]}]}],[2094450732,{"a":[{"selector":"a[href*=\"/annons/\"]","tasks":[["upward",".bt-article"]]}]}],[893529992,{"a":[{"selector":".attachmentPreviewActive img","action":["style","-webkit-filter: none !important; filter: none !important;"],"cssable":true},{"selector":"body.forum-logged-out .svartalistan-results-login-required","action":["style","height: unset !important;"],"cssable":true}]}],[1504717525,{"a":[{"selector":"*","action":["style","user-select: auto !important;"],"cssable":true},{"selector":"aside .textwidget","tasks":[["has-text",["sponsr|samarbetspartners","i"]]]}]}],[829696397,{"a":[{"selector":".post_sponsrad_label","tasks":[["upward",1]]}]}],[25604775,{"a":[{"selector":"h3","tasks":[["has-text",["samarbete","i"]],["upward",".post-wrap"]]}]}],[53872799,{"a":[{"selector":"a[href*=\"/annons\"]","tasks":[["upward","article.tg-item, .lcp_catlist li"]]}]}],[858917546,{"a":[{"selector":"strong","tasks":[["has-text",["^senaste nytt från våra partners","i"]],["upward",".card--muted"]]}]}],[1605865886,{"a":[{"selector":".dagensps_ad","tasks":[["upward",".container"]]}]}],[700254645,{"a":[{"selector":".header-menu__wrapp","action":["style","position:unset!important"],"cssable":true},{"selector":".list-article__item-inscription","tasks":[["has-text",["sponsrat innehåll","i"]],["upward",".list-article__item"]]},{"selector":".sponsored-badge","tasks":[["upward",".slick-slide, .article-item"]]}]}],[882380486,{"a":[{"selector":"a","tasks":[["has-text",["^annons","i"]]]},{"selector":"a[href*=\"/annons/\"]","tasks":[["upward",".td_module_wrap"]]},{"selector":"a[href*=\"/samarbete/\"]","tasks":[["upward",".td-big-grid-post"]]}]}],[57859228,{"a":[{"selector":"div[data-advadstrackid]","tasks":[["upward",".x-bar-footer"]]},{"selector":"h3","tasks":[["has-text","Advertorial"],["upward",1]]}]}],[2145260217,{"a":[{"selector":".is_sponsored","tasks":[["upward",".article-item"]]}]}],[1229445562,{"a":[{"selector":".rightdiv p","tasks":[["has-text",["casino|kasino|lån|betting|odds|lotto","i"]]]}]}],[2096936888,{"a":[{"selector":"p","tasks":[["has-text",["hämtar annons","i"]],["upward","div.items-center"]]}]}],[251592319,{"a":[{"selector":".label-sponsored","action":["remove",""],"tasks":[["upward","#latest-slider a"]]},{"selector":".label-sponsored","tasks":[["upward",".post"]]},{"selector":"strong","action":["remove",""],"tasks":[["has-text",["samarbete|sponsrat","i"]],["upward","li"]]}]}],[236981161,{"a":[{"selector":"body","action":["style","position:unset!important;overflow-y:scroll!important;"],"cssable":true}]}],[129256632,{"a":[{"selector":"p","tasks":[["has-text",["^annons","i"]],["upward",".editor_content.post"]]}]}],[102260155,{"a":[{"selector":"a[href]:not([href*=\"/e55.se\"])","tasks":[["upward","section.sidebar"]]}]}],[258350812,{"a":[{"selector":".aside-list--heading","tasks":[["has-text",["^sponsra","i"]],["upward",".aside-list"]]},{"selector":".code-block","tasks":[["has-text",["annons","i"]]]}]}],[1147259200,{"a":[{"selector":"[href*=\"/author/sponsradeartiklar/\"]","tasks":[["upward","article"]]},{"selector":"[href*=\"/author/sponsradeartiklar/\"]","tasks":[["upward","li"]]}]}],[120595682,{"a":[{"selector":"a[href*=\"casino\"]","tasks":[["upward",".td-fix-index"]]}]}],[429133352,{"a":[{"selector":".mediaconnect-protected-content, .mediaconnect-protected-content--show","action":["style","max-height: unset !important; overflow: unset !important;"],"cssable":true},{"selector":".mediaconnect-protected-content:after","action":["style","background: unset !important;"],"cssable":true}]}],[514135861,{"a":[{"selector":"section.c-native_banner","tasks":[["upward",2]]}]}],[369302881,{"a":[{"selector":"[href*=\"casino\"]","tasks":[["upward",".penci-block-vc"]]}]}],[2137832090,{"a":[{"selector":".adaptive","tasks":[["upward",1]]},{"selector":".paywalled.hidden","action":["style","display:unset!important"],"cssable":true}]}],[150517845,{"a":[{"selector":"a[href$=\"/annons/\"]","tasks":[["upward",".post-teaser"]]}]}],[816696888,{"a":[{"selector":"a[href*=\"bannerid=\"]","tasks":[["upward",".link"]]}]}],[916667152,{"a":[{"selector":".tapet-popup-js-no-scroll","action":["style","overflow-y:initial!important"],"cssable":true},{"selector":".teaser__bottom--ad-marker","tasks":[["upward",".teaser"]]},{"selector":"a[href*=\"/annons\"], a[href*=\"/brandstudio\"], a[href*=\"/brand-studio\"], a[href*=\"/kampanj.\"], a[href*=\"/lanapengar.\"], a[href*=\"/rabattkoder.\"], a[href*=\"/spel.expressen.se\"], .vignette--svg + a[href*=\"teknikensvarld.\"]","tasks":[["upward",".teaser"]]},{"selector":"strong","tasks":[["has-text",["^annons:","i"]],["upward","p"]]}]}],[1257837318,{"a":[{"selector":"article","tasks":[["has-text",["annons:","i"]]]}]}],[1998207492,{"a":[{"selector":".badge-partner-text","tasks":[["upward",".featured-article"]]}]}],[509917285,{"a":[{"selector":"a[href*=\"casino\"]","tasks":[["upward",".node-news"]]}]}],[1661378293,{"a":[{"selector":"em","tasks":[["has-text",["sponsrad","i"]],["upward",".row.news"]]}]}],[905978168,{"a":[{"selector":".feat-cat","tasks":[["has-text",["annons","i"]],["upward","a"]]}]}],[1904191402,{"a":[{"selector":".fisher-pinned-post-title.sponsored","tasks":[["upward",1]]}]}],[1637282320,{"a":[{"selector":".mediaconnect-protected-content .Carousel","action":["style","opacity:unset!important;"],"cssable":true}]}],[559010075,{"a":[{"selector":".featurette, .vicky-post-whitebox, .vicky-fancybar-inner","tasks":[["has-text",["sponsrad","i"]]]},{"selector":".vicky-category-label","tasks":[["has-text",["sponsrad","i"]],["upward",".vicky-heading-container"]]}]}],[1715958585,{"a":[{"selector":".sponsored-text","tasks":[["upward","article"]]},{"selector":"a[href$=\"artiklar-i-samarbete\"]","tasks":[["upward","div.article"]]}]}],[1348150825,{"a":[{"selector":".c-announcement","tasks":[["has-text",["annons","i"]]]},{"selector":".c-label--sponsored","tasks":[["upward",".c-announcement"]]}]}],[1942230814,{"a":[{"selector":".notice__tag_sponsored","tasks":[["upward",1]]}]}],[1445947031,{"a":[{"selector":"article","tasks":[["has-text",["är en annons","i"]]]}]}],[1408629254,{"a":[{"selector":".category","tasks":[["has-text",["spons","i"]],["upward","article"]]}]}],[981871409,{"a":[{"selector":".elementor-widget-heading","tasks":[["has-text",["annons","i"]],["spath"," + .elementor-widget-image + div + div"]]},{"selector":".elementor-widget-heading","tasks":[["has-text",["annons","i"]],["spath"," + .elementor-widget-image + div"]]},{"selector":".elementor-widget-heading","tasks":[["has-text",["annons","i"]],["spath"," + .elementor-widget-image"]]},{"selector":".elementor-widget-heading","tasks":[["has-text",["annons","i"]]]}]}],[173636683,{"a":[{"selector":".elementor-heading-title","tasks":[["has-text",["annons från","i"]],["upward",4]]}]}],[1642813148,{"a":[{"selector":".wp-block-column > h2","tasks":[["has-text",["annonser","i"]],["spath"," ~ p"]]},{"selector":"span","tasks":[["has-text",["annonserat innehåll","i"]],["upward",".td_block_wrap"]]}]}],[1059354034,{"a":[{"selector":".article-sponsored","tasks":[["upward",".card"]]},{"selector":".fp-carousel .fpci-kicker","tasks":[["has-text",["^sponsr","i"]],["upward",".fpc-item"]]},{"selector":"a[href*=\"/sponsrat\"]","tasks":[["upward",".card"]]}]}],[1848672927,{"a":[{"selector":".gpt--loaded","tasks":[["upward",".article-overview__col"]]},{"selector":"h4","tasks":[["has-text",["sponsrade länkar","i"]],["upward",".link-list"]]}]}],[276607602,{"a":[{"selector":"#grtvbelt_Sponsored","tasks":[["upward",1]]}]}],[482180360,{"a":[{"selector":"[id^=\"adPlacement\"]","tasks":[["upward",1]]}]}],[2123297980,{"a":[{"selector":".cpt-collab-text-ct1","tasks":[["has-text",["samarbete|annons","i"]],["upward",".cpt-alm-main"]]}]}],[2102551789,{"a":[{"selector":"#cruncho_now_iframe","action":["remove",""]},{"selector":"h3","tasks":[["has-text",["annons","i"]],["upward",".image-component-unprocessed"]]}]}],[1906967116,{"a":[{"selector":".noScroll","action":["style","overflow:initial!important"],"cssable":true}]}],[182371967,{"a":[{"selector":".sponsor-summary","tasks":[["upward",".post-item"]]}]}],[1779149954,{"a":[{"selector":".cli-barmodal-open","action":["style","overflow:auto!important"],"cssable":true}]}],[1354748201,{"a":[{"selector":".qa-consent-modal","tasks":[["upward",".ReactModalPortal"]]},{"selector":".recent-news__category","tasks":[["has-text",["sponsrad","i"]],["upward",".recent-news__item"]]},{"selector":".start-page-hero__caption-category","tasks":[["has-text",["sponsrad av","i"]],["upward",".start-page-hero__caption"]]},{"selector":"[class*=\"sponsor\"]","tasks":[["upward",".article-news__link, .listing-articles__article-link, .featured-news__link, .result-article__link"]]},{"selector":"body","action":["style","overflow:unset!important"],"cssable":true},{"selector":"span","tasks":[["has-text","Sponsrad"],["upward",".article-list-post a"]]}]}],[2087170192,{"a":[{"selector":".toolboxheader","tasks":[["has-text",["aktuella samarbeten","i"]],["spath"," ~ a.more"]]}]}]]);

const hostnamesMap = new Map([["barnistan.se",479355169],["biblioteksforeningen.se",614131288],["bilresaieuropa.se",1279601164],["boneo.se",1402139027],["borattforum.se",1097507668],["borskollen.se",626221198],["bovision.se",842233852],["breakit.se",208615261],["brollopstorget.se",2094450732],["byggahus.se",893529992],["byggipedia.se",1504717525],["campingsverige.se",829696397],["cyclingplus.se",25604775],["halsafitness.se",25604775],["yogaworld.se",25604775],["cykelframjandet.se",53872799],["dagensjuridik.se",858917546],["dagensps.se",1605865886],["dalarnasaffarer.se",700254645],["jamtlandsaffarer.se",700254645],["naringslivetvgl.se",700254645],["stockholmsaffarer.se",700254645],["datormagazin.se",882380486],["densistavilan.se",57859228],["designbase.se",2145260217],["digitalavykort.se",1229445562],["dinvinguide.se",2096936888],["djungeltrumman.se",251592319],["dn.se",236981161],["duochjobbet.se",129256632],["e55.se",102260155],["ehandel.se",258350812],["ehandelstips.se",1147259200],["ekonominyheter.se",120595682],["elinstallatoren.se",429133352],["fof.se",[429133352,1637282320]],["fokus.se",429133352],["spraktidningen.se",429133352],["elle.se",514135861],["espressomedia.se",369302881],["etc.se",2137832090],["eventeffect.se",150517845],["executiveeffect.se",150517845],["saleseffect.se",150517845],["existenz.se",816696888],["expressen.se",916667152],["familjeliv.se",1257837318],["fastighetssverige.se",1998207492],["festivalinfo.se",509917285],["filmtipset.se",1661378293],["firstclassmagazine.se",905978168],["fiskejournalen.se",1904191402],["folkhalsasverige.se",559010075],["foretagande.se",1715958585],["fotbolldirekt.se",1348150825],["hockeysverige.se",1348150825],["innebandymagazinet.se",1348150825],["fotbollskanalen.se",1942230814],["fotbollskane.se",1445947031],["fotbollsthlm.se",1445947031],["fragbite.se",1408629254],["framtidenshelsingborg.se",981871409],["partillevaxer.se",981871409],["vasterasvaxer.se",981871409],["framtidensronneby.se",173636683],["futsalmagasinet.se",1642813148],["fz.se",1059354034],["gaffa.se",1848672927],["gamereactor.se",276607602],["godare.se",482180360],["wellness.se",482180360],["goon.se",2123297980],["goteborgdirekt.se",2102551789],["mitti.se",2102551789],["vasterastidning.se",2102551789],["shop.halebop.se",1906967116],["hemmafixbloggen.se",182371967],["hemmanytt.se",1779149954],["karriarlakare.se",1779149954],["hemnet.se",1354748201],["hippson.se",2087170192]]);

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
