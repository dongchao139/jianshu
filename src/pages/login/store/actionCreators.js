
export const login = (account, password) => {
   return {
       type: 'login',
       account: account,
       pwd: password
   }
}