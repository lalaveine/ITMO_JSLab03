#!/usr/bin/node

const age = 19;
const restricred = 
	( age < 18 ) ? 
		'yes' :  
		( age === 18 ) ?
			'notsure' :
			'no';
console.log( restricred );
