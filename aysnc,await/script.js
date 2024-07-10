

let getData = async () =>{
    console.log("loadng...");
    let x = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await x.json()
    console.log("data==>",data);
    return data;
}

getData()

let myData = async () =>{
    try {
        let apiData = await fetch("https://jsonplaceholder.typicode.com/todos");
        let dataToarray = await apiData.json();
        console.log(dataToarray);
        return dataToarray;
    } catch (error) {
        console.log(error);
    }
   

}

myData()