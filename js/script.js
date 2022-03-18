

const app = new Vue({
    el: '#app',

    
    data: {

        text:"",
        
        list: [
            {
                text: "comprare le pere",
                done: false,
                checked: false
            },
            {
                text: "comprare le mele",
                done: false,
                checked: false
            },
            {
                text: "comprare le banane",
                done: false,
                checked: false
            },
            {
                text: "comprare le noci",
                done: true,
                checked: true
            },
        ]

      
      
    },

    methods: {

        deleteItem: function(index){
            this.list.splice(index, 1);
        },

        addRemoveDone: function(index){
            this.list[index].done = !(this.list[index].done);
            this.list[index].checked = !(this.list[index].checked);
            console.log(this.list[index].done)
        },

        addTask: function(task){
            if(task != ""){
                newTask = {};
                newTask.text = task;
                newTask.done = false;
                this.list.push(newTask);
                this.text = "";
            }
        }
       
    }

  });