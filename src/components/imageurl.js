// src/utils/fixImageUrl.js
export function fixImageUrl(imagePath) {
    if (!imagePath) return '';
  
    const baseURL = "https://yourwebsite.com"; // 🔁 change to your real domain
  
    // If it's already an absolute URL, just return it
    if (imagePath.startsWith("http")) return imagePath;
  
    // Remove leading './' or '/'
    const cleanedPath = imagePath.replace(/^\.?\//, '');
  
    return `${baseURL}/${cleanedPath}`;
  }
  