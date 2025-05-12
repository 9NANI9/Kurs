const sliderItems = [
  {
    image: "../../assets/images/goods/good1.jpg",
    title: "Blue Owl Placemats Set",
    description:
      "Easy Care & Maintenance: Cleaning is a breeze! Simply wipe with warm, soapy water, and air dry. For tougher stains, use a brush with soap to clean. No machine washing is necessary, making maintenance effortless.",
    price: "$5.50",
  },
  {
    image: "../../assets/images/goods/keyboard.jpg",
    title: "SteelSeries Apex 3 TKL RGB Gaming Keyboard",
    description:
      "Designed with IP32 Water & Dust Resistant for extra durability to prevent damage from liquids and dust particles, so you can continue to play no matter what happens to your keyboard.",
    price: "$34.99",
  },
  {
    image: "../../assets/images/goods/good3.jpg",
    title: "Shower Steamers Aromatherapy",
    description:
      "Freshly steamed milk with vanilla-flavYour Soothing Escape - Soothe your senses with shower aromatherapy. These shower soothers offer a relaxing sensory experience, the perfect way to start or end your day. Fill your bathroom with a gentle mist that leaves you rejuvenatedored syrup marked with espresso and caramel drizzle.",
    price: "$5.00",
  },
];

let currentIndex = 0;

function updateSlider() {
  const currentItem = sliderItems[currentIndex];
  document.getElementById("slider-image").src = currentItem.image;
  document.getElementById("slider-title").textContent = currentItem.title;
  document.getElementById("slider-description").textContent =
    currentItem.description;
  document.getElementById("slider-price").textContent = currentItem.price;

  updateSliderControl();
}

function updateSliderControl() {
  const controlItems = document.querySelectorAll(".slider-control__item");
  controlItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function moveLeft() {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  updateSlider();
}

function moveRight() {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  updateSlider();
}

updateSlider();




const burger = document.querySelector('.menu-burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', function() {
  this.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  
 
  document.body.classList.toggle('no-scroll');
});


document.querySelector('.mobile-menu__backdrop').addEventListener('click', () => {
  burger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
});


document.querySelectorAll('.mobile-menu__item a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
