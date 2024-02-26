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
$themeClrPrimary: #cc9e4c;
```


## License 📄

This project is licensed under the  **GPL-3.0** License - see the [LICENSE](LICENSE) file for details

