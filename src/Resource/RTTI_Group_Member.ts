
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface IGroup_Member {
                
                    /**
                     * A reference to the entity that is a member of the group. Must be consistent with Group.type.
                     */
                    entity : IReference;
                    
                
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
                     * The period that the member was in the group, if known.
                     */
                    period? : IPeriod;
                    

                    /**
                     * A flag to indicate that the member is no longer in the group, but previously may have been a member.
                     */
                    inactive? : boolean;
                    

                    /**
                     * Extensions for inactive
                     */
                    _inactive? : IElement;
                    
            }
        


        export const RTTI_Group_Member: t.Type<IGroup_Member> = t.recursion( 'IGroup_Member', () =>
            t.intersection([
                
        t.type({
           entity: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
period: RTTI_Period,
inactive: t.boolean,
_inactive: RTTI_Element
        })
        
            ])
        );
        

        