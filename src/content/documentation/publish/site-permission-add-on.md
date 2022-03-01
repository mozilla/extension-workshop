---
layout: full-width
title: Site permission add-on
permalink: /documentation/publish/site-permission-add-on/
topic: Publish
tags: [add-on, distribution, publication, signing, installation]
contributors: rebloor
last_updated_by: rebloor
date: 2022-02-17
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Site Permission Add-ons

{% endcapture %}
{% include modules/page-hero.liquid
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

{% capture content %}

::: note
This is an experimental feature.
:::


If your site depends on an add-on-gated feature, your users need to install an add-on before using your service. This means that to set up your service, you need to:

- Request a site permission add-on from addons.mozilla.org (AMO).
- Make the site permission add-on available to download from your website.
- Ask your users to install the add-on before using your service.

Once the add-on is installed, your service gains access to the restricted API. This page provides a step-by-step guide to the process.

{% endcapture %}
{% include modules/one-column.liquid
  id: "introduction"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Obtain your site permission add-on

To obtain the file containing your site permission add-on, do this:

- If you don't have a Firefox account, [create one](https://support.mozilla.org/en-US/kb/how-do-i-set-sync-my-computer#w_create-a-firefox-account) in the Firefox browser using the **Sync and save data** option on the Firefox menu.
- Visit the [AMO site permission generator](https://addons.mozilla.org/en-US/developers/site_permission_generator/).
- If you aren't registered on addons.mozilla.org, you are prompted to:
  - complete your profile.
  - accept the Firefox Add-on Distribution Agreement.
- In the **Generate Site Permission Add-on** screen, enter the URL of the site that requires API access and select the APIs it wants access to. If you have more than one site that needs access to these APIs, you need to create one add-on for each site. The separation is by origin, therefore subdomains will require a separate add-on.
  ![The generate site permission add-on screen](/assets/img/publish/gen-site-permission-add-on.png "The generate site permission add-on screen")
- Submit your request.

AMO processes the request and creates a signed add-on file. This process typically takes around 5 minutes. AMO then sends you an email containing a link to the add-on file. Alternatively, you can visit the [Developer hub](https://addons.mozilla.org/developers/), and in **My Add-ons** locate your site permission add-on and download it. Remember, the download is only available after AMO has processed and signed the add-on.

::: note
If you would like to test your site permission add-on, you must do this on the same origin you used in the request. For example, create a hidden page on your website for testing.
:::

{% endcapture %}
{% include modules/one-column.liquid
  id: "obtain-your-site-permission-add-on"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Hosting your site permission add-on

You use a mechanism known as [self-distribution](https://extensionworkshop.com/documentation/publish/self-distribution/) to make your site permission add-on available to the users of your service. This involves making the add-on file available for download from your website, which must be the same as the site you entered when creating the add-on.

When your user attempts to install the add-on in Firefox, they are prompted to confirm they trust your website:

![Grant website permission to install add-on screen](/assets/img/publish/site-permission-add-on-install.png "Grant website permission to install add-on screen")

The user is then prompted to grant the website permissions to use the API:

![Grant website permission to use the APIs screen](/assets/img/publish/site-permission-add-on-add.png "Grant website permission to use the APIs screen")

If the user chooses to learn more, they are taken to the [Permission request messages for Firefox extensions](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions) page.

Your service can now access the APIs.

However, there is no alert provided to your website that the extension has been installed. So, after offering the add-on for installation you should ask the user to try granting permission again.

{% endcapture %}
{% include modules/one-column.liquid
  id: "hosting-your-site-permission-add-on"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Example: WebMIDI

Using the [Web MIDI API](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API) as an example: when someone first visits your service, provide them with the opportunity to install the site permission add-on and request the permission. You could use a prompt similar to this:

![Prompt for installing the site permission add-on](/assets/img/publish/site-permission-add-on-prompt.png "Prompt for installing the site permission add-on")

In your code, you can detect feature support by checking whether the `navigator.requestMIDIAccess` method is defined. You can then asynchronously request access and determine if the `navigator.requestMIDIAccess()` promise resolves. This can be done using this code:

``` javascript
if (navigator.requestMIDIAccess) {
  try {
    let res = await navigator.requestMIDIAccess();
    console.log("MIDI access granted", res);
  } catch (e) {
    console.log("MIDI access not granted:", e);
  }
} else {
  console.log("MIDI access not supported by this browser");
}

```

If the promise is rejected, the user has either not installed the site permission add-on or has denied access to the site permission. Following the suggested user flow, the user can then install the site permission add-on and request permission again.

If the promise resolves, the user has granted permission, and the website can use the feature that the Web API provides.

{% endcapture %}
{% include modules/one-column.liquid
  id: "example-webmidi"
  content: content
  aside: ""
%}

<!-- END: Single Column Body Module -->
