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

// swe-1

const argsMap = new Map([[1238861914,{"a":[{"selector":"p","tasks":[["has-text","ANNONS FRÅN"],["upward","article"]]}]}],[1756498276,{"a":[{"selector":".sjofa-top-takeover, .sjofa-artikel-pano","tasks":[["upward","section"]]},{"selector":"section.huvudsektion","action":["style","margin-top:unset!important"],"cssable":true}]}],[603822026,{"a":[{"selector":".sp-message-open body","action":["style","overflow:unset!important;position:unset!important;"],"cssable":true}]}],[1097714231,{"a":[{"selector":".noscroll","action":["style","overflow:initial!important"],"cssable":true}]}],[1285625021,{"a":[{"selector":"body.didomi-popup-open","action":["style","overflow:unset!important"],"cssable":true}]}],[953823463,{"a":[{"selector":".slide-entry-excerpt","tasks":[["has-text",["annons:","i"]],["upward",".avia-content-slider"]]},{"selector":"a[href*=\"/annons-\"]","tasks":[["upward","article"]]}]}],[2101731129,{"a":[{"selector":".border-sponsored","tasks":[["upward","article"]]},{"selector":".overlay-label","tasks":[["has-text",["spons","i"]],["upward",".format-thumb-small"]]}]}],[438471724,{"a":[{"selector":"html, body","action":["style","overflow: auto !important;"],"cssable":true}]}],[1813535043,{"a":[{"selector":"body","action":["style","overflow:initial!important"],"cssable":true}]}],[812097263,{"a":[{"selector":".modal-open","action":["style","overflow:initial!important"],"cssable":true}]}],[874073717,{"a":[{"selector":"h2","tasks":[["has-text","Spel och dobbel"],["spath"," ~ p"]]}]}],[270997504,{"a":[{"selector":".smallNewsCategory","tasks":[["has-text",["sponsr","i"]],["upward",".smallNewsLink"]]}]}],[794784747,{"a":[{"selector":"body","action":["style","overflow-y:initial!important"],"cssable":true}]}],[1698508546,{"a":[{"selector":"[data-type=\"Sponsored\"]","tasks":[["upward","a"]]}]}],[1261054332,{"a":[{"selector":".pill","tasks":[["has-text",["spons","i"]],["upward",".grid-item, .pinned, .articleFlow-item"]]}]}],[170426547,{"a":[{"selector":".has-text-align-center","tasks":[["has-text",["samarbete med","i"]],["upward","article"]]}]}],[811362973,{"a":[{"selector":".sponsored-bar","tasks":[["upward",".ssp_divider"]]}]}],[1745309795,{"a":[{"selector":".badge","tasks":[["has-text",["annons","i"]],["upward","li"]]}]}],[1241794431,{"a":[{"selector":"html","action":["style","overflow:initial!important"],"cssable":true}]}],[1656776846,{"a":[{"selector":"body","action":["style","overflow:auto!important;"],"cssable":true}]}],[749797698,{"a":[{"selector":"#main-wrapper + div, #redux-page-container > div","tasks":[["has-text",["använder cookies","i"]]]},{"selector":"#page-container","action":["style","user-select: auto !important;"],"cssable":true},{"selector":".new-viewer-wrapper .p2hv","action":["style","pointer-events: auto !important;"],"cssable":true},{"selector":"div[data-page-no][style*=\"filter\"]","action":["style","filter: none !important; user-select: auto !important;"],"cssable":true},{"selector":"div[role=\"presentation\"] + div","tasks":[["has-text",["förhandsvisning","i"]]]}]}],[1975897156,{"a":[{"selector":".label-sponsor","tasks":[["upward",".panel"]]}]}],[969137189,{"a":[{"selector":".ad.adPanorama","action":["style","height:100px!important; position:absolute!important;"],"cssable":true},{"selector":"div[class^=\"card-info\"]","tasks":[["has-text",["spons","i"]],["upward",".card"]]}]}],[1910902288,{"a":[{"selector":".popup","action":["style","overflow: auto !important;"],"cssable":true}]}],[1033644450,{"a":[{"selector":"a[target]","tasks":[["upward",".frontlinks tr"]]}]}],[62250528,{"a":[{"selector":".category-annonssamarbete","tasks":[["upward",".g1-mosaic-item"]]}]}],[2113038049,{"a":[{"selector":".body-fixed","action":["style","position: unset !important;"],"cssable":true}]}],[1096331105,{"a":[{"selector":".qz-quiz-sponsored","tasks":[["upward",".square-item"]]}]}],[438707657,{"a":[{"selector":"em","tasks":[["has-text",["Annons|Reklam","i"]],["upward","article"]]}]}],[1481668399,{"a":[{"selector":".sponsored-notification","tasks":[["upward","[id^=\"post-\"]"]]}]}],[585796085,{"a":[{"selector":"span","tasks":[["has-text",["^i samarbete med","i"]],["upward",2]]}]}],[2135801811,{"a":[{"selector":"body > [class^=\"page-\"][style^=\"filter:\"]","action":["style","filter:none!important"],"cssable":true}]}],[1176843215,{"a":[{"selector":"a","tasks":[["has-text",["poker|casino|kasino|betting","i"]],["upward","li"]]}]}],[1480581930,{"a":[{"selector":"body","action":["style","margin-top: 0 !important;"],"cssable":true}]}],[440854463,{"a":[{"selector":".vicky-category-label","tasks":[["has-text",["spons","i"]],["upward",".carousel-caption"]]},{"selector":".vicky-video-infobox-label","tasks":[["has-text",["spons","i"]],["upward",".featurette"]]},{"selector":"div[class*=\"vicky-whitebox\"]","tasks":[["has-text",["spons","i"]],["upward","a"]]}]}],[1696490237,{"a":[{"selector":"a[href*=\"casino\"]","tasks":[["upward",".list"]]},{"selector":"span","tasks":[["has-text",["casino","i"]],["upward","li"]]}]}],[1397079261,{"a":[{"selector":"p","tasks":[["has-text","Annons"],["upward",".n2-ss-slide"]]}]}],[1126386847,{"a":[{"selector":"[data-revive-zoneid]","tasks":[["upward",".thumbnail"]]},{"selector":"a","tasks":[["has-text",["lån|casino|kasino","i"]],["upward","p"]]}]}],[1251028775,{"a":[{"selector":"#root > div:first-child","tasks":[["matches-css",{"name":"position","value":"^fixed$"}]]},{"selector":"[id*=\"_panorama\"], [id*=\"_mobil\"]","tasks":[["upward","div[display=\"block\"]"]]},{"selector":"[id*=\"_panorama\"], [id*=\"_outsider\"], [id*=\"_insider\"], [id*=\"_mobil\"]","tasks":[["upward",1]]},{"selector":"div","tasks":[["has-text","^Annons"],["upward","a"]]}]}],[2003017183,{"a":[{"selector":".loading","action":["style","opacity:1!important"],"cssable":true}]}],[1987977500,{"a":[{"selector":".holidAds","tasks":[["upward",1]]}]}],[566861348,{"a":[{"selector":"span","tasks":[["has-text","^Annons$"],["upward",1],["spath"," + .textwidget"]]}]}],[381210880,{"a":[{"selector":"#tv-schedule section","tasks":[["has-text","ANNONS"]]}]}],[885180476,{"a":[{"selector":"span[id*=\"Sponsored\"]","tasks":[["upward",".content-news"]]}]}],[870982479,{"a":[{"selector":"","tasks":[["matches-path","^/$"],["spath"," p"],["has-text","Artikeln innehåller annonslänkar"],["upward","a"]]},{"selector":"#main > div > div > div","tasks":[["has",{"selector":"h2","tasks":[["has-text",["^annons","i"]]]}]]},{"selector":"[data-ad-subtype]","tasks":[["upward",1],["matches-css",{"name":"min-height","value":"[0-9]+"}]]},{"selector":"a","tasks":[["has-text","Kommersiell text, innehåller annonslänkar"]]},{"selector":"a[href^=\"https://kampanj.\"]","tasks":[["upward",1],["spath",":not(section):not(div[class^=\"article-wrapper\"])"]]},{"selector":"aside > div","tasks":[["has",{"selector":"h2","tasks":[["has-text",["^annons","i"]]]}]]},{"selector":"img[alt=\"Stäng\"]","tasks":[["upward",2]]},{"selector":"p","tasks":[["has-text","^PRESENTERAS AV$"],["upward",1]]},{"selector":"section > div","tasks":[["has",{"selector":"h2","tasks":[["has-text",["^annons","i"]]]}]]},{"selector":"span","tasks":[["has-text",["^annons","i"]],["upward","a"]]},{"selector":"strong","tasks":[["has-text",["ANNONS","i"]],["upward","p"]]}]}],[564523698,{"a":[{"selector":".sp-message-open","action":["style","overflow:initial!important; position:unset!important;"],"cssable":true}]}],[1268994212,{"a":[{"selector":".noScroll, .noScroll body","action":["style","overflow:unset!important"],"cssable":true}]}],[465307876,{"a":[{"selector":".teaser__cat--sponsorlabel","tasks":[["upward",".teaser"]]},{"selector":"li","action":["remove",""],"tasks":[["has",{"selector":".content-label","tasks":[["has-text",["annons","i"]]]}]]}]}],[1449425695,{"a":[{"selector":"article","tasks":[["matches-css-after",{"name":"content","pseudo":"after","value":["Annonssamarbete","i"]}]]},{"selector":"div[class^=\"css-\"]","tasks":[["matches-css",{"name":"content","value":["Annons","i"]}],["upward","article"]]},{"selector":"div[class^=\"css-\"]","tasks":[["matches-css",{"name":"min-height","value":"420px|400px|320px|312px"}]]}]}],[942581531,{"a":[{"selector":".td-adspot-title-span","tasks":[["upward",1]]},{"selector":"a[href*=\"reklamsamarbete\"]","tasks":[["upward",".td_block_wrap"]]}]}],[882632626,{"a":[{"selector":".mvp-cd-cat","tasks":[["has-text",["i samarbete med","i"]],["upward",".mvp-blog-story-wrap"]]}]}],[263839834,{"a":[{"selector":".cdk-global-scrollblock","action":["style","overflow-y: initial !important; position: unset !important;"],"cssable":true}]}],[715131883,{"a":[{"selector":".advert__mark","tasks":[["upward","article"]]}]}],[705586617,{"a":[{"selector":".unslider-wrap.unslider-carousel > li","tasks":[["has",{"selector":".preamble-category","tasks":[["has-text",["^annons","i"]]]}]]}]}],[978202283,{"a":[{"selector":"a[href$=\"/sponsrat/\"]","tasks":[["upward",".newscolumn"]]}]}],[1581877585,{"a":[{"selector":"a[href*=\"/annons\"]","tasks":[["upward",".zox-art-wrap"]]}]}],[712135833,{"a":[{"selector":"a","action":["remove",""],"tasks":[["has-text",["betting|utan registrering|casino","i"]],["upward","article, .slide-item"]]}]}],[1398557831,{"a":[{"selector":".elementor-heading-title","tasks":[["has-text",["annons","i"]],["upward","section.elementor-section"],["spath"," + section"]]},{"selector":".elementor-heading-title","tasks":[["has-text",["annons","i"]],["upward","section.elementor-section"]]}]}],[1429812776,{"a":[{"selector":".text-sm","tasks":[["has-text",["annons","i"]],["upward","a"]]}]}],[53322744,{"a":[{"selector":".MediaWrapper-content","action":["style","opacity:unset!important"],"cssable":true},{"selector":"html","action":["style","--scrollbar-width:initial!important"],"cssable":true}]}],[2106455890,{"a":[{"selector":"span","tasks":[["has-text","Annons"],["upward",2]]}]}],[528656621,{"a":[{"selector":".label","tasks":[["has-text",["sponsrad","i"]],["upward","a"]]}]}],[1139402485,{"a":[{"selector":"a","tasks":[["has-text",["^annons","i"]],["upward",".section"]]}]}]]);

