const settings = {
    theme: null,
    language: 'English'
  };
  
  const theme = settings.theme ?? 'Default Theme';
  const language = settings.language ?? 'Default Language';
  const fontSize = settings.fontSize ?? '14px';
  
  console.log(theme);      // Default Theme
  console.log(language);   // English
  console.log(fontSize);   // 14px
  