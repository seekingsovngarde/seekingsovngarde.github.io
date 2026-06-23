---
title: "Tessere il codice come incantesimi"
description: "Pattern di architettura pulita applicati a un piccolo motore di gioco testuale."
date: 2026-05-12
tags: ["CODING"]
---

Ogni incantesimo ben formulato ha una struttura: parole di potere, un bersaglio e un effetto. Il codice non è diverso. Quando ho iniziato a scrivere il motore di questo piccolo gioco testuale, ho trattato ogni comando come una runa da incidere con cura.

Il cuore del sistema è un disaccoppiamento netto tra parser, stato del mondo e regole. Il parser traduce le parole del giocatore in intenzioni; lo stato custodisce la verità; le regole decidono cosa è possibile. Tre cerchi che non si toccano mai direttamente.

Il risultato è un motore che posso estendere aggiungendo nuove "magie" senza riscrivere ciò che già funziona. Come ogni buon mago sa, il vero potere non sta nel singolo incantesimo, ma nella grammatica che li tiene insieme.
