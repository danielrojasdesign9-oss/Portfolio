# FitMaterial — AI-Powered Shoe Sizing

## Status: ⏳ PENDING APPROVAL
## Public: ❌ NO — Not in Sanity yet (dummy project)

---

## ENGLISH

### Title
FitMaterial — AI-Powered Shoe Sizing for KOAJ

### Category
Footwear E-commerce / AI Integration

### Year
2026

### Client
KOAJ (Colombian footwear brand)

### Location
Colombia — Remote

### My Role
Product Designer — Research, Flows, UI, AI Integration

### The Problem
Ordering shoes online is a gamble. A size 40 in one brand fits like a 39 in another. KOAJ was bleeding money:

- **30% return rate** on online shoe purchases
- Customers frustrated, trust eroding
- Operations drowning in return processing costs
- No data-driven way to recommend sizes

### Product Vision
**Trustworthy, data-driven sizing that eliminates guesswork.**

No more "will this fit?" anxiety. Each recommendation comes with a confidence score and transparent reasoning — so customers buy once, wear forever.

### What I Did
1. **Research**: Analyzed sizing data from 500+ shoe models across 12 Colombian brands
2. **Algorithm**: Designed a mapping system that converts foot measurements (cm) to brand-specific sizes
3. **UI**: Built a simple slider interface showing real-time size recommendations
4. **Transparency**: Every recommendation shows confidence percentage + zone mapping (foot/ankle)

### The Process
**The data mess**: Brand size charts don't align. A 40 in Brand A = 39.5 in Brand B = 41 in Brand C. I spent 2 weeks just normalizing the data.

**Attempt 1**: Tried a universal ML model predicting size from foot scan. Failed — not enough training data per brand, and Colombian brands don't share data.

**Attempt 2**: Built a deterministic mapping table. Each brand gets its own conversion logic. Worked because it's transparent — users see exactly how we got from "your foot is 26.3cm" to "size 41".

**The transparency insight**: Showing the math builds trust. "We recommend 41 because your foot is 26.3cm, Brand X runs 0.5cm small, confidence: 92%." Users forgive errors when they understand the logic.

### The Result
- **92% accuracy** (integer cm), **78%** (decimal cm)
- **~25% reduction** in return rate (projected)
- Customers actually trust the recommender — conversion up on recommended sizes

### What I Learned
- **Material elasticity matters**: Low-elasticity materials need +0.5 size buffer
- **Ankle fit is critical**: Different lasts (shoe molds) affect ankle comfort more than toe room
- **Transparency > accuracy**: 92% with explanation beats 95% black box
- **Colombian data is fragmented**: No shared sizing standard — had to build our own

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System

---

## ESPAÑOL

### Título
FitMaterial — Medición de Calzado con IA para KOAJ

### Categoría
E-commerce Calzado / Integración IA

### Año
2026

### Cliente
KOAJ (marca de calzado colombiana)

### Ubicación
Colombia — Remoto

### Mi Rol
Product Designer — Research, Flujos, UI, Integración IA

### El Problema
Pedir zapatos online es una apuesta. Una talla 40 en una marca queda como 39 en otra. KOAJ estaba perdiendo plata:

- **30% de devoluciones** en compras online de calzado
- Clientes frustrados, confianza erosionándose
- Operaciones ahogadas en costos de procesamiento de devoluciones
- Sin forma data-driven de recomendar tallas

### Visión de Producto
**Medición confiable y basada en datos que elimina las suposiciones.**

Sin más ansiedad de "¿me quedará?". Cada recomendación viene con un puntaje de confianza y razonamiento transparente — para que el cliente compre una vez y use siempre.

### Qué Hice
1. **Research**: Analicé datos de tallas de 500+ modelos de calzado de 12 marcas colombianas
2. **Algoritmo**: Diseñé un sistema de mapeo que convierte mediciones del pie (cm) a tallas específicas por marca
3. **UI**: Construí una interfaz simple de slider mostrando recomendaciones de talla en tiempo real
4. **Transparencia**: Cada recomendación muestra porcentaje de confianza + mapeo de zonas (pie/tobillo)

### El Proceso
**El lío de datos**: Las tablas de tallas no se alinean. Un 40 en Marca A = 39.5 en Marca B = 41 en Marca C. Me gasté 2 semanas solo normalizando los datos.

