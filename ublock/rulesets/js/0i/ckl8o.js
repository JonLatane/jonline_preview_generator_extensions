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

// swe-1

const argsMap = new Map([[2087280470,{"a":"#cookieWindow"}],[961919935,{"a":"[class*=\"banner_\"],.BottomBannerContainer"}],[33648874,{"a":".third-col,article[class*=\"sponsrad\"]"}],[978522721,{"a":".lazyload_bar.show,.lazyload_outer.show,.sponsrat,.is_native,.sticky-scroll"}],[1612741891,{"a":".widget.facebook,.content > div:not([class]) img,a[href*=\"www.casino\"]"}],[755796745,{"a":"header > div.g"}],[275634753,{"a":"a[href*=\"casino\"]"}],[1003624696,{"a":".article--sponsored,.resource--sponsored,.component--sticky-sponsor-banner,.pre-banner,.banner--toppanorama,.banner--mobiletoppanorama,.banner--midpanorama"}],[75491496,{"a":".cookieControl"}],[1710778932,{"a":".mailpoet_form,#secondary"}],[940162994,{"a":".visible-lg,.hidden-lg"}],[823192737,{"a":".modal-cookieform"}],[1046210805,{"a":".pfm-partners,.pff-partners,.c-widget-ad,.c-teaser--native,#toBanner"}],[959274993,{"a":"#panoramaholder,#parallax"}],[1259884262,{"a":".sidealtcol"}],[617711508,{"a":".txs-a"}],[1026854180,{"a":"[class^=\"Banner\"]"}],[1917853920,{"a":"div.adfit,.cookie_notice,div[style^=\"width:100%;max-width: 728px;\"] > div[align=\"center\"],div[style^=\"width:100%;max-width: 728px;\"] > br"}],[1832147504,{"a":"a.gofollow[data-track]:not([href*=\"www.popularastronomi.se\"])"}],[94522691,{"a":"#consent,\na[href*=\"&clickarea=sponsored\"]"}],[340884394,{"a":"a.teaser[href*=\"/annonssamarbete/\"],a.teaser[href*=\"/promotion/\"],.category-promotion"}],[422450365,{"a":".g1-popup-newsletter,.g1-slideup-wrap"}],[1721720336,{"a":".qxa-container"}],[633353648,{"a":".promo"}],[782824096,{"a":"#header > div > div.last,#block-4"}],[1763083761,{"a":".realtid-add"}],[617448945,{"a":"#topBanner"}],[867814920,{"a":".adsbox-wrapper,.banner-xxl_panorama-container,.banner-top-container"}],[672246268,{"a":".banner-col"}],[1371024676,{"a":"aside > div:has(a[href=\"/affarer/alska-arbetsgivarlivet/\"])"}],[754770852,{"a":".svrf__sticky-ad,.svrf-block__banner"}],[2058601606,{"a":".notices"}],[934345177,{"a":".cookie-disclaimer-wrap"}],[1403080072,{"a":".c-wysiwyg,a.c-news-post[href*=\"jackpott\"],a.c-news-post[href*=\"-casino-\"],a.c-news-post[href*=\"-betting-\"],.l-header__row.ui-bg--accent-yellow,a[href*=\"spelguiden.samnytt.se\"],.cp-info-bar"}],[1117115591,{"a":"#overlay-black"}],[248855055,{"a":".schac-widget"}],[400968977,{"a":".so-cookie__area"}],[1510441253,{"a":".fo-banner,.fp-banner"}],[1943424825,{"a":".rmss_module-block-linked_image"}],[264594561,{"a":".info_cookies"}],[121336480,{"a":"#main-sidebar .widget_media_image,#post-sidebar .widget_media_image,#content > .code-block"}],[1556979903,{"a":".baner-desktop,.baner-mobile,.banner-wrap"}],[2139891709,{"a":".topbanner"}],[1111710386,{"a":"a[href^=\"/annons\"]"}],[2079546102,{"a":"#text-41,#leader-wrapper"}],[227443349,{"a":"[id$=\"-ad\"]"}],[1112943347,{"a":"a.td_single_image_bg"}],[743261333,{"a":"div[data-block=\"CookieBannerBlock\"]"}],[408145561,{"a":"#black-studio-tinymce-3"}],[1218479004,{"a":"#topbanner,#mittbanner"}]]);

const hostnamesMap = new Map([["nordiskradio.se",2087280470],["nvp.se",961919935],["nyadagbladet.se",33648874],["nyheter24.se",978522721],["nyheteridag.se",1612741891],["nyhetersto.se",755796745],["obsid.se",275634753],["omni.se",1003624696],["omniekonomi.se",1003624696],["omvarlden.se",75491496],["skolvarlden.se",75491496],["opulens.se",1710778932],["ordguru.se",940162994],["oru.se",823192737],["padelfeber.se",1046210805],["piraja.se",959274993],["playradio.se",1259884262],["poddtoppen.se",617711508],["pomu.se",1026854180],["poolforum.se",1917853920],["popularastronomi.se",1832147504],["pricerunner.se",94522691],["privataaffarer.se",340884394],["pussad.se",422450365],["qx.se",1721720336],["ratsit.se",633353648],["ravarumarknaden.se",782824096],["realtid.se",1763083761],["recepten.se",617448945],["reseguiden.se",867814920],["restaurangvarlden.se",672246268],["resume.se",1371024676],["ridsport.se",754770852],["ruthless.se",2058601606],["sakochliv.se",934345177],["samnytt.se",1403080072],["scanaktier.se",1117115591],["schack.se",248855055],["schoolido.se",400968977],["screen-marknaden.se",1510441253],["sdhl.se",1943424825],["ssl.se",1943424825],["storvretaibk.se",1943424825],["sexpacket.se",264594561],["shoegazing.se",121336480],["shortcut.se",1556979903],["signprint.se",2139891709],["siljannews.se",1111710386],["sillyseason.se",2079546102],["siriusbandy.se",227443349],["vetlandabk.se",227443349],["sjostadsbladet.se",1112943347],["skandia.se",743261333],["skanesport.se",408145561],["skargarden.se",1218479004]]);

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
