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

const argsMap = new Map([[1017424598,{"a":"#custom_html-3,\n.ad"}],[1530141700,{"a":"#news-right-2,\n#news-right-4,\n#news-right-5,\n#webover_pc_banner,\n.banner_intro,\n.banner_wrapper.pc_only,\n.left_fixed,\n.pc_only > a > img,\n.pc_only > iframe,\n.pc_only[style],\n.right_fixed,\n.top-bigBanner"}],[891737011,{"a":"#fpub-popup,\n.news_block > .desktop,\n.rek_section"}],[208316726,{"a":".wpb_wrapper > a > img"}],[2016057197,{"a":".td_block_template_1 > div > img"}],[402323842,{"a":".heateor_sss_sharing_container"}],[1881362870,{"a":"#text-html-widget-64 > .widget-container,\n.e3lan-post"}],[1363575817,{"a":".biscotto-container"}],[1790655083,{"a":".jnews_popup_post_container"}]]);

const hostnamesMap = new Map([["newsport.al",1017424598],["noa.al",1530141700],["opinion.al",891737011],["politiko.al",208316726],["rd.al",2016057197],["kohajone.com",2016057197],["reporter.al",402323842],["rtsh.al",1881362870],["dyqani.shpresa.al",1363575817],["standard.al",1790655083]]);

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
