
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactPoint } from '../Resource/ContactPoint';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. 
         */
        export class OrganizationAffiliation  {

            constructor() {
                
            }

            
                /**
                 * This is a OrganizationAffiliation resource
                 */
                ResourceType: string = 'OrganizationAffiliation;'
                

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
                 * Business identifiers that are specific to this role.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Whether this organization affiliation record is in active use.
                 */
                Active? : Boolean;
                

                /**
                 * Extensions for active
                 */
                _active? : Element;
                

                /**
                 * The period during which the participatingOrganization is affiliated with the primary organization.
                 */
                Period? : Period;
                

                /**
                 * Organization where the role is available (primary organization/has members).
                 */
                Organization? : Reference;
                

                /**
                 * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
                 */
                ParticipatingOrganization? : Reference;
                

                /**
                 * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
                 */
                Network? : Array<Reference>;
                

                /**
                 * Definition of the role the participatingOrganization plays in the association.
                 */
                Code? : Array<CodeableConcept>;
                

                /**
                 * Specific specialty of the participatingOrganization in the context of the role.
                 */
                Specialty? : Array<CodeableConcept>;
                

                /**
                 * The location(s) at which the role occurs.
                 */
                Location? : Array<Reference>;
                

                /**
                 * Healthcare services provided through the role.
                 */
                HealthcareService? : Array<Reference>;
                

                /**
                 * Contact details at the participatingOrganization relevant to this Affiliation.
                 */
                Telecom? : Array<ContactPoint>;
                

                /**
                 * Technical endpoints providing access to services operated for this role.
                 */
                Endpoint? : Array<Reference>;
                
        }
        