// api url
const api_url = 
      "https://www.reddit.com/r/memes.json";
  
      // Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data['data']['children'][0]['data']['url_overridden_by_dest']);
    let tab = 
    `<img src="">`;
//     // Loop to access all rows 

if(response){
    hideloader();
}
    for (let index = 0; index <=25; index++) {
        tab += `<img src="${data['data']['children'][index]['data']['url_overridden_by_dest']}" class="pic">
        <a href="${data['data']['children'][index]['data']['url_overridden_by_dest']}" class="btn btn-success">View</a>
        <div class="divider"></div>`;
    }    
    document.getElementById("memes").innerHTML = tab;
 

  }
// // Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}