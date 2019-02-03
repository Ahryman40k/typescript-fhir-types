
        import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Integer } from '../Scalar/Integer';

        

        /**
         * Raw data describing a biological sequence. 
         */
        export class Sequence_Roc  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Invidual data point representing the GQ (genotype quality) score threshold.
                 */
                Score? : Array<Integer>;
                

                /**
                 * Extensions for score
                 */
                _score? : Array<Element>;
                

                /**
                 * The number of true positives if the GQ score threshold was set to "score" field value.
                 */
                NumTP? : Array<Integer>;
                

                /**
                 * Extensions for numTP
                 */
                _numTP? : Array<Element>;
                

                /**
                 * The number of false positives if the GQ score threshold was set to "score" field value.
                 */
                NumFP? : Array<Integer>;
                

                /**
                 * Extensions for numFP
                 */
                _numFP? : Array<Element>;
                

                /**
                 * The number of false negatives if the GQ score threshold was set to "score" field value.
                 */
                NumFN? : Array<Integer>;
                

                /**
                 * Extensions for numFN
                 */
                _numFN? : Array<Element>;
                

                /**
                 * Calculated precision if the GQ score threshold was set to "score" field value.
                 */
                Precision? : Array<Decimal>;
                

                /**
                 * Extensions for precision
                 */
                _precision? : Array<Element>;
                

                /**
                 * Calculated sensitivity if the GQ score threshold was set to "score" field value.
                 */
                Sensitivity? : Array<Decimal>;
                

                /**
                 * Extensions for sensitivity
                 */
                _sensitivity? : Array<Element>;
                

                /**
                 * Calculated fScore if the GQ score threshold was set to "score" field value.
                 */
                FMeasure? : Array<Decimal>;
                

                /**
                 * Extensions for fMeasure
                 */
                _fMeasure? : Array<Element>;
                
        }
        