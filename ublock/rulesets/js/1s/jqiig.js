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

const argsMap = new Map([[943876392,{"a":"#W2D_728x90_1.show-on-desktop"}],[399418874,{"a":".wenBanner"}],[1240358267,{"a":".mid1Banner"}],[1773346509,{"a":"#desktop-top-banners,\n#martef,\n.dfp,\n.dfp-desktop-tv-wrapper,\n.dfp-slot-container,\n.dfp_v2,\n.inactive.top_boxes_row,\n.magazine-frame,\n.magazine_per_category,\n.sticky_magazine"}],[1072757796,{"a":"#ads\\.newspaper,\n#ads\\.top\\.2,\n.ArticleBannerComponenta,\n.CAATVcompAdvertiseTv,\n.MultiArticleTaboola.layoutItem,\n.Taboola.layoutItem,\n.art_tkb_talkback_advert,\n.banner.layoutItem,\n.extended-banner.layoutItem,\n.pplus_hdr_ad,\n.promolightboxmvc,\n[class*=\"MarketingCarousel\"],\n[class*=\"PromoLightbox\"]"}],[1077883991,{"a":"#XnetAdSenceThinkAdAD-300,\n#ads\\.250x250\\.top,\n#ads\\.300x250\\.1,\n#ads\\.blog\\.250x250,\n#ads\\.top\\.1,\n.ContentLink.banner.High,\n.ContentLink.banner.Low,\n.ad.hdn"}],[1865154405,{"a":"#unit1,\n#unit2"}],[1950195065,{"a":".BannerBoxNew,\n.Martef,\n.leftSideBanner"}],[1732282113,{"a":".adpro"}],[1306303110,{"a":"#video-blocker"}]]);

const hostnamesMap = new Map([["weather2day.co.il",943876392],["wen.co.il",399418874],["wisebuy.co.il",1240358267],["yad2.co.il",1773346509],["ynet.co.il",1072757796],["xnet.ynet.co.il",1077883991],["yo-yoo.co.il",1865154405],["zap.co.il",1950195065],["chabad.info",1732282113],["hagdolim.info",1306303110],["wacdfrt.info",1306303110]]);

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
