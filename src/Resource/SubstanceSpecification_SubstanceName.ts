
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { SubstanceSpecification_OfficialName } from '../Resource/SubstanceSpecification_OfficialName';

        

        /**
         * The detailed description of a substance, typically at a level beyond what is used for prescribing. 
         */
        export class SubstanceSpecification_SubstanceName  {

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
                 * The actual name.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Name type.
                 */
                Type? : CodeableConcept;
                

                /**
                 * Language of the name.
                 */
                Language? : Array<CodeableConcept>;
                

                /**
                 * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
                 */
                Domain? : Array<CodeableConcept>;
                

                /**
                 * The jurisdiction where this name applies.
                 */
                Jurisdiction? : Array<CodeableConcept>;
                

                /**
                 * Details of the official nature of this name.
                 */
                OfficialName? : Array<SubstanceSpecification_OfficialName>;
                

                /**
                 * Supporting literature.
                 */
                ReferenceSource? : Array<String>;
                

                /**
                 * Extensions for referenceSource
                 */
                _referenceSource? : Array<Element>;
                
        }
        