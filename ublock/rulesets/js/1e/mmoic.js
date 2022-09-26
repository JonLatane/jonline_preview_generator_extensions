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

const argsMap = new Map([[960851570,{"a":"[class^=\"ad-\"]"}],[1136392286,{"a":".partners-box,.cube-bonus-list"}],[71664402,{"a":"#preloader"}],[1193963480,{"a":".puff__ad-heading"}],[150760424,{"a":"#prisjakt-popular,.ad:not(.adPanorama),.adForumSticker"}],[1171569000,{"a":".ads"}],[1575472534,{"a":".article.related > a[href*=\"&utm\"][target=\"_blank\"],\n.popup-overlay"}],[651522800,{"a":"ads-takeover"}],[966218548,{"a":".stopjump"}],[806966562,{"a":"#load"}],[124847876,{"a":".annons-block"}],[1177626318,{"a":".middleban"}],[998770811,{"a":".dre-item--feature-advertorial"}],[1581737762,{"a":".online-teaser--advertorial"}],[1554236800,{"a":".cookie"}],[135845273,{"a":"#accept-cookies,\n#sidebar_wrapper > .zone:last-child"}],[1633079856,{"a":"#right_rail.trackable"}],[496482196,{"a":".bannergroup"}],[1110382056,{"a":"#tm-top-a"}],[428124567,{"a":".bannergroupno-padding"}],[284473325,{"a":"a[href*=\"rocketpot.io\"],a[href*=\"casino\"],a[href*=\"betting\"]"}],[1704324609,{"a":"#rb-cookie"}],[743013784,{"a":".banner"}],[1513994062,{"a":".elementor-popup-modal"}],[1490082238,{"a":"[data-widget_type*=\"bnnrwidgets\"],a[href*=\"/annons/\"]"}],[1952173679,{"a":"a[href*=\"casino.com\"],.main-container > div.vc_row:last-child"}],[2007331220,{"a":"#sticky_ad,div[style*=\"ad_hor.gif\"],a[href*=\"casino\"],a[href*=\"kasyno\"],a[href*=\"betting\"],a[href*=\"spelsajter.eu\"],a[href*=\"spelsidor.org\"],a[href*=\"oddsgurun.com\"],a[href*=\"betsidor\"],a[href*=\"välkomstbonusar\"]"}],[1344372270,{"a":"[class*=\"feed-ad\"]"}],[893174484,{"a":".annons"}],[332589441,{"a":"#didomi-host,a[href*=\"/atl-tv-annons/\"],[class^=\"Ad_\"]"}],[1105853663,{"a":"#RightOuterBannerDiv"}],[1068462918,{"a":"[class^=\"newsletter-subscribe\"],div[class^=\"cookie-message\"],div[role=\"presentation\"]"}],[599666669,{"a":".panoramaAnnons,.JobAdDiv,.annonsKolumn,.insideAd,.ingressAd,.familyAds,.annonsWrapper"}],[2064454737,{"a":".ad-container"}],[783471981,{"a":"#rightbanners"}],[814836424,{"a":".spons"}],[517097925,{"a":".vkmui-Text--grey,[class^=\"adContainer\"],div[class^=\"bordersAndShadows\"] > div[style^=\"min-height\"]:only-child,div[data-track-id=\"family.Familjeannonser\"]"}],[1061489868,{"a":"#cboxOverlay,#cboxWrapper,\n[class*=\"annonser\"]"}],[1929655341,{"a":"#site-preloader"}],[1368309643,{"a":".rstbox"}],[1461676299,{"a":".advert"}],[521623361,{"a":".isax"}],[1621386264,{"a":"a[href*=\"/track.adtraction.\"]"}],[2086355206,{"a":".td_mod_wrap a img[data-permalink],a[data-wpel-link=\"external\"][onclick],a.td-lazy-img[target],a[href*=\"casino\"]"}],[525362679,{"a":".ui-widget-overlay,.ui-dialog"}],[1787698832,{"a":".panorama-sticky,.sticky-area"}],[1489721289,{"a":"#spopup"}],[112111173,{"a":".component__guide-ads,#fullpage-ad-portal,div[style=\"min-height: 302px;\"]"}],[143487119,{"a":".art-sidebar1,.art-sidebar2"}],[908341775,{"a":".preloader"}]]);

