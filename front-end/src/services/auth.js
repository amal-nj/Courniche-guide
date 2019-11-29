//-----
// Save token to local storage
// in the key called apiKey
///-------
export const setToken = (token) =>{
    localStorage.setItem('apiKey', token)
   }
   
   //--------
   // Get token from local storage
   // in the key called apiKey
   //-------
   export const getToken = () =>{
    return localStorage.getItem('apiKey')
   }
   
   //destory token
   // in the key called apiKey
   export const logout = () => {
    localStorage.removeItem('apiKey')
    removeUser()
   }
   

   export const setUser = (user) =>{
    localStorage.setItem('user', JSON.stringify(user) )
   }

   export const getUser = () =>{
    return localStorage.getItem('user')
   }
   export const removeUser = () => {
    localStorage.removeItem('user')
   }
   