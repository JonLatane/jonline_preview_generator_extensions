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

/// name set-constant
/// alias set

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// tur-0

const argsMap = new Map([[1100871205,{"a":["adblock.check","noopFunc"]}],[1981716100,{"a":["detector_active","true"]}],[600974469,{"a":["adblock_active","false"]}],[1446649543,{"a":["adBlockRunning","false"]}],[333426097,{"a":["adb","false"]}],[407640032,{"a":["adblockEnabled","false"]}],[1740297245,{"a":["kan_vars.adblock","undefined"]}],[468435098,{"a":["hasAdblock","false"]}],[2133784791,{"a":["AdblockDetector","undefined"]}],[1143585180,{"a":["canRunAds","true"]}],[217906023,{"a":["window.google_jobrunner","true"]}],[486857339,{"a":["jQuery.adblock","false"]}],[671901051,{"a":["$tieE3","true"]}],[143921607,{"a":["koddostu_com_adblock_yok","null"]}],[1045503494,{"a":["google_jobrunner","noopFunc"]}],[1175309212,{"a":["adsbygoogle.loaded","true"]}],[178292461,{"a":["adblock","false"]}],[497316467,{"a":["ai_adb_detected","noopFunc"]}],[1242420992,{"a":["puShown","true"]}],[1285352591,{"a":["isShow","true"]}],[1498937515,{"a":["adSearchTitle","undefined"]}],[244057193,{"a":["Object.prototype.ads","noopFunc"]}],[1602311359,{"a":["HBiddings.vastUrl","''"]}],[834435113,{"a":["AdvPlayer","undefined"]}],[1103216116,{"a":["_popByHours","undefined"]}],[770330077,{"a":["_pop","undefined"]}],[1348822480,{"a":["initOpen","undefined"]}],[928183053,{"a":["initNewAd","noopFunc"]}],[1860356271,{"a":["rg","noopFunc"]}],[1237038216,{"a":["Object.prototype.ads_enable","false"]}],[1637735087,{"a":["td_ad_background_click_link","''"]}],[781302766,{"a":["adsConfig.enabled","false"]}],[1317744096,{"a":["start","1"]}]]);