const hostnamesMap = new Map([["alandshandel.ax",1238861914],["sjofart.ax",1756498276],["affarsliv.com",603822026],["kuriren.nu",603822026],["corren.se",603822026],["ekuriren.se",603822026],["eposten.se",603822026],["folkbladet.se",603822026],["gotlandjustnu.se",603822026],["helagotland.se",603822026],["kindaposten.se",603822026],["kkuriren.se",603822026],["mvt.se",603822026],["norran.se",603822026],["norrbottensaffarer.se",603822026],["nsd.se",603822026],["nt.se",603822026],["pt.se",603822026],["sn.se",603822026],["strengnastidning.se",603822026],["unt.se",603822026],["vimmerbytidning.se",603822026],["vt.se",603822026],["alicestenlof.com",1097714231],["annicaenglund.se",1097714231],["ellinorlofgren.se",1097714231],["linnherbertsson.se",1097714231],["pricerunner.se",1097714231],["avestatidning.com",1285625021],["salaallehanda.com",1285625021],["atl.nu",1285625021],["st.nu",1285625021],["aktuellhallbarhet.se",[1285625021,1449425695]],["allehanda.se",1285625021],["arbetarbladet.se",1285625021],["bandypuls.se",1285625021],["bblat.se",1285625021],["borlangetidning.se",1285625021],["byggindustrin.se",[1285625021,1449425695]],["dagensmedia.se",[1285625021,1449425695]],["dagensmedicin.se",[1285625021,1449425695]],["dagenssamhalle.se",[1285625021,1449425695]],["dagligvarunytt.se",[1285625021,1449425695]],["dalademokraten.se",1285625021],["di.se",1285625021],["dn.se",1285625021],["dt.se",1285625021],["expressen.se",1285625021],["fagersta-posten.se",1285625021],["falkopingstidning.se",1285625021],["falukuriren.se",1285625021],["fastighetsnytt.se",[1285625021,1449425695]],["gd.se",1285625021],["hd.se",1285625021],["ht.se",1285625021],["jnytt.se",1285625021],["jp.se",1285625021],["ljusdalsposten.se",1285625021],["ljusnan.se",1285625021],["lt.se",1285625021],["ltz.se",1285625021],["market.se",[1285625021,1449425695]],["moratidning.se",1285625021],["na.se",1285625021],["norrteljetidning.se",1285625021],["nynashamnsposten.se",1285625021],["op.se",1285625021],["resume.se",[1285625021,1449425695]],["skaraborgslanstidning.se",1285625021],["skd.se",1285625021],["skovdenyheter.se",1285625021],["smalandsdagblad.se",1285625021],["smalanningen.se",1285625021],["smt.se",1285625021],["soderhamnskuriren.se",1285625021],["sydsvenskan.se",1285625021],["tidningenangermanland.se",1285625021],["tidningenharjedalen.se",1285625021],["tranastidning.se",1285625021],["vastgotabladet.se",1285625021],["vetlandaposten.se",1285625021],["vlt.se",1285625021],["vn.se",1285625021],["bandyfeber.com",953823463],["borsvarlden.com",2101731129],["bytbil.com",438471724],["cgi.com",1813535043],["mabra.com",[1813535043,1698508546]],["bulletin.nu",1813535043],["aftonbladet.se",[1813535043,870982479]],["allas.se",[1813535043,1698508546]],["baaam.se",[1813535043,1698508546]],["elle.se",[1813535043,1698508546]],["femina.se",[1813535043,1698508546]],["fof.se",1813535043],["frida.se",[1813535043,1698508546]],["hant.se",[1813535043,1698508546]],["inredningsarkitektur.se",1813535043],["kollega.se",1813535043],["lchfarkivet.se",1813535043],["motherhood.se",[1813535043,1698508546]],["residencemagazine.se",[1813535043,1698508546]],["svenskdam.se",[1813535043,1698508546]],["entreprenad.com",812097263],["bicycling.se",812097263],["cleannet.se",812097263],["dagenshandel.se",812097263],["food-supply.se",812097263],["foodnet.se",812097263],["fri-kopenskap.se",812097263],["habit.se",812097263],["kemivarldenbiotech.se",812097263],["lifesciencesweden.se",812097263],["medtechmagazine.se",812097263],["motormagasinet.se",812097263],["packnet.se",812097263],["plastnet.se",812097263],["processnet.se",812097263],["recyclingnet.se",812097263],["rt-forum.se",812097263],["runnersworld.se",812097263],["skyddosakerhet.se",812097263],["transportnet.se",812097263],["uochd.se",812097263],["verkstaderna.se",812097263],["woodnet.se",812097263],["fotbollsresultat.com",874073717],["fotbolltransfers.com",270997504],["goteborg.com",794784747],["macradion.com",1261054332],["teknikveckan.se",1261054332],["majanilssonlindelof.com",170426547],["newsner.com",811362973],["ettgottskratt.se",811362973],["humorbibeln.se",811362973],["sportbibeln.se",811362973],["nouw.com",1745309795],["nytt.com",1241794431],["petenkoiratarvike.com",1656776846],["mustijamirri.fi",1656776846],["animail.se",1656776846],["arkenzoo.se",1656776846],["vetzoo.se",1656776846],["studocu.com",749797698],["svampguiden.com",1975897156],["sweclockers.com",969137189],["tasteline.com",1910902288],["varmepumpsforum.com",1033644450],["veckorevyn.com",62250528],["airam.fi",2113038049],["kwiss.me",1096331105],["paulas.me",438707657],["gynning.net",1481668399],["sannalundell.se",1481668399],["vovve.net",585796085],["icscards.nl",2135801811],["byggkontakt.nu",1176843215],["dagenskalmar.nu",1480581930],["dagenshultsfred.se",1480581930],["dagensvastervik.se",1480581930],["dagensvimmerby.se",1480581930],["dinlivsstil.nu",440854463],["foretagsverige.se",440854463],["forskningsverige.se",440854463],["grillbibeln.se",440854463],["hallbarhetsverige.se",440854463],["kampenmotcancer.se",440854463],["motorbibeln.se",440854463],["tillvaxtsverige.se",440854463],["fuska.nu",1696490237],["gmfk.nu",1397079261],["kalmar.nu",1126386847],["fl-net.se",1126386847],["klt.nu",1251028775],["barometern.se",1251028775],["blt.se",1251028775],["borasdly.se",1251028775],["bt.se",1251028775],["kalmarposten.se",1251028775],["kristianstadsbladet.se",1251028775],["meraosterlen.se",1251028775],["nsk.se",1251028775],["olandsbladet.se",1251028775],["smp.se",1251028775],["sydostran.se",1251028775],["trelleborgsallehanda.se",1251028775],["ut.se",1251028775],["vaxjobladet.se",1251028775],["vxonews.se",1251028775],["ystadsallehanda.se",1251028775],["matochpyssel.nu",2003017183],["temperatur.nu",1987977500],["tidningen.nu",566861348],["tv.nu",381210880],["voodoofilm.org",885180476],["www.aftonbladet.se",564523698],["aktivtraning.se",[1268994212,465307876]],["digitalfotoforalla.se",[1268994212,465307876]],["iform.se",[1268994212,465307876]],["illvet.se",1268994212],["militarhistoria.se",[1268994212,465307876]],["pctidningen.se",[1268994212,465307876]],["popularhistoria.se",[1268994212,465307876]],["viivilla.se",1268994212],["vinbanken.se",1268994212],["aktuellsakerhet.se",942581531],["aktuelltfokus.se",882632626],["alkompis.se",263839834],["allabolag.se",715131883],["alltforforaldrar.se",705586617],["alltomburgare.se",978202283],["alltomelbil.se",1581877585],["alltomhif.se",712135833],["alltomnorrtalje.se",1398557831],["arbetaren.se",1429812776],["arkitekten.se",53322744],["aurumforum.se",2106455890],["autonytt.se",528656621],["avanza.se",1139402485]]);

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
