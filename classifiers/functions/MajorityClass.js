/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var classifiers;
      export class MajorityClass {
            constructor() {
                if (this.className === undefined) {
                    this.className = null;
                }
                if (this.observedClassDistribution === undefined) {
                    this.observedClassDistribution = null;
                }
                if (this.trainingWeightSeenByModel === undefined) {
                    this.trainingWeightSeenByModel = 0;
                }
                this.observedClassDistribution = ([]);
                this.trainingWeightSeenByModel = 0.0;
                this.className = "Majority Class";
            }
            getClassLabel() {
                return "To be implemented";
            }
            getClassName() {
                return this.className;
            }
            getTrainWeight() {
                return this.trainingWeightSeenByModel;
            }
            setTrainWeight(trainWeight) {
                this.trainingWeightSeenByModel = trainWeight;
            }
            getPurposeString() {
                return "Majority class classifier: always predicts the class that has been observed most frequently the in the training data.";
            }
            resetLearningImpl() {
                this.observedClassDistribution = ([]);
            }
            trainOnInstanceImpl(inst) {
                const classValue = (inst.getClassValue() | 0);
                const weight = inst.getWeight();
                const length = this.observedClassDistribution.length;
                if (classValue >= length) {
                    for (let i = length; i < (classValue + 1); i++) {
                        {
                            /* add */ (this.observedClassDistribution.push(0.0) > 0);
                        }
                        ;
                    }
                }
                const currentWeight = this.observedClassDistribution[classValue];
                /* set */ (this.observedClassDistribution[classValue] = currentWeight + inst.getWeight());
            }
            trainOnInstance(inst) {
                let isTraining = false;
                if (inst.getWeight() > 0.0) {
                    isTraining = true;
                }
                if (isTraining) {
                    this.trainingWeightSeenByModel += inst.getWeight();
                    this.trainOnInstanceImpl(inst);
                }
            }
            getVotesForInstance(i) {
                return this.observedClassDistribution;
            }
            getModelMeasurementsImpl() {
                return -2147483648;
            }
            getModelDescription(indent) {
                let out = "";
                const spaces = " ".repeat(indent);
                out += spaces + "Predicted majority ";
                out += this.getClassName();
                out += " = ";
                out += this.getClassLabel();
                out += "\n";
                for (let i = 0; i < /* size */ this.observedClassDistribution.length; i++) {
                    {
                        out += spaces + "Observed weight of ";
                        out += this.getClassLabel();
                        out += ": ";
                        out += /* get */ this.observedClassDistribution[i].toString();
                        out += "\n";
                    }
                    ;
                }
                return out;
            }
            isRandomizable() {
                return false;
            }
            correctlyClassifies(inst) {
                return this.maxIndex(this.getVotesForInstance(0)) === ((inst.getClassValue()) | 0);
            }
            maxIndex(arrayDoubles) {
                let maxiumum = -2147483648;
                let maxIndex = 0;
                for (let i = 0; i < /* size */ arrayDoubles.length; i++) {
                    {
                        if ( /* get */arrayDoubles[i] > maxiumum) {
                            maxiumum = /* get */ arrayDoubles[i];
                            maxIndex = i;
                        }
                    }
                    ;
                }
                return maxIndex;
            }
        }