const hostnamesMap = new Map([["iyibeslenme.net",1100871205],["teknop.net",1100871205],["kirtkirtla.com",1100871205],["buneymis.net",1100871205],["ozgunbilgi.com",1100871205],["wheel-size.com.tr",1981716100],["karnaval.com",600974469],["mangaship.net",1446649543],["mangaship.com",1446649543],["miuitr.info",333426097],["puhutv.com",407640032],["coinotag.com",1740297245],["cnnturk.com",[468435098,2133784791]],["kanald.com.tr",468435098],["iddaaorantahmin.com",1143585180],["forum.auraroleplay.com",217906023],["oyungibi.com",486857339],["veterinerhekimleri.com",486857339],["unisinav.com",671901051],["turkdenizcileri.com",143921607],["bilgalem.blogspot.com",143921607],["okulsoru.com",143921607],["tekniknot.com",1045503494],["messletters.com",1175309212],["klavyeanaliz.org",178292461],["turkeycrack.com",497316467],["efendim.xyz",1242420992],["dizipaltv.org",1242420992],["dizispeed.net",1242420992],["filmjr1.com",1242420992],["fluffcore.com",1242420992],["filmpaf.com",1242420992],["hdfilmfullizle.com",1242420992],["hdfilmcehennemizle.com",1242420992],["netfullfilmizle3.com",1242420992],["pifilmizle.me",1242420992],["filmmodu.info",1242420992],["izlekolik.com",1242420992],["dizipaltv.com",1242420992],["dizifilm.pro",1242420992],["dizivid.net",1242420992],["arrowizle.com",1242420992],["d4d.lol",1242420992],["massaka.cloud",1242420992],["hdfilmifullizle.com",1242420992],["erotik123.com",1242420992],["jokerfilmizle.com",1242420992],["bestdizi.net",1242420992],["720pfilmiizle.net",1242420992],["seehdfilm.com",1242420992],["dizirun1.com",1242420992],["filmfiz.net",1242420992],["filmcus.com",1242420992],["hazirfilm.com",1242420992],["filmizlew.org",1242420992],["zoof1.xyz",1242420992],["sinemakolik.net",1242420992],["sinefilmizlesen.com",1242420992],["zarize.com",1242420992],["pornobuna.com",1242420992],["zarizeporno.com",1242420992],["burdenfly.com",1242420992],["diziking.vip",1242420992],["filmdelisi.org",1242420992],["1080pfilmizle.me",1242420992],["zzerotik.com",1242420992],["filmgo.org",1242420992],["filmiifullizlee.com",1242420992],["sinemafilmizle.net",1242420992],["fullhdfilmiizle.org",1242420992],["hdfilmw.org",1242420992],["buzfilmizle1.com",1242420992],["filmkuzusu1.com",1242420992],["hdfilmcix.net",1242420992],["sinemadelisi.com",1242420992],["yetiskinfilmizle.net",1242420992],["hdsexfilmizle.com",1242420992],["erotik-film.org",1242420992],["erotikfilmtube.com",1242420992],["erotik-filmler.net",1242420992],["erotikfilms.net",1242420992],["erotizmfilmleri.net",1242420992],["sezonlukdizi2.com",1242420992],["filmbabasi.com",1242420992],["pornoanne.com",1242420992],["dizikorea.com",1242420992],["koredizileri.tv",1242420992],["diziboxx.com",1242420992],["turkaliz.com",1242420992],["jetdiziizle.net",1242420992],["vkfilmizle.net",1242420992],["dizimom.org",1242420992],["yerlidizi.pw",1242420992],["fullhdfilmizleyin.com",1242420992],["filmizlet.net",1242420992],["baglanfilme.com",1242420992],["filmgooo.com",1242420992],["pornorips.com",1242420992],["bumfilmizle.com",1242420992],["bestdizi.com",1242420992],["shirl.club",1242420992],["evrenselfilmlerim.org",1242420992],["turkcealtyazilipornom.com",1242420992],["sinema.cc",1242420992],["hdfilmizletv.com",1242420992],["filmmom.pro",[1242420992,1285352591]],["torrent-oyun.com",1242420992],["shortz.club",1242420992],["pembetv18.com",1242420992],["sinemaizle.co",1242420992],["filmlane.com",1242420992],["netfilmtvizle.com",1242420992],["hdfilmcehennem.live",1242420992],["xbox360torrent.com",1242420992],["efullizle.com",1242420992],["morfilmizle.com",1242420992],["asyafanatiklerim.com",1242420992],["fullhdfilmizlesene3.org",1242420992],["guncelhdfilm.com",1242420992],["dizilost.com",1242420992],["fileru.net",1242420992],["dizitube.net",1242420992],["fullhdfilmdeposu.com",1242420992],["volsex.com",1242420992],["torba.info",1242420992],["erotiksexizle.com",1242420992],["altyazilifilm.live",1242420992],["divx720pfilmizle.org",1242420992],["dizipal300.com",1242420992],["dizipal301.com",1242420992],["dizipal302.com",1242420992],["dizipal303.com",1242420992],["dizipal304.com",1242420992],["dizipal305.com",1242420992],["dizipal306.com",1242420992],["dizipal307.com",1242420992],["dizipal308.com",1242420992],["dizipal309.com",1242420992],["dizipal310.com",1242420992],["dizipal311.com",1242420992],["dizipal312.com",1242420992],["dizipal313.com",1242420992],["dizipal314.com",1242420992],["dizipal315.com",1242420992],["dizipal316.com",1242420992],["dizipal317.com",1242420992],["dizipal318.com",1242420992],["dizipal319.com",1242420992],["dizipal320.com",1242420992],["dizipal321.com",1242420992],["dizipal322.com",1242420992],["dizipal323.com",1242420992],["dizipal324.com",1242420992],["dizipal325.com",1242420992],["dizipal326.com",1242420992],["dizipal327.com",1242420992],["dizipal328.com",1242420992],["dizipal329.com",1242420992],["dizipal330.com",1242420992],["dizipal331.com",1242420992],["dizipal332.com",1242420992],["dizipal333.com",1242420992],["dizipal334.com",1242420992],["dizipal335.com",1242420992],["dizipal336.com",1242420992],["dizipal337.com",1242420992],["dizipal338.com",1242420992],["dizipal339.com",1242420992],["dizipal340.com",1242420992],["dizipal341.com",1242420992],["dizipal342.com",1242420992],["dizipal343.com",1242420992],["dizipal344.com",1242420992],["dizipal345.com",1242420992],["dizipal346.com",1242420992],["dizipal347.com",1242420992],["dizipal348.com",1242420992],["dizipal349.com",1242420992],["dizipal350.com",1242420992],["dizipal351.com",1242420992],["dizipal352.com",1242420992],["dizipal353.com",1242420992],["dizipal354.com",1242420992],["dizipal355.com",1242420992],["dizipal356.com",1242420992],["dizipal357.com",1242420992],["dizipal358.com",1242420992],["dizipal359.com",1242420992],["dizipal360.com",1242420992],["dizipal361.com",1242420992],["dizipal362.com",1242420992],["dizipal363.com",1242420992],["dizipal364.com",1242420992],["dizipal365.com",1242420992],["dizipal366.com",1242420992],["dizipal367.com",1242420992],["dizipal368.com",1242420992],["dizipal369.com",1242420992],["dizipal370.com",1242420992],["dizipal371.com",1242420992],["dizipal372.com",1242420992],["dizipal373.com",1242420992],["dizipal374.com",1242420992],["dizipal375.com",1242420992],["dizipal376.com",1242420992],["dizipal377.com",1242420992],["dizipal378.com",1242420992],["dizipal379.com",1242420992],["dizipal380.com",1242420992],["dizipal381.com",1242420992],["dizipal382.com",1242420992],["dizipal383.com",1242420992],["dizipal384.com",1242420992],["dizipal385.com",1242420992],["dizipal386.com",1242420992],["dizipal387.com",1242420992],["dizipal388.com",1242420992],["dizipal389.com",1242420992],["dizipal390.com",1242420992],["dizipal391.com",1242420992],["dizipal392.com",1242420992],["dizipal393.com",1242420992],["dizipal394.com",1242420992],["dizipal395.com",1242420992],["dizipal396.com",1242420992],["dizipal397.com",1242420992],["dizipal398.com",1242420992],["dizipal399.com",1242420992],["dizipal400.com",1242420992],["dizipal401.com",1242420992],["dizipal402.com",1242420992],["dizipal403.com",1242420992],["dizipal404.com",1242420992],["dizipal405.com",1242420992],["dizipal406.com",1242420992],["dizipal407.com",1242420992],["dizipal408.com",1242420992],["dizipal409.com",1242420992],["dizipal410.com",1242420992],["dizipal411.com",1242420992],["dizipal412.com",1242420992],["dizipal413.com",1242420992],["dizipal414.com",1242420992],["dizipal415.com",1242420992],["dizipal416.com",1242420992],["dizipal417.com",1242420992],["dizipal418.com",1242420992],["dizipal419.com",1242420992],["dizipal420.com",1242420992],["dizipal421.com",1242420992],["dizipal422.com",1242420992],["dizipal423.com",1242420992],["dizipal424.com",1242420992],["dizipal425.com",1242420992],["dizipal426.com",1242420992],["dizipal427.com",1242420992],["dizipal428.com",1242420992],["dizipal429.com",1242420992],["dizipal430.com",1242420992],["dizipal431.com",1242420992],["dizipal432.com",1242420992],["dizipal433.com",1242420992],["tekfullfilmizle5.com",1285352591],["yovmiyelazim.com",1285352591],["tekfullfilmizle3.com",1285352591],["izleorg2.org",1285352591],["futbolcafe23.xyz",1285352591],["qhksjg.com",1285352591],["dizipal12.cloud",1285352591],["dizipal13.cloud",1285352591],["dizipal14.cloud",1285352591],["dizipal15.cloud",1285352591],["dizipal16.cloud",1285352591],["dizipal17.cloud",1285352591],["dizipal18.cloud",1285352591],["dizipal19.cloud",1285352591],["dizipal20.cloud",1285352591],["dizipal21.cloud",1285352591],["dizipal22.cloud",1285352591],["dizipal23.cloud",1285352591],["dizipal24.cloud",1285352591],["dizipal25.cloud",1285352591],["dizipal26.cloud",1285352591],["dizipal27.cloud",1285352591],["dizipal28.cloud",1285352591],["dizipal29.cloud",1285352591],["dizipal30.cloud",1285352591],["dizipal31.cloud",1285352591],["dizipal32.cloud",1285352591],["dizipal33.cloud",1285352591],["dizipal34.cloud",1285352591],["dizipal35.cloud",1285352591],["dizipal36.cloud",1285352591],["dizipal37.cloud",1285352591],["dizipal38.cloud",1285352591],["dizipal39.cloud",1285352591],["dizipal40.cloud",1285352591],["dizipal41.cloud",1285352591],["dizipal42.cloud",1285352591],["dizipal43.cloud",1285352591],["dizipal44.cloud",1285352591],["dizipal45.cloud",1285352591],["dizipal46.cloud",1285352591],["dizipal47.cloud",1285352591],["dizipal48.cloud",1285352591],["dizipal49.cloud",1285352591],["dizipal50.cloud",1285352591],["forum.donanimhaber.com",1498937515],["filmmodu2.com",244057193],["filmmodu3.com",244057193],["filmmodu4.com",244057193],["filmmodu5.com",244057193],["filmmodu6.com",244057193],["filmmodu7.com",244057193],["filmmodu8.com",244057193],["filmmodu9.com",244057193],["filmmodu10.com",244057193],["atv.com.tr",1602311359],["turkturk.org",834435113],["turkturk.net",834435113],["narcovip.com",[1103216116,770330077]],["contentx.me",1348822480],["superfilmgeldi.com",928183053],["edebiyatdefteri.com",1860356271],["belgeselizlesene.com",1237038216],["technopat.net",1637735087],["strmrdrfrode.xyz",781302766],["strmrdrfrodd.xyz",781302766],["strmrdrfrodc.xyz",781302766],["strmrdrfrodb.xyz",781302766],["strmrdrfrocg.xyz",781302766],["strmrdrfrocf.xyz",781302766],["strmrdrfroce.xyz",781302766],["strmrdrfrocc.xyz",781302766],["strmrdrfroca.xyz",781302766],["strmrdrfrobj.xyz",781302766],["strmrdrfrobh.xyz",781302766],["strmrdrfrobg.xyz",781302766],["strmrdrfrobd.xyz",781302766],["strmrdrfrobc.xyz",781302766],["strmrdrfrobb.xyz",781302766],["strmrdrfrmq.xyz",781302766],["strmrdrfrmy.xyz",781302766],["aydindenge.com.tr",1317744096]]);

