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

/// name json-prune

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// swe-1

const argsMap = new Map([[1666360098,{"a":["autoplay"]}],[1417295065,{"a":["autoplay players.*.ga acl.ads players.*.autoplay"]}],[1737334504,{"a":["payload.ads campaigns.*"]}]]);

const hostnamesMap = new Map([["affarsliv.com",1666360098],["alekuriren.se",1666360098],["allas.se",1666360098],["arvikanyheter.se",1666360098],["baaam.se",1666360098],["babyhjalp.se",1666360098],["barometern.se",1666360098],["blt.se",1666360098],["borasdly.se",1666360098],["bt.se",1666360098],["byrum.se",1666360098],["cafe.se",1666360098],["corren.se",1666360098],["dalslanningen.se",1666360098],["ekuriren.se",1666360098],["elle.se",1666360098],["eposten.se",1666360098],["expressen.se",1666360098],["familjeliv.se",1666360098],["femina.se",1666360098],["filipstadstidning.se",1666360098],["folkbladet.nu",1666360098],["folkbladet.se",1666360098],["fragbite.se",1666360098],["frida.se",1666360098],["fryksdalsbygden.se",1666360098],["golfing.se",1666360098],["goteborgdirekt.se",1666360098],["gotlandjustnu.se",1666360098],["hant.se",1666360098],["helagotland.se",1666360098],["hjotidning.se",1666360098],["ibnytt.se",1666360098],["idrottensaffarer.se",1666360098],["kalmarposten.se",1666360098],["kindaposten.se",1666360098],["kingmagazine.se",1666360098],["kkuriren.se",1666360098],["klt.nu",1666360098],["kristianstadsbladet.se",1666360098],["kt-kuriren.se",1666360098],["kt.se",1666360098],["kuriren.nu",1666360098],["lokalti.se",1666360098],["lokaltidningen.nu",1666360098],["mabra.com",1666360098],["mariestadstidningen.se",1666360098],["mellanbygden.nu",1666360098],["meraosterlen.se",1666360098],["mestmotor.se",1666360098],["mitti.se",1666360098],["motherhood.se",1666360098],["mvt.se",1666360098],["nkp.se",1666360098],["nlt.se",1666360098],["nordsverige.se",1666360098],["norrahalland.se",1666360098],["norran.se",1666360098],["norrbottensaffarer.se",1666360098],["nsd.se",1666360098],["nsk.se",1666360098],["nt.se",1666360098],["nwt.se",1666360098],["nyheter24.se",1666360098],["olandsbladet.se",1666360098],["praktisktbatagande.se",1666360098],["provinstidningen.se",1666360098],["pt.se",1666360098],["realtid.se",1666360098],["recept.se",1666360098],["residencemagazine.se",1666360098],["saffletidningen.se",1666360098],["skd.se",1666360098],["sla.se",1666360098],["smp.se",1666360098],["sn.se",1666360098],["strengnastidning.se",1666360098],["svenskanamn.se",1666360098],["svenskdam.se",1666360098],["svenskgolf.se",1666360098],["sverigespringer.se",1666360098],["sydostran.se",1666360098],["thelocal.se",1666360098],["trelleborgsallehanda.se",1666360098],["unt.se",1666360098],["ut.se",1666360098],["varmlandsaffarer.se",1666360098],["vasterastidning.se",1666360098],["vasterbottningen.se",1666360098],["vaxjobladet.se",1666360098],["vf.se",1666360098],["viivilla.se",1666360098],["vimmerbytidning.se",1666360098],["vk.se",1666360098],["vt.se",1666360098],["vxonews.se",1666360098],["youplay.se",1666360098],["ystadsallehanda.se",1666360098],["alingsastidning.se",1417295065],["bohuslaningen.se",1417295065],["gp.se",1417295065],["hallandsposten.se",1417295065],["hn.se",1417295065],["kungalvsposten.se",1417295065],["kungsbackaposten.se",1417295065],["lokaltidningensto.se",1417295065],["lwcdn.com",1417295065],["molndalsposten.se",1417295065],["partilletidning.se",1417295065],["stromstadstidning.se",1417295065],["sttidningen.se",1417295065],["ttela.se",1417295065],["matspar.se",1737334504]]);

/******************************************************************************/

//  https://github.com/uBlockOrigin/uBlock-issues/issues/1545
//  - Add support for "remove everything if needle matches" case

const scriptlet = (
    rawPrunePaths = '',
    rawNeedlePaths = ''
) => {
    const prunePaths = rawPrunePaths !== ''
        ? rawPrunePaths.split(/ +/)
        : [];
    let needlePaths;
    if ( prunePaths.length === 0 ) { return; }
    needlePaths = prunePaths.length !== 0 && rawNeedlePaths !== ''
        ? rawNeedlePaths.split(/ +/)
        : [];
    const findOwner = function(root, path, prune = false) {
        let owner = root;
        let chain = path;
        for (;;) {
            if ( typeof owner !== 'object' || owner === null  ) {
                return false;
            }
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                if ( prune === false ) {
                    return owner.hasOwnProperty(chain);
                }
                if ( chain === '*' ) {
                    for ( const key in owner ) {
                        if ( owner.hasOwnProperty(key) === false ) { continue; }
                        delete owner[key];
                    }
                } else if ( owner.hasOwnProperty(chain) ) {
                    delete owner[chain];
                }
                return true;
            }
            const prop = chain.slice(0, pos);
            if (
                prop === '[]' && Array.isArray(owner) ||
                prop === '*' && owner instanceof Object
            ) {
                const next = chain.slice(pos + 1);
                let found = false;
                for ( const key of Object.keys(owner) ) {
                    found = findOwner(owner[key], next, prune) || found;
                }
                return found;
            }
            if ( owner.hasOwnProperty(prop) === false ) { return false; }
            owner = owner[prop];
            chain = chain.slice(pos + 1);
        }
    };
    const mustProcess = function(root) {
        for ( const needlePath of needlePaths ) {
            if ( findOwner(root, needlePath) === false ) {
                return false;
            }
        }
        return true;
    };
    const pruner = function(o) {
        if ( mustProcess(o) === false ) { return o; }
        for ( const path of prunePaths ) {
            findOwner(o, path, true);
        }
        return o;
    };
    JSON.parse = new Proxy(JSON.parse, {
        apply: function() {
            return pruner(Reflect.apply(...arguments));
        },
    });
    Response.prototype.json = new Proxy(Response.prototype.json, {
        apply: function() {
            return Reflect.apply(...arguments).then(o => pruner(o));
        },
    });
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
