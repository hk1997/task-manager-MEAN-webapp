import {Component, OnInit} from '@angular/core';
import {Task} from "./task";
import {Http,Headers} from "@angular/http";
import {TaskService} from "./task.service";
import 'rxjs/add/operator/map';
@Component(
  {
    selector:'task',
    templateUrl:'./tasks.html',
    styleUrls:['./tasks.stylesheet.css']
  }
)

export class TaskComponent implements OnInit
{
   task:Task[];
   newTask;
   modifyElement:Task;
   previousTask:Task;
  text='line-through';
  constructor(private http:Http,private  taskService:TaskService)
   {
      this.modifyElement=new Task();
   }

   ngOnInit():any{
     this.taskService.getTasks().subscribe(task=>this.task=task);

   }

   onAdd()
   {
     let temp:Task;
     temp=new Task();
     temp.description=this.newTask;
     temp.done=false;
     this.taskService.postTask(temp).subscribe();

     this.task.push(temp);
     this.newTask='';
   }

  onDelete(task:Task)
  {

    this.taskService.deleteTask(task).subscribe();
    this.task.splice(this.task.indexOf(task),1);
  }
  isChecked(t:Task)
  {
    t.done=!t.done;
    this.task.splice(this.task.indexOf(t),1);
    this.task.push(t);
    return this.taskService.updateTask(t).subscribe();

  }
  onModify(t:Task)
  {
    this.modifyElement.description=t.description;
    this.modifyElement.done=t.done;
    this.previousTask=t;
    //return this.taskService.updateTask(t).subscribe();
  }
  onUpdate()
  {
    this.onDelete(this.previousTask);
    this.taskService.postTask(this.modifyElement).subscribe();
    this.task.push(this.modifyElement);
    this.previousTask=null;
    this.modifyElement=new Task();
  }

  onCancel()
  {
    this.previousTask=null;
  }
}
