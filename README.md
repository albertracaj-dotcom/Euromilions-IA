# EuroMilions AI

Aplicació web progressiva (PWA) en català per explorar estadístiques, probabilitats matemàtiques i simulacions d'EuroMillions.

## Funcionalitats de la primera versió

- Dashboard amb indicadors principals.
- Generador de combinacions aleatòries, equilibrades i basades en freqüències històriques.
- Estadístiques de freqüències i distribució de números i estrelles.
- Càlcul combinatori de les 13 categories de premi.
- Simulador Monte Carlo de sortejos independents.
- Importació d'històric en CSV o JSON.
- Emmagatzematge local al navegador i exportació de combinacions.
- PWA instal·lable i memòria cau offline.

## Executar localment

Obre `index.html` en un navegador. Per provar la instal·lació PWA i el service worker, serveix la carpeta mitjançant un servidor HTTP (per exemple, GitHub Pages).

## Format CSV

Capçalera recomanada:

```csv
date,n1,n2,n3,n4,n5,e1,e2
2026-01-01,4,17,23,38,49,2,11
```

També s'admeten separadors punt i coma i tabuladors. JSON: una llista d'objectes amb `date`, `numbers` (5 valors) i `stars` (2 valors).

Les dades de demostració de la interfície són fictícies i estan identificades com a tals.

## Model matemàtic

EuroMillions selecciona 5 números de 50 i 2 estrelles de 12. El nombre total de combinacions simples és:

`C(50,5) × C(12,2) = 139.838.160`

Cada combinació té la mateixa probabilitat teòrica en un sorteig just. Les freqüències passades no modifiquen aquesta probabilitat ni permeten predir el sorteig següent.

## Publicació

Es pot activar GitHub Pages des de **Settings → Pages → Deploy from a branch → main → /(root)**.

## Privacitat

Les dades importades i combinacions desades es conserven al localStorage del navegador. Aquesta versió no incorpora comptes d'usuari ni envia les dades a cap servidor.

## Joc responsable

Aplicació informativa i estadística, sense garantia de guany. Ús exclusiu per a majors de 18 anys.