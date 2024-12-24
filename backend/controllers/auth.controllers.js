

async function signup(req,res) {
    res.send("Signup page");
}
async function login(req,res) {
    res.send("login page");
}
async function logout(req,res) {
    res.send("Logout page");
}

module.exports = {signup,login,logout};


