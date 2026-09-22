# ClaraCare — AI-Powered Medical Triage

## Status: ⏳ PENDING APPROVAL
## Public: ❌ NO — Not in Sanity yet (dummy project)

---

## ENGLISH

### Title
ClaraCare — AI Medical Triage for Colombian EPS

### Category
Healthtech / AI / Medical UX

### Year
2026

### Client
Personal — Telemed / Salud Total collaboration

### Location
Colombia — Remote

### My Role
Product Designer — Research, Clinical Flows, AI Safety UX

### The Problem
Colombian EPS (health insurers) are overwhelmed. Patients wait hours for a 5-minute consult:

- **4-hour average wait** for triage at major EPS
- **30% no-show rate** because patients give up waiting
- Doctors burn out on repetitive "is this urgent?" questions
- No standardized triage protocol — each nurse decides differently

### Product Vision
**AI triage that feels like a competent nurse, not a chatbot.**

A system that asks the right questions, flags emergencies instantly, and routes patients to the right specialist — reducing wait times from hours to minutes.

### What I Did
1. **Clinical Research**: Shadowed triage nurses at Salud Total for 2 weeks — mapped every decision point
2. **Safety-First Flow**: Designed escalation paths where AI *never* decides "not urgent" without human review
3. **Explainable AI**: Every recommendation shows *why* (symptoms matched, red flags checked, confidence)
4. **Doctor Dashboard**: Built the receiving end — doctors see AI summary + patient history before opening consult

### The Process
**The liability wall**: Medical AI in Colombia requires INVIMA approval. "Move fast and break things" doesn't apply when breaking means misdiagnosis.

**Attempt 1**: Tried pure symptom-checker chatbot (Ada Health style). Failed clinical review — too many false negatives on pediatric cases.

**Attempt 2**: Hybrid model. AI does structured intake (validated questionnaires), outputs *triage level + suggested specialist + red flags*. Human nurse reviews in 30 seconds. Approved.

**The trust moment**: Nurses rejected it initially — "AI doesn't know my patients." Changed the output from "Diagnosis: X" to "Patient reports A, B, C. Matches protocol for Y. Red flags: none. Suggested: Pediatrics." Nurses said "Oh, that's just a smart checklist." Adoption went from 0% to 80% in pilot.

### The Result
- **Wait time**: 4 hours → 12 minutes (pilot, n=2,000 patients)
- **No-show rate**: 30% → 8%
- **Doctor time saved**: 15 min/consult (AI pre-summary)
- **Zero missed emergencies** in 6-month pilot

### What I Learned
- **Explainability > accuracy**: Clinicians trust "here's why" more than "trust me, I'm 95% accurate"
- **Never let AI say "fine"**: Always escalate uncertainty. False positive (unnecessary review) costs 30 seconds. False negative (missed emergency) costs a life.
- **Workflow integration > model performance**: Best model useless if it adds clicks. Must fit existing nurse workflow.
- **Colombian regulation is strict**: INVIMA requires human-in-the-loop for any diagnostic-adjacent AI

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- FHIR integration for medical records

---

## ESPAÑOL

### Título
ClaraCare — Triage Médico con IA para EPS Colombianas

### Categoría
Healthtech / IA / UX Médico

### Año
2026

### Cliente
Personal — Telemed / Colaboración Salud Total

### Ubicación
Colombia — Remoto

### Mi Rol
Product Designer — Research, Flujos Clínicos, UX Seguridad IA

### El Problema
Las EPS colombianas están colapsadas. Pacientes esperan horas por 5 minutos de consulta:

- **4 horas espera promedio** para triaje en EPS mayores
- **30% no-show** porque pacientes se cansan de esperar
- Médicos quemados con preguntas repetitivas "¿es urgente?"
- Sin protocolo estandarizado de triaje — cada enfermera decide distinto

### Visión de Producto
**IA de triaje que se siente como enfermera competente, no chatbot.**

Un sistema que hace las preguntas correctas, detecta emergencias al instante y deriva al especialista adecuado — reduciendo esperas de horas a minutos.

### Qué Hice
1. **Research Clínico**: Seguí enfermeras de triaje en Salud Total 2 semanas — mapeé cada punto de decisión
2. **Flow Seguridad Primero**: Diseñé rutas de escalamiento donde la IA *nunca* dice "no urgente" sin revisión humana
3. **IA Explicable**: Cada recomendación muestra *por qué* (síntomas match, red flags chequeados, confianza)
4. **Dashboard Médico**: Construí el lado receptor — médicos ven resumen IA + historial antes de abrir consulta

### El Proceso
**El muro de responsabilidad**: IA médica en Colombia requiere aprobación INVIMA. "Move fast and break things" no aplica cuando romper = error diagnóstico.

**Intento 1**: Probé chatbot puro symptom-checker (estilo Ada Health). Falló revisión clínica — falsos negativos en pediatría.

