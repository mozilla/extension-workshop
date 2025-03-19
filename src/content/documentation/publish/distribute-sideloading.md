---
layout: sidebar
title: Add-ons for desktop apps
permalink: /documentation/publish/distribute-sideloading/
topic: Publish
tags: [add-on, distribution, sideloading, guide, installation]
contributors: [caitmuenster, irenesmith, jwilk, hellosct1, gray_-_wolf, luanmm, rebloor]
last_updated_by: caitmuenster
date: 2019-11-06 04:05:42
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Sideloading add-ons

You may want to send a user your add-on’s XPI file by some means other than a web download, such as an email distribution of a beta version for user testing. In this case, there are two options for installing the add-on:

- Installing an extension from file in desktop Firefox or Firefox for Android.
- Adding the file to one of the standard extension folders.

::: note
No automatic updates are performed for add-ons installed using these methods. You have to deliver a new XPI file to your user for each update. However, automatic compatibility checks are performed.
:::

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Preparing your add-on

Regardless of the sideloading method used, you must prepare the add-on as follows:

1. Ensure the add-on includes an ID by adding this to its `manifest.json` file, replacing **_your-add-on-name@your-domain.com_** with a suitable ID for your add-on:

<!-- Syntax Highlighting -->
```json
"browser_specific_settings": {
  "gecko": {
    "id": "your-add-on-name@your-domain.com"
  }
}
```
<!-- END: Syntax Highlighting -->

An email address style ID is recommended.

2. Sign the add-on in [addons.mozilla.org](https://addons.mozilla.org) (AMO). Depending on how you want to make your add-on available, you can use either the unlisted (if you are distributing the add-on exclusively) or listed options. For more details, see [Signing and distributing your add-on](/documentation/publish/signing-and-distribution-overview/).

{% endcapture %}
{% include modules/column-w-toc.liquid,
	id: "preparing-your-addon"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Install add-on from file on a computer

To sideload an add-on in desktop Firefox, send the user the signed add-on with these instructions:

1. Save the add-on file on your computer.

2. In Firefox, open **Add-ons and themes**.

3. From the settings cog, open **Install Add-on From File**.

   ![Add-ons Manager setting cog](/assets/img/documentation/publish/install-addon-from-file.png)

4. Browse to and open the saved add-on file.

5. When prompted, click **Add**.

   ![add add-on confirmation](/assets/img/documentation/publish/add_add_on_confirmation.png)

6. The add-on now appears in the Add-on Manager’s list of installed add-ons and is ready to use.

   ![add-on appears in add-ons manager](/assets/img/documentation/publish/add_on_added.png)

{% endcapture %}
{% include modules/one-column.liquid,
  id: "install-addon-from-file"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Install add-on from file on Android

To sideload an extension in Firefox for Android, send the user the signed extension with these instructions:

1. Save the extension file to your device.

2. In Firefox, open **Settings**, then **About Firefox**.

3. Tap the Firefox logo five times in quick succession. This unlocks hidden menu items.

4. Open **Settings** and then **Install Extension from File**.

5. Browse to and open the saved extension file.

6. When prompted, click **Add**.

7. The add-on appears in the **Extension** list of installed extensions and is ready to use.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "install-addon-from-file"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## Installation using the standard extension folders

::: note alert
Starting in Firefox 73, it is no longer possible to have an extension be automatically installed as part of another application install. See the [Add-ons Blog](https://blog.mozilla.org/addons/2019/10/31/firefox-to-discontinue-sideloaded-extensions/) for more information.
:::

This method of add-on installation involves copying the add-on into one of the standard extension folders on the user's computer. Once copied, the next time Firefox launches, the add-on is installed. By default, the user is asked to approve the installation, and if the user approves, the add-on is installed and automatically loaded for subsequent launches. If the user has more than one Firefox profile, the approval and installation occurs on the next launch of each profile. For details on controlling whether the user is prompted to approve the installation, see [Controlling automatic installation](/documentation/enterprise/enterprise-distribution/#controlling-automatic-installations).

### Rename your XPI file

To use this method, your XPI file must be named using the add-on or application ID, as set in [Preparing your add-on](#preparing-your-addon). The signed add-on file you downloaded from AMO is named something like `borderify-1.0-an+fx.xpi` (see [Signing and distributing your add-on](/documentation/publish/signing-and-distribution-overview/) for more details). Change this to, for example, `borderify@example.com.xpi`.

::: note
If you are developing an add-on for Firefox, you can use an extension proxy file to install an add-on without copying the files to the standard extensions folders.
:::

### Add the add-on XPI file to a standard extensions folder

In what follows `{ec8030f7-c20a-464f-9b0e-13a3a9e97384}` is the application ID of Firefox.

The standard installation of Firefox disables the automatic installation of add-ons from these locations (see [Controlling automatic installation](/documentation/enterprise/enterprise-distribution/#controlling-automatic-installations)). As a result, the process for each of the methods described below is as follows:

- Copy the renamed XPI file to the extensions folder for [Windows](#windows), [macOS](#macOS), or [Linux](#linux) as appropriate. Note that, depending on the desktop OS and its settings, the user may need administrator permission to complete this action.
- Close and restart Firefox.
- Depending on the OS and version of Firefox, one of these happens:

  - The install occurs silently, and the user needs to open Add-on Manager and enable the add-on:

    ![view of disabled add-on in add-ons manager](/assets/img/documentation/publish/add_on_disabled.png)

  - An interstitial message is displayed:

    ![screenshot of interstitial message](/assets/img/documentation/publish/interstitial_windows.png)

- The add-on is installed.

For more details on the interstitial and silent installs, see [Controlling automatic installation](/documentation/enterprise/enterprise-distribution/#controlling-automatic-installations).

::: note
To uninstall the add-on, close Firefox and remove the add-on from the location where it was added.
:::

<section id="windows"></section>

#### Windows

To install the add-on for a user of the computer, copy the XPI file to:

```shell
C:\Users\<user name>\AppData\Roaming\Mozilla\Extensions\{ec8030f7-c20a-464f-9b0e-13a3a9e97384}\
```

If this folder does not exist, create it. You can also identify the current user’s path with the %appdata% system variable.

::: note
Note: To install an add-on for all users of a Windows computer, see [Installation using the Windows registry](/documentation/enterprise/enterprise-distribution/#installation-using-windows-registry).
:::

<section id="macOS"></section>

#### macOS

To install an add-on for use by all Firefox profiles and all users, copy the XPI file to the global extension folder located in Library. If this folder doesn't exist, you need to create it.

```shell
/Library/Application Support/Mozilla/Extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}/
```


To install an add-on for a specific user, copy the XPI file to the user's local Library:

```shell
~/Library/Application Support/Mozilla/Extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}/
```

<section id="linux"></section>

#### Linux

To install an add-on for use by all users, copy the XPI file to:

```shell
/usr/lib/mozilla/extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}/
```

Or...

```shell
/usr/lib64/mozilla/extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}/
```

Or...

```shell
/usr/share/mozilla/extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}/
```

To install an add-on for a specific user, copy the XPI file to:

```shell
~/.mozilla/extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}/
```

{% endcapture %}
{% include modules/one-column.liquid,
  id: "standard-extension-folders"
  content: content
%}

<!-- END: Single Column Body Module -->


