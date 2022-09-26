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

// ita-0

const argsMap = new Map([[1707253021,{"a":"#wk-grid11f"}],[690169553,{"a":"#content-banner1,\n#content-banner2"}],[284125038,{"a":"#frm"}],[1397353536,{"a":".gyg-list"}],[127242461,{"a":".tour-banner"}],[1418620699,{"a":".textwidget + a[href^=\"https://www.ansa.it/codici-sconto/\"]"}],[1054099136,{"a":"div[style=\"width:300px; height:250px;\"]"}],[1357145785,{"a":".topbar-header"}],[1732377028,{"a":"#media_image-4"}],[909728525,{"a":"#media_image-5"}],[1200352888,{"a":"div[style=\"width: 100%; height: 90px; text-align: center; margin: 10px 0px;\"],\ndiv[style=\"width: 100%; height: 90px; text-align: center; margin: auto; margin: 5px 0px;\"],\ndiv[style=\"width: 80%; height: 115px; padding-top: 25px; text-align: center; margin: auto; clear: left;\"],\ntd[style=\"width: 100%; height: 100px; text-align: center; margin: auto;\"]"}],[1565467515,{"a":".add-inner,\n.header-top"}],[408968971,{"a":".banner_home,\n.pagineprof,\ndiv[id^=\"ban_\"]"}],[1228510587,{"a":"#text-9"}],[220678958,{"a":"#gpt-300250-container,\n.lancio-speciale-logo"}],[1269842861,{"a":".amePlaceholderBox"}],[908361968,{"a":".elementor-element-3579018"}],[911552206,{"a":"#custom_html-4"}],[12883370,{"a":"#homeAside > div[style=\"height:600px\"]"}],[675453226,{"a":".masthead-block"}],[1562814127,{"a":".sidespot-wrapper"}],[813540619,{"a":"#custom_html-11"}],[1464504230,{"a":".table-alm"}],[1058387308,{"a":".td_uid_25_6159d23837660_rand"}],[1615091007,{"a":".td-container-header"}],[1629250805,{"a":".td_uid_12_612cef72a749a_rand,\n.td_uid_12_6159d20cc21c3_rand,\n.td_uid_15_612cef72ae785_rand"}],[1047199864,{"a":"#block-2,\n#wp-custom-header,\n.oplas1-paragrafo,\n.oplas2-paragrafo,\n.oplas3-paragrafo,\n.oplas5paragrafo,\n.oplaswidget"}],[1064277703,{"a":"td[style^=\"border-top-style: solid; border-top-color:#d3d3d3; border-top-width: 1px\"]"}],[1386457320,{"a":"#diretta_video_unipol"}],[526186846,{"a":".boxbanner,\n.boxbanner600"}],[1673663635,{"a":".su-button-center"}],[1838084548,{"a":"#custom_html-25"}],[748506929,{"a":"#custom_html-27"}],[956597583,{"a":"#block-106"}],[1581246801,{"a":".avia-builder-el-5,\n.tablebutton[href=\"https://www.direttasport24.com/leovegas-bonus-di-benvenuto\"]"}],[155406710,{"a":".blz-url"}],[2019009866,{"a":"a[href*=\"/banner/\"]"}],[1395182716,{"a":"a[href^=\"https://iqbroker.com/\"]"}],[584299804,{"a":"a[href^=\"https://www.plus500.com/\"]"}],[1102168309,{"a":".bannerExtra,\n[href^=\"http://www.djpoint.net/\"]"}],[1116903520,{"a":".btn-offerte-amazon"}],[1048896194,{"a":"img[width=\"640\"]"}],[1008953400,{"a":"#wdds_po_middle,\n.esv-edito-ctn"}],[1024796072,{"a":"#ad_global_below_navbar"}],[84930421,{"a":".header-banner"}],[1278466713,{"a":".widget_mp_banner_widget"}],[530510338,{"a":"#bannerSkin,\n#bannerTopWrapper,\n.BigSquare,\n.banner-velux,\n.click-Skin,\n.cont-leaderBoard"}],[351665475,{"a":".c-footer__sponsors-container,\n.o-section--promo"}],[1216360628,{"a":"div[style=\"overflow:auto; width:100%; height:300px; box-sizing: border-box; display: block;\"],\ndiv[style=\"overflow:auto; width:740px; height:340px; box-sizing: border-box; display: block;\"],\ndiv[style=\"overflow:hidden; width:380px; height:340px; box-sizing: border-box; display: block;\"]"}],[1609396528,{"a":"#skin"}],[1973128211,{"a":"#box,\n#overlay,\n#striprotator,\n.banner234x60-right,\n.leaderboard-bottom,\n.sponsor-rubrica"}],[1231929345,{"a":".manchette-dx,\n.manchette-sx"}],[1141139650,{"a":"a[href^=\"https://www.ivacy.com/\"]"}],[1024550020,{"a":"#text-10"}],[747436463,{"a":"#text-12"}],[911513683,{"a":"a[href^=\"https://universofree.net/\"],\ndiv[id^=\"eurof-\"]"}],[157272368,{"a":".exibart-footer-partner,\n.exibart-footer-partner-title"}],[1448247614,{"a":".sponsor_box,\na[href^=\"/sprclick/\"]"}],[2136042259,{"a":".aan_fake,\n.aan_fake__video-units,\n.abcnn___video-units,\n.js-sticky-banner,\n.links-out"}],[1002518637,{"a":"#tm-main-top"}],[673791633,{"a":"#text-4"}],[1949209003,{"a":"#cb-bg-to"}],[320449177,{"a":".amazon-auto-links"}],[2084867176,{"a":".banner_blog"}],[1208222945,{"a":"img[width=\"728\"]"}],[155427852,{"a":".mkt-300x94"}],[1031315665,{"a":".widget-header"}],[967858996,{"a":".BannerContainer"}],[1337376368,{"a":".slick-track"}],[1308639961,{"a":"div[style=\"min-height: 250px;\"]"}],[980421626,{"a":"div[style=\"margin: 0 auto; width: 468px; height: 60px;\"]"}],[2052298222,{"a":"#top-banner"}],[1252732663,{"a":"#top_content,\n.banner_dx"}],[685006943,{"a":".tdi_111"}],[1191939536,{"a":".tdi_132,\n.tdi_190,\n.tdi_253"}],[1945682826,{"a":".banner-inside-content"}],[624006175,{"a":".sticky_wrapper"}],[1033893951,{"a":".tbm-code"}],[200370662,{"a":"#banneralto,\n.destra_banner,\ndiv[class^=\"extendedwopts-\"]"}],[529139657,{"a":".masthead"}],[295290826,{"a":"iframe[style=\"width:300px; height:250px; border: none\"]"}],[580929539,{"a":".Banner"}],[2079527663,{"a":"#block-10,\n#block-14"}],[699487320,{"a":"#block-13"}],[1120038256,{"a":".add-btn[href^=\"https://amzn.to/\"]"}],[1629841333,{"a":"div[class^=\"angwp_\"]"}],[1878109217,{"a":".fb-banner,\nimg[alt=\"Advertisement\"]"}],[8020434,{"a":"#fa_ticker_container,\n.box-body > img"}],[532666661,{"a":".lepopup-element,\n.lepopup-popup-overlay"}],[1149663081,{"a":"img[width=\"600\"]"}],[1243396756,{"a":".sliderclass"}],[1141189016,{"a":"#text-35"}],[1988003906,{"a":".ffi_az_box"}],[780265468,{"a":"div[class^=\"banner-\"]"}],[1787694862,{"a":".computer"}],[1108955007,{"a":"#strisciabanner_destra,\n#strisciabanner_sinistra"}],[521501909,{"a":".erzodfm-container"}],[225203525,{"a":"#banner300"}],[1246344615,{"a":"#bannerRight"}],[885569821,{"a":".broker-table,\ndiv[style=\"background: #c4eab8; padding: 10px; border: 2px solid green;\"]"}],[464144131,{"a":".ast-below-header"}],[382694535,{"a":".elementor-element-37f5d157,\n.widget_sp_image-image-link"}],[1602893399,{"a":"#gallery-254068-1-slideshow,\n.elementor-element-1c08281c,\n.elementor-element-2f4040ea,\n.elementor-element-3720cb8a,\n.elementor-element-3bc9c58,\n.elementor-element-5b8e1d7,\n.elementor-element-cfedfc3,\n.elementor-element-d459522"}],[964459866,{"a":"#text-5"}],[1981171945,{"a":"img[height=\"90\"]"}],[1478399451,{"a":"#b-nner-right-list,\n.b-nner-desktop-block,\n.bacheca-incontri-b-nner,\na[href^=\"https://wellcum.at/\"]"}],[1435611486,{"a":"a[href*=\"?utm_\"]"}],[264996493,{"a":"a[href^=\"https://casinostudio3000.com/\"]"}],[1077804967,{"a":"#block-block-100"}],[944007854,{"a":"#slimbanner"}],[722133165,{"a":"div[style=\"text-align: center; width: 336px; height: 280px; padding: 3px 0px 3px 0px;\"]"}],[312013951,{"a":"#media_video-2"}],[1001028669,{"a":"#takeOver"}],[1978391188,{"a":"#text-44,\n#text-58,\n#text-60,\n#text-62"}],[1325552923,{"a":"#text-53"}],[388394893,{"a":"#text-61"}],[1049690178,{"a":".code-block-5"}],[1784734444,{"a":".code-block-8"}],[2005267123,{"a":".td_btn"}],[1238437893,{"a":".headerbanner"}],[614700168,{"a":"#tr-contentbottom,\nimg[width=\"140\"][height=\"68\"]"}],[876550348,{"a":"#top_sponsor_inner"}],[728434679,{"a":".sponsors"}],[2063552104,{"a":"input[class=\"post-movie-button-chili\"]"}],[1148190699,{"a":".elementor-element-52a6569,\n.elementor-element-6dd9dba,\n.elementor-element-7577ee5,\n.elementor-element-7826d5f"}],[34827882,{"a":"img[width=\"400\"][height=\"333\"]"}],[1437530094,{"a":"div[id^=\"ilden-\"]"}],[223083,{"a":"#header-text-nav-wrap"}],[2110931510,{"a":"div[id^=\"ilgal-\"]"}],[423080501,{"a":".guardasingleserie1,\n.guardasingleserie2"}],[1158777799,{"a":"a[href*=\"/pubblicita/\"]"}],[173717366,{"a":"div[id^=\"gdu-\"]"}],[877153326,{"a":"img[width=\"300\"][height=\"300\"]"}],[737605997,{"a":"#carousel-sponsors-list,\n#sponsors-wrapper"}],[1093259689,{"a":".a-leaderboard,\n.abox,\n.rel--brandconn,\n.s24-abox"}],[1558965603,{"a":"#media_image-6"}],[926846243,{"a":"div[id^=\"partner-\"]"}],[1457844558,{"a":".tdi_134"}],[1587382581,{"a":".td_single_image_bg"}],[1266685460,{"a":"#comparazione_bonus_tabella,\ndiv[style*=\"min-height: 330px; height: 330px;\"]"}],[290822686,{"a":".bsaProContainerNew"}],[846420506,{"a":".add_left,\n.alto_add_host"}],[682913570,{"a":"#text-56"}],[1299019332,{"a":".widget_aawp_widget_bestseller"}],[611764764,{"a":".widget_aawp_widget_box"}],[1142635671,{"a":".innat-widget,\ndiv[id^=\"innat-\"]"}],[1276187607,{"a":"div[id^=\"nat_\"]"}],[76922586,{"a":".code-block-18"}],[1204869372,{"a":"#table3"}],[1664796643,{"a":".box-amazon"}],[468417270,{"a":".single-deals"}],[1709048766,{"a":"#media_image-49"}],[555595212,{"a":"#text-1,\n.togglecontainer"}],[508640208,{"a":".partner-banner"}],[78214728,{"a":".opt"}],[1007396575,{"a":".banner_img_widget"}],[1684002128,{"a":".carousel"}],[655627352,{"a":".jcom-o-footer__corporate,\n.jcom-o-sponsors-nav__child"}],[1984029716,{"a":"a[href^=\"http://rover.ebay.com/\"]"}],[973383013,{"a":"a[onclick^=\"ajax_bannerclicks\"]"}],[775932069,{"a":".pub_container"}],[328046272,{"a":"#penci_text-block__41766321,\n#penci_text-block__48733284"}],[803256056,{"a":".bannerContainer"}],[2101240282,{"a":".mkdf-header-banner-widget"}],[1341465265,{"a":".intercept"}],[1886916661,{"a":".manchette"}],[345349313,{"a":"#banner-top"}],[525766382,{"a":".view-Banners"}],[1682539309,{"a":"#huge_it_slideshow_image_container_4,\n.widget_huge_it_widget"}],[1306353057,{"a":".lp-link"}],[2008353299,{"a":".sidebar-banner"}],[1137723340,{"a":".insert-adv-venerota"}],[2027694839,{"a":".banner_centro"}]]);

