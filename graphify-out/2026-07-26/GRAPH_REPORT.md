# Graph Report - docs-miventasimple  (2026-07-26)

## Corpus Check
- 39 files · ~35,433 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 182 nodes · 143 edges · 49 communities (35 shown, 14 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `580fdb3c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Dependencies and Tailwind CSS|Dependencies and Tailwind CSS]]
- [[_COMMUNITY_Mermaid and Diagrams|Mermaid and Diagrams]]
- [[_COMMUNITY_User Documentation|User Documentation]]
- [[_COMMUNITY_Astro Scripts|Astro Scripts]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Accessibility Controls|Accessibility Controls]]
- [[_COMMUNITY_Design System & Theme|Design System & Theme]]
- [[_COMMUNITY_Agent Development Guides|Agent Development Guides]]
- [[_COMMUNITY_Houston Mascot Asset|Houston Mascot Asset]]
- [[_COMMUNITY_Graphify Integration Rules|Graphify Integration Rules]]
- [[_COMMUNITY_Content Collections Config|Content Collections Config]]
- [[_COMMUNITY_Astro Main Config|Astro Main Config]]
- [[_COMMUNITY_Example Documentation Guide|Example Documentation Guide]]
- [[_COMMUNITY_Project README Intro|Project README Intro]]
- [[_COMMUNITY_Example Reference Document|Example Reference Document]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 47|Community 47]]

## God Nodes (most connected - your core abstractions)
1. `Theme: Light — Daylight Studio Style Reference` - 14 edges
2. `Components` - 11 edges
3. `Components (Light)` - 11 edges
4. `Theme: Dark (Default) — Linear Style Reference` - 7 edges
5. `scripts` - 6 edges
6. `Tokens — Spacing & Shapes` - 5 edges
7. `Panel de Configuración` - 5 edges
8. `Starlight Starter Kit: Basics` - 4 edges
9. `Tokens — Typography` - 4 edges
10. `Preguntas Frecuentes` - 4 edges

## Surprising Connections (you probably didn't know these)
- `AGENTS Development Guide` --semantically_similar_to--> `CLAUDE Development Guide`  [INFERRED] [semantically similar]
  AGENTS.md → CLAUDE.md
- `Introducción a VentaSimple` --conceptually_related_to--> `Configuración del Sistema`  [INFERRED]
  src/content/docs/primeros-pasos/inicio.mdx → src/content/docs/configuracion/ajustes.mdx
- `Introducción a VentaSimple` --conceptually_related_to--> `Gestión de Inventario y Productos`  [INFERRED]
  src/content/docs/primeros-pasos/inicio.mdx → src/content/docs/inventario-productos/gestion.mdx
- `Introducción a VentaSimple` --conceptually_related_to--> `Gestión de Ventas y Caja Chica`  [INFERRED]
  src/content/docs/primeros-pasos/inicio.mdx → src/content/docs/ventas-caja/caja-chica.mdx
- `Graphify Workflow` --references--> `Graphify Rule`  [EXTRACTED]
  .agents/workflows/graphify.md → .agents/rules/graphify.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **VentaSimple User Help System** — docs_index_document, primeros_pasos_inicio_document, ventascaja_cajachica_document, inventarioproductos_gestion_document, configuracion_ajustes_document, faqs_preguntas_document [INFERRED 0.95]

## Communities (49 total, 14 thin omitted)

### Community 0 - "Dependencies and Tailwind CSS"
Cohesion: 0.12
Nodes (16): Berkeley Mono — Monospaced font for code snippets, technical details, and certain data displays, ensuring consistent character alignment and technical clarity. · `--font-berkeley-mono`, Border Radius, Do, Do's and Don'ts, Don't, Inter Variable — Primary UI typeface for all content including headings, body text, and interactive elements. Its variable weights provide a clean, modern aesthetic with strong technical readability. · `--font-inter-variable`, Layout, Shadows (+8 more)

### Community 1 - "Mermaid and Diagrams"
Cohesion: 0.12
Nodes (17): Agent Prompt Guide, CSS Custom Properties, Do, Do's and Don'ts (Light), Don't, Elevation, Imagery, Layout (+9 more)

### Community 2 - "User Documentation"
Cohesion: 0.47
Nodes (6): Configuración del Sistema, Centro de Ayuda VentaSimple, Preguntas Frecuentes (FAQs), Gestión de Inventario y Productos, Introducción a VentaSimple, Gestión de Ventas y Caja Chica

### Community 3 - "Astro Scripts"
Cohesion: 0.14
Nodes (13): devDependencies, @astrojs/starlight-tailwind, tailwindcss, @tailwindcss/vite, name, scripts, astro, build (+5 more)

### Community 4 - "TypeScript Configuration"
Cohesion: 0.21
Nodes (11): closeMenu(), constructor(), openMenu(), toggleMenu(), virtual:starlight/components/LanguageSelect, @astrojs/starlight/props, virtual:starlight/components/Search, virtual:starlight/components/SiteTitle (+3 more)

### Community 5 - "Accessibility Controls"
Cohesion: 0.18
Nodes (11): Badge, Components, Default Card, Elevated Card, Ghost Navigation Button, Input Field, Navigation Item Button, Nested Card (+3 more)

### Community 6 - "Design System & Theme"
Cohesion: 1.00
Nodes (3): Dark Theme (Default), VentaSimple Design System, Light Theme

### Community 10 - "Content Collections Config"
Cohesion: 0.18
Nodes (11): Badge, Components (Light), Default Card, Elevated Card, Ghost Navigation Button, Input Field, Navigation Item Button, Nested Card (+3 more)

### Community 11 - "Astro Main Config"
Cohesion: 0.25
Nodes (6): dependencies, astro, @astrojs/sitemap, @astrojs/starlight, mermaid, sharp

### Community 16 - "Community 16"
Cohesion: 0.25
Nodes (7): 1. Registra tu tienda, 2. Agrega tus primeros productos, 3. Abre tu caja chica y cobra, ¿Cómo empezar con VentaSimple?, ¿Cómo fluye el día en tu negocio con VentaSimple?, Llévalo en tu celular sin bajar aplicaciones pesadas, Los 3 pasos para empezar a vender hoy mismo

### Community 17 - "Community 17"
Cohesion: 0.33
Nodes (5): 1. Administración y Personal, 2. Ajustes del POS, 3. Fidelización y Crédito, 4. Finanzas y Control, Panel de Configuración

### Community 18 - "Community 18"
Cohesion: 0.40
Nodes (4): ¿Cómo cambio mi contraseña de acceso?, Preguntas Frecuentes, ¿Puedo utilizar VentaSimple sin conexión a internet?, ¿Qué hago si la impresora de tickets no responde?

### Community 19 - "Community 19"
Cohesion: 0.40
Nodes (4): 🧞 Commands, 🚀 Project Structure, Starlight Starter Kit: Basics, 👀 Want to learn more?

### Community 20 - "Community 20"
Cohesion: 0.50
Nodes (3): Conceptos Clave, Creación de un Producto, Inventario y Productos

### Community 21 - "Community 21"
Cohesion: 0.50
Nodes (3): exclude, extends, include

### Community 22 - "Community 22"
Cohesion: 0.50
Nodes (3): ¿Cómo cobrar un ticket y gestionar tu caja chica?, El camino que sigue tu dinero, Las tareas que realizas a diario en tu caja

## Knowledge Gaps
- **102 isolated node(s):** `name`, `type`, `version`, `dev`, `start` (+97 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Theme: Light — Daylight Studio Style Reference` connect `Mermaid and Diagrams` to `Dependencies and Tailwind CSS`, `Content Collections Config`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `Theme: Dark (Default) — Linear Style Reference` connect `Dependencies and Tailwind CSS` to `Accessibility Controls`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Why does `Components` connect `Accessibility Controls` to `Dependencies and Tailwind CSS`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _102 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dependencies and Tailwind CSS` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Mermaid and Diagrams` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Astro Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._