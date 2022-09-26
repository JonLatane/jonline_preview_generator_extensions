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

// nld-0

const argsMap = new Map([[1818796526,{"a":".powered_by_page,\n.powered_by_profile"}],[2144020325,{"a":"#adf-rectangle,\n.ad-centering"}],[621873134,{"a":"div[style^=\"width:300px; height:250px;\"]:has([id*=\"google\"])"}],[416005714,{"a":".c-newsList__story--partnernews,\n.mpu"}],[479091140,{"a":".header-ads__custom-ad"}],[1381336655,{"a":"#wa_web_headertofloor,\n.trueTop"}],[1461676299,{"a":".advert"}],[709047891,{"a":".container-fluid.site-header"}],[218982896,{"a":".home-billboard"}],[973833092,{"a":".match-sponsor"}],[1905267974,{"a":"div[style=\"min-height: 600px; margin-bottom: 20px;\"]"}],[1260808695,{"a":".telefoon_verberg,\n[class^=\"va\"]:has([class*=\"banner\"]),\n[id^=\"abri\"],\n[id^=\"fp\"],\na[href^=\"/_global/leesmeer.php?\"]"}],[735813423,{"a":".article-premium-promotion-block,\n.slajeslag,\na[data-ga-event^=\"link-tip\"]"}],[1075962658,{"a":".nomobile:has(img[src$=\".gif\"])"}],[1083376981,{"a":".widget:has(iframe[src*=\"/aff_ad?\"])"}],[2038980828,{"a":"[id^=\"menu-item-\"] > [href^=\"https://go2.go2cloud.org/aff_ad\"]"}],[1064734594,{"a":"a[href] > img.size-full.aligncenter"}],[1855224858,{"a":"[id^=\"gridlove-module-\"]:not(.module-type-posts):not(.module-type-cats)"}],[1633910053,{"a":"#exitpopup-modal"}],[1303552952,{"a":".banners"}],[1145112898,{"a":".katernbanners"}],[804200427,{"a":".onderdelenshop"}],[417478558,{"a":".cato_content:nth-of-type(2),\n.cato_footer:nth-of-type(3)"}],[675629483,{"a":".proradio-owl-sponsorcarousel"}],[784206814,{"a":".vc_raw_html.td_block_wrap.wpb_wrapper"}],[427823396,{"a":".t-banner"}],[987720050,{"a":"[id^=\"text\"]:has(a[href^=\"https://www.goedkoopstekeukensduitsland.nl\"][href$=\"-bnr\"]),\nimg[width=\"300\"][height=\"250\"]"}],[1672351316,{"a":".c-sponsors"}],[656263387,{"a":"#advertorial-destination"}],[1215504727,{"a":"a[rel*=\"sponsored\"]"}],[164222838,{"a":"#omc-sidebar li.gowit-widget:has(img):not(:has(a[href*=\"gowiththevlo.nl\"]))"}],[2065515544,{"a":".plistaAllOuter"}],[327202259,{"a":"#menuinner > ul#menuinner > .cat"}],[967924493,{"a":".widget:has(.adsbygoogle)"}],[1584513192,{"a":".spot-on"}],[522538789,{"a":".cp-webcam-gallery-container,\n.lazyloaded.block-bordered"}],[760357345,{"a":"#lijst_logos,\n.logoblok"}],[1947119795,{"a":"aside.widget:has(figure img)"}],[2076465826,{"a":".promotion_link"}],[1415373073,{"a":".jeg_midbar:has([class^=\"ads-wrapper\"])"}],[46980294,{"a":".Billboard,\n.LargeRectangle"}],[1011842935,{"a":".ja-banner"}],[649224460,{"a":"div[class$=\"banners-wrapper\"]"}],[141133025,{"a":"div[id^=\"handb-\"]"}],[136020635,{"a":"aside > div[class]:has( > .adsbygoogle),\naside.widget-banner"}],[1389022896,{"a":"[class*=\"mb-\"]:has([id$=\"ros-970x250\"])"}],[2106811251,{"a":"div[class*=\"-bannerWrapper-\"]"}],[471873929,{"a":"#flex_left:has([id=\"div-gpt-ad\"])"}],[522094039,{"a":"[id^=\"navbar_notice\"]:has(.adsbygoogle)"}],[1526277404,{"a":".fixed-ads,\n.footer-blocks,\n.footer-sponsors"}],[751592579,{"a":".td-a-rec.td-a-rec-id-content_bottom > a[href],\nbody > center:has(img)"}],[739231360,{"a":".a-widget,\ndiv[class^=\"post-content description\"] > div[class]:not(.sharedaddy):not(:has(img)),\nrssapp-carousel"}],[61883179,{"a":"#tpl_banners"}],[1498318701,{"a":".affiliates"}]]);

const hostnamesMap = new Map([["fhm500.nl",1818796526],["filmtotaal.nl",2144020325],["finance.nl",621873134],["financialinvestigator.nl",416005714],["flexnieuws.nl",479091140],["fok.nl",1381336655],["folderz.nl",1461676299],["intermediair.nl",1461676299],["spel.nl",1461676299],["spelletjes.nl",1461676299],["willem-ii.nl",1461676299],["freesoccer.nl",709047891],["funda.nl",218982896],["ga-eagles.nl",973833092],["gamereactor.nl",1905267974],["gaynews.nl",1260808695],["geenstijl.nl",735813423],["geile-adressen.nl",1075962658],["geilefotoverhalen.nl",1083376981],["geileverhalen.nl",2038980828],["geilverlangen.nl",1064734594],["geldpedia.nl",1855224858],["manpedia.nl",1855224858],["vrouwpedia.nl",1855224858],["genotsplekje.nl",1633910053],["pornoplekje.nl",1633910053],["gic.nl",[1303552952,1145112898]],["kbradio.nl",1303552952],["nieuws.nl",1303552952],["gigantfm.nl",804200427],["girlpics.nl",417478558],["girlpowerradio.nl",675629483],["gloednieuw.nl",784206814],["glutenvrij.nl",427823396],["goedkoopstekeukensduitsland.nl",987720050],["golf.nl",1672351316],["gooieneemlander.nl",656263387],["leidschdagblad.nl",656263387],["noordhollandsdagblad.nl",656263387],["gostreaming.nl",1215504727],["gowiththevlo.nl",164222838],["gratisaftehalen.nl",2065515544],["gratiscams.nl",327202259],["gratisepub.nl",967924493],["gratispittigesexfilms.nl",1584513192],["hetegangbang.nl",1584513192],["gratispornofilm.nl",522538789],["greenkeeper.nl",760357345],["groningsnieuws.nl",1947119795],["guidinc.nl",2076465826],["guldencourant.nl",1415373073],["guruwatch.nl",46980294],["h2owaternetwerk.nl",1011842935],["halstadcentraal.nl",649224460],["handbalinside.nl",141133025],["handbalstartpunt.nl",136020635],["hardnieuws.nl",1389022896],["hartvannederland.nl",2106811251],["shownieuws.nl",2106811251],["vandaaginside.nl",2106811251],["vivandaag.nl",2106811251],["headliner.nl",471873929],["helpmij.nl",522094039],["heracles.nl",1526277404],["hoekschnieuws.nl",751592579],["hollywoodhuizen.nl",739231360],["hotradiohits.nl",61883179],["hvzeeland.nl",1498318701]]);

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
