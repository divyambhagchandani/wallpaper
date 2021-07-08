import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID lP5mbOh3b6IrbDw-RyuQx3WkQPDlf5H3FT44Xm7FhRw' 
    }

});
