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

// vie-1

const argsMap = new Map([[1522864298,{"a":["$","urlAdsMbIntro"]}],[1978038589,{"a":["onload","puURL"]}],[797105769,{"a":["$","overlay"]}],[1141582833,{"a":["setTimeout","overlay"]}],[1574499160,{"a":["JSON.parse","break;case $."]}],[297657316,{"a":["$","homeModal"]}],[1657070701,{"a":["navigator","devtoolsDetector"]}],[436943557,{"a":["document.createElement",";break;case"]}],[1348191140,{"a":["setTimeout","mangAd"]}],[1363415351,{"a":["encodeURIComponent","popunder"]}],[423061180,{"a":["jQuery","popurl"]}],[943228676,{"a":["jQuery","window.open"]}],[973756323,{"a":["i6H","Math"]}],[743813265,{"a":["$","youtube-modal"]}],[1130638423,{"a":["document.querySelectorAll","popMagic"]}],[1604515682,{"a":["navigator","SmartPopunder"]}],[1897090987,{"a":["$","window.open"]}],[692781793,{"a":["parseInt","break;case $."]}],[768804103,{"a":["$","btpop"]}],[242128853,{"a":["jQuery","popup"]}],[1372942791,{"a":["document.write","snow"]}],[879233940,{"a":["setTimeout","window.location"]}]]);

const hostnamesMap = new Map([["2phimmoi.net",1522864298],["360thethao.net",1978038589],["90phut6.live",[797105769,1141582833]],["downloadsachmienphi.com",1574499160],["khophimhd.net",1574499160],["tvhay.top",1574499160],["gametv.vn",297657316],["gotphim.com",1657070701],["hh3dhay.com",436943557],["hh3dhay.xyz",436943557],["linkneverdie.net",1348191140],["nguontv.org",1363415351],["phimgif.tv",423061180],["ophimhd.net",423061180],["phimraphot.net",423061180],["phimhays.com",943228676],["phimlau.online",973756323],["plus.gtv.vn",743813265],["rphangx.com",1130638423],["mrcong.com",1130638423],["tapmoi.net",1604515682],["tinsoikeo.io",1897090987],["truyen2u.net",692781793],["truyentranhtuan.com",768804103],["vebo2.tv",242128853],["vungoctuan.vn",1372942791],["xnxx-sex-videos.com",879233940]]);

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
