# PRD — ReachNG Homepage

**Arquivo Figma:** [ReachNG – Page 1](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=0-1)  
**Repositório:** `reachng-frontend` (Next.js 13 App Router · TypeScript · Tailwind CSS · pnpm)  
**Data da análise:** 21/06/2026  

---

## Tokens de design

Extraídos via Figma MCP (`get_variable_defs`):

| Token | Valor |
|---|---|
| `primary/default` | `#FF5671` |
| `primary/dark-soft` | `#892C39` |
| `primary/dark` | `#4D1A22` |
| `primary/light` | `#FFE0E0` |
| `secondary/default` | `#1E1E24` |
| `white/default` | `#FAF7FC` |
| `Background/white` | `linear-gradient(0deg, #FFF4F6 0%, #FFFAFA 100%)` |
| `card-shadow` | `0px 2px 5px rgba(36,34,49,0.2), 0px -4px 5px rgba(36,34,49,0.01)` |

Todos esses tokens **já estão mapeados** em `tailwind.config.ts` como `primary-default`, `primary-dark-soft`, `primary-dark`, `primary-ligth` (sic), `secondary-default`, `white`, `white-linear`.

**Tipografia:**
- Montserrat (SemiBold 600, Bold 700) → `font-montserrat`
- Poppins (Light 300, Regular 400) → `font-poppins`

Ambas carregadas via `next/font/google` em `layout.tsx`.

---

## Componentes globais (presentes em todas as seções)

### Header

**Figma:** [node `69:232`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=69-232) — Utils › header  
**Código:** `src/components/Home/HomePageHeader.tsx`

Tem 3 variantes no Figma:
- `Property 1=Default` (hero): botão rosa sólido + logo rosa
- `Property 1=Variant2` (seções claras): botão outline rosa + logo branco
- `Property 1=Variant3` (seções escuras): botão rosa sólido + logo branco

**Status: ✅ Implementado** com suporte a `type={0|1}` para alternar cor. Precisa de ajuste:
- [ ] Falta a variante para seções escuras (`type=2` ou equivalente) — atualmente só trata `type===1`
- [ ] Importação inútil `import { type } from "os"` em `HomePageHeader.tsx` (linha 1) — remover

### Navegação lateral (Left-menu)

**Figma:** [node `49:200`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-200) — Utils › Left-menu  
**Código:** `src/components/Home/Navigation.tsx`

8 variantes (page 01–08), sendo o número da página ativa exibido em `text-[32px] font-medium` e os demais em `text-[16px] font-light`. Linha vertical de 164px abaixo do número ativo.

**Status: ✅ Implementado** — alinha com o design. Precisa de ajuste:
- [ ] A cor muda para branco (`#FAF7FC`) nas seções com fundo escuro/rosa (seções 2, 5, 6, 7). A lógica atual só trata seção `idx===1` para branco

### Scroll e detecção de seção

**Código:** `src/app/page.tsx` — função `handleScroll`

- [ ] `handleScroll` itera apenas `[0,1,2,3,4]` (5 seções), deve iterar `[0,1,2,3,4,5,6,7]` (8 seções)
- [ ] `paginateLength={8}` está correto no componente `HomeNavigation`, mas a lógica de scroll precisa ser expandida

---

## Mapeamento de seções

### Seção 01 — Home / Hero

**Figma:** [node `67:127`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=67-127)  
**Preview:** `https://www.figma.com/api/mcp/asset/1afe0ada-adc1-42dd-b019-e4ab5cb93dd6`  
**Código:** `src/components/Home/MainSection.tsx` · `src/app/page.tsx` (`section-0`)  

**Descrição do design:**
- Fundo gradiente branco (`white-linear`)
- Background decorativo: SVG de linhas (`bg-line1.svg`) no topo, onda (`wave-main.svg`) na base
- Centro: logo SVG grande (`LogoIcon`, 229×229), sobreposto ao texto SVG do nome `reactng-text.svg` com linha rosa horizontal
- Subtítulo: *"Seja a mudança que você deseja ver no mundo"* em Poppins ExtraLight, cor `primary-dark-soft`
- Header tipo `Default`: logo + botão rosa sólido "Ver Ongs"
- Nav lateral: página **01** ativa

