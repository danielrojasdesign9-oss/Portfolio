# Igo — Smart Delivery & Mottainai

## Status: ⏳ PENDING APPROVAL
## Public: ✅ YES

---

## ENGLISH

### Title
Igo — Smart Delivery & Mottainai

### Category
Delivery / Sustainability / Local Commerce

### Year
2025

### Client
Emerging Cities, 8 Local Restaurants (La Barca, Burger Stack, Hot Doggy, Food Garage, Rogers, La Burger, Oliva + 1 more)

### Location
Colombia — Remote

### My Role
Product Designer — Conversational UX, Sustainability Features, 3-Sided Marketplace (Customer / Restaurant / Rider), 6-Person Team, 6-Month Pilot

### The Problem
Rappi charges 30% commission. For a small restaurant selling a $10 meal, that's $3 gone — often their entire profit margin. But the real problem isn't just money:

- **High commissions** killing small restaurants' margins
- **No local alternatives** in emerging cities where Rappi/Didi/Uber Eats don't reach — they require critical mass that doesn't exist
- **30% food waste** in Colombian restaurants — food thrown away daily
- **Low discovery** for local eateries — customers don't know they exist
- **The app trap**: Every delivery platform demands merchants download ANOTHER app, manage ANOTHER dashboard, pay ANOTHER fee. In intermediate cities, merchants said "no más apps"

### Product Vision
**Delivery that works like WhatsApp, costs 70% less, and reduces food waste.**

A three-sided platform: customers order via WhatsApp (zero download), restaurants manage orders in a simple web portal, riders pick up deliveries from a lightweight mobile app. No app for customers, no commission trap for restaurants.

### What I Did
1. **WhatsApp-First Ordering**: Designed conversational flow where customers chat naturally — "Quiero una hamburguesa con papas" — and the system handles the rest
2. **Restaurant Portal**: Built web dashboard where merchants mark order states (recibido → preparando → listo → entregado) with one tap
3. **Rider App**: Lightweight mobile app for Igo riders to claim deliveries, navigate, confirm drop-off
4. **Mottainai Tracker**: Gamified waste reduction — restaurants earn badges, customers see impact ("You saved 2kg of food this month!")
5. **Affordable Pricing**: 70% lower commissions via volume model — restaurants actually afford to stay

### The Process

**Aha Moment #1: "No más apps"**
We started building a customer app. Then we talked to 8 restaurant owners in intermediate cities. Every single one said: "No quiero otra app. Ya tengo WhatsApp, Instagram, mi POS. Que el cliente me hable por WhatsApp."

**The pivot**: Kill the customer app. Make WhatsApp the interface. Customers already know it. Zero download. Zero friction. This is why Didi/Rappi/Uber Eats fail in intermediate cities — they demand app adoption where there's no critical mass. We met users where they already were.

**Aha Moment #2: <5 minutes via chat**
Usability tests with 12 regular users (not tech-savvy): "Pide un domicilio como lo harías normalmente." Average time: **4 minutes 23 seconds**. Via WhatsApp chat. No tutorial needed. The mental model was already there — "le hablo al comercio, el comercio me responde."

**The 3-sided validation**:
- **Customer**: Chats on WhatsApp → gets confirmation → tracks delivery
- **Restaurant**: Web portal → one-tap state changes → prints ticket automatically
- **Rider**: Mobile app → sees nearby pickups → claims → navigates → confirms drop-off

**The mottainai challenge**: How do you make "not wasting food" feel rewarding? We created a tracker where restaurants earn "sustainability badges" and customers see their impact ("You saved 2kg of food this month!"). But the real driver wasn't badges — it was **money**. Restaurants reduced waste because unsold food = lost revenue. Sustainability aligned with margin.

**The pricing problem**: How do you charge less and survive? Answer: volume. 70% lower commissions than Rappi. Restaurants stayed because they could finally afford delivery. We made money on rider fees + SaaS subscription for the portal, not predatory commissions.

**The wallet failure**: We tried a digital wallet so riders wouldn't handle cash. Failed. Riders earned $8/order — the wallet fee ate 15% of their take. They revolted. We killed it in week 2. Lesson: **never insert fees between a worker and their earnings**.

**The support ticket gap**: Merchants needed a way to say "estoy sin pollo" or "rider no llegó." We didn't build support tickets initially. Two restaurants churned in month 3 because they couldn't communicate issues fast enough. We added a ticket system in the portal. Retention recovered.

### The Result
- **Zero app download barrier** — WhatsApp-based ordering
- **4 min 23 sec** average order time (usability test, n=12)
- **70% lower commissions** than Rappi/Uber Eats
- **8/8 restaurants retained** for full 6-month pilot
- **3-sided system validated**: Customer (WhatsApp) + Restaurant (Web Portal) + Rider (Mobile App)
- **Mottainai tracker** showing waste reduction metrics
- **Local restaurant discovery** increasing visibility for small businesses

