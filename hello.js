import {} from 'https://cdn.plot.ly/plotly-2.24.1.min.js';
import {user} from './user.js';
import * as classifiers from './classifiers/classifiers.js';
import Instance from "./Instance-manual.js";

//import MajorityClass from './classifiers/functions/MajorityClass-Copy.js'
//import * as functions from './classifiers/functions/functions.js';
var isPaused=false;
var startPressed=false;

async function runClassifier(sampfreq, instanceLimit){
	const Date1 = new Date();
	var time1 = Date.now();
	console.log ("Time 1 is:" + time1);
	isPaused=false;

	//var a = new classifiers.MajorityClass();
	
	let functionName= "MajorityClass";
	let package1= "classifiers";
	let subpackage="functions";

	//let a = window[package1][subpackage][functionName];
	//a();


	var a  = new classifiers.functions.MajorityClass();

	//var a = new MajorityClass();
	//var a = new window[classifierName]();

	var numberSamplesCorrect=0;
	var numberSamples=0;
	var numInstances=10000000;
	//1000000

	if(instanceLimit<numInstances){
		numInstances=instanceLimit;
	}

	var isTesting = true;
	var samplingFrequency = sampfreq;

	var Instances = [];
	for (let i = 0; i < numInstances; i++) {
		Instances.push(new Instance(1,Math.random()*3));
		
	}

	var b = new Instance(0.2,2.0);
	var accuracy=0;
	var counter=0

	var trace1 = {
	x: [],
	y: [],
	mode: 'lines',
		line:{
		width: 2.5
		}
	}


	var trace1copy= trace1;

	var data1=[];

	var layout = { 
		title: 'Classifer accuracy vs instances processed',
		font: {size: 18}
		};

	/*var layout = { 
	title: 'Responsive to window\'s size!',
	font: {size: 18}
	};
	*/

	var config = {responsive: true};
	//document.getElementById(tester).style.display='Reset';
	Plotly.newPlot('tester', [trace1copy], layout, config );

	for (let i= 0; i< numInstances; i++){
		if (isTesting){
			counter++;
			//if(a.correctlyClassifies(Instances[i])){
			if(a.correctlyClassifies(Instances[numberSamples])){
				numberSamplesCorrect++;
				
				
			}
			if(counter==samplingFrequency){
				//console.log("Trace 2 object: " + trace1copy.xCo);
				//accuracy = 100.0 * numberSamplesCorrect/(numberSamples+1);
				accuracy = 100.0 * numberSamplesCorrect/(i+1);
				trace1copy.x.push(i+1);
				trace1copy.y.push(accuracy);
				
				/* var update= {
					x: [[i+1]],
					y:	[[accuracy]]
					
				}
				
				*/
				
				//Plotly.extendTraces('tester',update,[0]);
				
				//console.log("trace1 copy x " + trace1.x);
				//console.log("trace1 copy y " + trace1.y);
				//console.log("trace1 copy type " + trace1.type);
				//console.log("trace1 copy y " + trace1.yCo);
				
				//var data2 = [trace1copy];			
				//data[0].y.push(accuracy);
				
				//Plotly.update('tester', [trace1copy], layout, config );
				updateGraph('tester',[trace1copy],layout,config)
				//Plotly.extendTraces('tester',{ x: [[i+1]], y: [[accuracy]] }, [0]); //Works
				 await new Promise(resolve => setTimeout(resolve, 50)); 
				
				/*setTimeout(function(){
						console.log("Entered timeout");
					Plotly.update('tester', [this.tracelcopy], layout, config );
				},500);
				*/
				

				counter=0;
				
			}
			
		}	
		a.trainOnInstance(Instances[i]);
		numberSamples++;
	}
	//Plotly.update('tester', [trace1copy], layout, config );

	accuracy = 100.0 * numberSamplesCorrect/numberSamples;
	console.log("number samples correct is: " + numberSamplesCorrect);



	console.log (numberSamples + " instances processed with " + accuracy + "% accuracy" );

	//for (let i = 0; i < 10; i++) {
		//console.log(Instances[i].getWeight());
		
	//}

	//a.trainOnInstance(b);
	console.log("Hi");

	//document.body.innerHTML = a.getTrainWeight(); // John
	//document.body.innerHTML = user; // John

	var time2 = Date.now();
	console.log ("Time 2 is:" + time2);

	var diffTime = (time2-time1)/1000.0;
	//a.Hi();

}

function updateGraph(tester, trace, layout, config ){
	if(!isPaused){
		Plotly.update(tester, trace, layout, config );
	}
	
}

function pauseGraph() {
	isPaused = !isPaused; 
	console.log("Pressed");
}

function resetClassifier(){
	if(startPressed){
		
	}
}



document.getElementById('startButton').addEventListener('click', () => runClassifier(10000));
document.getElementById('pauseButton').addEventListener('click', () => pauseGraph());



//runClassifier(10000);

//console.log("Total time is: " + diffTime + " seconds");