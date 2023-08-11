import * as usersDao from "./users-dao.js";


const AuthController = (app) => {
    const register = (req, res) => {
        const username = req.body.username;
        const user = usersDao.findUserByUsername(username);
        if (user) {
          res.sendStatus(409); // Conflict status code
          return;
        }
        const result = usersDao.createUser(req.body);
        const newUser = result.user; // Extract the user object from the result
        req.session["currentUser"] = newUser; // Store the user in the session
        res.json(newUser); // Send the user object as the response
      };
      
      const login = (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = usersDao.findUserByCredentials(username, password);
        if (user) {
          req.session["currentUser"] = user; // User found, store in session
          res.json(user);
        } else {
          res.sendStatus(401); // Unauthorized status code
        }
      };
      
      const profile = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
          res.sendStatus(404); // Not Found status code
          return;
        }
        res.json(currentUser); // Return the current user's details
      };
      
      const logout =  (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
      };
     
      
 const update   = (req, res) => { };
 app.post("/api/users/register", register);
 app.post("/api/users/login",    login);
 app.post("/api/users/profile",  profile);
 app.post("/api/users/logout",   logout);
 app.put ("/api/users",          update);
};
export default AuthController;