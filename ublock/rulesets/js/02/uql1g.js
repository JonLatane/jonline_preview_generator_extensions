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

const argsMap = new Map([[1943535571,{"a":".widget-wrapper:nth-of-type(5),\n.widget-wrapper:nth-of-type(6),\n[href=\"https://samopostrezna.com/\"]"}],[876777685,{"a":".obcni-contentexchange,\n.obcni-widget"}],[1947068923,{"a":".td-main-sidebar"}],[147404263,{"a":".banner-promotion,\n.banner-wrapper,\n.in-post-related-news,\n.third-party-menu-container"}],[1838008547,{"a":".main-first.main > .index_right"}],[1490140100,{"a":".sticky-wrapper"}],[1558094581,{"a":".widget_custom_html"}],[963369853,{"a":".bannerbox,\n.box2,\n.dadbot,\n.dadmid,\n.dadtop,\n.rightb300600,\n.top728,\n[src=\"https://www.partis.si/img/pixel.gif\"]"}],[2130919092,{"a":"#startPageRightLabel,\n#startPageRightResults"}],[1550658034,{"a":".reklame-na-sredi,\n[id^=\"reklama\"]"}],[1577874146,{"a":"#izpostavljeni,\n#show > .ban_item,\n#show > div > div > .ban_item,\n.image_carousel_post > [href^=\"/show//\"],\n.lightface,\n.widget-shop"}],[602467241,{"a":"#maincontent > .nospace > tbody > tr > td > .moduletable"}],[578483166,{"a":".external_wall_right_wrapper"}],[1218130074,{"a":"#ctl00_Radio1Vsebina_LabelEPP288x240,\n#divBannerjiDesnoZunaj > .presledek:nth-of-type(1),\n#divBannerjiDesnoZunaj > .presledek:nth-of-type(13),\n#divBannerjiDesnoZunaj > .presledek:nth-of-type(3),\n#divBannerjiDesnoZunaj > .presledek:nth-of-type(6),\n#divBannerjiDesnoZunaj > .presledek:nth-of-type(8),\n#divBannerjiDesnoZunaj > .reklamaDesnoZunaj,\n#page > center > .telo > .teloCenter > .mainLevo > div:nth-of-type(12),\n#page > center > .telo > .teloCenter > .mainLevo > div:nth-of-type(13),\n#slideshowEPPGLii"}]]);

const hostnamesMap = new Map([["mojblink.si",1943535571],["mojprihranek.si",876777685],["motiviran.si",1947068923],["n1info.si",147404263],["najdi.si",1838008547],["namen.si",1490140100],["novice.si",1558094581],["partis.si",963369853],["podarimo.si",2130919092],["podjetnik.si",1550658034],["pokukaj.si",1577874146],["preberi.si",602467241],["publishwall.si",578483166],["radio1.si",1218130074]]);

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
