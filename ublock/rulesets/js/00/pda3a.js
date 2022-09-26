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

// nor-0

const argsMap = new Map([[1708940643,{"a":[{"selector":".front optimus-element","tasks":[["has-text","Eurojackpot"]]},{"selector":"amedia-include[param-editionid=\"undefined\"]","tasks":[["upward",1]]},{"selector":"article[data-lp-section=\"undefined\"]","tasks":[["has",{"selector":".slotHeader"}],["has-text",["lotto","i"]]]}]}],[1108994382,{"a":[{"selector":"ul","tasks":[["has",{"selector":".columnLogo"}]]}]}],[1703621084,{"a":[{"selector":"table[width^=\"7\"]:first-of-type","tasks":[["has",{"selector":"a[href*=\"undefined\"]"}]]},{"selector":"tr","tasks":[["has",{"selector":"a[href=\"./index.html\"]"}],["spath"," + tr + tr"]]}]}],[1902396983,{"a":[{"selector":".adsbygoogle","tasks":[["upward",2]]},{"selector":"ins[data-revive-zoneid]","tasks":[["upward",2]]}]}],[1105183164,{"a":[{"selector":".entry-content > h4","tasks":[["has",{"selector":"script[src$=\"/adsbygoogle.js\"]"}]]},{"selector":".entry-content > h6","tasks":[["has",{"selector":"script[src$=\"/adsbygoogle.js\"]"}]]},{"selector":".so-widget-sow-editor","tasks":[["has",{"selector":"a[href^=\"https://online.adservicemedia.dk/\"]"}]]},{"selector":".textwidget","tasks":[["has-text","Annonse"]]},{"selector":".widget-title","tasks":[["has-text","Annonser"]]}]}],[587192558,{"a":[{"selector":".widget","tasks":[["has-text","Annonse"]]}]}],[1871548106,{"a":[{"selector":".float-left","tasks":[["has",{"selector":"span[id^=\"undefined\"]"}]]}]}],[1569234344,{"a":[{"selector":".widget-goodpress-home-block-one","tasks":[["has-text","Annonsørinnhold"]]}]}],[1767890069,{"a":[{"selector":".has-text-align-center","tasks":[["has",{"selector":" > a[href*=\".adservice\"]"}]]}]}],[2106111859,{"a":[{"selector":".code-block","tasks":[["has-text","Reklame"],["not",{"selector":"","tasks":[["has-text","butikk"]]}]]},{"selector":".code-block","tasks":[["has-text","annonse"]]},{"selector":".tdc-column","tasks":[["has",{"selector":"[src*=\"/pagead\"]"}]]}]}],[303971591,{"a":[{"selector":".content-marketing-ribbon","action":["style","margin-top: 20px !important"],"cssable":true}]}],[1274152375,{"a":[{"selector":"iframe[src*=\"://ads.\"]","tasks":[["upward",1]]}]}],[2077105225,{"a":[{"selector":".xrow","tasks":[["has",{"selector":" > div[class*=\" \"] > span[class]"}]]}]}],[64899713,{"a":[{"selector":"div","tasks":[["has",{"selector":" > span","tasks":[["has-text","Annonse"]]}]]}]}],[1646730536,{"a":[{"selector":".small-6[class*=\"undefined\"]","tasks":[["has",{"selector":"a[href*=\"tradedoubler.com\"]"}]]},{"selector":"div[data-ga-action$=\"undefined\"]","tasks":[["upward",1]]}]}],[2029106352,{"a":[{"selector":".widget_text","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"a"}]]}]]},{"selector":"section","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"a"}]]}]]}]}],[1178471852,{"a":[{"selector":"#topboard","tasks":[["upward",1]]},{"selector":"article > div","tasks":[["has-text","^annonse$"]]},{"selector":"div","tasks":[["matches-css",{"name":"min-height","value":"^165px$"}]]},{"selector":"div.clearfix.col-full-width","tasks":[["has-text","kommersielle partner"]]},{"selector":"main > div > div","tasks":[["has-text","kommersielle partner"]]},{"selector":"main > section > section","tasks":[["has-text","^annonse$"]]},{"selector":"main","action":["style","min-height: unset !important"],"cssable":true},{"selector":"section + div","tasks":[["has",{"selector":"span"}]]},{"selector":"section > section","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"a"}]]}]]},{"selector":"section > section:first-of-type + section:last-of-type","action":["style","width: 100% !important; max-width: 675px !important"],"tasks":[["has",{"selector":"[class*=\"  \"]"}]]},{"selector":"section","tasks":[["has",{"selector":" > div > div","tasks":[["has-text","^annonse$"]]}]]},{"selector":"section[class^=\"undefined\"]","action":["style","width: 100% !important"],"cssable":true},{"selector":"section[hidden] + section","action":["style","column-count: 3 !important; width: 100% !important"],"cssable":true}]}],[1270952707,{"a":[{"selector":".one-half","tasks":[["has-text",["[kc]asino","i"]]]},{"selector":".widget_text","tasks":[["has",{"selector":".adsbygoogle"}]]}]}],[975139213,{"a":[{"selector":".adsbygoogle","tasks":[["upward",5]]}]}],[767757035,{"a":[{"selector":".pages-container__element","tasks":[["has",{"selector":"[class*=\"undefined\"]"}]]}]}],[286411620,{"a":[{"selector":"div.large-12.row","tasks":[["has-text","MASCUS"]]}]}],[1341090785,{"a":[{"selector":".widget_media_image","tasks":[["has-text","^ANNONSE"]]}]}],[467753374,{"a":[{"selector":"div[id^=\"undefined\"]","tasks":[["has",{"selector":"div[data-adslot^=\"undefined\"]"}]]}]}],[555457969,{"a":[{"selector":"body:not(.broom,.lab)","action":["style","padding-top: 70px !important"],"cssable":true}]}],[1140402219,{"a":[{"selector":".fl-visible-desktop-medium","tasks":[["has",{"selector":"div[class^=\"undefined\"]","tasks":[["has-text","Annonse:"]]}]]}]}],[145881039,{"a":[{"selector":".td-pb-span4","tasks":[["has-text","ANNONSØRINNHOLD"]]}]}],[115187009,{"a":[{"selector":".bundle li[class^=\"undefined\"]","tasks":[["has",{"selector":"div[data-ad-subtype]"}]]}]}],[1802112744,{"a":[{"selector":"div[id*=\"undefined\"]","tasks":[["upward",1]]}]}],[82206806,{"a":[{"selector":".page-container","action":["style","margin-top: 0 !important"],"cssable":true}]}],[1279991616,{"a":[{"selector":".td_module_wrap","tasks":[["has",{"selector":"a[href*=\"undefined\"]"}]]}]}],[954834137,{"a":[{"selector":"#dtnContainer","tasks":[["has",{"selector":".dtnad"}]]}]}],[45346523,{"a":[{"selector":"tr > td > div","tasks":[["has",{"selector":"a[href*=\"clk.tradedoubler.\"]"}]]}]}],[938705618,{"a":[{"selector":".forside_adholder","tasks":[["upward",1]]},{"selector":"td","tasks":[["has",{"selector":" > noscript"}]]},{"selector":"td","tasks":[["has",{"selector":"img[src=\"gifs/1pix.gif\"]"}]]},{"selector":"td","tasks":[["has-text","^\\xA0$"],["not",{"selector":"","tasks":[["has-text","\\S"]]}],["not",{"selector":"","tasks":[["has",{"selector":"img"}]]}]]},{"selector":"tr","tasks":[["has-text","^\\xA0$"],["not",{"selector":"","tasks":[["has-text","\\S"]]}],["not",{"selector":"","tasks":[["has",{"selector":"img"}]]}]]}]}],[1124768299,{"a":[{"selector":"div.container","tasks":[["has",{"selector":"#left_sticky"}]]}]}],[637177045,{"a":[{"selector":".col-md-3 .block","tasks":[["has-text","ponsor"]]}]}]]);

const hostnamesMap = new Map([["nettavisen.no",1708940643],["nord-salten.no",1108994382],["onlineaviser.no",1703621084],["parcferme.no",1902396983],["pengenytt.no",1105183164],["politainment.no",587192558],["smis.no",587192558],["purehelp.no",1871548106],["ranaposten.no",1569234344],["xn--bodposten-n8a.no",1569234344],["reiseliv.no",1767890069],["resett.no",2106111859],["seher.no",303971591],["skolediskusjon.no",1274152375],["sol.no",2077105225],["sorlandsavisen.no",64899713],["startsiden.no",1646730536],["sva.no",2029106352],["tek.no",1178471852],["teknologia.no",1270952707],["thaiguiden.no",975139213],["travelmarket.no",767757035],["tungt.no",286411620],["tunnelsyn.no",1341090785],["tv2.no",467753374],["www.tv2.no",555457969],["united.no",1140402219],["utrop.no",145881039],["vg.no",115187009],["direkte.vg.no",1802112744],["vgtv.no",82206806],["viralefilmer.no",1279991616],["visitnorway.no",954834137],["win-xp.no",45346523],["yrkesbil.no",938705618],["bornholm.nu",1124768299],["ipmsnorge.org",637177045]]);

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
