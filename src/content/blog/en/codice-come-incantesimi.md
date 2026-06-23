---
title: "Weaving code like spells"
description: "Clean architecture patterns applied to a small text-based game engine."
date: 2026-05-12
tags: ["CODING"]
---

Every well-formed spell has a structure: words of power, a target and an effect. Code is no different. When I started writing the engine for this small text adventure, I treated each command like a rune to be carved with care.

The heart of the system is a clean split between parser, world state and rules. The parser turns the player words into intent; the state holds the truth; the rules decide what is possible. Three circles that never touch directly.

The result is an engine I can extend by adding new "spells" without rewriting what already works. As any good mage knows, real power lies not in a single spell, but in the grammar that binds them together.
