
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

        

        /**
         * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. 
         */
        export class ImmunizationEvaluation  {

            constructor() {
                this.Patient = new Reference();
this.TargetDisease = new CodeableConcept();
this.ImmunizationEvent = new Reference();
this.DoseStatus = new CodeableConcept();
            }

            
                /**
                 * This is a ImmunizationEvaluation resource
                 */
                ResourceType: string = 'ImmunizationEvaluation;'
                

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
                 * A unique identifier assigned to this immunization evaluation record.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Indicates the current status of the evaluation of the vaccination administration event.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The individual for whom the evaluation is being done.
                 */
                Patient : Reference;
                

                /**
                 * The date the evaluation of the vaccine administration event was performed.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * Indicates the authority who published the protocol (e.g. ACIP).
                 */
                Authority? : Reference;
                

                /**
                 * The vaccine preventable disease the dose is being evaluated against.
                 */
                TargetDisease : CodeableConcept;
                

                /**
                 * The vaccine administration event being evaluated.
                 */
                ImmunizationEvent : Reference;
                

                /**
                 * Indicates if the dose is valid or not valid with respect to the published recommendations.
                 */
                DoseStatus : CodeableConcept;
                

                /**
                 * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
                 */
                DoseStatusReason? : Array<CodeableConcept>;
                

                /**
                 * Additional information about the evaluation.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * One possible path to achieve presumed immunity against a disease - within the context of an authority.
                 */
                Series? : String;
                

                /**
                 * Extensions for series
                 */
                _series? : Element;
                

                /**
                 * Nominal position in a series.
                 */
                DoseNumberPositiveInt? : Number;
                

                /**
                 * Extensions for doseNumberPositiveInt
                 */
                _doseNumberPositiveInt? : Element;
                

                /**
                 * Nominal position in a series.
                 */
                DoseNumberString? : String;
                

                /**
                 * Extensions for doseNumberString
                 */
                _doseNumberString? : Element;
                

                /**
                 * The recommended number of doses to achieve immunity.
                 */
                SeriesDosesPositiveInt? : Number;
                

                /**
                 * Extensions for seriesDosesPositiveInt
                 */
                _seriesDosesPositiveInt? : Element;
                

                /**
                 * The recommended number of doses to achieve immunity.
                 */
                SeriesDosesString? : String;
                

                /**
                 * Extensions for seriesDosesString
                 */
                _seriesDosesString? : Element;
                
        }
        