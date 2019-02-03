
        import { Canonical } from '../Scalar/Canonical';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Uri } from '../Scalar/Uri';

        export enum ElementDefinition_TypeAggregationKind {
                contained,
referenced,
bundled
            }
export enum ElementDefinition_TypeVersioningKind {
                either,
independent,
specific
            }

        /**
         * Captures constraints on each element within the resource, profile, or extension. 
         */
        export class ElementDefinition_Type  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.
                 */
                Code? : Uri;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * Identifies a profile structure or implementation Guide that applies to the datatype this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the type SHALL conform to at least one profile defined in the implementation guide.
                 */
                Profile? : Array<Canonical>;
                

                /**
                 * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
                 */
                TargetProfile? : Array<Canonical>;
                

                /**
                 * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
                 */
                Aggregation? : ElementDefinition_TypeAggregationKind[];
                

                /**
                 * Extensions for aggregation
                 */
                _aggregation? : Array<Element>;
                

                /**
                 * Whether this reference needs to be version specific or version independent, or whether either can be used.
                 */
                Versioning? : ElementDefinition_TypeVersioningKind;
                

                /**
                 * Extensions for versioning
                 */
                _versioning? : Element;
                
        }
        