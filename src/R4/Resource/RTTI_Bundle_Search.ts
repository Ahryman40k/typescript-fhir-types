
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

export enum Bundle_SearchModeKind {
                match = 'match',
include = 'include',
outcome = 'outcome'
            }
const Bundle_SearchModeKindKeys = t.keyof({
                [Bundle_SearchModeKind.match]: null,
[Bundle_SearchModeKind.include]: null,
[Bundle_SearchModeKind.outcome]: null
            });


            export interface IBundle_Search {
                
                
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
                     * Why this entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
                     */
                    mode? : Bundle_SearchModeKind;
                    

                    /**
                     * Extensions for mode
                     */
                    _mode? : IElement;
                    

                    /**
                     * When searching, the server's search ranking score for the entry.
                     */
                    score? : number;
                    

                    /**
                     * Extensions for score
                     */
                    _score? : IElement;
                    
            }
        


        export const RTTI_Bundle_Search: t.Type<IBundle_Search> = t.recursion( 'IBundle_Search', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
mode: Bundle_SearchModeKindKeys,
_mode: RTTI_Element,
score: t.number,
_score: RTTI_Element
        })
        
        );
        

        