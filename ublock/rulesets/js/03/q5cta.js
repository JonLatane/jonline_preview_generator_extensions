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

// nld-0

const argsMap = new Map([[1270892276,{"a":[{"selector":"[href^=\"https://t.adating.link/\"]","tasks":[["upward",2]]}]}],[1839132324,{"a":[{"selector":"[id^=\"loaBlock\"]","tasks":[["has-text","Advertentie"]]}]}],[642974601,{"a":[{"selector":"[id^=\"text-\"]","tasks":[["has-text","adv"]]}]}],[2048029435,{"a":[{"selector":"[id^=\"text\"][class$=\"sidebar-widget\"]","tasks":[["has-text",["casino","i"]],["spath",":not(:has(div[class=\"widget-title\"]))"]]}]}],[1347140095,{"a":[{"selector":".sidebarbox > .widgettitle","tasks":[["has-text","Banner"]]}]}],[28128646,{"a":[{"selector":".w-full","tasks":[["has-text","ADV|Gesponsord door|Advertentie"]]}]}],[1468672692,{"a":[{"selector":".theiaStickySidebar > .widget","tasks":[["has-text","Advertentie"]]}]}],[1116677416,{"a":[{"selector":"[advobject]","tasks":[["upward",".bg-gray-100"]]}]}],[49295983,{"a":[{"selector":".content-start > .w-full","tasks":[["has-text","Externe"]]}]}],[826694193,{"a":[{"selector":"#rsidebar > ul > li > h2","tasks":[["has-text",["ad","i"]]]}]}],[504927640,{"a":[{"selector":".widget","tasks":[["has-text","Links"]]}]}],[1613612812,{"a":[{"selector":".tile-category","tasks":[["has-text",["advert","i"]],["upward",".aw-tile"]]}]}],[1256077100,{"a":[{"selector":"[class$=\"center\"] > [id^=\"div-gpt-ad\"]","tasks":[["upward",2]]},{"selector":"div.text-center","tasks":[["has-text","advert"]]},{"selector":"div.text-center[advobject]","tasks":[["upward",2]]}]}],[1380032187,{"a":[{"selector":".Textads","tasks":[["upward",".ContentRightBlock"]]}]}],[381418998,{"a":[{"selector":".block","tasks":[["has-text","Gesponsorde"]]}]}],[1574910085,{"a":[{"selector":".widget","tasks":[["has",{"selector":".widget-title","tasks":[["has-text",["Partners","i"]]]}]]}]}],[428736020,{"a":[{"selector":"div[class*=\"elementor-widget-button\"]","tasks":[["has-text","Advert"]]}]}],[1816203638,{"a":[{"selector":".widget","tasks":[["has-text","Sponsors"]]}]}],[590240223,{"a":[{"selector":"a[href*=\"/ad/\"]","tasks":[["upward",1],["spath",":not(.podcast-inline):not(.nav)"]]}]}],[1107183912,{"a":[{"selector":"p","tasks":[["has",{"selector":"a[href]:has(img[src*=\"creditexpo.nl/wp-content/uploads/\"][width=\"300\"])"}]]}]}],[915918546,{"a":[{"selector":"em","tasks":[["has-text","reclame"]]}]}],[778622004,{"a":[{"selector":"aside[class^=\"td_block\"]","tasks":[["has-text",["partners","i"]]]}]}],[1901407136,{"a":[{"selector":".elementor-widget-container","tasks":[["has-text",["powered by","i"]]]}]}],[2089535395,{"a":[{"selector":".nxs-default-p > p","tasks":[["has-text","advert"]]}]}],[1717945360,{"a":[{"selector":"body","action":["style","margin-top:-20px!important"],"cssable":true}]}],[1063995659,{"a":[{"selector":"#text-2","tasks":[["has-text","Advertentie"]]}]}],[1590620881,{"a":[{"selector":".elementor-element > .elementor-element-populated:has(.banner-container)","tasks":[["not",{"selector":"","tasks":[["has-text",["podcast","i"]]]}]]}]}],[434952917,{"a":[{"selector":".wrapper","tasks":[["has-text","Youvia"]]}]}],[1978425014,{"a":[{"selector":"[class*=\"elementor-element-\"]","tasks":[["has-text",["onze sponsors","i"]]]}]}],[252390507,{"a":[{"selector":"[href^=\"https://mt67.net/\"]","tasks":[["upward",".elementor-section"]]}]}],[1945586847,{"a":[{"selector":"#news li","tasks":[["has-text","Adv"]]}]}],[585775580,{"a":[{"selector":"td[align=\"CENTER\"]","tasks":[["has",{"selector":"td[background*=\"pics\"]","tasks":[["has-text",["sponsor","i"]]]}]]}]}],[1712160221,{"a":[{"selector":"[id^=\"custom_html\"]","tasks":[["has-text","Afspreken"]]},{"selector":"[id^=\"custom_html\"]","tasks":[["has-text","Werelds Beste"]]}]}],[819276102,{"a":[{"selector":"[class^=\"av_textblock\"]","tasks":[["has-text",["advert","i"]]]},{"selector":"aside section[class$=\"widget_text\"]","tasks":[["has-text","wordt mede mogelijk gemaakt door"]]},{"selector":"section[class^=\"avia_codeblock\"]","tasks":[["has-text","wordt mede mogelijk gemaakt door"]]}]}],[1489993582,{"a":[{"selector":"section","tasks":[["has",{"selector":".masonry-item:not(:has(a[href*=\"edelmetaal-info.nl\"]))"}]]}]}],[134964382,{"a":[{"selector":"li","tasks":[["has",{"selector":"em","tasks":[["has-text","Advert"]]}]]}]}],[25663147,{"a":[{"selector":".has-items-center > .title-container","tasks":[["has-text",["deals","i"]]]}]}],[818932482,{"a":[{"selector":"li","tasks":[["has",{"selector":"div[class$=\"left\"]","tasks":[["has-text",["gokkasten|online casino|casino|sportwedden","i"]],["spath",":not(:has(a[href^=\"https://feijenoordnieuws.nl/\"]))"]]}]]}]}],[882959195,{"a":[{"selector":"div.profiel","tasks":[["has-text","Powered by"]]}]}],[1054985782,{"a":[{"selector":".spotlight","tasks":[["has-text","Partners"]]}]}],[1604242979,{"a":[{"selector":"#cato_top","tasks":[["has-text","Ads"]]}]}],[861516461,{"a":[{"selector":".Article__inner > .Article__title","tasks":[["has-text","Advert"]]}]}],[610097985,{"a":[{"selector":".content-start > :has([advobject])","tasks":[["has-text","Uit de krant"]]},{"selector":"[href^=\"/nieuws/advert\"]","tasks":[["upward",2]]}]}]]);

