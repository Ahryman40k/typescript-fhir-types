
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { MedicinalProductIndication_OtherTherapy } from '../Resource/MedicinalProductIndication_OtherTherapy';
import { MedicinalProductIndication_Population } from '../Resource/MedicinalProductIndication_Population';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * Indication for the Medicinal Product. 
         */
        export class MedicinalProductIndication  {

            constructor() {
                
            }

            
                /**
                 * This is a MedicinalProductIndication resource
                 */
                resourceType: string = 'MedicinalProductIndication;'
                

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
                 * The medication for which this is an indication.
                 */
                subject? : Reference[];
                

                /**
                 * The disease, symptom or procedure that is the indication for treatment.
                 */
                diseaseSymptomProcedure? : CodeableConcept;
                

                /**
                 * The status of the disease or symptom for which the indication applies.
                 */
                diseaseStatus? : CodeableConcept;
                

                /**
                 * Comorbidity (concurrent condition) or co-infection as part of the indication.
                 */
                comorbidity? : CodeableConcept[];
                

                /**
                 * The intended effect, aim or strategy to be achieved by the indication.
                 */
                intendedEffect? : CodeableConcept;
                

                /**
                 * Timing or duration information as part of the indication.
                 */
                duration? : Quantity;
                

                /**
                 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
                 */
                otherTherapy? : MedicinalProductIndication_OtherTherapy[];
                

                /**
                 * Describe the undesirable effects of the medicinal product.
                 */
                undesirableEffect? : Reference[];
                

                /**
                 * The population group to which this applies.
                 */
                population? : MedicinalProductIndication_Population[];
                
        }
        