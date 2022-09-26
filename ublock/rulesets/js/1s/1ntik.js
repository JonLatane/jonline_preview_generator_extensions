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

const argsMap = new Map([[1702000893,{"a":".banner-desktop-300"}],[1933421492,{"a":".banner-libre"}],[1025782327,{"a":".publicidad"}],[1517132715,{"a":"#text-3"}],[1078290072,{"a":"#footer-widgets,\n.fp-slider,\nimg[class^=\"undefined\"]"}],[323904105,{"a":"#cacho-overlay,\n#cacho-popup,\n.lazypubli,\n.slickWindow"}],[619924784,{"a":".ad"}],[335432836,{"a":"#div-abc_1024x100_arriba_logo,\n.banner-lateral"}],[138686842,{"a":".banner-box"}],[2132174931,{"a":".contenedor_banner_popup,\n.contenedor_principal_banner_lateral"}],[892414312,{"a":".zona_banners"}],[2024805621,{"a":"p[style=\"margin:2px auto 2px auto;padding:2px 2px 2px 2px;border:0px solid #999999; background-color:#f0f0f0; overflow:hidden;\"]"}],[863610331,{"a":"[id^=\"media_image-\"]"}],[171059848,{"a":".ad-header-right"}],[236521724,{"a":"a[href^=\"http://bit.ly/\"]"}],[1408242436,{"a":"div[style=\"width: 90%; height: 90px; background: #fff; text-align: center; display: inline-block; color: #bbb; font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 1.2rem; white-space: nowrap; padding: 0px 5% 0; overflow: hidden;\"]"}],[1430880218,{"a":".banner1,\n.banner3,\n.banner4,\n.banner5"}],[1385081410,{"a":".banner2"}],[988604162,{"a":".stream-item-mag"}],[340492144,{"a":".widget-ad-image"}],[2146062627,{"a":".widget_block"}],[743013784,{"a":".banner"}],[1164717378,{"a":".banner-wrapper"}],[1398240381,{"a":".fixed-banner"}],[1079117380,{"a":".tdi_36"}],[1940779653,{"a":"#lik"}],[1471132886,{"a":".banner-lanusse,\ndiv[class*=\"dfp-async\"]"}],[269934180,{"a":".bnr"}],[942367479,{"a":".modal-backdrop"}],[439847553,{"a":".td-a-rec-id-custom-spot"}],[669191754,{"a":".st-banner"}],[863069410,{"a":".visable"}],[43622434,{"a":"#OBJETO861 > .ad-obj"}],[219502222,{"a":".tronco--init"}],[140187633,{"a":"#text-5,\n#text-6"}],[408783137,{"a":"#text-7"}],[1222842934,{"a":"#carruselMarcasBlaisten"}],[1197644655,{"a":".ppp"}],[751510993,{"a":"div[style=\"margin-top:10px;float: left;\"]"}],[1242977690,{"a":"div[class^=\"contenedor_banner_\"]"}],[1856578024,{"a":".bannerpopup"}],[1161345065,{"a":".bannernota,\n.bannernota2,\n.bannernota3"}],[2073101136,{"a":".sponsor"}],[459386020,{"a":".banner-box-container,\ndiv[class*=\"_site-banner-top_\"]"}],[1666585490,{"a":".publicidad_nota"}],[298046060,{"a":".adv"}],[1171569000,{"a":".ads"}],[1092281672,{"a":".banner-swap"}],[598376685,{"a":"a[href^=\"https://www.starplus.com\"][href*=\"?cid=\"]"}],[1303552952,{"a":".banners"}],[865042704,{"a":"#banner"}],[911552206,{"a":"#custom_html-4"}],[2060916018,{"a":"#generico,\n.bannerSide,\n.bannnerTop"}],[2056748203,{"a":".ml-slider"}],[673791633,{"a":"#text-4"}],[1961321591,{"a":"p[style=\"margin:2px 2px 2px 2px;padding:2px 2px 2px 2px;border:0px dashed #999999; overflow:hidden;\"]"}],[535133060,{"a":"#id_popup_MM_cliqueado,\n.container-spot,\n.cookie_lasa_popup,\n.popup_MM__cliqueado,\n.td-a-rec-id-sidebar,\ndiv[style=\"box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 20px; background: rgb(255, 255, 255); animation-duration: 0.4s; animation-delay: 0.2s; border-radius: 4px; width: 900px; height: 500px; margin: auto; padding: 30px;\"]"}],[1612180061,{"a":".banner-nativo"}],[1142861307,{"a":".add"}],[1078117544,{"a":".mod-banner,\n.sidebar__aside"}],[1722905992,{"a":".lanus-widget"}],[837306496,{"a":"#custom_html-3"}],[1808267885,{"a":"#HTML20,\n#HTML23"}],[1228510587,{"a":"#text-9"}]]);

