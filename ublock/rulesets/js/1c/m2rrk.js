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

const argsMap = new Map([[1967050135,{"a":".adremark"}],[1289914972,{"a":".middle-ad-container"}],[443216614,{"a":".ennensisaltoa,\n.lmbanner"}],[970636245,{"a":".type-banner"}],[1293867249,{"a":".article-blocks-2022-divider:not(.article-block--2022 + .article-blocks-2022-divider),\n.asuntorauma-promo,\n.page-section--commercial,\n.palvelupankki-banner,\naside[class=\"undefined\"] > [class^=\"advertisement ad advertisement\"] + [class^=\"advertisement ad advertisement\"] + section[class^=\"undefined\"]:last-of-type"}],[2107750158,{"a":".ads__native-tall-teaser,\n.banners__suomen-parhaat,\ndiv[class*=\"ArticleTeaserGroup_nativeAd\"]"}],[860143558,{"a":".header_banner,\n.textwidget"}],[757787889,{"a":"div[class|=\"ad-section\"]"}],[1042724317,{"a":"div#skyscraper-height-div > aside > div > div > a[href^=\"/kumppaniblogit/\"],\ndiv#skyscraper-height-div > section > div > a[href^=\"/kumppaniblogit/\"]"}],[669794931,{"a":"div#skyscraper-height-div > div > section > div > a[href^=\"/kumppaniblogit/\"]"}],[1351787576,{"a":"div.structItem.is-prefix53"}],[1429153271,{"a":"div#topbanner,\ndiv#tyopaikat-joblift--avainpaikat"}],[521231461,{"a":"a[href=\"https://mailapro.fi/\"],\na[href=\"https://urheilutuet.fi/\"],\na[href=\"https://vesikourut.fi/\"],\namp-layout[amp-access^=\"popups.\"][role=\"undefined\"]"}],[373193164,{"a":"aside > div[class] > a[href=\"/kumppanisisaltoa\"]"}],[1735125746,{"a":".aprofit,\n.section--native-left,\n.teaser--partner,\n.teaser-top-banner--partner,\n[data-set=\"main-ad\"]"}],[1604850609,{"a":".NoAdBlocker_main"}],[400126440,{"a":".is-visible.LazyLoad,\naside > div > div > a[href^=\"https://studio.mikrobitti.fi/mikrobitti-studiovieras/\"]"}],[612853338,{"a":".elementor-widget-container > a[href^=\"https://sortter.fi/\"]"}],[1101330422,{"a":"#header_ad33,\n#ostoHint,\n.banner-ad,\n.execphpwidget,\n.header_ad,important,\n.headermob_ad,\n.single-content-all > div[style^=\"float:left\"][style*=\"width:100%\"][style*=\"text-align:center\"][style*=\"margin-bottom:17px\"],\n.singlehinta.header_ad,\n.textwidget > div[style=\"width:300px; height:600px;\"],\n.tops-bar,\nbody.category > div .header_ad"}],[994609869,{"a":".block--monsterfi-ads,\n.epiq-landing-row--frontpage-leaderboard-ad"}],[1447954755,{"a":".category-kumppaniartikkeli.moottori_kumppani.smallfeature,\n.container.g-bg.ads.sidebar.item,\n.kumppaniartikkeli-sidebar.smallfeature,\n.narive-ad"}],[831444075,{"a":"div[class|=\"undefined\"]"}],[912623566,{"a":".ad-panorama"}],[1178620273,{"a":".component-adincontent.component,\n.component-soniaincontent,\n.leaderboard,\n.sonia-container"}],[1764732530,{"a":".ppas,\ndiv[data-testid=\"endorsement\"]"}],[390238733,{"a":".add-banner"}],[387670491,{"a":".promotional_banner_root"}],[476809905,{"a":"#banneriwrapper,\n.mobilead"}],[1876934351,{"a":".mob_panorama"}],[2138617397,{"a":".panorama"}]]);

const hostnamesMap = new Map([["lbaanijakuva.fi",1967050135],["livetaajuus.fi",1289914972],["lomamatkalle.fi",443216614],["lounaspori.fi",970636245],["ls24.fi",1293867249],["maaseuduntulevaisuus.fi",2107750158],["maaseutumedia.fi",860143558],["markkinointiuutiset.fi",757787889],["marmai.fi",[1042724317,669794931]],["tekniikkatalous.fi",669794931],["matkapuhelinfoorumi.fi",1351787576],["mbnet.fi",1429153271],["mediaviikko.fi",521231461],["mediuutiset.fi",373193164],["metsalehti.fi",1735125746],["metsastysjakalastus.fi",1604850609],["tekniikanmaailma.fi",1604850609],["mikrobitti.fi",400126440],["misssuomi.fi",612853338],["mobiili.fi",1101330422],["monster.fi",994609869],["moottori.fi",[1447954755,831444075]],["terve.fi",831444075],["motouutiset.fi",912623566],["mtvuutiset.fi",1178620273],["app.mtvuutiset.fi",1764732530],["mutsimedia.fi",390238733],["myheritage.fi",387670491],["napsu.fi",476809905],["navigatormagazine.fi",[1876934351,2138617397]],["promaintlehti.fi",2138617397]]);

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