const hostnamesMap = new Map([["1001erotiekverhalen.nl",1270892276],["aafm.nl",1839132324],["aavisie.nl",1839132324],["adbroere.nl",642974601],["ajaxreport.nl",2048029435],["psvreport.nl",2048029435],["alblasserdamsnieuws.nl",1347140095],["androidplanet.nl",28128646],["ans-online.nl",1468672692],["arenalokaal.nl",[1116677416,49295983]],["gooieneembode.nl",[1116677416,610097985]],["hetkrantje-online.nl",1116677416],["weespernieuws.nl",1116677416],["audiobookbay.nl",826694193],["autoblog.nl",504927640],["autoweek.nl",1613612812],["barneveldsekrant.nl",1256077100],["destadamersfoort.nl",1256077100],["edestad.nl",1256077100],["scherpenzeelsekrant.nl",1256077100],["belegger.nl",1380032187],["besteoverzicht.nl",381418998],["beveiligingnieuws.nl",1574910085],["biflatie.nl",428736020],["bol-an.nl",1816203638],["cip.nl",590240223],["creditexpo.nl",1107183912],["crimesite.nl",915918546],["dartfreakz.nl",778622004],["dartsactueel.nl",1901407136],["dekattensite.nl",2089535395],["dekrantvantoen.nl",1717945360],["dekrantvantynaarlo.nl",1063995659],["deliciousmagazine.nl",1590620881],["detelefoongids.nl",434952917],["domstadradio.nl",1978425014],["dsdating.nl",252390507],["dutchitchannel.nl",1945586847],["dutchleader.nl",585775580],["dutchporntube.nl",1712160221],["duurzaamnieuws.nl",819276102],["edelmetaal-info.nl",1489993582],["executive-people.nl",134964382],["fcutrecht.nl",25663147],["feijenoordnieuws.nl",818932482],["fhm500.nl",882959195],["fleet-mobility.nl",1054985782],["girlpics.nl",1604242979],["glutenvrij.nl",861516461]]);

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
