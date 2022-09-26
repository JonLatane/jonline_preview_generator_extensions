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

// spa-1

const argsMap = new Map([[1997255388,{"a":["Object.prototype.adblockerEnabled","false"]}],[1175309212,{"a":["adsbygoogle.loaded","true"]}],[2069476366,{"a":["adBlockCheck","true"]}],[1847187479,{"a":["pp_show_popupmessage","noopFunc"]}],[651083159,{"a":["easySettings.adblock","0"]}],[1143585180,{"a":["canRunAds","true"]}],[639677858,{"a":["onload","null"]}],[1802504753,{"a":["adblockDetector.init","noopFunc"]}],[692911238,{"a":["adsbygoogle.length","undefined"]}],[1460120773,{"a":["WSL2.config.enableAdblockEcommerce","0"]}],[907076666,{"a":["ads_unblocked","true"]}],[969967749,{"a":["adblock","true"]}],[1592980545,{"a":["kkwoiNI","noopFunc"]}],[1333868953,{"a":["yUIlOsT","noopFunc"]}],[23750112,{"a":["better_ads_adblock","true"]}],[456056420,{"a":["adBlockDetected","false"]}],[896674540,{"a":["isAdsDisplayed","true"]}],[1825197126,{"a":["Lata","1"]}],[225717493,{"a":["loadingAds","true"]}],[2066985565,{"a":["goog_pvsid","1"]}],[1779764807,{"a":["Goog_Osd_UnloadAdBlock","1"]}],[114811492,{"a":["google_osd_loaded","1"]}],[1510859056,{"a":["stopMan","false"]}],[1139792021,{"a":["google_unique_id","1"]}],[1905857111,{"a":["anunciotag","noopFunc"]}],[1124761609,{"a":["_mvnxp","noopFunc"]}],[392642219,{"a":["loadingAds","undefined"]}],[107261759,{"a":["xxxStore","undefined"]}],[2118287768,{"a":["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads","''"]}],[997426408,{"a":["clicked","true"]}],[713266250,{"a":["eClicked","true"]}],[1589259732,{"a":["number","0"]}],[1689267797,{"a":["sync","true"]}],[740610853,{"a":["a_consola","noopFunc"]}]]);

const hostnamesMap = new Map([["cadenaser.com",1997255388],["texto.kom.gt",1175309212],["infojobs.com.br",2069476366],["maringapost.com.br",1847187479],["bandab.com.br",1847187479],["ouniversodatv.com",651083159],["skynovels.net",1143585180],["wuolah.com",1143585180],["botinnifit.com",1143585180],["minhasdelicias.com",1143585180],["luchaonline.com",1143585180],["tribunaavila.com",639677858],["deportealdia.live",1802504753],["elquintobeatle.com",692911238],["empregoestagios.com",692911238],["satcesc.com",692911238],["applesfera.com",1460120773],["bebesymas.com",1460120773],["compradiccion.com",1460120773],["diariodelviajero.com",1460120773],["directoalpaladar.com",1460120773],["elblogsalmon.com",1460120773],["espinof.com",1460120773],["genbeta.com",1460120773],["motorpasion.com",1460120773],["motorpasionmoto.com",1460120773],["pymesyautonomos.com",1460120773],["trendencias.com",1460120773],["trendenciashombre.com",1460120773],["vidaextra.com",1460120773],["vitonica.com",1460120773],["xataka.com",1460120773],["xatakaciencia.com",1460120773],["xatakafoto.com",1460120773],["xatakahome.com",1460120773],["xatakamovil.com",1460120773],["xatakandroid.com",1460120773],["xatakawindows.com",1460120773],["doceru.com",907076666],["docero.com.br",907076666],["comandotorrents.org",969967749],["mangahost.site",[1592980545,1333868953]],["adslayuda.com",23750112],["outerspace.com.br",456056420],["doramasmp4.com",896674540],["file4go.net",1825197126],["seriesdonghua.com",225717493],["mundodonghua.com",225717493],["mangahost4.com",[2066985565,1779764807,114811492,1510859056,1139792021]],["mangahosted.com",[2066985565,1779764807,114811492,1510859056,1139792021]],["mangahost2.com",[2066985565,1779764807,114811492,1510859056,1139792021]],["playnewserie.xyz",1905857111],["vizer.vip",1124761609],["tiohentai.xyz",392642219],["pornolandia.xxx",107261759],["hentaiporno.xxx",2118287768],["megadescarga.net",[997426408,713266250,1589259732,1689267797]],["fakings.com",740610853]]);

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
