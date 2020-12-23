const express = require('express');
const subdomain = require('express-subdomain');
const logger = require('../../logger');
const routes = require('./routes');

const router = express.Router();

const portal = express.Router();
const ctr = express.Router();

// Create subdomains
logger.info('[JUXT-WEB] Creating \'Wii U\' subdomain');
router.use(subdomain('portal.olv', portal));

logger.info('[JUXT-WEB] Creating \'3DS\' subdomain');
router.use(subdomain('ctr.olv', ctr));

// Setup routes
portal.use('/titles/show', routes.PORTAL_SHOW);
portal.use('/communities', routes.PORTAL_COMMUNITIES);
portal.use('/users', routes.PORTAL_USER);
portal.use('/post', routes.PORTAL_POST);
portal.use('/', routes.PORTAL_WEB);

ctr.use('/titles/show', routes.CTR_SHOW);
ctr.use('/communities', routes.CTR_COMMUNITIES);
ctr.use('/users', routes.CTR_USER);
ctr.use('/', routes.CTR_WEB);

module.exports = router;