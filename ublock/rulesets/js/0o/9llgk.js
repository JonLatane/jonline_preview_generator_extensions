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

const argsMap = new Map([[1202815216,{"a":"#ys-container,\n.metasingle-jos,\n.td-a-rec-id-custom-spot,\n.visible.ys-layer"}],[1905506069,{"a":"[href=\"https://www.incorectpolitic.com\"]"}],[1011063660,{"a":"#block-2,\n[href=\"https://www.rplp-piatracraiului.ro/\"]"}],[911481940,{"a":"#stickynote4"}],[810525907,{"a":".second_header > .container > .reclama728"}],[2020648050,{"a":".bk-sticksb-wrapper,\n.ottowebAds"}],[1693753322,{"a":"[href=\"http://www.moveout.ro/\"],\n[href=\"https://chestionareauto.ro/\"]"}],[1443026115,{"a":".ptate_banner_cmz,\n[href=\"http://www.rcforfun.ro/\"],\n[href^=\"https://afiliati-online.casapariurilor.ro/promoRedirect\"]"}],[1683897645,{"a":"[href=\"https://souqeshop.ro/panouri-solare-fotovoltaice/\"],\n[href^=\"https://vreaulanova.ro/\"]"}],[1057184740,{"a":".hiddenad,\n[href=\"http://euro-instal.ro\"],\n[href=\"http://toronto-residence.ro/contact/\"],\n[href=\"https://certificatenergetictimis.ro/\"],\n[href=\"https://www.rapidauto.ro/ro/content/showroom-timisoara.html\"]"}],[1416780704,{"a":".sidebar-column-primary.sidebar-column.col-sm-4 > .sidebar,\ndiv[class^=\"ods\"]"}],[1236385839,{"a":"#fpub-popup"}],[2129839877,{"a":"div.center.well-sm.well"}],[1609373089,{"a":"div[class^=\"akcelo\"]"}],[980001241,{"a":".banneritem"}],[1048981709,{"a":".height-md-250,\n.height-md-300.height-xs-400,\n.height-sm-250.height-xs-300,\n.mg-bottom-10.text-center,\n.padding-top-10.padding-bottom-10,\ndiv.height-300,\ndiv.mg-bottom-20.height-300"}],[1546047569,{"a":"[src^=\"/media/publicitate/\"],\ndiv.st-clr.st-ad-region"}],[301549348,{"a":".in.fade.modal-backdrop,\n.in.fade.modal.subs-popup"}]]);

const hostnamesMap = new Map([["national.ro",1202815216],["nationalisti.ro",1905506069],["newsbv.ro",1011063660],["nosteam.ro",911481940],["nwradu.ro",810525907],["obiectiv-sm.ro",2020648050],["odat.ro",1693753322],["onlinesport.ro",1443026115],["opiniabuzau.ro",1683897645],["opiniatimisoarei.ro",1057184740],["oradesibiu.ro",1416780704],["ortodoxinfo.ro",1236385839],["pbinfo.ro",2129839877],["petitchef.ro",1609373089],["ph-online.ro",980001241],["playtech.ro",1048981709],["portalsm.ro",1546047569],["pricy.ro",301549348]]);

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
