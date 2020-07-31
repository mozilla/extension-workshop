---
layout: sidebar
title: Make money from browser extensions
permalink: /documentation/publish/make-money-from-browser-extensions/
topic: Publish
tags: [add-on, distribution, guide, monetization]
contributors: [hellosct1, rebloor]
last_updated_by: hellosct1
date: 2019-03-18 05:01:28
---

<!-- Page Hero Banner -->

{% capture page_hero_banner_content %}

# Make money from browser extensions

While users can download browser extensions for Firefox free of cost from [addons.mozilla.org](https://addons.mozilla.org) (AMO), this doesn’t mean you can’t make money from browser extensions, and to a more limited extent themes.

This article reviews your options for generating revenue from browser extensions by adding paid for features, advertising, or asking for donations. The article then concludes by suggesting some things you can do to maximize revenue generation. But, first the article looks at AMO and the limitations on revenue mechanisms in browser extensions.

{% endcapture %}
{% include modules/page-hero.liquid
	content: page_hero_banner_content
%}

<!-- END: Page Hero Banner -->

<!-- Content with Table of Contents Module -->

{% capture content_with_toc %}

## Will I ever be able to sell through AMO?

Mozilla intends to maintain AMO as a free to download source of browser extensions and themes.

{% endcapture %}
{% include modules/column-w-toc.liquid
  id: "sell-through-AMO"
  content: content_with_toc
%}

<!-- END: Content with Table of Contents -->

<!-- Single Column Body Module -->

{% capture content %}

## What can't you do?

Mozilla places few restraints on how you can monetize your browser extension. The restrictions in place are generally about ensuring good behavior when interacting with your users while generating revenue. So, before you look at making money, be aware that you must:

- Disclose when payment is required to enable any functionality in your extension.
- Provide an easy to read description of any information your extension collects.
- Ensure any monetization mechanisms comply with the Data Disclosure, Collection and Management policies.
- Provide a clear user control mechanism (and opt-in for personal data) for any monetization features during the installation or update of the extension.
- Collect only the essential data needed to operate the monetization mechanism.
- Identify any advertising injected into a web page as originating from the extension.
- Not include cryptocurrency miners or similar functionality.
- Identify affiliate promotions as belonging to the extension. However, modifying web content or facilitating redirects to include affiliate promotion tags is not permitted.

For full details, see the [Content](/documentation/publish/add-on-policies/#content) and [Monetization](/documentation/publish/add-on-policies#monetization) sections of the [Add-on Policies](/documentation/publish/add-on-policies/).

{% endcapture %}
{% include modules/one-column.liquid
  id: "what-cant-you-do"
  content: content
%}

<!-- END: Single Column Body Module -->
<!-- Single Column Body Module -->

{% capture content %}

## What can you do?

There are three approaches you can take to monetizing your browser extension:

- Charging for features
- Displaying ads
- Asking for donations

### Charging for features

There are many approaches that you can take to charging for the features in your browser extension, you can for example:

- Place all your features behind a paywall.
- Offer basic features for free and place enhanced features behind a paywall.
- Offer a number of free uses of a feature or free use of that feature for a time before placing it behind a paywall.

Unless you provide a feature with a very high intrinsic value, the most successful approach is likely to involve providing users with some free features with additional features for a fee. If you are reluctant to offer free features, consider that developers who have tried to market extensions with no free features report that it is hard to attract an audience to a fully commercial product. An added advantage of providing some or all of your features in some form for free is that users can confirm that your extension does what they expect. If you ask users to pay upfront, some will ask for refunds because the extension didn’t have the features they were expecting.

#### Choosing a payment provider

The key enabler to implementing paid features in your browser extension is choosing a payment processing provider. There are many providers you could use, however, the one with the best fit for your needs and that of your users may not necessarily be the best known. When choosing your payment provider, some things to consider are:

- Do they offer both one-off and subscription payments?
- Do they offer mechanisms to generate license keys or issue license keys from a list?
- Do they process in the currencies popular among my users?
- Which payment types do they support? (Remembering that credit cards are not necessarily common in all markets around the world.)
- Do they handle all purchase tax issues for me?

#### Choosing the frequency of payments

Many payment providers will enable you to offer either one time or subscription purchases. One-time purchases offer the simplest approach, as you don’t have to worry about monitoring subscription payments and canceling licensing if they lapse. On the other hand, with subscription you can offer features at a lower transaction price, reducing the barrier to payment. Subscriptions may also create a reliable, recurring revenue stream.

#### Implementing a payment and licensing system

If you make your browser extension available on Chrome, you can take advantage of the Google in-app payment API to handle transactions.

For Firefox, and most other major browsers, you will need to setup a payment system. A simple and reasonably robust approach is to do the following:

- Sell users a lifetime license with a private license key.
- On a suitable server, store details of the license key and a related email address.
- In the browser, store the license key with a hash code of the key plus some user private data, such as a pin code.
- When the paid feature is used, check whether the hash code is valid. If the hash code is invalid, request the server to send an email to the address stored with the license key in order to revalidate (that is, recalculate and save) the hash code. This prevents the license key being widely shared.

In addition to having a way for the user to input the license key manually, it is important to handle interactions with the purchase page so that the license is installed automatically. This saves a lot of support work explaining how to install the license.

Developer Tip: Do not spend too much time securing your licensing system against hackers, because users who are inclined to use a hacked license are unlikely to paid for one. Your time is better spent developing new extension features that attract more paying users.

#### Converting from free to paid

If you initially launched your browser extension as a free product your best approach to generating revenue is by adding new commercial features. Converting a free product to a paid one is unlikely to go down well with your users. Even adding commercial features needs to be undertaken with care. You should be prepared for some negative reaction, along the lines of “it used to be free”, even if you aren’t changing or limiting access to the free features.

### Displaying ads

If you think your browser extension’s user base is unlikely to be receptive to paid features, ads may be a viable option for revenue generation. However, be aware that ads are only likely to generate significant revenue if your extension has a large user base.

There are three ways in which you can technically display adverts, but not all are acceptable to ad channels and users. The options are:

- Injecting ads into web pages. In this use case you would modify a viewed web page to inject ads or modify existing ad targets. This can be both pages generated by your browser extension and those from third-party websites people with your browser extension installed visit. The practice of modifying third-party web pages is permitted by most browser extension stores, including AMO and the Chrome Web Store. However, user resistance to browser extensions that modify third-party pages can be high and may result in negative reviews and uninstalls.

- Displaying ads in the extension user interface using ad click targetsMost ad programs do not allow this method (they check the referrer at link target) because of the risk of fraud, through the extension generating ad clicks. Where an ad provider allow this mechanism, it’s likely that they will ask to review your extension. If you can find a provider, the advantage of this mechanism, particularly where you make it clear that you ad fund your browser extension development, is that it is relatively well tolerated by users.

- Displaying ads in web pages from the extension siteIn this case you would include advertising in your extension’s web site and then display these pages triggered by appropriate events in the browser extension. Examples of suitable triggers include when the browser extension is installed, updated, or uninstall, as well as help, best practices, tricks and tips or similar pages opened from the browser extension. You should be able to use any ad programs with this method.

#### Choosing an ad program

There are many add providers ranging from large well-known global providers, such as Google AdSense, down to small regional services. Finding the right provider will depend very much on your browser extension, but here are a few things to consider:

- Does the service have good ad inventory for the countries where my users live?
- Does the service have a good reputation for prompt and regular payment?
- Does the service allow me to include ads in my browser extension interface?
- What options does the service provide for revenue generation, for example ad impressions, click throughs, or other?
- Does the service enable me to filter ads so they are relevant to my users?
- What ad sizes and display modes does the service offer?

You can always look to selling ad space yourself. This is, however, likely to be viable only if you have significant resources you can mobilize to sell advertising space and you have the traffic to support that approach. However, you may be able to identify a supplier of a complementary product or service who would be interested in your user base and be able to make a bulk sale of your ad space.

#### Best practices for displaying ads

Ads present an interesting challenge, the need to find a compromise between them being visible enough to generate revenue but not so visible as to put users off. There are no hard and fast rules for good design for incorporating ads, but these are some of the things you should consider.

- Make it clear that your browser extension is ad funded, such as in its AMO description. Users are more likely to tolerate ads if they know to expect them.
- Use interstitial ads (ads that take over a whole page and interrupt the extension’s flow) with care. Look for events where flow is naturally interrupted such as transitions between levels in games or at the start of a file download. Also, consider dismissing these ads automatically.
- Where your ad network allows, target ads to your extension’s audience.
- Don’t make adverts too intrusive.

### Ask for donations

If setting up paid access to the features of your browser extension or navigating the intricacies of implementing ads seems inappropriate for your extension, asking for donations may be the way to go.

However, be aware that most developers report that donations only generate significant revenue where the browser extension has a large user base.

Donations may also be a good option, compared to switching to a paid model where you might encounter user resistance, where your browser extension has already been available fully featured and free of charge.

There are number of platforms you can use to provide payment services for donations, including:

- [liberapay.com](https://liberapay.com/)—an open source, donation funded platform designed to handle recurring contributions to the creators of Commons.
- [micropayment.de](https://www.micropayment.de/)—a commercial payment provider offering features for one-off and recurring donations.
- [opencollective.com](https://opencollective.com/)—an open source, sponsor funded platform designed to manage the reimbursement of expenses within collectives.
- [patreon.com](https://www.patreon.com/)—a commercial platform focusing on generating creators income from regular subscriptions.
- [paypal.com](https://www.paypal.com/)—a commercial platform supporting both one-off and recurring donations.
- [paypal.me](https://www.paypal.me/)—an add-on to PayPal that provides a simple link to a payment page where users can make one-off donations.

When choosing a donations platform provider consider the following:

- Does it provide for payments in the currencies most likely to be used by your users?
- What percentage of your donations does the site retain as their management fee?
- Does the provider protect me from payment fraud?
- Does the provider activity follow-up lapsed subscriptions?

With browser extensions for Firefox you have two ways in which you can request donations: through AMO and through your extension.

#### Requesting donations through AMO

You can add a “contributions” button to your extension’s AMO page that links through to your payment page from one of the supported providers. To add the button:

- Set up an account with one of the supported providers: [liberapay.com](https://liberapay.com/), [micropayment.de](https://www.micropayment.de/), [opencollective.com](https://opencollective.com/), [patreon.com](https://www.patreon.com/), [paypal.com](https://www.paypal.com/), or [paypal.me](https://www.paypal.me/).
- Obtain the link to your donations page.
- In the AMO developer hub, for the extension or theme you want to add a contributions button to, click Edit details.
- In the Basic information section add your donations page link to Contributions URL.

<img src="/assets/img/Contributions_URL.png" alt="" />

A contribution section is then added to your extension’s AMO page.

<img src="/assets/img/Contribute_section_AMO.png" alt="" />

#### Requesting donations from your browser extension

To do this you add a donation button or link to a suitable place in your extension.

#### Best practices

You won’t get a donation if you don’t ask for it, but excessive requests for donations can be off-putting to your users and may encourage them to remove your browser extension. However, finding the right method and frequency for donation requests will be a matter of trial and error. When you add donation requests, consider the following:

- Tie donation requests to features the user is likely to use regularly or provides them with significant “value”.
- Give the user a clear option to close a donation request.
- If possible, turn off donation requests once the user has given.
- If requesting one-off donations only restart donation requests after a major upgrade, and identify the new or improved features in the request.

Also, remember that if you are requesting regular donations you will also need to provide new content or features on a regular basis too.

{% endcapture %}
{% include modules/one-column.liquid
  id: "what-can-you-do"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## Unsolicited offers

As your extension gains popularity it’s highly likely that you will be contacted by agencies offering to turn you into a millionaire in no time, with little effort on your part; something along the lines of: “just insert one line into your add-on’s code and get rich doing nothing!”

Treat any such offers with great caution. The likelihood is that the scheme will be looking to capture your users’ private data to sell on. And, if you get any money at all, it’s likely to be much less than originally promised. But worse, you could end up with your extension blocklisted and your reputation tarnished.

{% endcapture %}
{% include modules/one-column.liquid
  id: "unsolicited-offers"
  content: content
%}

<!-- END: Single Column Body Module -->

<!-- Single Column Body Module -->

{% capture content %}

## How can I maximize my income?

Building a large, loyal user base is key to maximizing the revenue you generate, regardless of the mechanism you choose. To build your user base:

- implement your browser extension in as many platforms as possible, at a minimum Firefox and Chrome.
- focus on the features and quality of your browser extension, poor quality extensions rarely retain significant numbers of users.
- engage with your users as much as possible through social media, forums, and by responding to support requests and feedback.

{% endcapture %}
{% include modules/one-column.liquid
  id: "maximize-income"
  content: content
%}

<!-- END: Single Column Body Module -->


