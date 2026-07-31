
## create npm scripts 
- "start" : "parcel index.html"
- "build" : "parcel build index.html"

## diff btwn npx parcel index.html vs npm run start ? 
- while in script we use parcel index.html , earlier we did npx parcel , but now we do npm run 
- what is the difference between npx parcel vs npm run (while under the hood it using parcel index.html)

## what is DOM elem vs React Elem ?
- ✅ HTML elements become DOM elements - when the browser parses the HTML and creates the DOM tree

### A React Element is a JavaScript object that describes what you want to see on the UI.
-It is a lightweight description of a UI element. It is not a real HTML element and not a DOM element.
- ex - React.createElement("h1", {key : "heading1"}, "React Heading 1") 

 ## React Elem is an js object
 - when we rendered it to dom , then its become html element ,
 - How can we see it ?
 - by doing console.log()
 
 ## How we rendered ?
 - const root = ReactDOM.createRoot(document.getElementById("root"));
    inside root.render()


## when we do root.render(conatiner) , and pass the react elem into it (object) , The powerfull library reactDOM , takes this object and convert it to html object and push it the browser ,
- push it mean  , it replace everything , that is inside this root with whatever iam rendering from here .
- it will replace not append . 

## React.createElement("h1", {key : "heading1"}, "React Heading 1")  , this is not a good way to write react elem , its very cleansy , right , unknowing , html inside js like ? but the sysntex is very messy ? 
- what is easy - React.creatElem vs <h1></h1> ? 
- when react was build , this is core of react ? 
- but soon react developer realise that if we are going to create h1 tag or div span like this , this not going to work , it not developrs friendly , it vary hard also . 
- so what can we use now 
- so facebook developrs create jsx 
- what is this jsx ? 
- jsx is a js syntax which is easier to create react eloement 

## lots of react dvelopersthing jsx is part of react , But is not correct , React is different jsx is different .
- lots of deveoprs think react can't write with out jsx , its wrong , we can react application without usinh jsx , by using reactElem .

## when react and another frameworks not there , we used to have basics html, css , js all separte files , we write all code separtely ,
- so these framewors these libaray , they try to merge the all things up and so that we can do the same thing in one file .

## JSX heading
- const jsxHeading = <h1>Namaste React Using JSX 🚀</h1>;
- do you see this is familear to something 
- is this html inside js ,
- No its not html inside js , It is JSX 
- JSX is a html like syntax , not html , looks like XML , not xml aslo ,
- <h1>Namaste React Using JSX 🚀</h1> , this peace of code become React Element , 
- JSX is the just syntax
- React element is the object 

## const jsxHeading = <h1>Namaste React Using JSX 🚀</h1>; , Is this a valid js ?
- > This is not pure js 
- > js does not comes with jsx built insdie it , js engine does not understand jsx ,
-> JS understand ES -> pure js which is js engine undersatnd , browser understand ,
-> Then how is this code working ? 
-> parcel is doing the job behind the scene .
-> This code is developed by us , even before thsi code goes to the js engine , it is transpiled before it goes to js engine , 
then js engines recive the code which browser understand , 
-> JSX code transpiled before it reaches js engine 
-> transpiled mean this code is convereted to the code that browser can understand ,
-> will ReactDOM understand jsx ? 
like this -> root.render(<h1>Namaste React Using JSX 🚀</h1>) ; 
-> No, ReactDOM wont understand this code ;
-> who is transpiling this code ?
-> parcel 
-> is parcel itself transpiling the code ?
-> No, 
-> Parcel give the responsibilty of transpiling to AN package called babel .
-> what is babel ?
-> its an normal js package , who insated it ? -> Parcel 
-> as soon as i write jsx - <h1>Namaste React Using JSX 🚀</h1> and save my file , parcel rebuild it , as soon as save this then babel convert this code to a code react will underatsnd , 
-> Think babel is black box -> 
-> babel is not craeted by facebook ,

## How is this code running ?
-> React.createElement => return an ReactElement => its an js object => Then it is rendered by ReactDOM => and converted to HTML Element

## How the JSX works ?
-> JSX code transpile to React.createElement by babel => js Object => rendered by reactDOm and converetd to HTML Element

## you can say babel is transpiler or js compiler , whatwver you want

## how babel transpile ?
- see token by token create an abstract syntext tree and so on

## all the attribute we write in jsx should be in camelCase 
## in jsx if you want to write in multiple line you have to wrapp it  inside parenthesis 

## what is react component ?
-> you have heared that , every people say everything in react is a component 
-> There are two types of component in recat 
1. class based component (old way of writing code) // nobody used 
2. functional component (new way of writing code)

# what is react functional component ?
->  Just a normal js function 
-> React functional component is an js function which return jsx code 

# React Element vs React component 



## const HeadingComponent = () =>{
  return (
    <div id="container">
      <h1>Namaste React Functional Component 🚀</h1>
    </div>
  )
}
 ## How to render HeadingComponent into root ?
-> root.render(HeadingComponent()) 
-> root.render(<HeadingComponet />)

## what is component composition 
- > puting component insdie component 
-> const HeadingComponent = () => {
  return (
    <div id="container">
      <Heading />
      <h1>Namaste React Functional Component 🚀</h1>
    </div>
  );
};

## can we use normal function 
-> yes 

## in jsx anywhere if you write curly braces {} you can run any js expression 
{heading} 

## how to use react element insdie jsx 
{heading}

## {100+200} // it will print in ui 
## console.log("Hello");

##  const api = api.getData()
in jsx {api} // we injecting data over here , if some maliccious data came , try to do executed some data , xss 
- it can steal cookies , session storage , and many more 
- But JSx  takes care of injection att ,
- jsx will escape it , it sanitize it  

