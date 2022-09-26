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

const argsMap = new Map([[270656794,{"a":"a[href*=\"theadblockerproject.org\"]"}],[662965979,{"a":"#__next > div[id] + div[class*=\" \"] > div[class*=\" \"]:nth-of-type(2),\n#ad-block-wrapper"}],[2100766436,{"a":"div[onclick*=\"countAdClick\"]"}],[314126297,{"a":"#board_middle_advert,\n#plasma_container,\n.boardfooter_tr,\n.plasma,\ndiv[style=\"clear:both; float:none; height:40px;\"],\ndiv[style=\"width:641px; height:129px; clear:both; float:none;\"],\ntd[style=\"width:200px; text-align:left; vertical-align:top;\"],\nth[colspan=\"20\"]"}],[826598693,{"a":"#black-studio-tinymce-43,\n.header_banner,\na img[width=\"300\"][height=\"250\"]"}],[445625214,{"a":".clearfix.block-da-post_before_content.block-da.block-da-1 > .div-hwad-300x250,\n.clearfix.da-style-2.block-da-post_middle_content.block-da.block-da-1,\n.clearfix.tipi-flex-right.block-da-header.block-da.block-da-1,\n.div-hwad-970x250,\n[id^=\"div-hwad-300x\"]"}],[817141522,{"a":"#ads\\.strip\\.1"}],[1148095564,{"a":"#banner-sticky,\n.article-taboola,\n.banner-top,\n.taboola,\n[id^=\"banner_\"]"}],[270975068,{"a":".ih-marketing-info-container,\n.ih-marketing-item-container,\n.pane-ih-marketing-bxslider,\n.pane-ih-marketing-nice-to-know,\n.single-post-inner-aside__col.col"}],[189509160,{"a":"#weekFlashes"}]]);

const hostnamesMap = new Map([["globes.co.il",270656794],["israelhayom.co.il",[270656794,270975068]],["rotter.name",270656794],["rotter.net",270656794],["haaretz.co.il",662965979],["haipo.co.il",2100766436],["homeless.co.il",314126297],["hon.co.il",826598693],["hwzone.co.il",445625214],["ilimudim.co.il",817141522],["inn.co.il",1148095564],["israelweather.co.il",189509160]]);

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
