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

const argsMap = new Map([[185073893,{"a":".td-post-sharing-top"}],[471602327,{"a":".td-header-rec-wrap"}],[1738240364,{"a":"#nestandard-holder,\n.ban_item,\n.do-space,\n.header-blocks-aspace"}],[1153576910,{"a":"[id^=\"pons-ad\"]"}],[865042704,{"a":"#banner"}],[1952125038,{"a":"#PR,\n#TB_overlay,\n#TB_window,\n#content-holder > .holder-with-tower-bann > .file-content-holder > .intextAdIgnore.sq829,\n#content-holder > .holder-with-tower-bann > .intextAdIgnore.right-content-holder > .article-view-right-container,\n#content-holder > .holder-with-tower-bann > .intextAdIgnore.right-content-holder > .fl:nth-of-type(8) > .mb10.sq408 > .sq408 > .fs14.channelsSubscribe.fl,\n#content-holder > .intextAdIgnore.mt10.fl,\n#drg1 > .FP-column,\n#drg3 > .fl:nth-of-type(3) > .fl:nth-of-type(4),\n#drg3 > .mb10.sq408,\n#footer > .inner > .container-golden-partners > .text,\n#multimedia > .cm.top.blue-belt-408,\n#multimedia > .text-container,\n#sharebar > li:nth-of-type(4),\n#single-art-text > .fl,\n#subscribe_newsletter"}],[817403909,{"a":".osrednji_del > .poravnajgor:nth-of-type(1),\ntd > table > tbody > tr > td > .poravnajgor > tbody > tr:nth-of-type(1)"}],[952107276,{"a":".box_over_content_9547"}],[1372171879,{"a":".re-cta-advertisement"}],[1508034576,{"a":"#panels > aside > div:nth-of-type(3),\n#panels > aside > div:nth-of-type(4)"}],[941447345,{"a":"#content > .region-highlighted.region,\n.after-nav-ads"}],[1967643398,{"a":".middle > .content > .sidebar > .banner"}],[1944998585,{"a":"#content > .contentWrap > .bgContent > .oneCol > .content > .bannerBlocks1 > .colsWrap > .pool.second.col,\n[id^=\"brandedBackground\"]"}],[884452085,{"a":".iAdserver"}]]);

const hostnamesMap = new Map([["planet-lepote.com",[185073893,471602327]],["pravljicna.si",185073893],["utrinek.si",185073893],["zdravje.si",185073893],["pomurec.com",1738240364],["pons.com",1153576910],["poraba.com",865042704],["slo-tech.com",[865042704,1508034576]],["www.racunalniske-novice.com",1952125038],["racunovodja.com",817403909],["scoreboard.com",952107276],["nepremicnine.si21.com",1372171879],["sobotainfo.com",941447345],["www.strojnistvo.com",1967643398],["www.studentski-servis.com",1944998585],["vecer.com",884452085]]);

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
