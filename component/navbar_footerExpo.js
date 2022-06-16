function navbar(){
    return `<div id="row1">
            <div><a href="#">Marketplace</a></div>
            <div><a href="#">Help & FAQs</a></div>
            <div><a href="#"><img src="https://assets.asosservices.com/storesa/images/flags/in.png" alt="India" class="icon"></a></div>
        </div>
        <div id="row2">
            <div id="row2div">
                <div id="asos"><a href="#"><b>asos</b></a></div>
                <div id="women"><a href="#">WOMEN</a></div>
                <div id="men"><a href="#">MEN</a></div>
                <div id="search_box"><input type="text" placeholder="Search for itmes and brands" id="search"></div>
                <div id="profile"><a href="#"><img src="icons/user.png" alt=""></a></div>
                <div id="like"><a href="#"><img src="icons/love.png" alt=""></a></div>
                <div id="cart"><a href="#"><img src="icons/cart.png" alt=""></a></div>
            </div>
        </div>
        <div id="row3">
            <div id="row3div">
                <div id="sales"><b>Sale</b></div>
                <div id="new">New in</div>
                <div id="clothing">Clothing</div>
                <div id="shoes">Shoes</div>
                <div id="sportswear">Sportswear</div>
                <div id="accessories">Accessories</div>
                <div id="summer">Summer</div>
                <div id="trending">Trending now</div>
                <div id="topman">Topman</div>
                <div id="face">Face + Body</div>
                <div id="brands">Brands</div>
                <div id="outlet"><b>Outlet</b></div>
                <div id="market">Marketplace</div>
            </div>
            <div id="hidden_div">
                <div id="hidden_sales">anything</div>
            </div>
        </div>
        `;
}

function footer(){
    return `<div id="footerR1">
                <div id="social">
                    <div>
                        <div><a href="https://www.facebook.com/ASOS/"><img src="/icons/facebook.png" alt=""></a></div>
                        <div><a href="https://www.instagram.com/asos/"><img src="/icons/instagram.png" alt=""></a></div>
                        <div><a href="https://www.snapchat.com/add/asosfashion"><img src="/icons/snapchat.png" alt=""></a></div>
                    </div>
                </div>
                <div id="paymode">
                    <div>
                        <div><img src="https://images.asos-media.com/navigation/visa-png" alt=""></div>
                        <div><img src="https://images.asos-media.com/navigation/mastercard-png" alt=""></div>
                        <div><img src="https://images.asos-media.com/navigation/pay-pal-png" alt=""></div>
                        <div><img src="https://images.asos-media.com/navigation/american-express-png" alt=""></div>
                        <div><img src="https://images.asos-media.com/navigation/visa-electron-png" alt=""></div>
                    </div>
                </div>
        </div>
        <div id="footerR2">
            <div>
            <div>
                <h4>HELP & INFORMATION</h4>
                <a target="_blank" href="https://www.asos.com/customer-care/"><P>Help</P></a>
                <a target="_blank"href="https://my.asos.com/identity/login?signin=ae3753bdf8e67cfbcee341e63dacaeeb"><P>Track order</P></a>
                <a target="_blank"href="https://www.asos.com/payments-and-deliveries/delivery/"><P>Delivery & returns</P></a>
            </div>
            <div>
                <h4>ABOUT ASOS</h4>
                <a target="_blank"target="_blank" href="https://www.asos.com/about/"><p>About us</p></a>
                <a target="_blank" href="https://asoscareers.asos.com/"><p>Careers at ASOS</p></a>
                <a target="_blank" href="https://www.asosplc.com/fashion-with-integrity/"><p>Corporate responsibility</p></a>
                <a target="_blank" href="https://www.asosplc.com/"><p>Investor's site</p></a>
            </div>
            <div>
                <h4>MORE FROM ASOS</h4>
                <a target="_blank" href="https://www.asos.com/discover/our-apps/" ><p>Mobile and ASOS apps</p></a>
                <a target="_blank" href="https://marketplace.asos.com/?ctaref=Global%20footer"><p>ASOS Marketplace</p></a>
                <a target="_blank" href="https://www.asos.com/gift-vouchers/?ctaref=global%20footer|gift%20vouchers"><p>Gift vouchers</p></a>
                <a target="_blank" href="https://www.asos.com/discover/black-friday-cyber-monday-deals/"><p>Black Friday</p></a>
                <a target="_blank" href="https://thrift.plus/pages/get-started-asos"><p>ASOS x Thrift+</p></a>
            </div>
            <div>
                <h4>SHOPPING FROM:</h4>
                <div>
                    <p>You're in </p><img src="https://assets.asosservices.com/storesa/images/flags/in.png" alt=""><h4>| CHANGE</h4>
                </div>
            </div>
            </div>
        </div>
        <div id="footerR3">
            <div>
                <div>ⓒ 2022 ASOS</div>
                <div>
                    <div><p>Privacy & Cokkies</p></div>
                    <div><p>Ts&Cs</p></div>
                    <div><p>Accessibility</p></div>
                </div>
            </div>
        </div>
        `;
}

export {navbar, footer};
