
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Date } from '../Scalar/Date';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Timing } from '../Resource/Timing';
import { Uri } from '../Scalar/Uri';
import { VerificationResult_Attestation } from '../Resource/VerificationResult_Attestation';
import { VerificationResult_PrimarySource } from '../Resource/VerificationResult_PrimarySource';
import { VerificationResult_Validator } from '../Resource/VerificationResult_Validator';

        

        /**
         * Describes validation requirements, source(s), status and dates for one or more elements. 
         */
        export class VerificationResult  {

            constructor() {
                
            }

            
                /**
                 * This is a VerificationResult resource
                 */
                resourceType: string = 'VerificationResult;'
                

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
                 * A resource that was validated.
                 */
                target? : Reference[];
                

                /**
                 * The fhirpath location(s) within the resource that was validated.
                 */
                targetLocation? : String[];
                

                /**
                 * Extensions for targetLocation
                 */
                _targetLocation? : Element[];
                

                /**
                 * The frequency with which the target must be validated (none; initial; periodic).
                 */
                need? : CodeableConcept;
                

                /**
                 * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
                 */
                status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * When the validation status was updated.
                 */
                statusDate? : DateTime;
                

                /**
                 * Extensions for statusDate
                 */
                _statusDate? : Element;
                

                /**
                 * What the target is validated against (nothing; primary source; multiple sources).
                 */
                validationType? : CodeableConcept;
                

                /**
                 * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
                 */
                validationProcess? : CodeableConcept[];
                

                /**
                 * Frequency of revalidation.
                 */
                frequency? : Timing;
                

                /**
                 * The date/time validation was last completed (incl. failed validations).
                 */
                lastPerformed? : DateTime;
                

                /**
                 * Extensions for lastPerformed
                 */
                _lastPerformed? : Element;
                

                /**
                 * The date when target is next validated, if appropriate.
                 */
                nextScheduled? : Date;
                

                /**
                 * Extensions for nextScheduled
                 */
                _nextScheduled? : Element;
                

                /**
                 * The result if validation fails (fatal; warning; record only; none).
                 */
                failureAction? : CodeableConcept;
                

                /**
                 * Information about the primary source(s) involved in validation.
                 */
                primarySource? : VerificationResult_PrimarySource[];
                

                /**
                 * Information about the entity attesting to information.
                 */
                attestation? : VerificationResult_Attestation;
                

                /**
                 * Information about the entity validating information.
                 */
                validator? : VerificationResult_Validator[];
                
        }
        