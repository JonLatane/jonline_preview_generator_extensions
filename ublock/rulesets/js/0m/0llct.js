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

// tur-0

const argsMap = new Map([[316333728,{"a":["adblockmesaj"]}],[628317948,{"a":["detectAdBlock"]}],[757857408,{"a":["adsBlocked"]}],[1714634708,{"a":["rTargets"]}],[525013039,{"a":["initPu"]}],[1619715653,{"a":["initAd"]}],[1425328871,{"a":["initPop"]}],[1193103571,{"a":["oV1"]}],[1990644181,{"a":["initDizi"]}],[1082677136,{"a":["wpsite_clickable_data"]}]]);

const hostnamesMap = new Map([["hopena.net",316333728],["gsmturkey.net",316333728],["vidtekno.com",316333728],["telegramgruplari.com",628317948],["kanalmaras.com",757857408],["r10.net",1714634708],["filmgezegeni.live",525013039],["zipfilmizle.com",525013039],["bamfilmizle.com",525013039],["sinemadafilm.com",525013039],["netflixcehennemi.com",525013039],["diziizles.com",525013039],["hdizlefilmleri.com",525013039],["filmmoduu.com",525013039],["abifilmizle.org",525013039],["hdfilmhit.com",525013039],["filmla.org",525013039],["trfilm.net",525013039],["dolufilm.org",525013039],["netflix-izle.com",525013039],["turkifsaalemi.com",525013039],["indirmedenizleyin.com",525013039],["netfilmtvizle.com",525013039],["dizired1.com",525013039],["filmsezonu.com",1619715653],["fullhdfilmizleabi.com",1619715653],["hdfreeizle.com",1619715653],["erotikfilmsitesi.net",1619715653],["fullfilmcidayim.com",1619715653],["hdrealfilmizle.com",1619715653],["hdmixfilim.com",1619715653],["fullhdfilmizlepala.com",1619715653],["dizimini.com",1425328871],["filmizlehub.com",1425328871],["roketdizi.pw",1425328871],["1080hdfilmizle.com",1425328871],["shirl.club",1193103571],["altporno.xyz",1193103571],["ovpvideo.com",1193103571],["diziyou.com",1990644181],["technopat.net",1082677136]]);

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

