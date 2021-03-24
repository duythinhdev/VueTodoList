import {Vue, Options} from "vue-class-component";
import firebase from "firebase/app";
import "firebase/auth";
import Loading from "../../components/Loading/Loading.vue";

interface iTest {
    email: string,
    password: string,
    error: string,
}
@Options({
    components: {
        Loading
    },
    data: () => ({
        flag: false as boolean,
    }),
})

export class SignUpTS extends Vue {
    public formItems:iTest = {
        email:"",
        password:"",
        error: "",
    }
    public onchange () {
        console.log("email,password", this.formItems.email,this.formItems.password)
    }
    public flag:boolean = false;
    public async signUp() {
        try{
            console.log("emailsignUp,passwordsignUp", this.formItems.email,this.formItems.password);
            const user  = await firebase.auth().createUserWithEmailAndPassword(this.formItems.email,this.formItems.password);
            this.flag = true;
        }
        catch (e)
        {
            console.log(e);
        }
    }
}
