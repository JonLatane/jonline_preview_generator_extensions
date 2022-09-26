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

const argsMap = new Map([[332382665,{"a":"#cmorelink,\ndiv[class=\"block block-block\"]"}],[1610019707,{"a":".adv,\n.adv_content,\n.adv_side"}],[270041769,{"a":".custom_banners_big_linkbefore-content,\n.custom_banners_big_linkwidget"}],[1756323814,{"a":"#mini-panel-autodoc_150x50,\n.gam-holder"}],[1201781766,{"a":"[style^=\"text-align:center;margin-left:auto !important;margin-right:auto !important;height: 420px; margin-top:60px\"]"}],[1096791740,{"a":".oxy-modal-backdrop"}],[928792901,{"a":".block-mainos"}],[723031412,{"a":".blog-wrapper .code-block"}],[1303552952,{"a":".banners"}],[1964664828,{"a":"div[class=\"undefined\"]"}],[1235748420,{"a":"a[href*=\"adsrv\"]"}],[611291536,{"a":".addme"}],[1330303938,{"a":"[href^=\"https://www.kasinokaverit.com/\"],\n[href^=\"https://www.lainaovi.fi/\"]"}],[1559961475,{"a":".lead-collector-cta"}],[1171569000,{"a":".ads"}],[907065322,{"a":"#ad-300x150,\n#ad-300x300,\ndiv[class=\"ad230x90\"]"}],[1099658013,{"a":"[href$=\"/pitkavetovihjeet/\"]"}],[1791246419,{"a":".mvp-post-ad-wrap"}],[2060197765,{"a":"div[aria-label=\"undefined\"] ~ div[data-max-width=\"2400\"] + div[class]"}],[829928828,{"a":"#bottom-offer"}],[440247615,{"a":"#banneri_yla,\n.banner.content"}],[1461676299,{"a":".advert"}],[713244583,{"a":".paid-content-wrapper"}],[667183232,{"a":".mtv-player-ad-container"}],[1157181572,{"a":".widget_ads_carousel,\n.widget_hintaopasbestprice,\nSECTION[id*=\"undefined\"]"}],[337221358,{"a":"#hintaopas_top_product_block,\nIFRAME[id=\"undefined\"],\nIFRAME[src=\"https://murobbs.muropaketti.com/aulis/muro-monster-feed.html\"]"}],[474400965,{"a":"[href=\"https://www.kasinokaverit.com/ilmaiskierroksia-nettikasinoilla/\"],\n[href=\"https://www.nainen.com/lainoja-kilpailuttamalla-saastat-aikaa-ja-rahaa/\"]"}],[1306730064,{"a":"#banner_area,\n.lazyLoadInhouseBanner,\n.topBannerMinHeight,\n[class*=\"undefined\"][class*=\"undefined\"][style*=\"border-top:1px solid #b3b3b3\"]"}],[998370190,{"a":"#homeBottomBoxBanner,\n#homeTopBoxBanner,\n#huge_banner,\n#largeViewHouseBanner,\n.huge-banner,\n.inh_banner_nl,\n.leftAdvDiv,\n.listing:not([data-id]):not(.tricky_link_listing),\n.quick-search__banner"}],[2060113176,{"a":".itemlist > li:not(.block_list_li)"}]]);

const hostnamesMap = new Map([["jatkoaika.com",332382665],["kalamies.com",[1610019707,270041769]],["edgeski.fi",1610019707],["foregolf.fi",1610019707],["rodeosnow.fi",1610019707],["kalastus.com",1756323814],["kiekkofani.com",1201781766],["penkkiurheilu.com",1201781766],["kodinkoneopas.com",1096791740],["koeajolle.com",[928792901,723031412]],["inssinosingot.fi",928792901],["koneporssi.com",1303552952],["konekuriiri.fi",1303552952],["kukasoitti.com",[1964664828,1235748420]],["murobbs.muropaketti.com",[1964664828,337221358]],["hinta.fi",1964664828],["iltalehti.fi",1964664828],["iltapulu.fi",1964664828],["kaleva.fi",1964664828],["puheenaiheet.fi",1964664828],["rantapallo.fi",1964664828],["satakunnankansa.fi",1964664828],["kuvaton.com",[611291536,1330303938]],["kuvake.net",611291536],["viikonloppu.com",1330303938],["laliiga.com",1559961475],["leijonat.com",[1559961475,1099658013]],["suomif1.com",1559961475],["leffatykki.com",[1171569000,907065322]],["lumipallo.fi",1171569000],["suomiurheilu.com",1099658013],["listafriikki.com",1791246419],["outlook.live.com",2060197765],["lottoarvonta.com",829928828],["luukku.com",440247615],["maastohiihto.com",[1461676299,713244583]],["jaatama.fi",1461676299],["retkilehti.fi",1461676299],["msn.com",667183232],["mtv.fi",667183232],["mtvuutiset.fi",667183232],["studio55.fi",667183232],["suomiareena.fi",667183232],["muropaketti.com",1157181572],["nainen.com",474400965],["m.nettiauto.com",1306730064],["m.nettikaravaani.com",1306730064],["m.nettikone.com",1306730064],["m.nettimarkkina.com",[1306730064,2060113176]],["m.nettimokki.com",[1306730064,2060113176]],["m.nettimoto.com",1306730064],["m.nettivaraosa.com",1306730064],["m.nettivene.com",1306730064],["m.nettivuokraus.com",1306730064],["www.nettiauto.com",998370190],["www.nettikaravaani.com",998370190],["www.nettikone.com",998370190],["www.nettimarkkina.com",998370190],["www.nettimokki.com",998370190],["www.nettimoto.com",998370190],["www.nettivaraosa.com",998370190],["www.nettivene.com",998370190],["www.nettivuokraus.com",998370190]]);

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
