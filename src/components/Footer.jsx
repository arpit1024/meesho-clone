// import * as bs from 'bootstrap/dist/css/bootstrap.css';
// import * as bst from 'bootstrap/dist/css/bootstrap-theme.css';

import {Link} from "react-router-dom";
import {Accordion,Container} from "react-bootstrap";

export const Footer = ()=>{
    const linkData = ["Silk Saree Kajal" , "Sanitizers Kurtis Design" , "Lehenga Designs" , "Goggles" , "Suits" , "Mangalsutra" , "Gold Earrings" , "Blazers for Men" , "Bridal Lehengas" , "Necklaces" , "Rakhi" , "Ring" , "Salwar Suits" , "Blouse" , "Clocks" , "Girls Jeans" , "Ladies Watches" , "Gold Necklace Design" , "Hair Straighteners" , "Denim Jackets for Men" , "Kurta Design" , "Sexy Maxi Dresses" , "Noserings" , "Bed Sheets" , "Gold Bangles Design" , "Gold Chain Design" , "Led Lights" , "Umbrellas" , "Payal" , "Ladies Dress" , "Gold Mangalsutra Design" , "Men Jeans" , "Jewellery Sets" , "Paithani Sarees" , "Sofa Covers" , "Sweaters for Women" , "Tops Designs" ,"Water Bottles" , "Wedding Sarees"]
    return (
        <Accordion className="footer-part" defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header ><h3 className="body-text">More About Meesho</h3></Accordion.Header>
    <Accordion.Body>
    <div>
      <h2 className="footer-h"><strong>Find The Biggest Collection Of Affordable Products In Every Category</strong></h2>
      <p className="footer-des">Meesho has over 50 lakh products in different categories like clothes, cosmetics, and household items. There are over 650+ categories of products to choose from. You can read reviews and user feedback before placing an order. Some of the popular product categories are women's ethnic wear, men's top wear, western wear, accessories, and home essentials. Meesho also conducts regular quality checks to ensure that you get products of the best quality.</p>
      </div>
      <div>
      <h2 className="footer-h"><strong>Women's Ethnic Wear</strong></h2>
      <p className="footer-des">Our product selection encompasses the latest trending designs in every category - <Link className="footer-link" to={"/sarees"}>Sarees</Link>,<Link className="footer-link" to={"/suits"}>Suits</Link>, <Link className="footer-link" to={"/kurties"}>Kurties</Link>, jewelry, and many more. Whether you are shopping for the festive season, casual or party wear clothes, you will find everything you need on our website. Our comprehensive collection of jewelry sets and accessories will steal your heart.</p>
      </div>
      <div>
      <h2 className="footer-h"><strong>Women's Western Wear</strong></h2>
      <p className="footer-des">When it comes to Western wear for women, you will find the best quality clothes at the most affordable prices on Meesho. Our curated collection of Western wear includes designer Western dresses, jeans, skirts, shorts, <Link className="footer-link" to={"/grown"}>grown</Link> along with other essential accessories like handbags, <Link className="footer-link" to={"/sg"}>sunglasses</Link>, and fashion jewelry. You can buy all the latest styles at reasonable prices.</p>
      </div>
      <div>
      <h2 className="footer-h"><strong>Men's Western Wear</strong></h2>
      <p className="footer-des">Our men's clothing collection features hundreds of options in men's top wear in every design, color, and pattern. We have all the trending <Link className="footer-link" to={"/sm"}>shirts for men</Link>, shirt dress material, latest t-shirts for men, all at unbelievable prices. You can also check out our men's bottom wear and winter <Link className="footer-link" to={"/sm"}>wear for men</Link> collection if you want budget-friendly but stylish <Link className="footer-link" to={"/sm"}>jeans for men</Link>, jackets, sweaters, coats, innerwear, and more. And when it comes to formals for men, we have an exclusive collection that includes, men's suits, formal pants, formal shoes for men, and much more.</p>
      </div>
      <div>
      <h2 className="footer-h"><strong>Men's Ethnic Wear</strong></h2>
      <p className="footer-des">Apart from Western wear, we also have the latest ethnic wear options to choose from. If you want to explore traditional outfits for men, take a look at our latest Sherwanis, Kurtas, Kurta sets, ethnic jackets, bottom wear, and more. Do not forget to check out our footwear collection for all the latest shoes for men.</p>
      </div>
      <div>
      <h2 className="footer-h"><strong>Accessories and Footwear</strong></h2>
      <p className="footer-des">Women's Accessories: No outfit is complete without the right accessories and shoes. To add essence to any outfit, take your pick from our latest collection of accessories for women. Add a trendy sling bag or clutch for a gorgeous evening look. Add a stylish scarf for an ultra-chic look. As for footwear, we have a plethora of options for you. From <Link className="footer-link" to={"/hh"}>high heels</Link> and partywear ethnic shoes to daily wear shoes, sandals, flip flops, and more, you will find all the latest designs at very affordable prices.</p>
      <p className="footer-des">Mens Accessories: Accessorizing your outfits is just as important for men and that is why we also have a wide variety of must-have men's fashion accessories like smartwatches, backpacks, wallets, <Link className="footer-link" to={"/belt"}>belts</Link>, keychains, bracelets, etc. Moreover, we have also added our latest selection of men's footwear for you. Whether you are looking for casual sneakers and sports shoes, formal leather shoes or ethnic party wear shoes, you will definitely get what you want here. What's more? You can avail of exclusive discounts and offers on every purchase.</p>
      </div>
      <div>
      <h2 className="footer-h"><strong>Kids' Clothing</strong></h2>
      <p className="footer-des">Finding the right clothes for your kids has never been so easy. Browse through our lineup of the most comfortable and adorable kids' outfits. From <span className="footer-link">cute</span> dresses, skirts, suits, frocks for your little girl to lovely T-shirts, shirts, jeans, and shorts for your baby boy, you will find all you need here. Not just that, we also have traditional clothing and accessories for kids of all ages.</p>
      </div>
      <div>
      <h2 className="footer-h"><strong>Beauty & Makeup</strong></h2>
      <p className="footer-des">Whether you're looking for the perfect foundation & lipstick, the best anti-aging cream, or just a face wash, you can find just what you're looking for when you shop online with us. We stock thousands of products in all price ranges, so you can find the perfect product for your budget. And whether you want the latest in skincare technology or the hottest in fragrances, you can find it when you browse our cosmetics, fragrances, and skincare range.</p>
      </div>
      <div>
      <h2 className="footer-h"><strong>Home & Kitchen Essentials</strong></h2>
      <p className="footer-des">Home Furnishing & Decor: If you are looking for home furnishing essentials and other household products, you are just where you need to be. Our huge range of the latest curtains, <span className="footer-link">bedsheets</span>, table cloths, decorative showpieces, and other home furnishing products will surely solve all your problems. Kitchen Products: As for other household essentials, you can take your pick from a huge range of kitchen tools, serveware, drinkware, and other utility items. If you love to cook, you must take a look at our handpicked selection of high-quality kitchen products.</p>
      <p className="footer-des">Stationery & Office Supplies: If you are looking for inexpensive stationery items and office products, you are in luck! We have top-quality products like paper envelopes, paper clips, pens, diaries, etc. that are widely used by students, professionals, businessmen, etc. in their day-to-day life. </p>
      <p className="footer-des">Electronics & Automotive Accessories: At Meesho, we have made it easy for you to find affordable products that suit your lifestyle. With our exclusive deals and discounts, you don't have to worry about spending too much on your favorite gadgets and accessories. Browse through our collection and buy top-quality electronic items, automotive and mobile accessories at affordable prices.</p>
      <p className="footer-des">Sports & Fitness: To help you stay fit and healthy, we have curated a selection of useful sports and fitness equipment. These products include but are not limited to dumbell sets, jump ropes, yoga mats, exercise bands, resistance bands, etc. Check out our latest selection and find everything you need in one place.</p>
      <p className="footer-des">Our products come directly from wholesalers and suppliers, which means that you can get them at factory prices. This is the only platform where you can get trending products in every category without worrying about high prices. You can also utilize offers and discounts to save even more.</p>
      </div>
      <div>
      <h2 className="footer-h"><strong>Trending now</strong></h2>
      <h3 className="footer-des2">
          {linkData.map((e,i)=>(
              <Link className="footer-link" to={"/trending"}>{e} <span className="link-sep"> | </span></Link> 
          ))}
      </h3>
      </div>
    </Accordion.Body>
  </Accordion.Item>
        </Accordion>
    )
}