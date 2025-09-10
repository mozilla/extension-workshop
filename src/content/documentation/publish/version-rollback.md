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

# Rolling back to a previous version of your add-on

Sometimes a developer realises, after a new version has been approved and distributed to users, that it contains a serious bug. The new version can be disabled by the developer immediately but any Firefox users who received the update will keep using the version with the serious bug.

The developer will be looking to fix the bug in a subsequent version but a) this could take some development time, and b) it may need to be reviewed by Mozilla before it is approved - impacting existing users in the meantime.

Now the add-on can be rolled back to the previous version - by automatically republishing it with a new version number and pushing out the new version to existing users, through the [Developer Hub](https://addons.mozilla.org/developers/), or the [Add-on Submission API](https://addons.mozilla.org/api/v5/addons/).

{% endcapture %}
{% include modules/page-hero.liquid,
    content: page_hero_banner_content
%}

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Eligibility

The feature will be available for any extension that has two or more approved versions - one to rollback to from the current version.  For versions distributed via [addons.mozilla.org](https://addons.mozilla.org/) the approved version before the current version is available to be rolled back to.

If the bug was present in that version too, you will need to create and manually submit a new version to [addons.mozilla.org](https://addons.mozilla.org/) as normal.

For self-distributed versions - because versions can be distributed in any order - any previous approved version is available to be rolled back to.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "eligibility"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## How to use the feature in Developer Hub

The feature is available via the “Status & Versions” page for the add-on in Developer Hub, with the “Rollback to a previous version” button, next to “Upload a New Version”.

![Developer Hub versions page](/assets/img/documentation/publish/rollback-devhub-versions.png)

### The form

Launch the form with the “Rollback to a previous version” button

![Developer Hub rollback form](/assets/img/documentation/publish/rollback-devhub-form.png)

The version rolled back from will be preselected for versions distributed from [addons.mozilla.org](https://addons.mozilla.org/).  The developer has to enter a new version number, for example, in this case, 1.2.1.  It must be a higher version number than all previously submitted versions for distribution on [addons.mozilla.org](https://addons.mozilla.org/).

Release notes can be edited as required to give detail to users about this version.

The “Roll back” button will trigger the generation of the rolled back version, and all the authors of the add-on will receive an email notification when the process has completed and the rolled back xpi is signed and approved.

::: note
Rolling back will cancel the review for any unapproved versions pending (in the same channel).
:::

If there was a technical issue during the rollback the authors will be notified of this instead.

### Self-distributed versions

If the add-on only has self-distributed versions there will be a list of older versions to rollback to.  The feature is otherwise the same.

::: note
XPIs for self-distributed versions will need downloading by the developer and distributing as normal via their update infrastructure.
:::

### Add-ons with versions in multiple distribution channels

If an add-on has both AMO distributed and Self distributed versions there will be a channel selector.

![Developer Hub rollback form with multiple channels](/assets/img/documentation/publish/rollback-devhub-form-channels.png)

{% endcapture %}
{% include modules/one-column.liquid,
  id: "devhub"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Activation via the addon submission api

Rollback can also be triggered via the [addon submission api](https://mozilla.github.io/addons-server/topics/api/addons.html#version-rollback) in the same way. The rollback is activated on the version to be rolled back *to*.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "api"
  content: content
%}

<!-- END: Single Column Body Module -->


