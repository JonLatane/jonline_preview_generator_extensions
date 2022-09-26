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

const argsMap = new Map([[800881687,{"a":".tamogatoi,\n.wp-caption"}],[886107223,{"a":"#facebookPopUp,\n#facebookPopUpBackground,\n#szechenyi-container,\n.plus-wrapper"}],[416889106,{"a":"#_cikk_jobbhasab_2,\n#_cikk_jobbhasab_3,\n#_fooldali_header_alatti_banner,\n#_fooldali_header_banner,\n#_fooldali_jobbhasab_2,\n#_fooldali_jobbhasab_3,\n#custom_html-18,\n#custom_html-19,\n#custom_html-2,\n#custom_html-20,\n#custom_html-21,\n#custom_html-23,\n#custom_html-26,\n#custom_html-7,\n#custom_html-8"}],[259479129,{"a":"#custom_html-10"}],[1639634514,{"a":"[class*=\"Advert\"]"}],[276021233,{"a":"[class*=\"etarget\"],\n[class*=\"szamlatabla\"]"}],[1620747447,{"a":"[class*=\"hirdetes\"]"}],[964756814,{"a":"#CybotCookiebotDialog"}],[1171569000,{"a":".ads"}],[1913183182,{"a":"#adds"}],[18475474,{"a":"p + center:has(iframe[data-src*=\"facebook\"]),\nscript + ins + h5"}],[1789482918,{"a":".cookie-notice-container"}],[66442273,{"a":"#article-2,\n#block-block-30,\n#block-block-60,\n.region-content-1-1 > div:last-child,\n.region-content-1-1 > div:nth-child(-1n+3),\n.region-content-1-3 > div:nth-child(-1n+2),\n.region-content-1-3 > div:nth-last-child(-1n+5),\n.view-banner-blokkok"}],[1717918614,{"a":".addd,\n.bannpos,\n[aria-label=\"cookieconsent\"]"}],[196338382,{"a":"#cookie"}],[573602773,{"a":"#popupajanlo"}],[128744640,{"a":".rubAd"}],[695073156,{"a":"#total,\n.minisite"}],[253037285,{"a":".articleInArticleOfferer"}],[2054044114,{"a":"main + .ok-prerender"}],[1686979108,{"a":"iframe[src=\"https://tunderszepek.baon.hu/tunderszepek-banner\"]"}],[1831423296,{"a":".widget_media_image"}],[397227796,{"a":".pea_cook_wrapper"}],[434800858,{"a":"[class*=\"adcikk\"]"}],[2082854646,{"a":"[class*=\"adsense\"]"}],[914924872,{"a":"[class*=\"affiliate\"],\n[class^=\"ban_evo_\"]"}],[1556884358,{"a":".tapeta.fixed,\n[data-ai],\nblockquote"}],[626999558,{"a":"[id*=\"sponsor\"]"}],[1176861185,{"a":"#karrier,\n.modal,\n.modal-backdrop,\n.modal-dialog"}],[1006284639,{"a":"#footerLogos,\n#pe_confirm,\n#qc-cmp2-ui,\n#underArticleAdvertisement,\n[id^=\"div-gpt-ad-\"] + [class$=\"widget\"],\n[id^=\"rltd-ad-\"],\na[href*=\"gemius\"],\nbody > .extraContentSection:nth-of-type(-1n+3)"}],[11822335,{"a":"#articleOfferFlag"}],[614677943,{"a":".leavingPopupLayer"}],[763831040,{"a":"#ad-cikk1,\n#ad-cikk2,\n#ad-fekvo1,\n#ad-fekvo2,\n#ad-jobb1,\n#ad-jobb2"}],[78122749,{"a":"#pe_confirm_optin_1"}],[863389902,{"a":"#taft,\n.living-earth,\n.meropixel-hide,\n.share,\nDIV[class*=\"_ad\"],\nDIV[class*=\"adv\"],\nDIV[class*=\"blh-billboard-ad\"],\nDIV[id*=\"wAdBox\"],\n[class*=\"follow_promo_figure\"],\n[id*=\"cp_popup\"]"}],[1908746386,{"a":"[class*=\"adbox\"]"}],[286518244,{"a":"[id*=\"Banner\"]"}],[263029860,{"a":"#fbox-background"}]]);

