---
category: 'blog'
cover: './cover.jpg'
title: 'The Singularity'
description: 'Will we survive our Technology?'
date: '2020-05-18'
tags: ['Inspiration', 'Artificial Intelligence']
published: true
---

## What are your thought on automation?

> Manual Work is a Bug

A.B.A: always be automating

Thomas A. Limoncelli

Let me tell you about two systems administrators I know. Both were overloaded, busy IT engineers. Both had many repetitive tasks to do. Both wanted to automate these tasks. After observing these two people for a year, I noticed that one made a lot of progress, while the other one didn't. It wasn't a matter of skill—both were very good software engineers. The difference was their approach, or mindset.

I'd say that the successful one had a mindset of always thinking in terms of moving toward the goal of a better automated system. Imagine an analog gauge that points to the left when measuring that a process is completely manual but slides to the right as progress is made toward a fully autonomous system. The developer mindset is always intent on moving the needle to the right.

This excerpt  is from this [blog](https://queue.acm.org/detail.cfm?id=3197520)

### What do you thing about Artifical Intelligence?

AI is here to stay and quantum computing is the next in thing.

####   Linear Algebra

Give me an example of a linear algebra equation you are familiar with.

$$
% \f is defined as f(#1) using the macro
\f{x} = \int_{-\infty}^\infty
    \hat \f\xi\,e^{2 \pi i \xi x}
    \,d\xi
$$

![The Singularity](./cover.jpg)


### Inspiration Blogs

- [Hackers and Slackers](https://hackersandslackers.com/)
- [Bart Wijnants](https://dev.bartwijnants.be/)
- [Tania Rascia](https://www.taniarascia.com/blog/)
- [Bartek's coding blog](https://www.bfilipek.com/)


### Generate Fibonacci series upto a certain number

```cpp:title=fibonacci.cpp
#include <iostream>
using namespace std;

int main()
{
    int t1 = 0, t2 = 1, nextTerm = 0, n;
    cout << "Enter a positive number: ";
    cin >> n;
    // displays the first two terms which is always 0 and 1
    cout << "Fibonacci Series: " << t1 << ", " << t2 << ", ";
    nextTerm = t1 + t2;
    while(nextTerm <= n)
    {
        cout << nextTerm << ", ";
        t1 = t2;
        t2 = nextTerm;
        nextTerm = t1 + t2;
    }
    return 0;
}

```