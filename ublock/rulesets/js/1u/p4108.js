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

const argsMap = new Map([[359969093,{"a":"[href*=\"?referral\"]"}],[2124012350,{"a":"div[class^=\"strawberry-ad\"]"}],[1940484823,{"a":"#crt-523989,\n#crt-523996,\n.height-250.mg-sm-bottom-20,\n.height-250.text-center,\n.strawberry-ads-manager-container"}],[1684549492,{"a":".brandingDfp"}],[422614718,{"a":".image[height=\"250\"][width=\"300\"]"}],[76668330,{"a":"iframe[src*=\"feature=oembed\"]"}],[417230644,{"a":".feededay"}],[1261350743,{"a":".add728x90,\n[href=\"http://www.epamedia.ro\"],\n[href=\"http://www.messages2autdoor.ro\"]"}],[10932139,{"a":"#widgetArticleControlsLeft,\n#widgetArticleControlsRight,\n.left > .widget-profitshare"}],[788378708,{"a":"#art_right_div,\n#link_1 > [href^=\"/servad.php\"],\n#link_2 > [href^=\"/servad.php\"],\n#link_3 > [href^=\"/servad.php\"],\n#reclame_left,\n#sub_art_pp_div,\n#venus-136605,\n#venus-136711"}],[715473859,{"a":"#reclame"}],[1057550679,{"a":".lvd-blog-ad,\n.textwidget:has([target=\"_blank\"]:not([method]))"}],[1507264166,{"a":"#media_image-2,\n#ubm-banners-2.ubm_widget.widget,\n.ig_content,\n[src=\"https://smlive.ro/wp-content/uploads/useful_banner_manager_banners/4-4-oooooooooooooooooooo.jpg\"],\n[src=\"https://smlive.ro/wp-content/uploads/useful_banner_manager_banners/45-116795455_3204883796257756_5467569289453464938_n.jpg\"]"}],[1406084224,{"a":".dfp-d-billboard,\n.dfp-d-branding"}],[1171569000,{"a":".ads"}],[282908657,{"a":"div[onclick]"}],[1553033115,{"a":".adcontainer"}],[919768908,{"a":"#custom_html-58,\n[id^=\"wds_\"]"}]]);

const hostnamesMap = new Map([["project-e.ro",359969093],["promotor.ro",2124012350],["prosport.ro",1940484823],["protv.ro",1684549492],["prwave.ro",422614718],["r3media.ro",76668330],["razvanbb.ro",417230644],["rnews.ro",1261350743],["romanialibera.ro",10932139],["satumareonline.ro",788378708],["sfatulmedicului.ro",715473859],["sfatulparintilor.ro",1057550679],["smlive.ro",1507264166],["sport.ro",1406084224],["spynews.ro",1171569000],["tvhappy.ro",1171569000],["wall-street.ro",1171569000],["stiridecluj.ro",282908657],["stiridesibiu.ro",1553033115],["stiriest.ro",919768908]]);

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
