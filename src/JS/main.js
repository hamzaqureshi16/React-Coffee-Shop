/**
* Template Name: Restaurantly - v3.9.1
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

const BuyNow = (id) => {
  AddtoCart(id);
  window.parent.location.href = '../cart.html';
};
const AddtoCart = (id) =>{
  
  var cart = JSON.parse(localStorage.getItem('products'));
  
  if(cart === null){
    localStorage.setItem('products', JSON.stringify([]));
    cart = JSON.parse(localStorage.getItem('products'));
  }

  var ProductCatalog = JSON.parse(localStorage.getItem('ProductCatalog'));
  var product = ProductCatalog.find(x => x.id == id);
  console.log(product.name);
  
  var productInCart = cart.find(x => x.name == product.name.replace(/\s/g, ''));
  if(productInCart){
    
    productInCart.quantity++;
    // var currCount = JSON.parse(localStorage.getItem('countItems'));
    // console.log(currCount)
    // console.log('setting to '+)
   
  }else{
    
    
    productInCart = {
      name: product.name.replace(/\s/g, ''),
      quantity: 1,
      price: product.price,
      category: product.categoy,
      url : product.url
    }
    cart.push(productInCart);
    localStorage.setItem('countItems',JSON.stringify(JSON.parse(localStorage.getItem('countItems'))+1))
    console.log('setting to '+JSON.parse(localStorage.getItem('countItems')));
  }
  localStorage.setItem('products', JSON.stringify(cart));
  
 
  
}
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.add('topbar-scrolled')
          }
        } else {
          selectHeader.classList.remove('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.remove('topbar-scrolled')
          }
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  
    /**
     * Menu isotope and filter
     */
    window.addEventListener('load', () => {
      let menuContainer = select('.menu-container');
      if (menuContainer) {
        let menuIsotope = new Isotope(menuContainer, {
          itemSelector: '.menu-item',
          layoutMode: 'fitRows'
        });
  
        let menuFilters = select('#menu-flters li', true);
  
        on('click', '#menu-flters li', function(e) {
          e.preventDefault();
          menuFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');
  
          menuIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          menuIsotope.on('arrangeComplete', function() {
            AOS.refresh()
          });
        }, true);
      }
  
    });
  
    /**
     * Initiate glightbox 
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Events slider
     */
    new Swiper('.events-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
    /**
     * Testimonials slider
     */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
  
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  
    /**
     * Initiate gallery lightbox 
     */
    const galleryLightbox = GLightbox({
      selector: '.gallery-lightbox'
    });
  
    /**
     * Animation on scroll
     */


    const ProductCatalog = [
      {
        "id": 1,
        "name": "Espresso Shot",
        "price": 200,
        "url": "./assets/img/menu/espresso.jpg",
        'categoy':'Coffee',
        'ingredients': 'coffe beans',
      },
      {
        "id": 2,
        "name": "Espresso Machiato",
        "price": 250,
        "url": "./assets/img/menu/espresso-machiato.jpg",
        'categoy':'Coffee',
        'ingredients': 'coffe beans, cream, milk',
      },
	
{
        "id": 3,
        "name": "Arabica",
        "price": 450,
        "url": "../assets/img/arabica.jpg",
        'categoy':'Coffee',
        'ingredients': 'Arabica beans, cream, milk',
      },

{
        "id": 4,
        "name": "Robusta",
        "price": 400,
        "url": "../assets/img/Robusta.jpg",
        'categoy':'benas',
        'ingredients': 'coffe beans',
      },

{
        "id": 5,
        "name": "Americano",
        "price": 350,
        "url": "../assets/img/americano.jpg",
        'categoy':'Coffee',
        'ingredients': 'coffe beans, cream, milk',
      },


{
        "id": 6,
        "name": "Latte",
        "price": 300,
        "url": "../assets/img/latte.jpg",
        'categoy':'Coffee',
        'ingredients': 'coffe beans, cream, milk',
      },


{
        "id": 7,
        "name": "Macchiato",
        "price": 650,
        "url": "../assets/img/machiatto.jpg",
        'categoy':'Coffee',
        'ingredients': 'coffe beans, cream, milk',
      },


{
        "id": 8,
        "name": "Flat White",
        "price": 500,
        "url": "../assets/img/flatwhite-coffee.jpg",
        'categoy':'Coffee',
        'ingredients': 'coffe beans, cream, milk',
      },


{
        "id": 9,
        "name": "Custards",
        "price": 1200,
        "url": "../assets/img/custard.jpg",
        'categoy':'desserts',
        'ingredients': 'corn starch, cream, milk',
      },


{
        "id": 10,
        "name": "Deep-fried Cookie Dumplings",
        "price": 750,
        "url": "../assets/img/deepfried.jpg",
        'categoy':'desserts',
        'ingredients': 'cream, chocolate, milk',
      },


{
        "id":11,
        "name": "Gelatin",
        "price": 1250,
        "url": "../assets/img/gelatin.jpg",
        'categoy':'desserts',
        'ingredients': 'Gelatin, Marshmallows',
      },


{
        "id": 12,
        "name": "Banana cake with cream cheese",
        "price": 950,
        "url": "../assets/img/bananacake.jpg",
        'categoy':'Cake',
        'ingredients': 'Over-ripe Bananas, cream, cheese',
      },


{
        "id": 13,
        "name": "Chocolate coconut cake",
        "price": 1000,
        "url": "../assets/img/chocolatecake.jpg",
        'categoy':'Cake',
        'ingredients': 'Chocolate, Coconut, Baking Soda',
      },


{
        "id": 14,
        "name": "Lemon yoghurt cake with syrup",
        "price": 750,
        "url": "../assets/img/lemon.jpeg",
        'categoy':'Cake',
        'ingredients': 'Baking Soda,Lemon Juice, Eggs',
      },


{
        "id": 15,
        "name": "Chocolate mud cupcakes",
        "price": 450,
        "url": "../assets/img/chocolatemud.jpeg",
        'categoy':'Cake',
        'ingredients': 'Sour Cream,Brown Sugar, Dark Chocolate',
      },
      

    ]

    localStorage.setItem('ProductCatalog', JSON.stringify(ProductCatalog));
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
      
      const menu =document.getElementById('main_menu'); 
      for(var i = 0; i < ProductCatalog.length; i++){
      menu.innerHTML+=`
          <div class="col-lg-6 menu-item filter-${ProductCatalog[i].categoy}">
              <img src="${ProductCatalog[i].url}" class="menu-img" alt="">
              <div class="menu-content">
              <a href="#">${ProductCatalog[i].name}</a><span>PKR${ProductCatalog[i].price}</span>
            </div>
            <div class="menu-ingredients">
              ${ProductCatalog[i].ingredients}
            </div>
            
            &nbsp;
            &nbsp;
            <button class="bg-success rounded" onclick="BuyNow(${ProductCatalog[i].id})">buy</button>
            <button class="bg-primary rounded" onclick="AddtoCart(${ProductCatalog[i].id})">Add to cart</button>
          </div>`;
      }
}
    


    );
  
  })()




