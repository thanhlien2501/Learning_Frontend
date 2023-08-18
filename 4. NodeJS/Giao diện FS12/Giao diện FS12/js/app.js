// fileSystem
let linkAPI = 'https://apiforlearning.zendvn.com/'  // Không bị change
let linkAPIMenu = linkAPI + 'public/api/v2/categories_news'
let linkAPIGold = linkAPI + 'api/get-gold'
let linkAPILatestNews = linkAPI + 'public/api/v2/categories_news/articles?page=1'

// Exercise 2: https://apiforlearning.zendvn.com/public/api/v2/categories_news

let menuBar = document.getElementById('nav-menu-container')
fetch(linkAPIMenu)
.then(response => response.json())
.then(menus => {
    let xHTML = '';
    let xHTMLChild = '';
    menus.data.forEach((menu,index) => {
        if (index < 3) {
        xHTML += `<li class="menu-active"><a href="${menu.link}">${menu.name}</a></li>`
    }
        else {
            xHTMLChild += `<li><a href="${menu.link}">${menu.name}</a></li>`
    }
})
    menuBar.innerHTML = xHTML + '<li class="menu-has-children"><a href="">Khác</a><ul>' + xHTMLChild + '</ul>'
})

//Buổi 27: 
// Exercise 3: http://apiforlearning.zendvn.com/api/get-gold
let addTable = document.getElementsByClassName('single-sidebar-widget most-popular-widget')[0]
fetch(linkAPIGold)
.then(response => response.json())
.then(goldPrices => {
     let xHTML = ''
     goldPrices.forEach(goldPrice => {
        xHTML += `<tr>
            <td>${goldPrice.type}</td>
            <td>${goldPrice.buy}</td>
            <td>${goldPrice.sell}</td>
          </tr>
        `
     })
    addTable.innerHTML = `<h6 class="title">Bảng giá vàng</h6>
                          <table>
                          <thead>
                            <tr>
                              <th>Type</th>
                              <th>Buy</th>
                              <th>Sell</th>
                            </tr>
                         </thead>
                         <tbody>
                           ${xHTML}
                         </tbody>
                         </table>
                         `
                               
})
// Note: Nếu dùng map thì sẽ return ra mảng mới, thì phải dùng thêm join để chuyển về string

// Exercise 3: https://apiforlearning.zendvn.com/public/api/v2/categories_news/articles?page=1
let divLatestNews = document.getElementsByClassName('latest-post-wrap')[0]
fetch(linkAPILatestNews)
.then(response => response.json())
.then(posts => {
  console.log(posts.data);
  let xHTML = ''
  posts.data.forEach(post => {
     xHTML += `
     <div class="single-latest-post row align-items-center">
									<div class="col-lg-5 post-left">
										<div class="feature-img relative">
											<div class="overlay overlay-bg"></div>
											<img class="img-fluid" src="${post.articles[0].thumb}" alt="image">
										</div>
										<ul class="tags">
                       <li><a href="#">${post.name}</a></li>
										</ul>
									</div>
									<div class="col-lg-7 post-right">
										<a href="${post.link}">
											<h4>${post.articles[0].title}</h4>
										</a>
										<ul class="meta">
											<li><a href="#"><span class="lnr lnr-user"></span>${post.articles[0].author}</a></li>
											<li><a href="#"><span class="lnr lnr-calendar-full"></span>${post.articles[0].publish_date}</a></li>
											<li><a href="#"><span class="lnr lnr-bubble"></span>${post.articles[0].author_info.email}</a></li>
										</ul>
										<p class="excert">
                    ${post.articles[0].description}
										</p>
									</div>
								</div>
     `
  })
  return divLatestNews.innerHTML = `
                            <h4 class="cat-title">Latest News</h4>
                            ${xHTML}
                                    `
})


