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

const argsMap = new Map([[305170811,{"a":"#linkpartners > :has(.homebanner)"}],[1139581498,{"a":".dfp"}],[1618868622,{"a":".partners_immo"}],[532601887,{"a":"div[id^=\"voetb-\"]"}],[1506126331,{"a":"[id$=\"takeover\"]"}],[374916483,{"a":".adds,\n.panel-box:has(a[href^=\"http://unibet.me/\"])"}],[728434679,{"a":".sponsors"}],[1587061234,{"a":".pe__container__ads,\n.pui__adinfo,\ndiv.pui__seekbar__cuepoints"}],[1373159236,{"a":"[id^=\"text\"]:has(.adsbygoogle),\ndiv.google"}],[891500208,{"a":".blocker"}],[802582983,{"a":"#mm_hpa,\n.affiliate_links,\n.mm_container,\n.row [class^=\"widget\"]:has(.mm_container),\ndiv[id*=\"mm_leaderboard\"]"}],[1128138242,{"a":".c-advertiser-logos"}],[1787720578,{"a":".sponsers"}],[1147619182,{"a":".video-description > .under-video-block"}],[751131093,{"a":".bannerblock"}],[1410491604,{"a":".sponsorbanner"}],[496482196,{"a":".bannergroup"}],[1597053705,{"a":".wp-block-column > center:has([data-src*=\"banners\"]),\n[href^=\"https://islive.com/\"],\n[href^=\"https://www.twero.com/\"]"}],[1148484028,{"a":"#exo"}],[777736200,{"a":".elementor-element iframe[data-ezsrc*=\"Bitcoin_Kopen\"]"}],[669299843,{"a":".elementor-widget-slides:has(.swiper-wrapper)"}],[645124448,{"a":".sda"}],[1991147342,{"a":".g"}],[613585110,{"a":".widget-area-bottom.align-center:has(.adsbygoogle),\naside[class^=\"widget widget_text\"]"}],[821397543,{"a":".affiliatelink"}],[412721304,{"a":".hootslider-image-wrapper,\n[id^=\"media_image\"]:has([href*=\"/bitvavo\"]),\ndiv[id^=\"dutch-\"]:has(a[href^=\"https://bitvavo.com/\"])"}],[1715656500,{"a":".Billboard-wrapper,\n.Rectangle-wrapper"}],[901595675,{"a":"td[align=\"center\"]:has( > hr):has([href^=\"/banner\"]),\ntd[rowspan=\"2\"][width=\"590\"]:has(a[href^=\"/banner\"]):not(:has(img[src*=\"Hier kan uw banner staan\"]))"}],[53347089,{"a":".ai-viewport-1"}],[552976189,{"a":"a[href^=\"https://casinoscout.nl/\"]"}],[1751316300,{"a":".leaderboardbg"}],[1266152646,{"a":".clearfix.widget > :has(.sponsors)"}],[1482518176,{"a":"[id^=\"custom_html-\"]:has(.adsbygoogle),\np:has(.adsbygoogle)"}],[1456428079,{"a":".match-bet,\n.special-offer,\n.top-match"}],[1638807548,{"a":"div[id^=\"adtemplate\"],\ndiv[id^=\"bannerhome\"]"}],[384438090,{"a":".ms-hapb,\n.ms-side-items--with-banner,\n.ms-side-widget--custom-links__wrapper"}],[540253412,{"a":".publ1s-b0ttom,\n[class^=\"r1ght-pl4yer\"]"}],[847922627,{"a":"#left_div li:not( > a[target=\"_blank\"]),\n#toplist_bodem li:not(:scope > a[target=\"_blank\"]),\n#videos_div_v > .clear_line"}],[2121080112,{"a":".bottom-bns-block,\n.player-right"}],[1656602388,{"a":"a[href^=\"/out/\"]"}],[1163358884,{"a":".col-md-16:has([style*=\"greystripe\"]),\n.widgetbar > div.row > :has(.widget-partners)"}],[935963476,{"a":"#adsense_CSA"}],[647016452,{"a":".adsense"}],[912124916,{"a":"[id^=\"PanelTopAds\"]"}],[881115411,{"a":"#visible_ad_1"}],[1706776121,{"a":"#video-right"}],[376814985,{"a":".leftColumn.cell > div:has(.sponsorImg)"}],[61031775,{"a":"[id^=\"custom_html-\"]:has([src^=\"https://bannerbuilder.sponsorkliks.com/\"])"}],[1625717900,{"a":".blockvertorial,\n.min-h-90,\n.searchvertorial"}],[1057569801,{"a":"div[data-advert-placeholder-size]"}],[597140744,{"a":".column:has(.advert)"}],[1177117824,{"a":".bannermid"}],[372463525,{"a":"[class=\"rand nomobile\"]:has(img[src^=\"/images/\"])"}],[906638747,{"a":"[id^=\"custom_html-\"]:has(iframe),\n[id^=\"text-\"]:has([src$=\"ads.js\"])"}]]);

