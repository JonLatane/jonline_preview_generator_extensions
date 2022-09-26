/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

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

    The scriptlets below are meant to be injected only into a
    web page context.
*/

/* jshint esversion:11 */

'use strict';

/******************************************************************************/

/// name abort-current-script
/// alias acs
/// alias abort-current-inline-script
/// alias acis

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// swe-1

const argsMap = new Map([[707236784,{"a":["jQuery","adblockdetect"]}],[1606420460,{"a":["nwtThirdParties"]}],[363337491,{"a":["monsterinsights_frontend"]}],[74585659,{"a":["document.onkeydown","e"]}],[574325673,{"a":["document.onkeypress"]}],[624889119,{"a":["frames","oncontextmenu"]}],[1517033290,{"a":["jQuery","contextmenu"]}],[198031467,{"a":["jQuery","wizard_accordion"]}],[2016552118,{"a":["b2a"]}],[1392053154,{"a":["Di","initAds"]}],[420126090,{"a":["showConsentDlg"]}],[1109488599,{"a":["DN","initAds"]}],[588491953,{"a":["$","banner_loader"]}],[97517977,{"a":["$",".modal"]}],[863238547,{"a":["advads_passive_placements"]}],[209475982,{"a":["document.oncontextmenu"]}],[522549893,{"a":["show_msg"]}],[1954398610,{"a":["$","shuffle"]}],[1654444133,{"a":["exactmetrics_scroll_tracking_load"]}],[1877315746,{"a":["$","e.preventDefault"]}],[732119089,{"a":["setTimeout","test"]}],[705727553,{"a":["checkCampaignCookie"]}],[1259221234,{"a":["body_class_list"]}],[899591925,{"a":["animate"]}],[167090673,{"a":["Bau","preloadAds"]}]]);

const hostnamesMap = new Map([["affarsstaden.se",707236784],["arvikanyheter.se",1606420460],["dalslanningen.se",1606420460],["filipstadstidning.se",1606420460],["fryksdalsbygden.se",1606420460],["hjotidning.se",1606420460],["kt-kuriren.se",1606420460],["kt.se",1606420460],["mariestadstidningen.se",1606420460],["nkp.se",1606420460],["nlt.se",1606420460],["nwt.se",1606420460],["provinstidningen.se",1606420460],["saffletidningen.se",1606420460],["sla.se",1606420460],["varmlandsaffarer.se",1606420460],["vf.se",1606420460],["boktugg.se",363337491],["carup.se",363337491],["dinbyggare.se",363337491],["ettgottskratt.se",363337491],["humorbibeln.se",363337491],["lakartidningen.se",363337491],["matsafari.nu",363337491],["newsner.com",363337491],["sportbibeln.se",363337491],["sportpanelen.se",363337491],["trafiksakerhet.se",363337491],["villalivet.se",363337491],["zeinaskitchen.se",363337491],["byggipedia.se",[74585659,574325673,624889119,1517033290,198031467,2016552118]],["byggvarlden.se",2016552118],["cannabis.se",2016552118],["egoinas.se",2016552118],["enkelteknik.se",2016552118],["hamnen.se",2016552118],["influens.se",2016552118],["tidningen.djurskyddet.se",2016552118],["vegomagasinet.se",2016552118],["di.se",1392053154],["dinlivsstil.nu",420126090],["foretagsverige.se",420126090],["forskningsverige.se",420126090],["grillbibeln.se",420126090],["hallbarhetsverige.se",420126090],["kampenmotcancer.se",420126090],["motorbibeln.se",420126090],["tillvaxtsverige.se",420126090],["folkhalsasverige.se",420126090],["dn.se",1109488599],["evertiq.se",588491953],["fuska.se",97517977],["hejaolika.se",863238547],["husbilsplats.se",209475982],["spelhubben.se",209475982],["medibok.se",522549893],["nasdaqomxnordic.com",1954398610],["newsvoice.se",1654444133],["norpan.se",1877315746],["skrattsajten.com",1877315746],["polestarclubsweden.se",732119089],["svensktgolfforum.se",732119089],["sakochliv.se",705727553],["svenskjakt.se",1259221234],["themoviefreak.se",899591925],["www.expressen.se",167090673]]);