**Status: ✅ Implementado**

Divergências detectadas:
- [ ] `h-[75vh]` na `MainSection` — o Figma define `900px` (100vh). Verificar se o recorte é intencional
- [ ] A `LogoIcon` está posicionada `bottom-0 right-1/2 translate-x-1/2` (centro-base do bloco) — no Figma a logo fica centralizada sobreposta ao texto. A posição pode variar em telas menores

---

### Seção 02 — Sobre a ReachNG

**Figma:** [node `46:55`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=46-55)  
**Preview:** `https://www.figma.com/api/mcp/asset/2e7a818c-9877-4e35-8658-35661f4ea168`  
**Código:** `src/app/page.tsx` (`section-1`) — **apenas heading placeholder**

**Descrição do design:**
- Fundo: `#FF5671` (`primary-default`)
- Background decorativo: SVG de linhas curvas onduladas escuras
- Título: *"Sobre a ReachNG"* — Montserrat Bold 40px, cor `white/default (#FAF7FC)`
- Card branco (`white-linear`) com sombra `card-shadow`, bordas arredondadas (`rounded-[4px]`), preenchendo ~80% da tela
- Dentro do card: 3 colunas de texto separadas por divisórias verticais rosas (`#FF5671`, 2px)
  - Coluna 1 — **Quem somos?** — Montserrat SemiBold 24px / corpo Poppins Regular 20px, cor `primary-dark-soft`
  - Coluna 2 — **Como funciona?** — idem, texto mais longo (2 parágrafos)
  - Coluna 3 — **Por que escolher o reachNG?** — idem
- Duas elipses decorativas nos cantos superiores do card (esquerda e direita)
- Ícone decorativo "setas" (`primary-dark-soft`) no canto inferior direito do card
- Header tipo `Variant2`: botão outline rosa, logo branco
- Nav lateral: página **02** ativa, cor branco

**Status: ❌ Não implementado**

Tarefas:
- [ ] Criar componente `src/components/Home/AboutSection.tsx`
- [ ] Implementar layout de 3 colunas com divisórias verticais
- [ ] Adicionar card branco com `card-shadow` e gradiente
- [ ] Adicionar elementos decorativos (elipses e ícone de setas)
- [ ] Registrar `section-1` em `page.tsx` com fundo rosa e altura `h-screen`
- [ ] Atualizar lógica do header e nav lateral para usar variante branca nessa seção

---

### Seção 03 — ONGs que contribuimos

**Figma:** [node `28:328`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=28-328)  
**Preview:** `https://www.figma.com/api/mcp/asset/405aab17-54a0-4643-8117-53d0c20fb576`  
**Código:** `src/app/page.tsx` (`section-2`) — **apenas heading placeholder**

**Descrição do design:**
- Fundo: `white-linear`
- Background decorativo: SVG de linhas onduladas + onda invertida no topo
- Título: *"ONGs que contribuimos"* — Montserrat Bold 40px, cor `white/default` (sobre fundo escuro da onda)
- Card central: `white-linear`, sombra `card-shadow`, `rounded-[4px]`, 505px de altura
- Dentro do card: 3 cards de ONG lado a lado, `gap-[51px]`, centralizados
  - Cada card: imagem quadrada `200×200` arredondada, nome em Montserrat Medium 24px, descrição em Poppins Light 16px centralizado
  - Conteúdo placeholder: "ONG A" × 3 (imagens reais a serem fornecidas)
- Header tipo `Variant2`: outline
- Nav lateral: página **03** ativa

**Status: ❌ Não implementado**

