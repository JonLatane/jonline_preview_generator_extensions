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

const argsMap = new Map([[1174077816,{"a":".slideshow"}],[1538664173,{"a":".list-ads > .iframe:not(.whyreview)"}],[989451455,{"a":"#main > .ads"}],[407615366,{"a":"#right-sidebar,\n.adsanity-single,\n.top-bar"}],[1147540656,{"a":".cat-kaupallinen-yhteistyo"}],[1014827551,{"a":"#auto-grid-container-5c40764673d19"}],[583560573,{"a":"[data-test=\"undefined\"][href^=\"https://www.uusisuomi.fi/kumppanisisallot/\"],\n[width]:has(.lazyload-wrapper):not(aside),\naside [href^=\"https://track.adform.net/\"],\naside [href^=\"https://www.ilmarinen.fi/\"]"}],[609983966,{"a":".partner-blog-list,\n.side-list.commercial-blog-studio,\na[class*=\"undefined\"]"}],[2146062627,{"a":".widget_block"}],[2098069599,{"a":"#bodyarea td[width=\"100%\"][valign=\"top\"] + td[valign=\"top\"]"}],[1933710081,{"a":"div.display-ad"}],[1906529485,{"a":".online-promotion-bar"}],[862868780,{"a":".type-advertorial"}],[1026443217,{"a":".sdaelem.td-block-span12,\n.vausda"}],[331709149,{"a":"[href^=\"https://kampanjat.is.fi/\"],\na[href$=\"vauvabanneri\"],\ndiv.cts-row-wrapper"}],[1428385011,{"a":".ads_carousel-2.widget"}],[1408338156,{"a":".page-ad__location,\n.vu-adlabel,\n.vu-content-injected-middle,\narticle.rp-lift.featured-post,\nsection[id^=\"front-page-parade\"],\nsection[id^=\"front_page_parade\"]"}],[194023878,{"a":".banner-mainos,\n.mobiiliylabanner"}],[1739035695,{"a":".d-md-block.d-lg-block.d-none,\n.kumppani-artikkelit,\ndiv[class*=\"undefined\"] > div[class=\"undefined\"] > p > a[href^=\"https://danskebank.fi/\"],\ndiv[class^=\"undefined\"] > a[href=\"https://www.viisasraha.fi/Taloushaltuun\"]"}],[1247454203,{"a":".td-a-rec,\n[href^=\"https://in.matsmart.fi/t/\"],\n[href^=\"https://track.adtraction.com/\"]"}],[763881818,{"a":".article-sponsored,\na[class=\"article-item articlestream-item unloaded\"][data-sponsored=\"1\"],\nsection[class^=\"undefined\"] + section[class^=\"sbs-articleitems full-size-list\"][data-module_position_id=\"612\"]"}],[1202838280,{"a":".voima-banneri-etusivulla,\n.voima-jutun-sisalla-mobiili"}],[1831423296,{"a":".widget_media_image"}],[1833643757,{"a":".mobile-top-ad"}],[1501846560,{"a":".adBanner"}],[1382800755,{"a":".bfastmag-a-d-v,\na[href=\"https://ostalohjalta.fi\"],\na[href=\"https://ostavihdista.fi\"]"}],[388689068,{"a":".ad[class*=\"undefined\"]"}],[1732927408,{"a":".tarranurkka,\na[href^=\"/artikkeli-kaupallinen-\"]"}],[738859301,{"a":".b-otavamedia-ads,\n.gb-otavamedia-ad,\n.wrap-top-ad"}],[450307971,{"a":"#fel-ad-banner"}]]);

const hostnamesMap = new Map([["tulikulma.fi",1174077816],["tuntopalvelu.fi",1538664173],["turuntienoo.fi",989451455],["ulvilanseutu.fi",407615366],["urjalansanomat.fi",1147540656],["uudenkaupunginsanomat.fi",1014827551],["uusisuomi.fi",583560573],["puheenvuoro.uusisuomi.fi",609983966],["vapaavuoro.uusisuomi.fi",609983966],["uusiteknologia.fi",2146062627],["vagarena.fi",2098069599],["vantaansanomat.fi",1933710081],["vasabladet.fi",1906529485],["vastranyland.fi",862868780],["vau.fi",1026443217],["vauva.fi",331709149],["venelehti.fi",1428385011],["verkkouutiset.fi",1408338156],["viikkopk.fi",194023878],["viisasraha.fi",1739035695],["viranomaisuutiset.fi",1247454203],["voice.fi",763881818],["voima.fi",1202838280],["wizhdsports.fi",1831423296],["x2.fi",1833643757],["xracing.fi",1501846560],["ykkoslohja.fi",1382800755],["ylasatakunta.fi",[388689068,1732927408]],["yrittajat.fi",738859301],["fel.gg",450307971]]);

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
