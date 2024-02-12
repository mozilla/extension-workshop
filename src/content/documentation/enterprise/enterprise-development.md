---
layout: sidebar
title: Enterprise development
permalink: /documentation/enterprise/enterprise-development/
topic: Enterprise
tags: [enterprise, policies]
contributors: [mkaply]
last_updated_by: mkaply
date: 2021-01-27
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Enterprise development

As an extension developer, you might may want to customize your add-on via policy or modify its behavior when installed in an enterprise.

{% endcapture %}
{% include modules/page-hero.liquid,
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Disclosure and consent for enterprise extensions

If your extension is installed in an enterprise via the `force_installed` or `normal_installed` options in the [ExtensionSettings enterprise policy](https://mozilla.github.io/policy-templates/#extensionsettings), you must still implement the disclosure and consent experience in the add-on.
You can set a value via the [3rdparty enterprise policy](https://mozilla.github.io/policy-templates/#3rdparty) and read it with `storage.managed` in the add-on to determine if consent is granted. You must display the disclosure and consent experience if the value is not set in `storage.managed`.

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "enterprise-consent"
  content: content_with_toc
%}

{% capture content_with_toc %}

## How to add policy support 

With recent changes to [`chrome.storage.managed`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed), Firefox now supports using enterprise policy in extensions. Having enterprise policy support in your extensions allows enterprises to preconfigure settings in your extension.

Policies can be set in a few different ways, but the easiest way to test is using a file called policies.json.

On Windows, create a directory called `distribution` where the EXE is located and place the file there. On Mac, the file goes into `Firefox.app/Contents/Resources/distribution`. On Linux, the file goes into `firefox/distribution`, where `firefox` is the installation directory for Firefox, which varies by distribution, or you can specify system-wide policy by placing the file in `/etc/firefox/policies`.

For our example, policies.json looks like this:

<!-- START: Syntax Highlighting -->
```js
{
  "policies": {
    "3rdparty": {
      "Extensions": {
        "YOUR_EXTENSION_ID": {
          "STRING": "value",
          "BOOLEAN": true,
          "INTEGER": 10
        }
      }
    }
  }
}

```
<!-- END: Syntax Highlighting -->
Once you've created the policies.json file, you can query the values from your extension.

To access managed storage, you need the storage permission in your manifest.json:

<!-- START: Syntax Highlighting -->
```js
"permissions": [
   "storage"
 ],
```
<!-- END: Syntax Highlighting -->

Unlike Chrome, Firefox does not require a managed_schema that describes your data.

To access the values that have been set via the policy, use the [browser.storage.managed API](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed):

<!-- START: Syntax Highlighting -->
```js
browser.storage.managed.get(['STRING','BOOLEAN','INTEGER'], function (data) {            
  console.log(data.STRING);
  console.log(data.BOOLEAN);
  console.log(data.INTEGER);
});
```
<!-- END: Syntax Highlighting -->

It works the same as the other [browser.storage APIs](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage).

{% endcapture %}
{% include modules/column-w-toc.liquid,
  id: "how-to-add-policy"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## Distributing your policy 

### Windows 
Windows uses administrative templates for policy configuration. These consist of two files: an ADMX file to describe the template and an ADML file to contain the localizable strings.

For local group testing, you can place the ADMX file in `C:\Windows\PolicyDefinitions` and the ADML file in `C:\Windows\PolicyDefinitions\en-US`. The files must have the same basename. You can test the policy by running "Edit Group Policy" (GPEDIT.MSC) on Windows Professional and navigating to Administrative Templates->Mozilla under Computer or User Configuration.

Below are two basic examples: 

#### ADMX file

<!-- START: Syntax Highlighting -->
```xml
<policyDefinitions revision="1.0" schemaVersion="1.0">
  <policyNamespaces>
    <target prefix="NameOfYourExtension" namespace="Mozilla.Policies.NameOfYourExtension"/>
    <using prefix="Mozilla" namespace="Mozilla.Policies"/>
  </policyNamespaces>
  <resources minRequiredRevision="1.0"/>
  <supportedOn>
    <definitions>
    <definition name="VERSION_1" displayName="$(string.VERSION_1)"/>
    <definition name="VERSION_2" displayName="$(string.VERSION_2)"/>
    <definition name="VERSION_3" displayName="$(string.VERSION_3)"/>
    </definitions>
  </supportedOn>
  <categories>
    <category name="Cat_Mozilla" displayName="$(string.Cat_Mozilla)"/>
    <category name="Cat_NameOfYourExtension" displayName="$(string.Cat_NameOfYourExtension)">
    <parentCategory ref="Mozilla:Cat_Mozilla"/>
    </category>
  </categories>
  <policies>
    <policy name="String_Policy" class="Both" displayName="$(string.String_Policy_Name)" explainText="$(string.String_Policy_Explain)" presentation="$(presentation.String_Policy_Presentation)" key="Software\Policies\Mozilla\Firefox\3rdparty\Extensions\YOUR_EXTENSION_ID">
      <parentCategory ref="Cat_NameOfYourExtension"/>
      <!-- You can use supportedOn to mark if policies are supported on particular versions of your extension -->
      <supportedOn ref="VERSION_1"/>
      <elements>
        <!-- id here must match refId in presentation -->
        <!-- valueName is the actual name of the value being set -->
        <text id="String" valueName="STRING"/>
      </elements>
    </policy>
   <policy name="Boolean_Policy" class="Both" displayName="$(string.Boolean_Policy_Name)" explainText="$(string.Boolean_Policy_Explain)" key="Software\Policies\Mozilla\Firefox\3rdparty\Extensions\YOUR_EXTENSION_ID" valueName="BOOLEAN">
      <parentCategory ref="Cat_NameOfYourExtension"/>
      <!-- You can use supportedOn to mark if policies are supported on particular versions of your extension -->
      <supportedOn ref="VERSION_2"/>
      <enabledValue>
        <decimal value="1"/>
      </enabledValue>
      <disabledValue>
        <decimal value="0"/>
      </disabledValue>
    </policy>
    <policy name="Integer_Policy" class="Both" displayName="$(string.Integer_Policy_Name)" explainText="$(string.Integer_Policy_Explain)" presentation="$(presentation.Integer_Policy_Presentation)" key="Software\Policies\Mozilla\Firefox\3rdparty\Extensions\YOUR_EXTENSION_ID">
      <parentCategory ref="Cat_NameOfYourExtension"/>
      <!-- You can use supportedOn to mark if policies are supported on particular versions of your extension -->
      <supportedOn ref="VERSION_3"/>
      <elements>
        <!-- id here must match refId in presentation -->
        <!-- valueName is the actual name of the value being set -->
        <decimal id="Integer" valueName="INTEGER"/>
      </elements>
    </policy>
  </policies>
</policyDefinitions>
```
<!-- END: Syntax Highlighting -->

#### ADML file 
<!-- START: Syntax Highlighting -->
```xml
<?xml version="1.0" encoding="utf-8"?>
<policyDefinitionResources revision="1.0" schemaVersion="1.0">
  <displayName/>
  <description/>
  <resources>
    <stringTable>
      <string id="VERSION_1">Version 1</string>
      <string id="VERSION_2">Version 2</string>
      <string id="VERSION_3">Version 3</string>
      <string id="Cat_Mozilla">Mozilla</string>
      <string id="Cat_NameOfYourExtension">Name of your Extension</string>
      <string id="String_Policy_Name">STRING policy</string>
      <string id="String_Policy_Explain">If this policy is enabled, you can set the string.</string>
      <string id="Boolean_Policy_Name">BOOLEAN policy</string>
      <string id="Boolean_Policy_Explain">If this policy is enabled, the boolean is true. If this policy is disabled, the boolean is false.</string>
      <string id="Integer_Policy_Name">INTEGER policy</string>
      <string id="Integer_Policy_Explain">If this policy is enabled, you can set the integer.</string>
    </stringTable>
    <presentationTable>
      <presentation id="String_Policy_Presentation">
        <!-- refId here must match id in policy -->
        <textBox refId="String">
          <label>A String</label>
        </textBox>
      </presentation>
      <presentation id="Integer_Policy_Presentation">
        <!-- refId here must match id in policy -->
        <decimalTextBox refId="Integer"/>
      </presentation>
    </presentationTable>
  </resources>
</policyDefinitionResources>
```
<!-- END: Syntax Highlighting -->

If you want to learn more about ADMX/ADML files, you can look at the templates we've built for Firefox [here](https://github.com/mozilla/policy-templates/tree/master/windows).

### macOS
macOS uses configuration profiles for policy configuration. macOS administrators will need to combine the changes needed for your extension with their existing Firefox configuration profile. An example plist file is shown below.

<!-- START: Syntax Highlighting -->
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>EnterprisePoliciesEnabled</key>
    <true/>
    <key>BlockAboutProfiles</key>
    <true/>
    <key>3rdparty</key>
    <dict>
      <key>Extensions</key>
      <dict>
        <key>YOUR_EXTENSION_ID</key>
        <dict>
          <key>STRING</key>
          <string>value</string>
          <key>BOOLEAN</key>
          <true/>
          <key>INTEGER</key>
          <integer>10</integer>
        </dict>
      </dict>
    </dict>
  </dict>
</plist>
```
<!-- END: Syntax Highlighting -->

### Linux 
For Linux, you can provide a sample `policies.json` similar to what was provided earlier in this document. Policies.json is the only mechanism supported on Linux.

{% endcapture %}
{% include modules/one-column.liquid,
  id: "distributing-your-policy"
  content: content
%}

<!-- END: Single Column Body Module -->


