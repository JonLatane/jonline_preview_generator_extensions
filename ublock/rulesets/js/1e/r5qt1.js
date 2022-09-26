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

/// name abort-on-property-read
/// alias aopr

/******************************************************************************/

// Important!
// Isolate from global scope
(function() {

/******************************************************************************/

// rus-0

const argsMap = new Map([[1728908071,{"a":["td_ad_background_click_target"]}],[2033453779,{"a":["Object.prototype.render"]}],[1845168080,{"a":["Ya"]}],[12929992,{"a":["weekCallbacks"]}],[694348499,{"a":["flat_pm_arr"]}],[931732083,{"a":["yaContextCb"]}],[1856718411,{"a":["advtss"]}],[272453746,{"a":["anOptions"]}],[2073414785,{"a":["brblob"]}],[1374680046,{"a":["adblock"]}],[215289586,{"a":["ClickUndercookie"]}],[1227255662,{"a":["zfgformats"]}],[30877799,{"a":["utarget_script"]}],[209475982,{"a":["document.oncontextmenu"]}],[333595699,{"a":["kav_cn"]}],[425691290,{"a":["mdpDeBlocker"]}],[801968403,{"a":["stopPrntScr"]}],[240483654,{"a":["WebSocket"]}],[450367720,{"a":["myatu_bgm"]}],[78419049,{"a":["XMLHttpRequest"]}],[483874929,{"a":["window.alert"]}],[1313683608,{"a":["lftrght"]}],[1121881194,{"a":["document.getElementById","mdl_adb"]}],[1934043576,{"a":["getSelection"]}],[1698721392,{"a":["helpUsImproveSite"]}],[1690133176,{"a":["Object.prototype.AdfoxXhrRequestPrepared"]}],[1982262543,{"a":["Object.prototype.yaContextCb"]}],[1893763853,{"a":["ads"]}],[1445749162,{"a":["initsnow"]}],[1089976368,{"a":["PUM.getPopup"]}],[753545064,{"a":["D4zz"]}],[1784288917,{"a":["Object.prototype.fakeDetect"]}],[982222767,{"a":["admiral"]}],[1018407913,{"a":["echelon"]}],[97366436,{"a":["a_urls"]}],[1782780819,{"a":["advFirstClickOpenNewTab"]}],[1175647834,{"a":["open"]}],[1759011237,{"a":["atob"]}],[531632477,{"a":["document.addEventListener"]}],[1979772758,{"a":["tingle"]}],[604125115,{"a":["creepyVideo"]}],[1285737142,{"a":["eaglePlayerPlugins.autoplay_position"]}],[1528897974,{"a":["goTolink"]}],[1495564035,{"a":["Object.prototype.initOnPlay"]}],[321422478,{"a":["target_script"]}],[1892406298,{"a":["Object.prototype.scriptsViaXhr"]}],[630207465,{"a":["Object.prototype.initAdfox"]}],[876314807,{"a":["AdbBanner"]}],[665539060,{"a":["onload"]}],[1801864271,{"a":["CTRManager.host3"]}],[1853645737,{"a":["disable_copy"]}],[1099940793,{"a":["disable_hot_keys"]}],[660495122,{"a":["nocontext"]}],[428088341,{"a":["tnAdditionalParams"]}],[1268888012,{"a":["Object.prototype.YA_TURBO_PAGES"]}],[446913000,{"a":["Object.prototype.Metrika"]}],[1159222376,{"a":["blocked_action"]}],[377069310,{"a":["get_ya_browser"]}],[329642058,{"a":["document.ondragstart"]}],[228997000,{"a":["cardinals"]}],[1258101694,{"a":["isABPEnabled"]}],[1699503292,{"a":["EUMPAntiblockConfig"]}],[846871401,{"a":["TotemToolsObject"]}],[1497315642,{"a":["document.body.oncopy"]}],[291265862,{"a":["Object.prototype._isAutostartQueueSet"]}],[1401824332,{"a":["Object.prototype.isApplySticky"]}],[1359476802,{"a":["Object.prototype.parseBlockId"]}],[817381865,{"a":["app_vars.force_disable_adblock"]}],[1438773527,{"a":["aab"]}],[1562860769,{"a":["Date.prototype.toUTCString"]}],[1036220201,{"a":["window.block"]}],[1553039478,{"a":["Object.prototype.blockImpId"]}],[1084535399,{"a":["m205"]}],[1713580371,{"a":["web_script"]}],[1127678950,{"a":["CheckingUser"]}],[1063064640,{"a":["document.onkeydown"]}],[338136830,{"a":["adcashMacros"]}],[555481432,{"a":["createAds"]}],[992379786,{"a":["video.preroll"]}],[1736242591,{"a":["adblock_availability_check"]}],[344395781,{"a":["Groups.showDisclaimer"]}],[1962879066,{"a":["PageBottomBanners"]}],[157375419,{"a":["Unauthorized"]}],[899431056,{"a":["Unauthorized2"]}],[964057795,{"a":["Object.prototype.AdFoxProxy"]}],[1305456488,{"a":["clickNS4"]}],[456937231,{"a":["OK.hooks"]}],[1941069818,{"a":["globalAuthLoginPopupCounter"]}],[1669996246,{"a":["u_global_data"]}],[813177791,{"a":["window.googletag"]}]]);

const hostnamesMap = new Map([["1informer.com",1728908071],["fainaidea.com",1728908071],["housechief.ru",1728908071],["itech.co.ua",1728908071],["mediasat.info",1728908071],["root-nation.com",1728908071],["24smi.org",2033453779],["3dnews.ru",1845168080],["avtovzglyad.ru",1845168080],["baby.ru",1845168080],["dni.ru",1845168080],["e1.ru",1845168080],["sm.news",[1845168080,1438773527,1562860769]],["sports.ru",1845168080],["www.goha.ru",1845168080],["4studio.com.ua",12929992],["cikavosti.com",12929992],["dialogs.org.ua",12929992],["fakty.ua",12929992],["gorodkiev.com.ua",12929992],["informator.ua",12929992],["kriminal.tv",12929992],["mignews.com.ua",12929992],["pingvin.pro",12929992],["technoportal.com.ua",12929992],["u-news.com.ua",12929992],["uanews.org.ua",12929992],["versii.if.ua",12929992],["volynpost.com",12929992],["7ogorod.ru",694348499],["autonevod.ru",694348499],["shtrafsud.ru",694348499],["80-e.ru",931732083],["examenpdd.com",931732083],["all-episodes.club",1856718411],["amazinghis.ru",272453746],["moj-pes.ru",272453746],["anidub.club",2073414785],["anidub.life",2073414785],["anidub.link",[2073414785,1374680046]],["anime.anidub.com",[2073414785,1374680046]],["online.anidub.com",[2073414785,1374680046]],["anime.anidub.life",1374680046],["loveanime.live",1374680046],["myanime.online",1374680046],["online.anidub.club",1374680046],["rusanime.ru",1374680046],["anifap.com",215289586],["anipoisk.org",215289586],["anitokyo.tv",215289586],["hcdn.online",215289586],["kinofilm.co",215289586],["animedia.tv",1227255662],["animedub.ru",1227255662],["vsetut.su",1227255662],["animekun.ru",30877799],["doramakun.ru",30877799],["nnm-club.lib",30877799],["nnm-club.me",30877799],["nnmclub.ro",30877799],["nnmclub.to",30877799],["animevost.am",209475982],["animevost.org",209475982],["animevost.site",209475982],["animevost.top",209475982],["doefiratv.info",209475982],["payeer-gift.ru",209475982],["sinema.top",209475982],["smotret-anime-365.ru",209475982],["turkish-tv-series.ru",[209475982,1934043576,1063064640]],["vost.pw",209475982],["artfile.me",333595699],["artfile.ru",333595699],["astrakhan.ru",333595699],["informpskov.ru",333595699],["myjane.ru",333595699],["omskpress.ru",333595699],["tambovnet.org",333595699],["asteriatm.ru",425691290],["sudya-dredd.ru",[425691290,801968403]],["tehnobzor.ru",425691290],["bryansknovosti.ru",801968403],["novozybkov.su",801968403],["castle-tv.com",240483654],["city.ogo.ua",450367720],["coderlessons.com",78419049],["fixx.one",78419049],["its-kids.ru",78419049],["molitvy.guru",78419049],["nizhny.ru",78419049],["pro100hobbi.ru",78419049],["publy.ru",78419049],["samelectric.ru",78419049],["svadba.expert",78419049],["vibir.ru",78419049],["comp-service.kiev.ua",483874929],["daz3d.ru",1313683608],["dclans.ru",1121881194],["doramy.club",1934043576],["quote.ru",1934043576],["rbc.ru",[1934043576,291265862,1401824332]],["sportrbc.ru",1934043576],["dota2.ru",1698721392],["drive2.ru",[1690133176,1982262543]],["electric-house.ru",1893763853],["stroi-help.ru",1893763853],["elitesnooker.com",1445749162],["f1comp.ru",1089976368],["tagaev.com",1089976368],["times.zt.ua",1089976368],["fapreactor.com",753545064],["pornreactor.cc",[753545064,1801864271]],["fishki.net",1784288917],["footboom.by",[982222767,1018407913]],["footboom.com",[982222767,1018407913]],["footboom.kz",[982222767,1018407913]],["forum.overclockers.ua",97366436],["freehat.cc",[1782780819,1175647834]],["hlamer.ru",1175647834],["lostpix.com",1175647834],["oveg.ru",1175647834],["potokcdn.com",1175647834],["prostoporno.help",1175647834],["saltday.ru",1175647834],["uploadimagex.com",1175647834],["wowskill.ru",1175647834],["xittv.net",1175647834],["friends.in.ua",[1759011237,531632477]],["gidonline.eu",[1759011237,321422478]],["gra-prestoliv.in.ua",531632477],["simpsonsua.tv",531632477],["fssp.gov.ru",1979772758],["gazeta.ru",[604125115,1285737142,1528897974]],["gdespaces.com",1495564035],["gdespaces.net",1495564035],["spac.me",1495564035],["spac1.com",1495564035],["spac1.info",1495564035],["spac1.me",1495564035],["spac1.net",1495564035],["spac1.org",1495564035],["spac1.ru",1495564035],["spaces-blogs.com",1495564035],["spaces.im",1495564035],["spcs.me",1495564035],["spcs.social",1495564035],["strip2.in",1495564035],["strip2.xxx",1495564035],["kinogo.eu",321422478],["gismeteo.by",1892406298],["gismeteo.kz",1892406298],["gismeteo.md",1892406298],["gismeteo.ru",1892406298],["gorodrabot.by",630207465],["gorodrabot.ru",630207465],["htmlweb.ru",876314807],["it-actual.ru",665539060],["joyreactor.cc",1801864271],["reactor.cc",1801864271],["kolizhanka.com.ua",[1853645737,1099940793,660495122]],["liveforums.ru",428088341],["liveinternet.ru",[1268888012,446913000]],["yap.ru",446913000],["yaplakal.com",446913000],["medicina.ua",1159222376],["musify.club",377069310],["my-expert.ru",329642058],["overclockers.ru",228997000],["pikabu.ru",1258101694],["player.mediavitrina.ru",1699503292],["porngames.su",846871401],["rintor.info",846871401],["rintor.net",846871401],["pravvest.ru",1497315642],["reshuege.ru",1359476802],["reshuoge.ru",1359476802],["reshuvpr.ru",1359476802],["sdamgia.ru",1359476802],["shrlink.top",817381865],["spletnik.ru",[1562860769,1553039478]],["web-shpargalka.ru",1562860769],["softportal.com",1036220201],["studizba.com",1084535399],["tapochek.net",1713580371],["tarkov-wiki.ru",1127678950],["upload.ee",338136830],["vesti.ua",555481432],["vestivrn.ru",992379786],["vgtimes.ru",1736242591],["vk.com",[344395781,1962879066,157375419,899431056]],["www.kinopoisk.ru",964057795],["zaruba.fun",1305456488],["ok.ru",[456937231,1941069818]],["3dn.ru",1669996246],["a-point.info",1669996246],["addfiles.ru",1669996246],["all-for-kompa.ru",1669996246],["asia-tv.su",1669996246],["at.ua",1669996246],["autosimgames.ru",1669996246],["chernobyl-soul.com",1669996246],["clan.su",1669996246],["cliphq.ru",1669996246],["coop-lands.ru",1669996246],["db-energo.ru",1669996246],["devdrivers.ru",1669996246],["do.am",1669996246],["dtva-it-rus.gq",1669996246],["elegos.ru",1669996246],["elektronika56.ru",1669996246],["elektrosat.ru",1669996246],["fon-ki.com",1669996246],["for-gsm.ru",1669996246],["free-dream.ru",1669996246],["ftechedu.ru",1669996246],["fukushima-news.ru",1669996246],["gals.md",1669996246],["gamesdendy.ru",1669996246],["giginfo.ru",1669996246],["gloria-cedric.ru",1669996246],["goldformat.ru",1669996246],["greenflash.su",1669996246],["hero-empire.com",1669996246],["igrul-ka.ru",1669996246],["jetvis.ru",1669996246],["kinovego.ru",1669996246],["krasnickij.ru",1669996246],["krolmen.ru",1669996246],["megaclips.net",1669996246],["mod-rus.ru",1669996246],["mow-portal.ru",1669996246],["moy.su",1669996246],["mp3songs.ru",1669996246],["mp4android.ru",1669996246],["mrcmirgorod.com.ua",1669996246],["mult-online.net",1669996246],["my1.ru",1669996246],["narod.ru",1669996246],["newgames.com.ua",1669996246],["novospasskoe-city.ru",1669996246],["obschestvo-9999.gq",1669996246],["omsimclub.ru",1669996246],["online-supernatural.ru",1669996246],["onlinestargate.ru",1669996246],["only-paper.ru",1669996246],["others.name",1669996246],["pidru4nik.com",1669996246],["pkrc.ru",1669996246],["play-force.ru",1669996246],["pokatushki-pmr.ru",1669996246],["pro-zakupki.ru",1669996246],["project-ss.ru",1669996246],["psxworld.ru",1669996246],["radiodom.org",1669996246],["rocketdockfree.ru",1669996246],["sdr-deluxe.com",1669996246],["skidrowcrack.ru",1669996246],["soft-game.net",1669996246],["stalker-gsc.ru",1669996246],["stalker-zone.info",1669996246],["stalkermods.ru",1669996246],["svadbatomsk.ru",1669996246],["tes-game.ru",1669996246],["torfiles.ru",1669996246],["torm-egan.ru",1669996246],["torrent-file.top",1669996246],["ucoz.club",1669996246],["ucoz.com",1669996246],["ucoz.net",1669996246],["ucoz.org",1669996246],["ucoz.ru",1669996246],["ucoz.ua",1669996246],["usite.pro",1669996246],["vodopads.ru",1669996246],["vsthouse.ru",1669996246],["warcraftda.ru",1669996246],["xakevsoft.ru",1669996246],["xn--80aeshkkbdj.xn--p1ai",1669996246],["yaminecraft.ru",1669996246],["zona-stalkera.ru",1669996246],["www.ukr.net",813177791]]);

/******************************************************************************/

const ObjGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const ObjDefineProperty = Object.defineProperty;

const magic =
    String.fromCharCode(Date.now() % 26 + 97) +
    Math.floor(Math.random() * 982451653 + 982451653).toString(36);

const abort = function() {
    throw new ReferenceError(magic);
};

const makeProxy = function(owner, chain) {
    const pos = chain.indexOf('.');
    if ( pos === -1 ) {
        const desc = ObjGetOwnPropertyDescriptor(owner, chain);
        if ( !desc || desc.get !== abort ) {
            ObjDefineProperty(owner, chain, {
                get: abort,
                set: function(){}
            });
        }
        return;
    }

    const prop = chain.slice(0, pos);
    let v = owner[prop];
    chain = chain.slice(pos + 1);
    if ( v ) {
        makeProxy(v, chain);
        return;
    }

    const desc = ObjGetOwnPropertyDescriptor(owner, prop);
    if ( desc && desc.set !== undefined ) { return; }

    ObjDefineProperty(owner, prop, {
        get: function() { return v; },
        set: function(a) {
            v = a;
            if ( a instanceof Object ) {
                makeProxy(a, chain);
            }
        }
    });
};

const scriptlet = (
    chain = ''
) => {
    const owner = window;
    makeProxy(owner, chain);
    const oe = window.onerror;
    window.onerror = function(msg, src, line, col, error) {
        if ( typeof msg === 'string' && msg.includes(magic) ) {
            return true;
        }
        if ( oe instanceof Function ) {
            return oe(msg, src, line, col, error);
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

