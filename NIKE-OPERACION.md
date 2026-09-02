# OPERACIÓN NIKE — Loyal Studios

> **Arranca 2026-08-31. Archivo NUEVO y SEPARADO.** No mezclar con `ESTADO-CAMPANAS-FARDOS.md` (archivado: esa operación terminó, la mercadería se vendió).
> De aquel archivo solo se heredan **reglas técnicas y anti-baneo**, nada de producto, precios, audiencias ni campañas.

---

## 1. QUÉ SE VENDE

- **~280 prendas Nike** (aproximado, conteo exacto pendiente) — **medio pallet** traído de Iquique / Zofri
- **Nuevas con etiqueta.** Mayoría buzos / hoodies / abrigo
- **Venta RETAIL, prenda por prenda.** No se vende en lotes.
- ~30 de las mejores piezas vinieron en maleta y ya están en Bolivia → son el material de grabación inmediato

### Costo (números dados por Rodrigo el 2026-08-31)

| Concepto | Valor |
|---|---|
| Costo por prenda | **US$ 16** |
| Tipo de cambio del día | **11,99 Bs/US$** |
| **Costo por prenda en Bs** | **≈ Bs 192** |
| Costo total aproximado (280) | US$ 4.480 ≈ **Bs 53.715** |

⚠️ No incluye flete ni internación. Actualizar cuando esté el conteo exacto y el costo aterrizado real.

---

## 2. MODELO DE VENTA — DROPS

- **2 drops por semana: martes y jueves**
- **25 prendas por drop** → ~50 prendas/semana
- 280 prendas ÷ 50 = **~6 semanas** para colocar el lote completo
- Cada prenda se sube a la web y se anuncia con foto
- El cierre es por WhatsApp, con el bot vendiendo prenda por prenda

---

## 3. ESTADO DEL BOT (2026-08-31)

**Servidor VIVO** en Railway — verificado por healthcheck en **`/`** (⚠️ `/health` NO existe, devuelve 404):

```
status: ok · version: caserita-v2-sin-reventa-2026-07-17
env_check: verify_token ok · gemini_key ok · wa_token ok · qr_image ok
wa_phone: 1042764978927730
clid_store: /data · persistente: true · escribible: true · clicks: 1558
```

### 🔴 Bloqueo 1 — el número murió
El número del bot murió (línea prepago sin recarga). Rodrigo compra **línea Entel nueva**.
Problema recurrente: **nunca le llega el código de verificación por SMS** → usar **verificación por LLAMADA DE VOZ**, que en Bolivia funciona cuando el SMS no llega.
Pasos completos en la sección 4.

### 🔴 Bloqueo 2 — el bot vende FARDOS
Su catálogo son lotes mayoristas. Hay que devolverlo a **venta prenda por prenda**, como funcionaba antes.
- **`sheets.js` YA EXISTE** y es exactamente eso: sistema de venta por prenda, con Google Sheet `1g1iK354a0cnuU7yj1yVhdmydIYhU0o-F0NlRd1shJ8k` (refresca cada 5 min) y la **interfaz idéntica** a `fardos.js`: `getInventory`, `formatInventoryForPrompt`, `getPhotoUrl`, `getPhotoUrls`.
- `server.js:12` importa además `markFardoSold` / `markFardoAvailable` / `getSoldFardos`, que `sheets.js` NO exporta → hay que adaptar, no solo reapuntar el `require`.
- Volumen del trabajo: 46 menciones de "fardo" en `claude.js`, 50 en `server.js`.

### Lo que se CONSERVA del bot (costó 3 auditorías, funciona)
- Opening "caserita" — abrir charla sin vomitar información ni tirar el precio de entrada
- **1 solo seguimiento a las 3h**, y cortado si hay cita o cierre
- Alerta de cliente en la puerta · prohibición de alucinar "ya te abren"
- **Foto garantizada:** nunca decir "te muestro" sin que la foto salga
- Distinción pago futuro vs pago pasado · aviso al dueño **solo con pago ya hecho**
- Comando `vendido` → dispara **Purchase por CAPI** (cambia el monto, no la mecánica)
- Reserva Bs 40
- Resiliencia: `unhandledRejection` capturado para que el proceso no muera

### Lo que CAMBIA para retail
- El cierre pasa de geografía a **TALLA** — "¿cuál es tu talla?" es la pregunta que más fácil se contesta y filtra al comprador real
- Escasez **real**: una unidad por modelo (verificable, nada inventado)
- Ya no se habla de reventa ni de ganancia — el cliente es consumidor final
- Cada prenda va con su foto

### Requisito duro
**Todo evento tiene que llegar a Meta por CAPI.** Sin señal de compra, Meta optimiza a clics baratos y trae mirones. El comando `vendido` es el combustible.

---

## 4. NÚMERO NUEVO — QUÉ HAY QUE HACER

