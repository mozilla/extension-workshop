---
layout: sidebar
title: Version Rollback
permalink: /documentation/publish/version-rollback/
topic: Publish
tags: [manage, distribution, review, add-ons, publishing]
contributors: [eviljeff]
last_updated_by: eviljeff
date: 2025-09-10 11:39:00
published: false
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Roll back to a previous version of your add-on

Sometimes a developer realises, after a new version has been approved and distributed to users, that it contains a serious bug. The new version can be disabled by the developer immediately but any Firefox users who received the update will keep using the version with the serious bug.

The developer will be looking to fix the bug in a subsequent version but a) this could take some development time, and b) it may need to be reviewed by Mozilla before it is approved - impacting existing users in the meantime.

To address this issue, you can roll back your extension by republishing a previous version with a new version number and pushing this version to users through the [Developer Hub](https://addons.mozilla.org/developers/) or the [Add-on Submission API](https://addons.mozilla.org/api/v5/addons/).

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Eligibility

The feature is available for any extension that has two or more approved versions. That is, it has at least one version to rollback to from the current version.  For versions distributed on [addons.mozilla.org](https://addons.mozilla.org/), the approved version before the current version is available to roll back to.

If the issue is present in the version available to roll back to, you must create and manually submit a new version to [addons.mozilla.org](https://addons.mozilla.org/) as normal.

For self-distributed versions, as versions can be distributed in any order, you can roll back to any approved version.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "eligibility"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Roll back using the Developer Hub

The feature is available on the **Status & Versions** page for the extension in Developer Hub, using **Rollback to a previous version**, next to **Upload a New Version**.

![Developer Hub versions page](/assets/img/documentation/publish/rollback-devhub-versions.png)

### The form

Launch the form with **Rollback to a previous version**.

![Developer Hub rollback form](/assets/img/documentation/publish/rollback-devhub-form.png)

The version rolled back from will be preselected for versions distributed from [addons.mozilla.org](https://addons.mozilla.org/).  The developer has to enter a new version number, for example, in this case, 1.2.1.  It must be a higher version number than all previously submitted versions for distribution on [addons.mozilla.org](https://addons.mozilla.org/).

A basic release note is provided. Edit this to provide users with more information about this version.

Click **Roll back** to generate the rolled back version. All the authors of the extension receive an email when the process is complete and the rolled-back XPI is signed and approved.

::: note
Rolling back cancels the pending reviews for any unapproved versions (in the same channel).
:::

If there is a technical issue during the rollback, the authors are notified.

### Self-distributed versions

If the add-on only has self-distributed versions, a list of older versions to roll back to is provided. The feature is otherwise the same.

::: note
You must download any XPIs for self-distributed versions and distribute them as normal using your usual update infrastructure.
:::

### Add-ons with versions in multiple distribution channels

If an add-on has AMO and self-distributed versions, the form includes a channel selector. 

![Developer Hub rollback form with multiple channels](/assets/img/documentation/publish/rollback-devhub-form-channels.png)

{% endcapture %}
{% include modules/one-column.liquid,
  id: "devhub"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Roll back using the Add-on Submission API

Rollback can also be triggered via the [addon submission api](https://mozilla.github.io/addons-server/topics/api/addons.html#version-rollback) in the same way. The rollback is activated on the version to be rolled back *to*.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "api"
  content: content
%}

<!-- END: Single Column Body Module -->


