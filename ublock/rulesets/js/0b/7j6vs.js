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

// cze-0

const argsMap = new Map([[1064743549,{"a":"div[class^=\"banner_box\"]"}],[1814291653,{"a":"a[href=\"http://www.Onlinefilmy.eu\"],\na[href=\"http://www.movieportal.eu\"],\ndiv[style=\"font-size:20px; font-family:Arial Black, Arial; color:#FF0000; font-weight:bold\"]"}],[1523266434,{"a":"div[id^=\"ad\"]"}],[335789413,{"a":"div[class*=\"pohodoWidget\"]"}],[657640125,{"a":"a.predpredaj-black"}],[673885488,{"a":".h2.grad2.kupons_games"}],[728443892,{"a":".header_info_text"}],[649543493,{"a":".s-branding,\n[id^=\"banner-\"],\ndiv[style*=\"Roboto\"][style*=\"fixed\"],\nstripemark"}],[1592521304,{"a":"[id^=\"back\"][onclick]"}],[1545831936,{"a":"#footer,\n#headerSlideContent1,\n#ocko"}],[1310903754,{"a":"[id^=\"mk-branding-\"]"}],[1610064000,{"a":"#brnd"}]]);

const hostnamesMap = new Map([["behame.sk",1064743549],["best4you.sk",1814291653],["bmwklub.sk",1523266434],["cas.sk",[335789413,657640125]],["feminity.zoznam.sk",335789413],["centrum.sk",673885488],["dsl.sk",728443892],["hnonline.sk",649543493],["kinema.sk",1592521304],["sector.sk",1592521304],["michalovskespravy.sk",1545831936],["modrykonik.sk",1310903754],["mojevideo.sk",1610064000]]);

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
