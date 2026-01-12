# 📸 Comment Ajouter des Images - Guide Simple

## 🎯 Méthode la PLUS SIMPLE

### Étape 1 : Préparer vos images
1. Créez un dossier `images` dans votre dossier `pyjama`
2. Placez vos images de pyjamas dans ce dossier
3. Nommez-les simplement : `pyjama-1.jpg`, `pyjama-2.jpg`, etc.

### Étape 2 : Modifier app.js
1. Ouvrez le fichier `app.js`
2. Cherchez la ligne qui commence par `image:`
3. Remplacez l'URL par le chemin de votre image

**Exemple :**

**AVANT :**
```javascript
image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?...",
```

**APRÈS :**
```javascript
image: "images/pyjama-1.jpg",
```

---

## 📝 Instructions Détaillées

### Où modifier dans app.js ?

Ouvrez `app.js` et cherchez cette section (vers la ligne 45) :

```javascript
function initializeProducts() {
    const defaultProducts = [
        {
            id: 1,
            name: "Pyjama Licorne Magique",
            price: 29.99,
            image: "ICI ← MODIFIEZ CETTE LIGNE",
            description: "...",
            stock: { S: 15, M: 12, L: 10, XL: 8 }
        },
        // ... autres produits
    ];
}
```

### Exemples de chemins d'images

#### ✅ Image dans le dossier images/
```javascript
image: "images/pyjama-licorne.jpg",
image: "images/pyjama-etoiles.png",
image: "images/pyjama-fleurs.webp",
```

#### ✅ Image dans le même dossier (racine)
```javascript
image: "17XPA2.1.responsive-lg.centre.png",
image: "mon-image.jpg",
```

#### ✅ Image hébergée en ligne
```javascript
image: "https://i.imgur.com/abc123.jpg",
image: "https://example.com/image.jpg",
```

---

## 🖼️ Utiliser vos Images Existantes

Vous avez déjà ces images dans votre dossier :
- `17XPA2.1.responsive-lg.centre.png`
- `apple_iphone_17_pro_max_256gb_cosmic_orange_ac89347_67843 (1).webp`
- `iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-WW_60f2ba22-0c81-47ca-bb17-39fda1483d97.webp`

**Utilisez-les directement :**

```javascript
{
    id: 1,
    name: "Pyjama Licorne Magique",
    price: 29.99,
    image: "17XPA2.1.responsive-lg.centre.png",  // ← Utilisez le nom exact
    description: "...",
    stock: { S: 15, M: 12, L: 10, XL: 8 }
}
```

---

## 📁 Structure Recommandée

Créez cette structure :

```
pyjama/
├── images/                    ← Créez ce dossier
│   ├── pyjama-1.jpg          ← Vos images ici
│   ├── pyjama-2.jpg
│   └── pyjama-3.jpg
├── index.html
├── shop.html
├── cart.html
├── style.css
└── app.js
```

Puis dans `app.js` :
```javascript
image: "images/pyjama-1.jpg",
```

---

## 🔧 Résolution de Problèmes

### ❌ L'image ne s'affiche pas

1. **Vérifiez le chemin** :
   - Le nom du fichier doit être EXACT (majuscules/minuscules comptent)
   - Vérifiez l'extension : `.jpg`, `.png`, `.webp`

2. **Vérifiez que le fichier existe** :
   - Ouvrez votre dossier et vérifiez que l'image est bien là

3. **Testez dans le navigateur** :
   - Ouvrez la console (F12)
   - Regardez les erreurs en rouge

### ✅ Exemple de chemin correct

Si votre structure est :
```
pyjama/
├── images/
│   └── pyjama-licorne.jpg
└── app.js
```

Alors dans `app.js`, utilisez :
```javascript
image: "images/pyjama-licorne.jpg",
```

---

## 💡 Astuces

1. **Nommez simplement** : `pyjama-1.jpg` plutôt que `IMG_2024_01_15_123456.jpg`

2. **Utilisez des formats modernes** :
   - `.webp` = meilleure compression
   - `.jpg` = bon pour photos
   - `.png` = bon pour images avec transparence

3. **Optimisez vos images** :
   - Taille recommandée : 500x500 à 800x800 pixels
   - Poids : moins de 200 KB par image
   - Outil : https://tinypng.com

---

## 📋 Checklist

- [ ] Images préparées et nommées
- [ ] Dossier `images/` créé (si vous l'utilisez)
- [ ] Chemins modifiés dans `app.js`
- [ ] Testé dans le navigateur
- [ ] Images s'affichent correctement

---

## 🎬 Exemple Complet

Voici un exemple complet d'un produit avec image :

```javascript
{
    id: 1,
    name: "Pyjama Licorne Magique",
    price: 29.99,
    image: "images/pyjama-licorne.jpg",  // ← Votre image
    description: "Pyjama doux avec motif licorne, parfait pour des rêves magiques.",
    stock: { S: 15, M: 12, L: 10, XL: 8 }
}
```

---

**C'est tout ! Modifiez simplement la ligne `image:` dans `app.js` ! 🎉**
