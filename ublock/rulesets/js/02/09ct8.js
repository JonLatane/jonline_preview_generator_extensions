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

const argsMap = new Map([[355772857,{"a":"div[id*=\"undefined\"]","n":["nettimokki.com"]}],[1102557576,{"a":"#block-annonsblockx6,\n#block-bilwebbenmobileteaser,\n#block-googleaddesktopinsider,\n#block-marknadenmobileteaser,\n#block-stickyannons,\n#block-views-block-bilwebben-block-1,\n#block-views-block-company-ads-block-1,\n.editorial-ad"}],[929611061,{"a":"div[id|=\"undefined\"]"}],[1672824897,{"a":".mobileads"}],[1670557424,{"a":"#div-gpt-ad-below-navi + div[style~=\"background-color:blue;\"]"}],[2118392155,{"a":"#div-ad-below-message,\n.pageWidth > div[style=\"min-height:90px;text-align:center;margin:auto;\"],\n.sidebar > div[style=\"min-height:250px;text-align:center;margin:auto;\"]"}],[896039906,{"a":"[href^=\"https://tc.tradetracker.net/\"],\ndiv.text-center.col-sm-6 > a[rel$=\"undefined\"]"}],[490914150,{"a":"#block-local-offers-widget-front,\n.optionset-imported-ads,\n.revive-block,\n.view-imported-ad-ams"}],[1485859903,{"a":".ad.right-col-box,\n.banner-slot-box"}],[212602625,{"a":"[class^=\"undefined\"]"}],[418568198,{"a":".ad-slot,\n.mobile-leaderboard-container,\n.resize-container"}],[495078666,{"a":"div[id^=\"undefined\"]"}],[2064454737,{"a":".ad-container"}],[177187781,{"a":"a[href*=\"undefined\"]"}],[776083563,{"a":".pnad-container"}],[857620861,{"a":".td-post-content > .social-share ~ *"}],[614721379,{"a":".bc--grey-neutral-50,\n.card-article-ads"}],[617448945,{"a":"#topBanner"}],[1614611636,{"a":"a[href*=\"tema.fi\"]"}],[82390243,{"a":".affilistaukset,\n.leovegas,\n[href^=\"https://promo.leovegas.com/\"],\n[href^=\"https://www.leovegas.com/\"],\na[href^=\"https://ads.expekt.se/\"],\na[href^=\"https://www.expekt.com/\"],\ndiv[class=\"artikkeli_body\"] > p:first-of-type > a[href$=\".gif\"],\ndiv[class=\"artikkeli_body\"] a[href*=\"-Expekt-\"],\np img.alignnone[src$=\".png\"][alt=\"\"][width=\"2560\"][height^=\"20\"]"}],[261916636,{"a":"a[aria-label=\"Mainostajan linkki\"],\na[aria-label=\"undefined\"]"}],[1298469148,{"a":"#billboard,\n#logopal,\n.flexibox,\n.shopster,\ndiv[style=\"background: rgb(246, 66, 100) none repeat scroll 0% 0%; color: rgb(255, 255, 255); padding: 20px;\"]"}],[222704515,{"a":"div[class*=\"undefined\"]"}],[178567189,{"a":"#fillaritori_mobileheader,\n#ipsLayout_mainArea > center,\n.ipsLayout_sidebarright"}],[336562489,{"a":".mvp-side-widget.widget_text,\n[data-advadstrackid],\n[href=\"https://bonuspanda.com/fi/\"],\n[href=\"https://casinogorilla.com/fi/nettikasinot/\"],\n[href=\"https://pussit.com\"],\n[href=\"https://www.halvinlaina.fi\"]"}],[1802467679,{"a":"#gp-natives,\n.carousel-cell--native,\n.content-continues-after-ad,\n.golfliitto-articles__commercial,\n.main-native,\n.native-carousel,\n.search-results > .section--ad__mob,\n.section--ad__panorama,\n.section--ad__rectangle,\n.section-native-list,\nbody.bbpress > .content-wrapper .section--ad"}],[1318759624,{"a":".td_block_template_1.td-a-rec-id-custom-spot.td-a-rec.td-block,\na[href$=\"koronaavastaan.fi/?ref=metrotuotanto\"]"}],[2074142771,{"a":".td-a-rec-id-sidebar"}],[1756448215,{"a":"A[href=\"http://www.satshop.fi\"]"}],[1531556355,{"a":".boxi"}]]);

