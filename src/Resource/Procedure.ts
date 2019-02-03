
        import { Age } from '../Resource/Age';
import { Annotation } from '../Resource/Annotation';
import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Procedure_FocalDevice } from '../Resource/Procedure_FocalDevice';
import { Procedure_Performer } from '../Resource/Procedure_Performer';
import { Range } from '../Resource/Range';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. 
         */
        export class Procedure  {

            constructor() {
                this.Subject = new Reference();
            }

            
                /**
                 * This is a Procedure resource
                 */
                ResourceType: string = 'Procedure;'
                

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
                 * Business identifiers assigned to this procedure by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Procedure.
                 */
                InstantiatesCanonical? : Array<Canonical>;
                

                /**
                 * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Procedure.
                 */
                InstantiatesUri? : Array<Uri>;
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Array<Element>;
                

                /**
                 * A reference to a resource that contains details of the request for this procedure.
                 */
                BasedOn? : Array<Reference>;
                

                /**
                 * A larger event of which this particular procedure is a component or step.
                 */
                PartOf? : Array<Reference>;
                

                /**
                 * A code specifying the state of the procedure. Generally this will be in-progress or completed state.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Captures the reason for the current state of the procedure.
                 */
                StatusReason? : CodeableConcept;
                

                /**
                 * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
                 */
                Category? : CodeableConcept;
                

                /**
                 * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
                 */
                Code? : CodeableConcept;
                

                /**
                 * The person, animal or group on which the procedure was performed.
                 */
                Subject : Reference;
                

                /**
                 * The encounter during which the procedure was performed.
                 */
                Context? : Reference;
                

                /**
                 * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                 */
                PerformedDateTime? : String;
                

                /**
                 * Extensions for performedDateTime
                 */
                _performedDateTime? : Element;
                

                /**
                 * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                 */
                PerformedPeriod? : Period;
                

                /**
                 * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                 */
                PerformedString? : String;
                

                /**
                 * Extensions for performedString
                 */
                _performedString? : Element;
                

                /**
                 * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                 */
                PerformedAge? : Age;
                

                /**
                 * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                 */
                PerformedRange? : Range;
                

                /**
                 * Individual who recorded the record and takes responsibility for its content.
                 */
                Recorder? : Reference;
                

                /**
                 * Individual who is making the procedure statement.
                 */
                Asserter? : Reference;
                

                /**
                 * Limited to 'real' people rather than equipment.
                 */
                Performer? : Array<Procedure_Performer>;
                

                /**
                 * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
                 */
                Location? : Reference;
                

                /**
                 * The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text.
                 */
                ReasonCode? : Array<CodeableConcept>;
                

                /**
                 * The justification of why the procedure was performed.
                 */
                ReasonReference? : Array<Reference>;
                

                /**
                 * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
                 */
                BodySite? : Array<CodeableConcept>;
                

                /**
                 * The outcome of the procedure - did it resolve reasons for the procedure being performed?
                 */
                Outcome? : CodeableConcept;
                

                /**
                 * This could be a histology result, pathology report, surgical report, etc.
                 */
                Report? : Array<Reference>;
                

                /**
                 * Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
                 */
                Complication? : Array<CodeableConcept>;
                

                /**
                 * Any complications that occurred during the procedure, or in the immediate post-performance period.
                 */
                ComplicationDetail? : Array<Reference>;
                

                /**
                 * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
                 */
                FollowUp? : Array<CodeableConcept>;
                

                /**
                 * Any other notes and comments about the procedure.
                 */
                Note? : Array<Annotation>;
                

                /**
                 * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
                 */
                FocalDevice? : Array<Procedure_FocalDevice>;
                

                /**
                 * Identifies medications, devices and any other substance used as part of the procedure.
                 */
                UsedReference? : Array<Reference>;
                

                /**
                 * Identifies coded items that were used as part of the procedure.
                 */
                UsedCode? : Array<CodeableConcept>;
                
        }
        