/******************************************************************************/

// Issues to mind before changing anything:
//  https://github.com/uBlockOrigin/uBlock-issues/issues/2154

const scriptlet = (
    target = '',
    needle = '',
    context = ''
) => {
    if ( target === '' ) { return; }
    const reRegexEscape = /[.*+?^${}()|[\]\\]/g;
    const reNeedle = (( ) => {
        if ( needle === '' ) { return /^/; }
        if ( /^\/.+\/$/.test(needle) ) {
            return new RegExp(needle.slice(1,-1));
        }
        return new RegExp(needle.replace(reRegexEscape, '\\$&'));
    })();
    const reContext = (( ) => {
        if ( context === '' ) { return; }
        if ( /^\/.+\/$/.test(context) ) {
            return new RegExp(context.slice(1,-1));
        }
        return new RegExp(context.replace(reRegexEscape, '\\$&'));
    })();
    const chain = target.split('.');
    let owner = window;
    let prop;
    for (;;) {
        prop = chain.shift();
        if ( chain.length === 0 ) { break; }
        owner = owner[prop];
        if ( owner instanceof Object === false ) { return; }
    }
    let value;
    let desc = Object.getOwnPropertyDescriptor(owner, prop);
    if (
        desc instanceof Object === false ||
        desc.get instanceof Function === false
    ) {
        value = owner[prop];
        desc = undefined;
    }
    const magic = String.fromCharCode(Date.now() % 26 + 97) +
                  Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const scriptTexts = new WeakMap();
    const getScriptText = elem => {
        let text = elem.textContent;
        if ( text.trim() !== '' ) { return text; }
        if ( scriptTexts.has(elem) ) { return scriptTexts.get(elem); }
        const [ , mime, content ] =
            /^data:([^,]*),(.+)$/.exec(elem.src.trim()) ||
            [ '', '', '' ];
        try {
            switch ( true ) {
            case mime.endsWith(';base64'):
                text = self.atob(content);
                break;
            default:
                text = self.decodeURIComponent(content);
                break;
            }
        } catch(ex) {
        }
        scriptTexts.set(elem, text);
        return text;
    };
    const validate = ( ) => {
        const e = document.currentScript;
        if ( e instanceof HTMLScriptElement === false ) { return; }
        if ( reContext !== undefined && reContext.test(e.src) === false ) {
            return;
        }
        if ( reNeedle.test(getScriptText(e)) === false ) { return; }
        throw new ReferenceError(magic);
    };
    Object.defineProperty(owner, prop, {
        get: function() {
            validate();
            return desc instanceof Object
                ? desc.get.call(owner)
                : value;
        },
        set: function(a) {
            validate();
            if ( desc instanceof Object ) {
                desc.set.call(owner, a);
            } else {
                value = a;
            }
        }
    });
    const oe = window.onerror;
    window.onerror = function(msg) {
        if ( typeof msg === 'string' && msg.includes(magic) ) {
            return true;
        }
        if ( oe instanceof Function ) {
            return oe.apply(this, arguments);
        }
    }.bind();
};

/******************************************************************************/

let hn;
try { hn = document.location.hostname; } catch(ex) { }
while ( hn ) {
    if ( hostnamesMap.has(hn) ) {
        let argsHashes = hostnamesMap.get(hn);
        if ( typeof argsHashes === 'number' ) { argsHashes = [ argsHashes ]; }
        for ( const argsHash of argsHashes ) {
            const details = argsMap.get(argsHash);
            if ( details.n && details.n.includes(hn) ) { continue; }
            try { scriptlet(...details.a); } catch(ex) {}
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

/******************************************************************************/

argsMap.clear();
hostnamesMap.clear();

/******************************************************************************/

})();

/******************************************************************************/
