
        import { Address } from '../Resource/Address';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactPoint } from '../Resource/ContactPoint';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Organization_Contact } from '../Resource/Organization_Contact';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. 
         */
        export class Organization  {

            constructor() {
                
            }

            
                /**
                 * This is a Organization resource
                 */
                ResourceType: string = 'Organization;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Identifier for the organization that is used to identify the organization across multiple disparate systems.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Whether the organization's record is still in active use.
                 */
                Active? : Boolean;
                

                /**
                 * Extensions for active
                 */
                _active? : Element;
                

                /**
                 * The kind(s) of organization that this is.
                 */
                Type? : Array<CodeableConcept>;
                

                /**
                 * A name associated with the organization.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A list of alternate names that the organization is known as, or was known as in the past.
                 */
                Alias? : Array<String>;
                

                /**
                 * Extensions for alias
                 */
                _alias? : Array<Element>;
                

                /**
                 * A contact detail for the organization.
                 */
                Telecom? : Array<ContactPoint>;
                

                /**
                 * An address for the organization.
                 */
                Address? : Array<Address>;
                

                /**
                 * The organization of which this organization forms a part.
                 */
                PartOf? : Reference;
                

                /**
                 * Contact for the organization for a certain purpose.
                 */
                Contact? : Array<Organization_Contact>;
                

                /**
                 * Technical endpoints providing access to services operated for the organization.
                 */
                Endpoint? : Array<Reference>;
                
        }
        