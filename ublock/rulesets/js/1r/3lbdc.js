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

const argsMap = new Map([[1036026582,{"a":".grey-popup-layer"}],[1233485133,{"a":"#background_ad_top"}],[1447250691,{"a":"#right > .xabrew300.box"}],[1652044333,{"a":".partners"}],[1460062064,{"a":".spleft,\n.spright"}],[336991727,{"a":"[class$=\"responsive-300px-600px\"],\na[onclick*=\"/muvelet/hozzaferes/kapcsolodas.php?id=\"],\nbody > style"}],[341968590,{"a":"#thanks > .hlist.nohead,\n.xabrecontainer,\na[onclick*=\"$.ajax\"],\ndiv[class*=\"xabre-responsive\"]:not([class*=\"-980px-139px\"])"}],[1803234558,{"a":".roadblockcont"}],[1655265405,{"a":".act_hun,\n.adt_hun"}],[484435621,{"a":"#pe_confirm_optin_6,\n[id^=\"ibb-\"][class*=\"banner\"]"}],[642249615,{"a":"#partnerek"}],[293335082,{"a":"[id^=\"zone\"]"}],[1281525030,{"a":"#cookie-popup,\n#jqi-sub,\n#jqi-subfade,\n.jqi-sub,\n.jqi-subfade"}],[845577645,{"a":"#adryf,\n.rltdwidget,\n[href^=\"https://www.webminute.hu\"],\n[id*=\"aswift\"],\ndiv.reklam_jobbra,\ntd[style=\"width: 10px;\"]:empty"}],[479054061,{"a":"#cookiekezeles"}],[865042704,{"a":"#banner"}],[1234438440,{"a":"DIV[class*=\"Advert\"]"}],[905852954,{"a":"[class*=\"contentBanner\"]"}],[597112606,{"a":".accept-cookies"}],[269805907,{"a":"div[id^=\"jqueryFloating\"]"}],[739210883,{"a":"#cookie_bar,\n#infobar"}],[383997808,{"a":"#banner2016kormanyhu,\n[id*=\"banner_1_29_\"]"}],[445295901,{"a":".catch-click"}],[1554190110,{"a":".banner-widget-container"}],[1837031976,{"a":"[class^=\"moove-gdpr-\"]"}],[1718979431,{"a":".Ad,\n[id*=\"Ad_\"]"}],[892494025,{"a":".Clear,\nDIV[id*=\"AdContainer\"]"}],[590823206,{"a":"#top > .p-0.container"}],[1151497867,{"a":"#ajanlo_box_ah,\n#lightwindow_overlay"}],[1568541757,{"a":"#player,\n#superbox"}],[794210451,{"a":".szkozepkis"}],[1857360706,{"a":"#kapubanner,\n[id*=\"_ads\"],\n[id^=\"cookieconsent\"]"}],[1569138138,{"a":".cookie-consent"}],[48235262,{"a":"[id*=\"hirdet\"]"}],[1670708309,{"a":"#cookiewarnbar"}],[1444007613,{"a":"#nyeremenyModal,\n[class=\"modal-backdrop fade show\"],\n[id*=\"popup\"]"}],[709624513,{"a":"[id*=\"interstitial\"]"}],[1951057977,{"a":"DIV[id*=\"Banner\"]"}]]);

const hostnamesMap = new Map([["fressnapf.hu",1036026582],["gamekapocs.hu",1233485133],["gamepod.hu",[1447250691,1652044333,1460062064,336991727,341968590]],["itcafe.hu",[1652044333,1460062064,336991727,341968590]],["logout.hu",[1652044333,1460062064,336991727,341968590]],["magyarhirlap.hu",1652044333],["mobilarena.hu",[1652044333,336991727,341968590]],["prohardver.hu",[1652044333,1460062064,336991727,341968590]],["hardverapro.hu",[1460062064,336991727,590823206]],["gentleman.hu",1803234558],["gepigeny.hu",1655265405],["glamour.hu",484435621],["gondola.hu",642249615],["gphirek.hu",293335082],["origo.hu",[293335082,1234438440]],["grundoajandek.hu",1281525030],["gyakorikerdesek.hu",[845577645,479054061]],["hoxa.hu",479054061],["gyaloglo.hu",[865042704,1234438440]],["gyartastrend.hu",[905852954,597112606,269805907]],["pharmaonline.hu",905852954],["medicalonline.hu",597112606],["gyorihir.hu",739210883],["gyulaihirlap.hu",383997808],["hajdupress.hu",445295901],["hang.hu",[1554190110,1837031976]],["magyarhang.org",1837031976],["haon.hu",[1718979431,892494025]],["mon.hu",1718979431],["harmonet.hu",1151497867],["hasznaltauto.hu",1568541757],["hatarido-szamitas.hu",794210451],["haziallat.hu",1857360706],["hbogo.hu",1569138138],["szatmar.ro",1569138138],["helyitipp.hu",48235262],["hestore.hu",1670708309],["hetek.hu",1444007613],["hg.hu",709624513],["hirado.hu",1951057977],["mandiner.hu",1951057977]]);

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