**Intento 1**: Probé un modelo ML universal prediciendo talla desde escaneo del pie. Falló — datos de entrenamiento insuficientes por marca, y las marcas colombianas no comparten datos.

**Intento 2**: Construí una tabla de mapeo determinista. Cada marca tiene su lógica de conversión propia. Funcionó porque es transparente — el usuario ve exactamente cómo pasamos de "tu pie mide 26.3cm" a "talla 41".

**El insight de transparencia**: Mostrar la matemática genera confianza. "Recomendamos 41 porque tu pie mide 26.3cm, la Marca X corre 0.5cm chica, confianza: 92%." Los usuarios perdonan errores cuando entienden la lógica.

### El Resultado
- **92% precisión** (cm entero), **78%** (cm decimal)
- **~25% reducción** en tasa de devolución (proyectada)
- Los clientes confían en el recomendador — conversión sube en tallas recomendadas

### Qué Aprendí
- **La elasticidad del material importa**: Materiales con baja elasticidad necesitan +0.5 talla de holgura
- **El ajuste del tobillo es crítico**: Diferentes hormas afectan la comodidad del tobillo más que el espacio del dedo
- **Transparencia > precisión**: 92% con explicación gana a 95% caja negra
- **Los datos colombianos están fragmentados**: No hay estándar compartido de tallas — tuvimos que construir el nuestro

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System

---

## 日本語

### タイトル
FitMaterial — AI搭載シューズサイジング（KOAJ向け）

### カテゴリー
footwear Eコマース / AI統合

### 年
2026

### クライアント
KOAJ（コロンビアの靴ブランド）

### 場所
コロンビア — リモート

### 私の役割
プロダクトデザイナー — リサーチ、フロー、UI、AI統合

### 課題
オンラインで靴を買うのはギャンブル。あるブランドの40は別のブランドの39のように感じる。KOAJは損失を出していた：

- オンライン靴購入の**30%が返品**
- 顧客のフラストレーション、信頼の喪失
- 返品処理コストでオペレーションが圧迫
- データドリブンなサイズ推奨がない

### プロダクトビジョン
**推測を排除する、信頼性の高いデータドリブンなサイジング。**

「これ合うかな？」という不安はもうない。各推奨には信頼度スコアと透明な推理が含まれる — 顧客は一度買って、永く履ける。

### 私がやったこと
1. **リサーチ**: 12のコロンビアブランドの500以上の靴モデルのサイズデータを分析
2. **アルゴリズム**: 足の測定値（cm）をブランド固有のサイズに変換するマッピングシステムを設計
3. **UI**: サイズ推奨をリアルタイムで表示するシンプルなスライダーインターフェースを作成
4. **透明性**: 各推奨には信頼度パーセンテージとゾーンマッピング（足/足首）が含まれる

### プロセス
**データの混乱**: ブランドのサイズチャートが揃わない。ブランドAの40 = ブランドBの39.5 = ブランドCの41。データ正規化だけで2週間費やした。

**試行1**: 足のスキャンからサイズを予測する汎用MLモデルを試した。失敗 — ブランドごとの訓練データが不足、コロンビアブランドはデータを共有しない。

**試行2**: 決定論的マッピングテーブルを構築。各ブランド独自の変換ロジック。透明なので機能した — ユーザーは「足が26.3cm」から「サイズ41」への経緯を正確に見える。

**透明性の洞察**: 数学を見せると信頼が生まれる。「足が26.3cm、ブランドXは0.5cm小さめ、信頼度92%なので41を推奨」 — ロジックが分かればエラーを許容する。

### 結果
- **92%精度**（整数cm）、**78%**（小数cm）
- **約25%返品率削減**（予測）
- 顧客が推奨システムを信頼 — 推奨サイズでのコンバージョン向上

### 学んだこと
- **素材の弾性が重要**: 低弾性素材には+0.5サイズのバッファが必要
- **足首のフィットが重要**: ラスト（靴型）の違いはつま先スペースより足首の快適性に影響
- **透明性 > 精度**: 説明付き92%がブラックボックス95%に勝つ
- **コロンビアデータは断片化**: 共有サイズ標準なし — 独自構築が必要

### 技術スタック
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System

---

## Awaiting Approval

- [ ] English version approved
- [ ] Spanish version approved
- [ ] Japanese version approved
- [ ] Ready to push to Sanity Studio