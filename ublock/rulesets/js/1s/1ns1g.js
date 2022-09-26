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

// deu-0

const argsMap = new Map([[1185023742,{"a":"#text-14"}],[88604251,{"a":"a[href*=\"/boardheaderads/\"]"}],[739831769,{"a":".wanner,\n.wwd"}],[779914518,{"a":"div[style=\"float: left;padding-right:0px;padding-top:3px;min-height:260px;min-width:300px;\"]"}],[168486176,{"a":".top-panel"}],[961788452,{"a":".rectX,\n.rect_sidebar"}],[1000302495,{"a":".leaderboard-wrapper"}],[829549401,{"a":".amazon-link"}],[1094583342,{"a":".asa1_fbh,\n.rotslide-wrap"}],[865042704,{"a":"#banner"}],[1578848253,{"a":"#header-banner"}],[1385915559,{"a":"img[width=\"160\"][height=\"600\"]"}],[602784410,{"a":"#sidebar-left #text-5,\na[href=\"/panasonic_de\"],\na[href^=\"https://www.teufel.de/sales?partner_id=\"],\ndiv[id^=\"aread-\"],\nimg[referrerpolicy=\"unsafe-url\"]"}],[1332068667,{"a":"#aktieImFokus,\n#wpAktieImFokus,\n.anzeigeText,\n.wo_news_top_banner,\ndiv[style=\"width:1000px; text-align:center; min-height:270px;\"]"}],[1970820092,{"a":".sponsored"}],[1974031025,{"a":".banner-slider"}],[1418336774,{"a":".sponsoren"}],[1191107385,{"a":".banner-leaderboard"}],[1618441129,{"a":".tx-sf-banners"}],[596594393,{"a":"td[width=\"100%\"][align=\"center\"] > hr[size=\"1\"][color=\"#8482A5\"] + table[cellspacing=\"0\"][cellpadding=\"10\"][border=\"0\"][bgcolor=\"#000040\"],\ntd[width=\"33%\"][valign=\"middle\"][align=\"center\"] > a[target=\"_blank\"][href^=\"/links/wechlink.asp?ID=\"] > img"}],[1982689366,{"a":".sponsor_col"}],[1503282975,{"a":".ADVBOX"}],[417825856,{"a":".p-swatch_top-nice--blank.p-blocklink"}],[732356774,{"a":"a[onmousedown^=\"this.href='http://paid.outbrain.com/network/redir?\"][target=\"_blank\"]"}],[1147769857,{"a":"a[data-nvp*=\"'trafficUrl':'https://paid.outbrain.com/network/redir?\"],\na[data-oburl^=\"https://paid.outbrain.com/network/redir?\"],\na[data-redirect^=\"https://paid.outbrain.com/network/redir?\"],\na[onmousedown^=\"this.href='https://paid.outbrain.com/network/redir?\"][target=\"_blank\"] + .ob_source"}],[581902057,{"a":"a[href^=\"https://paid.outbrain.com/network/redir?\"]"}],[1290739418,{"a":"#oc24-div"}],[1000581288,{"a":"#fh-inside-bottom,\n.fh-inside-post"}],[1558322026,{"a":"#fh-outside-top"}],[1355689078,{"a":".fh-sidebar"}],[920461325,{"a":".autog-widget,\n.widget_custom_html"}],[191869358,{"a":".sideinfo"}],[1792012053,{"a":"#footerpartners,\n.hmpartnersglobal"}],[234161510,{"a":"div[id^=\"basic-\"]"}],[1283510155,{"a":"img[width=\"500\"][height=\"500\"],\nimg[width=\"600\"][height=\"500\"],\nimg[width=\"600\"][height=\"600\"]"}],[423973870,{"a":".mod_banner"}],[362172257,{"a":"a[href^=\"banners.php?\"]"}],[1094963129,{"a":"#sponsors,\n#web-trekk-pageupdate"}],[970636245,{"a":".type-banner"}],[1773293186,{"a":".av-7mui-2434157fea122ac0fb770d6fe554162d,\ndiv[id^=\"bayre-\"]"}],[386914361,{"a":"a[href^=\"http://partners.webmasterplan.com/\"]"}],[712090899,{"a":"#WallpaperBanner"}],[1300961809,{"a":".dfpcontainer,\n.yieldlove"}],[1653279411,{"a":"#checkdiv"}],[2101011117,{"a":"#skyscraper"}],[833269137,{"a":"#billboard"}],[503654718,{"a":"div[id^=\"medium_rectangle\"]"}],[1603060385,{"a":".commercial-container,\n.commercial-rightwideskryper"}],[1840733352,{"a":".hm_widget_banner"}],[379241647,{"a":".tdp"}],[339534725,{"a":".partner-teaser"}],[1765465769,{"a":"#tso-billboard-1,\n.tso-pub,\n.wb,\n.wb-wide"}],[2066394806,{"a":".banner-skyscraper"}],[102188114,{"a":".lns-banners-zone"}],[562609189,{"a":"#smartclip-overlay"}],[257051425,{"a":".wide-banner"}],[240988985,{"a":"#mrec"}],[946199776,{"a":".stage-teaser__partner--advertorial,\n.tea-rectangle,\na[href*=\"/partner/\"]"}],[674901467,{"a":"div[data-tr-doc-type=\"dt=InlineAd|st=BTOAdTag\"]"}],[996841685,{"a":".trc_related_container div[data-item-syndicated=\"true\"]"}],[273523550,{"a":".bilde-widget"}],[917179202,{"a":"#content + #right"}],[1963985531,{"a":".asa2_fbva_wrapper,\ndiv[class$=\"-adlabel\"]"}],[662312499,{"a":"#topbanner"}],[84930421,{"a":".header-banner"}],[594788539,{"a":".adv_widget"}],[1742009401,{"a":".ai_widget"}],[1878561674,{"a":"#text-18,\n.blogp-startseite,\n.blogp-werbung-oben-in-artikeln,\na[href^=\"https://all-inkl.com/?partner=\"]"}],[209983807,{"a":"#content_banner"}],[226081549,{"a":"#deals-aktionen-box,\n#pricechange-box,\n#top-angebote-box"}],[2125741624,{"a":"#div-dfp-index1_300x250,\n#div-dfp-index2_300x250"}],[1960546010,{"a":"#container_rectangle_1"}],[1992937005,{"a":".ce_rsce_bd_werbung"}],[1654833377,{"a":".hsbc_homepage_topflop,\n.topbanner,\n.wallpaper_top"}],[257148208,{"a":"#sgFeedList,\n.bg-smartbroker-dark,\n.bg-smartbroker-light,\n.btn-smartbroker"}],[947128528,{"a":".leaderboard"}],[1985237934,{"a":".bmg-ad"}],[1775535996,{"a":".background"}],[488787406,{"a":"#container_banner"}],[1318921341,{"a":".btc-sponsored"}],[2085534260,{"a":"#block-block-8,\n#topshadow"}],[1180395018,{"a":".contentFrameEddie"}],[229969886,{"a":".item + .at_sponsored > .itemHeadline"}],[1761474006,{"a":".shopLinkFrameWrapper"}],[1337836528,{"a":".topFrameEddie"}],[153012237,{"a":".bfa-ad-slot,\n.fe-channel-item--promo"}],[1004450814,{"a":".trc-content-sponsored"}],[891291756,{"a":".trc-content-sponsoredUB"}],[1047950119,{"a":"#billboard_btf"}],[186927616,{"a":"#inpage,\n.bcode,\n.bcode-top-container"}],[2135733818,{"a":"#WzTtDiV + table[width=\"100%\"][border=\"0\"],\nbody > table[width=\"100%\"][border=\"0\"]:first-child,\ntable[width=\"95%\"][cellspacing=\"1\"][border=\"0\"] > tbody > tr > td[valign=\"top\"]:first-child + td[style=\"vertical-align: top;\"]:last-child,\ntr:first-child:last-child > td[valign=\"top\"]:first-child + td[width=\"152\"][valign=\"top\"][align=\"center\"]:last-child"}],[760249528,{"a":".promo-af-wrap"}],[1594766526,{"a":"a[class^=\"herobanner-adv\"]"}],[622721332,{"a":"img[width=\"728\"][height=\"90\"]"}],[2006468646,{"a":".idgWebcastsCarousel"}],[1677816962,{"a":"#anzeige_mso_skyscraper,\n#anzeige_skyscraper_2"}],[1295776001,{"a":"div[class*=\"adszone-\"]"}]]);