**Concepto clave:** el número del bot es de **WhatsApp Cloud API**. Vive en la nube, **NO se puede abrir en un celular** y no es WhatsApp normal ni Business. Rodrigo entra a los chats desde su número personal por el puente de dueño.

| # | Dónde | Qué |
|---|---|---|
| 1 | Chip Entel nuevo | Que NO tenga WhatsApp instalado. Si lo tiene, borrar esa cuenta antes. **Mantener la línea con saldo** — por eso murió la anterior. |
| 2 | WhatsApp Manager (WABA `841863775645378`) | Agregar el número y verificarlo. **Si el SMS no llega, elegir verificación por LLAMADA DE VOZ.** |
| 3 | WhatsApp Manager → API Setup | Copiar el **`Phone number ID` NUEVO** (es distinto por número, no se hereda) |
| 4 | Railway (`loyal-bot`) | Actualizar `WHATSAPP_PHONE_ID` → redeploy → verificar en `/` que `wa_phone` sea el nuevo |
| 5 | Token | Usar **token permanente de System User**, no el temporal de 24h. El temporal es la causa clásica de que el bot se muera en silencio. |
| 6 | Perfil de WhatsApp Business | Foto, nombre, descripción, horarios — no se migran |
| 7 | Bios de Instagram / TikTok / Facebook + botón de la página `212500558624209` | Apuntar al número nuevo |
| 8 | Web (`data.js` → `WA_NUM`, `index.html`) | Cambiar el número |

**`OWNER_PHONE` = `59175485831` NO se toca** — es el personal de Rodrigo, para las alertas.

---

## 5. LÍMITE DE PLATAFORMA — GRUPOS DE WHATSAPP

**La Cloud API NO puede mandar mensajes a grupos.** Es limitación dura de Meta, no del código: la API es 1 a 1. Ningún desarrollo lo resuelve.
Opciones evaluadas y sus contrapartidas: ver el roadmap.

---

## 6. CUENTAS

| Plataforma | Dato |
|---|---|
| Meta Ads | **FKN Studios `435939442185403`** (tiene CAPI, WhatsApp y página) |
| Página Facebook | `212500558624209` |
| WABA | `841863775645378` |
| Dataset CAPI | `1308327044205310` |
| Pixel de la web | `1506761844496918` |
| TikTok | **Cuenta NUEVA** (2026-08). El bloqueo anterior está cerrado y no se vuelve a tocar. |
| Sitio | https://loyalstudios.github.io/Loyal-STUDIOS-/ |

---

## 7. PENDIENTES

1. 🔴 Comprar línea Entel y registrar el número nuevo (sección 4)
2. 🔴 Devolver el bot a venta prenda por prenda, sin bugs
3. 🔴 Probar end-to-end antes de gastar en pauta
4. 🟡 Conteo exacto del pallet, tallas y costo aterrizado real
5. 🟡 Cargar el primer drop de 25 prendas al Sheet y a la web
6. 🟡 Límite de gasto a nivel de CUENTA en Meta
7. 🟡 Reconectar el MCP de Meta Ads (no está disponible en la sesión del 2026-08-31)

---

## 8. DECISIONES CONFIRMADAS — 2026-08-31 (tarde)

### Tallas ÚNICAS
**No hay surtido de tallas: una sola unidad por modelo.** Consecuencias:
- ❌ **NO usar "¿cuál es tu talla?" como apertura** ni como ángulo de anuncio — no sirve sin surtido.
- ✅ El ángulo que lo reemplaza es más fuerte: **"hay una sola de cada una"** — escasez real y verificable.
- Apertura del bot: *"Hola casero 🙌 ¿te muestro lo que llegó?"*
- 🔴 **REGLA DURA ANTI-BUG:** ante "¿la tenés en M?" el bot **JAMÁS inventa stock**. Dice la talla real de esa prenda y ofrece otras que sí sean M.

### Drops en el grupo — SOLUCIÓN ADOPTADA
Rodrigo **descartó** la difusión 1 a 1 por plantillas. Tiene un **grupo con 400 personas** y no quiere que los chats le lleguen a él, solo al bot.
La Cloud API no puede estar en grupos, pero **no hace falta**:
1. Se publica en el grupo un **link click-to-chat**: `https://wa.me/591<NUMERO>?text=DROP`
2. Quien lo toca abre **chat privado con el bot** con "DROP" precargado
3. El cliente inicia → **abre él la ventana de 24h** → cero plantillas, cero costo
4. El bot suelta las 25 prendas de a una con foto y precio, y frena cuando el cliente engancha
- Único paso manual: pegar el mensaje en el grupo (~20 s, 2 veces/semana). El bot puede armarlo y mandárselo al dueño listo para reenviar.
- **Poner el grupo en "solo administradores"** (Permisos → Enviar mensajes) → se vuelve canal de anuncios, nadie chatea adentro.

