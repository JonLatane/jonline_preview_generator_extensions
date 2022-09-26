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

// bgr-0

const argsMap = new Map([[875140736,{"a":"#banner_ad","n":["bg-ikonomika.com"]}],[1233518307,{"a":"#adbody","n":["noshtuvki.burkan.info"]}],[1153499003,{"a":"#newAd","n":["olx.bg","prodavalnik.com"]}],[2027711867,{"a":"#Ads","n":["rbb.bg"]}],[1605332789,{"a":"A[href*=\"mediamall.bg\"]"}],[1556083117,{"a":"#ArticleLinkMediaMall,\n.box-right.cat-store,\nSPAN[style=\"text-decoration: underline;\"]"}],[966127550,{"a":".vip-firms"}],[1556708445,{"a":"#aukcion,\n#rowAdv,\niframe[src=\"/app/j/banner.jsp\"]"}],[784902468,{"a":"#adwbanner300x250,\n.adwiseBlock"}],[1418272526,{"a":"div[align=\"center\"]"}],[1079513965,{"a":"#adv_zone_24,\n#adv_zone_26,\n#adv_zone_top"}],[510382545,{"a":"#banerdqsno,\n#bglink"}],[952740825,{"a":".banner_new"}],[1659303592,{"a":".superbanner.text-center.hidden-xs"}],[1840675563,{"a":"#ado-vbg-slave-3"}],[1188774174,{"a":"#banner_a0_1,\n#banner_a0_2"}]]);

const hostnamesMap = new Map([["24chasa.bg",[1605332789,1556083117]],["trud.bg",1605332789],["911.bg",966127550],["abv.bg",1556708445],["as.adwise.bg",784902468],["afera.bg",1418272526],["alo.bg",1079513965],["autoclub.bg",510382545],["balkanec.bg",952740825],["banker.bg",1659303592],["bgdnes.bg",1840675563],["bgonair.bg",1188774174]]);

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
