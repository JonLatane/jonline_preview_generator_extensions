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

    The scriptlets below are meant to be injected only into a
    web page context.
*/

/* jshint esversion:11 */

'use strict';

/******************************************************************************/

/// name abort-current-script
/// alias acs
/// alias abort-current-inline-script
/// alias acis

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// rus-0

const argsMap = new Map([[757871484,{"a":["document.createElement","/ru-n4p|ua-n4p|заг��узка.../"]}],[2071713388,{"a":["setInterval","reload"]}],[105977380,{"a":["atob","void"]}],[541908803,{"a":["$","contextmenu"]}],[209475982,{"a":["document.oncontextmenu"]}],[2102871640,{"a":["$","append"]}],[1300988685,{"a":["$","mainContainer"]}],[87307263,{"a":["decodeURIComponent","/63cc63/"]}],[1236488339,{"a":["String.fromCharCode","var _0x"]}],[723243825,{"a":["Math.floor","AdSense"]}],[1295678942,{"a":["decodeURIComponent","getAdBlockStatus"]}],[738496604,{"a":["document.querySelector","/banner/"]}],[146940834,{"a":["Math.floor","adregain_wall"]}],[937861954,{"a":["document.createElement","Math.random"],"n":["new.fastpic.org"]}],[219951161,{"a":["addEventListener","DOMContentLoaded"],"n":["new.fastpic.org"]}],[215132936,{"a":["document.querySelector","contentDocument"],"n":["new.fastpic.org"]}],[2139329813,{"a":["JSON.parse","atob"]}],[669389004,{"a":["decodeURIComponent","fromCharCode"]}],[897067629,{"a":["XMLHttpRequest","document.querySelectorAll"]}],[948630888,{"a":["JSON.parse"]}],[1545258991,{"a":["__require","/clickunder/"]}],[1619857467,{"a":["fuckAdBlock","undefined"]}],[2042411270,{"a":["jQuery","backgroundImage"]}],[381415001,{"a":["document.createElement","isBlob"]}],[1618166700,{"a":["document.createElement"]}],[1084596626,{"a":["$","get"]}],[1925286356,{"a":["setTimeout","adblockwarn"]}],[878078956,{"a":["document.createElement","delete window"]}],[1107179507,{"a":["redram","/загрузка.../"]}],[474863747,{"a":["document.addEventListener","adsBlocked"]}],[1465906401,{"a":["disableSelection","reEnable"]}],[146530851,{"a":["document.getElementsByTagName","unselectable"]}],[610816956,{"a":["$","divWrapper"]}],[1130638423,{"a":["document.querySelectorAll","popMagic"]}],[714288991,{"a":["clickExplorer"]}],[905491820,{"a":["document.createElement","ExternalChromePop"]}],[234568875,{"a":["$","1xbet"]}],[369703466,{"a":["document.createElement","atob"]}],[427792305,{"a":["document.getElementById","composedPath"]}],[1063064640,{"a":["document.onkeydown"]}],[1832785480,{"a":["Math.random"]}],[1579248085,{"a":["$","init_x_place"]}],[1832986338,{"a":["document.createElement","String.fromCharCode"]}]]);

