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

const argsMap = new Map([[2076008807,{"a":".banner-holder *"}],[833162603,{"a":"div[style=\"margin:5px;text-align:center\"],\ndiv[style=\"text-align:center\"],\nimg[alt=\"Ruba.lt - vyriški marškiniai, megztiniai internetu, išpardavimas\"]"}],[1657323982,{"a":".textwidget"}],[127835590,{"a":".widget.widget-promobox-small.width-1-5.no-bottom-margin,\n.widget.widget-promobox-wide.width-1-1.no-bottom-margin"}],[682646670,{"a":"a[href*=\"lova.lt/baldai/draugas/\"],\na[href*=\"lova.lt/imones/partneris/\"]"}],[777414517,{"a":"#block-block-31.block.block-block"}],[2017675595,{"a":".Scrolling_banner,\ntd[height=\"118\"]"}],[982541433,{"a":".banner-block"}],[275508079,{"a":".left_banners,\n.right_banners"}],[756222179,{"a":"[href^=\"https://delivery.adnuntius.com\"]"}],[1348227885,{"a":"a[href^=\"http://www.\"][target=\"undefined\"]"}],[496482196,{"a":".bannergroup"}],[1006839187,{"a":"#container-ads"}],[1108256353,{"a":"[href*=\"?utm_source=mainyk\"]"}],[1078502710,{"a":".djslider-loader"}],[433362107,{"a":"img[alt=\"SVEIKATOS RADIJO LOGObaneris180 x90\"]"}],[1219640064,{"a":".banners_mklt_side1.banner_cont"}],[1920117719,{"a":"#text-86775731"}],[1968910074,{"a":".bnrdid"}],[622379180,{"a":"#MarksPlus,\n.ban_script_code"}],[886056364,{"a":".tb-content-block.tb-content-block-banners-sidebar"}],[1753445817,{"a":".banner-wide-border"}],[1198771667,{"a":".banner-article-wide,\n.banner-inline,\n.col-article-3.non-mobile,\n.lazyloading"}],[86845944,{"a":".title-right-banner,\ndiv[style=\"background: url('client/img/sep-1.gif') repeat-x center;\"]"}]]);

const hostnamesMap = new Map([["legionas.lt",2076008807],["liguabc.lt",833162603],["lituanicon.lt",1657323982],["pump.lt",1657323982],["lkl.lt",127835590],["lova.lt",682646670],["lrprezidentas.lt",777414517],["lrt.lt",[2017675595,982541433]],["ziukai.lt",982541433],["lrvalstybe.lt",275508079],["lrytas.lt",756222179],["macpartija.lt",1348227885],["madairgrozis.lt",496482196],["magic-shop.lt",1006839187],["mainyk.lt",1108256353],["mamairtetis.lt",1078502710],["mamairvaikas.lt",433362107],["mamyciuklubas.lt",1219640064],["man.lt",1920117719],["mano-gargzdai.lt",1968910074],["manodienynas.lt",622379180],["manoekonamai.lt",886056364],["manonamai.lt",[1753445817,1198771667]],["moteris.lt",1753445817],["panele.lt",1753445817],["tavovaikas.lt",1753445817],["maps.lt",86845944]]);

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
