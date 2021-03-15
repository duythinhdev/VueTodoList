import { Options, Vue } from 'vue-class-component';
/*import HelloWorld from '../HelloWord/HelloWorld.vue';*/
@Options({
    components: {
        // HelloWorld,
    },
    data(){
    },
    props:{

    }
})

export class AppTS extends Vue{

    public variable:number = 1 ;

    public currentProfile:number = 2;

}
