const api = "https://dummyjson.com/products";
const list = document.getElementById("product-list");
let amount = +prompt("Enter the amount of products you want to see:")
const ShowBtn = document.getElementById("ShowBtn");
const ModalBtn = document.getElementById("js-open-modal")
let pagination = {
	limit: amount,
	skip: 0,
	total: null,

	next() {
		this.skip += this.limit;
	},
	get isEnd() {
		if (this.total == null) return false;
		return this.skip >= this.total;
	}
};

function loadProducts() {

	let url = `${api}?skip=${pagination.skip}&limit=${pagination.limit}`;
	pagination.next();

	fetch(url).then(res => res.json()).then(data => {

		pagination.total = data.total;
		ShowBtn.disabled = pagination.isEnd;

		const products = data.products;

		for (const p of products) {
			addProduct(p);
		}
	});
}
function addProduct(product) {
	list.innerHTML += `<li class="inline-block m-8">
	<div class="bg-white rounded-lg border-2 border-red-400 shadow dark:bg-gray-800 dark:border-red-700 "style="width:24rem;">
			  <img class="w-full" src="${product.thumbnail}" alt="product image" />
		 <div class="px-2 pb-2">
			  <a href="#">
					<h5 class="w-100 text-base text-center font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
			  </a>
			  <div class="px-2 text-center">
			  <span class="text-xl  font-bold text-gray-900 dark:text-white pr-4">Rating:${product.rating}</span>
		 </div>
			  <div class="text-center">
					<span class="text-2xl  font-bold text-gray-900 dark:text-white pr-4">${product.price}$</span>
			  </div>
		 </div>
	</div></li>`
}
loadProducts();

ShowBtn.onclick = () => {
	loadProducts();
}
