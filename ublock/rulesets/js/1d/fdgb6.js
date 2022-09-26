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

const argsMap = new Map([[1183236361,{"a":[{"selector":"div[class=\" margin-top-lg \"]","tasks":[["has",{"selector":".custom-ad-container"}]]}]}],[1901848151,{"a":[{"selector":".background-ad","action":["style","min-height: 0 !important"],"cssable":true},{"selector":".newsbox","tasks":[["has",{"selector":".adunit-lazy"}]]}]}],[1041249911,{"a":[{"selector":".elementor-widget-wrap > .elementor-section","tasks":[["has-text","REKLAMER"]]}]}],[1021860860,{"a":[{"selector":".uk-panel-box","tasks":[["has",{"selector":"a[href*=\"undefined\"]"}]]}]}],[1812575366,{"a":[{"selector":".blog-post","tasks":[["has-text",["casino","i"]]]}]}],[2124595954,{"a":[{"selector":"#header > div","tasks":[["has",{"selector":"div[id*=\"undefined\"]"}]]}]}],[623638116,{"a":[{"selector":".promotion","action":["style","top: 0px !important"],"cssable":true}]}],[777902661,{"a":[{"selector":".clearfixP.columns[style] .clearfixP.box-no-border","tasks":[["has",{"selector":" > .narrow-banner"}]]},{"selector":".color-scheme-1","tasks":[["has-text",["Casino","i"]],["spath"," + div"]]},{"selector":".color-scheme-1","tasks":[["has-text",["Casino","i"]]]},{"selector":"script[data-adfscript]","tasks":[["upward",1]]}]}],[1017776971,{"a":[{"selector":"h2","tasks":[["has-text",["casino","i"]]]}]}],[388288477,{"a":[{"selector":"p","tasks":[["has",{"selector":"a[href*=\"undefined\"]"}]]}]}],[1698878009,{"a":[{"selector":"div[data-testid=\"undefined\"]","tasks":[["has",{"selector":"span[style=\"color:#A0A09F;\"]"}]]}]}],[1092801764,{"a":[{"selector":".textwidget > div","tasks":[["has",{"selector":"script"}]]},{"selector":".widget_text","tasks":[["has",{"selector":"script"}],["spath",":first-of-type"]]}]}],[1739670058,{"a":[{"selector":".auto_expandable","action":["style","margin-top: 21px !important"],"cssable":true},{"selector":".gridster_grid","tasks":[["has",{"selector":".adblock[style^=\"background:#32\"]"}]]}]}],[610337884,{"a":[{"selector":".o-deck","tasks":[["has",{"selector":"div[class^=\"ad ad-wide\"]"}]]}]}],[374343356,{"a":[{"selector":"#topbanner","action":["style","height: 1px !important"],"cssable":true},{"selector":".region-right > .block","tasks":[["has",{"selector":"a[href*=\"undefined\"]"}]]}]}],[804873915,{"a":[{"selector":"div[class*=\"undefined\"]","tasks":[["upward",1]]}]}],[532459323,{"a":[{"selector":".ad-banner","tasks":[["upward",1]]}]}],[1030360311,{"a":[{"selector":".popular-articles","tasks":[["has",{"selector":" > .scrolling-side-ad"}]]}]}],[527593331,{"a":[{"selector":".tdc-row","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"a"}]]}]]},{"selector":"aside.WP_Editor_Widget","tasks":[["has",{"selector":"script"}]]}]}],[2094564497,{"a":[{"selector":".boxlist","tasks":[["has",{"selector":".adspot-article-wrapper"}]]}]}],[85106118,{"a":[{"selector":".widget","tasks":[["has",{"selector":".ads"}]]}]}],[194521771,{"a":[{"selector":".col-sm-6.col-12","tasks":[["has",{"selector":".augl"}],["not",{"selector":"","tasks":[["has",{"selector":".fluid"}]]}]]},{"selector":".container","action":["style","margin-top: 0 !important"],"cssable":true},{"selector":".main-header","action":["style","margin-top: 0 !important"],"cssable":true}]}],[432665844,{"a":[{"selector":".vc_column","tasks":[["has",{"selector":".mobile-ad"}],["not",{"selector":"","tasks":[["has",{"selector":"a"}]]}]]},{"selector":".vc_column-inner","tasks":[["has",{"selector":".mobile-ad"}],["not",{"selector":"","tasks":[["has",{"selector":"a"}]]}]]}]}],[488589419,{"a":[{"selector":".tdc-row","tasks":[["has",{"selector":".td_block_text_with_title"}]]},{"selector":".tdc-row","tasks":[["has",{"selector":".vc_column:only-of-type .augl-container:only-of-type"}]]}]}],[471511018,{"a":[{"selector":".box","tasks":[["has",{"selector":"div[class^=\"undefined\"]"}]]},{"selector":".row div[class^=\"undefined\"]","tasks":[["upward",1]]}]}],[605098689,{"a":[{"selector":".mvp-flex-ad","tasks":[["has",{"selector":"img[width=\"300\"]"}]]},{"selector":".mvp-widget-home","tasks":[["has-text","^Velunnarar"]]}]}],[933014770,{"a":[{"selector":".padded.limit--tight.limit","action":["style","padding-top: 15px !important"],"cssable":true},{"selector":"div.padded--no-bottom.padded--less.padded.limit","action":["style","padding-top: 5px !important"],"cssable":true}]}],[32438442,{"a":[{"selector":".adsbygoogle","tasks":[["upward",1]]}]}],[2027733814,{"a":[{"selector":".g-10","tasks":[["has-text","Artikkelen fortsetter "]]},{"selector":".gofollow","tasks":[["upward",3]]}]}],[1236725510,{"a":[{"selector":".sidebar__section","tasks":[["has",{"selector":"[class^=\"undefined\"]"}]]}]}],[899697529,{"a":[{"selector":"#aid-overlay","action":["style","background: none !important; height: 0px !important; min-height: unset !important"],"cssable":true},{"selector":".aid-background-blur","action":["style","filter: none !important"],"cssable":true},{"selector":"amedia-incentive","action":["style","top: 1600px !important"],"cssable":true},{"selector":"amedia-include[src*=\"/incentive/\"]","action":["style","border: 10px !important; border-color: #CD5C5C !important; border-style: solid !important"],"cssable":true}]}],[203105693,{"a":[{"selector":".container-newsfeed + section .c-teaser__image","action":["style","max-height: none !important"],"cssable":true},{"selector":".container-newsfeed + section .o-grid__col:not(.u-size-onethird-medium):not([data-ga-action=\"1\"])","action":["style","height: 200px !important"],"cssable":true},{"selector":".js-strossle-widget .o-grid__col","tasks":[["has",{"selector":" > article[id^=\"undefined\"]"}]]},{"selector":".o-grid__col","tasks":[["has",{"selector":" > [id^=\"undefined\"]"}]]},{"selector":".o-grid__col","tasks":[["has",{"selector":".c-ad"}]]}]}],[1204101386,{"a":[{"selector":".gridUnit.span6","tasks":[["has",{"selector":"div[id^=\"undefined\"]"}]]}]}],[534530483,{"a":[{"selector":".article-content","action":["style","padding: 0"],"cssable":true}]}],[1660056603,{"a":[{"selector":"#main > div","tasks":[["has",{"selector":"[data-ad-subtype^=\"undefined\"]"}]]}]}]]);

