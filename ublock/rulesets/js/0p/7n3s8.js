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
*/

/* jshint esversion:11 */

'use strict';

/******************************************************************************/

/// name css-specific

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// pol-2

const argsMap = new Map([[1993276133,{"a":"#aside,#donut,#campagnard"}],[446981727,{"a":"body > #app ~ script + noscript + div[class]:not([id])"}],[1306034249,{"a":"body > div ~ footer ~ script + script + div[class]:not([id]):last-of-type"}],[16349530,{"a":"a[data-gtm-player-bar=\"guest_web_desktop\"]"}],[883008057,{"a":"body > .content ~ iframe + div[class]:not([id]),\nbody > .content ~ script[async] + div[class]:not([id])"}],[425594168,{"a":".sc-15qxer4-0"}],[1834037706,{"a":".main_right > .section:nth-of-type(6) > .title"}],[1412264718,{"a":"div > .adsbygoogle,.adblock_text,.adblock_bg"}],[1377287733,{"a":"#block"}],[1991280095,{"a":".text-center.alert-danger.alert"}],[1447552180,{"a":"#popup-adblock-bottom"}],[257100295,{"a":"#abpnotzw"}]]);

const hostnamesMap = new Map([["waznygry.pl",1993276133],["ksiazki.wp.pl",446981727],["magazyn.wp.pl",1306034249],["pilot.wp.pl",16349530],["sportowefakty.wp.pl",883008057],["tv.wp.pl",425594168],["z4y.pl",1834037706],["zadanie.pl",1412264718],["zamow-reklame.pl",1377287733],["zmiksowani.pl",1991280095],["zrabatowani.pl",1447552180],["zw.pl",257100295]]);

/******************************************************************************/

let hn;
try { hn = document.location.hostname; } catch(ex) { }
const styles = [];
while ( hn ) {
    if ( hostnamesMap.has(hn) ) {
        let argsHashes = hostnamesMap.get(hn);
        if ( typeof argsHashes === 'number' ) { argsHashes = [ argsHashes ]; }
        for ( const argsHash of argsHashes ) {
            const details = argsMap.get(argsHash);
            if ( details.n && details.n.includes(hn) ) { continue; }
            styles.push(details.a);
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

if ( styles.length === 0 ) { return; }

try {
    const sheet = new CSSStyleSheet();
    sheet.replace(`@layer{${styles.join(',')}{display:none!important;}}`);
    document.adoptedStyleSheets = [
        ...document.adoptedStyleSheets,
        sheet
    ];
} catch(ex) {
}

/******************************************************************************/

argsMap.clear();
hostnamesMap.clear();

/******************************************************************************/

})();

/******************************************************************************/
