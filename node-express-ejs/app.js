const path = require('path');

const express = require('express');
const app = express();

// Express v4.16.0 and higher
// --------------------------
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));



app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
