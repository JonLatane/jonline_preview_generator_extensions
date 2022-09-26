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

// spa-1

const argsMap = new Map([[670500644,{"a":[{"selector":"#article-header","action":["style","min-height: 0 !important;"],"cssable":true}]}],[1354927304,{"a":[{"selector":"div#ad","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1904539830,{"a":[{"selector":".sidebar > .widget","tasks":[["has",{"selector":" > div > .adsbygoogle"}]]}]}],[1774840478,{"a":[{"selector":"#main-sidebar > .widget_text","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":"#manga-title","action":["style","height: unset !important;"],"cssable":true}]}],[165546495,{"a":[{"selector":".lv-publi-box","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true},{"selector":".megabanner-adv","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[709226930,{"a":[{"selector":".interior > section.conpubli","tasks":[["has",{"selector":" > div > .OUTBRAIN"}]]}]}],[1781141780,{"a":[{"selector":"#main [id$=\"Block\"]","tasks":[["has",{"selector":".adsbygoogle"}]]}]}],[702043356,{"a":[{"selector":".ads.adsbox.ad-placement","action":["style","display: block !important;"],"cssable":true}]}],[751153298,{"a":[{"selector":".ads728x90.ads970x90","action":["style","display: block !important;"],"cssable":true}]}],[715012129,{"a":[{"selector":".sidebar > .clearfix > .newlateral","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1536460446,{"a":[{"selector":"div[id^=\"block-\"]","tasks":[["has",{"selector":" > .widget__inner > .widget-content > .adsbygoogle"}]]},{"selector":"div[id^=\"custom_html-\"]","tasks":[["has",{"selector":" > .widget__inner > .widget-content > .textwidget > .adsbygoogle"}]]}]}],[169527765,{"a":[{"selector":".chapter-content div.bloc","tasks":[["has",{"selector":" > div[id^=\"gpt-\"]"}]]}]}],[297873505,{"a":[{"selector":".news-item > div.row-layout","tasks":[["has",{"selector":" > aside > div[id^=\"taboola-\"]"}]]},{"selector":".ue-l-article__secondary-column > div.ue-l-article__secondary-column-item","tasks":[["has",{"selector":" > div.ue-c-ad"}]]}]}],[285643253,{"a":[{"selector":"iframe.video","action":["style","display: block!important;"],"cssable":true}]}],[1659933661,{"a":[{"selector":".sidebar aside.widget","tasks":[["has",{"selector":" > div.textwidget > ins.adsbygoogle"}]]}]}],[522113607,{"a":[{"selector":"#content > div.type-post > div[id^=\"_\"]","action":["remove",""]}]}],[1628210375,{"a":[{"selector":".sm-row > div.row > center > ins.adsbygoogle","tasks":[["upward","div.row"]]}]}],[387514621,{"a":[{"selector":".container > .col-md-3 > .row.mt-10","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".container > .col-md-9 > .mb-10","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".container > .col-md-9 > .mt-10","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".container > .row > .col-md-4 > .row.mt-10","tasks":[["has",{"selector":" > center > .adsbygoogle"}]]},{"selector":".container > .row > .col-md-8 > .mb-10","tasks":[["has",{"selector":" > .adsbygoogle"}]]},{"selector":".content-player > .mb-10","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1662004847,{"a":[{"selector":".series-indeti","action":["style","display: block!important;"],"cssable":true}]}],[629180487,{"a":[{"selector":"ul[class^=\"widgets\"] > li.widget","tasks":[["has",{"selector":" > div.textwidget ins.adsbygoogle"}]]}]}],[1735468666,{"a":[{"selector":"#Publi300600xaa","action":["style","height: 1px!important;"],"cssable":true},{"selector":".adsbygoogle","action":["style","height: 1px!important; display: block!important;"],"cssable":true}]}],[1280570464,{"a":[{"selector":"div#mreporta","action":["style","display: table;"],"cssable":true}]}],[680938597,{"a":[{"selector":"div.encabezados","tasks":[["has",{"selector":" > h2","tasks":[["has-text","PUBLICIDAD"]]}]]}]}],[1316886842,{"a":[{"selector":"body","action":["style","background-image:none!important;"],"cssable":true}]}],[1645131419,{"a":[{"selector":".column > div > div[class=\"box rw flex show-box-flex\"]","tasks":[["has",{"selector":" > div > div.proporcinal4columns a[href^=\"http://pubads.g.doubleclick.net/\"]"}]]}]}],[953572529,{"a":[{"selector":"#ad","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[921225242,{"a":[{"selector":"#adsdiv","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[524720219,{"a":[{"selector":"#contenido div[style^=\"height:250px;\"]","tasks":[["has",{"selector":"script","tasks":[["has-text","grAnuncio\\.DisplayAds"],["spath"," + div"]]}]]},{"selector":"div[style^=\"height:250px;\"]","tasks":[["has",{"selector":" > div > div#registroNuevoNL"}]]}]}],[73096378,{"a":[{"selector":".module-surround > div","tasks":[["has-text","Publicidade SA"]]}]}],[175167060,{"a":[{"selector":".container.have-brand","action":["style","margin-top: 0!important;"],"cssable":true}]}],[748314788,{"a":[{"selector":"body > center > nav ~ center","tasks":[["has",{"selector":" > div#antiBannersGigantes"}]]}]}],[665780926,{"a":[{"selector":".TPlayerNv > li.Button","tasks":[["has",{"selector":" > span","tasks":[["has-text","Publicidad"]]}]]}]}],[1192184182,{"a":[{"selector":".publicite.text-ad.adsbox","action":["style","display: block !important;"],"cssable":true}]}],[2059707747,{"a":[{"selector":".column.middle > article","tasks":[["has",{"selector":" > span#ze"}]]}]}],[615068613,{"a":[{"selector":"td[style=\"padding-right:15px;\"] > font","tasks":[["has-text","^Espacio publicitario$"]]}]}],[612157044,{"a":[{"selector":".body-wrap > .c-top-sidebar","tasks":[["not",{"selector":"","tasks":[["has",{"selector":".widget-manga-popular-slider"}]]}]]}]}],[1169897938,{"a":[{"selector":"section > div[class]","tasks":[["has",{"selector":" > div[class^=\"_content_\"] > a.social_share__facebook"}]]}]}],[1489512721,{"a":[{"selector":".ad","action":["remove",""]}]}],[1127280708,{"a":[{"selector":".widget-area-right > aside.widget_custom_html","tasks":[["has",{"selector":" > div.textwidget > center","tasks":[["has-text","Publicidad"]]}]]}]}],[1023567588,{"a":[{"selector":".entry-content > p","tasks":[["has",{"selector":" > span","tasks":[["has-text","ANUNCIOS"]]}]]},{"selector":"h4.heading","tasks":[["has-text","QUIZÁS TAMBIÉN"]]}]}],[155096340,{"a":[{"selector":".player_nav > ul[class] > li","tasks":[["has",{"selector":" > a[href]","tasks":[["has-text","Ads"]]}]]}]}],[1175084432,{"a":[{"selector":"#media-episode > div.row > div[class=\"col-lg-12\"]","tasks":[["has",{"selector":" > div.embed-responsive > div.ads"}]]}]}]]);

const hostnamesMap = new Map([["infoescola.com",670500644],["iptvvall.com",1354927304],["jornaldestaquebaixada.com",1904539830],["knightnoscanlation.com",1774840478],["lavanguardia.com",165546495],["libertaddigital.com",709226930],["libremercado.com",709226930],["maisgasolina.com",1781141780],["mangahost1.com",702043356],["mangahost2.com",[702043356,751153298]],["mangahost4.com",[702043356,751153298]],["mangahostbr.com",702043356],["mangahosted.com",[702043356,751153298,715012129]],["mangahostbr.net",702043356],["mangapt.com",1536460446],["mangatigre.com",169527765],["marca.com",297873505],["mastercuriosidadesbr.com",285643253],["modagamers.com",1659933661],["muchohentai.com",522113607],["mundodonghua.com",[1628210375,387514621]],["seriesdonghua.com",387514621],["navegacom.com",1662004847],["noticialdia.com",629180487],["pcbolsa.com",1735468666],["peliculasdk.com",1280570464],["pirlotvonlinehd.com",680938597],["profesionalreview.com",1316886842],["r7.com",1645131419],["radiotormentamx.com",[953572529,921225242]],["televall.website",953572529],["reforma.com",524720219],["sakuraanimes.com",73096378],["seodiv.com",175167060],["separarensilabas.com",748314788],["seriesgato.com",665780926],["seriesretro.com",1192184182],["sexomoda.com",2059707747],["subdivx.com",615068613],["taurusfansub.com",612157044],["timeout.com",1169897938],["tuasaude.com",1489512721],["tv-porinternet.com",1127280708],["universoformulas.com",1023567588],["verepeliculas.com",155096340],["wikiseriesonline.com",1175084432]]);

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