const hostnamesMap = new Map([["atlatszo.hu",800881687],["atv.hu",886107223],["automotor.hu",[416889106,259479129]],["budapestkornyeke.hu",259479129],["autonavigator.hu",[1639634514,276021233,1620747447,964756814]],["blog.hu",[1639634514,863389902,1908746386,286518244]],["delmagyar.hu",[1639634514,1620747447,253037285]],["eduline.hu",1639634514],["fn.hu",1639634514],["hasznaltauto.hu",[1639634514,964756814]],["index.hu",[1639634514,1620747447]],["life.hu",1639634514],["olcsobbat.hu",1639634514],["bien.hu",[1620747447,1556884358]],["borsa.hu",1620747447],["cegbongeszo.hu",[1620747447,286518244]],["chat.hu",1620747447],["civishir.hu",1620747447],["cotcot.hu",1620747447],["divany.hu",1620747447],["eletmod.hu",1620747447],["femcafe.hu",1620747447],["femina.hu",1620747447],["hajdupress.hu",1620747447],["hajokonyha.hu",1620747447],["harmonet.hu",1620747447],["heol.hu",[1620747447,253037285]],["hirstart.hu",1620747447],["hwsw.hu",1620747447],["itmania.hu",1620747447],["kisalfold.hu",[1620747447,253037285]],["kitekinto.hu",[1620747447,397227796]],["komment.hu",1620747447],["koponyeg.hu",[1620747447,2082854646]],["ma.hu",1620747447],["mandiner.hu",1620747447],["motorrevu.hu",1620747447],["napi.hu",1620747447],["noitema.hu",1620747447],["onlinecegjegyzek.hu",1620747447],["origo.hu",[1620747447,1908746386]],["romnet.hu",1620747447],["sonline.hu",[1620747447,253037285]],["storyonline.hu",1620747447],["szabadfold.hu",1620747447],["szoljon.hu",[1620747447,253037285]],["totalcar.hu",1620747447],["travelo.hu",1620747447],["velvet.hu",1620747447],["vezess.hu",[1620747447,286518244]],["autopro.hu",[1171569000,1913183182]],["offline.hu",1171569000],["telekom.hu",1171569000],["autosjog.hu",[18475474,1789482918]],["helyitipp.hu",1789482918],["napjainkportal.hu",1789482918],["autoszektor.hu",66442273],["azonnali.hu",1717918614],["babanet.hu",[196338382,573602773]],["szepsegbroker.hu",196338382],["babaszoba.hu",128744640],["nlc.hu",128744640],["bacsmegye.hu",695073156],["bama.hu",253037285],["baon.hu",[253037285,1686979108]],["beol.hu",[253037285,434800858]],["boon.hu",253037285],["duol.hu",253037285],["feol.hu",253037285],["haon.hu",[253037285,286518244]],["kemma.hu",253037285],["szon.hu",253037285],["teol.hu",253037285],["vaol.hu",253037285],["veol.hu",253037285],["zaol.hu",253037285],["bankmonitor.hu",2054044114],["bebiztositva.hu",[1831423296,397227796]],["bevezetem.hu",[2082854646,914924872]],["hvg.hu",2082854646],["nlcafe.hu",2082854646],["startlap.hu",2082854646],["tutitippek.hu",2082854646],["bitport.hu",626999558],["bkv.hu",1176861185],["blikk.hu",[1006284639,11822335,614677943]],["egeszsegkalauz.hu",[11822335,78122749]],["glamour.hu",11822335],["kiskegyed.hu",[11822335,614677943]],["blikkruzs.blikk.hu",[763831040,78122749]],["figyelo.hu",1908746386],["freemail.hu",1908746386],["mno.hu",[1908746386,286518244]],["mon.hu",286518244],["wellnesscafe.hu",286518244],["blogspot.hu",263029860]]);

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
