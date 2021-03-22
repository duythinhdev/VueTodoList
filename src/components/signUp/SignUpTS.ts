import {Vue, Options} from "vue-class-component";
import firebase from "firebase/app";
import "firebase/auth";

export default interface iTest {
    email: string,
    password: string,
    error: string,
}

export class SignUpTS extends Vue {

    public  formItems:iTest = {
        email:"",
        password:"",
        error: "",
    }
    public onchange () {
        console.log("email,password", this.formItems.email,this.formItems.password)
    }

    public async signUp() {
        console.log("emailsignUp,passwordsignUp", this.formItems.email,this.formItems.password);
        const self = this;
        try{
            const user  = firebase.auth().createUserWithEmailAndPassword(this.formItems.email,this.formItems.password);
            console.log(user);
        }catch (e){
            console.log(e)
        }
    }
}
