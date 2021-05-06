# BeyondTimeZones par ***Efflam*** et ***Nicolas*** 
Site qui permet de connaître l'heure qui l'est en dehors des fuseaux horaires.
___
## Fonctions nécessaires
1. fonction qui rend la longitude de l'utilisateur - *avec javascript*
2. fonction qui rend avec la longitude l'écart en seconde avec la longitude de Greenwich (UTC) - *avec php*
3. fonction qui converti des secondes en format Heures:Minutes:Secondes dans un tableau - *à voir*
4. fonction qui rend la valeur du fuseau horraire de l'utilisateur (ex: pour GMT+8, il rend 8) 
5. code qui actualise une partie de la page
6. fonction qui récupère l'heure de la machine de l'utilisateur
7. fonction qui vérifie la validitée de la longitude [-180;180]
8. fonction qui donne l'heure universelle UTC
9. fonction qui convertie des heures, minutes, secondes en secondes simplement
___
## Répartition des tâches actuel
- Efflam :
- [x] Fonction n°2, elle est constituée de ecartSeconde(longitude)
- [x] Fonction n°3, elle est constituée de conversionHMS_objects(temps) et conversionHMS(temps)
- [x] Fonction n°7, elle est constituée de verifLongitude(longitude)
- [x] Fonction n°4, elle est directement implémentée avec la fonction heure
- [x] Fonction n°8, elle est constituée de heureUTC()
- [x] Gérer le calcul d'heures lors du calcul de l'heure géographique, il faut faire le calcul en seconde puis le convertire en format HH:MM:SS, fonction n°9 conversionS()
- [ ] Compiler les fonctions qui sont sur la page *traitement.html* vers *script.js*
- Nicolas :
- [x] Fonction n°1, elle est constituée de getLocation() et getLongitude(position).
- [x] Fonction n°6, elle est constituée de heure()
- [x] Code n°5, nous n'avons pas eu besoin de fonction pour cela
- [x] Implémentation de l'api *Leaflet* et d'une carte
- [x] Continue d'implémenter les fonctions js sur la page de traitement
- [x] Mettre à jour la carte *LeafLet* avec les nouvelles coordonnées, fonction panMap()
- [ ] Faire apparaître l'écart de temps (en prenant en compte le fuseau horaire) sur la page traitement
___
## Problèmes
- Implémentation de l'actualisation des heures - *Fait dans le fichier html actualisation_heure.html*
- Mettre à jour la carte en fond avec les coordonnées, grâce à l'api *LeafLet* - *Résolu avec la fonction pan Map*
___
## Le Cahier des charges
*Projet Heure_Reelle.pdf* => présentation du projet et des contraintes du projet
Le projet est un site web qui sera fait à l'aide d'html/css, du php et du javascript (si l'on en a besoin).
### Les fichiers qui forment le site :
  - la page d'**acceuil** qui présentera le formulaire en charge de récupérer les informations nécessairent pour le traitement des données
  - la page de **traitement** des informations qui donnera au moins :
    - l'heure qu'il devrait être à la latitude récupérée
    - l'heure locale de l'utilisateur
    - la différence de temps entre ces deux heures
    - *plus à déterminer*
  - le fichier **css** qui regroupera les styles 
  - utilisation de l'api *Leaflet* pour génerer une carte *opeenstreetmap*
  - *si le temps nous le permet, d'autres pages pourront être ajoutées*
___
## Les étapes à suivre
1. Etape en cours
   - Création des fichiers essentiels du projet et implémentation des fonctions:
     - la page d'**acceuil** : *acceuil.html*
     - la page de **traitement** : *traitement.html*
     - le fichier **css** : *style.css* 
     - le fichier **script** : *script.js*

___
![CLOCK](clock.gif) 
