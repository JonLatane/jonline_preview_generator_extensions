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

const argsMap = new Map([[2063296911,{"a":"aside.widget_media_image.widget.td_block_template_1"}],[2134323916,{"a":"aside.widget_media_image.widget"}],[676896706,{"a":".geeki-before-content,\n.geeki-la-inceput-de-articol-mobil"}],[919648704,{"a":".gofollow,\n[href=\"http://prohd.ro\"],\n[href=\"http://www.avis3000.ro/\"],\n[href=\"http://www.jos-palaria.ro/\"],\n[href^=\"https://www.fordcarbenta.ro/\"]"}],[1558094581,{"a":".widget_custom_html"}],[278697523,{"a":".bireklam"}],[946741398,{"a":"#master\\.dreapta\\.carlig\\.smartw_12938869,\n#medlive_6844636,\n#pageBodyx > .padded_page_body > .contentFather > .content > .right_side > a > img,\n#rss\\.domnuleprimar_5328294,\n#rss\\.euractiv_20456596,\n#rss\\.medlive_20312972,\n#rss\\.webpr_6183168,\n.articol_lead_full[style=\"width: 158px; margin-right:5px; float:left;\"],\n.at-widget-anunturi,\n.parteneri"}],[1416589698,{"a":"#\\$\\{tile\\.name\\}_\\$\\{tile\\.id\\}"}],[880205556,{"a":"#adswidget1-quick-adsense-reloaded-2,\n#banners-4,\n.banners"}],[864958158,{"a":"#billboard,\n#rectangle,\n.fake_grooveskin"}],[1270713059,{"a":".height-sm-250.height-xs-400.text-center.mg-bottom-20,\n.mg-top-20.container--single.container > .mg-bottom-20"}],[1655634112,{"a":"#text-25"}],[1979849055,{"a":".banner_image"}],[606305339,{"a":".bannerad,\n[src=\"http://www.informatia-zilei.ro/sm/wp-content/uploads/2013/10/banner-alma-spa.jpg\"]"}],[612916786,{"a":".panel[class*=\"undefined\"]"}],[1346189703,{"a":".code-block"}],[1527630119,{"a":".custom-html-widget.textwidget"}],[1971601394,{"a":"#text-2"}]]);

const hostnamesMap = new Map([["focuspress.ro",2063296911],["gazetadinvest.ro",2134323916],["geeki.ro",676896706],["glasul-hd.ro",[919648704,1558094581]],["lapunkt.ro",1558094581],["hdfilmeonline.ro",278697523],["hotnews.ro",946741398],["science.hotnews.ro",1416589698],["i-car.ro",880205556],["ilike-it.ro",864958158],["impact.ro",1270713059],["impactpress.ro",1655634112],["infobistrita.ro",1979849055],["informatia-zilei.ro",606305339],["inturda.ro",612916786],["investigatoria.ro",1346189703],["jocuricool.ro",[1527630119,1971601394]],["motorclasic.ro",1527630119]]);

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
