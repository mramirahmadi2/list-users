

// console.log('hi');
// _getEmployees((res) => {
//     let data = res.data.map((i) => {
//       return {
//         name: i.first_name + " " + i.last_name,
//         email: i.email,
//         avatar: i.avatar,
//         id: i.id,
//       };
//     });
  
//     data.map((i) => {
//       addCart(i);
//     });
//   });
// addCard({lastname:'mohammad',
// firstname:'amir',
// email:'fsdfs',
// avatar:''});
_getuser(1).then(users_1=>{
    _getuser(2).then(users_2=>{
        let users =[...users_1,...users_2]
    users.map((user)=>{
        addCard({firstname:user.first_name,
        lastname:user.last_name,
        email:user.email,
        avatar:user.avatar,
        });
    });
});
   
    
});
