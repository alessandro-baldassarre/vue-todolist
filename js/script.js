

const app = new Vue({
    el: '#app',

    
    data: {

        text:"",
        
        list: [
            {
                text: "comprare le pere",
                done: false
            },
            {
                text: "comprare le mele",
                done: false
            },
            {
                text: "comprare le banane",
                done: false
            },
            {
                text: "comprare le noci",
                done: true
            },
        ]

      
      
    },

    methods: {

        deleteItem: function(index){
            this.list.splice(index, 1);
        },

        addRemoveDone: function(index){
            this.list[index].done = !(this.list[index].done);
        },

        addTask: function(task){
            newTask = {};
            newTask.text = task;
            newTask.done = false;
            this.list.push(newTask);
            this.text = "";
            
        }
       
    }

  });