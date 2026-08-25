---
title: "ChatGPT, Gemini or Claude? My Experience Working with Code"
description: "Why benchmark scores don't always matter in real projects, and how different AI models handle actual bug fixing."
date: 2026-08-20
category: "AI"
author: "Adam"
readingTime: "6 min read"
tags: ["AI", "Coding", "Claude", "ChatGPT", "Gemini"]
cover: "/images/ai.jpg"
---

Lately, I’ve been thinking more and more about how much AI has changed the way developers work.

Not that long ago, we were used to finding bugs ourselves, reading documentation, checking Stack Overflow, staring at the same piece of code for hours and thinking, *“Where on earth is the problem?..”*

Now you can just show the code to an AI and ask:
> “What’s wrong here?”

But there’s an interesting thing I’ve noticed. All these AIs look incredibly smart... until you give them a real problem from a real project.

I decided to compare three tools that seem to be everywhere these days: **ChatGPT**, **Gemini**, and **Claude**. 

I didn’t run any serious scientific tests. This isn’t a benchmark or a proper research study. It’s simply my own experience from working with code. And that’s exactly why I wanted to share it. Because sometimes the numbers and rankings say one thing, but when you’re actually sitting in front of a bug in your project, things can feel completely different.

---

### ChatGPT
I like ChatGPT, and I use it for all sorts of things. It’s good at explaining concepts, helping with ideas, and discussing architecture.

But during one coding task, I had a rather interesting experience:
* I showed it the problem and asked it to find the bug.
* I expected the AI to look at the code, understand where the actual problem was, and suggest a fix.
* Instead, it started looking in completely different places.
* Then it suggested changes in other files, and then a few more changes...

And at some point I thought: *“Hang on. Are we even fixing the right problem here?”* I had to bring it back to the original issue several times.

---

### Gemini
I had a pretty similar experience with Gemini.

It also suggested different approaches, changed things, and explained some of its ideas, but I didn’t get that feeling that the AI actually understood where the problem was. It felt more like it was changing things *around* the problem rather than finding the actual cause.

---

### Claude
And then I tried Claude. That’s when something really surprised me.

I gave it the exact same problem, and it found the place I had been looking for almost immediately. No long detour through the project. No attempt to rewrite half the files. No:

> “Well, we could also change this component... and this file... and maybe try a completely different approach...”

It simply pointed to the problem and explained why it was happening. I made the change. **And it worked.**

---

### Quality Over Quantity

That’s why I think moments like this show the difference between AI tools much better than impressive presentations ever can.

When you’re working on a real project, you don’t always need an AI that can write 500 lines of code in a minute. Sometimes you just need an AI that looks at those 500 lines and says:

> **“Here’s the problem.”**

Right now, out of these three tools, I personally prefer Claude for coding. What I especially like is how it handles existing code. Creating something new is one thing, but finding a bug in a project that already exists, understanding how different files are connected, making sure you don’t break something that already works, and changing only what actually needs to be changed... that’s a completely different story.

---

### The Evolution of AI Development

Of course, I’m only talking about what I’ve actually been able to test myself. I don’t want to say: *“Claude is the best AI on the market.”* That’s a pretty big statement.

Today there’s one model, tomorrow there’s another. A model that everyone was calling revolutionary yesterday can be overtaken by a new version a few months later. Things are moving incredibly fast:
* **Google** keeps releasing new Gemini models with a strong focus on coding and agentic workflows.
* **OpenAI** is developing Codex as a dedicated tool for real software development and working with repositories.
* **Anthropic** is pushing Claude heavily towards programming, putting a lot of focus on coding capabilities and newer iterations.

So I think the question we should be asking now isn’t really: *“Which AI is the smartest?”* 

Maybe the better question is: **“Which AI works best for what I actually need?”**

---

### Working Alongside AI

We’re slowly moving from a situation where AI simply writes code to one where AI actually works alongside us on a project. And honestly, I find that much more interesting.

Being a good developer isn’t about being the person who can write the most lines of code. Sometimes being a good developer means:
* Knowing how to ask the right question.
* Giving the AI the right context.
* Explaining what already works.
* Telling it what must not be changed.
* Asking it to find the cause first, and only then suggest a solution.

AI is getting better and better, but the more powerful these models become, the more important it is to understand what exactly we want from them. 

For now, I’m simply watching how all of this develops and trying different tools. Based on what I’ve actually tested myself, Claude is my choice for coding at the moment. Not because someone told me it’s number one, but because when I genuinely needed help, it found the bug.