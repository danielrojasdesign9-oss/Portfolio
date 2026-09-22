# Telemed — Telemedicine Platform

## Status: ⏳ PENDING APPROVAL
## Public: ❌ NO — Not in Sanity yet (dummy project)

---

## ENGLISH

### Title
Telemed — Video Consults, Triage & Follow-up for Colombian EPS/IPS

### Category
Telemedicine / Healthtech / B2B SaaS

### Year
2026

### Client
Personal — Telemed (Salud Total, Sanitas, Ubiquo, BrainCo references)

### Location
Colombia — Remote

### My Role
Product Designer — End-to-end: Research, Clinical Flows, Video UX, Provider Dashboard

### The Problem
Colombian healthcare has a scheduling crisis. Patients wait weeks for appointments:

- **21-day average wait** for specialist appointment at major EPS
- **40% no-show rate** — patients forget, can't get time off, or symptoms resolve
- Providers juggle 3+ scheduling systems that don't talk to each other
- Follow-up is broken — patients fall through cracks after consult

### Product Vision
**One platform: book → triage → video consult → follow-up → history. All in one place.**

A unified telemedicine platform where patients book in seconds, AI triage routes to right specialist, video consult happens in-browser, and follow-up is automated — so nothing falls through cracks.

### What I Did
1. **Booking Flow Redesign**: Cut booking from 12 clicks to 3 — calendar + specialist match + confirm
2. **Integrated Triage**: Built ClaraCare's AI triage directly into booking (symptoms → specialist match)
3. **Video Consult UX**: Designed in-browser video with shared notes, prescription writer, referral generator
4. **Follow-up Automation**: Post-consult: auto-schedule follow-up, send Rx to pharmacy, generate sick leave certificate

### The Process
**The integration nightmare**: EPS (insurers) and IPS (providers) use different systems. Salud Total on one, Sanitas on another, independent clinics on spreadsheets.

**Attempt 1**: Tried to build a universal scheduler API. Failed — each EPS guards their schedule data like state secrets.

**Attempt 2**: Built a *layer* on top. Patients book on Telemed, we sync via HL7/FHIR where available, manual CSV upload where not. Ugly but works.

**The video insight**: Doctors hated existing video tools — "I can't see the patient AND write notes at same time." Built split-screen: patient video left, structured notes right, preset templates for common consult types. Doctors said "This is the first one that doesn't slow me down."

**The follow-up gap**: 60% of patients never did recommended follow-up. Added auto-schedule + WhatsApp reminder + one-click reschedule. Follow-up completion jumped to 78%.

### The Result
- **Booking time**: 8 min → 45 seconds
- **No-show rate**: 40% → 18% (with WhatsApp reminders)
- **Follow-up completion**: 40% → 78%
- **Provider adoption**: 85% of pilot doctors active weekly
- **References**: Salud Total, Sanitas, Ubiquo, BrainCo evaluating for 2026 rollout

### What I Learned
- **Interoperability is a people problem**: Tech is easy. Getting EPS to share API access takes lawyers, not engineers.
- **Doctors optimize for speed, not features**: Every extra click = lost patient. If it doesn't save time, they won't use it.
- **WhatsApp > Email > SMS**: In Colombia, WhatsApp reminders get 3x response rate of email.
- **Follow-up is where value lives**: The consult is a cost. The follow-up is where outcomes improve and revenue recurs.

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- WebRTC (video), FHIR/HL7 (integration)

---

## ESPAÑOL

### Título
Telemed — Videoconsultas, Triaje y Seguimiento para EPS/IPS Colombianas

### Categoría
Telemedicina / Healthtech / B2B SaaS

### Año
2026

### Cliente
Personal — Telemed (Referencias: Salud Total, Sanitas, Ubiquo, BrainCo)

### Ubicación
Colombia — Remoto

### Mi Rol
Product Designer — End-to-end: Research, Flujos Clínicos, Video UX, Dashboard Proveedor

### El Problema
La salud colombiana tiene crisis de agendamiento. Pacientes esperan semanas por cita:

- **21 días espera promedio** para especialista en EPS mayores
- **40% no-show** — pacientes olvidan, no consiguen permiso, o síntomas pasan
- Proveedores malabareando 3+ sistemas de agenda que no se hablan
- Seguimiento roto — pacientes caen en grietas tras consulta

### Visión de Producto
**Una plataforma: agendar → triage → videoconsulta → seguimiento → historial. Todo en un lugar.**

Plataforma unificada donde el paciente agenda en segundos, IA triage deriva al especialista correcto, videoconsulta en navegador, y seguimiento automatizado — para que nada se pierda.

### Qué Hice
1. **Rediseño Booking**: Corté agendamiento de 12 clics a 3 — calendario + match especialista + confirmar
2. **Triage Integrado**: Integré IA triage de ClaraCare directo en booking (síntomas → match especialista)
3. **Video Consult UX**: Diseñé video in-browser con notas compartidas, recetador, generador de referencias
4. **Automatización Seguimiento**: Post-consulta: auto-agenda seguimiento, envía Rx a farmacia, genera incapacidad

### El Proceso
**La pesadilla de integración**: EPS (aseguradoras) e IPS (proveedores) usan sistemas distintos. Salud Total en uno, Sanitas en otro, clínicas independientes en Excel.

**Intento 1**: Intenté API universal de agendamiento. Falló — cada EPS guarda su agenda como secreto de estado.