/******************************************************************************/

const scriptlet = (
    chain = '',
    cValue = ''
) => {
    if ( chain === '' ) { return; }
    if ( cValue === 'undefined' ) {
        cValue = undefined;
    } else if ( cValue === 'false' ) {
        cValue = false;
    } else if ( cValue === 'true' ) {
        cValue = true;
    } else if ( cValue === 'null' ) {
        cValue = null;
    } else if ( cValue === "''" ) {
        cValue = '';
    } else if ( cValue === '[]' ) {
        cValue = [];
    } else if ( cValue === '{}' ) {
        cValue = {};
    } else if ( cValue === 'noopFunc' ) {
        cValue = function(){};
    } else if ( cValue === 'trueFunc' ) {
        cValue = function(){ return true; };
    } else if ( cValue === 'falseFunc' ) {
        cValue = function(){ return false; };
    } else if ( /^\d+$/.test(cValue) ) {
        cValue = parseFloat(cValue);
        if ( isNaN(cValue) ) { return; }
        if ( Math.abs(cValue) > 0x7FFF ) { return; }
    } else {
        return;
    }
    let aborted = false;
    const mustAbort = function(v) {
        if ( aborted ) { return true; }
        aborted =
            (v !== undefined && v !== null) &&
            (cValue !== undefined && cValue !== null) &&
            (typeof v !== typeof cValue);
        return aborted;
    };
    // https://github.com/uBlockOrigin/uBlock-issues/issues/156
    //   Support multiple trappers for the same property.
    const trapProp = function(owner, prop, configurable, handler) {
        if ( handler.init(owner[prop]) === false ) { return; }
        const odesc = Object.getOwnPropertyDescriptor(owner, prop);
        let prevGetter, prevSetter;
        if ( odesc instanceof Object ) {
            owner[prop] = cValue;
            if ( odesc.get instanceof Function ) {
                prevGetter = odesc.get;
            }
            if ( odesc.set instanceof Function ) {
                prevSetter = odesc.set;
            }
        }
        try {
            Object.defineProperty(owner, prop, {
                configurable,
                get() {
                    if ( prevGetter !== undefined ) {
                        prevGetter();
                    }
                    return handler.getter(); // cValue
                },
                set(a) {
                    if ( prevSetter !== undefined ) {
                        prevSetter(a);
                    }
                    handler.setter(a);
                }
            });
        } catch(ex) {
        }
    };
    const trapChain = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            trapProp(owner, chain, false, {
                v: undefined,
                init: function(v) {
                    if ( mustAbort(v) ) { return false; }
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return cValue;
                },
                setter: function(a) {
                    if ( mustAbort(a) === false ) { return; }
                    cValue = a;
                }
            });
            return;
        }
        const prop = chain.slice(0, pos);
        const v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v instanceof Object || typeof v === 'object' && v !== null ) {
            trapChain(v, chain);
            return;
        }
        trapProp(owner, prop, true, {
            v: undefined,
            init: function(v) {
                this.v = v;
                return true;
            },
            getter: function() {
                return this.v;
            },
            setter: function(a) {
                this.v = a;
                if ( a instanceof Object ) {
                    trapChain(a, chain);
                }
            }
        });
    };
    trapChain(window, chain);
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
