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

// ltu-0

const argsMap = new Map([[600119941,{"a":"#ct_testimonials-4"}],[1317848979,{"a":".geoturgus-ad"}],[642970173,{"a":".xoxo.blogroll img"}],[1659321803,{"a":".add-2"}],[1770003421,{"a":"#sideRight.sidebarRigt,\n.jspContainer[style=\"width: 550px; height: 299px;\"],\n.menu.draugailinks,\n.vp[style=\"height: 249px;\"]"}],[1110636579,{"a":"img[alt=\"JPEG baneris\"][title=\"JPEG baneris\"]"}],[471516564,{"a":"#product2,\n.block.villa"}],[1043013421,{"a":"#stulpelis1c img"}],[661741856,{"a":"#v1b13546c9f"}],[482118767,{"a":"img[alt^=\"undefined\"]"}],[1080120889,{"a":"#inxAds-imr,\n#social,\n.col-xs-12.col-sm-5.col-md-6.col-lg-3.col-widget-4.games_widget"}],[905606580,{"a":".b-kaspersky > *"}],[394588787,{"a":"#Reklama,\n#canvas,\n.col-sm-3 > .ad,\n.row.ad-no-space"}],[239153546,{"a":"[title=\"ksi_120x60\"],\nimg[alt=\"inFROST - CS 1.6 Serveriai\"]"}],[1170695755,{"a":".projects-container-home"}],[1015110861,{"a":"[src^=\"site/banners/\"] + * TD"}],[1798506495,{"a":".span4.column_container.td-post-sidebar,\n[id^=\"penci-banner_box\"]"}],[1106158315,{"a":".pixel6"}],[161334411,{"a":".moduletable_ads"}],[729902392,{"a":".left_banner"}],[2014144546,{"a":".miestasreng"}],[1439945057,{"a":".top_baneris,\ntd[style=\"PADDING-BOTTOM: 13px; PADDING-LEFT: 0px; BACKGROUND: url(/kaunas/m/m_images/wfiles/il4sk332.jpg) #faf6f5 no-repeat left top; PADDING-TOP: 13px\"]"}],[734280973,{"a":".code-block.code-block-1,\n.jeg_block_container,\n.jeg_postblock_content"}],[304407926,{"a":"td[valign=\"undefined\"][height=\"168\"][bgcolor=\"#ffffff\"][style=\"PADDING-TOP: 15px\"]"}]]);

const hostnamesMap = new Map([["gedulas.lt",600119941],["geoturgus.lt",1317848979],["gintarinesvajone.lt",642970173],["grokiskis.lt",1659321803],["grozionamai.lt",1770003421],["grozioperlas.lt",1110636579],["grupinis.lt",471516564],["gyvenimoguru.lt",1043013421],["hardas.lt",[661741856,482118767]],["solisun.lt",482118767],["inbox.lt",1080120889],["mail.inbox.lt",905606580],["info.lt",394588787],["infrost.lt",239153546],["interjeras.lt",1170695755],["invega.lt",1015110861],["jp.lt",1798506495],["jumsinfo.lt",1106158315],["juokauju.lt",161334411],["kamane.lt",729902392],["kabutes.kasvyksta.lt",2014144546],["kaunas.lt",1439945057],["kaunieciams.lt",734280973],["kedainiai.lt",304407926]]);

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
