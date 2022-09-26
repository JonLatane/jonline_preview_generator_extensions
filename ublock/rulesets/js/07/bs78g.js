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

const argsMap = new Map([[2066605938,{"a":"[class*=\"text_ads\"]"}],[1945220387,{"a":".col-lg-9.col-md-8.col-sm-18.col-xs-36.col-3-2 > .col-xs-36.attention > header > .col-xs-36.blue-header,\n.col-lg-9.col-md-8.col-sm-18.col-xs-36.col-3-2 > .col-xs-36.attention > section > .col-xs-36.attention-contents,\n.social-tele"}],[1186590360,{"a":".list,\n.t-adv,\ndiv.post:nth-of-type(2)"}],[1558128777,{"a":".header-mdh,\n.pull-right.zm-post-lay-a-area"}],[134443236,{"a":".ad-mobile-none,\n.ads-native"}],[731976269,{"a":".custom,\n.customads"}],[1124287307,{"a":".FixedAdvertising,\n.left.sidebar_widget:nth-of-type(3),\n.left_ads,\n.right_ads,\n.top_ads"}],[387246680,{"a":".sidebar > div.box:nth-of-type(5)"}],[732165439,{"a":"#next1-231,\n.asd_top,\n.fl.block_right > div.box_sh.ads_2"}],[1869329502,{"a":".sidebar_tabliq,\n[href^=\"/ads/\"]"}],[1969168827,{"a":".doctor-ads-item"}],[789038387,{"a":"#header_ad,\n.sb_ad"}],[541326099,{"a":".zxc-mobile"}],[923407576,{"a":".banner468,\n.tab_box"}],[1929383960,{"a":"[href^=\"/redirect/ads/\"]"}],[867040380,{"a":"#mainadv,\n#pos-article-display-70266,\n.biga,\n.htmlad"}],[1704388473,{"a":".ads.box"}],[1882307846,{"a":"#box180,\n#box212,\n#box24,\n#box32"}],[1309195582,{"a":".advertise_default"}],[1225563898,{"a":".c-forceToLogin__message.o-box,\n.c-forceToLogin__overlay"}],[595215783,{"a":".im-header-ad"}],[1634824485,{"a":".textads"}],[250635622,{"a":".go-left.main > div.row.box:nth-of-type(1),\n.middle.inner-el.container > div.row.box:nth-of-type(2),\ndiv.black.row.box"}],[12952183,{"a":"#textads-contents,\n.ads-containter"}],[375029147,{"a":"#ads-container > .list-thumbs.title-only.list.box,\n#header-ad,\n.bg-gray-links.box"}],[1350965986,{"a":".type-sticky.status-publish"}],[605568516,{"a":".ads-widget"}],[929306581,{"a":"[id^=\"ad\"]"}]]);

const hostnamesMap = new Map([["emeil.ir",2066605938],["entekhab.ir",1945220387],["fa-tools.ir",1186590360],["faceit.ir",1558128777],["farsnews.ir",134443236],["freedownload.ir",731976269],["freescript.ir",1124287307],["gamesetup.ir",387246680],["gamesib.ir",732165439],["gsm.ir",1869329502],["hidoctor.ir",1969168827],["imemar.icivil.ir",789038387],["ilna.ir",541326099],["imgurl.ir",923407576],["imna.ir",1929383960],["khabaronline.ir",[1929383960,375029147]],["saat24.news",[1929383960,1704388473]],["iranjib.ir",867040380],["irna.ir",1704388473],["isna.ir",1882307846],["itna.ir",1309195582],["jobinja.ir",1225563898],["kafebook.ir",595215783],["kalakamuz.ir",[1634824485,250635622]],["varoone.ir",1634824485],["ariapix.net",1634824485],["my-film.pw",1634824485],["khaandaniha.ir",12952183],["languagedownload.ir",1350965986],["lastsecond.ir",605568516],["mashreghnews.ir",929306581]]);

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
