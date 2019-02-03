
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { MedicinalProductAuthorization_JurisdictionalAuthorization } from '../Resource/MedicinalProductAuthorization_JurisdictionalAuthorization';
import { MedicinalProductAuthorization_Procedure } from '../Resource/MedicinalProductAuthorization_Procedure';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * The regulatory authorization of a medicinal product. 
         */
        export class MedicinalProductAuthorization  {

            constructor() {
                
            }

            
                /**
                 * This is a MedicinalProductAuthorization resource
                 */
                ResourceType: string = 'MedicinalProductAuthorization;'
                

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
                 * Business identifier for the marketing authorization, as assigned by a regulator.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The medicinal product that is being authorized.
                 */
                Subject? : Reference;
                

                /**
                 * The country in which the marketing authorization has been granted.
                 */
                Country? : Array<CodeableConcept>;
                

                /**
                 * Jurisdiction within a country.
                 */
                Jurisdiction? : Array<CodeableConcept>;
                

                /**
                 * The legal status of supply of the medicinal product as classified by the regulator.
                 */
                LegalStatusOfSupply? : CodeableConcept;
                

                /**
                 * The status of the marketing authorization.
                 */
                Status? : CodeableConcept;
                

                /**
                 * The date at which the given status has become applicable.
                 */
                StatusDate? : DateTime;
                

                /**
                 * Extensions for statusDate
                 */
                _statusDate? : Element;
                

                /**
                 * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
                 */
                RestoreDate? : DateTime;
                

                /**
                 * Extensions for restoreDate
                 */
                _restoreDate? : Element;
                

                /**
                 * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
                 */
                ValidityPeriod? : Period;
                

                /**
                 * A period of time after authorization before generic product applicatiosn can be submitted.
                 */
                DataExclusivityPeriod? : Period;
                

                /**
                 * The date when the first authorization was granted by a Medicines Regulatory Agency.
                 */
                DateOfFirstAuthorization? : DateTime;
                

                /**
                 * Extensions for dateOfFirstAuthorization
                 */
                _dateOfFirstAuthorization? : Element;
                

                /**
                 * Date of first marketing authorization for a company's new medicinal product in any country in the World.
                 */
                InternationalBirthDate? : DateTime;
                

                /**
                 * Extensions for internationalBirthDate
                 */
                _internationalBirthDate? : Element;
                

                /**
                 * The legal framework against which this authorization is granted.
                 */
                LegalBasis? : CodeableConcept;
                

                /**
                 * Authorization in areas within a country.
                 */
                JurisdictionalAuthorization? : Array<MedicinalProductAuthorization_JurisdictionalAuthorization>;
                

                /**
                 * Marketing Authorization Holder.
                 */
                Holder? : Reference;
                

                /**
                 * Medicines Regulatory Agency.
                 */
                Regulator? : Reference;
                

                /**
                 * The regulatory procedure for granting or amending a marketing authorization.
                 */
                Procedure? : MedicinalProductAuthorization_Procedure;
                
        }
        