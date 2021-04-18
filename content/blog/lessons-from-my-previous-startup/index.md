---
path: lessons-learned-chummy
date: 2021-04-17T18:43:58.645Z
title: I bootstrapped a product and failed.
description: Here's a few lessons I've learned from it.
---
![bigbrain](./bigbrain.jpg)

Last year in August 2020, I started working on a browser extension called [Chummy](https://chummy.atomiccode.io) that brings an IDE-like experience to Github. Chummy became a labor of love that took 6-7 months of time I sneaked in between lunch breaks and after my 9-5 job. At times it consumed my life, and sometimes I went a few weeks not working on it because I'd lost motivation and interest.

Here's a few things I'd do differently if I had to do it again:

### Launch one month in. 

I barely had a product at the 1 month mark, but I had _something_. It doesn't matter if you have a shitty one-liner script or half a feature built out, because it's always better to get feedback earlier than later. I spent too much time making sure the colors were right, spent a week setting up a cd/ci pipeline that I'd use twice, setting up CDN to deliver gzipped files that I ended up scrapping, and other meaningless tasks. I was optimizing parts of my app that I wouldn't have to worry about until I reached the hundreds of thousands of customers mark, which is a good segue into my next lesson.

### 1. Start lean so you can move faster. 

No you don't need that load balancer. No you don't need to setup CD/CI. You don't need to integrate Stripe (collect invoice emails and bill them manually for now). Don't launch infrastructure in all AWS regions (unless you have a really good business reason).

### 2. Get a lot of feedback earlier.

I did end up getting a lot of feedback from user interviews and stories throughout the development process, however I do wish I'd reached out earlier to my friends and network. I fell into the lone wolf coder trap of working on features I thought were really cool before realizing that no one would use them. "[The Mom Test](https://www.amazon.com/dp/B01H4G2J1U/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)" is a good book I found recently through Indie Hackers that teaches you how to cut through the noise (and lies) in customer discovery interviews by asking the right questions.

### 3. Iterate incrementally.

After a good 4 months of just coding, I was ready to start my first big round of user testing. I got a bunch of good feedback, but I was overwhelmed by the amount of bugs/improvements/feature requests I'd received. I spent the following week trying to fix everything at once, but by the end of the week I felt too drained to tackle another round of interviews. I've learned that it's objectively impossible to make everyone happy as a one-person team, and sometimes it's okay to pushback and say no. Your product won't be getting better if you don't prioritize your tasks (and most importantly yourself!).

### 4. Document the process!

This blog is actually something I've wanted to start for a while, but I'm glad I'm starting it while I'm thinking about new startup ideas and wrapping up the tail end of my journey with Chummy. I think it's super important to document the building process, firstly for my own sense of development (and accomplishment), and secondly for others to check in and provide feedback along the way. I want to build my next product in public—in detail with this blog, and in larger steps on Twitter.

Let's run through it again and hope the lessons stick this time :). 