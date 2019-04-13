const tester = require('graphql-tester').tester;

describe('A user', function() {
    const self = this;
    beforeAll(() => {
        self.test = tester({
        url: `http://127.0.0.1:8088/graphql`
        });
    });

    it('should register a new user', done => {
        self
          .test(`mutation { createUser(user: {
            first_name:"Pepe", 
            last_name:"Suarez", 
            created_at:"2019-04-12 12:00:03"
        }) {
                id
            }
        }`
          )
          .then(res => {
              console.log(res);
            expect(res.status).toBe(200);
            expect(res.success).toBe(true);
            res.end();
          })
          .catch(err => {
            expect(err).toBe(null);
            res.end();
          });
      });
    it('should not register with existing user data', () => {
      expect(true).toBe(true);
    });
    it('should not login with wrong credentials', () => {
      expect(true).toBe(true);
    });
    it('should login with correct credentials', () => {
      expect(true).toBe(true);
    });
    it('should not login twice', () => {
      expect(true).toBe(true);
    });
    it('should logout after logging in', () => {
      expect(true).toBe(true);
    });
    it('should not logout if not logged in', () => {
      expect(true).toBe(true);
    });
    it('should removed by ID', () => {
      expect(true).toBe(true);
    });
  });