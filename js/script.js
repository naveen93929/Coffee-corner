const categoryBtns = document.querySelectorAll('.category-btn');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');

categoryBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    const modalTitle = document.querySelector('.modal-title');
    const modalMenuList = document.querySelector('.modal-menu-list');

    // Update modal title and menu list
    modalTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    modalMenuList.innerHTML = '';

    if (category === 'coffee') {
      const coffeeItems = [
        { name: 'Cappuccino', price: 150, image: './images/Cappuccino.webp' },
        { name: 'Caramel Latte', price: 180, image: './images/caramel-latte.jpg' },
        { name: 'Espresso', price: 100, image: './images/espresso-day.png' },
        { name: 'Flat White', price: 120, image: './images/Flat_White.webp' },
        { name: 'Mocha', price: 180, image: './images/mocha.jpg' },
        { name: 'Macchiato', price: 150, image: './images/macchiato.png' },
        { name: 'Americano', price: 120, image: './images/Americano.webp' },
        { name: 'Affogato', price: 180, image: './images/affogato.avif' },
      ];

      coffeeItems.forEach((item) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="menu-item-details">
            <h3>${item.name}</h3>
            <p>Rs. ${item.price}</p>
            <button>Order Now</button>
          </div>
        `;

        modalMenuList.appendChild(menuItem);
      });
    } else if (category === 'tea') {
      const teaItems = [
        { name: 'Masala Chai', price: 80, image: './images/masala chai.webp' },
        { name: 'Ginger Chai', price: 80, image: './images/ginger chai.webp' },
        { name: 'Cardamom Chai', price: 80, image: './images/cardamom chai.webp' },
        { name: 'Assam Tea', price: 100, image: './images/assam tea.webp' },
        { name: 'Darjeeling Tea', price: 120, image: './images/darjeeling tea.webp' },
        { name: 'Nilgiri Tea', price: 100, image: './images/nilgiri-tea.jpg' },
      ];

      teaItems.forEach((item) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="menu-item-details">
            <h3>${item.name}</h3>
            <p>Rs. ${item.price}</p>
            <button>Order Now</button>
          </div>
        `;

        modalMenuList.appendChild(menuItem);
      });
    }
    else if (category === 'smoothies') {
      const smoothiesItems = [
        { name: 'Mango', price: 100, image: './images/mango smoothies.jpg' },
        { name: 'Banana', price: 80, image: './images/banana smoothies.jpg' },
        { name: 'Strawberry', price: 120, image: './images/strawberry smoothies.jpeg' },
        { name: 'Orange', price: 100, image: './images/orange smoothies.jpg' },
        { name: 'Chocolate', price: 80, image: './images/chocolate smoothies.avif' },
        
      ];

      smoothiesItems.forEach((item) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="menu-item-details">
            <h3>${item.name}</h3>
            <p>Rs. ${item.price}</p>
            <button>Order Now</button>
          </div>
        `;

        modalMenuList.appendChild(menuItem);
      });
    }

    // Show the modal
    modal.style.display = 'block';
  });
});

// Close modal on clicking the close button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
document.querySelector('.rating-container button').addEventListener('click', () => {
  console.log('Button clicked!');
  document.querySelector('.full-reviews-section').classList.toggle('show');
});

document.addEventListener('click', (e) => {
  console.log('Document clicked!');
  if (!e.target.closest('.full-reviews-section') && !e.target.closest('.rating-container button')) {
    document.querySelector('.full-reviews-section').classList.remove('show');
}
});

const form = document.getElementById('contact-form');
const sendButton = document.getElementById('send-button');
const notification = document.getElementById('notification');

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  notification.innerHTML = 'Message sent successfully!';
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
    document.getElementById('contact-form').reset(); // Add this line
  }, 1000);
});







