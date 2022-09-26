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

// hun-0

const argsMap = new Map([[2139871588,{"a":".modal_popup"}],[849139209,{"a":".stream-item,\n[id^=\"stream-item-\"]"}],[672320878,{"a":".rightContent + [style]"}],[2082876893,{"a":"#cookie-policy-bar,\n#hatterkep,\n#rovatpromo,\n.adslabel,\n[class^=\"ads_\"],\n[class^=\"ads_\"] + .clear,\niframe[class*=\"my-fbrecommend\"]"}],[681179783,{"a":".article_contiune_link"}],[463004120,{"a":"#ecom_pr,\n.ad-wrap-100,\n.jobb_300"}],[1602505690,{"a":"[class*=\"google-cikk\"]"}],[1612926669,{"a":"[style=\"height: 250px\"]"}],[787758473,{"a":"#app-cookie-policy"}],[1175528610,{"a":"div.banner"}],[1472691241,{"a":".kiemelttartalombox_feher"}],[51404249,{"a":"div[id*=\"hirdetes\"]"}],[1930703824,{"a":".border-top.p-4.bg-8.cookie-alert__inner"}],[797294590,{"a":".spu-bg,\n.spu-box,\n[style=\"margin: 8px 0; clear: both;\"]"}],[640812495,{"a":".skybanner"}],[413587842,{"a":"[id*=\"_bnr\"]"}],[1438421194,{"a":".sgpb-theme-3-overlay.sgpb-popup-overlay-1402.sgpb-popup-overlay,\nimg[class*=\"sgpb-\"]"}],[1054648548,{"a":".cross-site-programmatic-zones"}],[696249552,{"a":".cikk-torzs-content-container > .kep_szeles.kep,\n.hasznaltautok-iframe-cikk-torzs,\n.header-tk-ajanlo,\n.joautok-iframe-cikk-torzs,\n.microsite,\n.szelso-jobb-lead_container,\n.totalkarWidget"}],[693952579,{"a":"[id*=\"adocean\"]"}],[842538583,{"a":".ooono_promo"}],[351104445,{"a":"div.qc-cmp-ui-container"}],[647016452,{"a":".adsense"}],[496566357,{"a":".leftSide > .bnr,\n.rightSide > .bnr"}],[1376336396,{"a":"#blanket,\n#popUpDiv"}],[2015980763,{"a":".hird-cont"}],[300895475,{"a":".banner-commercial,\n.reklamnagy"}],[2035644731,{"a":".page-rightside-advert,\ndiv[id*=\"advert-container\"]"}],[893030527,{"a":"[class*=\"szovegkozi\"],\n[id*=\"reklam_\"]"}],[1882786577,{"a":".adszoveg,\n[class*=\"ad_container\"],\n[class*=\"guestbox\"],\ndiv[class*=\"microsite\"],\ndiv[id*=\"microsite\"]"}],[1842623770,{"a":"#backdrop,\n#best-cars-layer,\n#beta-message-invite,\n.centerHead,\n[class*=\"Etarget\"],\n[class*=\"Hirdetes\"],\n[class*=\"advert \"],\n[class*=\"szponzor\"]"}],[136055393,{"a":"[style^=\"bottom: 0px; left: 0px; position: fixed; width:\"],\ndiv[class*=\"-ad\"],\ndiv[class*=\"hird-\"],\ndiv[class*=\"hirdetes\"],\ndiv[class=\"fej_felett cf\"],\ndiv[id*=\"etarget\"]"}],[1149663900,{"a":"#sitemessage"}],[1773626516,{"a":".top-video-container-banner"}],[48349177,{"a":"div[id*=\"Banner\"]"}],[415726185,{"a":"[id*=\"-ad-\"]"}],[419829230,{"a":"[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.901961); display: block;\"]"}],[1302167192,{"a":".no_banner"}]]);

const hostnamesMap = new Map([["szamoldki.hu",2139871588],["szeged365.hu",849139209],["szepsegbroker.hu",672320878],["szeretlekmagyarorszag.hu",2082876893],["szingliportal.hu",681179783],["szoftverbazis.hu",463004120],["szoljon.hu",1602505690],["telefonguru.hu",1612926669],["telekom.hu",787758473],["terhesferfi.hu",1175528610],["termalfurdo.hu",1472691241],["terminal.hu",51404249],["thaimatrac.hu",1930703824],["titkokszigete.hu",797294590],["titkosrandi.hu",640812495],["tlap.hu",413587842],["topark.hu",1438421194],["totalbike.hu",1054648548],["totalcar.hu",[1054648548,696249552,693952579]],["velvet.hu",[693952579,1882786577]],["traffihunter.hu",842538583],["travelo.hu",351104445],["turmixvilag.hu",647016452],["ugytudjuk.hu",496566357],["usernet.hu",1376336396],["valaszonline.hu",2015980763],["vasarnap.hu",300895475],["vatera.hu",2035644731],["vehir.hu",893030527],["vezess.hu",1842623770],["vg.hu",136055393],["videa.hu",[1149663900,1773626516]],["videaloop.hu",1773626516],["videoklinika.hu",48349177],["vilagszam.hu",415726185],["vilagunk.hu",419829230],["vs.hu",1302167192]]);

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
