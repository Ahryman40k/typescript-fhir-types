
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { EntryDefinition_RelatedEntry } from '../Resource/EntryDefinition_RelatedEntry';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum EntryDefinitionStatusKind {
                draft,
active,
retired,
unknown
            }

        /**
         * Catalog entries are wrappers that contextualize items included in a catalog. 
         */
        export class EntryDefinition  {

            constructor() {
                this.ReferencedItem = new Reference();
            }

            
                /**
                 * This is a EntryDefinition resource
                 */
                ResourceType: string = 'EntryDefinition;'
                

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
                 * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The type of item - medication, device, service, protocol or other.
                 */
                Type? : CodeableConcept;
                

                /**
                 * Whether the entry represents an orderable item.
                 */
                Orderable? : Boolean;
                

                /**
                 * Extensions for orderable
                 */
                _orderable? : Element;
                

                /**
                 * The item in a catalog or definition.
                 */
                ReferencedItem : Reference;
                

                /**
                 * Used in supporting related concepts, e.g. NDC to RxNorm.
                 */
                AdditionalIdentifier? : Array<Identifier>;
                

                /**
                 * Classes of devices, or ATC for medication.
                 */
                Classification? : Array<CodeableConcept>;
                

                /**
                 * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
                 */
                Status? : EntryDefinitionStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The time period in which this catalog entry is expected to be active.
                 */
                ValidityPeriod? : Period;
                

                /**
                 * Typically date of issue is different from the beginning of the validity. This can be used to see when an item was last updated.
                 */
                LastUpdated? : DateTime;
                

                /**
                 * Extensions for lastUpdated
                 */
                _lastUpdated? : Element;
                

                /**
                 * Used for examplefor Out of Formulary, or any specifics.
                 */
                AdditionalCharacteristic? : Array<CodeableConcept>;
                

                /**
                 * User for example for ATC classification, or.
                 */
                AdditionalClassification? : Array<CodeableConcept>;
                

                /**
                 * Used for example, to point to a substance, or to a device used to administer a medication.
                 */
                RelatedEntry? : Array<EntryDefinition_RelatedEntry>;
                
        }
        