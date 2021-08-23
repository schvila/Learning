const path = require('path');

const express = require('express');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

// Express v4.16.0 and higher
// --------------------------
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://standa:rnEZ3rjw3lf9J7Bh@cluster0.5tfx5.mongodb.net/shop?retryWrites=true',
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(result => {
    console.log('Finding user Max');
    User.findOne().then(user => {
      if (!user) {
        console.log('User not found.');
        const user = new User({
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    console.log('Listen on port 3000');
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
