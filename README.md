# Lemonade

Lemonade is a a simple, flexible and easy-to-customise grid system. It was created in order to give designers & developers a kickstart with their projects. It currently supports Chrome, Firefox, Safari, Opera & IE 9+, also supports major phone devices too.
![Lemonade](http://f.cl.ly/items/232a3H2N2t2I3F3g1P2H/web.jpg)

## Installation

-   Clone `git clone https://github.com/dope/lemonade.git`
-   [Download the latest version](https://github.com/dope/lemonade/archive/master.zip)
-   Install with Bower: `bower install lemonade`


## Getting Started
Getting started couldn't be easier

### First you need to link the stylesheets
```
<link rel="stylesheet" type="text/css" href="css/lemonade.css">
<link rel="stylesheet" type="text/css" href="css/styles.css">
```
lemonade.css is the main grid (which can be easily customised)
styles.css is your base styles on top of your grid

### Structuring your layouts
```
<div class="frame">
	<div class="bit-3">Content here</div>
	<div class="bit-3">Content here</div>
	<div class="bit-3">Content here</div>
</div>
```
Creating a three-column layout (for galleries for example) is really simple, this will scale down to 100% on mobile. Wrap the .bit's in a .frame class to clear the floats.

### Customising your grid
Maybe you want to go old school and create a two-column layout, It's so easy all you need is basic math (along as the .bit- classes equal to 100%, it will be perfect).
```
<div class="frame">
	<div class="bit-75">Content here</div>
	<div class="bit-25">Content here</div>
</div>
```
Creating the css is also simple:
```
.bit-75 {width:75%;}
.bit-25 {width:25%;}
```

### Support
If you have any questions or you're struggling with it, get in touch:

-   [hello.joer@gmail.com](mailto:hello.joer@gmail.com)
-   [@joericho](http://twitter.com/joericho)

### Tutorials
[Build a Freshly Squeezed Responsive Grid System](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/build-a-freshly-squeezed-responsive-grid-system)
If you have written about Lemonade or want too - [let me know](http://twitter.com/joericho)

###Lets make Lemonade
Currently building the real documentation website for Lemonade, If you've got any finished results of using Lemonade or you've got any kind words to say - [get in touch](http://twitter.com/joericho)

### Thank you!
I've had some amazing feedback since creating Lemonade and I am glad it can help people.

Also want to thank people who are testing and contributing to the product.
