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

const argsMap = new Map([[254061365,{"a":"#HTML2.widget.HTML"}],[1456935023,{"a":"#news_ad,\n.container[style=\"height:105px\"]"}],[1601732164,{"a":"#headerLineBgr,\n.col-sm-12.col-md-12.col-lg-12.video-cell"}],[1153905741,{"a":".td-container.td-header-row.td-header-header"}],[589583918,{"a":"#bottomBanner,\n.zbranding_left2"}],[282739447,{"a":".banner_col,\n.banner_top"}],[1208258977,{"a":".mod_bannerslider"}],[179585343,{"a":"DIV[style^=\"width:728px; height:90px;\"]"}],[341778982,{"a":"#text-4,\n.g1-row.g1-row-layout-page.g1-advertisement.g1-advertisement-before-content-theme-area"}],[1544948282,{"a":"[style=\"width:728px;height:90px;\"]"}],[2055232981,{"a":"#b300"}],[1137618578,{"a":".advertisement"}],[1020666462,{"a":".blogname"}],[1007625872,{"a":".adv_box_kv_left,\n.adv_box_kv_right"}],[165507892,{"a":"div[style=\"padding-top:30px;padding-bottom:30px;\"]"}],[568148888,{"a":".ads_big_block,\n.ads_small_block"}]]);

const hostnamesMap = new Map([["troyan21.com",254061365],["utroruse.com",1456935023],["vbox7.com",1601732164],["viaranews.com",1153905741],["zavedenia.com",589583918],["zovnews.com",282739447],["advokatibg.eu",1208258977],["4bg.info",179585343],["berbim.info",[341778982,1544948282]],["politikata.net",1544948282],["odit.info",2055232981],["prnew.info",1137618578],["subsmania.info",1020666462],["bg-zone.net",1007625872],["peter.and.bilyana.net",165507892],["ciela.net",568148888]]);

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
