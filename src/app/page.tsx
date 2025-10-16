"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "heroImage", url: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal." },
  { id: "aboutImage", url: "https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Warm and inviting Italian cafe with a variety of pizzas and drinks displayed on a counter." },
  { id: "menuImage", url: "https://images.pexels.com/photos/12046657/pexels-photo-12046657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two pizzas with various toppings on wooden boards over a rustic green table, captured in a top-down view." },
  { id: "teamImage_1", url: "https://images.pexels.com/photos/34308310/pexels-photo-34308310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "chef in the kitchen - Photo by Novkov Visuals" },
  { id: "testimonialImage_1", url: "https://images.pexels.com/photos/7142968/pexels-photo-7142968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two young women enjoying a fun pizza night at home, sharing laughter and joy." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizzeria"
          buttonText="Order Now"
          buttonVariant="text-stagger"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-yellow-100 text-brown-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Delicious pizzas made with love!"
            tag="Now Open"
            imageSrc="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "See Menu", href: "menu" },
              { text: "Order Online", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-yellow-100 text-brown-900">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Fresh Ingredients", description: "Only the best for our pizzas!", icon: CheckCircle },
              { title: "Experienced Chefs", description: "Led by a passionate kitchen team." }
            ]}
            imageSrc="https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-yellow-100 text-brown-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Margherita", price: "$12", imageSrc: "https://images.pexels.com/photos/12046657/pexels-photo-12046657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "Pepperoni", price: "$14", imageSrc: "https://images.pexels.com/photos/12046657/pexels-photo-12046657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "3", name: "Veggie Deluxe", price: "$13", imageSrc: "https://images.pexels.com/photos/12046657/pexels-photo-12046657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
            title="Our Menu"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-yellow-100 text-brown-900">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            testimonials={[
              { id: "1", name: "Jane Doe", role: "Food Blogger", company: "Taste Buds Blog", rating: 5, imageSrc: "https://images.pexels.com/photos/7142968/pexels-photo-7142968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
            title="What Our Customers Say"
            description="Real feedback from our pizza fans!"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-yellow-100 text-brown-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Order"
            title="Order Your Favorite Pizza"
            description="Place your order online or contact us for reservations."
            mediaPosition="right"
            imageSrc="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-yellow-100 text-brown-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [ { label: "Home", href: "home" }, { label: "Menu", href: "menu" }] },
              { items: [ { label: "About", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            logoText="Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}