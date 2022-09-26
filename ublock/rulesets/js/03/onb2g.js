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

// irn-0

const argsMap = new Map([[1506002997,{"a":".padding-bottom-8,\n.sanjagh,\n.side_txt_zxc_inner,\n.zxc-padding-custom"}],[1334600314,{"a":"#box_1398,\n#popbox-blackout"}],[371438478,{"a":".AdsContainer"}],[30437616,{"a":".special_links,\n.text_adds_container"}],[1322314170,{"a":".webgardi"}],[1569293416,{"a":".zxc_news"}],[7333385,{"a":".ads-full-banner-img"}],[1831652125,{"a":"#box145,\n#box167"}],[443166747,{"a":".jmb_banner"}],[1057870709,{"a":".inline-4d"}],[1211302597,{"a":".aligncenter.wp-image-9273.size-full,\n.size-full.attachment-full"}],[936354424,{"a":".myside.right-sidebar"}],[1039411035,{"a":"#popup-layer-container,\n.advertise,\n.bottom-left-ad,\n.bottom-right-ad"}],[890299858,{"a":".adsBanner,\n.two-ad-banners,\n.widget_media_image.widget.container-wrapper"}],[728116054,{"a":"#posts_single_ads,\n#top_ads"}],[2086949898,{"a":"#titr-box,\n.maincontent > center,\ntbody"}],[1683973020,{"a":"#sidebar_ad,\n.b-hd,\n.hidden-xs.hidden-sm.block,\n.hideOnMobile"}],[1902230237,{"a":".tabliq"}]]);

const hostnamesMap = new Map([["rokna.net",1506002997],["takblog.net",1334600314],["yektablog.net",1334600314],["article.tebyan.net",371438478],["uplooder.net",30437616],["borna.news",1322314170],["gostaresh.news",1569293416],["mobo.news",7333385],["saat24.news",1831652125],["techna.news",443166747],["titr.online",1057870709],["gold-team.org",1211302597],["texahang.org",936354424],["tgju.org",1039411035],["wikihoax.org",890299858],["zoomtech.org",728116054],["my-film.pw",2086949898],["salamdl.rip",1683973020],["harmonydl.us",1902230237]]);

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
