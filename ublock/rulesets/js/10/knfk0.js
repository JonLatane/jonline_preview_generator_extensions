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

const argsMap = new Map([[1053850301,{"a":".banner-float-bottom-2.banner-float-bottom"}],[856971448,{"a":".header-ad-mobile,\n.under-player-ad-mobile"}],[785199895,{"a":"#repop"}],[1634695103,{"a":"#floating_bot.btm_ban"}],[442953234,{"a":"#floatcenter"}],[261288680,{"a":"#floating_banner_top1"}],[710688355,{"a":".box_item_berlangganan_popup,\n[href^=\"https://luxury138.link/\"],\na[href^=\"https://cek.to/\"]"}],[1942318603,{"a":"#overplay,\n.sgpb-popup-overlay"}],[2069892543,{"a":"#teaser1"}],[761184923,{"a":"#teaser2"}],[1640442170,{"a":".sgpb-popup-dialog-main-div-wrapper"}],[110565558,{"a":"#ads-pop,\n#floattop,\n#top6"}],[781659872,{"a":".banner-img"}],[236521724,{"a":"a[href^=\"http://bit.ly/\"]"}],[582865062,{"a":"a[href^=\"https://goo.gl/\"]"}],[169655593,{"a":"#semprotpokemon_3,\n#semprotpokemon_4"}],[649815383,{"a":".lazyloaded.ls-is-cached.bannerdua,\n.lazyloaded.ls-is-cached.bannersatu,\n[href^=\"https://137.184.194.29/\"]"}],[1171569000,{"a":".ads"}],[1941038606,{"a":"[href^=\"http://rebrand.ly/\"]"}],[1170761248,{"a":"#KD_adpB,\n.krucil_ads"}],[854500071,{"a":"#adsimgxatas2,\n#adsimgxbawah,\n.banner-float-bottom"}],[1773893661,{"a":"#fixedban"}],[1518748265,{"a":"#tutupen,\n[href=\"https://bit.ly/idx-xx\"]"}],[1329033776,{"a":"#le_header_ads"}],[104959203,{"a":"[href^=\"https://bit.ly/\"]"}],[2052298222,{"a":"#top-banner"}],[2076540328,{"a":".ban_empat"}],[1778621337,{"a":"#advertisement"}],[641308253,{"a":"#overlay"}],[1087792209,{"a":".warning-modal"}],[855364693,{"a":"#adsic364x90-bokep"}],[828728448,{"a":".inner-floatbanner-bottom"}],[687556308,{"a":".bm.overlay"}],[865702908,{"a":".imgbanner"}],[1069222452,{"a":"#iklap,\n#iklhead,\n#jwp_gmn_adss"}]]);

