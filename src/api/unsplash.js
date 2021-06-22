import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID xab3dEfs41UltzF8Bvr3bveBn5JtTa-huw7rZ8lIGLw' 
    }

});