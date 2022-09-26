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

const argsMap = new Map([[776627092,{"a":[{"selector":".sidebar > div.tile-top.tile","action":["style","height: auto!important;"],"cssable":true}]}],[493004463,{"a":[{"selector":"#sidebar > .bloque","tasks":[["has",{"selector":" > h1","tasks":[["has-text","Publicidad"]]}]]},{"selector":".recomendados > h1","tasks":[["has-text","Publicidad"]]}]}],[1911046659,{"a":[{"selector":"ul[class^=\"Mb(0)\"] > li.js-stream-content","tasks":[["has",{"selector":" > div > a[rel=\"nofollow noopener noreferrer\"] + div","tasks":[["has-text","Patrocinado"]]}]]}]}],[1946379134,{"a":[{"selector":"body","action":["style","background-image: none!important;"],"cssable":true}]}],[1856471835,{"a":[{"selector":".well.z-body > .ad-title","tasks":[["upward",1]]}]}],[2116463437,{"a":[{"selector":".well.z-body","tasks":[["has",{"selector":" > .ad-title"}]]}]}],[651316543,{"a":[{"selector":"#axds-Top","action":["style","min-height: 0 !important;"],"cssable":true}]}],[355284810,{"a":[{"selector":".pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links","action":["style","display: block !important;"],"cssable":true}]}],[668728864,{"a":[{"selector":"p[align=\"center\"] > font","tasks":[["has-text","^advertising"]]}]}],[1547909064,{"a":[{"selector":"body.modal-open[style=\"padding-right: 17px;\"]","action":["style","overflow: visible!important; padding-right: 0px!important;"],"cssable":true}]}],[1112473289,{"a":[{"selector":".sidebar > .encabezados > h3","tasks":[["has-text","Publicidad"]]}]}],[720279552,{"a":[{"selector":".ads.ad.adsbox.ad-placement.carbon-ads","action":["style","display: block !important;"],"cssable":true}]}],[691751601,{"a":[{"selector":".block-container > #widget > .movie-thumbnail","tasks":[["has",{"selector":" > .movie-back > h3 > :is(a[href$=\"/netflix-premium/\"],a[href$=\"/spotify-premium/\"],a[title=\"Disney Premium\"])"}]]}]}],[1932100201,{"a":[{"selector":"#secondary section.widget_text","tasks":[["has",{"selector":" > h3.widget-title","tasks":[["has-text","Publicidad"]]}]]}]}],[419624283,{"a":[{"selector":".sub_single > .sidebar","tasks":[["has",{"selector":"a[href^=\"http://altadefinizione.pink\"]"}]]}]}],[1942801559,{"a":[{"selector":".Container div.WdgtCn","tasks":[["has",{"selector":" > div[style] > center > script[src^=\"//server.cpmstar.com/\"]"}]]},{"selector":".Container section.WdgtCn","tasks":[["has",{"selector":" > .OUTBRAIN"}]]},{"selector":".Container section.WdgtCn","tasks":[["has",{"selector":" > center > a[href=\"https://www.patreon.com/somoskudasai\"] > img"}]]}]}],[1261779163,{"a":[{"selector":".container > h2.section__header","tasks":[["has",{"selector":" > span","tasks":[["has-text","^ANUNCIOS$"]]}]]}]}],[1269408527,{"a":[{"selector":"#sidebarbtop > div.widget","tasks":[["has",{"selector":" > div.widget-content > ins.adsbygoogle"}]]}]}],[225469731,{"a":[{"selector":"body > table","tasks":[["has",{"selector":" > tbody > tr > td > div.publi_sponsor"}]]}]}],[665557780,{"a":[{"selector":".dmPhotoGalleryResp .photogallery-column > .photoGalleryThumbs a[href=\"https://calentadores.shoptena.com/\"]","tasks":[["upward",".photogallery-column"]]}]}],[187366902,{"a":[{"selector":"#hide","action":["style","display: block!important;"],"cssable":true}]}],[463926474,{"a":[{"selector":"#elPostFeed > form > center","tasks":[["has",{"selector":" > ins.adsbygoogle"}]]},{"selector":"#ipsLayout_mainArea > .ipsBox","tasks":[["has",{"selector":" > h2 > a","tasks":[["has-text","LFSPro Ads"]]}]]},{"selector":"#ipsLayout_mainArea > section","tasks":[["has",{"selector":" > ol > li > h2 > a","tasks":[["has-text","LFSPro Ads"]]}]]},{"selector":".ipsList_reset > li.ipsWidget","tasks":[["has",{"selector":" > h3","tasks":[["has-text","LFSPro Ads"]]}]]}]}],[1094092675,{"a":[{"selector":".listagem-content > .table > tbody > tr > .table-responsive-fullwidth > .th-wrap > .is-vcentered > span.is-warning","tasks":[["has-text","Anúncio"],["upward",4]]}]}],[1415292719,{"a":[{"selector":".content #src_iframe","action":["style","display: block !important;"],"cssable":true},{"selector":".content > div[id]","action":["style","display: block !important;"],"tasks":[["has",{"selector":" > center > #src_iframe"}]]},{"selector":".content > div[id]","tasks":[["has",{"selector":" > center > b","tasks":[["has-text","DESATIVE O ADBLOCK"]]}]]}]}],[1148719036,{"a":[{"selector":".content #video","action":["style","display: block !important;"],"cssable":true}]}],[1570747321,{"a":[{"selector":"body #fullbanner-container","action":["style","height: 1px !important;"],"cssable":true}]}],[1111680573,{"a":[{"selector":".main-posts > .general-content > div[id^=\"container-ac\"]:only-child","tasks":[["upward",1]]}]}],[1270546117,{"a":[{"selector":"[style=\"text-align: center; display: none;\"]","action":["style","display: block !important;"],"cssable":true}]}],[2018896364,{"a":[{"selector":".player","action":["style","display: block !important;"],"cssable":true}]}],[695658062,{"a":[{"selector":"div.encabezados","tasks":[["has",{"selector":" > h3","tasks":[["has-text","Publicidad"]]}]]}]}],[30545564,{"a":[{"selector":"div[id^=\"odigi\"] > div.odigi-adlabel","tasks":[["upward",1]]}]}],[1228222953,{"a":[{"selector":".web-log-post-grid > .post > .post-wrapper > .post-content-wrapper > .entry-content > script:first-child","tasks":[["has-text","ad_idzone"],["upward",4]]},{"selector":"aside#secondary > .widget > h2.widget-title","tasks":[["has-text","Publicidad"],["upward",1]]}]}],[1069251573,{"a":[{"selector":"#bannerGames","action":["style","height: 2px!important;"],"cssable":true},{"selector":"#lateral > .conteudoBox","tasks":[["has",{"selector":" > .adsLateral"}]]},{"selector":"#lateral > .conteudoBox","tasks":[["has",{"selector":" > .sideBarAds"}]]},{"selector":".adstopo","action":["style","position: absolute!important; left: -3000px!important;"],"cssable":true}]}],[1367741792,{"a":[{"selector":"div[id^=\"src_iframe_\"]","action":["style","display: block !important;"],"cssable":true}]}],[1025983,{"a":[{"selector":".row > div.order-1","tasks":[["has",{"selector":" > div.video-block-happy"}]]}]}],[2062107473,{"a":[{"selector":".col-md-4 > h2","tasks":[["has-text","^Publicidade$"]]}]}],[1699059589,{"a":[{"selector":"#Lateral > .Titulo","tasks":[["has-text","Publicidade"]]}]}],[509063276,{"a":[{"selector":".uix_sidebarInner div.widget_text","tasks":[["has",{"selector":" > div.widget_text h3","tasks":[["has-text","Publicidade"]]}]]}]}],[555214079,{"a":[{"selector":".sidebar-content-inner > div.widget","tasks":[["has",{"selector":" > div.widget-item-wrap > h2.widget-title > span.title-wrap","tasks":[["has-text","Publicidad"]]}]]},{"selector":".sidebar-content-inner > div.widget","tasks":[["has",{"selector":" > div.widget_text > div.textwidget > iframe[name^=\"spot_id\"]"}]]}]}],[1349354081,{"a":[{"selector":"a[href^=\"https://www.pornolandia.xxx/webmaster/ref/\"]","tasks":[["upward",1]]}]}],[1636925313,{"a":[{"selector":".container > div[style$=\"z-index:9999999999999999999!important;\"]","tasks":[["upward",1]]}]}]]);