const hostnamesMap = new Map([["sonicmagazine.com",960851570],["dagensinfrastruktur.se",960851570],["ratsit.se",960851570],["sportbloggare.com",1136392286],["streamtajm.com",71664402],["svensktradgard.se",71664402],["svenskafans.com",1193963480],["sweclockers.com",150760424],["tasteline.com",[1171569000,1575472534]],["allsvenskan.se",1171569000],["chefstidningen.se",1171569000],["fotosidan.se",1171569000],["jaktojagare.se",1171569000],["kollega.se",1171569000],["merinfo.se",1171569000],["realtid.se",[1171569000,743013784]],["tradera.com",651522800],["varmepumpsforum.com",966218548],["veckansmiddag.com",806966562],["veckorevyn.com",124847876],["worldkustom.com",1177626318],["hbl.fi",998770811],["ostnyland.fi",998770811],["vastranyland.fi",998770811],["osterbottenstidning.fi",1581737762],["sydin.fi",1581737762],["vasabladet.fi",1581737762],["webbjobb.io",1554236800],["hamsterpaj.net",135845273],["historier.net",1633079856],["metalcentral.net",[496482196,1110382056,428124567]],["automation.se",496482196],["transportnytt.se",496482196],["verkstadstidningen.se",496482196],["egoinas.se",1110382056],["mobilanyheter.net",284473325],["se.moyens.net",1704324609],["riksettan.net",743013784],["klassiker.nu",743013784],["automobil.se",743013784],["bettips.se",743013784],["campingsverige.se",743013784],["caroftheyear.se",743013784],["dalarnasaffarer.se",743013784],["dh.se",743013784],["djungeltrumman.se",743013784],["endurobloggen.se",743013784],["eniro.se",743013784],["entreprenadaktuellt.se",743013784],["fightermag.se",743013784],["frillesasbandy.se",743013784],["husbilhusvagn.se",743013784],["ja.se",743013784],["jamtlandsaffarer.se",743013784],["ljuskultur.se",743013784],["maskinbladet.se",743013784],["mopedgaraget.se",743013784],["naringslivetvgl.se",743013784],["omni.se",743013784],["restaurangvarlden.se",743013784],["skik.se",743013784],["skogsaktuellt.se",743013784],["spelo.se",743013784],["stockholmsaffarer.se",743013784],["svenskjakt.se",743013784],["vibilagare.se",743013784],["rocknytt.net",[1513994062,1490082238]],["brinkenbakar.se",1513994062],["evergreengarden.se",1513994062],["ff.se",1513994062],["magasink.se",1513994062],["nyadagbladet.se",1513994062],["spelrum.net",1952173679],["vovve.net",2007331220],["aip.nu",1344372270],["alba.nu",893174484],["dagensopinion.se",893174484],["fiskejournalen.se",893174484],["fotbolldirekt.se",893174484],["hockeysverige.se",893174484],["hypeline.se",893174484],["innebandymagazinet.se",893174484],["motivation.se",893174484],["padeldirekt.se",893174484],["skidresultat.se",893174484],["uppslaget.se",893174484],["atl.nu",332589441],["badminton.nu",1105853663],["bandybyn.se",1105853663],["bulletin.nu",1068462918],["dagenskalmar.nu",599666669],["dagenshultsfred.se",599666669],["dagensvastervik.se",599666669],["dagensvimmerby.se",599666669],["dinlivsstil.nu",2064454737],["spokbloggen.nu",2064454737],["alekuriren.se",2064454737],["arvikanyheter.se",2064454737],["bolagsfakta.se",2064454737],["byggahus.se",2064454737],["dalslanningen.se",2064454737],["destination.se",2064454737],["expressen.se",2064454737],["filipstadstidning.se",2064454737],["filmtopp.se",2064454737],["folkhalsasverige.se",2064454737],["foretagsverige.se",2064454737],["forskningsverige.se",2064454737],["fryksdalsbygden.se",2064454737],["grillbibeln.se",2064454737],["hallbarhetsverige.se",2064454737],["hjotidning.se",2064454737],["kampenmotcancer.se",2064454737],["kt.se",2064454737],["kt-kuriren.se",2064454737],["mariestadstidningen.se",2064454737],["motorbibeln.se",2064454737],["nkp.se",2064454737],["nlt.se",2064454737],["nwt.se",2064454737],["provinstidningen.se",2064454737],["saffletidningen.se",2064454737],["sla.se",2064454737],["tillvaxtsverige.se",2064454737],["varmlandsaffarer.se",2064454737],["vf.se",2064454737],["dykarna.nu",783471981],["flm.nu",814836424],["folkbladet.nu",517097925],["lokaltidningen.nu",517097925],["mellanbygden.nu",517097925],["nordsverige.se",517097925],["vasterbottningen.se",517097925],["vk.se",517097925],["fria.nu",1061489868],["sesam.nu",1061489868],["friatidningen.se",1061489868],["goteborgsfria.se",1061489868],["stockholmsfria.se",1061489868],["gmfk.nu",1929655341],["grillbloggen.nu",1368309643],["hembostad.nu",[1461676299,521623361]],["nojesmagasinet.nu",[1461676299,521623361]],["aftonbladet.se",[1461676299,1621386264]],["cfanytt.se",[1461676299,521623361]],["foretagsbladet.se",[1461676299,521623361]],["gestrikemagasinet.se",[1461676299,521623361]],["halsasverige.se",[1461676299,521623361]],["langd.se",1461676299],["lasarnas.se",[1461676299,521623361]],["pressbladet.se",[1461676299,521623361]],["skolvarlden.se",1461676299],["sportidrott.se",[1461676299,521623361]],["stoppapressarna.se",1461676299],["svenskorientering.se",1461676299],["svenskpress.se",[1461676299,521623361]],["hockeybladet.nu",[1621386264,2086355206]],["autonytt.se",1621386264],["ekonominyheter.se",1621386264],["lesscarbs.se",1621386264],["matinspo.se",1621386264],["undervarttak.se",1621386264],["xn--snabbalnen-75a.se",1621386264],["hungrig.nu",525362679],["jennysmatblogg.nu",1787698832],["lindasbakskola.se",1787698832],["mykitchenstories.se",1787698832],["zeinaskitchen.se",1787698832],["kalmar.nu",1489721289],["fl-net.se",1489721289],["klt.nu",112111173],["barometern.se",112111173],["blt.se",112111173],["borasdly.se",112111173],["bt.se",112111173],["kalmarposten.se",112111173],["kristianstadsbladet.se",112111173],["meraosterlen.se",112111173],["nsk.se",112111173],["olandsbladet.se",112111173],["smp.se",112111173],["sydostran.se",112111173],["trelleborgsallehanda.se",112111173],["ut.se",112111173],["vaxjobladet.se",112111173],["vxonews.se",112111173],["ystadsallehanda.se",112111173],["lokalsport.nu",143487119],["lyckasmedbakning.nu",908341775],["alltomhif.se",908341775],["kulturimperiet.se",908341775],["luthagsnytt.se",908341775],["mat-meny.se",908341775],["pinkprogramming.se",908341775],["soja.se",908341775],["tonyhatefnejad.se",908341775],["vitaestilo.se",908341775]]);

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
