
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { MarketingStatus } from '../Resource/MarketingStatus';
import { MedicinalProduct_ManufacturingBusinessOperation } from '../Resource/MedicinalProduct_ManufacturingBusinessOperation';
import { MedicinalProduct_Name } from '../Resource/MedicinalProduct_Name';
import { MedicinalProduct_SpecialDesignation } from '../Resource/MedicinalProduct_SpecialDesignation';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). 
         */
        export class MedicinalProduct  {

            constructor() {
                this.Name = new Array<MedicinalProduct_Name>();
            }

            
                /**
                 * This is a MedicinalProduct resource
                 */
                ResourceType: string = 'MedicinalProduct;'
                

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
                 * Business idenfifier for this product. Could be an MPID.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Regulatory type, e.g. Investigational or Authorized.
                 */
                Type? : CodeableConcept;
                

                /**
                 * If this medicine applies to human or veterinary uses.
                 */
                Domain? : Coding;
                

                /**
                 * The dose form for a single part product, or combined form of a multiple part product.
                 */
                CombinedPharmaceuticalDoseForm? : CodeableConcept;
                

                /**
                 * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
                 */
                AdditionalMonitoringIndicator? : CodeableConcept;
                

                /**
                 * Whether the Medicinal Product is subject to special measures for regulatory reasons.
                 */
                SpecialMeasures? : Array<String>;
                

                /**
                 * Extensions for specialMeasures
                 */
                _specialMeasures? : Array<Element>;
                

                /**
                 * If authorised for use in children.
                 */
                PaediatricUseIndicator? : CodeableConcept;
                

                /**
                 * Allows the product to be classified by various systems.
                 */
                ProductClassification? : Array<CodeableConcept>;
                

                /**
                 * Marketing status of the medicinal product, in contrast to marketing authorizaton.
                 */
                MarketingStatus? : Array<MarketingStatus>;
                

                /**
                 * Product regulatory authorization.
                 */
                MarketingAuthorization? : Reference;
                

                /**
                 * Package representation for the product.
                 */
                PackagedMedicinalProduct? : Array<Reference>;
                

                /**
                 * Pharmaceutical aspects of product.
                 */
                PharmaceuticalProduct? : Array<Reference>;
                

                /**
                 * Clinical contraindications, reasons for not giving this.
                 */
                Contraindication? : Array<Reference>;
                

                /**
                 * Clinical interactions with other medications or substances.
                 */
                Interaction? : Array<Reference>;
                

                /**
                 * Clinical reason for use.
                 */
                TherapeuticIndication? : Array<Reference>;
                

                /**
                 * Potential clinical unwanted effects of use.
                 */
                UndesirableEffect? : Array<Reference>;
                

                /**
                 * Supporting documentation, typically for regulatory submission.
                 */
                AttachedDocument? : Array<Reference>;
                

                /**
                 * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
                 */
                MasterFile? : Array<Reference>;
                

                /**
                 * A product specific contact, person (in a role), or an organization.
                 */
                Contact? : Array<Reference>;
                

                /**
                 * Clinical trials or studies that this product is involved in.
                 */
                ClinicalTrial? : Array<Reference>;
                

                /**
                 * The product's name, including full name and possibly coded parts.
                 */
                Name : Array<MedicinalProduct_Name>;
                

                /**
                 * Reference to another product, e.g. for linking authorised to investigational product.
                 */
                CrossReference? : Array<Identifier>;
                

                /**
                 * An operation applied to the product, for manufacturing or adminsitrative purpose.
                 */
                ManufacturingBusinessOperation? : Array<MedicinalProduct_ManufacturingBusinessOperation>;
                

                /**
                 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
                 */
                SpecialDesignation? : Array<MedicinalProduct_SpecialDesignation>;
                
        }
        