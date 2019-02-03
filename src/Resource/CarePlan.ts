
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
                this.Subject = new Reference();
            }

            
                /**
                 * This is a CarePlan resource
                 */
                ResourceType: string = 'CarePlan;'
                

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
                 * Business identifiers assigned to this care plan by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
                 */
                InstantiatesCanonical? : Array<Canonical>;
                

                /**
                 * The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
                 */
                InstantiatesUri? : Array<Uri>;
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Array<Element>;
                

                /**
                 * A care plan that is fulfilled in whole or in part by this care plan.
                 */
                BasedOn? : Array<Reference>;
                

                /**
                 * Completed or terminated care plan whose function is taken by this new care plan.
                 */
                Replaces? : Array<Reference>;
                

                /**
                 * A larger care plan of which this particular care plan is a component or step.
                 */
                PartOf? : Array<Reference>;
                

                /**
                 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
                 */
                Intent? : Code;
                

                /**
                 * Extensions for intent
                 */
                _intent? : Element;
                

                /**
                 * Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.
                 */
                Category? : Array<CodeableConcept>;
                

                /**
                 * Human-friendly name for the care plan.
                 */
                Title? : String;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * A description of the scope and nature of the plan.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Identifies the patient or group whose intended care is described by the plan.
                 */
                Subject : Reference;
                

                /**
                 * Identifies the original context in which this particular care plan was created.
                 */
                Context? : Reference;
                

                /**
                 * Indicates when the plan did (or is intended to) come into effect and end.
                 */
                Period? : Period;
                

                /**
                 * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
                 */
                Created? : DateTime;
                

                /**
                 * Extensions for created
                 */
                _created? : Element;
                

                /**
                 * When populated, the author is responsible for the care plan.  The care plan is attributed to the author.
                 */
                Author? : Reference;
                

                /**
                 * Identifies the individual(s) or organization who provided the contents of the care plan.
                 */
                Contributor? : Array<Reference>;
                

                /**
                 * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
                 */
                CareTeam? : Array<Reference>;
                

                /**
                 * Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
                 */
                Addresses? : Array<Reference>;
                

                /**
                 * Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc.
                 */
                SupportingInfo? : Array<Reference>;
                

                /**
                 * Describes the intended objective(s) of carrying out the care plan.
                 */
                Goal? : Array<Reference>;
                

                /**
                 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
                 */
                Activity? : Array<CarePlan_Activity>;
                

                /**
                 * General notes about the care plan not covered elsewhere.
                 */
                Note? : Array<Annotation>;
                
        }
        