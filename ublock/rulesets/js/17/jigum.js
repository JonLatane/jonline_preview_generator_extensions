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

const argsMap = new Map([[1055317171,{"a":[{"selector":".owl-item","tasks":[["has",{"selector":".portal__commercial"}]]},{"selector":"body.home #section-0 article:nth-child(1), body.category #om_commercialpostlisting-1 article:nth-child(1)","action":["style","margin-bottom: unset !important;"],"cssable":true}]}],[232857140,{"a":[{"selector":".m-contentListItemThumb","tasks":[["has",{"selector":" > div > div > div[class^=\"undefined\"]"}]]},{"selector":".m-managedListing__column","tasks":[["has",{"selector":" > div > div > div > div[class^=\"undefined\"]"}]]},{"selector":".media-site__widget-container","tasks":[["has",{"selector":"* .media-widget__title","tasks":[["has-text","Kaupallinen yhteistyö"]]}]]},{"selector":"aside.sidebar__column-container","tasks":[["has",{"selector":".-ad"}]]}]}],[896708797,{"a":[{"selector":".etusivu-mainos","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"[href^=\"https://kamera-lehti.fi\"]"}]]}]]}]}],[306553395,{"a":[{"selector":".td-pb-span6","tasks":[["has-text","Kaupallinen yhteistyö"]]}]}],[479192615,{"a":[{"selector":".herald-module","tasks":[["has",{"selector":".adsbygoogle"}]]},{"selector":".herald-module","tasks":[["has",{"selector":"[href^=\"https://revoltnoir.fi/\"]"}]]}]}],[785701288,{"a":[{"selector":".elementor-widget-divider","tasks":[["has-text","Mainos"]]},{"selector":".strike","tasks":[["has-text","Mainos"]]}]}],[463092654,{"a":[{"selector":".breaking-news-container","action":["style","display: flex !important"],"tasks":[["not",{"selector":"","tasks":[["has-text","mainos:"]]}]]},{"selector":".breaking-news-container","tasks":[["has-text","mainos:"]]},{"selector":".card-container","tasks":[["has-text","Mainos alkaa"]]},{"selector":"a[href*=\"undefined\"]","tasks":[["has",{"selector":"[alt=\"undefined\"]"}]]}]}],[1711455810,{"a":[{"selector":"#coral-talk + div[class]","tasks":[["has",{"selector":"a[href^=\"https://www.kauppalehti.fi/kumppanisisallot/\"]"}]]},{"selector":"div[class][width]","tasks":[["has",{"selector":" > .ad"}]]},{"selector":"main","tasks":[["not",{"selector":" > h2","tasks":[["has-text","Kumppanisisältöä"]]}],["spath"," [class][data-test] ~ div[class]"],["has",{"selector":" > a[href^=\"https://www.kauppalehti.fi/kumppanisisallot/\"]"}]]},{"selector":"main","tasks":[["not",{"selector":" > h2","tasks":[["has-text","Kumppanisisältöä"]]}],["spath"," a[href^=\"https://www.kauppalehti.fi/kumppanisisallot/\"][target=\"_self\"]"]]}]}],[242520611,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > .lazyload-wrapper > .etua-react-embed"}]]}]}],[1091742339,{"a":[{"selector":".col-xs-12.col-sm-6.col-md-12","tasks":[["has-text","mainosartikkelit"]]}]}],[896951760,{"a":[{"selector":"[class|=\"wp-block-ultimate-post-post-list\"]","tasks":[["has",{"selector":".ultp-cat-mainos"}]]}]}],[1455618141,{"a":[{"selector":".featuredpost","tasks":[["has",{"selector":".gb-post-grid-section-title","tasks":[["has-text","Kaupallinen yhteistyö"]]}]]}]}],[2116457084,{"a":[{"selector":".wp-block-image","tasks":[["has-text","mainos"]]}]}],[358898702,{"a":[{"selector":".ai-attributes","tasks":[["has-text","Mainos"]]},{"selector":"p","tasks":[["has",{"selector":"[alt^=\"undefined\"]"}]]}]}],[961815473,{"a":[{"selector":".layout__article-area__text-content > p","tasks":[["has-text","^\\xA0$"]]}]}],[1174249696,{"a":[{"selector":".row .col-small-12.col-medium-12.col-large-12","tasks":[["has-text","Mainos:"]]}]}],[1713752762,{"a":[{"selector":".article-card-grid li:has(div[id^=dfp__]:not([id^=dfp__desk-1_1]))","action":["remove",""]},{"selector":".wp-block-otavamedia-section-management li","tasks":[["has",{"selector":"[id^=\"undefined\"]"}]]}]}],[1756484327,{"a":[{"selector":"div[class=\" \"] > .rendered_board_widget","tasks":[["has",{"selector":".kotimaa-adform-widget"}]]}]}],[628708118,{"a":[{"selector":".g","tasks":[["has",{"selector":".gofollow"}]]}]}],[496424571,{"a":[{"selector":".wpb_wrapper.wpb_text_column.td_block_wrap","tasks":[["has",{"selector":"[auto-grid-data*=\"mainos\"]"}]]}]}],[1717958645,{"a":[{"selector":".wpb_wrapper.wpb_text_column.td_block_wrap","tasks":[["has",{"selector":"[auto-grid-data*=\"undefined\"]"}]]}]}],[1230679652,{"a":[{"selector":"div[class=\"m-contentListItemThumb -ctx-frontpage-now -level-1\"]","tasks":[["has",{"selector":" > div > div > [class^=\"undefined\"]"}]]},{"selector":"div[class=\"m-managedListing__column -ctx-index -level-1 -cols-2\"]","tasks":[["has",{"selector":" > div > div > div > div[class^=\"undefined\"]"}]]}]}],[523845901,{"a":[{"selector":".fullwidth-banner","tasks":[["has",{"selector":" > a[href=\"https://www.lauttakyla.fi/tilaa/\"]"}]]}]}],[2049571448,{"a":[{"selector":"[id|=\"undefined\"]","tasks":[["has",{"selector":".mainos"}]]}]}],[904832352,{"a":[{"selector":".article-block__list-article","tasks":[["has",{"selector":"a[href^=\"https://ls24.fi/kaupallinen-yhteistyo/\"]"}]]},{"selector":".article-list--article","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":".js-article-block","tasks":[["has",{"selector":"span[class$=\"undefined\"]"}],["spath"," + .article-blocks-2022-divider"]]},{"selector":".js-article-block","tasks":[["has",{"selector":"span[class$=\"undefined\"]"}]]},{"selector":"article[class].article-block","tasks":[["has",{"selector":"a[href^=\"https://ls24.fi/kaupallinen-yhteistyo/\"]"}]]},{"selector":"section[class=\"page-section page-section--no-main-article\"]","tasks":[["has-text","Kaupallinen yhteistyö"]]}]}],[783759669,{"a":[{"selector":"div.row","tasks":[["not",{"selector":"","tasks":[["has",{"selector":"article"}]]}],["has",{"selector":"[src=\"//s1.adform.net/banners/scripts/adx.js\"]"}]]}]}],[1636869012,{"a":[{"selector":"div[class^=\"undefined\"]","tasks":[["has",{"selector":"div[class^=\"undefined\"]"}]]}]}],[142234967,{"a":[{"selector":"div#skyscraper-height-div > aside > a[href^=\"https://studio.marmai.fi/\"]","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"div#skyscraper-height-div > div > aside > a[href^=\"https://studio.marmai.fi/\"]","tasks":[["has-text","Kaupallinen yhteistyö"]]},{"selector":"div#skyscraper-height-div > div > section > div > div > div","tasks":[["has-text","Kaupallinen yhteistyö"]]}]}],[1256052491,{"a":[{"selector":".widget_block","tasks":[["has",{"selector":".matka-nostemedia-oikeapalsta"}]]}]}],[1916340785,{"a":[{"selector":".wp-block-column","tasks":[["has",{"selector":"aside figure > a[href=\"https://www.hopealanka.fi\"]"}]]}]}],[1937529751,{"a":[{"selector":"body","tasks":[["not",{"selector":"#skyscraper-height-div > div > div","tasks":[["has-text","Kumppanisisältöä"]]}],["spath"," section > a[href^=\"https://www.mediuutiset.fi/kumppanisisallot\"]"]]},{"selector":"body:not(.is-style-kumppanisisallot)","tasks":[["not",{"selector":"#skyscraper-height-div > div > div","tasks":[["has-text","Kumppanisisältöä"]]}],["spath"," div[class]"],["has",{"selector":" > a[href^=\"https://www.mediuutiset.fi/kumppanisisallot/\"]:not(a[class^=\"undefined\"])"}]]},{"selector":"div[class]","tasks":[["has",{"selector":" > a[href=\"/kumppanisisaltoa\"]"}]]},{"selector":"div[width]","tasks":[["has",{"selector":"[id|=\"almad\"]:not([id|=\"almad-mobileParade\"])"}]]}]}],[1731031972,{"a":[{"selector":"div[class^=\"undefined\"][class*=\"undefined\"]","tasks":[["has-text","MAINOS"]]}]}],[2042384988,{"a":[{"selector":"div[class]","tasks":[["has",{"selector":" > [width] > [id|=\"almad\"]:not([id|=\"almad-mobileParade\"])"}]]},{"selector":"div[class][width]","tasks":[["has",{"selector":"[id|=\"almad-mobileParade\"]"}]]},{"selector":"div[style=\"margin-bottom:0\"]","tasks":[["has",{"selector":"a[href^=\"https://www.mikrobitti.fi/kumppanisisallot/\"]"}]]},{"selector":"section > div","tasks":[["has",{"selector":"a[href^=\"https://www.mikrobitti.fi/kumppanisisallot/\"]"}]]}]}],[1977366361,{"a":[{"selector":".commercial__content","tasks":[["has-text","Kumppanilta"]]}]}],[2056630368,{"a":[{"selector":"#headermob","action":["style","position: static !important"],"cssable":true},{"selector":"#show_merkki","action":["style","margin-top: 2em !important"],"cssable":true},{"selector":".fullarticle","tasks":[["has-text","Sponsoroitu"]]},{"selector":".fullarticle","tasks":[["has-text","src=\"https://mobiili\\.fi/aaa\\.png\""]]},{"selector":".mainbody.extended","action":["style","margin-top: 2em !important"],"cssable":true},{"selector":"div[style=\"float:left; width:100%; text-align:center; padding:0px; margin-bottom:17px;\"]","tasks":[["has-text","MAINOS"]]},{"selector":"p","tasks":[["has",{"selector":"small","tasks":[["has-text","Mainos:"]]}]]}]}],[1244284520,{"a":[{"selector":".latest-listing > .listing-items > li","tasks":[["has-text","Mainos"]]}]}],[1278973716,{"a":[{"selector":".aside.widget","tasks":[["has-text","Mainos"]]}]}],[1826354380,{"a":[{"selector":".textwidget","tasks":[["has",{"selector":".orimad-adlabel"}]]}]}],[2005694409,{"a":[{"selector":".sp-module","tasks":[["has",{"selector":".tassaWidget"}]]}]}],[944086169,{"a":[{"selector":"div.full-width-col.row","tasks":[["has",{"selector":".ad-pane"}]]}]}],[2027650038,{"a":[{"selector":"li[class=\"wa@s\"]","tasks":[["has",{"selector":"[alt^=\"MAINOS:\"]"}]]}]}],[1018753448,{"a":[{"selector":".flights.type-provider","tasks":[["has-text","Mainos"]]}]}],[2111734309,{"a":[{"selector":"div[id|=\"undefined\"]","tasks":[["has",{"selector":"img[src*=\"Calazo_Banner_\"]"}],["spath"," + .wp-block-separator"]]}]}],[125521756,{"a":[{"selector":".bg-white.w-full.py-2.px-4","tasks":[["has",{"selector":".poppartners"}]]}]}],[480524919,{"a":[{"selector":".widget_block","tasks":[["has",{"selector":"#nm-300x600-300x300"}]]}]}],[893241083,{"a":[{"selector":"article.list","tasks":[["has-text","Mainokset"]]}]}],[800893672,{"a":[{"selector":"#article-body > div[class]","tasks":[["has",{"selector":".ad-container"}]]},{"selector":"article","tasks":[["has",{"selector":"a[href=\"\"][rel=\"no-index,no-follow\"]"}]]}]}]]);

const hostnamesMap = new Map([["kaksplus.fi",1055317171],["kaleva.fi",232857140],["kamera-lehti.fi",896708797],["kangasalansanomat.fi",306553395],["kansalainen.fi",479192615],["kansantahto.fi",785701288],["karjalainen.fi",463092654],["kauppalehti.fi",[1711455810,242520611]],["talouselama.fi",242520611],["keskipohjanmaa.fi",1091742339],["kiakkoradio.fi",896951760],["kiinteistoposti.fi",1455618141],["kodinviilennys.fi",2116457084],["kokemaenjokilaakso.fi",358898702],["koneviesti.fi",[961815473,1174249696]],["maaseuduntulevaisuus.fi",[1174249696,1636869012]],["kotiliesi.fi",1713752762],["kotimaa.fi",1756484327],["kuntalehti.fi",628708118],["kuntsari.fi",496424571],["laitilansanomat.fi",1717958645],["lapinkansa.fi",1230679652],["lauttakyla.fi",523845901],["liberolehti.fi",2049571448],["ls24.fi",904832352],["lumipallo.fi",783759669],["marmai.fi",142234967],["matkabongaukset.fi",1256052491],["mediaviikko.fi",1916340785],["mediuutiset.fi",1937529751],["meillakotona.fi",1731031972],["mikrobitti.fi",2042384988],["mma.fi",1977366361],["mobiili.fi",2056630368],["mtvuutiset.fi",1244284520],["olutposti.fi",1278973716],["orimattilansanomat.fi",1826354380],["outokummunseutu.fi",2005694409],["pielisjokiseutu.fi",2005694409],["pogostansanomat.fi",2005694409],["ylakarjala.fi",2005694409],["pelaaja.fi",944086169],["pelit.fi",2027650038],["lennot.rantapallo.fi",1018753448],["retkilehti.fi",2111734309],["rumba.fi",125521756],["ruuhkavuodet.fi",480524919],["satakunnankansa.fi",893241083],["seiska.fi",800893672]]);

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
