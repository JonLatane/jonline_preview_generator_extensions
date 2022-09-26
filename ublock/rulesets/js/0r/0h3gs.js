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

const argsMap = new Map([[1327840562,{"a":"#sliding-popup"}],[772100977,{"a":".revive-wrapper"}],[1688686099,{"a":".front #secondary-content-wrapper"}],[269888049,{"a":".op-area"}],[1818617660,{"a":".gdpr"}],[1056499866,{"a":".cdk-overlay-container,iris-subscribe-footer,\nad-iris-sunt-ad-wrapper,ad-block,.native,ad-full-page-block,.ad-skeleton,\nwidget-family,widget-memorial,widget-marknadsguiden,widget-jobb-plus"}],[1641791012,{"a":"a[onclick*=\"Banner\"]"}],[638702475,{"a":"[class*=\"teaser-native\"],lcl-ad,.ad-welcome"}],[1370206582,{"a":".shader,#CookielawBanner,.info-center"}],[1833562546,{"a":".widget_sp_image,a[title^=\"ANNONS\"],.inner_sidebar .widget_text,.entry-content a[href*=\"utm_campaign\"]"}],[1438702902,{"a":".sponsored-articles-container,.nav-sep-blink,.annons-label,.index-side-banner-wrapper"}],[2138617397,{"a":".panorama"}],[1122112019,{"a":"#privacyModal,\n.available-services"}],[989779861,{"a":"#bt"}],[405003935,{"a":".frontPageBox--links"}],[361748909,{"a":".textwidget a[target=\"_blank\"]"}],[71767788,{"a":".js-banner-wrapper"}],[2047728477,{"a":"#g-header,#g-aside,#g-sidebar"}],[1769295201,{"a":"#ipsLayout_mainArea > iframe"}],[6794876,{"a":"td > a[target=\"_blank\"] img"}],[1494699829,{"a":"a[href*=\"bannerid\"]"}],[154645099,{"a":"#ConsentBanner"}],[1966488097,{"a":".box-of-announcement,a[href*=\"campaign\"][target=\"_blank\"],div[class*=\"rotating-\"],#bottombanner,#promoPopup"}],[1054783200,{"a":".header-static-lg,.fp-partner,.xs-ad,.bo-wrapper"}],[958822012,{"a":"a.gofollow[data-track]"}],[249379705,{"a":"div[class^=\"ad\"],a[href^=\"https://ads.\"],.header_sponsored"}],[134817460,{"a":".advertising,.sidebar .widget_text,.sidebar .widget_media_image"}],[1746101708,{"a":".cookie-popup,.overlay"}],[1989513310,{"a":".main-loader.loader-bg"}],[1970820092,{"a":".sponsored"}],[46819395,{"a":"gdpr-alert"}],[43180659,{"a":".anwp-pg-wrap"}],[2038847637,{"a":"#kadDiv,div[style=\"margin:25px 0;max-width:255px!important;\"],#scrollAdj ~ *"}],[1716647510,{"a":"td[width=\"305\"],br + a[href*=\"/casino\"]"}],[462595319,{"a":".sidebar .widget_custom_html"}],[255003439,{"a":"a[target=\"_blank\"] img[alt]"}],[1643931583,{"a":"article[data-type=\"native\"],.ag-product-wrapper,.product-carousel__container,.shop_carousel,.editorsPick"}],[619924784,{"a":".ad"}],[1326833433,{"a":"div[style=\"height: 120px;\"]:not([id]):not([class])"}],[1326476395,{"a":".et_bloom .et_bloom_flyin_center,a[href*=\"/?utm_medium=affiliate\"],a.bigblue[target]"}],[557827950,{"a":"#wsfb-container,.share-buttons,\n.inline-share-buttons"}],[1488310188,{"a":".blossom-newsletter-popup-active"}],[1081467924,{"a":"a[href*=\".com/annons\"],.td-ss-main-sidebar > .td-a-rec"}],[299082491,{"a":".mfp-wrap,.mfp-bg"}],[212572729,{"a":".stream-item"}],[865797004,{"a":"#top-wrapper"}],[788358944,{"a":"div.privacy_headsup_overlay"}],[947128528,{"a":".leaderboard"}],[1313037473,{"a":".show-consent"}],[95570682,{"a":".cookieScript"}]]);

