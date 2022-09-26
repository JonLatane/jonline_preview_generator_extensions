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

/// name abort-on-property-read
/// alias aopr

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// isr-0

const argsMap = new Map([[1913209440,{"a":["btoa"]}],[43558423,{"a":["isMobileasokita"]}],[1803146211,{"a":["googletag.cmd"],"n":["mail.walla.co.il"]}],[731836192,{"a":["TextDecoder"]}],[1704921497,{"a":["mdp_deblocker"]}]]);

const hostnamesMap = new Map([["6days.walla.co.il",1913209440],["animals.walla.co.il",1913209440],["astrology.walla.co.il",1913209440],["b.walla.co.il",1913209440],["buzzit.walla.co.il",1913209440],["cars.walla.co.il",1913209440],["celebs.walla.co.il",1913209440],["e.walla.co.il",1913209440],["elections.walla.co.il",1913209440],["euro.walla.co.il",1913209440],["fashion.walla.co.il",1913209440],["finance.walla.co.il",1913209440],["food.walla.co.il",1913209440],["healthy.walla.co.il",1913209440],["home.walla.co.il",1913209440],["judaism.walla.co.il",1913209440],["kids.walla.co.il",1913209440],["mag.walla.co.il",1913209440],["movies.walla.co.il",1913209440],["mundial.walla.co.il",1913209440],["nadlan.walla.co.il",1913209440],["news.walla.co.il",1913209440],["nick.walla.co.il",1913209440],["olympics.walla.co.il",1913209440],["sports.walla.co.il",1913209440],["tags.walla.co.il",1913209440],["tech.walla.co.il",1913209440],["travel.walla.co.il",1913209440],["tv-guide.walla.co.il",1913209440],["usaelections.walla.co.il",1913209440],["viva.walla.co.il",1913209440],["vod.walla.co.il",1913209440],["weather.walla.co.il",1913209440],["www.walla.co.il",1913209440],["walla.co.il",[43558423,1803146211]],["sheee.co.il",1803146211],["inn.co.il",731836192],["jmusic.me",1704921497]]);

/******************************************************************************/

const ObjGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const ObjDefineProperty = Object.defineProperty;

const magic =
    String.fromCharCode(Date.now() % 26 + 97) +
    Math.floor(Math.random() * 982451653 + 982451653).toString(36);

const abort = function() {
    throw new ReferenceError(magic);
};

const makeProxy = function(owner, chain) {
    const pos = chain.indexOf('.');
    if ( pos === -1 ) {
        const desc = ObjGetOwnPropertyDescriptor(owner, chain);
        if ( !desc || desc.get !== abort ) {
            ObjDefineProperty(owner, chain, {
                get: abort,
                set: function(){}
            });
        }
        return;
    }

    const prop = chain.slice(0, pos);
    let v = owner[prop];
    chain = chain.slice(pos + 1);
    if ( v ) {
        makeProxy(v, chain);
        return;
    }

    const desc = ObjGetOwnPropertyDescriptor(owner, prop);
    if ( desc && desc.set !== undefined ) { return; }

    ObjDefineProperty(owner, prop, {
        get: function() { return v; },
        set: function(a) {
            v = a;
            if ( a instanceof Object ) {
                makeProxy(a, chain);
            }
        }
    });
};

const scriptlet = (
    chain = ''
) => {
    const owner = window;
    makeProxy(owner, chain);
    const oe = window.onerror;
    window.onerror = function(msg, src, line, col, error) {
        if ( typeof msg === 'string' && msg.includes(magic) ) {
            return true;
        }
        if ( oe instanceof Function ) {
            return oe(msg, src, line, col, error);
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

