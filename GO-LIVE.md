# 🚀 GO LIVE - DouceNuit

## ⚡ DÉPLOIEMENT EN 2 MINUTES (Méthode la plus simple)

### Étape 1 : Aller sur Netlify Drop
👉 **https://app.netlify.com/drop**

### Étape 2 : Glisser-déposer votre dossier
1. Ouvrez votre dossier `pyjama` dans l'explorateur Windows
2. Sélectionnez TOUS les fichiers :
   - index.html
   - shop.html
   - cart.html
   - style.css
   - app.js
   - (et les images si vous en avez)
3. **Glissez-déposez** le tout sur la page Netlify Drop
4. Attendez 10-20 secondes...

### Étape 3 : C'est fait ! 🎉
Votre site est maintenant en ligne !

Vous obtiendrez une URL comme : `https://random-name-123.netlify.app`

---

## 🎯 Personnaliser votre URL

1. Dans Netlify, cliquez sur **Site settings**
2. Cliquez sur **Change site name**
3. Entrez : `doucenuite` ou `pyjamas-filles`
4. Votre nouvelle URL : `https://doucenuite.netlify.app`

---

## ⚙️ Configuration IMPORTANTE

### 1. Modifier le numéro WhatsApp

Ouvrez `app.js` et cherchez cette ligne (vers la ligne 850) :
```javascript
const whatsappNumber = '212612345678';
```

**Remplacez** `212612345678` par votre vrai numéro WhatsApp au format :
- Sans le + au début
- Sans espaces
- Format : 212612345678 (exemple pour le Maroc)

**Exemple :** Si votre numéro est +212 6 12 34 56 78
→ Écrivez : `212612345678`

### 2. Modifier l'email de contact

Dans les fichiers HTML (index.html, shop.html, cart.html), cherchez :
```html
contact@doucenuite.ma
```

Remplacez par votre email réel.

---

## 📱 Tester votre site

1. Ouvrez l'URL que Netlify vous a donnée
2. Testez toutes les pages :
   - ✅ Page d'accueil
   - ✅ Page boutique (filtres, recherche)
   - ✅ Page panier (ajout, modification, suppression)
   - ✅ Commande WhatsApp

---

## 🔄 Mettre à jour le site plus tard

### Option A : Re-upload sur Netlify Drop
- Modifiez vos fichiers localement
- Re-glissez-déposez sur Netlify Drop
- Le site se met à jour automatiquement

### Option B : Utiliser GitHub (Recommandé)
1. Créez un compte GitHub
2. Créez un nouveau repository
3. Uploadez vos fichiers
4. Connectez Netlify à GitHub
5. Chaque modification sur GitHub mettra à jour le site automatiquement

---

## ✅ Checklist avant de partager

- [ ] Numéro WhatsApp modifié et testé
- [ ] Email de contact modifié
- [ ] Toutes les pages fonctionnent
- [ ] Le panier fonctionne
- [ ] La commande WhatsApp fonctionne
- [ ] Le site est responsive (testez sur mobile)
- [ ] Les images s'affichent correctement

---

## 🆘 Problèmes courants

### Le site ne charge pas
- Vérifiez que tous les fichiers sont bien uploadés
- Vérifiez la console du navigateur (F12)

### WhatsApp ne fonctionne pas
- Vérifiez que le numéro est au bon format (sans + ni espaces)
- Testez le lien WhatsApp manuellement

### Les images ne s'affichent pas
- Vérifiez que les URLs des images sont correctes
- Utilisez des images hébergées (Imgur, Cloudinary) ou locales

---

## 📞 Besoin d'aide ?

Consultez le fichier `DEPLOY.md` pour des instructions détaillées.

---

**Votre site est prêt ! Partagez-le avec vos clients ! 🎉**
