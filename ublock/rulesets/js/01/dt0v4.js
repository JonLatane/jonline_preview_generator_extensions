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

// tha-0

const argsMap = new Map([[1038537262,{"a":"#adotai-survey-frame-container,\n#adspc_tags,\n#taboola"}],[1072151698,{"a":".icon-bar-mb,\n.view-side-banner"}],[1464903976,{"a":"#banner-left,\n.bireklam,\n.filmborder > .filmcontent div[style^=\"text-align\"],\n.filmcontent > div:nth-of-type(10),\n.widget_text.sidebarborder,\ndiv.bireklam:nth-of-type(1),\ndiv.bireklam:nth-of-type(10),\ndiv.bireklam:nth-of-type(11),\ndiv.bireklam:nth-of-type(12),\ndiv.bireklam:nth-of-type(2),\ndiv.bireklam:nth-of-type(21),\ndiv.bireklam:nth-of-type(22),\ndiv.bireklam:nth-of-type(3),\ndiv.bireklam:nth-of-type(4),\ndiv.bireklam:nth-of-type(5),\ndiv.bireklam:nth-of-type(6),\ndiv.bireklam:nth-of-type(7),\ndiv.bireklam:nth-of-type(9),\ndiv.filmborder:nth-of-type(13),\ndiv.filmborder:nth-of-type(14),\ndiv.filmborder:nth-of-type(15),\ndiv.filmborder:nth-of-type(16),\ndiv.filmborder:nth-of-type(17),\ndiv.filmborder:nth-of-type(18),\ndiv.filmborder:nth-of-type(19),\ndiv.filmborder:nth-of-type(20),\ndiv.filmborder:nth-of-type(23) > .filmcontent > div:nth-of-type(5),\ndiv.filmborder:nth-of-type(23) > .filmcontent > div:nth-of-type(6),\ndiv.filmborder:nth-of-type(23) > .filmcontent > div:nth-of-type(7),\ndiv.filmborder:nth-of-type(8),\ndiv.sidebarborder.widget_text:nth-of-type(10),\ndiv.sidebarborder.widget_text:nth-of-type(11),\ndiv.sidebarborder.widget_text:nth-of-type(12),\ndiv.sidebarborder.widget_text:nth-of-type(16),\ndiv.sidebarborder.widget_text:nth-of-type(3),\ndiv.sidebarborder.widget_text:nth-of-type(4),\ndiv.sidebarborder.widget_text:nth-of-type(5),\ndiv.sidebarborder.widget_text:nth-of-type(6),\ndiv.sidebarborder.widget_text:nth-of-type(7),\ndiv.sidebarborder.widget_text:nth-of-type(8),\ndiv.sidebarborder.widget_text:nth-of-type(9)"}],[38331084,{"a":"#ads_fox_bottom"}],[506504808,{"a":".ads.col-lg-9"}],[2115937485,{"a":".sidebarborder:nth-of-type(1),\n.sidebarborder:nth-of-type(2)"}],[1493024702,{"a":"#header .ad"}],[866390951,{"a":".td-logo-wrap-full,\n.wpb_widgetised_column.wpb_content_element .td-a-rec.td-a-rec-id-sidebar"}],[1301131867,{"a":".row > .col-sm-12 > section"}],[265934385,{"a":".movie-container > .row > .col-lg-12 > .text-center > .text-center > a"}],[1410056825,{"a":".banner-top,\n.textwidget > div:nth-of-type(3),\n.textwidget > div:nth-of-type(4)"}],[620685074,{"a":"div.r300x250"}],[225177659,{"a":"div[id=\"undefined\"]"}],[1316940501,{"a":"center:nth-of-type(4)"}]]);

const hostnamesMap = new Map([["seriesubthai.co",1038537262],["techsauce.co",1072151698],["www.037hdd.com",[1464903976,38331084]],["hereseries.com",38331084],["donung.tv",38331084],["www.1000tep.com",506504808],["www.2youhd.com",2115937485],["4toom.com",1493024702],["akibatan.com",866390951],["www.alpha-hen.com",1301131867],["anime-h.com",265934385],["anime-i.com",1410056825],["anime-lunla.com",620685074],["anime-master.com",[225177659,1316940501]],["h-ani.com",225177659],["anime-sugoi.com",1316940501]]);

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
