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

const argsMap = new Map([[1831423296,{"a":".widget_media_image"}],[1579173438,{"a":"[id^=\"metaslider\"]"}],[1626601596,{"a":"[href^=\"https://colombia.argos.co/\"]"}],[2110266107,{"a":"[href^=\"https://www.rimax.com.co/\"]"}],[1837256730,{"a":"[id^=\"block-views-block-pauta-lateral-\"]"}],[641654716,{"a":"[href*=\"extra.com.co\"]"}],[1820388596,{"a":".publicidadtop"}],[496482196,{"a":".bannergroup"}],[1160248154,{"a":".a-single"}],[1940054078,{"a":".banner_header"}],[1468473428,{"a":".vc_single_image-img,\ndiv[itemtype^=\"https://schema.org/WPAdBlock\"]"}],[2059597160,{"a":"[href^=\"https://www.inder.gov.co/\"]"}],[1181558493,{"a":".publicy-banner"}],[821165459,{"a":"[href^=\"https://co.findasense.com/\"]"}],[1304693565,{"a":"#media_gallery-7"}],[886805965,{"a":"div[style=\"position:absolute;top:0;right:0;bottom:0;left:0;z-index:99999;cursor:pointer\"]"}],[1040018803,{"a":".advertising-news"}],[2101369595,{"a":".widget_metaslider_widget"}],[1824699668,{"a":"[href^=\"https://coronaviruscolombia.gov.co/\"]"}],[21762614,{"a":"#ads-mascotas,\n.pauta"}],[1986596851,{"a":"[class^=\"banner\"]"}],[1866928374,{"a":"#text-15"}],[1641606312,{"a":".homepage-widget > #text-16"}],[492411266,{"a":"#box-over-content-a"}],[1748303620,{"a":"#pinno-post-bot-ad,\n.pinno-flex-ad,\n.pinno-widget-ad"}],[160291664,{"a":".attachment-full"}],[1604876132,{"a":".attachment-large"}],[1493467439,{"a":".jawban"}],[1314835704,{"a":".banner_center"}],[956659962,{"a":".td_spot_img_all"}],[2078503247,{"a":".cyclone-slider-widget-8"}],[233649478,{"a":".ads_url_insert,\ntr[data-lang=\"Publicidad\"]"}],[1487559212,{"a":".fake_player"}],[1959236372,{"a":".anpub"}],[1950997656,{"a":".GoogleDfpAd-Content"}],[1128212172,{"a":".cssanimations"}],[1770172600,{"a":"div[style=\"padding: Publicidad\"]"}],[1613384779,{"a":".adx"}],[1025681626,{"a":".banner-header"}],[669849739,{"a":"#dst_pub_728,\ndiv[style=\"height:334px\"]"}],[1977980088,{"a":"[class*=\"pelag-\"]"}],[1531199058,{"a":"a[href^=\"https://geriasa.es/\"],\na[href^=\"https://karting-rivas.com/\"]"}],[648263076,{"a":"a[href^=\"/away.php?\"]"}],[229341898,{"a":"#banner_footer,\ndiv[style=\"width: 300px; height: 600px;\"],\ndiv[style=\"width: 640px; height: 480px;\"],\ndiv[style=\"width: 728px; height: 90px;\"]"}],[705986921,{"a":"div[id^=\"Bannerprincipal\"]"}],[1570918528,{"a":".td-header-sp-recs"}],[322822955,{"a":".weather-week"}],[126300318,{"a":"#binanceAd"}],[328883853,{"a":".banner-3-col"}],[464662964,{"a":".banner-container"}],[1528756164,{"a":"#disp-cta"}],[571411775,{"a":"#csgoempire,\n[href^=\"https://hentaini.com/\"],\na[href=\"https://zenkublocks.com/\"]"}],[1135833273,{"a":".pbl"}],[1706926184,{"a":"a[href=\"http://www.englishhouse.tv/sabias-que.php\"],\na[href=\"http://www.guiainfantil.com/\"],\na[href=\"http://www.neoxkidz.com/revista/estais-preparados-neox-kidz-estrena-revista_2015051255521d350cf2c05b5ea0c08b.html\"],\na[href=\"http://www.objetivobienestar.com/\"],\na[href=\"http://www.tualbum.es/\"]"}],[230671308,{"a":".attachment-medium_large"}],[934677015,{"a":".g-eplanning"}],[1120285344,{"a":"#anuncio-dark,\n.ad-leaderboard-row"}],[1906049263,{"a":".banner-bilboard,\ndiv[style=\"float:left;width:970px;height:90px;background: #eee; margin-right:10px\"]"}],[1791400070,{"a":".ads-notificator,\n.publi1"}],[1576343400,{"a":"td[width=\"728\"][height=\"90\"]"}],[1606621021,{"a":"#bannerTop,\n.mod_roba,\n.vjs-detect-overlay"}],[1213169581,{"a":".jlm-ad-videoo"}],[1922677600,{"a":".bannerfijodcha,\n.bannerfijoizda2,\n.bannerskinhome,\n.bannersuperiorhomebajomenu"}],[1274446008,{"a":"#ue_popups"}]]);

