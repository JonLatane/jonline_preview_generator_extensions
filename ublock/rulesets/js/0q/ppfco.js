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

const argsMap = new Map([[716094134,{"a":".hover_bkgr_fricc:has(.facebookPopupCloseButton),\nDIV[id*=\"zone-wallbanner-header\"]"}],[464501893,{"a":"#gyuri1,\n#gyuri2"}],[1660353716,{"a":"[class*=\"billboard\"]"}],[1861568381,{"a":"#cookieAlertBox,\n.banner_widget,\n.sy-box,\ndiv.szerzo_holder + div.szerzo_holder,\ndiv[style*=\"1px solid rgba(201,201,201,0.4);\"]"}],[981576846,{"a":"[class*=\"-ad-container\"]"}],[1028218976,{"a":"P[class*=\"banner\"]"}],[639495391,{"a":"[id^=\"advert\"]"}],[1107376207,{"a":"DIV[class=\"module noheading\"],\nEMBED"}],[40594322,{"a":"#tetszett"}],[1451348325,{"a":"[data-adblockonly]"}],[525296671,{"a":"#cucc,\n#layerbanner"}],[837306496,{"a":"#custom_html-3"}],[458588175,{"a":"#euro-event,\n#sponsors,\n.gdpr-cookie-notice"}],[1610698981,{"a":"[class*=\"_ad\"]"}],[568320588,{"a":"#lebegodoboz,\n#szupertorony,\n[id*=\"-reklam\"],\n[id*=\"fancybox\"],\n[id^=\"hirdetes_jobb\"] + div,\n[id^=\"hirdetes_jobb_2\"] + div + div,\n[id^=\"szuperbanner_\"]"}],[2097200706,{"a":"[id^=\"hirdetes\"]"}],[1780064466,{"a":"#webpushSelctorFormId,\n.adcaption,\n.advert-item,\n.article-jobline-sidebar-doboz,\n.article-menu.panelgap,\n.article-otherelements-container content,\n.articlebox.clear.sidebar-ajanlat,\n.block-ms-box2,\n.cimlap-ajanlat.elem-1180.cimlap-grid-elem,\n.hosting,\n.hvg_push,\n.jobline-palyakezdo-feed,\n.lh-calc.bm-caxlc-bo,\n.list-article + style + .panelgap,\n.selectWidget,\n.support-stripe,\n[class*=\"adtype-\"],\n[class=\"articleitem clear smallimage imgleft\"],\n[class=\"site-scarab-bottom open\"]"}],[41744000,{"a":".ad-poc-link,\n.parallax_bottom,\n.parallax_top"}],[1034456774,{"a":"DIV[class*=\"ad_\"]"}],[999485268,{"a":"#announcement,\n#cikktoolbaradomany,\n#cookiealert,\n#sidebar > table,\n.cikkszovegaction,\n.cikkszovegakcio,\n.kommentadomany,\nDIV[id*=\"hirdetes\"],\nbody > div > a[target=\"_blank\"]"}],[1486600538,{"a":"[class*=\"hird-\"],\n[class*=\"hird_\"]"}],[991302159,{"a":"[class*=\" ad\"]"}],[1756877552,{"a":".topAdv"}],[588973973,{"a":".shopline-box,\n.travelo-box"}],[390180756,{"a":"#ad_null_position,\n#also_bannerek,\n#bookline,\n#box_energiapedia,\n#box_eon,\n#box_info,\n#box_medicalonline,\n#closeWindow,\n#ctravelbox,\n#index_shopline,\n._iph_brk,\n.glr_advert,\n.infoStripe,\n.keretes-donate-doboz,\n.microsite_dummy,\n.nm_header,\n.nm_mini,\n.nm_mini__wrapper,\n.nm_sponsored__wrapper,\n.nm_supported,\n.nm_supported__wrapper,\n.nm_thanks,\n.nm_thanks__wrapper,\n.nm_widget__wrapper,\nDIV[class*=\"guestbox\"],\n[class=\"ajanlatok box scrollbox\"]"}],[1192675698,{"a":".cikk-vegi-ajanlo-reklamok-container,\n[class*=\"adblokk\"]"}],[1838381502,{"a":"[class*=\"ad-container\"]"}],[1355312318,{"a":"#ads"}],[261746413,{"a":"#ot2015,\n#rightcoltd,\n#site_header"}],[250405239,{"a":"#main div[class*=\"banner\"],\n#sidebar > div[class*=\"banner\"],\ndiv.read div[class*=\"banner\"]"}],[1545720306,{"a":".notification-popup"}],[1997238562,{"a":"#_ao-cmp-ui,\ndiv[data-qa=\"oil-Layer\"]"}],[527913352,{"a":"#bottompopup"}],[981323373,{"a":"#magnum"}],[1471911944,{"a":"#accept-cookie"}],[440232654,{"a":"#leftPoszter-section,\n#salePoszter,\n.home-section-banner,\n.u-hide\\@mobile.flag-wrapper--fill.flag-wrapper.grid-col-lg-1-4.grid-col-md-1-2.grid-col-1.article-list__item"}],[139632265,{"a":"div[class=\"tl-state-root tve-leads-ribbon tve-trigger-hide tve-tl-anim tve-leads-track-ribbon-1 tl-anim-slide_top tve-leads-triggered\"]"}],[1003133150,{"a":"#cookie-law-info-again"}]]);

