---
layout: sidebar
title: Getting started with web-ext
permalink: /documentation/develop/getting-started-with-web-ext/
published: false
topic: Develop
tags: [Guide, Installing, packaging, Testing, Tools, web-ext, WebExtension]
contributors:
  [
    rebloor,
    mdnwebdocs-bot,
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
  ]
last_updated_by: rebloor
date: 2019-04-16 10:25:55
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Getting started with web-ext

`web-ext` is a command line tool designed to speed up various parts of the extension development process, making development faster and easier. This article explains how to install and use `web-ext`.

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
    cta1_label=""
    cta1_url=""
    cta2_label=""
    cta2_url=""
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section id="installation-section" class="module">
<aside class="module-aside table-of-contents">

{%- include contents.html -%}

</aside>
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Installation

`web-ext` is a node-based application that you install with the [nodejs/npm](https://nodejs.org/) tool. Install web-ext using the following command:

{% highlight javascript %}
npm install --global web-ext
{% endhighlight %}

`web-ext` requires the current [LTS](https://github.com/nodejs/Release#release-schedule) (long-term support) versions of [NodeJS](https://nodejs.org/).

To test whether the installation worked run the following command, which displays the `web-ext` version number:

{% highlight javascript %}
web-ext --version
{% endhighlight %}

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="using-web-ext-section" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## Using web-ext

Before you start using `web-ext` locate an example extension to use—if you don’t have one, use one from the [webextensions-examples](https://github.com/mdn/webextensions-examples) repo.

<section id="testing-out-an-extension"></section>

### Testing out an extension

Test an extension in Firefox by `cd`'ing into your extensions’s root directory and entering:

{% highlight javascript %}
web-ext run
{% endhighlight %}

This starts Firefox and loads the extension temporarily in the browser, just as you can on the [about:debugging page](https://developer.mozilla.org/docs/Tools/about:debugging#Add-ons). Note that this `web-ext` method has the same [limitations regarding prompts for permissions and restart features](/documentation/develop/testing-persistent-and-restart-features/) as about:debugging.

See the [run reference guide](/documentation/develop/web-ext-command-reference/#web-ext-run) to learn more.

### Automatic extension reloading

The `run` command watches your source files and tells Firefox to reload the extension after you edit and save a file. For exmaple, if you changed the `name` property in your `manifest.json` file, Firefox displays the new name. This makes it easy to try out new features because you can see the effect immediately. The automatic reloading feature is active by default, you use it like this:

{% highlight javascript %}
web-ext run
{% endhighlight %}

You can also press the `r` key in the `web-ext` terminal to trigger an extension reload.

If you experience unexpected behavior with the reloading feature, please [file a bug](https://github.com/mozilla/web-ext/issues). You can also disable reloading like this:

{% highlight javascript %}
web-ext run --no-reload
{% endhighlight %}

<p class="note">Extension reloading is only supported in Firefox 49 or higher.</p>

### Testing in different versions of Firefox

To run your extension in a version of [Firefox Desktop](https://www.mozilla.org/firefox/) other than the default, use the `--firefox` option to specify a full path to the binary file. Here is an example for Mac OS:

{% highlight javascript %}
web-ext run --firefox=/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin
{% endhighlight %}

On Windows, the path needs to include `firefox.exe`, for example:

{% highlight javascript %}
web-ext run --firefox="C:\Program Files\Mozilla Firefox\firefox.exe"
{% endhighlight %}

See the [run command](/documentation/develop/web-ext-command-reference/#web-ext-run) reference to learn more.

### Testing in Firefox 48

Firefox 48 was the first stable version to use the WebExtension platform, but it doesn't allow `web-ext` to install an extension remotely. You need to run your extension in Firefox 48 using:

{% highlight javascript %}
web-ext run --pre-install
{% endhighlight %}

<section id="testing-in-firefox-for-android"></section>

### Testing in Firefox for Android

To run your extension in [Firefox for Android](https://www.mozilla.org/firefox/mobile/), follow these instructions to [set up your computer and device](/documentation/develop/developing-extensions-for-firefox-for-android/#set-up-your-computer-and-android-emulator-or-device).

With your device connected to your development computer, run:

{% highlight javascript %}
web-ext run --target=firefox-android
{% endhighlight %}

This command displays the device ID for your connected Android device or devices. If you don't see a list of device IDs, make sure you set up the device for development correctly.

Now, add the device ID to the command:

{% highlight javascript %}
web-ext run --target=firefox-android --android-device=<device ID>
{% endhighlight %}

If you've multiple versions of Firefox installed, you may need to choose a specific version. For example:

{% highlight javascript %}
web-ext run --target=firefox-android ... --firefox-apk=org.mozilla.firefox
{% endhighlight %}

The first time you run this command, you may need to grant Android permissions for the APK. This is because the command needs read/write access to the device storage, so that Firefox for Android can run on a temporary profile. The `web-ext` output guides you in how to grant these permissions.

The `web-ext` command does not alter any of your existing Firefox for Android preferences or data. To see more information about how `web-ext` is interacting with your device, run the command with `--verbose`.

See the [run command](/documentation/develop/web-ext-command-reference/#web-ext-run) reference to learn more.

### Debugging in Firefox for Android

When using `web-ext run` to test an extension on Firefox for Android, you'll notice a message like this in the console output:

{% highlight javascript %}
You can connect to this Android device on TCP port 51499
{% endhighlight %}

This is a remote debugger port that you can [connect to with Firefox's developer tools](https://developer.mozilla.org/docs/Tools/Remote_Debugging/Firefox_for_Android#Connecting). In this case, you'd connect to host `localhost` on port `51499`.

See [this guide](/documentation/develop/developing-extensions-for-firefox-for-android/#debug-your-extension) for more information about debugging an extension on Firefox for Android.

### Testing unsigned extensions

When you execute [web-ext run](/documentation/develop/web-ext-command-reference/#web-ext-run), the extension gets installed temporarily until you close Firefox. This does not violate any signing restrictions. If instead you create a zip file with [web-ext build](/documentation/develop/web-ext-command-reference/#web-ext-build) and try to install it into Firefox, you will see an error telling you that the add-on is not signed. You will need to use an [unbranded build](https://wiki.mozilla.org/Addons/Extension_Signing#Unbranded_Builds) or use a [development build](https://www.mozilla.org/firefox/developer/) to install unsigned extensions.

### Using a custom profile

By default, the `run` command will create a temporary Firefox profile. To run your extension with a specific profile use the `--firefox-profile` option, like this:

{% highlight javascript %}
web-ext run --firefox-profile=your-custom-profile
{% endhighlight %}

This option accepts a string containing the name of your profile or an absolute path to the profile directory. This is helpful if you want to manually configure some settings that will always be available to the `run` command.

### Keeping profile changes

The `run` command does not save any changes made to the custom profile specified by `--firefox-profile`. To keep changes, add this option:

{% highlight javascript %}
web-ext run --keep-profile-changes --firefox-profile=your-custom-profile
{% endhighlight %}

This may be helpful if your extension has many different run states.

<p class="note alert" markdown="1">This option makes the profile specified by `--firefox-profile` completely insecure for daily use. It turns off auto-updates and allows silent remote connections, among other things. Specifically, it will make destructive changes to the profile that are required for `web-ext` to operate.</p>

<section id="packaging-your-extension"></section>

### Packaging your extension

Once you've tested your extension and verified that it's working, you can turn it into a package for submitting to `addons.mozilla.org` using the following command:

{% highlight javascript %}
web-ext build
{% endhighlight %}

This outputs a full path to the generated `.zip` file that can be loaded into a browser.

<p class="note alert" markdown="1">The generated `.zip` file doesn't work on Firefox without signing or adding [`applications.gecko.id`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/applications) key into [`manifest.json`](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json). For more information, please refer [WebExtensions and the Add-on ID](/documentation/develop/extensions-and-the-add-on-id/) page.</p>

`web-ext build` is designed to ignore files that are commonly not wanted in packages, such as `.git`, `node_modules`, and other artifacts.

See the [build reference guide](/documentation/develop/web-ext-command-reference/#web-ext-build) to learn more.

### Signing your extension for self-distribution

As an alternative to publishing your extension on [addons.mozilla.org](https://addons.mozilla.org/), you can self-host your package file but it needs to be [signed by Mozilla](/documentation/publish/signing-and-distribution-overview/) first. The following command packages and signs a ZIP file, then returns it as a signed XPI file for distribution:

{% highlight javascript %}
web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
{% endhighlight %}

The API options are required to specify your [addons.mozilla.org credentials](https://addons.mozilla.org/developers/addon/api/key/).

- `--api-key`: the API key (JWT issuer) from `addons.mozilla.org` needed to sign the extension. This is a string that will look something like `user:12345:67`.
- `--api-secret`: the API secret (JWT secret) from `addons.mozilla.org` needed to sign the extension. This is a string that will look something like `634f34bee43611d2f3c0fd8c06220ac780cff681a578092001183ab62c04e009`.

<p class="note alert" markdown="1">If you've [listed](/documentation/publish/submitting-an-add-on/) the extension on [addons.mozilla.org](https://addons.mozilla.org/), see [Signing a test version of a listed extension](/documentation/develop/getting-started-with-web-ext/#signing-test-version-listed).</p>

See the [sign reference guide](/documentation/develop/web-ext-command-reference/#web-ext-sign) to learn more.

### Signing extensions without an explicit ID

`web-ext` supports signing extensions that do not declare the [applications.gecko.id](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json/applications) property in their manifest. The first time you sign an extension without an explicit ID, [addons.mozilla.org](https://addons.mozilla.org/) will generate an ID and `web-ext` will save it to `.web-extension-id` in the working directory. You should save the ID file so that you can sign future versions of the same extension. If you lose the ID file, you will have to add back the `applications.gecko.id` property or use the `--id` option when signing, for example:

{% highlight javascript %}
web-ext sign --api-key=... --api-secret=... --id="{c23c69a7-f889-447c-9d6b-7694be8035bc}"
{% endhighlight %}

<section id="restricted-environment"></section>
### Signing in a restricted environment

If you're working in an environment that restricts access to certain domains, you can try using a proxy when signing:

{% highlight javascript %}
web-ext sign --api-key=... --api-secret=... --api-proxy=https://yourproxy:6000
{% endhighlight %}

See the [--api-proxy](/documentation/develop/web-ext-command-reference/#api-proxy) option to learn more.

The following domains are used for signing and downloading files:

- `addons.mozilla.org`
- `addons.cdn.mozilla.net`

<section id="signing-test-version-listed"></section>
### Signing a test version of a listed extension

If you've [listed](/documentation/publish/submitting-an-add-on/) an extension on [addons.mozilla.org](https://addons.mozilla.org/), use `web-ext` to create a signed but [unlisted](/documentation/publish/self-distribution/) version for testing purposes. For example, you may wish to distribute an alpha or beta version to users for early feedback and testing.

First, change the version number in your [manifest.json](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json) so that it is different from the latest listed version. Then, create the unlisted version by using the [`--channel`](/documentation/develop/web-ext-command-reference/#web-ext-sign) option like this:
{% highlight javascript %}
web-ext sign --channel=unlisted --api-key=... --api-secret=...
{% endhighlight %}

This signs and downloads an XPI file that can be installed into Firefox.

Once you've finished testing, **to publish the extension you must define** `--channel` **as listed**, as the channel option defaults to the one used previously. So, after incrementing the version in your [manifest.json](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json), run:

{% highlight javascript %}
web-ext sign --channel=listed --api-key=... --api-secret=...
{% endhighlight %}

This publishes and submits your extension for review as if you had uploaded it to [addons.mozilla.org](https://addons.mozilla.org/).

<p class="note alert" markdown="1">Setting `--channel=listed` for a new version of a listed extension is not well supported. It uploads your new version to [addons.mozilla.org](https://addons.mozilla.org/) as if you'd [submitted it manually](/documentation/publish/submitting-an-add-on/). However, the command will fail and you'll have to check [addons.mozilla.org/developers/addons](https://addons.mozilla.org/developers/addons) for the correct status.</p>

See the [sign reference guide](/documentation/develop/web-ext-command-reference/#web-ext-sign) to learn more.

### Checking for code "lint"

Before trying out your extension with the [run](/documentation/develop/web-ext-command-reference/#web-ext-run) command or submitting your package to [addons.mozilla.org](https://addons.mozilla.org/firefox/), use the `lint` command to make sure your [manifest](https://developer.mozilla.org/Add-ons/WebExtensions/manifest.json) and other source files do not contain any errors. You can also set [strict_min_version](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in your extension’s manifest file and lint will report on the permissions, manifest keys, and web extension APIs used that are not available in that version. Example:

{% highlight javascript %}
web-ext lint
{% endhighlight %}

This uses the [addons-linter](https://github.com/mozilla/addons-linter) library to walk through your source code directory and report any errors, such as the declaration of an unknown permission.

See the [lint reference guide](/documentation/develop/web-ext-command-reference/#web-ext-lint) to learn more.

<section id="setting-option-defaults-in-a-configuration-file"></section>
### Setting option defaults in a configuration file

You can specify `--config=my-config.js` to set default values for any option. Here is an example with the `build` command:

{% highlight javascript %}
web-ext --config=my-config.js build
{% endhighlight %}

The file should be a CommonJS module [as understood by NodeJS](https://nodejs.org/docs/latest/api/modules.html#modules_modules) and must export each configuration value. Here is how you would set the default value of [--verbose](/documentation/develop/web-ext-command-reference/#verbose) to `true`:

{% highlight javascript %}
module.exports = {
  verbose: true,
};
{% endhighlight %}

If you want to specify options that only apply to a specific command, you nest the configuration under the command name. Here is an example of adding configuration for [--overwrite-dest](/documentation/develop/web-ext-command-reference/#overwrite-dest) that only applies to the `build` command as well as [--firefox](/documentation/develop/web-ext-command-reference/#--firefox) that only applies to the `run` command:

{% highlight javascript %}
module.exports = {
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
{% endhighlight %}

To create a configuration key for a command line option, you remove the preceding dashes and convert the name to camel case. As you can see from this example, `--overwrite-dest` was converted to `overwriteDest`.

If an option can be specified multiple times on the command line then you define it as an array. For example, here is how to specify multiple [--ignore-files](/documentation/develop/web-ext-command-reference/#global-options) patterns:

{% highlight javascript %}
module.exports = {
  ignoreFiles: [
    'package-lock.json',
    'yarn.lock',
  ],
};
{% endhighlight %}

`web-ext` will also try to load its configuration options from a `"webExt"` property included in the `package.json` file in the current directory:

{% highlight javascript %}
{
  "name": "an-extension-src-dir-with-a-package-json",
  "version": "1.0.0",
  ...
  "webExt": {
    "sourceDir": "dist/extension/"
  }
}
{% endhighlight %}

<section id="automatic-discovery-of-configuration-files"></section>
### Automatic discovery of configuration files

`web-ext` will load existing configuration files in the following order:

- A config file named .web-ext-config.js in your home directory, for example: - On Windows: `C:\Users\<username>\.web-ext-config.js` - On macOS: `/Users/<username>/.web-ext-config.js` - On Linux: `/home/<username>/.web-ext-config.js`
- A config property named `"webExt"` included in a `package.json` file in the current directory.
- A config file named `web-ext-config.js` in the current directory.

If a home directory config and a local directory config define the same option, the value from the latter file will be used.

To disable automatic loading of configuration files, set this option:

{% highlight javascript %}
web-ext --no-config-discovery run
{% endhighlight %}

To diagnose an issue related to config files, re-run your command with `--verbose`. This will tell you which config file affected which option value.

### Specifying different source and destination directories

The preceding commands use default directories for the extension source and artifact creation (for example, built `.zip` files). The defaults are:

- Source: The directory you are in.
- Artifacts: A directory called `./web-ext-artifacts`, created inside the current directory.

You can specify different source and destination directories using the `--source-dir` and `--artifacts-dir` options when running your commands. Their values can be relative or absolute paths, but must always be specified as strings. Here is an example of specifying both options when building an extension:

{% highlight javascript %}
web-ext build --source-dir=webextension-examples/notify-link-clicks-i18n --artifacts-dir=zips
{% endhighlight %}

### Outputting verbose messages

To see in detail what web-ext is doing when you run a command, include the --verbose option. For example:

{% highlight javascript %}
web-ext build --verbose
{% endhighlight %}

### Viewing all commands and options

You can list all commands and options like this:

{% highlight javascript %}
web-ext --help
{% endhighlight %}

You can list options for a specific command by adding it as an argument:

{% highlight javascript %}
web-ext --help run
{% endhighlight %}

### Detecting temporary installation

Your extension can detect whether it was installed using `web-ext run`, rather than as a built and signed extension downloaded from `addons.mozilla.org`. Listen for the [`runtime.onInstalled`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) event and check the value of `details.temporary`.

### Using web-ext from a script

You can use `web-ext` as a `NodeJS module`. Here is [more information](https://github.com/mozilla/web-ext#using-web-ext-in-nodejs-code), with example code.

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

<section id="see-also-section" class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

## See also

[web-ext repo](https://github.com/mozilla/web-ext)
[web-ext command reference](/documentation/develop/web-ext-command-reference/)

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
