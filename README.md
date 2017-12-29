## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>


### What I Did to Optimize the performance

_Specific modifications are outlined below_

Using Google PageSpeed, performance after optimization on for the index.html,
shows 90%/94% for mobile/desktop respectively.  Performance on the views/pizza.html
was optimized to 92%/94%.

There is room for further optimizations on the web server end that I am not amiable
to make for this test due to not having full access to the web server configuration.

#### index.html

* used imagemagick to convert pizzeria.jpg and profilepic.jpg to the webp format
* removed style and size properties from the pizzeria-100.webp img link
* recoded google fonts to use the googleapis font loader
* added media="print" for the print.css stylesheet
* moved style.css to inline "style" element
* moved remote images to local server and converted to .webp format
* minimize code

#### views/Pizza.HTML

* moved style.css to inline "style" element in html
* moved attribute css to "style" css
* added translateZ(0) property to .mover so GPU is used for rendering
* converted pizzeria.jpg into smaller sized .webp images in 200, 400, 800, and 1200 widths
* used imagemagick to convert pizza.png to .webp format
* added script to load jquery so error would not occur on $(document) reference
* added script to load stylesheet bootstrap-grid.css after the page is loaded.
     found code sample at http://www.vidalquevedo.com/how-to-load-css-stylesheets-dynamically-with-jquery
* minimize code


#### views/js/main.js

* use pizza.webp
* line 529 - made loop max 20 for number of pizzas
* changed document.querySelector to document.getElementById
* modified changePizzaSizes function
     - variables are outside for loop
     - tempContainer is used to reference document.getElementByID
* modified updatePositions functions
     - move scrollTop variable definition outside for intLoopEnd
     - created variable for loop end and used it in for loop definition
     - variable phase is instantiated in the for loop definition
* referenced getElementByID('movingPizzas1') with container movingPizzas1
* pizzasDiv instantiated outside for loop
* moved for loop variables to be instatiated at loop definition
* minimize code
