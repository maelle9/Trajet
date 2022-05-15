# Voyageur de Commerce - Projet de JavaScript
Les membres de l'équipe:
* Camille BAYON DE NOYER, 
* Sonia MOGHRAOUI, 
* Maëlle MARCELIN

> Problématique : Un voyageur doit visiter toutes les villes présente dans une liste.
> Quel est l'itinéraire le plus court possible pour qu'il visite chaque ville une seule fois et retourne à la ville d'origine?

## Sommaire
1. [Méthode utilisée](#methode)
2. [Démonstration](#demo)
3. [Installation](#install)
4. [Sources](#sources)

## Méthode utilisée <a name="methode"></a>

Etape 1 : Calculer de la distance entre toutes les villes à partir de leur coordonnées GPS (formule d'haversine)

Etape 2 : Recherche de la ville la plus proche

Etape 3 : Construction du chemin

Etape 4 : Afficher le chemin dans l'interface

### Travail réalisé
* Programmation fonctionnelle (Ramda)
* Mise en place de tests unitaire (Mocha + Chaijs)
* gulp + xo

## Démonstration <a name="demo"></a>

### Return

Chemin à parcourir:
```javascript
[
'marseille',  'nice',
'valence',    'grenoble',
'lyon',       'clermont-ferrand',
'dijon',      'orléan',
'paris',      'rouen',
'amiens',     'lille',
'strasbourg', 'rennes',
'nantes',     'brest',
'bordeaux',   'poitier',
'toulouse',   'limoges'
]
```
Distance du trajet
```javascript
4088.801645249317
```

### Screenshot

Réalisation d'une interface graphique et d'une carte
![Image text](/asset/git/gif_interface_graphique.gif)

## Installation <a name="install"></a>
* Gulp

  npm install --save-dev gulp

* Pour la carte

  npm install plotly.js-dist

  npm install ds.js

## Sources <a name="sources"></a>

### Librairies
* Ramda : https://ramdajs.com/docs/#
* Mocha : https://mochajs.org/
* Chaijs : https://www.chaijs.com/
### Inspirations
* Algorithme de Prim : https://www.youtube.com/watch?v=I0uiQyAs5G4
* Graphes pondérés : https://www.youtube.com/watch?v=yqH11OHfN2U