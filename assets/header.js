class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
        `  
        <nav id="myNav" class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
        <div class="container-fluid">
            <a href="https://www.paulmartinusjohnson.me" class="navbar-brand h1">Paul Johnson</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a href="https://github.com/sixtydgree" target="_blank" rel="noreferrer noopener" class="nav-link">Github</a>
                </li>
                <li class="nav-item">
                    <a href="https://www.linkedin.com/in/paul-johnson-743278a/" target="_blank" rel="noreferrer noopener" class="nav-link">Linkedin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">
                    About
                    </a>
                </li>
                <li class="nav-item">
                    <a href="unityGames.html" class="nav-link">Games</a>
                </li>
                <!-- <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        My Games
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="unityGames.html" class="dropdown-item">Built in Unity</a>
                        </li>
                        <li>
                            <a href="unrealGames.html" class="dropdown-item">Built in Unreal</a>
                        </li>
                    </ul>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link" href="https://soundcloud.com/sixtydgree" target="blank" rel="noreferrer noopener">
                    Music
                    </a>
            </ul>
        </div>
        </div>
    </nav> `;
    }

}

customElements.define('header-component', Header);


var pageTitle = document.title;
var opacity = 0;
var intervalId = 0;



if(pageTitle === "Home"){
    window.onload = fadeIn;
    function fadeIn(){
        setInterval(show, 65);
    };
    function show(){
        
    var navBar = document.getElementById("myNav");
    opacity = Number(window.getComputedStyle(navBar).getPropertyValue("opacity"));
        
        if(opacity < 1){
            opacity = opacity + 0.1;
            navBar.style.opacity = opacity;
        }else{
            clearInterval(intervalId);
        }};
    }else if(pageTitle !== "Home"){
        window.onload = fadeIn;
    function fadeIn(){
        setInterval(show, 0);
    };
    function show(){
        
    var navBar = document.getElementById("myNav");
    opacity = Number(window.getComputedStyle(navBar).getPropertyValue("opacity"));
        
        if(opacity < 1){
            opacity = opacity + 1;
            navBar.style.opacity = opacity;
        }else{
            clearInterval(intervalId);
        }};
    }

    
