# ESTADO DE CAMPAÑAS — FARDOS LOYAL STUDIOS  ·  ⛔ ARCHIVADO

> **⛔ ARCHIVO CERRADO — 2026-08-31.** La operación de FARDOS terminó: la mercadería se vendió. Este archivo queda como HISTÓRICO de las campañas de fardos y de los errores aprendidos. **La operación activa es otra y vive en `NIKE-OPERACION.md` — NO mezclar las dos.** Lo único que sigue vigente de acá son las reglas anti-baneo y los datos técnicos de cuentas.


## 📞 CAMBIO DE NÚMERO DEL BOT — 2026-08-12 (EN CURSO)

**Viejo (muerto): +591 75613517 → Nuevo: +591 78758899**

Ya hecho en el código (commit pendiente): `data.js` (`WA_NUM`), `index.html` (nav + CTA fardo + fallback JS), `loyal-bot/server.js` (página de contacto), y este archivo + `CLAUDE.md`.

**Lo que NO se arregla con código — checklist manual (sin esto el bot queda MUDO):**

| # | Dónde | Qué hacer | Bloqueante |
|---|---|---|---|
| 1 | **WhatsApp Manager** (business.facebook.com → WABA `841863775645378`) | Agregar y **verificar** el número `+591 78758899`. Requiere que el número **NO** tenga WhatsApp normal/Business instalado — si lo tiene, hay que borrar esa cuenta primero. | 🔴 SÍ |
| 2 | **WhatsApp Manager → API Setup** | Copiar el **`Phone number ID` NUEVO** (es distinto por número, no se hereda). | 🔴 SÍ |
| 3 | **Railway** (proyecto `loyal-bot`) | Actualizar la variable `WHATSAPP_PHONE_ID` con el ID nuevo → redeploy. Verificar con `GET /health` (campo `wa_phone`). | 🔴 SÍ |
| 4 | **Meta Ads — cuenta FKN Studios `435939442185403`** | Los anuncios **CTWA (Click-to-WhatsApp)** apuntan al WABA/página, pero cada ad set/creativo puede tener el número viejo fijado. Revisar **todos los ad sets activos** y repuntar al número nuevo. | 🔴 SÍ (si hay pauta corriendo) |
| 5 | **Perfil de WhatsApp Business** | Recargar foto, nombre "Loyal Studios™", descripción, horarios y catálogo en el número nuevo (no se migran). | 🟡 |
| 6 | **Historial de chats** | ⚠️ **NO se migra.** Las 727+ conversaciones viven en el número viejo. El `/admin/transcript` guarda lo que el bot procesó, pero los clientes arrancan de cero. Exportar/leer el transcript antes de dar de baja lo viejo. | 🟡 |
| 7 | **Bio de Instagram @loyal_studios.bo / TikTok / Facebook** | Cambiar el número de contacto en las 3 bios y en el botón de la página de Facebook `212500558624209`. | 🟡 |
| 8 | **Grupo de WhatsApp de drops** | El link `chat.whatsapp.com/HuDJPMntDMSIHkvVyd66pC` **no cambia** (es de grupo), pero el número viejo era admin → agregar el nuevo como admin antes de perder el viejo. | 🟡 |
| 9 | **Google Sheet de reservas (Apps Script `MW_ENDPOINT`)** | Verificar si el script notifica a un número fijo. | 🟡 |
| 10 | **CAPI / dataset `1308327044205310`** | No requiere cambio (usa el WABA, no el número), pero las conversiones históricas quedan atadas al número viejo — esperar re-aprendizaje del algoritmo. | 🟢 informativo |

**`OWNER_PHONE` = `59175485831` NO se toca** — es el personal de Rodrigo, no el del bot.

---

## 🚫 ERRORES YA COMETIDOS — NO REPETIR NUNCA

