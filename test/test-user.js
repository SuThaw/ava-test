const { test } = require('ava');
const request = require('supertest');
const app = require('../index');

test('user create - should return status 200', async t => {
    const res = await request(app)
                        .post('/users')
                        .send({name: 'thaw'});

   t.is(res.status,200, '200 must be');
    
    
            
    
});
