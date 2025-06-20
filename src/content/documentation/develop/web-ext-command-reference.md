---
layout: sidebar.liquid
title: web-ext command reference
permalink: /documentation/develop/web-ext-command-reference/
topic: Develop
tags: [commands, options, reference, tools, web-ext, webextensions]
contributors:
  [
    akhilpanchal,
    andrewtruongmoz,
    aniketkudale,
    ankushduacodes,
    ankushduacodes,
    chrisdavidmills,
    Dietrich,
    eviljeff,
    groovecoder,
    hamatti,
    kumar303,
    lfilho,
    LowerDimensions,
    niharikak101,
    noraj,
    rebloor,
    Rob--W,
    saintsebastian,
    sharang,
    smile4ever,
    tofumatt,
    wbamberg,
    willdurand,
    djbrown,
    Robot-Inventor
  ]
last_updated_by: rebloor
date: 2024-05-30
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# web-ext command reference

This page lists all the commands and options available under version 8 of the [web-ext](https://github.com/mozilla/web-ext) command line tool. See [the version 7 command reference](/documentation/develop/web-ext-command-reference-v7/) for documentation of the previous version of the tool.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="whats-new" class="module">

<aside class="module-aside table-of-contents">

{%- include contents.liquid -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## What's changed in Version 8

Released in May 2024, the main change in version 8 of `web-ext` is that `web-ext sign` now creates a listing for an extension not previously listed on [addons.mozilla.org](https://addons.mozilla.org) (AMO) by default. This feature was previewed in version 7 with the [`--use-submission-api`](/documentation/develop/web-ext-command-reference-v7/#use-submission-api) option, which is now removed. This feature is achieved using the submission features of [addons.mozilla.org add-on API v5](https://addons-server.readthedocs.io/en/latest/topics/api/addons.html).

### Removed

These version 7 `web-ext lint` options are removed:

- [`--firefox-preview`](/documentation/develop/web-ext-command-reference-v7/#lint-firefox-preview)

These version 7 `web-ext run` options are removed:

- [`--firefox-preview`](/documentation/develop/web-ext-command-reference-v7/#run-firefox-preview)

These version 7 `web-ext sign` options are removed:

- [`--use-submission-api`](/documentation/develop/web-ext-command-reference-v7/#use-submission-api)
- [`--api-url-prefix`](/documentation/develop/web-ext-command-reference-v7/#api-url-prefix)
- [`--id`](/documentation/develop/web-ext-command-reference-v7/#id)
- `--disable-progress-bar` (undocumented feature)

### Updates

These `web-ext sign` options have changed:

- [`--amo-base-url`](#amo-base-url) no longer requires the (removed) `--use-submission-api` option to be set.
- [`--channel`](#channel) is now required.
- To submit updates, an extension's `manifest.json` must include an [extension ID](/documentation/develop/extensions-and-the-add-on-id/#how-do-i-set-an-add-on-id).

### Additions

These features are added:

- [`web-ext dump-config`](#web-ext-dump-config), this new command prints a copy of the configuration data to the terminal.
- [`web-ext sign --approval-timeout`](#approval-timeout) enables this number of milliseconds to wait for approval before giving up to be set.
- [`web-ext sign --upload-source-code`](#upload-source-code) enables a file containing human-readable source code to be uploaded.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->


<!-- Single Column Body Module -->

<section id="commands" class="module">

<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Commands

`web-ext` has these commands; a command's options are included as subsections.

<section id="web-ext-build">

### `web-ext build`

Packages an extension into a `.zip` file, ignoring files commonly unwanted in packages, such as `.git` and other artifacts. The name of the `.zip` file is taken from the [name](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) field in the extension [manifest](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

<section id="as-needed">

#### `--as-needed`

When you edit and save a source file, rebuild the extension. This enables you to continuously create a package with the most up-to-date source code.

Environment variable: `$WEB_EXT_AS_NEEDED=true`
</section>

<section id="overwrite-dest">

#### `--overwrite-dest`, `-o`

Overwrite the destination package file if it exists. Without this option, `web-ext` exits with an error if the destination file exists.

Environment variable: `$WEB_EXT_OVERWRITE_DEST=true`
</section>

<section id="filename">

#### `--filename`, `-n`

Name of the created extension package file. In this option, the values defined in `manifest.json` can be used by enclosing them with `{ }`. The default value is `{name}-{version}.zip`.

Environment variable: `$WEB_EXT_FILENAME`
</section>
</section><!-- web-ext-build -->

<section id="web-ext-docs">

### `web-ext docs`

Opens the [web-ext documentation](/documentation/develop/getting-started-with-web-ext/) in the user's default browser.

</section><!-- web-ext-docs -->

<section id="web-ext-dump-config">

### `web-ext dump-config`

Outputs the tool's configuration settings in JSON format.

</section><!-- web-ext-dump-config -->

<section id="web-ext-lint">

### `web-ext lint`

Reports errors in the extension [manifest](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json) or other source code files. When [`strict_min_version`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) is set in your extension’s manifest file, lint reports on the permissions, manifest keys, and web extension APIs used that are not available in that version. See the [addons-linter](https://github.com/mozilla/addons-linter) project for more information about the rules used to validate the extension source.

<section id="output">

#### `--output`, `-o`

The type of output to generate when reporting on errors. Choices: `json` or `text`.

Environment variable: `$WEB_EXT_OUTPUT`
</section>

<section id="metadata">

#### `--metadata`

Output only metadata about the extension in JSON.

Environment variable: `$WEB_EXT_METADATA=true`
</section>

<section id="pretty">

#### `--pretty`

Format the JSON output so that it's easier to read. This only applies when `--output` is set to `json`.

Environment variable: `$WEB_EXT_PRETTY=true`
</section>

<section id="self-hosted">

#### `--self-hosted`

Declares that your extension will be self-hosted.&nbsp;This disables messages related to hosting on [addons.mozilla.org](https://addons.mozilla.org/).

Environment variable: `$WEB_EXT_SELF_HOSTED=true`
</section>

<section id="boring">

#### `--boring`

Disables colorful shell characters so that the output only contains plain text.

Environment variable: `$WEB_EXT_BORING=true`
</section>

<section id="warnings-as-errors">

#### `--warnings-as-errors`, `-w`

Treat warnings as errors by exiting non-zero for warnings.

Environment variable: `$WEB_EXT_WARNINGS_AS_ERRORS=true`
</section>

</section> <!-- web-ext-lint -->

<section id="web-ext-run">

### `web-ext run`

Builds and then temporarily installs an extension on the target application so it can be tested. By default, it watches extension source files and reloads the extension in each target as files change.

<section id="adb-bin">

#### `--adb-bin`

The path to the [ADB (Android Device Bridge)](https://developer.android.com/studio/command-line/adb.html) executable on the machine you are running `web-ext` from. By default, the `adb` executable is located on your `PATH`.

Environment variable: `$WEB_EXT_ADB_BIN`
</section>

<section id="adb-device">

#### `--adb-device`, `--android-device`

The ID of your target Android device. If you do not specify this option, `web-ext` will list the IDs of each device connected. If you don't see a list of connected devices, ensure [yours is set up for development](/documentation/develop/developing-extensions-for-firefox-for-android/#set-up-your-computer-and-android-emulator-or-device).

Example:

```shell
web-ext run --target=firefox-android --android-device FA4AX0201736
```

Environment variable: `$WEB_EXT_ADB_DEVICE`
</section>

<section id="adb-host">

#### `--adb-host`

The host name to use when connecting to an Android device with [ADB (Android Device Bridge)](https://developer.android.com/studio/command-line/adb.html). By default, this is discovered automatically.

Environment variable: `$WEB_EXT_ADB_HOST`
</section>

<section id="adb-port">

#### `--adb-port`

Network port to use when connecting to an Android device with [ADB (Android Device Bridge)](https://developer.android.com/studio/command-line/adb.html). This will be discovered automatically by default.

Environment variable: `$WEB_EXT_ADB_PORT`
</section>

<section id="adb-remove-old-artifacts">

#### `--adb-remove-old-artifacts`

Forces web-ext to remove any old artifacts discovered at startup. Otherwise, `web-ext run` provides a warning if it finds old artifacts on the adb device.

Normally, when `web-ext` exits, it removes all the temporary files written to the target adb device. However, this may not happen, for example, when the device is disconnected before `web-ext` exits.

Environment variable: `$WEB_EXT_ADB_REMOVE_OLD_ARTIFACTS`
</section>

<section id="browser-console">

#### `--browser-console`, `-bc`

Open a [browser console](https://developer.mozilla.org/docs/Tools/Browser_Console) on startup so you can see log messages for your extension. Example:

```shell
web-ext run --browser-console
```

Environment variable: `$WEB_EXT_BROWSER_CONSOLE=true`

Note: The browser console may not show all debugging output from content scripts. Use the web console when debugging content scripts.
</section>

<section id="devtools">

#### `--devtools`

Open the Developer Tools for the installed extension on startup. See [this documentation](https://extensionworkshop.com/documentation/develop/debugging/) for more information. Example:

```shell
web-ext run --devtools
```

Note: The opened Developer Tools may not show all debugging output from content scripts. Use the web console when debugging content scripts.

::: note
This option requires Firefox 106 or later.
:::
</section>

<section id="firefox">

#### `--firefox`, `-f`

A version of [Firefox Desktop](https://www.mozilla.org/firefox/) to run the extension in. The value is an absolute path to the Firefox executable or an alias string. If not specified, the extension runs in the system's default installation of Firefox.

Here is an example specifying a full path to a Firefox executable on Windows:

```shell
--firefox="C:\Program Files\Mozilla Firefox\firefox.exe"
```

Here is an example specifying an executable path on Mac OS:

```shell
--firefox=/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin
```

You can also use aliases like this:

```shell
--firefox=beta
```

Here are all available aliases and the executables they map to:

<div class="table-wrapper table-scroll">

| Alias                                | Firefox executable                                                                           |
| ------------------------------------ | -------------------------------------------------------------------------------------------- |
| `firefox`                            | The [release](https://www.mozilla.org/firefox/new/) build of Firefox                         |
| `beta`                               | The [beta](https://www.mozilla.org/firefox/channel/desktop/#beta) build of Firefox           |
| `nightly`                            | The [nightly](https://www.mozilla.org/firefox/channel/desktop/#nightly) build of Firefox     |
| `deved` or `firefoxdeveloperedition` | The [developer](https://www.mozilla.org/firefox/channel/desktop/#developer) build of Firefox |

</div>

[Flatpak](https://flatpak.org/) users can use this option with the value `flatpak:org.mozilla.firefox` (where `org.mozilla.firefox` is [the Flatpak application ID for Firefox on Flathub](https://flathub.org/apps/details/org.mozilla.firefox)):

```shell
web-ext run --firefox=flatpak:org.mozilla.firefox
```

Environment variable: `$WEB_EXT_FIREFOX`
</section>

<section id="firefox-apk">

#### `--firefox-apk`

The [APK](https://en.wikipedia.org/wiki/Android_application_package) name for [Firefox](https://www.mozilla.org/firefox/mobile/) on your Android device. If more than one Firefox APK is installed, `web-ext` shows a list of values to choose from. Otherwise, `web-ext` uses the available APK.

Example:

```shell
web-ext run --target=firefox-android --firefox-apk=org.mozilla.firefox
```

Environment variable: `$WEB_EXT_FIREFOX_APK`
</section>

<section id="firefox-profile">

#### `--firefox-profile`, `-p`

The base Firefox profile to run the extension in as a string containing your profile name or an absolute path to its directory. The profile you specify is copied into a new temporary profile, and the settings required for `web-ext` to function are added.

If a profile is not specified, it runs the extension using a new temporary profile.

Environment variable: `$WEB_EXT_FIREFOX_PROFILE`
</section>

<section id="profile-create-if-missing">

#### `--profile-create-if-missing`

Create the profile directory (specified by the `--firefox-profile` or `--chromium-profile` options) if it does not exist.

::: note alert
The `--firefox-profile` option is treated as a directory path when this option is specified.
:::

Environment variable: `$WEB_EXT_PROFILE_CREATE_IF_MISSING`
</section>

<section id="keep-profile-changes">

#### `--keep-profile-changes`

Save any changes made to the profile directory (specified by `--firefox-profile`). Without this option, profile changes are not saved.

::: note alert
This option makes the profile specified by `--firefox-profile` insecure for daily use. It turns off auto-updates and allows silent remote connections, among other things. Specifically, it makes destructive changes to the profile required for `web-ext` to operate.
:::

Environment variable: `$WEB_EXT_KEEP_PROFILE_CHANGES=true`
</section>

<section id="no-reload">

#### `--no-reload`

Do not automatically reload the extension in the browser as you edit and save source files.

Environment variable: `$WEB_EXT_NO_RELOAD=true`
</section>

<section id="pre-install">

#### `--pre-install`

Install the extension into the profile before starting the browser. This is a way to support Firefox versions 49 or earlier, as they don't support remote installation. Specifying this option implies `--no-reload`.

Environment variable: `$WEB_EXT_PRE_INSTALL=true`
</section>

<section id="pref">

#### `--pref`

Customize any Firefox preference without creating or modifying the profile. Use the equal sign to set values, for example:

```shell
--pref general.useragent.locale=fr-FR
```

Specify this option multiple times to set more than one preference.

Environment variable: `$WEB_EXT_PREF`
</section>

<section id="target">

#### `--target`, `-t`

Specify the application to run your extension in. Specify this option multiple times to run the extension in each application concurrently.

Here are the supported targets:

<div class="table-wrapper table-scroll">

| Target            | Application                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `firefox-desktop` | The extension runs in [Firefox Desktop](https://www.mozilla.org/firefox/).                                                      |
| `firefox-android` | The extension runs in [Firefox for Android](https://www.mozilla.org/firefox/mobile/). You must also specify [`--android-device`](#adb-device). |
| `chromium`        | The extension runs in a Chromium-based browser. You can specify a binary with [`--chromium-binary`](#chromium-binary).                                                                             |

</div>

If no target is specified, the extension runs in `firefox-desktop`.

Environment variable: `$WEB_EXT_TARGET`
</section>

<section id="args">

#### `--args`, `--arg`
Additional CLI options passed to the browser binary. Examples:

```shell
web-ext run --arg="--search=mozilla" --arg="--new-tab=https://duckduckgo.com"
```

```shell
web-ext run --arg="--remote-debugging-port=9229" --target chromium
```

</section>

<section id="chromium-binary">

#### `--chromium-binary`
Path or alias to a Chromium executable such as google-chrome, google-chrome.exe, or opera.exe.
If not specified, the default Google Chrome is used.
</section>

<section id="chromium-profile">

#### `--chromium-profile`
Path to a custom Chromium profile.
</section>

<section id="start-url">

#### `--start-url`

Open a tab at the specified URL when the browser starts. Example:

```shell
web-ext run --start-url www.mozilla.com
```

To open several tabs, declare this option multiple times. Example:

```shell
web-ext run --start-url www.mozilla.com --start-url developer.mozilla.org
```

Environment variable: `$WEB_EXT_START_URL`
</section>

<section id="watch-file">

#### `--watch-file`, `--watch-files`

A list of files that should be watched for changes. This is useful if you want web-ext to watch for changes to specific files without watching the extension directory tree, e.g., the build output from a module bundler.

```shell
web-ext run --watch-file dist/background.js dist/content-script.js
```
</section>

<section id="watch-ignored">

#### `--watch-ignored`

A list of paths and globs patterns that should not be watched for changes. Use this to prevent web-ext from watching part of the extension directory tree, e.g., the node_modules folder.

```shell
web-ext run --watch-ignored dir1/to/file.js dir2/*.js dir3/**
```

::: note alert
This option is useful to prevent issues when the number of watched files is higher than the underlying OS feature allows. For example, on Linux `Error: ENOSPC: System limit for number of file watchers reached` exception is raised if too many files are being watched (See [web-ext#2022](https://github.com/mozilla/web-ext/issues/2022)).
:::
</section>
</section> <!-- web-ext-run -->

<section id="web-ext-sign">

### `web-ext sign`

This command:

- creates a listing for your extension on AMO if `--channel` is set to `listed` and the extension isn't listed.
- adds a version to a listed extension if the `--channel` is set to `listed` and your extension is listed.
- downloads a signed copy of the extension if the `--channel` is set to `unlisted`.

You must create [API access credentials](http://addons-server.readthedocs.org/en/latest/topics/api/auth.html#access-credentials) to run this command. [Obtain your personal access credentials here](https://addons.mozilla.org/developers/addon/api/key/).

<section id="api-key">

#### `--api-key`

Your API key ([JWT issuer](http://addons-server.readthedocs.org/en/latest/topics/api/auth.html#create-a-jwt-for-each-request/)) for accessing the [addons.mozilla.org API](http://addons-server.readthedocs.org/en/latest/topics/api/index.html). This should always be a string.

Environment variable: `$WEB_EXT_API_KEY`
</section>

<section id="api-secret">

#### `--api-secret`

Your API secret ([JWT secret](http://addons-server.readthedocs.org/en/latest/topics/api/auth.html#create-a-jwt-for-each-request)) from [addons.mozilla.org API](http://addons-server.readthedocs.org/en/latest/topics/api/index.html). This should always be a string.

Environment variable: `$WEB_EXT_API_SECRET`
</section>

<section id="approval-timeout">

#### `--approval-timeout`

Number of milliseconds to wait for approval before giving up. Set to 0 to disable the wait for approval. Defaults to `timeout` if not set. _Defaults to 15 minutes (900000 ms)._

Environment variable: `$WEB_EXT_APPROVAL_TIMEOUT`
</section>

<section id="amo-base-url">

#### `--amo-base-url`

A string containing the add-on submission API base URL. If not specified, defaults to the production API: `https://addons.mozilla.org/api/v5/`.

Environment variable: `$WEB_EXT_AMO_BASE_URL`
</section>

<section id="api-proxy">

#### `--api-proxy`

A proxy host to use for all API connections. Example: `https://yourproxy:6000`. Read more about [how proxy requests work](https://github.com/request/request#proxies). There is a separate section about [signing in a restricted environment](/documentation/develop/getting-started-with-web-ext/#restricted-environment) if the proxy approach doesn't work for you.

Environment variable: `$WEB_EXT_API_PROXY`
</section>

<section id="channel">

#### `--channel`

The `channel` the extension is signed in. This option is required.

The allowed values for `channel` are:

<div class="table-wrapper table-scroll">

| Channel    | Result                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `listed`   | The extension gets submitted for public listing on [addons.mozilla.org](https://addons.mozilla.org).                         |
| `unlisted` | The extension gets submitted for signing for [self-distribution](/documentation/publish/self-distribution/) on your website. |
</div>

An example of using the `--channel` option is to [create a beta version](/documentation/develop/getting-started-with-web-ext/#signing-test-version-listed) for an extension listed on addons.mozilla.org.

Environment variable: `$WEB_EXT_CHANNEL`
</section>

<section id="timeout">

#### `--timeout`

Number of milliseconds to wait before giving up on a response from Mozilla's web service. This should always be a number. _Defaults to 5 minutes (300000 ms)_

Environment variable: `$WEB_EXT_TIMEOUT`
</section>

<section id="amo-metadata">

#### `--amo-metadata`

The path to a JSON file containing an object with metadata for the extension's [addons.mozilla.org](https://addons.mozilla.org) (AMO) listing.

Metadata is required for the first version of an extension listed on AMO. This metadata can include any of the properties of the [addons.mozilla.org add-on API Create request JSON object](https://mozilla.github.io/addons-server/topics/api/addons.html#create). However:
- `"categories"`, `"summary"` and the version's `"license"` properties must be provided. 
- [Translated fields](https://mozilla.github.io/addons-server/topics/api/overview.html#api-overview-translations) must include at least one locale. 

A minimal JSON file looks like this:

```json
{
  "summary": {
    "en-US": "A short sentence that explains what the extension does."
  },
  "categories": [
    "other"
  ],
  "version": {
    "license": "MPL-2.0"
  }
}
```

The `"license"` field accepts one of these [SPDX identifiers](https://spdx.org/licenses/): `MPL-1.1`, `MPL-2.0`, `GPL-2.0-or-later`, `GPL-3.0-or-later`, `LGPL-2.1-or-later`, `LGPL-3.0-or-later`, `MIT`, `BSD-2-Clause`, `cc-all-rights-reserved`, `CC-BY-3.0`, `CC-BY-NC-3.0`, `CC-BY-NC-ND-3.0`, `CC-BY-NC-SA-3.0`, `CC-BY-ND-3.0`, `CC-BY-SA-3.0`, and `all-rights-reserved`.

When publishing an extension update metadata isn't required. If metadata isn't provided, the license specified for the first version is reused. However, any of the properties of the [addons.mozilla.org add-on API Version Create request JSON object](https://mozilla.github.io/addons-server/topics/api/addons.html#version-create) can be provided. For example, if you want to specify `"approval_notes"`, the JSON file looks like this:

```json
{
  "version": {
    "approval_notes": "Information that helps Mozilla reviewers if they review the add-on. Only visible to Mozilla."
  }
}
```

Environment variable: `$WEB_EXT_AMO_METADATA`
</section>

<section id="upload-source-code">

#### `--upload-source-code`

The path to an archive file containing human-readable source code for this submission. See [Source code submission](/documentation/publish/source-code-submission/) for details.

Environment variable: `$WEB_EXT_API_UPLOAD_SOURCE_CODE`
</section>

</section> <!-- web-ext-sign -->

</div>
</article>
</section>
<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="global-options" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Global options

web-ext has these global options.

<section id="artifacts-dir">

### `--artifacts-dir`, `-a`

The path of a directory to save artifacts in, e.g., the `.zip` file, when you build an extension. This can be specified as a relative or absolute path and should always be a string.

::: note
If this is not specified, the default is the relative path `./web-ext-artifacts`.
:::

Environment variable: `$WEB_EXT_ARTIFACTS_DIR`
</section>

<section id="config">

### `--config`, `-c`

Load a config file to set option value defaults. See [Setting option defaults in a configuration file](/documentation/develop/getting-started-with-web-ext/#setting-option-defaults-in-a-configuration-file) for more details.

Environment variable: `$WEB_EXT_CONFIG`
</section>

<section id="config-discovery">

### `--config-discovery=false`, `--no-config-discovery`

Disable [automatic config file discovery](/documentation/develop/getting-started-with-web-ext/#automatic-discovery-of-configuration-files).

Environment variable: `$WEB_EXT_CONFIG_DISCOVERY=false` or `$WEB_EXT_NO_CONFIG_DISCOVERY`
</section>

<section id="ignore-files">

### `--ignore-files`, `-i`

A list of [glob patterns](https://github.com/isaacs/node-glob#glob-primer) to define which files should be ignored by `build`, `run`, `lint`, and other commands. If you specify relative paths, they are relative to your `--source-dir`.

Here is an example that ignores any file within your `--source-dir` (or its subdirectories) that ends in the suffix `.api-key`:

```shell
web-ext build --ignore-files "\*_/_.api-key"
```

You can specify multiple patterns by separating them with spaces:

```shell
web-ext build --ignore-files path/to/first.js path/to/second.js
```

By default, without the use of `--ignore-files`, these rules are applied:

- Any file ending in `.xpi` or `.zip` is ignored
- Any hidden file (one that starts with a dot) is ignored
- Any directory named `node_modules` is ignored

When you specify custom patterns using `--ignore-files`, they are applied _in addition to_ the default patterns.

::: note
Order is important. You must specify the web-ext command before specifying the `--ignore-files` option.
:::

Environment variable: `$WEB_EXT_IGNORE_FILES`
</section>

<section id="help">

### `--help`, `-h`

Lists all the commands and options for the `web-ext` tool. When you request help, you can list the options for a command by including the command name. For example, `web-ext --help run`.
</section>

<section id="no-input">

### `--no-input`

Disable all features that require standard input.

Environment variable: `$WEB_EXT_NO_INPUT=true`
</section>

<section id="source-dir">

### `--source-dir`, `-s`

The directory of the extension's source code, e.g., when building or running an extension. This can be specified as a relative or absolute path and should always be a string.

::: note
If this is not specified, the default is the active directory in your terminal.
:::

Environment variable: `$WEB_EXT_SOURCE_DIR`
</section>

<section id="verbose">

### `--verbose`, `-v`

Shows verbose output when commands are run.

Environment variable: `$WEB_EXT_VERBOSE=true`
</section>

<section id="version">

### `--version`

Shows the version number of the installed web-ext tool.
</section>
</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="setting-option-environment-variables" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Setting option environment variables

Environment variables can be set for any option. You:

1. Take the option name.
2. Remove the two dashes at the start.
3. Convert the remaining dashes to underscores.
4. Capitalize the letters.
5. Prefix the result with `$WEB_EXT_`.

So, for example, instead of specifying this source option every time you wish to run the extension:

```shell
web-ext run --source-dir=/path/to/my/extension
```

You could set the source directory as an environment variable like this:

```shell
WEB_EXT_SOURCE_DIR=/path/to/my/extension
```

Then you can specify the run command without options:

```shell
web-ext run
```

A command line option always overrides the environment variable. For example, this ignores the environment variable:

```shell
web-ext run --source-dir=/another/path/to/source
```

To define a `true` / `false` flag option (which does not have a value on the command line), set it to a literal string value of either `true` or `false`. Example:

```shell
WEB_EXT_VERBOSE=true
```

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="see-also" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## See also

- [web-ext repo](https://github.com/mozilla/web-ext)
- [Getting started with web-ext](/documentation/develop/getting-started-with-web-ext/)

</div>
</article>
</section>

<!-- END: Single Column Body Module -->