const hostnamesMap = new Map([["hirado.hu",716094134],["hircsarda.hu",464501893],["hirextra.hu",1660353716],["indavideo.hu",[1660353716,1756877552]],["hiros.hu",1861568381],["hirtv.hu",981576846],["hoc.hu",1028218976],["hogyankell.hu",639495391],["holtankoljak.hu",1107376207],["hotdog.hu",40594322],["hoxa.hu",1451348325],["hrportal.hu",525296671],["huaweiblog.hu",837306496],["mlzphoto.hu",837306496],["napidroid.hu",837306496],["hunbasket.hu",458588175],["kosarsport.hu",458588175],["hunhir.hu",1610698981],["weborvos.hu",1610698981],["hupont.hu",[568320588,2097200706]],["webbeteg.hu",2097200706],["hvg.hu",1780064466],["m.hvg.hu",41744000],["hvo.hu",1034456774],["hwsw.hu",999485268],["idokep.hu",1486600538],["ilovebalaton.hu",991302159],["nemzetisport.hu",991302159],["transindex.ro",991302159],["index.hu",[588973973,390180756,1192675698,1838381502,1355312318]],["totalcar.hu",[588973973,1192675698,1355312318]],["velvet.hu",[588973973,1838381502,1355312318]],["forum.index.hu",261746413],["infoajka.hu",250405239],["infobekescsaba.hu",250405239],["infocegled.hu",250405239],["infocelldomolk.hu",250405239],["infodebrecen.hu",250405239],["infodombovar.hu",250405239],["infodunaujvaros.hu",250405239],["infoesztergom.hu",250405239],["infofehervar.hu",250405239],["infogyor.hu",250405239],["infohodmezovasarhely.hu",250405239],["infokarcag.hu",250405239],["infokeszthely.hu",250405239],["infokiskunfelegyhaza.hu",250405239],["infomiskolc.hu",250405239],["infomovar.hu",250405239],["infonograd.hu",250405239],["infopapa.hu",250405239],["inforabakoz.hu",250405239],["infosarvar.hu",250405239],["infosporon.hu",250405239],["infoszentendre.hu",250405239],["infoszigetkoz.hu",250405239],["infoszombathely.hu",250405239],["infotamasi.hu",250405239],["infotatabanya.hu",250405239],["infoveszprem.hu",250405239],["infozalaegerszeg.hu",250405239],["infostart.hu",[1545720306,1997238562]],["portfolio.hu",1545720306],["internet-marketing.hu",527913352],["investor.hu",[981323373,1471911944]],["szoftverbazis.hu",981323373],["sztaki.hu",981323373],["life.hu",1471911944],["ok.hu",1471911944],["origo.hu",1471911944],["reblog.hu",1471911944],["videa.hu",1471911944],["ipon.hu",440232654],["ite.hu",139632265],["itthonrolhaza.hu",1003133150]]);

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
