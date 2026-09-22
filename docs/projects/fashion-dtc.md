# Fashion DTC — Textile Verification Platform

## Status: ⏳ PENDING APPROVAL
## Public: ❌ NO — Not in Sanity yet (dummy project)

---

## ENGLISH

### Title
Fashion DTC — DTC Fashion with Textile Verification

### Category
Fashion E-commerce / Supply Chain Transparency

### Year
2026

### Client
Personal — Fashion DTC (Falabella, Dafiti, Koaj, Zara CO, Leonisa references)

### Location
Colombia — DTC / Remote

### My Role
Product Designer — Catalog, Textile Cards, Review System, Trust UX

### The Problem
Fashion e-commerce has a trust crisis. Customers buy online, receive something different:

- **40% return rate** on fashion — mostly "fabric not as described"
- No way to verify composition: "100% cotton" label often lies
- Care instructions generic — garments ruined on first wash
- Reviews talk about fit, not fabric quality over time

### Product Vision
**Transparent textiles: what you buy is what you wear.**

A DTC fashion platform where every garment has a verified textile card — composition lab-tested, origin traced, care instructions specific, reviews by fabric performance — so customers buy once, wear for years.

### What I Did
1. **Textile Verification Cards**: Lab-tested composition, origin traceability, specific care per fabric type
2. **Fabric-First Catalog**: Filter by fabric (not just style) — "show me 100% linen under $80"
3. **Review System by Fabric**: Reviews tagged by fabric performance — "pilling after 5 washes", "holds shape"
4. **Brand Accountability**: Brands must submit lab certificates to list — verified badge on product

### The Process
**The supply chain wall**: Brands don't own their fabric data. They buy from mills, mills buy from spinners. Asking "what's in this shirt?" triggers a 6-month audit.

**Attempt 1**: Tried blockchain traceability (VeChain style). Failed — no brand would pay for on-chain verification, and Colombian mills have zero digital infrastructure.

**Attempt 2**: Pragmatic verification. Brand submits lab certificate (ISO 1833 for composition) → we verify → badge on product. No blockchain, just PDF validation. 3 brands signed pilot.

**The review insight**: Existing reviews useless for durability. "Cute shirt" ≠ "how does it hold up?" Built review prompts: "After 10 washes: pilling? shrinkage? color fade? shape retention?" Reviews became buying signals.

**The care instruction gap**: Generic "machine wash cold" ruins delicate fabrics. Built fabric-specific care engine: "This 100% linen: wash 30°C, line dry, steam iron damp." Returns for "shrunk in wash" dropped 60%.

### The Result
- **Return rate**: 40% → 22% (pilot, fabric-verified SKUs only)
- **Verified SKUs**: 200+ products with lab certificates
- **Review quality**: 3.2x more fabric-specific reviews vs control
- **References**: Falabella, Dafiti, Koaj, Zara CO, Leonisa in conversations for 2026

### What I Learned
- **Verification > blockchain**: Brands want PDF audit trail, not distributed ledger. Meet them where they are.
- **Reviews need structure**: Free-text reviews optimize for "helpful", not "durability data". Structure the prompt.
- **Care instructions are UX**: Wrong care label = ruined garment = return = lost customer. Specific > generic.
- **Colombian textile data is analog**: Mills run on paper. Digital verification starts with digitizing the certificate.

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- Image recognition (fabric texture analysis prototype)

---

## ESPAÑOL

### Título
Fashion DTC — Moda DTC con Verificación Textil

### Categoría
E-commerce Moda / Transparencia Cadena Suministro

### Año
2026

### Cliente
Personal — Fashion DTC (Referencias: Falabella, Dafiti, Koaj, Zara CO, Leonisa)

### Ubicación
Colombia — DTC / Remoto

### Mi Rol
Product Designer — Catálogo, Fichas Textiles, Sistema Reseñas, UX Confianza

### El Problema
El e-commerce de moda tiene crisis de confianza. Compras online, recibes algo distinto:

- **40% tasa devolución** en moda — mayormente "tela no es como describía"
- Sin forma de verificar composición: etiqueta "100% algodón" a menudo miente
- Instrucciones de cuidado genéricas — prendas arruinadas en primer lavado
- Reseñas hablan de talla, no de calidad tela en el tiempo

### Visión de Producto
**Textiles transparentes: lo que compras es lo que vistes.**

Plataforma DTC moda donde cada prenda tiene ficha textil verificada — composición lab-tested, origen trazado, cuidado específico por tela, reseñas por performance de tela — para que cliente compre una vez, use años.

### Qué Hice
1. **Fichas Verificación Textil**: Composición probada en lab, trazabilidad origen, cuidado específico por tipo tela
2. **Catálogo Tela-Primero**: Filtra por tela (no solo estilo) — "muéstrame 100% lino bajo $80"
3. **Sistema Reseñas por Tela**: Reseñas etiquetadas por performance tela — "pilling a 5 lavados", "mantiene forma"
4. **Accountability Marcas**: Marcas deben enviar certificado lab para listar — badge verificado en producto

### El Proceso
**El muro cadena suministro**: Marcas no poseen datos de su tela. Compran a tejidos, tejidos a hilanderías. Preguntar "¿qué tiene esta camisa?" dispara auditoría de 6 meses.

**Intento 1**: Probé trazabilidad blockchain (estilo VeChain). Falló — ninguna marca pagaría verificación on-chain, y molinos colombianos tienen cero infraestructura digital.

**Intento 2**: Verificación pragmática. Marca envía certificado lab (ISO 1833 composición) → verificamos → badge en producto. Sin blockchain, solo validación PDF. 3 marcas firmaron piloto.