### 1. Nombrar marcas registradas en campos de texto de un anuncio de fardo → BANEO PERMANENTE
**Qué pasó:** un anuncio de TikTok listó "Nike, Air Jordan, Adidas" en el campo estructurado "Argumentos de venta", y "Under Armour · Tommy · CK · Guess" como tags. Resultado: **suspensión PERMANENTE** de la cuenta TikTok Ads el 2026-07-02, motivo "suspicious or spam behaviour" (patrón "mystery bale" fraudulento detectado por sistemas anti-marca).
**REGLA DURA:** en CUALQUIER anuncio (TikTok o Meta) de fardos/lotes mayoristas, **JAMÁS** nombrar marcas específicas (Nike, Jordan, Adidas, Tommy, Guess, Under Armour, Calvin Klein, etc.) en:
- Campos estructurados (argumentos de venta, headlines, tags)
- Overlays de texto dentro del video
- Cualquier lugar donde el sistema de la plataforma lea el texto como "declarado"
**Sí está permitido:** mostrar el LOGO de una prenda individual real en el video (visual, no texto declarado) — eso es distinto y aceptable.
**Usar en su lugar:** lenguaje genérico — "ropa de marca variada", "prendas nuevas seleccionadas para reventa", "marcas reconocidas", sin nombrar ninguna explícitamente.

### 1-bis. TikTok clasifica los ads de fardos como "OPORTUNIDAD DE GANAR DINERO" → categoría regulada
**Qué pasó (2026-08-09, cuenta `7656971538033328135`):** primer anuncio publicado (Spark Ad de un post orgánico viejo) **RECHAZADO en revisión**. Motivo textual: *"rechazado debido a una descripción poco clara de la oportunidad de ganar dinero. El anuncio contiene solo texto confuso e ininteligible e imágenes de productos no relacionados que no explican ninguna oportunidad de ingresos ofrecida."* Categoría del rechazo: **URL / Detalles del enlace** → **también revisaron el sitio web**, no solo el video. Región: Bolivia.
**Qué significa:** el pitch "comprá un lote y revendé para ganar" cae en la categoría regulada de *money-making opportunity* (misma que MLM y cursos de hacerse rico), con revisión más estricta y exigencia de explicar la oportunidad con total claridad.
**DECISIÓN — salir de la categoría, no cumplirla:** vender el fardo **como PRODUCTO, no como oportunidad de ingresos**. El pitch de reventa se da después en WhatsApp, donde ninguna política publicitaria lo mira.

| ❌ Mete en la categoría regulada | ✅ Deja fuera |
|---|---|
| "Emprendé con ropa" | "20 prendas por Bs 1.350" |
| "Ganá revendiendo" | "Bs 67,50 por prenda" |
| "Oportunidad de negocio" | "Lote de ropa de marca variada" |
| "Ingresos extra" | "Lo que ves en la foto es lo que llega" |

**OJO:** en META el anuncio "Emprendé con ropa" fue de los de mejor costo (Bs 0,66/conversación, CTR 5,66%). En TikTok ese mismo ángulo te tira a la cola de revisión dura. **Son plataformas distintas — no reciclar copy de Meta a TikTok.**
**Además:** un rechazo de ANUNCIO es rutina y no daña la cuenta. Lo que sí construye flag a nivel cuenta es **reenviar el mismo contenido rechazado varias veces**. Ante un rechazo: leer el motivo (los rechazos de anuncio SÍ dan motivo específico, a diferencia de la suspensión de cuenta) y crear creativo nuevo, no insistir.

### 2. Apelar una suspensión "por marca" más de 1-2 veces → refuerza el flag, no ayuda
**Qué pasó:** 2 apelaciones a la suspensión de TikTok fueron rechazadas con texto genérico. La 2ª se rechazó a los **5 segundos** de enviada → confirma rechazo 100% automatizado/bot, no revisión humana.
**REGLA:** no seguir respondiendo al mismo hilo de apelación después de 1-2 intentos. Cada rechazo refuerza el flag de la cuenta. El camino real es dejar enfriar 3-4 semanas y usar el botón dedicado de "nueva solicitud de revisión" (no responder al hilo viejo).

### 3. Crear cuenta nueva para evadir un baneo → PROHIBIDO, empeora todo
Rodrigo rechazó explícitamente esta opción. Crear otra cuenta en el mismo/otro Business Center con otra tarjeta es "evasión de baneo" — banea la cuenta nueva en horas y puede **extender el flag a todo el Business Center**. NUNCA proponer esto como solución.