const hostnamesMap = new Map([["1news.com.ua",757871484],["365news.biz",757871484],["4mama.ua",757871484],["4studio.com.ua",757871484],["7days-ua.com",757871484],["agroter.com.ua",757871484],["apnews.com.ua",757871484],["argumentiru.com",757871484],["asiaplustj.info",757871484],["autotema.org.ua",757871484],["autotheme.info",757871484],["beauty.ua",757871484],["begemot-media.com",757871484],["begemot.media",757871484],["chas.cv.ua",757871484],["cheline.com.ua",757871484],["cikavosti.com",757871484],["ck.ua",757871484],["cn.ua",757871484],["comments.ua",757871484],["cvnews.cv.ua",757871484],["day.kyiv.ua",757871484],["depo.ua",757871484],["dnews.dn.ua",757871484],["dv-gazeta.info",757871484],["dyvys.info",757871484],["economistua.com",757871484],["edinstvennaya.ua",757871484],["ekovolga.com",757871484],["expert.in.ua",757871484],["fedpress.ru",757871484],["forpost.media",757871484],["fraza.com",757871484],["glavnoe.ua",757871484],["glavnoe24.ru",757871484],["glavpost.ua",757871484],["golosinfo.com.ua",757871484],["gorodkiev.com.ua",757871484],["gov.ua",757871484],["grad.ua",757871484],["greenpost.ua",757871484],["ifnews.org.ua",757871484],["inforpost.com",757871484],["inkorr.com",757871484],["itechua.com",757871484],["iz.com.ua",757871484],["kh.ua",757871484],["khersonline.net",757871484],["kolizhanka.com.ua",757871484],["kr.ua",757871484],["krymr.com",757871484],["kurskcity.ru",757871484],["liga.net",[757871484,1295678942,738496604]],["lvnews.org.ua",757871484],["mega-music.pro",757871484],["mi100.info",757871484],["mignews.com.ua",757871484],["mind.ua",757871484],["moirebenok.ua",757871484],["mycompplus.ru",757871484],["nakanune.ru",757871484],["narodna-pravda.ua",757871484],["nashbryansk.ru",757871484],["news24today.info",757871484],["ngp-ua.info",757871484],["nnews.com.ua",757871484],["novavlada.info",757871484],["novynarnia.com",757871484],["np.pl.ua",757871484],["odessa-life.od.ua",757871484],["oukr.info",757871484],["panoptikon.org",757871484],["pg11.ru",757871484],["pik.net.ua",757871484],["pingvin.pro",757871484],["pl.com.ua",757871484],["planetanovosti.com",757871484],["podpricelom.com.ua",757871484],["politnavigator.net",757871484],["poltava365.com",757871484],["portal.lviv.ua",757871484],["praktika-vlasti.com.ua",757871484],["prm.ua",757871484],["procherk.info",757871484],["profootball.ua",757871484],["radiosvoboda.org",757871484],["ratel.kz",757871484],["real-vin.com",757871484],["reporter.ua",757871484],["risu.ua",757871484],["rivne.media",757871484],["rivnenews.com.ua",757871484],["rusjev.net",757871484],["russianshowbiz.info",757871484],["rv.ua",757871484],["rvnews.rv.ua",757871484],["semobile.com.ua",757871484],["sport-kr.com.ua",757871484],["strana.news",757871484],["strana.today",757871484],["sud.ua",757871484],["superdom.ua",757871484],["te.ua",757871484],["telekritika.ua",757871484],["tenews.org.ua",[757871484,1832785480]],["theageoffootball.com",757871484],["treebuna.info",757871484],["tverigrad.ru",757871484],["tverisport.ru",757871484],["tvoymalysh.com.ua",757871484],["uainfo.org",757871484],["uanews.org.ua",757871484],["uatv.ua",757871484],["ukranews.com",757871484],["ukrrain.com",757871484],["unn.com.ua",757871484],["vchaspik.ua",757871484],["versii.if.ua",757871484],["viva.ua",757871484],["vlast.kz",757871484],["vnn24.ru",757871484],["volnorez.com.ua",757871484],["volyninfa.com.ua",757871484],["volyninfo.com",757871484],["volynpost.com",757871484],["volynua.com",757871484],["vsviti.com.ua",757871484],["westnews.info",757871484],["womo.ua",757871484],["wpristav.ru",757871484],["wworld.com.ua",757871484],["zbirna.com",757871484],["zp.ua",757871484],["24boxing.com.ua",2071713388],["bilshe.com",2071713388],["businessua.com",2071713388],["f1analytic.com",2071713388],["football-ukraine.com",2071713388],["footballgazeta.com",2071713388],["footballtransfer.com.ua",2071713388],["glianec.com",2071713388],["nashamama.com",2071713388],["sportanalytic.com",2071713388],["stravy.net",2071713388],["zdorovia.com.ua",2071713388],["allboxing.ru",105977380],["asn.in.ua",541908803],["brigadtv.ru",209475982],["castle-serial.ru",209475982],["ehlita.ru",209475982],["gameout.ru",209475982],["itevonklass.ru",209475982],["izmailovtv.xyz",209475982],["karateltv.ru",209475982],["lyucifer.tv",209475982],["m-z.tv",209475982],["my-expert.ru",[209475982,1465906401,146530851]],["pokazuha.ru",209475982],["samomdele.tv",209475982],["saske.tv",209475982],["sorvigolovatv.ru",209475982],["taynyeistiny.ru",209475982],["transformator220.ru",209475982],["budport.com.ua",2102871640],["conversion.im",1300988685],["daz3d.ru",87307263],["dc-marvel.org",1236488339],["gidonline.eu",1236488339],["megatfile.cc",1236488339],["seasonvar.re",1236488339],["dmod.cc",723243825],["draug.ru",723243825],["modsforwot.ru",723243825],["dynamo.kiev.ua",[1295678942,738496604]],["epravda.com.ua",[1295678942,738496604]],["football.ua",[1295678942,738496604]],["isport.ua",[1295678942,738496604]],["pravda.com.ua",[1295678942,738496604]],["www.i.ua",[1295678942,738496604]],["electric-house.ru",146940834],["euro-football.ru",146940834],["forums.rusmedserv.com",146940834],["liveresult.ru",146940834],["smolensk-auto.ru",146940834],["smolensk-auto.site",146940834],["stroi-help.ru",146940834],["fastpic.org",[937861954,219951161,215132936]],["karpatnews.in.ua",937861954],["kaztorka.org",937861954],["kg-portal.ru",937861954],["fenglish.site",2139329813],["mp3spy.cc",2139329813],["filmisub.com",[669389004,897067629]],["kinofen.net",[669389004,897067629]],["freescreens.ru",948630888],["imgbase.ru",948630888],["imgcach.ru",948630888],["imgclick.ru",948630888],["payforpic.ru",948630888],["picclick.ru",948630888],["picclock.ru",948630888],["picforall.ru",948630888],["gdespaces.com",1545258991],["gdespaces.net",1545258991],["spac.me",1545258991],["spac1.com",1545258991],["spac1.info",1545258991],["spac1.me",1545258991],["spac1.net",1545258991],["spac1.org",1545258991],["spac1.ru",1545258991],["spaces-blogs.com",1545258991],["spaces.im",1545258991],["spcs.me",1545258991],["spcs.social",1545258991],["strip2.in",1545258991],["strip2.xxx",1545258991],["gwss.ru",1619857467],["hardwareluxx.ru",2042411270],["kinogo.cc",381415001],["livesx.online",381415001],["xn--80aikhbrhr.xn--j1amh",381415001],["krolik.biz",1618166700],["l2top.ru",1084596626],["livesport.ws",1925286356],["lrepacks.net",878078956],["marieclaire.ua",1107179507],["mod-wot.ru",474863747],["penzainform.ru",610816956],["pornopuk.com",1130638423],["huyamba.tv",1130638423],["piratam.net",1130638423],["piratca.net",1130638423],["porn720.biz",1130638423],["sexitorrent.com",1130638423],["sextor.org",1130638423],["domahatv.com",1130638423],["torrent-pirat.com",1130638423],["xtorrent.net",1130638423],["rapidzona.tv",1130638423],["xxxrip.net",1130638423],["xxxtor.com",1130638423],["hentai-share.one",1130638423],["pravvest.ru",714288991],["rutor.in",905491820],["shaiba.kz",234568875],["shanson320.ru",369703466],["vesti.ua",369703466],["skam.online",427792305],["stalker-mods.clan.su",1063064640],["stalker-mods.su",1063064640],["tut.by",1579248085],["www.vesti.ru",1832986338]]);

