---
layout: sidebar.liquid
title: web-ext command reference
permalink: /documentation/develop/web-ext-command-reference/
topic: Develop
tags: [commands, options, reference, tools, web-ext, webextensions]
contributors:
  [
    ankushduacodes,
    lfilho,
    rebloor,
    mdnwebdocs-bot,
    kumar303,
    Rob--W,
    smile4ever,
    Dietrich,
    andrewtruongmoz,
    saintsebastian,
    niharikak101,
    wbamberg,
    aniketkudale,
    groovecoder,
    tofumatt,
    sharang,
    chrisdavidmills,
    noraj,
    akhilpanchal,
    ankushduacodes,
    willdurand,
    eviljeff,
    hamatti,
    LowerDimensions
  ]
last_updated_by: hamatti
date: 2022-11-18
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# web-ext command reference

This page lists all the commands and options available under the [web-ext](https://github.com/mozilla/web-ext) command line tool.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="commands" class="module">
<aside class="module-aside table-of-contents">

{%- include contents.liquid -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Commands

web-ext has the following commands; options specific to these commands are included as subsections.

<section id="web-ext-build">

### `web-ext build`

Packages an extension into a `.zip` file, ignoring files that are commonly unwanted in packages, such as `.git` and other artifacts. The name of the `.zip` file is taken from the [name](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) field in the extension [manifest](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

<section id="as-needed">

#### `--as-needed`

Re-build the extension anytime you edit and save a source file. This allows you to continuously create a package with the most up to date source code.

Environment variable: `$WEB_EXT_AS_NEEDED=true`
</section>

<section id="overwrite-dest">

#### `--overwrite-dest`, `-o`

Overwrite destination package file if it exists. Without this option, web-ext will exit in error if the destination file already exists.

Environment variable: `$WEB_EXT_OVERWRITE_DEST=true`
</section>
</section><!-- web-ext-build -->

<section id="web-ext-docs">

### `web-ext docs`

Opens the [web-ext documentation](/documentation/develop/getting-started-with-web-ext/) in the user's default browser.

</section><!-- web-ext-docs -->

<section id="web-ext-lint">

### `web-ext lint`

Reports errors in the extension [manifest](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json) or other source code files. When [`strict_min_version`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) is set in your extension’s manifest file, lint will report on the permissions, manifest keys, and web extension APIs used that are not available in that version. See the [addons-linter](https://github.com/mozilla/addons-linter) project for more information about what kind of rules are used to validate extension source.

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

<section id="lint-firefox-preview">

#### `--firefox-preview`

Turn on developer preview features in Firefox. This option accepts multiple values, although it currently only supports the `mv3` value, which is also the default value.

The `mv3` value allows developers to lint Manifest Version 2 **and** Manifest Version 3 extensions.

::: note
This option was added in web-ext 7.3.0.
:::
</section>
</section> <!-- web-ext-lint -->

<section id="web-ext-run">

### `web-ext run`

Builds and then temporarily installs an extension on the target application, so it can be tested. By default, watches extension source files and reload the extension in each target as files change.

<section id="adb-bin">

#### `--adb-bin`

Path to the [ADB (Android Device Bridge)](https://developer.android.com/studio/command-line/adb.html) executable on the machine you are running `web-ext` from. By default, the `adb` executable will be located on your `PATH`.

Environment variable: `$WEB_EXT_ADB_BIN`
</section>

<section id="adb-device">

#### `--adb-device`, `--android-device`

The ID of your target Android device. If you do not specify this option, `web-ext` will list the IDs of each device connected. If you don't see a list of connected devices, make sure [yours is set up for development](/documentation/develop/developing-extensions-for-firefox-for-android/#set-up-your-computer-and-android-emulator-or-device).

Example:

```shell
web-ext run --target=firefox-android --android-device FA4AX0201736
```

Environment variable: `$WEB_EXT_ADB_DEVICE`
</section>

<section id="adb-host">

#### `--adb-host`

Host name to use when connecting to an Android device with [ADB (Android Device Bridge)](https://developer.android.com/studio/command-line/adb.html). This will be discovered automatically by default.

Environment variable: `$WEB_EXT_ADB_HOST`
</section>

<section id="adb-port">

#### `--adb-port`

Network port to use when connecting to an Android device with [ADB (Android Device Bridge)](https://developer.android.com/studio/command-line/adb.html). This will be discovered automatically by default.

Environment variable: `$WEB_EXT_ADB_PORT`
</section>

<section id="adb-remove-old-artifacts">

#### `--adb-remove-old-artifacts`

`web-ext` automatically removes all the temporary files that were written to the target adb device when it does exit. This may fail, for example when the device is disconnected before
`web-ext run` exited.

Starting from v5.0.0, `web-ext run` will automatically detect and warn the user if old artifacts have been found on the adb device, but it does not automatically remove them by default.

This flag forces web-ext to automatically remove these discovered artifacts.

Environment variable: `$WEB_EXT_ADB_REMOVE_OLD_ARTIFACTS`
</section>

<section id="browser-console">

#### `--browser-console`, `-bc`

This opens a [Browser Console](https://developer.mozilla.org/docs/Tools/Browser_Console) on startup,&nbsp;so you can see log messages for your extension. Example:

```shell
web-ext run --browser-console
```

Environment variable: `$WEB_EXT_BROWSER_CONSOLE=true`

Note: The browser console may not show all debugging output from content-scripts. Use the web console when debugging content-scripts.
</section>

<section id="devtools">

#### `--devtools`

This opens the Developer Tools for the installed extension on startup. See [this documentation](https://extensionworkshop.com/documentation/develop/debugging/) for more information. Example:

```shell
web-ext run --devtools
```

Note: The opened Developer Tools may not show all debugging output from content-scripts. Use the web console when debugging content-scripts.

::: note
This option was added in web-ext 7.3.0 and it requires Firefox 106 and newer.
:::
</section>

<section id="firefox">

#### `--firefox`, `-f`

Specify a particular version of [Firefox Desktop](https://www.mozilla.org/firefox/) to run the extension in. The value is an absolute path to the Firefox executable or&nbsp;an alias string. If this is not specified, it will attempt to run the extension inside the system's default installation of Firefox.

Here is an example specifying a full path to a Firefox executable on Windows:

```shell
--firefox="C:\Program Files\Mozilla Firefox\firefox.exe"
```

Here is an example specifying an executable path on Mac OS:

```shell
--firefox=/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin
```

You can also use aliases, like this:

```shell
--firefox=beta
```

Here are all available aliases and the executables they map to:

<div class="table-wrapper table-scroll">

| Alias                     | Firefox executable                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `firefox`                 | The [release](https://www.mozilla.org/firefox/new/) build of Firefox                         |
| `beta`                    | The [beta](https://www.mozilla.org/firefox/channel/desktop/#beta) build of Firefox           |
| `nightly`                 | The [nightly](https://www.mozilla.org/firefox/channel/desktop/#nightly) build of Firefox     |
| `firefoxdeveloperedition` | The [developer](https://www.mozilla.org/firefox/channel/desktop/#developer) build of Firefox |

</div>

As of web-ext 7.2.0, [Flatpak](https://flatpak.org/) users can use this option with the value `flatpak:org.mozilla.firefox` (where `org.mozilla.firefox` is [the Flatpak application ID for Firefox on Flathub](https://flathub.org/apps/details/org.mozilla.firefox)):

```shell
web-ext run --firefox=flatpak:org.mozilla.firefox
```

Environment variable: `$WEB_EXT_FIREFOX`
</section>

<section id="firefox-apk">

#### `--firefox-apk`

The exact [APK](https://en.wikipedia.org/wiki/Android_application_package) name for [Firefox](https://www.mozilla.org/firefox/mobile/) on your Android device. Without specifying this option, `web-ext` will automatically select it for you. If more than one Firefox APK is installed, `web-ext` will show a list of values to choose from.

Example:

```shell
web-ext run --target=firefox-android --firefox-apk=org.mozilla.firefox
```

Environment variable: `$WEB_EXT_FIREFOX_APK`
</section>

<section id="run-firefox-preview">

#### `--firefox-preview`

Turn on developer preview features in Firefox. This option accepts multiple values, although it currently only supports the `mv3` value, which is also the default value.

The `mv3` value allows developers to test their extensions with Firefox Manifest Version 3 support (without having to [manually flipping the related preferences](/documentation/develop/manifest-v3-migration-guide/)).

::: note
This option was added in web-ext 7.1.0.
:::
</section>

<section id="firefox-profile">

#### `--firefox-profile`, `-p`

Specify a base Firefox profile to run the extension in. This is specified as a string containing your profile name or an absolute path to its directory. The profile you specify is copied into a new temporary profile and some settings are added that are required for `web-ext` to function.

If a profile is not specified, it runs the extension using a new temporary profile.

Environment variable: `$WEB_EXT_FIREFOX_PROFILE`
</section>

<section id="profile-create-if-missing">

#### `--profile-create-if-missing`

With this option, the profile directory (specified by the `--firefox-profile` or `--chromium-profile` options) will be created if it does not exist yet.

::: note alert
When this option is specified, the `--firefox-profile` option is always treated as a directory path.
:::

Environment variable: `$WEB_EXT_PROFILE_CREATE_IF_MISSING`
</section>

<section id="keep-profile-changes">

#### `--keep-profile-changes`

With this option, any changes made to the profile directory (specified by `--firefox-profile`) are saved. Without this option, profile changes are not saved.

::: note alert
This option makes the profile specified by `--firefox-profile` completely insecure for daily use. It turns off auto-updates and allows silent remote connections, among other things. Specifically, it will make destructive changes to the profile that are required for `web-ext` to operate.
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

Pre-install the extension into the profile before starting the browser. This is a way to support Firefox versions less than 49, as they don't support remote installation. Specifying this option implies `--no-reload`.

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

This specifies which application to run your extension in. Specify this option multiple times to run the extension in each application concurrently.

Here are the supported targets:

<div class="table-wrapper table-scroll">

| Target            | Application                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `firefox-desktop` | The extension will run in [Firefox Desktop](https://www.mozilla.org/firefox/).                                                      |
| `firefox-android` | The extension will run in [Firefox for Android](https://www.mozilla.org/firefox/mobile/). You must also specify [`--android-device`](#adb-device). |
| `chromium`        | The extension will run in a Chromium-based browser. You can specificy exact binary with [`--chromium-binary`](#chromium-binary).                                                                             |

</div>

If no target is specified, the extension will run in `firefox-desktop`.

Environment variable: `$WEB_EXT_TARGET`
</section>

<section id="args">

#### `--args`, `--arg`
Additional CLI options passed to the Browser binary. Example:

```shell
--arg="--search=mozilla" --arg="--new-tab=https://duckduckgo.com"
```
</section>

<section id="chromium-binary">

#### `--chromium-binary`
Path or alias to a Chromium executable such as google-chrome, google-chrome.exe or opera.exe etc.
If not specified, the default Google Chrome will be used.
</section>

<section id="chromium-profile">

#### `--chromium-profile`
Path to a custom Chromium profile.
</section>

<section id="start-url">

#### `--start-url`

This will open a tab at the specified URL when the browser starts. Example:

```shell
web-ext run --start-url www.mozilla.com
```

Declare this option multiple times to open multiple tabs. Example:

```shell
web-ext run --start-url www.mozilla.com --start-url developer.mozilla.org
```

Environment variable: `$WEB_EXT_START_URL`
</section>

<section id="watch-file">

#### `--watch-file`, `--watch-files`

A list of files that should be watched for changes. This is useful if you want web-ext to explicitly watch for changes to specific files, without watching the extension directory tree, e.g. the output of the build from a module bundler.

```shell
web-ext run --watch-file dist/background.js dist/content-script.js
```
</section>

<section id="watch-ignored">

#### `--watch-ignored`

A list of paths and globs patterns that should not be watched for changes. This is useful if you want to explicitly prevent web-ext from watching part of the extension directory tree, e.g. the node_modules folder.

```shell
web-ext run --watch-ignored dir1/to/file.js dir2/*.js dir3/**
```

::: note alert
This option is useful to prevent issues when the number of watched files is higher than what the underlying OS feature allows. As an example, on Linux a `Error: ENOSPC: System limit for number of file watchers reached` exception is raised if too many files are being watched (See [web-ext#2022](https://github.com/mozilla/web-ext/issues/2022)).
:::
</section>
</section> <!-- web-ext-run -->

<section id="web-ext-sign">

### `web-ext sign`

This command uses the [addons.mozilla.org API](https://addons-server.readthedocs.io/en/latest/topics/api/signing.html) to sign your extension. If successful, it will download the signed `.xpi` file, which you can use to [self-host your extension](/documentation/publish/self-distribution/).

You need to create [API access credentials](http://addons-server.readthedocs.org/en/latest/topics/api/auth.html#access-credentials) to run this command. [Obtain your personal access credentials here](https://addons.mozilla.org/developers/addon/api/key/).

<section id="use-submission-api">

#### `--use-submission-api`

Use the experimental [addons.mozilla.org add-on submission API](https://addons-server.readthedocs.io/en/latest/topics/api/addons.html), rather than the [addons.mozilla.org signing API](https://addons-server.readthedocs.io/en/latest/topics/api/signing.html) to sign your extension. This allows listed versions to be freely created by enabling all necessary additional metadata to be submitted at the same time as the extension file.

With this option enabled, `--channel` changes to be a required option with no default.  The choices remain `listed` and `unlisted`.

Environment variable: `$WEB_EXT_USE_SUBMISSION_API`

::: note
This option was added in web-ext 7.3.1.
:::
</section>

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

<section id="api-url-prefix">

#### `--api-url-prefix`

The signing API URL prefix. This should always be a string. If not specified, this will default to&nbsp;`https://addons.mozilla.org/api/v4` which is the production API.

::: note alert
This option is ignored when `--use-submission-api` is used. See `--amo-base-url` instead.
:::

Environment variable: `$WEB_EXT_API_URL_PREFIX`
</section>

<section id="amo-base-url">

#### `--amo-base-url`

The add-on submission API base URL. This should always be a string. If not specified, this will default to&nbsp;`https://addons.mozilla.org/api/v5` which is the production API.

::: note alert
This option is ignored when `--use-submission-api` is used. See `--api-url-prefix` instead.
:::

Environment variable: `$WEB_EXT_AMO_BASE_URL`
</section>

<section id="api-proxy">

#### `--api-proxy`

A proxy host to use for all API connections. Example: `https://yourproxy:6000.`Read more about [how proxy requests work](https://github.com/request/request#proxies). There is a separate section about [signing in a restricted environment](/documentation/develop/getting-started-with-web-ext/#restricted-environment) if the proxy approach doesn't work for you.

Environment variable: `$WEB_EXT_API_PROXY`
</section>

<section id="channel">

#### `--channel`

This specifies the `channel` in which the extension is signed. It defaults to `unlisted` or the `channel` of your extension's latest version. When the `--use-submission-api` option is specified the behaviour of `--channel` - and the limitations - are quite different than explained here: see the documentation for `--use-submission-api` above for more information.

The allowed values for `channel` are:

<div class="table-wrapper table-scroll">

| Channel    | Result                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `listed`   | The extension gets submitted for public listing on [addons.mozilla.org](https://addons.mozilla.org). This type of channel is not well supported and cannot be used for some cases, as documented below. |
| `unlisted` | The extension gets submitted for signing for the purpose of [self-distribution](/documentation/publish/self-distribution/) on your own website.                                                                                                                                                      |

</div>

One example of using the `--channel` option is to [create a beta version](/documentation/develop/getting-started-with-web-ext/#signing-test-version-listed) for a `listed` extension (that is, one you have already [submitted to addons.mozilla.org](/documentation/publish/submitting-an-add-on/)).

::: note alert
Setting `--channel=listed` for a new extension is not yet supported. See [https://github.com/mozilla/web-ext/issues/804](https://github.com/mozilla/web-ext/issues/804)
:::

::: note alert
Setting `--channel=listed` for a new version of a listed extension is not well supported. It will upload your new version to [addons.mozilla.org](https://addons.mozilla.org) as if you'd [submitted it manually](/documentation/publish/submitting-an-add-on/). However, the command will fail and you'll have to check [addons.mozilla.org/developers/addons](https://addons.mozilla.org/developers/addons) for the correct status.
:::

See [documentation on the signing API](https://addons-server.readthedocs.io/en/latest/topics/api/signing.html#uploading-a-version) for more information.

Environment variable: `$WEB_EXT_CHANNEL`
</section>

<section id="timeout">

#### `--timeout`

Number of milleseconds to wait before giving up on a&nbsp;response from Mozilla's web service. This should always be a number.

Environment variable: `$WEB_EXT_TIMEOUT`
</section>

<section id="id">

#### `--id`

A custom identifier string for the extension. This has no effect if the extension already declares an identifier in its manifest. This option may be useful for signing versions of an existing extension that you own. 

::: note alert
This option cannot be used when `--use-submission-api` is also used: the add-on ID must be specified in the `manifest.json` file.
:::

Environment variable: `$WEB_EXT_ID`
</section>

<section id="amo-metadata">

#### `--amo-metadata`

Path to a JSON file containing an object with metadata to be passed to the add-on submission API. Typically this is used to submit the required metadata for the first listed version of an extension (e.g. `categories`; `license`), but any [supported JSON metadata](https://addons-server.readthedocs.io/en/latest/topics/api/addons.html) can be supplied. 

::: note alert
This option is only used when combined with `--use-submission-api`.
:::

Environment variable: `$WEB_AMO_METADATA`
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

web-ext has the following global options that may apply to multiple commands.

<section id="artifacts-dir">

### `--artifacts-dir`, `-a`

Specifies a particular directory to save artifacts in, e.g. the `.zip` file, once you've built an extension. This can be specified as a relative or absolute path, and should always be a string.

::: note
If this is not specified, the default is the relative path `./web-ext-artifacts`.
:::

Environment variable: `$WEB_EXT_ARTIFACTS_DIR`
</section>

<section id="config">

### `--config`, `-c`

Load a config file to set option value defaults. See an example of [what config files look like and how they work](/documentation/develop/getting-started-with-web-ext/#setting-option-defaults-in-a-configuration-file).

Environment variable: `$WEB_EXT_CONFIG`
</section>

<section id="config-discovery">

### `--config-discovery=false`, `--no-config-discovery`

Disable [automatic config file discovery](/documentation/develop/getting-started-with-web-ext/#automatic-discovery-of-configuration-files).

Environment variable: `$WEB_EXT_CONFIG_DISCOVERY=false` or `$WEB_EXT_NO_CONFIG_DISCOVERY`
</section>

<section id="ignore-files">

### `--ignore-files`, `-i`

A list of [glob patterns](https://github.com/isaacs/node-glob#glob-primer) to define which files should be ignored by `build`, `run`, `lint` and other commands. If you specify relative paths, they will be relative to your `--source-dir`.

Here is an example of ignoring any file within your `--source-dir` (or its subdirectories) that ends in the suffix `.api-key`:

```shell
web-ext build --ignore-files "\*_/_.api-key"
```

You can specify multiple patterns by separating them with spaces:

```shell
web-ext build --ignore-files path/to/first.js path/to/second.js
```

By default, without the use of `--ignore-files`, the following rules are applied:

- Any file ending in `.xpi` or `.zip` is ignored
- Any hidden file (one that starts with a dot) is ignored
- Any directory named `node_modules` is ignored

When you specify custom patterns using `--ignore-files`, they are applied _in addition to_ the default patterns.

::: note
Order is important! You must specify the web-ext command before specifying the `--ignore-files` option.
:::

Environment variable: `$WEB_EXT_IGNORE_FILES`
</section>

<section id="help">

### `--help`, `-h`

Lists all the available commands and options available for the web-ext tool.

::: note
You can list the options available for a specific command by including the command name as you request help, for example `web-ext --help run`.
:::
</section>

<section id="no-input">

### `--no-input`

Disable all features that require standard input.

Environment variable: `$WEB_EXT_NO_INPUT=true`
</section>

<section id="source-dir">

### `--source-dir`, `-s`

Specifies the directory of the extension's source code, e.g. when building or running an extension. This can be specified as a relative or absolute path, and should always be a string.

::: note
If this is not specified, the default is the directory you are currently inside in your terminal.
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

So, for example, instead of specifying the following source option every time you wish to run the extension:

```shell
web-ext run --source-dir=/path/to/my/extension
```

You could set the source directory as an environment variable like this:

```shell
WEB_EXT_SOURCE_DIR=/path/to/my/extension
```

Then you can just specify the run command without options:

```shell
web-ext run
```

A command line option will always override the environment variable. For example, this ignores the environment variable:

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



