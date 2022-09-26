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

// rus-0

const argsMap = new Map([[1716133390,{"a":["Object.prototype.changeVisible","noopFunc"]}],[1967312758,{"a":["Object.prototype.disableSeek","noopFunc"]}],[1849911848,{"a":["window.EUMP.plugins.antiblock","noopFunc"]}],[1118697926,{"a":["Object.prototype.playVideo","noopFunc"]}],[957430238,{"a":["JSON.parse","noopFunc"]}],[1542597660,{"a":["Object.prototype.createBannerItem","null"]}],[1699750994,{"a":["clicks","2"]}],[1474950583,{"a":["Object.prototype.autoPlay","false"]}],[249235331,{"a":["Object.prototype.AdvertisementManager","undefined"]}],[39899819,{"a":["Object.prototype.getAutoplay","noopFunc"]}],[1501083774,{"a":["player.options.scroll","false"]}],[925281543,{"a":["Object.prototype.autostart","noopFunc"]}],[1401479630,{"a":["Object.prototype.disableAutoplay","true"]}],[1486167098,{"a":["Object.prototype.detectAdblock","noopFunc"]}],[1226556208,{"a":["String.fromCharCode","trueFunc"]}],[1055858071,{"a":["Object.prototype.videoAd","noopFunc"]}],[26801027,{"a":["g_GazetaNoExchange","true"]}],[207559011,{"a":["isAdFree","noopFunc"]}],[907088411,{"a":["app.book.external","null"]}],[2086228401,{"a":["Object.prototype.sendCHParams","noopFunc"]}],[806779424,{"a":["adBlock","false"]}],[1566783808,{"a":["Object.prototype.afg","true"]}],[51701151,{"a":["Object.prototype.advertObject","null"]}],[412293394,{"a":["Object.prototype.AdvObject","noopFunc"]}],[1367803679,{"a":["Object.prototype.autoplay","false"]}],[1583480255,{"a":["playerOptions.behaviour.autoPlay","false"]}],[380460210,{"a":["Object.prototype.disableSelection","noopFunc"]}],[1095752236,{"a":["adBlockEnabled","false"]}],[895886804,{"a":["Object.prototype.adUsageStorageVars","undefined"]}],[462823884,{"a":["ADV_BLOCKED","false"]}],[1967973937,{"a":["Object.prototype.IS_CHECK_REGISTRATION","false"]}],[1856607809,{"a":["Object.prototype.livetv-state","true"]}],[1674522236,{"a":["top100Counter","false"]}],[1660562861,{"a":["window.ab","false"]}],[140363759,{"a":["timeEnd","1"]}],[300708148,{"a":["Object.prototype.manualAutoplay_","null"]}],[1448203178,{"a":["Object.prototype.hideab","undefined"]}],[1544482263,{"a":["Object.prototype.adblockSettings","undefined"]}],[348893449,{"a":["accept18","true"]}],[342040298,{"a":["Object.prototype.minPlayingVisibleHeight","noopFunc"]}],[976828939,{"a":["Object.prototype.adPlaying","null"]}],[2022907997,{"a":["Object.prototype.PLAYED","null"]}],[783139660,{"a":["Object.prototype.autoplay","null"],"n":["1yar.tv"]}],[1539119275,{"a":["Object.prototype.ENABLE_SMOKESCREEN","undefined"]}],[369922659,{"a":["Object.prototype._Mimic","undefined"]}],[369968919,{"a":["Object.prototype.adblock","null"],"n":["3igames.mail.ru","auto.mail.ru","biz.mail.ru","bonus.mail.ru","calendar.mail.ru","calls.mail.ru","cloud.mail.ru","deti.mail.ru","dobro.mail.ru","e.mail.ru","esports.mail.ru","games.mail.ru","gibdd.mail.ru","go.mail.ru","health.mail.ru","help.mail.ru","hi-tech.mail.ru","horo.mail.ru","kino.mail.ru","lady.mail.ru","love.mail.ru","mailblog.mail.ru","mcs.mail.ru","minigames.mail.ru","my.mail.ru","news.mail.ru","octavius.mail.ru","okminigames.mail.ru","otvet.mail.ru","pets.mail.ru","player-smotri.mail.ru","pogoda.mail.ru","realty.mail.ru","top.mail.ru","touch.mail.ru","tv.mail.ru"]}],[1307869529,{"a":["Object.prototype.adsRectangle","undefined"],"n":["3igames.mail.ru","auto.mail.ru","biz.mail.ru","bonus.mail.ru","calendar.mail.ru","calls.mail.ru","cloud.mail.ru","deti.mail.ru","dobro.mail.ru","e.mail.ru","esports.mail.ru","games.mail.ru","gibdd.mail.ru","go.mail.ru","health.mail.ru","help.mail.ru","hi-tech.mail.ru","horo.mail.ru","kino.mail.ru","lady.mail.ru","love.mail.ru","mailblog.mail.ru","mcs.mail.ru","minigames.mail.ru","my.mail.ru","news.mail.ru","octavius.mail.ru","okminigames.mail.ru","otvet.mail.ru","pets.mail.ru","player-smotri.mail.ru","pogoda.mail.ru","realty.mail.ru","top.mail.ru","touch.mail.ru","tv.mail.ru"]}],[1271401294,{"a":["Object.prototype.autoPlayParams","false"]}],[1442144212,{"a":["Object.prototype.autoplayScrollHandler","noopFunc"]}],[2060674999,{"a":["Object.prototype.getAds","undefined"]}],[1941733359,{"a":["Object.prototype.mimic","undefined"],"n":["calls.mail.ru","e.mail.ru","my.mail.ru","octavius.mail.ru","touch.mail.ru"]}],[1681736038,{"a":["Object.prototype.onLinkClick","noopFunc"]}],[1798553488,{"a":["Object.prototype.onLinkMouseDown","noopFunc"]}],[968535198,{"a":["Object.prototype.runMimic","noopFunc"]}],[2135912069,{"a":["Object.prototype.useMimic","noopFunc"]}],[336456354,{"a":["document.title","null"],"n":["3igames.mail.ru","auto.mail.ru","biz.mail.ru","bonus.mail.ru","calendar.mail.ru","calls.mail.ru","cloud.mail.ru","deti.mail.ru","dobro.mail.ru","e.mail.ru","esports.mail.ru","games.mail.ru","gibdd.mail.ru","go.mail.ru","health.mail.ru","help.mail.ru","hi-tech.mail.ru","horo.mail.ru","kino.mail.ru","lady.mail.ru","love.mail.ru","mailblog.mail.ru","mcs.mail.ru","minigames.mail.ru","my.mail.ru","news.mail.ru","octavius.mail.ru","okminigames.mail.ru","otvet.mail.ru","pets.mail.ru","player-smotri.mail.ru","pogoda.mail.ru","realty.mail.ru","top.mail.ru","touch.mail.ru","tv.mail.ru"]}],[686336214,{"a":["String.prototype.charCodeAt","trueFunc"],"n":["passport.i.ua","pinformer.sinoptik.ua"]}]]);