const hostnamesMap = new Map([["americaurlaub.de",1185023742],["motormobiles.de",1185023742],["amigafuture.de",88604251],["analysedeutschland.de",739831769],["android-hilfe.de",779914518],["angelshow.de",168486176],["anisearch.de",961788452],["antenne.de",1000302495],["rockantenne.de",1000302495],["schwaebische.de",1000302495],["rockantenne.hamburg",1000302495],["antenne.nrw",1000302495],["aol.de",829549401],["apfeleimer.de",1094583342],["apotheken-umschau.de",865042704],["gamekeyfinder.de",865042704],["kultur-port.de",865042704],["ok-weinstrasse.de",865042704],["stroxley.de",865042704],["archiexpo.de",1578848253],["directindustry.de",1578848253],["medicalexpo.de",1578848253],["nauticexpo.de",1578848253],["architekt.de",1385915559],["glamping.info",1385915559],["areadvd.de",602784410],["ariva.de",[1332068667,1970820092]],["otto.de",1970820092],["toolbox.webediagaming.de",1970820092],["zdnet.de",1970820092],["arminia.de",[1974031025,1418336774]],["rot-weiss-erfurt.de",1418336774],["seo-united.de",1418336774],["vfb.de",1418336774],["budapester.hu",1418336774],["asialadies.de",1191107385],["avladies.de",1191107385],["badeladies.de",1191107385],["behaarteladies.de",1191107385],["bizarrladies.de",1191107385],["busenladies.de",1191107385],["deutscheladies.de",1191107385],["devoteladies.de",1191107385],["dominanteladies.de",1191107385],["erfahreneladies.de",1191107385],["escorts24.de",1191107385],["exklusivladies.de",1191107385],["grosseladies.de",1191107385],["hobbyladies.de",1191107385],["jungeladies.de",1191107385],["kussladies.de",1191107385],["latinaladies.de",1191107385],["massierendeladies.de",1191107385],["mollyladies.de",1191107385],["nsladies.de",1191107385],["nymphomaneladies.de",1191107385],["orientladies.de",1191107385],["osteuropaladies.de",1191107385],["piercingladies.de",1191107385],["rasierteladies.de",1191107385],["schokoladies.de",1191107385],["spielkarussell.de",1191107385],["tattooladies.de",1191107385],["tsladies.de",1191107385],["zaertlicheladies.de",1191107385],["zierlicheladies.de",1191107385],["astronomie.de",1618441129],["astrotreff.de",596594393],["asv-hamm-westfalen.de",1982689366],["au-ja.de",1503282975],["augsburger-allgemeine.de",417825856],["autobild.de",[732356774,1147769857,581902057]],["gamestar.de",[1147769857,581902057]],["n-tv.de",[1147769857,581902057]],["ran.de",[1147769857,581902057]],["finanzen.net",[1147769857,581902057,240988985,1047950119]],["focus.de",581902057],["autoexperience.de",1290739418],["flugzeugforum.de",1290739418],["uhrforum.de",1290739418],["xbox-passion.de",1290739418],["autoextrem.de",[1000581288,1558322026,1355689078]],["skodacommunity.de",[1000581288,1558322026]],["usp-forum.de",1558322026],["win-10-forum.de",1558322026],["winboard.org",1558322026],["autogazette.de",920461325],["automatentest.de",191869358],["b2run.de",1792012053],["basic-tutorials.de",234161510],["basicthinking.de",1283510155],["basses-blatt.de",423973870],["beobachter-online.de",[423973870,2101011117]],["einbecker-morgenpost.de",423973870],["gandersheimer-kreisblatt.de",423973870],["goldstar-tv.de",423973870],["romance-tv.de",423973870],["studio-magazin.de",423973870],["blaue-blume.tv",423973870],["bastel-elfe.de",362172257],["bayer04.de",1094963129],["bayernwelle.de",970636245],["bayreuther-tagblatt.de",1773293186],["bbszene.de",386914361],["bbv-net.de",712090899],["stadtanzeiger-borken.de",712090899],["beat.de",1300961809],["digitalphoto.de",1300961809],["beliebtestewebseite.de",1653279411],["drumsundpercussion.de",2101011117],["eurogamer.de",2101011117],["firmenwissen.de",2101011117],["fussballdaten.de",2101011117],["halle.de",2101011117],["neuelandschaft.de",2101011117],["stereo.de",2101011117],["tourenfahrer.de",2101011117],["anrufer.info",2101011117],["bergsteiger.de",[833269137,503654718]],["bz-berlin.de",[833269137,240988985,996841685,1004450814,1047950119,186927616]],["computerbild.de",833269137],["dastelefonbuch.de",833269137],["stuttgarter-zeitung.de",833269137],["berlinertageszeitung.de",1603060385],["berlinmitkind.de",1840733352],["bestattungen.de",379241647],["bhc06.de",339534725],["biallo.de",1765465769],["bibliomed-pflege.de",[2066394806,102188114]],["magistrix.de",2066394806],["bigfm.de",562609189],["bikesport-emtb.de",257051425],["radfahren.de",257051425],["radsport-rennrad.de",257051425],["bild.de",[240988985,946199776]],["sportbild.bild.de",[674901467,996841685]],["businessinsider.de",[996841685,1004450814,891291756]],["fitbook.de",996841685],["giga.de",[996841685,1004450814,891291756]],["jetzt.de",996841685],["myhomebook.de",[996841685,1004450814,891291756]],["noizz.de",996841685],["spieletipps.de",[996841685,1004450814,891291756]],["sport1.de",[996841685,1004450814,891291756]],["sueddeutsche.de",[996841685,1004450814,891291756]],["t-online.de",[996841685,1004450814,891291756]],["techbook.de",996841685],["transfermarkt.de",[996841685,1004450814,891291756]],["travelbook.de",996841685],["welt.de",996841685],["bildercache.de",273523550],["biothemen.de",917179202],["bitreporter.de",1963985531],["bitsundso.de",662312499],["blickpunkt-brandenburg.de",84930421],["fruchtportal.de",84930421],["katzeausdemsack.de",84930421],["nh24.de",84930421],["sunshine.it",84930421],["blinker.de",594788539],["blitzrechner.de",1742009401],["blogprojekt.de",1878561674],["blogtotal.de",209983807],["bluray-disc.de",226081549],["bmw-syndikat.de",2125741624],["boerse.de",1960546010],["boerse-daily.de",1992937005],["boerse-online.de",1654833377],["boersennews.de",257148208],["boomerangtv.de",947128528],["infosat.de",947128528],["meteovista.de",947128528],["rhein-zeitung.de",947128528],["spielen.de",947128528],["borussia.de",1985237934],["browsergames.de",1775535996],["brv-zeitung.de",488787406],["dtoday.de",488787406],["goslarsche.de",488787406],["pz-news.de",488787406],["tageblatt.de",488787406],["teckbote.de",488787406],["weser-kurier.de",488787406],["btc-echo.de",1318921341],["buecher-magazin.de",2085534260],["buffed.de",[1180395018,229969886,1761474006,1337836528]],["gamezone.de",[1180395018,1761474006,1337836528]],["pcgames.de",[1180395018,229969886,1761474006,1337836528]],["pcgameshardware.de",[1180395018,1337836528]],["gamesaktuell.de",[1761474006,1337836528]],["videogameszone.de",1337836528],["bunte.de",153012237],["metal-hammer.de",891291756],["ww3.cad.de",2135733818],["campervans.de",760249528],["reisemobil-international.de",760249528],["camping.de",1594766526],["championstream.de",622721332],["fruchthandel.de",622721332],["online-gebuehrenrechner.de",622721332],["vfl.de",622721332],["channelpartner.de",2006468646],["charivari.de",1677816962],["chartsurfer.de",1295776001]]);

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
