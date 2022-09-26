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

const argsMap = new Map([[1209317299,{"a":[{"selector":".ad_block_non_shadowed","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true},{"selector":".ad_block_shadowed","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[201296411,{"a":[{"selector":".lay-sidebar > .sidebar__aside > .com-banner","tasks":[["upward",1]]},{"selector":".lay-sidebar > .sidebar__aside > .mod-banner:only-child","tasks":[["upward",1]]}]}],[1405429339,{"a":[{"selector":"div[class^=\"block-ads-\"]","action":["style","visibility: hidden !important;"],"cssable":true}]}],[771078386,{"a":[{"selector":".container > div.columnas > section > div.panel-instanciado > div.panel","tasks":[["has",{"selector":" > div.banner"}]]}]}],[640405043,{"a":[{"selector":"body","action":["style","overflow: visible!important;"],"cssable":true}]}],[310476052,{"a":[{"selector":"#main-content > .region > .fila > .container > .row[id] > .col-md-4.p33","tasks":[["has",{"selector":" > .cleft:only-child > .bnn > div[id^=\"div-gpt-ad\"]"}]]}]}],[727669151,{"a":[{"selector":".body","action":["style","background-image: none!important;"],"cssable":true},{"selector":".text-center > small","tasks":[["has-text","Publicidade|publicidade"]]}]}],[1413451458,{"a":[{"selector":"#colunas","action":["style","display: block !important;"],"cssable":true}]}],[844367203,{"a":[{"selector":".theiaStickySidebar > div.widget","tasks":[["has",{"selector":" > div.textwidget > div[align=\"center\"] a[href]"}]]}]}],[1149038717,{"a":[{"selector":"body","action":["style","overflow: auto !important;"],"cssable":true}]}],[514753302,{"a":[{"selector":".ads.ads-block.prebid","action":["style","display: block !important;"],"cssable":true}]}],[1909524303,{"a":[{"selector":".gzh-content > section","tasks":[["has",{"selector":" > div.l-row > div.ads-area"}]]}]}],[251595380,{"a":[{"selector":".MuiGrid-root > div[class^=\"style__Container\"]","tasks":[["has",{"selector":" > span","tasks":[["has-text","Publicidade"]]}]]},{"selector":".MuiGrid-root > div[style] > div[class^=\"style__Container-sc-\"]","tasks":[["has",{"selector":" > span.vertical","tasks":[["has-text","Publicidade"]]}]]},{"selector":".containerMapAndBanner > .contentMap","action":["style","height: 100% !important;"],"cssable":true}]}],[681103098,{"a":[{"selector":"div[class=\"row mb-25\"] > div.col-md-12","tasks":[["has",{"selector":" > header.pb-15 > h3 > a[href=\"https://www.correiobraziliense.com.br/especiais/\"]"}]]},{"selector":"div[data-tb-region-item]","tasks":[["has",{"selector":" > div.news-box > a > span > strong > em","tasks":[["has-text","conteúdo patrocinado"]]}]]}]}],[1502868762,{"a":[{"selector":".play","action":["style","display: block !important;"],"cssable":true}]}],[1972783151,{"a":[{"selector":".main__corpo","action":["style","margin-top: 160px!important;"],"cssable":true}]}],[2097757465,{"a":[{"selector":"#td-outer-wrap > div[class=\"vc_row wpb_row td-pb-row\"] > div.td-pb-border-top","tasks":[["has",{"selector":" > div > div[style$=\"max-width: 1188px; max-height: 150px;\"]"}]]},{"selector":"div[class=\"vc_row wpb_row td-pb-row\"][style^=\"padding-top: 1\"]","action":["style","padding-top: 0 !important;"],"cssable":true}]}],[1794084668,{"a":[{"selector":"iframe#doublebillboard-1","action":["remove",""]}]}],[1733185121,{"a":[{"selector":".mw-flex","tasks":[["has",{"selector":" > div[id^=\"id_ad_\"]"}]]}]}],[66191977,{"a":[{"selector":"div[class*=\"col-\"]","tasks":[["has",{"selector":" > div.ads"}]]}]}],[1609998353,{"a":[{"selector":".wrap-content .row > div[class^=\"col-\"]","tasks":[["has",{"selector":" > div.wrap-publicidade"}]]},{"selector":"div[class^=\"styles__Container-\"]","tasks":[["has",{"selector":" > p.ads-placeholder-label"}]]}]}],[2052975121,{"a":[{"selector":"body","action":["style","overflow: visible !important;"],"cssable":true}]}],[1878759385,{"a":[{"selector":"html","action":["style","overflow: visible !important;"],"cssable":true}]}],[1532426384,{"a":[{"selector":".code-block","tasks":[["has",{"selector":" > div[id^=\"Position_Content\"]"}]]}]}],[1953639953,{"a":[{"selector":".adsbygoogle","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[230806001,{"a":[{"selector":".ipsList_reset > .ipsWidget.ipsWidget_horizontal[data-blocktitle=\"Custom Blocks\"]","tasks":[["has",{"selector":" > h3.ipsType_reset","tasks":[["has-text","Publicidade"]]}]]}]}],[1533758984,{"a":[{"selector":".vc_col-sm-4 .wpb_wrapper > .sc_content_bordered","tasks":[["has",{"selector":"a[href=\"http://exitl.ag/genshinpro\"]"}]]}]}],[523517776,{"a":[{"selector":".adsbygoogle","action":["style","display: block!important; position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1706930041,{"a":[{"selector":".hd-ad--background","action":["remove",""]},{"selector":".is_advertising .site-advertising","action":["style","margin: 5px auto 0 !important;"],"cssable":true}]}],[169420343,{"a":[{"selector":"div[class^=\"Block__Component-\"]","tasks":[["has",{"selector":" > label","tasks":[["has-text","^Publicidade$"]]}]]}]}],[1031615022,{"a":[{"selector":".slick-track > .slick-slide > a[href*=\"?utm_campaign=homepedia:banner\"]","action":["remove",""],"tasks":[["upward",1]]}]}],[491540493,{"a":[{"selector":".elementor-section-wrap > .elementor-section .elementor-element-populated > .elementor-element.elementor-widget-html","tasks":[["has",{"selector":" > .elementor-widget-container > div[id^=\"ad_\"][id*=\"mrec_\"]"}]]},{"selector":".elementor-section-wrap > .elementor-section","tasks":[["has",{"selector":":is(div[id^=\"ad_\"][id*=\"_bb_\"],div[id^=\"ad_\"][id$=\"_sticky\"])"}]]}]}],[339698072,{"a":[{"selector":"#main-content_home > div > .height-size-sidebar","tasks":[["has",{"selector":" > .img-fluid > iframe[src^=\"https://banners.inforchannel.com.br/\"]"}]]},{"selector":".col-md-4 > .height-item","tasks":[["has",{"selector":" > .img-fluid > iframe[src^=\"https://banners.inforchannel.com.br/\"]"}]]},{"selector":".sidebar-secondary > .height-item","tasks":[["has",{"selector":" > .img-fluid > iframe[src^=\"https://banners.inforchannel.com.br/\"]"}]]},{"selector":"body","action":["style","overflow: auto !important; padding-right: 0 !important;"],"cssable":true}]}],[1815283851,{"a":[{"selector":"body > section[class^=\"c\"]","tasks":[["has",{"selector":" > div[class] > div[class] > div[id] > div[style^=\"height:\"]"}]]}]}],[882874626,{"a":[{"selector":".block-wrapper[style*=\"url\"] > .container > .row","action":["style","margin-top: 0 !important;"],"cssable":true},{"selector":".block-wrapper[style*=\"url\"]","action":["style","background: none !important;"],"cssable":true},{"selector":"body[style*=\"url\"] .trending-light[style^=\"margin-top:\"]","action":["style","margin-top: 20px !important;"],"cssable":true},{"selector":"body[style*=\"url\"]","action":["style","background-image: none !important;"],"cssable":true}]}],[1693484328,{"a":[{"selector":".sidebar > .sidebar-item[style] > iframe[src^=\"https://assets.naointendo.com.br/banners/\"]","tasks":[["upward",1]]}]}],[925519238,{"a":[{"selector":".StyledDiv > .Title","tasks":[["has-text","publicidade"]]}]}],[1179547178,{"a":[{"selector":"body div[id].ads.adsbox.doubleclick","action":["style","display: block !important;"],"cssable":true}]}],[1076695771,{"a":[{"selector":".p-body-inner > div.block","tasks":[["has",{"selector":" > div > h3","tasks":[["has-text","Patrocínio|Publicidade"]]}]]},{"selector":".p-sidebar-inner > div.block","tasks":[["has",{"selector":" > div > h3","tasks":[["has-text","Patrocínio|Publicidade"]]}]]}]}],[604869760,{"a":[{"selector":"[id^=\"gk\"] > div[class^=\"box\"][class$=\"nomargin\"]","tasks":[["has",{"selector":" > .content:only-child > .bannergroup:only-child"}]]}]}],[448814343,{"a":[{"selector":"div[class^=\"aspect-ratio\"] > div[id^=\"div-gpt-\"]","tasks":[["upward",1]]}]}],[849026970,{"a":[{"selector":".container > div[class]","tasks":[["has",{"selector":" > div.separator","tasks":[["has-text","Publicidade"]]}]]}]}]]);

const hostnamesMap = new Map([["foros.3dgames.com.ar",1209317299],["lanacion.com.ar",201296411],["lavoz.com.ar",1405429339],["vos.lavoz.com.ar",771078386],["alojamiento.biz",640405043],["elperiodico.com",640405043],["paginasiete.bo",310476052],["adrenaline.com.br",727669151],["adrianeboneck.com.br",1413451458],["bolsadevalores.club",1413451458],["androidapktop.com",1413451458],["cheirinhobao.com",1413451458],["dicasfinanceirasbr.com",1413451458],["osmtecnologico.com",1413451458],["receitasdochico.life",1413451458],["decorabolos.net",1413451458],["futlances.net",1413451458],["gastronomiabrasileira.net",1413451458],["receitasdalu.net",1413451458],["dicadesaude.online",1413451458],["receitasdahora.online",1413451458],["legacyfun.site",1413451458],["bcnoticias.com.br",844367203],["blog.clarocombomais.com.br",1149038717],["oplanetatv.clickgratis.com.br",514753302],["ouniversodatv.com",514753302],["gauchazh.clicrbs.com.br",1909524303],["climaaovivo.com.br",251595380],["correiobraziliense.com.br",681103098],["decorardicas.com.br",1502868762],["loucasporcabelos.com.br",1502868762],["diariodepernambuco.com.br",1972783151],["diariodoiguacu.com.br",2097757465],["docero.com.br",1794084668],["doceru.com",1794084668],["dol.com.br",1733185121],["em.com.br",66191977],["estadao.com.br",1609998353],["expressodaspraias.com.br",[2052975121,1878759385]],["journaldemontreal.com",2052975121],["fdr.com.br",1532426384],["gamersboard.com.br",[1953639953,230806001]],["eletronicabr.com",1953639953],["mundocracking.net",1953639953],["genshinpro.com.br",1533758984],["ggames.com.br",523517776],["despistaos.es",523517776],["hardware.com.br",1706930041],["hojeemdia.com.br",169420343],["homepedia.com.br",1031615022],["obutecodanet.ig.com.br",491540493],["inforchannel.com.br",339698072],["minhaconexao.com.br",1815283851],["mundoconectado.com.br",882874626],["naointendo.com.br",1693484328],["nsctotal.com.br",925519238],["oceans14.com.br",1179547178],["forum.politz.com.br",1076695771],["setelagoas.com.br",604869760],["shoptime.com.br",448814343],["submarino.com.br",448814343],["sub100.com.br",849026970]]);

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
