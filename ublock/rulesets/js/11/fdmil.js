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

// chn-0

const argsMap = new Map([[896674540,{"a":["isAdsDisplayed","true"]}],[142181132,{"a":["_AdBlockInit","noopFunc"]}],[1121029982,{"a":["killads","true"]}],[1864566672,{"a":["fuzqingAdPlus","emptyObj"]}],[1169623493,{"a":["all520dddaaa2022aaa","undefined"]}],[2058824444,{"a":["all520dddaaa2022ccc","true"]}],[1143585180,{"a":["canRunAds","true"]}],[1350066869,{"a":["ga","noopFunc"]}],[1966302133,{"a":["google_empty_script_included","true"]}],[821638097,{"a":["adsbygoogle","noopFunc"]}],[178292461,{"a":["adblock","false"]}],[347116596,{"a":["Object.prototype.nopreroll_","true"]}],[1223176262,{"a":["ads","''"]}],[639677858,{"a":["onload","null"]}],[575163680,{"a":["NativeAd","noopFunc"]}],[976327616,{"a":["__jsadsuccess","true"]}],[561108083,{"a":["adbk","false"]}],[1741865430,{"a":["conone_lmg","noopFunc"]}],[1484281040,{"a":["Object.prototype.ad_switch","0"]}],[48360196,{"a":["dy_card_dyrun","undefined"]}],[1989970085,{"a":["poped","true"]}],[950683112,{"a":["Object.prototype._adData","emptyObj"]}],[832333777,{"a":["Object.prototype.ShouldPlayAds","0"]}],[1175309212,{"a":["adsbygoogle.loaded","true"]}],[1353189442,{"a":["MM_openBrWindow","noopFunc"]}],[366060308,{"a":["lists","undefined"]}],[504439188,{"a":["is_show","false"]}]]);

const hostnamesMap = new Map([["ekamus.info",896674540],["docsmall.com",142181132],["bigpixel.cn",1121029982],["jkpan.cc",1121029982],["koyi.pub",1864566672],["520call.me",[1169623493,2058824444]],["520cc.cc",[1169623493,2058824444]],["bde4.icu",1143585180],["mp4er.cc",[1143585180,639677858]],["mp4er.com",[1143585180,639677858]],["ebb.io",[1350066869,1966302133]],["wenxuecity.com",821638097],["lnk2.cc",178292461],["ddys.tv",347116596],["ddrk.me",347116596],["sssam.com",1223176262],["hboav.com",[639677858,561108083]],["cocomanga.com",[575163680,976327616]],["ohmanhua.com",[575163680,976327616]],["onemanhua.com",[575163680,976327616]],["baiyangzuo.xkyn.com",1741865430],["tangdoucdn.com",1484281040],["dianyingim.com",48360196],["xvideo.cc",1989970085],["m.youku.com",950683112],["v.youku.com",950683112],["iyf.tv",832333777],["myptt.cc",1175309212],["edc1014070.pixnet.net",1353189442],["m.biqiugege8.com",366060308],["69xx.one",504439188],["theporn.cc",504439188]]);

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
