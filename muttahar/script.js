// function fe


let main_container = document.getElementById("main_container");

const fetchApiData = async ()=> {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
      for(let key of data) {
        main_container.innerHTML += `
        <div>
        <p><strong>Name : </strong>${key.name}</p>
        <p><strong>Email : </strong>${key.email}</p>
        <p><strong>UserName : </strong>${key.username}</p>
        <p><strong>Phone : </strong>${key.phone}</p>
    </div>`
      }
    }catch (err){
        console.log("error==>" , err);
    }
    
}

fetchApiData();

