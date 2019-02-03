
        import { Annotation } from '../Resource/Annotation';
import { ClinicalImpression_Finding } from '../Resource/ClinicalImpression_Finding';
import { ClinicalImpression_Investigation } from '../Resource/ClinicalImpression_Investigation';
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
         * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score. 
         */
        export class ClinicalImpression  {

            constructor() {
                this.Subject = new Reference();
            }

            
                /**
                 * This is a ClinicalImpression resource
                 */
                ResourceType: string = 'ClinicalImpression;'
                

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
                 * Business identifiers assigned to this clinical impression by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Identifies the workflow status of the assessment.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Captures the reason for the current state of the ClinicalImpression.
                 */
                StatusReason? : CodeableConcept;
                

                /**
                 * Categorizes the type of clinical assessment performed.
                 */
                Code? : CodeableConcept;
                

                /**
                 * A summary of the context and/or cause of the assessment - why / where was it performed, and what patient events/status prompted it.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The patient or group of individuals assessed as part of this record.
                 */
                Subject : Reference;
                

                /**
                 * The encounter or episode of care this impression was created as part of.
                 */
                Context? : Reference;
                

                /**
                 * The point in time or period over which the subject was assessed.
                 */
                EffectiveDateTime? : String;
                

                /**
                 * Extensions for effectiveDateTime
                 */
                _effectiveDateTime? : Element;
                

                /**
                 * The point in time or period over which the subject was assessed.
                 */
                EffectivePeriod? : Period;
                

                /**
                 * Indicates when the documentation of the assessment was complete.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The clinician performing the assessment.
                 */
                Assessor? : Reference;
                

                /**
                 * A reference to the last assessment that was conducted on this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
                 */
                Previous? : Reference;
                

                /**
                 * This a list of the relevant problems/conditions for a patient.
                 */
                Problem? : Array<Reference>;
                

                /**
                 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
                 */
                Investigation? : Array<ClinicalImpression_Investigation>;
                

                /**
                 * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
                 */
                Protocol? : Array<Uri>;
                

                /**
                 * Extensions for protocol
                 */
                _protocol? : Array<Element>;
                

                /**
                 * A text summary of the investigations and the diagnosis.
                 */
                Summary? : String;
                

                /**
                 * Extensions for summary
                 */
                _summary? : Element;
                

                /**
                 * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
                 */
                Finding? : Array<ClinicalImpression_Finding>;
                

                /**
                 * Estimate of likely outcome.
                 */
                PrognosisCodeableConcept? : Array<CodeableConcept>;
                

                /**
                 * RiskAssessment expressing likely outcome.
                 */
                PrognosisReference? : Array<Reference>;
                

                /**
                 * Information supporting the clinical impression.
                 */
                SupportingInfo? : Array<Reference>;
                

                /**
                 * Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear.
                 */
                Note? : Array<Annotation>;
                
        }
        