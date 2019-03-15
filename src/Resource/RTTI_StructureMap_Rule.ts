
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_StructureMap_Source, IStructureMap_Source} from './RTTI_StructureMap_Source';
import {RTTI_StructureMap_Target, IStructureMap_Target} from './RTTI_StructureMap_Target';
import {RTTI_StructureMap_Dependent, IStructureMap_Dependent} from './RTTI_StructureMap_Dependent';




            export interface IStructureMap_Rule {
                
                    /**
                     * Source inputs to the mapping.
                     */
                    source : IStructureMap_Source[];
                    
                
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
                     * Name of the rule for internal references.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * Content to create because of this mapping rule.
                     */
                    target? : IStructureMap_Target[];
                    

                    /**
                     * Rules contained in this rule.
                     */
                    rule? : IStructureMap_Rule[];
                    

                    /**
                     * Which other rules to apply in the context of this rule.
                     */
                    dependent? : IStructureMap_Dependent[];
                    

                    /**
                     * Documentation for this instance of data.
                     */
                    documentation? : string;
                    

                    /**
                     * Extensions for documentation
                     */
                    _documentation? : IElement;
                    
            }
        


        export const RTTI_StructureMap_Rule: t.Type<IStructureMap_Rule> = t.recursion( 'IStructureMap_Rule', () =>
            t.intersection([
                
        t.type({
           source: t.array(RTTI_StructureMap_Source)
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
target: t.array(RTTI_StructureMap_Target),
rule: t.array(RTTI_StructureMap_Rule),
dependent: t.array(RTTI_StructureMap_Dependent),
documentation: t.string,
_documentation: RTTI_Element
        })
        
            ])
        );
        

        