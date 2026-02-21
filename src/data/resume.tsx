import { Github, Linkedin, Mail } from "lucide-react";

export const DATA = {
    basics: {
        name: "Deepak Yadav",
        label: "GenAI Architect | Senior AI Consultant",
        headline: "Enterprise AI Architect | Gemini GTM lead partner",
        summary: "Experienced AI & Cloud Architect leading transformation across Fortune 500 accounts. Focused on production-grade GenAI solutions, RAG, agentic architectures, and delivering measurable ROI. Currently driving Google Cloud's Gemini code assist GTM adoption across APAC.",
        email: "deepak141298@gmail.com", // Placeholder
        phone: "+91 7042847082", // Placeholder
        url: "https://deepakyadav.ai",
        location: "India",
        social: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/dpkyadv/", // Placeholder
                icon: Linkedin,
            },
            {
                name: "GitHub",
                url: "https://github.com/fauxirius", // Placeholder
                icon: Github,
            },
            {
                name: "Email",
                url: "mailto:deepak141298@gmail.com",
                icon: Mail,
            },
        ],
    },
    about: "I am a results-driven AI Architect specializing in bridging the gap between cutting-edge Generative AI research and enterprise-scale production. With a track record of driving $30M+ in pipeline through strategic GTM leadership at Google Cloud (APAC) and delivering millions in cost savings at TCS, I thrive at the intersection of technical architecture and business value. My expertise spans Agentic Workflows, Multi-modal RAG, and AI Governance, backed by a unique background in both Engineering (B.Tech) and Global Finance (MBA). From winning hackathons to leading international digital transformations in Germany, I am dedicated to building AI systems that are not just intelligent, but autonomous, ethical, and ROI-positive.",
    nav: [
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Blog", href: "#blog" },
    ],
    stats: [
        { label: "Committed Pipeline (EU, APAC)", value: 35, suffix: "M+", prefix: "$" },
        { label: "Deployment Acceleration", value: 60, suffix: "%" },
        { label: "Annual Cost Savings", value: 2, suffix: "M+", prefix: "$" },
    ],
    experience: [
        {
            company: "Opstree Global | Google Partner",
            role: "Lead GenAI Architect",
            start: "Oct 2025",
            end: "Present",
            description: "Leading Gemini GTM across APAC, partnering with Google AI leadership to craft enterprise adoption playbooks. Architecting end-to-end customer success framework and delivering technical workshops, achieving a 40% deployment acceleration.",
        },
        {
            company: "Tata Consultancy Services (TCS - CTO's Office)",
            role: "AI Consultant | Innovation Champion (Germany)",
            start: "Oct 2021",
            end: "Oct 2025",
            description: "Led 30+ GenAI initiatives delivering €3M+ annual cost savings and implementing governance frameworks covering business valuation and risk control. Concurrently with Business Analyst responsibilities in Germany, leading teams for a major insurance platform Digital Transformation, managing 65+ system integrations and improving requirements accuracy by 30%. Part of the top 0.5% global innovation team within the CTO's Office, tasked with multi account & domain growth for AI & Transformation vertical.",
        },
    ],
    skills: [
        {
            category: "GenAI Core",
            items: ["Gemini", "OpenAI", "AI-Assisted devlopment", "Agentic AI", "RAG (Hybrid/Graph/Multi-modal/Agentic)", "LLM", "LangChain", "Context Engineering", "CrewAI", "Google ADK", "EVAL Frameworks", "NLP", "Fine-tuning"],
        },
        {
            category: "Cloud & Infra",
            items: ["Google Cloud", "Microsoft Azure", "AWS", "Kubernetes", "Docker", "CI/CD", "DevOps"],
        },
        {
            category: "Technical Tools",
            items: ["Python", "SQL", "Git", "PyTorch", "TensorFlow", "Jupyter", "AIOps", "Vision AI"],
        },
        {
            category: "Architecture & Strategy",
            items: ["Microservices", "Event-driven", "Multi-Agent Systems", "Context Engineering", "MCP", "Autonomous AI", "Agile (Scrum)", "Innovation Management", "ROI Analysis"],
        },
    ],
    projects: [
        {
            title: "RAG Architecture Arena",
            tech: ["FastAPI", "Neo4j (Graph)", "LangGraph"],
            description: "Developed a modular evaluation pipeline allowing runtime hot-swapping between Graph, Vector, and Agentic architectures. Reduced RAG strategy selection in minutes via side-by-side empirical benchmarking.",
            href: "#",
        },
        {
            title: "Enterprise Knowledge Core",
            tech: ["Multimodal RAG", "Vector DB", "Vision AI"],
            description: "Built a citation-backed multimodal RAG system capable of ingesting structured and unstructured data streams. Delivers grounded, hallucination-free responses across heterogeneous enterprise datasets.",
            href: "#",
        },
        {
            title: "TrustShield Fraud Detection",
            tech: ["Gemini 3.0", "Network Graph", "Rules Engine"],
            description: "Orchestrated a neural-symbolic ensemble combining deterministic rules with a 'Senior Analyst' AI agent. Delivered explainable risk verdicts with sub-second latency, automatically clearing low-risk edge cases.",
            href: "#",
        },
        {
            title: "Aero-Compliance Swarm",
            tech: ["Multi-Agent Systems", "Tool Use", "Google ADK"],
            description: "Orchestrated a specialized multi-agent swarm for critical aviation documentation. Agents utilize distinct toolsets to synthesize technical data, ensuring rigorous adherence to safety standards.",
            href: "#",
        },
        {
            title: "Voice-Sec Guardrails Engine",
            tech: ["Voice AI", "Security Guardrails", "Interactive Flow"],
            description: "Developed an audio-first engineering workflow that transforms unstructured voice notes into interactive security verification protocols. Automates the generation of guardrails directly from verbal technical briefings.",
            href: "#",
        },
        {
            title: "Legacy Code Modernization",
            tech: ["Gemini Code Assist", "Java 17", "Air-Gapped CLI"],
            description: "Deployed an air-gapped CLI automation pipeline to deterministically 'transpile' legacy code to modern standards. Automatically migrated 85+ complex classes while maintaining >80% test coverage.",
            href: "#",
        },
        {
            title: "Self-Healing CI/CD Pipeline",
            tech: ["Agentic DevOps", "Jenkins", "Autonomous AI"],
            description: "Transformed passive CI/CD pipelines into active agentic workflows. Injected 'Virtual Developer' agents to autonomously intercept build failures, analyze root causes, and commit remediation code in real-time.",
            href: "#",
        },
        {
            title: "RFP Genie: Proposal Engine",
            tech: ["Streamlit", "Gemini 1M Context", "Python"],
            description: "Built a long-context generative system for 'semantic shredding' of complex RFP documents and transform it into Draft Proposal. Reduced proposal analysis time by 70% while ensuring 100% compliance gap detection against internal knowledge bases.",
            href: "#",
        },
        {
            title: "EduCarbon: Hybrid Edge AI",
            tech: ["Next.js 16", "WebLLM (WASM)", "Gemini API"],
            description: "Engineered a hybrid inference router offloading 40% of compute to client GPUs via WebAssembly. Implemented real-time carbon cost estimation to enforce energy budgets while ensuring zero-latency offline fallback.",
            href: "#",
        },
        {
            title: "SonarQube Remediation Agent",
            tech: ["GitHub MCP", "Headless Agents", "SonarQube"],
            description: "Architected a stateless agent that ingests static analysis telemetry to autonomously branch, patch, and PR code fixes. Eliminated manual triage overhead by directly manipulating file blobs via GitHub APIs.",
            href: "#",
        },
        {
            title: "HR Knowledge Nexus",
            tech: ["LangChain", "Docker", "Gemini 2.5 Flash"],
            description: "Architected a privacy-first, containerized RAG system decoupling local embedding from cloud inference. Automates Tier-1 HR support with sub-second retrieval, reducing ticket volume by over 40%.",
            href: "#",
        },
        {
            title: "Content Supply Chain Agent",
            tech: ["Gemini CLI", "File-System State", "Multi-Agent"],
            description: "Engineered a sequential multi-agent pipeline acting as an 'Executive Producer' for thought leadership. Compressed 3-day drafting cycles into single automated sessions by enforcing immutable context gates.",
            href: "#",
        },
        {
            title: "Multi-Agent SDLC Architect",
            tech: ["Hierarchical MAS", "LLM Orchestration", "Prompt Eng"],
            description: "Engineered a hierarchical Multi-Agent System to digitize solution architecture. Reduced PRD/TSD drafting time by 75% by algorithmically decomposing features into validated, compliance-ready documentation.",
            href: "#",
        },
        {
            title: "AI Observability Gateway",
            tech: ["OpenTelemetry", "Prometheus", "Gemini CLI"],
            description: "Architected a privacy-preserving OpenTelemetry gateway to measure AI coding tool adoption. Visualized >5x ROI and secured compliance via real-time PII hashing and selective prompt sanitization.",
            href: "#",
        },
    ],
    education: [
        {
            school: "Amity University, Noida",
            degree: "Master of Business Administration (Global Finance Market)",
            score: "8.31 / 10 (First Division)",
        },
        {
            school: "Galgotias University",
            degree: "Bachelor of Technology (Computer Science and Engineering Hons.)",
            score: "7.24 CGPA",
        },
    ],
    certifications: [
        {
            name: "Google Associate Cloud Engineer & AI",
            issuer: "Google Cloud",
            url: "https://partner.skills.google/public_profiles/d3523d18-a78c-4458-bdc7-aa2bb2300fc7",
        },
        {
            name: "Microsoft Certified: Azure AI Engineer Associate",
            issuer: "Microsoft",
            url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer-associate/",
        },
        {
            name: "AWS Certified AI Practitioner",
            issuer: "Amazon Web Services",
            url: "https://www.credly.com/badges/4450ddcd-956d-4525-8137-fb08e6574ccf/public_url",
        },
        {
            name: "IBM Generative AI for Product Managers",
            issuer: "IBM",
            url: "https://www.coursera.org/account/accomplishments/specialization/L1LT8QGTX3VC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
        },
        {
            name: "AI for Project Managers and Scrum Masters",
            issuer: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/verify/TIMDZCLESQXE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        },
        {
            name: "Web3 and Blockchain Fundamentals",
            issuer: "INSEAD",
            url: "https://www.coursera.org/account/accomplishments/verify/JM7HERO5O2IR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        },
        {
            name: "Innovation Management & Entrepreneurship",
            issuer: "HEC Paris",
            url: "https://www.coursera.org/account/accomplishments/verify/UZB3G54DVSQZ",
        },
        {
            name: "Model Context Protocol",
            issuer: "Anthropic",
            url: "https://verify.skilljar.com/c/qcjeuz9if5no",
        },
    ],
} as const;
