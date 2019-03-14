
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum DataRequirement_SortDirectionKind {
                ascending = 'ascending',
descending = 'descending'
            }
const DataRequirement_SortDirectionKindKeys = t.keyof({
                [DataRequirement_SortDirectionKind.ascending]: null,
[DataRequirement_SortDirectionKind.descending]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
path: t.string,
_path: RTTI_Element,
direction: DataRequirement_SortDirectionKindKeys,
_direction: RTTI_Element
        });
        

        export var RTTI_DataRequirement_Sort:any = t.intersection([mandatory, partial]);
        

export type IDataRequirement_Sort = t.TypeOf<typeof RTTI_DataRequirement_Sort>;
        
        