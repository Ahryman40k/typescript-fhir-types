
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export enum Linkage_ItemTypeKind {
                source = 'source',
alternate = 'alternate',
historical = 'historical'
            }
const Linkage_ItemTypeKindKeys = t.keyof({
                [Linkage_ItemTypeKind.source]: null,
[Linkage_ItemTypeKind.alternate]: null,
[Linkage_ItemTypeKind.historical]: null
            });


            export interface ILinkage_Item {
                
                    /**
                     * The resource instance being linked as part of the group.
                     */
                    resource : IReference;
                    
                
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
                     * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
                     */
                    type? : Linkage_ItemTypeKind;
                    

                    /**
                     * Extensions for type
                     */
                    _type? : IElement;
                    
            }
        


        export const RTTI_Linkage_Item: t.Type<ILinkage_Item> = t.recursion( 'ILinkage_Item', () =>
            t.intersection([
                
        t.type({
           resource: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Linkage_ItemTypeKindKeys,
_type: RTTI_Element
        })
        
            ])
        );
        

        