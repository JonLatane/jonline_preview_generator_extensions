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

// ltu-0

const argsMap = new Map([[1721155428,{"a":".td_ads_item"}],[234922598,{"a":".MokiWidgets-leasingContainer-2Xd,\n.homepage-banners,\ndiv[id^=\"undefined\"]"}],[1838983265,{"a":"#headerr > [href=\"http://topwarez.lt/buy_vip.php\"] *"}],[2021097429,{"a":"#ls7[src=\"http://www.topzone.lt/pav/esports.gif\"],\ndiv[id^=\"edit\"] > .tborder:not([id^=\"post\"]),\ndiv[style=\"margin-top:3px; margin-bottom:3px; height:250px;\"]"}],[1594462483,{"a":"a[href=\"http://ldiena.lt\"] + * *"}],[2137988372,{"a":"div[style=\"padding-top:4px;padding-bottom:4px;text-align:center;\"]"}],[1797742429,{"a":"td[style=\"PADDING-BOTTOM: 15px; PADDING-LEFT: 12px; PADDING-RIGHT: 10px; BACKGROUND: url(/trakai/m/m_images/wfiles/igxbdh5338.jpg) repeat-y left top; PADDING-TOP: 15px\"],\ntd[style=\"PADDING-BOTTOM: 15px; PADDING-LEFT: 22px; BACKGROUND: url(/trakai/m/m_images/wfiles/ipxjgy5347.jpg) repeat-y left top; PADDING-TOP: 16px\"]"}],[1523065246,{"a":"#tv300x600_1d_tv3\\.lt *,\n#tv980x200_tv3_lt,\n#tv980x200_tv3_lt *,\n.custom-div,\n.custom-stick-div,\n.imMobile,\n[onclick=\"ga('send', 'event', 'Anonsai', 'Click', 'Svarbiausia blokelio paspaudimas');\"] *,\na[href*=\"goo.gl/\"]"}],[1118667114,{"a":"#ad_banner_skin,\n.c-details__leaderboard-ad,\niframe[style=\"border: 0px none transparent; width: 1440px; height: 750px; overflow: hidden;\"],\nspan[id*=\"undefined\"]"}],[1130618757,{"a":"#adblocker"}],[1031032170,{"a":"#area1.home-banner,\n#area2.home-banner"}],[151483834,{"a":"#billboardwrapper,\n#table-rightbanner1,\n#table-rightbanner3.rightbanner_info,\n.module_right_content_col,\n.topbanner_info [data^=\"http://www.vaistai.lt/images/banners/\"]"}],[482034558,{"a":".col-md-12.col-sm-6.col-xs-12.nopaddingright.nopaddingright-small.nopaddingleft-xs.padding-left-sidebar-small"}],[273154627,{"a":".banner-1"}],[1410629438,{"a":".popup_overlay"}],[1693141199,{"a":"#block-adaboveheader,\n.layout__region--ad"}],[963391242,{"a":".ad120_box,\n.ad468_frame_bot,\n.widget3"}],[1934153467,{"a":".otRounded.module-other-website-banner *"}],[1178377200,{"a":"#page-ads,\n#sidebar-madmen"}],[285691468,{"a":".moduletabledesinen"}],[1721231303,{"a":".content_banners"}],[696347656,{"a":"a[rel=\"undefined\"] + * + * + * > img"}],[2138606022,{"a":".fluid-width-video-wrapper"}],[704176346,{"a":".bannerbox,\n.cvWr.row.hidden-xxs,\n.cvWrSidebar,\n[onclick=\"window.open('http://www.cv.lt','_blank')\"]"}]]);

const hostnamesMap = new Map([["tevu-darzelis.lt",1721155428],["topocentras.lt",234922598],["topwarez.lt",1838983265],["topzone.lt",2021097429],["torentai.lt",1594462483],["traders.lt",2137988372],["trakai.lt",1797742429],["tv3.lt",1523065246],["play.tv3.lt",1118667114],["powerhitradio.tv3.lt",1130618757],["vaikutis.lt",1031032170],["vaistai.lt",151483834],["valstietis.lt",482034558],["vandensparkas.lt",273154627],["varle.lt",1410629438],["ve.lt",1693141199],["veidas.lt",963391242],["vela.lt",1934153467],["versliukai.lt",1178377200],["verslosavaite.lt",285691468],["visalietuva.lt",1721231303],["voruta.lt",696347656],["naujienos.vu.lt",2138606022],["vz.lt",704176346]]);

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
