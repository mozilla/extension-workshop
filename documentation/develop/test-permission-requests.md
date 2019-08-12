---
layout: sidebar
title: Test permission requests
permalink: /documentation/develop/test-permission-requests/
published: false
topic: Develop
tags: [Add-ons, Extensions, Guide, Permissions, Testing, WebExtensions]
contributors:
  [rebloor, mdnwebdocs-bot]
last_updated_by: rebloor
date: 2019-03-21 12:27:40
---
<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Test permission requests

Your extension may contain two types of permission request: install time and runtime permission requests. This page explains how you can test the way your users will see requests for these permissions.

{% endcapture %}
{% include modules/page-hero.html
    content=page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Permission grant behavior during testing

When you’re testing with an unpackaged extension, using either `about:debugging` or [web-ext](/documentation/develop/web-ext-command-reference), install time and runtime permissions are handled as follows:

- install time permission requests are granted silently. You don't see the permission warnings users would.
- runtime permission requests display the door hanger request as normal. These permissions remain in place until they are revoked programmatically by the extension, the extension is removed using `about:debugging`, or Firefox restart.

{% endcapture %}
{% include modules/column-w-toc.html
  id="permission-grant-behavior-during-testing"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Observe or verify install time permission requests

You follow different processes depending on whether you want to observe the permissions requests associated with an installation or an upgrade.

### Permission requests for extension installation

To view the install time permission warnings users see when installing your extension and retest runtime permission requests, install the extension from its \*.xpi or \*.zip file.

To do this with an unsigned \*.xpi or \*.zip file you need to:

- give your extension an ID using the manifest.json [applications](https://developer.mozilla.org/docs/applications) key.
- run the [Nightly](https://nightly.mozilla.org/) or [Developer Edition](https://www.mozilla.org/firefox/developer/) versions of Firefox.
- set the `about:config` preference `xpinstall.signatures.required` to `false`.

Then install the extension using **Install Add-on From File** in the Add-on manager (`about:addons`). As the extension installs, the request to grant the install-time permissions displays, similar to this:

![installing unpacked extension]({% asset "documentation/develop/installing_unpackaged_extension.png" @optim @path %})

Note that the caution message relates to this being an unsigned extension; this message isn’t displayed during installation from [addons.mozilla.org](https://addon.mozilla.org).

### Permission requests for extension upgrade

{% capture note %}

For details on how to deliver web extension updates when self-hosting your extension, see [Updates](https://developer.mozilla.org/docs/Mozilla/Add-ons/Updates).

{% endcapture %}
{% include modules/note.html
    content=note
    alert=false
%}

To view the install time permission warnings users see when Firefox upgrades your extension and retest runtime permission requests, you install the extension from its .xpi file posted on an HTTP or HTTPS server.

You can use an HTTP server (such as a simple [Python localhost server](https://developer.mozilla.org/docs/Learn/Common_questions/set_up_a_local_testing_server)) or an HTTPS server. However, your HTTPS server must have a verifiable certificate, one that Firefox can auto-accept; you cannot use a self-signed certificate. If you want to test from an HTTPS server but don’t have one, GitHub pages are an option you can use.

To perform the test you'll need to:

- determine the address of the HTTP or HTTPS server where you can host files.
- use the manifest.json [applications](https://developer.mozilla.org/docs/applications) key to:
    - give your extension an ID, if you’ve not done so already.
    - define the update URL where you’ll host your [updates manifest](https://developer.mozilla.org/docs/Mozilla/Add-ons/Updates). For example: 


{% highlight javascript linenos %}
…
"applications": {
  "gecko": {
    "strict_min_version": "54.0a1",
    "update_url": "https://your-account.github.io/webextensions/upgrade.json",
    "id": "test@your-address.com"
  }
},
…
{% endhighlight %}

- if necessary, [create a package](/documentation/publish/package-your-extension) containing your original extension.
- update your extension and add details of the new permissions required to the manifest.json file, not forgetting to update the version number. Create a package containing your updated extension. 

{% capture note %}

If the packages were generated with .zip extensions change them to .xpi, otherwise your browser may try to download rather than install the extension.

{% endcapture %}
{% include modules/note.html
    content=note
    alert=true
%}

- create the [updates manifest](https://developer.mozilla.org/docs/Mozilla/Add-ons/Updates) with details of both extension versions, which should be similar to this: 

{% highlight javascript linenos %}
…
"applications": {
  "gecko": {
    "strict_min_version": "54.0a1",
    "update_url": "https://your-account.github.io/webextensions/upgrade.json",
    "id": "test@your-address.com"
  }
},
…
{% endhighlight %}

- upload the two extension packages and the updates manifest to your HTTP or HTTPS server.
- run the [Nightly](https://nightly.mozilla.org/) or [Developer Edition](https://www.mozilla.org/firefox/developer/) versions of Firefox.
- in `about:config`:
    - set the preference `xpinstall.signatures.required` to `false`.
    - If you’re using [Nightly](https://nightly.mozilla.org/) and hosting your update on an HTTP server create and set `extensions.checkUpdateSecurity` and `extensions.install.requireSecureOrigin` preferences to `false`. To do this: 
        - enter the preference name in the search box.
        - click **Add**. <br/> ![add preference]({% asset "documentation/develop/preference_create_2.png" @optim @path %})
        - toggle the preference to set it to false. <br/> ![toggle preferences]({% asset "documentation/develop/preference_toggle_2.png" @optim @path %})

- open the link to the first XPI file to install it.
- open `about:addons`, click the gear icon, and click **Check for Updates**.
- you’ll get a permission warnings prompt, similar to the one below, detailing the additional permissions requested:

![permissions prompt]({% asset "documentation/develop/upgrade_install_2.png" @optim @path %})

{% capture note %}

If the upgrade doesn't happen, look for `addons.update-checker` logs in the [Browser Console](https://developer.mozilla.org/docs/Tools/Browser_Console). Any errors encountered during the upgrade process will be reported in the log.

{% endcapture %}
{% include modules/note.html
    content=note
    alert=false
%}

{% endcapture %}
{% include modules/one-column.html
  id="observe-or-verify-install-time-permission-requests"
  content=content
  aside=""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Retest runtime permission grants

To retest your extension’s runtime permission grants and its post-install behavior you've two choices:

- remove the extension using `about:debugging` and reinstall it, or Firefox restart.

![remove extension from debugging]({% asset "documentation/develop/reload_to_retest.png" @optim @path %})

- if you’re using [Nightly](https://nightly.mozilla.org/) or [Developer Edition](https://www.mozilla.org/firefox/developer/), use the [Extensions Permission Manager](https://github.com/rpl/dev-webext-permissions-manager) web extension to clear permissions.

You can then rerun the extension and any runtime permission requests will be displayed as if the extension was being run for the first time.

{% endcapture %}
{% include modules/one-column.html
  id="retest-runtime-permission-grants"
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