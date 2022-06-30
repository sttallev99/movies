import home from './controllers/home.js';
import register from './controllers/register.js';
import login from './controllers/login.js';
import catalog, { create, deatils } from './controllers/movies.js';

window.addEventListener('load', () => {
    const app = Sammy('#container', function() {
        this.use('Handlebars', 'hbs');
        this.get('/', home);
        this.get('index.html', home);
        this.get('#/home', home);

        this.get('#/register', register);

        this.get('#/login', login);

        this.get('#/catalog', catalog);

        this.get('#/create', create);
        
        this.get('#/details/:id', deatils);
    });

    app.run();
});