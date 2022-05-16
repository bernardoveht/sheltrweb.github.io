'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "51e18332b5ff4ad49bcd8dbc3b1a7432",
"index.html": "e642a0ee8742f5efeb771556e91d2f11",
"/": "e642a0ee8742f5efeb771556e91d2f11",
"main.dart.js": "52726be8301ad2a197afd82fd0112221",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4d5e7e98447f454f6f76b51b76e25524",
"%20cors.json": "434eb804728f2a72969effd13fc48333",
"assets/AssetManifest.json": "fa55a40349ac411d070df7e84a233d49",
"assets/NOTICES": "316ebe5518a0fc5c11eb83a6ee33667f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"assets/packages/stream_chat_flutter/images/placeholder.png": "30d340bd4f082a7ef08376e916d960d8",
"assets/packages/stream_chat_flutter/images/giphy_icon.png": "0258059543bf3666bf0bdbe932592208",
"assets/packages/stream_chat_flutter/svgs/icon_picture_empty_state.svg": "cd17bcb38aa673d1765ee69f9a321929",
"assets/packages/stream_chat_flutter/svgs/icon_pen_write.svg": "93279740dc02da26397cd43358cec4e0",
"assets/packages/stream_chat_flutter/svgs/video_call_icon.svg": "0dac4d210cf07faf50367cd897ada34a",
"assets/packages/stream_chat_flutter/svgs/giphy_icon.svg": "ecb1168250a8e9e5b2df52e0e34a3683",
"assets/packages/stream_chat_flutter/svgs/icon_camera.svg": "5a7c1f19e6670fbf3c5ad1deaffdfd5c",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_RTF.svg": "80211524634cdaf49221ea987641fb2b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check_all.svg": "c8c7fb7fd4bf6868740d70d36c5163f2",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_TXT.svg": "02eee06ebb5f90f668acbd150347eddb",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_MD.svg": "3730f0b240e6962d03f9ffecc8ba6b60",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_error.svg": "59bbe2e77294f229159fb2aeeadcdef0",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_User_add.svg": "ca29f019afc62bb588b34a09551ae19b",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Search.svg": "ae5f4d7aeacf823ef1be5c0b91973920",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_RAR.svg": "27978098749482388b42bcbe5114a530",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_close_black.svg": "1b9deb59c7836e342cf15cfa9112fc3c",
"assets/packages/stream_chat_flutter/lib/svgs/icon_SHARE.svg": "2be93888885f50b0f2641b35ea2f5b5a",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_XLSX.svg": "bf28d69f1f55b6b04d4836a797c14531",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_record.svg": "d1b6755fc495accab05c7e595e2f1fcb",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_message.svg": "0befbb5c5df2a0e601d37f9617e16ca2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_close_sml.svg": "bd3010445035406c174d0137cd1d8893",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_pen-write.svg": "bb0f26bfe3c6e57b1565c24e94dc1909",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_No%2520channel.svg": "da759dbf54a6e0858ede6952f8e5e953",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check_big.svg": "f92095a18204bdca79131e5e295a82e8",
"assets/packages/stream_chat_flutter/lib/svgs/STREAM%2520MARK%25201.svg": "197f0bdae9c937be1ecf4a107cf87d88",
"assets/packages/stream_chat_flutter/lib/svgs/icon_moon.svg": "c70d6c5be8a8f0fa998592f43219cab5",
"assets/packages/stream_chat_flutter/lib/svgs/files.svg": "ad39ce4a4c661f61336bf24b6c7af07b",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_TAR.svg": "60cdea7f8a30e07480badd17f6efe9d9",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_left.svg": "f41c288202a6c657bbc448f78208debb",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_picture.svg": "1b1879a202a491ceb39720a9bd4ded14",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_empty_circle_left.svg": "ba250f5586e12133778a34e43b26a76b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_save.svg": "04476852aec6f14fd7b92145032d3017",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_cloud_download.svg": "481b6ba2aae9f1a229be0ace4fa827ee",
"assets/packages/stream_chat_flutter/lib/svgs/icon_mentions.svg": "47311213de2d3993be49c0b46c1d664c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_thumbs_down_reaction.svg": "f86b823d9a46d2bf6eec90e4cac333a6",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_circle_up.svg": "6040dc689ef0f2f3f69f5b30c64e19d5",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_copy.svg": "fe5d2ae30b229c0662ae79adabb08bb5",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_ZIP.svg": "2b638aac5ccfa6ca35f17cbb4cf282fd",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_DOC.svg": "7bd182d6eb10e2a8ee603514d3aae222",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_download.svg": "c97b54bcd0afbf660eda2a1489f8d346",
"assets/packages/stream_chat_flutter/lib/svgs/settings.svg": "e269c1c8e828e064991aee732716e868",
"assets/packages/stream_chat_flutter/lib/svgs/mentions.svg": "5895f23c2ef7d74ba857402a00b3a7e1",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_search.svg": "96d4562e2662f1c5cf98815fa1b60b0d",
"assets/packages/stream_chat_flutter/lib/svgs/eye-line_big.svg": "c95e43b42a8fe3afcb8f4a9af4ba339e",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PPTX.svg": "c362cf1827e0ec1d78ccd4395d226d4c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_love_reaction.svg": "862f3ed12072950a57d9de07c8b5a8d2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_user_settings.svg": "2289d8af192a558fcad87173b7dae09f",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_html.svg": "6465f1a4a80c2805c2b9894c7f25494a",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_smile.svg": "fcf16ae8a626e1edb9b6b53286f29c83",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_right.svg": "5fd2ba93fe0f2ace64d2eec95e897ac5",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_close.svg": "637cefb508c6c762bc0125510a5e1fce",
"assets/packages/stream_chat_flutter/lib/svgs/flag.svg": "ad96dd68a211f5b61ed14ebdd5155ff2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_mute.svg": "e6d35d5fdc93bd80411ee3b250f95e3c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_lightning-command%2520runner.svg": "bca3bcb8841b25693945aea9f66dbc67",
"assets/packages/stream_chat_flutter/lib/svgs/icon_delete_grey.svg": "b78745df166d13379c2b4727d8c7fc6b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_Thread_Reply.svg": "8a9b5c69f0d5b885ae4a0134d8fb5ea2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_send_message.svg": "415eb57116854b04b92fb92ba7fae9eb",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_edit.svg": "c6c7779ca0a4c02180765e4a538fe07c",
"assets/packages/stream_chat_flutter/lib/svgs/share_arrow.svg": "dc9e58ff41fc98e930c04861edf274a8",
"assets/packages/stream_chat_flutter/lib/svgs/Giphy%2520icon.svg": "1ea05bbb402326e534d905d8a7147d12",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Camera.svg": "a21d5808436e520b533d05383a95c88a",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_user_delete.svg": "ae50b6a2729d61084482ec2f52f2ca6e",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_attach.svg": "f8cbb1f109c479fe8060b7a4373e6282",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_notification.svg": "4d22eb100006d4dc45dfe140b7b5f152",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_User_deselect.svg": "f8307c48bdca665d1e2a6c5b263338f0",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_arrow_right.svg": "cef623b244e5e3de7a7ec2212fe08726",
"assets/packages/stream_chat_flutter/lib/svgs/icon_pin.svg": "9c8a9824e1da800a1246c6f7f0bbbd9e",
"assets/packages/stream_chat_flutter/lib/svgs/UI_Reverse%2520Pagination%2520Loading.svg": "fc48c47d0c4ddf7bbe7f6e4a9fdb19f7",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_time.svg": "87de185a105ee0c3613f4720a0921b6a",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_curve_line_left_up.svg": "37b80269ac16708c0cc93fe7e303de90",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_CSV.svg": "3d5faddc2dce3ab9609dd6cd89f7a4b8",
"assets/packages/stream_chat_flutter/lib/svgs/giphy_icon.svg": "ecb1168250a8e9e5b2df52e0e34a3683",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_delete.svg": "7015c5ebd7d774c5b8de207bebd65e78",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check.svg": "2c04e6ad1230c568ab06d4d23be2ba62",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_thumbs_up_reaction.svg": "0b1f3ccc43d0dd761c21133e3c97e4fe",
"assets/packages/stream_chat_flutter/lib/svgs/icon_flag.svg": "ef5a011e7d58d95065ec24841b3301d9",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_menu_point_v.svg": "c9b71afb8f93f627b209a9c11a755ba4",
"assets/packages/stream_chat_flutter/lib/svgs/pictures.svg": "74b029062379e9719ef7f45da914b3a4",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_circle_right.svg": "063bfba9d4e2adb004ad9cbaf73eaa0b",
"assets/packages/stream_chat_flutter/lib/svgs/volume-up.svg": "5df9a3a183126038faccea9e30e9859a",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Files.svg": "89c153fabdb0c697ea7c5fc38685e9d9",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_DOCX.svg": "71373f44f659d095048eb9fd3bd89dba",
"assets/packages/stream_chat_flutter/lib/svgs/giphy%2520icon%2520blue.svg": "90a9fc1bc3169a4027a7d1e5631f854b",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PDF.svg": "72b645180a4095d5f7c132fe5f1a537f",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_LOL_reaction.svg": "9bdaa10d600b02ff3742ecb9432f8083",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PPT.svg": "86d29f47afd46396973646c12c730813",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_up.svg": "a83cfe5943525699308de701bdc586d9",
"assets/packages/stream_chat_flutter/lib/svgs/icon_retry.svg": "1902bba7b598c43d8f49d9fac3af241b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_group.svg": "2f30b55f82e8dc1d9a5375673fac23b8",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_ODT.svg": "1d888fe0910324b6229f55a8b219f426",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_contacts.svg": "2f30b55f82e8dc1d9a5375673fac23b8",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_Generic.svg": "a6a1c31ed5a6f0312f8fc4faf6f403c8",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check_send.svg": "83e9ec25419bfef4224b6bdbf922d506",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_camera.svg": "2fd8b5ee35c68733e7bd7d4b8ce8b1c3",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_wut_reaction.svg": "7c385077d6c23f869319f9afb54d2c5c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_grid.svg": "069ddcc807baed602f50fa3dcf8219e4",
"assets/packages/stream_chat_flutter/lib/svgs/imgur.svg": "7433ee061b383b75a3db4a78ab2b7476",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_eye-off.svg": "16a86807a0edab18315b2063befa04b3",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_user.svg": "288f7d3f089636d4643a6de75f3dc7c6",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_XLS.svg": "8fd7b98002bdfe53422c79cf1a0f4db8",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_down.svg": "b8eff7450293b41cec3759a29ac536b6",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_curve_line_left_up_big.svg": "b963e0bfb52513c29cbd409ef1c30c6d",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PPTX-1.svg": "bf49d89aff0be4b06ff062185cbd8195",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_7z.svg": "1b4cb1160bc61b31c7dd8f3daa5eeac9",
"assets/packages/stream_chat_flutter/animations/typing_dots.json": "3da1c94690095d3a96014b4c695227b7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/item1.png": "4c7b5339c94e4997edec00e740e8a53d",
"assets/assets/images/icon_mapa.png": "95c572e2782127e4670f0bf90f9968a1",
"assets/assets/images/splashscreen.png": "5cf4cc1efda49d4c2ac75d56b64d8dc6",
"assets/assets/images/pdf-1.png": "f6fcd47cae95fbf82efc0724ecf42634",
"assets/assets/images/item2.png": "a2e0a4215a690271fa0dd55378a6e6a0",
"assets/assets/images/icon_close.png": "00ab2486613c42a193c800fb79d0f5e0",
"assets/assets/images/icon_contacto.png": "5d6101cff399c63c7ec5fb3955c4b247",
"assets/assets/images/book.png": "2fc6f2079bf1ce5fba96a71addb206a8",
"assets/assets/images/login.png": "ae88d9a4a174158045360398dd549766",
"assets/assets/images/icon_word.png": "e8eea82e89fa3a8ed1c657eef8e76adf",
"assets/assets/images/background_end.png": "5dd1b57b68f405052070dc7d8993f746",
"assets/assets/images/logoappl.png": "d6e197a234dd0f31bd334c263188cb06",
"assets/assets/images/hlogin.png": "25eb3e2acd7be074f1e19b18264a30d8",
"assets/assets/images/no-image.jpg": "335ceba57475f3c45f0d82f04b987bfa",
"assets/assets/images/icon_wallet.png": "a349fdc2260a1489cc73f040e2076ba4",
"assets/assets/images/icon_money.png": "516f14d158562408e600ca1057e7e411",
"assets/assets/images/Grupo664.png": "578d432b54bdb00ed1cbd51a90af035f",
"assets/assets/images/maqueta.png": "c4eab90a31f0e29e80868aca1b74c89d",
"assets/assets/images/workingman.png": "78c3e8bd025393ce3935ec0c8d8eb9b3",
"assets/assets/images/logogoogle.png": "8283dd6d1819478f9d800894921cd1c5",
"assets/assets/images/loadingcreateproject.png": "b1243150b3d50cdf7d5919201afa5618",
"assets/assets/images/p3.png": "58c2b2468161ec5e751a4882d599829d",
"assets/assets/images/sptep.png": "c313664a0cbca0a21bd99bf868aa125b",
"assets/assets/images/card3.png": "ac6dc1d33b6a6a37e91bbba1f952b27c",
"assets/assets/images/card2.png": "ebe166f81b2ff9d40cc2a37dd5d3bfd3",
"assets/assets/images/p2.png": "25b07887eb5f4355c824f1d5c96a9004",
"assets/assets/images/splash.png": "3b720cffc994783143ae2851b7b84d97",
"assets/assets/images/sp_laucncher.png": "b31278faac8b6a681af59bf7e42000ba",
"assets/assets/images/icon_building.png": "91e396f9163615e9154ab56b947b01fc",
"assets/assets/images/card1.png": "791b725eece7d2d96ee3182968a37e5b",
"assets/assets/images/p1.png": "6f535f7f3feee8f7a1b1603bcf843bc0",
"assets/assets/images/screen1.gif": "0f8edcebe733c3fefcaf2d98c73f68e0",
"assets/assets/images/Grupo656.png": "594d163d23c4144f068e483f102fd71e",
"assets/assets/images/on2.png": "53670617461fcdbd5b5af218f12601d0",
"assets/assets/images/icon_paint.png": "f90a312200dd329f261696a4715f2e21",
"assets/assets/images/stepper2.png": "e7c92abc094900024e66b88e79821b19",
"assets/assets/images/stepper3.png": "b29840965e43533415188b762946a6d8",
"assets/assets/images/on3.png": "f714cb7e0ba9cc62f1e82e068b12ef44",
"assets/assets/images/equipo.png": "8abc5a7b142d5e514d5d9cb924ac92aa",
"assets/assets/images/p4.png": "1cc1d30810e62c0ce4cca33b038a7ff2",
"assets/assets/images/screen2.gif": "8f44a6a9197016352daba104fec5f210",
"assets/assets/images/gantt.png": "8694d46eb6e07e47f06872aed0afe169",
"assets/assets/images/on1.png": "d57e13654ffa5443b8e78a8c3334b4a5",
"assets/assets/images/icon_configuracion.png": "490f6173d9ef351033609c42615c5062",
"assets/assets/images/location.png": "482eb87a1b29f45bc0f86badecdd1aab",
"assets/assets/images/screen3.gif": "ff165b3bbf8c57f360cea706eb6e2068",
"assets/assets/images/mes.png": "e60ecf32eab25d284614ae438bb97177",
"assets/assets/images/icon_calendario.png": "e2625ddb246ac8c8653650148c460d46",
"assets/assets/images/icon_add.png": "16509095deb80d416c26377097cbf08d",
"assets/assets/images/reel.png": "1cd3c9c6f1541cb430dc896758e10d61",
"assets/assets/images/icon_bell.png": "a3f4384e6c3cc4004340658e1bbb6e2e",
"assets/assets/images/icon_prefrec.png": "ed582d18319b77bf8f861fd463a3af03",
"assets/assets/images/icon_check.png": "e92b0453e63fc91a0c0773bf6d72528b",
"assets/assets/images/icon_mail.png": "445e617587a59d74a9fde9745643a5b0",
"assets/assets/images/icon_main.png": "9fa2ed2dff6b924c3f75e63776559bdb",
"assets/assets/images/iconmenuhome.png": "c75761d574733aa85744a7ffae187e66",
"assets/assets/images/Grupo623.png": "32d889c4a97d9eac6f71eafad7b6e336",
"assets/assets/images/icon_rule.png": "994e62bdeaafd9252d1233388b49cb8f",
"assets/assets/google_fonts/RedHatText-Medium.ttf": "03f7db4cb3d64ea78d74865f25a7d8c0",
"assets/assets/google_fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/google_fonts/OFL.txt": "df9b38689676468d7a83a86a5f50f7fb",
"assets/assets/google_fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
