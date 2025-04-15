(() => {
    document
        .querySelector('form.footer-inner')
        .addEventListener('submit', e => {
            e.preventDefault();
        
            new FormData(e.currentTarget).forEach((value, name) =>
                console.log(`${name}: ${value}`),
            );
        });
})();
