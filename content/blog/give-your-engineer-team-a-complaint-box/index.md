---
title: Give your enginner team a complaint box
date: "2022-04-24T22:48:43.869Z"
---

Last week, I read [Sustainable Web Development with Ruby on Rails](http://sustainable-rails.com/). If I needed to sum it up in simple terms, it would be: manage *carrying costs*. A carrying cost is a cost you have to pay all the time, every time. For example, difficult to run your app in development, strange route naming and manual steps when completing some daily tasks, etc.

There are carrying costs that can be avoided. We can set up a basic structure of where files would go, naming conventions, configuration options, etc. However, we constantly make trade-offs when developing software, and product requirements always change. The team has tasks with a higher priority than writing documents at any time. As a result, new engineers find it difficult to understand the existing systems, and those who leave take away some undocumented institutional knowledge.

Therefore, there should be a mechanism to reduce these carrying costs during the team's growth. In my team, there is a simple wiki page named *Complaint Box*. We write anything that we feel confused or unhappy about on it. Every two weeks, we go through this list and see which items we have the resources to address. Here is a sneak peek of items we added to the Complaint Box:

- Some times local development environment breaks or becomes inconsistent when I switch between branches. It takes me more than 2 hours to set up a local development from scratch when this happens.
- We have multiple places to store configurations, so I can never remember which one to use when writing code.
- I don't have confidence when I release a new feature. Because sometimes, the production environment isn't updated correctly, and I have no way of knowing that except by reaching out to DevOps to manually check on the AWS console.

When adding an item, we follow a simple rule: describe facts or feelings, don't make any judgments, or give any action items. Because these items become carrying costs for a reason, the solutions are not so obviously most of the time. Another unexpected benefit of having a complaint box is that it can connect the dots. Some seemingly unrelated issues have very similar solutions. Very interesting.

Give your engineers a complaint box, and I'm sure the engineers will be happy.

P.S. I would highly recommend [David B. Copeland](https://naildrivin5.com)'s book *[Sustainable Web Development with Ruby on Rails](https://sustainable-rails.com)*. Even if you don't use Ruby on Rails, you can still get inspiration from it.

