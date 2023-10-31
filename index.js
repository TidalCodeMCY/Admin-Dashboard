/* This is going to add navbar functionality I am pushing myself a bit harder in this project to 
make it more fun Its gonna be a menu button icon that you can click that will opena nd close the 
navbar.  */

(function checkNav(){
    const icon = document.querySelector('.menuonmaininner');
    const open = document.querySelector('.navbar');

    icon.addEventListener('click', () => {
        if(open.classList.contains('navbaractive')){
            closeNav(open);
        }else{
            openNav(open);
        }
        
    });

})();

function openNav(open){    
    open.classList = 'navbar navbaractive';
}

function closeNav(open){
    open.classList.remove('navbaractive');
}

/* Any other cuntionality will be added below. All navbar data is handled by the above functions!*/