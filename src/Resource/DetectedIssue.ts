
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { DetectedIssue_Mitigation } from '../Resource/DetectedIssue_Mitigation';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum DetectedIssueSeverityKind {
                high,
moderate,
low
            }

        /**
         * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. 
         */
        export class DetectedIssue  {

            constructor() {
                
            }

            
                /**
                 * This is a DetectedIssue resource
                 */
                ResourceType: string = 'DetectedIssue;'
                

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
                 * Business identifier associated with the detected issue record.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Indicates the status of the detected issue.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Identifies the general type of issue identified.
                 */
                Category? : CodeableConcept;
                

                /**
                 * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
                 */
                Severity? : DetectedIssueSeverityKind;
                

                /**
                 * Extensions for severity
                 */
                _severity? : Element;
                

                /**
                 * Indicates the patient whose record the detected issue is associated with.
                 */
                Patient? : Reference;
                

                /**
                 * The date or date-time when the detected issue was initially identified.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
                 */
                Author? : Reference;
                

                /**
                 * Indicates the resource representing the current activity or proposed activity that is potentially problematic.
                 */
                Implicated? : Array<Reference>;
                

                /**
                 * A textual explanation of the detected issue.
                 */
                Detail? : String;
                

                /**
                 * Extensions for detail
                 */
                _detail? : Element;
                

                /**
                 * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
                 */
                Reference? : Uri;
                

                /**
                 * Extensions for reference
                 */
                _reference? : Element;
                

                /**
                 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
                 */
                Mitigation? : Array<DetectedIssue_Mitigation>;
                
        }
        