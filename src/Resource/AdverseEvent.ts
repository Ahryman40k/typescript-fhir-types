
        import { AdverseEvent_SuspectEntity } from '../Resource/AdverseEvent_SuspectEntity';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum AdverseEventActualityKind {
                actual,
potential
            }

        /**
         * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. 
         */
        export class AdverseEvent  {

            constructor() {
                this.subject = new Reference();
            }

            
                /**
                 * This is a AdverseEvent resource
                 */
                resourceType: string = 'AdverseEvent;'
                

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
                 * Business identifiers assigned to this adverse event by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                identifier? : Identifier;
                

                /**
                 * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
                 */
                actuality? : AdverseEventActualityKind;
                

                /**
                 * Extensions for actuality
                 */
                _actuality? : Element;
                

                /**
                 * The overall type of event, intended for search and filtering purposes.
                 */
                category? : CodeableConcept[];
                

                /**
                 * This element defines the specific type of event that occurred or that was prevented from occurring.
                 */
                event? : CodeableConcept;
                

                /**
                 * This subject or group impacted by the event.
                 */
                subject : Reference;
                

                /**
                 * The encounter or episode of care that establishes the context for this AdverseEvent.
                 */
                context? : Reference;
                

                /**
                 * The date (and perhaps time) when the adverse event occurred.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
                 */
                detected? : DateTime;
                

                /**
                 * Extensions for detected
                 */
                _detected? : Element;
                

                /**
                 * The date on which the existence of the AdverseEvent was first recorded.
                 */
                recordedDate? : DateTime;
                

                /**
                 * Extensions for recordedDate
                 */
                _recordedDate? : Element;
                

                /**
                 * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
                 */
                resultingCondition? : Reference[];
                

                /**
                 * The information about where the adverse event occurred.
                 */
                location? : Reference;
                

                /**
                 * Assessment whether this event was of real importance.
                 */
                seriousness? : CodeableConcept;
                

                /**
                 * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.serious - a severe rash might not be serious, but a mild heart problem is.
                 */
                severity? : CodeableConcept;
                

                /**
                 * Describes the type of outcome from the adverse event.
                 */
                outcome? : CodeableConcept;
                

                /**
                 * Information on who recorded the adverse event.  May be the patient or a practitioner.
                 */
                recorder? : Reference;
                

                /**
                 * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
                 */
                contributor? : Reference[];
                

                /**
                 * Describes the entity that is suspected to have caused the adverse event.
                 */
                suspectEntity? : AdverseEvent_SuspectEntity[];
                

                /**
                 * AdverseEvent.subjectMedicalHistory.
                 */
                subjectMedicalHistory? : Reference[];
                

                /**
                 * AdverseEvent.referenceDocument.
                 */
                referenceDocument? : Reference[];
                

                /**
                 * AdverseEvent.study.
                 */
                study? : Reference[];
                
        }
        