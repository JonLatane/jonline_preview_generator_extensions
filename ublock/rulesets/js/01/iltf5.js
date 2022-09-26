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

// spa-1

const argsMap = new Map([[435713391,{"a":["ad_nodes"]}],[1916685957,{"a":["hb_now"]}],[442584597,{"a":["gothamBatAdblock"]}],[1374680046,{"a":["adblock"]}],[757857408,{"a":["adsBlocked"]}],[1614829640,{"a":["adblockDetected"]}],[1028594952,{"a":["Bl0ckAdBl0ckCo"]}],[1585326688,{"a":["ppAdblocks"]}],[1558566299,{"a":["mMCheckAgainBlock"]}],[1338664254,{"a":["lolaop"]}],[1409974751,{"a":["adk_pdisp"]}],[1553769853,{"a":["__clientAHV"]}],[2124221906,{"a":["redirectpage"]}],[850605974,{"a":["initPopunder"]}],[566040298,{"a":["_cpp"]}],[792047374,{"a":["popurl"]}],[248496088,{"a":["zoneSett"]}],[979053174,{"a":["checkCookieClick"]}],[823806165,{"a":["_0x4e52"]}],[1829001214,{"a":["Redirecionar"]}],[322810623,{"a":["scriptwz_url"]}],[711766528,{"a":["smrtSB"]}],[1920226334,{"a":["asgPopScript"]}],[1077830321,{"a":["Object.prototype.Focm"]}],[1691883392,{"a":["smrtSP"]}],[946120038,{"a":["adbClick"]}],[1658288117,{"a":["pub"]}],[1016015671,{"a":["Pub2"]}]]);

const hostnamesMap = new Map([["tunovelaligera.com",435713391],["20minutos.es",1916685957],["daemon-hentai.com",442584597],["seriesretro.com",442584597],["comando.to",1374680046],["porno-japones.top",757857408],["tvplusgratis.com",1614829640],["hobbugs.com",1614829640],["cozinha.minhasdelicias.com",1028594952],["diariodegoias.com.br",1585326688],["outerspace.com.br",1585326688],["1f1.in",1558566299],["1i1.in",1558566299],["fiuxy2.com",1338664254],["pelispop.me",1409974751],["pelisplus.icu",1553769853],["baixartorrents.org",[2124221906,850605974]],["pctmix1.com",566040298],["aquariumgays.com",566040298],["allfeeds.live",792047374],["grantorrent.nl",248496088],["hentaistube.com",979053174],["libertinga.net",823806165],["mrpiracy.top",1829001214],["seireshd.com",322810623],["cinetux.to",[711766528,1920226334]],["holanime.com",1077830321],["pirlotv.es",1691883392],["repelisplus.vip",946120038],["descargaranimehentai.com",1658288117],["tuhentaionline.com",1016015671]]);

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

