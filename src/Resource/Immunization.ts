
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Date } from '../Scalar/Date';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Immunization_Education } from '../Resource/Immunization_Education';
import { Immunization_Performer } from '../Resource/Immunization_Performer';
import { Immunization_ProtocolApplied } from '../Resource/Immunization_ProtocolApplied';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. 
         */
        export class Immunization  {

            constructor() {
                this.VaccineCode = new CodeableConcept();
this.Patient = new Reference();
            }

            
                /**
                 * This is a Immunization resource
                 */
                ResourceType: string = 'Immunization;'
                

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
                 * A unique identifier assigned to this immunization record.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Indicates the current status of the immunization event.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Indicates the reason the immunization event was not performed.
                 */
                StatusReason? : CodeableConcept;
                

                /**
                 * Vaccine that was administered or was to be administered.
                 */
                VaccineCode : CodeableConcept;
                

                /**
                 * The patient who either received or did not receive the immunization.
                 */
                Patient : Reference;
                

                /**
                 * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
                 */
                Encounter? : Reference;
                

                /**
                 * Date vaccine administered or was to be administered.
                 */
                OccurrenceDateTime? : String;
                

                /**
                 * Extensions for occurrenceDateTime
                 */
                _occurrenceDateTime? : Element;
                

                /**
                 * Date vaccine administered or was to be administered.
                 */
                OccurrenceString? : String;
                

                /**
                 * Extensions for occurrenceString
                 */
                _occurrenceString? : Element;
                

                /**
                 * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
                 */
                Recorded? : DateTime;
                

                /**
                 * Extensions for recorded
                 */
                _recorded? : Element;
                

                /**
                 * An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded.
                 */
                PrimarySource? : Boolean;
                

                /**
                 * Extensions for primarySource
                 */
                _primarySource? : Element;
                

                /**
                 * The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine.
                 */
                ReportOrigin? : CodeableConcept;
                

                /**
                 * The service delivery location where the vaccine administration occurred.
                 */
                Location? : Reference;
                

                /**
                 * Name of vaccine manufacturer.
                 */
                Manufacturer? : Reference;
                

                /**
                 * Lot number of the  vaccine product.
                 */
                LotNumber? : String;
                

                /**
                 * Extensions for lotNumber
                 */
                _lotNumber? : Element;
                

                /**
                 * Date vaccine batch expires.
                 */
                ExpirationDate? : Date;
                

                /**
                 * Extensions for expirationDate
                 */
                _expirationDate? : Element;
                

                /**
                 * Body site where vaccine was administered.
                 */
                Site? : CodeableConcept;
                

                /**
                 * The path by which the vaccine product is taken into the body.
                 */
                Route? : CodeableConcept;
                

                /**
                 * The quantity of vaccine product that was administered.
                 */
                DoseQuantity? : Quantity;
                

                /**
                 * Indicates who performed the immunization event.
                 */
                Performer? : Array<Immunization_Performer>;
                

                /**
                 * Extra information about the immunization that is not conveyed by the other attributes.
                 */
                Note? : Array<Annotation>;
                

                /**
                 * Reasons why the vaccine was administered.
                 */
                ReasonCode? : Array<CodeableConcept>;
                

                /**
                 * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
                 */
                ReasonReference? : Array<Reference>;
                

                /**
                 * Indication if a dose is considered to be subpotent. By default, a dose should be considered to be potent.
                 */
                IsSubpotent? : Boolean;
                

                /**
                 * Extensions for isSubpotent
                 */
                _isSubpotent? : Element;
                

                /**
                 * Reason why a dose is considered to be subpotent.
                 */
                SubpotentReason? : Array<CodeableConcept>;
                

                /**
                 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
                 */
                Education? : Array<Immunization_Education>;
                

                /**
                 * Indicates a patient's eligibility for a funding program.
                 */
                ProgramEligibility? : Array<CodeableConcept>;
                

                /**
                 * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
                 */
                FundingSource? : CodeableConcept;
                

                /**
                 * The protocol (set of recommendations) being followed by the provider who administered the dose.
                 */
                ProtocolApplied? : Array<Immunization_ProtocolApplied>;
                
        }
        