### Los anuncios también deben ALIMENTAR EL GRUPO
El grupo de 400 es el canal más barato: cada drop llega gratis para siempre. Un creativo dedicado a captar suscriptores ("cada martes y jueves subo 25 prendas nuevas, escribime y te aviso") construye un activo que hace que los drops se vendan sin pauta.

### Estado de Meta verificado por API (MCP conectado el 2026-08-31)
- **Las 8 campañas de la cuenta `435939442185403` están PAUSED.** Nada gastando. (Cierra la duda sobre si había pauta corriendo.)
- Campañas existentes: `120246243857790701` Fardos (ignición) · `120212265851300701` HOODIES · `120212264540190701` JUMPMAN 23 · `120212214468780701` FALLO CONJUNTO · `120211909753380701` FALLO CANGUROS · `120211622317950701` JUMPMAN Interacción · `120211596903090701` Hoodies Interacción · `120210860846710701` Interacción Tráfico Frío
- **Dataset `1308327044205310`: 0 eventos en los últimos 7 días.** Esperable sin campañas ni ventas marcadas, pero el CAPI está mudo → **probarlo con un evento real antes de pautar.**

### Número nuevo
Es de **Tigo**. TikTok ya le mandó código sin problema. Falta probar con Meta (sistema distinto, es el que más falla en Bolivia) → **usar verificación por LLAMADA DE VOZ**.
⚠️ El chip **no debe tener WhatsApp instalado** cuando se registre en la API. Si se le instaló para probar TikTok, borrar esa cuenta primero.

### Orden de lanzamiento (decisión de Rodrigo)
**Primero publica los videos orgánicos en TikTok e Instagram, después les hace publicidad.** La pauta no arranca con creativos nuevos desde cero, sino impulsando lo que ya funcionó orgánicamente.

---

## 8. CORRECCIÓN — ESTADO REAL DE LA WABA (verificado 2026-08-31 con captura de Rodrigo)

**Se había concluido mal que el cambio al `78758899` ya estaba aplicado.** No lo está.

Estado real en Business Settings → Cuentas de WhatsApp, WABA **`841863775645378`** ("Loyal STUDIOS", propiedad de FKN Studios `794810772533411`):

| Número | Nombre visible | Estado | Calidad |
|---|---|---|---|
| **+591 75613517** (el viejo) | Loyal STUDIOS | **Conectado** | **Alta** |

- **Hay UN SOLO número en la WABA: el viejo.** El `78758899` nunca se registró.
- El `WHATSAPP_PHONE_ID` de producción (`1042764978927730`) corresponde al **75613517**. El del `.env` local (`111577…`) es el **número de prueba** que da Meta — por eso no coincidían. Esa discrepancia NO probaba ningún cambio de número.
- ⚠️ **En Cloud API el registro NO depende de que el chip tenga saldo.** Que la línea se muriera en la operadora no da de baja el número en Meta. Es probable que **el bot siga recibiendo en el 75613517** — encaja con que las conversaciones subieran de 727 a 942 y los clicks de 1.302 a 1.558 después de julio.
- **Verificar antes de migrar:** mandar `hola` al +591 75613517. Si contesta, no hay corte de servicio y la migración se puede hacer con calma.

**Ojo con las cuentas duplicadas:** en la lista aparecen **dos WABAs llamadas "Loyal STUDIOS"** más una "Test WhatsApp Business Account". La correcta es **`841863775645378`**. No asumir por el nombre.

### Dónde se agregan los números (confusión resuelta)
- ❌ **Configuración del negocio → Cuentas → Cuentas de WhatsApp** = solo administra permisos/activos. Su botón "Agregar" únicamente crea o vincula una WABA.
- ✅ **WhatsApp Manager** → `https://business.facebook.com/wa/manage/phone-numbers/` → pestaña **Números de teléfono** → **Agregar número de teléfono**.

### Verificación: usar LLAMADA, no SMS
Confirmado con el chip nuevo `74267395`: **a ese número le entran las llamadas y NO los SMS** (el código de TikTok llegó por llamada). Ir directo a "Llamada de voz" en la verificación de Meta.

---

## 9. ⚠️ DOS WABAs DISTINTAS — verificado en el navegador 2026-08-31

**Hay DOS cuentas de WhatsApp Business, ambas llamadas "Loyal STUDIOS". No son un duplicado visual.**

| WABA | Número | Estado del número | Webhooks |
|---|---|---|---|
| **`2442823842909436`** | **+591 74267395** (NUEVO) · Phone ID **`1332741419918509`** | No registrado → hay que darle **Registrar** | ⚪ **APAGADO** |
| `841863775645378` | +591 75613517 (viejo) | Conectado · calidad Alta | 🔵 ENCENDIDO |

