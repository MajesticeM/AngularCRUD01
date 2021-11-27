import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//The array that is going to be used
 /*myArray=[1,2,4,5,7,8,9,0];

 //Print array
 getArray()
 {
   //console.log(this.myArray);
   alert(this.myArray);
 }
 //Creates an element in an array
 Create()
 {
   this.myArray.push(1);
   //console.log(this.myArray);
   alert(this.myArray);
 }
//Reads or searches for an element in an array
Read(SearchItem: any)
{
for (let index = 0; index < this.myArray.length; index++) 
{
  const element = this.myArray[index];
  if (SearchItem===element)
  {
    //console.log(element);
    alert(element);
    break;
  }
  else
  {
    //console.log("Number does not exist");
    alert("Number does not exist");
    break;
  }
}
}
//Update an element in an array
Update01(UpdateName:any,index:number)
{
  this.myArray[index]=UpdateName;
  //console.log(this.myArray);
  alert(this.myArray);
}
//Delete an element in an array
Delete(ArrayItemNumber:number)
{
  this.myArray.splice(ArrayItemNumber,1);
  //console.log(this.myArray);
  alert(this.myArray);
}*/
  list:any[]=[];
  //searchlist:any[]=[];
  addElement(item:string)
  {
    this.list.push({id:this.list.length,name:item});
    console.log(this.list);

  }
  /*searchTask(searchTask:any)
  {
    this.searchlist.push({id:this.searchlist.length,name:searchTask})
    console.log(this.searchlist);
  }*/
  showElements()
  {
    console.log(this.list);
    alert(this.list);
  }

  searchElement(searchItem:any)
  {
    debugger;
    for (let index = 0; index < this.list.length; index++)
    {
      const element = this.list[index].id;
      //console.log(this.list);
      if(searchItem!==element)
      {
        alert(element);
        //console.log(element);
       break;
      }
      else
      {
        //console.log("No such element in the array");
        alert("No such element in the array");
       break;
      }
    }
  }


  updateElement(elementName:string,index:any)
  {
    //debugger;
    this.list[index]=elementName;
    //this.list.push({id:this.list.length,name:elementName});
    console.log(elementName);
    console.log(index);
  }


  removeElement(id:number)
  {
    console.log(id);
    this.list=this.list.filter(item=>item.id!==id);
  }
}

