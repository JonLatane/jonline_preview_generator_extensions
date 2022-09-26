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

// isr-0

const argsMap = new Map([[1833679916,{"a":"#bannerDiv,\n#leftBanner,\n#rightBanner"}],[449488383,{"a":".plasma_banner,\ndiv[id^=\"banner\"]"}],[891072468,{"a":"#exposeMask,\n#maavaron_overlay,\n.cnoHcopedbackground,\n.logo,\n.sponsoredbackground,\n[id^=\"takeover\"]"}],[374414943,{"a":"#innerMoodaa2,\n#mekodam,\n.Ozen300,\n.mood.hidden-sm.hidden-md.hidden-xs,\n.mood1240-100,\n.sargelWarp,\n[href^=\"https://moodaot.kipa.co.il/gomodaa.php\"],\ndiv.textim > div > .mood > .moodiframe.oneMood,\ndiv.textim > div > .mood > .moodiframe.oneMood > div"}],[74079145,{"a":".textlinks_wide.textlinks"}],[1765967763,{"a":".w-full.bg-grey-100.header-banner-wrapper"}],[1255286586,{"a":"a[target=\"_blank\"]"}],[758131006,{"a":"#link_banner,\n.banner_300x224,\n.banner_main"}],[424449342,{"a":".HorizontalCategoryArticleAndBannerFloor,\n.TwoBannersFloor,\n.article-5-outbrain-script,\n.article-9-outbrain-script,\n.article-bottom-banner,\n.article-box-banner-wrap,\n.article-details-banner,\n.article-left-side-banner,\n.article-left-side-outbrain,\n.article-top-banner,\n.banner-left-home,\n.box-banner-wrap,\n.horizontal-banner-wrap,\n.news-feed-banner,\n.right-side-outbrain,\n.xl-banner-wrap"}],[1266761166,{"a":".header-div-banner"}]]);

const hostnamesMap = new Map([["jobmaster.co.il",1833679916],["junkyard.co.il",449488383],["kikar.co.il",891072468],["kipa.co.il",374414943],["forum.lametayel.co.il",74079145],["www.lametayel.co.il",1765967763],["linicom.co.il",1255286586],["link4u.co.il",758131006],["maariv.co.il",424449342],["sport1.maariv.co.il",1266761166]]);

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
