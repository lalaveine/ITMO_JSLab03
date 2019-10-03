#!/usr/bin/node

const list = [ 'NaN', null, undefined, 0, '', 24 ];

for (const element of list) {
	const decider = 
		(element === null) ?
			'=null' :
			(element === undefined) ?
				'=undefined' :
				(element === '') ?
					'=""' :
					(isNaN(element)) ?
						'=NaN' :
						(element === 0) ?
							'=0' :
							'notsure';
	console.log(`${decider}`);
}

