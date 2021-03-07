import { Options, Vue } from 'vue-class-component';
import HelloWorld from '../HelloWord/HelloWorld.vue';

@Options({
    components: {
        HelloWorld,
    },
    data(){

    }
})

export class AppTS extends Vue{

    public variable:number = 1 ;

    public currentProfile:number = 2;

    public clickhandle(): void{
        let ten = 22;
        let tuoi  = 55;
        var sum = tuoi + ten;
        alert(sum)
    }
}
