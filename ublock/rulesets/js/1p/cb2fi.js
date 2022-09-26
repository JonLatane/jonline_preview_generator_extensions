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

const argsMap = new Map([[462744678,{"a":[{"selector":"#b_results > li","tasks":[["has",{"selector":".b_adProvider"}]]},{"selector":"li[class=\"b_algo\"]","tasks":[["has",{"selector":".b_attribution[data-partnertag] + p[class]"}]]}]}],[2097273122,{"a":[{"selector":"div[id^=\"cc-matrix-\"] > div.j-htmlCode","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]}]}],[1825557786,{"a":[{"selector":".item","tasks":[["has",{"selector":" > a[target=\"_blank\"]"}]]}]}],[496597969,{"a":[{"selector":".sidebar > section#text-8[style*=\"bottom: 240px;\"]","action":["style","position: static !important;"],"cssable":true},{"selector":".sidebar > section[id^=\"text-\"]","tasks":[["has",{"selector":" > .textwidget > .dfped"}]]}]}],[1576378109,{"a":[{"selector":".container-fluid > .row > .item","tasks":[["has",{"selector":" > .card > .card-body > .lines > span.badge","tasks":[["has-text","^ad$"]]}]]},{"selector":".row","tasks":[["has",{"selector":".badge","tasks":[["has-text","ad"]]}]]}]}],[101311568,{"a":[{"selector":"#container > font[color] > font[color] > div[style]","tasks":[["has",{"selector":" > table[width] > tbody > tr > th > a[href][target=\"_blank\"]"}]]},{"selector":"body > font","tasks":[["has-text","function"]]}]}],[750554852,{"a":[{"selector":"#threadlisttableid > tbody:not([class]):not([id])","tasks":[["has",{"selector":" > tr > td[id^=\"popin_\"]"}]]},{"selector":".readingList > ul > div","tasks":[["has",{"selector":" > li > span","tasks":[["has-text","PR"]]}]]}]}],[1594498909,{"a":[{"selector":".cnbeta-swiper-container-285x360 .swiper-slide","tasks":[["has",{"selector":"a[href^=\"http\"]:not([href^=\"http://www.cnbeta.\"])"}]]},{"selector":".item","tasks":[["has",{"selector":" > dL > a[href^=\"https://ad.doubleclick.net/\"]"}]]},{"selector":".item","tasks":[["has",{"selector":" > dl > dt > a[href*=\".greatroma.com\"]"}]]},{"selector":".item","tasks":[["has",{"selector":" > dl > dt > a[href^=\"http://click.aliyun.com/\"]"}]]},{"selector":".items-area > .item","tasks":[["has",{"selector":" > dl > dt > a[href^=\"http\"]:not([href*=\"cnbeta.\"])"}]]}]}],[133508343,{"a":[{"selector":"#main-content > .container > .card > .card-body","tasks":[["has",{"selector":" > div[id=\"760ad\"]"}]]}]}],[1626042907,{"a":[{"selector":"span","tasks":[["has",{"selector":" > p","tasks":[["has-text","高速"]]}]]},{"selector":"ul","tasks":[["has",{"selector":" > dd","tasks":[["has-text","高速"]]}]]}]}],[306948882,{"a":[{"selector":".body > div.body-wrap","tasks":[["has",{"selector":" > div.mod-box > div.mod-title > h3","tasks":[["has-text","友��链接"]]}]]}]}],[2077870021,{"a":[{"selector":".rec_topics","tasks":[["has",{"selector":" > .rec_topics_name[href^=\"https://erebor.douban.\"]"}]]}]}],[1669399660,{"a":[{"selector":".SharePanel","tasks":[["has",{"selector":" > .SharePanel-content > .SharePanel-contentTitle","tasks":[["has-text","福利"]]}]]},{"selector":".bc-wrapper","tasks":[["has",{"selector":" > .wm-view > div > .isLink[href*=\".qualtrics.com/\"]"}]]},{"selector":".wm-general","tasks":[["has",{"selector":".link[href*=\".tmall.com\"]"}]]}]}],[1883461244,{"a":[{"selector":".newslist > .news_ctm_wrap","tasks":[["has",{"selector":" > .ctm_ad"}]]}]}],[1662852773,{"a":[{"selector":"body","action":["style","padding-top: 0!important;"],"cssable":true}]}],[1757642658,{"a":[{"selector":"body .player-rm > a[target=\"_blank\"]","action":["style","display: block !important; position: absolute !important; left: -3000px !important;"],"cssable":true},{"selector":"body a[href*=\".umtrack.com/\"]","action":["style","display: block !important; position: absolute !important; left: -3000px !important;"],"cssable":true}]}],[207774871,{"a":[{"selector":".content > table.main > tbody > tr > td[width]","tasks":[["has",{"selector":" > a[target=\"_blank\"]:not([href=\"/ad.html\"]):not([href=\"/xjlist.php\"])"}]]}]}],[1172281111,{"a":[{"selector":"li.s-item","tasks":[["has",{"selector":"span[role=\"text\"] > span","tasks":[["has-text","助"]]}]]}]}],[1962142537,{"a":[{"selector":".new-list > ul > li","tasks":[["has",{"selector":" > div.li-row > div > h2 > a[href^=\"http://pubads.g.doubleclick.net/gampad/\"]"}]]}]}],[412511836,{"a":[{"selector":".Py\\(40px\\)","tasks":[["has",{"selector":" > article > .D\\(f\\) > .Pos\\(r\\)[data-ylk*=\":AD;\"]"}]]}]}],[224678840,{"a":[{"selector":"[data-spotim-module=\"undefined\"][data-spotim-showing-slots~=\"1-start-300x250\"] .spotim-recirculation div[data-spotim-row] > div[data-spotim-slot-size=\"300x250\"] ~ .sprcRftoX","action":["style","margin-left: 0!important;"],"cssable":true},{"selector":"body [data-spotim-module=\"undefined\"][data-spotim-showing-slots~=\"1-start-300x250\"] .sprc2PlxR [data-spotim-row=\"1\"]::before","action":["style","left: 0!important;"],"cssable":true}]}],[42062287,{"a":[{"selector":"#sidebar__inner > #links-row-1 > .box.folder","tasks":[["has",{"selector":" > h4","tasks":[["has-text","AD"]]}]]}]}],[191208423,{"a":[{"selector":"div[id^=\"gklobl\"]","action":["style","height: 1px!important;"],"cssable":true}]}],[402936156,{"a":[{"selector":"li","tasks":[["has",{"selector":" > div > .content-other > .content-type","tasks":[["has-text","广告"]]}]]}]}],[105095065,{"a":[{"selector":"li","tasks":[["has",{"selector":" > .ads"}]]}]}],[1198325999,{"a":[{"selector":".adsbygoogle","action":["style","height: 1px !important;"],"cssable":true}]}],[455156024,{"a":[{"selector":".cc5278_banner_ad","action":["remove",""]}]}],[1519198724,{"a":[{"selector":".theiaStickySidebar > .widget_custom_html","tasks":[["has",{"selector":" > .textwidget > p a[target=\"_blank\"][rel=\"noopener\"]:not([href^=\"/ac\"]):not([href^=\"/asian\"]):not([href^=\"/category\"])"}]]}]}],[1209792074,{"a":[{"selector":".wrapper > div[data-content-source] > .modalOpenWidth[style*=\"top:\"]","action":["style","top: 80px !important;"],"cssable":true}]}],[642924977,{"a":[{"selector":"#threadlisttableid > tbody:not([id])","tasks":[["has",{"selector":" > tr > td > a[target=\"_blank\"]"}]]},{"selector":"#threadlisttableid > tbody:not([id])","tasks":[["has",{"selector":" > tr > td > ins.adsbygoogle"}]]}]}],[1930688110,{"a":[{"selector":".box_list","tasks":[["has",{"selector":".tuig"}]]},{"selector":"div[class^=\"titleImg-\"]","tasks":[["has",{"selector":"span[class^=\"source-\"]","tasks":[["has-text","推广"]]}]]}]}],[775214079,{"a":[{"selector":".post-list-item","tasks":[["has",{"selector":".thumb-link[href^=\"http\"]:not([href*=\".iqshv.\"])"}]]}]}],[721936827,{"a":[{"selector":".bl > li","tasks":[["has",{"selector":" > a[href*=\"/lapin.\"]"}]]},{"selector":".placeholder","tasks":[["has",{"selector":" > a > .plc-con > .plc-footer > .tip-gray"}]]},{"selector":".t-b.sel > ul.nl > li","action":["style","visibility: hidden !important;"],"tasks":[["has",{"selector":" > a[href*=\"/lapin.\"]"}]]},{"selector":"li","tasks":[["has",{"selector":" > .block a[href*=\"/lapin.\"]"}]]}]}],[34748170,{"a":[{"selector":"div[id]","tasks":[["has",{"selector":" > .ad-badge"}]]}]}],[1078599052,{"a":[{"selector":".jin-timeline","tasks":[["has",{"selector":".jin-tag"}]]}]}],[1733843189,{"a":[{"selector":"#rightPanel div[id^=\"page-\"] ~ div[class] > div > div[style^=\"display:\"] ins.adsbygoogle","tasks":[["upward","div[style^=\"display:\"]"]]}]}],[1270002578,{"a":[{"selector":".core-rail > div > div[id^=\"ember\"]","tasks":[["has",{"selector":".feed-shared-actor__description span","tasks":[["has-text","促銷內容|广告"]]}]]},{"selector":".core-rail > div > div[id^=\"ember\"]","tasks":[["has",{"selector":".feed-shared-actor__sub-description span","tasks":[["has-text","促銷內容|广告"]]}]]}]}],[1275482437,{"a":[{"selector":"body[style]","action":["style","overflow: auto !important;"],"cssable":true}]}],[428884896,{"a":[{"selector":"div[data-widget-area=\"sidebar\"] > div[class=\"panel panel-primary\"]","tasks":[["has",{"selector":" > div.panel-heading > h3","tasks":[["has-text","广告"]]}]]}]}],[2104807149,{"a":[{"selector":".container > .section","tasks":[["has",{"selector":" > a[href^=\"https://www.odancool.com/\"]"}]]}]}],[235561153,{"a":[{"selector":".panel","tasks":[["has",{"selector":" > .panel-body > a[href^=\"/partner/Redirect/\"]"}]]}]}],[599681996,{"a":[{"selector":".widget_custom_html","tasks":[["has",{"selector":" > .custom-html-widget > a[href^=\"http\"]:not([href*=\"mongoing.com\"])"}]]}]}]]);

