# <h1 style="color:red;weight:bold"> mock-api </h1>

##   API Mocker Light weight  NPM Package  </br>To Transform any input as Server Mock API Response  

### It will return an Observable which you can subscribe like ussually we do when Callig any Backend API and waiting for Response from Server. 

### The beauty is that We can supply any input JSON , String , Number it will be resturn in the Response. 

### We can Provide the Delay in Seconds 

## Example Usage 

```
import response from "mock-api";

response({"data":"hello"},3).subscribe((data)=>{
    console.log("response",data);
})
```
