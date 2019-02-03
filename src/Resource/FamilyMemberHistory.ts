
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
                this.Patient = new Reference();
this.Relationship = new CodeableConcept();
            }

            
                /**
                 * This is a FamilyMemberHistory resource
                 */
                ResourceType: string = 'FamilyMemberHistory;'
                

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
                 * Business identifiers assigned to this family member history by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
                 */
                InstantiatesCanonical? : Array<Canonical>;
                

                /**
                 * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
                 */
                InstantiatesUri? : Array<Uri>;
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Array<Element>;
                

                /**
                 * A code specifying the status of the record of the family history of a specific family member.
                 */
                Status? : FamilyMemberHistoryStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Describes why the family member's history is not available.
                 */
                DataAbsentReason? : CodeableConcept;
                

                /**
                 * The person who this history concerns.
                 */
                Patient : Reference;
                

                /**
                 * The date (and possibly time) when the family member history was recorded or last updated.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * The type of relationship this person has to the patient (father, mother, brother etc.).
                 */
                Relationship : CodeableConcept;
                

                /**
                 * The birth sex of the family member.
                 */
                Gender? : CodeableConcept;
                

                /**
                 * The actual or approximate date of birth of the relative.
                 */
                BornPeriod? : Period;
                

                /**
                 * The actual or approximate date of birth of the relative.
                 */
                BornDate? : String;
                

                /**
                 * Extensions for bornDate
                 */
                _bornDate? : Element;
                

                /**
                 * The actual or approximate date of birth of the relative.
                 */
                BornString? : String;
                

                /**
                 * Extensions for bornString
                 */
                _bornString? : Element;
                

                /**
                 * The age of the relative at the time the family member history is recorded.
                 */
                AgeAge? : Age;
                

                /**
                 * The age of the relative at the time the family member history is recorded.
                 */
                AgeRange? : Range;
                

                /**
                 * The age of the relative at the time the family member history is recorded.
                 */
                AgeString? : String;
                

                /**
                 * Extensions for ageString
                 */
                _ageString? : Element;
                

                /**
                 * If true, indicates that the age value specified is an estimated value.
                 */
                EstimatedAge? : Boolean;
                

                /**
                 * Extensions for estimatedAge
                 */
                _estimatedAge? : Element;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                DeceasedBoolean? : Boolean;
                

                /**
                 * Extensions for deceasedBoolean
                 */
                _deceasedBoolean? : Element;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                DeceasedAge? : Age;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                DeceasedRange? : Range;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                DeceasedDate? : String;
                

                /**
                 * Extensions for deceasedDate
                 */
                _deceasedDate? : Element;
                

                /**
                 * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
                 */
                DeceasedString? : String;
                

                /**
                 * Extensions for deceasedString
                 */
                _deceasedString? : Element;
                

                /**
                 * Describes why the family member history occurred in coded or textual form.
                 */
                ReasonCode? : Array<CodeableConcept>;
                

                /**
                 * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
                 */
                ReasonReference? : Array<Reference>;
                

                /**
                 * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
                 */
                Note? : Array<Annotation>;
                

                /**
                 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
                 */
                Condition? : Array<FamilyMemberHistory_Condition>;
                
        }
        