const hostnamesMap = new Map([["alandstidningen.ax",[1102557576,929611061]],["foreca.fi",929611061],["rantapallo.fi",929611061],["talouselama.fi",929611061],["viranomaisuutiset.fi",929611061],["mikrobitti",929611061],["nyan.ax",1672824897],["afterdawn.com",1670557424],["keskustelu.afterdawn.com",2118392155],["aijaa.com",896039906],["aland.com",490914150],["alypaa.com",[1485859903,212602625]],["elmotv.com",[212602625,82390243]],["futisfani.com",[212602625,336562489]],["kalamies.com",212602625],["kiekkofani.com",[212602625,336562489]],["penkkiurheilu.com",[212602625,336562489]],["uutisankka.com",[212602625,336562489]],["impe.fi",212602625],["ampparit.com",[418568198,495078666,2064454737]],["findance.com",495078666],["golfpiste.com",[495078666,1802467679]],["muropaketti.com",495078666],["nettiauto.com",495078666],["nettikaravaani.com",495078666],["nettikone.com",495078666],["nettimarkkina.com",495078666],["nettimokki.com",495078666],["nettimoto.com",495078666],["nettivaraosa.com",495078666],["nettivene.com",495078666],["nettivuokraus.com",495078666],["alibi.fi",495078666],["anna.fi",495078666],["eralehti.fi",495078666],["hymy.fi",495078666],["kaksplus.fi",495078666],["kansalainen.fi",495078666],["kipparilehti.fi",495078666],["kotilaakari.fi",495078666],["kotiliesi.fi",495078666],["koululainen.fi",495078666],["rakennusmaailma.fi",495078666],["rakentaja.fi",495078666],["seura.fi",495078666],["suomenkuvalehti.fi",495078666],["tekniikanmaailma.fi",495078666],["ticketmaster.fi",495078666],["tilannehuone.fi",495078666],["vauva.fi",495078666],["venelehti.fi",495078666],["irc-galleria.net",495078666],["luukku.com",2064454737],["iijokiseutu.fi",2064454737],["kaleva.fi",2064454737],["kirkkojakaupunki.fi",2064454737],["koillissanomat.fi",2064454737],["kuntalehti.fi",2064454737],["lapinkansa.fi",2064454737],["mtvuutiset.fi",2064454737],["pyhajokiseutu.fi",2064454737],["raahenseutu.fi",2064454737],["rantalakeus.fi",2064454737],["seiska.fi",[2064454737,222704515]],["siikajokilaakso.fi",2064454737],["studio55.fi",2064454737],["styleroom.fi",2064454737],["keskustelu.suomi24.fi",[2064454737,222704515]],["arcticinsider.com",177187781],["murobbs.muropaketti.com",177187781],["sammysatv.com",177187781],["motouutiset.fi",177187781],["moottoripyora.org",177187781],["arvokisat.com",[776083563,857620861]],["herkkusuut.com",[776083563,857620861]],["laliiga.com",[776083563,857620861]],["leijonat.com",[776083563,857620861]],["nainen.com",[776083563,857620861]],["nhlsuomi.com",[776083563,857620861]],["suomif1.com",[776083563,857620861]],["suomikiekko.com",[776083563,857620861]],["suomikoris.com",[776083563,857620861]],["suomiurheilu.com",[776083563,857620861]],["susijengi.com",[776083563,857620861]],["tinderinparhaat.com",776083563],["valioliiga.com",[776083563,857620861]],["viikonloppu.com",[776083563,857620861]],["metropoli.net",776083563],["sketsi.net",[776083563,857620861]],["eurheilu.org",[776083563,857620861]],["suomifutis.com",857620861],["askelterveyteen.com",614721379],["myanimals.com",614721379],["aitiydenihme.fi",614721379],["mielenihmeet.fi",614721379],["autotalli.com",617448945],["brbikers.com",1614611636],["facebook.com",261916636],["feissarimokat.com",[1298469148,222704515]],["autobild.fi",222704515],["helsinginuutiset.fi",222704515],["high.fi",222704515],["hs.fi",222704515],["kuljetusnet.fi",222704515],["meillakotona.fi",222704515],["moottori.fi",222704515],["suomi24.fi",222704515],["terve.fi",222704515],["vihdinuutiset.fi",222704515],["viikkopk.fi",222704515],["fillaritori.com",178567189],["halloota.com",1318759624],["hardelli.com",2074142771],["huoltovalikko.com",1756448215],["ilmastointilaitteet.com",1531556355]]);

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
