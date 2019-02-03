
        import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { MedicinalProductClinicals_Contraindication } from '../Resource/MedicinalProductClinicals_Contraindication';
import { MedicinalProductClinicals_Interactions } from '../Resource/MedicinalProductClinicals_Interactions';
import { MedicinalProductClinicals_TherapeuticIndication } from '../Resource/MedicinalProductClinicals_TherapeuticIndication';
import { MedicinalProductClinicals_UndesirableEffects } from '../Resource/MedicinalProductClinicals_UndesirableEffects';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. 
         */
        export class MedicinalProductClinicals  {

            constructor() {
                this.TherapeuticIndication = new Array<MedicinalProductClinicals_TherapeuticIndication>();
            }

            
                /**
                 * This is a MedicinalProductClinicals resource
                 */
                ResourceType: string = 'MedicinalProductClinicals;'
                

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
                 * Describe the undesirable effects of the medicinal product.
                 */
                UndesirableEffects? : Array<MedicinalProductClinicals_UndesirableEffects>;
                

                /**
                 * Indication for the Medicinal Product.
                 */
                TherapeuticIndication : Array<MedicinalProductClinicals_TherapeuticIndication>;
                

                /**
                 * Contraindication for the medicinal product.
                 */
                Contraindication? : Array<MedicinalProductClinicals_Contraindication>;
                

                /**
                 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
                 */
                Interactions? : Array<MedicinalProductClinicals_Interactions>;
                
        }
        