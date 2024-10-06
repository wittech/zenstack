# Changelog

## [2.0.0-alpha.3](https://github.com/wittech/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-10-06)


### Features

* add "loadPath" options to runtime API and server adapter options ([#696](https://github.com/wittech/zenstack/issues/696)) ([fc50deb](https://github.com/wittech/zenstack/commit/fc50deb6e70acc78dcb66b17e564a6fc84475970))
* add switch to zod plugin to control whether unchecked input types are generated ([#693](https://github.com/wittech/zenstack/issues/693)) ([cea2019](https://github.com/wittech/zenstack/commit/cea2019aee4f27ff4bf12677906a48daa91aa854))
* automatic optimistic update for tanstack hooks ([#830](https://github.com/wittech/zenstack/issues/830)) ([93dc7df](https://github.com/wittech/zenstack/commit/93dc7df472427a4546ba71ec3703135d2d638ded))
* fluent API support ([#666](https://github.com/wittech/zenstack/issues/666)) ([4ae5a96](https://github.com/wittech/zenstack/commit/4ae5a96ee2976dedbdb0b207f48c082c48b3f9ce))
* implementing permission checker ([#1411](https://github.com/wittech/zenstack/issues/1411)) ([0aa6ee9](https://github.com/wittech/zenstack/commit/0aa6ee961bab005705287184b670ae9a3a57f06d))
* include raw zod errors in response ([#691](https://github.com/wittech/zenstack/issues/691)) ([b5da998](https://github.com/wittech/zenstack/commit/b5da998b7fa11c19b85cebd0956803d854332b4d))
* JetBrains plugin for ZModel ([#904](https://github.com/wittech/zenstack/issues/904)) ([c79be9e](https://github.com/wittech/zenstack/commit/c79be9eb7f6b602bc84214bded2b927935b6273a))
* make parameters of transactions configurable ([#988](https://github.com/wittech/zenstack/issues/988)) ([d0745b1](https://github.com/wittech/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* **nestjs:** Add prop as optional parameter of getEnhancedPrisma [#1537](https://github.com/wittech/zenstack/issues/1537) ([#1538](https://github.com/wittech/zenstack/issues/1538)) ([4672875](https://github.com/wittech/zenstack/commit/46728754d9da71c71f7eb9fc53ecbaf559bf7438))
* Nuxt server adapter and tanstack-query for "vue" hooks generation ([#757](https://github.com/wittech/zenstack/issues/757)) ([033d95d](https://github.com/wittech/zenstack/commit/033d95dcdeef67bc8183d1daeb3172ec9ee02b9b))


### Bug Fixes

* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/wittech/zenstack/issues/677)) ([df67f30](https://github.com/wittech/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* **api:** support filtering with comma-separated values in rest handler ([#1620](https://github.com/wittech/zenstack/issues/1620)) ([fdbc8cf](https://github.com/wittech/zenstack/commit/fdbc8cf493f9b3543c0a8128e4ce5416497eeef1))
* build, lint and etc. ([#833](https://github.com/wittech/zenstack/issues/833)) ([cccbc3c](https://github.com/wittech/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* change back to loading from literal ".zenstack" path otherwise Vercel breaks :( ([#701](https://github.com/wittech/zenstack/issues/701)) ([2d41a9f](https://github.com/wittech/zenstack/commit/2d41a9fcffab2fa228356a5cc45b4c2ecd62fd63))
* clean up zod generation ([#883](https://github.com/wittech/zenstack/issues/883)) ([909281f](https://github.com/wittech/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/wittech/zenstack/issues/883)) ([9d4a8ed](https://github.com/wittech/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* **delegate:** base fields not properly wrapped inside relation layer when injected from policies ([#1736](https://github.com/wittech/zenstack/issues/1736)) ([bfe6983](https://github.com/wittech/zenstack/commit/bfe698390c689dbe4350f7989cc6a1974ff1aad5))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/wittech/zenstack/issues/851)) ([ea564c9](https://github.com/wittech/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* fastify plugin correctly returning the reply [#684](https://github.com/wittech/zenstack/issues/684) ([#685](https://github.com/wittech/zenstack/issues/685)) ([7a04ce5](https://github.com/wittech/zenstack/commit/7a04ce5ad0a208fb05887198b8b598742834a15b))
* generate both cjs and esm builds for swr plugin ([#892](https://github.com/wittech/zenstack/issues/892)) ([385839f](https://github.com/wittech/zenstack/commit/385839f101941234c5293d70d07e064c1c458387))
* incorrect cross-model comparision for && and || expressions ([#1512](https://github.com/wittech/zenstack/issues/1512)) ([908048b](https://github.com/wittech/zenstack/commit/908048b01430ff6552e8df558d5b5905136ea5cc))
* incorrect reverse query built for to-many relation ([#815](https://github.com/wittech/zenstack/issues/815)) ([2c345e1](https://github.com/wittech/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* infinite recursion when injecting field selection for field-level permission check ([#1452](https://github.com/wittech/zenstack/issues/1452)) ([29962e0](https://github.com/wittech/zenstack/commit/29962e0b48a73ae6d42f43f2575048ba9cf6a953))
* issue [#627](https://github.com/wittech/zenstack/issues/627) ([#628](https://github.com/wittech/zenstack/issues/628)) ([2ef93cb](https://github.com/wittech/zenstack/commit/2ef93cb932e7aed6923cd3d7e69069d0c9ff161b))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/wittech/zenstack/issues/962)) ([2b2bfcf](https://github.com/wittech/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issue with client typing generation in trpc plugin ([#673](https://github.com/wittech/zenstack/issues/673)) ([576c4f7](https://github.com/wittech/zenstack/commit/576c4f7a4858dfa2dcb9c1a7f75af8d1ca48a8ce))
* issues with cross-model comparison identification and injection ([#1508](https://github.com/wittech/zenstack/issues/1508)) ([665f9b3](https://github.com/wittech/zenstack/commit/665f9b33b58acc5170c4ccb8e73be525fbb89734))
* post-update rules incorrectly reject update ([#826](https://github.com/wittech/zenstack/issues/826)) ([d921a7c](https://github.com/wittech/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/wittech/zenstack/issues/826)) ([e85831e](https://github.com/wittech/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* **redwood:** fix incorrect error type thrown ([#1659](https://github.com/wittech/zenstack/issues/1659)) ([1d81325](https://github.com/wittech/zenstack/commit/1d81325696076038483a3c30a93962d0d91afb23))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/wittech/zenstack/issues/995)) ([541cd97](https://github.com/wittech/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* **tanstack:** incorrect InfiniteData import for vue-query ([#1498](https://github.com/wittech/zenstack/issues/1498)) ([92f187f](https://github.com/wittech/zenstack/commit/92f187f9190517df5baca795f12386c12c6694e9))
* unintended changes to "backlink" of abstract model's metadata ([#1691](https://github.com/wittech/zenstack/issues/1691)) ([9e93985](https://github.com/wittech/zenstack/commit/9e93985589abc4d22eba433b7927193b4fd405a6))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/wittech/zenstack/issues/625)) ([f6b68da](https://github.com/wittech/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))
* **zod:** add coercion call when generating schema for DateTime field ([#1068](https://github.com/wittech/zenstack/issues/1068)) ([b60627c](https://github.com/wittech/zenstack/commit/b60627c167706728ac232ce06366d914e3dde23f))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
