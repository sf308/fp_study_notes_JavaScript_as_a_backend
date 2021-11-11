const request = require('supertest');
const server = require('../server');


describe('API endpoints', () => {
    let api
    beforeAll(() => {
        api = server.startServer(5000, 'localhost', 'Test server running on port 5000');
    });

    afterAll(done => {
        console.log('Gracefully stopping test server');
        api.close(done)
    })

    it('responds to /', done => {
        request(api)
            .get('/')
            .expect(200, done);
    });

    it('responds to GET /cats', done => {
        request(api)
            .get('/cats')
            .expect(200, done);
    });

    it('responds to DELETE /cats', done => {
        request(api)
            .delete('/cats')
            .expect(204, done);
    });

    it('404 everything else', done => {
        request(api)
            .get('/bob')
            .expect(404, done);
    });
});