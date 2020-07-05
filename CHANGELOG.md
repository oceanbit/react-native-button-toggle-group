# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