/******************************************************************************/

// Issues to mind before changing anything:
//  https://github.com/uBlockOrigin/uBlock-issues/issues/2154

const scriptlet = (
    target = '',
    needle = '',
    context = ''
) => {
    if ( target === '' ) { return; }
    const reRegexEscape = /[.*+?^${}()|[\]\\]/g;
    const reNeedle = (( ) => {
        if ( needle === '' ) { return /^/; }
        if ( /^\/.+\/$/.test(needle) ) {
            return new RegExp(needle.slice(1,-1));
        }
        return new RegExp(needle.replace(reRegexEscape, '\\$&'));
    })();
    const reContext = (( ) => {
        if ( context === '' ) { return; }
        if ( /^\/.+\/$/.test(context) ) {
            return new RegExp(context.slice(1,-1));
        }
        return new RegExp(context.replace(reRegexEscape, '\\$&'));
    })();
    const chain = target.split('.');
    let owner = window;
    let prop;
    for (;;) {
        prop = chain.shift();
        if ( chain.length === 0 ) { break; }
        owner = owner[prop];
        if ( owner instanceof Object === false ) { return; }
    }
    let value;
    let desc = Object.getOwnPropertyDescriptor(owner, prop);
    if (
        desc instanceof Object === false ||
        desc.get instanceof Function === false
    ) {
        value = owner[prop];
        desc = undefined;
    }
    const magic = String.fromCharCode(Date.now() % 26 + 97) +
                  Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const scriptTexts = new WeakMap();
    const getScriptText = elem => {
        let text = elem.textContent;
        if ( text.trim() !== '' ) { return text; }
        if ( scriptTexts.has(elem) ) { return scriptTexts.get(elem); }
        const [ , mime, content ] =
            /^data:([^,]*),(.+)$/.exec(elem.src.trim()) ||
            [ '', '', '' ];
        try {
            switch ( true ) {
            case mime.endsWith(';base64'):
                text = self.atob(content);
                break;
            default:
                text = self.decodeURIComponent(content);
                break;
            }
        } catch(ex) {
        }
        scriptTexts.set(elem, text);
        return text;
    };
    const validate = ( ) => {
        const e = document.currentScript;
        if ( e instanceof HTMLScriptElement === false ) { return; }
        if ( reContext !== undefined && reContext.test(e.src) === false ) {
            return;
        }
        if ( reNeedle.test(getScriptText(e)) === false ) { return; }
        throw new ReferenceError(magic);
    };
    Object.defineProperty(owner, prop, {
        get: function() {
            validate();
            return desc instanceof Object
                ? desc.get.call(owner)
                : value;
        },
        set: function(a) {
            validate();
            if ( desc instanceof Object ) {
                desc.set.call(owner, a);
            } else {
                value = a;
            }
        }
    });
    const oe = window.onerror;
    window.onerror = function(msg) {
        if ( typeof msg === 'string' && msg.includes(magic) ) {
            return true;
        }
        if ( oe instanceof Function ) {
            return oe.apply(this, arguments);
        }
    }.bind();
};

/******************************************************************************/

let hn;
try { hn = document.location.hostname; } catch(ex) { }
while ( hn ) {
    if ( hostnamesMap.has(hn) ) {
        let argsHashes = hostnamesMap.get(hn);
        if ( typeof argsHashes === 'number' ) { argsHashes = [ argsHashes ]; }
        for ( const argsHash of argsHashes ) {
            const details = argsMap.get(argsHash);
            if ( details.n && details.n.includes(hn) ) { continue; }
            try { scriptlet(...details.a); } catch(ex) {}
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

/******************************************************************************/

argsMap.clear();
hostnamesMap.clear();

/******************************************************************************/

})();

/******************************************************************************/
