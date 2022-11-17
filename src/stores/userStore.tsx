import create from "zustand/react";
import {persist} from "zustand/middleware";

interface UserState{
    userName:string;
    userEmail:string;
}
const userStore = create<UserState>(
        (set) => ({
            userName:'VM',
            userEmail:'vipulm124@gmail.com'
        })
);

export default userStore;
