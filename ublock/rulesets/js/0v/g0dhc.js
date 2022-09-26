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

// grc-0

const argsMap = new Map([[230730736,{"a":"#RightBanner3,\n#RightBanner7,\n#middlebanner3"}],[995726320,{"a":".banner-728x90-top,\n.featured-2"}],[45132459,{"a":"#ipbwrapper > .bgad[href=\"http://ads.nativad.net/servlet/click/zone?zid=351&pid=111&lookup=true&position=1&uuid=(email)\"],\n#ipbwrapper > .bgad[href=\"http://www.kotsovolos.gr/site/mobile-phones-gps/mobile-phones/smartphones?v=0&company=Apple&11202=44834&utm_source=insomnia.gr&utm_medium=skin&utm_content=NEWiphone6s-6splus-insomnia-skin-2015&utm_campaign=iphone6s-6splus-insomnia-\"]"}],[1327472275,{"a":"div[class=\"wp125ad odd\"]"}],[1643193896,{"a":".left,\n.right"}],[1999630191,{"a":"#mvp-leader-wrap"}],[1472024117,{"a":"#nx-stick-help,\n.ad-block-universal,\n.nxAds,\n.nxsidebar"}],[747436463,{"a":"#text-12"}],[960706964,{"a":"div[class=\"RightColumnBanners\"],\ndiv[class=\"bannerTables\"]"}],[1850776965,{"a":"#topfeatured,\n.alignleft.size-full.wp-image-16703,\n.box_banner,\n.top_ad_big,\n.wpbrbannerinside"}],[743013784,{"a":".banner"}],[2108779984,{"a":"#carousel-1"}],[1551687604,{"a":"#banner-top-container,\n#left-dress2,\n.banner-side-collection,\n.categories2:nth-of-type(3)"}],[1113615778,{"a":"#underUnderRotator,\n#widgetAD > div,\n.above-row,\n.fixedbottom,\n.head728,\n.home-aggelies,\n.module:nth-of-type(3),\n.underRotatorAd590,\n.underRotatorModuleAd590,\ndiv[id^=\"div-gpt-ad\"]"}]]);

const hostnamesMap = new Map([["sports.in.gr",230730736],["insomnia.gr",995726320],["www.insomnia.gr",45132459],["interesting.gr",1327472275],["inthevip.gr",1643193896],["kalamatatimes.gr",1999630191],["kathimerini.gr",1472024117],["katohika.gr",747436463],["kerdos.gr",960706964],["koutipandoras.gr",[1850776965,743013784]],["popaganda.gr",743013784],["skai.gr",743013784],["kozanilife.gr",2108779984],["www.kritikes-aggelies.gr",1551687604],["lamiareport.gr",1113615778]]);

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