const hostnamesMap = new Map([["116.ru",1716133390],["14.ru",1716133390],["161.ru",1716133390],["164.ru",1716133390],["178.ru",1716133390],["26.ru",1716133390],["29.ru",1716133390],["35.ru",1716133390],["43.ru",1716133390],["45.ru",1716133390],["48.ru",1716133390],["51.ru",1716133390],["53.ru",1716133390],["56.ru",1716133390],["59.ru",1716133390],["60.ru",1716133390],["62.ru",1716133390],["63.ru",1716133390],["68.ru",1716133390],["71.ru",1716133390],["72.ru",1716133390],["74.ru",1716133390],["76.ru",1716133390],["86.ru",1716133390],["89.ru",1716133390],["93.ru",1716133390],["chita.ru",1716133390],["e1.ru",1716133390],["ircity.ru",1716133390],["mgorsk.ru",1716133390],["msk1.ru",1716133390],["ngs.ru",1716133390],["ngs22.ru",1716133390],["ngs24.ru",1716133390],["ngs42.ru",1716133390],["ngs55.ru",1716133390],["ngs70.ru",1716133390],["nn.ru",1716133390],["proizhevsk.ru",1716133390],["provoronezh.ru",1716133390],["sochi1.ru",1716133390],["sterlitamak1.ru",1716133390],["tolyatty.ru",1716133390],["ufa1.ru",1716133390],["v1.ru",1716133390],["7days.ru",1716133390],["doctorpiter.ru",1716133390],["dom.mail.ru",1716133390],["kp.kg",1716133390],["kp.kz",1716133390],["kp.md",1716133390],["kp.ru",1716133390],["lady.mail.ru",1716133390],["radiokp.ru",1716133390],["teleprogramma.pro",1716133390],["wday.ru",1716133390],["woman.ru",1716133390],["1tv.ru",[1967312758,1849911848]],["3dnews.ru",1118697926],["vm.ru",1118697926],["animelend.info",957430238],["ati.su",1542597660],["audioportal.su",1699750994],["cdnvideo.ru",1474950583],["eda.ru",1474950583],["mania.gcdn.co",1474950583],["vp.rambler.ru",[1474950583,342040298]],["www.rambler.ru",1474950583],["changeua.com",249235331],["ictv.ua",249235331],["inter.ua",249235331],["k1.ua",249235331],["novy.tv",249235331],["ntn.ua",249235331],["starlight.digital",249235331],["stb.ua",249235331],["teleportal.ua",249235331],["dzen.ru",39899819],["zen.yandex.ru",39899819],["eagleplatform.com",[1501083774,783139660]],["embed.dugout.com",925281543],["embed.twitch.tv",1401479630],["player.twitch.tv",1401479630],["examenpdd.com",1486167098],["free-tor.info",1226556208],["korsars.info",1226556208],["frontend.vh.yandex.ru",1055858071],["widgets.kinopoisk.ru",1055858071],["yastatic.net",1055858071],["gazeta.ru",[26801027,207559011]],["gdz-putina.fun",907088411],["gdz.ninja",907088411],["gdz.ru",907088411],["gdzotputina.club",907088411],["gdzputina.net",907088411],["megaresheba.com",907088411],["megaresheba.ru",907088411],["resheba.me",907088411],["spishi.fun",907088411],["zoobrilka.net",907088411],["gismeteo.by",2086228401],["gismeteo.kz",2086228401],["gismeteo.lt",2086228401],["gismeteo.lv",2086228401],["gismeteo.md",2086228401],["gismeteo.ru",2086228401],["gismeteo.ua",[2086228401,686336214]],["hentai-share.one",806779424],["igroutka.ru",1566783808],["ivi.ru",[51701151,412293394]],["iz.ru",1367803679],["kinescope.io",1583480255],["kinokong.pro",380460210],["libertycity.ru",1095752236],["music.yandex.by",895886804],["music.yandex.kz",895886804],["music.yandex.ru",895886804],["music.yandex.uz",895886804],["peers.tv",462823884],["player.vgtrk.com",1967973937],["quote.ru",1856607809],["rbc.ru",1856607809],["sportrbc.ru",1856607809],["rambler.ru",1674522236],["remont-aud.net",1660562861],["softportal.com",140363759],["tenews.org.ua",300708148],["tortuga.wtf",1448203178],["video.khl.ru",1544482263],["vo-dela.su",348893449],["xsport.ua",[976828939,2022907997]],["bonus-tv.ru",783139660],["e.mail.ru",[1539119275,1681736038,1798553488]],["octavius.mail.ru",[1539119275,1681736038,1798553488]],["otvet.mail.ru",369922659],["mail.ru",[369968919,1307869529,1941733359,336456354]],["player-smotri.mail.ru",1271401294],["ok.ru",[1442144212,2060674999]],["sportmail.ru",[1941733359,2135912069]],["my.mail.ru",968535198],["news.mail.ru",2135912069],["pogoda.mail.ru",2135912069],["24boxing.com.ua",686336214],["4mama.ua",686336214],["autocentre.ua",686336214],["avtovod.com.ua",686336214],["beauty.ua",686336214],["bilshe.com",686336214],["buhgalter.com.ua",686336214],["buhgalter911.com",686336214],["businessua.com",686336214],["dengi.ua",686336214],["ditey.com",686336214],["edinstvennaya.ua",686336214],["epravda.com.ua",686336214],["eurointegration.com.ua",686336214],["f1analytic.com",686336214],["facenews.ua",686336214],["factor.ua",686336214],["football-ukraine.com",686336214],["football24.ua",686336214],["footballgazeta.com",686336214],["footballtransfer.com.ua",686336214],["glianec.com",686336214],["gorod.dp.ua",686336214],["hvylya.net",686336214],["inforesist.org",686336214],["internetua.com",686336214],["isport.ua",686336214],["ivona.ua",686336214],["kolobok.ua",686336214],["kp.ua",686336214],["kriminal.tv",686336214],["kurs.com.ua",686336214],["lifedon.com.ua",686336214],["mama.ua",686336214],["meteo.ua",686336214],["mport.ua",686336214],["nashamama.com",686336214],["nbnews.com.ua",686336214],["newsyou.info",686336214],["nnovosti.info",686336214],["okino.ua",686336214],["orakul.com",686336214],["panno4ka.net",686336214],["pogodaua.com",686336214],["pravda.com.ua",686336214],["real-vin.com",686336214],["sinoptik.ua",686336214],["smak.ua",686336214],["stravy.net",686336214],["superdom.ua",686336214],["telegraf.com.ua",686336214],["tochka.net",686336214],["tv.ua",686336214],["tvgid.ua",686336214],["tvoymalysh.com.ua",686336214],["udoktora.net",686336214],["viva.ua",686336214],["vsetv.com",686336214],["www.bigmir.net",686336214],["zdorovia.com.ua",686336214]]);

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
