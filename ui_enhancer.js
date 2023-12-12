
// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function add_event()
{
	document.querySelector('.nota_btn').onclick = function()
	{
      document.querySelector("body").classList.toggle("nota_styled");
    	// console.log('Body class toggled');
	}
}

function nota_style_button(menu_bar)
{
	
	const btn = document.createElement("button");
	btn.innerHTML += "<span>Toggle Style</span>";
	btn.classList.add("nota_btn");
	
	// btn.setAttribute("colormode", "dark");
	// btn.setAttribute("cu3-size", "medium");
	// btn.setAttribute("cu3-background", "dark");
	// btn.setAttribute("cu3Button", '');
	
	// btn.setAttribute("btntype", 'outline');
	// btn.setAttribute("cu3-type", 'outline');
	
	waitForElm('cu-global-actions-bar .ng-star-inserted .left-part').then((elm) => {
		    elm.appendChild(btn);
		    console.log('Enhancer button created');
		    add_event();
		});
	
}



document.addEventListener("DOMContentLoaded", function()
{
	nota_style_button();
  
});
