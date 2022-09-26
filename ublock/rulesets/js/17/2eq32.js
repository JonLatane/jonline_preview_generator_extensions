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

const argsMap = new Map([[806964559,{"a":[{"selector":"h3","tasks":[["has-text",["Annons","i"]],["upward",".widget"]]}]}],[1963081666,{"a":[{"selector":"small","tasks":[["has-text",["annons","i"]]]}]}],[1364972564,{"a":[{"selector":".sponsored-article","tasks":[["upward","article"]]}]}],[1306378561,{"a":[{"selector":"a[href*=\"casino\"], a[href*=\"speltips\"]","tasks":[["upward",".widget"]]},{"selector":"h3","tasks":[["has-text","Speltips"],["upward",".widget"]]}]}],[1871879107,{"a":[{"selector":".idgcp__layer--active, .idgcp__layer--active body","action":["style","overflow: initial !important;"],"cssable":true}]}],[1574606658,{"a":[{"selector":"[data-styled=\"SpLabel\"]","tasks":[["upward","article"]]}]}],[620809812,{"a":[{"selector":".teaser__category","tasks":[["has-text",["annons","i"]],["upward","article"]]}]}],[966000716,{"a":[{"selector":".wp-pagenavi","action":["style","position:unset!important;z-index:unset!important"],"cssable":true}]}],[1470042716,{"a":[{"selector":".code-block-label","tasks":[["has-text","Annons:"]]},{"selector":"strong","tasks":[["has-text","Annons:"],["upward",".code-block"]]}]}],[1415256186,{"a":[{"selector":".article","tasks":[["has-text",["sponsrad artikel","i"]]]}]}],[1113272086,{"a":[{"selector":".post","tasks":[["has-text","I annonssamarbete med"]]}]}],[1432667614,{"a":[{"selector":".widget-title","tasks":[["has-text",["annons","i"]],["upward","aside"]]}]}],[1706049066,{"a":[{"selector":"div[id^=\"ad-panorama\"]","tasks":[["upward",".elementor-section"]]}]}],[1247118418,{"a":[{"selector":".sub-title","tasks":[["has-text",["sponsr","i"]],["upward",".teaser"]]}]}],[799213311,{"a":[{"selector":"h2.pane-title","tasks":[["has-text",["annons","i"]],["upward",1]]}]}],[1438690994,{"a":[{"selector":".sponsrat","tasks":[["upward",".teaser"]]},{"selector":"a[href*=\"casino\"]","tasks":[["upward","#site_footer .panel-pane"]]}]}],[216452043,{"a":[{"selector":".thb-page-transition-on","action":["style","opacity:1!important"],"cssable":true}]}],[1870619007,{"a":[{"selector":".annons-label","tasks":[["upward","a"]]}]}],[1136254784,{"a":[{"selector":".sidebar-block","tasks":[["has-text",["annons|sponsor","i"]]]}]}],[106080349,{"a":[{"selector":"#storknapp","tasks":[["has-text",["^till kampanj","i"]],["upward","article"]]},{"selector":"img[src$=\"/sponsrad.png\"]","tasks":[["upward","article"]]}]}],[1820085266,{"a":[{"selector":".disclaimer-tag-img","tasks":[["upward","a"]]}]}],[2089724564,{"a":[{"selector":".kittad-label-sponsored","tasks":[["upward","li"]]}]}],[81369119,{"a":[{"selector":".ad-text","tasks":[["has-text",["annons","i"]],["upward",".content-box-list__item"]]}]}],[1517207255,{"a":[{"selector":"a[href*=\"casino\"]","tasks":[["upward",".post"]]},{"selector":"p","tasks":[["has-text",["annonser:","i"]],["upward",".widget_block"]]}]}],[867025190,{"a":[{"selector":".cookieBarWrapper","action":["remove",""]},{"selector":"body","action":["style","overflow-y: auto !important;"],"cssable":true}]}],[1855661774,{"a":[{"selector":"[class*=\"carousel_sponsored\"]","tasks":[["upward","[class*=\"carousel_item\"]"]]},{"selector":"[class*=\"sponsorLabel\"]","tasks":[["upward","[class*=\"mosaic_item_wrapper\"]"]]}]}],[1428405537,{"a":[{"selector":".content > .wrap","tasks":[["has-text",["affiliate-samarbete","i"]]]}]}],[1370327846,{"a":[{"selector":".js-preloader > .document, .js-preloader > .hero-section","action":["style","opacity: 1 !important; visibility: visible !important;"],"cssable":true}]}],[836092611,{"a":[{"selector":"html, body","action":["style","scrollbar-width:initial!important"],"cssable":true}]}],[107770648,{"a":[{"selector":"span","tasks":[["has-text",["samarbete","i"]],["upward","a[href^=\"/blog/\"]"]]}]}],[1471883747,{"a":[{"selector":".postCard","tasks":[["has-text",["bonusar|casino|betting|spelbranschen","i"]]]}]}],[1188249810,{"a":[{"selector":".adLine","tasks":[["upward",".rendered_board_widget"]]}]}],[1831549554,{"a":[{"selector":"a[href*=\"/annons/\"]","tasks":[["upward","article"]]},{"selector":"a[href*=\"casino\"], a[href*=\"betting\"], a[href*=\"poker\"]","tasks":[["upward",".elementor-widget"]]},{"selector":"article.feed-item","tasks":[["has-text",["låna pengar|casino|betting","i"]]]}]}],[96688345,{"a":[{"selector":".fusion-post-content-container","tasks":[["has-text",["^annons","i"]],["upward","article"]]}]}],[1367106763,{"a":[{"selector":".lock-scroll","action":["style","overflow:unset!important"],"cssable":true}]}],[1522516803,{"a":[{"selector":".thecontent, .entry-content","action":["style","max-height: unset !important; overflow: initial !important; height: unset !important;"],"cssable":true},{"selector":".wp-caption","action":["style","display:initial!important"],"cssable":true}]}],[1369760362,{"a":[{"selector":"a[href=\"https://loppi.se/promotion\"]","tasks":[["upward",".page__section"]]}]}],[2042019923,{"a":[{"selector":".sponsored-inlist","tasks":[["upward","article"]]},{"selector":".td-post-category","tasks":[["has-text",["spons","i"]],["upward",2]]},{"selector":".td-pulldown-size","tasks":[["has-text",["spons","i"]],["upward",3]]}]}],[305377326,{"a":[{"selector":".overflow-hidden","action":["style","overflow-y: initial !important;"],"cssable":true}]}],[1779330001,{"a":[{"selector":"noscript","action":["remove",""],"tasks":[["has-text","mdp-deblocker-js-disabled"]]},{"selector":"style","action":["remove",""],"tasks":[["has-text","body \\* :not"]]}]}],[240236023,{"a":[{"selector":"#piano","action":["style","opacity: 1 !important;"],"cssable":true}]}],[78052131,{"a":[{"selector":".advert","action":["remove",""],"tasks":[["upward",".slick-item"]]},{"selector":".advert","tasks":[["upward",".b-card, .b-related__item"]]}]}],[1429366452,{"a":[{"selector":"p","tasks":[["has-text",["i samarbete med","i"]],["upward",".post"]]}]}],[1776729732,{"a":[{"selector":".nosnaj","tasks":[["upward",".comment"]]}]}],[310721995,{"a":[{"selector":"a[href$=\"/annons/\"]","tasks":[["upward",".img-featured-posts-image"]]}]}],[442568492,{"a":[{"selector":".excerpt","tasks":[["has-text",["annons","i"]],["upward","article"]]},{"selector":"body.modal-active","action":["style","overflow:unset!important"],"cssable":true},{"selector":"h3","tasks":[["has-text",["annons","i"]],["upward",".sidebar-widget"]]}]}],[1074209761,{"a":[{"selector":"article > div > p","tasks":[["has-text",["annonssamarbete","i"]],["upward","article"]]}]}],[342806067,{"a":[{"selector":".sponsored","tasks":[["upward",".card"]]}]}],[1021461208,{"a":[{"selector":"strong","tasks":[["has-text","ANNONS:"]]}]}],[1269490867,{"a":[{"selector":".textwidget","tasks":[["has-text","Annons"]]}]}],[430670520,{"a":[{"selector":".recipe-modal[data-state=\"undefined\"] .modal-container.open, .recipe-modal[data-state=\"undefined\"] .modal-container.open","action":["style","padding-top: 0 !important;"],"cssable":true},{"selector":".site-wrapper[data-state=\"undefined\"], .site-wrapper[data-state=\"undefined\"]","action":["style","padding-top: 40px !important;"],"cssable":true},{"selector":"body.modal-active.modal-open:before, body.modal-active:before","action":["style","opacity: unset !important; content: unset !important;"],"cssable":true}]}],[124102329,{"a":[{"selector":"a[href]:not([href*=\"/news55.se\"])","tasks":[["upward","section.sidebar"]]}]}],[576232049,{"a":[{"selector":".td-post-author-name > a","tasks":[["has-text",["extern skribent","i"]],["upward",5]]},{"selector":".td-post-author-name > a[href$=\"/author/foretagaren/\"]","tasks":[["upward",5]]},{"selector":".td-post-author-name > a[href$=\"/author/underhallning/\"]","tasks":[["upward",5]]},{"selector":"h4","tasks":[["has-text",["annonser","i"]],["spath"," ~ a"]]},{"selector":"h4","tasks":[["has-text",["annonser","i"]],["upward","aside"]]}]}],[1521301234,{"a":[{"selector":"#nativendo-mainfeed","action":["remove",""],"tasks":[["upward",1]]}]}],[2142205042,{"a":[{"selector":"html","action":["style","overflow:unset!important"],"cssable":true}]}],[1692811474,{"a":[{"selector":"span:not(.post-content)","tasks":[["has-text",["annons","i"]],["upward",".post"]]}]}],[1223443761,{"a":[{"selector":"a[href*=\"/sponsrat/\"]","tasks":[["upward",".td-big-grid-post"]]},{"selector":"span","tasks":[["has-text",["sponsrat","i"]],["upward",".td_block_wrap"]]}]}],[793963950,{"a":[{"selector":".widget_media_image","tasks":[["has-text",["annons","i"]]]}]}],[622094754,{"a":[{"selector":"article.post","tasks":[["has-text",["annons från","i"]]]}]}],[532511260,{"a":[{"selector":"article","tasks":[["has-text",["sponsrat innehåll","i"]]]},{"selector":"h2","tasks":[["has-text",["samarbetslänkar","i"]],["upward",".article-inner"]]}]}],[268137993,{"a":[{"selector":"a[href*=\"casino\"]","tasks":[["upward","aside.widget_text"]]}]}],[1839630818,{"a":[{"selector":".header-banner--regular, .app-banner","action":["style","--banner-offset: 0 !important;"],"cssable":true},{"selector":"a[href*=\"article-ad-\"]","tasks":[["upward",".resource--link"]]}]}],[401657407,{"a":[{"selector":".no-scroll","action":["style","overflow: initial !important;"],"cssable":true}]}]]);

