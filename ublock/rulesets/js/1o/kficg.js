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

const argsMap = new Map([[1105136220,{"a":".contentadbox + * *"}],[71014373,{"a":".border_style.padding0px"}],[1342505501,{"a":"img[alt=\"laisvoji banga tiesiogine laida\"]"}],[1141322916,{"a":".block_sms,\n.greeting_right"}],[1753880049,{"a":"#headerBanner"}],[286784028,{"a":".ads-cnt,\n.article-0,\n.col-right-small > .widget-group:first-of-type,\n.dfp,\n.page-item-lazyload,\n.top-banner,\n[class*=\"field_banner_\"],\ndiv[class*=\" \"][style^=\"top: \"],\nlabel > label [src*=\"s1.15min.lt/static/cache/\"][src*=\"undefined\"]"}],[1373489169,{"a":".widget-ad"}],[1623946029,{"a":"#adrotate_1,\n#adrotate_2,\n.parama"}],[1480667385,{"a":"#warp > div[style^=\"undefined\"],\n.non_sticky_side_el > div[style],\n.sticky_side_el,\n.vc_col-sm-4 a:not([href*=\"undefined\"])"}],[1781155925,{"a":"#top"}],[1998728341,{"a":".block_text_links,\n.cosite_block,\n.reklamaTopFilled,\ndiv[class=\"col-xs-12 col-sm-12 col-md-4 col-lg-3 sidebar-block \"]"}],[355772857,{"a":"div[id*=\"undefined\"]"}],[95889125,{"a":"#adv_view_top,\n#advert_right,\n#banner-top,\n#main-content-right,\n#rssReader_b,\n.fl.marginb10.vipadvertise,\n.margint10"}],[1075395688,{"a":".content-inner > iframe[style*=\" width: 300px\"],\n.widget_custom_html,\n.wpb_raw_html iframe,\ndiv[style^=\"text-align: center; margin: 10px 0\"]:not([class],[id])"}],[485571237,{"a":"#banner_cont"}],[1388424707,{"a":"#top_veliavos,\n#weather,\n.main-right.m-hide,\n.outer.bg-rhomb-grey-light.flag-block-wrapper.m-hide,\n.right_veliava"}],[429577436,{"a":".right_banner"}],[980001241,{"a":".banneritem"}],[386846591,{"a":"a[href$=\"://www.octenisept.lt\"]"}],[2013790040,{"a":".right_block"}],[1013093399,{"a":".ad-980-200,\n.banner-top,\n.luminor-calculus-21-2,\n.luminor-content,\n.luminor-header,\n.numai-link,\n.obj-cont .runningrow-wr,\n.obj-details .small-label,\na[href$=\"&utm_content=ad\"]"}],[1804689572,{"a":".bigbank-calculator"}],[151949810,{"a":".ad1,\n.ad2"}],[447804380,{"a":"#banner-placeholder-1.banner-placeholder"}]]);

const hostnamesMap = new Map([["reitingai.eu",1105136220],["zodynai.igloro.info",71014373],["psichologas.info",1342505501],["sveikinimai.link",1141322916],["1588.lt",1753880049],["15min.lt",[286784028,1373489169]],["aciu.lt",1623946029],["aina.lt",1480667385],["akmensmagija.lt",1781155925],["alfa.lt",[1998728341,355772857]],["diena.lt",355772857],["alio.lt",95889125],["alkas.lt",1075395688],["alytus-tourism.lt",485571237],["anglija.lt",[1388424707,429577436]],["kamane.lt",429577436],["anyksta.lt",980001241],["l24.lt",980001241],["smc.kedainiai.lm.lt",980001241],["suduvosgidas.lt",980001241],["treneris.net",980001241],["apiterapija.lt",386846591],["archyvai.lt",2013790040],["aruodas.lt",[1013093399,1804689572]],["skelbiu.lt",1804689572],["asvyras.lt",151949810],["atvfanai.lt",447804380]]);

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
