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

// spa-0

const argsMap = new Map([[712025085,{"a":".td-all-devices"}],[1109145443,{"a":"div[data-testid=\"test-ads\"]"}],[1344690627,{"a":"a[style][rel]"}],[522408283,{"a":".bderecho,\n.bizquierdo"}],[1936826429,{"a":"#g"}],[809742239,{"a":".banner-bottom"}],[768276002,{"a":"#vpnvpn"}],[181592767,{"a":"[data-widget-type^=\"Outbrain\"]"}],[2044371750,{"a":".banner-970,\n.side-banner"}],[590788592,{"a":"div[style=\"font-size: 0.8em; text-align: left; color: rgb(136, 136, 136);\"],\ndiv[style=\"margin-top:15px;float:left;width:100%;\"]"}],[1217349517,{"a":"#closeX1"}],[1030691798,{"a":"#afi,\n[href^=\"http://www.ciberhentai.net\"],\na[href=\"http://vermangasporno.com/\"]"}],[1564079319,{"a":"#closeX"}],[1490616326,{"a":"#closeX23"}],[427501475,{"a":"div[class^=\"ano_\"]"}],[2112314285,{"a":"a[href^=\"https://www.primevideo.com/\"][href*=\"tag=\"]"}],[895563283,{"a":"#adb-enabled"}],[427836293,{"a":".afs-block"}],[630780822,{"a":"#pBrazzers,\n#pSponsor"}],[364190489,{"a":".adv-link"}],[1786911301,{"a":".attachment-medium,\n.widget_media_video"}],[1977061092,{"a":"#banner-mega"}],[65989600,{"a":".block-crvt-adbtgmedia"}],[2112151224,{"a":"div[class^=\"pauta_\"]"}],[62672259,{"a":"#bio_ep,\n#sidebar-best-vpns,\n#sidebar-top-vendors"}],[1019189705,{"a":"#bt_aws_ad_slot_1"}],[48465787,{"a":".sidebar1.sidebar-separators"}],[1205091369,{"a":".overlay_popup"}],[253572418,{"a":".close-text"}],[2034408139,{"a":"#banner_top_container,\n.slidebanner,\na[href^=\"https://beone.es/\"]"}],[1449470313,{"a":"#sidebar > .et_pb_widget,\n.code-block-3,\n.code-block-5,\n.code-block-6,\n.code-block-9"}],[373382916,{"a":"div[style=\"margin: 0px;padding: 0px; background-color: transparent;\"],\nimg[alt=\"Espacio Publicitario\"]"}],[1577149612,{"a":"[href^=\"https://jumbo.com.do/\"]"}],[898036635,{"a":"a[href=\"http://www.herbalife.com.ec/\"]"}],[1284350531,{"a":".region-pv1-superior-amplia"}],[163466151,{"a":"[id^=\"slider_\"]"}],[1714618036,{"a":"#banners"}],[379982040,{"a":"#cajasbuscadoras,\n.axds,\n.module-coupons,\na[href=\"http://boticariagarcia.com/\"],\na[href=\"http://lofficiel.es/\"],\na[href=\"http://www.esquire.es\"],\niframe[src^=\"https://www.20minutos.es/cajasbuscadoras/\"],\nimg[src=\"http://mmedia.20m.es/modulos/pastillas/nuevas/pastillas/Bankia.png\"]"}],[212080131,{"a":".bloc-bub-860,\n.bloc-header-pub"}],[1245067845,{"a":"#wrap-pantallazo,\n.banner-cabecero"}],[1282725450,{"a":".td-banner-wrap-full"}],[966536472,{"a":".appSlider"}],[1679751875,{"a":"a[href^=\"https://www.amazon.\"][href*=\"tag=\"]"}],[1035525602,{"a":".bannerhome,\n.destacados"}],[1255192568,{"a":".cl-billboad-wrapper"}],[198482526,{"a":".g-dyn"}],[1310176128,{"a":".rm-product.rm-format"}],[2000966531,{"a":".popup-promo"}],[1637405528,{"a":"h2[style^=\"color:red;font-size:20px!important\"]"}],[1389517922,{"a":".at4-whatsnext-outer-container"}],[483886973,{"a":"div[style=\"border: 2px solid #1D8FC1; width: 320px; height:280px; clear:both; margin-bottom: 25px\"]"}],[2027895083,{"a":"#advertising-right,\n#advertising-top"}],[265362867,{"a":"div[style=\"margin:5px auto 5px;text-align:center;\"]"}],[2110686337,{"a":".b-2"}],[646253899,{"a":"div[style=\"text-align:center; margin-bottom: 15px; background-color:#F4F4F4;width: 302px;\"],\ndiv[style=\"text-align:center; margin-bottom: 15px; background-color:#F4F4F4;width: 728px;\"]"}],[1656091724,{"a":"#bhorizontal,\n#columnapublicidad,\n#mediacolumna,\n.advertising-corte-interstitial"}],[1269473404,{"a":".no-baldomero"}],[782645779,{"a":".BANNER_COLUMN"}],[1006515728,{"a":"#abMsgWrap"}],[1237098153,{"a":".fusion-header-banner"}],[285481337,{"a":".ePubli1,\nimg[src=\"http://media.grupojoly.com//0001985000/0001985392.gif\"],\nimg[src=\"http://media.grupojoly.com//0002002500/0002002922.gif\"]"}],[1978393727,{"a":".baterybanner"}],[1704234650,{"a":".publi"}],[1165152479,{"a":".beta-placement"}]]);

