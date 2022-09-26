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

// fin-0

const argsMap = new Map([[2103381645,{"a":[{"selector":".views-element-container","tasks":[["has",{"selector":"a[href^=\"https://www.marknaden.ax/annons\"]"}]]},{"selector":".views-element-container","tasks":[["has-text","Annonsnytt"]]}]}],[1500912229,{"a":[{"selector":".widget_adrotate_widgets","action":["remove",""]},{"selector":".wpb_column.vc_column_container.td-pb-span8","tasks":[["has",{"selector":"[src$=\"adsbygoogle.js\"]"}]]},{"selector":".wpb_column.vc_column_container.td-pb-span8","tasks":[["has",{"selector":"a[onclick*=\"banner\"]"}]]},{"selector":".wpb_column.vc_column_container.td-pb-span8:has(a[onclick*='banner'])","action":["remove",""]}]}],[1457307200,{"a":[{"selector":"#ad-top-banner-placeholder","action":["style","min-height: 0px !important"],"cssable":true}]}],[1589845475,{"a":[{"selector":".video","tasks":[["has",{"selector":" + div#bb-iawr-defaultPlayout-afterdawn_com_"}]]}]}],[1725431902,{"a":[{"selector":"br","tasks":[["has",{"selector":" + br + ins[class=\"undefined\"]"}]]},{"selector":"br","tasks":[["has",{"selector":" + ins[class=\"undefined\"]"}]]}]}],[1482908335,{"a":[{"selector":"#nm-300x300-fb","action":["style","min-height: 30px !important"],"cssable":true},{"selector":"#nm-980x400-fb","action":["style","min-height: unset !important"],"cssable":true}]}],[777419457,{"a":[{"selector":".section-inner","tasks":[["has",{"selector":" > .banner-slot"}]]},{"selector":".section-inner","tasks":[["has",{"selector":" > div[style] > .sanoma-ad-banner"}]]}]}],[155251512,{"a":[{"selector":"body.post-template-default * .td-main-content-wrap","tasks":[["has",{"selector":".tdt-ad-wrap"}]]}]}],[1157431017,{"a":[{"selector":".luelisaa > .solu","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"[href]","tasks":[["has-text","LeoVegas"]]}]}],[988864832,{"a":[{"selector":".pb30","tasks":[["has",{"selector":".adsbygoogle"}]]}]}],[700389340,{"a":[{"selector":"div[aria-label=\"Hakutulokset\"][role=\"main\"] [role=\"feed\"] > [role=\"article\"]","tasks":[["has",{"selector":"b[class]","tasks":[["has-text","Sponsoroitu"]]}]]},{"selector":"div[role=\"feed\"] > div","tasks":[["has",{"selector":"a[class][href][role][tabindex]","tasks":[["has-text","Sponsoroitu"]]}]]},{"selector":"div[role=\"feed\"] > div","tasks":[["has",{"selector":"div[class][role=\"button\"][tabindex]","tasks":[["has-text","Sponsoroitu"]]}]]},{"selector":"div[role=\"feed\"] > span","tasks":[["has",{"selector":"a[class][href][role][tabindex]","tasks":[["has-text","Sponsoroitu"]]}]]},{"selector":"div[role=\"undefined\"] > div > div > div > div > div:not([class],[data-visualcompletion]) > span","tasks":[["has",{"selector":"[aria-label=\"undefined\"]"}]]}]}],[1823130463,{"a":[{"selector":"article","tasks":[["has",{"selector":" > * header > * span","tasks":[["has-text","Sponsoroitu"]]}]]}]}],[1060462393,{"a":[{"selector":"p","tasks":[["has",{"selector":" > [rel=\"undefined\"]"}]]},{"selector":"p","tasks":[["has",{"selector":"a[rel=\"nofollow no-referrer sponsored\"]"}]]}]}],[806315206,{"a":[{"selector":".wp_rss_retriever ~ div","tasks":[["has-text","BONUSPANDA.COM|CASINOGORILLA.COM"]]},{"selector":".wp_rss_retriever","tasks":[["has-text","BONUSPANDA.COM|CASINOGORILLA.COM"]]}]}],[797408397,{"a":[{"selector":".section-wrapper > .has-ad-right:has(+ .section--ad:matches-css(display: none))","action":["style","width: 100% !important"],"cssable":true}]}],[285354543,{"a":[{"selector":"div[class=\"undefined\"][style^=\"width: 324px;\"] > div[data-td-block-uid]","tasks":[["has-text","PELIT"]]}]}],[572546965,{"a":[{"selector":".widget","tasks":[["has-text","Mainos"],["not",{"selector":"","tasks":[["has",{"selector":"[href=\"https://kalamies.com/tilaa/\"]"}]]}]]}]}],[2049655626,{"a":[{"selector":"body.oxy-modal-active","action":["style","overflow: auto !important; position: initial !important"],"cssable":true}]}],[775427660,{"a":[{"selector":".post p","tasks":[["has-text","Mainos:"]]}]}],[2112752657,{"a":[{"selector":".text-center","tasks":[["has-text","loadAd"]]}]}],[125908912,{"a":[{"selector":"article.grid__item_1-2","tasks":[["has",{"selector":" > div.nativead"}]]},{"selector":"article.grid__item_md-1-5.grid__item_1","tasks":[["has-text","Mainos"]]}]}],[1509517255,{"a":[{"selector":"#art_right_banner","tasks":[["has",{"selector":" > [id|=\"almad\"]"}]]}]}],[1356281272,{"a":[{"selector":".right_rpt_block","tasks":[["has",{"selector":"#vif_right_banner"}]]}]}],[283585278,{"a":[{"selector":"#mainos .otsikko","tasks":[["has-text","Lue myös"],["spath"," + div ~ *"]]}]}],[1293287482,{"a":[{"selector":".custom","tasks":[["has",{"selector":"img[src=\"/images/mainospaikat/3.jpg\"]"}]]}]}],[2033954336,{"a":[{"selector":".index-wrap","action":["style","left: 0px !important"],"cssable":true}]}],[550109178,{"a":[{"selector":"div[style=\"padding-bottom:10px;border-bottom:1px solid gray;margin-bottom:6px;\"]","tasks":[["has",{"selector":"script[type=\"text/javascript\"]"}]]},{"selector":"div[style=\"padding-bottom:10px;border-bottom:1px solid gray;margin-bottom:6px;\"]","tasks":[["has-text","Mainos:"]]},{"selector":"div[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"]","tasks":[["has",{"selector":" + [style=\"font-size:14px;line-height:21px;padding-top:6px;\"]","tasks":[["has-text","MAINOS"]]}]]},{"selector":"div[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"]","tasks":[["has-text","MAINOS"]]},{"selector":"table[width]","tasks":[["has",{"selector":"script[class=\"undefined\"]"}],["not",{"selector":"","tasks":[["has",{"selector":".category_story_unit"}]]}]]},{"selector":"tr","tasks":[["has",{"selector":" + tr","tasks":[["has",{"selector":"script"}]]}]]},{"selector":"tr","tasks":[["has-text","\\.loadAd"]]}]}],[51727593,{"a":[{"selector":".menu-item","tasks":[["has",{"selector":"[href*=\"/veikkausvihjeet\"]"}]]}]}],[1942075849,{"a":[{"selector":".menu-item","tasks":[["has",{"selector":"[href$=\"/pitkavetovihjeet/\"]"}]]}]}],[795133413,{"a":[{"selector":"p","tasks":[["has",{"selector":"strong"}],["has",{"selector":"a[href=\"http://www.curaofsweden.com/fi\"]"}]]}]}],[2010533320,{"a":[{"selector":"div","tasks":[["has",{"selector":" > div > div > div > h2 > div > span","tasks":[["has-text","Mainostettu twiitti"]]}]]}]}],[117540051,{"a":[{"selector":".menu-item","tasks":[["has",{"selector":"[href$=\"/vedonlyonti/\"]"}]]}]}],[1199372155,{"a":[{"selector":".listing-item","tasks":[["has",{"selector":" > .item-inner > .native-title"}]]}]}],[1155734955,{"a":[{"selector":".lg\\:hidden","tasks":[["has-text","Lue myös:"],["has",{"selector":"a[href^=\"/mainos/\"]"}]]},{"selector":"article","tasks":[["has",{"selector":" > header > h2 > span","tasks":[["has-text","Mainokset"]]}]]},{"selector":"article[class]","tasks":[["has",{"selector":" > a[href^=\"https://tilaa.sanoma.fi/al-digi\"][href$=\"undefined\"]"}]]}]}],[2053124212,{"a":[{"selector":"article[class=\"list bg-positive w-full mb-16\"]","tasks":[["has-text","Mainos"]]}]}],[1376480657,{"a":[{"selector":".widget_text","tasks":[["has-text","Advertisement"]]}]}],[618271287,{"a":[{"selector":".article__body > p","tasks":[["has-text","^\\xA0$"]]},{"selector":".sidebar-block","tasks":[["has",{"selector":"img.awpo-lazy"}]]}]}],[1855548441,{"a":[{"selector":".grid__item_1","tasks":[["has",{"selector":" > [id^=\"undefined\"]"}]]},{"selector":"article[class^=\"grid__item_\"]","tasks":[["has",{"selector":" > .nativead"}]]}]}],[1394037818,{"a":[{"selector":".container","tasks":[["has-text","MAINOS \\(TEKSTI JATKUU ALLA\\)"]]}]}],[2094116650,{"a":[{"selector":"div#skyscraper-height-div > aside > div","tasks":[["has",{"selector":"a[href^=\"https://www.arvopaperi.fi/kumppanisisallot/\"]"}]]}]}],[1043715809,{"a":[{"selector":"[width]","tasks":[["has",{"selector":".lazyload-wrapper"}],["spath",":not(aside)"]]}]}],[653942659,{"a":[{"selector":"[id^=\"undefined\"].pb","tasks":[["has",{"selector":" > a[href^=\"/clk2?\"]"}]]}]}],[517956136,{"a":[{"selector":".red-the-latest-issue","tasks":[["has-text","Kaupallinen yhteistyö"]]}]}],[19359020,{"a":[{"selector":".widget","tasks":[["has",{"selector":".widget_advads_ad_widget"}]]}]}],[957586002,{"a":[{"selector":".sidebar-block","tasks":[["has",{"selector":"[id^=\"adsivupalkki_\"]"}]]}]}],[1753869143,{"a":[{"selector":"div[class|=\"undefined\"][class*=\"undefined\"]","tasks":[["has-text",["mainos","i"]]]}]}],[1840803243,{"a":[{"selector":".border-bottom.row","tasks":[["has",{"selector":".poppartners"}]]}]}]]);

