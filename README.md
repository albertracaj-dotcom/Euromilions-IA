# EuroMilions AI

Aplicació web progressiva (PWA) en català per explorar estadístiques, probabilitats matemàtiques i simulacions d'EuroMillions.

## Contingut i funcionalitats

- 9 resultats recents verificats, integrats al primer inici i disponibles offline.
- Enllaços directes a les fonts oficials de resultats i a l'arxiu històric.
- Guia del joc en català: regles, cost publicat a Espanya, categories i glossari estadístic.
- Les dades incorporades tenen data d'actualització i procedència identificada.

## Funcionalitats

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

L'històric inicial es carrega des de `data/results.json`. Inclou resultats publicats fins al 10/11/2026, consultats el 12/11/2026. La interfície identifica les fonts i permet consultar els resultats oficials. Aquest conjunt inicial no és una sincronització automàtica en temps real.

## Model matemàtic

EuroMillions selecciona 5 números de 50 i 2 estrelles de 12. El nombre total de combinacions simples és:

`C(50,5) × C(12,2) = 139.838.160`

Cada combinació té la mateixa probabilitat teòrica en un sorteig just. Les freqüències passades no modifiquen aquesta probabilitat ni permeten predir el sorteig següent.

## Publicació

La publicació es fa amb GitHub Actions mitjançant `.github/workflows/deploy.yml`. La font de GitHub Pages ha d'estar configurada com a **GitHub Actions**.

## Privacitat

Les dades importades i combinacions desades es conserven al localStorage del navegador. Aquesta versió no incorpora comptes d'usuari ni envia les dades a cap servidor.

## Joc responsable

Aplicació informativa i estadística, sense garantia de guany. Ús exclusiu per a majors de 18 anys.