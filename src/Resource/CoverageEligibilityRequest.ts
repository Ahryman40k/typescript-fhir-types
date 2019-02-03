
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { CoverageEligibilityRequest_Insurance } from '../Resource/CoverageEligibilityRequest_Insurance';
import { CoverageEligibilityRequest_Item } from '../Resource/CoverageEligibilityRequest_Item';
import { CoverageEligibilityRequest_SupportingInformation } from '../Resource/CoverageEligibilityRequest_SupportingInformation';
import { DateTime } from '../Scalar/DateTime';
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

        export enum CoverageEligibilityRequestPurposeKind {
                authRequirements,
benefits,
discovery,
validation
            }

        /**
         * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. 
         */
        export class CoverageEligibilityRequest  {

            constructor() {
                
            }

            
                /**
                 * This is a CoverageEligibilityRequest resource
                 */
                ResourceType: string = 'CoverageEligibilityRequest;'
                

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
                 * The Response business identifier.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The status of the resource instance.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Immediate (STAT), best effort (NORMAL), deferred (DEFER).
                 */
                Priority? : CodeableConcept;
                

                /**
                 * Specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for th patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
                 */
                Purpose? : CoverageEligibilityRequestPurposeKind[];
                

                /**
                 * Extensions for purpose
                 */
                _purpose? : Array<Element>;
                

                /**
                 * Patient Resource.
                 */
                Patient? : Reference;
                

                /**
                 * The date or dates when the enclosed suite of services were performed or completed.
                 */
                ServicedDate? : String;
                

                /**
                 * Extensions for servicedDate
                 */
                _servicedDate? : Element;
                

                /**
                 * The date or dates when the enclosed suite of services were performed or completed.
                 */
                ServicedPeriod? : Period;
                

                /**
                 * The date when this resource was created.
                 */
                Created? : DateTime;
                

                /**
                 * Extensions for created
                 */
                _created? : Element;
                

                /**
                 * Person who created the invoice/claim/pre-determination or pre-authorization.
                 */
                Enterer? : Reference;
                

                /**
                 * The provider who is responsible for the services rendered to the patient.
                 */
                Provider? : Reference;
                

                /**
                 * The Insurer who is target  of the request.
                 */
                Insurer? : Reference;
                

                /**
                 * Facility where the services were provided.
                 */
                Facility? : Reference;
                

                /**
                 * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
                 */
                SupportingInformation? : Array<CoverageEligibilityRequest_SupportingInformation>;
                

                /**
                 * Insurance policies which the patient has advised may be applicable for paying for health services.
                 */
                Insurance? : Array<CoverageEligibilityRequest_Insurance>;
                

                /**
                 * A list of service types or billable services for which bebefit details and/or an authorization prior to service delivery may be required by the payor.
                 */
                Item? : Array<CoverageEligibilityRequest_Item>;
                
        }
        