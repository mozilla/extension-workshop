---
layout: sidebar
title: Version Rollback
permalink: /documentation/publish/version-rollback/
topic: Publish
tags: [manage, distribution, review, add-ons, publishing]
contributors: [eviljeff]
last_updated_by: eviljeff
date: 2025-09-16 15:47:00
published: true
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Roll back to a previous version of your add-on

After a new version of your extension has been approved and distributed to users, you may discover an issue that must be resolved quickly. You can disable the new version immediately in AMO, so it's no longer available to install. However, some Firefox users may have received and are using the new version. 

If developing a revised version and obtaining a review won't address the issue quickly enough, you can roll back to an earlier version of your extension. Users then update to the rolled back version when their browser next checks for extension updates, which, by default, means within 24 hours.

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

**Version** identifies the version available for rollback, which is the previous version distributed from [addons.mozilla.org](https://addons.mozilla.org/). Enter a new version number, for example, 1.2.1. The new version number must be higher than all previous versions submitted for distribution on [addons.mozilla.org](https://addons.mozilla.org/).

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

Rollback can also be triggered using the [Add-on Submission API](https://mozilla.github.io/addons-server/topics/api/addons.html#version-rollback). The rollback is activated on the version to be rolled back *to*.

For example:

```shell
curl -d '{"new_version_string": "1.2.1", "release_notes": {"en-us": "Rolling back to 1.1.1"}' -H "Authorization: <auth header>" -H "Content-type: application/json" https://addons.mozilla.org/api/v5/addons/addon/<add-on id>/versions/1.1.1/rollback/
```
See [API documentation](https://mozilla.github.io/addons-server/topics/api/auth.html) for how to generate an Authorization header with your toolchain.
{% endcapture %}
{% include modules/one-column.liquid,
  id: "api"
  content: content
%}

<!-- END: Single Column Body Module -->


