---
name: storyteller
description: "Transform project data into compelling human stories. Uses StoryBrand, PAS, and AIDA frameworks to write copy that sounds like a person, not AI. Use for portfolio projects, case studies, and hero sections."
license: MIT
compatibility: opencode
metadata:
  audience: designers-developers
  workflow: content
---

# Storyteller

Transforms dry project data into compelling narratives that sound human. Eliminates AI-generated patterns and replaces them with personal voice, specific details, and emotional resonance.

## When to Use

- Writing or rewriting portfolio project case studies
- Creating hero section copy
- Rewriting About page bio
- Any copy that needs to sound "not AI"
- Before publishing content to production

## The Problem This Solves

AI-generated copy has telltale signs:
- "I believe in..." (generic philosophy)
- "Passionate about..." (empty enthusiasm)
- "Leveraging synergies..." (corporate jargon)
- Perfect grammar with no personality
- No specific numbers, failures, or opinions

## Frameworks

### StoryBrand (Donald Miller)
Structure: **Character → Problem → Guide → Plan → Success → Failure**

```
[Character] is struggling with [Problem].
As their [Guide], I helped them [Plan].
The result: [Success]. Without this, [Failure].
```

### PAS (Problem → Agitation → Solution)
```
[Problem]: "The checkout had a 70% drop-off rate."
[Agitation]: "Every lost cart was $50 in revenue, multiplying daily."
[Solution]: "I redesigned the flow. Drop-off fell to 23%."
```

### Before-After-Bridge
```
Before: [状态 actual]
After: [状态 deseada]
Bridge: [Lo que hice para llegar]
```

## Anti-AI Rules

### NEVER Use These Phrases
- "I believe in design as..."
- "Passionate about creating..."
- "Leveraging cutting-edge..."
- "Seamless integration"
- "Robust solution"
- "Empowering users"
- "Driving innovation"
- "It depends on..."

### ALWAYS Do These
1. **Use first person**: "Yo hice", no "se implementó"
2. **Include numbers**: "Reduje load time de 3s a 0.8s"
3. **Admit failures**: "Intenté X, no funcionó, aprendí Y"
4. **Have opinions**: "Carbon fue un error, lo cambié por..."
5. **Be specific**: "Next.js 16 con Turbopack" no "modern framework"
6. **Use contractions**: "I'm" instead of "I am", "didn't" instead of "did not"
7. **Show personality**: Humor when appropriate, vulnerability, honesty

## Input Format

The storyteller needs these inputs (ask the user if missing):

```yaml
project:
  name: "Project Name"
  problem: "What was the client/user struggling with?"
  role: "What did YOU do? (design, code, both)"
  stack: "Technologies used"
  duration: "How long?"
  team: "Solo? Team? Size?"
  metrics: "Before/after numbers"
  failures: "What went wrong? What did you learn?"
  highlights: "Best moment, favorite feature, proudest achievement"
```

## Output Format

### For Case Study (Full Page)
```markdown
# [Project Name]

## The Problem
[1-2 sentences about the struggle. Specific, relatable.]

## What I Did
[Your specific role. Not "the team" — YOU.]

## The Process
### 1. [Step]
[What you did, why, and what happened]

### 2. [Step]
[Same pattern]

## The Result
[Metrics, outcomes, what changed]

## What I Learned
[Failures, insights, things you'd do differently]
```

### For Hero Section (Short)
```markdown
[Headline: 6-10 words, punchy]
[Sub-headline: 1 sentence, specific outcome]
[CTA: What to do next]
```

### For Card/Preview
```markdown
[Project Name] — [One line outcome]
[Your role] · [Key tech] · [Duration]
```

## Voice Calibration

Match the tone to the context:

| Context | Tone | Example |
|---------|------|---------|
| Portfolio hero | Confident, concise | "Hago que las cosas se sientan bien." |
| Case study | Narrative, detailed | "The checkout was broken. 70% of users left..." |
| About page | Personal, vulnerable | "I once spent 3 weeks on a design system nobody used." |
| Recursos | Technical, opinionated | "Next.js 16 over Remix because..." |

## Quality Checklist

Before delivering, verify:
- [ ] No "I believe in" or "passionate about"
- [ ] At least one specific number
- [ ] At least one admitted failure or challenge
- [ ] First person used consistently
- [ ] Contractions used naturally
- [ ] Opinion expressed (not just facts)
- [ ] Under 100 words for hero, under 500 for case study

## Constraints

- **MUST** ask for missing inputs (don't invent metrics)
- **MUST** preserve the user's actual experience (don't exaggerate)
- **MUST** write in the user's language (EN/ES/JP)
- **MUST** include at least one specific metric or number
- **MUST NOT** use AI buzzwords from the banned list
- **MUST NOT** invent failures or experiences that didn't happen
