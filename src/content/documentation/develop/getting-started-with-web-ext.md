---
layout: sidebar
title: Getting started with web-ext
permalink: /documentation/develop/getting-started-with-web-ext/
topic: Develop
tags: [guide, installing, packaging, testing, tools, web-ext, webextension]
contributors:
  [
    caitmuenster,
    rebloor,
    Sheppy,
    kumar303,
    platy,
    hellosct1,
    lgreco,
    wbamberg,
    andrewtruongmoz,
    saintsebastian,
    arai,
    tofumatt,
    chrisdavidmills,
    ankushduacodes,
    huyenltnguyen,
    rebloor,
    Jamesllllllllll,
    TimWitzdam
  ]
last_updated_by: TimWitzdam
date: 2024-07-31
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Getting started with web-ext

`web-ext` is a command-line tool designed to speed up and simplify development. This article explains how to install and use `web-ext`.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="installation-section" class="module">
<aside class="module-aside table-of-contents">

{%- include contents.liquid -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Installation

`web-ext` is a Node-based application. You install it with `brew` or the [NodeJS](https://nodejs.org/) `npm` tool.

Install with `brew` using:

```shell
brew install web-ext
```

Install with `npm` using:

```shell
npm install --global web-ext
```

`web-ext` requires the current [LTS](https://github.com/nodejs/Release#release-schedule) (long-term support) versions of [NodeJS](https://nodejs.org/).

To test whether the installation worked, in a new terminal window, run this command to display the `web-ext` version number:

```shell
web-ext --version
```

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="update-section" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Update

`web-ext` notifies you when a new version is available. To update, use the same commands as you did to install:

```shell
brew install web-ext
```
or

```shell
npm install --global web-ext
```

To see which version you now have installed, in a new terminal window, run:

```shell
web-ext --version
```

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="using-web-ext-section" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Using web-ext

Before you use `web-ext`, locate an example extension. If you don’t have one, use one from the [webextensions-examples](https://github.com/mdn/webextensions-examples) repo. If you want to start from scratch, use the community-developed [boilerplating tool](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/#boilerplating-tools) to start with a fresh extension.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->


<!-- Single Column Body Module -->

<section id="check-with-lint" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Check your code

Before trying out your extension with the [`run`](/documentation/develop/web-ext-command-reference/#web-ext-run) command or submitting your package to [addons.mozilla.org](https://addons.mozilla.org/firefox/), use the `lint` command to ensure your [manifest](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json) and other source files are error-free. If you set [`strict_min_version`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in your extension’s manifest file, lint reports on the permissions, manifest keys, and web extension APIs used that are not available in that version. 

To check your extension code, `cd` into your extension’s root directory and enter:

```shell
web-ext lint
```

This uses the [addons-linter](https://github.com/mozilla/addons-linter) library to walk through your source code directory and report any errors, such as declaring an unknown permission.

See the [lint reference guide](/documentation/develop/web-ext-command-reference/#web-ext-lint) to learn more.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->


<!-- Single Column Body Module -->

<section id="test-and-degug-an-extention" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Test and debug your extension

In this section, learn how to:

- [Test your extension](#testing-out-an-extension)
- [Automatically reload your extension](#automatically-reload-your-extension)
- [Test in different versions of Firefox](#test-in-different-versions-of-firefox)
- [Test in Firefox for Android](#testing-in-firefox-for-android)
- [Debug in Firefox for Android](#debug-in-firefox-for-android)
- [Test unsigned extensions](#test-unsigned-extensions)
- [Use a custom profile](#use-a-custom-profile)
- [Keep profile changes](#keep-profile-changes)

<section id="testing-out-an-extension"></section>

### Test your extension

Test an extension in Firefox by `cd`'ing into your extension’s root directory and entering:

```shell
web-ext run
```

This starts Firefox and loads the extension temporarily in the browser, just as you can on the [`about:debugging` page](https://developer.mozilla.org/docs/Tools/about:debugging#Add-ons). Note that this `web-ext` method has the same [limitations regarding prompts for permissions and restart features](/documentation/develop/testing-persistent-and-restart-features/) as `about:debugging`.

See the [run reference guide](/documentation/develop/web-ext-command-reference/#web-ext-run) to learn more.

<section id="automatically-reload-your-extension"></section>

### Automatically reload your extension

The `run` command watches your source files and tells Firefox to reload the extension after you edit and save a file. For example, if you change the `name` property in your `manifest.json` file, Firefox displays the new name. This makes it easy to try out new features because you can see the effect immediately. The automatic reloading feature is active by default. You use it like this:

```shell
web-ext run
```

You can also press the `r` key in the `web-ext` terminal to trigger an extension reload.

If you experience unexpected behavior with the reloading feature, please [file a bug](https://github.com/mozilla/web-ext/issues). You can also disable reloading like this:

```shell
web-ext run --no-reload
```

::: note
Extension reloading is only supported in Firefox 49 or higher.
:::

<section id="test-in-different-versions-of-firefox"></section>

### Test in different versions of Firefox

To run your extension in a version of [Firefox Desktop](https://www.mozilla.org/firefox/) other than the default, use the `--firefox` option to specify a full path to the binary file. Here is an example for Mac OS:

```shell
web-ext run --firefox=/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin
```

On Windows, the path needs to include `firefox.exe`, for example:

```shell
web-ext run --firefox="C:\Program Files\Mozilla Firefox\firefox.exe"
```

See the [run command](/documentation/develop/web-ext-command-reference/#web-ext-run) reference to learn more.

<section id="testing-in-firefox-for-android"></section>

### Test in Firefox for Android

To run your extension in [Firefox for Android](https://www.mozilla.org/firefox/mobile/), follow the instructions to [set up your computer and device](/documentation/develop/developing-extensions-for-firefox-for-android/#set-up-your-computer-and-android-emulator-or-device).

With your device connected to your development computer, run:

```shell
web-ext run --target=firefox-android
```

This command displays the device ID for your connected Android device or devices. If you don't see a device ID, check that you set up the device correctly for development.

Now, add the device ID to the command:

```shell
web-ext run --target=firefox-android --android-device=<device ID>
```

If you've installed multiple versions of Firefox on the device, choose one like this:

```shell
web-ext run --target=firefox-android ... --firefox-apk=org.mozilla.firefox
```

The first time you run this command, you may need to grant Android permissions for the APK. This is because the command needs read/write access to the device storage so that Firefox for Android can run on a temporary profile. The `web-ext` output guides you on how to grant these permissions.

The `web-ext` command does not alter your Firefox for Android preferences or data. To learn more about how `web-ext` interacts with your device, run the command with `--verbose`.

See the [run command](/documentation/develop/web-ext-command-reference/#web-ext-run) reference to learn more.

<section id="debug-in-firefox-for-android"></section>

### Debug in Firefox for Android

When using `web-ext run` to test an extension on Firefox for Android, you see a message like this in the console output:

```shell
You can connect to this Android device on TCP port 51499
```

This is a remote debugger port that you can [connect to with Firefox's developer tools](https://developer.mozilla.org/docs/Tools/Remote_Debugging/Firefox_for_Android#Connecting). In this case, you connect to host `localhost` on port `51499`.

See [the Debug your extension guide](/documentation/develop/developing-extensions-for-firefox-for-android/#debug-your-extension) for more information about debugging an extension on Firefox for Android.

<section id="test-unsigned-extensions"></section>

### Test unsigned extensions

When you execute [web-ext run](/documentation/develop/web-ext-command-reference/#web-ext-run), the extension is installed and remains installed until you close Firefox. This does not violate any signing restrictions. If instead you create a zip file with [web-ext build](/documentation/develop/web-ext-command-reference/#web-ext-build) and try to install it into Firefox, you see an error telling you that the add-on is not signed. To install unsigned extensions, use an [unbranded build](https://wiki.mozilla.org/Addons/Extension_Signing#Unbranded_Builds) or [development build](https://www.mozilla.org/firefox/developer/).

<section id="use-a-custom-profile"></section>

### Use a custom profile

By default, the `run` command creates a temporary Firefox profile. To run your extension with a specific profile use the `--firefox-profile` option, like this:

```shell
web-ext run --firefox-profile=your-custom-profile
```

This option accepts a string containing the name of your profile or an absolute path to the profile directory. This is helpful if you want to configure settings for the `run` command.

<section id="keep-profile-changes"></section>

### Keep profile changes

The `run` command does not save any changes made to the custom profile specified by `--firefox-profile`. To keep changes, use the `--keep-profile-changes` option:

```shell
web-ext run --keep-profile-changes --firefox-profile=your-custom-profile
```

This may be helpful if your extension has many different run states.

::: note alert
This option makes destructive changes to the profile that are required for `web-ext` to operate. It turns off auto-updates and allows silent remote connections, among other things. These changes make the profile insecure for daily use. 
::: 

</div>
</article>
</section>

<!-- END: Single Column Body Module -->


<!-- Single Column Body Module -->

<section id="package-sign-and-publish-an-extension" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Package, sign, and publish your extension

In this section learn how to:

- [Package your extension](#packaging-your-extension)
- [Sign and submit your extension for publication](#sign-and-submit-for-publication)
- [Sign and submit your updated extension for publication](#sign-and-submit-update)
- [Sign your extension for self-distribution](#sign-for-self-distribution)
- [Sign in a restricted environment](#restricted-environment)
- [Sign a test version of a listed extension](#signing-test-version-listed)

<section id="packaging-your-extension"></section>

### Package your extension

After testing your extension and verifying that it's working, you can turn it into a package for submitting to `addons.mozilla.org` using this command:

```shell
web-ext build
```

This outputs a full path to the generated `.zip` file that can be loaded into a browser.

::: note alert
The generated `.zip` file doesn't work on Firefox without signing or adding [`browser_specific_settings.gecko.id`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key into [`manifest.json`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json). For more information, please refer to the [WebExtensions and the Add-on ID](/documentation/develop/extensions-and-the-add-on-id/) page.
:::

`web-ext build` is designed to ignore files that are commonly not wanted in packages, such as `.git`, `node_modules`, and other artifacts.

See the [build reference guide](/documentation/develop/web-ext-command-reference/#web-ext-build) to learn more.

<section id="sign-and-submit-for-publication"></section>

### Sign and submit your extension for publication

When you have confirmed that your extension works as expected, you can publish it on [addons.mozilla.org](https://addons.mozilla.org/). You can do this using the website or  `web-ext sign`. To use `web-ext sign` you need to:

- if you're submitting a Manifest V3 extension, ensure that you've set an ID for the extension in its manifest.json file using the key [`browser_specific_settings.gecko.id`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/browser_specific_settings).
- create a JSON file containing the metadata needed by addons.mozilla.org to list the extension.
- obtain an API key from addons.mozilla.org.

#### Create your metadata file

Metadata is required for the first version of an extension listed on AMO. This metadata can include any of the properties of the [addons.mozilla.org add-on API Create request JSON object](https://mozilla.github.io/addons-server/topics/api/addons.html#create). However, the`"categories"` and `"summary"` properties must be provided.

For example:

``` json
{
  "version": { "license": "MPL-2.0" },
  "categories": { "firefox": ["shopping", "bookmarks"] },
  "contributions_url": "https://donate.mozilla.org",
  "requires_payment": false,
  "homepage": {
    "en-US": "http://example.org?lang=en-US",
    "fr": "http://example.org?lang=fr"
  },
  "support_email": {
    "en-US": "support@example.org",
    "fr": "support-fr@example.org"
  }
}
```

#### Obtain your API key

Visit the [addons.mozilla.org credentials](https://addons.mozilla.org/developers/addon/api/key/) page. You must register if you haven't done so before. From this page you obtain:

- The JWT issuer key, a string that looks something like `user:12345:67`. You supply this to `web-ext sign` as the API key in `--api-key`.
- The JWT secret, a string that looks something like `634f34bee43611d2f3c0fd8c06220ac780cff681a578092001183ab62c04e009`. You supply this to `web-ext sign` as the API secret in `--api-secret`. 

#### Run `web-ext sign`

You can now run `web-ext sign` supplying the API key and location of the JSON file containing the metedata.:

```shell
web-ext sign --channel=listed --amo-metadata=<path to your metadata JSON file> --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
```
If you sign a Manifest V2 extension without an explicit ID, [addons.mozilla.org](https://addons.mozilla.org/) generates an ID and `web-ext` saves it to `.web-extension-id` in the working directory. Add the ID to the extension's [`browser_specific_settings.gecko.id`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in its manifest.json file. The ID needs to be present to publish updates with `web-ext`.

See the [sign reference guide](/documentation/develop/web-ext-command-reference/#web-ext-sign) to learn more.

<section id="sign-and-submit-update"></section>

### Sign and submit your updated extension for publication

As you improve and update your extension you want to submit new versions for publication on [addons.mozilla.org](https://addons.mozilla.org/). You can do this using the website or `web-ext sign`. To use `web-ext sign` you need to:

- ensure you've set the extension's ID in the manifest.json key [`browser_specific_settings.gecko.id`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/browser_specific_settings).
- create a JSON file containing any updated metadata to be used on addons.mozilla.org.
- obtain an API key from addons.mozilla.org.

#### Create your metadata file

When publishing an extension update metadata isn't required. However, any of the properties of the [addons.mozilla.org add-on API Version Create request JSON object](https://mozilla.github.io/addons-server/topics/api/addons.html#version-create) can be provided.

#### Obtain your API key

Visit the [addons.mozilla.org credentials](https://addons.mozilla.org/developers/addon/api/key/) page. You must register if you haven't done so before. From this page you obtain:

- The JWT issuer key, a string that looks something like `user:12345:67`. You supply this to `web-ext sign` as the API key in `--api-key`.
- The JWT secret, a string that looks something like `634f34bee43611d2f3c0fd8c06220ac780cff681a578092001183ab62c04e009`. You supply this to `web-ext sign` as the API secret in `--api-secret`. 

#### Run `web-ext sign`

You can now run `web-ext sign` supplying the API key and location of the JSON file containing the metedata.:

```shell
web-ext sign --channel=listed --amo-metadata=<path to your metadata JSON file> --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
```

See the [sign reference guide](/documentation/develop/web-ext-command-reference/#web-ext-sign) to learn more.

<section id="sign-for-self-distribution"></section>

### Sign your extension for self-distribution

As an alternative to publishing your extension on [addons.mozilla.org](https://addons.mozilla.org/), you can self-host your package file but it needs to be [signed by Mozilla](/documentation/publish/signing-and-distribution-overview/) first. The following command packages and signs a ZIP file, then returns it as a signed XPI file for distribution:

```shell
web-ext sign --channel=unlisted --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
```

The API options are required to specify your [addons.mozilla.org credentials](https://addons.mozilla.org/developers/addon/api/key/).

- `--api-key`: the API key (JWT issuer) from `addons.mozilla.org` needed to sign the extension. This is a string that will look something like `user:12345:67`.
- `--api-secret`: the API secret (JWT secret) from `addons.mozilla.org` needed to sign the extension. This is a string that will look something like `634f34bee43611d2f3c0fd8c06220ac780cff681a578092001183ab62c04e009`.

<div class="note alert">

If you've [listed](/documentation/publish/submitting-an-add-on/) the extension on [addons.mozilla.org](https://addons.mozilla.org/), see [Signing a test version of a listed extension](/documentation/develop/getting-started-with-web-ext/#signing-test-version-listed).

</div>

See the [sign reference guide](/documentation/develop/web-ext-command-reference/#web-ext-sign) to learn more.

<section id="restricted-environment"></section>

### Sign in a restricted environment

If you're working in an environment that restricts access to certain domains, you can try using a proxy when signing:

```shell
web-ext sign --api-key=... --api-secret=... --api-proxy=https://yourproxy:6000
```

See the [--api-proxy](/documentation/develop/web-ext-command-reference/#api-proxy) option to learn more.

The following domains are used for signing and downloading files:

- `addons.mozilla.org`
- `addons.cdn.mozilla.net`

<section id="signing-test-version-listed"></section>

### Sign a test version of a listed extension

If you've [listed](/documentation/publish/submitting-an-add-on/) an extension on [addons.mozilla.org](https://addons.mozilla.org/), use `web-ext` to create a signed but [unlisted](/documentation/publish/self-distribution/) version for testing purposes. For example, you may wish to distribute an alpha or beta version to users for early feedback and testing.

First, change the version number in your [`manifest.json`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json) so that it is different from the latest listed version. Then, create the unlisted version by using the [`--channel`](/documentation/develop/web-ext-command-reference/#web-ext-sign) option like this:

```shell
web-ext sign --channel=unlisted --api-key=... --api-secret=...
```

This signs and downloads an XPI file that can be installed into Firefox.

See the [sign reference guide](/documentation/develop/web-ext-command-reference/#web-ext-sign) to learn more.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->


<!-- Single Column Body Module -->

<section id="use-the-configuration-file" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Use the configuration file

In this section learn how to:

- [Set option defaults in a configuration file](#setting-option-defaults-in-a-configuration-file)
- [Automatically discover configuration files](#automatic-discovery-of-configuration-files)


<section id="setting-option-defaults-in-a-configuration-file"></section>

### Set option defaults in a configuration file

You can specify `--config=my-config.cjs` or `--config=my-config.mjs` to set default values for any option. Here is an example with the `build` command:

```shell
web-ext --config=my-config.mjs build
```

The file should be a CommonJS module [as understood by NodeJS](https://nodejs.org/docs/latest/api/modules.html#modules_modules) and must export each configuration value. Here is how you would set the default value of [--verbose](/documentation/develop/web-ext-command-reference/#verbose) to `true`:

```js
export default {
  verbose: true,
};
```

If you want to specify options that only apply to a specific command, you nest the configuration under the command name. Here is an example of adding configuration for [--overwrite-dest](/documentation/develop/web-ext-command-reference/#overwrite-dest) that only applies to the `build` command and [--firefox](/documentation/develop/web-ext-command-reference/#--firefox) that only applies to the `run` command:

```js
export default {
  // Global options:
  verbose: true,
  // Command options:
  build: {
    overwriteDest: true,
  },
  run: {
    firefox: 'nightly',
  },
};
```

To create a configuration key for a command line option, you remove the preceding dashes and convert the name to camel case. As you can see from this example, `--overwrite-dest` was converted to `overwriteDest`.

If an option can be specified multiple times on the command line then you define it as an array. For example, here is how to specify multiple [--ignore-files](/documentation/develop/web-ext-command-reference/#global-options) patterns:

```js
export default {
  ignoreFiles: [
    'package-lock.json',
    'yarn.lock',
  ],
};
```

`web-ext` also tries to load its configuration options from a `"webExt"` property included in the `package.json` file in the current directory:

```json
{
  "name": "an-extension-src-dir-with-a-package-json",
  "version": "1.0.0",
  ...
  "webExt": {
    "sourceDir": "dist/extension/"
  }
}
```

<section id="automatic-discovery-of-configuration-files"></section>

### Automatically discover configuration files

`web-ext` loads configuration files in the following order:

- A config file named `.web-ext-config.mjs` in your home directory, for example: 
  - On Windows: `C:\Users\<username>\.web-ext-config.mjs`
  - On macOS: `/Users/<username>/.web-ext-config.mjs`
  - On Linux: `/home/<username>/.web-ext-config.mjs`
- A config property named `"webExt"` included in a `package.json` file in the current directory.
- A config file named `web-ext-config.mjs` in the current directory.

(`web-ext` also recognizes files named `.web-ext-config.cjs` as configuration files.)

If a home directory config and a local directory config define the same option, the value from the latter file is used.

For example, creating `~/.web-ext-config.mjs` containg:

```js
export default {
  "sign": {
    "apiKey": "<API_KEY>",
    "apiSecret": "<API_SECRET>"
  }
}
```

Is the equivalent of:

```shell
web-ext sign --api-key <API_KEY> --api-secret <API_SECRET>
```

To disable automatic loading of configuration files, set this option:

```shell
web-ext --no-config-discovery run
```

To diagnose an issue related to config files, re-run your command with `--verbose`. This tells you which config file affected which option value.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="advanced-topics" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## Advanced topics

In this section learn how to:

- [Specify different source and destination directories](#specify-different-source-and-destination)
- [Output verbose messages](#output-verbose-messages)
- [View all commands and options](#view-all-commands-and-options)
- [Detect temporary installation](#detect-temporary-installation)
- [Use web-ext from a script](#use-web-ext-from-a-script)


<section id="specify-different-source-and-destination"></section>

### Specify different source and destination directories

The commands use default directories for the extension source and artifact creation (for example, built `.zip` files). The defaults are:

- Source: The directory you are in.
- Artifacts: A directory called `./web-ext-artifacts`, created inside the current directory.

You can specify different source and destination directories using the `--source-dir` and `--artifacts-dir` options when running your commands. Their values can be relative or absolute paths, but must always be specified as strings. Here is an example of specifying both options when building an extension:

```shell
web-ext build --source-dir=webextension-examples/notify-link-clicks-i18n --artifacts-dir=zips
```

<section id="output-verbose-messages"></section>

### Output verbose messages

To see in detail what web-ext is doing when you run a command, include the --verbose option. For example:

```shell
web-ext build --verbose
```

<section id="view-all-commands-and-options"></section>

### View all commands and options

You can list all commands and options like this:

```shell
web-ext --help
```

You can list options for a specific command by adding it as an argument:

```shell
web-ext --help run
```

<section id="detect-temporary-installation"></section>

### Detect temporary installation

Your extension can detect whether it was installed using `web-ext run`, rather than as a built and signed extension downloaded from `addons.mozilla.org`. Listen for the [`runtime.onInstalled`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) event and check the value of `details.temporary`.

<section id="use-web-ext-from-a-script"></section>

### Use web-ext from a script

You can use `web-ext` as a `NodeJS module`. Here is [more information](https://github.com/mozilla/web-ext#using-web-ext-in-nodejs-code), with example code.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="see-also-section" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12">

## See also

[web-ext repo](https://github.com/mozilla/web-ext)
[web-ext command reference](/documentation/develop/web-ext-command-reference/)

</div>
</article>
</section>

<!-- END: Single Column Body Module -->


