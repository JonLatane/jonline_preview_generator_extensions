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

// idn-0

const argsMap = new Map([[702821994,{"a":"#fbbanner"}],[104203159,{"a":"#hbanner:nth-of-type(1)"}],[159985430,{"a":"#pbanner"}],[1326265400,{"a":".adstops"}],[1408587597,{"a":".side:nth-of-type(7),\n.side:nth-of-type(8),\n.side:nth-of-type(9)"}],[720652996,{"a":"#sgcboxOverlay"}],[686311680,{"a":".megabillboard"}],[562635228,{"a":"#adv-caption-mr1"}],[1134555611,{"a":".paraA.para,\n.para_abs,\n.para_fix,\n.paradetail"}],[129614490,{"a":".Widget:nth-of-type(2),\n.Widget:nth-of-type(3)"}],[1881544636,{"a":"#ads-728,\n#ads-960-mid,\n#ads-mid,\n#mid-banner,\n.ads-home,\n.ads2-home,\n.fixed-ads-atas,\n.mid-banner"}],[1475998622,{"a":"#adpoint5,\n#adv-caption-lead,\n#adv-caption-mr2,\n#billboard,\n#leaderboard[style*=\"width: 750px;height: 100px;\"],\n#otp_banner,\n#skinad,\n#sto_banner,\n#top_banner,\n.ads-slot,\n.ads-slot-mb-container,\n.banner_inside_article,\n.detikads,\n.mr.mr1,\n.mr.mr2,\n.mr1-scrollpage-height,\n.mr2-scrollpage-height,\n.mr2:has([id^=\"div-gpt-ad\"]),\n.normalbanner,\n.otp_banner_close,\n.skinad_1,\n.skinad_2"}],[1195775263,{"a":"#bottom_banner"}],[1697221525,{"a":".bb_banner"}],[1281328368,{"a":".dewa_floating_bottom"}],[73615722,{"a":"[href^=\"http://www.dukungbpjs.com/ref.php\"]"}],[848186972,{"a":".blocker.jquery-modal"}],[1738129977,{"a":"#ads-stack,\n#close-ads-stack,\n#itro_opaco,\n#itro_popup,\n#sticky-ads"}],[1340601258,{"a":"#float-bottom-banner"}],[1551687427,{"a":".visible-lg"}],[2007574988,{"a":".ads_square_banner,\n.section_sticky_ads_bottom"}],[2069148830,{"a":".banner-common"}],[356247910,{"a":".left.banner-vertical,\n.right.banner-vertical"}],[686102799,{"a":"#peluang,\n.adsbyadop"}],[1825260214,{"a":".ktzsingle-bannerright"}],[1510282114,{"a":".pps-single-popup"}],[1947448597,{"a":".random"}],[1957717901,{"a":"#footer_sticky_inside"}],[1894277802,{"a":".adsense-header-in-article"}],[1194432014,{"a":".box"}],[1733706406,{"a":"#jxOutstreamContainer"}],[1248718991,{"a":".ads-liftdown,\n.ads-on,\n.ads__stick--left,\n.ads__stick--right,\n.ads_below_photo,\n.clearfix.ads__top-big250,\n.read__left"}],[1389924505,{"a":".ads__boxr"}],[2003039135,{"a":".pushdown-banner"}],[1881568422,{"a":".blocker-notice,\n.blocker-overlay"}]]);

const hostnamesMap = new Map([["cinema-indo.com",[702821994,104203159,159985430]],["layarkaca21.web.id",[702821994,159985430]],["nontonmovie.web.id",[702821994,104203159,159985430]],["lk21.me",702821994],["layarkaca21.net",[702821994,159985430]],["nonton21.net",[702821994,104203159,159985430]],["lk21.org",[702821994,159985430]],["layarkaca21.tv",702821994],["lk21.tv",702821994],["cinemaindo.web.id",159985430],["cinemaindo.com",[1326265400,1408587597]],["cinemaindo.stream",1326265400],["cinemaqq.com",720652996],["cnbcindonesia.com",686311680],["detik.com",[686311680,562635228,1475998622,1195775263]],["cnnindonesia.com",[562635228,1134555611]],["comotin.com",129614490],["dapurpacu.com",1881544636],["pikiran-rakyat.com",1195775263],["inet.detik.com",1697221525],["dewanontons.com",1281328368],["dewantn.com",73615722],["didrakorindo.com",848186972],["sukanonton.online",848186972],["indoxxi.pictures",848186972],["indoxx1.pw",848186972],["downloadfilmbaru.com",1738129977],["dunia21tv.com",[1340601258,1551687427]],["lk21tv.com",1340601258],["cinema-indo.web.id",[1340601258,1551687427]],["layarcinema.tv",[1340601258,1551687427]],["duwitmu.com",2007574988],["dwanonton.com",[2069148830,356247910]],["dewanonton.vip",2069148830],["eramuslim.com",686102799],["faktabali.com",1825260214],["filem456.com",1510282114],["film-ganool.com",1947448597],["gadgetren.com",1957717901],["gamebrott.com",1894277802],["gopego.com",1194432014],["gridoto.com",[1733706406,1248718991,1389924505,2003039135]],["kompas.tv",1733706406],["motorplus-online.com",1389924505],["kompas.com",2003039135],["gudangpemain.com",1881568422]]);

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
