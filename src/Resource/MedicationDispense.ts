
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Dosage } from '../Resource/Dosage';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { MedicationDispense_Performer } from '../Resource/MedicationDispense_Performer';
import { MedicationDispense_Substitution } from '../Resource/MedicationDispense_Substitution';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum MedicationDispenseStatusKind {
                preparation,
inProgress,
cancelled,
onHold,
completed,
enteredInError,
stopped,
unknown
            }

        /**
         * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order. 
         */
        export class MedicationDispense  {

            constructor() {
                
            }

            
                /**
                 * This is a MedicationDispense resource
                 */
                resourceType: string = 'MedicationDispense;'
                

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
                 * Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.
                 */
                identifier? : Identifier[];
                

                /**
                 * The procedure that trigger the dispense.
                 */
                partOf? : Reference[];
                

                /**
                 * A code specifying the state of the set of dispense events.
                 */
                status? : MedicationDispenseStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Indicates the type of medication dispense (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).
                 */
                category? : CodeableConcept;
                

                /**
                 * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
                 */
                medicationCodeableConcept? : CodeableConcept;
                

                /**
                 * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
                 */
                medicationReference? : Reference;
                

                /**
                 * A link to a resource representing the person or the group to whom the medication will be given.
                 */
                subject? : Reference;
                

                /**
                 * The encounter or episode of care that establishes the context for this event.
                 */
                context? : Reference;
                

                /**
                 * Additional information that supports the medication being dispensed.
                 */
                supportingInformation? : Reference[];
                

                /**
                 * Indicates who or what performed the event.
                 */
                performer? : MedicationDispense_Performer[];
                

                /**
                 * The principal physical location where the dispense was performed.
                 */
                location? : Reference;
                

                /**
                 * Indicates the medication order that is being dispensed against.
                 */
                authorizingPrescription? : Reference[];
                

                /**
                 * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
                 */
                type? : CodeableConcept;
                

                /**
                 * The amount of medication that has been dispensed. Includes unit of measure.
                 */
                quantity? : Quantity;
                

                /**
                 * The amount of medication expressed as a timing amount.
                 */
                daysSupply? : Quantity;
                

                /**
                 * The time when the dispensed product was packaged and reviewed.
                 */
                whenPrepared? : DateTime;
                

                /**
                 * Extensions for whenPrepared
                 */
                _whenPrepared? : Element;
                

                /**
                 * The time the dispensed product was provided to the patient or their representative.
                 */
                whenHandedOver? : DateTime;
                

                /**
                 * Extensions for whenHandedOver
                 */
                _whenHandedOver? : Element;
                

                /**
                 * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
                 */
                destination? : Reference;
                

                /**
                 * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
                 */
                receiver? : Reference[];
                

                /**
                 * Extra information about the dispense that could not be conveyed in the other attributes.
                 */
                note? : Annotation[];
                

                /**
                 * Indicates how the medication is to be used by the patient.
                 */
                dosageInstruction? : Dosage[];
                

                /**
                 * Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
                 */
                substitution? : MedicationDispense_Substitution;
                

                /**
                 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. drug-drug interaction, duplicate therapy, dosage alert etc.
                 */
                detectedIssue? : Reference[];
                

                /**
                 * Indicates the reason why a dispense was not performed.
                 */
                statusReasonCodeableConcept? : CodeableConcept;
                

                /**
                 * Indicates the reason why a dispense was not performed.
                 */
                statusReasonReference? : Reference;
                

                /**
                 * A summary of the events of interest that have occurred, such as when the dispense was verified.
                 */
                eventHistory? : Reference[];
                
        }
        