const hostnamesMap = new Map([["lokalavisen.dk",1183236361],["lydogbillede.dk",1901848151],["lydogbilde.no",1901848151],["lystfiskerguiden.dk",1041249911],["madridista.dk",1021860860],["margit-henriksen.dk",1812575366],["thura.dk",1812575366],["meremobil.dk",2124595954],["mm.dk",623638116],["ni.dk",777902661],["padleguide.dk",1017776971],["polarmedia.dk",388288477],["presse-fotos.dk",1698878009],["recordere.dk",1092801764],["skagensavis.dk",1739670058],["tv2.dk",610337884],["spanienidag.es",374343356],["bilasolur.is",804873915],["eidfaxi.is",532459323],["hringbraut.frettabladid.is",1030360311],["hjartalif.is",527593331],["kjarninn.is",2094564497],["lifdununa.is",85106118],["mbl.is",194521771],["menn.is",432665844],["nutiminn.is",488589419],["sporttv.is",471511018],["veitingageirinn.is",605098689],["visir.is",933014770],["sveip.net",32438442],["730.no",[2027733814,1236725510]],["melkoghonning.no",1236725510],["aasavis.no",899697529],["amta.no",899697529],["an.no",899697529],["ao.no",899697529],["auraavis.no",899697529],["austagderblad.no",899697529],["avisenagder.no",899697529],["ba.no",899697529],["bygdebladet.no",899697529],["bygdeposten.no",899697529],["dalane-tidende.no",899697529],["dt.no",899697529],["eikerbladet.no",899697529],["enebakkavis.no",899697529],["f-b.no",899697529],["finnmarkdagblad.no",899697529],["finnmarken.no",899697529],["firda.no",899697529],["firdaposten.no",899697529],["fremover.no",899697529],["gbnett.no",899697529],["gjengangeren.no",899697529],["glomdalen.no",899697529],["h-avis.no",899697529],["ha-halden.no",899697529],["hadeland.no",899697529],["hardanger-folkeblad.no",899697529],["helg.no",899697529],["iharstad.no",899697529],["indre.no",899697529],["jarlsbergavis.no",899697529],["jbl.no",899697529],["kv.no",899697529],["kvinnheringen.no",899697529],["laagendalsposten.no",899697529],["lierposten.no",899697529],["lofotposten.no",899697529],["lyngdalsavis.no",899697529],["merakerposten.no",899697529],["moss-avis.no",899697529],["nettavisen.no",899697529],["nidaros.no",899697529],["noblad.no",899697529],["nordhordland.no",899697529],["nordlys.no",899697529],["nt24.no",899697529],["oa.no",899697529],["oblad.no",899697529],["op.no",899697529],["ostlendingen.no",899697529],["oyene.no",899697529],["r-a.no",899697529],["rablad.no",899697529],["ranablad.no",899697529],["rb.no",899697529],["retten.no",899697529],["rha.no",899697529],["ringblad.no",899697529],["ringsaker-blad.no",899697529],["sa.no",899697529],["sandeavis.no",899697529],["sandnesposten.no",899697529],["sb.no",899697529],["smaalenene.no",899697529],["sognavis.no",899697529],["solabladet.no",899697529],["solungavisa.no",899697529],["strandbuen.no",899697529],["svelviksposten.no",899697529],["ta.no",899697529],["tb.no",899697529],["telen.no",899697529],["tk.no",899697529],["tvedestrandsposten.no",899697529],["varingen.no",899697529],["vestbyavis.no",899697529],["abcnyheter.no",203105693],["adressa.no",1204101386],["aftenbladet.no",534530483],["aftenposten.no",1660056603],["vg.no",1660056603]]);

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
