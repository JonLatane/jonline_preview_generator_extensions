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

// jpn-1

const argsMap = new Map([[177459302,{"a":["/location\\.href|document\\./"]}],[1580677490,{"a":[".hide"]}],[2116312072,{"a":["objDef.resolve","3000"]}],[1419469328,{"a":["adsbygoogle","3000"]}],[1729339472,{"a":["opacity","2000"]}],[1230029892,{"a":["getAdCookie"]}],[225160293,{"a":["floatingAd","1000"]}],[1665526190,{"a":["affId","2000"]}]]);

const hostnamesMap = new Map([["musenboya.com",177459302],["helpsupport.blog.fc2.com",1580677490],["crefan.jp",2116312072],["ap-siken.com",[1419469328,1729339472]],["db-siken.com",[1419469328,1729339472]],["fe-siken.com",[1419469328,1729339472]],["itpassportsiken.com",[1419469328,1729339472]],["nw-siken.com",[1419469328,1729339472]],["pm-siken.com",[1419469328,1729339472]],["sc-siken.com",[1419469328,1729339472]],["sg-siken.com",[1419469328,1729339472]],["yavtube.com",1230029892],["blog.livedoor.jp",225160293],["shikaku2ch.doorblog.jp",225160293],["sexpixbox.com",1665526190]]);

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

