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

/// name set-constant
/// alias set

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// swe-1

const argsMap = new Map([[831260382,{"a":["em_track_user","false"]}],[146635581,{"a":["exactmetrics_frontend","undefined"]}],[474664684,{"a":["mi_track_user","false"]}],[1744119472,{"a":["kod","undefined"]}],[454371692,{"a":["getAdblockerStatus","noopFunc"]}],[989260657,{"a":["dovideostuffAD","noopFunc"]}],[1577416337,{"a":["userStatus","undefined"]}],[288529906,{"a":["testPrebid","noopFunc"]}],[178292461,{"a":["adblock","false"]}],[166009349,{"a":["NWS.config.enableAdblockerDetection","false"]}],[1752056574,{"a":["showAds","false"]}],[116320283,{"a":["trap","noopFunc"]}],[1012071237,{"a":["MEGA_LOADING","unset"]}],[1735394841,{"a":["ispremium","trueFunc"]}],[327145400,{"a":["ai_run_scripts","noopFunc"]}],[721199150,{"a":["canShowAds","true"]}],[200107717,{"a":["detect","noopFunc"]}]]);

const hostnamesMap = new Map([["bastad.se",[831260382,146635581]],["heleneholmsif.se",[831260382,146635581]],["historiskahem.se",[831260382,146635581]],["melodifestivalklubben.se",[831260382,146635581]],["morotsliv.com",[831260382,146635581]],["newsvoice.se",[831260382,146635581]],["pppress.se",[831260382,146635581]],["thorengruppen.se",[831260382,146635581]],["trafikskola.se",[831260382,146635581]],["utslappsratt.se",[831260382,146635581]],["boktugg.se",474664684],["carup.se",474664684],["dinbyggare.se",474664684],["ettgottskratt.se",474664684],["humorbibeln.se",474664684],["lakartidningen.se",474664684],["matsafari.nu",474664684],["newsner.com",474664684],["sportbibeln.se",474664684],["sportpanelen.se",474664684],["trafiksakerhet.se",474664684],["villalivet.se",474664684],["zeinaskitchen.se",474664684],["darkside.se",1744119472],["di.se",454371692],["feber.se",[989260657,1577416337]],["tjock.se",[989260657,1577416337]],["findit.se",288529906],["fssweden.se",178292461],["fz.se",178292461],["goteborgdirekt.se",166009349],["mitti.se",166009349],["vasterastidning.se",166009349],["kamrat.com",[1752056574,116320283]],["klart.se",1012071237],["kritiker.se",1735394841],["mobilanyheter.net",327145400],["thatsup.se",721199150],["www.expressen.se",200107717]]);

/******************************************************************************/

const scriptlet = (
    chain = '',
    cValue = ''
) => {
    if ( chain === '' ) { return; }
    if ( cValue === 'undefined' ) {
        cValue = undefined;
    } else if ( cValue === 'false' ) {
        cValue = false;
    } else if ( cValue === 'true' ) {
        cValue = true;
    } else if ( cValue === 'null' ) {
        cValue = null;
    } else if ( cValue === "''" ) {
        cValue = '';
    } else if ( cValue === '[]' ) {
        cValue = [];
    } else if ( cValue === '{}' ) {
        cValue = {};
    } else if ( cValue === 'noopFunc' ) {
        cValue = function(){};
    } else if ( cValue === 'trueFunc' ) {
        cValue = function(){ return true; };
    } else if ( cValue === 'falseFunc' ) {
        cValue = function(){ return false; };
    } else if ( /^\d+$/.test(cValue) ) {
        cValue = parseFloat(cValue);
        if ( isNaN(cValue) ) { return; }
        if ( Math.abs(cValue) > 0x7FFF ) { return; }
    } else {
        return;
    }
    let aborted = false;
    const mustAbort = function(v) {
        if ( aborted ) { return true; }
        aborted =
            (v !== undefined && v !== null) &&
            (cValue !== undefined && cValue !== null) &&
            (typeof v !== typeof cValue);
        return aborted;
    };
    // https://github.com/uBlockOrigin/uBlock-issues/issues/156
    //   Support multiple trappers for the same property.
    const trapProp = function(owner, prop, configurable, handler) {
        if ( handler.init(owner[prop]) === false ) { return; }
        const odesc = Object.getOwnPropertyDescriptor(owner, prop);
        let prevGetter, prevSetter;
        if ( odesc instanceof Object ) {
            owner[prop] = cValue;
            if ( odesc.get instanceof Function ) {
                prevGetter = odesc.get;
            }
            if ( odesc.set instanceof Function ) {
                prevSetter = odesc.set;
            }
        }
        try {
            Object.defineProperty(owner, prop, {
                configurable,
                get() {
                    if ( prevGetter !== undefined ) {
                        prevGetter();
                    }
                    return handler.getter(); // cValue
                },
                set(a) {
                    if ( prevSetter !== undefined ) {
                        prevSetter(a);
                    }
                    handler.setter(a);
                }
            });
        } catch(ex) {
        }
    };
    const trapChain = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            trapProp(owner, chain, false, {
                v: undefined,
                init: function(v) {
                    if ( mustAbort(v) ) { return false; }
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return cValue;
                },
                setter: function(a) {
                    if ( mustAbort(a) === false ) { return; }
                    cValue = a;
                }
            });
            return;
        }
        const prop = chain.slice(0, pos);
        const v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v instanceof Object || typeof v === 'object' && v !== null ) {
            trapChain(v, chain);
            return;
        }
        trapProp(owner, prop, true, {
            v: undefined,
            init: function(v) {
                this.v = v;
                return true;
            },
            getter: function() {
                return this.v;
            },
            setter: function(a) {
                this.v = a;
                if ( a instanceof Object ) {
                    trapChain(a, chain);
                }
            }
        });
    };
    trapChain(window, chain);
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