### What I Learned
- **Chatbots work for simple flows**: Ordering food fits conversational UI perfectly
- **No app > best app**: In emerging markets, WhatsApp IS the internet. Don't fight it.
- **Three-sided is harder than two-sided**: Customer + Restaurant + Rider = 3x coordination, but 10x stickiness once it works
- **Sustainability sells when it saves money**: Mottainai badges are cute. Waste reduction = margin protection = real adoption
- **Low-bandwidth matters**: Chat works on 2G. Apps don't.
- **Price is king, but UX is queen**: 70% lower commissions gets you in the door. WhatsApp UX keeps you there.
- **Never tax the worker**: The wallet failure taught me more than any success.

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- WhatsApp Business API
- WebSocket (real-time order states)
- PWA for rider app (offline-first)

---

## ESPAÑOL

### Título
Igo — Delivery Inteligente & Mottainai

### Categoría
Delivery / Sostenibilidad / Comercio Local

### Año
2025

### Cliente
Ciudades Emergentes, 8 Restaurantes Locales (La Barca, Burger Stack, Hot Doggy, Food Garage, Rogers, La Burger, Oliva + 1 más)

### Ubicación
Colombia — Remoto

### Mi Rol
Product Designer — UX Conversacional, Funcionalidades de Sostenibilidad, Marketplace de 3 Lados (Cliente / Comercio / Rider), Equipo de 6 Personas, Piloto de 6 Meses

### El Problema
Rappi cobra 30% de comisión. Para un restaurante pequeño que vende una comida de $10, eso son $3 que se van — a menudo su margen de utilidad completo. Pero el problema real no es solo dinero:

- **Comisiones altas** matando los márgenes de restaurantes pequeños
- **Sin alternativas locales** en ciudades emergentes donde Rappi/Didi/Uber Eats no llegan — requieren masa crítica que no existe
- **30% de desperdicio** en restaurantes colombianos — comida tirada diariamente
- **Baja visibilidad** para restaurantes locales — los clientes no saben que existen
- **La trampa de la app**: Cada plataforma de delivery exige al comercio descargar OTRA app, gestionar OTRO dashboard, pagar OTRA tarifa. En ciudades intermedias, los comerciantes dijeron "no más apps"

### Visión de Producto
**Delivery que funciona como WhatsApp, cuesta 70% menos y reduce el desperdicio de alimentos.**

Una plataforma de tres lados: clientes piden por WhatsApp (cero descarga), comercios gestionan pedidos en portal web simple, riders toman entregas desde app móvil ligera. Sin app para clientes, sin trampa de comisión para comercios.

### Qué Hice
1. **Pedidos WhatsApp-First**: Diseñé flujo conversacional donde el cliente chatea natural — "Quiero una hamburguesa con papas" — y el sistema hace el resto
2. **Portal Comercio**: Construí dashboard web donde el comercio marca estados del pedido (recibido → preparando → listo → entregado) con un toque
3. **App Rider**: App móvil ligera para riders de Igo que reclaman entregas, navegan, confirman entrega
4. **Rastreador Mottainai**: Gamificación de reducción de desperdicio — comercios ganan badges, clientes ven impacto ("¡Guardaste 2kg de comida este mes!")
5. **Precios Accesibles**: 70% menos comisiones vía modelo de volumen — los comercios realmente se pueden quedar

### El Proceso

**Momento Aha #1: "No más apps"**
Empezamos construyendo una app para el cliente. Luego hablamos con 8 dueños de restaurantes en ciudades intermedias. Cada uno dijo: "No quiero otra app. Ya tengo WhatsApp, Instagram, mi POS. Que el cliente me hable por WhatsApp."

**El pivote**: Matamos la app del cliente. Hicimos de WhatsApp la interfaz. Los clientes ya la conocen. Cero descarga. Cero fricción. Por eso Didi/Rappi/Uber Eats fallan en ciudades intermedias — exigen adopción de app donde no hay masa crítica. Encontramos a los usuarios donde ya estaban.

**Momento Aha #2: <5 minutos por chat**
Tests de usabilidad con 12 usuarios normales (no tech-savvy): "Pide un domicilio como lo harías normalmente." Tiempo promedio: **4 minutos 23 segundos**. Por chat de WhatsApp. Sin tutorial. El modelo mental ya existía — "le hablo al comercio, el comercio me responde."

**La validación de 3 lados**:
- **Cliente**: Chatea por WhatsApp → recibe confirmación → rastrea entrega
- **Comercio**: Portal web → cambio de estado en un toque → imprime ticket automático
- **Rider**: App móvil → ve recogidas cercanas → reclama → navega → confirma entrega

