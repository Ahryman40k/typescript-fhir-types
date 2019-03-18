
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_ValueSet_Include, IValueSet_Include} from './RTTI_ValueSet_Include';




            export interface IValueSet_Compose {
                
                    /**
                     * Include one or more codes from a code system or other value set(s).
                     */
                    include : IValueSet_Include[];
                    
                
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
                     * If a locked date is defined, then the Content Logical Definition must be evaluated using the current version as of the locked date for referenced code system(s) and value set instances where ValueSet.compose.include.version is not defined.
                     */
                    lockedDate? : string;
                    

                    /**
                     * Extensions for lockedDate
                     */
                    _lockedDate? : IElement;
                    

                    /**
                     * Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable $expand parameters (but generally, inactive codes would be expected to be included).
                     */
                    inactive? : boolean;
                    

                    /**
                     * Extensions for inactive
                     */
                    _inactive? : IElement;
                    

                    /**
                     * Exclude one or more codes from the value set based on code system filters and/or other value sets.
                     */
                    exclude? : IValueSet_Include[];
                    
            }
        


        export const RTTI_ValueSet_Compose: t.Type<IValueSet_Compose> = t.recursion( 'IValueSet_Compose', () =>
            t.intersection([
                
        t.type({
           include: t.array(RTTI_ValueSet_Include)
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
lockedDate: t.string,
_lockedDate: RTTI_Element,
inactive: t.boolean,
_inactive: RTTI_Element,
exclude: t.array(RTTI_ValueSet_Include)
        })
        
            ])
        );
        

        