### 4. Optimizar por "Compra" (Meta u otro) sin historial de compras en el dataset → quema plata
**Qué pasó:** 3 de 4 campañas viejas usaron `OUTCOME_SALES` optimizando Compra sin ninguna señal de compra en el pixel/CAPI → Meta optimizó a clics baratos = puros mirones. Se quemaron **Bs 1.297** en esas campañas (115k impresiones, 0 ventas reales atribuidas).
**REGLA:** nunca prometer/configurar optimización por evento de compra si el dataset tiene <30-50 compras reales registradas. Mientras tanto usar la optimización más cercana disponible (conversaciones en WhatsApp), y migrar cuando haya historial.
**Meta además BLOQUEA por API** el objetivo `MESSAGING_PURCHASE_CONVERSION` con error 2490408 si no hay historial suficiente — no es negociable, ya se intentó 2 veces.

### 5. Confundir cuentas de Meta/TikTok → campañas rotas o mal apuntadas
Hay MÚLTIPLES cuentas con nombres parecidos en ambas plataformas. Antes de crear nada, **verificar por API/UI cuál cuenta tiene el pixel/CAPI/WhatsApp conectado** — no asumir por el nombre. Ver sección de cuentas abajo.

### 6. Doble grading / doble saturación en edición de video → colores quemados
Al aplicar tone-mapping HDR→SDR Y DESPUÉS un grading adicional en la composición (Remotion), el resultado sale sobre-saturado con contrastes agresivos. **Aplicar grading UNA sola vez.**

### 7. El producto (fardo) debe ser el protagonista visual, no la ropa suelta
Un primer intento de video mostró demasiada ropa suelta sin dejar claro que se vende un FARDO (bolsa sellada). El comprador no entendía qué se ofrecía. Siempre mostrar el fardo/bolsa como hero, la ropa suelta es secundaria.

### 8. Nunca revelar el desglose interno de rentabilidad en marketing
Nunca mencionar en ads/copy que "70% es marca / 30% relleno" ni que "el X% de la ganancia viene del relleno barato". Es info interna/de inversor. El copy debe ser honesto pero sin ese desglose (ya aprobado por Rodrigo).

### 9. El bot NO debe alertar al dueño cuando alguien "quiere pagar" — solo cuando YA pagó
Decisión firme de Rodrigo (2026-07-06): el bot es el closer solo. Nada de avisos de "intención de pago" (mucha gente dice "le compro" y no compra). Solo avisar con comprobante real (foto) o texto en pasado ("ya pagué").

### 10. El comando `vendido` (dispara Purchase por CAPI) solo con pago COMPLETO de Bs 1.350
Nunca marcar `vendido` con solo la reserva de Bs 40. Eso ensuciaría el dataset de compras que entrena a Meta.

---

## 🏢 CUENTAS — cuál es cuál (verificado, no asumir)

### Meta Ads
| Cuenta | ID | Uso |
|---|---|---|
| **FKN Studios** ✅ | `435939442185403` | **LA QUE SE USA.** Tiene el CAPI, WhatsApp Business, la página, y los videos subidos. Moneda BOB. |
| "Loyal" (sin nombre) ❌ | `768251661916498` | Cuenta vieja, campañas fallidas ya pausadas (Bs 1.297 quemados en 2026-05/06). NO usar para fardos. |

**Dentro de FKN Studios:**
- Página Facebook: `212500558624209`
- WhatsApp Business Account (WABA): `841863775645378`, número **+591 78758899** ⚠️ **CAMBIADO 2026-08-12** — el número viejo `75613517` murió. El número nuevo hay que **registrarlo en WhatsApp Manager** y genera un **`WHATSAPP_PHONE_ID` NUEVO** que debe actualizarse en Railway, o el bot queda mudo (ver checklist abajo).
- Dataset/Pixel del CAPI: `1308327044205310` ("Loyal STUDIOS Event Data")
- Otro dataset menor en la cuenta: `2177837819627728` ("Loyal STUDIOS Pixel") — casi sin uso, no confundir
- El pixel de la WEB (index.html) es distinto: `1506761844496918` — están cruzados, idealmente consolidar algún día, pero NO es bloqueante.