const hostnamesMap = new Map([["vlaanderen-sexdate.be",305170811],["vlan.be",1139581498],["immo.vlan.be",1618868622],["voetbalbelgie.be",532601887],["voetbalnieuws.be",1506126331],["voetbalvandaag.be",374916483],["volleybelgium.be",728434679],["fcgroningen.nl",728434679],["mijnserie.nl",728434679],["nec-nijmegen.nl",728434679],["trappers.nl",728434679],["vtm.be",1587061234],["watchfaces.be",1373159236],["whiskyprijzen.be",891500208],["whiskyprix.be",891500208],["whiskyprijzen.nl",891500208],["wielerflits.be",802582983],["wielerflits.nl",802582983],["wradio.be",1128138242],["niburu.co",1787720578],["az.nl",1787720578],["cambuur.nl",1787720578],["ga-eagles.nl",1787720578],["12milf.com",1147619182],["402online.com",751131093],["amsterdamtigers.com",1410491604],["antilliaansdagblad.com",496482196],["dolcevia.com",[496482196,821397543]],["lokaleomroepzeewolde.nl",496482196],["radiolelystad.nl",496482196],["beeldbelsex.com",1597053705],["bellotube.com",1148484028],["cryptobenelux.com",777736200],["dagbladdewest.com",669299843],["dartsnieuws.com",645124448],["androidworld.nl",645124448],["f1maximaal.nl",645124448],["indeleiderstrui.nl",645124448],["dbsuriname.com",1991147342],["binnenvaartkrant.nl",1991147342],["dartfreakz.nl",1991147342],["oogtv.nl",1991147342],["regioinbedrijf.nl",1991147342],["seksmet.nl",1991147342],["sleutelstad.nl",1991147342],["westerwoldeactueel.nl",1991147342],["digitaalburg.com",613585110],["dutchcryptotalk.com",412721304],["eurobench.com",1715656500],["belegger.nl",1715656500],["beursonline.nl",1715656500],["debeurs.nl",1715656500],["floranews.com",901595675],["gfcnieuws.com",53347089],["gpfans.com",[552976189,1751316300]],["playboy.nl",552976189],["leerlingen.com",1266152646],["leerzaam.com",1482518176],["live-voetbal.com",1456428079],["motokicx.com",1638807548],["nl.motorsport.com",384438090],["nedporno.com",540253412],["nlsexfilmpjes.com",847922627],["nltube.com",2121080112],["nummerzoeker.com",1656602388],["onderwijsland.com",1163358884],["openingstijden.com",[935963476,647016452]],["promootjesite.nl",647016452],["radiofm.nl",647016452],["persberichten.com",912124916],["petities.com",881115411],["pornozot.com",1706776121],["radio0511.com",376814985],["rtvalbrandswaard.com",61031775],["scholieren.com",1625717900],["forum.scholieren.com",1057569801],["secretcircle.com",597140744],["seks.com",1177117824],["sexdatingholland.com",372463525],["negerinnensexdating.eu",372463525],["kinkysexcontactonline.nl",372463525],["neukplaza.nl",372463525],["privesexgids.nl",372463525],["stellensexdating.nl",372463525],["studentesexcontact.nl",372463525],["tienersexpret.nl",372463525],["zinomteneuken.nl",372463525],["sexervaringdelen.com",906638747]]);

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
