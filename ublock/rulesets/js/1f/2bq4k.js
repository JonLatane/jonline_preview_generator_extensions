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

const argsMap = new Map([[1880208915,{"a":".sublineSearchBuffer-banner"}],[671863738,{"a":"DIV[style=\"height:100px !important; overflow:hidden; background:#8cc051 url(http://www.bulforums.com/source/public_html/images/bforums.jpg) no-repeat top left;\"]"}],[1759378593,{"a":".right_banner.load-banner"}],[396139202,{"a":".wpb_single_image.wpb_content_element.vc_align_center"}],[820571285,{"a":"#aswift_0,\n#aswift_0_anchor,\n#aswift_0_expand,\n.banner-160x600_right.iframeBanner,\n.modal-link,\ndiv[style=\"font-family: Arial, Helvetica, sans-serif; font-size: 9px; text-transform: uppercase; color: rgb(128, 129, 143); background-color: rgba(255, 255, 255, 0.3); line-height: 10px; padding: 2px 4px; width: 98%; height: 8px;\"]"}],[550754099,{"a":".kare.top10"}],[112309214,{"a":"DIV[style=\"margin: 0px auto; min-height: 450px; width: 100%; padding-top: 500px; background-image: url('images/interface/kom_branding.png'); background-repeat: no-repeat; background-position: top center;\"]"}],[22309709,{"a":".etarget"}],[243855598,{"a":".custom-info-bgtop-backdrop,\nDIV[style=\"height: 220px;\"],\nDIV[style=\"min-height: 270px;width:960px;background-color: #F7F7F7;\"]"}],[394047162,{"a":"DIV[style=\"height: 265px;\"]"}],[1883274229,{"a":".box-pink"}],[1235814721,{"a":"#fanback"}],[637774617,{"a":"TABLE[style=\"border: 1px solid #000000; margin: 0; padding: 0;\"]"}],[1310137206,{"a":"#banner2"}],[130116015,{"a":"td[class=\"left_fon\"]"}],[694045734,{"a":"#footer_inner_wrapper"}]]);

const hostnamesMap = new Map([["bgrazpisanie.com",1880208915],["bulforums.com",671863738],["burgasinfo.com",1759378593],["burgasnews.com",396139202],["djagi.com",820571285],["elmaz.com",550754099],["etapgroup.com",112309214],["bg.static.etargetnet.com",22309709],["filmi7.com",243855598],["filmisub.com",394047162],["flash-igri.com",1883274229],["gledaigo.com",1235814721],["hardwarebg.com",637774617],["kik-info.com",1310137206],["lesno-fakturirane.com",130116015],["managerteams.com",694045734]]);

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
