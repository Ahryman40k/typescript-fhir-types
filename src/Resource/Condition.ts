
        import { Age } from '../Resource/Age';
import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Condition_Evidence } from '../Resource/Condition_Evidence';
import { Condition_Stage } from '../Resource/Condition_Stage';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Range } from '../Resource/Range';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. 
         */
        export class Condition  {

            constructor() {
                this.subject = new Reference();
            }

            
                /**
                 * This is a Condition resource
                 */
                resourceType: string = 'Condition;'
                

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
                 * Business identifiers assigned to this condition by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                identifier? : Identifier[];
                

                /**
                 * The clinical status of the condition.
                 */
                clinicalStatus? : CodeableConcept;
                

                /**
                 * The verification status to support the clinical status of the condition.
                 */
                verificationStatus? : CodeableConcept;
                

                /**
                 * A category assigned to the condition.
                 */
                category? : CodeableConcept[];
                

                /**
                 * A subjective assessment of the severity of the condition as evaluated by the clinician.
                 */
                severity? : CodeableConcept;
                

                /**
                 * Identification of the condition, problem or diagnosis.
                 */
                code? : CodeableConcept;
                

                /**
                 * The anatomical location where this condition manifests itself.
                 */
                bodySite? : CodeableConcept[];
                

                /**
                 * Indicates the patient or group who the condition record is associated with.
                 */
                subject : Reference;
                

                /**
                 * Encounter during which the condition was first asserted.
                 */
                context? : Reference;
                

                /**
                 * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
                 */
                onsetDateTime? : string;
                

                /**
                 * Extensions for onsetDateTime
                 */
                _onsetDateTime? : Element;
                

                /**
                 * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
                 */
                onsetAge? : Age;
                

                /**
                 * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
                 */
                onsetPeriod? : Period;
                

                /**
                 * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
                 */
                onsetRange? : Range;
                

                /**
                 * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
                 */
                onsetString? : string;
                

                /**
                 * Extensions for onsetString
                 */
                _onsetString? : Element;
                

                /**
                 * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
                 */
                abatementDateTime? : string;
                

                /**
                 * Extensions for abatementDateTime
                 */
                _abatementDateTime? : Element;
                

                /**
                 * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
                 */
                abatementAge? : Age;
                

                /**
                 * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
                 */
                abatementPeriod? : Period;
                

                /**
                 * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
                 */
                abatementRange? : Range;
                

                /**
                 * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
                 */
                abatementString? : string;
                

                /**
                 * Extensions for abatementString
                 */
                _abatementString? : Element;
                

                /**
                 * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
                 */
                recordedDate? : DateTime;
                

                /**
                 * Extensions for recordedDate
                 */
                _recordedDate? : Element;
                

                /**
                 * Individual who recorded the record and takes responsibility for its content.
                 */
                recorder? : Reference;
                

                /**
                 * Individual who is making the condition statement.
                 */
                asserter? : Reference;
                

                /**
                 * Clinical stage or grade of a condition. May include formal severity assessments.
                 */
                stage? : Condition_Stage[];
                

                /**
                 * Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.
                 */
                evidence? : Condition_Evidence[];
                

                /**
                 * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
                 */
                note? : Annotation[];
                
        }
        