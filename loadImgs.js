import fs from 'fs';

const imagesDirectory = 'static/images/painting'; // Chemin vers le dossier des images

// Supprime le contenu existant du fichier imagesList.js
fs.writeFileSync('src/imagesList.js', '', 'utf-8');

fs.readdir(imagesDirectory, (err, themes) => {
  if (err) {
    console.error('Erreur lors de la lecture du dossier des images', err);
    return;
  }

  themes.forEach(theme => {
    const themePath = `${imagesDirectory}/${theme}`;

    // Vérifier si le chemin est un répertoire
    if (fs.statSync(themePath).isDirectory()) {
      fs.readdir(themePath, (err, files) => {
        console.log(themePath);
        if (err) {
          console.error('Erreur lors de la lecture du dossier des images', err);
          return;
        }

        // Ajouter ".webp" à la liste des extensions autorisées
        let imageFiles = files.filter(file => /\.(jpg|png|gif|jpeg|webp)$/.test(file));
        let data = imageFiles.map(imageFile => (`/images/painting/${theme}/${imageFile}`));
        let imagesList = JSON.stringify(data);
        fs.appendFileSync('src/imagesList.js', `export const ${theme}  = ${imagesList};`, 'utf-8');
      });
    }
  });
});