const hostnamesMap = new Map([["tribunamaresme.com",712025085],["periodicoelnazareno.es",712025085],["tudiscovery.com",1109145443],["tumejortorrent.com",1344690627],["tumomo.com",522408283],["tvenganchado.com",1936826429],["tycsports.com",809742239],["ettv.unblockninja.com",768276002],["univision.com",181592767],["ushuaianoticias.com",2044371750],["vanguardia.com",590788592],["vercanalestv.com",1217349517],["verdirectotv.com",[1217349517,1564079319,1490616326]],["cinestrenostv.tv",1217349517],["vercomicsporno.com",1030691798],["vergol.com",[1564079319,895563283]],["vertelevisor.com",1564079319],["verliga.net",[1564079319,895563283]],["verepeliculas.com",427501475],["vergnula.com",2112314285],["vibbo.com",427836293],["videosdemadurasx.com",630780822],["villavicenciodiaadia.com",364190489],["villavonoticias.com",1786911301],["viralizalo.com",1977061092],["vix.com",65989600],["volkgames.com",2112151224],["wizcase.com",62672259],["wordmagicsoft.com",1019189705],["wowtechlife.com",48465787],["xnalgas.com",1205091369],["xxxpornohq.com",253572418],["zigzagdigital.com",2034408139],["180grados.digital",1449470313],["bufeo.do",373382916],["colorvision.com.do",1577149612],["ldu.com.ec",898036635],["planv.com.ec",1284350531],["dialoguemos.ec",163466151],["estadio.ec",1714618036],["20minutos.es",379982040],["absoluporn.es",212080131],["andaluciainformacion.es",1245067845],["viruji.andaluciainformacion.es",1282725450],["androidpit.es",966536472],["anisearch.es",1679751875],["areasac.es",1035525602],["autoscout24.es",1255192568],["berjadigital.es",198482526],["diarioronda.es",[198482526,1704234650]],["carrefour.es",1310176128],["casinonewsdaily.es",2000966531],["chaty.es",1637405528],["windowscracker1.blogspot.com.es",1389517922],["euribor.com.es",483886973],["comunio.es",2027895083],["concuchilloytenedor.es",265362867],["costacadizcomunicacion.es",2110686337],["cuartopoder.es",646253899],["desdesoria.es",1656091724],["diariodeibiza.es",1269473404],["diariodemallorca.es",1269473404],["laprovincia.es",1269473404],["diariodelalinea.es",782645779],["diariodenavarra.es",1006515728],["diariodepasion.es",1237098153],["diariodesevilla.es",285481337],["diariolalupa.es",1978393727],["desdelinux.net",1704234650],["ebay.es",1165152479]]);

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