Tarefas:
- [ ] Criar componente `src/components/Home/OngsSection.tsx`
- [ ] Implementar grid de 3 cards com imagem, nome e descrição
- [ ] Definir tipo `OngCard { name, description, imageUrl }` e aceitar array como prop
- [ ] Adicionar card container com sombra e gradiente
- [ ] Obter/definir imagens reais das ONGs parceiras (atualmente placeholder no Figma)
- [ ] Registrar `section-2` em `page.tsx`

---

### Seção 04 — Como posso ser apoiador?

**Figma:** [node `49:144`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-144)  
**Preview:** `https://www.figma.com/api/mcp/asset/9ba71cc6-f744-43a5-9371-4183d5fd10c0`  
**Código:** `src/app/page.tsx` (`section-3`) — **apenas heading placeholder**

**Descrição do design:**
- Fundo: `white-linear`
- Background decorativo: SVG de linhas à esquerda
- Bloco de texto no topo (esquerda):
  - Título: *"Como posso ser apoiador"* — Montserrat SemiBold 40px, cor `primary/dark (#4D1A22)`
  - Subtítulo: Poppins Light 16px, cor `primary/dark-soft`
- Grid 2×2 de cards `primary/light (#FFE0E0)`, `rounded-[8px]`, sombra `card-shadow`, `126px` altura, `408px` largura:
  1. **Acesse a plataforma** — link "aqui" em `primary-default` sublinhado
  2. **Escolha uma ONG**
  3. **Contribua** *(typo no Figma: "Contibua")*
  4. **Acompanhe sua Participação**
- Ilustração *"Team spirit-amico"* ocupando metade direita da tela: personagens + plantas + estrelas sobre vetor decorativo
- Header tipo `Variant3` (fundo translúcido claro, botão rosa sólido)
- Nav lateral: página **04** ativa

**Status: ❌ Não implementado**

Tarefas:
- [ ] Criar componente `src/components/Home/SupporterSection.tsx`
- [ ] Implementar layout de 2 colunas: texto + cards (esquerda) | ilustração (direita)
- [ ] Criar 4 cards rosa-claro com título e descrição
- [ ] Exportar/otimizar ilustração "Team spirit-amico" como SVG e adicionar em `public/images/`
- [ ] Registrar `section-3` em `page.tsx`

---

### Seção 05 — Como posso cadastrar minha ONG?

**Figma:** [node `49:337`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-337)  
**Preview:** `https://www.figma.com/api/mcp/asset/0af7df9a-945c-4eeb-bf2d-c479be376a85`  
**Código:** `src/app/page.tsx` (`section-4`) — **apenas heading placeholder**

**Descrição do design:**
- Fundo: `#0F1923` (escuro — nova cor, não presente no `tailwind.config.ts`)
- Faixa decorativa no topo com vetor gradiente escuro
- Título: *"Como posso cadastrar minha ONG?"* — Montserrat SemiBold 40px, cor `#FFF7F8`
- Conteúdo principal: imagem central grande (screenshot do app, 1129×542) com `object-cover`
- Decoração: personagem animado (SVG) no canto inferior direito
- Header tipo `Variant3`: logo branco + botão rosa sólido
- Nav lateral: página **05** ativa

**Status: ❌ Não implementado**

Tarefas:
- [ ] Criar componente `src/components/Home/RegisterOngSection.tsx`
- [ ] Adicionar `#0F1923` ao `tailwind.config.ts` (sugestão: `secondary.dark` ou `bg-dark`)
- [ ] Exportar screenshot do app como imagem e adicionar em `public/images/`
- [ ] Exportar personagem decorativo como SVG e adicionar em `public/images/`
- [ ] Atualizar `section-4` em `page.tsx` com nova seção

---

### Seção 06 — Objetivo do aplicativo

**Figma:** [node `49:375`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-375)  
**Preview:** `https://www.figma.com/api/mcp/asset/891943f5-688c-43ed-9d08-1d3fee1a62d1`  
**Código:** **ausente em `page.tsx`**

