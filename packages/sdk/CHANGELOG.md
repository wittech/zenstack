# Changelog

## [2.0.0-alpha.3](https://github.com/wittech/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-10-06)


### Features

* add @[@auth](https://github.com/auth) option for declaring auth model ([#787](https://github.com/wittech/zenstack/issues/787)) ([c390de1](https://github.com/wittech/zenstack/commit/c390de10cfa91ae3f954404bc07e0905973b0898))
* add support for comparing fields in the same model ([#631](https://github.com/wittech/zenstack/issues/631)) ([4776685](https://github.com/wittech/zenstack/commit/477668579e3d95e7371ca752244ad2e319a96477))
* allow comparing fields from different models in mutation policies ([#1476](https://github.com/wittech/zenstack/issues/1476)) ([6610bd0](https://github.com/wittech/zenstack/commit/6610bd09f8d43b62b073044bb60a8a3cc40ef9e2))
* automatic optimistic update for tanstack hooks ([#830](https://github.com/wittech/zenstack/issues/830)) ([93dc7df](https://github.com/wittech/zenstack/commit/93dc7df472427a4546ba71ec3703135d2d638ded))
* field-level access control ([#638](https://github.com/wittech/zenstack/issues/638)) ([9a6f39b](https://github.com/wittech/zenstack/commit/9a6f39bdb8940f7cef89fd7ee423658b8ed4c49f))
* implement relation check() function in ZModel ([#1556](https://github.com/wittech/zenstack/issues/1556)) ([be82307](https://github.com/wittech/zenstack/commit/be8230715cfc5b2a83f378645146a0c0e9222491))
* implementing permission checker ([#1411](https://github.com/wittech/zenstack/issues/1411)) ([0aa6ee9](https://github.com/wittech/zenstack/commit/0aa6ee961bab005705287184b670ae9a3a57f06d))
* improved automatic query invalidation for tanstack-query ([#790](https://github.com/wittech/zenstack/issues/790)) ([42d654f](https://github.com/wittech/zenstack/commit/42d654fcfaa40b09fde578db79792c69e1e3b908))
* make parameters of transactions configurable ([#988](https://github.com/wittech/zenstack/issues/988)) ([d0745b1](https://github.com/wittech/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* runtime support for custom `@[@auth](https://github.com/auth)` model ([#793](https://github.com/wittech/zenstack/issues/793)) ([08b9677](https://github.com/wittech/zenstack/commit/08b967735c938de1e770a2409c36c5a50173b01d))
* support configuring what models to include for zod and trpc plugins ([#747](https://github.com/wittech/zenstack/issues/747)) ([a5d15a3](https://github.com/wittech/zenstack/commit/a5d15a30e7a22a3e875cc974391feb9ad6da7646))


### Bug Fixes

* [ZModelCodeGenerator] Remove the extra space between the collection predicate operator ([#839](https://github.com/wittech/zenstack/issues/839)) ([9a0895b](https://github.com/wittech/zenstack/commit/9a0895bedd82b429ddcc45db4cee0f9e82c54198))
* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/wittech/zenstack/issues/677)) ([df67f30](https://github.com/wittech/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* auth() cannot be resolved if the auth model is marked @[@ignore](https://github.com/ignore) ([#844](https://github.com/wittech/zenstack/issues/844)) ([73f2cec](https://github.com/wittech/zenstack/commit/73f2cec82fea64cea05f7306523f7c6f9ac91f84))
* avoid importing prisma-related code into language server ([#1441](https://github.com/wittech/zenstack/issues/1441)) ([b22c6a3](https://github.com/wittech/zenstack/commit/b22c6a3ce238ec766d910f23e83aea4e8f10c05d))
* bugs related to model name casing ([#645](https://github.com/wittech/zenstack/issues/645)) ([32d5b26](https://github.com/wittech/zenstack/commit/32d5b262cacdd03209a56027e4c2cbda1bc408c0))
* build, lint and etc. ([#833](https://github.com/wittech/zenstack/issues/833)) ([cccbc3c](https://github.com/wittech/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* change back to loading from literal ".zenstack" path otherwise Vercel breaks :( ([#701](https://github.com/wittech/zenstack/issues/701)) ([2d41a9f](https://github.com/wittech/zenstack/commit/2d41a9fcffab2fa228356a5cc45b4c2ecd62fd63))
* clean up zod generation ([#883](https://github.com/wittech/zenstack/issues/883)) ([909281f](https://github.com/wittech/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/wittech/zenstack/issues/883)) ([9d4a8ed](https://github.com/wittech/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* **cli:** avoid unnecessary updates to model meta ([#1636](https://github.com/wittech/zenstack/issues/1636)) ([715f2dd](https://github.com/wittech/zenstack/commit/715f2dd2a569233d02eb7d5b81b37d9ce5677075))
* compatibility with Prisma's "omit" feature ([#1432](https://github.com/wittech/zenstack/issues/1432)) ([296ca25](https://github.com/wittech/zenstack/commit/296ca259c8dd3e38fa988378df4a9e351a11b20b))
* **delegate:** base fields not properly wrapped inside relation layer when injected from policies ([#1736](https://github.com/wittech/zenstack/issues/1736)) ([bfe6983](https://github.com/wittech/zenstack/commit/bfe698390c689dbe4350f7989cc6a1974ff1aad5))
* **delegate:** entity create fails when inheriting from a delegate model that extends an abstract model ([#1561](https://github.com/wittech/zenstack/issues/1561)) ([ac2b291](https://github.com/wittech/zenstack/commit/ac2b291bde3d0f66684784c7bc8694c027827319))
* **delegate:** update with "connect" is not properly rejected for polymorphic models ([#1675](https://github.com/wittech/zenstack/issues/1675)) ([0b466bf](https://github.com/wittech/zenstack/commit/0b466bf346bbbd981929a797d717830198e43724))
* enable auto completion inside attribute ([#949](https://github.com/wittech/zenstack/issues/949)) ([20d5bfc](https://github.com/wittech/zenstack/commit/20d5bfc506a42b520eb1cf390149b7afc7c38701))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/wittech/zenstack/issues/851)) ([ea564c9](https://github.com/wittech/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* incorrect calculation of backlink field for self-relations ([#1540](https://github.com/wittech/zenstack/issues/1540)) ([303f103](https://github.com/wittech/zenstack/commit/303f103e0e541e3e7e64711b3731ff4b2555fe62))
* incorrect cross-model comparision for && and || expressions ([#1512](https://github.com/wittech/zenstack/issues/1512)) ([908048b](https://github.com/wittech/zenstack/commit/908048b01430ff6552e8df558d5b5905136ea5cc))
* incorrect reverse query built for to-many relation ([#815](https://github.com/wittech/zenstack/issues/815)) ([2c345e1](https://github.com/wittech/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* infinite recursion when injecting field selection for field-level permission check ([#1452](https://github.com/wittech/zenstack/issues/1452)) ([29962e0](https://github.com/wittech/zenstack/commit/29962e0b48a73ae6d42f43f2575048ba9cf6a953))
* issue [#627](https://github.com/wittech/zenstack/issues/627) ([#628](https://github.com/wittech/zenstack/issues/628)) ([2ef93cb](https://github.com/wittech/zenstack/commit/2ef93cb932e7aed6923cd3d7e69069d0c9ff161b))
* issue 961, incorrect policy injection for nested `updateMany` ([bf690a0](https://github.com/wittech/zenstack/commit/bf690a072771ab95907a8f56079c4f6aaf655849))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/wittech/zenstack/issues/962)) ([2b2bfcf](https://github.com/wittech/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issues with cross-model comparison identification and injection ([#1508](https://github.com/wittech/zenstack/issues/1508)) ([665f9b3](https://github.com/wittech/zenstack/commit/665f9b33b58acc5170c4ccb8e73be525fbb89734))
* make sure fields inherited from  abstract base models are properly recognized as id ([#1130](https://github.com/wittech/zenstack/issues/1130)) ([4d9d093](https://github.com/wittech/zenstack/commit/4d9d09338ae88eac331ec06ec908ca1256f5b8a5))
* model meta generator doesn't correctly identify relation names ([#1244](https://github.com/wittech/zenstack/issues/1244)) ([4c7fbd4](https://github.com/wittech/zenstack/commit/4c7fbd480214f1e2508fc9a520c571f6274dce8f))
* post-update rules incorrectly reject update ([#826](https://github.com/wittech/zenstack/issues/826)) ([d921a7c](https://github.com/wittech/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/wittech/zenstack/issues/826)) ([e85831e](https://github.com/wittech/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* prisma schema generation issue with calling attribute function with literal ([#930](https://github.com/wittech/zenstack/issues/930)) ([91fe8e7](https://github.com/wittech/zenstack/commit/91fe8e71b513804de36d08b03c37b0c175580906))
* **runtime:** always use id fields to address existing entity during upsert ([#1273](https://github.com/wittech/zenstack/issues/1273)) ([d8c1513](https://github.com/wittech/zenstack/commit/d8c15135a7edb75b459b6f5f1736e5fa2d96a9fa))
* support for Prisma 5.16.0 ([#1541](https://github.com/wittech/zenstack/issues/1541)) ([0a293ca](https://github.com/wittech/zenstack/commit/0a293ca0afebee621848463e05408a39dfa934e2))
* support postgres extensions ([#718](https://github.com/wittech/zenstack/issues/718)) ([cdc98e0](https://github.com/wittech/zenstack/commit/cdc98e08224a23ea3f6e5d620c11c90a34ed6435))
* support string literal keys for object expressions in ZModel ([#752](https://github.com/wittech/zenstack/issues/752)) ([22b1bf9](https://github.com/wittech/zenstack/commit/22b1bf9ddd4062000f2cd7d183e004dd3d5917c6))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/wittech/zenstack/issues/995)) ([541cd97](https://github.com/wittech/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* **tanstack:** incorrect InfiniteData import for vue-query ([#1498](https://github.com/wittech/zenstack/issues/1498)) ([92f187f](https://github.com/wittech/zenstack/commit/92f187f9190517df5baca795f12386c12c6694e9))
* unintended changes to "backlink" of abstract model's metadata ([#1691](https://github.com/wittech/zenstack/issues/1691)) ([9e93985](https://github.com/wittech/zenstack/commit/9e93985589abc4d22eba433b7927193b4fd405a6))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/wittech/zenstack/issues/625)) ([f6b68da](https://github.com/wittech/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))
* vscode language accidentally bundles prisma packages ([#623](https://github.com/wittech/zenstack/issues/623)) ([a81913e](https://github.com/wittech/zenstack/commit/a81913e69d3533874c038279d1d4d226ad685d8d))
* **zmodel:** enum is resolved to wrong element after merging base models ([#1437](https://github.com/wittech/zenstack/issues/1437)) ([6852958](https://github.com/wittech/zenstack/commit/68529580028dfcfce50cb9af78a9b67d72e2a6a5))
* zod and openapi generation error when "fullTextSearch" is enabled ([#658](https://github.com/wittech/zenstack/issues/658)) ([0cb7cd1](https://github.com/wittech/zenstack/commit/0cb7cd1ae5e8c5d4a72d0891c9624291aafcbcd8))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
