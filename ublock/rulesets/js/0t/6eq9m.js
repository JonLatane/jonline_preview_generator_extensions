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

const argsMap = new Map([[1599364140,{"a":[{"selector":"#firstSingle","action":["style","padding: 0 !important;"],"cssable":true}]}],[277601648,{"a":[{"selector":"#myTestAd","action":["style","height: 1px!important;"],"cssable":true}]}],[480043829,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > a > .q-responsive"}]]}]}],[2052753648,{"a":[{"selector":".waterfall > div.waterfall-box > div.waterfall-item","tasks":[["has",{"selector":" > div.ad"}]]}]}],[2020269673,{"a":[{"selector":"","tasks":[["has",{"selector":" > .adsbyexoclick"}]]}]}],[1264332674,{"a":[{"selector":".article-body > div[style]","tasks":[["has",{"selector":" > div[style] > div[id] > ins.adsbyfalcon"}]]}]}],[607336624,{"a":[{"selector":"#main_content > .grid-boxes-in","action":["remove",""],"tasks":[["has",{"selector":" > iframe[src^=\"//adserver.juicyads.com/\"]"}]]},{"selector":"#main_content > .grid-boxes-in","action":["remove",""],"tasks":[["has",{"selector":" > iframe[src^=\"https://syndication.exosrv.com/\"]"}]]},{"selector":".nav > li","tasks":[["has",{"selector":" > a[target=\"_blank\"]"}]]},{"selector":".nav > li.dropdown","tasks":[["has",{"selector":" > ul.dropdown-menu > li > div.mega-menu-content > div.container > div.row div.blog-grid > a[href^=\"https://getrelax.cc/ad\"]"}]]}]}],[767925723,{"a":[{"selector":".ebookRight > div.tb_cell.mb10","tasks":[["has",{"selector":" > div.listcell > div.lc_head > h2","tasks":[["has-text","课本赞助商"]]}]]}]}],[1953639953,{"a":[{"selector":".adsbygoogle","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1201803085,{"a":[{"selector":"#ayx","action":["style","position: absolute !important; left: -3000px !important;"],"cssable":true},{"selector":"a[href*=\".yabo816.\"]","action":["style","position: absolute !important; left: -3000px !important;"],"cssable":true},{"selector":"div[style^=\"position: fixed;bottom:\"]","action":["style","position: absolute !important; left: -3000px !important;"],"cssable":true}]}],[1920275768,{"a":[{"selector":".s-result-item","tasks":[["has",{"selector":" > .s-item-container > h5 .s-sponsored-info-icon"}]]}]}],[726031327,{"a":[{"selector":"#PAGE_AD_1","action":["remove",""]}]}],[1847915074,{"a":[{"selector":"a","tasks":[["has",{"selector":" > .xcybk-adfg"}]]}]}],[1290447447,{"a":[{"selector":"#ac-globalnav","action":["style","top: 0 !important;"],"cssable":true},{"selector":".ac-gn-blur","action":["style","top: 0 !important;"],"cssable":true},{"selector":"html","action":["style","margin-top: 0 !important;"],"cssable":true},{"selector":"main[role=\"main\"]","action":["style","padding-top: var(--global-nav-main-height) !important;"],"cssable":true}]}],[1883479604,{"a":[{"selector":".imgNewText","tasks":[["has",{"selector":" > footer > .info > .source","tasks":[["has-text","广告"]]}]]},{"selector":"a","tasks":[["has",{"selector":" > div > p","tasks":[["has-text","广告"]]}]]}]}],[1597947123,{"a":[{"selector":".left_link","action":["style","height: 1px !important;"],"cssable":true},{"selector":".right-pic","action":["style","height: 1px !important;"],"cssable":true}]}],[11999720,{"a":[{"selector":"div","tasks":[["has",{"selector":" > h1","tasks":[["has-text","推广"]]}]]}]}],[1538759448,{"a":[{"selector":".riverSections-DS-EntryPoint1-1 > div[style^=\"display: grid;\"] > div[style^=\"grid-area:\"]:last-child > .card-DS-card1-1 > div[class^=\"nativeAd-DS-card\"]","tasks":[["upward",2]]}]}],[1636131476,{"a":[{"selector":".page_main > .specSlide2Wrap","tasks":[["has",{"selector":" > div > #midThreeAds"}]]},{"selector":"[data-href*=\"://sax\"]","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1172125354,{"a":[{"selector":".sortItem","tasks":[["has",{"selector":" > dIV[class] > .FeedADClose"}]]}]}],[650167707,{"a":[{"selector":"li","tasks":[["has-text","贊助|推廣"]]}]}],[1711587526,{"a":[{"selector":"","tasks":[["has",{"selector":" > img[src*=\"gif\"]"}]]},{"selector":".style15","tasks":[["has",{"selector":" > img[src=\"//159i.com/images/arrow3.gif\"]"}]]},{"selector":"div","tasks":[["has",{"selector":" > img + a"}]]}]}],[640405043,{"a":[{"selector":"body","action":["style","overflow: visible!important;"],"cssable":true}]}],[818317637,{"a":[{"selector":"html","action":["style","overflow: visible!important;"],"cssable":true}]}],[109335721,{"a":[{"selector":".pic","tasks":[["has",{"selector":"a[href^=\"http://g.wan.\"]"}]]}]}],[667327789,{"a":[{"selector":".cube-container div.cube-mod","tasks":[["has",{"selector":"span.adMark"}]]},{"selector":".cube-mod","tasks":[["has",{"selector":" > .cube-bd > .cube-card > .project-root > ._CUBE_A_D_CLK_"}]]}]}],[956251038,{"a":[{"selector":".downl_list","tasks":[["has",{"selector":"style"}]]}]}],[759891017,{"a":[{"selector":".post-related > ul > li","tasks":[["has",{"selector":" > a[href^=\"http\"]:not([href*=\"423down.\"])"}]]},{"selector":"li","tasks":[["has",{"selector":" > .pic[href^=\"http\"]:not([href*=\"423down.\"])"}]]}]}],[1392357848,{"a":[{"selector":"body","action":["style","background-image: none !important;"],"cssable":true}]}],[1539169410,{"a":[{"selector":".top_bg","action":["style","height: 60px !important;"],"cssable":true}]}],[2001592483,{"a":[{"selector":".ac_item","tasks":[["has",{"selector":".jingpin"}]]},{"selector":".business_main","tasks":[["has",{"selector":" > .business_desc > .left > .ding_icon"}]]},{"selector":".zzinfo","tasks":[["has",{"selector":".zhiding_icon"}]]},{"selector":"LI[sortid]","tasks":[["has",{"selector":".icon-jingxuan"}]]},{"selector":"LI[sortid]","tasks":[["has",{"selector":".icon-zhiding"}]]},{"selector":"LI[sortid]","tasks":[["has",{"selector":".jinico"}]]},{"selector":"TR[logr]","tasks":[["has",{"selector":" > .t > .mt-p-tit > .jingpin"}]]},{"selector":"tr[sortid]","tasks":[["has",{"selector":" > .t > .ico.accurate"}]]}]}],[887509146,{"a":[{"selector":"#d_list > ul > li","tasks":[["has",{"selector":"a[href^=\"http\"]:not([href*=\"6parknews\"])"}]]}]}],[666974570,{"a":[{"selector":"#content_left > div[style*=\"display:block !important;\"]:not(.result)","action":["style","position: absolute!important; left: -4000px!important;"],"cssable":true},{"selector":".c-gap-bottom-small","tasks":[["has",{"selector":" > a > div > div[class^=\"jr-stock-open-account-\"]"}]]}]}],[1086319226,{"a":[{"selector":".l_post","tasks":[["has",{"selector":"div[class*=\" fc-\"]"}]]},{"selector":".thread_item_box","tasks":[["has",{"selector":"div[class*=\" fc-\"]"}]]}]}],[1323056726,{"a":[{"selector":"div","tasks":[["has",{"selector":" > .openBox-container"}]]},{"selector":"div","tasks":[["has",{"selector":" > div[id$=\"_1\"] + div[id$=\"_5\"]"}]]}]}],[673095863,{"a":[{"selector":".newfcImgli","tasks":[["has",{"selector":".fc-ad-tip"}]]}]}],[2087496089,{"a":[{"selector":"#content_left > [class]","tasks":[["has",{"selector":"span[data-tuiguang]"}]]},{"selector":"#content_left > div","tasks":[["has",{"selector":".ec-tuiguang"}]]},{"selector":"#content_right > [class]","tasks":[["has",{"selector":"span[data-tuiguang]"}]]},{"selector":"#content_right > div","tasks":[["has",{"selector":".ec-tuiguang"}]]}]}],[688920109,{"a":[{"selector":".c-container","tasks":[["has",{"selector":".t > a[data-landurl]"}]]}]}],[1594220235,{"a":[{"selector":".index-list-item","tasks":[["has",{"selector":".tip-time","tasks":[["has-text","广告"]]}]]}]}],[701696461,{"a":[{"selector":".tl_shadow","tasks":[["has",{"selector":" > .ti_item > .ti_infos > .label_text_tag","tasks":[["has-text","广告"]]}]]}]}],[164567653,{"a":[{"selector":"p","tasks":[["has",{"selector":"a[href=\"http://www.sm9166.com\"]"}]]}]}],[221104515,{"a":[{"selector":".eva-extension-body > .bili-video-card","tasks":[["has",{"selector":".bili-video-card__info--ad"}]]},{"selector":".ex-card-common","action":["remove",""],"tasks":[["has",{"selector":".gg-icon"}]]},{"selector":".van-slide > .item","action":["remove",""],"tasks":[["has",{"selector":".bypb-icon"}]]},{"selector":".video-card-common","tasks":[["has",{"selector":" > .card-pic > a[href*=\"cm.bilibili.com\"][data-target-url]"}]]}]}]]);

const hostnamesMap = new Map([["pansci.asia",1599364140],["10co.biz",277601648],["10co.co",277601648],["10co.me",277601648],["10co.xyz",277601648],["8mav.cc",480043829],["theporn.cc",480043829],["69xx.one",480043829],["ac-room.cc",2052753648],["boylove.cc",2020269673],["jmcomic1.city",2020269673],["18comic.org",2020269673],["18comic.vip",2020269673],["flyblog.cc",1264332674],["maxfoodfun.com",1264332674],["getrelax.cc",607336624],["haoduoyun.cc",767925723],["itshokunin.cc",1953639953],["alotof.software",1953639953],["mp4er.cc",1201803085],["mp4er.com",1201803085],["amazon.cn",1920275768],["bigpixel.cn",726031327],["chbeyond.cn",1847915074],["apple.com.cn",1290447447],["lenovo.com.cn",1883479604],["itdog.cn",1597947123],["kostool.cn",11999720],["microsoftnews.msn.cn",1538759448],["sina.cn",1636131476],["114la.com",1172125354],["141jj.com",650167707],["159i.com",1711587526],["h5.17k.com",[640405043,818317637]],["mobile01.com",640405043],["2345.com",109335721],["hao.360.com",667327789],["3dmgame.com",956251038],["423down.com",759891017],["4399.com",1392357848],["51cto.com",1539169410],["58.com",2001592483],["6parknews.com",887509146],["baidu.com",[666974570,1086319226]],["bdimg.com",[1086319226,701696461]],["3g.baidu.com",1323056726],["m.baidu.com",1323056726],["m5.baidu.com",1323056726],["www.baidu.com",[1323056726,2087496089,688920109]],["image.baidu.com",673095863],["ipv6.baidu.com",[2087496089,688920109]],["www1.baidu.com",[2087496089,688920109]],["xueshu.baidu.com",[2087496089,688920109]],["news.baidu.com",1594220235],["tieba.baidu.com",701696461],["tieba.com",701696461],["benyixiwang.com",164567653],["bilibili.com",221104515]]);

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
