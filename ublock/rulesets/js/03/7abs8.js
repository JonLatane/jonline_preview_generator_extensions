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

const argsMap = new Map([[1715813251,{"a":".ads-above-single,\n.ads-above-single-player,\n[class*=\"ds-popup\"]"}],[39628668,{"a":"div[style*=\"position: fixed; bottom: 0px;\"]"}],[911124537,{"a":".ad-float,\n.widgettitle-banner + a[href]"}],[2091803557,{"a":"#banner_t_player,\n#text-10,\n#text-5,\n#text-6,\n#text-8,\n#text-9"}],[1128561028,{"a":"#close_ads"}],[677244487,{"a":"#MT_HP_C_Billboard,\n#MT_HP_Topbanner,\n#coverpage,\n#ga-between,\n.ads-rec-center,\n.billboard-banner,\ndiv[id^=\"dfp-\"]"}],[713594158,{"a":"#masthead #dfp-topbanner,\n.sticky-container .banner-wrap"}],[370852600,{"a":".col-md-8,\n.panel-default.panel:nth-of-type(2),\n.panel-default.panel:nth-of-type(3),\ncenter>div.img-thumbnail"}],[688769621,{"a":"#main > div[style^=\"text-align\"],\n#sidebar .widget.widget_text"}],[1831056984,{"a":"#main article p[align=\"center\"],\n#sidebar aside[id^=\"text\"]:not(#text-2)"}],[58147447,{"a":".popup.adt,\ndiv.adcen:nth-of-type(6)"}],[1155506613,{"a":"#M192293ScriptRootC68553,\n#M192293ScriptRootC68556,\n#head-content > div:nth-of-type(2),\n#text-11,\n.clearfix.post-outer > div:nth-of-type(6)"}],[257668118,{"a":".outer > div[style^=\"width:814px;\"]"}],[29085645,{"a":"#overlay_ads,\n.cover_banner_bg"}]]);

const hostnamesMap = new Map([["movie007hd.com",1715813251],["movie2free.com",39628668],["movie2uhd.com",911124537],["www.moviehd-master.com",2091803557],["msa-video.com",1128561028],["mthai.com",677244487],["picpost.mthai.com",713594158],["neko-miku.com",370852600],["www.new-mastermovie.com",688769621],["newmovie-hd.com",1831056984],["newseries-hd.com",58147447],["www.nice-anime.com",1155506613],["nongpink.com",257668118],["notebookspec.com",29085645]]);

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