const hostnamesMap = new Map([["alandstidningen.ax",2103381645],["nyan.ax",1500912229],["afterdawn.com",[1457307200,1589845475,1725431902]],["download.fi",1457307200],["edukas.fi",1457307200],["puhelinvertailu.com",[1725431902,2033954336]],["fin.afterdawn.com",1482908335],["alypaa.com",777419457],["arvokisat.com",155251512],["herkkusuut.com",155251512],["laliiga.com",155251512],["leijonat.com",155251512],["nainen.com",155251512],["nhlsuomi.com",155251512],["suomif1.com",155251512],["suomifutis.com",[155251512,51727593]],["suomikiekko.com",[155251512,1942075849]],["suomikoris.com",155251512],["suomiurheilu.com",155251512],["susijengi.com",155251512],["valioliiga.com",[155251512,117540051]],["viikonloppu.com",[155251512,1199372155]],["sketsi.net",155251512],["eurheilu.org",155251512],["elmotv.com",1157431017],["etusuora.com",988864832],["facebook.com",700389340],["m.facebook.com",1823130463],["findance.com",1060462393],["futisfani.com",806315206],["kiekkofani.com",806315206],["penkkiurheilu.com",806315206],["uutisankka.com",806315206],["golfpiste.com",797408397],["hardelli.com",285354543],["kalamies.com",572546965],["kodinkoneopas.com",2049655626],["koeajolle.com",775427660],["kohokohta.com",2112752657],["muropaketti.com",125908912],["nettiauto.com",1509517255],["www.nettimarkkina.com",1356281272],["pienimatkaopas.com",283585278],["pirkkalainen.com",1293287482],["sportti.com",550109178],["terveydenasialla.com",795133413],["twitter.com",2010533320],["aamulehti.fi",[1155734955,2053124212]],["jamsanseutu.fi",2053124212],["janakkalansanomat.fi",2053124212],["kankaanpaanseutu.fi",2053124212],["kmvlehti.fi",2053124212],["merikarvialehti.fi",2053124212],["nokianuutiset.fi",2053124212],["rannikkoseutu.fi",2053124212],["satakunnankansa.fi",2053124212],["suurkeuruu.fi",2053124212],["sydansatakunta.fi",2053124212],["tyrvaansanomat.fi",2053124212],["valkeakoskensanomat.fi",2053124212],["alfatvuutiset.fi",1376480657],["alibi.fi",618271287],["anna.fi",1855548441],["apteekkari.fi",1394037818],["arvopaperi.fi",[2094116650,1043715809]],["uusisuomi.fi",1043715809],["auto1.fi",653942659],["autobild.fi",517956136],["avplus.fi",19359020],["blogbook.fi",957586002],["como.fi",[1753869143,1840803243]],["episodi.fi",[1753869143,1840803243]],["fum.fi",[1753869143,1840803243]],["inferno.fi",[1753869143,1840803243]],["kaaoszine.fi",1753869143],["rumba.fi",[1753869143,1840803243]],["soundi.fi",[1753869143,1840803243]],["tilt.fi",[1753869143,1840803243]]]);

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