const hostnamesMap = new Map([["bcnoticias.com.co",[1831423296,1579173438]],["diariotextual.com",1831423296],["moracontenidos.com",1831423296],["realidadsm.com",[1831423296,1160248154]],["somosjuarez.com",1831423296],["crearmiempresa.es",1831423296],["armasymuniciones.net",1831423296],["boyaca7dias.com.co",1626601596],["diariodelcauca.com.co",[2110266107,1837256730]],["diariodelsur.com.co",[1837256730,641654716]],["eldeportivo.com.co",1820388596],["elinformador.com.co",496482196],["ecijaweb.com",496482196],["lancelotdigital.com",496482196],["lavozdemoron.es",496482196],["expreso.com.mx",496482196],["elwebdelmirall.net",496482196],["elmetro.com.co",1160248154],["elambito.com",1160248154],["gasteizhoy.com",1160248154],["radiomunera.com",1160248154],["sticknoticias.com",1160248154],["extra.com.co",1940054078],["hoydiariodelmagdalena.com.co",1468473428],["pasionmontanera.com.co",2059597160],["redmas.com.co",1181558493],["revistapym.com.co",821165459],["tiempodenoticias.com.co",1304693565],["datoporn.co",886805965],["diarioadn.co",1040018803],["elespia.co",2101369595],["envilladelparque.com",2101369595],["envilladevoto.com",2101369595],["elexpediente.co",1824699668],["elheraldo.co",21762614],["elmeridiano.co",1986596851],["emprendices.co",[1866928374,1641606312]],["misionesonline.net",1866928374],["flashscore.co",492411266],["forbes.co",1748303620],["impactonews.co",[160291664,1604876132]],["recursosculturales.com",160291664],["villavonoticias.com",160291664],["jawcloud.co",1493467439],["jkanime.co",1314835704],["animeid.io",1314835704],["momento24.co",956659962],["incp.org.co",2078503247],["pelisplay.co",233649478],["rainanime.co",1487559212],["verepeliculas.com",1487559212],["seguimiento.co",1959236372],["shock.co",1950997656],["bluradio.com",1950997656],["caracoltv.com",1950997656],["slimdownload.co",1128212172],["19640noticias.com",1770172600],["20minutos.com",[1613384779,1025681626]],["20minutos.es",[1613384779,1025681626]],["20minutos.com.mx",[1613384779,1025681626]],["ushuaianoticias.com",1025681626],["3djuegos.com",669849739],["4pelagatos.com",1977980088],["actualarganda.com",1531199058],["adlipay.com",648263076],["ahorradororata.com",229341898],["alcalorpolitico.com",705986921],["aldeaviral.com",1570918528],["periodicoeldiario.com",1570918528],["alicantetoday.com",322822955],["allinonedownloader.com",126300318],["ambito.com",[328883853,464662964]],["apertura.com",464662964],["elnueve.com",464662964],["elpuntodeequilibrio.com",464662964],["infotechnology.com",464662964],["minutouno.com",464662964],["andro4all.com",1528756164],["animefenix.com",571411775],["anitoc.com",1135833273],["panicmanga.com",1135833273],["worldmangas.com",1135833273],["antena3.com",1706926184],["appsparavertv.com",230671308],["aptitus.com",934677015],["arbolabc.com",1120285344],["argentinavende.com",1906049263],["cordobavende.com",1906049263],["meristation.as.com",1791400070],["meristation.com.mx",1791400070],["astrologiaenlinea.com",1576343400],["atresplayer.com",1606621021],["aulafacil.com",1213169581],["azarplus.com",1922677600],["baratos.com",1274446008]]);

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
