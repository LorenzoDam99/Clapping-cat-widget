# Clapping Cat Widget

Widget desktop in Electron: un gatto animato che applaude, sempre visibile in un angolo dello schermo, senza bordi né sfondo.

## Come funziona

- `main.js` apre una finestra trasparente 400×400, senza cornice e fuori dalla barra delle applicazioni, in basso a destra nello schermo principale.
- `index.html` riproduce `anim.mp4` (video su sfondo verde) e lo disegna su un `<canvas>`, togliendo il verde frame per frame (chroma key) così resta solo il gatto.

## Avvio

Serve [Node.js](https://nodejs.org/).

```bash
npm install
npx electron .
```

## Comandi

| Azione | Effetto |
| --- | --- |
| Trascina con il tasto sinistro | Sposta il widget |
| Click sinistro | Nessuna azione (personalizzabile in `onClick()` dentro `index.html`) |
| Click destro | Chiude il widget |

## Personalizzazione

In `index.html`:

- `LOW` e `HIGH`: soglie del verde da togliere. Alzale se resta un alone verde, abbassale se sparisce parte del gatto.
- `MAX`: lato massimo in pixel dell'elaborazione. Più basso = più leggero.
- `onClick()`: cosa succede al click (ad esempio mettere in pausa il video).

Per cambiare animazione sostituisci `anim.mp4` con un altro video su sfondo verde.
