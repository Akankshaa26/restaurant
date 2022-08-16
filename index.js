 //rgba(35, 63, 221, 0.877)
  
  function change()
  {
    document.getElementById("img").src="rest4.jpg";
    document.getElementById("head").innerHTML="Real Food. Real Local.Get Your Veg On Food is what makes the world go around... food taste better Full on Taste! Enjoy in joy!";
    setTimeout(changes2,3000)
  }
  function changes2()
  {
    document.getElementById("img").src="rest3.jpg";
    document.getElementById("head").innerHTML="Eat breakfast like a king, lunch like a prince, and dinner like a pauper.";
    setTimeout(changes3,3000)
  }
  function changes3()
  {
    document.getElementById("img").src="rest2.jpg";
    document.getElementById("head").innerHTML="Real food doesn’t have ingredients; real food is ingredients. !";
    setTimeout(changes4,3000)
  }
  function changes4()
  {
    document.getElementById("img").src="13.jpg";
    document.getElementById("head").innerHTML="Real Food. Real Local.Get Your Veg On Food is what makes the world go around... food taste better Full on Taste! Enjoy in joy!";
    setTimeout(change2,3000)
  }
  function change2()
  {
    document.getElementById("img").src="pizza.jpg";
    document.getElementById("head").innerHTML="Tastes Homemade, Because It Is! Food: all the cool kids are eating it! All you can eat Peace. Love. Veggies";
    setTimeout(change3,3000)
  }
  function change3()
  {
    document.getElementById("img").src="pakode.jpg";
    document.getElementById("head").innerHTML="Food, Folks and Fun all together.Really Fast Food What are you eating today? We deliver in a short amount of time Think Done";
    setTimeout(change4,3000)
  }
  function change4()
  {
    document.getElementById("img").src="4.jpg";
    document.getElementById("head").innerHTML="Deliciousness jumping into the mouth.Full of tradition Peace of Mind Savor the Passion Growing Good";
    setTimeout(change5,3000)
  }
  function change5()
  {
    document.getElementById("img").src="rest.jpg";
    document.getElementById("head").innerHTML="Life is uncertain. Eat dessert first A prescription for good health Food, it’s not just for breakfast anymore!If you have a little extra, someone needs it";
    setTimeout(change6,3000)
  }
  function change6()
  {
    document.getElementById("img").src="menu6.jpg";
    document.getElementById("head").innerHTML="Food is an important part of a balanced diet.Growing close to you There ain’t no such thing as wrong food Hunger hurts. Please help us relieve the pain";
    setTimeout(change7,3000)
  }
  function change7()
  {
    document.getElementById("img").src="cake.jpg";
    document.getElementById("head").innerHTML="Eat Less, Be at your Best Be at Peace with your food Walk right up to good food Think Outside the Bun Food, eat it!";
    setTimeout(change8,3000)
  }
  function change8()
  {
    document.getElementById("img").src="95.jpg";
    document.getElementById("head").innerHTML="It’s always better when it’s natural.Eat well feel well Everything your body needs, nothing it doesn’t. Taste the difference";
    setTimeout(change,3000)
  }

  
window.addEventListener("storage",function(data)
{
    console.debug(data);
},false)



    var objectCreated=[];
    function checkStorage()
    {

        if(typeof(Storage)!=="undefined")
        {
            console.log("Storage is available");
            return 1;
        }
        else{
            console.log("Not available");
            return -1;
        }
    }
    window.onload=function()
    {
        let objectCreate=[];
        //alert(localStorage.length);
        if(localStorage.length!=0)
        {
            for(let i=0;i<JSON.parse(localStorage.getItem("objectCreated")).length;i++)
            {
                objectCreated=JSON.parse(localStorage.getItem("objectCreated"));
                localStorage.setItem("objectCreated",JSON.stringify(objectCreated));
            }
        }
    }
    function formvalidation()
    {
        let inputs=document.getElementsByClassName("input");
        if(inputs[0].value==""||inputs[1].value==""||inputs[2].value==""||inputs[3].value=="")
        {
            alert("All Input fields are required");
            return -1;
        }
        else
        return 1;
    }
    function save()
    {
        let require=formvalidation();
        let validation=checkStorage();
        if(validation==-1||require==-1)
        {
            return;
        }
        else{
            let inputs=document.getElementsByClassName("input");
            let bookId=Math.floor(Math.random()*1000000);
            let table=Math.floor(Math.random()*100);
            objectCreated.push([
            inputs[0].value,
            inputs[1].value,
            inputs[2].value,
            inputs[3].value,
            inputs[4].value,
            bookId,
            table
            ])
            localStorage.setItem("objectCreated",JSON.stringify(objectCreated));
            document.getElementsByTagName("p")[0].innerHTML=`Your Booking is Confirmed. Your booking Id is ${bookId}.`
            setTimeout(function()
            {
                location.href="restaurant.html";
            },3500)
        }
}
    
function get()
{
    let mobile=parseInt(document.getElementById("in").value);
    let arr=JSON.parse(localStorage.getItem("objectCreated"));
    var flag=false;
    for(let i=0;i<arr.length;i++)
    {
        let localId=(JSON.parse(localStorage.getItem("objectCreated"))[i]);
       // alert(localId);
        if(parseInt(localId[4])==mobile)
        {
           // alert("in if");
            document.getElementById("display").innerHTML=`Name: ${localId[0]} <br> Date of Booking: ${localId[1]} <br> 
            Time of Booking: ${localId[2]}<br>Number of people: ${localId[3]}<br> Mobile Number: ${localId[4]} <br> Table Number: ${localId[6]} <br>Booking Id: ${localId[5]}`
            flag=true;
            document.getElementById("display").style.visibility="visible";
            document.getElementById("in").value="";
        }
        
    }
    if(flag==false)
    {
        document.getElementById("in").value="";
        alert("No details found. Inavlid mobile Number");
    }

}
function forget()
{
    document.getElementById("in").style.visibility="visible";
    document.getElementById("get").style.visibility="visible";
    
}
function getTable()
{
    let id=parseInt(document.getElementById("input").value);
    //alert(id+" "+typeof(id));
  let arr=JSON.parse(localStorage.getItem("objectCreated"));
  var flag=false;
    for(let i=0;i<arr.length;i++)
    {
        let localId=(JSON.parse(localStorage.getItem("objectCreated"))[i]);
       // alert(localId);
        if(parseInt(localId[5])==id)
        {
           // alert("in if");
            document.getElementById("display").innerHTML=`Name: ${localId[0]} <br> Date of Booking: ${localId[1]} <br> 
            Time of Booking: ${localId[2]}<br>Number of people: ${localId[3]}<br> Mobile Number: ${localId[4]} <br> Table Number: ${localId[6]}`
            document.getElementById("display").style.visibility="visible";
            flag=true;
            document.getElementById("input").value="";
        }
        
    }
    if(flag==false)
    {
        document.getElementById("input").value="";
        alert("No details found. Inavlid Booking Id");
    }

}
    
