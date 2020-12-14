class Lesson{
    data = [];
    init() {
        this.data = [
            {name:"js"},
            {name:"vue.js"}
        ]
    }
}

let obj = new Lesson();
obj.init();
export{ obj }