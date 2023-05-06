import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
    ToastAndroid
} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login : async(email, password)=>{
                    try{
                        await auth().signInWithEmailAndPassword(email, password)
                        ToastAndroid.show("Signed In Successfully", ToastAndroid.SHORT);
                    }catch(e){
                        console.log(e);
                        ToastAndroid.show(e.message, ToastAndroid.SHORT);
                    }
                },
                register: async(email, password)=>{
                    try{
                        await auth().createUserWithEmailAndPassword(email, password);
                        ToastAndroid.show("User Created Successfully", ToastAndroid.SHORT);
                    }catch(e){
                        console.log(e);
                        ToastAndroid.show(e.message, ToastAndroid.SHORT);
                    }
                },
                logout: async()=>{
                    try{
                        await auth().signOut();
                        ToastAndroid.show("Logged Out Successfully", ToastAndroid.SHORT);
                    }catch(e){
                        console.log(e);
                        ToastAndroid.show(e.message, ToastAndroid.SHORT);
                    }
                }
            }}>
            {children}
        </AuthContext.Provider>
    );

}