
        import { Age } from '../Resource/Age';
import { Annotation } from '../Resource/Annotation';
import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { FamilyMemberHistory_Condition } from '../Resource/FamilyMemberHistory_Condition';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Range } from '../Resource/Range';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum FamilyMemberHistoryStatusKind {
                partial,
completed,
enteredInError,
healthUnknown
            }

        /**
         * Significant health conditions for a person related to the patient relevant in the context of care for the patient. 
         */
        export class FamilyMemberHistory  {

            constructor() {
                this.patient = new Reference();
this.relationship = new CodeableConcept();
            }

            
                /**
                 * This is a FamilyMemberHistory resource
                 */
                resourceType: string = 'FamilyMemberHistory;'
                

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
                 * Business identifiers assigned to this family member history by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                identifier? : Identifier[];
                

                /**
                 * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
                 */
                instantiatesCanonical? : Canonical[];
                

                /**
                 * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
                 */
                instantiatesUri? : Uri[];
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Element[];
                

                /**
                 * A code specifying the status of the record of the family history of a specific family member.
                 */
                status? : FamilyMemberHistoryStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Describes why the family member's history is not available.
                 */
                dataAbsentReason? : CodeableConcept;
                

                /**
                 * The person who this history concerns.
                 */
                patient : Reference;
                

                /**
                 * The date (and possibly time) when the family member history was recorded or last updated.
                 */
                date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * The type of relationship this person has to the patient (father, mother, brother etc.).
                 */
                relationship : CodeableConcept;
                

                /**
                 * The birth sex of the family member.
                 */
                gender? : CodeableConcept;
                

                /**
                 * The actual or approximate date of birth of the relative.
                 */
                bornPeriod? : Period;
                

                /**
                 * The actual or approximate date of birth of the relative.
                 */
                bornDate? : string;
                

                /**
                 * Extensions for bornDate
                 */
                _bornDate? : Element;
                

                /**
                 * The actual or approximate date of birth of the relative.
                 */
                bornString? : string;
                

                /**
                 * Extensions for bornString
                 */
                _bornString? : Element;
                

                /**
                 * The age of the relative at the time the family member history is recorded.
                 */
                ageAge? : Age;
                

                /**
                 * The age of the relative at the time the family member history is recorded.
                 */
                ageRange? : Range;
                

                /**
                 * The age of the relative at the time the family member history is recorded.
                 */
                ageString? : string;
                

                /**
                 * Extensions for ageString
                 */
                _ageString? : Element;
                

                /**
                 * If true, indicates that the age value specified is an estimated value.
                 */
                estimatedAge? : boolean;
                

                /**
                 * Extensions for estimatedAge
                 */
                _estimatedAge? : Element;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                deceasedBoolean? : boolean;
                

                /**
                 * Extensions for deceasedBoolean
                 */
                _deceasedBoolean? : Element;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                deceasedAge? : Age;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                deceasedRange? : Range;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                deceasedDate? : string;
                

                /**
                 * Extensions for deceasedDate
                 */
                _deceasedDate? : Element;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                deceasedString? : string;
                

                /**
                 * Extensions for deceasedString
                 */
                _deceasedString? : Element;
                

                /**
                 * Describes why the family member history occurred in coded or textual form.
                 */
                reasonCode? : CodeableConcept[];
                

                /**
                 * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
                 */
                reasonReference? : Reference[];
                

                /**
                 * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
                 */
                note? : Annotation[];
                

                /**
                 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
                 */
                condition? : FamilyMemberHistory_Condition[];
                
        }
        