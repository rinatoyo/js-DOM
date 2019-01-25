/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var divName = document.getElementById('name1');
divName.innerHTML = 'Tay-Tay';


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var divPos = document.getElementById('position2');
divPos.innerHTML = 'Project Manager';


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var divAlias = document.getElementById('alias3');
divAlias.innerHTML = 'Concatenation';


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var favSong = document.getElementsByClassName('profile');
favSong[0].innerHTML = 'When Doves Cry';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var quote = document.getElementsByClassName('profile');
quote[1].innerHTML = "If you spend too much time thinking about a thing, you'll never get it done.";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var favChar = document.getElementsByClassName('alias');
favChar[2].innerHTML = 'Jules Winnfield';

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var igeSan = document.createElement('div')
igeSan.id = 'name7';
igeSan.innerHTML = 'David Ige'
nameParent.appendChild(igeSan);
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

