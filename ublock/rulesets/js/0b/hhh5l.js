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

/// name no-setTimeout-if
/// alias nostif

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// chn-0

const argsMap = new Map([[1153984231,{"a":["ins.adsbygoogle"]}],[894074332,{"a":["_0x"]}],[872433088,{"a":["loadErrorTip"]}],[1374680046,{"a":["adblock"]}],[443821547,{"a":["发现严重BUG"]}],[1010716385,{"a":["checker"]}],[1127479958,{"a":["/home/?adblock="]}],[191570076,{"a":["ad_load_fail"]}],[607462038,{"a":["ad_num_show"]}],[427110750,{"a":["killads.offsetHeight === 0"]}],[1105813532,{"a":["adsbygoogle"]}],[675585770,{"a":["ad_ids"]}],[1865494034,{"a":["checkSiteNormalLoad"]}],[1991982723,{"a":["/ad block stop|warm_msg/"]}],[1583105429,{"a":["location.href","3000"]}],[1760208670,{"a":["/document\\.getElementById[\\s\\S]*?\\.style\\.display\\.indexOf/"]}]]);

const hostnamesMap = new Map([["ekamus.info",1153984231],["logi.im",1153984231],["moeci.com",894074332],["itdog.cn",894074332],["cocomanga.com",[872433088,1865494034]],["tingfm.com",1374680046],["233tw.com",443821547],["ruanyifeng.com",1010716385],["tsubasa.im",1127479958],["zhenbuka3.com",191570076],["zhenbuka2.com",191570076],["bukaivip.com",191570076],["league-funny.com",607462038],["blog.reh.tw",427110750],["haoweichi.com",1105813532],["zhenbuka.com",675585770],["ohmanhua.com",1865494034],["onemanhua.com",1865494034],["5278.cc",1991982723],["hboav.com",1991982723],["520cc.cc",1583105429],["nfmovies.com",1760208670]]);

/******************************************************************************/

const scriptlet = (
    needle = '',
    delay = '',
    
) => {
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    if ( needle.startsWith('/') && needle.endsWith('/') ) {
        needle = needle.slice(1,-1);
    } else if ( needle !== '' ) {
        needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const reNeedle = new RegExp(needle);
    const regexpTest = RegExp.prototype.test;
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = String(args[0]);
            const b = args[1];
            let defuse;
            if ( needle !== '' ) {
                defuse = regexpTest.call(reNeedle, a) !== needleNot;
            }
            if ( defuse !== false && delay !== undefined ) {
                defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
            }
            if ( defuse ) {
                args[0] = function(){};
            }
            return target.apply(thisArg, args);
        }
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

