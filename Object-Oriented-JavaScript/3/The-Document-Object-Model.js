console.log('document.documentElement.firstChild.previousSibling   ',document.documentElement.firstChild.previousSibling)

function prev( elem ) {
do {
elem = elem.previousSibling;
} while ( elem && elem.nodeType != 1 );
return elem;
}
console.log('document.documentElement   ',document.documentElement);
console.log('document.documentElement.firstChild.nextSibling   ',document.documentElement.firstChild.nextSibling);
console.log('prev(document.documentElement)   ',prev(document.documentElement));

console.log('document.documentElement.firstChild   ',document.documentElement.firstChild);
console.log('prev(document.documentElement.firstChild)   ',prev(document.documentElement.firstChild));


function next( elem ) {
do {
elem = elem.nextSibling;
} while ( elem && elem.nodeType != 1 );
return elem;
}

console.log('document.documentElement   ',document.documentElement);
console.log('next(document.documentElement)   ',next(document.documentElement));

console.log('document.documentElement.firstChild   ',document.documentElement.firstChild);
console.log('next(document.documentElement.firstChild)   ',next(document.documentElement.firstChild));


function first( elem ) {
elem = elem.firstChild;
return elem && elem.nodeType != 1 ?
next ( elem ) : elem;
}

function last( elem ) {
elem = elem.lastChild;
return elem && elem.nodeType != 1 ?
prev ( elem ) : elem;
}

function parent( elem, num ) {
num = num || 1;
for ( var i = 0; i < num; i++ )
if ( elem != null ) elem = elem.parentNode;
return elem;
}
setTimeout(function(){
	console.log('next( first( document.body ) )      ',next(first( document.body)))
})

