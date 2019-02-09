
        import { Annotation } from '../Resource/Annotation';
import { Canonical } from '../Scalar/Canonical';
import { CarePlan_Activity } from '../Resource/CarePlan_Activity';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
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

        

        /**
         * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. 
         */
        export class CarePlan  {

            constructor() {
                this.subject = new Reference();
            }

            
                /**
                 * This is a CarePlan resource
                 */
                resourceType: string = 'CarePlan;'
                

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
                 * Business identifiers assigned to this care plan by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                identifier? : Identifier[];
                

                /**
                 * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
                 */
                instantiatesCanonical? : Canonical[];
                

                /**
                 * The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
                 */
                instantiatesUri? : Uri[];
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Element[];
                

                /**
                 * A care plan that is fulfilled in whole or in part by this care plan.
                 */
                basedOn? : Reference[];
                

                /**
                 * Completed or terminated care plan whose function is taken by this new care plan.
                 */
                replaces? : Reference[];
                

                /**
                 * A larger care plan of which this particular care plan is a component or step.
                 */
                partOf? : Reference[];
                

                /**
                 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
                 */
                status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
                 */
                intent? : Code;
                

                /**
                 * Extensions for intent
                 */
                _intent? : Element;
                

                /**
                 * Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.
                 */
                category? : CodeableConcept[];
                

                /**
                 * Human-friendly name for the care plan.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * A description of the scope and nature of the plan.
                 */
                description? : string;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Identifies the patient or group whose intended care is described by the plan.
                 */
                subject : Reference;
                

                /**
                 * Identifies the original context in which this particular care plan was created.
                 */
                context? : Reference;
                

                /**
                 * Indicates when the plan did (or is intended to) come into effect and end.
                 */
                period? : Period;
                

                /**
                 * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
                 */
                created? : DateTime;
                

                /**
                 * Extensions for created
                 */
                _created? : Element;
                

                /**
                 * When populated, the author is responsible for the care plan.  The care plan is attributed to the author.
                 */
                author? : Reference;
                

                /**
                 * Identifies the individual(s) or organization who provided the contents of the care plan.
                 */
                contributor? : Reference[];
                

                /**
                 * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
                 */
                careTeam? : Reference[];
                

                /**
                 * Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
                 */
                addresses? : Reference[];
                

                /**
                 * Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc.
                 */
                supportingInfo? : Reference[];
                

                /**
                 * Describes the intended objective(s) of carrying out the care plan.
                 */
                goal? : Reference[];
                

                /**
                 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
                 */
                activity? : CarePlan_Activity[];
                

                /**
                 * General notes about the care plan not covered elsewhere.
                 */
                note? : Annotation[];
                
        }
        