
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

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


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
mode: Bundle_SearchModeKindKeys,
_mode: RTTI_Element,
score: t.number,
_score: RTTI_Element
        });
        

        export var RTTI_Bundle_Search:any = t.intersection([mandatory, partial]);
        

export type IBundle_Search = t.TypeOf<typeof RTTI_Bundle_Search>;
        
        