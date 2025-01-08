import { makeAutoObservable } from "mobx";

class TaskStore{
    tasks=[]

    constructor(){
        makeAutoObservable(this)
    
}
addTask= (task)=>{
    this.tasks.push(task)
}
removeTask= (index)=>{
    this.tasks.splice(index,1)
}
}
export const taskStore= new TaskStore();