**Descrição do design:**
- Fundo: `#0F1923`
- Título: *"Objetivo do aplicativo"* — Montserrat Bold 40px, cor `#F4F4F4`
- Conteúdo: imagem grande do app centralizada (1058×628) com `object-cover`
- Sidebar direita: painel `#D9D9D9` com 3 botões circulares brancos (controles de apresentação/paginação)
- Header wireframe (sem conteúdo real no Figma — placeholder `#D9D9D9`)
- Nav lateral: página **06** ativa

**Status: ❌ Não implementado (seção ausente)**

Tarefas:
- [ ] Criar componente `src/components/Home/ObjectiveSection.tsx`
- [ ] Implementar sidebar de controles circulares (compatível com navegação por dots)
- [ ] Exportar/usar screenshot do app
- [ ] Criar `section-5` em `page.tsx`
- [ ] Expandir scroll handler para incluir `section-5`

---

### Seção 07 — ONGs e Suas causas sociais e ambientais

**Figma:** [node `49:412`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-412)  
**Preview:** `https://www.figma.com/api/mcp/asset/7881fd58-6838-4373-8969-be9e06bba2c6`  
**Código:** **ausente em `page.tsx`**

**Descrição do design:**
- Fundo: `#0F1923`
- Título: *"ONGs e Suas causas sociais e ambientais"* — Montserrat Bold 40px, cor `#F4F4F4`
- Imagem de fundo grande (1424×626) com `object-cover`, começa em `y=262`
- Sidebar direita: painel `#D9D9D9` com 3 botões circulares (mesma que seção 06)
- Header wireframe (placeholder)
- Nav lateral: página **07** ativa

**Status: ❌ Não implementado (seção ausente)**

Tarefas:
- [ ] Criar componente `src/components/Home/OngsCausesSection.tsx`
- [ ] Exportar imagem de ONGs/causas para `public/images/`
- [ ] Reutilizar sidebar de controles circulares da seção 06
- [ ] Criar `section-6` em `page.tsx`
- [ ] Expandir scroll handler para incluir `section-6`

---

### Seção 08 — Contato

**Figma:** [node `49:442`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-442)  
**Preview:** `https://www.figma.com/api/mcp/asset/89106590-f4d0-49fa-a7bc-68b4c65aae6c`  
**Código:** **ausente em `page.tsx`**

**Descrição do design (via metadata — design context não obtido por limite de rate):**
- Frame `49:442` "Contato"
- Imagens de fundo: `image 5` (1440×460, `y=440`) e `image 6` (1424×653, `y=235`)
- Sidebar direita: mesma estrutura `Frame 9` com 3 retângulos (botões)
- Header (instância) e Left-menu (página 08)
- Estrutura sugere layout de tela final com imagem de fundo e informações de contato

**Status: ❌ Não implementado (seção ausente)**

Tarefas:
- [ ] Obter design context completo (requer mais chamadas Figma MCP — limite atingido durante análise)
- [ ] Criar componente `src/components/Home/ContactSection.tsx`
- [ ] Definir conteúdo da seção: formulário, email, redes sociais ou CTA
- [ ] Exportar imagens de fundo
- [ ] Criar `section-7` em `page.tsx`
- [ ] Expandir scroll handler para incluir `section-7`

---

## Resumo do status geral