🔴 **TRAMPA:** el número nuevo se agregó a la WABA `2442823842909436`, pero los webhooks están suscritos en la `841863775645378`. **Si se registra el número sin prender "Suscribir webhooks" en la WABA nueva, el bot queda MUDO** — parece que todo está bien y no recibe nada.

### Dónde se registra un número (ruta verificada navegando, 2026-08-31)
El flujo viejo **YA NO EXISTE**: `developers.facebook.com/apps/<APP_ID>/whatsapp-business/wa-dev-console/` redirige al nuevo.

**Ruta real:** Panel de la app → **"Conectarte con los clientes a través de WhatsApp"** (en "Casos de uso en esta app") → **Paso 2: Configuración de producción** → desplegar **"Registra tu número de teléfono de WhatsApp"** → botón **Registrar** junto al número.

URL directa: `developers.facebook.com/apps/961143233176421/use_cases/customize/wa-configurations-v2/?product_route=whatsapp-business&business_id=794810772533411&use_case_enum=WHATSAPP_BUSINESS_MESSAGING&selected_tab=wa-configurations-v2`

**NO hace falta token ni llamada curl al endpoint `/register`.** Hay botón en la interfaz. (Se le indicó mal al usuario que necesitaba token temporal + curl — era el flujo viejo.)

### App de Meta
**Loyal Studio · App ID `961143233176421`** · negocio FKN Studios `794810772533411`.
En "Paso 1. Pruébalo" dice "No hay números de teléfono disponibles para esta app" — ese paso es SOLO para el número de prueba, no sirve para el número real.

### 💰 NO hace falta método de pago
Texto literal de Meta en el Paso 2: el pago es solo para **mensajes iniciados por la empresa** (marketing, utilidad, autenticación). Para responder a clientes hay **1000 conversaciones iniciadas por el usuario GRATIS por mes**. Como toda la operación es gente que escribe primero (grupo + anuncios), está cubierto. **Ese paso se puede saltear.**

### Pendiente relacionado
Los anuncios CTWA pueden estar apuntando a la WABA vieja `841863775645378`. Si el bot pasa a la nueva, hay que repuntarlos o seguirán mandando gente al número viejo.

---

## 10. ✅ ESTADO FINAL DEL NÚMERO — verificado en WhatsApp Manager 2026-08-31

**Corrige las secciones 8 y 9.** Se llegó a concluir que el número había quedado en una WABA suelta (`2442823842909436`) fuera del portafolio. **ERROR.** El dato real, leído en WhatsApp Manager:

```
WABA 841863775645378  (la correcta, la de siempre)
  +591 74267395   Conectado    Phone ID: 1332741419918509   ← EL NUEVO
  +591 75613517   Conectado · calidad Alta                   ← el viejo
Nombre visible "Loyal STUDIOS": APROBADO
```

**El número nuevo está en la WABA correcta.** Esa WABA ya tiene:
- acceso del usuario del sistema **`loyalbot`** (ID `61589955722415`, admin, acceso total a la app Loyal Studio)
- el valor por defecto de `META_WABA_ID` en `capi.js` (`841863775645378`) → **la atribución de ventas al anuncio sigue funcionando sin tocar nada**
- los anuncios CTWA ya apuntando ahí

### ⇒ ÚNICO CAMBIO EN RAILWAY
```
WHATSAPP_PHONE_ID = 1332741419918509
```
**NO se cambia** `WHATSAPP_TOKEN`, `META_WABA_ID`, `WHATSAPP_APP_SECRET`, `VERIFY_TOKEN`, `META_CAPI_TOKEN`, `META_DATASET_ID`, ni nada más. Lista completa de env vars del código: `BASE_URL`, `CTWA_STORE_DIR`, `GEMINI_API_KEY`, `META_CAPI_TOKEN`, `META_DATASET_ID`, `META_TEST_EVENT_CODE`, `META_WABA_ID`, `PORT`, `QR_IMAGE_URL`, `VERIFY_TOKEN`, `WHATSAPP_APP_SECRET`, `WHATSAPP_PHONE_ID`, `WHATSAPP_TOKEN`.

### ⚠️ `OWNER_PHONE` NO es variable de entorno
Está **hardcodeado** en `server.js:72` = `"59175485831"`. Rodrigo confirmó que **ese número ya no existe**. Es el que recibe las alertas (cliente en la puerta, pago recibido) y desde el que se mandan los comandos `vendido`, `tomar`, `modo dueño`. **PENDIENTE: cambiarlo en el código por su número personal actual.**

### Nota sobre `2442823842909436`
Esa WABA aparece en el panel de desarrolladores pero NO es donde vive el número, y desde FKN Studios da "no tienes acceso". Ignorarla. **Lección: verificar los números en WhatsApp Manager, que es la fuente de verdad, no en el panel de desarrolladores.**
