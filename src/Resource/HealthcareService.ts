
        import { Attachment } from '../Resource/Attachment';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactPoint } from '../Resource/ContactPoint';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { HealthcareService_AvailableTime } from '../Resource/HealthcareService_AvailableTime';
import { HealthcareService_NotAvailable } from '../Resource/HealthcareService_NotAvailable';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * The details of a healthcare service available at a location. 
         */
        export class HealthcareService  {

            constructor() {
                
            }

            
                /**
                 * This is a HealthcareService resource
                 */
                ResourceType: string = 'HealthcareService;'
                

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
                 * External identifiers for this item.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * This flag is used to mark the record to not be used. This is not used when a center is closed for maintenance, or for holidays, the notAvailable period is to be used for this.
                 */
                Active? : Boolean;
                

                /**
                 * Extensions for active
                 */
                _active? : Element;
                

                /**
                 * The organization that provides this healthcare service.
                 */
                ProvidedBy? : Reference;
                

                /**
                 * Identifies the broad category of service being performed or delivered.
                 */
                Category? : Array<CodeableConcept>;
                

                /**
                 * The specific type of service that may be delivered or performed.
                 */
                Type? : Array<CodeableConcept>;
                

                /**
                 * Collection of specialties handled by the service site. This is more of a medical term.
                 */
                Specialty? : Array<CodeableConcept>;
                

                /**
                 * The location(s) where this healthcare service may be provided.
                 */
                Location? : Array<Reference>;
                

                /**
                 * Further description of the service as it would be presented to a consumer while searching.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
                 */
                Comment? : String;
                

                /**
                 * Extensions for comment
                 */
                _comment? : Element;
                

                /**
                 * Extra details about the service that can't be placed in the other fields.
                 */
                ExtraDetails? : String;
                

                /**
                 * Extensions for extraDetails
                 */
                _extraDetails? : Element;
                

                /**
                 * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
                 */
                Photo? : Attachment;
                

                /**
                 * List of contacts related to this specific healthcare service.
                 */
                Telecom? : Array<ContactPoint>;
                

                /**
                 * The location(s) that this service is available to (not where the service is provided).
                 */
                CoverageArea? : Array<Reference>;
                

                /**
                 * The code(s) that detail the conditions under which the healthcare service is available/offered.
                 */
                ServiceProvisionCode? : Array<CodeableConcept>;
                

                /**
                 * Does this service have specific eligibility requirements that need to be met in order to use the service?
                 */
                Eligibility? : CodeableConcept;
                

                /**
                 * Describes the eligibility conditions for the service.
                 */
                EligibilityNote? : String;
                

                /**
                 * Extensions for eligibilityNote
                 */
                _eligibilityNote? : Element;
                

                /**
                 * Program Names that can be used to categorize the service.
                 */
                ProgramName? : Array<String>;
                

                /**
                 * Extensions for programName
                 */
                _programName? : Array<Element>;
                

                /**
                 * Collection of characteristics (attributes).
                 */
                Characteristic? : Array<CodeableConcept>;
                

                /**
                 * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
                 */
                ReferralMethod? : Array<CodeableConcept>;
                

                /**
                 * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
                 */
                AppointmentRequired? : Boolean;
                

                /**
                 * Extensions for appointmentRequired
                 */
                _appointmentRequired? : Element;
                

                /**
                 * A collection of times that the Service Site is available.
                 */
                AvailableTime? : Array<HealthcareService_AvailableTime>;
                

                /**
                 * The HealthcareService is not available during this period of time due to the provided reason.
                 */
                NotAvailable? : Array<HealthcareService_NotAvailable>;
                

                /**
                 * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
                 */
                AvailabilityExceptions? : String;
                

                /**
                 * Extensions for availabilityExceptions
                 */
                _availabilityExceptions? : Element;
                

                /**
                 * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
                 */
                Endpoint? : Array<Reference>;
                
        }
        