const hostnamesMap = new Map([["750.am",1702000893],["lared.am",1933421492],["diariouno.com.ar",1933421492],["a24.com",1933421492],["0221.com.ar",1025782327],["carasycaretas.org.ar",1025782327],["eldeportivo.com.co",1025782327],["animekb.com",1025782327],["dinero.com",1025782327],["elrellano.com",1025782327],["expansion.com",1025782327],["gonzoo.com",1025782327],["iahorro.com",1025782327],["laizquierdadiario.com",1025782327],["latercera.com",1025782327],["okdiario.com",1025782327],["semana.com",1025782327],["supercines.com",1025782327],["ciclismoafondo.es",1025782327],["lne.es",1025782327],["motociclismo.es",1025782327],["mountainbike.es",1025782327],["publico.es",[1025782327,2073101136,1171569000]],["areajugones.sport.es",1025782327],["eltribuno.info",1025782327],["generacionuniversitaria.com.mx",1025782327],["mundoejecutivo.com.mx",1025782327],["diario.mx",1025782327],["16valvulas.com.ar",1517132715],["infoagro.com.ar",[1517132715,673791633]],["elplanetaurbano.com",1517132715],["elsigloweb.com",[1517132715,140187633]],["todopolicia.com",1517132715],["bufeo.do",1517132715],["25digital.com.ar",1078290072],["abchoy.com.ar",[323904105,619924784]],["elsol.com.ar",[619924784,298046060]],["applesfera.com",619924784],["bebesymas.com",619924784],["bolavip.com",619924784],["compradiccion.com",619924784],["cuatro.com",619924784],["diariocordoba.com",619924784],["diariodelviajero.com",619924784],["directoalpaladar.com",619924784],["elblogsalmon.com",619924784],["elconfidencial.com",619924784],["espinof.com",619924784],["genbeta.com",619924784],["genbetadev.com",619924784],["laverdad.com",619924784],["mediotiempo.com",619924784],["milenio.com",619924784],["motorpasion.com",619924784],["motorpasionmoto.com",619924784],["pymesyautonomos.com",619924784],["salvajes.com",619924784],["trendencias.com",619924784],["trendenciashombre.com",619924784],["vidaextra.com",619924784],["vitonica.com",619924784],["es.wallapop.com",619924784],["xataka.com",619924784],["xatakaciencia.com",619924784],["xatakafoto.com",619924784],["xatakahome.com",619924784],["xatakamovil.com",619924784],["xatakandroid.com",619924784],["xatakawindows.com",619924784],["economiadigital.es",619924784],["larazon.es",619924784],["telecinco.es",619924784],["elpopular.pe",619924784],["larepublica.pe",619924784],["libero.pe",619924784],["abcsaladillo.com.ar",335432836],["agroclave.com.ar",138686842],["lacapital.com.ar",[138686842,743013784,1612180061]],["anbariloche.com.ar",[2132174931,892414312]],["anroca.com.ar",[2132174931,892414312]],["nuevodiarioweb.com.ar",892414312],["apfdigital.com.ar",2024805621],["infoban.com.ar",[2024805621,1961321591]],["arribalanus.com.ar",863610331],["diarioconurbano.com.ar",[863610331,1079117380]],["el1digital.com.ar",863610331],["impactonews.co",863610331],["incp.org.co",863610331],["berjadigital.es",863610331],["armasymuniciones.net",863610331],["autoblog.com.ar",[171059848,236521724]],["microsiervos.com",236521724],["biodiesel.com.ar",1408242436],["breves24.com.ar",[1430880218,1385081410]],["laprensagrafica.com",[1385081410,743013784]],["cadenaoh.com.ar",[988604162,340492144]],["envilladelparque.com",988604162],["envilladevoto.com",988604162],["profesionalreview.com",340492144],["cafexmedio.com.ar",2146062627],["invertirenbolsa.mx",2146062627],["canal-ar.com.ar",743013784],["diariodecuyo.com.ar",[743013784,1471132886,269934180]],["diariopopular.com.ar",[743013784,43622434]],["elancasti.com.ar",743013784],["eldiarionuevodia.com.ar",[743013784,1856578024]],["gacetadeportiva.com.ar",743013784],["impulsobaires.com.ar",743013784],["lanacion.com.ar",[743013784,1078117544]],["lavoz.com.ar",743013784],["losandes.com.ar",743013784],["puntobiz.com.ar",743013784],["realpolitik.com.ar",743013784],["unoentrerios.com.ar",[743013784,1612180061]],["unosantafe.com.ar",[743013784,1612180061]],["viapais.com.ar",743013784],["voydeviaje.com.ar",743013784],["t13.cl",743013784],["motor.com.co",743013784],["24con.com",743013784],["agenciafe.com",743013784],["agritotal.com",743013784],["azarplus.com",[743013784,1303552952]],["bigbangnews.com",743013784],["castellonplaza.com",743013784],["diariolaprovinciasj.com",743013784],["elpatagonico.com",743013784],["garticphone.com",743013784],["guarda14.com",743013784],["infocanuelas.com",743013784],["lacuarta.com",743013784],["lapoliticaonline.com",743013784],["masgamers.com",743013784],["mdzol.com",743013784],["mibrujula.com",743013784],["minutouno.com",743013784],["paraveronline.com",743013784],["primiciasya.com",[743013784,1612180061]],["rosario3.com",743013784],["sanjuan8.com",743013784],["teatroporno.com",743013784],["tutecnomundo.com",743013784],["tycsports.com",743013784],["valenciaplaza.com",743013784],["alicanteplaza.es",743013784],["planetadeagostini.es",743013784],["sport.es",[743013784,1142861307]],["debate.com.mx",743013784],["meristation.com.mx",743013784],["informador.mx",743013784],["diariohoy.net",743013784],["poringa.net",743013784],["laiguana.tv",743013784],["ciudad.com.ar",1164717378],["hazteveg.com",1164717378],["lmcipolletti.com",1164717378],["lmneuquen.com",1164717378],["cronica.com.ar",1398240381],["diariocronica.com.ar",1940779653],["anime-extremo.com",269934180],["diarioelinformante.com.ar",942367479],["laopinionsannicolas.com.ar",[942367479,837306496]],["diarioelnorte.com.ar",439847553],["elproductor.com",439847553],["confirmado.net",439847553],["diariolarepublica.com.ar",669191754],["diarionoticias.com.ar",863069410],["diarioresumen.com.ar",219502222],["diariovictoria.com.ar",[140187633,408783137]],["elexpediente.co",408783137],["animechou.com",408783137],["nuestroclima.com",408783137],["easy.com.ar",1222842934],["elchubut.com.ar",1197644655],["infoplatense.com.ar",1197644655],["eldia.com",1197644655],["elcomercial.com.ar",751510993],["elcordillerano.com.ar",1242977690],["elliberal.com.ar",[1161345065,2073101136]],["cronista.com",2073101136],["rpp.pe",[2073101136,1171569000]],["elobservador.com.uy",2073101136],["elnueve.com.ar",459386020],["elretratodehoy.com.ar",1666585490],["lanoticiadequilmes.com.ar",298046060],["20minutos.com",298046060],["elespanol.com",298046060],["juegosarea.com",298046060],["20minutos.es",298046060],["20minutos.com.mx",298046060],["eltrecetv.com.ar",[1171569000,1092281672]],["dimayor.com.co",1171569000],["cronicadelquindio.com",1171569000],["lostiempos.com",1171569000],["pctmix1.com",1171569000],["peru.com",1171569000],["eslang.es",1171569000],["gnula.se",1171569000],["pelispedia.tv",1171569000],["9movies.yt",1171569000],["espn.com.ar",598376685],["espn.cl",598376685],["espn.com.co",598376685],["espn.co.cr",598376685],["espn.com.do",598376685],["espn.com.ec",598376685],["espn.com.gt",598376685],["espn.com.mx",598376685],["espn.com.pa",598376685],["espn.com.pe",598376685],["espn.com.uy",598376685],["espn.com.ve",598376685],["fm899.com.ar",1303552952],["fmvida.com.ar",865042704],["inmonauta.es",865042704],["lapoliticaonline.com.mx",865042704],["futbolhoy.com.ar",911552206],["gente.com.ar",2060916018],["horadeopinion.com.ar",2056748203],["crearmiempresa.es",673791633],["laarena.com.ar",535133060],["lagaceta.com.ar",1142861307],["lagacetasalta.com.ar",1142861307],["elperiodico.cat",1142861307],["cope.es",1142861307],["laconversacion.net",1142861307],["lanusnoticias.com.ar",1722905992],["diarioputumayo.com",837306496],["lapampadiaxdia.com.ar",1808267885],["lasextaseccion.com.ar",1228510587]]);

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
