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

// chn-0

const argsMap = new Map([[533548358,{"a":[{"selector":"iframe[width=\"728\"][height=\"90\"]","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1149038717,{"a":[{"selector":"body","action":["style","overflow: auto !important;"],"cssable":true}]}],[1463487252,{"a":[{"selector":"._more_content_ > div._page_","tasks":[["has",{"selector":" > div.oath-lrec-player"}]]}]}],[1089091148,{"a":[{"selector":"a[href*=\"/entry/register/?i_code=\"]","action":["style","position: absolute !important; left: -3000px !important;"],"cssable":true}]}],[23808462,{"a":[{"selector":"#acornerinner1122","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[2083829729,{"a":[{"selector":"a[href*=\"/kst6632.com/\"] > img","action":["style","width: 2px !important;"],"cssable":true},{"selector":"a[href*=\"/kst6632.com/\"]","action":["style","pointer-events: none !important;"],"cssable":true}]}],[482192681,{"a":[{"selector":"#feedlist_id > li","tasks":[["has",{"selector":" > div[id^=\"kp_box_\"]"}]]},{"selector":"aside > div.slide-outer","tasks":[["has",{"selector":" > div.box > div[adsid]"}]]}]}],[1503776713,{"a":[{"selector":".sidebar > div.widget","tasks":[["has",{"selector":" > div.textwidget > ul[style] > li[style=\"margin-top:5px; \"] > a[target=\"_blank\"][rel=\"noopener\"]:not([href$=\".html\"]) > img"}]]}]}],[371576908,{"a":[{"selector":"#page-list > ul > .layui-row","tasks":[["has",{"selector":".ad"}]]}]}],[995121807,{"a":[{"selector":".myui-panel-bg","tasks":[["has",{"selector":"strong","tasks":[["has-text","广告"]]}]]}]}],[1619564447,{"a":[{"selector":"#main > div.header-fixed-area","tasks":[["has",{"selector":" > div#header-ad-fixed"}]]}]}],[71291417,{"a":[{"selector":"div[class*=\"-ad-sidebar-\"]","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[513244142,{"a":[{"selector":".theiaStickySidebar > div.widget","tasks":[["has",{"selector":" > div.textwidget a[href^=\"https://kairos.shopping/product/\"]"}]]}]}],[244772820,{"a":[{"selector":".widget_text > .inn-sidebar__widget","tasks":[["has",{"selector":" > .poi-panel__header > .poi-panel__header__title","tasks":[["has-text","赞助商"]]}]]}]}],[70825578,{"a":[{"selector":"#m2","action":["style","height: 5px!important;"],"cssable":true}]}],[2046642809,{"a":[{"selector":".post_sidebar > div.side_box","tasks":[["has",{"selector":"div[id^=\"mynewads_\"]"}]]}]}],[945258306,{"a":[{"selector":"#video_player","action":["style","display: block!important;"],"cssable":true},{"selector":".datal.main","tasks":[["has",{"selector":" > table div[id^=\"revive_zoneid_\"]"}]]},{"selector":".playmar > .playl","action":["style","visibility: hidden!important;"],"cssable":true},{"selector":".playmar > .playr","action":["style","visibility: hidden!important;"],"cssable":true}]}],[507087172,{"a":[{"selector":".datal.clear","tasks":[["has",{"selector":" > table div[id^=\"revive_zoneid_\"]"}]]}]}],[776342596,{"a":[{"selector":"div[style*=\"width\"]","tasks":[["has",{"selector":" > div[style] > img[src=\"/static/img/adsfree.png\"]"}]]}]}],[1096893907,{"a":[{"selector":"div.col-6.col-sm-4.col-lg-12","tasks":[["has",{"selector":" > div.video-img-box > div.img-box > a[href*=\"?banner=\"]"}]]}]}],[161518747,{"a":[{"selector":"#sidebar > section.widget_text > div.textwidget > script[src^=\"//pagead2.googlesyndication.com/\"]","tasks":[["upward",2]]}]}],[1144810456,{"a":[{"selector":"body > div","tasks":[["has",{"selector":" > div[class^=\"yap-ad-\"]"}]]}]}],[1352845443,{"a":[{"selector":"#ypaad","action":["style","height: 3px!important;"],"cssable":true}]}],[168693310,{"a":[{"selector":"img[width=\"960\"][height=\"90\"]","action":["style","height: 0 !important;"],"cssable":true}]}],[1878542407,{"a":[{"selector":".fb_fanpage_inpage > .other_news_box_2","action":["style","padding: 0 0px!important; margin: 26px 0!important;"],"cssable":true}]}],[1679863644,{"a":[{"selector":".adActive > .list-link","tasks":[["has",{"selector":" > ul > li > div[id^=\"div-gpt-ad\"]"}]]},{"selector":".adActive > div[class^=\"leaflet\"]","tasks":[["has",{"selector":" > div[id^=\"div-gpt-ad\"]"}]]}]}],[1481239934,{"a":[{"selector":"#BH-bigbanner","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true},{"selector":"#flyRightBox","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true},{"selector":"img[onload=\"AntiAd.check(this)\"]","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[195835984,{"a":[{"selector":"#header > nav.floated-navbar","action":["style","top: 0!important;"],"cssable":true}]}],[2088130484,{"a":[{"selector":".whitecon > .related > li","tasks":[["has",{"selector":" > .ltn_ad"}]]},{"selector":".whitecon > .related[data-desc=\"相關新聞\"] > li:nth-child(5)","action":["style","margin-right: 0!important; margin-left: 20px!important;"],"cssable":true}]}],[1398022206,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > div[class] > div[class*=\"-ad-manager-\"]"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > div[class] > div[class^=\"rytass-ad-manager-\"]:only-child"}]]}]}],[21391853,{"a":[{"selector":"section[class*=\"widget_text\"] > .widget-wrap > .textwidget > div[class^=\"Zi_ad\"]","tasks":[["upward",3]]}]}],[1870178241,{"a":[{"selector":"#comment-anchor > section > div[style] > div[data-index]","tasks":[["has",{"selector":" > div[class] > div > div[id^=\"div-gpt-ad\"]"}]]},{"selector":"div[data-index] > article","tasks":[["has-text","贊助活動"]]}]}],[1067099185,{"a":[{"selector":"article > aside.left > .adsbygoogle","tasks":[["upward",1]]}]}],[299096312,{"a":[{"selector":"#sidebar > div.widget","tasks":[["has",{"selector":" > h4","tasks":[["has-text","廣告"]]}]]}]}],[1620841827,{"a":[{"selector":".thumb-overlay-albums > div[class][data-group^=\"photo_center_games_\"]","tasks":[["has",{"selector":" > a[target=\"_blank\"] > img"}]]}]}],[1656902123,{"a":[{"selector":".container .card","tasks":[["has",{"selector":" > .card-body > .flex-fill > #ad_text"}]]}]}],[34797580,{"a":[{"selector":"a[href*=\".11h5.\"] img","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}],"n":["h5.dilidili.wang"]}],[390821786,{"a":[{"selector":"body > article[class][style*=\"position: fixed;top: 0;z-index: 9999;display:block !important;\"]","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[22401068,{"a":[{"selector":".sidebar > .widget_text","tasks":[["has",{"selector":" > .textwidget > .adsbygoogle"}]]}]}],[826346620,{"a":[{"selector":"a","tasks":[["has",{"selector":"img[src*=\".alicdn.\"]"}]]},{"selector":"a","tasks":[["has",{"selector":"img[src*=\"/ddimg/\"]"}]]}]}]]);

const hostnamesMap = new Map([["discuss.com.hk",533548358],["ulifestyle.com.hk",1149038717],["applefans.today",1149038717],["gotrip.hk",1463487252],["bde4.icu",1089091148],["520cc.me",23808462],["ddrk.me",2083829729],["ddys.tv",2083829729],["csdn.net",482192681],["fuliba2022.net",1503776713],["isiyuan.net",371576908],["nfstar.net",995121807],["pixnet.net",1619564447],["sutin0831.pixnet.net",71291417],["kairos.news",513244142],["hmoe.one",244772820],["macapp.so",70825578],["adrama.to",2046642809],["58b.tv",[945258306,507087172]],["8fun.tv",507087172],["99kubo.tv",776342596],["jable.tv",1096893907],["ants.tw",161518747],["apk.tw",1144810456],["bingfeng.tw",1352845443],["com.tw",168693310],["cna.com.tw",1878542407],["cw.com.tw",1679863644],["gamer.com.tw",1481239934],["kocpc.com.tw",195835984],["ltn.com.tw",2088130484],["wealth.com.tw",1398022206],["dacota.tw",21391853],["dcard.tw",1870178241],["kukuo.tw",1067099185],["sharonlife.tw",299096312],["18comic.vip",1620841827],["ct.999wan.wang",1656902123],["dilidili.wang",[34797580,390821786]],["koding.work",22401068],["939394.xyz",826346620]]);

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
