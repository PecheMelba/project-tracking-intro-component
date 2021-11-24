/*Media querry changed state*/
const mediaQuery = window.matchMedia('(min-width: 900px)');
let isDesktopMode = false;

function handleTabletChange(e) 
{
  // Check if the media query is true
  if (e.matches) //if viewports at least 900px wide
  { 
    isDesktopMode = true; 
  }
  else//if viewports less than 900px wide
  {     
    isDesktopMode = false;
  }
}

document.getElementById('menu-btn').addEventListener("click", () => 
{
    if(!isDesktopMode)
    {
        document.getElementById("menu").style.display = "flex";
        document.getElementById("menu-btn").style.display = "none";
        document.getElementById("close-menu-btn").style.display = "inline";
    }
});

document.getElementById('close-menu-btn').addEventListener("click", () => 
{
    if(!isDesktopMode)
    {
        document.getElementById("menu").style.display = "none";
        document.getElementById("menu-btn").style.display = "inline";
        document.getElementById("close-menu-btn").style.display = "none";    
    }
});