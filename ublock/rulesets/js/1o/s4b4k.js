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

// isr-0

const argsMap = new Map([[1452592487,{"a":"#BannerHeader,\n#InnerPagePirsumBox,\n#PubBoxArticles,\ndiv[style=\"display: inline;float: right;height:10px;width: 100%;margin-bottom:10px; border-bottom: 1px solid #D05A00;\"]"}],[392066454,{"a":".article-list-alt2.article-list-alt > .article-holder-homepage > .row:nth-of-type(6) > .alt,\n.banner-list,\n.post.post-alt,\n.skin-header"}],[1603443002,{"a":".gapunit,\n.srugim_top_slider"}],[382201446,{"a":"[class^=\"Banner_Wrap\"]"}],[2020253496,{"a":".banner_forums_160x600_right,\n.banner_forums_tree_300x250,\ndiv[style=\"width:990px;height:150px;margin:2px auto 4px auto\"]"}],[662312499,{"a":"#topbanner"}],[1840368818,{"a":".mainUpperBanner"}],[1931629074,{"a":".rs"}],[673825458,{"a":".td-adspot-title-320"}],[1685231599,{"a":"#PublichVoiceChat"}]]);

const hostnamesMap = new Map([["sponser.co.il",1452592487],["sport5.co.il",392066454],["srugim.co.il",1603443002],["mobile.srugim.co.il",382201446],["starmed.co.il",2020253496],["start.co.il",662312499],["takdin.co.il",1840368818],["tatus.co.il",1931629074],["tgspot.co.il",673825458],["totalchat.co.il",1685231599]]);

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
