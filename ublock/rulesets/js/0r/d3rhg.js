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

// svn-0

const argsMap = new Map([[1584854128,{"a":"#content > .main > .bm_bottom.banner_main > .moduletable_pasica,\n#content > .sidebar > .moduletable_pasica"}],[797796065,{"a":"body > .bannerPool"}],[453508440,{"a":".embed_article,\n.group_a__box7,\n.group_a_category__box7"}],[1994355537,{"a":"table > tbody > tr > td:nth-of-type(3),\ntable > tbody > tr > td:nth-of-type(4)"}],[1469487491,{"a":"#content_inner > .content_table > tbody > tr > td:nth-of-type(3)"}],[317253850,{"a":"#center > .leadlist > .banners"}],[1369102750,{"a":".news-banner,\ndiv > .side-banner"}],[907261821,{"a":"#ctl00_bannersCont"}],[293975429,{"a":"#avcn_wrapperInner"}],[1009070195,{"a":".bg-najnakupi-blue-light,\n.najnakupi,\n.najnakupi-news,\n.right-sticky,\n.shadow-md.w-tk"}],[1040110597,{"a":".main-left > .fpNews-title,\n.my-4 > .flex-wrap"}],[883021330,{"a":".add-title"}],[85262184,{"a":".clearfix.ai_widget"}],[1171908033,{"a":"#banner01r,\n#footboxes,\n#topbanner"}]]);

const hostnamesMap = new Map([["slo-android.si",1584854128],["www.slo-zeleznice.si",797796065],["slovenskenovice.si",453508440],["www.solazazivljenje.si",1994355537],["www.ss-mb.si",1469487491],["sta.si",317253850],["stajerskival.si",1369102750],["stop-neplacniki.si",907261821],["www.super-obrok.si",293975429],["svet24.si",1009070195],["ekipa.svet24.si",1040110597],["t3tech.si",883021330],["tehnozvezdje.si",85262184],["www.tocnoto.si",1171908033]]);

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
