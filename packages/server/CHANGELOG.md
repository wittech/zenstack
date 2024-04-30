# Changelog

## [2.0.0-alpha.3](https://github.com/wittech/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-04-30)


### Features

* a better "zod" plugin ([#521](https://github.com/wittech/zenstack/issues/521)) ([2280f83](https://github.com/wittech/zenstack/commit/2280f83cd7f1f597fddfd6ab0c99417200124452))
* add "loadPath" options to runtime API and server adapter options ([#696](https://github.com/wittech/zenstack/issues/696)) ([fc50deb](https://github.com/wittech/zenstack/commit/fc50deb6e70acc78dcb66b17e564a6fc84475970))
* add switch to zod plugin to control whether unchecked input types are generated ([#693](https://github.com/wittech/zenstack/issues/693)) ([cea2019](https://github.com/wittech/zenstack/commit/cea2019aee4f27ff4bf12677906a48daa91aa854))
* always use superjson to serialize/deserialize in the api layer ([#585](https://github.com/wittech/zenstack/issues/585)) ([46fec66](https://github.com/wittech/zenstack/commit/46fec666c3af971010c69e467f08f55830655441))
* automatic optimistic update for tanstack hooks ([#830](https://github.com/wittech/zenstack/issues/830)) ([93dc7df](https://github.com/wittech/zenstack/commit/93dc7df472427a4546ba71ec3703135d2d638ded))
* copy nextjs adapter over to `server` package ([#420](https://github.com/wittech/zenstack/issues/420)) ([f79902a](https://github.com/wittech/zenstack/commit/f79902a92622b6755afceda58a9c5b91f2b926b9))
* fluent API support ([#666](https://github.com/wittech/zenstack/issues/666)) ([4ae5a96](https://github.com/wittech/zenstack/commit/4ae5a96ee2976dedbdb0b207f48c082c48b3f9ce))
* implement filter operators in restful service ([#411](https://github.com/wittech/zenstack/issues/411)) ([52f44c5](https://github.com/wittech/zenstack/commit/52f44c5ee7c34622f1ae53076e6249125b83f566))
* implementing sveltekit adapter and refactor server package ([#418](https://github.com/wittech/zenstack/issues/418)) ([53716c9](https://github.com/wittech/zenstack/commit/53716c99c35d32767354729f372f2f15f1a478b2))
* include raw zod errors in response ([#691](https://github.com/wittech/zenstack/issues/691)) ([b5da998](https://github.com/wittech/zenstack/commit/b5da998b7fa11c19b85cebd0956803d854332b4d))
* JetBrains plugin for ZModel ([#904](https://github.com/wittech/zenstack/issues/904)) ([c79be9e](https://github.com/wittech/zenstack/commit/c79be9eb7f6b602bc84214bded2b927935b6273a))
* make nextjs adapter support next 13 app dir ([#483](https://github.com/wittech/zenstack/issues/483)) ([a078b23](https://github.com/wittech/zenstack/commit/a078b23a1afd799ba9aba50b82d497851160ef24))
* make parameters of transactions configurable ([#988](https://github.com/wittech/zenstack/issues/988)) ([d0745b1](https://github.com/wittech/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* Nuxt server adapter and tanstack-query for "vue" hooks generation ([#757](https://github.com/wittech/zenstack/issues/757)) ([033d95d](https://github.com/wittech/zenstack/commit/033d95dcdeef67bc8183d1daeb3172ec9ee02b9b))
* options for logging queries sent to prisma ([#488](https://github.com/wittech/zenstack/issues/488)) ([ccfb2b0](https://github.com/wittech/zenstack/commit/ccfb2b088cf1ce14c78c1d1355db5cb4ebcdc957))
* RESTful style server API handler ([#405](https://github.com/wittech/zenstack/issues/405)) ([f07ccdd](https://github.com/wittech/zenstack/commit/f07ccdded01e232823e3955ab1ffc19b1c8f33a1))
* support Prisma v5 ([#587](https://github.com/wittech/zenstack/issues/587)) ([b0d9154](https://github.com/wittech/zenstack/commit/b0d9154270a89c6c93c7a8f1aada85c413d16d6f))


### Bug Fixes

* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/wittech/zenstack/issues/677)) ([df67f30](https://github.com/wittech/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* add `CheckSelect` type into code for Prisma version backward compatibility ([#619](https://github.com/wittech/zenstack/issues/619)) ([3e09a3a](https://github.com/wittech/zenstack/commit/3e09a3a6646ae0f6e393cc0f92991c9b5d0c4d29))
* build, lint and etc. ([#833](https://github.com/wittech/zenstack/issues/833)) ([cccbc3c](https://github.com/wittech/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* change back to loading from literal ".zenstack" path otherwise Vercel breaks :( ([#701](https://github.com/wittech/zenstack/issues/701)) ([2d41a9f](https://github.com/wittech/zenstack/commit/2d41a9fcffab2fa228356a5cc45b4c2ecd62fd63))
* change openapi plugin's default flavor to "rpc" ([#439](https://github.com/wittech/zenstack/issues/439)) ([ec65e53](https://github.com/wittech/zenstack/commit/ec65e53f202e3e02ea98a9c88682c106dcbafc76))
* clean up zod generation ([#883](https://github.com/wittech/zenstack/issues/883)) ([909281f](https://github.com/wittech/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/wittech/zenstack/issues/883)) ([9d4a8ed](https://github.com/wittech/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* disable eslint in generated hooks, refactor package inter-dependencies ([9e84126](https://github.com/wittech/zenstack/commit/9e8412645e06f0bf63f85c8bb61ad00384fdef99))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/wittech/zenstack/issues/851)) ([ea564c9](https://github.com/wittech/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* fastify plugin correctly returning the reply [#684](https://github.com/wittech/zenstack/issues/684) ([#685](https://github.com/wittech/zenstack/issues/685)) ([7a04ce5](https://github.com/wittech/zenstack/commit/7a04ce5ad0a208fb05887198b8b598742834a15b))
* generate both cjs and esm builds for swr plugin ([#892](https://github.com/wittech/zenstack/issues/892)) ([385839f](https://github.com/wittech/zenstack/commit/385839f101941234c5293d70d07e064c1c458387))
* hooks generation emits Provider export for backward compatibility ([#594](https://github.com/wittech/zenstack/issues/594)) ([ca3ebda](https://github.com/wittech/zenstack/commit/ca3ebdae4e213d3901bb5834fd9ebf1217da94a7))
* improve consistency of generated guard code ([#616](https://github.com/wittech/zenstack/issues/616)) ([1b7b5bd](https://github.com/wittech/zenstack/commit/1b7b5bda3f5106d31b7f5e70be27158fb8217600))
* incorrect relation owner analysis ([#610](https://github.com/wittech/zenstack/issues/610)) ([c89012b](https://github.com/wittech/zenstack/commit/c89012bcb8d32588cc7f5a1df19088292e571cec))
* incorrect reverse query built for to-many relation ([#815](https://github.com/wittech/zenstack/issues/815)) ([2c345e1](https://github.com/wittech/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* issue [#627](https://github.com/wittech/zenstack/issues/627) ([#628](https://github.com/wittech/zenstack/issues/628)) ([2ef93cb](https://github.com/wittech/zenstack/commit/2ef93cb932e7aed6923cd3d7e69069d0c9ff161b))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/wittech/zenstack/issues/962)) ([2b2bfcf](https://github.com/wittech/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issue with client typing generation in trpc plugin ([#673](https://github.com/wittech/zenstack/issues/673)) ([576c4f7](https://github.com/wittech/zenstack/commit/576c4f7a4858dfa2dcb9c1a7f75af8d1ca48a8ce))
* issue with connecting multiple relations ([#450](https://github.com/wittech/zenstack/issues/450)) ([dd6be95](https://github.com/wittech/zenstack/commit/dd6be9509c46fd4dfff500a53070259410b6a61f))
* make core plugins compile generated ts files by default ([#373](https://github.com/wittech/zenstack/issues/373)) ([4bf1304](https://github.com/wittech/zenstack/commit/4bf1304c6518cc027b1a1f2d33fea70979d9d94b))
* make sure Buffer is imported ([#596](https://github.com/wittech/zenstack/issues/596)) ([76a0bac](https://github.com/wittech/zenstack/commit/76a0bac9c63707baf34a072e398b63156c1e0640))
* make sure zod schemas have type annotations ([#574](https://github.com/wittech/zenstack/issues/574)) ([51985b1](https://github.com/wittech/zenstack/commit/51985b1279dca8e82a7275330a7b6597f37d15a4))
* misc fixes about server adapters and more tests ([#431](https://github.com/wittech/zenstack/issues/431)) ([764ff2a](https://github.com/wittech/zenstack/commit/764ff2ab50ebdb4665cde071dd366e3dad01260e))
* nullify field instead of reject when an optional relation field is not readable ([#588](https://github.com/wittech/zenstack/issues/588)) ([fc16008](https://github.com/wittech/zenstack/commit/fc16008ba20aba18f39948f3ff13ec3bc79729e3))
* open-api issues ([#446](https://github.com/wittech/zenstack/issues/446)) ([2855647](https://github.com/wittech/zenstack/commit/285564751094797da8484bf041a9d3a4eafafc9d))
* openapi generator relation handling ([#320](https://github.com/wittech/zenstack/issues/320)) ([f1c9765](https://github.com/wittech/zenstack/commit/f1c9765b778f8fb476c015a2f3bbe72dd94ef6b0))
* post-update rules incorrectly reject update ([#826](https://github.com/wittech/zenstack/issues/826)) ([d921a7c](https://github.com/wittech/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/wittech/zenstack/issues/826)) ([e85831e](https://github.com/wittech/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* rest api should return error reason ([#507](https://github.com/wittech/zenstack/issues/507)) ([4b389fb](https://github.com/wittech/zenstack/commit/4b389fb648cc42a88c3a7628efebd7f438d110e7))
* rest-api, wrong links generated for to-one relationship ([#481](https://github.com/wittech/zenstack/issues/481)) ([21affec](https://github.com/wittech/zenstack/commit/21affec12da5b8bb31b774791405d2773dec9072))
* short-circuit post-read check when policy rules don't depend on model fields ([#376](https://github.com/wittech/zenstack/issues/376)) ([a54eba4](https://github.com/wittech/zenstack/commit/a54eba45f64382ed070e5aeabe0c8dc263bebc0d))
* support object literal in plugin fields processing ([#351](https://github.com/wittech/zenstack/issues/351)) ([8284988](https://github.com/wittech/zenstack/commit/8284988cf12c3c4f3983c36c3658201db5509b2c))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/wittech/zenstack/issues/995)) ([541cd97](https://github.com/wittech/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* undefined field access when selecting with _count ([#403](https://github.com/wittech/zenstack/issues/403)) ([d90d7c8](https://github.com/wittech/zenstack/commit/d90d7c83e95d33c85e9c3b4b650e014ee76136c3))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/wittech/zenstack/issues/625)) ([f6b68da](https://github.com/wittech/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))
* wrap generated trpc routes with error handling ([#338](https://github.com/wittech/zenstack/issues/338)) ([7012ef5](https://github.com/wittech/zenstack/commit/7012ef55afbf374ededaf23b6afb64afe497e592))
* wrong return type of generated `count` hook ([#347](https://github.com/wittech/zenstack/issues/347)) ([2035319](https://github.com/wittech/zenstack/commit/2035319a030369dc0c847eaac248f2d9acdc7c7b))
* wrong type generated for `groupBy` hook ([#344](https://github.com/wittech/zenstack/issues/344)) ([83fd21e](https://github.com/wittech/zenstack/commit/83fd21e5b2c55ca182386be61151386f0400bdd0))
* zod plugin issue with lower-case model names ([#396](https://github.com/wittech/zenstack/issues/396)) ([d6fba93](https://github.com/wittech/zenstack/commit/d6fba93e2f0149c14f67d4cd0b4e9cdb6eee73a5))
* zod typing for `DateTime` field, improve overall code generation ([#363](https://github.com/wittech/zenstack/issues/363)) ([e93ca5b](https://github.com/wittech/zenstack/commit/e93ca5bf10c6afdfd723961d3c91c2cd512eb8c8))
* **zod:** add coercion call when generating schema for DateTime field ([#1068](https://github.com/wittech/zenstack/issues/1068)) ([b60627c](https://github.com/wittech/zenstack/commit/b60627c167706728ac232ce06366d914e3dde23f))


### Performance Improvements

* improve runtime performance by removing expensive verbose logging ([#371](https://github.com/wittech/zenstack/issues/371)) ([0d7a2bf](https://github.com/wittech/zenstack/commit/0d7a2bf417c6ea5cc5c6c3568593a0fbe7d7903e))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
