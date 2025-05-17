# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v2.2.4](https://github.com/ljharb/Array.prototype.findIndex/compare/v2.2.3...v2.2.4) - 2024-12-17

### Commits

- [actions] split out node 10-20, and 20+ [`22ec19f`](https://github.com/ljharb/Array.prototype.findIndex/commit/22ec19ff06322731bffebc82f74cd1c5c7bdd28e)
- [Dev Deps] update `@es-shims/api`, `auto-changelog`, `tape` [`60c8f4a`](https://github.com/ljharb/Array.prototype.findIndex/commit/60c8f4a80830034800977081a153b1c1e858345d)
- [Deps] update `call-bind`, `es-abstract` [`31f714f`](https://github.com/ljharb/Array.prototype.findIndex/commit/31f714fd1d73f24369313138fa3a9c6dc4d30d8f)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config` [`763157c`](https://github.com/ljharb/Array.prototype.findIndex/commit/763157c9ab768fc8e474357a448174d838348e71)
- [meta] add missing `engines.node` [`1f5d651`](https://github.com/ljharb/Array.prototype.findIndex/commit/1f5d6510f43e8e33b96c2575ccad6b6719bbbc72)
- [Refactor] use `call-bound` directly [`ebc05aa`](https://github.com/ljharb/Array.prototype.findIndex/commit/ebc05aa2a2b60b576105a988e89bbbb8272d4c4d)
- [Tests] replace `aud` with `npm audit` [`1f6d4de`](https://github.com/ljharb/Array.prototype.findIndex/commit/1f6d4de6868be6e22097fb3f656b7acb6fc38ba5)
- [meta] add `SECURITY.md` [`2cf450e`](https://github.com/ljharb/Array.prototype.findIndex/commit/2cf450eae9393815ebe6f59177d101666bb8c06c)
- [Deps] update `es-abstract` [`33ede20`](https://github.com/ljharb/Array.prototype.findIndex/commit/33ede205919316a2709123fee24b849e5dea3a88)
- [Dev Deps] add missing peer dep [`906ece2`](https://github.com/ljharb/Array.prototype.findIndex/commit/906ece22b58b4cfaef2543bf6ba05de241182a44)

## [v2.2.3](https://github.com/ljharb/Array.prototype.findIndex/compare/v2.2.2...v2.2.3) - 2024-03-16

### Commits

- [Refactor] use `es-object-atoms`, update `es-abstract` [`7747551`](https://github.com/ljharb/Array.prototype.findIndex/commit/7747551fe933fc7355dd69f855d48626ee083d6a)
- [Deps] update `call-bind`, `define-properties`, `es-shim-unscopables` [`d0f9882`](https://github.com/ljharb/Array.prototype.findIndex/commit/d0f98829e8d853c46c453ff8801576684e96b1ed)
- [Dev Deps] update `aud`, `npmignore`, `tape` [`f6a1abf`](https://github.com/ljharb/Array.prototype.findIndex/commit/f6a1abfc96ac033179455d466ba7c28cde107fdb)

## [v2.2.2](https://github.com/ljharb/Array.prototype.findIndex/compare/v2.2.1...v2.2.2) - 2023-08-27

### Commits

- [meta] add `auto-changelog` [`d653e4c`](https://github.com/ljharb/Array.prototype.findIndex/commit/d653e4c1d09ffb154e7452530ec9072157505130)
- [Deps] update `define-properties`, `es-abstract` [`6afe819`](https://github.com/ljharb/Array.prototype.findIndex/commit/6afe819c42ff3e207432613db0aa035d3cd7ccc7)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config`, `aud`, `tape` [`c65fb5f`](https://github.com/ljharb/Array.prototype.findIndex/commit/c65fb5f37731f37a6674c1fec274edd5e63e61e8)

<!-- auto-changelog-above -->

# 2.2.1
 - [Deps] update `define-properties`, `es-abstract`
 - [meta] use `npmignore` to autogenerate an npmignore file
 - [actions] update rebase action to use reusable workflow
 - [Dev Deps] update `aud`, `functions-have-names`, `tape`

# 2.2.0
 - [New] `shim`/`auto`: add `findIndex` to `Symbol.unscopables`
 - [Tests] migrate to tape
 - [Deps] update `es-abstract`
 - [Dev Deps] update `@ljharb/eslint-config`

# 2.1.1
 - [Refactor] update implementation to match spec text
 - [meta] add `safe-publish-latest`
 - [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `@es-shims/api`
 - [Tests] migrate tests to Github Actions

# 2.1.0
 - [New] add `auto` entry point
 - [Fix] remove `detect` file, broken/unused in v2
 - [Refactor] use split-up `es-abstract` (77% bundle size decrease)
 - [Performance] avoid checking `arguments` indexes beyond `arguments.length`
 - [Performance] inline `ES.Call` since `IsCallable` is already checked prior to the loop.
 - [Deps] update `define-properties`
 - [meta] Only apps should have lockfiles
 - [meta] add missing LICENSE file
 - [Tests] add `npm run lint`
 - [Tests] use shared travis-ci configs
 - [Tests] use `aud` in posttest

# 2.0.2
 - [Performance] the entry point should use the native function when compliant

# 2.0.1
 - [Fix] use call instead of apply in bound entry point function (#17)
 - [Refactor] Remove unnecessary double ToLength call (#16)
 - [Tests] run tests on travis-ci

# 2.0.0
 - [Breaking] use es-shim API (#13)
 - [Docs] fix example in README (#9)
 - [Docs] Fix npm install command in README (#7)

# 1.0.0
 - [Fix] do not skip holes, per ES6 change (#4)
 - [Fix] Older browsers report the typeof some host objects and regexes as "function" (#5)

# 0.1.1
 - [Fix] Support IE8 by wrapping Object.defineProperty with a try catch (#3)
 - [Refactor] remove redundant enumerable: false (#1)

# 0.1.0
 - Initial release.
