import {Injectable} from '@angular/core';
import {Task} from "./task";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class TaskService
{
  constructor(private http:Http)
  {

  }
  getTasks()
  {

    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    return this.http.get('http://localhost:3000/tasks',headers).map(res=>res.json());
  }

  postTask(task:Task)
  {
    return this.http.post('http://localhost:3000/tasks',task).map(res=>res.json());
  }

  deleteTask(task:Task)
  {
    let req={description:task.description};
    return this.http.delete('http://localhost:3000/tasks',new RequestOptions({

      body: task
    })).map(res=>res.json());
  }

  updateTask(task:Task)
  {
    //let req={description:task.description};

    return this.http.put('http://localhost:3000/tasks',task).map(res=>res.json());

  }
}
