# Changelog

## [2.0.0-alpha.3](https://github.com/wittech/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-04-30)


### Features

* JetBrains plugin for ZModel ([#904](https://github.com/wittech/zenstack/issues/904)) ([c79be9e](https://github.com/wittech/zenstack/commit/c79be9eb7f6b602bc84214bded2b927935b6273a))
* make parameters of transactions configurable ([#988](https://github.com/wittech/zenstack/issues/988)) ([d0745b1](https://github.com/wittech/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))


### Bug Fixes

* disable textmate bundle when JetBrains plugin is uninstalled ([#918](https://github.com/wittech/zenstack/issues/918)) ([7e9cc35](https://github.com/wittech/zenstack/commit/7e9cc35a68ed31e25e7c7eac764528f55a18ac7b))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/wittech/zenstack/issues/962)) ([2b2bfcf](https://github.com/wittech/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/wittech/zenstack/issues/995)) ([541cd97](https://github.com/wittech/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))

## [Unreleased]
### Added
- ZenStack V2 release!

## 1.11.0
### Added
- Added support to complex usage of `@@index` attribute like `@@index([content(ops: raw("gin_trgm_ops"))], type: Gin)`.
### Fixed
- Fixed several ZModel validation issues related to model inheritance.

## 1.7.0

### Added

-   Auto-completion is now supported inside attributes.
