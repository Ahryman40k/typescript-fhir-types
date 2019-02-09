
        import { Address } from '../Resource/Address';
import { Attachment } from '../Resource/Attachment';
import { Code } from '../Scalar/Code';
import { ContactPoint } from '../Resource/ContactPoint';
import { Date } from '../Scalar/Date';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { HumanName } from '../Resource/HumanName';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Person_Link } from '../Resource/Person_Link';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum PersonGenderKind {
                male,
female,
other,
unknown
            }

        /**
         * Demographics and administrative information about a person independent of a specific health-related context. 
         */
        export class Person  {

            constructor() {
                
            }

            
                /**
                 * This is a Person resource
                 */
                resourceType: string = 'Person;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Identifier for a person within a particular scope.
                 */
                identifier? : Identifier[];
                

                /**
                 * A name associated with the person.
                 */
                name? : HumanName[];
                

                /**
                 * A contact detail for the person, e.g. a telephone number or an email address.
                 */
                telecom? : ContactPoint[];
                

                /**
                 * Administrative Gender.
                 */
                gender? : PersonGenderKind;
                

                /**
                 * Extensions for gender
                 */
                _gender? : Element;
                

                /**
                 * The birth date for the person.
                 */
                birthDate? : Date;
                

                /**
                 * Extensions for birthDate
                 */
                _birthDate? : Element;
                

                /**
                 * One or more addresses for the person.
                 */
                address? : Address[];
                

                /**
                 * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
                 */
                photo? : Attachment;
                

                /**
                 * The organization that is the custodian of the person record.
                 */
                managingOrganization? : Reference;
                

                /**
                 * Whether this person's record is in active use.
                 */
                active? : boolean;
                

                /**
                 * Extensions for active
                 */
                _active? : Element;
                

                /**
                 * Link to a resource that concerns the same actual person.
                 */
                link? : Person_Link[];
                
        }
        