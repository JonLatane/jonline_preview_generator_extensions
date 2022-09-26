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

const argsMap = new Map([[658685335,{"a":".imgNoBorder[style=\"float: left; background-color: lightgray; width: 300px; height: 250px; margin: 14px 0px 14px 8px\"]"}],[223687381,{"a":"#bannertop_72890,\n#red"}],[288867660,{"a":"#media_image-2,\n#media_image-3,\n#media_image-4,\n.widget-1.widget-odd.widget.widget_media_image,\n.widget-3.widget-odd.widget.widget_media_image,\n.widget-4.widget-even.widget-alt.widget.widget_media_image"}],[1612249765,{"a":".ispace"}],[1163222627,{"a":"#branding"}],[1872114952,{"a":".bannerwrapper-200x200,\n.bannerwrapper-250x250,\n.bannerwrapper-728x90"}],[594813256,{"a":"#ad_lb_atf,\n#ban300x250,\n.paidAdvert"}],[283745803,{"a":".banner-box,\n.module.long-scroll,\n.smodule"}],[2048598791,{"a":".easy_ads_main"}],[1423217148,{"a":".copyright"}],[713860378,{"a":"iframe[style=\"border: medium none ; margin: 0pt; padding: 0pt; overflow: hidden; width: 300px; height: 250px; border-collapse: collapse;\"]"}],[1428464368,{"a":".zaplata-footer-logo,\ndiv#adsblock-msg"}],[1113235901,{"a":"#facebox_games_mess,\n#popup-ad"}],[143485042,{"a":"#adr_bot_240,\n#wallpaper_half_l,\n#wallpaper_half_r"}],[265194305,{"a":"#h_adv,\n.article-after-comments-ad,\n.article-after-text-ad,\n.article-before-donate-ads,\n.boxw100.advleft,\n.etarget_middle_after,\n.etarget_right_top,\n.h_adv.ad-elm,\n.health-ad-blk,\n.innewads,\n.inside-area-right-bottom-ad,\n.inside-area-right-middle-ad,\n.inside-area-right-top-ad.brc,\n.inside-news-area-right-ad,\n.r_b,\n.r_b_c.ad-elm,\n.top-news-area-ad,\n.top-news-area-ad.brc,\n.topfrog-ads-blk,\ndiv[style=\"padding-bottom:15px;\"]"}],[1682082528,{"a":"#hotOffBg,\n#topBanCont,\n#topBanner,\n.adv.adwise,\n.shadow.block.offers,\nDIV[style=\"margin: 0 0 20px; height: 250px; width: 300px;\"]"}]]);

const hostnamesMap = new Map([["dartsnews.bg",658685335],["data.bg",223687381],["dev.bg",288867660],["dir.bg",1612249765],["novini.dir.bg",1612249765],["dnes.dir.bg",1163222627],["dnesplus.bg",1872114952],["dnevnik.bg",[594813256,283745803]],["media.easyads.bg",2048598791],["forum.eshop.bg",1423217148],["expert.bg",713860378],["fakti.bg",1428464368],["framar.bg",1113235901],["apteka.framar.bg",143485042],["frognews.bg",265194305],["gbg.bg",1682082528]]);

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