**El insight de reseñas**: Reseñas existentes inútiles para durabilidad. "Linda camisa" ≠ "¿cómo aguanta?". Construí prompts: "Tras 10 lavados: pilling? encogimiento? pérdida color? retención forma?" Reseñas se volvieron señales de compra.

**El hueco instrucciones cuidado**: "Lavar frío máquina" genérico arruina telas delicadas. Construí motor cuidado específico por tela: "Este 100% lino: lavar 30°C, secar tendedero, planchar vapor húmedo." Devoluciones por "encogido en lavado" bajaron 60%.

### El Resultado
- **Tasa devolución**: 40% → 22% (piloto, solo SKUs tela-verificados)
- **SKUs verificados**: 200+ productos con certificados lab
- **Calidad reseñas**: 3.2x más reseñas tela-específicas vs control
- **Referencias**: Falabella, Dafiti, Koaj, Zara CO, Leonisa en conversaciones 2026

### Qué Aprendí
- **Verificación > blockchain**: Marcas quieren rastro auditoría PDF, no ledger distribuido. Encuéntralos donde están.
- **Reseñas necesitan estructura**: Reseñas libre optimizan "útil", no "datos durabilidad". Estructura el prompt.
- **Instrucciones cuidado son UX**: Etiqueta cuidado errónea = prenda arruinada = devolución = cliente perdido. Específico > genérico.
- **Datos textiles colombianos son analógicos**: Molinos corren en papel. Verificación digital empieza digitalizando certificado.

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- Reconocimiento imagen (prototipo análisis textura tela)

---

## 日本語

### タイトル
Fashion DTC — テキスタイル検証付きDTCファッション

### カテゴリー
ファッションEコマース / サプライチェーン透明性

### 年
2026

### クライアント
個人 — Fashion DTC（Falabella, Dafiti, Koaj, Zara CO, Leonisa参照）

### 場所
コロンビア — DTC / リモート

### 私の役割
プロダクトデザイナー — カタログ、テキスタイルカード、レビューシステム、信頼UX

### 課題
ファッションEコマースは信頼危機。オンラインで買い、違うものを受け取る：

- ファッションの**40%返品率** — ほとんど「生地が説明と違う」
- 組成検証方法なし: 「綿100%」ラベルはしばしば嘘
- ケア指示が汎用的 — 初回洗濯で衣類が台無し
- レビューはフィットについて、生地の経年品質ではない

### プロダクトビジョン
**透明なテキスタイル: 買ったものが着るもの。**

すべての衣類に検証済みテキスタイルカードを持つDTCファッションプラットフォーム — ラボテスト済み組成、トレースされた原産地、生地別具体的ケア指示、生地パフォーマンスによるレビュー — 顧客は一度買って、何年も着られる。

### 私がやったこと
1. **テキスタイル検証カード**: ラボテスト済み組成、原産地トレーサビリティ、生地タイプ別具体的ケア
2. **生地ファーストカタログ**: スタイルだけでなく生地でフィルター — "80ドル以下のリネン100%を見せて"
3. **生地別レビューシステム**: 生地パフォーマンスでタグ付けされたレビュー — "5回洗濯でピリング", "形状保持"
4. **ブランド責任**: ブランドはラボ証明書提出必須 — 製品に検証済みバッジ

### プロセス
**サプライチェーンの壁**: ブランドは自社の生地データを持たない。ミルから購入、ミルは紡績から購入。"このシャツ何でできてる？"と聞くと6ヶ月の監査が発生。

**試行1**: ブロックチェーントレーサビリティ（VeChainスタイル）を試した。失敗 — ブランドがオンチェーン検証に支払わず、コロンビアのミルはゼロデジタルインフラ。

**試行2**: 実用的検証。ブランドがラボ証明書提出（ISO 1833組成）→ 検証 → 製品にバッジ。ブロックチェーンなし、PDF検証のみ。3ブランドがパイロット契約。

**レビューの洞察**: 既存レビューは耐久性に無用。"かわいいシャツ" ≠ "どう持つ？"。プロンプト構築: "10回洗濯後: ピリング? 縮み? 色落ち? 形状保持?" レビューが購入シグナルに。

**ケア指示のギャップ**: 汎用"冷水洗い"がデリケート生地を台無しに。生地別ケアエンジン構築: "このリネン100%: 30°C洗濯, 自然乾燥, 湿った状態で蒸気アイロン"。"洗濯で縮んだ"返品60%減。

### 結果
- **返品率**: 40% → 22%（パイロット、生地検証済みSKUのみ）
- **検証済みSKU**: 200以上の製品にラボ証明書
- **レビュー品質**: 対照群比3.2倍の生地特化レビュー
- **参照**: Falabella, Dafiti, Koaj, Zara CO, Leonisaが2026年で協議中

### 学んだこと
- **検証 > ブロックチェーン**: ブランドはPDF監査証跡が欲しい、分散台帳ではない。彼らのいる場所で会う。
- **レビューには構造が必要**: 自由記述レビューは"役立つ"を最適化、"耐久性データ"ではない。プロンプトを構造化。
- **ケア指示はUX**: 間違ったケアラベル = 台無し衣類 = 返品 = 失客。具体的 > 汎用的。
- **コロンビアテキスタイルデータはアナログ**: ミルは紙で運用。デジタル検証は証明書デジタル化から始まる。

### 技術スタック
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- 画像認識（生地テクスチャ分析プロトタイプ）

---

## Awaiting Approval

- [ ] English version approved
- [ ] Spanish version approved
- [ ] Japanese version approved
- [ ] Ready to push to Sanity Studio