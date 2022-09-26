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

const argsMap = new Map([[2100633554,{"a":".wallpaper--active"}],[1092364842,{"a":"[id^=\"pukka-ad-widget-\"]"}],[811235220,{"a":"#banner_container,\n.baner"}],[764970642,{"a":"[id^=\"oglasi\"]"}],[601725834,{"a":"#content > .wrap > .sec_1 > .post_container > .content > .news_post > div:nth-of-type(7),\n#content > .wrap > .sec_2 > .sidebar_container:nth-of-type(1),\n#content > .wrap > .sec_2 > .sidebar_container:nth-of-type(2),\n#content > .wrap > .sec_2 > .sidebar_container:nth-of-type(7),\n#header > .wrap > .banner_container"}],[333965104,{"a":".border-grey-light.sidebar > .border-grey-light"}],[511801562,{"a":"#banner45,\n#facebook,\n#facebook-like,\n#header-banner,\n#wrapper > a[href^=\"http://www.volan.si/admin/upload/ads\"],\na[href^=\"https://www.volan.si/admin/upload/ads/generator.php\"]"}],[682127471,{"a":"#exposed > .container > .padder > .fixator > .c3 > .size2.box"}],[594620747,{"a":"[id^=\"post\"] > .article-content > .mashsb-main.mashsb-container"}],[448963725,{"a":".hupso-share-buttons"}],[398742568,{"a":".widget_ads_big.widget"}],[462608146,{"a":".related_article"}],[1687138172,{"a":"#RightBanner"}]]);

const hostnamesMap = new Map([["tvambienti.si",2100633554],["www.vandraj.si",1092364842],["varcevanje-energije.si",811235220],["vemkajjem.si",764970642],["www.viva.si",601725834],["vizita.si",333965104],["volan.si",511801562],["www.vsikuponi.si",682127471],["zastarse.si",594620747],["zdravi-recepti.si",448963725],["zenskisvet.si",398742568],["zurnal24.si",462608146],["spored.tv",1687138172]]);

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