**El desafío mottainai**: ¿Cómo haces que "no tirar comida" se sienta recompensador? Creamos un rastreador donde los comercios ganan "badges de sostenibilidad" y los clientes ven su impacto ("¡Guardaste 2kg de comida este mes!"). Pero el driver real no fueron los badges — fue **dinero**. Los comercios redujeron desperdicio porque comida no vendida = ingresos perdidos. Sostenibilidad alineada con margen.

**El problema de precios**: ¿Cómo cobras menos y sobrevives? Respuesta: volumen. 70% menos comisiones que Rappi. Los comercios se quedaron porque por fin podían costear delivery. Ganábamos en fees de riders + suscripción SaaS del portal, no comisiones predatorias.

**El fracaso del wallet**: Probamos wallet digital para que riders no manejaran efectivo. Falló. Riders ganaban $8/pedido — la fee del wallet se comía 15% de su ganancia. Se rebelaron. Lo matamos en semana 2. Lección: **nunca pongas fees entre un trabajador y su ganancia**.

**El hueco de tickets soporte**: Los comercios necesitaban decir "estoy sin pollo" o "rider no llegó." No construimos tickets de soporte al inicio. Dos comercios se fueron en mes 3 porque no podían comunicar problemas rápido. Agregamos tickets en el portal. Retención recuperó.

### El Resultado
- **Cero barrera de descarga** — pedidos basados en WhatsApp
- **4 min 23 seg** tiempo promedio de pedido (test usabilidad, n=12)
- **70% menos comisiones** que Rappi/Uber Eats
- **8/8 comercios retenidos** en piloto completo de 6 meses
- **Sistema 3 lados validado**: Cliente (WhatsApp) + Comercio (Portal Web) + Rider (App Móvil)
- **Rastreador mottainai** mostrando métricas de reducción de desperdicio
- **Descubrimiento de restaurantes locales** aumentando visibilidad para negocios pequeños

### Qué Aprendí
- **Los chatbots funcionan para flujos simples**: Pedir comida encaja perfectamente en UI conversacional
- **Sin app > mejor app**: En mercados emergentes, WhatsApp ES la internet. No la pelees.
- **Tres lados es más difícil que dos**: Cliente + Comercio + Rider = 3x coordinación, pero 10x stickiness una vez funciona
- **La sostenibilidad vende cuando ahorra dinero**: Badges mottainai son lindos. Reducción desperdicio = protección margen = adopción real
- **El bajo ancho de banda importa**: Chat funciona en 2G. Apps no.
- **El precio es rey, pero la UX es reina**: 70% menos comisiones te mete por la puerta. WhatsApp UX te mantiene ahí.
- **Nunca grabes al trabajador**: El fracaso del wallet me enseñó más que cualquier éxito.

### Tech Stack
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- WhatsApp Business API
- WebSocket (estados de pedido en tiempo real)
- PWA para app rider (offline-first)

---

## 日本語

### タイトル
Igo — スマートデリバリー＆もったいない

### カテゴリー
デリバリー / サステナビリティ / 地域コマース

### 年
2025

### クライアント
新興都市、8軒の地元レストラン（La Barca, Burger Stack, Hot Doggy, Food Garage, Rogers, La Burger, Oliva + 1軒）

### 場所
コロンビア — リモート

### 私の役割
プロダクトデザイナー — 会話UX、サステナビリティ機能、3面マーケットプレイス（顧客/レストラン/ライダー）、6人チーム、6ヶ月パイロット

### 課題
Rappiは30%の手数料を請求する。10ドルの食事を売る小さなレストランにとって、それは3ドルが消えること —  often その利益率全体。しかし本当の問題は金だけではない：

- **高手数料**が小さなレストランのマージンを殺している
- **地域の代替策なし** — Rappi/Didi/Uber Eatsが届かない新興都市。彼らには存在しないクリティカルマスが必要
- **30%の食料ロス** — コロンビアのレストランで毎日foodが捨てられている
- **低い発見性** — 地元の飲食店の存在を顧客が知らない
- **アプリの罠**: すべてのデリバリープラットフォームが商人に別のアプリ、別のダッシュボード、別の手数料を要求。中間都市では商人が「もうアプリはいらない」と言った

### プロダクトビジョン
**WhatsAppのように機能し、70%安く、食料ロスを減らすデリバリー。**

顧客はWhatsAppで注文（ゼロダウンロード）、レストランはシンプルなWebポータルで注文管理、ライダーは軽量モバイルアプリで配達を引き受ける三面プラットフォーム。顧客にはアプリなし、レストランには手数料の罠なし。

