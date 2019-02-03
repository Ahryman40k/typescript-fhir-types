
        import { Address } from '../Resource/Address';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactPoint } from '../Resource/ContactPoint';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { HumanName } from '../Resource/HumanName';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';

        export enum Patient_ContactGenderKind {
                male,
female,
other,
unknown
            }

        /**
         * Demographics and other administrative information about an individual or animal receiving care or other health-related services. 
         */
        export class Patient_Contact  {

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
                 * The nature of the relationship between the patient and the contact person.
                 */
                Relationship? : Array<CodeableConcept>;
                

                /**
                 * A name associated with the contact person.
                 */
                Name? : HumanName;
                

                /**
                 * A contact detail for the person, e.g. a telephone number or an email address.
                 */
                Telecom? : Array<ContactPoint>;
                

                /**
                 * Address for the contact person.
                 */
                Address? : Address;
                

                /**
                 * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
                 */
                Gender? : Patient_ContactGenderKind;
                

                /**
                 * Extensions for gender
                 */
                _gender? : Element;
                

                /**
                 * Organization on behalf of which the contact is acting or for which the contact is working.
                 */
                Organization? : Reference;
                

                /**
                 * The period during which this contact person or organization is valid to be contacted relating to this patient.
                 */
                Period? : Period;
                
        }
        