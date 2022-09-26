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

const argsMap = new Map([[618954823,{"a":"a[href*=\"online.adservicemedia.dk\"]","n":["playpilot.com"]}],[2127995098,{"a":".prisguidePost","n":["prisguiden.no"]}],[2029777067,{"a":"a[href*=\"finn.no/realestate/newbuildings/ad.htm\"]","n":["finn.no"]}],[1905503031,{"a":"a[href*=\"casinotop.com\"]","n":["casinotop.com"]}],[198897652,{"a":"a[href*=\"norges.casino\"]","n":["norges.casino"]}],[760418083,{"a":"a[href*=\"casino24.dk\"]","n":["casino24.dk"]}],[948967413,{"a":"a[href*=\"onlinecasinoer.com\"]","n":["onlinecasinoer.com"]}],[1137618578,{"a":".advertisement","n":["basketnews.lt","hero-magazine.com","ut.no"]}],[1587523342,{"a":".annonse:not(.article-entity)","n":["rockefeller.no"]}],[1488220784,{"a":"[class^=\"undefined\"]:not(html,body)","n":["candidate.hr-manager.net"]}],[841625908,{"a":"a[href*=\"nettavisen.no/sportspill/tipping/blir-du-mangemillionr-pa-onsdag\"],\na[href*=\"norsk-tipping.no/flax\"],\na[href*=\"norsk-tipping.no/lotteri/eurojackpot\"],\na[href*=\"norsk-tipping.no/lotteri/extra\"],\na[href*=\"norsk-tipping.no/lotteri/lotto\"],\na[href*=\"norsk-tipping.no/lotteri/viking-lotto\"],\na[href*=\"norsk-tipping.no/lotteri/vikinglotto\"],\na[href*=\"norsk-tipping.no/sales/validateCouponAndStoreToSession.json\"]","n":["norsk-tipping.no","tipster.no","online.no","epost.telenor.no","com"]}],[1295599662,{"a":".td-a-rec","n":["nytid.no"]}],[964002717,{"a":".rek-wrapper"}],[132721564,{"a":".ni_holder"}],[495078666,{"a":"div[id^=\"undefined\"]"}],[2088529343,{"a":".wpa"}],[1040166157,{"a":".eaa.widget_text"}],[1681705283,{"a":".banner.ad"}],[2025852435,{"a":".custom-a-ds,\n.post-content > .items-container"}],[378106983,{"a":".dividerBlock:not(.clearfix)"}],[177187781,{"a":"a[href*=\"undefined\"]"}],[653733138,{"a":".mk-padding-divider"}],[940249433,{"a":".bannerlocation:not(#location1)"}],[1461676299,{"a":".advert"}],[1840903644,{"a":".affiliate,\ndiv[class$=\"undefined\"]"}],[2138617397,{"a":".panorama"}],[1902837245,{"a":"#sidebar,\n.threadbit:not([id])"}],[1062498508,{"a":".ipsSpacer_both"}],[325886457,{"a":"#left > .bgbottom > .moduletable"}],[11444807,{"a":"a[href*=\"undefined\"][href*=\"undefined\"]"}],[1397141878,{"a":".textwidget > p"}],[1250817779,{"a":".bottom_space"}],[510300983,{"a":".takeover.modals"}],[331074908,{"a":".bannerspot"}],[743013784,{"a":".banner"}],[1501391531,{"a":"#streamsbottomad,\n#streamstopad"}],[1513014909,{"a":"#annonse_side,\n#midten"}],[1733651792,{"a":".td-g-rec"}],[1508496100,{"a":"#before-matches,\n#clickable-bg,\n#event_banner,\n#panorama,\n.panorama-wrapper,\n.partners-section,\n.tvg-manager-tracking-event,\na.p-icon.partner"}],[1158010451,{"a":".odds"}]]);

const hostnamesMap = new Map([["sermitsiaq.ag",964002717],["no.afterdawn.com",132721564],["afterdawn.dk",132721564],["alle-apningstider.com",495078666],["langrenn.com",[495078666,940249433,1461676299]],["danishfamilysearch.dk",495078666],["ekstrabladet.dk",495078666],["gastrofun.dk",495078666],["goerdetselv.dk",495078666],["jyllands-posten.dk",495078666],["nyheder24.dk",[495078666,177187781,743013784]],["sundhedsguiden.dk",495078666],["tidende.dk",495078666],["tvguide.dk",495078666],["fotbolti.net",495078666],["indblik.net",495078666],["aftenposten.no",495078666],["bt.no",495078666],["finn.no",495078666],["fiskeribladet.no",495078666],["itavisen.no",[495078666,743013784]],["klikk.no",495078666],["vg.no",[495078666,1461676299]],["apningstider.org",495078666],["alternativ-media.com",2088529343],["bloggomtoppbloggere.com",1040166157],["bypatrioten.com",1681705283],["ligeher.nu",1681705283],["eavisa.com",2025852435],["gjerrigknark.com",378106983],["gunnarandreassen.com",177187781],["norskemagasinet.com",[177187781,11444807]],["sporten.com",177187781],["fodboldspilleren.dk",177187781],["iphoneluppen.dk",177187781],["ni.dk",177187781],["addpressure.no",177187781],["artige.no",177187781],["butikkoversikten.no",177187781],["eikernytt.no",177187781],["finansleksikon.no",177187781],["godtnoe.no",177187781],["handballmagasinet.no",177187781],["latterkula.no",177187781],["leinstrand-il.no",177187781],["nettavisen.no",177187781],["pappaportalen.no",177187781],["startsidendin.no",177187781],["teknologia.no",177187781],["icelandreview.com",653733138],["nhi.no",1461676299],["mytastednk.com",[1840903644,2138617397]],["mytastenor.com",[1840903644,2138617397]],["tv3sport.dk",2138617397],["nakenprat.com",1902837245],["noresk.com",1062498508],["eroguide.dk",1062498508],["norsk-rally.com",325886457],["reiseliv.no",11444807],["onlinenytt.com",1397141878],["oyggjatidindi.com",1250817779],["playpilot.com",510300983],["salangen-nyheter.com",331074908],["sedirekte.com",[743013784,1501391531]],["dagens.dk",743013784],["dust2.dk",743013784],["kanalfrederikshavn.dk",743013784],["landbrugsavisen.dk",743013784],["politirapporten.dk",743013784],["tilbudsugen.dk",743013784],["videnskab.dk",743013784],["alletilbudsaviser.co.no",743013784],["subjekt.no",743013784],["tilbudsuken.no",743013784],["sistenytt.com",1513014909],["spritnyt.com",1733651792],["tvkampen.com",[1508496100,1158010451]],["tvsporten.dk",1508496100]]);

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