const hostnamesMap = new Map([["hogsby-nytt.se",806964559],["monsteras-nytt.se",806964559],["oskarshamns-nytt.se",806964559],["horisontmagasin.se",1963081666],["hrnytt.se",1364972564],["ibnytt.se",1306378561],["idg.se",[1871879107,1574606658]],["forum.macworld.se",1871879107],["illvet.se",620809812],["improveme.se",966000716],["influens.se",1470042716],["inredningsarkitektur.se",1415256186],["interiorbyvanessa.se",1113272086],["it-finans.se",1432667614],["it-halsa.se",1432667614],["it-kanalen.se",1432667614],["it-pedagogen.se",1432667614],["it-retail.se",1432667614],["javligtgott.se",1706049066],["justwannahavefun.se",1247118418],["kamerabild.se",[799213311,1438690994]],["mobil.se",1438690994],["karinrahm.se",216452043],["karriarlakare.se",1870619007],["kiacarclub.se",1136254784],["kimura.se",106080349],["kingsizemag.se",1820085266],["kittad.se",2089724564],["klart.se",81369119],["kobe.se",1517207255],["kokaihop.se",867025190],["koket.se",1855661774],["komponentkoll.se",1428405537],["kultwatch.se",1370327846],["kvinnatillkvinna.se",836092611],["kvix.se",107770648],["lajvo.se",1471883747],["landlantbruk.se",1188249810],["landskogsbruk.se",1188249810],["listor.se",1831549554],["livinguppsala.se",96688345],["livsmedelsverket.se",1367106763],["ljudochbild.se",1522516803],["loppi.se",1369760362],["maklarvarlden.se",2042019923],["matspar.se",305377326],["medibok.se",1779330001],["mestmotor.se",240236023],["metromode.se",78052131],["minimalisterna.se",1429366452],["missatsamtal.se",1776729732],["mmanytt.se",310721995],["modernalivet.se",442568492],["monasuniversum.se",1074209761],["motivation.se",342806067],["moviezine.se",1021461208],["mygatemagazine.se",1269490867],["mytaste.se",430670520],["news55.se",124102329],["newsvoice.se",576232049],["ng.se",1521301234],["nongrata.se",2142205042],["nordfront.se",1692811474],["nordichardware.se",1223443761],["nyadagbladet.se",793963950],["nyfiknainvesterare.se",622094754],["nyheteridag.se",532511260],["obsid.se",268137993],["omni.se",1839630818],["omniekonomi.se",1839630818],["oru.se",401657407],["tui.se",401657407]]);

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
