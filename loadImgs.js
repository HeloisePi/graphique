import fs from 'fs'


const imagesDirectory = 'static/images/painting'; // Chemin vers le dossier des images

// Supprime le contenu existant du fichier imagesList.js
fs.writeFileSync('src/imagesList.js', '', 'utf-8');

fs.readdir(imagesDirectory, (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du dossier des images', err);
    return;
  }
  files.forEach(theme => {
    fs.readdir( 'static/images/painting/'+theme, (err, files)=> {
      if (err) {
        console.error('Erreur lors de la lecture du dossier des images', err);
        return;
      }
      let imageFiles = files.filter(file => /\.(jpg|png|gif|jpeg|webp)$/.test(file)); 
      let data = imageFiles.map((imageFile) => (`/images/painting/${theme}/${imageFile}`));  
      let imagesList = JSON.stringify(data);
      fs.appendFileSync('src/imagesList.js', `export const ${theme}  = ${imagesList};`, 'utf-8');
    })
  });
});