---
layout: sidebar
title: Build an accessible extension
permalink: /documentation/develop/build-an-accessible-extension/
topic: Develop
tags: [development, extensions, ui, user-interface, ux, webextensions]
contributors: [rebloor]
last_updated_by: rebloor
date: 2019-05-01 9:08:50
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Accessibility guidelines

When it comes to accessibility, extensions should follow the same guidelines as websites. However, extensions have unique features that deserve consideration when designing for accessibility. Here is a breakdown of extension features and how they should be used to make an extension accessible.

There is more information on design and accessibility in the [Photon Design System](https://design.firefox.com/photon/) and [Accessibility and Mozilla](https://developer.mozilla.org/docs/Mozilla/Accessibility) section on MDN.

{% endcapture %}
{% include modules/page-hero.liquid
    content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Single Column Body Module -->

<section class="module">
<article class="module-content grid-x grid-padding-x">
<div class="cell small-12" markdown="1">

<table>
<thead>
<tr>
<th>UI feature</th>
<th>Guidelines</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="1">

[Keyboard shortcuts (commands)](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)

</td>
<td markdown="1">

Keyboard shortcuts provide an easy way to activate extension features.

To improve accessibility, add keyboard shortcuts for:

- extension UI elements, such as toolbar and address bar buttons.
- all of an extension’s features, however, where this is impractical provide shortcuts for commonly used extension features.

::: note
Users can modify an extension’s keyboard shortcuts to suit their needs. However, users cannot add shortcuts, which is why it’s best to add as many as practical.
:::

</td>
</tr>
<tr>
<td markdown="1">

[Toolbar button (browser action)](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)

</td>
<td markdown="1">

To account for the active theme, provide [toolbar buttons icons for themes with light and dark text](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#theme_icons).

Follow the Photon Design System guidelines on [Iconography](https://design.firefox.com/photon/visuals/iconography.html). Use different images to convey state, such as toggled or active. Don’t use colored icons or color changes to indicate state changes as these may not be visible to all users.

Always include a text title, so the button details can be read out by a screen reader. The button’s title should be updated to reflect:

- the extension status.
- the content of text badges displayed over the button.

Add a shortcut to the button’s action, using the special shortcut `option _execute_browser_action`.

</td>
</tr>
<tr>
<td markdown="1">

[Toolbar button with a popup](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)

</td>
<td markdown="1">

The markup in the popup should follow [standard web accessibility guidelines](https://developer.mozilla.org/docs/Web/Accessibility).

</td>
</tr>
<tr>
<td markdown="1">

[Address bar button (page action)](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)

</td>
<td markdown="1">

The same guidelines as toolbar buttons should be followed.

Add a shortcut to the button’s action, using the special shortcut `option _execute_page_action`.

</td>
</tr>
<tr>
<td markdown="1">

[Address bar button with a popup](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)

</td>
<td markdown="1">

The markup in the popup should follow [standard web accessibility guidelines](https://developer.mozilla.org/docs/Web/Accessibility).

</td>
</tr>
<tr>
<td markdown="1">

[Context menu item](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)

</td>
<td markdown="1">

Context menu items provide an accessible way for users to discover extension features associated with elements in a webpage. Therefore, where possible, add extension features to their relevant context menus.

</td>
</tr>
<tr>
<td markdown="1">

[Sidebar](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)

</td>
<td markdown="1">

The markup in the sidebar should follow [standard web accessibility guidelines](https://developer.mozilla.org/docs/Web/Accessibility).

Add a keyboard shortcut to open a sidebar, using the special shortcut `option _execute_sidebar_action`.

</td>
</tr>
<tr>
<td markdown="1">

[Options page](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)

</td>
<td markdown="1">

The markup in the options page should follow [standard web accessibility guidelines](https://developer.mozilla.org/docs/Web/Accessibility).

</td>
</tr>
<tr>
<td markdown="1">

[Extension page](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)

</td>
<td markdown="1">

The markup in the extension page should follow [standard web accessibility guidelines](https://developer.mozilla.org/docs/Web/Accessibility).

</td>
</tr>
<tr>

<td markdown="1">

[Notification](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)

</td>
<td markdown="1">

Provide notifications for events that happen in the background or are not otherwise notified in the UI. Be sparing with notifications but take care not to minimize them at the expense of accessibility.

</td>
</tr>
<tr>
<td markdown="1">

[Address bar suggestion](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)

</td>
<td markdown="1">

Add suggestions as per the guide, there are no additional accessibility considerations for extensions.

</td>
</tr>
<tr>
<td markdown="1">

[Developer tools panel](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)

</td>
<td markdown="1">

The markup in the sidebar should follow [standard web accessibility guidelines](https://developer.mozilla.org/docs/Web/Accessibility).

Offering a keyboard shortcut to open a devtools panel is recommended.

</td>
</tr>
</tbody>
</table>

</div>
</article>
</section>

<!-- END: Single Column Body Module -->

<!-- Meta Data -->

{%- include page-meta-data.liquid -%}

<!-- END: Meta Data -->

<!-- Up Next -->

{%- include up-next.liquid -%}

<!-- END: Up Next -->
