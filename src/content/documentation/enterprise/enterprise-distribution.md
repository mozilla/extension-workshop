---
layout: sidebar
title: Enterprise distribution
permalink: /documentation/enterprise/enterprise-distribution/
topic: Enterprise
tags: [enterprise, policies, distribution, guide, installation]
contributors:
  [
    rebloor,
    irenesmith,
    hellosct1,
    wbamberg,
    kmaglione,
    mconca,
    championshuttler,
    TriMoon,
    aswan,
    Makyen,
    andrewtruongmoz,
  ]
last_updated_by: rebloor
date: 2023-06-09
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Enterprise distribution

As an enterprise IT administrator, you may want to install add-ons automatically for your users. This page discusses the options.

{% endcapture %}
{% include modules/page-hero.liquid,
  content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Signed vs. unsigned extensions

All add-ons must be signed before they can be installed into the standard or beta versions of Firefox. Unsigned add-ons can be installed in the [Developer Edition](https://www.mozilla.org/firefox/developer/), [Nightly](https://www.mozilla.org/firefox/nightly/all/), and [ESR](https://www.mozilla.org/firefox/enterprise/) versions of Firefox, after toggling the `xpinstall.signatures.required` preference in `about:config`.

If you want to install unsigned add-ons, deploying an [ESR](https://www.mozilla.org/firefox/enterprise/) version of Firefox is recommended. When deployed, unsigned add-ons can be installed using any method, including opening the add-on file from a web page.

The alternative recommended approach is to use the option for self-distributed add-ons on [addons.mozilla.org](https://addons.mozilla.org) (AMO). This option means you can get a signed add-on without it being listed in the public add-ons directory. This signed add-on can then be installed from a web page behind the firewall or using one of the options described here.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "signed-vs-unsigned"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Installation using the Windows registry

This section explains how to install add-ons into Firefox using the Windows Registry.

::: note alert
It is impossible to have an extension automatically installed as part of another application install. See the [Upcoming changes to extension sideloading](https://blog.mozilla.org/addons/2019/10/31/firefox-to-discontinue-sideloaded-extensions/) add-ons blog post for more information.
:::

::: note
It is safe to modify the Registry keys while Firefox is running.
:::

1. Ensure the add-on has an add-on ID by including the following in its `manifest.json` file, replacing _your-add-on-name@your-domain.com_ with a suitable ID for your add-on:

   ```json
   "browser_specific_settings": {
     "gecko": {
       "id": "your-add-on-name@your-domain.com"
     }
   }
   ```

An email address style ID is recommended.

2. Sign your add-on on addons.mozilla.org (AMO) using the self-distribution option. For more details, see [Signing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#signing-your-addons).

3. Download the signed XPI file and ensure the file name is the add-on ID plus the extension `.xpi`. For example, `c:/webext/borderify@example.com.xpi`

4. Open Regedit and add keys as follows:

   - For all users of the computer, add to the following registry keys:

   `HKEY_LOCAL_MACHINE\Software\Mozilla\Firefox\Extensions`

   or

   `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Mozilla\Firefox\Extensions`

::: note
   `HKEY_LOCAL_MACHINE\Software\Mozilla\Firefox\Extensions` is not available when running 32-bit Firefox on a 64-bit machine. You can only install for all users using the `Wow6432Node` key.
:::

   - For the current user, add to the following registry key:

   `HKEY_CURRENT_USER\Software\Mozilla\Firefox\Extensions`

5. Create a new string value Registry entry with its name equal to the add-on ID, for example, borderify@example.com, and a value equal to the location where the add-on is stored, for example, `c:/webext/borderify@example.com.xpi`.

6. Restart Firefox. The add-on is detected, but the user may be presented with an interstitial or need to enable the add-on in Add-on manager before it can be used. See [Firefox settings](#firefox-settings).

If the same add-on appears under `HKEY_CURRENT_USER` and `HKEY_LOCAL_MACHINE`, then the instance under `HKEY_CURRENT_USER` is used. If the same add-on appears in the user's profile directory (for example, if they have already manually installed it), then that version takes precedence over any instances found in the Registry.

To remove an add-on installed using the Windows Registry, remove the Registry entry. After removing the Registry entry, Firefox detects the change the next time it is launched. It is safe to modify the Registry keys while Firefox is running.

If you install using the Windows Registry, Firefox does not automatically update your add-on. You must arrange to update the add-on using whatever installation process you choose external to Firefox.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "installation-using-windows-registry"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Firefox settings

Two settings affect the use of alternative installation options. The `extensions.autoDisableScopes` preference controls whether add-ons are installed automatically or after user confirmation. The `extensions.enabledScopes` preference is used to disable installation from most locations. In addition to these options, the method of setting these preferences programmatically is discussed.

<section id="controlling-automatic-installations"></section>

### Controlling automatic installation

The standard downloads of Firefox are configured so that loads using the standard extensions folder or the Windows Registry don’t install automatically. Depending on the version of Firefox:

- the user has displayed an interstitial warning:

<img src="/assets/img/interstitial_windows.png" alt="" />

- the add-on is installed but disabled, and the user should enable it from Add-on manager:

<img src="/assets/img/add_on_disabled.png" alt="" />

The use of interstitial and silent disabled installs varies between versions of Firefox.

The availability of automatic installation is controlled by the `extensions.autoDisableScopes` preference and behavior is defined by the following values:

<!-- Table -->

{% capture table %}

| Value            | Install scope                            |
| ---------------- | ---------------------------------------- |
| 1 (or '0b0001')  | The current user’s profile.              |
| 2 (or '0b0010')  | All profiles of the logged-in user.      |
| 4 (or '0b0100')  | Installed and owned by Firefox.          |
| 8 (or '0b1000')  | Installed for all users of the computer. |
| 15 (or '0b1111') | The combination of all scopes.           |

{% endcapture %}
{% include modules/table.liquid,
	content: table
%}

<!-- END: Table -->

By default, `extensions.autoDisableScopes` is set to `15`, so automatic installs are disabled from all locations. To disable only a subset of locations, set the preference to the sum of the values for the locations you want to disable. For example, `3` disables “The current user’s profile.” and “All profiles of the logged-in user.” Setting the value to `0` disables this feature and means all add-ons are installed without user confirmation.

### Disabling install locations

In some circumstances, you may want Firefox to ignore some or all of the additional install locations listed above. In this case, use the preference `extensions.enabledScopes`. By default, this preference is not included in the standard downloads of Firefox, so it needs to be added. You can add the preference [manually](https://support.mozilla.org/kb/about-config-editor-firefox#w_adding-changing-and-resetting-preferences) or do it programmatically using the instructions in the next section.

::: note
It is impossible to disable loading add-ons from the profile directory.
:::

### Settings scope preferences programmatically

Use the following logic to set the values of `extensions.autoDisableScopes` and `extensions.enabledScopes` programmatically to ensure add-ons are installed automatically:

 1. Edit the [administrative config](https://support.mozilla.org/products/firefox-enterprise/policies-customization-enterprise/policies-overview-enterprise) file.
 2. Check for lines that set the `extensions.autoDisableScopes` and `extensions.enabledScopes` preferences and replace or add them as needed.
 3. These preference lines should be used as below, with values of your choice as explained at the start of this section:

<!-- Syntax Highlighting -->

```js
defaultPref("extensions.autoDisableScopes", 0);
defaultPref("extensions.enabledScopes", 15);
// Or use a binary value like this
defaultPref("extensions.enabledScopes", 0b1111);
```

::: note
According to [this page](http://www.favbrowser.com/how-to-create-a-new-default-firefox-experience-in-your-enterprise/) (dated: September 28, 2012), "_“You cannot set this preference remotely using autoconfig files._" Which recommends you only set these preference in a local autoconfig file. If this is wrong info please adjust or remove this note.
:::

{% endcapture %}
{% include modules/one-column.liquid,
  id: "firefox-settings"
  content: content
%}

<!-- END: Single Column Body Module -->

{% capture content %}

## Bundling add-ons with a custom Firefox

You can bundle add-ons within a customized Firefox, and they are installed automatically when the user starts up the application for the first time. See [Deploying Firefox with extensions](https://support.mozilla.org/kb/deploying-firefox-with-extensions) for details.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "bundling-add-ons-with-custom-Firefox"
  content: content
%}

<!-- END: Single Column Body Module -->