### TikTok Ads
| Cuenta | ID | Estado |
|---|---|---|
| **Loyal STUDIOS_adv** ✅ | `7656971538033328135` | **LA QUE SE USA DESDE 2026-08-08.** Verificada OPERATIVA: permite crear píxel y anuncios. Nunca pautó nada, por eso nunca fue sancionada. Píxel nuevo en creación. |
| Loyal STUDIOS_adv_tbw29n ❌ | `7657269506829516817` | Tenía el pixel `D922I43C77U79CKELH10`. **SUSPENDIDA PERMANENTE desde 2026-07-02.** Canal de apelación MUERTO (3 apelaciones, las 2 últimas rechazadas en 5 segundos por macro automático). No volver a apelar. |

**Por qué sobrevivió `_adv`:** TikTok sancionó la CUENTA DE ANUNCIANTE, no el Business Center ni el usuario. `Loyal STUDIOS_adv` la creó TikTok automáticamente al armar el BC; la segunda se creó después y por colisión de nombre le tocó el sufijo `_tbw29n`. Toda la pauta fue por la segunda. La primera quedó limpia, sin historial que sancionar. **No es evasión: es una cuenta propia anterior al baneo.**

### 🚨 UNA SOLA VIDA — si cae `7656971538033328135`, la sanción escala al Business Center
Y ahí se pierde TikTok completo para Loyal Studios, incluida la cuenta orgánica @loyal_studiostm.bo.
Las reglas del error #1 dejan de ser recomendación y pasan a ser condición de supervivencia:
- **JAMÁS** marcas en argumentos de venta, títulos, tags ni texto en pantalla → usar "ropa de marca variada", "prendas seleccionadas para reventa"
- Audio **solo** de TikTok Commercial Music Library (nunca CapCut ni bibliotecas no comerciales)
- Sin lenguaje informal/grosero en los videos
- Sin "fardo misterioso" / "caja sorpresa" → describir concretamente qué llega
- Mostrar el LOGO de una prenda real en video sigue permitido (es visual, no texto declarado)

**TikTok orgánico (sin pauta):** cuenta @loyal_studiostm.bo — este es el único uso activo de TikTok mientras la cuenta de ads esté suspendida.

---

## 📣 CAMPAÑA META ACTIVA (la buena)

- **Campaña:** `120246243857790701` — "Fardos Loyal · Ventas WhatsApp (ignición)"
  - Objetivo: `OUTCOME_SALES` · tope de gasto de campaña: 500 Bs
