---
layout: sidebar
title: Known issues
permalink: /documentation/develop/known-issues/
topic: Develop
tags: [
    android,
    api,
    debugging,
    development,
    firefox,
    testing,
    webextensions
  ]
contributors: [dotproto]
last_updated_by: dotproto
date: 2023-11-20
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Known issues

This page contains a list of major known issues that affect experience of developing extensions for Firefox and Firefox for Android.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->
<!-- Single Column Body Module -->

{% capture content_with_toc %}

### Content scripts don't appear in DevTools

**Description:** Content scripts sometimes won't appear in the sources list when debugging a tab on Android.

**Workaround:** Add a `debugger` statement to your content script to manually trigger a breakpoint when the content script first executes.

**Tracking issue:** [Bug 1746718](https://bugzilla.mozilla.org/show_bug.cgi?id=1746718)

{% endcapture %}
{% include modules/column-w-toc.liquid,
    id: "invisible-content-scripts"
    content: content_with_toc
%}

{% capture content %}

### Extension source don't update in DevTools

**Description:** Sources files that have been opened in DevTools are not updated after you edit the file on disk. This issue applies to temporary extensions that have been installed in Firefox or that have been installed on an Android device using `web-ext`.

**Workaround:** Close and re-open DevTools.

**Tracking issue:** [Bug 1857368](https://bugzilla.mozilla.org/show_bug.cgi?id=1857368)

{% endcapture %}
{% include modules/one-column.liquid,
    id: "devtools-updates-missing"
    content: content
%}

{% capture content %}

### "Destroyed actor" errors when debugging Android

**Description:** While debugging an extension on Android, you may encounter an error in Firefox on your desktop that says something like:

<blockquote style="padding-left: 1rem; border-left: 5px solid #aaa;">

Cannot connect to the debug target. See error details below:<br><br>

`Error: Protocol error (Error): Attempted to write a response containing a destroyed actor from: root (resource://devtools/shared/protocol/types.js:358:17)`

</blockquote>

**Workaround:** In the `about:debugging` page on your development computer, disconnect from and reconnect to the Android device.

**Additional notes:** This issue appears to be related to having simultaneous connections to the Android device from `web-ext` and from Firefox's developer tools. To minimize the appearance of this issue, you can set `web-ext` to only auto-reload specific files by using the `--watch-files` flag. For example:

```bash
web-ext run -t firefox-android \
  --android-device=emulator-5554 \
  --firefox-apk=org.mozilla.fenix \
  --watch-file manifest.json
```

This approach also allows you to manually trigger a refresh by pressing `R` while the web-ext terminal window is focused.

**Tracking issue:** [Bug 1856481](https://bugzilla.mozilla.org/show_bug.cgi?id=1856481)

{% endcapture %}
{% include modules/one-column.liquid,
    id: "android-destroyed-actor"
    content: content
%}

{% capture content %}

### Empty temporary extensions list when debugging Android

**Description:** When debugging an extension on Android, the "`about:debugging`" page in Firefox on the development machine's may show an empty list of temporary extensions.

**Workaround:** Disconnect from and reconnect to the Android device on `about:debugging`.

**Tracking issue:** [Bug 1856481](https://bugzilla.mozilla.org/show_bug.cgi?id=1856481)

{% endcapture %}
{% include modules/one-column.liquid,
  id: "android-temp-ext-missing"
  content: content
%}

<!-- END: Single Column Body Module -->
