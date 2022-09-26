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

// nor-0

const argsMap = new Map([[1190831604,{"a":".boksmarg"}],[1041674459,{"a":".code-block > p"}],[2064486953,{"a":"div[class*=\" advertisement-GP-\"]"}],[1451227225,{"a":".ad-netboard-front,\n.section-10"}],[379619402,{"a":".internal-poster"}],[603884267,{"a":".container-ad"}],[1858889227,{"a":".dfptop"}],[536588580,{"a":".elementor-widget-theme-post-content + .elementor-widget-text-editor"}],[550213033,{"a":".widget_links,\na[href$=\"/vpn-til-mac/\"]"}],[2090830387,{"a":"#site-main > main + div.container"}],[816993998,{"a":"font > table:first-of-type"}],[1667413769,{"a":"#rt-sidebar-c,\n.custom > p:nth-of-type(1n+2)"}],[334120037,{"a":"#cookie,\n.td-ss-main-sidebar,\n.td-visible-desktop,\n.tdm-mobile-full,\n[class=\"undefined\"],\na[href*=\"dekristne.no\"],\na[href*=\"ekstrahus.no\"],\na[href*=\"pureorganic.no\"],\na[href=\"https://resett.no/annonseweb/\"]"}],[1233658480,{"a":".p_banner-responsive"}],[855494642,{"a":".adp-inscreen"}],[341081108,{"a":"#right_side,\n.anonse"}],[1169401928,{"a":"#mobil-toppboard,\n#top-banner-wrap"}],[351174737,{"a":"a[href*=\"partner-ads.\"]"}],[1463586942,{"a":".doubleclickAd,\n.markupbox"}],[2027743841,{"a":".sb-widget"}],[239984942,{"a":"#sponsor,\n#sponsor_frame_front_white,\n#sponsor_large"}],[1731489796,{"a":"#g-expanded,\n#g-utility > .g-container"}],[1104687091,{"a":".row.hidden-print:not(.vspace)"}],[1535489917,{"a":"main > noscript:first-of-type + div[class*=\" \"]"}],[1414368808,{"a":".footer > .wf-wrap,\n.row-si"}],[424059286,{"a":".footer_widget.widget-3"}],[802911718,{"a":"#bannerAdmeenRectangleTopContainer,\n.banner-leaderboard,\n.push"}],[1131835904,{"a":"#consumer_service_tipping,\n#stop-sticky-ad + h4,\ndiv[class*=\" adStyles__\"],\ndiv[class*=\"undefined\"][data-ga-category^=\"undefined\"]"}],[1366106169,{"a":"article.ad"}],[602488993,{"a":".wpls-logo-clearfix"}],[662312499,{"a":"#topbanner"}],[843097964,{"a":"#top-announce"}],[1396779901,{"a":"div.studv-widget.widget"}],[872598351,{"a":".code-block-1"}],[2061178753,{"a":".fromod_section_2,\n.notnews"}],[428542437,{"a":".advertisement-responsive"}],[475090357,{"a":".ad-nexus-ad"}],[1323121786,{"a":".spacer"}],[715472041,{"a":"#application > div[class]:nth-of-type(1):nth-last-of-type(2),\n.big-preamble.access-public.commercial,\n.partnerstudio-ad-inline,\nbody:before,\nmain > div > section + div:last-of-type,\nsection[class*=\"undefined\"]"}],[2128674930,{"a":".page-home__logos-sidebar"}]]);

const hostnamesMap = new Map([["ordtak.no",1190831604],["parcferme.no",1041674459],["poki.no",2064486953],["pressfire.no",1451227225],["prissok.no",379619402],["procycling.no",603884267],["purehelp.no",1858889227],["radiololand.no",536588580],["ranaposten.no",550213033],["xn--bodposten-n8a.no",550213033],["randaberg24.no",2090830387],["rbkweb.no",816993998],["reiseplaneten.no",1667413769],["resett.no",334120037],["rett24.no",1233658480],["retten.no",855494642],["rorfag.no",341081108],["samferdselinfra.no",1169401928],["seksualitet24.no",351174737],["side2.no",1463586942],["skaunnytt.no",2027743841],["skinnelangs.no",239984942],["smartepenger.no",1731489796],["sognavis.no",1104687091],["sol.no",1535489917],["spaniaidag.no",1414368808],["spill.no",424059286],["spillespill.no",802911718],["startsiden.no",1131835904],["steinkjer24.no",1366106169],["storfjordnytt.no",602488993],["storm.no",662312499],["studenttorget.no",843097964],["studievalg.no",843097964],["studvest.no",1396779901],["sva.no",872598351],["sveip.no",2061178753],["sykepleien.no",428542437],["sysla.no",475090357],["talkmore.no",1323121786],["tek.no",715472041],["teknologiskmatforum.no",2128674930]]);

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