| # | Seção | Node Figma | Status | Componente |
|---|---|---|---|---|
| 01 | Home / Hero | [`67:127`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=67-127) | ✅ Implementado (ajustes menores) | `MainSection.tsx` |
| — | Header | [`69:232`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=69-232) | ✅ Implementado (falta variante escura) | `HomePageHeader.tsx` |
| — | Navegação lateral | [`49:200`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-200) | ✅ Implementado (falta cor branca em seções escuras) | `Navigation.tsx` |
| 02 | Sobre a ReachNG | [`46:55`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=46-55) | ❌ Não implementado | — |
| 03 | ONGs que contribuimos | [`28:328`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=28-328) | ❌ Não implementado | — |
| 04 | Como posso ser apoiador? | [`49:144`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-144) | ❌ Não implementado | — |
| 05 | Como posso cadastrar minha ONG? | [`49:337`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-337) | ❌ Não implementado | — |
| 06 | Objetivo do aplicativo | [`49:375`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-375) | ❌ Ausente em `page.tsx` | — |
| 07 | ONGs e causas sociais | [`49:412`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-412) | ❌ Ausente em `page.tsx` | — |
| 08 | Contato | [`49:442`](https://www.figma.com/design/YSDQUle3CuJUoSccrKvRD0/ReachNG?node-id=49-442) | ❌ Ausente em `page.tsx` | — |

---

## Bugs identificados no código atual

| Arquivo | Linha | Problema |
|---|---|---|
| `src/components/Home/HomePageHeader.tsx` | 1 | `import { type } from "os"` — importação morta, remover |
| `src/app/page.tsx` | 37 | `[0,1,2,3,4].forEach` — deve ser `[0,1,2,3,4,5,6,7]` para cobrir 8 seções |
| `src/app/page.tsx` | 50 | `type={accScrollPage === 1 ? 1 : 0}` — lógica insuficiente; seções 2, 5, 6, 7 precisam de variante diferente |
| `src/components/Home/Navigation.tsx` | 11 | Cor branca só ativada quando `selectedIdx === 1`; deve ativar também nas seções 2, 5, 6, 7 |
| `tailwind.config.ts` | 11 | `primary-ligth` (typo); considerar corrigir para `primary-light` (impacta todas as referências) |

---

## Estrutura de arquivos sugerida (pós-implementação)

```
src/
├── app/
│   ├── page.tsx                          # orquestração + scroll handler (8 seções)
│   └── layout.tsx
├── components/
│   ├── Home/
│   │   ├── HomePageHeader.tsx            # ✅ — ajustar variante escura
│   │   ├── Navigation.tsx                # ✅ — ajustar cores
│   │   ├── MainSection.tsx               # ✅ seção 01
│   │   ├── AboutSection.tsx              # ❌ seção 02
│   │   ├── OngsSection.tsx               # ❌ seção 03
│   │   ├── SupporterSection.tsx          # ❌ seção 04
│   │   ├── RegisterOngSection.tsx        # ❌ seção 05
│   │   ├── ObjectiveSection.tsx          # ❌ seção 06
│   │   ├── OngsCausesSection.tsx         # ❌ seção 07
│   │   └── ContactSection.tsx            # ❌ seção 08
│   └── icon/
│       ├── TitleHeaderIcon.tsx           # ✅
│       └── LogoIcon.tsx                  # ✅
public/
└── images/
    ├── bg-line1.svg                      # ✅
    ├── reactng-text.svg                  # ✅
    ├── wave-main.svg                     # ✅
    ├── team-spirit-amico.svg             # ❌ exportar do Figma (seção 04)
    ├── app-screenshot-register.png       # ❌ exportar do Figma (seção 05)
    ├── app-screenshot-objective.png      # ❌ exportar do Figma (seção 06)
    └── ongs-causes-bg.png                # ❌ exportar do Figma (seção 07)
```

---

## Notas adicionais

- **Code Connect** indisponível no plano atual (Figma Starter) — mapeamento foi feito manualmente via `get_design_context` e `get_metadata`
- As seções 06, 07 e parte da 08 parecem ser **wireframes** no Figma (cabeçalho com placeholder cinza `#D9D9D9`), indicando que o design ainda está em desenvolvimento
- A seção **Contato (08)** requer nova chamada `get_design_context` quando o limite de rate do Figma MCP for renovado
- As imagens das seções 05–07 devem ser **screenshots reais do aplicativo mobile ReachNG** — precisam ser fornecidas pelo time de produto ou exportadas do Figma quando disponíveis
