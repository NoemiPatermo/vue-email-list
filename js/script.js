Vue.config.devtools = true;

new Vue ({
    el:"#app",
    data: {
        emailList:[],
    },// chiude il data
    created () {
        this.getEmail();
    },
    
   methods:{
       getEmail: function(){

           for(let i=0; i < 10, i++;){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                this.emailList.push(response.data.response);
                console.log(this.emailList)
                })
            }//chiude il for
           
       }//chiude la function
   },
});//chiude la vue