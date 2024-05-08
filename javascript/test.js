
 // let para = document.getElementById('para');
        // para.addEventListener('mouseover',function run(){
        //     alert("mouse inside")
        // })
        // para.addEventListener('mouseout',function run(){
        //     alert("mouse out")
        // })
        // function toggleHide(){
        //  let   btn = document.getElementById('btn');
        //  let para = document.getElementById('para')
        //  if(para.style.display != 'none'){
        //     para.style.display = 'none';
        //  }
        //  else{
        //  para.style.display = 'block';
        //  }
        // }

        console.log("zubair hashmi");      //show on console
        var a=10;
        // document.write(a);     // show on screen
        
        //  map, filter, for each loop;
        // array map method


        let arr = [45,34,54]             //it use like for each loop it make new array 

       let h= arr.map((value,index,array)=>{
            console.log(value,index,array)           // it print with also index
            return value 
        })
        console.log(h)
       //  Array filter method

       let arr1 = [42,3,54,22,1,2,43,25,9,7,6,5,4,0,8,9,10]
       let arr2=arr1.filter((a)=>{              // we give a funtion for that function which value will be true that will be return
        return a<10                            // here it take vlaue in filter(42) and it check in function a<10 so it will no true so it will not save
          })                                     // in veriable arr2
          
        //  ARRAYS methods use in javascript   indexof,push,pop,length,sort,shif,unshift,delete,concate,toString,join,flate,map,slice,spllice

       console.log(arr2,arr2.sort())              // it print and sort the array by sort method
       console.log(arr2.length)                //  it give the lenth of the aaray
       console.log(arr1.indexOf(4))             // it tell the following index number value
       console.log(arr1.push(23))               //  it add the item in the last of the array
       console.log(arr1.indexOf(23))
       console.log(arr1.unshift(123))           // so it wiil also add but at the begning of an array
       console.log(arr1.includes(123))         // it tell in bolean that the following value is in the array or not because 123 is present so it give true
       console.log(arr1.includes(232))         // that value 232 is not laying in the array so it give false 
       console.log(arr1.indexOf(123))          //it give index no is 0 because we use to add it unshift method
       console.log(arr1.shift())           //  it will remove first item from the array
       console.log(arr1)                       //  there will be all value except 123 because it eliminat by shift
       console.log(arr1.pop())                //it will be remove the last elemnet of array
       console.log(arr2)
       console.log(arr2.toString())          // it print all element with seperat (,) like string    
       console.log(arr1.join("#"))          //  it also print like string but here you can give sign or value between them  
       let arr3 = arr1.concat(arr2)          //   we will make another veriable to store concate it simply add two arrays or mergg we also add 
                                             //  add multiple array arr1.conacate(arr2,arr3,arr4)
       console.log(arr3) 
                                            //  splice use to add new thing in an array and remove element from an array witout creating hole

      // TOOOOOOPIC 02
      //variable=var, let ,const 
      var x=4;
      var x=2;
      x=5;
      console.log(x)       // we can easily redeclared the value of x in var       it print the last one 5
      
      const c=3;
      // const c=5;       //  we can not reassign the value in const variable or not redeclare it will give errore
      console.log(c)
      // let c=34;              //here we canot redeclare because once we declare that name variable in const          NOTE:the let and const cannot use
      // console.log(c)                                                                                               this keyword and not hoisted;
      let b=32;
      // let b=4;               it is also give because let also not redecalre or reassign
      console.log(b) 
    
    




     // TOOOOOOOPIC 03
      //  String             we use {single} and {double} qotetiens to save any stirng in variable
      let name="zubair hashmi";
      let alpha="ABCDEFGHIJKLMNOP";
      let family='hashmi786';
      console.log("1 ",name," 2",family);        //  we use scape sequences to add or in string any thing like we add qoteints so use \"",\n for new line
      console.log(name.length);  
    

      // String Mthods  concate,replace,slice,substring,substr,uppercase,lowercase,trim,extract string caherecter (charat,charcodeat),split,padstart,padend,trimstar
      // there are three method in javascript for extract element from string
      //  slice,substring,substr
      // Slice it extract the index no element to (start,end no element) it print no of elemnent to the foloeing index nu start to end but [END] not include
      //   Slice
      console.log(alpha.slice(1,3))     // it print 2 to 13 {c to m} so slice the folowing index no element
      console.log(alpha.slice(2))     // here if you give only one argument so it from the folowing index to so on it print from {c to ....till p}
      console.log(alpha.slice(-15,-1))  //if we give argument in negative so it count from the end like here it print {b....to  p} -1 to -15 -15 not include
      //  substring            it same as slice but here less then 0 value is treated at start and end as 0
      console.log(alpha.substring(2,13))
      // substr
      console.log(alpha.substr(2,13))    // if you omit(not give) the second argumrnt so it print from start no of index elemnt to the last element
      //                                  // and the first argument show to print that index no of element the second if smaller then first so it show the folowimg num of elent will be print
      // console.log(alpha.slice(8,4))
  
      // REPLACE METHOD IN JAVASCRIPT
      // Replace method  it replace the specified vlaue to another value in string
      console.log(alpha.replace("BCD","sss"))
      let change=alpha.replace("MNOP","kkkk")
      console.log(change)
      console.log(alpha.replace(/abcdef/i,"dddddd"))  //if we here small leter so it not acepted so for these exception we use /word/i so then it not give error
      let namecast = ("hi  i am syed zubair khan and i am khan") //so here if you replace multiple word so use /word/g 
      console.log(namecast.replace(/khan/g,"hashmi"))   // it replace multiple time where where khan written there will be print hashmi
      // UPPERCASE
      // LOWERCASE 
      console.log(alpha.toUpperCase())
      console.log(alpha.toLocaleLowerCase())
      console.log(alpha.toLowerCase())
      // CONCATE
      console.log(alpha.concat("  ",name))  // here it join(concate) to string to each other
      //                                    /if use (+ ) so it also work as concat
  
      // all string make new string string never change but it replace
      let khan=("  am  hashmi am   am  er")
      console.log(khan.trim())           //it remove white space from the string from both side before and after
      console.log(khan.trimEnd())        //it remove white space from the end
      console.log(khan.trimStart())       // it also remove form the start of the string white space
      // CHARAT
      // CHARCODEAT 
      console.log(khan.charAt(6))      //it show you the vaue of the folowing index number what you give it()
      console.log(khan.charCodeAt(5))
      // console.log(khan.lastIndexOf("e",5))
      console.log(khan.lastIndexOf("hashmi"))      //  it tell the folllowing no of string index
      console.log(khan.indexOf("hashmi"))
      console.log(khan.search("ashm"))       // if we do not use gi so it  only math first element
      console.log(khan.match(/am/gi))          //if we use gi global so it match all string
      
      // map  methodin array 
      const number=[25,130,24,4]
      var square=number.map(Math.sqrt)
      console.log(square)
  
  
      // Function in javascript
      // In javascript we define and declare function with function keyword
      // EXAMPLE OF Function
     
      // console.log(x)
      // function myfunction(a,b){
      //     return a+b;
      // }
      // console.log(myfunction(1,2))    //function invocation
  
      // function myfunction(){                            //we use only function key word to define function in javascript and give name to function 
      //     let age=prompt("what is your age");
      //     if (age<18){
      //         document.write("you are child enjoy your life");
      //     }
      //     else
      //     {
      //         document.write("\n you are not child work hard\n ")
      //     }
      // }
      // console.log(myfunction())
      // function cars(){
      //     console.log("1 for black ")
      //     console.log("2 for brown ")
      //     console.log("3 for orange ")
      //     console.log("4 for white ")
      //     console.log("5 for red ")
      //     let num=prompt("enter a number to choose a color")
      //     num=Number.parseInt(num)
      //     switch (num){
      //         case 1:
      //             console.log("you choose a black color");
      //             break;
      //         case 2:
      //             console.log("you choose a brown color");
      //             break;
      //         case 3:
      //             console.log("you choose a orange color");
      //             break;
      //         case 4:
      //             console.log("you choose a white color");
      //             break;
      //         case 5:
      //             console.log("you choose a red color");
      //             break;
      //         default:
      //             console.log("you dont choose any color thak you")
      
      //     }
      //     console.log("Thanks to use our services")
      //     alert("i am hashmi");
         
   
  
      // }
      // console.log(cars())
      // we use above alert,and prompt;
      // now we use conform;
      // CONFORM
      // let deleteost=confirm("you want to really delete this post ")
      // if(deleteost){
      //     console.log("your post has been successfully deleted");
  
      // }
      // else{
  
      //     console.log("your post has not been deleted");
      // }
  
      //  function as object
  
      // const person={
      //      firstname:"zubair",
      //      lastname:"hashmi",
      //      id:5566,
      
      //     fullname: function (){
      //         return this.firstname+" "+this.lastname;
  
  
         
         
      //     }
      // };    
      
      // person.fullname();
      // LOOP for loop,while loop first(codition) then increment in {}, do while loop first execute then increment{} and after curly brackets condition;
      // FOR EACH LOOP,  FOR IN LOOP, FOR OF LOOP, 
      // FOR loop
      
      // for(i=1;i<5;i++){
      //     console.log(i);
      // }
  
      // FOR loop for array
      let friends = ["zubair","khan","ibrahim","baddar","faheem"];
      for(let index =0; index<friends.length; index++){
          console.log(" hello friends "+friends[index]);
      }
      //  FOR EACH LOOP
      friends.forEach(function f(element){
          console.log("Hello friends, "+ element +"to modren javascript");
      });
      // FOR IN LOOP
      for(let a in friends){
          console.log("hello all friends "+friends[a])        //it also all element in array or  keys in object[]
      }
      // FOR OF LOOP
      for(let b of friends){                                  //it also print all element in array 
          console.log(b)
      }
      // while loop in javascript
      let i=0;
      while(i<=5){
          console.log(i+" hashmi");
          i++;
      }
      // DO while loop:
      let j=0
      do{
          console.log(j+" is less the 4");
          j++;
  
      }while(j<4)
  
      // DOM,BOM      will study in detail  document object module and browser object module
      // Window object       it also yse multiple methods like window.addevent ,window.blur, window.close, window.alert etc
      // Dom   document object module is object also  use alot of method to use with document.write,documnet.activeelement, document.addEventlistner etc
      
      // NOW WE DISCUS THE EVEVNTS        all the event exercises are above the script in head because it interect with html and like button usege so it      all  are above
      
      // DATE AND TIME
      let now = new Date();
      console.log(now)
      let newdate=new Date(2033,3,2,4,3,5,45)
      console.log(newdate)
      let yr = newdate.getFullYear();
      console.log("the year is ", yr);
      let ydy = newdate.getDay();
      console.log("the day is ", ydy);
  
      let ytz= newdate.getTimezoneOffset();
      console.log("the timezone ofset is ", ytz);
  
      let yd = newdate.getDate();
      console.log("the date is ", yd);
  
      let yt = newdate.getTime();
      console.log("the time is ", yt);
  
      let ym = newdate.getMonth();
      console.log("the month is ", ym);
  
      let yh = newdate.getHours();
      console.log("the hour is ", yh);
  
  
      setInterval(updateTime, 1000);
  
      function updateTime(){
          time.innerHTNL = new Date();
      }
      



