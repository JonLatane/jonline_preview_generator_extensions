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

// rou-1

const argsMap = new Map([[2036038617,{"a":".custom-html-widget"}],[969743032,{"a":".elementor-widget-smartmag-codes,\n.smartmag-widget-codes,\n[href=\"https://viamso.ro/\"]"}],[456254453,{"a":"[id^=\"buffercode_banner\"]"}],[1862645693,{"a":".aobn"}],[864167225,{"a":".news-fb-comments,\n.side-col"}],[1632409806,{"a":"[style=\"min-height: 260px;\"]:has([id^=\"adocean\"])"}],[944987940,{"a":".popmake-content,\n.td-a-rec-id-header,\n.widget_wq_reclame,\n[class*=\"_ad_\"]"}],[919049643,{"a":".minh-250"}],[1316367125,{"a":"#branding-holder,\n.ad-in-artilce,\n.retail_insert_in_article"}],[930959136,{"a":".front-overlay-banners,\n[id=\"intRightSideBanners\"]"}],[496482196,{"a":".bannergroup"}],[1195663496,{"a":".gofollow > .lazyloaded.entered,\n[href=\"https://www.fabricadecompost.ro/\"]"}],[935866546,{"a":"#aboveheader,\n#sticky"}],[2005819582,{"a":".sam__branding,\n[style=\"min-height: 250px;\"]"}],[1397746943,{"a":"#mvp-content-bot"}],[11116518,{"a":".fmowr-link,\n.widget_fmowr.widget"}],[1116037600,{"a":".banner728x90px"}],[1911007030,{"a":"[href=\"http://contramundum.ro/\"],\n[href=\"https://anonimus.ro/oferta-de-publicitate/\"],\n[href=\"https://fabricatinro.ro/\"],\n[href=\"https://gandeste.org/\"],\n[href=\"https://malltaranesc.ro/\"],\n[href=\"https://softimaj.ro/\"],\n[href=\"https://trenduri.blogspot.com/\"]"}]]);

const hostnamesMap = new Map([["satmareanul.net",2036038617],["g4media.ro",2036038617],["gazetadambovitei.ro",2036038617],["ziarul21.ro",2036038617],["turdanews.net",969743032],["vestea.net",456254453],["4tuning.ro",[1862645693,864167225]],["anunturi-auto.4tuning.ro",1862645693],["pieseauto.ro",1862645693],["forum.4tuning.ro",1632409806],["7est.ro",944987940],["9am.ro",[919049643,1316367125]],["kudika.ro",919049643],["wall-street.ro",919049643],["aerotim.ro",930959136],["agoramedia.ro",496482196],["agro-tv.ro",1195663496],["agrointel.ro",935866546],["aktual24.ro",2005819582],["alba24.ro",1397746943],["ampress.ro",11116518],["androidu.ro",1116037600],["anonimus.ro",1911007030]]);

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
