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

const argsMap = new Map([[1846476701,{"a":".lb-adx-frame.ad-marker,\ndiv[id^=\"undefined\"] + div"}],[1345304694,{"a":"img[src$=\"rozmarinas.gif\"]"}],[1921190224,{"a":"#komentaru-top-left,\n#sticky-reklama,\n.article_showcase_1,\n.panel-separator,\niframe[src*=\"diena.lt/cview.php\"]"}],[416865048,{"a":".header-reklama-pagrindine-top-new"}],[828306050,{"a":".headtop"}],[1178500404,{"a":".middle[style=\"border:none;padding:5px 0px;\"] *"}],[318866231,{"a":"img[title=\"Poko.lt = (lietuviški blogai + socialiniai tinklai) * vienas kitas algoritmas\"]"}],[2090358993,{"a":".row.dr-ad-top"}],[1530948109,{"a":".rkl"}],[1197563205,{"a":"div[style=\"border: solid 3px #fcb617; width: 166px; padding: 8px 0px 8px 5px;\"]"}],[1460643213,{"a":".module-content A > img"}],[523223484,{"a":"#sotewsadds"}],[1239685741,{"a":".footer-container > *"}],[95746040,{"a":"#friends_block,\n#lojalumas_block"}],[1766787681,{"a":".randomcontent.group1 + * + * + * > *,\n[style=\"border:1px solid #000000;padding:6px;\"],\ntd[bgcolor=\"#FFFFFF\"][align=\"undefined\"][style=\"border:1px solid #000000;\"]"}],[1353117150,{"a":"td[style^=\"TEXT-ALIGN: \"]"}],[1035928933,{"a":".adsbygoogle"}],[1461676299,{"a":".advert"}],[1397260256,{"a":"#popup-w"}],[1809490279,{"a":".xoxo.blogroll a[href=\"/\"] > img,\na[href=\"http://www.fotofaze.lt\"] > img"}],[776970443,{"a":"div[style=\"text-align: center\"]"}],[2017361574,{"a":"[src^=\"http://www.friendsclub.lt/banners/\"] + *"}],[939641486,{"a":"a[href=\"http://www.vilniausgidas.lt\"]"}],[1025734021,{"a":"#marquee > .tickercontainer img"}]]);

const hostnamesMap = new Map([["m.delfi.lt",1846476701],["depresijosklubas.lt",1345304694],["diena.lt",1921190224],["kauno.diena.lt",416865048],["domoplius.lt",828306050],["dovanos.lt",1178500404],["dratas.lt",318866231],["draugas.lt",2090358993],["fortuna.draugas.lt",1530948109],["pazintys.draugas.lt",1197563205],["drg.lt",1460643213],["ecoland.lt",523223484],["efarma.lt",1239685741],["ekopirk.lt",95746040],["elektronika.lt",1766787681],["elta.lt",1353117150],["eurobasket.lt",1035928933],["fightclub.lt",1461676299],["fotofabrikas.lt",1397260256],["fotofaze.lt",1809490279],["fotoservisas.lt",776970443],["friendsclub.lt",2017361574],["g-taskas.lt",939641486],["gamtosnamai.lt",1025734021]]);

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
