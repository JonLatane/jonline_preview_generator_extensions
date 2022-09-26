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

// vie-1

const argsMap = new Map([[217792929,{"a":".bottom-0.w-100.position-fixed"}],[169629075,{"a":".ggss-pc.banner-ggss"}],[536158761,{"a":".banner-top-box"}],[959137446,{"a":"#position_full_top_banner_pc,\n.window_popup"}],[996620176,{"a":"#newmenu + div>div[style]"}],[705199088,{"a":".great-a-banner,\n.great-b-banner,\n.heart-banner"}],[2035683612,{"a":".button-dangkyngay"}],[1182915986,{"a":".afw-topbanner"}],[646328325,{"a":"#adm-slot-7234"}],[202673528,{"a":".ads_full"}],[1470610070,{"a":".adv-section"}],[1042412130,{"a":".left-right-banner"}],[1170159116,{"a":"#banner3double"}],[154011990,{"a":".box-ads-bar"}],[592200906,{"a":".advertise,\n.main-ad-wrapper"}],[2026299837,{"a":"div[id^=\"adsWeb\"]"}],[1635301394,{"a":"#div_inpage_banner,\n#div_inpage_banner_open"}],[1371602875,{"a":"#article-sidebar"}],[1276194242,{"a":"#mbtfloat,\n#mfloat,\n#pop_banner,\n.BT-Ads,\n.qc-inner,\ndiv.qc_M_Chap_Middle,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"]"}],[1728529008,{"a":".mb10.item:has(a[href^=\"https://www.vb135.com/\"])"}],[818127244,{"a":".bgadmtoptotal"}],[667229270,{"a":".bannertop"}],[1124565400,{"a":".top-right-col-ads"}],[1381950808,{"a":".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]"}],[1525126125,{"a":"#csnplayerads,\n.detail_lyric_1 div[style=\"text-align: right;\"]"}],[1514405681,{"a":"#background_bg_link,\n#maiContent>div>div.colLt>aside,\n.atclRdSb,\n.bnr,\n.cate-24h-foot-box-adv-view-news > .row > .col-6:first-child,\nDIV[class=\"banner-LR\"]"}],[1531758457,{"a":".admicro,\n.notad"}],[1697687803,{"a":".top-header"}],[1978977060,{"a":"#onefootball,\n.top_page"}],[1055893440,{"a":"img.error"}],[1903629435,{"a":"#subiz_wrapper,\n.ad-embed"}],[1092470772,{"a":".features-r"}],[1802142928,{"a":"#bannerMasthead,\n#desktop-home-top-page,\n#dtads_inpage_wrapper,\n#mobile-home-top-page"}],[631312009,{"a":".widget_media_image.widget"}],[168967693,{"a":".banner-cs"}]]);

const hostnamesMap = new Map([["hentaiz.vip",217792929],["phimbo.vip",169629075],["24hmoney.vn",536158761],["2banh.vn",959137446],["2game.vn",996620176],["5giay.vn",705199088],["blog.abit.vn",2035683612],["afamily.vn",1182915986],["sport5.vn",1182915986],["m.afamily.vn",646328325],["antt.vn",202673528],["aoe.vn",[1470610070,1042412130]],["gametv.vn",1042412130],["autodaily.vn",1170159116],["xehay.vn",1170159116],["baodansinh.vn",154011990],["baodauthau.vn",[592200906,2026299837]],["tienphong.vn",2026299837],["baogiaothong.vn",1635301394],["baophapluat.vn",1371602875],["blogtruyen.vn",1276194242],["m.blogtruyen.vn",1728529008],["cafebiz.vn",818127244],["cafef.vn",667229270],["ttvn.toquoc.vn",667229270],["careerlink.vn",1124565400],["chap.vn",1381950808],["chiasenhac.vn",1525126125],["24h.com.vn",1514405681],["autopro.com.vn",1531758457],["baohaugiang.com.vn",1697687803],["bongda.com.vn",1978977060],["centralland.com.vn",1055893440],["congan.com.vn",1903629435],["daklak24h.com.vn",1092470772],["dantri.com.vn",1802142928],["ecci.com.vn",631312009],["fptshop.com.vn",168967693]]);

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
