var show =false;
var html;
function fetchingUsers() {
  
    fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')
    .then((response) => {
        return response.json();
      })
      .then((data) => {
         html = data.map((item, i) => {
         
          return `
          <ul>
            <li>${item.name}</li>
            <li><img src = '${item.avatar}' alt='no image' /> </li>
            <div id="${'test' + i}">
              <li>${item.id}</li>

              <li>${item.createdAt}</li>
            </div>
          </ul>
          <button onclick={idHandler("${'test' + i}")}>Click</button>
          `
          
        }).join("")
        document.getElementById('app').insertAdjacentHTML("afterbegin", html);
        
      })
	.catch(err => console.error(err));
}
fetchingUsers()
// const result = () => {
//   fetchingUsers()
//   hiddenData();
// }

function idHandler(id) {
  show = !show 
  if(html){
    document.getElementById(id).hidden = !show;
  }
  
}

idHandler()

function hiddenData() {
  if(html) {
    document.getElementsByClassName('test').style.display='none';

  }
}

hiddenData()