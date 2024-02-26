# Isabella's Portfolio


## How To Use 🔧

From your command line, first clone Portfolio:

```bash
# Clone this repository
$ git clone https://github.com/rammcodes/dopefolio

# Go into the repository
$ cd dopefolio

# Remove current origin repository
$ git remote remove origin
```

<br/>

Then you can install the dependencies

Using NPM:

```bash
# Install dependencies
$ npm install

# Listen to changes in CSS Preprocessor files ( SASS files )
$ npm run compile:scss
```

Once you run `npm run compile:scss`, then open the `index.html` inside your favorite browser or using the live server extension.

<br>

---

<br>

## Template Instructions:

## Step 1 - STYLES

Make sure you have started the SASS to CSS compilation by running

```bash
$ npm run compile:scss
```

Change the color theme of the website.

Go to `sass/abstracts/_variables.scss` and change the value of this sass variable called `$themeClrPrimary` to your preferred HEX color.

```scss
// Default value
$themeClrPrimary: #0062b9;
```

**NOTE**: I highly recommend to checkout the [Dopefolio Playground Link](https://dopefolio-playground.netlify.app) to test the template with different colors and see which color do you like the most.

<br/>

---

<br/>



### Contact Section

- On `.heading-sec__sub`, put a short description about the section.
- `.contact__form-field` is the field inside form. Currently, there are 3 fields but you can add more fields as per your need but just make sure to change the name of **label** and **input/textarea** inside it.

If you like to know how to submit forms so you can receive the form details in your email then highly recommend using **formspree.io** as it's easier to set up and free to use. If you are using **Netlify** to host the site then Netlify has an inbuilt form receiver which you can use instead of **formspree**.

```html
<!-- **** Contact Section of Homepage **** -->
<section id="contact" class="contact sec-pad dynamicBg">
  <div class="main-container">
    <h2 class="heading heading-sec heading-sec__mb-med">
      <span class="heading-sec__main heading-sec__main--lt">Contact</span>
      <span class="heading-sec__sub heading-sec__sub--lt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente
      </span>
    </h2>
    <div class="contact__form-container">
      <form action="#" class="contact__form">
        <div class="contact__form-field">
          <label class="contact__form-label" for="name">Name</label>
          <input
            required
            placeholder="Enter Your Name"
            type="text"
            class="contact__form-input"
            name="name"
            id="name"
          />
        </div>
        <div class="contact__form-field">
          <label class="contact__form-label" for="email">Email</label>
          <input
            required
            placeholder="Enter Your Email"
            type="text"
            class="contact__form-input"
            name="email"
            id="email"
          />
        </div>
        <div class="contact__form-field">
          <label class="contact__form-label" for="message">Message</label>
          <textarea
            required
            cols="30"
            rows="10"
            class="contact__form-input"
            placeholder="Enter Your Message"
            name="message"
            id="message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn--theme contact__btn">
          Submit
        </button>
      </form>
    </div>
  </div>
</section>
<!-- END Contact Section -->
```




## License 📄

This project is licensed under the  **GPL-3.0** License - see the [LICENSE](LICENSE) file for details

