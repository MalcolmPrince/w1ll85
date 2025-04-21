fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const allowed = ['NL', 'DE', 'AT', 'BE', 'DK', 'CZ', 'HU'];
    if (!allowed.includes(data.country_code)) {
      document.body.innerHTML = '<h1>Access Restricted</h1>';
    }
  });
