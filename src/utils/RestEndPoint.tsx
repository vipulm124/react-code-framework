import axios from 'axios';
import { json } from 'stream/consumers';


export class RestEndPoint{

    static async  GetRequest<T,>(url:string, isRequiredAuthentication:boolean){
        try{
            console.log("This is something")

            const {data} = await axios.get<T>(
                url,{
                    headers:{
                        Accept:'application/json',
                        Authorize: isRequiredAuthentication ? `Bearer ${this.getToken()}` : ''
                    }
                }
            );
            console.log(JSON.stringify(data));
            return data;
        }
        catch(error){
            if(axios.isAxiosError(error)){
                console.log('error message: ', error.message);
                return error.message;
            }
            else{
                console.log('unexpected error: ', error);
                return `An unexpected error occured: ${error}`;
            }

        }
    }

    static async PostRequest<T,P>(url:string, params:P, isRequiredAuthentication:boolean){
        try{
            const {data} = await axios.post<T>(
                url,
                params,
                {
                    headers:{
                        'Content-Type' : 'application/json',
                        Accept: 'application/json',
                        Authorize: isRequiredAuthentication ? `Bearer ${this.getToken()}` : ''
                },},
            );
            console.log(JSON.stringify(data));
            
            return data;
        }
        catch(error){
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                // 👇️ error: AxiosError<any, any>
                return error.message;
              } else {
                console.log('unexpected error: ', error);
                return `An unexpected error occurred: ${error}`;
              }
        }
    }
   
        
        static  getToken():string{
            return "Token";
        }
    
    
    
}