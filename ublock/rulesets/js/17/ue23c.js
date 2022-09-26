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

const argsMap = new Map([[133395836,{"a":".banner-cafe,\n.center-talgh"}],[2104232004,{"a":".col-xs-12.col-md-6.main-sidebar > center,\ncenter:nth-of-type(2)"}],[745413109,{"a":"[href^=\"/advertisements/\"]"}],[945228844,{"a":".widget_custom_html.widget.container-wrapper.widget_text"}],[43891889,{"a":".ads-title"}],[579508369,{"a":".stream-item-above-post.stream-item,\n.stream-item-mag.mag-box"}],[688786549,{"a":".ads-post"}],[978796704,{"a":".adcontainer,\n.enhanced-text-widget.widget_text.vc-widget.widget.w-nt.h-ni,\n.insert-post-ads,\n.widget_better_rss_widget.widget.primary-sidebar-widget.w-t.h-ni,\n.xjehomzgnw"}],[62361023,{"a":".ads-text-sid,\n.pt-3.text-center.py-2.bg-all-box,\n.text-center.py-3.bg-all-box"}],[1505037066,{"a":".top-ads"}],[204024414,{"a":"div.right-sidebar:nth-of-type(1),\ndiv.right-sidebar:nth-of-type(4) > .right-sidebar-cont,\ndiv.right-sidebar:nth-of-type(4) > .right-title"}],[1655634112,{"a":"#text-25"}],[840176180,{"a":".main-zxc"}],[978697734,{"a":"#footer_js_d1,\n.banner-container,\n.boxRepo-12,\n.col-sm-12 > .block > header,\n.sidebar-fixed > .block,\nsection.block:nth-of-type(4)"}],[743013784,{"a":".banner"}],[807726970,{"a":"#headerads,\n#left2"}],[260445157,{"a":".yn-bnr"}],[1355312318,{"a":"#ads"}],[166601179,{"a":"#pos-article-display-66259,\nli#bunyad-latest-posts-widget-2.latest-posts.widget:nth-of-type(4)"}],[2071278133,{"a":".cas-pubg,\n.post-sticky"}],[1750105955,{"a":".ads_place,\n.app_introduce"}],[1964261272,{"a":"#toshare-dl-link"}],[561085095,{"a":"#sideAds,\n.ad-banner,\n.ad-link,\n.dsp-ad,\n.side-ads,\n.video-list-wrapper.list-responsive:has(.ad)"}],[1780790027,{"a":".baner"}],[458848241,{"a":".top-ad"}],[2028608607,{"a":".header-ad"}],[68550367,{"a":".bottom-ad,\n.medic-box.inner.boxsh,\n.menu_left-side-ads,\n.menu_right-side-ads"}],[277969226,{"a":"[href*=\"nobitex.ir\"]"}]]);

const hostnamesMap = new Map([["cannews.aero",133395836],["myhastidl.cam",2104232004],["mojnews.co",745413109],["eghtesadnews.com",745413109],["fartaknews.com",745413109],["moroornews.com",745413109],["parsnews.com",745413109],["ilna.ir",745413109],["tinn.ir",745413109],["rokna.net",745413109],["borna.news",745413109],["tourismonline.co",[945228844,43891889,579508369]],["koolakmag.ir",945228844],["skinak.ir",43891889],["1abzar.com",688786549],["gadgetnews.net",688786549],["1pezeshk.com",978796704],["abipic.com",62361023],["mihandownload.com",62361023],["abzarfa.com",[1505037066,204024414]],["yasdl.com",1505037066],["downloadsoftware.ir",1505037066],["zoomg.ir",1505037066],["accpress.com",1655634112],["afkarnews.com",840176180],["aftabir.com",[978697734,743013784]],["b2n.ir",743013784],["timecity.ir",743013784],["akharinnews.com",[807726970,260445157,1355312318]],["alamto.com",[260445157,166601179]],["harmonydl.us",1355312318],["androidgozar.com",2071278133],["androidha.com",1750105955],["androidsharp.com",1964261272],["aparat.com",561085095],["applicationha.com",1780790027],["arga-mag.com",[458848241,2028608607,68550367]],["plus.ir",458848241],["icivil.ir",2028608607],["arzcenter.com",277969226]]);

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
