
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { MedicationAdministration_Dosage } from '../Resource/MedicationAdministration_Dosage';
import { MedicationAdministration_Performer } from '../Resource/MedicationAdministration_Performer';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum MedicationAdministrationStatusKind {
                inProgress,
notDone,
onHold,
completed,
enteredInError,
stopped,
unknown
            }

        /**
         * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. 
         */
        export class MedicationAdministration  {

            constructor() {
                this.subject = new Reference();
            }

            
                /**
                 * This is a MedicationAdministration resource
                 */
                resourceType: string = 'MedicationAdministration;'
                

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
                 * External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event. This identifier is particularly important when these records require updates.
                 */
                identifier? : Identifier[];
                

                /**
                 * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
                 */
                instantiates? : Uri[];
                

                /**
                 * Extensions for instantiates
                 */
                _instantiates? : Element[];
                

                /**
                 * A larger event of which this particular event is a component or step.
                 */
                partOf? : Reference[];
                

                /**
                 * Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
                 */
                status? : MedicationAdministrationStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Indicates where the medication is expected to be consumed or administered.
                 */
                category? : CodeableConcept;
                

                /**
                 * Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
                 */
                medicationCodeableConcept? : CodeableConcept;
                

                /**
                 * Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
                 */
                medicationReference? : Reference;
                

                /**
                 * The person or animal or group receiving the medication.
                 */
                subject : Reference;
                

                /**
                 * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
                 */
                context? : Reference;
                

                /**
                 * Additional information (for example, patient height and weight) that supports the administration of the medication.
                 */
                supportingInformation? : Reference[];
                

                /**
                 * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
                 */
                effectiveDateTime? : string;
                

                /**
                 * Extensions for effectiveDateTime
                 */
                _effectiveDateTime? : Element;
                

                /**
                 * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
                 */
                effectivePeriod? : Period;
                

                /**
                 * Indicates who or what performed the medication administration and how they were involved.
                 */
                performer? : MedicationAdministration_Performer[];
                

                /**
                 * A code indicating why the administration was not performed.
                 */
                statusReason? : CodeableConcept[];
                

                /**
                 * A code indicating why the medication was given.
                 */
                reasonCode? : CodeableConcept[];
                

                /**
                 * Condition or observation that supports why the medication was administered.
                 */
                reasonReference? : Reference[];
                

                /**
                 * The original request, instruction or authority to perform the administration.
                 */
                request? : Reference;
                

                /**
                 * The device used in administering the medication to the patient.  For example, a particular infusion pump.
                 */
                device? : Reference[];
                

                /**
                 * Extra information about the medication administration that is not conveyed by the other attributes.
                 */
                note? : Annotation[];
                

                /**
                 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
                 */
                dosage? : MedicationAdministration_Dosage;
                

                /**
                 * A summary of the events of interest that have occurred, such as when the administration was verified.
                 */
                eventHistory? : Reference[];
                
        }
        