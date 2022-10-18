---
layout: sidebar
title: Developing extensions for Firefox for Android (Fennec)
permalink: /documentation/develop/developing-extensions-for-firefox-for-android-fennec/
topic: Develop
tags: [add-ons, beginner, guide, mobile, webextensions]
contributors:
  [caitmuenster, rebloor, juraj, mdnwebdocs-bot, ExE-Boss, Ding-Fan, andrewtruongmoz]
last_updated_by: caitmuenster
date: 2020-09-15
---

{% capture page_hero_banner_content %}

# Developing extensions for Firefox for Android version 68 and earlier

Legacy guide to developing extensions for Firefox for Android version 68 and earlier ("Fennec")

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

::: note alert
This article discusses developing extensions for Firefox for Android for version 68 or earlier (codenamed "Fennec"). Fennec is no longer supported and has been replaced by a new, reimagined mobile browsing experience (codenamed "Fenix"). For more information about developing extensions for Fenix, please see [this article](/documentation/develop/developing-extensions-for-firefox-for-android/).
:::

You'll approach the coding of an extension for Firefox for Android in the same way as you would for a desktop extension; using a text editor or tool of your choice to write the code. However, when you want to test and debug your extension you need to follow a different process, this article walks you through that process.

Using [web-ext](/documentation/develop/getting-started-with-web-ext/) in your extension development is recommended. Follow the set up and debugging processes described here, but use [`web-ext run`](/documentation/develop/web-ext-command-reference#web-ext-run) to execute your extension on Firefox for Android. Among other advantages, using [web-ext](/documentation/develop/getting-started-with-web-ext/) automatically restarts your extension on Firefox for Android when you make edits. Also, you can take advantage of [`web-ext lint`](/documentation/develop/web-ext-command-reference/#web-ext-lint), which performs a check to determine if any of the permissions, manifest keys, and web extension APIs you’re using are incompatible with Firefox for Android.

However, instructions are provided for the steps you need to take should you choose not to use [web-ext](/documentation/develop/getting-started-with-web-ext/).

## Set up your computer and Android emulator or device

Complete some one-off setup tasks on your computer and Android device.

On your development computer:

- To test on your computer by running Firefox for Android in the Android emulator and in Firefox for Android running on a device:

  - Install [Android Studio](https://developer.android.com/studio/index.html).
  - Use the Android Studio [SDK Manager](https://developer.android.com/studio/intro/update.html#sdk-manager) or the [sdkmanager](https://developer.android.com/studio/command-line/sdkmanager.html) command-line tool to install the [Android Platform Tools](https://developer.android.com/studio/releases/platform-tools.html).

- To test in Firefox for Android running on a device only:
  - Download and extract the [standalone Android SDK Platform-Tools package](https://developer.android.com/studio/releases/platform-tools.html) to a suitable location on your computer.
  - On Windows, Mac, or Linux: Add the location into which you extracted the tools package to your operating system’s `PATH` environment variable.
  - Alternatively, on Mac or Linux: Link the binary to `/usr/local/bin` using `sudo ln -s /<extract folder>/platform-tools/adb /usr/local/bin`.

On your device or Android emulator:

- Install [Firefox for Android](https://play.google.com/store/apps/details?id=org.mozilla.firefox&referrer=utm_source%3Dmozilla%26utm_medium%3DReferral%26utm_campaign%3Dmozilla-org) and, if you wish to test the latest features, [Firefox for Android Beta](https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta) or [Firefox Nightly for Developers](https://play.google.com/store/apps/details?id=org.mozilla.fennec_aurora).
- (If you're using [web-ext](/documentation/develop/getting-started-with-web-ext/), you can skip this step.) Open Firefox for Android and turn off signing by browsing to `about:config` then locating and setting `xpinstall.signatures.required` to `false`.

<article class="module-content grid-x grid-padding-x">
<div class="cell small-6">

![about:config screenshot](/assets/img/documentation/develop/set_xpinstall.png)

</div>
</article>

If you are using a device:

- [Enable Android USB debugging on the device](https://developer.android.com/studio/run/device.html). You need to follow step 2 only, but note that you may have to [enable the developer options](https://developer.android.com/studio/debug/dev-options.html) if you do not see them on your device.
- Attach your device to the development computer using a USB cable and on the device, when prompted, allow USB debugging for the connection.

(If you're using [web-ext](/documentation/develop/getting-started-with-web-ext/), you can skip this step.) On your development computer:

- Open a command shell.
- Run `adb devices` <br/>
  You should see output similar to: <br/>
  `List of devices attached` <br/>
  `51800F220F01564 device` <br/>
  Where the hex string is your device’s (or emulator’s) code. This means adb has found your device (or emulator).

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "set-up-your-computer-and-android-emulator-or-device"
  content: content_with_toc
%}

<!-- Single Column Body Module -->

{% capture content %}

## Check for Firefox for Android compatibility

Before running your extension on Firefox for Android, consider using [`web-ext lint`](/documentation/develop/web-ext-command-reference#web-ext-lint). Lint performs a check to determine if any of the permissions, manifest keys, and web extension APIs you’re using are incompatible with Firefox for Android. Lint relies on your extension’s `manifest.json` file including `strict_min_version`, it then reports on the features that are not supported by the minimum version you have set.

In the lint report:

- incompatible permissions are identified by `PERMISSION_FIREFOX_ANDROID_UNSUPPORTED_BY_MIN_VERSION`,
- incompatible manifest keys are identified by `KEY_FIREFOX_ANDROID_UNSUPPORTED_BY_MIN_VERSION`, and
- incompatible APIs are identified by `ANDROID_INCOMPATIBLE_API`

similar to this:

![linter screenshot](/assets/img/documentation/develop/linter_output2.png)

::: note alert
Lint does not report on APIs that are not implemented by Firefox or Firefox for Android.
:::

When setting `strict_min_version`, unless you’re targeting a specific version of Firefox, choose the most recent version of Firefox you expect your extension to be compatible with. For example, you can reasonably expect that most installations of Firefox for Android will be the current or previous version. So, if the current version is 66, consider setting 65 is the minimum version:

```json
"browser_specific_settings": {
  "gecko": {
    "strict_min_version": "65.0"
  }
}
```

{% endcapture %}
{% include modules/one-column.liquid,
  id: "check-for-firefox-for-android-compatibility"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Install and run your extension in Firefox for Android

If you’re using web-ext, follow the [Testing in Firefox for Android](/documentation/develop/getting-started-with-web-ext#testing-in-firefox-for-android) instructions.

If the extension is not signed, ensure that you've included an application ID using the [browser_specific_settings](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in the `manifest.json`:

```json
"browser_specific_settings": {
  "gecko": {
    "id": "borderify@example.com"
  }
}
```

Otherwise, [zip the content of your extension into an xpi file](/documentation/publish/package-your-extension) named to match the application ID, for example, `borderify@example.com.xpi`.

You now have two options for transferring and running your extension: using adb or a website.

### Transfer your extension using adb

On your computer, execute `/path/to/adb push /path/to/<extension file name>.xpi /mnt/sdcard/`, which will transfer the extensions xpi file to your attached emulator or device.

On your Android device or in the emulator, open Firefox for Android and browse to `file:///mnt/sdcard`:

<article class="module-content grid-x grid-padding-x">
<div class="cell small-6">

![xpi file on memory card](/assets/img/documentation/develop/xpi-file-on-memory-card.png)

</div>
</article>

Tap on `<extension file name>.xpi` to install it. You will get a warning about the extension being blocked, tap ALLOW:

<article class="module-content grid-x grid-padding-x">
<div class="cell small-6">

![Blocked add-on message](/assets/img/documentation/develop/blocked-add-on-message.png)

</div>
</article>

An additional warning will tell you the extension is unverified, tap INSTALL:

<article class="module-content grid-x grid-padding-x">
<div class="cell small-6">

![Unverified add-on message](/assets/img/documentation/develop/unverified-add-on-messages.png)

</div>
</article>

Your extension will start running (in this case a copy of the [borderify](https://developer.mozilla.org/Add-ons/WebExtensions/Examples#borderify) example extension):

<article class="module-content grid-x grid-padding-x">
<div class="cell small-6">

![Borderify sample extension in action](/assets/img/documentation/develop/borderify-in-action.png)

</div>
</article>

### Transfer your extension via a website

Upload your xpi file to your website and make it accessible over HTTP. Browse to the file and download it. Follow the installation instructions, which will be similar to those for an extension transferred using adb.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "install-and-run-your-extension-in-firefox-for-android"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Debug your extension

You can debug your extension in the web developer tools and view any `manifest.json` validation messages using `adb logcat`. To make use of these features, first set up Firefox remote debugging [over USB](https://developer.mozilla.org/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_with_WebIDE#Enable_remote_debugging_in_Firefox_for_Android) or [Wi-Fi](https://developer.mozilla.org/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_over_Wifi).

### Using web development tools to debug your extension

With your device connected over USB or Wi-Fi, open `about:debugging` and enable the device connection.

![Enable USB Devices](/assets/img/documentation/develop/enable-device-connection.png)

Your device is listed in the left-hand column, click **Connect**.

![Connect to device](/assets/img/documentation/develop/connect-to-device.png)

If prompted, allow the incoming connection on your Android device. Now start your extension on the Android device. Note, the following instructions assume you are using `web-ext run`. Click your device in the left-hand column and scroll down to find **Processes** in the list of active features in the browser.

![Locate processes](/assets/img/documentation/develop/locate-processes.png)

Click **Inspect** next to **Main Process**. The web developer toolbox displays in **Debugger**.

For much of the debugging work, it's useful to be able to view **Console** with **Inspector** or **Debugger**. You do this using the [split console](https://developer.mozilla.org/docs/Tools/Web_Console/Split_console), press `esc` to activate this mode.

Load a page in which your extension exercises. Now you can access any of the JavaScript in your extension.

![Device debugging](/assets/img/documentation/develop/on-device-debugging.png)

::: note
Unlike desktop Firefox, where content scripts are debugged in context of the page in which they run, you debug and view the console messages from content scripts in Firefox for Android together with background scripts in the Toolbox.
:::

In the **Debugger** you can set breakpoints, step through code, modify the extension's state, and do [everything else you'd expect to be able to do in a debugger](https://developer.mozilla.org/docs/Tools/Debugger). Any messages logged by your code display in **Console**.

To inspect the popup's HTML and CSS, use **Inspector**. First, click the page select icon (![Device debugging](/assets/img/documentation/develop/page-selector.png)) to open the HTML document you want to inspect. You can [review and modify the document's HTML and CSS in **Inspector**](https://developer.mozilla.org/docs/Tools/Page_Inspector), as you would with any webpage.

For more details on using the web developer tools, see [Firefox Developer Tools](https://developer.mozilla.org/docs/Tools).

### Viewing manifest validation messages using the console

In addition to the console messages output through WebIDE, there may also be messages relating to the validation of the extension’s `manifest.json` files. These messages can be viewed using the adb logcat command. To avoid receiving other, unrelated messages, you can pipe the output through grep, filtering by the extension’s ID, for example:

```shell
/path/to/adb logcat | grep borderify@example.com
```

This will give output similar to this:

```shell
I/Gecko (30440): 1496056181889 addons.xpi WARN Addon with ID borderify@example.com already installed, older version will be disabled
```

If your add-on fails to run, check these messages as they may provide information explaining why.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "debug-your-extension"
  content: content
%}

<!-- END: Single Column Body Module -->
