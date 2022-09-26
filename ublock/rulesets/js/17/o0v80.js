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

// alb-0

const argsMap = new Map([[667229270,{"a":".bannertop"}],[755348094,{"a":".g-7"}],[2146012640,{"a":".rek"}],[1772695585,{"a":".a-d_wrapper,\n.crestaPostsBox,\n.outer-banner"}],[2035305445,{"a":".stream-item-top,\ndiv.aligncenter.stream-item-inline-post.stream-item-in-post.stream-item:nth-of-type(1),\ndiv.aligncenter.stream-item-inline-post.stream-item-in-post.stream-item:nth-of-type(2),\ndiv.aligncenter.stream-item-inline-post.stream-item-in-post.stream-item:nth-of-type(3),\ndiv.aligncenter.stream-item-inline-post.stream-item-in-post.stream-item:nth-of-type(4),\ndiv.aligncenter.stream-item-inline-post.stream-item-in-post.stream-item:nth-of-type(5)"}],[1183677147,{"a":"#ad-big_rectangle,\n#ad-wide_skyscraper,\n.ad-big_leaderboard,\n.ad-medium_rectangle"}],[771610640,{"a":".bannerSection.container"}],[163247370,{"a":".active-50.gjirafa50-bf,\ndiv[id^=\"an-holder-\"]"}],[97604345,{"a":".new_header-ad-box"}]]);

const hostnamesMap = new Map([["classlifestyle.com",667229270],["ekonomiaonline.com",755348094],["epokaere.com",[2146012640,1772695585]],["gazetatribuna.com",2146012640],["fieriweb.com",2035305445],["gazetaexpress.com",1183677147],["gazetalajm.com",771610640],["gjirafa.com",163247370],["insajderi.com",97604345]]);

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
