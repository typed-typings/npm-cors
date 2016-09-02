/// <reference path="../bundle.d.ts" />

import cors = require('cors');
import assert = require('assert');

const middleware = cors();

assert.equal(typeof middleware, 'function');
