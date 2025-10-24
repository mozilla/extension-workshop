---
layout: sidebar
title: Known issues
description: Review known issues and limitations when developing Firefox extensions. Find workarounds and solutions for common development problems.
permalink: /documentation/develop/known-issues/
topic: Develop
tags: [
    android,
    api,
    debugging,
    development,
    firefox,
    testing,
    web-ext,
    webextensions
  ]
contributors: [dotproto]
last_updated_by: dotproto
date: 2023-11-20
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Known issues

This page contains a list of significant known issues that affect the experience of developing extensions for Firefox and Firefox for Android.

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->
<!-- Single Column Body Module -->

{% capture content_with_toc %}

### Content scripts don't appear in DevTools

**Description:** Content scripts sometimes don't appear in the sources list when debugging a tab on Android.

**Workaround:** Add a `debugger` statement to your content script to manually trigger a breakpoint when the content script first executes.

**Tracking issue:** [Bug 1746718](https://bugzilla.mozilla.org/show_bug.cgi?id=1746718)

{% endcapture %}
{% include modules/column-w-toc.liquid,
    id: "invisible-content-scripts"
    content: content_with_toc
%}

{% capture content %}

### Extension source don't update in DevTools

**Description:** Sources files open in DevTools are not updated after you edit the file on disk. This issue applies to temporary extensions installed in Firefox or on an Android device using `web-ext`.

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

> Cannot connect to the debug target. See error details below:
>
> `Error: Protocol error (Error): Attempted to write a response containing a destroyed actor from: root (resource://devtools/shared/protocol/types.js:358:17)`

**Workaround:** In the `about:debugging` page on your development computer, disconnect from and reconnect to the Android device.

**Additional notes:** This issue appears to be related to simultaneous connections to the Android device from `web-ext` and Firefox's developer tools. To minimize the likelihood of this issue, set `web-ext` to auto-reload specific files only using the `--watch-files` flag. For example:

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

<!-- END: Single Column Body Module -->
