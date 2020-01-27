import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


export class MyTodos {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
} 

export class CompletedItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
} 

@Component({
  selector: 'app-root',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {    
    
  // Array where we are going to do CRUD operations    
  myItems: MyTodos[] = new Array();    

  CompletedItems = [];
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem;    
    
  // Provide some values to the array    
  constructor()    
  {    
    this.myItems.push(    
      new MyTodos("First Task"),    
      new MyTodos("Second Task"),    
      new MyTodos("Third Task"),    
      new MyTodos("Forth Task"),    
      new MyTodos("Fifth Task")    
    );    
  }

  // To add new item in array    
 AddItem() {    
  this.myItems.push(    
    this.newItem    
  );    
  this.newItem = {};    
} 

    // To delete specific item  
DeleteItem(i) {  
  this.myItems.splice(i, 1);  
} 



onDrop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(this.myItems, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
} 

}