### 私がやったこと
1. **WhatsAppファースト注文**: 「ハンバーガーとポテトが欲しい」と自然にチャットするだけでシステムが処理する会話フローを設計
2. **レストランポータル**: 注文ステータスをワンタップで変更（受付→調理中→準備完了→配達済み）、チケット自動印刷
3. **ライダーアプリ**: 近くのピックアップを見て、クレームし、ナビゲートし、配達完了を確認する軽量モバイルアプリ
4. **もったいないトラッカー**: ゲーミフィケーション化された廃棄削減 — レストランはバッジ獲得、顧客はインパクトを見る（「今月2kgのfoodを節約しました！」）
5. **手頃な価格**: ボリュームモデルで70%低い手数料 — レストランが実際に継続できる

### プロセス

**Aha Moment #1: "アプリはもういらない"**
最初は顧客向けアプリを構築していた。その後、中間都市の8軒のレストランオーナーと話した。全員が言った: 「もうアプリはいらない。WhatsApp、Instagram、POSは既にある。客がWhatsAppで話せばいい。」

**ピボット**: 顧客アプリを殺し、WhatsAppをインターフェースにした。客は既に知っている。ゼロダウンロード。ゼロフリクション。これがDidi/Rappi/Uber Eatsが中間都市で失敗する理由 — 存在しないクリティカルマスでのアプリ採用を要求するから。ユーザーが既にいる場所で会った。

**Aha Moment #2: <5分でチャット注文**
12人の一般ユーザー（テック詳しくない）でユーザビリティテスト: 「いつものように出前を注文してください。」平均時間: **4分23秒**。WhatsAppチャットで。チュートリアル不要。メンタルモデルは既にあった — 「店に話しかける、店が返事する。」

**3面の検証**:
- **顧客**: WhatsAppでチャット → 確認受信 → 配達追跡
- **レストラン**: Webポータル → ワンタップで状態変更 → チケット自動印刷
- **ライダー**: モバイルアプリ → 近くのピックアップを見て → 引き受け → ナビゲート → 配達完了確認

**もったいないの課題**: 「foodを捨てない」ことをどう rewarding に感じるか？「サステナビリティバッジ」獲得とインパクト表示（「今月2kgのfoodを節約！」）のトラッカーを作った。だが真のドライバーはバッジではなく**お金**だった。廃棄食品 = 失われる収益。サステナビリティがマージン保護と一致 = 真の採用。

**価格の問題**: どう安くして生き残るか？答え: ボリューム。Rappi比70%低い手数料。レストランがついにdeliveryを負担できるから残った。ライダー手数料 + ポータルSaaSサブスクで収益化、搾取的コミッションではない。

**ウォレットの失敗**: ライダーが現金を扱わないようデジタルウォレットを試した。失敗。ライダーは注文あたり$8稼ぐ — ウォレット手数料が取り分の15%を食べた。反発。2週目で殺した。教訓: **働く人とその収入の間に手数料を入れるな**。

**サポートチケットの欠如**: レストランは「チキン切れ」「ライダー来ない」と伝える手段が必要だった。最初にチケットシステムを作らなかった。2軒が3ヶ月目に離脱 — 問題を素早く伝えられなかったから。ポータルにチケット追加。リテンション回復。

### 結果
- **ゼロアプリダウンロード障壁** — WhatsAppベース注文
- **4分23秒** 平均注文時間（ユーザビリティテスト、n=12）
- **70%低い手数料** — Rappi/Uber Eats比較
- **8/8レストラン継続** — 6ヶ月フルパイロット
- **3面システム検証済み**: 顧客(WhatsApp) + レストラン(Webポータル) + ライダー(モバイルアプリ)
- **もったいないトラッカー** — 食料ロス削減メトリクス表示
- **地域レストラン発見** — 小規模事業者の可視性向上

### 学んだこと
- **チャットボットはシンプルなフローに機能**: 食事注文は会話UIに完璧に適合
- **アプリなし > 最高のアプリ**: 新興市場ではWhatsAppがインターネット。戦わない。
- **3面は2面より難しい**: 顧客 + レストラン + ライダー = 3倍の調整、だが一度動けば10倍の粘着性
- **サステナビリティは節約になるとき売れる**: もったいないバッジは可愛い。廃棄削減 = マージン保護 = 真の採用
- **低帯域幅が重要**: チャットは2Gで動く。アプリは動かない。
- **価格は王様、UXは女王**: 70%低い手数料でドアを開く。WhatsApp UXで中に留める。
- **働く人に課税するな**: ウォレット失敗がどの成功より教えてくれた。

### 技術スタック
- React/Next.js
- TypeScript
- Tailwind CSS
- Carbon Design System
- WhatsApp Business API
- WebSocket（リアルタイム注文状態）
- PWA（ライダーアプリ、オフラインファースト）

---

## Awaiting Approval

- [ ] English version approved
- [ ] Spanish version approved
- [ ] Japanese version approved
- [ ] Ready to push to Sanity Studio