const hostnamesMap = new Map([["windowsblogitalia.com",776627092],["xtraordinaryfansub.com",493004463],["yahoo.com",1911046659],["zonammorpg.com",1946379134],["anitube.cx",1856471835],["animesonline.cz",2116463437],["20minutos.es",651316543],["canarias7.es",355284810],["hoy.es",355284810],["lasprovincias.es",355284810],["primedeportes.es",668728864],["visioncloud.ga",1547909064],["extremotv.info",1112473289],["tecword.info",720279552],["vivercomsaude.online",720279552],["smartdoing.tech",720279552],["manchetehoje.xyz",720279552],["hackstore.la",691751601],["deportealdia.live",1932100201],["seriehd.me",419624283],["animeflv.net",1942801559],["animetw.net",1261779163],["descargaspcpro.net",1269408527],["foro.elhacker.net",225469731],["globaltvapp.net",665557780],["kshowes.net",187366902],["forum.lfspro.net",463926474],["meupc.net",1094092675],["sejasaudavel.net",1415292719],["sudoroot.net",1148719036],["tecnoblog.net",1570747321],["verdragonball.online",1111680573],["comandotorrents.org",1270546117],["mundotec.pro",2018896364],["rojadirectatv.pro",695658062],["odigital.sapo.pt",30545564],["palaygo.site",1228222953],["superanimes.site",1069251573],["clubinvest.top",1367741792],["porno-japones.top",1025983],["unionleitor.top",2062107473],["tudotv.tv",1699059589],["fcporto.ws",509063276],["hentaiporno.xxx",555214079],["pornolandia.xxx",1349354081],["animesonehd.xyz",1636925313]]);

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
