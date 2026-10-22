# Phase 1 & 2: Discovery and Wireframe

## Concept
**Craft Studio**: a responsive learning hub for the DecodeLabs Industrial Training Kit.
The brief asks for "a simple web application" without naming one, so this concept was chosen.
Interns browse the six roadmap phases of Project 1 as modules, filter them, and tick them off.

## Phase 1: Discovery

### How Might We
- How might we help an intern see the whole Project 1 roadmap on a phone in under 10 seconds?
- How might we let them track what is done without an account or backend?
- How might we make the interface feel warm and grounded instead of sterile tech?

### Empathy Map (user: a first-week intern, mostly on a phone)
| Says | Thinks |
|---|---|
| "Where do I start?" | "Am I falling behind the roadmap?" |
| "Which step am I on?" | "I need something I can read on the bus." |

| Does | Feels |
|---|---|
| Checks the site on a phone between tasks | Overwhelmed by long briefs |
| Skims headings, ticks off finished work | Motivated when progress is visible |

### Pain points found
1. Long briefs are hard to scan on small screens.
2. No visible sense of progress.
3. Low-contrast, tiny text is tiring to read.

## Phase 2: Wireframe (low-fidelity, grayscale, mobile-first)

Golden rule from the brief: if it does not work in grayscale, colour will not fix it.

### Mobile (single column, < 768px)
```
+------------------------+
| [Logo]          [Menu] |  header + nav (menu collapses)
+------------------------+
| HERO                   |
| Headline               |
| Short intro  [Button]  |
+------------------------+
| PROGRESS  [=====-----] |
+------------------------+
| [All][Plan][Build][QA] |  filter buttons
| +--------------------+ |
| | Module card (art.) | |
| +--------------------+ |
| | Module card        | |
| +--------------------+ |
+------------------------+
| STANDARDS (3 cards, 1 col) |
+------------------------+
| FOOTER                 |
+------------------------+
```

### Tablet (>= 768px)
Header nav shown inline. Module cards in 2 columns. Standards in 3 columns.

### Desktop (>= 1024px)
Page grid: main content column plus a sticky side panel holding the progress tracker.
Roadmap cards stay in 2 columns inside the main column; standards in 3 columns.
