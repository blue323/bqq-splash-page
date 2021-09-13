let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
    // Stop the default event behavior
        event.preventDefault()
    // use FormData to get the User's name and email    
    let data = new FormData(event.target)
    let userFirstName = data.get("firstName")
    let userEmailAddress = data.get("emailAddress")     
     
    let updatedHtmlContent = `
         <h2>Congratulations, ${userFirstName}!</h2>

         <p>You're on your way to becoming a BBQ Master!</p>
        
         <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `
    
    let mainContent = document.getElementById("Main-Content")
    mainContent.innerHTML = updatedHtmlContent
})