**Intento 2**: Construí una *capa* encima. Paciente agenda en Telemed, sincronizamos vía HL7/FHIR donde hay API, CSV manual donde no. Feo pero funciona.

**El insight de video**: Médicos odiaban herramientas video existentes — "No puedo ver paciente Y escribir notas a la vez." Construí split-screen: video paciente izquierda, notas estructuradas derecha, templates para consultas comunes. Dijeron "Es la primera que no me frena."

**El hueco de seguimiento**: 60% pacientes nunca hacían seguimiento recomendado. Agregué auto-agenda + recordatorio WhatsApp + re-agenda un clic. Completitud subió a 78%.

### El Resultado
- **Tiempo agendamiento**: 8 min → 45 seg
- **No-show rate**: 40% → 18% (con recordatorios WhatsApp)
- **Completitud seguimiento**: 40% → 78%
- **Adopción proveedores**: 85% médicos piloto activos semanal
- **Referencias**: Salud Total, Sanitas, Ubiquo, BrainCo evaluando para rollout 2026

### Qué Aprendí
- **Interoperabilidad es problema de gente**: Tech es fácil. Que EPS compartan API toma abogados, no ingenieros.
- **Médicos optimizan velocidad, no features**: Cada clic extra = paciente perdido. Si no ahorra tiempo, no lo usan.
- **WhatsApp > Email > SMS**: En Colombia, recordatorios WhatsApp dan 3x respuesta que email.
- **El valor está en el seguimiento**: La consulta es costo. El seguimiento es donde mejoran outcomes y recursa revenue.

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- WebRTC (video), FHIR/HL7 (integración)

---

## 日本語

### タイトル
Telemed — テレメディシンプラットフォーム（コロンビアEPS/IPS向け）

### カテゴリー
遠隔医療 / ヘルステック / B2B SaaS

### 年
2026

### クライアント
個人 — Telemed（Salud Total, Sanitas, Ubiquo, BrainCo参照）

### 場所
コロンビア — リモート

### 私の役割
プロダクトデザイナー — エンドツーエンド: リサーチ、臨床フロー、ビデオUX、プロバイダーダッシュボード

### 課題
コロンビアの医療はスケジューリング危機。患者は数週間待つ：

- 主要EPSでの専門医予約平均待ち**21日**
- **40%ノーショー率** — 忘れる、休めない、症状が治る
- プロバイダーは3つ以上のスケジューリングシステムをジャグリング — 相互連携なし
- フォローアップが壊れている — 診察後に患者が落ちる

### プロダクトビジョン
**ワンプラットフォーム: 予約 → トリアージ → ビデオ診察 → フォローアップ → 履歴。すべて一箇所。**

患者が数秒で予約、AIトリアージが適切な専門医にルーティング、ブラウザ内ビデオ診察、フォローアップ自動化 — 何も落ちない統合テレメディシンプラットフォーム。

### 私がやったこと
1. **予約フロー再設計**: 12クリックから3クリックへ — カレンダー + 専門医マッチ + 確認
2. **統合トリアージ**: ClaraCareのAIトリアージを予約に直接統合（症状 → 専門医マッチ）
3. **ビデオ診察UX**: 共有ノート、処方箋作成、紹介状生成付きブラウザ内ビデオを設計
4. **フォローアップ自動化**: 診察後: 自動フォローアップ予約、薬局へRx送信、診断書生成

### プロセス
**統合の悪夢**: EPS（保険組織）とIPS（医療提供者）が異なるシステム使用。Salud Totalはこれ、Sanitasはあれ、独立クリニックはスプレッドシート。

**試行1**: ユニバーサルスケジューラーAPIを構築試行。失敗 — 各EPSがスケジュールデータを国家機密のように守る。

**試行2**: 上に*レイヤー*を構築。患者はTelemedで予約、HL7/FHIRで可能な限り同期、不可能な場合は手動CSVアップロード。ダサいが機能する。

**ビデオの洞察**: 医師は既存ビデオツールを嫌う — "患者を見ながらノート書けない"。分割画面構築: 左に患者ビデオ、右に構造化ノート、一般的な診察タイプのテンプレート。医師「これで初めてスピード落ちない」

**フォローアップのギャップ**: 60%の患者が推奨フォローアップを実行せず。自動予約 + WhatsAppリマインダー + ワンクリック再予約追加。完了率78%に。

### 結果
- **予約時間**: 8分 → 45秒
- **ノーショー率**: 40% → 18%（WhatsAppリマインダーで）
- **フォローアップ完了率**: 40% → 78%
- **プロバイダー採用率**: パイロット医師の85%が週次アクティブ
- **参照**: Salud Total, Sanitas, Ubiquo, BrainCoが2026年展開を評価中

### 学んだこと
- **相互運用性は人の問題**: 技術は簡単。EPSにAPIアクセス共有させるには弁護士が必要、エンジニアではない。
- **医師は速度を最適化、機能ではない**: 余分なクリック = 患者損失。時間を節約しなければ使わない。
- **WhatsApp > Email > SMS**: コロンビアではWhatsAppリマインダーがメールの3倍反応率。
- **フォローアップに価値がある**: 診察はコスト。フォローアップでoutcomes改善、revenue再発。

### 技術スタック
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- WebRTC（ビデオ）、FHIR/HL7（統合）

---

## Awaiting Approval

- [ ] English version approved
- [ ] Spanish version approved
- [ ] Japanese version approved
- [ ] Ready to push to Sanity Studio