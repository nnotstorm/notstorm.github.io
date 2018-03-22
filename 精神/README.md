# Spirits

![screenshot](http://i.imgur.com/qbS29GT.jpg)
First version : DON'T LOSE YOUR WAY

![screenshot](http://i.imgur.com/fmR7mr6.jpg)
Second version : A BELIEVING HEART IS YOUR MAGIC

![screenshot](http://i.imgur.com/siiXX9p.jpg)
Third version : ROW ROW FIGHT THE POWER 

What's a startpage/homepage ?
-------------------------------

It's a local website, namely you'll be able to access it thanks to files present on your computer (in general, it'll be a .htm file), and some browser like Firefox Mozilla and Google Chrome will allow you to set a custom homepage. What's more, thanks to some add-ons/extensions such as 'New Tab Homepage' for FF or 'New Tab Redirect' for Chrome, you'll be able to set this said startpage as you new tab page (amazing isn't it ?). There are a lot of custom startpage on the net, you can check this list of startpage http://startpages.github.io/ or search some of them on github/deviantart. 


What's the structure of 'Spirits' ?
-------------------------------

There are 4 differents folders and two files (.htm and .css) : 
- the first folder `background` contains, well, the background I used, there are three ones, if you want to change them or add some more, rename them like `background04.jpg`, it'll be easier to edit it in the others files.
- in the second folder `banner` you'll find, surprise, the three differents banners I made for the startpage featuring Mako Mankanshoku from Kill La Kill, Sucy Manbavaran from Little Witch Academia and Nia Teppelin from Tengen Toppa Gurren Lagann (I really like these shows). Like the background, if you want to change the banner or add others ones, add the files in this folder and name them `banner4.jpg`.
- the `icons` folder has the icons I used, there are only three : the favicon (ie the icon in the tab), the search and enter icons.
- the `js` folder is very important since you'll have to edit some files to add banner/background or modify some functionalities.
- the `.htm` file is the most important file since you'll need it to open the startpage on your browser, if you want to change the structure of the startpage you'll have to edit it.
- the `.css` file will be needed if you want to change the aspect of the startpage, namely the background, the font-family, the size of a picture, etc.

Features of 'Spirits'
-------------------------------

There are two main features :
- first, the button `SHUFFLE`, by clicking it you'll be able change the banner/background of the startpage, it'll be at random, otherwise it won't be fun !
- second, in the search bar, by entering some special keys, such as `-y jazz music`, you'll be able to search directly on youtube and not on Google. Another exemple with `-w moe`, it'll search 'moe' on wikipedia. I took the code from another existing startpage, but can't seem to remember it now, will put the credits the moment I found it.

How can I customize 'Spirits' ?
-------------------------------

### LINKS :
- open the `.htm` file in a text editor (personally I use Sublime), search for `LINK1` and replace it by the name of a website you visit frequently (for exemple Facebook). 
- after that, change the `http://link1.com/` with the URL of the said site (if we take Facebook, it'll be `https://www.facebook.com/`).
- if you want to add a link, copy paste this code (you'll have to change the `ANOTHER LINK` and the href link of course) after the LINK6 (around line 67) :                                       

``` htm 
<a href="http://anotherlink.com/">
    <li> ANOTHER LINK </li>
</a> 
```

### DATES & MONTHS :
- open the `.htm` file in a text editor, search for 'var days' (it'll be at the beginning of the document, around line 19), and change the days (instead of 'dimanche' you can write 'sunday' or 'domingo').
- search for 'var months' (under the var days) and change the months (instead of janvier, you can write january or enero). 

``` javascript
/* DAYS AND MONTHS IN ENGLISH */
var days = ['sunday','monday','tuesday','wenesday','thursday.','friday','saturday'];
var months=['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
```
- if you want to change the structure of the date, you'll have to edit the following code : the `("0" + m.getDate()).slice(-2)` is the dats, the `(months[m.getMonth() ])` is the month and the `m.getFullYear()` is the year,

``` javascript
var dateString = (days[ m.getDay() ])  + " " +  ("0" + m.getDate()).slice(-2) + " " + (months[ m.getMonth() ])   + " " + m.getFullYear()            
```

### BANNER & BACKGROUND
- first of all, like I said previously, change/add the banner in the banner folder and the background in the background folder and renamed them `background[insert a number].jpg` and `banner[insert a number].jpg` (you'll have to change the '[insert a number]' of course.
- open the `js` folder, and edit `banner.js` in a text editor : if you one to add others banners/background, you'll have to copy paste this code, you'll have to change the number of course (if you want a fifth banner/background, replace the `4` by `5` : 

``` javascript
/* ADDING A FOURTH BANNER AND BACKGROUND */
4: {
    image: "banner/banner4.jpg",
    landscape:"background/background04.jpg",

}, 
```
- you'll have to change the value in the following code, for example if you have 6 banner/background, you'll have to copy paste this code 
``` javascript
var randomNumber = Math.floor((Math.random() * 6) + 1);
```

### SEARCH 
- open the `js` folder and edit `search.js` in a text editor , you'll have to modify the following code 
``` javascript
case "-u":
query = query.substr(3);
window.location = "https://userstyles.org/styles/browse?search_terms=" 
break;
```
- first, you have to decide of a website, I will take `bato.to and a special key for this said site, I will take -b, thus you'll have the following code

``` javascript
case "-b":
query = query.substr(3);
window.location = "https://userstyles.org/styles/browse?search_terms=" 
break;
```
- after that, you'll need to replace the value of `window.location`, in the example of batoto you'll have to go to the site and search for something, for example if I'm looking for Hinamatsuri (a pretty gud manga, you should read it asap), the link will be `http://bato.to/search?name=Hinamatsuri&name_cond=c`, you'll have to copy the link before 'Hinamatsuri', namely `http://bato.to/search?name=`, and you'll have the following code 

``` javascript
case "-b":
query = query.substr(3);
window.location = "http://bato.to/search?name=" 
break;
```
How to use 'Spirits' ?
-------------------------------
First of all, right click on the `.htm` file and open it with a browser of your choice.

### FOR FIREFOX MOZILLA
- go to the settings or copy/paste `about:preferences` in the URL bar. In `General`, copy/paste the URL of the startpage (it should be something like `file:///C:/Users/[Your name]/Documents/SPIRIT/index.htm` in `Home Page` and choose the option `Show my home page` for `When Firefox starts`.
- download the add-on `New Tab Homepage` (https://addons.mozilla.org/en-US/firefox/addon/new-tab-homepage/), it'll redirect you to your homepage each time you open a new tab.

### FOR GOOGLE CHROME
- go to the settings. In `Appearance`, check `show home page` and modify the link with the URL of the startpage.
- download the extension `New Tab Redirect` (https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna?hl=en)

Before using the startpage, I suggest you to :
- download the font I used, namely `Montserrat` (https://www.fontsquirrel.com/fonts/montserrat), `KFHimaji` (http://www.freejapanesefont.com/kf-himaji/) and `Roboto` (https://www.fontsquirrel.com/fonts/roboto), they're all free, lucky you !

Where can I find you works ?
-------------------------------

I have a deviantart page : nicknameisfortheweak.deviantart.com

And that's it, I hope you'll enjoy this startpage if you see this submission ! Like usual, if you have find the script cool or bad, if you have questions, suggestions, there is a section called 'Comments', you can use it everytime !
