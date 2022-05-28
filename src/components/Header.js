const Header = {
  render() {
    return /* html */`
            <div class="bg-[#272f53] py-4">
                <img src="https://picsum.photos/900/400" class="mx-auto"/>
            </div>
            <div class="bg-[#b3bce6] py-4">
            <nav>
                <ul class="menu text-center my-4">
                    <li class="inline-block mx-4"><a href="/" class="menu-item__link">Trang chủ</a></li>
                    <li class="inline-block mx-4"><a href="/about" class="menu-item__link">Giới thiệu</a></li>
                    <li class="inline-block mx-4"><a href="/news" class="menu-item__link">Tin tức</a></li>
                    <li class="inline-block mx-4"><a href="/product" class="menu-item__link">Sản phẩm</a></li>
                    <li class="inline-block mx-4"><a href="/contact" class="menu-item__link">Liên hệ</a></li>
                </ul>
            </nav>
            </div>
        `;
  }
}
export default Header;