import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  ExternalLink,
  GitBranch,
  Link,
  Mail,
  MapPin,
  Network,
  Sparkles,
  Terminal,
} from 'lucide-react'

const experience = [
  {
    period: 'May 2025 — Present',
    role: 'AI and ML Engineer',
    company: 'Innovision',
    details: [
      'Built a production agentic AI system in LangGraph chaining 5 sequential nodes — measurement ingestion, SMPL model inference, mesh alignment, fit heatmap analysis, and result delivery — removing roughly 80% of the manual steps in the previous workflow.',
      'Trained and deployed PyTorch models on Azure for body shape prediction and biomechanics analysis, evaluated with Precision, Recall, F1 and MSE.',
      'Built the FastAPI backend serving models as REST inference endpoints with sub-second response times in production.',
      'Designed ETL preprocessing pipelines for body parameters, motion-capture and sensor inputs; shipped the 3D Virtual Fit frontend in React Three Fiber and WebGL.',
    ],
  },
  {
    period: 'Aug 2024 — Apr 2025',
    role: 'Reproducibility Research Advisor',
    company: 'University of Cincinnati',
    details: [
      'Deployed Dockerized RStudio environments across 10+ RNA-seq pipelines.',
      'Cut workflow setup time by about 60% by resolving dependency conflicts in 15+ computational projects.',
    ],
  },
  {
    period: 'Aug 2020 — Apr 2024',
    role: 'Full Stack Developer',
    company: 'IB Hubs',
    details: [
      'Built features across React.js, Node.js/Express.js and MySQL.',
      'Designed schemas, tuned queries with indexing, implemented JWT authentication, and deployed with Docker and CI/CD.',
    ],
  },
]

const projects = [
  {
    number: '01',
    title: 'AI Agent Safety and Control System',
    description: 'A 3-layer safety framework for autonomous agents: a rules engine for command blocking, an LLM judgment layer for risk evaluation, and a human approval gate.',
    tags: ['Safety', 'LLM', 'Autonomous Agents'],
  },
  {
    number: '02',
    title: 'AI Client Discovery Tool',
    description: 'A 5-agent LangGraph research system that profiles any company in under 2 minutes, every fact linked to its source and tagged verified or inferred.',
    tags: ['LangGraph', 'Research', 'RAG'],
  },
  {
    number: '03',
    title: 'OSINT Operational Picture',
    description: 'A real-time intelligence dashboard fusing three live data streams with no paid APIs — 36 geopolitical events geo-plotted from 32 news sources, 200+ aircraft tracked via ADS-B, and an LLM-generated analyst brief.',
    tags: ['Python/FastAPI', 'Leaflet.js', 'OSINT'],
  },
  {
    number: '04',
    title: 'FitSmart AI',
    description: 'An AI fitness app with a GPT-4 Vision food-plate scanner and a LangGraph workflow connecting 5 agents — Vision, Nutrition, Tracking, Workout Planner and Coach.',
    tags: ['GPT-4 Vision', 'LangGraph', 'Fitness AI'],
  },
]

