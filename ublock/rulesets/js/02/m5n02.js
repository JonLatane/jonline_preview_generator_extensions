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

const argsMap = new Map([[1685277934,{"a":[{"selector":"div[style^=\"font-size: 0.7\"]","tasks":[["has-text","Annons:"],["upward",1]]}]}],[698947945,{"a":[{"selector":".h-background--sponsored","tasks":[["upward",".article-row"]]},{"selector":"a[href*=\"/sponsrat\"]","tasks":[["upward",".c-featured-article"]]}]}],[868056933,{"a":[{"selector":".spons","tasks":[["upward",".intro, #hero, #featholder"]]}]}],[1443513355,{"a":[{"selector":".item-list__item","tasks":[["has-text",["annons från","i"]]]}]}],[328837015,{"a":[{"selector":"span","tasks":[["has-text",["^sponsrad$","i"]],["upward","[data-cy=\"deal-carousel\"]"]]}]}],[1527984856,{"a":[{"selector":".teaser-label","tasks":[["has-text",["^annons","i"]],["upward",".data-grid-teaser"]]}]}],[445225922,{"a":[{"selector":"*::-webkit-scrollbar","action":["style","display: unset !important;"],"cssable":true},{"selector":"*::-webkit-scrollbar-thumb","action":["style","background: #5e5e5e !important; border: 64px none #ffffff !important; border-radius: 0px !important;"],"cssable":true}]}],[228941822,{"a":[{"selector":"html.g1-popup-visible","action":["style","overflow: initial !important;"],"cssable":true}]}],[2050778969,{"a":[{"selector":"div","tasks":[["matches-css",{"name":"height","value":"^250px$"}]]}]}],[747073734,{"a":[{"selector":".meta--add","tasks":[["upward",".link"]]}]}],[2042741670,{"a":[{"selector":"html.js.js--page-hide body","action":["style","visibility:visible!important"],"cssable":true}]}],[968296741,{"a":[{"selector":"a[href*=\"casino\"], a[href*=\"spelsajt\"], a[href*=\"betting\"], a","tasks":[["has-text","Samarbete:"],["upward",".item.hentry, .owl-item, article"]]},{"selector":"aside","tasks":[["has-text","Annonser:"]]}]}],[1515419452,{"a":[{"selector":".category-tag","tasks":[["has-text",["annons","i"]],["upward",".ArticleListItem"]]}]}],[1134569714,{"a":[{"selector":"a[target=\"_blank\"]","tasks":[["upward",2]]},{"selector":"h3","tasks":[["has-text","^Annons$"],["spath"," + div"]]}]}],[47140153,{"a":[{"selector":"a[href*=\".se/odds/\"]","tasks":[["upward","li"]]},{"selector":"strong","tasks":[["has-text","casino"],["upward","li.sidebar-widget"]]}]}],[309872421,{"a":[{"selector":"[title^=\"Annons\"]","tasks":[["upward","article"]]}]}],[1845900405,{"a":[{"selector":".sponsrad-over","tasks":[["upward",".article-list"]]},{"selector":"h3","tasks":[["has-text",["annonser","i"]],["upward",".view-nya-lankar-front"]]},{"selector":"img[src*=\"sponsrad\"]","tasks":[["upward",".link-list-item"]]}]}],[1181504232,{"a":[{"selector":"html, .unselectable","action":["style","-moz-user-select:initial!important; -webkit-user-select:initial!important; -webkit-touch-callout:initial!important; user-select:initial!important; -webkit-tap-highlight-color:initial!important; cursor:initial!important;"],"cssable":true}]}],[703312408,{"a":[{"selector":"a[href*=\"casino\"]","tasks":[["upward",".mh-posts-stacked-wrap"]]}]}],[1492954927,{"a":[{"selector":"[class^=\"CookieConsentPopup\"]","tasks":[["upward",".ui.page.dimmer"]]},{"selector":"body.dimmed","action":["style","overflow:unset!important"],"cssable":true}]}],[2070735554,{"a":[{"selector":"h4","tasks":[["has-text","veckans produkt"],["upward",3]]}]}],[533187282,{"a":[{"selector":"body","action":["style","-webkit-user-select: text !important; user-select: text !important;"],"cssable":true}]}],[1218421532,{"a":[{"selector":"a[href*=\"/sponsrat\"]","tasks":[["upward",".latest-post"]]}]}],[635869318,{"a":[{"selector":"img[src*=\"/Biz.png\"]","tasks":[["upward",".elementor-widget-image"],["spath"," ~ .elementor-widget-html"]]}]}],[268647081,{"a":[{"selector":"[class*=\"NativeBarWrapper\"]","tasks":[["upward","article"]]}]}],[822299559,{"a":[{"selector":"body.modal-open","action":["style","overflow:initial!important"],"cssable":true}]}],[1279169101,{"a":[{"selector":".partnerLabel","tasks":[["upward",".highlight"]]}]}],[435970567,{"a":[{"selector":".article, blockquote.wp-embedded-content","action":["style","display:initial!important;"],"cssable":true}]}],[2075088949,{"a":[{"selector":".cd-card-bar","tasks":[["has-text",["annons","i"]],["upward",".cd-sidebar-item, .cd-news-card"]]}]}],[2069246668,{"a":[{"selector":"a[target=\"_blank\"]","action":["remove",""],"tasks":[["upward","li.Notice"]]},{"selector":"span","tasks":[["has-text",["sponsr","i"]],["upward",".article"]]}]}],[2017050271,{"a":[{"selector":"p","tasks":[["has-text","ANNONS"]]}]}],[1854282680,{"a":[{"selector":".sponsor","tasks":[["upward",".post"]]}]}],[2146849120,{"a":[{"selector":".label","tasks":[["has-text",["samarbete|annons|reklam|presenteras av","i"]],["upward","a"]]}]}],[403723697,{"a":[{"selector":"center","tasks":[["has-text",["annons","i"]],["upward",1]]}]}],[463227425,{"a":[{"selector":".carousel-item-link","tasks":[["has-text","Annons:"]]}]}],[1012523781,{"a":[{"selector":"h4","tasks":[["has-text",["spons","i"]],["upward",".td-pb-row [class*=\"td-pb-span\"]"]]}]}],[1420617370,{"a":[{"selector":".ra-widget-article-tag","tasks":[["has-text",["partner","i"]],["upward",".ra-widget-panel"]]}]}],[561375319,{"a":[{"selector":"p","tasks":[["has-text",["i annonssamarbete med","i"]],["upward",".flex.overflow-hidden"]]}]}],[767931851,{"a":[{"selector":"span","tasks":[["has-text",["annons","i"]],["upward",".elementor-widget-wrap"]]}]}],[2096497392,{"a":[{"selector":".entry-content","action":["style","display: initial !important;"],"cssable":true}]}],[149930007,{"a":[{"selector":".sponsored-article","tasks":[["upward",".post-item"]]}]}],[1203855420,{"a":[{"selector":"[class*=\"tot-content-preview-container\"]:has(a[href*=\"casino\"])","action":["remove",""]}]}],[476645183,{"a":[{"selector":".sponsor-info","tasks":[["upward",".post_feed_post"]]},{"selector":"a[href*=\"/category/reklam\"], a[href*=\"/category/annons\"]","tasks":[["upward",".featured-post"]]}]}],[798691687,{"a":[{"selector":"div","tasks":[["has-text","Sponsrat av"],["upward","div[data-curated-shelf-id]"]]}]}],[156866541,{"a":[{"selector":".sponsor","tasks":[["upward",".article-list__item"]]}]}],[1085097516,{"a":[{"selector":".jet-listing-dynamic-field__content","tasks":[["has-text",["annonssamarbete","i"]],["upward",".jet-listing-grid__item"]]}]}],[2092945198,{"a":[{"selector":".front-cta","tasks":[["has-text",["sponsrat innehåll","i"]]]}]}],[2046909629,{"a":[{"selector":"div.clamzone","tasks":[["matches-css-before",{"name":"content","pseudo":"before","value":["Annons:","i"]}]]}]}],[15085883,{"a":[{"selector":".sponsored-label","tasks":[["upward",".carousel-slide"]]}]}],[832148942,{"a":[{"selector":".article-grid__sponsored","tasks":[["upward",".card"]]}]}],[1718612067,{"a":[{"selector":"a","tasks":[["has-text",["sponsra","i"]],["upward",3]]},{"selector":"span","tasks":[["has-text","SPONSRADE ARTIKLAR"],["upward",3]]}]}],[2022018368,{"a":[{"selector":"a[href*=\"/spons\"]","tasks":[["upward",".wppsac-post-carousel"]]}]}],[209217315,{"a":[{"selector":"button","action":["remove",""],"tasks":[["has-text",["annons","i"]],["upward",".owl-item"]]}]}],[163232476,{"a":[{"selector":".fancybox-lock","action":["style","overflow-y: auto !important;"],"cssable":true}]}],[786583711,{"a":[{"selector":".leftinfo","tasks":[["has-text","Externa artiklar:|Länktips:"]]}]}],[170456875,{"a":[{"selector":".sidebox","tasks":[["has-text","Externa länkar|Artiklar"]]}]}],[1035918271,{"a":[{"selector":".voister .campaign-vignette","tasks":[["upward",".voister .brief"]]}]}],[1962521846,{"a":[{"selector":".ad","tasks":[["upward","article"]]},{"selector":"p","tasks":[["has-text",["^kommersiellt innehåll","i"]],["upward","article"]]},{"selector":"p","tasks":[["has-text",["^kommersiellt innehåll|^annons$","i"]],["upward","a"]]}]}],[78357702,{"a":[{"selector":".label--black","tasks":[["has-text",["sponsrat","i"]],["upward","article"]]}]}],[1477397770,{"a":[{"selector":".et_pb_text_inner","tasks":[["has-text",["annons","i"]],["upward",".et_pb_section"]]},{"selector":"a[target=\"_blank\"]:not([href^=\"https://www.macken.xyz\"])","tasks":[["upward",".et_pb_section"]]}]}]]);

