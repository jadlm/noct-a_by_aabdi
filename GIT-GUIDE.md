# 📦 Guide Git - DouceNuit

## ✅ Étape 1 : Commit Initial (FAIT !)

Votre premier commit a été créé avec succès ! Tous vos fichiers sont maintenant suivis par Git.

---

## 🚀 Étape 2 : Créer un Repository GitHub

### Option A : Via l'interface GitHub (Recommandé)

1. **Allez sur** https://github.com
2. **Cliquez** sur le bouton **"+"** en haut à droite
3. **Sélectionnez** "New repository"
4. **Nommez** votre repository : `doucenuite` ou `pyjamas-site`
5. **Ne cochez PAS** "Initialize with README" (vous avez déjà un README)
6. **Cliquez** sur "Create repository"

### Option B : Via GitHub CLI (si installé)

```powershell
gh repo create doucenuite --public
```

---

## 🔗 Étape 3 : Connecter votre Projet à GitHub

Après avoir créé le repository sur GitHub, vous verrez des instructions. Exécutez ces commandes :

```powershell
# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/doucenuite.git
git branch -M main
git push -u origin main
```

**Exemple :**
```powershell
git remote add origin https://github.com/johndoe/doucenuite.git
git branch -M main
git push -u origin main
```

---

## 📝 Commandes Git Utiles

### Voir l'état des fichiers
```powershell
git status
```

### Ajouter tous les fichiers modifiés
```powershell
git add .
```

### Faire un commit
```powershell
git commit -m "Description de vos modifications"
```

### Envoyer sur GitHub
```powershell
git push
```

### Voir l'historique
```powershell
git log
```

---

## 🔄 Workflow Typique

Chaque fois que vous modifiez votre site :

1. **Vérifier les changements :**
   ```powershell
   git status
   ```

2. **Ajouter les fichiers modifiés :**
   ```powershell
   git add .
   ```

3. **Créer un commit :**
   ```powershell
   git commit -m "Ajout de nouvelles images"
   ```

4. **Envoyer sur GitHub :**
   ```powershell
   git push
   ```

---

## 🌐 Déployer avec Netlify depuis GitHub

Une fois votre code sur GitHub :

1. **Allez sur** https://app.netlify.com
2. **Cliquez** sur "Add new site" > "Import an existing project"
3. **Choisissez** GitHub
4. **Autorisez** Netlify à accéder à GitHub
5. **Sélectionnez** votre repository `doucenuite`
6. **Cliquez** sur "Deploy site"

**Avantage :** Chaque fois que vous faites `git push`, votre site se met à jour automatiquement !

---

## ⚠️ Fichiers à NE PAS commiter (déjà dans .gitignore)

- Fichiers système (`.DS_Store`, `Thumbs.db`)
- Fichiers temporaires
- Logs

---

## 🆘 Problèmes Courants

### Erreur : "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/VOTRE_USERNAME/doucenuite.git
```

### Erreur : "failed to push"
Vérifiez que vous êtes connecté à GitHub et que le repository existe.

### Oublier un fichier dans le commit
```powershell
git add fichier-oublie.html
git commit --amend --no-edit
git push --force
```

---

## 📚 Ressources

- **Documentation Git** : https://git-scm.com/doc
- **GitHub Guides** : https://guides.github.com
- **Netlify Docs** : https://docs.netlify.com

---

**Votre projet est maintenant prêt pour GitHub ! 🎉**
