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

const argsMap = new Map([[2073131733,{"a":[{"selector":".forum_Post_index","tasks":[["has",{"selector":"nobr","tasks":[["has-text","18"]]}]]}]}],[1166244725,{"a":[{"selector":".bs-component","tasks":[["has",{"selector":" > a[href*=\"97jez.com\"]"}]]}]}],[1850283654,{"a":[{"selector":".news_info > p:last-of-type + div","tasks":[["has",{"selector":" > br + a"}]]},{"selector":".news_info > p:last-of-type + div","tasks":[["has",{"selector":" > div > a"}]]},{"selector":".news_info > p:last-of-type","tasks":[["has",{"selector":" > br + a"}]]},{"selector":".news_info > p:nth-last-of-type(2)","tasks":[["has",{"selector":" > br + a"}]]}]}],[267358263,{"a":[{"selector":".cnewsinfo > p","tasks":[["has",{"selector":".f14_link + br + .f14_link"}]]}]}],[1033508181,{"a":[{"selector":"#adleft","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true},{"selector":"#adright","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true},{"selector":"a[onclick*=\"openurl\"][target=\"_blank\"] img[src^=\"/static/\"]","action":["style","position: absolute!important; top: -9999px!important; left: -9999px!important; bottom: unset!important;"],"cssable":true},{"selector":"body > .hidden-xs > div[id]","action":["style","position: absolute!important; top: -9999px!important; left: -9999px!important; bottom: unset!important;"],"tasks":[["has",{"selector":" > img[src^=\"/static/\"][onclick*=\"open\"]"}]]},{"selector":"div[id]","tasks":[["has",{"selector":" > img[onclick=\"openurl()\"]"}]]},{"selector":"div[id^=\"aaaDiv\"]","action":["remove",""]},{"selector":"img[src^=\"/pic/tu/\"]","action":["style","visibility: hidden!important;"],"cssable":true}]}],[1355347056,{"a":[{"selector":"div[class^=\" margin10_\"] > div[data-reactid] > a[class^=\"clearfix box_\"][data-on=\"click\"]","tasks":[["has",{"selector":" > .right > [class^=\"category_\"]","tasks":[["has-text","Sponsored"]]}]]},{"selector":"div[class^=\"leftSide_\"] > ._popIn_recommend + div[data-reactid]:last-child > h2","tasks":[["has-text","NOWnews 推薦"]]}]}],[1653893786,{"a":[{"selector":"#mainContent","action":["style","display: block !important;"],"cssable":true}]}],[923213970,{"a":[{"selector":".container > .row > .myui-panel-bg","tasks":[["has",{"selector":" > .myui-panel-box > .myui-panel_bd > .col-xs-1 > a[target=\"_blank\"] > img"}]]},{"selector":".container > .row > .myui-panel-bg","tasks":[["has",{"selector":" > .myui-panel-box > .myui-panel_bd > .myui-vodlist > .col-lg-8 > .myui-vodlist__box > a[target=\"_blank\"]"}]]}]}],[1080556701,{"a":[{"selector":"#toptb ~ #wp > div[class] > ul ~ div[class]","tasks":[["has",{"selector":" > div[class] > div > .adsbygoogle"}]]},{"selector":"#toptb ~ #wp > div[class]","tasks":[["matches-css",{"name":"height","value":"170px"}]]}]}],[1493386116,{"a":[{"selector":".row","tasks":[["has",{"selector":" > div.col-lg-3 > div[style] > div.carousel-inner > p.ad-title"}]]}]}],[1210788861,{"a":[{"selector":"#main-content > div[style*=\"margin-top:\"]:not([class])","tasks":[["has",{"selector":" > .adsbygoogle"}]]}]}],[1945629249,{"a":[{"selector":"#j-topBgBox + .crumbs-nav.top-op","action":["style","margin-bottom: 10px !important;"],"cssable":true}]}],[1354507769,{"a":[{"selector":".asset-content > p","tasks":[["has-text","二维|助教|0 元|报名费|原价"],["spath"," + p + p > img"]]},{"selector":".asset-content > p","tasks":[["has-text","二维|助教|0 元|报名费|原价"],["spath"," + p > img"]]}]}],[948131082,{"a":[{"selector":".sidebar-box","tasks":[["has",{"selector":".re-600160"}]]}]}],[1659800034,{"a":[{"selector":".tpc_content","tasks":[["has",{"selector":" > b:nth-child(1n+40) > span > a[onmouseover=\"this.style.background='#DEF5CD';\"]","tasks":[["has-text","91TV"]]}],["spath"," > :nth-child(-1n+45)"]]},{"selector":".tpc_content","tasks":[["has",{"selector":" > b:nth-child(1n+50) > span > a[onmouseover=\"this.style.background='#DEF5CD';\"]","tasks":[["has-text","91TV"]]}],["spath"," > :nth-child(-1n+55)"]]},{"selector":"[class]","tasks":[["has",{"selector":" > a[onmouseover=\"this.style.background='#DEF5CD';\"]:nth-child(1n+150)","tasks":[["has-text","赌|娱|澳"]]}],["spath"," > :nth-child(-1n+155)"]]},{"selector":"[class]","tasks":[["has",{"selector":" > a[onmouseover=\"this.style.background='#DEF5CD';\"]:nth-child(1n+160)","tasks":[["has-text","赌|娱|澳"]]}],["spath"," > :nth-child(-1n+170)"]]},{"selector":"[class]","tasks":[["has",{"selector":" > a[onmouseover=\"this.style.background='#DEF5CD';\"]:nth-child(1n+180)","tasks":[["has-text","赌|娱|澳"]]}],["spath"," > :nth-child(-1n+188)"]]},{"selector":"[class]","tasks":[["has",{"selector":" > a[onmouseover=\"this.style.background='#DEF5CD';\"]:nth-child(1n+190)","tasks":[["has-text","赌|娱|澳"]]}],["spath"," > :nth-child(-1n+195)"]]}]}],[1168083416,{"a":[{"selector":".template-item","tasks":[["has",{"selector":" > .wrap-sub-title > div > .ad"}]]}]}],[1268509973,{"a":[{"selector":"#question-wrap > .row > .col-xl-auto","tasks":[["has",{"selector":" > #first-ad:first-child + #gridAd + #second-ad:last-child"}]]}]}],[199899186,{"a":[{"selector":".app-container[aria-expanded=\"false\"] section.with-ad","action":["style","width: calc(100% - 20px) !important;"],"cssable":true},{"selector":".with-ad[data-layout=\"list\"] .main-header","action":["style","width: 100% !important;"],"cssable":true},{"selector":".with-ad[data-layout=\"list\"][data-section-type=\"new-video\"] .content-wrap:nth-child(-1n+2)","action":["style","width: 100% !important;"],"cssable":true}]}],[2102775560,{"a":[{"selector":"body.modal-open","action":["style","padding-right: 0!important; overflow: visible!important;"],"cssable":true}]}],[1364156432,{"a":[{"selector":"#SlashviewAdDetector","action":["style","display: block !important;"],"cssable":true}]}],[1295716485,{"a":[{"selector":".cell","tasks":[["has",{"selector":".txt","tasks":[["has-text","广告"]]}]]},{"selector":".imgcell","tasks":[["has",{"selector":".txt","tasks":[["has-text","广告"]]}]]}]}],[1578477643,{"a":[{"selector":"div[class^=\"right-feedback\"]","tasks":[["has",{"selector":" > .list-step-title","tasks":[["has-text","网游"]]}]]}]}],[756379319,{"a":[{"selector":".list16 > ul > li","tasks":[["has-text","广告"]]}]}],[2015395158,{"a":[{"selector":".sptable_do_not_remove","action":["style","visibility: hidden !important;"],"cssable":true}]}],[825061385,{"a":[{"selector":".has_action","tasks":[["has",{"selector":" > .icon_ad"}]]}]}],[46910697,{"a":[{"selector":"#wrapper > #mainbar > .area:not(#story):not(#comments)","tasks":[["has",{"selector":" > h3 > a[href]","tasks":[["has-text","商品推薦"]]}]]}]}],[86521015,{"a":[{"selector":"#Rightbar > .box > .inner > .sidebar_units","tasks":[["not",{"selector":"","tasks":[["has",{"selector":" + strong"}]]}],["upward",2]]},{"selector":"#Rightbar > .box > .inner","tasks":[["has",{"selector":" > a[href]:only-child"}],["spath"," + .sidebar_compliance > a[href=\"/advertise\"]"],["upward",2]]},{"selector":"#Rightbar > .box","tasks":[["has",{"selector":" > .inner > .adsbygoogle"}]]},{"selector":"#Rightbar > .box","tasks":[["has",{"selector":" > .inner > div > span","tasks":[["has-text","Sponsored by"]]}]]},{"selector":"#Rightbar > div.box","tasks":[["has",{"selector":" > div.inner a[target=\"_blank\"] > img[src*=\"cdn.v2ex.com/assets/sidebar/\"]"}]]},{"selector":".box","tasks":[["has",{"selector":" > .inner > div > span[style]","tasks":[["has-text","Sponsored"]]}]]}]}],[1678737746,{"a":[{"selector":"#wrapfabtest","action":["style","height: 1px!important;"],"cssable":true}]}],[442612664,{"a":[{"selector":".sidexbar div","tasks":[["has",{"selector":" > a > img"}]]}]}],[1455359432,{"a":[{"selector":".content-area > div#content > div > div.item","tasks":[["has",{"selector":" > a:not([href*=\"waerfa.com/\"]) > img"}]]}]}],[350034342,{"a":[{"selector":".card-content > ul > li","tasks":[["has",{"selector":" > a[action-type=\"realtimehot_ad\"]"}]]},{"selector":".card-content > ul > li","tasks":[["has",{"selector":" > p > .icon-txt-recommend"}]]},{"selector":".card-wrap","tasks":[["has",{"selector":" > .card-film > .card-head > .title","tasks":[["has-text","广告"]]}]]},{"selector":".card-wrap","tasks":[["has",{"selector":" > .card-top > .s-fr","tasks":[["has-text","广告"]]}]]},{"selector":".vue-recycle-scroller__item-view","tasks":[["has",{"selector":".wbpro-ad-tag","tasks":[["has-text","广告"]]}]]},{"selector":".vue-recycle-scroller__item-view","tasks":[["has",{"selector":".wbpro-auth-tag > div","tasks":[["has-text","热推"]]}]]},{"selector":".vue-recycle-scroller__item-view","tasks":[["has",{"selector":"div[class^=\"head-info_authtag_\"] > img[src^=\"data\"]"}]]},{"selector":".vue-recycle-scroller__item-view","tasks":[["has",{"selector":"img[class^=\"head-info_authicon_\"][src^=\"data\"]"}]]},{"selector":".wbpro-side-panel","tasks":[["has",{"selector":"span[class^=\"wbpro-icon-search\"]","tasks":[["has-text","商"]]}]]},{"selector":"tr","tasks":[["has",{"selector":" > .td-03 > .icon-txt-recommend"}]]}]}],[2118695187,{"a":[{"selector":"#player_div","action":["style","display: block!important;"],"cssable":true}]}],[881161998,{"a":[{"selector":"div[id^=\"postmessage_\"] > div[align=\"center\"][style^=\"font-size:11px;\"] > font","tasks":[["has-text","Advertisement"]]}]}],[201263871,{"a":[{"selector":"body > div#qmenu_menu ~ div[style]","tasks":[["has",{"selector":" > a[target=\"_blank\"]"}]]}]}],[378305744,{"a":[{"selector":"li","tasks":[["has",{"selector":" > .myad"}]]}]}],[1932813287,{"a":[{"selector":".js-stream-content","tasks":[["has",{"selector":"div","tasks":[["has-text","雅虎搜尋"]]}]]},{"selector":".js-stream-content","tasks":[["has",{"selector":"p","tasks":[["has-text","熱門搜尋"]]}]]},{"selector":".js-stream-content","tasks":[["has",{"selector":"span","tasks":[["has-text","即日熱搜"]]}]]},{"selector":".stream-items","tasks":[["has",{"selector":" > div > div > span","tasks":[["has-text","即日熱搜"]]}]]},{"selector":"div[class^=\"Pos(a) H\"]","tasks":[["has",{"selector":" > a[class^=\"LineClamp\"][href^=\"https://b.gemini.\"]"}]]}]}],[2085342387,{"a":[{"selector":".news > div[class=\"bd quote\"]","tasks":[["has",{"selector":"ul > li > .geminiAd"}]]}]}],[1079672854,{"a":[{"selector":".video-list > ul > li.video-item","tasks":[["has",{"selector":" > div[class] > .video-thumb > .video-thumb-image[style^=\"background-image: url('https://static2.yaseok.com/uploads/\"]"}]]}]}],[1234965170,{"a":[{"selector":".excerpt","tasks":[["has",{"selector":" > .focus[href^=\"http\"]:not([href*=\"ypojie\"])"}]]}]}],[1536037272,{"a":[{"selector":".row > div.col-sm-6","tasks":[["has",{"selector":" > div.well > a[href^=\"https://jump.9118ads.com/\"]"}]]}]}],[278651839,{"a":[{"selector":".sldebar_out + *","action":["style","height: 0!important;"],"cssable":true}]}],[2001610140,{"a":[{"selector":".TopstoryItem","tasks":[["has",{"selector":".Popover > .TopstoryItem-advertButton"}]]}]}]]);

const hostnamesMap = new Map([["muchong.com",2073131733],["mydowndown.com",1166244725],["mydrivers.com",1850283654],["m.mydrivers.com",267358263],["nfmovies.com",1033508181],["nownews.com",1355347056],["nxpaaq.com",1653893786],["o8tv.com",923213970],["bbs.pcbeta.com",1080556701],["porn5f.com",1493386116],["ptthito.com",1210788861],["book.qidian.com",1945629249],["ruanyifeng.com",1354507769],["runoob.com",948131082],["rvlev.com",1659800034],["t66y.com",[1659800034,2015395158]],["samsung.com",1168083416],["segmentfault.com",1268509973],["shanxivideo.com",199899186],["slashlook.com",2102775560],["slashview.com",1364156432],["image.so.com",1295716485],["sogou.com",1578477643],["news.sohu.com",756379319],["www.sohu.com",756379319],["toutiao.com",825061385],["oops.udn.com",46910697],["v2ex.com",86521015],["v2rayssr.com",1678737746],["vpsmm.com",442612664],["waerfa.com",1455359432],["weibo.com",350034342],["weihemenye.com",2118695187],["wholehk.com",881161998],["x3cn.com",201263871],["x6d.com",378305744],["yahoo.com",1932813287],["tw.stock.yahoo.com",2085342387],["yasehub.com",1079672854],["ypojie.com",1234965170],["yzl333.com",1536037272],["zhangxinxu.com",278651839],["zhihu.com",2001610140]]);

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
