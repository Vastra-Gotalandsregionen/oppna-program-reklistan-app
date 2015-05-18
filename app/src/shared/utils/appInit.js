'use strict';

import DataLoader from '../../alt/util/DataLoader';
import {appViewModel} from '../../alt/viewmodel/RekAppViewModel';

function init() {
	return DataLoader.loadViewModelFromServer([
		{	
			name: 'drugs',
			url: 'http://localhost:5656/drugs.json'
		},{
			name: 'advice',
			url: 'http://localhost:5656/advice.json'
		}
	],[
		{	
			name: 'drugs',
			url: 'http://localhost:5656/details-drugs.hbs'
		},{
			name: 'advice',
			url: 'http://localhost:5656/details-advice.hbs'
		}
	])
	.then(list => {
		appViewModel.setMainDataList(list);
	})
}

module.exports.init = init;

