const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeLogo() {
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

    // Optimize the image
    await sharp(inputPath)
      .resize(200, 40, { 
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ 
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(outputPath);

    // Get optimized file size
    const optimizedStats = fs.statSync(outputPath);
    console.log(`Optimized size: ${(optimizedStats.size / 1024).toFixed(2)} KB`);
    console.log(`Savings: ${((originalStats.size - optimizedStats.size) / 1024).toFixed(2)} KB`);
    
    // Replace original with optimized
    fs.copyFileSync(outputPath, inputPath);
    fs.unlinkSync(outputPath);
    
    console.log('Logo optimized successfully!');
  } catch (error) {
    console.error('Error optimizing logo:', error);
  }
}

optimizeLogo();

