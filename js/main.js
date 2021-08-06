/*MENU SHOW*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*ACTIVE AND REMOVE MENU*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')   

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}

    navLink.forEach(n => n.addEventListener('click', linkAction))

    function sendEmail() {
        Email.send({
        Host: "smtp.gmail.com",
        Username : "tm.ferreira.prado@gmail.com",
        Password : "d0c6n06552xp",
        To : 'tm.ferreira.prado@gmail.com',
        From : "tm.ferreira.prado@gmail.com",
        Subject : "Olá, Julia Silva",
        Body : "Olá, mundo!",
        }).then(
            message => alert("E-mail enviado com sucesso!")
        );
    }