
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Range } from '../Resource/Range';

        

        /**
         * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. 
         */
        export class ObservationDefinition_QualifiedInterval  {

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
                 * The category or type of interval.
                 */
                category? : CodeableConcept;
                

                /**
                 * The value and associated unit of the low bound (inclusive) of the reference range.
                 */
                range? : Range;
                

                /**
                 * Codes to indicate what part of the targeted reference population it applies to. For example, the normal or therapeutic range.
                 */
                type? : CodeableConcept;
                

                /**
                 * Codes to indicate the target population this reference range applies to.
                 */
                appliesTo? : CodeableConcept[];
                

                /**
                 * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
                 */
                age? : Range;
                

                /**
                 * The gestational age at which this reference range is applicable, in the context of pregnancy.
                 */
                gestationalAge? : Range;
                

                /**
                 * Text based condition for which the reference range is valid.
                 */
                condition? : string;
                

                /**
                 * Extensions for condition
                 */
                _condition? : Element;
                
        }
        