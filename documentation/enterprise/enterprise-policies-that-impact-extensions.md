---
layout: sidebar
title: Enterprise policies that impact extensions
permalink: /documentation/enterprise/enterprise-policies-that-impact-extensions/
published: false
topic: Enterprise
tags: [enterprise, policies]
contributors: [rebloor]
last_updated_by: rebloor
date: 2019-08-12 05:01:39
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Enterprise policies that impact extensions

Policies enable you to control the capabilities of Firefox. This article summarizes the policies that affect the installation, behavior, and update of web extensions. For a full list of policies, see [mozilla/policy-templates](https://github.com/mozilla/policy-templates) on GitHub. For details on how to implement policies, see [Manage settings via policy](https://support.mozilla.org/products/firefox-enterprise/policies-customization-enterprise/manage-settings-policy).

{% endcapture %}
{% include modules/page-hero.html
	content=page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Relevant policies

These policies control whether users can install, disable, or remove web extensions, and the domains from which they can install extensions.

- **BlockAboutAddons** – This policy removes access to `about:addons`. Removing this access means that the user is unable to disable or remove extensions, or access extension preferences unless the extension provided alternative access.

- **Extensions** This policy controls the installation, uninstallation (removal), and locking of extensions. It enables the specification of a list of extensions that are:

  - installed when the policy is deployed. Extensions are specified by path or URL.
  - removed when the policy is deployed, specified by extension ID.
  - locked when the policy is deployed, so the user cannot disable or remove the extension, which are specified by extension ID.

- **ExtensionUpdate** – This policy provides for the setting of the configuration (about:config) option `extensions.update.enabled`. This enables you to determine whether extensions are updated when Firefox detects updates. If you choose to disable automatic updates, you can use the **Extensions** policy to push web extension updates.

- **InstallAddonsPermission** – This policy sets whether the user can install extensions and which domains web extensions can be installed from.

{% endcapture %}
{% include modules/column-w-toc.html
  id="relevant-policies"
  content=content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Other relevant policies

These policies may affect the behavior of third-party extensions because of the Firefox features these policies disable or restrict.

- **DisableDeveloperTools** — This policy removes access to all developer tools. With this policy in place, it limits users’ ability to create extensions effectively.

- **DisableFirefoxAccounts** — This policy disables Sync. With this policy in place, third-party extensions that make use of the sync functionality may not work correctly.

- **DisablePrivateBrowsing** — This policy removes access to private browsing. With this policy in place, third-party extensions that make use of the private browsing functionality may not work correctly.

- **EnableTrackingProtection** – This policy affects tracking protection. With this policy in place, third-party extensions that enhanced privacy or tracking prevention functionality may not work correctly.

- **SanitizeOnShutdown** — If this policy is set to true, Firefox clears all browsing data when it closes. This data includes browsing and download history, bookies, active logins, cache, form and search history, site preferences, and offline website data. With this policy in place, third-party extensions that rely on storing data locally may not work correctly.

Other useful information:

- How to [manage add-ons](https://support.mozilla.org/products/firefox-enterprise/policies-customization-enterprise/manage-add-ons-enterprise) in your organization

{% endcapture %}
{% include modules/one-column.html
  id="other-relevant-policies"
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
