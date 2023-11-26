if (window.netlifyIdentity) {
    window.netlifyIdentity.on('login', user => {
      console.log('Logged in as:', user.email);
    });
  }