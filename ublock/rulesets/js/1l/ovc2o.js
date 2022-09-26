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

const argsMap = new Map([[843527728,{"a":"[class^=\"adTag\"]"}],[218909962,{"a":"#ccr-sidebar-add-place"}],[1834087321,{"a":"div[style=\"float:none;margin:10px 0 10px 0;text-align:center;\"]"}],[417194585,{"a":"a[href=\"http://castillafloristeria.com/\"],\na[href=\"http://electrosanzhermanos.com/\"]"}],[1268889896,{"a":"[alt^=\"Tienda\"],\nimg[src=\"http://static.tumblr.com/omgciym/0iNnhnzq2/neopeseta.png\"],\nimg[src=\"http://static.tumblr.com/omgciym/0tvmih3p3/memetienda.jpg\"],\nimg[src=\"http://static.tumblr.com/omgciym/2bBmgb175/juegacos.jpg\"],\nimg[src=\"http://static.tumblr.com/omgciym/Pnenkw34v/edrfwregwrgwtrgwr.jpg\"],\nimg[src=\"http://static.tumblr.com/omgciym/SXxm66n6y/lol-logo.png\"]"}],[1519176182,{"a":".sidebar-ads"}],[1768065339,{"a":"a[href=\"http://ganadineroconencuestas.com/dinero_flow/?webform=*&c=&s2s=*&pubid=*&subid=&medio=*&vendor=*&context=\"]"}],[1425617015,{"a":"div[style=\"position:relative;z-index:100;height:450px\"]"}],[616175315,{"a":"#total"}],[330824108,{"a":"[href^=\"https://clasificados.clasiguia.com.pa\"]"}],[1745060979,{"a":"[onclick*=\"/publicidad\"]"}],[1430547911,{"a":".sidebar-zonahogar"}],[1222342714,{"a":".ec-club"}],[1692390714,{"a":".block-block-json-cuponidad-sidebar"}],[1522412313,{"a":"[class$=\"_ads\"]"}],[150671478,{"a":"#bannercentral,\n#bannercentral2,\n#bannertop"}],[1030073818,{"a":".atm-banner-middle,\n.atm-banner-strip,\n.atm-banner-top,\n.bl-cuponidad,\n.mol-bl_Cuponidad"}],[493490939,{"a":"#block-externos-block-json-cuponidad"}],[1369166508,{"a":".hiraoka"}],[2025088101,{"a":".logo-min"}],[1851278910,{"a":".content_gpt_top"}],[247045876,{"a":"div[class^=\"mol-publicidad\"]"}],[1233389561,{"a":"#total2,\n#total3"}],[1186990021,{"a":"#divpubli"}],[2000749888,{"a":"#article-banner-comentarios,\n#breaking-news-banner1,\n#fullwidth-banner,\n#top-banners,\n.banner-full-60,\n.col-banner,\n.col-banner-45"}],[951930184,{"a":".grid.desk-8.alpha > p"}],[1777319291,{"a":"a[href^=\"https://hacktorrent.net/\"]"}],[977960471,{"a":"#after-ad,\n[id^=\"Image\"]"}],[203568856,{"a":"#roviralta,\n.jaimiquito,\n.ramirito"}],[26474160,{"a":".close,\n.pepin,\n.raulito,\n.xclo,\n.xpepinx,\n.xraulitox"}],[1414193964,{"a":"#banner_sinopsis"}],[283433538,{"a":"#gift-middle"}],[893009097,{"a":"[id^=\"gift-\"]"}],[1668282627,{"a":"#gift-top"}],[1481369983,{"a":"span[style=\"font-weight:bold; cursor:pointer; text-decoration:underline\"]"}],[574769363,{"a":".mn-thumb"}],[1122337935,{"a":"#ap,\na[href*=\"leadzupc.com/\"]"}],[1409966724,{"a":"#closeX2"}],[466567844,{"a":".branding-wrapper"}],[1443540365,{"a":"#bottomlink,\n#categories"}],[1026406111,{"a":".cover"}],[1726161808,{"a":".pum-overlay"}],[754359050,{"a":".advertisement,\n.widget_ti_image_banner"}],[1378710942,{"a":"a[href*=\"clicktag_promo\"]"}],[107947370,{"a":".grid_12 > .grid_4"}],[698209620,{"a":"a[href^=\"http://www.maxonclick.com/\"]"}],[70276366,{"a":"#promo,\n#promoSept19A,\n#promoSept19B,\n.promoTop"}],[2132267187,{"a":"a[href^=\"https://veranime.org/\"]"}],[721757025,{"a":".banners-side-container,\na[href=\"http://www.180.com.uy/banner?ID=857&CODE=portal.index\"]"}],[1320917828,{"a":"#conectab"}],[182677281,{"a":"#bannerEspeciales,\n#clima-banner"}],[1327790873,{"a":".bfbc"}],[492340599,{"a":".bnpub"}],[1374080394,{"a":"[href^=\"http://adultguia.com\"]"}],[922532153,{"a":"[href^=\"https://qp.erotilink.es\"]"}],[53879651,{"a":"iframe[src^=\"http://xxxvideosputas.xxx/includes/adds/\"]"}]]);

const hostnamesMap = new Map([["albumoftheyear.org",843527728],["artesacro.org",218909962],["booksmedicos.org",1834087321],["diariodelaribera.org",417194585],["finofilipino.org",1268889896],["megawarez.org",1519176182],["noticiasdelmundo.org",1768065339],["peliculasyseries.org",1425617015],["verdirectotv.org",616175315],["dinostream.pw",[616175315,1233389561]],["panamaamerica.com.pa",330824108],["andina.pe",1745060979],["diariocorreo.pe",1430547911],["elcomercio.pe",1222342714],["elpopular.pe",1692390714],["gestion.pe",1522412313],["laindustria.pe",150671478],["larepublica.pe",1030073818],["libero.pe",493490939],["peru21.pe",1369166508],["rpp.pe",2025088101],["trome.pe",1851278910],["wapa.pe",247045876],["livesports.pw",1186990021],["abc.com.py",2000749888],["cuevana3.rip",951930184],["nocensor.sbs",1777319291],["noticiasdehoy.site",977960471],["adca.st",203568856],["bro.adca.st",26474160],["cinecalidad.to",1414193964],["ev01.to",283433538],["moviesjoy.to",893009097],["myflixertv.to",1668282627],["seriesdanko.to",1481369983],["animeflv.tv",574769363],["animeid.tv",1122337935],["cinestrenostv.tv",1409966724],["eldoce.tv",466567844],["ftail.tv",1443540365],["shippuden.tv",1443540365],["highstream.tv",1026406111],["intereconomia.tv",1726161808],["jerezcofrade.tv",754359050],["mundoplus.tv",1378710942],["ondaluz.tv",107947370],["pelisplus.tv",698209620],["qmusica.tv",70276366],["genteflow.us",2132267187],["180.com.uy",721757025],["montevideo.com.uy",1320917828],["pantallazo.com.uy",182677281],["juegosjuegos.ws",1327790873],["maduras.xxx",492340599],["mrvideospornogratis.xxx",1374080394],["qporno.xxx",922532153],["xxxvideosputas.xxx",53879651]]);

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
