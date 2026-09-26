const filters = document.querySelectorAll('.filters button');
const products = document.querySelectorAll('.product');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    products.forEach((product) => {
      const shouldShow = button.dataset.filter === 'all' || product.dataset.category === button.dataset.filter;
      product.classList.toggle('hidden', !shouldShow);
    });
  });
});
