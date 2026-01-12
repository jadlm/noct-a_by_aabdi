# 🚀 Héberger sur GitHub - Guide Complet

## 📋 Étapes pour Héberger votre Site

### Étape 1 : Créer un Compte GitHub (si vous n'en avez pas)

1. Allez sur https://github.com
2. Cliquez sur "Sign up"
3. Créez votre compte (gratuit)

---

### Étape 2 : Créer un Nouveau Repository

1. **Connectez-vous** à GitHub
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. **Remplissez le formulaire :**
   - **Repository name** : `doucenuite` (ou `pyjamas-site`)
   - **Description** : "Site e-commerce de pyjamas pour filles - DouceNuit"
   - **Visibilité** : Choisissez **Public** (gratuit) ou **Private**
   - **NE COCHEZ PAS** "Add a README file" (vous en avez déjà un)
   - **NE COCHEZ PAS** "Add .gitignore" (vous en avez déjà un)
5. Cliquez sur **"Create repository"**

---

### Étape 3 : Connecter votre Projet Local à GitHub

Après avoir créé le repository, GitHub vous montrera des instructions. 

**Copiez l'URL de votre repository** (elle ressemble à : `https://github.com/VOTRE_USERNAME/doucenuite.git`)

---

### Étape 4 : Exécuter les Commandes

Dans PowerShell, exécutez ces commandes (remplacez VOTRE_USERNAME) :

```powershell
# Ajouter le repository GitHub comme origine
git remote add origin https://github.com/VOTRE_USERNAME/doucenuite.git

# Renommer la branche en main (si nécessaire)
git branch -M main

# Envoyer votre code sur GitHub
git push -u origin main
```

**Vous devrez peut-être vous connecter à GitHub** (nom d'utilisateur + token)

---

### Étape 5 : Activer GitHub Pages (Hébergement Gratuit)

1. Allez sur votre repository GitHub
2. Cliquez sur **"Settings"** (en haut)
3. Dans le menu de gauche, cliquez sur **"Pages"**
4. Sous **"Source"**, sélectionnez :
   - **Branch** : `main`
   - **Folder** : `/ (root)`
5. Cliquez sur **"Save"**

**Votre site sera disponible sur :**
`https://VOTRE_USERNAME.github.io/doucenuite`

(Cela peut prendre quelques minutes)

---

## 🔐 Authentification GitHub

Si vous avez des problèmes de connexion :

### Option 1 : Token d'Accès Personnel (Recommandé)

1. GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Cliquez "Generate new token"
3. Donnez-lui un nom et cochez "repo"
4. Copiez le token
5. Utilisez-le comme mot de passe lors du `git push`

### Option 2 : GitHub CLI

```powershell
# Installer GitHub CLI (si pas déjà fait)
# Puis :
gh auth login
```

---

## ✅ Vérification

Après le push, vérifiez :

1. Allez sur `https://github.com/VOTRE_USERNAME/doucenuite`
2. Vous devriez voir tous vos fichiers
3. Attendez quelques minutes pour GitHub Pages
4. Visitez `https://VOTRE_USERNAME.github.io/doucenuite`

---

## 🔄 Mettre à Jour le Site

Chaque fois que vous modifiez votre site :

```powershell
git add .
git commit -m "Description des modifications"
git push
```

GitHub Pages se mettra à jour automatiquement (quelques minutes).

---

## 🆘 Problèmes Courants

### "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/VOTRE_USERNAME/doucenuite.git
```

### "failed to push"
- Vérifiez que le repository existe sur GitHub
- Vérifiez vos identifiants
- Utilisez un token d'accès personnel

### Le site ne s'affiche pas
- Attendez 5-10 minutes (première fois)
- Vérifiez Settings > Pages
- Vérifiez que le fichier `index.html` est à la racine

---

**Besoin d'aide ?** Consultez la documentation GitHub : https://docs.github.com
