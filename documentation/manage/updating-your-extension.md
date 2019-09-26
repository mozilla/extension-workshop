---
layout: sidebar
title: Updating your extension
permalink: /documentation/manage/updating-your-extension/
published: true
topic: Manage
tags: [update, manage, distribution]
contributors:
  [
    Wulf,
    mdnwebdocs-bot,
    rebloor,
    JayFields,
    andrewtruongmoz,
    jerrykrinock,
    rolfedh,
    wbamberg,
    kmaglione,
  ]
last_updated_by: Wulf
date: 2019-06-20 01:44:23
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Updating your extension

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

Firefox supports automated updates to add-ons using JSON update manifests. Add-ons hosted on [addons.mozilla.org](https://addons.mozilla.org/) (AMO) automatically receive updates to new versions posted there. Other add-ons must specify the location of their update manifests.

<!-- Note -->

{% capture note %}

You must host your update manifest file on a secure (HTTPS) server.

{% endcapture %}
{% include modules/note.html
	content=note
	alert=false
%}

<!-- END: Note -->

A typical update manifest looks something like:

<!-- Syntax Highlighting -->
{% highlight json linenos %}

{
  "addons": {
    "{abcd1234-1abc-1234-12ab-abcdef123456}": {
      "updates": [
        {
          "version": "0.1",
          "update_link": "https://example.com/addon-0.1.xpi"
        },
        {
          "version": "0.2",
          "update_link": "http://example.com/addon-0.2.xpi",
          "update_hash": "sha256:fe93c2156f05f20621df1723b0f39c8ab28cdbeec342efa95535d3abff932096"
        },
        {
          "version": "0.3",
          "update_link": "https://example.com/addon-0.3.xpi",
          "applications": {
            "gecko": { "strict_min_version": "44" }
          }
        }
      ]
    }
  }
}
{% endhighlight %}
<!-- END: Syntax Highlighting -->

{% endcapture %}
{% include modules/column-w-toc.html
  id=""
  content=content_with_toc
%}

{% capture content %}

## Enabling updates to your extension

If your extension is not hosted on AMO, you must specify the location of your update manifest in your extension. For extensions developed with WebExtension APIs, add the following to your manifest:

<!-- Syntax Highlighting -->
{% highlight json linenos %}

"applications": {
  "gecko": {
    "update_url": "https://example.com/updates.json"
  }
}

{% endhighlight %}

<!-- END: Syntax Highlighting -->

For XUL add-ons, add the following to the `<Description about="urn:mozilla:install-manifest">` element of your [`install.rdf`](https://developer.mozilla.org/Add-ons/Install_Manifests) file:

<!-- Syntax Highlighting -->

{% highlight XML linenos %}

<em:updateURL>https://example.com/updates.json</em:updateURL>

{% endhighlight %}

<!-- END: Syntax Highlighting -->

{% endcapture %}
{% include modules/column-w-toc.html
    id="enable-update"
    content=content
%}

{% capture content %}

## Manifest Structure

The manifest is a JSON file, with a top-level object literal. This object may have the following properties:

<!-- Table -->

{% capture table %}

| Property | Type     | Description                                                                                                                                                                                                                                |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `addons` | `object` | An object containing one entry for each add-on to be updated. For each such entry, the name of the property must be the add-on's UUID, and the value must be an <a href="#addon-objects">object describing the add-on</a> and its updates. |

{% endcapture %}
{% include modules/table.html
	content=table
%}

<!-- END: Table -->

<section id="addon-objects"></section>
### Addon objects

`addons[*]`

Properties of the `addons` object must contain object literals, each describing an add-on to update. These objects may have the following properties:

<!-- Table -->

{% capture table %}

| Property  | Type               | Description                                                                                               |
| --------- | ------------------ | --------------------------------------------------------------------------------------------------------- |
| `updates` | `Array` (Optional) | An array containing zero or more <a href="#addons-updates">update description objects</a> for the add-on. |

{% endcapture %}
{% include modules/table.html
	content=table
%}

<!-- END: Table -->

<section id="addons-updates"></section>
### Update objects

`addons[*].updates[*]`

Update description objects must be object literals. They may have the following properties:

<!-- Table -->

{% capture table %}

| Property                  | Type                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                 | `string`                          | The version number this update entry describes. If an update URL is specified, it must use this version. If any compatibility information is specified, it will override the compatibility information of any installed version with this version number.                                                                                                                                                                                                                                    |
| `update_link`             | `string` (Optional)               | A link to the XPI file containing this version of the add-on. This must be an HTTPS URL, or an `update_hash` must be provided to verify it.                                                                                                                                                                                                                                                                                                                                                  |
| `update_hash`             | `string` (Optional)               | A cryptographic hash of the file pointed to by `update_link`. This must be provided if `update_link` is not a secure URL. If present, this must be a string beginning with either `sha256:` or `sha512:`, followed by the hexadecimal-encoded hash of the matching type.                                                                                                                                                                                                                     |
| `update_info_url`         | `string` (Optional)               | A link to an HTML file containing information about the update.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `multiprocess_compatible` | `bool` (Optional) (default: true) | If false, this add-on requires compatibility shims to run in a [multi-process Firefox](https://developer.mozilla.org/docs/Mozilla/Firefox/Multiprocess_Firefox) environment.                                                                                                                                                                                                                                                                                                                 |
| `applications`            | `object` (Optional)               | An object containing application-specific compatibility information. Each property must contain an <a href="#application-objects">application object</a>, as described below. The only application currently supported is `gecko`, which includes Firefox, and all other applications built on the same runtime. If this property is omitted, support for Gecko is assumed. Otherwise, if this property is defined, it must contain a `gecko` property, or the update entry will be ignored. |

{% endcapture %}
{% include modules/table.html
	content=table
%}

<!-- END: Table -->

<section id="application-objects"></section>
### Application objects

`addons[*].updates[*].applications.gecko`

Application objects specify compatibility information for a specific application. They must be object literals, and may have the following properties:

<!-- Table -->

{% capture table %}

| Property               | Type                                  | Description                                                                                                     |
| ---------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `strict_min_version`   | `string` (Optional) (default: 42.0a1) | The minimum version of the application this add-on will run on.                                                 |
| `strict_max_version`   | `string` (Optional) (default: \*)     | The maximum version of the application this add-on will run on.                                                 |
| `advisory_max_version` | `string` (Optional) (default: \*)     | The maximum version of the application this add-on is likely to run on. This property is ignored in most cases. |

{% endcapture %}
{% include modules/table.html
	content=table
%}

<!-- END: Table -->

{% endcapture %}
{% include modules/column-w-toc.html
    id="manifest-structure"
    content=content
%}

{% capture content %}

## Testing Automatic Updating

By default, Firefox checks for updates every 86400 seconds (24 hours). If you want to test whether or not the updater is working for your extension, you should browse to `about:config` and change the value of `extensions.update.interval` from 86400 to 120, which is apparently the minimum supported value. (If you set it to less than 120, update checks will only occur every 2 minutes.) While you're in there, verify that `extensions.update.enabled` is set to its default value of true. Relaunch Firefox after making any changes.

If your extension does not update as expected, open the console: Tools > Web Developer > Browser Console, filter for the name of your extension or update URL, and see if there are any errors logged. If you see an error indicating that the downloaded file hash … did not match provided hash …, look up for the previous `GET` of your extension. If it indicates that the download time was around zero milliseconds, for example `[HTTP/1.1 200 OK 0ms]`, Firefox may have used a cached download, which might be your prior version if you just recently uploaded a new version, and this may explain the hash mismatch.

{% endcapture %}
{% include modules/column-w-toc.html
  id="testing-automatic-updating"
  content=content
%}

<!-- END: Content with Table of Contents -->

<!-- Meta Data -->

{%- include page-meta-data.html -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.html -%}

<!-- END: Up Next -->
