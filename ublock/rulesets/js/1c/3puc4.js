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

// isr-0

const argsMap = new Map([[1831184465,{"a":"*"}],[188178258,{"a":".Banner,\ndiv[style=\"height: 78px; overflow: hidden; width: 510px;\"],\ndiv[style=\"height: 78px; padding-right: 10px; margin-bottom: 20px;\"]"}],[1035928933,{"a":".adsbygoogle"}],[1062475862,{"a":".desk_mode.adsgoogle"}],[262138776,{"a":"a[target=\"_blank\"][href*=\"/urvd/4-\"]"}],[1457216567,{"a":"#popupContainer,\n.widget-area.sidebar-primary.sidebar,\ndiv[style$=\"display: block; overflow: auto;\"]"}],[1553033115,{"a":".adcontainer"}],[407325910,{"a":"#connect,\na[href*=\"campaigns.layer.co.il/\"]"}],[226556378,{"a":"#backgroundPopup,\n#popupContact,\ndiv[style=\"position: absolute; left: 40px; top: 200px; z-index: 0;\"],\ndiv[style=\"position: absolute; right: 40px; top: 200px; z-index: 0; width:154px;\"]"}],[2072724701,{"a":"a[href*=\"://rmkz.themarker.com/\"]"}]]);

const hostnamesMap = new Map([["hasdarot.cc",1831184465],["hasdarot.club",1831184465],["hasdarot.co",1831184465],["kurtgeigers.co",1831184465],["bobuzz.com",1831184465],["gubuzz.com",1831184465],["hasdarot.com",1831184465],["vodxil.com",1831184465],["zegvid.com",1831184465],["lead.foxweb.co.il",1831184465],["freeoffers.co.il",1831184465],["lp.infopage.co.il",1831184465],["lp.playsmart.co.il",1831184465],["kelocote.prpl.co.il",1831184465],["shaardollar.co.il",1831184465],["view-movies.co.il",1831184465],["vodmovies.co.il",1831184465],["vodx.co.il",1831184465],["balimon.info",1831184465],["hasdarot.info",1831184465],["lauyn.info",1831184465],["lools.info",1831184465],["losittooday.info",1831184465],["madlik.info",1831184465],["magnivim.info",1831184465],["metador.info",1831184465],["mklrty.info",1831184465],["movitop.info",1831184465],["mporli.info",1831184465],["sirtoonim.info",1831184465],["stomi.info",1831184465],["tukid.info",1831184465],["yosle.info",1831184465],["youlim.info",1831184465],["hasdarot.life",1831184465],["fringantlarn8.live",1831184465],["hasdarot.live",1831184465],["seret.live",1831184465],["hasdarot.me",1831184465],["myvod.me",1831184465],["dubim.net",1831184465],["gbuzz.net",1831184465],["gefun.net",1831184465],["hasdarot.net",1831184465],["iastrology.net",1831184465],["ilbuzz.net",1831184465],["israfun.net",1831184465],["jobuzz.net",1831184465],["lyfun.net",1831184465],["lyplay.net",1831184465],["topfliightss.net",1831184465],["ugbuzz.net",1831184465],["usbuzz.net",1831184465],["vebuzz.net",1831184465],["vefun.net",1831184465],["viral4buzz.net",1831184465],["worldhotnews.net",1831184465],["zegvid.net",1831184465],["hasdarot.pro",1831184465],["asface.pw",1831184465],["bitys.pw",1831184465],["dealclick.pw",1831184465],["dealsclubspecial.pw",1831184465],["hasdarot.space",1831184465],["sdarotil.top",1831184465],["hasdarot.tv",1831184465],["faceu.us",1831184465],["hasdarot.vip",1831184465],["hasdarot.xyz",1831184465],["ashdodnet.com",188178258],["bigbroil.com",[1035928933,1062475862]],["shmua.com",1035928933],["isramedia.net",1035928933],["chodal24.com",262138776],["israrights.com",1457216567],["0-15.co.il",1457216567],["2b-bari.co.il",1457216567],["50plus.co.il",1457216567],["acnecenter.co.il",1457216567],["add-syndrome.co.il",1457216567],["alzheimer.co.il",1457216567],["blood.co.il",1457216567],["candidafree.co.il",1457216567],["cold.co.il",1457216567],["committee.co.il",1457216567],["degeneration.co.il",1457216567],["dementia.co.il",1457216567],["dermatology.co.il",1457216567],["east-west.co.il",1457216567],["epilepsy.co.il",1457216567],["feeling.co.il",1457216567],["genes.co.il",1457216567],["human.co.il",1457216567],["iaawh.co.il",1457216567],["ifeel.co.il",1457216567],["le-la.co.il",1457216567],["maane.co.il",1457216567],["matnachim.co.il",1457216567],["medicalcannabis.co.il",1457216567],["mifrakim.co.il",1457216567],["myeyes.co.il",1457216567],["myhealth.co.il",1457216567],["myheart.co.il",1457216567],["myrights.co.il",1457216567],["nashy.co.il",1457216567],["pediatrics.co.il",1457216567],["pigur.co.il",1457216567],["stdinfo.co.il",1457216567],["sukarti.co.il",1457216567],["takana.co.il",1457216567],["tevalife.co.il",1457216567],["urinary.co.il",1457216567],["voices.co.il",1457216567],["womenonly.co.il",1457216567],["abortion.org.il",1457216567],["allergy.org.il",1457216567],["asthma.org.il",1457216567],["autism.org.il",1457216567],["bariatric.org.il",1457216567],["blinds.org.il",1457216567],["burn.org.il",1457216567],["cfs.org.il",1457216567],["cholesterol.org.il",1457216567],["colon.org.il",1457216567],["commitment.org.il",1457216567],["dialysis.org.il",1457216567],["ear.org.il",1457216567],["emun.org.il",1457216567],["ent.org.il",1457216567],["fms.org.il",1457216567],["gastro-israel.org.il",1457216567],["hyperhidrosis.org.il",1457216567],["ibd.org.il",1457216567],["ilsi.org.il",1457216567],["immunology.org.il",1457216567],["implants.org.il",1457216567],["ioh.org.il",1457216567],["isala.org.il",1457216567],["linshom.org.il",1457216567],["liver.org.il",1457216567],["lung.org.il",1457216567],["lupus.org.il",1457216567],["matnachim.org.il",1457216567],["multiplesclerosis.org.il",1457216567],["my-rights.org.il",1457216567],["neurology.org.il",1457216567],["noga.org.il",1457216567],["obesity.org.il",1457216567],["oncology.org.il",1457216567],["pain.org.il",1457216567],["parkinsons.org.il",1457216567],["pso.org.il",1457216567],["psychiatrist.org.il",1457216567],["psychiatry.org.il",1457216567],["stroke.org.il",1457216567],["urine.org.il",1457216567],["pitria.com",1553033115],["rateonclick.com",407325910],["s-maof.com",226556378],["themarker.com",2072724701],["haaretz.co.il",2072724701],["mouse.co.il",2072724701]]);

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
