{/* <div class="col-3 m-2">
             <div class="w-100 h-100 box p-3 d-flex   ">
                   <div class="w-25 ">
                       <img style="width: 100%; height: 100%;" class="" src="https://reqres.in/img/faces/1-image.jpg" alt="">
                   </div>
                   <div class="d-flex flex-column p-3 align-content-center justify-content-center">
                    <div class="title-text">mohammad</div>
                    <div class="normal-text">mohammad</div>
                    <div class="email-text">mohammad</div>
       
                    
                  </div>
             </div>
             
             

           </div>   */}
//   https://reqres.in/img/faces/1-image.jpg
function addCard({ lastname, email, firstname, avatar }) {
  let content = `
  <div class="col-3 m-2">
  <div class="w-100 h-100 box p-3 d-flex   ">
        <div class="w-25 ">
            <img style="width: 100%; height: 100%;" class="" src="${avatar}" alt="">
        </div>
        <div class="d-flex flex-column p-3 align-content-center justify-content-center">
         <div class="title-text">${firstname}</div>
         <div class="normal-text">${lastname}</div>
         <div class="email-text">${email}</div>

         
       </div>
  </div>
  
  

</div>
    `;
  $("#cardwraper").append(content);
}