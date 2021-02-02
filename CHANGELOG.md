# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.1](https://github.com/crutchcorn/react-native-button-toggle-group/compare/v1.1.0...v1.1.1) (2021-02-02)


### Bug Fixes

* massively improved A11Y of component ([fe5c096](https://github.com/crutchcorn/react-native-button-toggle-group/commit/fe5c096f9bf4e229369d535245f36e2e6d977e33))

Please note: There is still an outstanding A11Y bug in this library. ([#5](https://github.com/oceanbit-dev/react-native-button-toggle-group/issues/5))

I've done my best to debug this issue, but am unable to figure out what's going on. Please reach out if you know how to solve it!

## [1.1.0](https://github.com/crutchcorn/react-native-button-toggle-group/compare/v1.0.3...v1.1.0) (2020-07-05)


### Features

* added `value` input prop ([9b79bc6](https://github.com/crutchcorn/react-native-button-toggle-group/commit/9b79bc6bbf5a2055af890336faec6defab1b58b0)), closes [#1](https://github.com/crutchcorn/react-native-button-toggle-group/issues/1)

This change allows you to set a `value` that you can use to forcibly update the UI's displayed
selected item. However, this does not introduce a breaking change. This means that `onSelect`
_will_ visually update the UI, THEN the `value` update will take over and update the UI.

Keep in mind that we _will_ be changing this behavior in the next version release.
If you are not currently using `value`, I suggest updating to it, as it will be required
in the next major semver update.

### 1.0.3 (2020-07-05)
