name_of_people =[];

function sumbit()
{

   var Guest_name = document.getElementById("name1").value;
  

   name_of_people.push(Guest_name);
   

   console.log(name_of_people);

 
   document.getElementById("sort_button").style.display = "inline-block";


}

function sorting()
{
 name_of_people.sort();
 console.log(name_of_people);
 document.getElementById("lbl").innerHTML = name_of_people;

}

function show(){
    console.log(name_of_people);
    document.getElementById("name1").innerHTML = name_of_people;
}
function search()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for (j=0; j<name_of_people.length; j++)
    {
        if(s==name_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+"time/s";
    console.log("found name "+found+"time/s");
}