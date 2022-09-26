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

const argsMap = new Map([[902212869,{"a":[{"selector":".theiaStickySidebar > div.widget_text","tasks":[["has",{"selector":"script[src^=\"https://mkt.momentoeditorial.com.br/revive/www/delivery/ajs.php?zoneid=\"]"}]]},{"selector":".theiaStickySidebar > div.widget_text","tasks":[["has",{"selector":"script[src^=\"https://pagead2.googlesyndication.com/\"]"}]]}]}],[1439762669,{"a":[{"selector":".table-related-content-new","tasks":[["has",{"selector":" > #related-bellow-news > .taboola-placeholder"}]]}]}],[1615568054,{"a":[{"selector":".tdg-main > div[class]","tasks":[["has",{"selector":" > div.ads-super-footer"}]]},{"selector":"body > header","action":["style","top: 0 !important;"],"cssable":true},{"selector":"body","action":["style","padding-top: 0 !important;"],"cssable":true}]}],[1391143707,{"a":[{"selector":"#banner_b","action":["style","display: block !important;"],"cssable":true},{"selector":"iframe#google_ads_iframe_123_bait","action":["style","display: block !important;"],"cssable":true},{"selector":"iframe#google_ads_iframe_b","action":["style","display: block !important;"],"cssable":true}]}],[29875538,{"a":[{"selector":".col-fixed--md-300 > div.row > div.col","tasks":[["has",{"selector":" > div > a[href^=\"https://prosas.com.br/\"]"}]]}]}],[873255420,{"a":[{"selector":".posts-related-content > .box","tasks":[["has",{"selector":" > div[id^=\"bloco-native\"]"}]]}]}],[1140523906,{"a":[{"selector":"#header-bar.header-bar","action":["style","padding-top: 0 !important;"],"cssable":true}]}],[1694968916,{"a":[{"selector":".automaticas-canais > .justify-content-center > .banner_wrapper","tasks":[["upward",1]]},{"selector":".automaticas-canais > .leia_tambem_principal > .native_wrapper","tasks":[["upward",1]]}]}],[398255866,{"a":[{"selector":"#div-gpt-leaderboard ~ #page","action":["style","margin-top: 30px !important;"],"cssable":true}]}],[1024236189,{"a":[{"selector":".elementor-section-wrap > section.elementor-section-boxed > .elementor-column-gap-default > .elementor-row > .elementor-top-column","tasks":[["has",{"selector":" > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > div[id^=\"banner-native-lateral-\"]"}]]}]}],[305138542,{"a":[{"selector":"#newad","action":["style","height: 1px!important;"],"cssable":true}]}],[1067791239,{"a":[{"selector":"div[class*=\" \"] > div[class] > div[style^=\"height:\"] + div[class]","tasks":[["has-text","^Anuncio$"],["upward",2]]}]}],[504264249,{"a":[{"selector":".alert-message > #informacion","action":["style","display: block!important;"],"cssable":true}]}],[1969712983,{"a":[{"selector":".sidebar > #fixed_bar > .sidebar_item","tasks":[["has",{"selector":" > h3","tasks":[["has-text","^Publicidad$"]]}]]}]}],[1847888741,{"a":[{"selector":"#NEWS_RELATED","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1683425888,{"a":[{"selector":"#ROBAPAGINAS_INLINE_LEFT","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1937287184,{"a":[{"selector":"#sidebarGeral > .sidebar","tasks":[["has",{"selector":" > #tituloSidebar > center","tasks":[["has-text","Patrocinadores"]]}]]}]}],[612357650,{"a":[{"selector":".Conteudo > .Lateral > .Titulo","tasks":[["has-text","Publicidade"]]}]}],[583260924,{"a":[{"selector":"body .adsbygoogle","action":["style","display: block!important; position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1886553805,{"a":[{"selector":"#root main[class] > div[class] > section[class] + aside[class]","tasks":[["has",{"selector":" > div[class] > p[class]","tasks":[["has-text","PUBLICIDAD"]]}]]}]}],[463445892,{"a":[{"selector":".col > div.row","tasks":[["has",{"selector":" > div > div.menu-col-abajo"}]]},{"selector":".row > div.d-none","tasks":[["has",{"selector":" > div.adsense-pineado ins.adsbygoogle"}]]}]}],[778907033,{"a":[{"selector":"#framed","action":["style","display: block !important;"],"cssable":true}]}],[2065543941,{"a":[{"selector":".columns.ends > div.row","tasks":[["has-text","Advertisement"]]},{"selector":"fieldset","tasks":[["has",{"selector":" > legend","tasks":[["has-text","Advertisement"]]}]]}]}],[155598838,{"a":[{"selector":".navBar","action":["style","height: auto !important;"],"cssable":true}]}],[716158226,{"a":[{"selector":".banner","action":["style","visibility: hidden !important;"],"cssable":true}]}],[1247984526,{"a":[{"selector":".theiaStickySidebar > div.widget_text","tasks":[["has",{"selector":" > div.textwidget ins.adsbygoogle"}]]}]}],[1839160246,{"a":[{"selector":".section > .block > .zone.zleft.z33ml","tasks":[["has",{"selector":" > .banner"}]]}]}],[32438442,{"a":[{"selector":".adsbygoogle","tasks":[["upward",1]]}]}],[2071305777,{"a":[{"selector":".ads-300x300","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true},{"selector":".flows-grid > .flow-1x1","tasks":[["has",{"selector":"div[id^=\"eplAdDiv\"]"}]]}]}],[58346690,{"a":[{"selector":"#framed > #player","action":["style","display: block !important;"],"cssable":true}]}],[653462656,{"a":[{"selector":"#player","action":["style","display: block !important;"],"cssable":true}]}],[1799537783,{"a":[{"selector":".sidebar > div.widget","tasks":[["has",{"selector":" > div.section-heading > span","tasks":[["has-text","Publicidade"]]}]]}]}],[1392357848,{"a":[{"selector":"body","action":["style","background-image: none !important;"],"cssable":true}]}],[1438818372,{"a":[{"selector":".row-center > div.col-sm-4","tasks":[["has",{"selector":" > div.following-ad-container"}]]},{"selector":".tp-modal","tasks":[["has",{"selector":" > div.tp-iframe-wrapper > iframe[id^=\"offer_\"]"}]]}]}],[728416370,{"a":[{"selector":".sidebar > .encabezados","tasks":[["has",{"selector":" > h2","tasks":[["has-text","NOTICIAS SUGERIDAS"]]}]]}]}],[171266148,{"a":[{"selector":"html.fancybox-lock > body","action":["style","overflow: auto !important;"],"cssable":true},{"selector":"html.fancybox-margin","action":["style","margin-right: 0 !important;"],"cssable":true}]}],[683493638,{"a":[{"selector":".col-anu + div.col-cnt > div.columna","action":["style","width: 34% !important;"],"cssable":true}]}],[1056092471,{"a":[{"selector":"td[align=\"middle\"] > div[align=\"center\"]","tasks":[["has",{"selector":" > table[width] div[id^=\"optidigital-adslot-\"]"}]]}]}],[1765113174,{"a":[{"selector":".hasBgApb","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[1091819399,{"a":[{"selector":"#ablockercheck","action":["style","display: block!important;"],"cssable":true}]}],[1455705025,{"a":[{"selector":".col-md-8 > section > div.row > div[class^=\"col-\"]","tasks":[["has",{"selector":" > div.grid-item > p > a[rel=\"nofollow\"] > img"}]]}]}],[892779451,{"a":[{"selector":".content_section > .top","action":["style","margin-top: 100px !important;"],"cssable":true}]}]]);

const hostnamesMap = new Map([["telesintese.com.br",902212869],["terra.com.br",1439762669],["tudogostoso.com.br",1615568054],["uol.com.br",1391143707],["folha.uol.com.br",29875538],["hugogloss.uol.com.br",873255420],["jc.ne10.uol.com.br",1140523906],["noticiasdatv.uol.com.br",1694968916],["oantagonista.uol.com.br",398255866],["observatoriodatv.uol.com.br",1024236189],["mangahost-br.cc",305138542],["paisdelosjuegos.com.co",1067791239],["paisdelosjuegos.com.pe",1067791239],["goovie.co",504264249],["andro4all.com",1969712983],["androidayuda.com",[1847888741,1683425888]],["gamerzona.com",1847888741],["hardzone.es",1847888741],["softzone.es",1847888741],["adslzone.tv",[1847888741,1683425888]],["animesonlinep.com",1937287184],["aovivonatv.com",612357650],["asialiveaction.com",583260924],["atresplayer.com",1886553805],["aulafacil.com",463445892],["bellareceitas.com",778907033],["diariodecasamento.com",[778907033,58346690]],["empregovaga.com",[778907033,58346690]],["flashreceitas.com",[778907033,58346690]],["grandnoticias.com",778907033],["modaestiloeafins.com",[778907033,58346690]],["portalmundocurioso.com",[778907033,58346690]],["receitasabores.com",[778907033,58346690]],["turismoeviagem.com",[778907033,58346690]],["vidadeatletas.com",[778907033,58346690]],["tecword.info",[778907033,58346690]],["blotz.me",[778907033,58346690]],["belezaedieta.net",[778907033,58346690]],["blogdatecnologia.net",[778907033,58346690]],["culinariadochef.net",778907033],["eusaudavel.net",[778907033,58346690]],["gameszoom.net",778907033],["manualdamulher.net",[778907033,58346690]],["cardapiodavovo.online",[778907033,58346690]],["financashoje.online",[778907033,58346690]],["financasnow.online",[778907033,58346690]],["globalnoticias.online",778907033],["noticiasfitness.online",[778907033,58346690]],["noticiastecnologica.online",[778907033,58346690]],["receitasdamamae.online",[778907033,58346690]],["tudoemprego.online",[778907033,58346690]],["vivercomsaude.online",[778907033,58346690]],["muitasreceitas.site",778907033],["receitasdomundo.site",[778907033,58346690]],["tecnologiaonline.site",778907033],["smartdoing.tech",[778907033,58346690]],["fazendorendaextra.xyz",778907033],["manchetehoje.xyz",[778907033,58346690]],["bibliatodo.com",2065543941],["cienradios.com",155598838],["clavejuegos.com",716158226],["cokitos.com",1247984526],["cronista.com",1839160246],["definicionabc.com",32438442],["depor.com",2071305777],["mundotecnologias.com",58346690],["dicasgostosas.com",653462656],["guiafinancas.net",653462656],["receitasdaora.online",653462656],["economiasc.com",1799537783],["elchapuzasinformatico.com",1392357848],["elperiodico.com",1438818372],["extremotvplay.com",728416370],["rojadirectaonlinetv.com",728416370],["folhadoslagos.com",171266148],["formulatv.com",683493638],["forocoches.com",1056092471],["gamevicio.com",1765113174],["hartico.com",1091819399],["imperiodefamosas.com",1455705025],["infobae.com",892779451]]);

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
