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

            tab=document.querySelector('.output')
                      
           
  
            
            
            
            if(arr.length>0){
               
              
              for(i of arr){
                
                cnt=document.createElement('div')
                th1=document.createElement('p').innerText=`Name of Bird : ${i.comName}`
                th2=document.createElement('p').innerText=`Count : ${i.howMany}`
                th3=document.createElement('p').innerText=`Location : ${i.locName}`
                th4=document.createElement('p').innerText=`Observed Date and Time : ${i.obsDt}`
                
    
                cnt.append(th1,th2,th3,th4)
                
                tab.append(cnt)
              
  
              }
              
              
              
            }
          }
          )
          .catch(error => console.log('error', error));
  
          
        
            })
  
  api()
  
  
  
  
  
  
  
  
  
  