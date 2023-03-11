async function api(){
  v=fetch('https://restcountries.com/v3.1/all')
  out=await v;
  prom=out.json();
  result=await prom;

  for(i of result){
    try{
      var opt=document.createElement('option')
      opt.setAttribute("value",i.cca2)

      opt.innerText=i.name.common;

      totallist=document.querySelector('[name="code"]')
      totallist.append(opt)
     

   
    }

    catch{
      // 
    }



}
}
var form_check=document.querySelector('.search')
   form_check.addEventListener('submit',(e)=>{
        e.preventDefault()
        regionCode=totallist.value
        

        var myHeaders = new Headers();

      myHeaders.append("X-eBirdApiToken",  "nhq791rra6oe");
        
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      
      
      fetch(`https://api.ebird.org/v2/data/obs/${regionCode}/recent`, requestOptions)
      
      
        .then(response => response.json())
        .then(result =>{ console.log(result)
          arr=result;
          
          tab=document.querySelector('.table')

          tab.innerText=""
          
          
          if(arr.length>0){
            
            
           
            
            
            row=document.createElement('tr')
            row.innerHTML="<th>Name of Bird</th><th>Count</th><th>Location</th><th>Observed Date and Time</th>"
            
            head=document.createElement('thead')
                      
            head.append(row)
            tab.append(head)
            
            for(i of arr){
            trow=document.createElement('tr')
            trow.innerHTML=`<td>${i.comName}</td><td>${i.howMany}</td><td>${i.locName}</td><td>${i.obsDt}</td>`
            
            tab.append(trow)
            

            }
            
            
            
          }
        }
        )
        .catch(error => console.log('error', error));

        
      
          })

api()









