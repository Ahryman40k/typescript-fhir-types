
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_ConceptMap_DependsOn, IConceptMap_DependsOn} from './RTTI_ConceptMap_DependsOn';
import { createEnumType } from '../../EnumType'

export enum ConceptMap_TargetEquivalenceKind {
                relatedto = 'relatedto',
equivalent = 'equivalent',
equal = 'equal',
wider = 'wider',
subsumes = 'subsumes',
narrower = 'narrower',
specializes = 'specializes',
inexact = 'inexact',
unmatched = 'unmatched',
disjoint = 'disjoint'
            }


            export interface IConceptMap_Target {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Identity (code or path) or the element/item that the map refers to.
                     */
                    code? : string;
                    

                    /**
                     * Extensions for code
                     */
                    _code? : IElement;
                    

                    /**
                     * The display for the code. The display is only provided to help editors when editing the concept map.
                     */
                    display? : string;
                    

                    /**
                     * Extensions for display
                     */
                    _display? : IElement;
                    

                    /**
                     * The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).
                     */
                    equivalence? : ConceptMap_TargetEquivalenceKind;
                    

                    /**
                     * Extensions for equivalence
                     */
                    _equivalence? : IElement;
                    

                    /**
                     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
                     */
                    comment? : string;
                    

                    /**
                     * Extensions for comment
                     */
                    _comment? : IElement;
                    

                    /**
                     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
                     */
                    dependsOn? : IConceptMap_DependsOn[];
                    

                    /**
                     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
                     */
                    product? : IConceptMap_DependsOn[];
                    
            }
        


        export const RTTI_ConceptMap_Target: t.Type<IConceptMap_Target> = t.recursion( 'IConceptMap_Target', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
display: t.string,
_display: RTTI_Element,
equivalence: createEnumType<ConceptMap_TargetEquivalenceKind>(ConceptMap_TargetEquivalenceKind, 'ConceptMap_TargetEquivalenceKind'),
_equivalence: RTTI_Element,
comment: t.string,
_comment: RTTI_Element,
dependsOn: t.array(RTTI_ConceptMap_DependsOn),
product: t.array(RTTI_ConceptMap_DependsOn)
        })
        
        );
        

        