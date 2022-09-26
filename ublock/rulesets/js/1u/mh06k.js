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

// pol-2

const argsMap = new Map([[600374255,{"a":".wgAdBlockMessage,#adbd"}],[688954668,{"a":".error.notification"}],[212855518,{"a":"#text-16.widget.widget_text"}],[440100985,{"a":"body > div[class=\"pub_300x250 text_ads ad_container\"][style] + div[class]:not([id])"}],[641308253,{"a":"#overlay"}],[1035928933,{"a":".adsbygoogle"}],[252374423,{"a":"#infobar,#intertext1 > div > .tborder"}],[393579730,{"a":".ad-sidebar,\n.ad-text-headbaner"}],[1077464298,{"a":"#myModal,\n.modall-content"}],[1564252236,{"a":"i#g207"}],[1033559668,{"a":"#bab"}],[1777455517,{"a":".no-ads-info"}]]);

const hostnamesMap = new Map([["4geek.co",600374255],["admitad.com",688954668],["androidbeztajemnic.com",212855518],["interaktywnie.com",440100985],["mazury.com",440100985],["open.fm",440100985],["abczdrowie.pl",440100985],["allani.pl",440100985],["autokrata.pl",440100985],["autokult.pl",440100985],["biztok.pl",440100985],["dobreprogramy.pl",440100985],["dzieci.pl",440100985],["easygo.pl",440100985],["echirurgia.pl",440100985],["fotoblogia.pl",440100985],["gadzetomania.pl",440100985],["hotmoney.pl",440100985],["inwestycje.pl",440100985],["jejswiat.pl",440100985],["kafeteria.pl",440100985],["kantory.pl",440100985],["kazimierzdolny.pl",440100985],["komediowo.pl",440100985],["komorkomania.pl",440100985],["mojeauto.pl",440100985],["mojeosiedle.pl",440100985],["money.pl",440100985],["nasygnale.pl",440100985],["niewiarygodne.pl",440100985],["nocowanie.pl",440100985],["o2.pl",440100985],["odkrywcy.pl",440100985],["parenting.pl",440100985],["pudelek.pl",440100985],["pytamy.pl",440100985],["sfora.pl",440100985],["snobka.pl",440100985],["tlen.pl",440100985],["totalmoney.pl",440100985],["wakacje.pl",440100985],["wawalove.pl",440100985],["wp.pl",440100985],["kafeteria.tv",440100985],["pudelek.tv",440100985],["wp.tv",440100985],["medianarodowe.com",641308253],["pro-prints.pl",641308253],["wzory-cv.com",1035928933],["dniwolne.eu",1035928933],["kulturalnemedia.pl",1035928933],["mybank.pl",1035928933],["mmorpg.org.pl",1035928933],["parezja.pl",1035928933],["polscygracze.pl",1035928933],["forum.purepc.pl",1035928933],["topfilmiki.pl",1035928933],["xboxforum.pl",1035928933],["zarabiam.com",252374423],["chelmski.eu",393579730],["polskihurtworld.eu",1077464298],["porteuropa.eu",1564252236],["starachowice.eu",1033559668],["who-called.eu",1777455517]]);

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
