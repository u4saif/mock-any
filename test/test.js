import response from "mock-api";

console.log("Test file running ");

response({"ss":"hello"},3).subscribe((response)=>{
    console.log("response",response);
})
