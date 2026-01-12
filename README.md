# 🌙 DouceNuit - Boutique de Pyjamas pour Filles

Site e-commerce moderne pour la vente de pyjamas pour filles au Maroc.

## 🚀 Déploiement Rapide

### Option 1 : Netlify (Recommandé - Gratuit)

1. **Créer un compte sur [Netlify](https://www.netlify.com/)**
2. **Glisser-déposer** le dossier du projet sur [app.netlify.com/drop](https://app.netlify.com/drop)
3. Votre site sera en ligne en quelques secondes !

**Ou via Git :**
```bash
# Créer un repository GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE_USERNAME/doucenuite.git
git push -u origin main

# Puis connecter Netlify à votre repository GitHub
```

### Option 2 : Vercel (Gratuit)

1. Installer Vercel CLI : `npm i -g vercel`
2. Dans le dossier du projet : `vercel`
3. Suivre les instructions

### Option 3 : GitHub Pages (Gratuit)

1. Créer un repository GitHub
2. Uploader tous les fichiers
3. Aller dans Settings > Pages
4. Sélectionner la branche `main` et le dossier `/root`
5. Votre site sera disponible sur : `https://VOTRE_USERNAME.github.io/doucenuite`

### Option 4 : Hébergement Traditionnel (cPanel, FTP)

1. Compresser tous les fichiers (index.html, shop.html, cart.html, style.css, app.js)
2. Uploader via FTP ou cPanel File Manager
3. Extraire dans le dossier `public_html` ou `www`

## 📁 Structure du Projet

```
pyjama/
├── index.html          # Page d'accueil
├── shop.html           # Page boutique
├── cart.html           # Page panier
├── style.css           # Styles CSS
├── app.js              # JavaScript principal
└── README.md           # Ce fichier
```

## ⚙️ Configuration

### Numéro WhatsApp
Modifiez le numéro WhatsApp dans `app.js` ligne ~850 :
```javascript
const whatsappNumber = '212612345678'; // Remplacez par votre numéro
```

### Email de contact
Modifiez l'email dans les fichiers HTML (footer) :
```html
contact@doucenuite.ma
```

## ✨ Fonctionnalités

- ✅ Catalogue de produits avec images
- ✅ Filtres de recherche (taille, prix)
- ✅ Panier d'achat avec localStorage
- ✅ Commande via WhatsApp
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations et transitions fluides
- ✅ Gestion des stocks en temps réel

## 🛠️ Technologies Utilisées

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript (Vanilla)
- Font Awesome (Icônes)
- Google Fonts (Poppins, Dancing Script)

## 📱 Compatibilité

- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile (iOS Safari, Chrome Mobile)

## 📝 Notes Importantes

1. **LocalStorage** : Les données sont stockées localement dans le navigateur
2. **Images** : Les images par défaut utilisent des placeholders. Remplacez-les par vos vraies images
3. **HTTPS** : Recommandé pour la sécurité (Netlify/Vercel le fournissent automatiquement)

## 🔒 Sécurité

- Pas de données sensibles stockées
- Validation côté client uniquement
- Pour la production, ajoutez une validation côté serveur

## 📞 Support

Pour toute question ou problème, contactez le développeur.

---

**Fait avec ❤️ pour DouceNuit**
