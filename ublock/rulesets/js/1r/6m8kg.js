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

// vie-1

const argsMap = new Map([[1221930533,{"a":".bannerqc,\n[class^=\"sticky-top\"],\n[href*=\"/default/template/\"],\n[href*=\"hungthinhcorp.com.vn\"],\n[href*=\"vietcombank.com.vn\"]"}],[1203538022,{"a":".Flagrow-Ads-under-header"}],[596960185,{"a":".vfs_banner"}],[259748882,{"a":"#headerProxy,\n.rightleftads"}],[788269910,{"a":".box-adv,\n.mb-20.col-right-ads,\n.vmcadszone"}],[1678729767,{"a":".zone--ad"}],[1388419826,{"a":"section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)"}],[244219434,{"a":"#banner-dai-bottom,\n#banner-dai-top"}],[1625127782,{"a":".v-element>.v-responsive,\ndiv.message--post"}],[793320499,{"a":".ads-top-wrap"}],[646598582,{"a":".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column>.wpb_wrapper.bs-vc-wrapper"}],[1058727023,{"a":".wrapper-adv"}],[2047835589,{"a":"#banner1ab,\n#banner2ab"}],[1937216844,{"a":".ad_by_yellowpages,\n.banner_add"}],[1133968188,{"a":"#site-header"}],[354070108,{"a":"#ballon_right"}],[716686488,{"a":".notMsg.Sticky,\na[href^=\"https://one88.vn/vi/\"]"}],[1255907874,{"a":".logo-partner"}],[961107111,{"a":".btm_banner"}],[1190003551,{"a":".pre-pc-b91.preload-b91.preload"}],[1038572203,{"a":".block.ad"}],[1617521943,{"a":".odds-button,\n.odds-button2"}],[1607800572,{"a":"a[href^=\"//mage98rquewz.com/\"]"}],[1880455784,{"a":"#bnads3_save"}],[367598956,{"a":".fads"}],[86228884,{"a":".btn-betnow.btn-sm.btn"}]]);

const hostnamesMap = new Map([["tvphapluat.vn",1221930533],["v4u.vn",1203538022],["vietfones.vn",596960185],["vietnamgsm.vn",259748882],["vietnamnet.vn",788269910],["vietnamplus.vn",1678729767],["vietq.vn",1388419826],["viettelstore.vn",244219434],["voz.vn",1625127782],["vtvgiaitri.vn",793320499],["vungoctuan.vn",646598582],["webthethao.vn",1058727023],["xehay.vn",2047835589],["yellowpages.vn",1937216844],["zingnews.vn",1133968188],["truyenqk.work",354070108],["cbox.ws",716686488],["lemon.animeion.xyz",1255907874],["feb.onedaysales.xyz",1255907874],["animeweb.xyz",961107111],["javhiv.xyz",1190003551],["phimno1.xyz",1038572203],["plvb.xyz",1617521943],["sexdiaryz.xyz",1607800572],["sexnhe.xyz",1880455784],["vlxx.xyz",367598956],["xoilac2.xyz",86228884]]);

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
