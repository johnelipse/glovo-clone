const sectionCategories = document.querySelector(".section-categories");
const storesContainer = (document = document.querySelector(".store"));
const topCategoriesContainer=document.querySelector(".top-category");
const connectionsContainer=document.querySelector(".connections")
console.log(sectionCategories, storesContainer,topCategoriesContainer,connectionsContainer);

const categoriesEndpoint = "https://glovo-ap-is.vercel.app/API/categories.json";
const storesEndpoint = "https://glovo-ap-is.vercel.app/API/store.json";
const topCategoriesEndpoint="https://glovo-ap-is.vercel.app/API/topCategories.json";
const blogsEndpoint="https://glovo-ap-is.vercel.app/API/blogs.json";
//fetching categories
const categories = [];
async function fetchCategories() {
  const response = await fetch(categoriesEndpoint);
  const categories = await response.json();
  console.log(categories);
  renderCategories(categories);
}
fetchCategories();
//rendering categories
function renderCategories(categories) {
  sectionCategories.innerHTML = "";
  categories.forEach((category) => {
    const categoryHtml = `<div class="category">
<button class="categoryBtn">
<div class="btnImg">
    <img src="${category.image}" alt="loading">
</div>
<div class="name">
    <h3>${category.name}</h3>
</div>
</button>
    </div>`;
    sectionCategories.insertAdjacentHTML("beforeend", categoryHtml);
  });
}
//fetching store data
async function fetchStoreData() {
  const response = await fetch(storesEndpoint);
  const stores = await response.json();
  console.log(stores);
  renderStores(stores);
}
fetchStoreData();

//rendering stores

function renderStores(stores) {
  storesContainer.innerHTML = "";
  stores.forEach((store) => {
    const storeHtml = `
     <div class='main-div'>
        <div class="store-image">
        <img src="${store.image}" alt="">
        </div>
        <h4>${store.cat}</h4>
        <div class="store-details">
        <h3>${store.name}</h3>
        <div class="footer">
        <img src="/images/rating_regular.png" alt="loading">
        <p>${store.ratepers}</p>
        <p>(${store.rate})</p>
        </div>
        <div class="cutoff">
            <p>${store.quantity ? store.quantity : ""}</p>
            <p>${store.discount ? store.discount : ""}</p>
        </div>
        </div>
        </div>`;
    storesContainer.insertAdjacentHTML("beforeend", storeHtml);
  });
}
//fetching top categories
async function fetchTopCategories(){
  const response=await fetch(topCategoriesEndpoint)
  const topCategories=await response.json();
  console.log(topCategories);
  renderTopCategories(topCategories)
}
fetchTopCategories()

//rendering top categories
function renderTopCategories(topCategories){
  topCategoriesContainer.innerHTML=""
topCategories.forEach((topCategory)=>{
  const topCategoryHtml=` <div class="top-category">
  <h3>${topCategory}</h3>
</div>`;
topCategoriesContainer.insertAdjacentHTML("beforeend",topCategoryHtml)
})
}
//fetching blogs.
async function fetchBlogs(){
  const response=await fetch(blogsEndpoint)
  const blogs=await response.json();
  console.log(blogs);
  renderBlogs(blogs)
}
fetchBlogs()
//rendering blogs.
const blogs=[]
function renderBlogs(blogs){
  connectionsContainer.innerHTML=""
blogs.forEach((blog)=>{
  const blogHtml=`  <div class="connection">
  <img src="${blog.image}" alt="loading">
<div class="detailed">
<h3>${blog.title}</h3>
<p>
 ${blog.description}
</p>
</div>
<div class="btn">
<a href="#" class="registerBtn">Register Here</a>
</div>
</div>`;
connectionsContainer.insertAdjacentHTML("beforeend",blogHtml)
})
}