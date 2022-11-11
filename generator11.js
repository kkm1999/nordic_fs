
class NewUser{
    #login(){
        console.log("login sucessfull");
    }
    #logout(){
        console.log("You have logout");
    }

*Credentialflow(){
    yield this.#login();
    yield this.#logout();
}
}

const newuser=new NewUser()
const credential=newuser.Credentialflow()
credential.next()
credential.next()
