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

const argsMap = new Map([[1092782527,{"a":".squarebanner"}],[2135959150,{"a":"#imagecontainer.header-image-container"}],[964554796,{"a":"#popopen[url=\"http://www.maxima.lt/asortimentas/meistro-kokybes-grilio-gaminiai-1/\"],\n.remas"}],[170387525,{"a":"#product-view-blokas-lizingas"}],[1923697950,{"a":".description"}],[1652044333,{"a":".partners"}],[790350334,{"a":".mainBannerContainer,\na[href^=\"/sportas/straipsnis/kai-truksta-vitaminu-gelbsti-papildai-\"]"}],[2081984913,{"a":".box_outer.widget_awpcp-latest-ads + * + * *"}],[1635138914,{"a":".index_ads1"}],[614732098,{"a":".banner-desktop,\n.banner-mobile"}],[84994049,{"a":".module-outer"}],[1944480281,{"a":"#categories-3 + * a[target=\"undefined\"]"}],[630634206,{"a":"img[src*=\"undefined\"]"}],[2132025366,{"a":".banner1"}],[1578678927,{"a":"a[target=\"undefined\"]"}],[304546001,{"a":".bannerWrapper"}],[109308938,{"a":"#leftBanners,\n#startBanners"}],[1619159839,{"a":".column.right,\n.section.vertical.mt20"}],[1050045102,{"a":".article-banner"}],[1330828074,{"a":"div[style=\"border: 1px solid black; text-align: center; margin-bottom: 10px; font-size: 12px;  padding-top: 10px; padding-bottom: 10px; width: 628px; margin-left: 81px;\"]"}],[716925907,{"a":".promotion.cp-banner *,\n.top-banner-ex"}],[1642853797,{"a":"[style=\"font-family: georgia,palatino; font-size: 10pt;\"] > a[href^=\"http://\"],\na + * + a"}],[1374984652,{"a":".baneriokas + * *"}],[922758865,{"a":".pp-article-banner,\na[href=\"http://www.perpasauli.lt/naujienos/10-ispudingiausiu-austrijos-kampeliu.d?id=64743063&utm_source=external&utm_medium=newsexport&utm_campaign=250x500\"] > img"}]]);

const hostnamesMap = new Map([["martens.lt",1092782527],["masazonamai.lt",2135959150],["maxima.lt",964554796],["mediashop.lt",170387525],["medicina.lt",1923697950],["miegantysdrambliai.lt",1652044333],["skytech.lt",1652044333],["minfo.lt",790350334],["miske.lt",2081984913],["miskobirza.lt",1635138914],["moteris.lt",614732098],["panele.lt",[614732098,1050045102]],["tavovaikas.lt",[614732098,1050045102]],["motersgrozis.lt",84994049],["musupaveldas.lt",1944480281],["mususavaite.lt",630634206],["siloaidas.lt",630634206],["spainetosdraudimas.lt",630634206],["nemokamosknygos.lt",2132025366],["tvenkiniu-projektai.lt",2132025366],["niekonaujo.lt",1578678927],["vilniaus-turtas.lt",1578678927],["nklyga.lt",304546001],["officeday.lt",109308938],["one.lt",1619159839],["pasikeisk.lt",1330828074],["pasveik.lt",716925907],["pegasusfoto.lt",1642853797],["perkuvaikui.lt",1374984652],["perpasauli.lt",922758865]]);

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
