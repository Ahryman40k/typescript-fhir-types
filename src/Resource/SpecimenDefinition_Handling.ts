
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Range } from '../Resource/Range';

        

        /**
         * A kind of specimen with associated set of requirements. 
         */
        export class SpecimenDefinition_Handling  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Code representing the set of handling instructions.
                 */
                conditionSet? : CodeableConcept;
                

                /**
                 * The temperature interval for this set of handling instructions.
                 */
                tempRange? : Range;
                

                /**
                 * The maximum time interval of conservation of the specimen with these conditions.
                 */
                maxDuration? : Duration;
                

                /**
                 * Textual instructions regarding the light exposure of the specimen prior testing.
                 */
                lightExposure? : string;
                

                /**
                 * Extensions for lightExposure
                 */
                _lightExposure? : Element;
                

                /**
                 * Additional textual instructions for the conservation or transport of the specimen.
                 */
                instruction? : string;
                

                /**
                 * Extensions for instruction
                 */
                _instruction? : Element;
                
        }
        