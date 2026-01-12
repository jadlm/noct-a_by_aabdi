# 📸 Guide : Comment Ajouter des Images

## 🎯 3 Méthodes pour Ajouter des Images

### Méthode 1 : Images Locales (Recommandée) ⭐

#### Étape 1 : Créer un dossier images
1. Dans votre dossier `pyjama`, créez un nouveau dossier nommé `images`
2. Placez toutes vos images de pyjamas dans ce dossier

**Structure :**
```
pyjama/
├── images/
│   ├── pyjama-licorne.jpg
│   ├── pyjama-etoiles.jpg
│   ├── pyjama-fleurs.jpg
│   └── ...
├── index.html
├── shop.html
└── app.js
```

#### Étape 2 : Nommer vos images
Utilisez des noms simples et clairs :
- ✅ `pyjama-licorne.jpg`
- ✅ `pyjama-etoiles.jpg`
- ✅ `pyjama-1.jpg`
- ❌ Évitez : `IMG_2024_01_15_123456.jpg` (trop long)

#### Étape 3 : Modifier app.js
Ouvrez `app.js` et trouvez la fonction `initializeProducts()` (ligne ~45).

**Exemple :**
```javascript
{
    id: 1,
    name: "Pyjama Licorne Magique",
    price: 29.99,
    image: "images/pyjama-licorne.jpg",  // ← Chemin vers votre image
    description: "Pyjama doux avec motif licorne...",
    stock: { S: 15, M: 12, L: 10, XL: 8 }
}
```

**Format des chemins :**
- ✅ `images/pyjama-licorne.jpg`
- ✅ `images/pyjama-licorne.png`
- ✅ `images/pyjama-licorne.webp`

---

### Méthode 2 : Images Hébergées en Ligne (Cloud)

#### Services gratuits recommandés :
1. **Imgur** : https://imgur.com
2. **Cloudinary** : https://cloudinary.com
3. **ImgBB** : https://imgbb.com

#### Étapes :
1. Uploadez votre image sur un de ces services
2. Copiez l'URL de l'image (ex: `https://i.imgur.com/abc123.jpg`)
3. Collez l'URL dans `app.js` :

```javascript
{
    id: 1,
    name: "Pyjama Licorne Magique",
    price: 29.99,
    image: "https://i.imgur.com/abc123.jpg",  // ← URL complète
    description: "...",
    stock: { S: 15, M: 12, L: 10, XL: 8 }
}
```

---

### Méthode 3 : Utiliser les Images Existantes

Vous avez déjà des images dans votre dossier :
- `17XPA2.1.responsive-lg.centre.png`
- `apple_iphone_17_pro_max_256gb_cosmic_orange_ac89347_67843 (1).webp`
- `iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-WW_60f2ba22-0c81-47ca-bb17-39fda1483d97.webp`

**Utilisez-les directement :**
```javascript
{
    id: 1,
    name: "Pyjama Licorne Magique",
    price: 29.99,
    image: "17XPA2.1.responsive-lg.centre.png",  // ← Nom du fichier
    description: "...",
    stock: { S: 15, M: 12, L: 10, XL: 8 }
}
```

---

## 📝 Instructions Détaillées

### Option A : Modifier les Produits Existants

1. **Ouvrez `app.js`**
2. **Trouvez la fonction `initializeProducts()`** (ligne ~45)
3. **Pour chaque produit, modifiez la ligne `image:`**

**Avant :**
```javascript
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?...",
```

**Après (image locale) :**
```javascript
image: "images/pyjama-etoiles.jpg",
```

**Ou (image existante) :**
```javascript
image: "17XPA2.1.responsive-lg.centre.png",
```

### Option B : Ajouter un Nouveau Produit

1. **Ouvrez `app.js`**
2. **Trouvez la fonction `initializeProducts()`**
3. **Ajoutez un nouvel objet dans le tableau :**

```javascript
{
    id: 9,  // ← Nouveau ID (incrémentez)
    name: "Pyjama Nouveau Modèle",
    price: 32.99,
    image: "images/pyjama-nouveau.jpg",  // ← Votre image
    description: "Description du nouveau pyjama",
    stock: { S: 10, M: 10, L: 10, XL: 10 }
}
```

---

## 🖼️ Formats d'Images Supportés

- ✅ **JPG/JPEG** : `.jpg`, `.jpeg` (recommandé pour photos)
- ✅ **PNG** : `.png` (recommandé pour images avec transparence)
- ✅ **WebP** : `.webp` (meilleure compression, moderne)
- ✅ **GIF** : `.gif` (pour animations)

---

## 📏 Tailles Recommandées

Pour de meilleures performances :
- **Largeur** : 500-800 pixels
- **Hauteur** : 500-800 pixels
- **Ratio** : 1:1 (carré) ou 4:3
- **Poids** : Moins de 200 KB par image

**Outils pour redimensionner :**
- En ligne : https://www.iloveimg.com/resize-image
- Windows : Paint 3D
- Mac : Aperçu

---

## ✅ Checklist

- [ ] Images nommées clairement
- [ ] Images dans le bon dossier (`images/`)
- [ ] Chemins corrects dans `app.js`
- [ ] Format d'image supporté (.jpg, .png, .webp)
- [ ] Images testées dans le navigateur

---

## 🔧 Résolution de Problèmes

### L'image ne s'affiche pas
1. Vérifiez le chemin (respectez la casse : `Images` ≠ `images`)
2. Vérifiez que le fichier existe
3. Vérifiez l'extension (.jpg, .png, etc.)
4. Ouvrez la console (F12) pour voir les erreurs

### L'image est floue
- Utilisez une image de meilleure qualité
- Vérifiez la taille (minimum 500x500 pixels)

### L'image est trop lourde
- Compressez l'image : https://tinypng.com
- Utilisez le format WebP

---

## 💡 Astuces

1. **Nommez vos images** de manière cohérente :
   - `pyjama-1.jpg`, `pyjama-2.jpg`, etc.
   - Ou : `licorne.jpg`, `etoiles.jpg`, etc.

2. **Organisez par catégories** (optionnel) :
   ```
   images/
   ├── licornes/
   ├── etoiles/
   └── fleurs/
   ```

3. **Utilisez des images optimisées** pour un chargement plus rapide

---

**Besoin d'aide ?** Vérifiez la console du navigateur (F12) pour les erreurs.
