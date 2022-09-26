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

// tur-0

const argsMap = new Map([[2094540138,{"a":["document.addEventListener","/abisuq/"]}],[1348373211,{"a":["$","adblock"]}],[1708001739,{"a":["addEventListener","adblock"]}],[1974756691,{"a":["jQuery","adblock"]}],[306271411,{"a":["$","!document.getElementById(btoa"]}],[432898315,{"a":["document.createElement","adblock"]}],[1221584794,{"a":["EventTarget.prototype.addEventListener","arlinablock"]}],[558069559,{"a":["jQuery","ai_front"]}],[2044574090,{"a":["document.getElementById","/xx|block/"]}],[838100385,{"a":["EventTarget.prototype.addEventListener","ad_killer"]}],[1405555376,{"a":["BlockerBanner","kontrol"]}],[1710137085,{"a":["onload","onclick"]}],[2084883477,{"a":["document.onclick","window.open"]}],[1165626748,{"a":["$","#myModal"]}],[1979449694,{"a":["document.onclick","popunder"]}],[1850287484,{"a":["loadBrands"]}],[964119853,{"a":["EventTarget.prototype.addEventListener","prestitial-ads"]}],[1211583093,{"a":["sessionStorage.getItem","reklam"]}],[1374441781,{"a":["$","/ads/"]}]]);

const hostnamesMap = new Map([["azsekerlik.blogspot.com",2094540138],["cbdgummiesio.biz",2094540138],["vknsorgula.net",2094540138],["okultanitimi.net",1348373211],["asyadizileri.net",[1708001739,1405555376]],["asyadrama.com",1974756691],["otopark.com",306271411],["turkrock.com",306271411],["osxinfo.net",306271411],["hacoos.com",432898315],["kampanyatakip.blogspot.com",1221584794],["iskandinavya.com",558069559],["sk-ip.tech",2044574090],["mordefter.com",838100385],["narcovip.com",1710137085],["duslerkulup.com",2084883477],["kenttv.net",1165626748],["dizitube.net",1979449694],["ulker.com.tr",1850287484],["memurlar.net",964119853],["duzcetv.com",1211583093],["bizimyaka.com",1374441781]]);

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
