import { app } from "./index.js";
import supertest from "supertest";

const request = supertest(app);


let token = '';

// beforeAll(); // login here and save the token 

describe('test setup', () => {
    beforeAll(async () => {
        const res = await request
            .post('/login')
            .send({ username: 'sonu', password: 'sonu' });
        token = res.body.token;
    });
});


describe('it should pass tests - ', () => {

    it('should find the number of employees', async () => {
        const res = await request
            .get('/employees');
        console.log(res);
        expect(res.status).toBe(200);
        expect(res.body.size).toBe(45);
    });

});

// describe('it should spass', () => {
//   it('should pass', () => {
//     expect(5 + 5).toBe(10);
//   });

//   it('should succeed login', async () => {
//     const res = await request
//       .post('/login')
//       .send({ username: 'sonu', password: 'sonu'});
//     expect(res.status).toBe(200);
//     expect(res.body.message).toBe('login successful');
//     expect(res.body.token).toBeTruthy();
//   });

//   it('should fail login', async () => {
//     const res = await request
//       .post('/login')
//       .send({ username: 'sonu', password: 'asdf'});
//     expect(res.status).not.toBe(200);
//     expect(res.body.message).toBe('Invalid credentials');
//   });
// });
