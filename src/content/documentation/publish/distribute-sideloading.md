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

You may want to send a user your add-on’s XPI file by some means other than a web download, such as an email distribution of a beta version for user testing. In this case, there are two practical options for installing the add-on:

- Using **Install Add-on From File** in the Add-ons Manager.
- Adding the file to one of the standard extension folders.

::: note
No automatic updates will be performed for add-ons installed using these methods. You will have to deliver a new XPI file to your user for each update. However, automatic compatibility checks are still performed.
:::

{% endcapture %}
{% include modules/page-hero.liquid
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Preparing your add-on

Regardless of the sideloading method used, you must prepare the add-on as follows:

1. Ensure the add-on includes an ID, by adding the following to its `manifest.json` file, replacing **_your-add-on-name@your-domain.com_** with a suitable ID for your add-on:

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
{% include modules/column-w-toc.liquid
	id: "preparing-your-addon"
	content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Install add-on from file

To use Install Add-on From File in Add-on Manager, send the user the signed add-on with the following instructions:

1. Save the add-on file to a suitable location on your computer.

2. In Firefox, open the Firefox menu Firefox browser menu button and click Add-ons.

3. From the settings cog, open **Install Add-on From File**:

   ![Add-ons Manager setting cog](/assets/img/documentation/publish/install-addon-from-file.png)

4. Browse to and open the file from the location where it was saved.

5. When prompted click **Add**:

   ![add add-on confirmation](/assets/img/documentation/publish/add_add_on_confirmation.png)

6. The add-on will now appear in the add-on manager’s list of installed add-ons and be ready to use:

   ![add-on appears in add-ons manager](/assets/img/documentation/publish/add_on_added.png)

{% endcapture %}
{% include modules/one-column.liquid
  id: "install-addon-from-file"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Installation using the standard extension folders

::: note alert
Starting in Firefox 73, it will no longer be possible to have an extension be automatically installed as part of another application install. See the [Add-ons Blog](https://blog.mozilla.org/addons/2019/10/31/firefox-to-discontinue-sideloaded-extensions/) for more information.
:::

This method of add-on installation involves copying the add-on into one of the standard extension folders on the user's computer. Once copied, the next time Firefox launches the add-on will be installed. By default, the user will be asked to approve the installation, and if the user approves, the add-on will be installed and automatically loaded for subsequent launches. If the user has more than one Firefox profile, the approval and installation will occur on the next launch of each profile. For details on controlling whether the user is prompted to approve the installation, see [Controlling automatic installation](/documentation/enterprise/enterprise-distribution/#controlling-automatic-installations).

### Rename your XPI file

To use this method, your XPI file must be named using the add-on or application ID, as set in [Preparing your add-on](#preparing-your-addon). The signed add-on file you downloaded from AMO will be named something like `borderify-1.0-an+fx.xpi` (see [Signing and distributing your add-on](/documentation/publish/signing-and-distribution-overview/) for more details), change this to, for example, `borderify@example.com.xpi`.

::: note
If you are developing an add-on for Firefox you can use an extension proxy file to install an add-on without copying the files over to the standard extensions folders.
:::

### Add the add-on XPI file to a standard extensions folder

In what follows `{ec8030f7-c20a-464f-9b0e-13a3a9e97384}` is the application ID of Firefox.

The standard installation of Firefox disables the automatic installation of add-ons from these locations (see [Controlling automatic installation](/documentation/enterprise/enterprise-distribution/#controlling-automatic-installations)). As a result, the process for each of the methods described below is as follows:

- Copy the renamed XPI file to the extensions folder for [Windows](#windows), [macOS](#macOS), or [Linux](#linux) as appropriate. Note that, depending on the desktop OS and its settings, the user may need administrator permission to complete this action.
- Close and restart Firefox.
- Depending on the OS and version of Firefox one of the the following will happen:

  - The install will happen silently, and the user will need to open add-on manager and enable the add-on:

    ![view of disabled add-on in add-ons manager](/assets/img/documentation/publish/add_on_disabled.png)

  - An interstitial message will be displayed:

    ![screenshot of interstitial message](/assets/img/documentation/publish/interstitial_windows.png)

- The add-on is now installed.

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

To install an add-on for use by all Firefox profiles and all users, copy the XPI file to the global extension folder located in Library. If this folder doesn't exist, you will need to create it.

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
{% include modules/one-column.liquid
  id: "standard-extension-folders"
  content: content
%}

<!-- END: Single Column Body Module -->


