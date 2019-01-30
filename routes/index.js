import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Nosotros. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros' });
});
 
/* Servicios. */
router.get('/servicios', function(req, res, next) {
  res.render('servicios', { title: 'Servicios' });
});
 
/* Contacto. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});
 
export default router;