const hostnamesMap = new Map([["alandsradio.ax",1327840562],["cgi.com",1327840562],["riksettan.net",1327840562],["klassiker.nu",1327840562],["automobil.se",1327840562],["bike.se",1327840562],["caroftheyear.se",1327840562],["endurobloggen.se",1327840562],["husbilhusvagn.se",1327840562],["kantarsifo.se",1327840562],["mopedgaraget.se",1327840562],["plastikoperationsforum.se",1327840562],["spraktidningen.se",1327840562],["svjt.se",1327840562],["ungforetagsamhet.se",1327840562],["vibilagare.se",1327840562],["alandstidningen.ax",772100977],["bilwebben.ax",1688686099],["bosidan.ax",269888049],["nyan.ax",1818617660],["borattforum.se",[1818617660,958822012]],["typkanske.se",1818617660],["affarsliv.com",1056499866],["kuriren.nu",1056499866],["corren.se",1056499866],["ekuriren.se",1056499866],["eposten.se",1056499866],["folkbladet.se",1056499866],["gotlandjustnu.se",1056499866],["helagotland.se",1056499866],["kindaposten.se",1056499866],["kkuriren.se",1056499866],["mvt.se",1056499866],["norran.se",1056499866],["norrbottensaffarer.se",1056499866],["nsd.se",1056499866],["nt.se",1056499866],["pt.se",1056499866],["sn.se",1056499866],["strengnastidning.se",1056499866],["unt.se",1056499866],["vimmerbytidning.se",1056499866],["vt.se",1056499866],["alltombrollop.com",1641791012],["alltomsallskapsspel.se",1641791012],["avestatidning.com",638702475],["salaallehanda.com",638702475],["st.nu",638702475],["allehanda.se",638702475],["arbetarbladet.se",638702475],["bandypuls.se",638702475],["bblat.se",638702475],["borlangetidning.se",638702475],["dalademokraten.se",638702475],["dt.se",638702475],["fagersta-posten.se",638702475],["falkopingstidning.se",638702475],["falukuriren.se",638702475],["gd.se",638702475],["hd.se",638702475],["ht.se",638702475],["jnytt.se",638702475],["jp.se",638702475],["ljusdalsposten.se",638702475],["ljusnan.se",638702475],["lt.se",638702475],["ltz.se",638702475],["moratidning.se",638702475],["na.se",638702475],["norrteljetidning.se",638702475],["nynashamnsposten.se",638702475],["op.se",638702475],["skaraborgslanstidning.se",638702475],["skd.se",638702475],["skovdenyheter.se",638702475],["smalandsdagblad.se",638702475],["smalanningen.se",638702475],["smt.se",638702475],["soderhamnskuriren.se",638702475],["sydsvenskan.se",638702475],["tidningenangermanland.se",638702475],["tidningenharjedalen.se",638702475],["tranastidning.se",638702475],["vastgotabladet.se",638702475],["vetlandaposten.se",638702475],["vlt.se",638702475],["vn.se",638702475],["se.azrhymes.com",1370206582],["bandyfeber.com",1833562546],["borsvarlden.com",1438702902],["bytbil.com",[2138617397,1122112019]],["alltforforaldrar.se",2138617397],["di.se",[2138617397,619924784]],["upphandling24.se",2138617397],["dagenstv.com",989779861],["dayviews.com",405003935],["dialasen.com",361748909],["worldkustom.com",361748909],["backpacking.se",361748909],["bussmagasinet.se",[361748909,958822012]],["byggteknikforlaget.se",361748909],["livetsgoda.se",361748909],["nyadagbladet.se",361748909],["opulens.se",361748909],["radiotreby.se",361748909],["ravarumarknaden.se",361748909],["sporthalsa.se",361748909],["torbjornstips.se",361748909],["doktorn.com",71767788],["edgeflyfishing.com",[2047728477,1769295201]],["jaktsidan.se",1769295201],["elektronikforumet.com",[6794876,1494699829]],["existenz.se",1494699829],["funfunfun.se",1494699829],["elinskoglund.com",154645099],["nouw.com",154645099],["fannystaaf.se",154645099],["lovisawallin.se",154645099],["moamattsson.se",154645099],["entreprenad.com",1966488097],["cleannet.se",1966488097],["dagenshandel.se",1966488097],["food-supply.se",1966488097],["foodnet.se",1966488097],["fri-kopenskap.se",1966488097],["habit.se",1966488097],["kemivarldenbiotech.se",1966488097],["lifesciencesweden.se",1966488097],["medtechmagazine.se",1966488097],["motormagasinet.se",1966488097],["packnet.se",1966488097],["plastnet.se",1966488097],["processnet.se",1966488097],["recyclingnet.se",1966488097],["rt-forum.se",1966488097],["skyddosakerhet.se",1966488097],["transportnet.se",1966488097],["uochd.se",1966488097],["verkstaderna.se",1966488097],["woodnet.se",1966488097],["fotboll.com",1054783200],["fotbollsresultat.com",958822012],["automation.se",958822012],["batliv.se",958822012],["brollopsmagasinet.se",958822012],["elinor.se",958822012],["em-fotboll.se",958822012],["globalpolitics.se",958822012],["husbyggaren.se",958822012],["nyhetersto.se",958822012],["svenskbyggtidning.se",958822012],["vm-fotboll.se",958822012],["fotbolltransfers.com",249379705],["gentlemannaguiden.com",134817460],["goteborg.com",1746101708],["hockeyguiden.com",1989513310],["hockeymagasinet.com",[1970820092,46819395]],["driva-eget.se",[1970820092,619924784]],["foretagande.se",1970820092],["revisionsvarlden.se",1970820092],["runnersworld.se",1970820092],["travelnews.se",1970820092],["utsidan.se",1970820092],["inpress.com",43180659],["kamrat.com",2038847637],["kolozzeum.com",1716647510],["kulturbloggen.com",462595319],["schack.se",462595319],["lindenytt.com",255003439],["varmepumpsforum.com",255003439],["autopower.se",255003439],["poolforum.se",255003439],["mabra.com",1643931583],["allas.se",1643931583],["baaam.se",1643931583],["elle.se",1643931583],["femina.se",1643931583],["frida.se",1643931583],["hant.se",1643931583],["motherhood.se",1643931583],["residencemagazine.se",1643931583],["svenskdam.se",1643931583],["macradion.com",619924784],["sv.picmix.com",[619924784,947128528]],["sportbloggare.com",619924784],["fordonsproffs.eu",619924784],["skillingaryd.nu",619924784],["xn--vrnamo-bua.nu",619924784],["bettingstugan.se",619924784],["bioenergitidningen.se",619924784],["bovision.se",619924784],["dagensopinion.se",619924784],["dn.se",619924784],["ehandel.se",619924784],["expressen.se",619924784],["familjeliv.se",619924784],["golflivet.se",619924784],["ifokus.se",619924784],["ifragasatt.se",619924784],["jaktojagare.se",619924784],["kamerabild.se",619924784],["linnherbertsson.se",619924784],["mobil.se",619924784],["padelfeber.se",619924784],["skaraborgsbygden.se",619924784],["swedroid.se",619924784],["tandlakartidningen.se",619924784],["teknikveckan.se",619924784],["tidningenridsport.se",619924784],["tripadvisor.se",619924784],["vardfokus.se",619924784],["minhembio.com",1326833433],["morotsliv.com",1326476395],["newsner.com",557827950],["ettgottskratt.se",557827950],["humorbibeln.se",557827950],["sportbibeln.se",557827950],["nillaskitchen.com",1488310188],["norrbotten.com",1081467924],["nytt.com",299082491],["omnihalsa.com",212572729],["skanesport.se",212572729],["sportpanelen.se",212572729],["orebronyheter.com",865797004],["petenkoiratarvike.com",788358944],["mustijamirri.fi",788358944],["animail.se",788358944],["arkenzoo.se",788358944],["vetzoo.se",788358944],["autonytt.se",947128528],["tekniknytt.se",947128528],["se.readly.com",1313037473],["skrattsajten.com",95570682],["norpan.se",95570682]]);

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
