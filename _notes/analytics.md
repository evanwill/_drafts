---
title: Compare Matomo to Google Analytics
layout: post
tags: [web]
date: 2021-03-01
---

> this is a draft page to peek at the data. 
> I hope to add more data and better viz.

Adding Google Analytics tracking code to your site has been standard practice for years to gather data about visitors.
However, many people are more critically considering this practice--Analytics is "free" because you are giving your user's data/privacy away to Google in return.
And with growing numbers of users blocking analytics, your data might not even be very accurate (see [Marko Saric 1](https://plausible.io/blog/google-analytics-adblockers-missing-data) and [Marko Saric 2](https://markosaric.com/google-analytics-blocking/)).

Luckily, there are a growing number of alternative options out there. 

One fairly easy to adopt option is [Matomo](https://matomo.org/), an open source analytics platform.
It is available as a one-click install on many hosts.

From Dec 2020 until Mar 2021 I had both Google Analytics and Matomo on some of my sites.
This note compares the data from the two services.

## Set Up

At bottom of head section: 

- Matomo code came first loaded from a personal .org domain, self hosted on Reclaim.
- Google Analytics loaded via analytics.js version.

I collected the data for a set of top pages that have both analytics.

## Pageviews

{% assign pageviews = site.data.ga_v_ma_views %}
{% assign toppages = pageviews | map: "title" | uniq %}
| Page | Month | GA views | MA views | Difference |
| --- | --- | --- | --- | --- |
{% for p in pageviews %}| [{{ p.title }}]({{ p.link }}) | {{ p.date }} | {{ p.ga_pageviews }} | {{ p.ma_pageviews }} | {{ p.ga_pageviews | minus: p.ma_pageviews | times: 100 | divided_by: p.ga_pageviews }}% |
{% endfor %}

GA seems to consistently record more pageviews.

In 2021-01 Google Analytics on sites across the world were hit by a spam spike from `bot-traffic.icu` (in my case, 5040 views in a day).
Matomo did not record this traffic.
Does Matomo do better at filtering out junk traffic?

## Unique Pageviews

| Page | Month | GA uniq views | MA uniq views | Difference |
| --- | --- | --- | --- | --- |
{% for p in pageviews %}| [{{ p.title }}]({{ p.link }}) | {{ p.date }} | {{ p.ga_uniqueviews }} | {{ p.ma_uniqueviews }} | {{ p.ga_uniqueviews | minus: p.ma_uniqueviews | times: 100 | divided_by: p.ga_uniqueviews }}% |
{% endfor %}

GA seems to consistently record more unique pageviews.

## Average Load Time

| Page | Month | GA average | MA average | Difference |
| --- | --- | --- | --- |
{% for p in pageviews %}| [{{ p.title }}]({{ p.link }}) | {{ p.date }} | {{ p.ga_avgloadtime }} | {{ p.ma_avgloadtime }} | {{ p.ga_avgloadtime | minus: p.ma_avgloadtime }} |
{% endfor %}

GA load times seem more random. 
Not sure why they would report "0" and then rather long load times.

## Browser

{% assign browsers = site.data.ga_v_ma_browser_os | where: 'type','browser' %}
| Browser | GA User % | MA User % | Difference |
| --- | --- | --- | --- |
{% for b in browsers %}| {{ b.title }} | {{ b.ga_user_percentage }} | {{ b.ma_user_percentage }} | {{ b.ga_user_percentage | minus: b.ma_user_percentage }} |
{% endfor %}

Not including *other* browsers (so it doesn't add up to 100%).
MA provides stats for desktop vs mobile browsers separately, so I added them together.

## OS

{% assign os = site.data.ga_v_ma_browser_os | where: 'type','os' %}
| OS | GA User % | MA User % | Difference |
| --- | --- | --- | --- |
{% for o in os %}| {{ o.title }} | {{ o.ga_user_percentage }} | {{ o.ma_user_percentage }} | {{ o.ga_user_percentage | minus: o.ma_user_percentage }} |
{% endfor %}

The large differences here are interesting.
Has MA classified some Android as Linux?
Do Linux users block GA but not MA?

## Other notes 

Overall, MA's interface is very nice and less confusing than GA. 
It is definitely a viable alternative.
