---
layout: sidebar
title: Developing extensions for Firefox for Android
permalink: /documentation/develop/developing-extensions-for-firefox-for-android/
topic: Develop
tags: [add-ons, beginner, guide, mobile, webextensions]
contributors:
  [Rob--W, caitmuenster, rebloor, juraj, mdnwebdocs-bot, ExE-Boss, Ding-Fan, andrewtruongmoz]
last_updated_by: Rob--W
date: 2023-08-29
---

{% capture page_hero_banner_content %}

# Developing extensions for Firefox for Android

Learn more about developing extensions for Firefox for Android

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

You approach the coding of an extension for Firefox for Android in the same way as you would for a desktop extension; using a text editor or tool of your choice to write the code. However, when you want to test and debug your extension you need to follow a different process, this article walks you through that process.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "introduction"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Set up your computer and Android emulator or device

Complete some one-off setup tasks on your computer and Android device.

On your development computer:

- Install or update [web-ext](https://github.com/mozilla/web-ext) to version 4.1.0 or later.
- Use the Android Studio [SDK Manager](https://developer.android.com/studio/intro/update.html#sdk-manager) or the [sdkmanager](https://developer.android.com/studio/command-line/sdkmanager.html) command-line tool to install the [Android Platform Tools](https://developer.android.com/studio/releases/platform-tools.html)
- Make sure you have adb installed ([Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip), [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip), [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)) and in your `PATH`.

On your device or Android emulator:

- Install [Firefox for Android Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix)
- [Enable Android USB debugging on the device](https://developer.android.com/studio/debug/dev-options).
- Attach your device to the development computer using a USB cable. When prompted, allow USB debugging for the connection.
- In the settings view for Firefox for Android Nightly, enable "Remote debugging via USB."

Then, on your development computer:

- Open a command shell.
- Run `adb devices`
  You should see output similar to:
  ``` shell
  List of devices attached
  51800F220F01564 device
  ```
  Where the hex string is your device’s (or emulator’s) code. This means adb has found your device (or emulator).

{% endcapture %}
{% include modules/one-column.liquid,
  id: "set-up-your-computer-and-android-emulator-or-device"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Check for Firefox for Android compatibility

Before running your extension on Firefox for Android, consider using [`web-ext lint`](/documentation/develop/web-ext-command-reference#web-ext-lint). Lint performs a check to determine if any of the permissions, manifest keys, and web extension APIs you’re using are incompatible with Firefox for Android. Lint relies on your extension’s manifest.json file including `strict_min_version`, it then reports on the features that are not supported by the minimum version you have set.

In the lint report:

- incompatible permissions are identified by `PERMISSION_FIREFOX_ANDROID_UNSUPPORTED_BY_MIN_VERSION`,
- incompatible manifest keys are identified by `KEY_FIREFOX_ANDROID_UNSUPPORTED_BY_MIN_VERSION`, and
- incompatible APIs are identified by `ANDROID_INCOMPATIBLE_API`

similar to this:

![linter screenshot](/assets/img/documentation/develop/linter_output2.png)

::: note alert
Lint does not report on APIs that are not implemented by Firefox or Firefox for Android.
:::

When setting `strict_min_version` in [`browser_specific_settings`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings), unless you’re targeting a specific version of Firefox, choose the most recent version of Firefox you expect your extension to be compatible with. Due to the different APIs and form factors on Android (compared to desktop Firefox), set `gecko_android` after explicitly verifying compatibility. This field enables a compatibility range that is distinct from Firefox for desktop.

```json
"browser_specific_settings": {
  "gecko": {
    "strict_min_version": "102.0"
  },
  "gecko_android": {
    "strict_min_version": "119.0a1"
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

::: note
These instructions are for temporarily loading an extension. Instructions for persistent loading of extensions in Firefox for Android Nightly or Beta can be found on [this blog post](https://blog.mozilla.org/addons/2020/09/29/expanded-extension-support-in-firefox-for-android-nightly/).
:::

In the unzipped directory of your extension, run `web-ext run -t firefox-android` and follow the instructions on screen to make sure you select the right device. Select `org.mozilla.fenix` as the apkname (or `org.mozilla.firefox_beta` for Firefox Beta for Android).

Here is an example of the command:

<!-- Syntax Highlighting -->

```shell
web-ext run -t firefox-android --adb-device XXX --firefox-apk org.mozilla.fenix
```

<!-- END: Syntax Highlighting -->

::: note
 The add-on will be loaded in the main browser profile instead of a new temporary profile directory.
:::

{% endcapture %}
{% include modules/one-column.liquid,
  id: "install-and-run-your-extension-in-firefox-for-android"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Debug your extension

::: note alert
Currently, you cannot inspect the markup of Fenix's browserAction popups using the Firefox Developer Tools Inspector (see [bug 1637616](https://bugzilla.mozilla.org/show_bug.cgi?id=1637616)). As a workaround, we recommend that you temporarily change the extension to open the popup extension page into a tab to be able to inspect it.
:::

You can debug your extension in the web developer tools and view any `manifest.json` validation messages using `adb logcat`. To make use of these features, first set up Firefox remote debugging [over USB](https://developer.android.com/studio/debug/dev-options).

### Using web development tools to debug your extension

With your device connected over USB, open `about:debugging` and enable the device connection.

![Enable USB Devices](/assets/img/documentation/develop/enable-device-connection.png)

Your device is listed in the left-hand column, click **Connect**.

![Connect to device](/assets/img/documentation/develop/connect-to-device.png)

If prompted, allow the incoming connection on your Android device. Now start your extension on the Android device using `web-ext run`. You will need to have at least one tab opened in order for your extension to load. Click your device in the left-hand column and scroll down to find **Processes** in the list of active features in the browser.

![Locate processes](/assets/img/documentation/develop/locate-processes.png)

Click **Inspect** next to **Main Process**. The web developer toolbox displays in **Debugger**.

For much of the debugging work, it's useful to be able to view **Console** with **Inspector** or **Debugger**. You do this using the [split console](https://developer.mozilla.org/docs/Tools/Web_Console/Split_console), press `esc` to activate this mode.

Load a page in which your extension exercises. Now you can access any of the JavaScript in your extension.

![Device debugging](/assets/img/documentation/develop/on-device-debugging.png)

::: note
Content scripts can be reached and debugged when connected to the main process or to a tab target where a content script is running.
:::

In the **Debugger** you can set breakpoints, step through code, modify the extension's state, and do [everything else you'd expect to be able to do in a debugger](https://developer.mozilla.org/docs/Tools/Debugger). Any messages logged by your code display in **Console**.

To inspect the popup's HTML and CSS, use **Inspector**. First, click the page select icon (![Device debugging](/assets/img/documentation/develop/page-selector.png)) to open the HTML document you want to inspect. You can [review and modify the document's HTML and CSS in **Inspector**](https://developer.mozilla.org/docs/Tools/Page_Inspector), as you would with any webpage.

For more details on using the web developer tools, see [Firefox Developer Tools](https://developer.mozilla.org/docs/Tools).

### Viewing manifest validation messages using the console

In addition to the messages from your code, the console may also include messages about the validation of the extension's `manifest.json` files. These messages can be viewed using the adb logcat command. To avoid receiving other unrelated messages, you can pipe the output through grep, filtering by the extension's ID. For example:

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