- **Ad set:** `120246243870340701` — "Compradores fardos · WhatsApp"
  - Destino: WhatsApp directo · Optimización: `CONVERSATIONS` (no se puede optimizar por Compra todavía, Meta lo bloquea sin historial suficiente)
  - Presupuesto: 70 Bs/día · Audiencia: Bolivia 18-45, todos los géneros (fardo es mixto)
  - Ubicación corregida a `location_types: home + recent` (Meta eliminó el tipo viejo, causaba error #1870194 — ya resuelto)
- **Anuncios (3, ACTIVOS desde 2026-07-01):**
  - `120246243888290701` — "Fardo premium 20 prendas"
  - `120246243972450701` — "Emprendé con ropa"
  - `120246244072070701` — "Cuál te toca · 11 lotes"
  - Todos con CTA WhatsApp y thumbnail de pila de stock (sin nombrar marcas en texto, ver error #1)
- **Rendimiento a 2026-07-06:** Bs 0,63–0,79 por conversación, CTR ~5% — **campaña sana**. Un corte de 3 días (3-4 jul) por tarjeta sin fondos NO rompió el aprendizaje del algoritmo.
- **Campañas deprecadas (NO tocar/activar):** `120246237929620701` y sus ad sets v1/v2 — quedaron rotos por errores de acceso a pixel, ya reemplazados por la de arriba.

**Próximo salto de optimización:** cuando el dataset acumule ~30-50 compras reales (vía comando `vendido`), reintentar migrar el ad set a optimización `MESSAGING_PURCHASE_CONVERSION` (compra real en WhatsApp, no solo conversación).

---

## 🔍 AUDITORÍA 2026-07-14 (datos reales del Ads Manager vía MCP)

**Resultado del período 2026-07-01 → 2026-07-10 (campaña de ignición):**
| Métrica | Valor |
|---|---|
| Gasto total | **Bs 485,54** (de un tope de campaña de Bs 500 → quedan Bs 14,46) |
| Conversaciones iniciadas | **658** · Bs 0,74/conversación promedio |
| CTR / CPM | ~5,2% / ~Bs 7,90 — creativos sanos |
| Ventas reales | **3 fardos** (Nº3, Nº6, Nº9) = Bs 1.050 de margen · CAC Bs 162/fardo |
| Tasa de cierre | **3/658 = 0,46%** ← LA FUGA. Lo normal con bot vivo sería 2-5% (13-30 ventas) |
| Estado | Campaña **PAUSED desde 2026-07-10** (día 10 gastó Bs 1,06 y murió) |

**Por anuncio (todo el período):** AD1 "Fardo premium" Bs 395 / 525 convos / 0,75 (ganador, 81% del gasto) · AD2 "Emprendé" Bs 63 / 96 convos / 0,66 (mejor costo y CTR 5,66%) · AD3 "Cuál te toca" Bs 27 / 37 convos / 0,73 (irrelevante, matar).

**Timeline del bot (corregido por Rodrigo 2026-07-14):** el free trial de Railway se agotó ~2026-07-09/10 (5 días antes del 14), justo cuando la campaña se pausó. Durante la campaña el bot SÍ respondía (Rodrigo lo probaba desde su número personal); a lo sumo el último día (9-10 jul) quedó sin responder. O sea: la mayoría de las 658 conversaciones SÍ fueron atendidas → **la fuga principal es la tasa de cierre del bot (~0,5%), no el silencio.**

### 🚨 HALLAZGOS CRÍTICOS (en orden de gravedad)
1. **El bot está MUERTO en Railway desde ~2026-07-09/10** (free trial agotado; verificado 2026-07-14: 404 "Application not found" con `x-railway-fallback: true`). Con el número Cloud API NADIE ve los mensajes si el webhook no responde. **Plan elegido: Hobby $5/mes. Revivir el MISMO servicio (no crear uno nuevo) para no perder el volumen /data (estado de fardos + clidStore + conversaciones).**
2. **El dataset CAPI `1308327044205310` tiene CERO eventos en 28 días** a pesar de que Rodrigo reportó 5 ventas con `vendido` y el bot respondió "OK". **CAUSA RAÍZ (verificada 2026-07-14/15):** los 5 números SÍ están en `soldPhones` (flags [VENDIDO] en el transcript: 59167464233, 59177450420, 59177262162, 59176234431, 59175113290) → el comando corrió las 5 veces, y las 5 cayó en la rama sin-clid que NO enviaba nada a Meta y respondía un mensaje que sonaba a éxito. OJO: el volumen /data SÍ estaba bien (healthcheck: `persistente: true`, **1.302 clicks guardados**, 666 conversaciones vivas) — el clid no se encontró por la ventana de 7 días del click y/o porque el número marcado no coincide con el que clickeó. El `test capi` pre-lanzamiento solo validaba conexión (token+dataset), no el viaje completo del click.
3. **Tope de gasto de campaña:** era Bs 500 (gastó 485,54) — **Rodrigo lo QUITÓ el 2026-07-14, ya no hay tope de campaña.** El candado anti-quema ahora es solo el presupuesto diario del ad set (70 Bs/día) — considerar límite de gasto a nivel de CUENTA como respaldo.
4. La campaña en sí está SANA (Bs 0,74/conversación, CTR 5,2%). NO rehacerla — el problema nunca fue el anuncio, es el cierre y la atribución.

### 🔧 FIXES DE CÓDIGO — DEPLOYADOS EN PRODUCCIÓN (commit `639010d`, 2026-07-15, verificado por healthcheck `version: capi-fix-2026-07-15`)
> Railway revivido por Rodrigo en plan **Hobby $5/mes** el 2026-07-14. Volumen /data intacto: 1.302 clicks + 666 conversaciones.
> Nuevo comando: **`vendido forzar <num> 1350`** — salta el anti-duplicado para reenviar las 5 ventas de julio. SOLO usar con ventas que realmente se PAGARON completas (regla #10).
- `capi.js`: nueva `sendPhonePurchase()` — venta sin click va igual a Meta como Purchase con teléfono hasheado (action_source "chat"). Suma historial de compras y audiencia de compradores, aunque sin atribución al anuncio.
- `server.js` rama `vendido` sin clid: ya no descarta la venta en silencio; manda el fallback por teléfono y avisa HONESTAMENTE al dueño si fue con o sin atribución.
- `server.js`: nueva alerta 🚪 "cliente EN LA PUERTA" ("estoy afuera", "ya llegué", "abrime"...) → aviso inmediato al dueño (se perdieron ventas de gente que llegó a la puerta sin aviso).
- `clidStore.js` + `persist.js` + lista Adidas: default ahora `/data` (igual que fardos.js) — los click IDs sobreviven redeploys aunque falte la env var.
- Verificación tras revivir Railway: healthcheck `/` → `clid_store` debe decir `persistente: true, escribible: true`; luego `test capi` desde WhatsApp; luego un `vendido` real.

---

## 🔬 AUDITORÍA DE CONVERSACIONES DEL BOT (2026-07-17, sobre 727 conversaciones reales)

**Fallas encontradas (con números):**
1. **Agobio por seguimientos** — "Hola de nuevo" apareció **494 veces**, "¿Pudiste ver las fotos?" **432 veces** en 727 conversaciones (≈2 por charla). Confirmó la queja de Rodrigo. → **FIX: bajado a 1 solo seguimiento, a las 3h.**
2. **Bug del seguimiento sobre citas/cierre** — caso real "Mariela" (59167464233): agendó cita, recibió "¿pudiste ver las fotos?" repetido CON la cita puesta y hasta DESPUÉS de venir a la puerta. → **FIX: cita confirmada o cliente en cierre (dijo que pagó / bot mandó QR) ahora corta el seguimiento.**
3. **Tono demasiado insistente ("labia")** — el prompt decía "TU MISIÓN: CERRAR VENTAS" + "cerrá siempre con una pregunta" → empujaba en cada mensaje aunque el cliente solo pedía info. → **FIX: misión reescrita a "asesor que no fuerza" + regla de "leer la temperatura" (solo info → responder sin empujar).**
4. **Alucinación "ya te abren la puerta"** — en el caso Mariela el bot dijo "Ya te abren la puerta 🙌", nadie salió, la clienta escribió "me estoy yendo". El prompt YA lo prohíbe (regla de visitas) pero el modelo lo violó igual. Vigilar; considerar respuesta enlatada fija para [AFUERA].
5. **Marcas nombradas por el bot (33 veces)** — el bot dice "Nike, Adidas, Tommy, Calvin Klein, New Balance, GUESS" al cliente que pregunta qué viene. En CHAT orgánico el riesgo es bajo (el baneo de TikTok fue por campo declarado de ADS, no por chat), pero el prompt lo instruye explícitamente. Decisión pendiente de Rodrigo si suavizar a lenguaje genérico. NO cambiado aún.

**Deploy:** commit `15511ec` (2026-07-17), version healthcheck `followup-tono-2026-07-17`.

### 🗣️ OPENING "CASERITA" (2026-07-17, aprobado por Rodrigo, commit `977e0b7`)
**Data que lo justifica (medida en las 727 conversaciones):** 40% moría tras el 1er mensaje del bot. Opening CON precio: 51% respondía; SIN precio: 63% (−12pts por tirar el precio de entrada — instinto de Rodrigo confirmado). FOMO "se van volando/no se te escape": −24pts. Marcas nombradas: 72% responde (el gatillo más fuerte). Pregunta fácil (ciudad): 71%.
**El sistema nuevo:**
- 1er mensaje (ads y orgánico): **"Hola casero 🙌 ¿de dónde me escribís?"** — sin precio, sin fotos, sin link. Excepción: pregunta directa del cliente → se responde al toque (nunca esquivar).
- Escalera: ciudad → envío ("llega AL DÍA SIGUIENTE") + marcas + "¿te muestro uno?" → UNA foto ("fijate las marcas en la foto — lo que ves es lo que te llega"; PROHIBIDO inventar contenido específico de un lote) → precio solo cuando pregunta, envuelto en la cuenta (Bs 67,50/prenda, revende a 100-150, media bolsa recupera) → cierre por geografía: Cocha = visita en persona ([CITA]), interior = reserva Bs 40 + flota.
- Frases prohibidas (van al prompt): "se van volando", "no se te escape", "listos para vender", "pensados para revendedores", "transparencia", "¡Excelente! 💪". Escasez SOLO con números reales ("me quedan N lotes de los 11").
- "para revender" máximo 1 vez por conversación (es obvio, vendemos fardos — orden de Rodrigo).
- Decisiones de Rodrigo: marcas nombradas en chat SE QUEDAN (ayudan a vender, riesgo bajo — el baneo TikTok fue por campo de anuncio, no chat). Regla anti-alucinación "ya te abren" verificada existente, sin cambios.
**Métrica a vigilar:** % que muere tras el 1er mensaje del bot — hoy 40%; meta <25%. Re-medir con el transcript a los 3-4 días de tráfico nuevo (script del scratchpad: analyze.js/survival.js).

## 🤖 EL BOT (loyal-bot en Railway)

- **Transcript de conversaciones:** `https://loyal-bot-production-4f23.up.railway.app/admin/transcript?key=<VERIFY_TOKEN>` (token en `.env` local = `loyal_studios_2024`)
- **Código local:** `.claude/worktrees/adoring-dhawan-06cfa2/loyal-bot/`
- **OWNER_PHONE hardcodeado:** `59175485831` (número personal de Rodrigo — distinto del número del bot/negocio, que desde 2026-08-12 es `78758899`). **No se toca**: el cambio de número afectó al bot, no al dueño.
- **Comando `vendido <número> 1350`** dispara el evento `Purchase` por CAPI al dataset `1308327044205310`. Es el combustible que entrena a Meta — **cada venta real DEBE marcarse**, o la campaña nunca mejora su targeting.

### Fugas de conversión encontradas (auditoría 2026-07-06, sobre 361 conversaciones, 0 ventas, ~2 citas)
1. ~1/3 de conversaciones morían tras el primer mensaje (saludo + link a la web sacaba al cliente del chat + pedía datos de formulario). Fix: foto-gancho garantizada en el primer mensaje (deployado 2026-07-04, commit `77cdb4e`).
2. 101 clientes tuvieron que preguntar el precio — sin ancla de precio por prenda (Bs 67,50/prenda = 1350/20).
3. Mismatch anuncio→producto: el ad con pila de marcas atraía hombres, pero el fardo mostrado era 16/20 prendas de mujer → pedidos de ropa de hombre/tallas sueltas que no aplican.
4. Sin monto de reserva definido → el bot no podía cerrar apartados (llegó a inventar Bs 100, prohibido).
5. Momentos calientes sin humano: clientes diciendo "mándeme QR, ya le compro" no cerraban — no había alerta de intención de pago al dueño (solo para citas/imágenes).
6. Alucinación: el bot respondió "recibido, lo verificamos" a un texto que NO era comprobante de pago.
7. Seguimientos repetitivos idénticos ("¿Pudiste ver las fotos?" x3) sin aportar nada nuevo.

### Fixes ya deployados (commit `43bc175`, 2026-07-06)
- Distinción pago futuro ("voy a pagar") vs pasado ("ya pagué")
- `botPromisesPhoto` + link de respaldo si la foto falla
- Primer mensaje: ancla de precio Bs 67,50/prenda + 2 fotos + CTA "¿Te aparto uno o querés ver más lotes?"
- Ya NO pregunta "¿revender o uso personal?" ni pide ciudad al arrancar
- Reconoce "sí/dale/ok" como confirmación positiva
- Seguimientos ahora incluyen cuenta de ganancia estimada + recordatorio de reserva

### Reglas de negocio fijadas por Rodrigo (firmes, no cambiar sin que él lo pida)
- Reserva oficial: **Bs. 40 por 24 horas**, se descuenta del precio final, mismo QR del BNB
- Fotos SIEMPRE: el bot nunca dice "te muestro/te mandé" sin que la foto realmente salga
- NO existe estado "reservado" en `fardos.js` (Rodrigo lo rechazó como innecesario)
- `vendido` solo con pago COMPLETO (ver error #10 arriba)

---

## 📦 PRODUCTO — Fardo Loyal Starter

- **20 prendas de marca variada**, **Bs. 1.350** el fardo (= Bs 67,50/prenda)
- **11 fardos/lotes disponibles**, cada uno único, con foto real del lote exacto (lo que ves = lo que recibís)
- Cliente objetivo: **revendedor/emprendedor**, no consumidor final de una prenda — **no segmentar por género**, el fardo es mixto
- Niveles "Pro" (+50 prendas) y "Elite" (100+) son "Próximamente" — NO vender aún, solo mencionar como escalera aspiracional
- Envíos martes y viernes a toda Bolivia. Cierre 100% por WhatsApp +591 78758899

---

## ✅ PENDIENTES ACTIVOS

0. ~~Revivir el bot en Railway~~ ✅ HECHO 2026-07-14 (plan Hobby $5/mes, mismo servicio, volumen intacto). Fixes CAPI deployados y verificados 2026-07-15.
0b. **Rodrigo debe mandar al bot `vendido forzar <numero> 1350` por cada venta que realmente se PAGÓ completa** (candidatos: 59167464233, 59177450420, 59177262162, 59176234431, 59175113290 — él sabe cuáles pagaron de verdad; las que solo "iban a comprar" NO se mandan, ensucian el dataset). Después verificar por MCP (`ads_get_dataset_stats`) y en Events Manager que los Purchase lleguen al dataset `1308327044205310`.
1. **TikTok:** esperar 3-4 semanas de enfriamiento (desde 2026-07-02) antes de la próxima "solicitud de revisión" — NO más apelaciones al hilo viejo, NO cuenta nueva. Mientras tanto, foco 100% en Meta.
2. **Refund de TikTok:** ticket en curso por ~Bs 70 de saldo prepago no gastado (categoría Pagos/Billing, no apelación). Falta ubicar ID de transacción + Business Center ID en Ads Manager → Facturación → Historial.
3. **Meta:** seguir marcando `vendido <número> 1350` en cada venta real para acumular historial y poder migrar a optimización por compra real. **⏰ REGLA DE ORO (aprendida 2026-07-17): marcar la venta DENTRO DE LOS 7 DÍAS del primer contacto del cliente.** Meta solo atribuye el click 7 días; pasado ese plazo la venta entra igual (como compra por teléfono hasheado, vía `sendPhonePurchase`) pero SIN atribución al anuncio. Las 5-6 ventas de julio se reenviaron el 2026-07-17 con `vendido forzar` → entraron como compra por teléfono (server_last_fired_time del dataset confirmado HOY 10:16, antes muerto). Sirven para historial/audiencia de compradores, no para atribución directa.
4. **Verificar** que el límite de gasto de CUENTA (no solo el de campaña de 500 Bs) esté puesto en Meta — candado final anti-quema.
5. Cuando TikTok se reactive: recrear anuncios con lenguaje genérico (sin marcas nombradas, ver error #1), textos con precio adelante para filtrar mirones.

---

## 🧭 Reglas operativas generales (repetidas de CLAUDE.md, para que no se pierdan acá)
- Objetivo SIEMPRE ventas reales — nunca alcance/tráfico/interacción como fin en sí mismo.
- 1 campaña con presupuesto bajo controlado, no fragmentar.
- Todo cambio de presupuesto/estructura en Meta: crear en pausa, humano revisa y activa (protocolo `loyal-meta-safe`).
- Antes de tocar Meta Ads API: cargar skill `/loyal-meta-safe` (es LEY, guardarraíl anti-baneo).
