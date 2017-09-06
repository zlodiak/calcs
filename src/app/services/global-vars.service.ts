import { Injectable } from '@angular/core';


@Injectable()
export class GlobalVarsService {

	private vars: Object = {
		'isVisibleFlags': true,
		'accuracy': 2
	};

  constructor() {};

 	getVar(key): any {
 		return this.vars[key];
 	};

 	setVar(key, val): void {
 		//console.log(key, val);
 		this.vars[key] = val;
 	}; 	

 	getVars(): Object {
 		return this.vars;
 	}; 	

}
