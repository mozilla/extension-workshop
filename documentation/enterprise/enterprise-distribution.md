---
layout: sidebar
title: Enterprise distribution
permalink: /documentation/enterprise/enterprise-distribution/
published: false
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
date: 2019-06-26 11:54:51
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Add-ons in the Enterprise

As an enterprise IT administrator you may wish to install add-ons for your users automatically, this page discusses the options.

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Signed vs. unsigned extensions

From Firefox 43 all add-ons have to be signed before they can be installed into the standard or beta versions of Firefox. Unsigned add-ons can be installed in the [Developer Edition](https://www.mozilla.org/firefox/developer/), [Nightly](https://www.mozilla.org/firefox/nightly/all/), and [ESR](https://www.mozilla.org/firefox/enterprise/) versions of Firefox, after toggling the `xpinstall.signatures.required` preference in `about:config`.

If you want to install unsigned add-ons, deploying an [ESR](https://www.mozilla.org/firefox/enterprise/) version of Firefox is the recommended approach. Once that is done, unsigned add-ons can be installed using any method, including opening the add-on file from a web page.

The alternative, and recommended, approach is to use the option for unlisted add-ons on [addons.mozilla.org](https://addons.mozilla.org) (AMO). This option means that you can get a signed add-on without it being listed in the public add-ons directory. This feature provides a signed add-on immediately. This signed add-on can then be installed from a web page behind the firewall, or installed using one of the options described here.

{% endcapture %}
{% include modules/column-w-toc.html
  id="signed-vs-unsigned"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Sideloading

You can sideload an add-on using one of the standard extensions folders, as described in [Installation using standard extension folders](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Distribution_options/Sideloading_add-ons#Installation_using_the_standard_extension_folders).

{% endcapture %}
{% include modules/one-column.html
  id="sideloading"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Installation using the Windows registry

This section explains how to install add-ons into Firefox using the Windows Registry.

<!-- Alert -->

{% capture alert %}

Before Firefox 62 it was possible to load unpacked extensions by making the Windows registry key point to a directory containing an unpackaged extension.

From Firefox 62 this is no longer possible, and the key must point to a packaged XPI file, as described in this section.

{% endcapture %}
{% include modules/note.html
	content=alert
	alert=true
%}

<!-- END: Alert -->

<!-- Note -->

{% capture note %}

It is safe to modify the Registry keys while Firefox is running.

{% endcapture %}
{% include modules/note.html
	content=note
	alert=false
%}

<!-- END: Note -->

1. Ensure the add-on has an add-on ID, by including the following to its manifest.json file, replacing _your-add-on-name@your-domain.com_ with a suitable ID for your add-on:

<!-- Syntax Highlighting -->

{% highlight javascript linenos %}
"applications": {
"gecko": {
"id": "your-add-on-name@your-domain.com"
}
}
{% endhighlight %}

<!-- END: Syntax Highlighting -->

An email address style ID is recommended.

2. Sign your add-on on addons.mozilla.org (AMO) using the unlisted option. For more details, see Signing and distributing your add-on.

3. Download the signed XPI file and ensure the file name is the add-on ID plus the extension .xpi. For example, `c:/webext/borderify@example.com.xpi`

4. Open Regedit and add keys as follows:

   - For all users of the computer, add to the following registry keys:

   `HKEY_LOCAL_MACHINE\Software\Mozilla\Firefox\Extensions`

   or

   `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Mozilla\Firefox\Extensions`

   <!-- Note -->

   {% capture note %}

   `HKEY_LOCAL_MACHINE\Software\Mozilla\Firefox\Extensions` is not available when running 32-bit Firefox on a 64-bit machine, you can only install for all users using the `Wow6432Node` key.

   {% endcapture %}
   {% include modules/note.html
   	content=note
   	alert=false
   %}

   <!-- END: Note -->

- For the current user, add to the following registry key:

`HKEY_CURRENT_USER\Software\Mozilla\Firefox\Extensions`

5. Create a new string value Registry entry with its name equal to the add-on ID, for example, borderify@example.com, and a value equal to the location where the add-on is stored, for example, `c:/webext/borderify@example.com.xpi`.

6. Restart Firefox. The add-on is detected, but the user may be presented with an interstitial or need to enable the add-on in Add-on manager before it can be used. See [Firefox settings](/documentation/enterprise/enterprise-distribution#firefox-settings.

If the same add-on appears under both `HKEY_CURRENT_USER` and `HKEY_LOCAL_MACHINE`, then the instance under `HKEY_CURRENT_USER` will be used. If the same add-on appears in the user's profile directory (for example, if they have already manually installed it), then that version will take precedence over any instances found in the Registry.

To remove an add-on installed using the Windows Registry simply remove the Registry entry. After the Registry entry is removed, Firefox will detect the change the next time it is launched. It is safe to modify the Registry keys while Firefox is running.

If you install using the Windows Registry, Firefox will not automatically update your add-on. You will have to arrange to update the add-on using whatever installation process you choose external to Firefox.

{% endcapture %}
{% include modules/one-column.html
  id="installation-using-windows-registry"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Firefox settings

There are two settings that affect the use of alternative installation options. The `extensions.autoDisableScopes` preference controls whether add-ons are installed automatically or after user confirmation. The `extensions.enabledScopes` preference is used to disable installation from most locations. In addition to these options, the method of setting these preferences programmatically is discussed.

### Controlling automatic installation

The standard downloads of Firefox are configured so that sideloads using the standard extensions folder or the Windows Registry, don’t install automatically. Depending on the version of Firefox:

- the user has displayed an interstitial warning:

{% asset "interstitial_windows.png" @optim %}

- the add-on is installed but disabled, and the user should enable it from Add-on manager:

{% asset "add_on_disabled.png" @optim %}

The use of interstitial and silent disabled installs varies between versions of Firefox, for example, version 54 uses the interstitial message.

The availability of automatic installation is controlled by the `extensions.autoDisableScopes` preference and behavior are defined by the following values:

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
{% include modules/table.html
	content=table
%}

<!-- END: Table -->

By default, `extensions.autoDisableScopes` is set to 15 so that automatic installs are disabled from all locations. To disable only a subset of locations, set the preference to the sum of the values for the locations you want to disable. For example, 3 will disable “The current user’s profile.” and “All profiles of the logged-in user.” Setting the value to 0 disables this feature and means all add-ons will be installed without user confirmation.

### Disabling install locations

In some circumstances, you may want Firefox to ignore some or all of the additional install locations listed above. In this case, use the preference extensions.enabledScopes. By default, this preference is not included in the standard downloads of Firefox, so will need to be added. You can add the preference [manually](https://support.mozilla.org/kb/about-config-editor-firefox#w_adding-changing-and-resetting-preferences) or do it programmatically using the instructions in the next section.

<!-- Note -->

{% capture note %}

It is impossible to disable loading add-ons from the profile directory.

{% endcapture %}
{% include modules/note.html
	content=note
	alert=false
%}

<!-- END: Note -->

### Settings scope preferences programmatically

Use the following logic to set the values of `extensions.autoDisableScopes` and `extensions.enabledScopes` programmatically to ensure add-ons are installed automatically:

1. Edit the [administrative config](https://developer.mozilla.org/docs/Mozilla/Firefox/Enterprise_deployment#Configuration) file.
2. Check for the presence of lines that set the `extensions.autoDisableScopes` and/or `extensions.enabledScopes` preferences and replace/add them as needed.
3. These preference lines should be used like below, with values of your choice as explained in the top of this section:

<!-- Syntax Highlighting -->

{% highlight javascript linenos %}
defaultPref("extensions.autoDisableScopes", 0);
defaultPref("extensions.enabledScopes", 15);
// Or use binary value like this
defaultPref("extensions.enabledScopes", 0b1111);
{% endhighlight %}

<!-- END: Syntax Highlighting -->

<!-- Note -->

{% capture note %}

According to [this page](www.favbrowser.com/how-to-create-a-new-default-firefox-experience-in-your-enterprise/) (dated: September 28, 2012), "_“You cannot set this preference remotely using autoconfig files._" Which recommends you only set these preference in a local autoconfig file. If this is wrong info please adjust or remove this note.

{% endcapture %}
{% include modules/note.html
	content=note
	alert=false
%}

<!-- END: Note -->

{% endcapture %}
{% include modules/one-column.html
  id="firefox-settings"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

{% capture content %}

## Bundling add-ons with a custom Firefox

You can bundle add-ons within a customized Firefox, and they will be installed automatically when the user starts up the application for the first time. See [Deploying Firefox with extensions](https://support.mozilla.org/kb/deploying-firefox-with-extensions) for details.

{% endcapture %}
{% include modules/one-column.html
  id="bundling-add-ons-with-custom-Firefox"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
