---
title: You probably don't need LangChain
date: "2023-06-20T06:23:27.930Z"
---

Recently, I came across FlowiseAI, a new product that provides a user-friendly interface for LangChain. Intrigued by its potential, I delved into the LangChain source code to understand how to build workflows on FlowiseAI. Both products left a positive impression, but when it comes to using LangChain in production systems, I have reservations.

LangChain's architecture is not complex [^1] and there are awesome resources for learning [^2]. It excels at enabling rapid prototyping, making it an attractive choice for early development. However, as the scope expands to building production systems, LangChain's abstractions can become more of a burden than an advantage. The unnecessary complexity they introduce complicates system maintenance and hinders scalability. Eventually, you might find that maintaining your system in Python is a more straightforward approach.

LangChain is a helpful tool to understand LLM. It is also a good tool to build prototypes fastly. However, I don't recommend using it in production systems. The complexities associated with LangChain's abstractions often outweigh their benefits.

[^1]: [Re-implementing LangChain in 100 lines of code](https://blog.scottlogic.com/2023/05/04/langchain-mini.html)
[^2]: [LangChain for LLM Application Development](https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/)
