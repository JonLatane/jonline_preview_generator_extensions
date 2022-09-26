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

const argsMap = new Map([[1717858257,{"a":".inlist-ad-block"}],[1658560124,{"a":"#front-ekstrabladet-dk-native-1,\n#manipulate_monster,\n.advertorials,\n.scrb-posts > .flex-column,\na[href^=\"https://click-dk.plista.com/csc?\"],\narticle[class*=\"undefined\"]"}],[1344619484,{"a":".ai_widget,\n.hustle-slidein"}],[1558094581,{"a":".widget_custom_html"}],[11278749,{"a":".sidebar > div[class=\"undefined\"] ~ *"}],[1026788517,{"a":"#ctl00_BannerContainerTop"}],[1746049875,{"a":".happy-place--labeled"}],[2082073307,{"a":"#advert,\n#bottom_footer,\n#columnc,\n#middlecoulmn > #social_links,\n#rightcolumn,\n.bluebox.custom,\n.yellow"}],[630906431,{"a":".et_pb_equal_columns"}],[1363405737,{"a":"#struct_topBanner,\n.box_300_default,\na[onclick^=\"undefined\"],\np[style^=\" color:#bbb;\"]"}],[1128873798,{"a":".banner_mobile"}],[746330173,{"a":"div[data-type=\"undefined\"]"}],[674551757,{"a":".mb-30.bg-grey-100"}],[325236784,{"a":".page-top-wrapper"}],[229215276,{"a":".baPosition"}],[971342542,{"a":"#frm-ablo-message"}],[414592398,{"a":".boxOverContent--a"}],[1386122248,{"a":"div[class^=\"undefined\"]"}],[2035539943,{"a":"#content > .container[style*=\"undefined\"][style*=\"undefined\"],\n#sb-site > .hidden-xs.container,\n.hidden-xs.forsideboks2,\n.visible-xs-block,\ndiv[style=\"text-align:center;clear:both;\"]"}],[460009067,{"a":".adbox"}],[95110767,{"a":"#footer-widgets"}],[765767006,{"a":".top_banner_container"}],[818178869,{"a":".external-branding,\n.sticky-banner-wrapper"}],[1002151696,{"a":".article-body > .row,\n.main > .container > .row > .col-md-12,\ndiv[style^=\"width: 370px; \"]"}],[741548383,{"a":".gastromad-widget"}],[1986795675,{"a":".mfrek-widget"}],[698677182,{"a":".banner-double-wrapper"}],[734413104,{"a":"#ad_PageBottom,\n#ad_PageTop"}],[621326269,{"a":"#amLargeLeaderboard"}],[1921773278,{"a":"#bottomBanner,\n.ad_form_header_right,\n.adservering-container,\n.bannerHookTop,\ndiv.item_profa"}],[617448945,{"a":"#topBanner"}],[464662964,{"a":".banner-container"}],[1468598154,{"a":".main-content > .row"}],[1779529800,{"a":".centerfull,\n.containerlefttop"}],[606831580,{"a":".container-outer-wrapper > .col-2:last-of-type,\n.container-spacer,\nmain > .container:not([class*=\" \"])"}],[1584762257,{"a":".header-sidebar,\n.single-sidebar"}],[1667411002,{"a":".ss-left-sky-reclam,\n.ss-right-sky-reclam"}],[1094585298,{"a":".box.text-center"}],[507441868,{"a":".responsive-images"}],[1934312946,{"a":".horseshoe"}]]);

const hostnamesMap = new Map([["edbpriser.dk",1717858257],["ekstrabladet.dk",1658560124],["erotikmix.dk",[1344619484,1558094581]],["peters1.dk",1558094581],["glr.no",1558094581],["hushagehobby.no",1558094581],["tidssonen.no",1558094581],["esportsmagasinet.dk",11278749],["euroinvestor.dk",1026788517],["valutakurser.dk",1026788517],["euroman.dk",1746049875],["fcbarcelona.dk",2082073307],["fcfredericia.dk",630906431],["feltet.dk",1363405737],["m.feltet.dk",1128873798],["femina.dk",[746330173,674551757]],["isabellas.dk",746330173],["filmz.dk",325236784],["finans.dk",229215276],["findroommate.dk",971342542],["flashscore.dk",[414592398,1386122248]],["nordjyske.dk",1386122248],["sofabold.dk",1386122248],["sporttv.is",1386122248],["aperitif.no",1386122248],["filmweb.no",1386122248],["midtsiden.no",1386122248],["samler.no",1386122248],["startsiden.no",1386122248],["rssnyheter.sveip.no",1386122248],["tek.no",1386122248],["flatpanels.dk",[2035539943,460009067]],["prisjagt.dk",460009067],["dv.is",460009067],["drm24.no",460009067],["fodboldspilleren.dk",95110767],["folketidende.dk",765767006],["vafo.dk",765767006],["gaffa.dk",818178869],["gaming.dk",1002151696],["gastromad.dk",741548383],["gastromand.dk",1986795675],["globalnyt.dk",698677182],["godstart.dk",734413104],["gratisspil.dk",621326269],["guloggratis.dk",[1921773278,617448945,464662964]],["magasinetreiselyst.no",617448945],["webopskrifter.dk",464662964],["handyhand.dk",1468598154],["hardwareonline.dk",1779529800],["herningfolkeblad.dk",606831580],["ikast-brandenyt.dk",606831580],["midtjyllandsavis.dk",606831580],["herognu.dk",1584762257],["hockeymagasinet.dk",1667411002],["hwt.dk",1094585298],["iform.dk",[507441868,1934312946]],["historienet.no",507441868],["magasinetliv.dk",1934312946],["boligpluss.no",1934312946],["tara.no",1934312946]]);

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
