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

// grc-0

const argsMap = new Map([[1137187153,{"a":"A.fjmdiucexipcopnrmtke"}],[748315464,{"a":"DIV#shopping-normal"}],[712442950,{"a":"IFRAME.blockrandom"}],[301671370,{"a":"#main-content > .content-wrap:nth-of-type(1) > .content > .candiabanners-index"}],[923781248,{"a":"A[href*=\"http://www.capital.gr/click.asp\"],\nTABLE[style=\"border: 1px solid rgb(194, 210, 216); background-color: rgb(240, 248, 255); font-size: 12px; padding: 2px;\"]"}],[32257971,{"a":".below-facets-ad,\n.carzilla-ad > li,\n[href*=\"funshop.gr\"],\nol > li:has(.carzilla-ad),\nol > li:has([href*=\"funshop.gr\"])"}],[1898275020,{"a":".infacets.maskshop,\n.inlist.maskshop"}],[1740578830,{"a":"#adLinks"}],[1422340928,{"a":"div[class=\"story-textlinks row\"]"}],[2060032369,{"a":"DIV.banner-side,\nDIV[style=\"width: 285px; float: right; overflow: hidden;\"]"}],[1721818738,{"a":"#adtxtlink,\n#editor_link[style*=\"background:transparent url(http://www.sport24.gr/incoming/article\"],\n#top_story_wrap > .grid_12 > div:nth-of-type(7) > a[href^=\"http://www.stoiximan.gr\"],\n.mythos,\nA.cokeLink,\nA.cokeLink2,\nA[href*=\"http://adserver.itsfogo.com/click.aspx\"],\nA[href*=\"http://el.betclic.com/\"],\nA[href*=\"http://www.betclic.com/\"],\nA[href=\"http://goo.gl/3vrB4h\"],\nA[href=\"http://www.dealin.gr/?utm_source=contra.gr&utm_medium=fasa&utm_term=eurobasket&utm_content=xorigos&utm_campaign=contra_eurobasket\"],\nDIV#bfair,\nDIV.proan,\nDIV[style=\"border-bottom: 5px solid rgb(0, 102, 204); clear: both;\"],\nIMG[alt=\"in association with betoto\"],\ndiv[class=\"ad468\"],\ndiv[class=\"ad728\"],\ndiv[class=\"betotoTxtPrem\"],\ndiv[class=\"bfairTxtPrem txtLink\"],\ndiv[class=\"intTxtPrem txtLink\"],\ndiv[class=\"trailer\"],\ndiv[class=\"txtLink\"],\ndiv[id=\"ctl00_Div1\"],\ndiv[id=\"s2c\"]"}],[2121637213,{"a":"#stoiximan-cont > a[href^=\"http://www.stoiximan.gr\"]"}],[1190567336,{"a":".leftClickable,\n.rightClickable"}],[1716628296,{"a":"A[href*=\"http://www.plaisio.gr\"]"}]]);

const hostnamesMap = new Map([["avgi.gr",1137187153],["bestprice.gr",748315464],["bno.gr",712442950],["www.candiadoc.gr",301671370],["capital.gr",923781248],["car.gr",32257971],["www.car.gr",1898275020],["clickatlife.gr",1740578830],["cnn.gr",1422340928],["sfl.com.gr",2060032369],["contra.gr",[1721818738,2121637213,1190567336,1716628296]],["www.sport24.gr",2121637213],["cosmo.gr",1190567336],["www.techgear.gr",1190567336],["sport-fm.gr",1716628296],["sport24.gr",1716628296]]);

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
