
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';

        

        /**
         * A sample to be used for analysis. 
         */
        export class Specimen_Container  {

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
                 * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Textual description of the container.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
                 */
                Type? : CodeableConcept;
                

                /**
                 * The capacity (volume or other measure) the container may contain.
                 */
                Capacity? : Quantity;
                

                /**
                 * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
                 */
                SpecimenQuantity? : Quantity;
                

                /**
                 * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
                 */
                AdditiveCodeableConcept? : CodeableConcept;
                

                /**
                 * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
                 */
                AdditiveReference? : Reference;
                
        }
        