const person = {
    name: 'rakesh', 
    skills: ['js', 'py', 'java'],
    // inside a method, the value of this will still refer to the current object
    detailsWithOutBind: function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)
        })
    },
    detailsWithBind: function(){
        this.skills.forEach(function (skill) {
            console.log(`${this.name} knows ${skill}`)
        }.bind(this))
    },
    // inside a method, if there is a function, inside that function, value of this is the global object not the current object
    profile: function(){
        function someFunction() {
            console.log(this.name)
        }
        someFunction()
        return this
    }
}

person.detailsWithOutBind()
person.detailsWithBind()


console.log(person.profile())