const hostnamesMap = new Map([["cinafoniaci.com",1707253021],["news.cinecitta.com",690169553],["cinqueterre5.com",[284125038,1397353536,127242461]],["gogoterme.com",284125038],["incinqueterre.com",[284125038,127242461]],["luoghidanonperdere.com",284125038],["circusf1.com",1418620699],["cittadellaspezia.com",1054099136],["sentimentispezzini.cittadellaspezia.com",1357145785],["cleliamattana.com",[1732377028,909728525]],["esportsitalia.com",[1732377028,909728525,1024550020,747436463]],["iltaccuvino.com",[1732377028,1558965603]],["it-casinoonline.com",[1732377028,909728525,877153326]],["consigliamidove.it",1732377028],["corriereelorino.it",1732377028],["roadtvitalia.it",1732377028],["ufficistampanazionali.it",[1732377028,909728525,1558965603]],["altropensiero.net",[1732377028,1558965603]],["italiaonline.news",[1732377028,84930421]],["inviaggiodasola.com",909728525],["mondo3.com",909728525],["fashionaut.it",909728525],["giornalistitalia.it",[909728525,1558965603]],["ilpontenews.it",909728525],["romaedintorninotizie.it",909728525],["click4soccer.com",1200352888],["computersm.com",1565467515],["condominioweb.com",408968971],["controcopertina.com",1228510587],["nightlife-cityguide.com",1228510587],["p2p-italia.com",1228510587],["solorecensioni.com",1228510587],["agenziagiornalisticaopinione.it",[1228510587,1024550020]],["brindisioggi.it",1228510587],["ilpost.it",1228510587],["pagamentidigitali.it",1228510587],["telemia.it",1228510587],["cookaround.com",[220678958,1269842861]],["donnamoderna.com",[1269842861,1116903520]],["sorrisi.com",1269842861],["valorinormali.com",1269842861],["androidworld.it",1269842861],["dmbeauty.it",1269842861],["focus.it",1269842861],["giallozafferano.it",1269842861],["iconmagazine.it",1269842861],["mobileworld.it",1269842861],["my-personaltrainer.it",1269842861],["nostrofiglio.it",1269842861],["pianetadonna.it",1269842861],["pianetamamma.it",1269842861],["smartworld.it",1269842861],["soldionline.it",1269842861],["studenti.it",1269842861],["thewom.it",1269842861],["coronavirusroma.com",908361968],["corrieredelmolise.com",911552206],["destinazioneusa.com",911552206],["floinviaggio.com",[911552206,295290826]],["grossetosport.com",[911552206,1978391188,1325552923,388394893,1049690178,1784734444]],["guidaconsumatore.com",911552206],["travelwithbrothers.com",911552206],["assisisport.it",[911552206,813540619,84930421]],["calciocasteddu.it",911552206],["canalesassuolo.it",911552206],["corrieredicomo.it",911552206],["cucinaresenzamenate.it",911552206],["eurekaddl.it",911552206],["laprevisione.it",911552206],["meteogiornale.it",911552206],["nonsolonautica.it",911552206],["peopleforplanet.it",911552206],["pianetablunews.it",[911552206,673791633]],["stranieriinitalia.it",911552206],["topragazze.it",911552206],["tuttogossipnews.it",911552206],["carteprepagate.org",911552206],["corsedimoto.com",[12883370,675453226]],["zon.it",675453226],["cosedicasa.com",1562814127],["criptovalute24.com",[813540619,1464504230]],["fotonerd.it",813540619],["gufo.it",[813540619,1299019332]],["radiorossonera.it",813540619],["trnews.it",813540619],["indiscreto.org",813540619],["diventaretrader.com",[1464504230,2019009866,1395182716,584299804]],["mercati24.com",[1464504230,584299804]],["cronacadelveneto.com",1058387308],["cronacadiverona.com",[1615091007,1629250805]],["bologna24ore.it",1615091007],["calciofemminileitaliano.it",1615091007],["calciomercato.it",1615091007],["elettronicanews.it",1615091007],["ferrara24ore.it",1615091007],["forli24ore.it",1615091007],["gametimers.it",1615091007],["gamingtoday.it",1615091007],["phonetoday.it",1615091007],["radioradio.it",1615091007],["ravenna24ore.it",1615091007],["rimininews24.it",1615091007],["romagiallorossa.it",1615091007],["romagna24economia.it",1615091007],["rovigo24ore.it",1615091007],["secondamanoitalia.it",1615091007],["tecnoandroid.it",1615091007],["cronacaossona.com",1047199864],["datameteo.com",1064277703],["dayitalianews.com",1386457320],["destinioltreconfine.com",526186846],["diconews.com",1673663635],["ideeregaloperte.it",1673663635],["dimagrireduepuntozero.com",[1838084548,748506929]],["momentidicalcio.com",1838084548],["pianetaserieb.it",[1838084548,748506929]],["strill.it",1838084548],["dinamobasket.com",956597583],["direttasport24.com",1581246801],["dissapore.com",155406710],["pourfemme.it",155406710],["punto-informatico.it",155406710],["sportal.it",155406710],["telefonino.net",[155406710,1984029716]],["radioaldebaran.it",2019009866],["atalanta.it",584299804],["djmagitalia.com",1102168309],["duralavita.com",1048896194],["catanista.eu",1048896194],["easyviaggio.com",1008953400],["ebaygeneration.com",1024796072],["elaborare.com",1024796072],["esigarettaforum.com",1024796072],["digital-forum.it",1024796072],["thegamesmachine.it",1024796072],["milanworld.net",1024796072],["ecodelcinema.com",[84930421,1278466713]],["siderweb.com",84930421],["comesifasefaidate.it",84930421],["fantacalcio.it",84930421],["lagenziadiviaggi.it",84930421],["nocerinalive.it",84930421],["oddslot.it",84930421],["oltreilfatto.it",84930421],["palermolive.it",84930421],["quotidianocanavese.it",84930421],["radioviainternet.it",84930421],["ondatv.tv",84930421],["edilportale.com",530510338],["empolifc.com",351665475],["epertutti.com",1216360628],["epolisbari.com",1609396528],["tuttosport.com",[1609396528,1308639961]],["familygo.eu",1609396528],["allmusicitalia.it",1609396528],["corrieredellosport.it",[1609396528,1308639961]],["marigliano.net",1609396528],["erbanotizie.com",[1973128211,1231929345]],["gazzettadellaspezia.it",1231929345],["gazzettadellemilia.it",1231929345],["noinotizie.it",1231929345],["esportsactivity.com",1141139650],["torremaggiore.com",1024550020],["androidblog.it",1024550020],["myfitnessmagazine.it",1024550020],["techboom.net",1024550020],["golbym.com",[747436463,264996493]],["eurofestivalnews.com",911513683],["exibart.com",157272368],["facciabuco.com",1448247614],["facileporno.com",2136042259],["faidatecasa.com",1002518637],["faidatecreativo.com",673791633],["pordenonecalcio.com",673791633],["sardegnaierioggidomani.com",[673791633,964459866]],["tecnofacile.com",673791633],["vigamusmagazine.com",673791633],["auguri.gratis",673791633],["antennaradioesse.it",673791633],["birramoriamoci.it",[673791633,964459866]],["casilinanews.it",673791633],["finaria.it",673791633],["fionline.it",673791633],["kisskissnapoli.it",673791633],["salernitananews.it",673791633],["faidateingiardino.com",[1949209003,320449177]],["newsf1.it",1949209003],["icrewplay.com",[320449177,1148190699]],["lombardoandrea.com",320449177],["fantacalciopedia.com",2084867176],["faretennis.com",1208222945],["104news.it",1208222945],["italyandmore.it",1208222945],["tennispavese.it",1208222945],["teverepost.it",1208222945],["fasanolive.com",155427852],["altamuralive.it",155427852],["barilive.it",155427852],["barlettalive.it",155427852],["bisceglielive.it",155427852],["coratolive.it",155427852],["gioialive.it",155427852],["giovinazzolive.it",155427852],["gravinalive.it",155427852],["margheritalive.it",155427852],["minervinolive.it",155427852],["molfettalive.it",155427852],["ruvolive.it",155427852],["santeramolive.it",155427852],["terlizzilive.it",155427852],["tranilive.it",155427852],["fashionandroid.com",1031315665],["fc-suedtirol.com",967858996],["fermanafc.com",1337376368],["etvmarche.it",1337376368],["magentanostra.it",1337376368],["netflixlovers.it",1337376368],["radiosilver.it",1337376368],["settesere.it",1337376368],["uslecce.it",1337376368],["ustriestinacalcio1918.it",1337376368],["filmup.com",1308639961],["fcinternews.it",1308639961],["politicanews.it",1308639961],["finalsayan.com",980421626],["finanza.com",[2052298222,1252732663]],["certificatejournal.it",2052298222],["finanzanow.com",[685006943,1191939536]],["p300.it",685006943],["finanzaonline.com",[1945682826,624006175,1033893951]],["webnews.it",[624006175,1033893951]],["wallstreetitalia.com",1033893951],["agrodolce.it",1033893951],["autoblog.it",1033893951],["bebeblog.it",1033893951],["blogo.it",1033893951],["borse.it",1033893951],["calcioblog.it",1033893951],["cineblog.it",1033893951],["ecoblog.it",1033893951],["fashionblog.it",1033893951],["gossipblog.it",1033893951],["greenstyle.it",1033893951],["html.it",1033893951],["melablog.it",1033893951],["motoblog.it",1033893951],["pinkblog.it",1033893951],["pmi.it",1033893951],["soundsblog.it",1033893951],["studentville.it",1033893951],["tvblog.it",1033893951],["fiorentinanews.com",[200370662,529139657]],["pianetabasket.com",[529139657,944007854,722133165]],["tuttofrosinone.com",[529139657,944007854,722133165]],["tuttonocerina.com",[529139657,944007854]],["tuttoturris.com",[529139657,944007854]],["eurochampions.it",[529139657,944007854]],["genoanews1893.it",[529139657,944007854,722133165]],["lalaziosiamonoi.it",[529139657,944007854]],["tuttoveneziasport.it",[529139657,944007854]],["perugia24.net",[529139657,944007854,722133165]],["focusrisparmio.com",580929539],["comolive.it",580929539],["resegoneonline.it",580929539],["valtellinanews.it",580929539],["blackdevils.team",580929539],["foggiapost.com",[2079527663,699487320]],["meridiananotizie.it",699487320],["foodnrock.com",1120038256],["footdata.com",1629841333],["fortuneita.com",1878109217],["forum-wranglermania.com",8020434],["fotografareindigitale.com",532666661],["frammentidicodice.com",1149663081],["tmnotizie.com",1149663081],["abruzzoweb.it",1149663081],["filastrocche.it",1149663081],["ilgiornaledisalerno.it",1149663081],["nonapritequestoblog.it",1149663081],["radio5punto9.it",1149663081],["radiortm.it",1149663081],["fremondoweb.com",1243396756],["frequentflyeritalia.com",[1141189016,1988003906]],["viterbopost.it",1141189016],["ftaonline.com",780265468],["fuoritraiettoria.com",1787694862],["garedepoca.com",1108955007],["garganotv.com",521501909],["gayburg.com",225203525],["generacodice.com",1246344615],["giocareinborsa.com",885569821],["giochinet.com",464144131],["giornaleravenna.com",382694535],["giornalesm.com",[1602893399,964459866]],["mousedagaming.com",964459866],["brescia2.it",964459866],["gnoccaforum.com",1981171945],["gnoccatravels.com",[1478399451,1435611486]],["juzaphoto.com",[1435611486,1984029716,973383013]],["voglioporno.com",1435611486],["phica.eu",1435611486],["anteprima24.it",1435611486],["ideawebtv.it",1435611486],["lavorincasa.it",1435611486],["mangaforever.net",1435611486],["gpone.com",1077804967],["grigionline.com",[944007854,722133165]],["noesolofutbol.com",944007854],["parmalive.com",944007854],["sportakm0.com",[944007854,722133165]],["tuttoc.com",944007854],["tuttocalciopontino.com",[944007854,722133165]],["tuttoentella.com",944007854],["tuttoeuropei.com",944007854],["tuttofutbolsudamerica.com",[944007854,722133165]],["tuttojuve.com",944007854],["tuttolatina.com",[944007854,722133165]],["tuttonazionali.com",944007854],["tuttopordenone.com",[944007854,722133165]],["tuttoreggina.com",944007854],["tuttoseried.com",[944007854,722133165]],["tuttosportimolese.com",[944007854,722133165]],["tuttostpauli.com",[944007854,722133165]],["amaranta.it",944007854],["atlanticfootball.it",[944007854,722133165]],["calcioslavo.it",[944007854,722133165]],["corrierespione.it",[944007854,722133165]],["firenzeviola.it",944007854],["footballscout24.it",[944007854,722133165]],["forzaakragas.it",[944007854,722133165]],["pallamanonews.it",944007854],["rugbynewsfvg.it",[944007854,722133165]],["sportnewstrapani.it",[944007854,722133165]],["torinogranata.it",944007854],["tuttobrescia.it",944007854],["tuttocasertana.it",944007854],["tuttocesena.it",[944007854,722133165]],["tuttojuvestabia.it",[944007854,722133165]],["tuttomantova.it",[944007854,722133165]],["tuttomondiali.it",944007854],["tuttonovara.it",[944007854,722133165]],["tuttospal.it",[944007854,722133165]],["vocegiallorossa.it",944007854],["interdipendenza.net",[944007854,722133165]],["palermo24.net",[944007854,722133165]],["sampdorianews.net",944007854],["sassuolonews.net",944007854],["tuttocagliari.net",[944007854,722133165]],["tuttolecce.net",[944007854,722133165]],["tuttonapoli.net",944007854],["tuttopalermo.net",944007854],["tuttoprimavera.com",722133165],["tuttosalernitana.com",722133165],["tuttochievoverona.it",722133165],["grossetonotizie.com",312013951],["ultimenotizieoggi.it",312013951],["grossetoonline.com",1001028669],["infotelematico.com",[1325552923,682913570,1299019332,611764764]],["radioimmagine.it",388394893],["iltorinese.it",1049690178],["informarea.it",1049690178],["pomiglianolive.it",[1049690178,1784734444]],["reportpistoia.com",[1784734444,76922586]],["latinapress.it",1784734444],["guidalloshopping.com",2005267123],["h24notizie.com",1238437893],["hc-neumarkt.com",614700168],["hcgherdeina.com",876550348],["hcpustertal.com",728434679],["acfontemeravigliosa.it",728434679],["alfamasera.it",728434679],["asdcmozzo.it",728434679],["asdeasytennis.it",728434679],["asdfrentania.it",728434679],["belmontecalcio.it",728434679],["cestisticasavonese.it",728434679],["delfinosalento.it",728434679],["excelsiorcalcio.it",728434679],["falcoalbino.it",728434679],["focus-online.it",728434679],["franzinvalnocebasket.it",728434679],["hellasverona.it",728434679],["hellasveronawomen.it",728434679],["nuovafrontiera.it",728434679],["pallacanestroalassio.it",728434679],["podisticasannicandro.it",728434679],["robur1905macerata.it",728434679],["scanzorosciatebasket.it",728434679],["slownews.it",728434679],["sslazio.it",728434679],["uscremonese.it",728434679],["virtusapriliabasket.it",728434679],["hotcorn.com",2063552104],["ilcorrieredellacitta.com",34827882],["ildentistamoderno.com",1437530094],["ilfoggia.com",223083],["ilgallettomugello.com",2110931510],["ilgeniodellostreamings.com",423080501],["ilgeniodellostreaming.to",423080501],["ilgeniodellostreaming.voto",423080501],["ilgiallorosso.com",1158777799],["ilgiornalediudine.com",[173717366,877153326]],["spaziotennis.com",877153326],["xtremehardware.com",877153326],["abruzzonews.eu",877153326],["africa-express.info",877153326],["artemagazine.it",877153326],["circuitoturismo.it",877153326],["ilfriuliveneziagiulia.it",877153326],["ilgazzettinometropolitano.it",877153326],["ofcs.it",877153326],["sentieriselvaggi.it",877153326],["teleregionelive.it",877153326],["toscanatv.it",877153326],["yogajournal.it",877153326],["informatissimo.net",877153326],["foggiatv.tv",877153326],["ilpallonegonfiato.com",737605997],["bolognasportnews.it",737605997],["ilsole24ore.com",1093259689],["corrispondenzaromana.it",1558965603],["funghimagazine.it",1558965603],["pisainvideo.it",1558965603],["tecnogazzetta.it",1558965603],["imagelinenetwork.com",926846243],["imiglioridififa.com",1457844558],["immaginevalsassina.com",1587382581],["moondo.info",1587382581],["notizialocale.it",1587382581],["radiolombardia.it",1587382581],["telesudweb.it",1587382581],["biancorossi.net",1587382581],["infobetting.com",1266685460],["infomedianews.com",290822686],["bznews24.it",290822686],["piazzasalento.it",290822686],["informagiovani-italia.com",846420506],["migliorecrema.com",1299019332],["notiziarte.com",1299019332],["bici-pieghevole.info",[1299019332,611764764]],["caniegatti.info",1299019332],["ciaogreen.it",1299019332],["miglioripc.it",1299019332],["salutemoderna.it",1299019332],["londra.today",1299019332],["tuttoesselunga.com",611764764],["newsly.it",611764764],["stampante-3d.net",611764764],["innaturale.com",1142635671],["insegreto.com",1276187607],["internews24.com",76922586],["invaligia.com",1204869372],["iphoneitalia.com",[1664796643,468417270]],["teeech.it",1664796643],["irenedisumma.com",1709048766],["irlandaonline.com",555595212],["isoladicretavacanze.com",508640208],["isoladiformentera.com",508640208],["isoladifuerteventura.com",508640208],["isoladiibiza.com",508640208],["isoladilanzarote.com",508640208],["isoladimaiorca.com",508640208],["isoladimaltavacanze.com",508640208],["isoladiminorca.com",508640208],["isoladirodivacanze.com",508640208],["listooo.com",508640208],["mollaretutto.com",508640208],["vacanzenelmediterraneo.com",508640208],["tierra.it",508640208],["italiacashback.com",78214728],["italpress.com",1007396575],["itinerariodiviaggio.com",1684002128],["lavocedelpalio.it",1684002128],["juventus.com",655627352],["kadaza.it",1984029716],["kikapress.com",775932069],["ladiscussione.com",328046272],["lamiachampagne.com",803256056],["laprovinciadelsulcisiglesiente.com",2101240282],["larionews.com",[1341465265,1886916661]],["portoravennanews.com",1886916661],["tuttomercatoweb.com",1886916661],["opinione.it",1886916661],["ship2shore.it",1886916661],["larivieraonline.com",[345349313,525766382]],["cuneocronaca.it",345349313],["piccolenote.ilgiornale.it",345349313],["oggitreviso.it",345349313],["superscudetto.it",345349313],["lasberla.com",1682539309],["lattemiele.com",1306353057],["lavocedinovara.com",2008353299],["quotidianolacitta.it",2008353299],["lecconotizie.com",1137723340],["leccoonline.com",2027694839],["casateonline.it",2027694839],["merateonline.it",2027694839]]);

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