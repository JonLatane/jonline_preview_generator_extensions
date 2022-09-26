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

/// name abort-on-property-write
/// alias aopw

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// rus-0

const argsMap = new Map([[1683161738,{"a":["ai_front"]}],[209475982,{"a":["document.oncontextmenu"]}],[329642058,{"a":["document.ondragstart"]}],[2021114501,{"a":["document.onselectstart"]}],[1952697172,{"a":["keepAdblock"]}],[830927558,{"a":["window.yaProxy"]}],[1509561423,{"a":["adregain_wall"]}],[1345676152,{"a":["fetch"]}],[1333852402,{"a":["mailruEnabled"]}],[376103227,{"a":["__XRABStatus"]}],[357548178,{"a":["xRSrcSupport"]}]]);

const hostnamesMap = new Map([["doctorrouter.ru",1683161738],["ranobe-novels.ru",1683161738],["fssp.gov.ru",[209475982,329642058,2021114501]],["southpark.su",[209475982,329642058,2021114501]],["stroi-help.ru",[209475982,329642058,2021114501]],["turkcinema.org",[209475982,329642058,2021114501]],["gamemag.ru",1952697172],["kakprosto.ru",830927558],["meteoservice.ru",1509561423],["phys-kids.com",1345676152],["ok.ru",1333852402],["pg11.ru",[376103227,357548178]],["pg12.ru",[376103227,357548178]],["pg13.ru",[376103227,357548178]],["pg21.ru",[376103227,357548178]],["prochepetsk.ru",[376103227,357548178]],["prodzer.ru",[376103227,357548178]],["progorod33.ru",[376103227,357548178]],["progorod43.ru",[376103227,357548178]],["progorod58.ru",[376103227,357548178]],["progorod59.ru",[376103227,357548178]],["progorod62.ru",[376103227,357548178]],["progorod76.ru",[376103227,357548178]],["progorodnn.ru",[376103227,357548178]],["progorodnsk.ru",[376103227,357548178]],["progorodsamara.ru",[376103227,357548178]],["progoroduhta.ru",[376103227,357548178]],["prokazan.ru",[376103227,357548178]]]);

/******************************************************************************/

const magic =
    String.fromCharCode(Date.now() % 26 + 97) +
    Math.floor(Math.random() * 982451653 + 982451653).toString(36);

const abort = function() {
    throw new ReferenceError(magic);
};

const scriptlet = (
    prop = ''
) => {
    let owner = window;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        owner = owner[prop.slice(0, pos)];
        if ( owner instanceof Object === false ) { return; }
        prop = prop.slice(pos + 1);
    }
    delete owner[prop];
    Object.defineProperty(owner, prop, {
        set: function() {
            abort();
        }
    });
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