const hostnamesMap = new Map([["cn.bing.com",462744678],["breathofthewild-link.com",2097273122],["btmulu.com",1825557786],["buzzorange.com",496597969],["cartoon18.com",1576378109],["chuzuche8.com",101311568],["ck101.com",750554852],["cnbeta.com",1594498909],["url56.ctfile.com",133508343],["ddooo.com",1626042907],["dilidili3.com",306948882],["douban.com",2077870021],["douyu.com",1669399660],["duba.com",1883461244],["duodada.com",1662852773],["m.lelekan.com",1662852773],["dyxs11.com",1757642658],["dyxs12.com",1757642658],["dyxs13.com",1757642658],["dyxs14.com",1757642658],["dyxs15.com",1757642658],["dyxs20.com",1757642658],["dyz99.com",207774871],["ebay.com",1172281111],["eet-china.com",1962142537],["engadget.com",412511836],["chinese.engadget.com",224678840],["fox-saying.com",42062287],["game735.com",191208423],["guilinlife.com",402936156],["gw54.com",105095065],["xgw5.com",105095065],["haoweichi.com",1198325999],["ekamus.info",1198325999],["hboav.com",455156024],["hihbt.com",1519198724],["huaban.com",1209792074],["idreamx.com",642924977],["ifeng.com",1930688110],["iqshv.com",775214079],["ithome.com",721936827],["jianshu.com",34748170],["jin10.com",1078599052],["lihkg.com",1733843189],["linkedin.com",1270002578],["linovelib.com",1275482437],["yodu.org",1275482437],["bbs.liyuans.com",428884896],["malimali5.com",2104807149],["masuit.com",235561153],["mongoing.com",599681996]]);

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
