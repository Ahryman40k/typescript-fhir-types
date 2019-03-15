
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';


export enum ElementDefinition_TypeAggregationKind {
                contained = 'contained',
referenced = 'referenced',
bundled = 'bundled'
            }
export enum ElementDefinition_TypeVersioningKind {
                either = 'either',
independent = 'independent',
specific = 'specific'
            }
const ElementDefinition_TypeAggregationKindKeys = t.keyof({
                [ElementDefinition_TypeAggregationKind.contained]: null,
[ElementDefinition_TypeAggregationKind.referenced]: null,
[ElementDefinition_TypeAggregationKind.bundled]: null
            });
const ElementDefinition_TypeVersioningKindKeys = t.keyof({
                [ElementDefinition_TypeVersioningKind.either]: null,
[ElementDefinition_TypeVersioningKind.independent]: null,
[ElementDefinition_TypeVersioningKind.specific]: null
            });


            export interface IElementDefinition_Type {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.
                     */
                    code? : string;
                    

                    /**
                     * Extensions for code
                     */
                    _code? : IElement;
                    

                    /**
                     * Identifies a profile structure or implementation Guide that applies to the datatype this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the type SHALL conform to at least one profile defined in the implementation guide.
                     */
                    profile? : string[];
                    

                    /**
                     * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
                     */
                    targetProfile? : string[];
                    

                    /**
                     * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
                     */
                    aggregation? : ElementDefinition_TypeAggregationKind[];
                    

                    /**
                     * Extensions for aggregation
                     */
                    _aggregation? : IElement[];
                    

                    /**
                     * Whether this reference needs to be version specific or version independent, or whether either can be used.
                     */
                    versioning? : ElementDefinition_TypeVersioningKind;
                    

                    /**
                     * Extensions for versioning
                     */
                    _versioning? : IElement;
                    
            }
        


        export const RTTI_ElementDefinition_Type: t.Type<IElementDefinition_Type> = t.recursion( 'IElementDefinition_Type', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
profile: t.array(t.string),
targetProfile: t.array(t.string),
aggregation: t.array(ElementDefinition_TypeAggregationKindKeys),
_aggregation: t.array(RTTI_Element),
versioning: ElementDefinition_TypeVersioningKindKeys,
_versioning: RTTI_Element
        })
        
        );
        

        