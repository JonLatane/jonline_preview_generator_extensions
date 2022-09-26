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

// ltu-0

const argsMap = new Map([[978054725,{"a":"#linkcat-30.widget_links.widget"}],[1010004417,{"a":".Banner,\n.left-banner-wrap"}],[161016143,{"a":"a[rel=\"undefined\"] > img"}],[537689738,{"a":".sidebar-item.friends"}],[2059329303,{"a":".useful_banner_manager_banner *"}],[1868488879,{"a":"div#draugai > *"}],[1688142507,{"a":"a[href^=\"http://\"] > img[src^=\"/upload_data/\"]"}],[1307184667,{"a":".box1[style=\"background:none; text-align:center; padding:5px;\"],\n.box1[style=\"padding:10px 0;\"]"}],[1398652330,{"a":"#leftbar-w A > img"}],[576635043,{"a":"#right_banner"}],[1193150962,{"a":"img.aligncenter"}],[1015092334,{"a":".banners-125"}],[347266744,{"a":"#minic_slider.theme-default *"}],[1575713204,{"a":".greitasis_menu,\nSECTION#akcijos_wrapper.akcijos > img,\nimg[alt=\"OZO estetinės odontologijos ir implantologijos klinika\"]"}],[1297740745,{"a":".infobox-banner"}],[1000323761,{"a":"#sidebar-primary"}],[464306649,{"a":".nivo-controlNav,\n.nivoSlider"}],[1412482993,{"a":"#scr > .js-marquee-wrapper > *"}],[1661789278,{"a":"img[alt=\"klausyk.net, muzika, mp3, dainu zodziai\"]"}],[1396254301,{"a":"#slaidukas,\n.sam-container.sam-place > img[style=\"display: inline;\"]"}],[1237220913,{"a":"#aside-right"}],[810238909,{"a":"#banners_container"}],[263081593,{"a":".custom a[href^=\"http://\"][target=\"undefined\"]"}],[63758286,{"a":"#parama,\n[action=\"https://www.paypal.com/cgi-bin/webscr\"] > *,\ndiv[style=\"position:relative; display:block; margin: 10px auto; text-align: center;\"]"}]]);

const hostnamesMap = new Map([["kitokiagrafika.lt",978054725],["kkml.lt",1010004417],["klauskkunigo.lt",161016143],["voruta.lt",161016143],["kmobiles.lt",537689738],["konsultuokis.lt",2059329303],["kosmetikos.lt",1868488879],["shop.kristel.lt",1688142507],["zodynas.kriu.lt",1307184667],["kronika.lt",1398652330],["krs.lt",576635043],["ksi.lt",1193150962],["ktromuva.lt",1015092334],["kudikiuprekes.lt",347266744],["kupi.lt",1575713204],["kurjeris.lt",1297740745],["kursenuparapija.lt",1000323761],["kvitrina.lt",464306649],["l24.lt",1412482993],["l2info.lt",1661789278],["laikrastisplunge.lt",1396254301],["laisvaslaikrastis.lt",1237220913],["lankasautodalys.lt",810238909],["lbks.lt",263081593],["ldiena.lt",63758286]]);

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