const hostnamesMap = new Map([["51.81.238.0",1053850301],["128.199.102.111",856971448],["193.178.172.113",785199895],["157.245.195.114",1634695103],["149.28.158.117",442953234],["awsubs.co",442953234],["animexin.xyz",442953234],["anixlife.xyz",442953234],["75.119.147.12",261288680],["45.67.231.215",261288680],["109.234.34.246",[261288680,828728448]],["154.12.229.9",261288680],["cinema-indo.co",261288680],["nontonlk21.live",261288680],["kawanfilm21.online",[261288680,104959203]],["kawanfilm21.pro",[261288680,104959203]],["194.163.183.129",710688355],["65.108.132.145",[1942318603,2069892543,761184923,1640442170]],["oploverz.bz",1942318603],["film-ganool.co",[2069892543,761184923]],["cinemaindo.com",[2069892543,761184923]],["film-ganool.com",[2069892543,761184923]],["oploverz.fan",2069892543],["mangashiro.net",2069892543],["filmroster.online",2069892543],["cinemaindo.stream",[2069892543,761184923]],["cinemaindo.tv",[2069892543,761184923]],["neumanga.tv",[2069892543,1171569000]],["bioskop201.biz",761184923],["bioskopgalaxy21.com",761184923],["downloadfilmbaru.com",761184923],["22cinema.download",761184923],["nontonmovie.web.id",761184923],["filmbaru.in",761184923],["komiku.net",761184923],["movie76.net",761184923],["ganool.nl",761184923],["ganool.ph",761184923],["bioskopmovie.tv",761184923],["80.209.252.146",110565558],["164.68.127.15",781659872],["194.233.87.224",781659872],["154.26.132.73",781659872],["46.166.167.16",[236521724,582865062,169655593]],["lk21.cam",236521724],["nekopoi.care",236521724],["nekopoi.cash",236521724],["gudangmovies21.cc",236521724],["indomovies.club",236521724],["indoxx1.club",236521724],["bioskop168.co",236521724],["filmbioskop21.co",236521724],["layarmovie21.co",236521724],["nontonsub.co",236521724],["01nonton.com",236521724],["123drakor.com",[236521724,582865062]],["bioskop45.com",[236521724,582865062]],["idbioskop.com",[236521724,582865062]],["nonton-streaming.com",236521724],["nonton789.com",236521724],["nontongratis88.com",236521724],["nontonmovie81.com",236521724],["nontonsub.com",236521724],["sashahillfilm.com",236521724],["semprot.com",[236521724,169655593]],["semprotku.com",[236521724,169655593]],["thirdstarfilm.com",236521724],["layarkacaxxi.id",236521724],["meownime.id",236521724],["lk21.web.id",[236521724,2052298222]],["sinemaindo.web.id",[236521724,2052298222]],["zonabola.id",236521724],["nekopoi.lol",236521724],["animeboy.me",236521724],["nontonani.me",236521724],["nontondrama.me",236521724],["ns21.me",[236521724,582865062,2076540328]],["sukamovie.mobi",236521724],["gandhool.net",236521724],["indomv.net",236521724],["nonton33.net",[236521724,582865062]],["satujiwa.net",236521724],["bioskop168.online",236521724],["layarxxi.online",236521724],["bioskop168.pro",236521724],["lk21.rip",236521724],["dewamovie.tv",236521724],["drakorindo.tv",[236521724,582865062]],["filmroster.tv",236521724],["ganoolmovie.video",236521724],["bioskopkeren.club",582865062],["bioskopxx1.com",582865062],["moviebaru21.com",582865062],["serunonton.com",582865062],["awsubs.id",582865062],["bioskopkeren.online",582865062],["indoxxi.top",582865062],["ns21.top",582865062],["bioskopkeren.xyz",582865062],["188.166.39.172",649815383],["95.216.163.177",1171569000],["192.99.70.18",[1171569000,1941038606]],["22cinema.com",1171569000],["topgans.blogspot.com",1171569000],["dapurpacu.com",1171569000],["dewanontons.com",1171569000],["download-lagu-mp3.com",1171569000],["embed.dramanices.com",1171569000],["duniafilm21.com",1171569000],["kompas.com",1171569000],["smallencode.com",1171569000],["embed.dramacool.es",1171569000],["dunia21.ltd",1171569000],["k-vid.net",1171569000],["otakuindo.net",1171569000],["173.199.167.192",1170761248],["krucil.com",1170761248],["krucil.net",1170761248],["139.99.33.192",854500071],["164.68.105.199",1773893661],["drakorindofilms.net",1773893661],["173.249.49.204",1518748265],["5.182.209.205",1329033776],["filmapik.kim",1329033776],["139.99.33.205",104959203],["158.69.54.218",[104959203,2076540328]],["139.99.120.222",[104959203,2076540328]],["185.231.223.76",[104959203,1069222452]],["21filem.co",104959203],["bioskop45.co",104959203],["lk21go.fun",104959203],["manganime.in",104959203],["mangakita.net",104959203],["www.nontondramas.net",104959203],["movieajip.online",104959203],["otakudesu.watch",104959203],["gm21.xyz",104959203],["158.69.0.212",2052298222],["movies21.co",2052298222],["bioskopkerenin.com",2052298222],["kebioskop21.com",2052298222],["lk21tv.com",2052298222],["dunia21.cx",2052298222],["terbit21.in",2052298222],["kebioskop21.online",2052298222],["ganool.watch",2052298222],["ganool21.watch",2052298222],["nontonserial.com",2076540328],["nonton21.tv",2076540328],["94.237.74.225",1778621337],["streamingbokeps.co",1778621337],["149.56.24.226",[641308253,1087792209]],["kricom.id",641308253],["164.132.158.237",855364693],["juraganfilm.com",828728448],["ganoollk21.info",828728448],["103.194.171.75",[687556308,865702908]],["idtube.me",687556308],["dutafilm.cfd",865702908],["dutafilm.observer",865702908],["dutafilm.us",865702908]]);

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
