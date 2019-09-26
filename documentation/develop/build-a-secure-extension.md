---
layout: sidebar
title: Build a secure extension
permalink: /documentation/develop/build-a-secure-extension/
published: true
topic: Develop
tags: [Beginner, Extensions, Intermediate, reviews, Security, WebExtensions]
contributors: [irenesmith, tomrittervg, mdnwebdocs-bot, rebloor]
last_updated_by: irenesmith
date: 2019-05-13 6:35:30
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Security best practices

Here is a list of best practices you should follow to keep the users of your extension safe. If you don't follow these best practices your extension may fail the reviews on [addons.mozilla.org](https://addons.mozilla.org), preventing you from distributing your add-on or resulting in it being blocked from installation in Firefox.

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

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

- **Don’t inject or incorporate remote scripts**  
  If you identify a service that you wish to use in your extension, don’t inject the service’s script from a remote source. Such an approach is risky, as the code could be changed without your knowing—and, importantly, without the knowledge and consent of the extensions user—compromising the security of your extension. You should therefore add a copy of the script into your extension’s code.
- **Ensure you insert remote content safely**  
  Make sure you follow best practices when your extension makes use of remote content:

  - insert strings using safe native DOM manipulation methods: [document.createElement](https://developer.mozilla.org/docs/Web/API/Document/createElement), [Element.setAtttribute](https://developer.mozilla.org/docs/Web/API/Element/setAttribute), and [Node.textContent](https://developer.mozilla.org/docs/Web/API/Node/textContent).
  - use jQuery functions `attr()` and `text()` to insert strings.
  - sanitize HTML content with  [DOMPurify](https://github.com/cure53/DOMPurify).
  - use templating engine commands that escape any HTML before inserting it.

  For more information, see [Safely inserting external content into a page](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page).

- **Use XHR for Google Analytics**  
  If you want to add Google Analytics to your extension don't insert the Google Analytics JavaScript code. Rather, it’s recommended that the Google Analytics REST API is used in an XHR call, such as:

  {% highlight javascript linenos %}
  let request = new XMLHttpRequest();
  let message =
    "v=1&tid=" + GA_TRACKING_ID + "&cid= " + GA_CLIENT_ID + "&aip=1" +
    "&ds=add-on&t=event&ec=AAA&ea=" + aType;

  request.open("POST", "https://www.google-analytics.com/collect", true);
  request.send(message);
  {% endhighlight %}

  You can find more information in the blog post [Using Google Analytics in Extensions](https://blog.mozilla.org/addons/2016/05/31/using-google-analytics-in-extensions/).

- **Use the standard extension content security policy (CSP)**  
  The standard policy restricts the sources from which your extension can load [`<script>`](https://developer.mozilla.org/docs/Web/HTML/Element/script) and [`<object>`](https://developer.mozilla.org/docs/Web/HTML/Element/object) resources, and disallows potentially unsafe practices such as the use of [eval()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/eval). While the manifest.json key [content_security_policy](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) enables you to modify the content security policy for your extension, this isn’t recommended as the policy helps prevent extensions from inadvertently executing malicious content. If your modified CSP allows remote script injection your extension will get rejected from AMO during review.  
  For more information, see [Default content security policy](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#Default_content_security_policy).
- **Share objects with in-page JavaScript with care**  
  Firefox provides `wrappedJSObject` so a content script can access JavaScript objects created by page scripts. The danger here is that a malicious web page could, for example, modify the functions of JavaScript objects to run code of its own.  
  For more information, see [Accessing page script objects from content scripts](https://developer.mozilla.org/Add-ons/WebExtensions/Sharing_objects_with_page_scripts).
- **Use `window.eval()` in content scripts with caution**  
  You should be very careful when running code in the context of a page. A malicious web page could attempt to run code of its own by exploiting the use of `window.eval()`. It might do this by, for example, redefining objects your code might want to evaluate.  
  For more information, see [Don't use eval needlessly!](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/eval#Don't_use_eval_needlessly!)
- **Create your UI with extension components**  
  Create the UI for your extension using the [built-in extension UI features](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface), such as bundled pages, pageAction, and popups on pageAction and browserAction. Don’t add UI elements, such as buttons or toolbars, directly to web pages. If you do, scripts on the web page could compromise your extension. See [Keybase Browser Extension Insecure](https://www.grepular.com/Keybase_Browser_Extension_Insecure) for an example of the potential issues.  
  If the standard UI components aren’t sufficient for your needs use iframes with [data URLs](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) to prevent fingerprinting, or add iframes to the extension code so a page can’t interact with your UI content, such as buttons.
- **Add eslint-plugin-no-unsanitized to ESLint**  
  If you make use of ESLint to check your extension code, consider adding eslint-plugin-no-unsanitized. This ESLint rules plug-in will flag instances where unsanitized code from APIs or user input could cause issues.
- **Don't inject moz-extension paths directly**  
  When injected links, includes, or images include paths to `moz-extension://{hash}` a page’s tracking script could use this information to [fingerprint](https://en.wikipedia.org/wiki/Device_fingerprint) the user, as the hash (UUID) is unique to the extension installation and, therefore, the user.  
  The best way to avoid this issue is to follow the general advice about not injecting content. However, if you believe injecting content is your only practical approach, ensure that moz-extension paths are embedded inside an iframe using a [data URL](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) or the [srcdoc](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attr-srcdoc) attribute.
- **Ensure that third-party libraries are up to date**  
  Reputable third-party libraries will be updated when any issues are found. The use of outdated (and potentially insecure) third-party libraries is strongly discouraged and, when a significant risk is identified, AMO may act to block extensions using the out of date code.  
  Therefore, always use the latest version of any third-party libraries when you create your extension. Then, be aware of updates to those libraries and be prepared to update your extension to ensure its using an up to date version of the library.
- **Do not modify third-party libraries**  
  Modifications to a third-party library are a significant indicator that a developer is trying to hide malicious code within code that is generally known and trusted. AMO will therefore try to detect changes to third-party libraries and may disable extensions when it finds changes.

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
