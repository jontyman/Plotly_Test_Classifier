/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var Instances;
//(function (Instances) {
    /**
     * This class is used within the webapp/index.html file.
     * @param {number} targetWeight
     * @param {number} targetClass
     * @class
     */
    class Instance {
        constructor(targetWeight, targetClass) {
            this.weight = 1.0;
            this.classValue = 0;
            this.numAttributes = 0;
            this.attributes = ([]);
            this.weight = targetWeight;
            this.classValue = targetClass;
            this.numAttributes = 15;
            for (let i = 0; i < this.numAttributes; i++) {
                {
                    /* add */ (this.attributes.push(Math.random() * 10) > 0);
                }
                ;
            }
            /* add */ (this.attributes.push(this.classValue) > 0);
        }
        getWeight() {
            return this.weight;
        }
        setWeight(targetWeight) {
            this.weight = targetWeight;
        }
        getClassValue() {
            return this.classValue;
        }
        setClassValue(targetClass) {
            this.classValue = targetClass;
        }
    }
    //Instances.Instance = Instance;
    //Instance["__class"] = "Instances.Instance";
//})(Instances || (Instances = {}));
export default Instance;