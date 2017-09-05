import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsService {

	private vars: Object = {
		'accuracy': 2,
		'showFlags': true
	};

  constructor() { }

 	getVar(key): any {
 		return this.vars[key];
 	};

 	setVar(key, val): void {
 		this.vars[key] = val;
 	}; 	

 	getVars(): Object {
 		return this.vars;
 	}; 	

}
