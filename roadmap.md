# Portfolio Roadmap: Deepak Yadav (Athos Dark Adaptation)

## 1. Project Overview
**Goal:** Create a high-performance portfolio website for a Senior AI Architect.
**Design Reference:** [Athos Dark Template](https://athos-dark.framer.ai/) (Dark mode, minimalist, bento-grid layout, high contrast).
**Core Identity:** Enterprise AI Architect, GenAI Consultant, Cloud Transformation Lead.

---

## 2. Design System & UI Guidelines
*To be enforced across all components.*

### Color Palette
- **Background:** `#000000` (Pure Black) or `#0A0A0A` (Zinc-950)
- **Surface/Cards:** `#121212` with `1px` border `#27272a` (Zinc-800)
- **Primary Text:** `#EDEDED` (Zinc-100)
- **Secondary Text:** `#A1A1AA` (Zinc-400)
- **Accent:** `#3B82F6` (Google Cloud Blue) or `#8B5CF6` (AI/Purple) - *Use sparingly for metrics.*

### Typography
- **Headings:** Inter or Geist Sans (Tracking tight, weight 600/700)
- **Body:** Inter or Geist Sans (Height 1.6, weight 400)
- **Monospace:** JetBrains Mono (For code snippets and tech stack)

### Components (Athos Style)
- **Bento Grids:** Use CSS Grid for the "Skills" and "Key Metrics" sections.
- **Glassmorphism:** Subtle blur on Navbar (`backdrop-blur-md`).
- **Micro-interactions:** Hover states on project cards (scale 1.02, border lighten).

---

## 3. Content Architecture & Data Source
*Reference the source resume for all content injection.*

### A. Hero Section
- **Headline:** GenAI Consultant | [cite_start]Enterprise AI Architect [cite: 2]
- **Sub-headline:** Leading AI & cloud transformation for Fortune 100 accounts. [cite_start]Currently driving Google Cloud's Gemini adoption across APAC. [cite: 3, 4]
- **Primary CTA:** "View Strategy" (Scroll to Projects)
- **Secondary CTA:** "Book Consultation" (Link to Email/LinkedIn)

### B. The "Impact" Ticker (Metrics)
*Display these prominently using large typography.*
1. [cite_start]**$15M+** in committed pipeline (APAC) [cite: 4]
2. [cite_start]**95%+** Adoption rate for Gemini solutions [cite: 4]
3. [cite_start]**40%** Deployment acceleration via workshops [cite: 4]
4. [cite_start]**€2M+** Annual cost savings (TCS CTO Office) [cite: 18]

### C. Experience Timeline (Vertical Layout)
*Reverse chronological order.*

**1. Lead GenAI Architect | Opstree Global (Google Cloud)**
* [cite_start]*Date:* Oct 2025 - Present [cite: 9]
* [cite_start]*Key Focus:* Enterprise AI Strategy, Gemini GTM. [cite: 9]
* *Highlight:* Architected end-to-end customer success framework; [cite_start]50+ technical workshops. [cite: 11]

**2. Innovation Champion | TCS CTO's Office**
* [cite_start]*Date:* Oct 2021 - Oct 2025 [cite: 17]
* [cite_start]*Key Focus:* AI Solution Owner (PACE Labs). [cite: 18]
* [cite_start]*Highlight:* Led 21+ GenAI initiatives; deployed CrewAI for customer service (60% autonomous resolution). [cite: 18, 21]

**3. Business Analyst | TCS BaNCS Insurance (Germany)**
* [cite_start]*Date:* Aug 2023 - Dec 2024 [cite: 23]
* [cite_start]*Key Focus:* Interface Workstream Lead. [cite: 23]
* [cite_start]*Highlight:* Led 10-person team designing architecture for 65+ system integrations. [cite: 24]

### D. Tech Stack (Bento Grid)
[cite_start]*Organize the skills table [cite: 6] into visual categories.*

| Category | Icon Concept | Data Points |
| :--- | :--- | :--- |
| **GenAI Core** | Sparkle/Brain | [cite_start]OpenAI, Gemini, CustomGPT, LangChain, RAG, Agentic AI, LLM [cite: 6] |
| **Cloud Infra** | Cloud | [cite_start]Google Cloud, Microsoft Azure, AWS [cite: 6] |
| **DevOps/ML** | Terminal | [cite_start]Python, PyTorch, TensorFlow, Kubernetes, CI/CD [cite: 6] |
| **Architecture** | Flowchart | [cite_start]Microservices, Event-driven, Multi-Agent Systems [cite: 6] |

### E. Featured Projects (Case Studies)
*Select top 3 distinct achievements for deep dives.*

1. **Project Alpha: Gemini APAC Strategy**
   - [cite_start]*Context:* Partnered with Google AI VP to design enterprise adoption playbooks. [cite: 9]
   - *Tech:* Gemini, Google Cloud.
   - [cite_start]*Outcome:* 130+ workshops, 95% adoption. [cite: 4]

2. **Project Beta: Enterprise Knowledge Transformation**
   - [cite_start]*Context:* Architecting RAG solutions aligned to optimal data structures. [cite: 19]
   - [cite_start]*Tech:* Hybrid/Graph RAG, Azure AI, Vector Databases. [cite: 19]
   - [cite_start]*Outcome:* Voice-enabled assistant with 88% query accuracy. [cite: 20]

3. **Project Gamma: Autonomous RFP Automation**
   - [cite_start]*Context:* RFP-to-offer automation system. [cite: 26]
   - [cite_start]*Tech:* Azure AI Prompt Flow. [cite: 26]
   - [cite_start]*Outcome:* Reduced processing time from 30 days to 1.9 days. [cite: 26]

---

## 4. Development Checklist

### Phase 1: Setup & Infrastructure
- [ ] Initialize Next.js project with TypeScript.
- [ ] Install Tailwind CSS and configure `tailwind.config.ts` with custom colors.
- [ ] Install Framer Motion for animations.
- [ ] Create `data/resume.json` to store the content structured above.

### Phase 2: Core Components
- [ ] **Navbar:** Sticky, glassmorphism, links to (Home, Work, About, Contact).
- [ ] **Hero:** Text fade-in animation, "Available for Consulting" badge.
- [ ] **Grid Layout:** Create a reusable `<BentoCard />` component.
- [ ] **Skill Tags:** Create `<TechBadge />` component for the skills list.

### Phase 3: Sections Implementation
- [ ] **Hero Section:** Implement with Headings and CTAs.
- [ ] **Metrics Section:** Implement the 4 key stats (Use `CountUp` animation).
- [ ] **Work Experience:** Implement vertical timeline with "Company" and "Role" distinct styling.
- [ ] **Projects:** Create detailed cards for the 3 Case Studies.

### Phase 4: Optimization & SEO
- [ ] Add metadata: "Deepak Yadav - AI Architect".
- [ ] Add JSON-LD for "Person" schema.
- [ ] Optimize images (convert to WebP).
- [ ] Accessibility check (ARIA labels for icons).

---

## 5. Future Enhancements (Backlog)
- Add a "Chat with my Resume" bot using RAG (Use the `resume.pdf` content).
- Blog section for writing about "Agentic AI" and "GTM Strategies."
- Integration with Calendly for the "Book Consultation" button.