**Intento 2**: Modelo híbrido. IA hace ingesta estructurada (cuestionarios validados), salida = *nivel triaje + especialista sugerido + red flags*. Enfermera humana revisa en 30 seg. Aprobado.

**El momento de confianza**: Enfermeras lo rechazaron al principio — "la IA no conoce a mis pacientes." Cambié la salida de "Diagnóstico: X" a "Paciente reporta A, B, C. Matcha protocolo para Y. Red flags: ninguno. Sugerido: Pediatría." Dijeron "Ah, es solo checklist inteligente." Adopción 0% → 80% en piloto.

### El Resultado
- **Tiempo espera**: 4 horas → 12 min (piloto, n=2,000 pacientes)
- **No-show rate**: 30% → 8%
- **Tiempo médico ahorrado**: 15 min/consulta (pre-resumen IA)
- **Cero emergencias perdidas** en 6 meses piloto

### Qué Aprendí
- **Explicabilidad > precisión**: Clínicos confían en "aquí está por qué" más que "confía, soy 95% preciso"
- **Nunca dejes que la IA diga "bien"**: Siempre escala incertidumbre. Falso positivo (revisión innecesaria) cuesta 30 seg. Falso negativo (emergencia perdida) cuesta una vida.
- **Integración workflow > performance modelo**: Mejor modelo inútil si suma clics. Debe encajar en flujo enfermera existente.
- **Regulación colombiana es estricta**: INVIMA exige human-in-the-loop para IA diagnostic-adjacente

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- Integración FHIR para historias médicas

---

## 日本語

### タイトル
ClaraCare — AI医療トリアージ（コロンビアEPS向け）

### カテゴリー
ヘルステック / AI / 医療UX

### 年
2026

### クライアント
個人 — Telemed / Salud Total協業

### 場所
コロンビア — リモート

### 私の役割
プロダクトデザイナー — リサーチ、臨床フロー、AI安全UX

### 課題
コロンビアのEPS（健康保険組織）は圧倒されている。患者は5分の診察のために数時間待つ：

- 主要EPSでのトリアージ平均待ち時間**4時間**
- **30%ノーショー率** — 待ちくたびれて帰る患者
- 医師は「これは緊急ですか？」の繰り返しで燃え尽きる
- 標準化されたトリアージプロトコルなし — 各看護師が個別に判断

### プロダクトビジョン
**チャットボットではなく、有能な看護師のように感じるAIトリアージ。**

適切な質問をし、緊急事態を即座にフラグし、適切な専門医にルーティングするシステム — 待ち時間を数時間から数分に短縮。

### 私がやったこと
1. **臨床リサーチ**: Salud Totalでトリアージ看護師を2週間シャドーイング — 全決定ポイントをマッピング
2. **安全第一フロー**: AIが人間レビューなしで「非緊急」を決めないエスカレーションパスを設計
3. **説明可能AI**: すべての推奨に*理由*を表示（症状マッチ、レッドフラグチェック、信頼度）
4. **医師ダッシュボード**: 受信側を構築 — 医師がAI要約+患者履歴を診察前に確認

### プロセス
**責任の壁**: コロンビアの医療AIにはINVIMA承認が必要。「速く動いて壊せ」は、壊す＝誤診なら適用されない。

**試行1**: 純粋な症状チェッカーチャットボット（Ada Healthスタイル）を試した。臨床レビューで失敗 — 小児科で偽陰性が多すぎ。

**試行2**: ハイブリッドモデル。AIは構造化問診（バリデート済み質問票）、出力 = *トリアージレベル + 推奨専門医 + レッドフラグ*。人間看護師が30秒でレビュー。承認された。

**信頼の瞬間**: 看護師は最初拒否 — 「AIは私の患者を知らない」。出力を「診断: X」から「患者がA,B,Cを報告。プロトコルYにマッチ。レッドフラグ: なし。推奨: 小児科」に変更。看護師「あ、スマートチェックリストね」。採用率0%→80%に。

### 結果
- **待ち時間**: 4時間 → 12分（パイロット、n=2,000患者）
- **ノーショー率**: 30% → 8%
- **医師時間削減**: 15分/診察（AI事前要約）
- **6ヶ月パイロットで見逃し緊急事例ゼロ**

### 学んだこと
- **説明可能性 > 精度**: 臨床医は「なぜ」を見せられるより「信頼して、95%精度」を信じない
- **AIに「大丈夫」と言わせない**: 不確実性は常にエスカレート。偽陽性（不要レビュー）は30秒。偽陰性（緊急見逃し）は命。
- **ワークフロー統合 > モデル性能**: 最高モデルもクリック増やせば無用。既存看護師フローにフィット必須。
- **コロンビア規制は厳格**: INVIMAは診断隣接AIにhuman-in-the-loop要求

### 技術スタック
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- FHIR統合（医療記録用）

---

## Awaiting Approval

- [ ] English version approved
- [ ] Spanish version approved
- [ ] Japanese version approved
- [ ] Ready to push to Sanity Studio