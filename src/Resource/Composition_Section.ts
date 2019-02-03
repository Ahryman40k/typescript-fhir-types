
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';

        

        /**
         * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.). 
         */
        export class Composition_Section  {

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
                 * The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.
                 */
                Title? : String;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
                 */
                Code? : CodeableConcept;
                

                /**
                 * Identifies who is responsible for the information in this section, not necessarily who typed it in.
                 */
                Author? : Array<Reference>;
                

                /**
                 * A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative.
                 */
                Text? : Narrative;
                

                /**
                 * How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
                 */
                Mode? : Code;
                

                /**
                 * Extensions for mode
                 */
                _mode? : Element;
                

                /**
                 * Specifies the order applied to the items in the section entries.
                 */
                OrderedBy? : CodeableConcept;
                

                /**
                 * A reference to the actual resource from which the narrative in the section is derived.
                 */
                Entry? : Array<Reference>;
                

                /**
                 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
                 */
                EmptyReason? : CodeableConcept;
                

                /**
                 * A nested sub-section within this section.
                 */
                Section? : Array<Composition_Section>;
                
        }
        