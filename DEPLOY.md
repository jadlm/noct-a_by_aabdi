# 🚀 Guide de Déploiement - DouceNuit

## Méthode la PLUS SIMPLE : Netlify Drop

### Étape 1 : Préparer les fichiers
1. Assurez-vous que tous vos fichiers sont dans le dossier `pyjama`
2. Vérifiez que vous avez :
   - ✅ index.html
   - ✅ shop.html
   - ✅ cart.html
   - ✅ style.css
   - ✅ app.js

### Étape 2 : Déployer sur Netlify
1. Allez sur : https://app.netlify.com/drop
2. **Glissez-déposez** votre dossier `pyjama` entier
3. Attendez quelques secondes...
4. **C'est fait !** Votre site est en ligne 🎉

Votre URL sera : `https://random-name-123.netlify.app`

### Étape 3 : Personnaliser l'URL
1. Dans Netlify, allez dans **Site settings**
2. Cliquez sur **Change site name**
3. Choisissez un nom comme : `doucenuite` ou `pyjamas-filles`
4. Votre nouvelle URL : `https://doucenuite.netlify.app`

---

## Méthode avec GitHub (Recommandée pour les mises à jour)

### Étape 1 : Créer un repository GitHub
1. Allez sur https://github.com
2. Cliquez sur **New repository**
3. Nom : `doucenuite` ou `pyjamas-site`
4. Cochez **Public** (ou Private si vous avez GitHub Pro)
5. Cliquez **Create repository**

### Étape 2 : Uploader les fichiers
**Option A - Via l'interface GitHub :**
1. Dans votre nouveau repository, cliquez **uploading an existing file**
2. Glissez tous vos fichiers
3. Cliquez **Commit changes**

**Option B - Via Git (Terminal) :**
```bash
cd pyjama
git init
git add .
git commit -m "Initial commit - Site DouceNuit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/doucenuite.git
git push -u origin main
```

### Étape 3 : Connecter à Netlify
1. Allez sur https://app.netlify.com
2. Cliquez **Add new site** > **Import an existing project**
3. Choisissez **GitHub**
4. Autorisez Netlify à accéder à GitHub
5. Sélectionnez votre repository `doucenuite`
6. Cliquez **Deploy site**

**Avantage :** Chaque fois que vous modifiez et poussez sur GitHub, le site se met à jour automatiquement !

---

## Méthode Vercel (Alternative rapide)

### Via l'interface web :
1. Allez sur https://vercel.com
2. Créez un compte (ou connectez-vous avec GitHub)
3. Cliquez **Add New Project**
4. Importez votre repository GitHub OU
5. Glissez-déposez votre dossier
6. Cliquez **Deploy**

---

## Méthode GitHub Pages (100% Gratuit)

### Étape 1 : Créer le repository
1. Créez un repository GitHub nommé : `doucenuite` (ou autre)
2. Uploadez tous vos fichiers

### Étape 2 : Activer GitHub Pages
1. Allez dans **Settings** de votre repository
2. Dans le menu de gauche, cliquez **Pages**
3. Sous **Source**, sélectionnez :
   - Branch: `main`
   - Folder: `/ (root)`
4. Cliquez **Save**

### Étape 3 : Accéder à votre site
Votre site sera disponible sur :
`https://VOTRE_USERNAME.github.io/doucenuite`

**Note :** Cela peut prendre quelques minutes pour être actif.

---

## Configuration Post-Déploiement

### 1. Modifier le numéro WhatsApp
Ouvrez `app.js` et cherchez (ligne ~850) :
```javascript
const whatsappNumber = '212612345678';
```
Remplacez par votre vrai numéro (format : 212612345678 sans + ni espaces)

### 2. Modifier l'email de contact
Dans `index.html`, `shop.html`, et `cart.html`, cherchez :
```html
contact@doucenuite.ma
```
Remplacez par votre email

### 3. Ajouter vos vraies images
Remplacez les URLs d'images placeholder par vos vraies images :
- Soit uploader sur un service comme Imgur, Cloudinary
- Soit les mettre dans un dossier `images/` et référencer localement

---

## Vérifications Finales

Avant de partager votre site, vérifiez :

- [ ] Le numéro WhatsApp est correct
- [ ] L'email de contact est correct
- [ ] Toutes les pages fonctionnent (index, shop, cart)
- [ ] Le panier fonctionne
- [ ] Les filtres de recherche fonctionnent
- [ ] Le site est responsive sur mobile
- [ ] Les images s'affichent correctement

---

## Support

Si vous rencontrez des problèmes :
1. Vérifiez la console du navigateur (F12)
2. Vérifiez que tous les fichiers sont bien uploadés
3. Assurez-vous que les chemins des fichiers sont corrects

---

**Bon déploiement ! 🎉**
