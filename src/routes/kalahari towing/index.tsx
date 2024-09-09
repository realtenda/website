import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <main>
        <section aria-label="Main content of the page">
          <header>
            <>
              <img
                src="kalaharitowinglogo.png"
                alt="Kalahari Towing Logo"
                height={100}
                width={100}
              />
            </>

            <nav>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li> Company Profile</li>
                <li>Contact Us</li>
                <li>FAQ</li>
              </ul>
            </nav>

            <div>
              <span>Contact Us</span>
              <span>Menu</span>
            </div>
          </header>

          <article>
            <h1>Your Trusted Towing Service in Kathu and beyond</h1>
            <p>
              We are here to provide reliable, fast and proffessional tow
              services 24/7.
            </p>

            <div>
              <span>kalaharitowing@gmail.com</span>
              <span>083 656 1272</span>
            </div>

            <div class="heroImage">
              <img
                src="kalaharitowing hero image.png"
                alt="kalahari towing hero image"
                height={100}
                width={100}
              />
            </div>
          </article>
        </section>

        <section>
          <h2>Our Services</h2>

          <ul>
            <li>
              <article>
                <header>
                  <span>svg icon</span>

                  <span>expand icon</span>
                </header>

                <div>
                  <h3>Accident and Breakdown Town</h3>
                  <p>
                    Our experienced team will ensure your vehicle is transported
                    safely and effectively to the nearest repair facility.
                  </p>
                </div>
              </article>
            </li>

            <li>
              <article>
                <header>
                  <span>svg icon</span>

                  <span>expand icon</span>
                </header>

                <div>
                  <h3>24/7 Quick Road Side Assistance</h3>
                  <p>
                    From changing flat tires jump-starting dead batteries, we've
                    got you covered 24/7
                  </p>
                </div>
              </article>
            </li>

            <li>
              <article>
                <header>
                  <span>svg icon</span>

                  <span>expand icon</span>
                </header>

                <div>
                  <h3>Electrical and Mechanical Towing</h3>
                  <p>
                    Our experienced team will ensure your vehicle is transported
                    safely and effectively to the nearest repair facility.
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </section>

        <section>
          <h2>Who we are</h2>

          <p>
            When the unexpected happens on the road, Kalahari Towing is the
            helping hand you need. Serving Kathu and the surrounding Kalahari
            region, our dependable team is available around the clock to assist
            with towing.
          </p>

          <p>
            Our Experienced team will ensure your vehicle is transported safely
            and effectively to the nearest repair facilty
          </p>

          <ul>
            <li>
              <h3>100% </h3>
              <p>Customer Satisfaction</p>
            </li>

            <li>
              <h3>24/7 </h3>
              <p>Round the clock support</p>
            </li>

            <li>
              <h3>1500+</h3>
              <p>Tows Completed</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Read what people say about us</h2>

          <div>
            <article>
              <header>
                <span> 5 stars</span>
                <h3> Wade Van Wyk</h3>
                <h4> Company Y</h4>
              </header>

              <p>
                As a late-shift worker, l appreiacte their 24/7 availbilty. Used
                them twice now always prompt, proffessional, and reasonably
                priced.
              </p>
            </article>{" "}
            <article>
              <header>
                <span> 5 stars</span>
                <h3> Wade Van Wyk</h3>
                <h4> Company Y</h4>
              </header>

              <p>
                As a late-shift worker, l appreiacte their 24/7 availbilty. Used
                them twice now always prompt, proffessional, and reasonably
                priced.
              </p>
            </article>{" "}
            <article>
              <header>
                <span> 5 stars</span>
                <h3> Wade Van Wyk</h3>
                <h4> Company Y</h4>
              </header>

              <p>
                As a late-shift worker, l appreiacte their 24/7 availbilty. Used
                them twice now always prompt, proffessional, and reasonably
                priced.
              </p>
            </article>
          </div>
        </section>

        <section>
          <h2>Contact Us </h2>
          <p>
            We're here to help! Whether you need a tow, have aquestion about our
            services. or just want to share your experience, we'd love to hear
            from you.{" "}
          </p>

          <div>
            <span>kalaharitowing@gmail.com</span>
            <span>083 656 1272</span>
          </div>

          <div class="heroImage">
            <img
              src="kalaharitowing hero image.png"
              alt="kalahari towing hero image"
              height={100}
              width={100}
            />
          </div>
        </section>

        <header>
          <>
            <img
              src="kalaharitowinglogo.png"
              alt="Kalahari Towing Logo"
              height={100}
              width={100}
            />
          </>

          <nav>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li> Company Profile</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </nav>

          <div>
            <span>Contact Us</span>
            <span>Menu</span>
          </div>
        </header>
      </main>
    </>
  );
});
