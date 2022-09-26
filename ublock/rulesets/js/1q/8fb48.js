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

// tha-0

const argsMap = new Map([[1453437438,{"a":"#banner-box,\n#feature-box,\n#promote,\n#promote-box,\n.banner-box,\n.feature-box,\n.pr-box,\n.promote-box"}],[682451531,{"a":".leftBanner,\n.rightBanner,\ndiv[id^=\"divFLRALeft\"],\ndiv[id^=\"divFLRARight\"],\ndiv[id^=\"wh-widget\"]"}],[607937041,{"a":".td-more-articles-box"}],[2073270953,{"a":"#my-welcome-message,\n.ads-bottom"}],[1225492634,{"a":".elementor-widget-wp-widget-advads_ad_widget"}],[1667564373,{"a":"#nav-wrapper > a[target=\"_blank\"]"}],[1457130237,{"a":".adss-des"}],[1685882726,{"a":".container-fluid > .row > .col-md-6"}],[277812139,{"a":"misa-content .iw_header + .row .img-ads"}],[1067677457,{"a":".ai_widget.widget.primary-sidebar-widget.w-t.h-ni,\n.code-block-1.code-block,\n.code-block-2.code-block,\n.naqw-type-custom_code.naqw-container"}],[2010673413,{"a":".container:nth-of-type(3) > .row > .center_lnwphp,\nbody>div.hide"}],[773635586,{"a":"._banner > a[href*=\"ads.jarm.com\"]"}],[1337842342,{"a":"#contentMain > br,\n#contentMain > div[align=\"center\"]"}],[344794610,{"a":".font-content.content:nth-of-type(3),\n.font-content.content:nth-of-type(5) > center:nth-of-type(1),\n.font-content.content:nth-of-type(5) > center:nth-of-type(2),\n.row:nth-of-type(1) > .col-lg-12"}]]);

const hostnamesMap = new Map([["exteen.com",1453437438],["game-tep.com",[682451531,607937041]],["specphone.com",607937041],["gamemonday.com",2073270953],["gamingdose.com",1225492634],["www.gg-anime.com",1667564373],["grimexcrew.com",1457130237],["h-ani.com",1685882726],["hanimesubth.com",277812139],["hereseries.com",1067677457],["hime-anime.com",2010673413],["neko-miku.com",2010673413],["jarm.com",773635586],["jokergameth.com",1337842342],["kaijeaw.com",344794610]]);

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
