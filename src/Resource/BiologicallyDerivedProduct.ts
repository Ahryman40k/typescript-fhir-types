
        import { BiologicallyDerivedProduct_Collection } from '../Resource/BiologicallyDerivedProduct_Collection';
import { BiologicallyDerivedProduct_Manipulation } from '../Resource/BiologicallyDerivedProduct_Manipulation';
import { BiologicallyDerivedProduct_Processing } from '../Resource/BiologicallyDerivedProduct_Processing';
import { BiologicallyDerivedProduct_Storage } from '../Resource/BiologicallyDerivedProduct_Storage';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Integer } from '../Scalar/Integer';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum BiologicallyDerivedProductProductCategoryKind {
                organ,
tissue,
fluid,
cells,
biologicalAgent
            }
export enum BiologicallyDerivedProductStatusKind {
                available,
unavailable
            }

        /**
         * A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. 
         */
        export class BiologicallyDerivedProduct  {

            constructor() {
                
            }

            
                /**
                 * This is a BiologicallyDerivedProduct resource
                 */
                ResourceType: string = 'BiologicallyDerivedProduct;'
                

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
                 * This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Broad category of this product.
                 */
                ProductCategory? : BiologicallyDerivedProductProductCategoryKind;
                

                /**
                 * Extensions for productCategory
                 */
                _productCategory? : Element;
                

                /**
                 * A code that identifies the kind of this biologically derived product (SNOMED Ctcode).
                 */
                ProductCode? : CodeableConcept;
                

                /**
                 * Whether the product is currently available.
                 */
                Status? : BiologicallyDerivedProductStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Procedure request to obtain this biologically derived product.
                 */
                Request? : Array<Reference>;
                

                /**
                 * Number of discrete units within this product.
                 */
                Quantity? : Integer;
                

                /**
                 * Extensions for quantity
                 */
                _quantity? : Element;
                

                /**
                 * Parent product (if any).
                 */
                Parent? : Reference;
                

                /**
                 * How this product was collected.
                 */
                Collection? : BiologicallyDerivedProduct_Collection;
                

                /**
                 * Any processing of the product during collection.
                 */
                Processing? : Array<BiologicallyDerivedProduct_Processing>;
                

                /**
                 * Any manipulation of product post-collection.
                 */
                Manipulation? : BiologicallyDerivedProduct_Manipulation;
                

                /**
                 * Product storage.
                 */
                Storage? : Array<BiologicallyDerivedProduct_Storage>;
                
        }
        