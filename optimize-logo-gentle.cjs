const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeLogoGentle() {
  try {
    const inputPath = path.join(__dirname, 'src/assets/logo-konsul.png');
    const outputPath = path.join(__dirname, 'src/assets/logo-konsul-optimized.png');
    
    // Check if original exists
    if (!fs.existsSync(inputPath)) {
      console.log('Original logo not found');
      return;
    }

    // Get original file size
    const originalStats = fs.statSync(inputPath);
    console.log(`Original size: ${(originalStats.size / 1024).toFixed(2)} KB`);

    // Gentle optimization - keep original size but optimize compression
    await sharp(inputPath)
      .png({ 
        quality: 95,
        compressionLevel: 6,
        adaptiveFiltering: false,
        force: true,
        palette: true
      })
      .toFile(outputPath);

    // Get optimized file size
    const optimizedStats = fs.statSync(outputPath);
    console.log(`Optimized size: ${(optimizedStats.size / 1024).toFixed(2)} KB`);
    console.log(`Savings: ${((originalStats.size - optimizedStats.size) / 1024).toFixed(2)} KB`);
    console.log(`Quality preserved: 95%`);
    
    // Replace original with optimized
    fs.copyFileSync(outputPath, inputPath);
    fs.unlinkSync(outputPath);
    
    console.log('Logo optimized with preserved quality!');
  } catch (error) {
    console.error('Error optimizing logo:', error);
  }
}

optimizeLogoGentle();
