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

// svn-0

const argsMap = new Map([[1503747561,{"a":".banner-box,\n[src^=\"//tdn.media24.si\"]"}],[133918335,{"a":"[id^=\"plista_widget\"],\nbody > .container_12 > .wrapper > .grid_8 > .no-min-height > div > .newsDescription:nth-of-type(7),\nbody > .container_12 > .wrapper > .grid_8 > .p1 > .banner_700_125,\nbody > .container_12 > .wrapper > .grid_8 > .t1 > .banner_700_125,\nbody > .container_12 > .wrapper > .prefix_1 > .right2.t1"}],[192369331,{"a":"#rightframe > div"}],[1769398685,{"a":"#sharebar"}],[1708039638,{"a":"#rightframe > div:nth-of-type(2),\n#rightframe > div:nth-of-type(5)"}],[587535347,{"a":"#rightframe > div:nth-of-type(1)"}],[187237103,{"a":"#rightframe > div:nth-of-type(3),\n#rightframe > div:nth-of-type(4)"}],[734224446,{"a":"#content > .ng-scope > .ng-scope.home > .facebook,\n#content > .ng-scope > .ng-scope.home > header > .clearfix.container > .banners,\n#content > .ng-scope > .ng-scope.static > .facebook"}],[1493004259,{"a":"#DivShowBanners,\n#DivShowBannersForFrontPage,\n#bglink"}],[2111031319,{"a":"#newsletter-popup-unsigned,\n.billboard-advert-item,\n.dynamic-advert-article-inside,\n.inArticle,\n.inverted-colors.teal.emphasis,\n.iprom-background-placement"}],[1878408380,{"a":"#headerLightHolder,\n#topa"}],[959334490,{"a":"[id^=\"firstSiteBanner\"]"}],[1909551751,{"a":"#banner160,\n#bigHotArticle > .content > .social-networks:nth-of-type(1),\n#fanbackshade,\n#fbpopup,\n#main > div > aside"}],[1905972199,{"a":".advertise"}]]);

const hostnamesMap = new Map([["radiokrka.si",1503747561],["www.regionalobala.si",133918335],["revijaavenija.si",[192369331,1769398685]],["www.revijamaja.si",[1769398685,1708039638]],["www.revijavklop.si",[1769398685,587535347]],["www.revijazarja.si",[1769398685,187237103]],["revijazvezde.si",734224446],["rfantasy.si",1493004259],["rtvslo.si",2111031319],["rumenestrani.si",1878408380],["salomon.si",959334490],["www.sensa.si",1909551751],["skandal24.si",1905972199]]);

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