const skillGroups = [
  ['Machine Learning and AI', 'PyTorch', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'NLP', 'LangGraph', 'Multi-Agent Systems', 'RAG', 'OpenAI API', 'Embeddings', 'ChromaDB', 'Prompt Engineering', 'SMPL Body Models'],
  ['MLOps and Cloud', 'Azure', 'Docker', 'Containerized Deployment', 'CI/CD', 'ETL Pipelines', 'Model Evaluation'],
  ['Languages', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'R', 'C++'],
  ['Backend and Data', 'FastAPI', 'REST APIs', 'Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'MinIO'],
  ['Frontend and 3D', 'React.js', 'Three.js', 'React Three Fiber', 'WebGL'],
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d16] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_80%_0%,rgba(28,121,255,0.12),transparent_30%),radial-gradient(circle_at_0%_35%,rgba(14,91,170,0.08),transparent_28%)]" />
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="font-mono text-sm font-bold tracking-[0.3em] text-blue-400">ARG<span className="text-slate-500">/</span>AI</a>
        <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:flex">
          <a className="transition-colors hover:text-blue-400" href="#about">About</a>
          <a className="transition-colors hover:text-blue-400" href="#experience">Experience</a>
          <a className="transition-colors hover:text-blue-400" href="#projects">Projects</a>
          <a className="transition-colors hover:text-blue-400" href="#contact">Contact</a>
        </div>
        <a href="mailto:gamruthareddy06@gmail.com" className="hidden items-center gap-2 rounded-full border border-blue-400/30 px-4 py-2 text-xs font-medium text-blue-300 transition-all hover:border-blue-300 hover:bg-blue-400/10 sm:flex">Let&apos;s connect <ArrowUpRight aria-hidden="true" /></a>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl items-center gap-16 px-6 pb-20 pt-10 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:pb-24">
        <div className="animate-fade-up">
          <div className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-blue-400"><span className="h-px w-9 bg-blue-400" /> Available for meaningful problems</div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.7rem]">Amrutha<br /><span className="text-blue-400">Reddy</span><br />Gurugari<span className="text-blue-400">.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">AI/ML Engineer — Forward Deployed Engineer / AI Engineer. I build and deploy production machine learning systems from data pipeline to the frontend that consumes them.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-sm bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-400">View selected work <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <a href="mailto:gamruthareddy06@gmail.com" className="inline-flex items-center gap-2 rounded-sm border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-blue-400 hover:text-blue-300"><Mail aria-hidden="true" /> Get in touch</a>
          </div>
          <div className="mt-14 flex items-center gap-2 font-mono text-xs text-slate-500"><MapPin aria-hidden="true" className="text-blue-400" /> Cincinnati, OH</div>
        </div>
        <div className="relative hidden h-[480px] lg:block" aria-hidden="true">
          <div className="absolute inset-10 rounded-full border border-blue-400/15" />
          <div className="absolute inset-20 rounded-full border border-blue-400/10" />
          <div className="absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/50 bg-blue-400/10 shadow-[0_0_80px_rgba(59,130,246,0.22)]"><BrainCircuit className="size-16 text-blue-400" /></div>
          <div className="absolute left-8 top-28 rounded border border-slate-800 bg-[#0c1422] px-3 py-2 font-mono text-[10px] text-blue-300">langgraph.pipeline()</div>
          <div className="absolute bottom-28 right-2 rounded border border-slate-800 bg-[#0c1422] px-3 py-2 font-mono text-[10px] text-blue-300">model.deploy(azure)</div>
          <div className="absolute right-16 top-16 size-2 rounded-full bg-blue-400 shadow-[0_0_18px_#60a5fa]" />
          <div className="absolute bottom-16 left-20 size-1.5 rounded-full bg-blue-300" />
        </div>
      </section>

      <section id="about" className="relative z-10 border-y border-slate-800/80 bg-[#0a111d]/80">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-28"><div><p className="section-kicker">01 / About</p><h2 className="section-title">End to end,<br /><span className="text-blue-400">by design.</span></h2></div><div className="max-w-2xl"><p className="text-xl leading-9 text-slate-300">Builds and deploys production machine learning systems — multi-agent LangGraph pipelines, RAG systems and PyTorch models, shipped as FastAPI services on Azure.</p><p className="mt-6 leading-8 text-slate-500">Owns problems end to end: data pipeline, model training and evaluation, inference API, and the frontend that consumes it.</p><div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"><div className="stat"><Network /><span>Multi-agent</span></div><div className="stat"><Cloud /><span>Azure shipped</span></div><div className="stat"><Terminal /><span>FastAPI</span></div><div className="stat"><Code2 /><span>3D / WebGL</span></div></div></div></div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28"><p className="section-kicker">02 / Experience</p><h2 className="section-title mb-16">Where the work<br /><span className="text-blue-400">gets real.</span></h2><div className="flex flex-col gap-12">{experience.map((job) => <article key={job.company} className="grid gap-4 border-t border-slate-800 pt-7 lg:grid-cols-[0.35fr_0.65fr]"><div><p className="font-mono text-xs tracking-wider text-blue-400">{job.period}</p><h3 className="mt-3 text-xl font-semibold text-white">{job.role}</h3><p className="mt-1 text-slate-500">{job.company}</p></div><ul className="flex flex-col gap-3 text-sm leading-7 text-slate-400">{job.details.map((detail) => <li key={detail} className="relative pl-5 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-blue-400">{detail}</li>)}</ul></article>)}</div></section>

      <section id="projects" className="relative z-10 border-y border-slate-800/80 bg-[#0a111d]/80"><div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28"><p className="section-kicker">03 / Selected projects</p><h2 className="section-title mb-16">Systems with<br /><span className="text-blue-400">a point of view.</span></h2><div className="grid gap-4 md:grid-cols-2">{projects.map((project) => <article key={project.number} className="group rounded-sm border border-slate-800 bg-[#0c1422]/70 p-7 transition-all hover:-translate-y-1 hover:border-blue-400/50 hover:bg-[#0d192a]"><div className="flex items-start justify-between"><span className="font-mono text-xs text-blue-400">{project.number}</span><ArrowUpRight aria-hidden="true" className="text-slate-600 transition-colors group-hover:text-blue-400" /></div><h3 className="mt-14 max-w-sm text-2xl font-semibold tracking-tight text-white">{project.title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 font-mono text-[10px] text-slate-500">{tag}</span>)}</div></article>)}</div></div></section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28"><p className="section-kicker">04 / Skills</p><div className="mt-12 flex flex-col gap-8">{skillGroups.map(([group, ...skills]) => <div key={group} className="grid gap-4 border-t border-slate-800 pt-5 md:grid-cols-[0.3fr_0.7fr]"><h3 className="font-mono text-xs uppercase tracking-[0.16em] text-blue-400">{group}</h3><div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

      <footer id="contact" className="relative z-10 border-t border-slate-800 bg-[#0a111d]/80"><div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28"><p className="section-kicker">05 / Contact</p><div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">Let&apos;s build something<br /><span className="text-blue-400">useful.</span></h2><a href="mailto:gamruthareddy06@gmail.com" className="mt-8 inline-flex items-center gap-2 text-lg text-slate-300 transition-colors hover:text-blue-400">gamruthareddy06@gmail.com <ExternalLink aria-hidden="true" /></a></div><div className="flex gap-3"><a className="social-link" href="https://www.linkedin.com/in/amrutha-reddy-gurugari-184100250" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Link /></a><a className="social-link" href="https://github.com/Amruthareddygurugari20" target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch /></a></div></div><div className="mt-24 flex justify-between border-t border-slate-800 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600"><span>Amrutha Reddy Gurugari</span><span>AI / ML Engineer</span></div></div></footer>
    </main>
  )
}


// UI-only classes live here to keep the content above readable.
