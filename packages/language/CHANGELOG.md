# Changelog

## [2.0.0-alpha.3](https://github.com/wittech/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-10-06)


### Features

* JetBrains plugin for ZModel ([#904](https://github.com/wittech/zenstack/issues/904)) ([c79be9e](https://github.com/wittech/zenstack/commit/c79be9eb7f6b602bc84214bded2b927935b6273a))
* make parameters of transactions configurable ([#988](https://github.com/wittech/zenstack/issues/988)) ([d0745b1](https://github.com/wittech/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))


### Bug Fixes

* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/wittech/zenstack/issues/677)) ([df67f30](https://github.com/wittech/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* allow "view" and "import" as identifier ([#750](https://github.com/wittech/zenstack/issues/750)) ([2e15dfb](https://github.com/wittech/zenstack/commit/2e15dfb747fa871a5b25661e3e320a1a5f3cc92a))
* allow models without field declarations ([#749](https://github.com/wittech/zenstack/issues/749)) ([43322e1](https://github.com/wittech/zenstack/commit/43322e111adfc7d888aa8dc04445a5b0f8c2dbcc))
* build, lint and etc. ([#833](https://github.com/wittech/zenstack/issues/833)) ([cccbc3c](https://github.com/wittech/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* change back to loading from literal ".zenstack" path otherwise Vercel breaks :( ([#701](https://github.com/wittech/zenstack/issues/701)) ([2d41a9f](https://github.com/wittech/zenstack/commit/2d41a9fcffab2fa228356a5cc45b4c2ecd62fd63))
* clean up zod generation ([#883](https://github.com/wittech/zenstack/issues/883)) ([909281f](https://github.com/wittech/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/wittech/zenstack/issues/883)) ([9d4a8ed](https://github.com/wittech/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* **delegate:** base fields not properly wrapped inside relation layer when injected from policies ([#1736](https://github.com/wittech/zenstack/issues/1736)) ([bfe6983](https://github.com/wittech/zenstack/commit/bfe698390c689dbe4350f7989cc6a1974ff1aad5))
* enable auto completion inside attribute ([#949](https://github.com/wittech/zenstack/issues/949)) ([20d5bfc](https://github.com/wittech/zenstack/commit/20d5bfc506a42b520eb1cf390149b7afc7c38701))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/wittech/zenstack/issues/851)) ([ea564c9](https://github.com/wittech/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* incorrect cross-model comparision for && and || expressions ([#1512](https://github.com/wittech/zenstack/issues/1512)) ([908048b](https://github.com/wittech/zenstack/commit/908048b01430ff6552e8df558d5b5905136ea5cc))
* incorrect reverse query built for to-many relation ([#815](https://github.com/wittech/zenstack/issues/815)) ([2c345e1](https://github.com/wittech/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* infinite recursion when injecting field selection for field-level permission check ([#1452](https://github.com/wittech/zenstack/issues/1452)) ([29962e0](https://github.com/wittech/zenstack/commit/29962e0b48a73ae6d42f43f2575048ba9cf6a953))
* issue [#627](https://github.com/wittech/zenstack/issues/627) ([#628](https://github.com/wittech/zenstack/issues/628)) ([2ef93cb](https://github.com/wittech/zenstack/commit/2ef93cb932e7aed6923cd3d7e69069d0c9ff161b))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/wittech/zenstack/issues/962)) ([2b2bfcf](https://github.com/wittech/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issues with cross-model comparison identification and injection ([#1508](https://github.com/wittech/zenstack/issues/1508)) ([665f9b3](https://github.com/wittech/zenstack/commit/665f9b33b58acc5170c4ccb8e73be525fbb89734))
* number literal precision issue ([#659](https://github.com/wittech/zenstack/issues/659)) ([6275701](https://github.com/wittech/zenstack/commit/627570166f858488aa7fb6a6291fccfadb0d9f9f))
* post-update rules incorrectly reject update ([#826](https://github.com/wittech/zenstack/issues/826)) ([d921a7c](https://github.com/wittech/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/wittech/zenstack/issues/826)) ([e85831e](https://github.com/wittech/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* support for string escaping in ZModel ([#668](https://github.com/wittech/zenstack/issues/668)) ([f034839](https://github.com/wittech/zenstack/commit/f034839867fa438da866bd87548b4a18246dee21))
* support postgres extensions ([#718](https://github.com/wittech/zenstack/issues/718)) ([cdc98e0](https://github.com/wittech/zenstack/commit/cdc98e08224a23ea3f6e5d620c11c90a34ed6435))
* support string literal keys for object expressions in ZModel ([#752](https://github.com/wittech/zenstack/issues/752)) ([22b1bf9](https://github.com/wittech/zenstack/commit/22b1bf9ddd4062000f2cd7d183e004dd3d5917c6))
* supporting using type names as reference target as well ([d17a85c](https://github.com/wittech/zenstack/commit/d17a85c1020d616085e7957816c17d7481894169))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/wittech/zenstack/issues/995)) ([541cd97](https://github.com/wittech/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* **tanstack:** incorrect InfiniteData import for vue-query ([#1498](https://github.com/wittech/zenstack/issues/1498)) ([92f187f](https://github.com/wittech/zenstack/commit/92f187f9190517df5baca795f12386c12c6694e9))
* unintended changes to "backlink" of abstract model's metadata ([#1691](https://github.com/wittech/zenstack/issues/1691)) ([9e93985](https://github.com/wittech/zenstack/commit/9e93985589abc4d22eba433b7927193b4fd405a6))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/wittech/zenstack/issues/625)) ([f6b68da](https://github.com/wittech/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))
* **zmodel:** allow type names to be used as declaration names ([#1424](https://github.com/wittech/zenstack/issues/1424)) ([5806a4d](https://github.com/wittech/zenstack/commit/5806a4dc4585293e1da746bdc1485c54d7e993b7))
* **zmodel:** fix grammar ambiguity ([#1433](https://github.com/wittech/zenstack/issues/1433)) ([2c7c82b](https://github.com/wittech/zenstack/commit/2c7c82b29f54a7df4752aa74dfcda2c8f0a69a24))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