const hostnamesMap = new Map([["outsidesweden.se",1685277934],["padeldirekt.se",698947945],["piraja.se",868056933],["podtail.se",1443513355],["pricerunner.se",328837015],["privataaffarer.se",1527984856],["proffs.se",445225922],["pussad.se",228941822],["radio.se",2050778969],["realtid.se",747073734],["reco.se",2042741670],["senses.se",968296741],["shortcut.se",1515419452],["siljannews.se",1134569714],["sillyseason.se",47140153],["skargarden.se",309872421],["so-rummet.se",1845900405],["spelhubben.se",1181504232],["spelochfilm.se",703312408],["sportbladetplay.se",1492954927],["sporthalsa.se",2070735554],["spray.se",533187282],["startaochdriva.se",1218421532],["streamat.se",635869318],["svd.se",268647081],["svenskahousegruppen.se",822299559],["svenskgolf.se",1279169101],["svenskjakt.se",435970567],["sverigespringer.se",2075088949],["swedroid.se",2069246668],["tabyallehanda.se",2017050271],["teknifik.se",1854282680],["tekniknytt.se",2146849120],["tekniksmart.se",403723697],["99.teknikveckan.se",463227425],["tennisportalen.se",1012523781],["thelocal.se",1420617370],["tidningenbalans.se",561375319],["tidningenglobal.se",767931851],["tidningenridsport.se",2096497392],["tjanstebilen.se",149930007],["totallyorebro.se",1203855420],["totallystockholm.se",1203855420],["trendenser.se",476645183],["tripadvisor.se",798691687],["tvdags.se",156866541],["underbaraclaras.se",1085097516],["upptack-sverige.se",2092945198],["utsidan.se",2046909629],["varden.se",15085883],["viivilla.se",832148942],["villalivet.se",1718612067],["villatidningen.se",2022018368],["vimedbarn.se",209217315],["vinbanken.se",163232476],["viseniorer.se",786583711],["vmj.se",170456875],["voister.se",1035918271],["wellness.se",1962521846],["welma.se",78357702],["macken.xyz",1477397770]]);

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
