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

// fin-0

const argsMap = new Map([[62877394,{"a":".ad2"}],[603728751,{"a":"div[style=\"width:970px;height:250px;margin:0 auto;margin-top:25px;\"]"}],[1741209337,{"a":".ad-article"}],[1766938174,{"a":".tdm-pricing-wrap,\n.tdm_block_pricing,\n.wpforo-ad,\na[href^=\"https://affmore.com/\"],\na[href^=\"https://record.njordaffiliates.com/\"]"}],[1872562059,{"a":"#hise-items-container"}],[1211101302,{"a":"#text-81,\n#text-82"}],[287833669,{"a":"#partners-container-big,\n[id=\"undefined\"][class=\"content hrecipe\"] ~ [style=\"float: left; width: 100%; height: 200px; padding-left:20px; padding-right:20px; box-sizing:border-box; background-color:#fff;\"]"}],[570751876,{"a":"#ticker"}],[736963352,{"a":".ads-desktop,\n.ads-mobile"}],[1157955793,{"a":"div.centered.motot-well-inverse.well[style^=\"undefined\"]"}],[1831624053,{"a":".content-center.header-nav-ad,\n.premium_container,\n[href=\"https://www.cbdtukku.fi/\"],\n[href=\"https://www.halvinlaina.fi/\"],\na[href*=\"tarjousproffa.com\"],\na[href=\"https://lainaa.com/\"],\na[href=\"https://loistehammasharja.com/\"],\na[href^=\"https://kasino\"],\na[href^=\"https://www.kasino\"],\na[href^=\"https://www.kippis.net/\"]"}],[2132447982,{"a":".cb-banneri-uusi"}],[1129985778,{"a":"[href=\"http://www.vertaa.fi/lentoliput/\"]"}],[1633719781,{"a":".all-adds"}],[309998354,{"a":"#PowerRectangle,\n#PowerSkyscraper,\n[href^=\"https://tc.tradetracker%2Enet/\"],\na[rel^=\"sponsored\"]"}],[183873586,{"a":"footer > .container.tdt-ad-wrap"}],[1529595775,{"a":"#p0,\ndiv[id=\"undefined\"] > div:first-of-type[style=\"overflow:visible\"],\nul[id=\"undefined\"] + div[style=\"overflow:visible\"]"}],[382642803,{"a":".piwikTrackContent a[href]:not([href=\"mailto:support@tokentube.net\"],[href^=\"https://buy.stripe.com\"]),\na[data-content-piece$=\"_files_right_top\"],\na[data-content-piece=\"view_files_payer_bottom1\"]"}],[183009032,{"a":"#fb-root + div > div[style=\"background-color: #fff; margin: 0 auto; padding: 20px; display: table; min-width: 300px; max-width: 100%; font-family: 'Open Sans', sans-serif; font-size: 14px;\"],\n.ad300x300"}],[1184619028,{"a":"#div-ff2-top"}],[2123291430,{"a":"[href^=\"https://kasinopartio.com/\"]"}],[143402320,{"a":"#mw-data-after-content > div,\na[id=\"undefined\"] ~ [id=\"undefined\"][class=\"undefined\"]"}]]);

const hostnamesMap = new Map([["2pos.life",62877394],["aasiakas.net",603728751],["deitti.net",1741209337],["gekkonen.net",1766938174],["huuto.net",1872562059],["kokemakelainen.net",1211101302],["kotikokki.net",287833669],["kuvake.net",570751876],["metropoli.net",736963352],["motot.net",1157955793],["mvlehti.net",1831624053],["esports.pallomeri.net",2132447982],["polttoaine.net",1129985778],["puskaradio.net",1633719781],["riemurasia.net",309998354],["sketsi.net",183873586],["vapaasana.swedishforum.net",1529595775],["tokentube.net",382642803],["vuodatus.net",183009032],["futisforum2.org",1184619028],["pt-media.org",2123291430],["taisto.org",143402320]]);

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
