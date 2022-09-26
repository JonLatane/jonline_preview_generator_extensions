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

// bgr-0

const argsMap = new Map([[1969039868,{"a":"#banner-234-90,\n#group-id-tids-12,\n#top_banner,\n.content-advertisement"}],[1991848002,{"a":"#artbot,\n#artvert,\n#comm,\n#embed,\n#mplx,\n.artbot.center.mt20.mb20,\n.artvert,\n.assignshop,\n.embed.mt10.mb10,\n.g-comments.pt25.center.pt15.pb15,\n.giwrp,\n.rkl"}],[1452303306,{"a":".mny-header-banner"}],[464715495,{"a":".grid__item.grid__item--w-100.plakat"}],[244074282,{"a":".square-banner.topmargin,\n.square-banner.topmargin.alignright"}],[1053474218,{"a":".mom-e3lanat-inner"}],[1303552952,{"a":".banners"}],[1416197695,{"a":"#gpt-banner-4_ad_container"}],[367511008,{"a":"ins[style=\"width: 970px; height: 250px; display: block; position: relative; border: 0px none;\"],\nins[style=\"width: 970px; height: 250px; display: inline-table; position: relative; border: 0px none; vertical-align: bottom;\"]"}],[345349313,{"a":"#banner-top"}],[2023510183,{"a":"#aax_if_aax_\\/26641721\\/novini\\.bg_branding_megaboard,\n.line_banner"}],[932019933,{"a":".banner640"}],[603546839,{"a":".ads-25,\n.ads-60-r"}],[117231640,{"a":"#topbar"}],[865042704,{"a":"#banner"}],[1736402134,{"a":".bannerbox"}]]);

const hostnamesMap = new Map([["menumag.bg",1969039868],["miau.bg",1991848002],["money.bg",1452303306],["monitor.bg",464715495],["nakratko.bg",244074282],["nbp.bg",1053474218],["news.bg",[1303552952,1416197695,367511008]],["etapgroup.com",1303552952],["newshub.bg",345349313],["novini.bg",2023510183],["novinite.bg",932019933],["offnews.bg",603546839],["krisfansait.ovo.bg",[117231640,865042704]],["kartelito.com",117231640],["myonvideo.com",117231640],["samokov365.com",117231640],["serialmaniq.com",117231640],["cinemabg.net",117231640],["club-bg.org",117231640],["data-bg.org",117231640],["submatrixs.ovo.bg",865042704],["recepty.bg",865042704],["prikachi.com",865042704],["pari.bg",1736402134]]);

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
