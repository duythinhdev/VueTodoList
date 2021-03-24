import {Vue} from "vue-class-component";
import firebase from "firebase/app";
import "firebase/auth";
interface Items {
    email:string,
    password:string
}
export class Logins extends Vue{
    public formItems:Items = {
        email:"",
        password:""
    }
    public login(){
        try{
            const user = firebase.auth().signInWithEmailAndPassword(this.formItems.email,this.formItems.password);
            console.log(user)
        }
        catch (e){
            console.log(e);
        }
    }

}
